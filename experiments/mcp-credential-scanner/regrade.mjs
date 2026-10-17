// Re-run the scanner effect pass and grading over existing profiles without re-running REA.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { scanPackage } from "./effects.mjs";
import { grade } from "./credential.mjs";
const [targetsDir, outDir] = process.argv.slice(2);
for (const f of readdirSync(join(outDir, "profiles")).filter((x) =>
  x.endsWith(".json"),
)) {
  const path = join(outDir, "profiles", f);
  const profile = JSON.parse(readFileSync(path, "utf8"));
  const pkgRoot = join(targetsDir, f.replace(/\.json$/, ""), "package");
  if (!existsSync(pkgRoot)) {
    console.error(`skip ${f}: ${pkgRoot} missing`);
    continue;
  }
  const t = Date.now();
  profile.effects_scan = scanPackage(pkgRoot);
  profile.timing_ms.effects = Date.now() - t;
  profile.grade = grade(profile);
  profile.regraded_at = new Date().toISOString();
  writeFileSync(path, JSON.stringify(profile, null, 2));
  console.log(
    `${f}: tier=${profile.grade.risk_tier} ${profile.grade.credential.status} (${profile.grade.credential.reason})`,
  );
}
