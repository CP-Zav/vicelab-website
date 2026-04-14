import Anthropic from '@anthropic-ai/sdk';
import type { AnalysisResult } from '@/lib/risk-matrix';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are the Matrix-ASA Operator — a harm reduction assistant for ViceLab.
You receive a structured multi-substance risk analysis and return a concise, actionable harm reduction brief.
Tone: direct, non-preachy, culturally fluent (festival/rave context). No safety-lecture tone.
Format: plain text only, 3–5 sentences max. No headers. No bullet points. No markdown.`;

// ─── Single call ────────────────────────────────────────────────────────────────

async function callClaudeOperator(
  substances: string[],
  analysis: AnalysisResult
): Promise<string> {
  const interactionSummary = analysis.interactions
    .map(i => `${i.combination.join(' + ')} [${i.severity}]: ${i.description}`)
    .join('\n');

  const guidanceSummary = analysis.guidance.selfManagement.slice(0, 3).join('; ');

  const userMessage = [
    `Substances: ${substances.join(', ')}`,
    `Risk level: ${analysis.riskLevel}`,
    `Interactions detected: ${analysis.interactions.length}`,
    interactionSummary ? `\n${interactionSummary}` : '',
    `\nKey guidance: ${guidanceSummary}`,
  ]
    .filter(Boolean)
    .join('\n');

  const message = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 300,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: userMessage }],
  });

  const content = message.content[0];
  if (content.type !== 'text') throw new Error('Unexpected Claude response type');
  return content.text;
}

// ─── With retry ────────────────────────────────────────────────────────────────

export async function callClaudeWithRetry(
  substances: string[],
  analysis: AnalysisResult,
  maxAttempts = 2
): Promise<{ text: string; attempts: number }> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const text = await callClaudeOperator(substances, analysis);
      return { text, attempts: attempt };
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt < maxAttempts) {
        // Exponential backoff: 500ms, 1000ms
        await new Promise(r => setTimeout(r, 500 * attempt));
      }
    }
  }

  throw lastError ?? new Error('Claude call failed after all retry attempts');
}
