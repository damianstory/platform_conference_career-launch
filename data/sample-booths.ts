import { PlatinumBoothData, StandardBoothData } from '@/types/booth'

// ======================
// PLATINUM TIER BOOTHS (26 TOTAL)
// ======================

export const healthFirst: PlatinumBoothData = {
  id: 'health-first',
  name: 'HealthFirst',
  slug: 'health-first',
  tier: 'platinum',
  industry: 'Healthcare',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Where compassion meets medical innovation',
  description: 'HealthFirst is Ontario\'s leading healthcare provider with diverse career opportunities in nursing, allied health, and medical technology.',
  website: 'https://healthfirst.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Healthcare Careers',
    description: 'See the impact you can make'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'View Positions',
    url: 'https://healthfirst.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://healthfirst.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'recruitment@healthfirst.example.com',
    phone: '1-855-555-CARE',
    headquarters: {
      address: '555 University Avenue',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5G 1X8'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@healthfirst' },
      { platform: 'twitter', url: 'https://twitter.com/healthfirst' },
      { platform: 'instagram', url: 'https://instagram.com/healthfirst' },
      { platform: 'facebook', url: 'https://facebook.com/healthfirst' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const futureBuild: PlatinumBoothData = {
  id: 'future-build',
  name: 'FutureBuild Co',
  slug: 'future-build',
  tier: 'platinum',
  industry: 'Engineering',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Engineering sustainable infrastructure solutions',
  description: 'FutureBuild Co is a leading engineering firm specializing in sustainable infrastructure and innovative building solutions.',
  website: 'https://futurebuild.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Building Tomorrow',
    description: 'Discover engineering careers'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Join Our Team',
    url: 'https://futurebuild.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://futurebuild.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@futurebuild.example.com',
    phone: '1-800-555-BUILD',
    headquarters: {
      address: '200 Engineering Drive',
      city: 'Ottawa',
      province: 'ON',
      postalCode: 'K1A 0B1'
    },
    internshipInfo: {
      available: true,
      period: 'Year-round opportunities',
      applicationUrl: 'https://futurebuild.example.com/apply'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@futurebuild' },
      { platform: 'twitter', url: 'https://twitter.com/futurebuild' },
      { platform: 'instagram', url: 'https://instagram.com/futurebuild' },
      { platform: 'facebook', url: 'https://facebook.com/futurebuild' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const financeHub: PlatinumBoothData = {
  id: 'finance-hub',
  name: 'FinanceHub',
  slug: 'finance-hub',
  tier: 'platinum',
  industry: 'Finance',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Your financial future starts here',
  description: 'FinanceHub is one of Canada\'s leading financial institutions offering exciting career opportunities in banking, investment, and financial planning.',
  website: 'https://financehub.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Career in Finance',
    description: 'Explore financial services careers'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'View Opportunities',
    url: 'https://financehub.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://financehub.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'students@financehub.example.com',
    phone: '1-800-555-MONEY',
    headquarters: {
      address: '1 Financial Place',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5X 1H3'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@financehub' },
      { platform: 'twitter', url: 'https://twitter.com/financehub' },
      { platform: 'instagram', url: 'https://instagram.com/financehub' },
      { platform: 'facebook', url: 'https://facebook.com/financehub' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const eduPath: PlatinumBoothData = {
  id: 'edupath',
  name: 'EduPath',
  slug: 'edupath',
  tier: 'platinum',
  industry: 'Education',
  organizationType: 'post-secondary',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Where ambition meets educational excellence',
  description: 'EduPath is a world-renowned institution offering over 200 undergraduate programs with exceptional career preparation.',
  website: 'https://edupath.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Your Future',
    description: 'Explore campus life'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Apply Now',
    url: 'https://edupath.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://edupath.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'admissions@edupath.example.com',
    phone: '1-800-555-LEARN',
    headquarters: {
      address: '1000 University Drive',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M3J 1P3'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@edupath' },
      { platform: 'twitter', url: 'https://twitter.com/edupath' },
      { platform: 'instagram', url: 'https://instagram.com/edupath' },
      { platform: 'facebook', url: 'https://facebook.com/edupath' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const tradesMaster: PlatinumBoothData = {
  id: 'trades-master',
  name: 'TradesMaster',
  slug: 'trades-master',
  tier: 'platinum',
  industry: 'Skilled Trades',
  organizationType: 'post-secondary',
  pathway: 'apprenticeship',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Master your craft build your future',
  description: 'Conestoga is a leader in polytechnic education delivering a full range of career-focused education, training and applied research programs to prepare students for success in the new knowledge economy and promote economic prosperity throughout our region and across Ontario.',
  website: 'https://tradesmaster.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Power of Trades',
    description: 'See what our graduates build'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'View Programs',
    url: 'https://tradesmaster.example.com/programs',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://tradesmaster.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'info@tradesmaster.example.com',
    phone: '1-888-555-TRADE',
    headquarters: {
      address: '789 Industrial Parkway',
      city: 'Mississauga',
      province: 'ON',
      postalCode: 'L4W 2T7'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@tradesmaster' },
      { platform: 'twitter', url: 'https://twitter.com/tradesmaster' },
      { platform: 'instagram', url: 'https://instagram.com/tradesmaster' },
      { platform: 'facebook', url: 'https://facebook.com/tradesmaster' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const worldExplorer: PlatinumBoothData = {
  id: 'world-explorer',
  name: 'WorldExplorer',
  slug: 'world-explorer',
  tier: 'platinum',
  industry: 'Education',
  organizationType: 'gap-year',
  pathway: 'gap-year',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Discover yourself discover the world',
  description: 'WorldExplorer offers structured gap year programs combining volunteer work, cultural immersion, and skill development.',
  website: 'https://worldexplorer.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Year of Change',
    description: 'Hear from gap year students'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Explore Programs',
    url: 'https://worldexplorer.example.com/programs',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://worldexplorer.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'hello@worldexplorer.example.com',
    phone: '1-877-555-WORLD',
    headquarters: {
      address: '250 Queen Street East',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5A 1S1'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@worldexplorer' },
      { platform: 'twitter', url: 'https://twitter.com/worldexplorer' },
      { platform: 'instagram', url: 'https://instagram.com/worldexplorer' },
      { platform: 'facebook', url: 'https://facebook.com/worldexplorer' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const greenPower: PlatinumBoothData = {
  id: 'green-power',
  name: 'GreenPower Inc',
  slug: 'green-power',
  tier: 'platinum',
  industry: 'Energy',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Powering sustainable tomorrow together',
  description: 'GreenPower Inc is a leading renewable energy company fighting climate change while creating meaningful careers.',
  website: 'https://greenpower.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Green Revolution',
    description: 'Building Ontario\'s clean energy future'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Apply for Training',
    url: 'https://greenpower.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://greenpower.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@greenpower.example.com',
    phone: '1-866-555-GREEN',
    headquarters: {
      address: '888 Renewable Way',
      city: 'Ottawa',
      province: 'ON',
      postalCode: 'K1A 0B1'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@greenpower' },
      { platform: 'twitter', url: 'https://twitter.com/greenpower' },
      { platform: 'instagram', url: 'https://instagram.com/greenpower' },
      { platform: 'facebook', url: 'https://facebook.com/greenpower' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const creativeMinds: PlatinumBoothData = {
  id: 'creative-minds',
  name: 'CreativeMinds',
  slug: 'creative-minds',
  tier: 'platinum',
  industry: 'Arts & Media',
  organizationType: 'post-secondary',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Where creativity becomes successful career',
  description: 'CreativeMinds is Ontario\'s premier institution for arts, design, media, and entertainment programs.',
  website: 'https://creativeminds.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Creativity Unleashed',
    description: 'See award-winning student work'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Explore Programs',
    url: 'https://creativeminds.example.com/programs',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://creativeminds.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'admissions@creativeminds.example.com',
    phone: '1-855-555-CREATE',
    headquarters: {
      address: '123 Artistic Avenue',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5T 1R8'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@creativeminds' },
      { platform: 'twitter', url: 'https://twitter.com/creativeminds' },
      { platform: 'instagram', url: 'https://instagram.com/creativeminds' },
      { platform: 'facebook', url: 'https://facebook.com/creativeminds' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const dataDynamics: PlatinumBoothData = {
  id: 'data-dynamics',
  name: 'DataDynamics',
  slug: 'data-dynamics',
  tier: 'platinum',
  industry: 'Technology',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Transform data into powerful insights',
  description: 'DataDynamics specializes in data science, analytics, and machine learning solutions for enterprise clients.',
  website: 'https://datadynamics.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Data Science Careers',
    description: 'Explore data-driven opportunities'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Join Our Team',
    url: 'https://datadynamics.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://datadynamics.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'talent@datadynamics.example.com',
    phone: '1-800-555-DATA',
    headquarters: {
      address: '500 Tech Boulevard',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5V 2T6'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@datadynamics' },
      { platform: 'twitter', url: 'https://twitter.com/datadynamics' },
      { platform: 'instagram', url: 'https://instagram.com/datadynamics' },
      { platform: 'facebook', url: 'https://facebook.com/datadynamics' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const marketGenius: PlatinumBoothData = {
  id: 'market-genius',
  name: 'MarketGenius',
  slug: 'market-genius',
  tier: 'platinum',
  industry: 'Marketing',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Creating brands that inspire action',
  description: 'MarketGenius is a full-service marketing agency creating innovative campaigns for leading Canadian brands.',
  website: 'https://marketgenius.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Marketing Excellence',
    description: 'See our award-winning campaigns'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'View Openings',
    url: 'https://marketgenius.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://marketgenius.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@marketgenius.example.com',
    phone: '1-855-555-MARKET',
    headquarters: {
      address: '300 Creative Drive',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5H 3Y2'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@marketgenius' },
      { platform: 'twitter', url: 'https://twitter.com/marketgenius' },
      { platform: 'instagram', url: 'https://instagram.com/marketgenius' },
      { platform: 'facebook', url: 'https://facebook.com/marketgenius' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const consultPro: PlatinumBoothData = {
  id: 'consult-pro',
  name: 'ConsultPro',
  slug: 'consult-pro',
  tier: 'platinum',
  industry: 'Consulting',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Solving complex business challenges daily',
  description: 'ConsultPro is a leading management consulting firm helping organizations achieve transformational results.',
  website: 'https://consultpro.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Consulting Careers',
    description: 'Discover management consulting'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Apply Now',
    url: 'https://consultpro.example.com/careers',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://consultpro.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'recruiting@consultpro.example.com',
    phone: '1-800-555-CONSULT',
    headquarters: {
      address: '400 Business Plaza',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5K 1E3'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@consultpro' },
      { platform: 'twitter', url: 'https://twitter.com/consultpro' },
      { platform: 'instagram', url: 'https://instagram.com/consultpro' },
      { platform: 'facebook', url: 'https://facebook.com/consultpro' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const manufactureTech: PlatinumBoothData = {
  id: 'manufacture-tech',
  name: 'ManufactureTech',
  slug: 'manufacture-tech',
  tier: 'platinum',
  industry: 'Manufacturing',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Building products building careers',
  description: 'ManufactureTech is an advanced manufacturing company producing precision components for automotive and aerospace.',
  website: 'https://manufacturetech.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Modern Manufacturing',
    description: 'See our state-of-the-art facility'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Apply Today',
    url: 'https://manufacturetech.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://manufacturetech.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'hr@manufacturetech.example.com',
    phone: '905-555-5678',
    headquarters: {
      address: '45 Industrial Drive',
      city: 'Hamilton',
      province: 'ON',
      postalCode: 'L8E 2X9'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@manufacturetech' },
      { platform: 'twitter', url: 'https://twitter.com/manufacturetech' },
      { platform: 'instagram', url: 'https://instagram.com/manufacturetech' },
      { platform: 'facebook', url: 'https://facebook.com/manufacturetech' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const cyberShield: PlatinumBoothData = {
  id: 'cyber-shield',
  name: 'CyberShield',
  slug: 'cyber-shield',
  tier: 'platinum',
  industry: 'Technology',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Protecting digital futures every day',
  description: 'CyberShield provides enterprise cybersecurity solutions protecting organizations from evolving digital threats.',
  website: 'https://cybershield.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Security Careers',
    description: 'Explore cybersecurity opportunities'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Join Our Team',
    url: 'https://cybershield.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://cybershield.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@cybershield.example.com',
    phone: '1-888-555-CYBER',
    headquarters: {
      address: '600 Security Way',
      city: 'Ottawa',
      province: 'ON',
      postalCode: 'K2P 0R4'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@cybershield' },
      { platform: 'twitter', url: 'https://twitter.com/cybershield' },
      { platform: 'instagram', url: 'https://instagram.com/cybershield' },
      { platform: 'facebook', url: 'https://facebook.com/cybershield' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const bioMedical: PlatinumBoothData = {
  id: 'bio-medical',
  name: 'BioMedical',
  slug: 'bio-medical',
  tier: 'platinum',
  industry: 'Healthcare',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Advancing medical science for humanity',
  description: 'BioMedical is a research-focused pharmaceutical company developing breakthrough treatments for critical diseases.',
  website: 'https://biomedical.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Medical Innovation',
    description: 'Discover pharmaceutical research careers'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'View Positions',
    url: 'https://biomedical.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://biomedical.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'talent@biomedical.example.com',
    phone: '1-800-555-BIOMED',
    headquarters: {
      address: '700 Research Parkway',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M2N 6K1'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@biomedical' },
      { platform: 'twitter', url: 'https://twitter.com/biomedical' },
      { platform: 'instagram', url: 'https://instagram.com/biomedical' },
      { platform: 'facebook', url: 'https://facebook.com/biomedical' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const architectDesign: PlatinumBoothData = {
  id: 'architect-design',
  name: 'ArchitectDesign',
  slug: 'architect-design',
  tier: 'platinum',
  industry: 'Engineering',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Designing spaces that inspire life',
  description: 'ArchitectDesign is an award-winning architectural firm creating sustainable and innovative building designs.',
  website: 'https://architectdesign.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Architecture Careers',
    description: 'See our portfolio of projects'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'View Opportunities',
    url: 'https://architectdesign.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://architectdesign.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@architectdesign.example.com',
    phone: '1-800-555-DESIGN',
    headquarters: {
      address: '800 Design Street',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5J 2L7'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@architectdesign' },
      { platform: 'twitter', url: 'https://twitter.com/architectdesign' },
      { platform: 'instagram', url: 'https://instagram.com/architectdesign' },
      { platform: 'facebook', url: 'https://facebook.com/architectdesign' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const foodService: PlatinumBoothData = {
  id: 'food-service',
  name: 'FoodService Pro',
  slug: 'food-service',
  tier: 'platinum',
  industry: 'Retail',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Serving excellence one meal daily',
  description: 'FoodService Pro operates 200+ restaurants across Ontario with comprehensive training and advancement opportunities.',
  website: 'https://foodservicepro.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Hospitality Careers',
    description: 'Explore food service opportunities'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Apply Now',
    url: 'https://foodservicepro.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://foodservicepro.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'jobs@foodservicepro.example.com',
    phone: '1-877-555-FOOD',
    headquarters: {
      address: '900 Restaurant Row',
      city: 'Mississauga',
      province: 'ON',
      postalCode: 'L5B 1M2'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@foodservicepro' },
      { platform: 'twitter', url: 'https://twitter.com/foodservicepro' },
      { platform: 'instagram', url: 'https://instagram.com/foodservicepro' },
      { platform: 'facebook', url: 'https://facebook.com/foodservicepro' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const legalServices: PlatinumBoothData = {
  id: 'legal-services',
  name: 'LegalServices',
  slug: 'legal-services',
  tier: 'platinum',
  industry: 'Consulting',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Justice through excellence and integrity',
  description: 'LegalServices is a leading law firm providing comprehensive legal services across multiple practice areas.',
  website: 'https://legalservices.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Legal Careers',
    description: 'Discover careers in law'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Learn More',
    url: 'https://legalservices.example.com/careers',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://legalservices.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'recruitment@legalservices.example.com',
    phone: '1-800-555-LEGAL',
    headquarters: {
      address: '1000 Law Street',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5H 1H1'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@legalservices' },
      { platform: 'twitter', url: 'https://twitter.com/legalservices' },
      { platform: 'instagram', url: 'https://instagram.com/legalservices' },
      { platform: 'facebook', url: 'https://facebook.com/legalservices' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const socialImpact: PlatinumBoothData = {
  id: 'social-impact',
  name: 'SocialImpact',
  slug: 'social-impact',
  tier: 'platinum',
  industry: 'Non-Profit',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Creating positive change every day',
  description: 'SocialImpact is a non-profit organization dedicated to community development and social justice initiatives.',
  website: 'https://socialimpact.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Make a Difference',
    description: 'See our community impact'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Join Our Mission',
    url: 'https://socialimpact.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://socialimpact.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@socialimpact.example.com',
    phone: '1-855-555-IMPACT',
    headquarters: {
      address: '1100 Community Way',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M4Y 1J6'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@socialimpact' },
      { platform: 'twitter', url: 'https://twitter.com/socialimpact' },
      { platform: 'instagram', url: 'https://instagram.com/socialimpact' },
      { platform: 'facebook', url: 'https://facebook.com/socialimpact' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const urbanPlanning: PlatinumBoothData = {
  id: 'urban-planning',
  name: 'UrbanPlanning',
  slug: 'urban-planning',
  tier: 'platinum',
  industry: 'Government',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Building livable cities for tomorrow',
  description: 'UrbanPlanning works with municipalities to design sustainable, vibrant urban communities across Ontario.',
  website: 'https://urbanplanning.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'City Planning',
    description: 'Discover urban planning careers'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'View Positions',
    url: 'https://urbanplanning.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://urbanplanning.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'jobs@urbanplanning.example.com',
    phone: '1-866-555-URBAN',
    headquarters: {
      address: '1200 City Hall Drive',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5H 2N2'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@urbanplanning' },
      { platform: 'twitter', url: 'https://twitter.com/urbanplanning' },
      { platform: 'instagram', url: 'https://instagram.com/urbanplanning' },
      { platform: 'facebook', url: 'https://facebook.com/urbanplanning' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const sportsManagement: PlatinumBoothData = {
  id: 'sports-management',
  name: 'SportsMgmt',
  slug: 'sports-management',
  tier: 'platinum',
  industry: 'Arts & Media',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Where passion meets sports careers',
  description: 'SportsMgmt manages professional sports facilities and creates career opportunities in sports administration.',
  website: 'https://sportsmgmt.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Sports Careers',
    description: 'Explore opportunities in sports'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'View Openings',
    url: 'https://sportsmgmt.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://sportsmgmt.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@sportsmgmt.example.com',
    phone: '1-800-555-SPORT',
    headquarters: {
      address: '1300 Arena Boulevard',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5J 2H7'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@sportsmgmt' },
      { platform: 'twitter', url: 'https://twitter.com/sportsmgmt' },
      { platform: 'instagram', url: 'https://instagram.com/sportsmgmt' },
      { platform: 'facebook', url: 'https://facebook.com/sportsmgmt' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const environmentalConsulting: PlatinumBoothData = {
  id: 'environmental',
  name: 'EcoConsult',
  slug: 'environmental',
  tier: 'platinum',
  industry: 'Consulting',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Protecting nature through smart solutions',
  description: 'EcoConsult provides environmental consulting services helping organizations achieve sustainability goals.',
  website: 'https://ecoconsult.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Environmental Careers',
    description: 'Explore environmental consulting'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Join Our Team',
    url: 'https://ecoconsult.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://ecoconsult.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@ecoconsult.example.com',
    phone: '1-855-555-ENVIRO',
    headquarters: {
      address: '1400 Green Street',
      city: 'Ottawa',
      province: 'ON',
      postalCode: 'K1P 5N7'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@ecoconsult' },
      { platform: 'twitter', url: 'https://twitter.com/ecoconsult' },
      { platform: 'instagram', url: 'https://instagram.com/ecoconsult' },
      { platform: 'facebook', url: 'https://facebook.com/ecoconsult' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const automotiveTech: PlatinumBoothData = {
  id: 'automotive-tech',
  name: 'AutoTech',
  slug: 'automotive-tech',
  tier: 'platinum',
  industry: 'Manufacturing',
  organizationType: 'employer',
  pathway: 'apprenticeship',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Driving automotive innovation forward',
  description: 'AutoTech specializes in electric vehicle technology and advanced automotive systems development.',
  website: 'https://autotech.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Automotive Future',
    description: 'Explore automotive technology careers'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Apply Now',
    url: 'https://autotech.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://autotech.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'hr@autotech.example.com',
    phone: '1-866-555-AUTO',
    headquarters: {
      address: '1500 Motor Parkway',
      city: 'Windsor',
      province: 'ON',
      postalCode: 'N9A 6J3'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@autotech' },
      { platform: 'twitter', url: 'https://twitter.com/autotech' },
      { platform: 'instagram', url: 'https://instagram.com/autotech' },
      { platform: 'facebook', url: 'https://facebook.com/autotech' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const fashionDesign: PlatinumBoothData = {
  id: 'fashion-design',
  name: 'FashionForward',
  slug: 'fashion-design',
  tier: 'platinum',
  industry: 'Arts & Media',
  organizationType: 'post-secondary',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Designing tomorrow\'s fashion trends today',
  description: 'FashionForward is a leading fashion design school preparing students for careers in the global fashion industry.',
  website: 'https://fashionforward.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Fashion Excellence',
    description: 'See student runway shows'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Apply Today',
    url: 'https://fashionforward.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://fashionforward.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'admissions@fashionforward.example.com',
    phone: '1-800-555-STYLE',
    headquarters: {
      address: '1600 Fashion Avenue',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5V 3C6'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@fashionforward' },
      { platform: 'twitter', url: 'https://twitter.com/fashionforward' },
      { platform: 'instagram', url: 'https://instagram.com/fashionforward' },
      { platform: 'facebook', url: 'https://facebook.com/fashionforward' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const aviationAcademy: PlatinumBoothData = {
  id: 'aviation-academy',
  name: 'AviationAcademy',
  slug: 'aviation-academy',
  tier: 'platinum',
  industry: 'Engineering',
  organizationType: 'post-secondary',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Soaring toward aviation excellence',
  description: 'AviationAcademy trains pilots, aircraft technicians, and aviation management professionals.',
  website: 'https://aviationacademy.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Aviation Careers',
    description: 'Explore careers in aviation'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Start Training',
    url: 'https://aviationacademy.example.com/programs',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://aviationacademy.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'info@aviationacademy.example.com',
    phone: '1-877-555-FLY',
    headquarters: {
      address: '1700 Airport Road',
      city: 'Brampton',
      province: 'ON',
      postalCode: 'L6T 5E3'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@aviationacademy' },
      { platform: 'twitter', url: 'https://twitter.com/aviationacademy' },
      { platform: 'instagram', url: 'https://instagram.com/aviationacademy' },
      { platform: 'facebook', url: 'https://facebook.com/aviationacademy' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const hospitalityCollege: PlatinumBoothData = {
  id: 'hospitality-college',
  name: 'HospitalityPro',
  slug: 'hospitality-college',
  tier: 'platinum',
  industry: 'Education',
  organizationType: 'post-secondary',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Excellence in service starts here',
  description: 'HospitalityPro College offers comprehensive training in hotel management, culinary arts, and tourism.',
  website: 'https://hospitalitypro.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Hospitality Excellence',
    description: 'Discover hospitality careers'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Apply Now',
    url: 'https://hospitalitypro.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://hospitalitypro.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'admissions@hospitalitypro.example.com',
    phone: '1-800-555-HOTEL',
    headquarters: {
      address: '1800 Service Boulevard',
      city: 'Niagara Falls',
      province: 'ON',
      postalCode: 'L2E 6T2'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@hospitalitypro' },
      { platform: 'twitter', url: 'https://twitter.com/hospitalitypro' },
      { platform: 'instagram', url: 'https://instagram.com/hospitalitypro' },
      { platform: 'facebook', url: 'https://facebook.com/hospitalitypro' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const publicHealth: PlatinumBoothData = {
  id: 'public-health',
  name: 'PublicHealth',
  slug: 'public-health',
  tier: 'platinum',
  industry: 'Healthcare',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Protecting communities promoting wellness',
  description: 'PublicHealth Ontario works to prevent disease and promote health across all Ontario communities.',
  website: 'https://publichealth.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Public Health Careers',
    description: 'Make a difference in public health'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: '#',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: '#',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and...',
      url: '#',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: '#',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: '#',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'View Positions',
    url: 'https://publichealth.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://publichealth.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@publichealth.example.com',
    phone: '1-866-555-HEALTH',
    headquarters: {
      address: '1900 Health Street',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5G 1V2'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@publichealth' },
      { platform: 'twitter', url: 'https://twitter.com/publichealth' },
      { platform: 'instagram', url: 'https://instagram.com/publichealth' },
      { platform: 'facebook', url: 'https://facebook.com/publichealth' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

// ======================
// STANDARD TIER BOOTHS (2 TOTAL)
// ======================

export const localManufacturing: StandardBoothData = {
  id: 'local-manufacturing',
  name: 'LocalMake Co',
  slug: 'local-manufacturing',
  tier: 'standard',
  industry: 'Manufacturing',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Building products building careers',
  description: 'LocalMake Co is a family-owned manufacturing company producing precision components with competitive wages and benefits.',
  website: 'https://localmake.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Inside Our Facility',
    description: 'See our modern operations'
  },
  resources: [
    {
      title: 'Open Positions',
      description: 'View current job openings',
      url: 'https://example.com/jobs.pdf',
      type: 'pdf',
      fileSize: '400 KB'
    },
    {
      title: 'Benefits Package',
      description: 'Our compensation and benefits',
      url: 'https://example.com/benefits.pdf',
      type: 'pdf',
      fileSize: '250 KB'
    },
    {
      title: 'Apprenticeship Info',
      description: 'Learn about our apprenticeship program',
      url: 'https://example.com/apprenticeship',
      type: 'link'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform?embedded=true',
  primaryCTA: {
    text: 'Apply Now',
    url: 'https://localmake.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Schedule Tour',
    url: 'https://localmake.example.com/tour',
    type: 'contact'
  },
  contact: {
    email: 'hr@localmake.example.com',
    phone: '905-555-5678',
    headquarters: {
      address: '45 Industrial Drive',
      city: 'Hamilton',
      province: 'ON',
      postalCode: 'L8E 2X9'
    },
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com/localmake' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const communityCollege: StandardBoothData = {
  id: 'community-college',
  name: 'Community College',
  slug: 'community-college',
  tier: 'standard',
  industry: 'Education',
  organizationType: 'post-secondary',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Accessible education real results',
  description: 'Community College offers affordable career-focused programs with small class sizes across multiple campus locations.',
  website: 'https://communitycollege.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Your College',
    description: 'Discover accessible education'
  },
  resources: [
    {
      title: 'Program Guide',
      description: 'All programs and requirements',
      url: 'https://example.com/programs.pdf',
      type: 'pdf',
      fileSize: '2.1 MB'
    },
    {
      title: 'Financial Aid',
      description: 'Making college affordable',
      url: 'https://example.com/financial-aid',
      type: 'link'
    },
    {
      title: 'Campus Tour',
      description: 'Schedule a campus visit',
      url: 'https://example.com/campus-tour.pdf',
      type: 'pdf',
      fileSize: '1.5 MB'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform?embedded=true',
  primaryCTA: {
    text: 'Apply Today',
    url: 'https://communitycollege.example.com/apply',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://communitycollege.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'info@communitycollege.example.com',
    phone: '1-800-555-COLLEGE',
    headquarters: {
      address: '640 Elm Street',
      city: 'Sudbury',
      province: 'ON',
      postalCode: 'P3E 2E4'
    },
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com/communitycollege' },
      { platform: 'instagram', url: 'https://instagram.com/communitycollege' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const careerMythBuster: StandardBoothData = {
  id: 'career-myth-buster',
  name: 'Career Myth Buster',
  slug: 'career-myth-buster',
  tier: 'standard',
  industry: 'Education',
  organizationType: 'employer',
  pathway: 'general',
  logo: '/logos/career-myth-buster.png',
  tagline: 'Separate Career Fact from Fiction',
  description: 'Explore career myths and discover the reality behind common misconceptions about various career paths. Get evidence-based insights to make informed decisions about your future.',
  website: 'https://degreehub.com/careermythbuster',
  externalUrl: 'https://degreehub.com/careermythbuster',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Career Myth Buster',
    description: 'Debunking career myths'
  },
  resources: [
    {
      title: 'Career Myths Guide',
      description: 'Common myths debunked',
      url: 'https://degreehub.com/careermythbuster/guide',
      type: 'link'
    },
    {
      title: 'Career Facts',
      description: 'Evidence-based career information',
      url: 'https://degreehub.com/careermythbuster/facts',
      type: 'link'
    },
    {
      title: 'Interactive Quiz',
      description: 'Test your career knowledge',
      url: 'https://degreehub.com/careermythbuster/quiz',
      type: 'link'
    }
  ],
  primaryCTA: {
    text: 'Explore Now',
    url: 'https://degreehub.com/careermythbuster',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Learn More',
    url: 'https://degreehub.com/careermythbuster',
    type: 'website'
  },
  contact: {
    email: 'info@degreehub.com',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/degreehub' },
      { platform: 'twitter', url: 'https://twitter.com/degreehub' }
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
  // Platinum Tier (26 booths)
  healthFirst,
  futureBuild,
  financeHub,
  eduPath,
  tradesMaster,
  worldExplorer,
  greenPower,
  creativeMinds,
  dataDynamics,
  marketGenius,
  consultPro,
  manufactureTech,
  cyberShield,
  bioMedical,
  architectDesign,
  foodService,
  legalServices,
  socialImpact,
  urbanPlanning,
  sportsManagement,
  environmentalConsulting,
  automotiveTech,
  fashionDesign,
  aviationAcademy,
  hospitalityCollege,
  publicHealth,
  // Standard Tier (3 booths)
  localManufacturing,
  communityCollege,
  careerMythBuster
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
