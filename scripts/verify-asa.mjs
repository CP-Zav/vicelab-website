import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

const root = process.cwd();
const checks = [];

function record(name, ok, detail) {
  checks.push({ name, ok: Boolean(ok), detail });
}

function read(path) {
  return readFileSync(resolve(root, path), "utf8");
}

function walk(dir, extensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css"])) {
  const absolute = resolve(root, dir);
  if (!existsSync(absolute)) return [];
  return readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const path = join(absolute, entry.name);
    if (entry.isDirectory()) return walk(relative(root, path), extensions);
    return extensions.has(extname(entry.name)) ? [path] : [];
  });
}

function corpus(paths) {
  return paths.filter(existsSync).map((path) => readFileSync(path, "utf8")).join("\n");
}

function containsAll(text, patterns) {
  return patterns.every((pattern) => pattern.test(text));
}

const requiredRoutes = ["app/asa/page.tsx", "app/siv/page.tsx", "app/matrix/page.tsx"];
const missingRoutes = requiredRoutes.filter((path) => !existsSync(resolve(root, path)));
record("ASA, S.I.V. and MATRIX routes exist", missingRoutes.length === 0,
  missingRoutes.length ? `missing: ${missingRoutes.join(", ")}` : requiredRoutes.join(", "));

const sourceFiles = [...walk("app"), ...walk("components"), ...walk("lib")];
const assetReferences = [];
for (const file of sourceFiles) {
  const text = readFileSync(file, "utf8");
  const patterns = [/\bsrc\s*=\s*["'](\/[^"']+)["']/g, /url\(\s*["']?(\/[^)'"?#]+)["']?\s*\)/g];
  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      if (!match[1].startsWith("//")) assetReferences.push({ file, path: match[1].split(/[?#]/)[0] });
    }
  }
}
const brokenAssets = assetReferences.filter(({ path }) => !existsSync(resolve(root, `public${path}`)));
record("Local asset references resolve", brokenAssets.length === 0,
  brokenAssets.length
    ? brokenAssets.map(({ file, path }) => `${relative(root, file)} -> public${path}`).join("; ")
    : `${assetReferences.length} local references checked`);

if (missingRoutes.length === 0) {
  const asa = read("app/asa/page.tsx");
  const siv = read("app/siv/page.tsx");
  const matrix = read("app/matrix/page.tsx");
  const asaLower = asa.toLowerCase();
  const childCorpus = `${siv}\n${matrix}`.toLowerCase();

  record("ASA is expressed as the parent of S.I.V. and MATRIX",
    /substance intelligence vault/.test(asaLower) && /matrix/.test(asaLower) &&
      /(inside|within|part of|contains|includes|houses)/.test(asaLower) &&
      /(?:href\s*:\s*|href=)["']\/siv["']/.test(asa) && /(?:href\s*:\s*|href=)["']\/matrix["']/.test(asa),
    "ASA copy must name both children, state containment, and link to both routes");

  record("Child surfaces provide an ASA return path",
    (siv.match(/href=["']\/asa["']/g)?.length ?? 0) > 0 &&
      (matrix.match(/href=["']\/asa["']/g)?.length ?? 0) > 0,
    "both /siv and /matrix must link to /asa");

  record("S.I.V. canonical naming is visible",
    /S\.I\.V\./.test(siv) && /Substance Intelligence Vault/.test(siv),
    "require both “S.I.V.” and “Substance Intelligence Vault” on the vault surface");

  record("Primary surfaces carry mobile overflow containment",
    [asa, siv, matrix].every((text) => /overflow-(?:x-)?hidden/.test(text)) &&
      [asa, siv, matrix].every((text) => /(?:sm|md|lg):/.test(text)),
    "static guard only; complete the viewport matrix in the runbook");

  const forbiddenReadiness = [
    /\bproduction[- ]ready\b/i,
    /\bclinically validated\b/i,
    /\bclinical(?:ly)? approved\b/i,
    /\bready for (?:clinical|production) use\b/i,
  ];
  const readinessHits = [
    ["app/asa/page.tsx", asa], ["app/siv/page.tsx", siv], ["app/matrix/page.tsx", matrix],
  ].flatMap(([file, text]) => forbiddenReadiness
    .filter((pattern) => pattern.test(text))
    .map((pattern) => `${file}: ${pattern.source}`));
  record("No forbidden readiness claims on public surfaces", readinessHits.length === 0,
    readinessHits.length ? readinessHits.join("; ") : "no production/clinical readiness claims found");

  record("Public MATRIX copy is not pair-only",
    !/(?:only|solely|just)\s+(?:does?|uses?|supports?|compares?|evaluates?)?\s*pair(?:wise)?/i.test(matrix) &&
      !/pair(?:wise)?[- ]only/i.test(matrix),
    "pair-level evidence may be internal, but public positioning must cover the complete selected set");

  record("Child identity remains distinct inside ASA",
    /siv|S\.I\.V\./.test(asa) && /matrix/i.test(asa) && /siv/i.test(childCorpus) && /matrix/i.test(childCorpus),
    "static identity-name guard");
}

const matrixFiles = [
  ...walk("lib/risk-matrix"),
  ...walk("lib/orchestration"),
  ...walk("app/api"),
  ...walk("app/matrix"),
];
const matrixCorpus = corpus(matrixFiles);
record("MATRIX accepts one to six inputs",
  /(?:maximum|max|up to|between 1 and)\s*(?:of\s*)?6|length\s*>\s*6/i.test(matrixCorpus) &&
    /length\s*===\s*0|at least one|between 1 and 6/i.test(matrixCorpus),
  "found explicit lower and six-input upper bounds");

record("MATRIX accepts health/comorbidity context",
  /comorbid|healthProfile|healthContext|health[_ ]context|medicalConditions|medical[_ ]conditions/i.test(matrixCorpus) &&
    /body\.(?:healthProfile|healthContext|health_context|conditions|comorbidities)|input\.(?:healthProfile|healthContext|health_context|conditions|comorbidities)|\{[^}]*health(?:Profile|Context)/i.test(matrixCorpus),
  "health context must be represented in the accepted input contract, not only marketing copy");

record("MATRIX evaluates beyond isolated pair lookup",
  /stacking|aggregate|complete(?: selected)? set|whole(?: selected)? set|multi[- ]substance|polypharmacy/i.test(matrixCorpus),
  "require a whole-set/stacking evaluation signal in implementation");

const evidenceFiles = [...walk("app/siv"), ...walk("lib/evidence"), ...walk("lib/siv")];
const evidenceCorpus = corpus(evidenceFiles).toLowerCase();
const evidenceLabels = ["provenance", "confidence", "uncertainty", "review", "freshness"];
const missingEvidenceLabels = evidenceLabels.filter((label) => !evidenceCorpus.includes(label));
record("S.I.V. exposes evidence-state labels", missingEvidenceLabels.length === 0,
  missingEvidenceLabels.length ? `missing: ${missingEvidenceLabels.join(", ")}` : evidenceLabels.join(", "));

record("Unknown or missing evidence cannot imply safety",
  /unknown|missing|stale/i.test(matrixCorpus) && /uncertain|uncertainty|unpredictable risk/i.test(matrixCorpus) &&
    !/no (?:known|recorded|documented) interaction[^.]{0,80}(?:safe|low risk)/i.test(matrixCorpus),
  "unknown/missing/stale evidence must increase uncertainty");

const publicCorpus = corpus([...walk("app/asa"), ...walk("app/siv"), ...walk("app/matrix"), ...walk("lib/risk-matrix")]);
record("Safety and emergency limitations are represented",
  /non[- ]diagnostic|not (?:a substitute for )?medical advice|does not diagnose/i.test(publicCorpus) &&
    /emergency|call (?:000|emergency services)|seek (?:urgent|emergency) (?:help|care)/i.test(publicCorpus),
  "require non-diagnostic limitation and emergency escalation language");

record("Seed/demo data is labelled",
  /\bseed(?:ed)?\b|\bdemo(?:nstration)?\b|sample data|example data/i.test(publicCorpus),
  "MVP/demo content must not appear clinically validated");

for (const check of checks) {
  const icon = check.ok ? "PASS" : "FAIL";
  console.log(`${icon}  ${check.name}`);
  console.log(`      ${check.detail}`);
}

const failures = checks.filter((check) => !check.ok);
console.log(`\n${checks.length - failures.length}/${checks.length} checks passed.`);
if (failures.length) process.exitCode = 1;
