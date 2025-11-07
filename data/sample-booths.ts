import { PlatinumBoothData, StandardBoothData } from '@/types/booth'

// ======================
// PLATINUM TIER BOOTHS
// ======================

export const techInnovators: PlatinumBoothData = {
  id: 'tech-innovators',
  name: 'Tech Innovators Inc.',
  slug: 'tech-innovators',
  tier: 'platinum',
  industry: 'Technology',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/tech-innovators.svg',
  tagline: 'Building the Future of AI & Cloud Computing',
  description: 'Tech Innovators Inc. is a leading technology company specializing in artificial intelligence, cloud computing, and sustainable tech solutions. For over 15 years, we\'ve been at the forefront of digital transformation, helping businesses and communities thrive in the digital age. Our mission is to create innovative solutions that make a positive impact on society while fostering the next generation of tech leaders through comprehensive internship programs and mentorship opportunities.',
  website: 'https://techinnovators.example.com',
  quickFacts: [
    {
      icon: 'building',
      label: 'Founded',
      value: '2008'
    },
    {
      icon: 'users',
      label: 'Employees',
      value: '3,500+'
    },
    {
      icon: 'globe',
      label: 'Global Reach',
      value: '25 Countries'
    }
  ],
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Life at Tech Innovators',
    description: 'Discover what makes Tech Innovators a great place to start your career',
    thumbnail: 'https://via.placeholder.com/1280x720/0092FF/FFFFFF?text=Watch+Our+Story'
  },
  resources: [
    {
      title: 'Career Pathways in Tech',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: 'https://example.com/career-guide.pdf',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 16-week immersive internship experience',
      url: 'https://example.com/internship-info',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and cybersecurity',
      url: 'https://example.com/workshops',
      type: 'video'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with us',
      url: 'https://example.com/success-stories',
      type: 'document'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRMx5w8FJ1dFBDQzQ5pXJO3rV/embed?start=false&loop=false',
    title: 'Emerging Tech Careers 2025',
    description: 'An interactive presentation on emerging tech careers and how to prepare for them'
  },
  engagementActivity: {
    embedUrl: 'about:blank',
    embedType: 'skills-gap-quiz',
    title: 'Tech Career Readiness Quiz',
    description: 'Test your knowledge about technology careers and discover your strengths!',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Explore Careers',
    url: 'https://techinnovators.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Ask Us Anything',
    url: 'https://techinnovators.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'students@techinnovators.example.com',
    phone: '1-800-555-TECH',
    headquarters: {
      address: '100 King Street West',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5X 1A1'
    },
    internshipInfo: {
      available: true,
      period: 'Summer 2025 (May - August)',
      applicationUrl: 'https://techinnovators.example.com/apply'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/techinnovators'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/techinnovators'
      },
      {
        platform: 'instagram',
        url: 'https://instagram.com/techinnovators'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C',
    accent: '#C6E7FF'
  }
}

export const healthCarePlus: PlatinumBoothData = {
  id: 'healthcare-plus',
  name: 'HealthCare Plus',
  slug: 'healthcare-plus',
  tier: 'platinum',
  industry: 'Healthcare',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/healthcare-plus.svg',
  tagline: 'Where Compassion Meets Innovation',
  description: 'HealthCare Plus is Ontario\'s leading healthcare provider, operating 15 hospitals and 50+ clinics across the province. We offer diverse career opportunities in nursing, allied health, administration, and medical technology. Our commitment to patient care excellence is matched only by our dedication to developing the next generation of healthcare professionals through comprehensive training programs, mentorship, and career advancement opportunities.',
  website: 'https://healthcareplus.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Healthcare Careers That Matter',
    description: 'See the impact you can make in healthcare'
  },
  resources: [
    {
      title: 'Healthcare Career Explorer',
      description: 'Discover 50+ healthcare career pathways',
      url: 'https://example.com/healthcare-careers.pdf',
      type: 'pdf',
      fileSize: '3.1 MB'
    },
    {
      title: 'PSW Training Program',
      description: 'Learn about our Personal Support Worker certification program',
      url: 'https://example.com/psw-training',
      type: 'link'
    },
    {
      title: 'Virtual Hospital Tour',
      description: 'Experience a day in the life at our facilities',
      url: 'https://example.com/virtual-tour',
      type: 'video'
    }
  ],
  primaryCTA: {
    text: 'View Open Positions',
    url: 'https://healthcareplus.example.com/careers',
    type: 'careers'
  },
  contact: {
    email: 'recruitment@healthcareplus.example.com',
    phone: '1-855-CARE-NOW',
    headquarters: {
      address: '555 University Avenue',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5G 1X8'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/healthcareplus'
      },
      {
        platform: 'facebook',
        url: 'https://facebook.com/healthcareplus'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const universityOfOntario: PlatinumBoothData = {
  id: 'university-ontario',
  name: 'University of Ontario',
  slug: 'university-ontario',
  tier: 'platinum',
  industry: 'Education',
  organizationType: 'post-secondary',
  pathway: 'university',
  logo: '/logos/university-ontario.svg',
  tagline: 'Where Ambition Meets Opportunity',
  description: 'The University of Ontario is a world-renowned research university offering over 200 undergraduate programs across arts, sciences, engineering, business, and health sciences. With a student-to-faculty ratio of 18:1, we provide personalized attention and hands-on learning experiences. Our graduates consistently rank among the most employable in Canada, with 95% finding meaningful work or pursuing graduate studies within 6 months of graduation.',
  website: 'https://universityontario.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Your Future Starts Here',
    description: 'Explore campus life at University of Ontario'
  },
  resources: [
    {
      title: 'Program Guide 2025',
      description: 'Complete guide to all undergraduate programs',
      url: 'https://example.com/program-guide.pdf',
      type: 'pdf',
      fileSize: '5.2 MB'
    },
    {
      title: 'Scholarship Opportunities',
      description: 'Over $50M in scholarships available',
      url: 'https://example.com/scholarships',
      type: 'link'
    },
    {
      title: 'Campus Virtual Tour',
      description: 'Explore our beautiful 300-acre campus',
      url: 'https://example.com/campus-tour',
      type: 'video'
    },
    {
      title: 'Residence Life Guide',
      description: 'Everything you need to know about living on campus',
      url: 'https://example.com/residence.pdf',
      type: 'pdf',
      fileSize: '1.9 MB'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRMx5w8FJ1dFBDQzQ5pXJO3rV/embed',
    title: 'Choosing Your University Program',
    description: 'Expert guidance on selecting the right path for your future'
  },
  primaryCTA: {
    text: 'Apply Now',
    url: 'https://universityontario.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Book Campus Tour',
    url: 'https://universityontario.example.com/visit',
    type: 'contact'
  },
  contact: {
    email: 'admissions@universityontario.example.com',
    phone: '1-800-GO-TO-UNI',
    headquarters: {
      address: '1000 University Drive',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M3J 1P3'
    },
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://instagram.com/universityontario'
      },
      {
        platform: 'tiktok',
        url: 'https://tiktok.com/@universityontario'
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/school/university-ontario'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const skilledTradesCollege: PlatinumBoothData = {
  id: 'skilled-trades-college',
  name: 'Ontario Skilled Trades College',
  slug: 'skilled-trades-college',
  tier: 'platinum',
  industry: 'Skilled Trades',
  organizationType: 'post-secondary',
  pathway: 'apprenticeship',
  logo: '/logos/skilled-trades.svg',
  tagline: 'Master Your Craft, Build Your Future',
  description: 'Ontario Skilled Trades College offers hands-on training in 25+ high-demand trades including electrical, plumbing, HVAC, welding, carpentry, and more. Our 95% job placement rate speaks to the quality of our programs and the demand for skilled trades professionals. With state-of-the-art facilities and partnerships with over 500 employers, we provide real-world training that leads directly to rewarding careers.',
  website: 'https://skilledtradescollege.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'The Power of Skilled Trades',
    description: 'See what our graduates are building'
  },
  resources: [
    {
      title: 'Trades Career Guide',
      description: 'Explore all 25 trades programs we offer',
      url: 'https://example.com/trades-guide.pdf',
      type: 'pdf',
      fileSize: '4.3 MB'
    },
    {
      title: 'Apprenticeship FAQs',
      description: 'Everything you need to know about becoming an apprentice',
      url: 'https://example.com/apprentice-faqs',
      type: 'link'
    },
    {
      title: 'Tool & Equipment Guide',
      description: 'What you\'ll need for your program',
      url: 'https://example.com/tools.pdf',
      type: 'pdf',
      fileSize: '800 KB'
    }
  ],
  engagementActivity: {
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform?embedded=true',
    embedType: 'google-form',
    title: 'Which Trade is Right for You?',
    description: 'Take our quick quiz to find your ideal trades career path',
    duration: '5 minutes'
  },
  primaryCTA: {
    text: 'View Programs',
    url: 'https://skilledtradescollege.example.com/programs',
    type: 'careers'
  },
  contact: {
    email: 'info@skilledtradescollege.example.com',
    phone: '1-888-TRADES-1',
    headquarters: {
      address: '789 Industrial Parkway',
      city: 'Mississauga',
      province: 'ON',
      postalCode: 'L4W 2T7'
    },
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://facebook.com/skilledtradescollege'
      },
      {
        platform: 'youtube',
        url: 'https://youtube.com/@skilledtradescollege'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const globalExplorations: PlatinumBoothData = {
  id: 'global-explorations',
  name: 'Global Explorations',
  slug: 'global-explorations',
  tier: 'platinum',
  industry: 'Education',
  organizationType: 'gap-year',
  pathway: 'gap-year',
  logo: '/logos/global-explorations.svg',
  tagline: 'Discover Yourself. Discover the World.',
  description: 'Global Explorations offers structured gap year programs in 30+ countries, combining volunteer work, cultural immersion, skill development, and adventure travel. Our programs are designed to help students gain real-world experience, develop leadership skills, learn new languages, and discover their passions before committing to a post-secondary path. 98% of our participants report increased clarity about their career goals.',
  website: 'https://globalexplorations.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'A Year That Changes Everything',
    description: 'Hear from students who took the gap year leap'
  },
  resources: [
    {
      title: 'Gap Year Program Guide',
      description: 'Explore all our international programs',
      url: 'https://example.com/gap-year-guide.pdf',
      type: 'pdf',
      fileSize: '6.8 MB'
    },
    {
      title: 'Parent Information Package',
      description: 'Everything parents need to know about gap years',
      url: 'https://example.com/parent-info',
      type: 'link'
    },
    {
      title: 'Alumni Stories',
      description: 'Where are they now? Success stories from past participants',
      url: 'https://example.com/alumni-stories',
      type: 'document'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRMx5w8FJ1dFBDQzQ5pXJO3rV/embed',
    title: 'Is a Gap Year Right for You?',
    description: 'Learn about the benefits and logistics of taking a gap year'
  },
  primaryCTA: {
    text: 'Explore Programs',
    url: 'https://globalexplorations.example.com/programs',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Speak with an Advisor',
    url: 'https://globalexplorations.example.com/advising',
    type: 'contact'
  },
  contact: {
    email: 'hello@globalexplorations.example.com',
    phone: '1-877-EXPLORE',
    headquarters: {
      address: '250 Queen Street East',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5A 1S1'
    },
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://instagram.com/globalexplorations'
      },
      {
        platform: 'tiktok',
        url: 'https://tiktok.com/@globalexplorations'
      },
      {
        platform: 'facebook',
        url: 'https://facebook.com/globalexplorations'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const financialServicesGroup: PlatinumBoothData = {
  id: 'financial-services-group',
  name: 'Financial Services Group',
  slug: 'financial-services-group',
  tier: 'platinum',
  industry: 'Finance',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/financial-services.svg',
  tagline: 'Building Financial Futures Together',
  description: 'Financial Services Group is one of Canada\'s largest banks, serving over 15 million customers nationwide. We offer exciting career opportunities in banking, investment management, financial planning, technology, and corporate services. Our award-winning student programs include co-op placements, summer internships, and rotational graduate programs that provide exposure to multiple areas of the business.',
  website: 'https://financialservicesgroup.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Your Career in Finance',
    description: 'Explore diverse opportunities in financial services'
  },
  resources: [
    {
      title: 'Financial Careers Guide',
      description: 'Discover career paths from teller to CFO',
      url: 'https://example.com/finance-careers.pdf',
      type: 'pdf',
      fileSize: '2.7 MB'
    },
    {
      title: 'Student Programs Overview',
      description: 'Co-op, internship, and graduate opportunities',
      url: 'https://example.com/student-programs',
      type: 'link'
    },
    {
      title: 'Financial Literacy Resources',
      description: 'Free courses on personal finance and investing',
      url: 'https://example.com/literacy',
      type: 'video'
    }
  ],
  primaryCTA: {
    text: 'View Student Opportunities',
    url: 'https://financialservicesgroup.example.com/students',
    type: 'careers'
  },
  contact: {
    email: 'students@fsg.example.com',
    phone: '1-800-FSG-JOBS',
    headquarters: {
      address: '1 First Canadian Place',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5X 1H3'
    },
    internshipInfo: {
      available: true,
      period: 'Year-round opportunities',
      applicationUrl: 'https://financialservicesgroup.example.com/apply'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/fsg'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/fsg'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const greenEnergyInnovations: PlatinumBoothData = {
  id: 'green-energy',
  name: 'Green Energy Innovations',
  slug: 'green-energy',
  tier: 'platinum',
  industry: 'Energy',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/green-energy.svg',
  tagline: 'Powering a Sustainable Future',
  description: 'Green Energy Innovations is a leading renewable energy company specializing in solar, wind, and battery storage solutions. We\'re committed to fighting climate change while creating meaningful careers for the next generation. Our entry-level technician training programs require no prior experience - just passion for the environment and willingness to learn. Many of our current managers started as field technicians.',
  website: 'https://greenenergyinnovations.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Join the Green Revolution',
    description: 'See how we\'re building Ontario\'s clean energy future'
  },
  resources: [
    {
      title: 'Renewable Energy Careers',
      description: 'Explore opportunities in the clean energy sector',
      url: 'https://example.com/green-careers.pdf',
      type: 'pdf',
      fileSize: '3.4 MB'
    },
    {
      title: 'Technician Training Program',
      description: 'Learn about our paid 8-week training program',
      url: 'https://example.com/training',
      type: 'link'
    }
  ],
  engagementActivity: {
    embedUrl: 'about:blank',
    embedType: 'skills-gap-quiz',
    title: 'Renewable Energy Quiz',
    description: 'Test your knowledge about clean energy and sustainability',
    duration: '8 minutes'
  },
  primaryCTA: {
    text: 'Apply for Training',
    url: 'https://greenenergyinnovations.example.com/apply',
    type: 'application'
  },
  contact: {
    email: 'careers@greenenergy.example.com',
    phone: '1-866-GO-GREEN',
    headquarters: {
      address: '888 Renewable Way',
      city: 'Ottawa',
      province: 'ON',
      postalCode: 'K1A 0B1'
    },
    internshipInfo: {
      available: true,
      period: 'Spring/Summer/Fall terms',
      applicationUrl: 'https://greenenergyinnovations.example.com/internships'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/greenenergy'
      },
      {
        platform: 'instagram',
        url: 'https://instagram.com/greenenergy'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const creativeMindsColl: PlatinumBoothData = {
  id: 'creative-minds-college',
  name: 'Creative Minds College',
  slug: 'creative-minds-college',
  tier: 'platinum',
  industry: 'Arts & Media',
  organizationType: 'post-secondary',
  pathway: 'college',
  logo: '/logos/creative-minds.svg',
  tagline: 'Where Creativity Becomes Career',
  description: 'Creative Minds College is Ontario\'s premier institution for arts, design, media, and entertainment programs. From graphic design and animation to film production and game development, we offer cutting-edge programs taught by industry professionals. Our state-of-the-art studios, industry partnerships, and project-based learning approach ensure graduates are job-ready on day one.',
  website: 'https://creativemindscollege.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Creativity Unleashed',
    description: 'See student work from our award-winning programs'
  },
  resources: [
    {
      title: 'Program Portfolio 2025',
      description: 'Browse all creative programs with sample student work',
      url: 'https://example.com/program-portfolio.pdf',
      type: 'pdf',
      fileSize: '12.5 MB'
    },
    {
      title: 'Industry Partner Network',
      description: 'See where our graduates work',
      url: 'https://example.com/partners',
      type: 'link'
    },
    {
      title: 'Virtual Studio Tour',
      description: 'Explore our animation, film, and design studios',
      url: 'https://example.com/studio-tour',
      type: 'video'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRMx5w8FJ1dFBDQzQ5pXJO3rV/embed',
    title: 'Breaking Into Creative Industries',
    description: 'Insider tips for building your creative career'
  },
  primaryCTA: {
    text: 'Explore Programs',
    url: 'https://creativemindscollege.example.com/programs',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Book Portfolio Review',
    url: 'https://creativemindscollege.example.com/portfolio-review',
    type: 'contact'
  },
  contact: {
    email: 'admissions@creativeminds.example.com',
    phone: '1-855-CREATE-1',
    headquarters: {
      address: '123 Artistic Avenue',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5T 1R8'
    },
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://instagram.com/creativemindscollege'
      },
      {
        platform: 'tiktok',
        url: 'https://tiktok.com/@creativeminds'
      },
      {
        platform: 'youtube',
        url: 'https://youtube.com/@creativeminds'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

// ======================
// STANDARD TIER BOOTHS
// ======================

export const localManufacturing: StandardBoothData = {
  id: 'local-manufacturing',
  name: 'Ontario Local Manufacturing Co.',
  slug: 'local-manufacturing',
  tier: 'standard',
  industry: 'Manufacturing',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/local-manufacturing.svg',
  tagline: 'Building Products, Building Careers',
  description: 'Ontario Local Manufacturing is a family-owned company producing precision automotive parts for major manufacturers across North America. We\'re actively hiring for machine operator, quality control, and production supervisor roles. We offer paid on-the-job training, competitive wages starting at $22/hour, benefits after 90 days, and clear career progression paths.',
  website: 'https://localmanufacturing.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Inside Our Facility',
    description: 'See our modern manufacturing operations'
  },
  resources: [
    {
      title: 'Open Positions',
      description: 'View current job openings and requirements',
      url: 'https://example.com/jobs.pdf',
      type: 'pdf',
      fileSize: '400 KB'
    },
    {
      title: 'Application Guide',
      description: 'How to apply and what to expect',
      url: 'https://example.com/apply-guide',
      type: 'link'
    },
    {
      title: 'Benefits Overview',
      description: 'Our compensation and benefits package',
      url: 'https://example.com/benefits.pdf',
      type: 'pdf',
      fileSize: '250 KB'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform?embedded=true',
  primaryCTA: {
    text: 'Apply Now',
    url: 'https://localmanufacturing.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Schedule Tour',
    url: 'https://localmanufacturing.example.com/tour',
    type: 'contact'
  },
  contact: {
    email: 'hr@localmanufacturing.example.com',
    phone: '905-555-MAKE',
    headquarters: {
      address: '45 Industrial Drive',
      city: 'Hamilton',
      province: 'ON',
      postalCode: 'L8E 2X9'
    },
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://facebook.com/localmanufacturing'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const communityCollege: StandardBoothData = {
  id: 'community-college',
  name: 'Northern Ontario Community College',
  slug: 'community-college',
  tier: 'standard',
  industry: 'Education',
  organizationType: 'post-secondary',
  pathway: 'college',
  logo: '/logos/community-college.svg',
  tagline: 'Accessible Education, Real Results',
  description: 'Northern Ontario Community College offers affordable, career-focused programs with small class sizes and personalized attention. With campuses in 7 communities, we make post-secondary education accessible across Northern Ontario. Our programs in business, healthcare, trades, and technology are designed with employer input to ensure graduates have the skills employers actually need.',
  website: 'https://northerncollege.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Your Community College',
    description: 'Discover accessible education close to home'
  },
  resources: [
    {
      title: 'Program Guide 2025',
      description: 'All programs and admission requirements',
      url: 'https://example.com/programs.pdf',
      type: 'pdf',
      fileSize: '2.1 MB'
    },
    {
      title: 'Financial Aid & Scholarships',
      description: 'How to make college affordable',
      url: 'https://example.com/financial-aid',
      type: 'link'
    },
    {
      title: 'Campus Locations',
      description: 'Find the campus closest to you',
      url: 'https://example.com/campuses',
      type: 'link'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform?embedded=true',
  primaryCTA: {
    text: 'Apply for Fall 2025',
    url: 'https://northerncollege.example.com/apply',
    type: 'application'
  },
  contact: {
    email: 'info@northerncollege.example.com',
    phone: '1-800-NO-COLLEGE',
    headquarters: {
      address: '640 Elm Street',
      city: 'Sudbury',
      province: 'ON',
      postalCode: 'P3E 2E4'
    },
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://facebook.com/northerncollege'
      },
      {
        platform: 'instagram',
        url: 'https://instagram.com/northerncollege'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const retailCareers: StandardBoothData = {
  id: 'retail-careers',
  name: 'Ontario Retail Partners',
  slug: 'retail-careers',
  tier: 'standard',
  industry: 'Retail',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/retail-partners.svg',
  tagline: 'Start Here, Go Anywhere',
  description: 'Ontario Retail Partners represents a network of 15+ retail brands offering part-time and full-time opportunities across the province. Retail is an excellent starting point for developing customer service, sales, inventory management, and leadership skills. Many of our district and regional managers started as part-time sales associates while in high school or college.',
  website: 'https://retailcareers.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Retail Careers That Grow With You',
    description: 'Hear from associates who advanced to management'
  },
  resources: [
    {
      title: 'Retail Career Ladder',
      description: 'See how far you can go in retail',
      url: 'https://example.com/career-ladder.pdf',
      type: 'pdf',
      fileSize: '600 KB'
    },
    {
      title: 'Available Positions',
      description: 'Browse current openings by location',
      url: 'https://example.com/positions',
      type: 'link'
    },
    {
      title: 'Employee Perks',
      description: 'Discounts, benefits, and scheduling flexibility',
      url: 'https://example.com/perks',
      type: 'link'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform?embedded=true',
  primaryCTA: {
    text: 'Search Jobs',
    url: 'https://retailcareers.example.com/jobs',
    type: 'careers'
  },
  contact: {
    email: 'hiring@retailcareers.example.com',
    phone: '1-888-RETAIL-1',
    headquarters: {
      address: '200 Commerce Way',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M1P 5B4'
    },
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://instagram.com/retailcareers'
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/retailcareers'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const publicServiceCareers: StandardBoothData = {
  id: 'public-service',
  name: 'Ontario Public Service',
  slug: 'public-service',
  tier: 'standard',
  industry: 'Government',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/public-service.svg',
  tagline: 'Serve Your Community, Build Your Career',
  description: 'The Ontario Public Service employs over 70,000 people in hundreds of different roles across the province. From policy analysts and social workers to IT specialists and project managers, we offer meaningful careers that make a difference. We\'re committed to building a diverse workforce that reflects the communities we serve, with competitive compensation, excellent benefits, and strong work-life balance.',
  website: 'https://ontariopublicservice.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'youtube',
    title: 'Public Service Careers',
    description: 'Discover the diverse roles in government'
  },
  resources: [
    {
      title: 'Student Programs Guide',
      description: 'Co-op, internship, and summer opportunities',
      url: 'https://example.com/student-programs.pdf',
      type: 'pdf',
      fileSize: '1.5 MB'
    },
    {
      title: 'Career Exploration Tool',
      description: 'Find roles that match your interests and skills',
      url: 'https://example.com/career-tool',
      type: 'link'
    },
    {
      title: 'Benefits Overview',
      description: 'Comprehensive benefits and pension information',
      url: 'https://example.com/benefits.pdf',
      type: 'pdf',
      fileSize: '900 KB'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform?embedded=true',
  primaryCTA: {
    text: 'View Opportunities',
    url: 'https://ontariopublicservice.example.com/careers',
    type: 'careers'
  },
  contact: {
    email: 'recruitment@ops.example.com',
    phone: '1-866-ONT-JOBS',
    headquarters: {
      address: '900 Bay Street',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M7A 1N3'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/ontario-public-service'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/ONpublicservice'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

// ======================
// EXPORTS
// ======================

export const allBooths: Array<PlatinumBoothData | StandardBoothData> = [
  // Platinum Tier
  techInnovators,
  healthCarePlus,
  universityOfOntario,
  skilledTradesCollege,
  globalExplorations,
  financialServicesGroup,
  greenEnergyInnovations,
  creativeMindsColl,
  // Standard Tier
  localManufacturing,
  communityCollege,
  retailCareers,
  publicServiceCareers
]

export const platinumBooths = allBooths.filter(booth => booth.tier === 'platinum') as PlatinumBoothData[]
export const standardBooths = allBooths.filter(booth => booth.tier === 'standard') as StandardBoothData[]

// Helper function to get booth by slug
export function getBoothBySlug(slug: string): (PlatinumBoothData | StandardBoothData) | undefined {
  return allBooths.find(booth => booth.slug === slug)
}

// Helper function to filter booths
export function filterBooths(
  booths: Array<PlatinumBoothData | StandardBoothData>,
  filters: {
    organizationType?: 'all' | 'employer' | 'post-secondary' | 'gap-year'
    industries?: string[]
  }
) {
  let filtered = [...booths]

  if (filters.organizationType && filters.organizationType !== 'all') {
    filtered = filtered.filter(booth => booth.organizationType === filters.organizationType)
  }

  if (filters.industries && filters.industries.length > 0) {
    filtered = filtered.filter(booth => filters.industries!.includes(booth.industry))
  }

  return filtered
}
