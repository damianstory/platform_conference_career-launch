import { createClient } from '@supabase/supabase-js';

// Hardcoded to avoid env var caching issues in Next.js 15
// These are public values (exposed in browser bundle anyway)
// Security is enforced via Supabase RLS policies, not key secrecy
const supabaseUrl = 'https://urtbcmucnvuftcmundtk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVydGJjbXVjbnZ1ZnRjbXVuZHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjA3MTMsImV4cCI6MjA3OTU5NjcxM30.CeZB49NL6nebvAXYB9ISMvItl3BkTw41cnjA_jYm5Dk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface RegistrationRecord {
  id?: string;
  created_at?: string;
  updated_at?: string;
  user_type: 'educator' | 'student';
  first_name?: string;
  email?: string;
  board_id?: string;
  board_name?: string;
  school_id?: string;
  school_name?: string;
  is_guest?: boolean;
  class_size?: string;
  grade_level?: string;
  session_id: string;
  session_title?: string;
}

export interface ViewingEventRecord {
  id?: string;
  created_at?: string;
  registration_id?: string;
  session_id: string;
  session_title?: string;
  watch_duration_seconds?: number;
  completion_percentage?: number;
  completed?: boolean;
  completed_at?: string;
  user_type?: string;
  class_size?: string;
  grade_level?: string;
}
