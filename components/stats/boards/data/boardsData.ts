// Board Statistics Data
// Extracted from Career Launch 2025 event (December 1-5, 2025)

export interface DailyData {
  day_name: string;       // "Monday"
  day_short: string;      // "Dec 1"
  total: number;
  educator: number;
  student: number;
  edu_width: number;      // percentage for bar width
  stu_width: number;      // percentage for bar width
  is_peak: boolean;
}

export interface GradeData {
  grade: string;          // "Grade 10", "Mixed", etc.
  sessions: number;
  width: number;          // percentage for bar width
  tier: string;           // "peak", "tier-1", "tier-2", etc.
  is_top: boolean;
}

export interface SessionData {
  title: string;
  reach: number;
  educator: number;
  student: number;
  edu_width: number;      // percentage
  stu_width: number;      // percentage
  rank: number;
  is_top3: boolean;
}

export interface SchoolData {
  name: string;
  reach: number;
  educator: number;
  student: number;
  edu_width: number;      // percentage
  stu_width: number;      // percentage
  rank: number;
  is_top3: boolean;
}

export interface BoardData {
  key: string;                    // "algoma_dsb"
  name: string;                   // "Algoma DSB"
  total_sessions: number;
  unique_educators: number;
  schools_count: number;
  educator_views: number;
  student_views: number;
  est_reach: number;
  sessions_explored: number;      // out of 27
  daily: DailyData[];
  peak_day_name: string;
  peak_percent: number;
  grades: GradeData[];
  top_grade: GradeData | null;
  top_grade_percent: number;
  sessions: SessionData[];
  schools: SchoolData[];
}

export interface BoardsStatsData {
  boards: BoardData[];
}

// Import the raw JSON data
const rawData = require('./boardsDataRaw.json') as BoardsStatsData;

export const boardsData: BoardsStatsData = rawData;

export default boardsData;
