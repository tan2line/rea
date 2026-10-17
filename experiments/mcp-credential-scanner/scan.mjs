// Scan driver: REA Evidence (provenance backbone) + scanner effect pass + npm metadata.
import { spawnSync } from "node:child_process";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { scanPackage } from "./effects.mjs";
import { grade } from "./credential.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const REA = resolve(here, "../../scripts/rea.mjs");
const [targetsDir, metaDir, outDir, ...only] = process.argv.slice(2);
if (!targetsDir || !metaDir || !outDir) {
  console.error(
    "usage: scan.mjs <targets/pkgs> <meta dir> <results dir> [package-dir-name...]",
  );
  process.exit(2);
}
mkdirSync(join(outDir, "evidence"), { recursive: true });
mkdirSync(join(outDir, "profiles"), { recursive: true });

const dirs = (only.length ? only : readdirSync(targetsDir)).filter((d) =>
  existsSync(join(targetsDir, d, "package", "package.json")),
);
for (const d of dirs) {
  const pkgRoot = join(targetsDir, d, "package");
  const t0 = Date.now();
  const pkgJson = JSON.parse(
    readFileSync(join(pkgRoot, "package.json"), "utf8"),
  );
  let meta = null;
  const metaPath = join(metaDir, `${d}.json`);
  if (existsSync(metaPath)) meta = JSON.parse(readFileSync(metaPath, "utf8"));

  // 1. REA Evidence.
  const evidencePath = join(outDir, "evidence", `${d}.json`);
  let rea;
  const r = spawnSync(
    process.execPath,
    [REA, "analyze-javascript-application", pkgRoot, "--json"],
    {
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 1024,
      timeout: 15 * 60 * 1000,
    },
  );
  if (r.status === 0 && r.stdout.trim().startsWith("{")) {
    writeFileSync(evidencePath, r.stdout);
    const ev = JSON.parse(r.stdout);
    const nr = ev.normalized_result;
    const external = nr.graph.nodes
      .filter(
        (n) =>
          n.kind === "javascript-module" &&
          String(n.identity?.key ?? "").startsWith("external:"),
      )
      .map((n) => n.identity.key.slice("external:".length))
      .sort();
    const semKinds = {};
    for (const n of nr.semantic_graph?.nodes ?? [])
      semKinds[n.kind] = (semKinds[n.kind] ?? 0) + 1;
    rea = {
      status: "complete",
      evidence_id: ev.evidence_id,
      subject_sha256: ev.subject?.digest?.sha256,
      root_artifact_sha256: nr.root_artifact_sha256,
      provider: ev.provider,
      authority: ev.authority,
      confidence: ev.confidence,
      format: nr.format,
      statistics: nr.statistics,
      summary: nr.summary,
      limitations: nr.limitations,
      integrity_contradictions: nr.integrity_contradictions,
      external_modules: external,
      application_graph: {
        nodes: nr.graph.nodes.length,
        edges: nr.graph.edges.length,
      },
      semantic_graph: {
        nodes: nr.semantic_graph?.nodes?.length ?? 0,
        relations: nr.semantic_graph?.relations?.length ?? 0,
        unknowns: nr.semantic_graph?.unknowns?.length ?? 0,
        kinds: semKinds,
      },
      semantic_coverage: nr.semantic_graph?.coverage
        ? {
            status: nr.semantic_graph.coverage.status,
            truncated: nr.semantic_graph.coverage.truncated,
            omitted_nodes: nr.semantic_graph.coverage.omitted_nodes,
          }
        : null,
      evidence_file: evidencePath,
    };
  } else {
    rea = {
      status: r.error ? "error" : "failed",
      exit_code: r.status,
      signal: r.signal,
      stderr: (r.stderr ?? "").slice(-2000),
      error: r.error ? String(r.error) : null,
    };
  }
  const reaMs = Date.now() - t0;

  // 2. Scanner effect pass.
  const t1 = Date.now();
  const effects = scanPackage(pkgRoot);
  const effectsMs = Date.now() - t1;

  // 3. Package facts.
  const pkg = {
    name: pkgJson.name,
    version: pkgJson.version,
    license: pkgJson.license ?? meta?.license ?? null,
    description: pkgJson.description ?? null,
    bin: pkgJson.bin ?? null,
    scripts: pkgJson.scripts ?? {},
    dependencies: pkgJson.dependencies ?? {},
    type: pkgJson.type ?? "commonjs",
    repository:
      typeof (pkgJson.repository ?? meta?.repository) === "string"
        ? pkgJson.repository
        : (pkgJson.repository?.url ?? meta?.repository?.url ?? null),
    maintainers: Array.isArray(meta?.maintainers)
      ? meta.maintainers.length
      : null,
    published: meta?.time?.[pkgJson.version] ?? null,
    unpacked_size: meta?.dist?.unpackedSize ?? null,
    file_count: meta?.dist?.fileCount ?? null,
    dist_sha: meta?.dist?.shasum ?? null,
    integrity: meta?.dist?.integrity ?? null,
  };
  const profile = {
    package: pkg,
    rea,
    effects_scan: effects,
    timing_ms: { rea: reaMs, effects: effectsMs },
    scanned_at: new Date().toISOString(),
  };
  profile.grade = grade(profile);
  writeFileSync(
    join(outDir, "profiles", `${d}.json`),
    JSON.stringify(profile, null, 2),
  );
  console.log(
    `${d}: rea=${rea.status} ${reaMs}ms effects=${effectsMs}ms tier=${profile.grade.risk_tier} ${profile.grade.credential.status} flags=${
      Object.entries(profile.grade.effect_flags)
        .filter(([, v]) => v)
        .map(([k]) => k)
        .join(",") || "none"
    }`,
  );
}
