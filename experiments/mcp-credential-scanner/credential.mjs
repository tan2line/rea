// Deterministic, fail-closed grading. Same profile -> same decision.
// Vocabulary follows the encoded-governance warrant model: effect classes map to
// warrant action classes; credential status gates whether a warrant may be issued.
export const EFFECT_CLASSES = [
  "process_spawn",
  "filesystem_write",
  "network_egress",
  "browser_automation",
  "dynamic_code",
  "native_addon",
  "install_scripts",
  "remote_mcp_proxy",
  "secret_env_access",
];

const SECRET_ENV =
  /(^|_)(API_?KEY|KEY|TOKEN|SECRET|PASSWORD|PASSWD|CREDENTIALS?|AUTH|PAT|DSN|COOKIE|PRIVATE_KEY|ACCESS_KEY_ID)(_|$)/i;
const INSTALL_SCRIPTS = ["preinstall", "install", "postinstall"];

export function grade(profile) {
  const eff = profile.effects_scan;
  const kinds = new Set(eff.findings.map((f) => f.kind));
  const cats = new Set(eff.imports.map((i) => i.category));
  const flags = {};
  const why = {};
  const set = (flag, reason) => {
    flags[flag] = true;
    (why[flag] ??= []).push(reason);
  };

  if (kinds.has("process_spawn"))
    set(
      "process_spawn",
      `${count(eff, "process_spawn")} spawn/exec call sites`,
    );
  else if (cats.has("process"))
    set(
      "process_spawn",
      "imports a process-spawning module (no resolved call site)",
    );
  if (kinds.has("filesystem_write"))
    set(
      "filesystem_write",
      `${count(eff, "filesystem_write")} write/delete call sites`,
    );
  const hostNames = Object.keys(eff.hosts).filter(
    (h) =>
      !/^(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/.test(h) &&
      !/json-schema\.org|www\.w3\.org|schema\.org|modelcontextprotocol\.io|github\.com|npmjs\.com|example\.com|localhost$/.test(
        h,
      ),
  );
  if (kinds.has("network_request") || cats.has("network") || hostNames.length)
    set(
      "network_egress",
      `${count(eff, "network_request")} request sites; ${hostNames.length} literal hosts`,
    );
  const sdks = [
    ...new Set(
      eff.imports
        .filter((i) => i.category === "network_sdk")
        .map((i) => i.specifier),
    ),
  ];
  if (sdks.length)
    set(
      "network_egress",
      `imports network client SDK: ${sdks.slice(0, 6).join(", ")}`,
    );
  if (cats.has("browser_automation"))
    set("browser_automation", "imports browser-automation module");
  if (kinds.has("dynamic_code") || cats.has("dynamic_code"))
    set("dynamic_code", `${count(eff, "dynamic_code")} eval/Function/vm sites`);
  if (cats.has("native_addon")) set("native_addon", "loads native add-on");
  const scripts = profile.package?.scripts ?? {};
  const installScripts = INSTALL_SCRIPTS.filter((s) => scripts[s]);
  if (installScripts.length)
    set(
      "install_scripts",
      `package.json scripts: ${installScripts.join(", ")}`,
    );
  if (
    eff.imports.some((i) =>
      i.specifier.startsWith('@modelcontextprotocol/sdk/client'),
    ) ||
    profile.package?.name === "mcp-remote"
  )
    set("remote_mcp_proxy", "uses MCP client SDK (forwards to another server)");
  const secretEnv = Object.keys(eff.env_vars).filter((n) => SECRET_ENV.test(n));
  if (secretEnv.length)
    set(
      "secret_env_access",
      `reads ${secretEnv.length} credential-like env vars`,
    );

  // Unknowns that must fail closed.
  const unknowns = [];
  if (eff.parse_failures.length)
    unknowns.push(`SCANNER_PARSE_FAILURE: ${eff.parse_failures.length} files`);
  if (kinds.has("dynamic_require") || kinds.has("dynamic_import"))
    unknowns.push(
      `DYNAMIC_MODULE_LOAD: ${count(eff, "dynamic_require") + count(eff, "dynamic_import")} sites`,
    );
  if (eff.minified_files.length)
    unknowns.push(
      `MINIFIED_SOURCE: ${eff.minified_files.length} files (effect recovery degraded)`,
    );
  if (kinds.has("dynamic_require_json"))
    unknowns.push(
      `DYNAMIC_JSON_LOAD: ${count(eff, "dynamic_require_json")} sites (data, not code)`,
    );
  const rea = profile.rea;
  if (!rea || rea.status !== "complete")
    unknowns.push(`REA_EVIDENCE_${rea?.status?.toUpperCase() ?? "MISSING"}`);
  else {
    if (rea.statistics?.parse_failures)
      unknowns.push(`REA_PARSE_FAILURES: ${rea.statistics.parse_failures}`);
    if (rea.semantic_coverage?.truncated)
      unknowns.push("REA_COVERAGE_TRUNCATED");
    if (rea.integrity_contradictions?.length)
      unknowns.push(
        `REA_INTEGRITY_CONTRADICTIONS: ${rea.integrity_contradictions.length}`,
      );
  }
  const depCount = Object.keys(profile.package?.dependencies ?? {}).length;
  unknowns.push(`TRANSITIVE_DEPENDENCIES_UNSCANNED: ${depCount} declared`);

  // Risk tier (highest applicable wins).
  let tier = 0;
  if (flags.network_egress || flags.secret_env_access) tier = Math.max(tier, 1);
  if (flags.filesystem_write || flags.remote_mcp_proxy)
    tier = Math.max(tier, 2);
  if (
    flags.process_spawn ||
    flags.browser_automation ||
    flags.dynamic_code ||
    flags.native_addon
  )
    tier = Math.max(tier, 3);
  if (flags.install_scripts) tier = Math.max(tier, 4);

  const TIERS = {
    0: {
      name: "pure-compute",
      max_authorization_level: "L3 supervised",
      warrant_actions: ["mcp.read.*"],
    },
    1: {
      name: "network-bound",
      max_authorization_level: "L3 supervised",
      warrant_actions: ["mcp.read.*", "mcp.network.egress"],
    },
    2: {
      name: "local-mutating",
      max_authorization_level: "L2 conditional",
      warrant_actions: [
        "mcp.read.*",
        "mcp.network.egress",
        "mcp.fs.write",
        "mcp.proxy.forward",
      ],
    },
    3: {
      name: "code-executing",
      max_authorization_level: "L1 advisory",
      warrant_actions: [
        "mcp.exec.process",
        "mcp.exec.dynamic",
        "mcp.browser.drive",
        "mcp.native.load",
      ],
    },
    4: {
      name: "install-time-executing",
      max_authorization_level: "L0 informational",
      warrant_actions: ["mcp.install.script"],
    },
  };

  // Credential status: PENDING_VALIDATION until a scan completes; PROVISIONAL when
  // the scan is complete and tier <= 2; RESTRICTED when tier >= 3 or the scan has
  // hard unknowns. Human issuance is always required to reach FULL_PRIVILEGES.
  const SOFT = [
    "TRANSITIVE_DEPENDENCIES",
    "MINIFIED_SOURCE",
    "DYNAMIC_JSON_LOAD",
  ];
  const hard = unknowns.filter((u) => !SOFT.some((s) => u.startsWith(s)));
  let status, reason;
  if (!rea || rea.status !== "complete") {
    status = "PENDING_VALIDATION";
    reason = "NO_COMPLETE_EVIDENCE";
  } else if (hard.length) {
    status = "RESTRICTED";
    reason = "UNRESOLVED_UNKNOWNS";
  } else if (tier >= 3) {
    status = "RESTRICTED";
    reason = "CODE_EXECUTION_EFFECTS_REQUIRE_HUMAN_SCOPE";
  } else {
    status = "PROVISIONAL";
    reason = "STATIC_SCAN_COMPLETE_AWAITING_MONITORING";
  }

  return {
    effect_flags: Object.fromEntries(
      EFFECT_CLASSES.map((c) => [c, Boolean(flags[c])]),
    ),
    effect_reasons: why,
    external_hosts: hostNames,
    secret_env_vars: secretEnv,
    unknowns,
    risk_tier: tier,
    risk_tier_name: TIERS[tier].name,
    max_authorization_level: TIERS[tier].max_authorization_level,
    required_warrant_actions: TIERS[tier].warrant_actions,
    credential: {
      status,
      reason,
      issuer_required: "human",
      evidence: rea?.evidence_id ?? null,
    },
  };
}
function count(eff, kind) {
  return eff.findings.filter((f) => f.kind === kind).length;
}
