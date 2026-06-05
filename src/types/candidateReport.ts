export interface CandidateReportData {
  report_metadata: ReportMetadata;
  header_summary: HeaderSummary;
  candidate_profile_card: CandidateProfileCard;
  decision_block: DecisionBlock;
  culture_fit_assessment: CultureFitAssessment;
  risk_analysis: RiskAnalysis;
  psycholinguistics: Psycholinguistics;
  radar_chart_data: RadarChartData;
  soft_skills_detailed: SoftSkill[];
  star_cases: StarCase[];
  management_guide: ManagementGuide;
}

export interface ReportMetadata {
  candidate_id: string;
  position_profile: string;
  interview_date: string;
  language: string;
  input_artifacts: {
    has_audio: boolean;
    has_transcript: boolean;
    transcript_source: string;
  };
  privacy: {
    anonymization_applied: boolean;
    allowed_personal_data: string;
    company_names_policy: string;
  };
}

export interface HeaderSummary {
  candidate_name: string;
  match_percentage: number;
  culture_match_percentage: number;
  verdict_status: string;
  verdict_color: 'green' | 'yellow' | 'red' | string;
}

export interface CandidateProfileCard {
  experience_years: string;
  companies_type: string;
  salary_request: string;
  work_format: string;
  expectations_from_future_job: string;
}

export interface DecisionBlock {
  final_decision: string;
  arguments_pros: string[];
  arguments_cons: string[];
}

export interface CultureFitAssessment {
  match_percentage: number;
  overall_fit_summary: string;
  alignment_points: AlignmentPoint[];
  friction_points: FrictionPoint[];
  triggered_red_flags: string[];
}

export interface AlignmentPoint {
  trait: string;
  evidence_from_interview: string;
  why_it_fits: string;
}

export interface FrictionPoint {
  trait: string;
  evidence_from_interview: string;
  why_it_clashes: string;
}

export interface RiskAnalysis {
  risk_cards: RiskCard[];
  strengths_cards: StrengthCard[];
}

export interface RiskCard {
  severity: string;
  title: string;
  description: string;
}

export interface StrengthCard {
  title: string;
  description: string;
  quote: string;
}

export interface Psycholinguistics {
  ego_slider_value: number;
  ego_label_left: string;
  ego_label_right: string;
  ego_description: string;
  locus_of_control: string;
  locus_description: string;
  tone: {
    tone_textual: string;
    tone_audio: {
      overall_impression: string;
      audio_markers: AudioMarker[];
    };
  };
  key_quotes: string[];
  quotes_policy: {
    quotes_source: string;
    if_no_transcript: string;
  };
}

export interface AudioMarker {
  marker: string;
  value: string;
  impact: string;
  evidence_quotes: string[];
}

export interface RadarChartData {
  average_gap: number;
  top_risks_list: TopRisk[];
  closest_match_text: string;
}

export interface TopRisk {
  skill: string;
  gap_percent: number;
  reason: string;
}

export interface SoftSkill {
  id: string;
  name: string;
  score: number;
  short_summary: string;
  modal_content: SoftSkillModalContent;
}

export interface SoftSkillModalContent {
  benchmark_text: string;
  gap_analysis: string;
  why_not_higher: string;
  why_not_lower: string;
  chart_data: { candidate: number; benchmark: number };
  evidence_quotes: string[];
  audio_observations: {
    summary: string;
    observations: AudioObservation[];
  };
}

export interface AudioObservation {
  signal: string;
  value: string;
  impact_on_skill: string;
  supporting_quotes: string[];
}

export interface StarCase {
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  ai_assessment: {
    text: string;
    sentiment: string;
  };
}

export interface ManagementGuide {
  title: string;
  themes_to_clarify: ThemeToClarify[];
}

export interface ThemeToClarify {
  theme: string;
  why: string;
  risk_if_unchecked: string;
  questions: string[];
  what_good_looks_like: string;
  red_flags: string;
}

export type ActiveSoftSkill = SoftSkill;
