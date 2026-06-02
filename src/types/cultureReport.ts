export interface OcpParameter {
  id: number;
  name_en: string;
  name_ru?: string;
  score: number;
  is_declarative: boolean;
  micro_reason?: string;
  evidence_quote?: string | null;
}

export interface BigNineItem {
  score: number;
  summary: string;
  modal_content: {
    detailed_gap_analysis: string;
    contributing_ocp_parameters: OcpParameter[];
  };
}

export interface RiskItem {
  risk_title: string;
  severity: string;
  description: string;
}

export interface DiagnosticQuestion {
  question: string;
  eval_criteria: string;
  target_indicator: string;
  red_flag: string;
}

export interface TalentmindEvaluationPrism {
  target_cultural_fit: string;
  diagnostic_questions: DiagnosticQuestion[];
  red_flags: string[];
}

export interface CultureReportData {
  artifact_metadata: {
    analyzed_documents: string[];
    total_text_volume_chars?: number;
    confidence_score: number;
  };
  general_info?: {
    company_name?: string;
    industry: string;
    tone_of_voice: string;
  };
  authenticity_index?: 'High' | 'Medium' | 'Low' | string;
  authenticity_reason?: string;
  executive_summary: {
    culture_uniqueness: string;
    culture_type: string;
    key_findings?: string;
    dominant_values: string[];
    cultural_contradictions?: string[];
  };
  big_nine_detailed_analysis: Record<string, BigNineItem>;
  raw_ocp_profile: Array<{ id: number; name_en: string; score: number; is_declarative: boolean }>;
  risks_and_weaknesses: RiskItem[];
  talentmind_evaluation_prism?: TalentmindEvaluationPrism;
}

export type ActiveBigNine = { key: string } & BigNineItem;
