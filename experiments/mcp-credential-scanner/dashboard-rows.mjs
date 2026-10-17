// Flatten profiles into one row per package for the dashboard dataset.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const [outDir, downloadsFile] = process.argv.slice(2);
const downloads = new Map();
for (const l of readFileSync(downloadsFile, "utf8").split("\n")) {
  const [n, p] = l.trim().split(/\s+/);
  if (p) downloads.set(p, Number(n));
}
const rows = [];
for (const f of readdirSync(join(outDir, "profiles")).filter((x) =>
  x.endsWith(".json"),
)) {
  const p = JSON.parse(readFileSync(join(outDir, "profiles", f), "utf8"));
  const g = p.grade;
  const e = p.effects_scan;
  const fl = g.effect_flags;
  const spawnSites = e.findings.filter((x) => x.kind === "process_spawn");
  rows.push({
    package: p.package.name,
    version: p.package.version,
    weekly_downloads: downloads.get(p.package.name) ?? 0,
    license: p.package.license ?? "unknown",
    maintainers: p.package.maintainers ?? 0,
    published: p.package.published ? p.package.published.slice(0, 10) : "",
    files_scanned: e.files_scanned,
    declared_dependencies: Object.keys(p.package.dependencies ?? {}).length,
    rea_status: p.rea.status,
    evidence_id: p.rea.evidence_id ?? "",
    rea_ms: p.timing_ms.rea,
    process_spawn: fl.process_spawn,
    filesystem_write: fl.filesystem_write,
    network_egress: fl.network_egress,
    browser_automation: fl.browser_automation,
    dynamic_code: fl.dynamic_code,
    native_addon: fl.native_addon,
    install_scripts: fl.install_scripts,
    remote_mcp_proxy: fl.remote_mcp_proxy,
    secret_env_access: fl.secret_env_access,
    effect_count: Object.values(fl).filter(Boolean).length,
    spawn_sites: spawnSites.length,
    write_sites: e.findings.filter((x) => x.kind === "filesystem_write").length,
    request_sites: e.findings.filter((x) => x.kind === "network_request")
      .length,
    dynamic_code_sites: e.findings.filter((x) => x.kind === "dynamic_code")
      .length,
    external_hosts: g.external_hosts.length,
    external_host_list: g.external_hosts.join("; "),
    env_vars: Object.keys(e.env_vars).length,
    secret_env_vars: g.secret_env_vars.length,
    secret_env_list: g.secret_env_vars.join("; "),
    declared_tools: Object.keys(e.declared_tools).length,
    tool_candidates: Object.keys(e.tool_candidates).length,
    minified_files: e.minified_files.length,
    unknowns: g.unknowns.length,
    unknown_list: g.unknowns.join("; "),
    risk_tier: `T${g.risk_tier}`,
    risk_tier_name: g.risk_tier_name,
    max_authorization: g.max_authorization_level,
    credential: g.credential.status,
    credential_reason: g.credential.reason,
    first_spawn_site: spawnSites[0]
      ? `${spawnSites[0].file}:${spawnSites[0].line} ${spawnSites[0].detail}`
      : "",
    install_script: ["preinstall", "install", "postinstall"]
      .filter((k) => p.package.scripts?.[k])
      .map((k) => `${k}: ${p.package.scripts[k]}`)
      .join(" | "),
  });
}
rows.sort((a, b) => b.weekly_downloads - a.weekly_downloads);
writeFileSync(
  join(outDir, "dashboard-rows.json"),
  JSON.stringify(rows, null, 1),
);
console.log(`${rows.length} rows -> ${join(outDir, "dashboard-rows.json")}`);
