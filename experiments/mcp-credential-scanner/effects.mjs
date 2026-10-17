// Scanner-owned static effect pass over a package's shipped JavaScript.
// Authority: scanner-static-syntax. Findings are candidates with file:line,
// never proof of execution. REA Evidence remains the provenance backbone.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, extname } from "node:path";
import { parseSync } from "oxc-parser";

export const SCANNER_VERSION = "0.1.0";

const MODULE_CATEGORIES = [
  [
    "process",
    /^(node:)?child_process$|^execa$|^cross-spawn$|^node-pty$|^shelljs$|^zx$|^spawn-rx$/,
  ],
  [
    "filesystem",
    /^(node:)?fs(\/promises)?$|^fs-extra$|^graceful-fs$|^chokidar$|^write-file-atomic$/,
  ],
  [
    "network",
    /^(node:)?(http|https|http2|net|tls|dgram|dns)$|^undici$|^node-fetch$|^axios$|^got$|^ky$|^ws$|^superagent$|^eventsource$|^socket\.io-client$|^@modelcontextprotocol\/sdk\/client(\/|$)/,
  ],
  [
    "browser_automation",
    /^playwright(-core)?$|^@playwright\/|^puppeteer(-core)?$|^chrome-remote-interface$|^selenium-webdriver$|^chrome-launcher$/,
  ],
  [
    "network_sdk",
    /^(@elastic\/elasticsearch|pg|pg-promise|postgres|mysql2?|mongodb|mongoose|redis|ioredis|@supabase\/.*|stripe|@notionhq\/client|@linear\/sdk|@octokit\/.*|@slack\/.*|@sentry\/.*|@aws-sdk\/.*|aws-sdk|@azure\/.*|@google-cloud\/.*|googleapis|openai|@anthropic-ai\/sdk|@pinecone-database\/pinecone|@neondatabase\/.*|@mendable\/firecrawl-js|firecrawl|exa-js|@tavily\/core|@hubspot\/api-client|@apify\/.*|apify-client|@kubernetes\/client-node|heroku-client|@heroku-cli\/.*|@browserbasehq\/sdk|@upstash\/.*|cloudflare|graphql-request|@apollo\/client|@modelcontextprotocol\/sdk\/client.*|@ai-sdk\/.*|ai)$/,
  ],
  ["dynamic_code", /^(node:)?vm$/],
  ["native_addon", /^bindings$|^node-gyp-build$|\.node$/],
  ["mcp_server_sdk", /^@modelcontextprotocol\/sdk\/server(\/|$)|^fastmcp$/],
];

const PROCESS_CALLS = new Set([
  "spawn",
  "spawnSync",
  "exec",
  "execSync",
  "execFile",
  "execFileSync",
  "fork",
]);
const FS_WRITE_CALLS = new Set([
  "writeFile",
  "writeFileSync",
  "appendFile",
  "appendFileSync",
  "rm",
  "rmSync",
  "rmdir",
  "rmdirSync",
  "unlink",
  "unlinkSync",
  "mkdir",
  "mkdirSync",
  "rename",
  "renameSync",
  "createWriteStream",
  "copyFile",
  "copyFileSync",
  "truncate",
  "truncateSync",
  "chmod",
  "chmodSync",
  "chown",
  "chownSync",
  "symlink",
  "symlinkSync",
  "outputFile",
  "outputJson",
  "writeJson",
  "ensureDir",
  "emptyDir",
  "remove",
  "move",
  "cp",
  "cpSync",
]);
const NETWORK_CALLS = new Set(["fetch"]);
const VM_CALLS = new Set([
  "runInNewContext",
  "runInThisContext",
  "runInContext",
  "compileFunction",
]);
const URL_RE = /\b(https?|wss?):\/\/([A-Za-z0-9.-]+(?::\d+)?)([^\s"'`<>)\]]*)/g;

function categorize(spec) {
  for (const [cat, re] of MODULE_CATEGORIES) if (re.test(spec)) return cat;
  if (spec.startsWith("node:") || isNodeBuiltin(spec)) return "node_builtin";
  if (spec.startsWith(".") || spec.startsWith("/")) return "local";
  return "other_external";
}
const NODE_BUILTINS = new Set([
  "assert",
  "buffer",
  "crypto",
  "events",
  "os",
  "path",
  "stream",
  "string_decoder",
  "url",
  "util",
  "zlib",
  "readline",
  "querystring",
  "timers",
  "worker_threads",
  "module",
  "process",
  "perf_hooks",
  "async_hooks",
  "constants",
  "punycode",
  "tty",
  "v8",
  "cluster",
  "inspector",
  "repl",
  "diagnostics_channel",
  "stream/promises",
  "stream/web",
  "timers/promises",
  "util/types",
  "path/posix",
  "path/win32",
  "test",
  "sea",
  "sqlite",
]);
function isNodeBuiltin(s) {
  return NODE_BUILTINS.has(s);
}

function listSourceFiles(root) {
  const out = [];
  const skipped = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      if (name === "node_modules" || name.startsWith(".")) continue;
      const p = join(dir, name);
      const st = statSync(p);
      if (st.isDirectory()) walk(p);
      else {
        const ext = extname(name);
        if (
          /\.(spec|test)\.[mc]?[jt]s$/.test(name) ||
          /(^|\/)(__tests__|__mocks__|test|tests)\//.test(p.slice(root.length))
        ) {
          skipped.push(p);
          continue;
        }
        if (
          [".js", ".mjs", ".cjs", ".ts", ".mts", ".cts"].includes(ext) &&
          !name.endsWith(".d.ts") &&
          !name.endsWith(".d.mts") &&
          st.size <= 8 * 1024 * 1024
        )
          out.push(p);
      }
    }
  };
  walk(root);
  out.sort();
  out.skippedTests = skipped.length;
  return out;
}

