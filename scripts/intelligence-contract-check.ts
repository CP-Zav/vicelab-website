import { validSyntheticBundle } from '../lib/intelligence/fixtures';
import { evaluatePublication } from '../lib/intelligence/publication';
import { validateBundle } from '../lib/intelligence/validation';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

assert(validateBundle(validSyntheticBundle).length === 0, 'valid fixture must satisfy contract');

const allowed = evaluatePublication(validSyntheticBundle, 'urgent_safety', new Date('2027-01-01T00:00:00Z'));
assert(allowed.allowed, `valid production fixture unexpectedly blocked: ${JSON.stringify(allowed.blocks)}`);
assert(allowed.requiredSafetyNotices.length === 3, 'all safety notices must be required');

const stale = structuredClone(validSyntheticBundle);
stale.claim.freshness.validUntil = '2026-06-01T00:00:00Z';
const staleDecision = evaluatePublication(stale, 'risk_summary', new Date('2027-01-01T00:00:00Z'));
assert(!staleDecision.allowed && staleDecision.blocks.some((block) => block.code === 'STALE'), 'stale evidence must fail closed');

const demo = structuredClone(validSyntheticBundle);
demo.claim.datasetStatus = 'seeded_demo';
const demoDecision = evaluatePublication(demo, 'risk_summary', new Date('2027-01-01T00:00:00Z'));
assert(!demoDecision.allowed && demoDecision.blocks.some((block) => block.code === 'NON_PRODUCTION_DATA'), 'demo evidence must not power risk output');

const uncertain = structuredClone(validSyntheticBundle);
uncertain.claim.uncertainties = [{ kind: 'data_gap', summary: 'Synthetic material uncertainty.', material: true }];
const uncertainDecision = evaluatePublication(uncertain, 'urgent_safety', new Date('2027-01-01T00:00:00Z'));
assert(!uncertainDecision.allowed && uncertainDecision.blocks.some((block) => block.code === 'MATERIAL_UNCERTAINTY'), 'material uncertainty must fail the urgent-safety gate');

