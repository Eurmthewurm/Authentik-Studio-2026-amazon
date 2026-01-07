export interface FounderStoryArc {
  hook: string;
  conflict: string;
  resolution: string;
}

export interface AuditResult {
  searchLeakage: string[];
  objectionCrushers: string[];
  searchInterceptHooks: string[];
  founderStory: FounderStoryArc;
  competitorVulnerability: string;
  estimatedLostRevenue: string;
}

export interface GenerationState {
  isLoading: boolean;
  error: string | null;
  result: AuditResult | null;
}

export enum Section {
  HOME = 'home',
  LOGIC = 'logic',
  PROCESS = 'process',
  TOOL = 'tool',
  CONTACT = 'contact'
}