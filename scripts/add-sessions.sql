-- Add 2 new sessions: 1 to Block 1, 1 to Block 2

-- Block 1: Add Mental Health Counseling (Healthcare)
INSERT INTO sessions (
    id,
    slug,
    title,
    description,
    speaker_name,
    speaker_title,
    company,
    industry,
    duration_minutes,
    thumbnail_url,
    trailer_vimeo_id,
    full_video_vimeo_id,
    block_number,
    display_order
) VALUES (
    gen_random_uuid(),
    'mental-health-counseling',
    'Mental Health Counseling: Supporting Emotional Wellbeing',
    'Explore the rewarding career of mental health counseling. Learn about the education pathway, therapeutic approaches, and the vital role counselors play in supporting individuals through life''s challenges.',
    'Dr. Amira Hassan',
    'Registered Psychotherapist',
    'Wellness Centre Toronto',
    'Healthcare',
    19,
    '/images/sessions/mental-health-thumb.jpg',
    '987654371',
    '987654372',
    1,
    6
);

-- Block 2: Add AI & Machine Learning (Technology)
INSERT INTO sessions (
    id,
    slug,
    title,
    description,
    speaker_name,
    speaker_title,
    company,
    industry,
    duration_minutes,
    thumbnail_url,
    trailer_vimeo_id,
    full_video_vimeo_id,
    block_number,
    display_order
) VALUES (
    gen_random_uuid(),
    'ai-machine-learning',
    'AI & Machine Learning: Building Intelligent Systems',
    'Discover the cutting-edge field of artificial intelligence and machine learning. Learn how AI engineers train models, solve complex problems, and create systems that can learn and adapt.',
    'Dr. James Kim',
    'AI Research Engineer',
    'Google DeepMind',
    'Technology',
    21,
    '/images/sessions/ai-ml-thumb.jpg',
    '987654373',
    '987654374',
    2,
    6
);
