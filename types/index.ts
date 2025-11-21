// Career Launch Platform - TypeScript Type Definitions

// ============================================================================
// CORE ENTITY TYPES
// ============================================================================

export interface Session {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  learning_objectives: string[] | null;
  presenter_name: string | null;
  presenter_bio: string | null;
  presenter_photo_url: string | null;
  thumbnail_url: string | null;
  trailer_url: string | null;
  full_video_url: string | null;
  duration: number | null;
  block_number: BlockNumber;
  industries: string[];
  grade_level: string | null;
  created_at: string;
  updated_at: string;
  display_order: number;
}

// ============================================================================
// ENUM TYPES
// ============================================================================

export type BlockNumber = 1 | 2 | 3 | 4;

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
