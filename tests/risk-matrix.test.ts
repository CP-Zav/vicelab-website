import assert from 'node:assert/strict';
import test from 'node:test';
import { analyse } from '../lib/risk-matrix/engine';

test('assesses six recognised inputs as one selection and checks all component combinations', () => {
  const result = analyse({ substances: ['MDMA', 'cocaine', 'amphetamine', 'alcohol', 'cannabis', 'ketamine'] });
  assert.deepEqual(result.assessmentScope, { selectedCount: 6, assessedTogether: true, combinationsChecked: 15 });
  assert.ok(result.interactions.some(item => item.combination.length >= 3 && item.type === 'stimulant_synergy'));
  assert.match(result.notes.join(' '), /assessed together/i);
});

test('applies relevant disclosed health context without diagnosing', () => {
  const result = analyse({ substances: ['amphetamine', 'MDMA'], healthProfile: { domains: ['cardiovascular', 'sleep_deprivation'] } });
  assert.equal(result.contextFindings.length, 2);
  assert.equal(result.riskLevel, 'high');
  assert.ok(result.contextFindings.every(item => item.type === 'health_context_modifier'));
});

test('does not present a missing record as safety', () => {
  const result = analyse({ substances: ['caffeine', 'cannabis'] });
  assert.equal(result.riskLevel, 'moderate');
  assert.match(result.notes.join(' '), /does not establish safety/i);
});

test('treats entirely unknown inputs as uncertainty rather than low risk', () => {
  const result = analyse({ substances: ['unlisted research chemical'] });
  assert.equal(result.riskLevel, 'moderate');
  assert.match(result.notes.join(' '), /unknown risk/i);
});

test('unknown input increases uncertainty even beside a recognised low-signal input', () => {
  const result = analyse({ substances: ['caffeine', 'unknown powder'] });
  assert.equal(result.riskLevel, 'moderate');
});

test('rejects more than six inputs and unsupported health domains', () => {
  assert.throws(() => analyse({ substances: ['MDMA', 'Alcohol', 'Cannabis', 'Cocaine', 'Ketamine', 'LSD', 'GHB'] }), /Maximum 6/);
  assert.throws(() => analyse({ substances: ['MDMA'], healthProfile: { domains: ['not_real' as never] } }), /unsupported context domain/);
});
