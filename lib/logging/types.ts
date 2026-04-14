export type RequestStatus = 'success' | 'fail';

export interface RequestLog {
  /** Unique ID for this request (from orchestrator or pre-validation) */
  requestId: string;
  /** ISO 8601 timestamp at point of logging */
  timestamp: string;
  /** Raw input substances (as submitted) */
  substances: string[];
  /** riskLevel from AnalysisResult — null on validation/upstream failure */
  riskLevel: string | null;
  /** End-to-end response time in milliseconds */
  responseTime: number;
  /** Whether the request completed successfully */
  status: RequestStatus;
  /** Error message, present on status=fail */
  error?: string;
}
