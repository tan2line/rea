# MCP credential scanner (experiment)

Static supply-chain scanner for MCP servers published to npm. It answers one
question for an organization that hands agents third-party MCP servers: what
can this server do on the host, and may an agent be warranted to use it?

Pipeline per package:

1. `rea analyze-javascript-application --json` on the extracted npm tarball.
   REA Evidence is the provenance backbone: evidence ID, subject digest,
   provider identity, external module graph, semantic coverage and unknowns.
2. A scanner-owned effect pass (`effects.mjs`, oxc-parser) over the shipped
   JavaScript: process spawns, filesystem writes, network requests, dynamic
   code, environment variable reads, literal hosts, declared MCP tools,
   minification. Every finding carries file:line. Authority is static syntax;
   nothing here proves execution.
3. npm registry facts: license, install scripts, dependencies, maintainers,
   size, publish time.
4. Deterministic grading (`credential.mjs`): effect flags, risk tier T0 to T4,
   maximum authorization level, required warrant action classes, and a
   credential status that fails closed. Reaching full privileges always
   requires a human issuer.

Run:

```bash
# from the repository root, after `npm ci` and `npm run build:cached`
node experiments/mcp-credential-scanner/scan.mjs <targets/pkgs> <meta dir> <results dir>
node experiments/mcp-credential-scanner/report.mjs <results dir> <downloads.txt>
node experiments/mcp-credential-scanner/regrade.mjs <targets/pkgs> <results dir>
```

`<targets/pkgs>/<name>/package` holds each extracted tarball and
`<meta dir>/<name>.json` holds `npm view <pkg> --json` output.

Limits in this version: the package's own files only, so a thin wrapper such
as `@playwright/mcp` grades on its wrapper code while the effects live in its
dependency; declared dependency count is reported as an unknown. No runtime
observation yet. Both are the next steps and are where REA's process and
browser capture tools apply.