function lineIndex(code) {
  const starts = [0];
  for (let i = 0; i < code.length; i++)
    if (code.charCodeAt(i) === 10) starts.push(i + 1);
  return (offset) => {
    let lo = 0,
      hi = starts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (starts[mid] <= offset) lo = mid;
      else hi = mid - 1;
    }
    return lo + 1;
  };
}

function walk(node, visit, parent = null) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const n of node) walk(n, visit, parent);
    return;
  }
  if (typeof node.type !== "string") return;
  visit(node, parent);
  for (const key of Object.keys(node)) {
    if (
      key === "type" ||
      key === "start" ||
      key === "end" ||
      key === "loc" ||
      key === "range"
    )
      continue;
    const v = node[key];
    if (v && typeof v === "object") walk(v, visit, node);
  }
}

const SCOPE_TYPES = new Set([
  "Program",
  "FunctionDeclaration",
  "FunctionExpression",
  "ArrowFunctionExpression",
]);
// Function-scope walk: visit(node, parent, scopes) where scopes is the chain of enclosing scope nodes, innermost last.
function walkScoped(node, visit, parent = null, scopes = []) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const n of node) walkScoped(n, visit, parent, scopes);
    return;
  }
  if (typeof node.type !== "string") return;
  const next = SCOPE_TYPES.has(node.type) ? [...scopes, node] : scopes;
  visit(node, parent, next);
  for (const key of Object.keys(node)) {
    if (
      key === "type" ||
      key === "start" ||
      key === "end" ||
      key === "loc" ||
      key === "range"
    )
      continue;
    const v = node[key];
    if (v && typeof v === "object") walkScoped(v, visit, node, next);
  }
}
// Hoisted, function-scope declaration table: scope node -> name -> initializer nodes (null = no initializer / parameter).
function collectDecls(ast) {
  const decls = new Map();
  const table = (scope) => {
    let m = decls.get(scope);
    if (!m) {
      m = new Map();
      decls.set(scope, m);
    }
    return m;
  };
  const push = (scope, name, init) => {
    const m = table(scope);
    if (!m.has(name)) m.set(name, []);
    m.get(name).push(init);
  };
  const bindPattern = (scope, pattern, init) => {
    if (!pattern) return;
    if (pattern.type === "Identifier") push(scope, pattern.name, init);
    else if (
      pattern.type === "ObjectPattern" ||
      pattern.type === "ArrayPattern" ||
      pattern.type === "AssignmentPattern" ||
      pattern.type === "RestElement"
    )
      walk(pattern, (n) => {
        if (n.type === "Identifier") push(scope, n.name, null);
      });
  };
  walkScoped(ast, (node, parent, scopes) => {
    const scope = scopes[scopes.length - 1];
    if (node.type === "VariableDeclarator") {
      if (node.__forOf) return; // bound by the enclosing for-of/for-in handler
      bindPattern(scope, node.id, node.init ?? null);
    } else if (
      node.type === "ForOfStatement" ||
      node.type === "ForInStatement"
    ) {
      const left = node.left;
      if (left?.type === "VariableDeclaration")
        for (const d of left.declarations) {
          d.__forOf = true;
          bindPattern(
            scope,
            d.id,
            node.type === "ForOfStatement"
              ? { type: "__Iterated", source: node.right }
              : null,
          );
        }
      else if (left?.type === "Identifier") push(scope, left.name, null);
    } else if (SCOPE_TYPES.has(node.type) && node.type !== "Program") {
      for (const p of node.params ?? []) bindPattern(node, p, null);
    } else if (
      node.type === "AssignmentExpression" &&
      node.left?.type === "Identifier"
    )
      push(scope, node.left.name, node.right);
  });
  return decls;
}
function containsJsonLiteral(node) {
  let found = false;
  walk(node, (n) => {
    if (
      n.type === "Literal" &&
      typeof n.value === "string" &&
      n.value.endsWith(".json")
    )
      found = true;
    else if (
      n.type === "TemplateElement" &&
      String(n.value.cooked ?? n.value.raw ?? "").endsWith(".json")
    )
      found = true;
  });
  return found;
}
// True when every value the expression can take is a path literal ending in .json (within function-scope data flow).
function onlyJsonPaths(expr, scopes, decls, depth = 0) {
  if (!expr || depth > 4) return false;
  if (expr.type === "__Iterated") {
    const src = expr.source;
    if (src?.type === "ArrayExpression")
      return (
        src.elements.length > 0 &&
        src.elements.every((e) => onlyJsonPaths(e, scopes, decls, depth + 1))
      );
    if (src?.type === "Identifier")
      return resolveIdent(
        src.name,
        scopes,
        decls,
        depth + 1,
        (init) =>
          init?.type === "ArrayExpression" &&
          init.elements.length > 0 &&
          init.elements.every((e) =>
            onlyJsonPaths(e, scopes, decls, depth + 2),
          ),
      );
    return false;
  }
  if (expr.type === "Identifier")
    return resolveIdent(expr.name, scopes, decls, depth + 1, (init) =>
      onlyJsonPaths(init, scopes, decls, depth + 1),
    );
  if (expr.type === "ConditionalExpression")
    return (
      onlyJsonPaths(expr.consequent, scopes, decls, depth + 1) &&
      onlyJsonPaths(expr.alternate, scopes, decls, depth + 1)
    );
  return containsJsonLiteral(expr);
}
function resolveIdent(name, scopes, decls, depth, test) {
  for (let i = scopes.length - 1; i >= 0; i--) {
    const m = decls.get(scopes[i]);
    if (m && m.has(name)) {
      const inits = m.get(name);
      return (
        inits.length > 0 && inits.every((init) => init !== null && test(init))
      );
    }
  }
  return false;
}

