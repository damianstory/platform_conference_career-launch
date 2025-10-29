// Career Launch Platform - TypeScript Type Definitions
// Matches database schema defined in supabase/migrations/001_initial_schema.sql

// ============================================================================
// CORE ENTITY TYPES
// ============================================================================

export interface Board {
  id: string;
  name: string;
  slug: string | null;
  created_at: string;
}

export interface School {
  id: string;
  board_id: string;
  name: string;
  created_at: string;
  // Optional joined relations
  board?: Board;
}

export interface User {
  id: string;
  email: string;
  name: string;
  school_id: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
  // Optional joined relations
  school?: School;
}

export interface Session {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  speaker_name: string | null;
  speaker_title: string | null;
  company: string | null;
  industry: string | null;
  duration_minutes: number | null;
  thumbnail_url: string | null;
  trailer_vimeo_id: string | null;
  full_video_vimeo_id: string | null;
  block_number: BlockNumber;
  display_order: number;
  created_at: string;
}

export interface ViewingEvent {
  id: string;
  user_id: string;
  session_id: string;
  class_size: ClassSize;
  large_group_count: number | null;
  grade_level: GradeLevel;
  watch_duration: number;
  completion_percentage: number;
  completed: boolean;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
  // Optional joined relations
  user?: User;
  session?: Session;
}

// ============================================================================
// ENUM TYPES (matching database check constraints)
// ============================================================================

export type UserRole = 'teacher' | 'guidance_counselor' | 'administrator' | 'other';

export type ClassSize = 'less-than-25' | '25-to-35' | 'large-group';

export type GradeLevel = 'grade-9' | 'grade-10' | 'grade-11' | 'grade-12' | 'mixed';

export type BlockNumber = 1 | 2 | 3 | 4;

// ============================================================================
// FORM DATA TYPES (for registration and viewing forms)
// ============================================================================

export interface RegistrationFormData {
  email: string;
  name: string;
  boardId: string;
  schoolId: string;
  role: UserRole;
  classSize: ClassSize;
  largeGroupCount?: number;
  gradeLevel: GradeLevel;
  sessionId: string;
}

export interface ViewingContextFormData {
  classSize: ClassSize;
  largeGroupCount?: number;
  gradeLevel: GradeLevel;
}

// ============================================================================
// API REQUEST/RESPONSE TYPES
// ============================================================================

export interface SubmitRegistrationRequest {
  email: string;
  name: string;
  boardId: string;
  schoolId: string;
  role: UserRole;
  classSize: ClassSize;
  largeGroupCount?: number;
  gradeLevel: GradeLevel;
  sessionId: string;
}

export interface SubmitRegistrationResponse {
  userId: string;
  viewingEventId: string;
}

export interface UpdateViewingEventRequest {
  viewingEventId: string;
  watchDuration: number;
  completionPercentage: number;
}

export interface CompleteViewingEventRequest {
  viewingEventId: string;
}

// ============================================================================
// UI HELPER TYPES
// ============================================================================

export interface SessionsByBlock {
  [blockNumber: number]: Session[];
}

export interface SessionCardProps {
  session: Session;
}

export interface BlockScheduleProps {
  blockNumber: BlockNumber;
  sessions: Session[];
}

// ============================================================================
// COOKIE DATA TYPE
// ============================================================================

export interface UserCookieData {
  email: string;
  name: string;
  boardId: string;
  schoolId: string;
  role: UserRole;
}

// ============================================================================
// ANALYTICS TYPES
// ============================================================================

export interface StudentReachMetrics {
  totalStudentsReached: number;
  totalViewingEvents: number;
  averageClassSize: number;
  completionRate: number;
}

export interface SessionAnalytics {
  sessionId: string;
  sessionTitle: string;
  totalViews: number;
  totalStudentsReached: number;
  averageCompletionPercentage: number;
  completionRate: number;
}

export interface EducatorAnalytics {
  userId: string;
  educatorName: string;
  schoolName: string;
  totalSessionsShown: number;
  totalStudentsReached: number;
  averageCompletionRate: number;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type WithOptional<T, K extends keyof T> = Omit<T, K> & { [P in K]?: T[P] };
