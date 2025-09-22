


export type Status = 'OK' | 'Not OK' | 'N/A' | null;

export interface AssessmentItemInstance {
  status: Status;
  description: string;
  photo: File | null;
}

export interface AssessmentItem {
  id: string;
  text: string;
  isRepeatable?: boolean;
  instances: AssessmentItemInstance[];
}

export interface AssessmentSection {
  title: string;
  items: AssessmentItem[];
}

export interface HeaderData {
  assessmentDate: string;
  areaLocation: string;
  assessorName: string;
}

export interface FollowUpData {
  summary: string;
  recommendations: string;
  personInCharge: string;
  targetDate: string;
}

export interface FormData {
  header: HeaderData;
  sections: AssessmentSection[];
  followUp: FollowUpData;
}