import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const [outDir, downloadsFile] = process.argv.slice(2);
const downloads = new Map();
if (downloadsFile)
  for (const l of readFileSync(downloadsFile, "utf8").split("\n")) {
    const [n, p] = l.trim().split(/\s+/);
    if (p) downloads.set(p, Number(n));
  }
const profiles = readdirSync(join(outDir, "profiles"))
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(join(outDir, "profiles", f), "utf8")));
for (const p of profiles)
  p.weekly_downloads = downloads.get(p.package.name) ?? null;
profiles.sort((a, b) => (b.weekly_downloads ?? 0) - (a.weekly_downloads ?? 0));
const rows = profiles.map((p) => {
  const g = p.grade;
  const f = g.effect_flags;
  const mark = (k) => (f[k] ? "yes" : "");
  return `| ${p.package.name} | ${p.package.version} | ${p.weekly_downloads?.toLocaleString("en-US") ?? "?"} | ${p.package.license ?? "?"} | ${mark("process_spawn")} | ${mark("filesystem_write")} | ${mark("network_egress")} | ${mark("browser_automation")} | ${mark("dynamic_code")} | ${mark("install_scripts")} | ${mark("remote_mcp_proxy")} | ${g.secret_env_vars.length} | ${g.external_hosts.length} | ${Object.keys(p.effects_scan.declared_tools).length} | T${g.risk_tier} | ${g.credential.status} |`;
});
const header = `| Package | Version | Weekly downloads | License | Spawns process | Writes files | Network | Browser | Dynamic code | Install scripts | MCP proxy | Secret env vars | External hosts | Declared tools | Tier | Credential |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|`;
const details = profiles
  .map((p) => {
    const g = p.grade;
    const e = p.effects_scan;
    const lines = [
      `### ${p.package.name}@${p.package.version}`,
      ``,
      `- REA Evidence: ${p.rea.status === "complete" ? `${p.rea.evidence_id} (subject sha256 ${p.rea.subject_sha256})` : `**${p.rea.status}**`}`,
      `- Tier T${g.risk_tier} ${g.risk_tier_name}; max authorization ${g.max_authorization_level}; credential ${g.credential.status} (${g.credential.reason})`,
    ];
    for (const [k, v] of Object.entries(g.effect_reasons))
      lines.push(`- ${k}: ${v.join("; ")}`);
    if (g.external_hosts.length)
      lines.push(
        `- Hosts: ${g.external_hosts.map((h) => `${h} (${e.hosts[h].file}:${e.hosts[h].line})`).join(", ")}`,
      );
    if (Object.keys(e.env_vars).length)
      lines.push(`- Env vars: ${Object.keys(e.env_vars).join(", ")}`);
    const sites = e.findings
      .filter((x) => ["process_spawn", "dynamic_code"].includes(x.kind))
      .slice(0, 8);
    for (const s of sites)
      lines.push(`- ${s.kind}: \`${s.detail}\` at ${s.file}:${s.line}`);
    if (Object.keys(e.declared_tools).length)
      lines.push(
        `- Declared tools (${Object.keys(e.declared_tools).length}): ${Object.keys(e.declared_tools).slice(0, 25).join(", ")}${Object.keys(e.declared_tools).length > 25 ? ", …" : ""}`,
      );
    lines.push(`- Unknowns: ${g.unknowns.join("; ") || "none"}`);
    return lines.join("\n");
  })
  .join("\n\n");
const tierCounts = {};
const credCounts = {};
for (const p of profiles) {
  tierCounts[`T${p.grade.risk_tier}`] =
    (tierCounts[`T${p.grade.risk_tier}`] ?? 0) + 1;
  credCounts[p.grade.credential.status] =
    (credCounts[p.grade.credential.status] ?? 0) + 1;
}
const md = `# MCP server effect profiles\n\nScanned ${profiles.length} npm packages on ${new Date().toISOString().slice(0, 10)}. Static only: findings are source-syntax candidates with file:line, not proof of runtime behavior. Transitive dependencies are not scanned.\n\nTiers: ${JSON.stringify(tierCounts)}. Credentials: ${JSON.stringify(credCounts)}.\n\n${header}\n${rows.join("\n")}\n\n## Per-package detail\n\n${details}\n`;
writeFileSync(join(outDir, "REPORT.md"), md);
writeFileSync(
  join(outDir, "summary.json"),
  JSON.stringify(
    profiles.map((p) => ({
      package: p.package.name,
      version: p.package.version,
      weekly_downloads: p.weekly_downloads,
      license: p.package.license,
      rea_status: p.rea.status,
      evidence_id: p.rea.evidence_id ?? null,
      ...p.grade,
      declared_tools: Object.keys(p.effects_scan.declared_tools),
      env_vars: Object.keys(p.effects_scan.env_vars),
    })),
    null,
    2,
  ),
);
console.log(
  `report: ${profiles.length} packages -> ${join(outDir, "REPORT.md")}`,
);
