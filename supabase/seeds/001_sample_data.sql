-- Career Launch Platform - Sample Seed Data
-- Created: 2025-10-29
-- Description: Sample data for development and testing including boards, schools, and 25 career sessions

-- ============================================================================
-- BOARDS - 5 Ontario School Boards
-- ============================================================================
INSERT INTO boards (id, name, slug) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'Toronto District School Board', 'toronto-dsb'),
    ('550e8400-e29b-41d4-a716-446655440002', 'Peel District School Board', 'peel-dsb'),
    ('550e8400-e29b-41d4-a716-446655440003', 'York Region District School Board', 'york-region-dsb'),
    ('550e8400-e29b-41d4-a716-446655440004', 'Ottawa-Carleton District School Board', 'ottawa-carleton-dsb'),
    ('550e8400-e29b-41d4-a716-446655440005', 'Durham District School Board', 'durham-dsb');

-- ============================================================================
-- SCHOOLS - 20 Schools (4 per board)
-- ============================================================================
INSERT INTO schools (id, board_id, name) VALUES
    -- Toronto DSB Schools
    ('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'Central Toronto Academy'),
    ('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', 'North York Collegiate Institute'),
    ('660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440001', 'Etobicoke Secondary School'),
    ('660e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440001', 'Scarborough High School'),

    -- Peel DSB Schools
    ('660e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440002', 'Brampton Centennial Secondary'),
    ('660e8400-e29b-41d4-a716-446655440006', '550e8400-e29b-41d4-a716-446655440002', 'Mississauga Secondary School'),
    ('660e8400-e29b-41d4-a716-446655440007', '550e8400-e29b-41d4-a716-446655440002', 'Turner Fenton Secondary School'),
    ('660e8400-e29b-41d4-a716-446655440008', '550e8400-e29b-41d4-a716-446655440002', 'Port Credit Secondary School'),

    -- York Region DSB Schools
    ('660e8400-e29b-41d4-a716-446655440009', '550e8400-e29b-41d4-a716-446655440003', 'Markham District High School'),
    ('660e8400-e29b-41d4-a716-446655440010', '550e8400-e29b-41d4-a716-446655440003', 'Richmond Hill High School'),
    ('660e8400-e29b-41d4-a716-446655440011', '550e8400-e29b-41d4-a716-446655440003', 'Vaughan Secondary School'),
    ('660e8400-e29b-41d4-a716-446655440012', '550e8400-e29b-41d4-a716-446655440003', 'Aurora High School'),

    -- Ottawa-Carleton DSB Schools
    ('660e8400-e29b-41d4-a716-446655440013', '550e8400-e29b-41d4-a716-446655440004', 'Glebe Collegiate Institute'),
    ('660e8400-e29b-41d4-a716-446655440014', '550e8400-e29b-41d4-a716-446655440004', 'Nepean High School'),
    ('660e8400-e29b-41d4-a716-446655440015', '550e8400-e29b-41d4-a716-446655440004', 'Colonel By Secondary School'),
    ('660e8400-e29b-41d4-a716-446655440016', '550e8400-e29b-41d4-a716-446655440004', 'Ridgemont High School'),

    -- Durham DSB Schools
    ('660e8400-e29b-41d4-a716-446655440017', '550e8400-e29b-41d4-a716-446655440005', 'Oshawa Central Secondary'),
    ('660e8400-e29b-41d4-a716-446655440018', '550e8400-e29b-41d4-a716-446655440005', 'Pickering High School'),
    ('660e8400-e29b-41d4-a716-446655440019', '550e8400-e29b-41d4-a716-446655440005', 'Ajax Secondary School'),
    ('660e8400-e29b-41d4-a716-446655440020', '550e8400-e29b-41d4-a716-446655440005', 'Whitby Collegiate Institute');

-- ============================================================================
-- SESSIONS - 25 Career Sessions Across 4 Blocks
-- ============================================================================

-- BLOCK 1: 5 Sessions
INSERT INTO sessions (id, slug, title, description, speaker_name, speaker_title, company, industry, duration_minutes, thumbnail_url, trailer_vimeo_id, full_video_vimeo_id, block_number, display_order) VALUES
    (
        '770e8400-e29b-41d4-a716-446655440001',
        'software-engineering-shopify',
        'Building the Future: Software Engineering at Shopify',
        'Discover what it''s like to build e-commerce solutions used by millions of businesses worldwide. Learn about the day-to-day life of a software engineer, the skills you need, and the exciting challenges of working at a leading tech company.',
        'Sarah Chen',
        'Senior Software Engineer',
        'Shopify',
        'Technology',
        20,
        'https://i.vimeocdn.com/video/1234567890_640x360.jpg',
        '987654321',
        '987654322',
        1,
        1
    ),
    (
        '770e8400-e29b-41d4-a716-446655440002',
        'registered-nurse-sickkids',
        'Caring for Tomorrow: Pediatric Nursing at SickKids',
        'Explore the rewarding career of pediatric nursing at one of the world''s leading children''s hospitals. Learn about the education pathway, the emotional rewards, and the critical role nurses play in children''s healthcare.',
        'Michael Thompson',
        'Registered Nurse, Pediatric ICU',
        'SickKids Hospital',
        'Healthcare',
        18,
        'https://i.vimeocdn.com/video/1234567891_640x360.jpg',
        '987654323',
        '987654324',
        1,
        2
    ),
    (
        '770e8400-e29b-41d4-a716-446655440003',
        'electrician-skilled-trades',
        'Powering Ontario: Career as a Licensed Electrician',
        'Learn about the skilled trades pathway to becoming a licensed electrician. Discover the apprenticeship process, earning potential, job security, and the satisfaction of building and maintaining Ontario''s electrical infrastructure.',
        'James Rodriguez',
        'Master Electrician',
        'Rodriguez Electric Ltd',
        'Skilled Trades',
        22,
        'https://i.vimeocdn.com/video/1234567892_640x360.jpg',
        '987654325',
        '987654326',
        1,
        3
    ),
    (
        '770e8400-e29b-41d4-a716-446655440004',
        'graphic-designer-agency',
        'Designing Experiences: Graphic Design in Advertising',
        'Explore the creative world of graphic design and branding. Learn how designers bring ideas to life, work with clients, and create visual content that shapes how we see brands and products.',
        'Emma Wilson',
        'Creative Director',
        'Breakthrough Agency',
        'Creative Arts',
        19,
        'https://i.vimeocdn.com/video/1234567893_640x360.jpg',
        '987654327',
        '987654328',
        1,
        4
    ),
    (
        '770e8400-e29b-41d4-a716-446655440005',
        'financial-advisor-wealth',
        'Building Wealth: Financial Planning and Advisory',
        'Discover how financial advisors help individuals and families achieve their financial goals. Learn about the certifications needed, client relationships, and the growing demand for financial literacy experts.',
        'David Park',
        'Certified Financial Planner',
        'WealthPath Advisory',
        'Finance',
        17,
        'https://i.vimeocdn.com/video/1234567894_640x360.jpg',
        '987654329',
        '987654330',
        1,
        5
    ),
    (
        '770e8400-e29b-41d4-a716-446655440006',
        'environmental-scientist-conservation',
        'Protecting Our Planet: Environmental Science Careers',
        'Learn about careers in environmental science and conservation. Explore how scientists study ecosystems, address climate change, and work to protect Ontario''s natural resources for future generations.',
        'Dr. Rachel Green',
        'Environmental Scientist',
        'Ontario Ministry of Environment',
        'Science',
        21,
        'https://i.vimeocdn.com/video/1234567895_640x360.jpg',
        '987654331',
        '987654332',
        4,
        7
    );

-- BLOCK 2: 5 Sessions
INSERT INTO sessions (id, slug, title, description, speaker_name, speaker_title, company, industry, duration_minutes, thumbnail_url, trailer_vimeo_id, full_video_vimeo_id, block_number, display_order) VALUES
    (
        '770e8400-e29b-41d4-a716-446655440007',
        'data-scientist-analytics',
        'Data Science: Turning Numbers into Insights',
        'Discover the exciting field of data science and analytics. Learn how data scientists use mathematics, statistics, and programming to solve real-world problems and drive business decisions.',
        'Priya Sharma',
        'Lead Data Scientist',
        'TD Bank',
        'Technology',
        20,
        'https://i.vimeocdn.com/video/1234567896_640x360.jpg',
        '987654333',
        '987654334',
        2,
        1
    ),
    (
        '770e8400-e29b-41d4-a716-446655440008',
        'pharmacist-community-health',
        'Community Pharmacy: Healthcare at the Front Lines',
        'Explore the vital role of community pharmacists in healthcare. Learn about pharmacy education, patient counseling, medication management, and the expanding scope of pharmacy practice.',
        'Dr. John Lee',
        'Pharmacist Owner',
        'HealthFirst Pharmacy',
        'Healthcare',
        18,
        'https://i.vimeocdn.com/video/1234567897_640x360.jpg',
        '987654335',
        '987654336',
        2,
        2
    ),
    (
        '770e8400-e29b-41d4-a716-446655440009',
        'hvac-technician-mechanical',
        'Heating & Cooling: HVAC Technician Careers',
        'Learn about the in-demand career of HVAC (Heating, Ventilation, and Air Conditioning) technician. Discover the apprenticeship path, technology skills, and opportunities in this essential trade.',
        'Carlos Martinez',
        'HVAC Journeyman',
        'Climate Control Systems',
        'Skilled Trades',
        19,
        'https://i.vimeocdn.com/video/1234567898_640x360.jpg',
        '987654337',
        '987654338',
        2,
        3
    ),
    (
        '770e8400-e29b-41d4-a716-446655440010',
        'film-producer-entertainment',
        'Lights, Camera, Career: Film & TV Production',
        'Go behind the scenes of film and television production. Learn about the various roles in production, the path from film school to professional work, and what it takes to bring stories to screen.',
        'Alex Turner',
        'Producer',
        'Northern Lights Productions',
        'Creative Arts',
        22,
        'https://i.vimeocdn.com/video/1234567899_640x360.jpg',
        '987654339',
        '987654340',
        2,
        4
    ),
    (
        '770e8400-e29b-41d4-a716-446655440011',
        'investment-banker-finance',
        'Investment Banking: High Finance Careers',
        'Discover the fast-paced world of investment banking. Learn about the education requirements, analytical skills needed, deal-making process, and career progression in corporate finance.',
        'Jennifer Wang',
        'Investment Banking Analyst',
        'RBC Capital Markets',
        'Finance',
        20,
        'https://i.vimeocdn.com/video/1234567900_640x360.jpg',
        '987654341',
        '987654342',
        2,
        5
    ),
    (
        '770e8400-e29b-41d4-a716-446655440012',
        'forensic-scientist-lab',
        'CSI Reality: Forensic Science Careers',
        'Explore the real world of forensic science. Learn how forensic scientists analyze evidence, work with law enforcement, and apply scientific methods to solve crimes and support the justice system.',
        'Dr. Mark Patterson',
        'Forensic Scientist',
        'Centre of Forensic Sciences',
        'Science',
        21,
        'https://i.vimeocdn.com/video/1234567901_640x360.jpg',
        '987654343',
        '987654344',
        4,
        8
    );

-- BLOCK 3: 7 Sessions
INSERT INTO sessions (id, slug, title, description, speaker_name, speaker_title, company, industry, duration_minutes, thumbnail_url, trailer_vimeo_id, full_video_vimeo_id, block_number, display_order) VALUES
    (
        '770e8400-e29b-41d4-a716-446655440013',
        'cybersecurity-analyst',
        'Defending the Digital World: Cybersecurity Careers',
        'Learn about the critical field of cybersecurity. Discover how security analysts protect organizations from cyber threats, the certifications needed, and the constant evolution of this in-demand career.',
        'Marcus Johnson',
        'Cybersecurity Analyst',
        'Deloitte',
        'Technology',
        19,
        'https://i.vimeocdn.com/video/1234567902_640x360.jpg',
        '987654345',
        '987654346',
        3,
        1
    ),
    (
        '770e8400-e29b-41d4-a716-446655440014',
        'physiotherapist-rehabilitation',
        'Movement & Recovery: Physiotherapy Careers',
        'Explore the rewarding career of physiotherapy. Learn how physiotherapists help patients recover from injuries, manage chronic conditions, and improve mobility and quality of life.',
        'Dr. Lisa Anderson',
        'Registered Physiotherapist',
        'Advanced Rehab Centre',
        'Healthcare',
        18,
        'https://i.vimeocdn.com/video/1234567903_640x360.jpg',
        '987654347',
        '987654348',
        3,
        2
    ),
    (
        '770e8400-e29b-41d4-a716-446655440015',
        'carpenter-construction',
        'Building Dreams: Carpentry & Construction',
        'Discover the versatile career of carpentry. Learn about residential and commercial construction, custom woodworking, the apprenticeship journey, and opportunities to run your own business.',
        'Robert Brown',
        'Master Carpenter',
        'Brown & Sons Construction',
        'Skilled Trades',
        20,
        'https://i.vimeocdn.com/video/1234567904_640x360.jpg',
        '987654349',
        '987654350',
        3,
        3
    ),
    (
        '770e8400-e29b-41d4-a716-446655440016',
        'ux-designer-tech',
        'Designing for People: UX/UI Design Careers',
        'Learn about user experience (UX) and user interface (UI) design. Discover how designers create digital products that are intuitive, accessible, and delightful to use.',
        'Maya Patel',
        'Senior UX Designer',
        'Wealthsimple',
        'Creative Arts',
        19,
        'https://i.vimeocdn.com/video/1234567905_640x360.jpg',
        '987654351',
        '987654352',
        3,
        4
    ),
    (
        '770e8400-e29b-41d4-a716-446655440017',
        'actuary-insurance',
        'Risk & Reward: Actuarial Science Careers',
        'Discover the mathematical world of actuarial science. Learn how actuaries assess financial risks, design insurance products, and use statistical models to help companies make informed decisions.',
        'Thomas Zhang',
        'Fellow Actuary (FCIA)',
        'Manulife Financial',
        'Finance',
        18,
        'https://i.vimeocdn.com/video/1234567906_640x360.jpg',
        '987654353',
        '987654354',
        3,
        5
    ),
    (
        '770e8400-e29b-41d4-a716-446655440018',
        'marine-biologist-research',
        'Ocean Exploration: Marine Biology Careers',
        'Explore careers in marine biology and oceanography. Learn about research expeditions, conservation efforts, and how scientists study and protect aquatic ecosystems.',
        'Dr. Catherine Moore',
        'Marine Biologist',
        'Fisheries and Oceans Canada',
        'Science',
        21,
        'https://i.vimeocdn.com/video/1234567907_640x360.jpg',
        '987654355',
        '987654356',
        3,
        6
    ),
    (
        '770e8400-e29b-41d4-a716-446655440019',
        'game-developer-programming',
        'Making Games: Video Game Development Careers',
        'Go inside the gaming industry and learn about game development. Discover the roles of programmers, designers, and artists in creating the games millions of people play every day.',
        'Kevin Nguyen',
        'Game Developer',
        'Ubisoft Toronto',
        'Technology',
        22,
        'https://i.vimeocdn.com/video/1234567908_640x360.jpg',
        '987654357',
        '987654358',
        3,
        7
    );

-- BLOCK 4: 8 Sessions
INSERT INTO sessions (id, slug, title, description, speaker_name, speaker_title, company, industry, duration_minutes, thumbnail_url, trailer_vimeo_id, full_video_vimeo_id, block_number, display_order) VALUES
    (
        '770e8400-e29b-41d4-a716-446655440020',
        'cloud-architect-aws',
        'Cloud Computing: Building Digital Infrastructure',
        'Learn about cloud architecture and infrastructure. Discover how cloud engineers design and manage the systems that power modern applications and services used by millions.',
        'Aisha Mohamed',
        'Cloud Solutions Architect',
        'Amazon Web Services',
        'Technology',
        20,
        'https://i.vimeocdn.com/video/1234567909_640x360.jpg',
        '987654359',
        '987654360',
        4,
        1
    ),
    (
        '770e8400-e29b-41d4-a716-446655440021',
        'medical-researcher-lab',
        'Finding Cures: Medical Research Careers',
        'Explore careers in medical research and laboratory science. Learn how researchers work to develop new treatments, conduct clinical trials, and advance our understanding of disease.',
        'Dr. William Chen',
        'Medical Research Scientist',
        'University Health Network',
        'Healthcare',
        19,
        'https://i.vimeocdn.com/video/1234567910_640x360.jpg',
        '987654361',
        '987654362',
        4,
        2
    ),
    (
        '770e8400-e29b-41d4-a716-446655440022',
        'plumber-residential-commercial',
        'Essential Infrastructure: Plumbing Trade Careers',
        'Discover the essential trade of plumbing. Learn about residential and commercial plumbing, the apprenticeship system, licensing requirements, and the strong job outlook in this skilled trade.',
        'Tony DiMarco',
        'Licensed Plumber',
        'DiMarco Plumbing Services',
        'Skilled Trades',
        18,
        'https://i.vimeocdn.com/video/1234567911_640x360.jpg',
        '987654363',
        '987654364',
        4,
        3
    ),
    (
        '770e8400-e29b-41d4-a716-446655440023',
        'architect-urban-design',
        'Shaping Cities: Architecture & Urban Design',
        'Learn about the creative and technical field of architecture. Discover how architects design buildings and spaces that shape our communities and impact how people live and work.',
        'Jennifer Santos',
        'Registered Architect',
        'Diamond Schmitt Architects',
        'Creative Arts',
        21,
        'https://i.vimeocdn.com/video/1234567912_640x360.jpg',
        '987654365',
        '987654366',
        4,
        4
    ),
    (
        '770e8400-e29b-41d4-a716-446655440024',
        'accountant-cpa-firm',
        'Numbers That Matter: Accounting & CPA Careers',
        'Explore the professional field of accounting. Learn about the CPA designation, audit and tax work, business advisory services, and the diverse career paths available to accountants.',
        'Richard Kumar',
        'Chartered Professional Accountant',
        'KPMG',
        'Finance',
        19,
        'https://i.vimeocdn.com/video/1234567913_640x360.jpg',
        '987654367',
        '987654368',
        4,
        5
    ),
    (
        '770e8400-e29b-41d4-a716-446655440025',
        'aerospace-engineer-innovation',
        'Reaching for the Stars: Aerospace Engineering',
        'Discover careers in aerospace engineering. Learn about aircraft design, space systems, propulsion technology, and how engineers push the boundaries of flight and space exploration.',
        'Dr. Christopher Bell',
        'Aerospace Engineer',
        'Bombardier Aerospace',
        'Science',
        22,
        'https://i.vimeocdn.com/video/1234567914_640x360.jpg',
        '987654369',
        '987654370',
        4,
        6
    );