function memberName(node) {
  if (
    node?.type === "MemberExpression" &&
    !node.computed &&
    node.property?.type === "Identifier"
  )
    return node.property.name;
  if (
    node?.type === "MemberExpression" &&
    node.computed &&
    node.property?.type === "Literal" &&
    typeof node.property.value === "string"
  )
    return node.property.value;
  return null;
}
function isProcessEnv(node) {
  return (
    node?.type === "MemberExpression" &&
    node.object?.type === "Identifier" &&
    node.object.name === "process" &&
    memberName(node) === "env"
  );
}
function stringValue(node) {
  if (node?.type === "Literal" && typeof node.value === "string")
    return node.value;
  if (
    node?.type === "TemplateLiteral" &&
    node.expressions.length === 0 &&
    node.quasis.length === 1
  )
    return node.quasis[0].value.cooked ?? node.quasis[0].value.raw;
  return null;
}

export function scanPackage(root) {
  const files = listSourceFiles(root);
  const findings = [];
  const imports = [];
  const envVars = new Map();
  const hosts = new Map();
  const declaredTools = new Map();
  const toolCandidates = new Map();
  const minifiedFiles = [];
  const parseFailures = [];
  let bytes = 0;

  for (const file of files) {
    const rel = relative(root, file);
    let code;
    try {
      code = readFileSync(file, "utf8");
    } catch (e) {
      parseFailures.push({ file: rel, reason: String(e) });
      continue;
    }
    bytes += code.length;
    const lines = code.split("\n");
    const maxLine = lines.reduce((m, l) => Math.max(m, l.length), 0);
    if (maxLine > 3000 || (code.length > 5000 && lines.length < 10))
      minifiedFiles.push(rel);
    const lang = /\.(m|c)?ts$/.test(file) ? "ts" : "js";
    let ast;
    try {
      const r = parseSync(file, code, { sourceType: "module", lang });
      if (r.errors.length && !r.program?.body?.length) {
        parseFailures.push({
          file: rel,
          reason: r.errors[0]?.message ?? "parse error",
        });
        continue;
      }
      ast = r.program;
    } catch (e) {
      parseFailures.push({ file: rel, reason: String(e) });
      continue;
    }
    const line = lineIndex(code);
    const add = (kind, detail, node, extra = {}) =>
      findings.push({
        kind,
        detail,
        file: rel,
        line: line(node.start),
        ...extra,
      });

    // Binding tables: which local names refer to process/fs/vm modules.
    const boundObjects = new Map(); // local identifier -> category
    const boundCallees = new Map(); // local identifier (named import) -> { category, imported }
    const bind = (spec, specifiers, node) => {
      const cat = categorize(spec);
      imports.push({
        specifier: spec,
        category: cat,
        file: rel,
        line: line(node.start),
      });
      for (const s of specifiers ?? []) {
        if (
          s.type === "ImportDefaultSpecifier" ||
          s.type === "ImportNamespaceSpecifier"
        )
          boundObjects.set(s.local.name, cat);
        else if (s.type === "ImportSpecifier")
          boundCallees.set(s.local.name, {
            category: cat,
            imported: s.imported?.name ?? s.imported?.value ?? s.local.name,
          });
      }
    };
    const decls = collectDecls(ast);
    walkScoped(ast, (node, parent, scopes) => {
      if (node.type === "ImportDeclaration")
        bind(node.source.value, node.specifiers, node);
      else if (node.type === "ImportExpression") {
        const s = stringValue(node.source);
        if (s !== null) bind(s, [], node);
        else add("dynamic_import", "non-literal import()", node);
      } else if (
        node.type === "CallExpression" &&
        node.callee.type === "Identifier" &&
        node.callee.name === "require"
      ) {
        const s = stringValue(node.arguments[0]);
        if (s === null) {
          // A non-literal require whose argument contains a ".json" literal loads data, not code.
          const jsonArg = onlyJsonPaths(node.arguments[0], scopes, decls);
          add(
            jsonArg ? "dynamic_require_json" : "dynamic_require",
            jsonArg
              ? "non-literal require() of a .json path"
              : "non-literal require()",
            node,
          );
          return;
        }
        const cat = categorize(s);
        imports.push({
          specifier: s,
          category: cat,
          file: rel,
          line: line(node.start),
        });
        if (parent?.type === "VariableDeclarator") {
          if (parent.id.type === "Identifier")
            boundObjects.set(parent.id.name, cat);
          else if (parent.id.type === "ObjectPattern")
            for (const p of parent.id.properties)
              if (p.type === "Property" && p.value?.type === "Identifier")
                boundCallees.set(p.value.name, {
                  category: cat,
                  imported: p.key?.name ?? p.key?.value,
                });
        }
      }
    });

    walk(ast, (node, parent) => {
      if (node.type === "CallExpression" || node.type === "NewExpression") {
        const callee = node.callee;
        const mname = memberName(callee);
        const objName =
          callee?.type === "MemberExpression" &&
          callee.object?.type === "Identifier"
            ? callee.object.name
            : null;
        const objCat = objName ? boundObjects.get(objName) : null;
        const idName = callee?.type === "Identifier" ? callee.name : null;
        const idBound = idName ? boundCallees.get(idName) : null;
        const argPreview = node.arguments?.length
          ? (stringValue(node.arguments[0]) ??
            (node.arguments[0].type === "TemplateLiteral"
              ? "`template`"
              : "<dynamic>"))
          : "";
        if (
          (mname &&
            PROCESS_CALLS.has(mname) &&
            (objCat === "process" ||
              objName === "child_process" ||
              objName === "cp")) ||
          (idBound?.category === "process" &&
            PROCESS_CALLS.has(idBound.imported)) ||
          idName === "execa" ||
          (idName === "spawn" && idBound?.category === "process")
        )
          add(
            "process_spawn",
            `${objName ? objName + "." : ""}${mname ?? idName}(${argPreview})`,
            node,
          );
        else if (
          idBound?.category === "process" &&
          node.type === "CallExpression"
        )
          add("process_spawn", `${idName}(${argPreview})`, node);
        if (
          (mname &&
            FS_WRITE_CALLS.has(mname) &&
            (objCat === "filesystem" ||
              objName === "fs" ||
              objName === "fsp" ||
              objName === "fse")) ||
          (idBound?.category === "filesystem" &&
            FS_WRITE_CALLS.has(idBound.imported))
        )
          add(
            "filesystem_write",
            `${objName ? objName + "." : ""}${mname ?? idName}(${argPreview})`,
            node,
          );
        if ((idName && NETWORK_CALLS.has(idName)) || mname === "fetch")
          add("network_request", `fetch(${argPreview})`, node);
        if (
          node.type === "NewExpression" &&
          (idName === "WebSocket" || idName === "EventSource")
        )
          add("network_request", `new ${idName}(${argPreview})`, node);
        if (
          objCat === "network" &&
          mname &&
          [
            "request",
            "get",
            "post",
            "put",
            "patch",
            "delete",
            "head",
            "connect",
            "createConnection",
            "stream",
          ].includes(mname)
        )
          add("network_request", `${objName}.${mname}(${argPreview})`, node);
        if (
          idName === "eval" ||
          (node.type === "NewExpression" && idName === "Function")
        )
          add("dynamic_code", `${idName}(…)`, node);
        if (
          mname &&
          VM_CALLS.has(mname) &&
          (objCat === "dynamic_code" || objName === "vm")
        )
          add("dynamic_code", `vm.${mname}(…)`, node);
        if (
          node.type === "NewExpression" &&
          objCat === "dynamic_code" &&
          mname === "Script"
        )
          add("dynamic_code", "new vm.Script(…)", node);
        if (
          mname === "tool" ||
          mname === "registerTool" ||
          mname === "addTool"
        ) {
          const n = stringValue(node.arguments[0]);
          if (n !== null)
            declaredTools.set(n, { file: rel, line: line(node.start) });
          else if (
            mname === "addTool" &&
            node.arguments[0]?.type === "ObjectExpression"
          ) {
            const p = node.arguments[0].properties.find(
              (q) =>
                q.type === "Property" &&
                (q.key?.name ?? q.key?.value) === "name",
            );
            const v = stringValue(p?.value);
            if (v !== null)
              declaredTools.set(v, { file: rel, line: line(node.start) });
          }
        }
      }
      if (node.type === "ObjectExpression") {
        const keys = new Map(
          node.properties
            .filter((p) => p.type === "Property")
            .map((p) => [p.key?.name ?? p.key?.value, p.value]),
        );
        if (
          keys.has("name") &&
          (keys.has("inputSchema") || keys.has("input_schema")) &&
          keys.has("description")
        ) {
          const v = stringValue(keys.get("name"));
          if (v !== null && !declaredTools.has(v))
            toolCandidates.set(v, { file: rel, line: line(node.start) });
        }
      }
      if (node.type === "MemberExpression" && isProcessEnv(node.object)) {
        const n = memberName(node);
        if (n) {
          if (!envVars.has(n))
            envVars.set(n, { file: rel, line: line(node.start) });
        }
      }
      if (
        node.type === "VariableDeclarator" &&
        isProcessEnv(node.init) &&
        node.id.type === "ObjectPattern"
      ) {
        for (const p of node.id.properties)
          if (p.type === "Property") {
            const n = p.key?.name ?? p.key?.value;
            if (n && !envVars.has(n))
              envVars.set(n, { file: rel, line: line(node.start) });
          }
      }
      if (
        (node.type === "Literal" && typeof node.value === "string") ||
        node.type === "TemplateElement"
      ) {
        const text =
          node.type === "TemplateElement"
            ? (node.value.cooked ?? node.value.raw ?? "")
            : node.value;
        if (text.length > 7 && text.includes("://")) {
          for (const m of text.matchAll(URL_RE)) {
            const host = m[2].toLowerCase();
            if (!hosts.has(host))
              hosts.set(host, {
                scheme: m[1],
                file: rel,
                line: line(node.start),
                example: m[0].slice(0, 120),
              });
          }
        }
      }
    });
  }
  return {
    scanner: {
      name: "mcp-credential-scanner",
      version: SCANNER_VERSION,
      authority: "scanner-static-syntax",
    },
    files_scanned: files.length,
    test_files_skipped: files.skippedTests,
    bytes_scanned: bytes,
    parse_failures: parseFailures,
    minified_files: minifiedFiles,
    imports,
    findings,
    env_vars: Object.fromEntries([...envVars].sort()),
    hosts: Object.fromEntries([...hosts].sort()),
    declared_tools: Object.fromEntries([...declaredTools].sort()),
    tool_candidates: Object.fromEntries([...toolCandidates].sort()),
  };
}
