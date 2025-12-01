import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use the same Supabase credentials (anon key is fine for INSERT with RLS)
const supabaseUrl = 'https://urtbcmucnvuftcmundtk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVydGJjbXVjbnZ1ZnRjbXVuZHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjA3MTMsImV4cCI6MjA3OTU5NjcxM30.CeZB49NL6nebvAXYB9ISMvItl3BkTw41cnjA_jYm5Dk';

// Create Supabase client with server-side settings (no session persistence)
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  }
});

// Cookie configuration
const COOKIE_NAME = 'clp_registration';
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

// Validation helpers
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

interface RegistrationPayload {
  user_type: 'educator' | 'student';
  session_id: string;
  session_title?: string;
  email?: string;
  board_id: string;
  board_name: string;
  school_id: string;
  school_name: string;
  is_guest?: boolean;
  class_size?: string;
  grade_level: string;
  // Spam protection fields
  _honeypot?: string; // Should be empty (bots fill this)
  _timestamp?: number; // When form was loaded (for timing check)
}

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationPayload = await request.json();

    // ============================================
    // SPAM PROTECTION CHECKS
    // ============================================

    // 1. Honeypot check - this field should be empty
    // Bots often fill all fields, humans never see this field
    if (body._honeypot && body._honeypot.length > 0) {
      // Log for monitoring but return generic success (don't tip off bots)
      console.log('[SPAM] Honeypot triggered:', {
        ip: request.headers.get('x-forwarded-for') || 'unknown',
        timestamp: new Date().toISOString()
      });
      // Return fake success - bot thinks it worked
      return NextResponse.json({ success: true, id: 'blocked' });
    }

    // 2. Timing check - reject submissions faster than 1 second
    // Real users take at least a few seconds to review/submit
    if (body._timestamp) {
      const elapsed = Date.now() - body._timestamp;
      if (elapsed < 1000) { // Less than 1 second
        console.log('[SPAM] Timing check failed:', {
          elapsed,
          ip: request.headers.get('x-forwarded-for') || 'unknown'
        });
        // Return fake success
        return NextResponse.json({ success: true, id: 'blocked' });
      }
    }

    // ============================================
    // SERVER-SIDE VALIDATION
    // ============================================

    const errors: string[] = [];

    // Required for all: user_type, session_id, board_id, school_id, grade_level
    if (!body.user_type || !['educator', 'student'].includes(body.user_type)) {
      errors.push('Invalid user type');
    }

    if (!body.session_id || body.session_id.trim().length === 0) {
      errors.push('Session ID is required');
    }

    if (!body.board_id || body.board_id.trim().length === 0) {
      errors.push('Board is required');
    }

    if (!body.school_id || body.school_id.trim().length === 0) {
      errors.push('School is required');
    }

    if (!body.grade_level || body.grade_level.trim().length === 0) {
      errors.push('Grade level is required');
    }

    // Educator-specific validation
    if (body.user_type === 'educator') {
      if (!body.email || !validateEmail(body.email)) {
        errors.push('Valid email is required');
      }

      if (!body.class_size || body.class_size.trim().length === 0) {
        errors.push('Class size is required');
      }
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // ============================================
    // PREPARE DATA FOR DATABASE
    // ============================================

    // Remove spam protection fields before inserting
    const { _honeypot, _timestamp, ...registrationData } = body;

    // ============================================
    // INSERT INTO SUPABASE
    // ============================================

    // Note: Don't use .select() after insert - RLS only allows INSERT, not SELECT
    const { error } = await supabase
      .from('registrations')
      .insert([registrationData]);

    if (error) {
      console.error('[DB ERROR] Registration insert failed:', error.message);
      console.error('[DB ERROR] Full error:', JSON.stringify(error, null, 2));
      console.error('[DB ERROR] Data that failed:', JSON.stringify(registrationData, null, 2));
      return NextResponse.json(
        { success: false, error: 'Failed to save registration', details: error.message },
        { status: 500 }
      );
    }

    // ============================================
    // SET SECURE COOKIE FOR RETURNING USERS
    // ============================================

    // Build cookie data (only for educators who have identifiable info)
    const cookieData = body.user_type === 'educator' ? {
      email: body.email,
      boardId: body.board_id,
      schoolId: body.school_id,
      classSize: body.class_size,
      gradeLevel: body.grade_level,
      timestamp: new Date().toISOString(),
    } : null;

    // Create response (no ID since we can't SELECT after INSERT with current RLS)
    const response = NextResponse.json({
      success: true,
      userType: body.user_type
    });

    // Set cookie for educators (enables pre-fill on return visits)
    if (cookieData) {
      response.cookies.set(COOKIE_NAME, JSON.stringify(cookieData), {
        maxAge: COOKIE_MAX_AGE,
        path: '/',
        sameSite: 'strict', // CSRF protection
        secure: process.env.NODE_ENV === 'production', // HTTPS only in production
        httpOnly: false, // Client needs to read this for pre-fill
      });
    }

    console.log('[SUCCESS] Registration saved:', {
      userType: body.user_type,
      sessionId: body.session_id
    });

    return response;

  } catch (err) {
    console.error('[ERROR] Unexpected error in registration:', err);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
