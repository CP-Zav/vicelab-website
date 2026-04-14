import type { AnalysisResult } from '@/lib/risk-matrix';

export type JobStatus = 'pending' | 'running' | 'complete' | 'failed';

export interface Job {
  id: string;
  status: JobStatus;
  input: {
    substances: string[];
  };
  output: OrchestrationResult | null;
  createdAt: string;
  updatedAt?: string;
  error?: string;
}

export interface ExecutionLog {
  requestId: string;
  substances: string[];
  timestamp: string;
  status: JobStatus;
}

export interface OrchestrationResult {
  requestId: string;
  analysis: AnalysisResult;
  operatorBrief: string;
  claudeAttempts: number;
}
