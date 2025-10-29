-- Career Launch Platform - Initial Database Schema
-- Created: 2025-10-29
-- Description: Complete schema for Career Launch Platform including boards, schools, users, sessions, and viewing events

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- BOARDS TABLE - Ontario School Boards
-- ============================================================================
CREATE TABLE boards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for slug lookups
CREATE INDEX idx_boards_slug ON boards(slug);

-- ============================================================================
-- SCHOOLS TABLE - Schools within boards
-- ============================================================================
CREATE TABLE schools (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    board_id UUID NOT NULL REFERENCES boards(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Composite index for efficient lookups by board and name
CREATE INDEX idx_schools_board_name ON schools(board_id, name);

-- ============================================================================
-- USERS TABLE - Educator profiles (no authentication, just profiles)
-- ============================================================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('teacher', 'guidance_counselor', 'administrator', 'other')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for user lookups
CREATE UNIQUE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_school ON users(school_id);
CREATE INDEX idx_users_role ON users(role);

-- ============================================================================
-- SESSIONS TABLE - 25 Career Video Sessions
-- ============================================================================
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT,
    speaker_name TEXT,
    speaker_title TEXT,
    company TEXT,
    industry TEXT,
    duration_minutes INTEGER,
    thumbnail_url TEXT,
    trailer_vimeo_id TEXT,
    full_video_vimeo_id TEXT,
    block_number INTEGER NOT NULL CHECK (block_number >= 1 AND block_number <= 4),
    display_order INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for session lookups
CREATE UNIQUE INDEX idx_sessions_slug ON sessions(slug);
CREATE INDEX idx_sessions_block ON sessions(block_number, display_order);
CREATE INDEX idx_sessions_industry ON sessions(industry);

-- ============================================================================
-- VIEWING_EVENTS TABLE - Tracks each time a video is shown to a class
-- ============================================================================
CREATE TABLE viewing_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
    class_size TEXT NOT NULL CHECK (class_size IN ('less-than-25', '25-to-35', 'large-group')),
    large_group_count INTEGER,
    grade_level TEXT NOT NULL CHECK (grade_level IN ('grade-9', 'grade-10', 'grade-11', 'grade-12', 'mixed')),
    watch_duration INTEGER DEFAULT 0,
    completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for viewing event analytics
CREATE INDEX idx_viewing_events_user ON viewing_events(user_id);
CREATE INDEX idx_viewing_events_session ON viewing_events(session_id);
CREATE INDEX idx_viewing_events_created ON viewing_events(created_at DESC);
CREATE INDEX idx_viewing_events_completed ON viewing_events(completed, completed_at);

-- Composite index for user session history
CREATE INDEX idx_viewing_events_user_session ON viewing_events(user_id, session_id, created_at DESC);

-- ============================================================================
-- TRIGGER: Auto-update updated_at timestamp
-- ============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_viewing_events_updated_at
    BEFORE UPDATE ON viewing_events
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) - Disabled for initial development
-- ============================================================================
-- Note: RLS policies are disabled initially for easier development.
-- Enable RLS in production with appropriate policies.

-- Disable RLS on all tables for now
ALTER TABLE boards DISABLE ROW LEVEL SECURITY;
ALTER TABLE schools DISABLE ROW LEVEL SECURITY;
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE viewing_events DISABLE ROW LEVEL SECURITY;

-- ============================================================================
-- COMMENTS - Documentation for tables and columns
-- ============================================================================
COMMENT ON TABLE boards IS 'Ontario school boards';
COMMENT ON TABLE schools IS 'Schools within Ontario school boards';
COMMENT ON TABLE users IS 'Educator profiles (teachers, guidance counselors, administrators) - no authentication';
COMMENT ON TABLE sessions IS '25 career education video sessions organized into 4 time blocks';
COMMENT ON TABLE viewing_events IS 'Tracks each time an educator shows a video to their class with viewing context';

COMMENT ON COLUMN viewing_events.class_size IS 'Size category of the class watching: less-than-25, 25-to-35, or large-group';
COMMENT ON COLUMN viewing_events.large_group_count IS 'Exact student count when class_size is large-group';
COMMENT ON COLUMN viewing_events.watch_duration IS 'Total seconds watched';
COMMENT ON COLUMN viewing_events.completion_percentage IS 'Percentage of video watched (0-100)';
COMMENT ON COLUMN viewing_events.completed IS 'True if >=80% of video was watched';
