import { PlatinumBoothData, StandardBoothData } from '@/types/booth'

// ======================
// PLATINUM TIER BOOTHS (27 TOTAL)
// ======================

export const healthFirst: PlatinumBoothData = {
  id: 'agrobotics-working-group-innovation-farms-ontario',
  name: 'AgRobotics Working Group',
  slug: 'agrobotics-working-group-innovation-farms-ontario',
  tier: 'platinum',
  industry: 'Health/Wellness',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/agroboticswg-fav.avif',
  tagline: 'Fostering productivity, resilience and competitiveness in agriculture — by making innovation accessible, practical and grounded in real farming conditions.',
  description: 'We bring together a network of farmers, researchers, industry mentors, and start-ups. Whether you\'re exploring new robotic solutions, testing emerging farm technologies, or seeking insightful data to guide decisions, we provide the connection, support and ground-truthing you need.\n\nOur promise: to foster productivity, resilience and competitiveness in agriculture — by making innovation accessible, practical and grounded in real farming conditions. We believe strong networks, mentorship, and applied research are the keys to smarter farming today and tomorrow.',
  website: 'https://healthfirst.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Healthcare Careers',
    description: 'See the impact you can make'
  },
  resources: [
    {
      title: 'Different Technologies',
      description: 'Explore the latest agricultural robotics technologies and innovations',
      url: 'https://www.agroboticswg.com/agrobotics-working-group-meetings-1',
      type: 'link'
    },
    {
      title: 'AgRobotics Challenge',
      description: 'Student competition for agricultural robotics innovation',
      url: 'https://www.innovationfarmson.ca/student-competition',
      type: 'link'
    },
    {
      title: 'Upcoming Events',
      description: 'Stay updated on upcoming AgRobotics Working Group events',
      url: 'https://www.agroboticswg.com/events',
      type: 'link'
    },
    {
      title: 'The Western Fair District',
      description: 'Learn about our home and event venue',
      url: 'https://westernfairdistrict.com/',
      type: 'link'
    },
    {
      title: 'Innovation Farms Ontario',
      description: 'Discover our innovation farm network across Ontario',
      url: 'https://www.innovationfarmson.ca/',
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
    text: 'Questions',
    url: 'https://www.agroboticswg.com/contact-us',
    type: 'contact'
  },
  contact: {
    phone: '1-855-555-CARE',
    headquarters: {
      address: '555 University Avenue',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5G 1X8'
    },
    socialLinks: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/showcase/agrobotics-working-group', label: 'AgRobotics Working Group LinkedIn' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/showcase/innovation-farms-on', label: 'Innovation Farms Ontario LinkedIn' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const futureBuild: PlatinumBoothData = {
  id: 'canadian-armed-forces',
  name: 'Royal Canadian Air Force',
  slug: 'canadian-armed-forces',
  tier: 'platinum',
  industry: 'Manufacturing',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/Roundel_of_Canada.svg.png',
  tagline: 'The RCAF is hiring now for many exciting career opportunities from aircraft technicians to air traffic controllers.',
  description: 'The Royal Canadian Air Force (RCAF) is part of National Defence and the Canadian Armed Forces. We protect Canadian and North American airspace, support peace missions around the world, and provide space capabilities to help meet national defence goals. Whether at home or abroad, the RCAF works to keep Canadians and their interests safe.\n\nThe RCAF is hiring now for many exciting career opportunities from aircraft technicians to air traffic controllers. All training is provided, and paid college and university programs are available.',
  website: 'https://futurebuild.example.com',
  video: {
    url: 'https://www.youtube.com/watch?v=V3s4is2UC5s',
    type: 'youtube',
    title: 'Rise above with a career in the Royal Canadian Air Force',
    description: 'Discover career opportunities with the RCAF'
  },
  resources: [
    {
      title: 'RCAF Across Canada',
      description: 'Explore RCAF locations and operations from coast to coast',
      url: '/resources/RCAF Across Canada.pdf',
      type: 'pdf'
    },
    {
      title: 'Occupational Brochure',
      description: 'Discover the full range of career opportunities in the RCAF',
      url: '/resources/20250114-U-Occupational Brochure-Print-DGM-21324-VT8.pdf',
      type: 'pdf'
    },
    {
      title: 'Applicant Brochure',
      description: 'Learn about the application process and what to expect',
      url: '/resources/20250113-U-Potential Applicant Brochure-EN-DGM-19624-33M.pdf',
      type: 'pdf'
    },
    {
      title: 'This Is For You',
      description: 'Find out if a career in the RCAF is right for you',
      url: '/resources/20231027-U-RCAF TIFY Poster-EN.pdf',
      type: 'pdf'
    },
    {
      title: 'Canadian Armed Forces',
      description: 'Visit the official CAF website for more information',
      url: 'https://forces.ca/en/',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/1bH_bWyDZNlOKopAOJNtGT-fmpnd1mXhk/embed?start=false&loop=false',
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
    text: 'Ask a Question',
    url: 'https://affinitas.my.site.com/RCAFContactUs/s/?c__EngagementID=a01Mm00000XsAnS',
    type: 'contact'
  },
  secondaryCTA: {
    text: 'Browse Careers',
    url: 'https://www.forces.ca',
    type: 'careers'
  },
  contact: {
    email: 'RCAFApplicants-CandidatsdelARC@forces.gc.ca',
    website: 'https://www.forces.ca',
    phone: '1-800-555-BUILD',
    headquarters: {
      address: '200 Engineering Drive',
      city: 'Ottawa',
      province: 'ON',
      postalCode: 'K1A 0B1'
    },
    socialLinks: [
      { platform: 'globe', url: 'https://outlook.office.com/book/RCAFAttractionsTeamApplicantLiaisonCell@018gc.onmicrosoft.com/?ismsaljsauthenabled=true', label: 'Talk to our team' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const financeHub: PlatinumBoothData = {
  id: 'canadian-nuclear-laboratories',
  name: 'Canadian Nuclear Laboratories',
  slug: 'canadian-nuclear-laboratories',
  tier: 'platinum',
  industry: 'Business',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'cansbridge-scholars',
  name: 'Cansbridge Scholars',
  slug: 'cansbridge-scholars',
  tier: 'platinum',
  industry: 'Non-Profit/Education',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'cielle-creative-connoisseur-live-nation-jpdl-encore',
  name: 'Encore Canada',
  slug: 'cielle-creative-connoisseur-live-nation-jpdl-encore',
  tier: 'platinum',
  industry: 'Construction',
  organizationType: 'employer',
  pathway: 'apprenticeship',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'cpkc',
  name: 'CPKC',
  slug: 'cpkc',
  tier: 'platinum',
  industry: 'Non-Profit/Education',
  organizationType: 'employer',
  pathway: 'gap-year',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'cwb-welding-foundation',
  name: 'CWB Welding Foundation',
  slug: 'cwb-welding-foundation',
  tier: 'platinum',
  industry: 'Energy',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'discover-year',
  name: 'Discover Year',
  slug: 'discover-year',
  tier: 'platinum',
  industry: 'Arts/Culture',
  organizationType: 'gap-year',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'diversity-institute',
  name: 'Diversity Institute',
  slug: 'diversity-institute',
  tier: 'platinum',
  industry: 'ICT',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'ernst-young',
  name: 'Ernst & Young',
  slug: 'ernst-young',
  tier: 'platinum',
  industry: 'Business',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'humber-faculty-applied-science-technology',
  name: 'Humber FAST',
  slug: 'humber-faculty-applied-science-technology',
  tier: 'platinum',
  industry: 'Business',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'hydro-one',
  name: 'Hydro One',
  slug: 'hydro-one',
  tier: 'platinum',
  industry: 'Manufacturing',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'jack-org',
  name: 'Jack.org',
  slug: 'jack-org',
  tier: 'platinum',
  industry: 'ICT',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'kids-help-phone',
  name: 'Kids Help Phone',
  slug: 'kids-help-phone',
  tier: 'platinum',
  industry: 'Health/Wellness',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'life-sciences-ontario',
  name: 'Life Sciences Ontario',
  slug: 'life-sciences-ontario',
  tier: 'platinum',
  industry: 'Manufacturing',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'multiple-conservation-authorities-trca-cvc-npca',
  name: 'TRCA, CVC, & NPCA',
  slug: 'multiple-conservation-authorities-trca-cvc-npca',
  tier: 'platinum',
  industry: 'Business',
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'mydoh',
  name: 'Mydoh',
  slug: 'mydoh',
  tier: 'platinum',
  industry: 'Business',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'nfte',
  name: 'NFTE Canada',
  slug: 'nfte',
  tier: 'platinum',
  industry: 'Non-Profit/Education',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'ontario-water-careers',
  name: 'Ontario Water Careers',
  slug: 'ontario-water-careers',
  tier: 'platinum',
  industry: 'Non-Profit/Education',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'seeking-scholarships',
  name: 'Seeking Scholarships',
  slug: 'seeking-scholarships',
  tier: 'platinum',
  industry: 'Arts/Culture',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'studenthaus',
  name: 'Studenthaus',
  slug: 'studenthaus',
  tier: 'platinum',
  industry: 'Business',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'support-ontario-youth',
  name: 'Support Ontario Youth',
  slug: 'support-ontario-youth',
  tier: 'platinum',
  industry: 'Manufacturing',
  organizationType: 'employer',
  pathway: 'apprenticeship',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'thinkag-canadian-agricultural-human-resource-council',
  name: 'thinkAG & The Canadian Agricultural Human Resource Council',
  slug: 'thinkag-canadian-agricultural-human-resource-council',
  tier: 'platinum',
  industry: 'Arts/Culture',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'tks-the-knowledge-society',
  name: 'The Knowledge Society (TKS)',
  slug: 'tks-the-knowledge-society',
  tier: 'platinum',
  industry: 'Manufacturing',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'toronto-police-services',
  name: 'Toronto Police Services',
  slug: 'toronto-police-services',
  tier: 'platinum',
  industry: 'Non-Profit/Education',
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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
  id: 'tourism-industry-association-ontario',
  name: 'Tourism Industry Association',
  slug: 'tourism-industry-association-ontario',
  tier: 'platinum',
  industry: 'Health/Wellness',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
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

export const voxPopLabs: PlatinumBoothData = {
  id: 'vox-pop-labs',
  name: 'Vox Pop Labs',
  slug: 'vox-pop-labs',
  tier: 'platinum',
  industry: 'ICT',
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/industry-immersion-series.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  description: 'Vox Pop Labs creates innovative civic technology solutions to engage citizens and improve democratic participation.',
  website: 'https://voxpoplabs.example.com',
  video: {
    url: 'https://www.youtube.com/shorts/87uU-eFE4_E',
    type: 'youtube',
    title: 'Civic Technology',
    description: 'Explore careers in civic tech'
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
    url: 'https://voxpoplabs.example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://voxpoplabs.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'careers@voxpoplabs.example.com',
    phone: '1-866-555-TECH',
    headquarters: {
      address: '100 Tech Avenue',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5V 1V2'
    },
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@voxpoplabs' },
      { platform: 'twitter', url: 'https://twitter.com/voxpoplabs' },
      { platform: 'instagram', url: 'https://instagram.com/voxpoplabs' },
      { platform: 'facebook', url: 'https://facebook.com/voxpoplabs' }
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

export const universityOfGuelph: StandardBoothData = {
  id: 'university-of-guelph',
  name: 'University of Guelph',
  slug: 'university-of-guelph',
  tier: 'standard',
  industry: 'Manufacturing',
  organizationType: 'post-secondary',
  pathway: 'direct-to-workplace',
  logo: '/logos/university-of-guelph.png',
  tagline: 'The University of Guelph reached a major milestone, ranking as the second largest university co-op program in Ontario and the fifth largest in Canada.',
  description: 'At the University of Guelph, everyone who studies here, explores here, teaches here and works here is committed to one simple purpose: to Improve Life.\n\nNo matter where you\'re from, once you enroll at U of G, you\'re part of a community – a network of fellow students and staff who will help you achieve your goals and set you up for success.\n\nConnect with us to learn more about our programs, upcoming events, webinars, and more!',
  website: 'https://localmake.example.com',
  video: {
    url: 'https://www.youtube.com/embed/VfUmm2nfcyQ',
    type: 'youtube',
    title: 'Choose the University of Guelph',
    description: 'See our modern operations'
  },
  resources: [
    {
      title: 'Apply to the University of Guelph',
      description: 'Start your application today',
      url: 'https://www.uoguelph.ca/apply/',
      type: 'link'
    },
    {
      title: 'Explore Our Programs',
      description: 'Discover undergraduate programs',
      url: 'https://www.uoguelph.ca/programs/undergraduate',
      type: 'link'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with admissions',
      url: 'https://www.uoguelph.ca/admission/undergraduate/contact/',
      type: 'link'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform?embedded=true',
  primaryCTA: {
    text: 'Learn More',
    url: 'https://apply.uoguelph.ca/register/?id=410f4687-a8f0-43f1-82a2-799607493e20',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Visit Us',
    url: 'https://www.uoguelph.ca/admission/undergraduate/events/',
    type: 'contact'
  },
  contact: {
    website: 'https://www.uoguelph.ca/admission/undergraduate/',
    phone: '905-555-5678',
    headquarters: {
      address: '45 Industrial Drive',
      city: 'Hamilton',
      province: 'ON',
      postalCode: 'L8E 2X9'
    },
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/uofgadmission/' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@uofgadmission?lang=en' },
      { platform: 'spotify', url: 'https://open.spotify.com/user/neuro38hfoyaojlkjoqvywkpp' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/UofGAdmissions/featured' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const communityCollege: StandardBoothData = {
  id: 'community-college',
  name: 'Conestoga College',
  slug: 'conestoga-college',
  tier: 'standard',
  industry: 'Non-Profit/Education',
  organizationType: 'post-secondary',
  pathway: 'college',
  logo: '/logos/Conestoga_vrt_RGB_gld_blk.jpg',
  tagline: 'Whether you are trying to choose your program, book a tour, or figure out next steps, we are here to support you.',
  description: 'Conestoga is a leader in polytechnic education delivering a full range of career-focused education, training and applied research programs to prepare students for success in the new knowledge economy and promote economic prosperity throughout our region and across Ontario.\n\nEstablished in 1967, Conestoga has campuses and training centres in Kitchener, Waterloo, Cambridge, Guelph, Stratford, Ingersoll, Brantford and Milton and is a provincial leader in apprenticeship training.',
  website: 'https://www.conestogac.on.ca',
  video: {
    url: 'https://www.youtube.com/watch?v=mk93CPvMx2c',
    type: 'youtube',
    title: 'Conestoga Polytechnic Advantage',
    description: 'Discover the Conestoga advantage'
  },
  resources: [
    {
      title: 'Visit our online Career Coach',
      description: 'Find your program fit',
      url: 'https://conestogac.lightcastcc.com/assessment?radius=&region=Kitchener%20-%20Cambridge%20-%20Waterloo',
      type: 'link'
    },
    {
      title: 'Need help applying to Conestoga?',
      description: 'Visit our Apply Now section',
      url: 'https://www.conestogac.on.ca/admissions/applying-to-conestoga',
      type: 'link'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform?embedded=true',
  primaryCTA: {
    text: 'Reach Out',
    url: 'https://www.conestogac.on.ca/future-students/meet-our-recruiters',
    type: 'contact'
  },
  secondaryCTA: {
    text: 'Big Giveaway Contest',
    url: 'https://lp.constantcontactpages.com/sl/2L9LEfG/HSV',
    type: 'application'
  },
  contact: {
    email: 'recruitment@conestogac.on.ca',
    website: 'https://www.conestogac.on.ca',
    socialLinks: [
      { platform: 'twitter', url: 'https://x.com/ThinkConestoga' },
      { platform: 'facebook', url: 'https://www.facebook.com/ThinkConestoga' },
      { platform: 'instagram', url: 'https://www.instagram.com/explore/tags/thinkconestoga/' },
      { platform: 'youtube', url: 'https://www.youtube.com/@ThinkConestoga' }
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
  industry: 'Non-Profit/Education',
  organizationType: 'activities',
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

// Industry Immersion Series - External Booth
export const industryImmersionSeries: StandardBoothData = {
  id: 'industry-immersion-series',
  name: 'Industry Immersion Series',
  slug: 'industry-immersion-series',
  tier: 'standard',
  industry: 'Non-Profit/Education',
  organizationType: 'activities',
  pathway: 'general',
  logo: '/logos/industry-immersion-series.png',
  tagline: '20 x $500 micro grants available EACH month',
  description: 'The Industry Immersion Series provides Canadian students with hands-on experience and financial support to explore various career paths through micro-grants.',
  website: 'https://industryimmersionseries.myblueprint.ca/',
  externalUrl: 'https://industryimmersionseries.myblueprint.ca/',
  video: {
    url: 'https://industryimmersionseries.myblueprint.ca/',
    type: 'custom',
    title: 'Industry Immersion Series',
    description: '20 x $500 micro-grants available to Canadian students each month.'
  },
  resources: [],
  primaryCTA: {
    text: 'Learn More',
    url: 'https://industryimmersionseries.myblueprint.ca/',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Visit Website',
    url: 'https://industryimmersionseries.myblueprint.ca/',
    type: 'website'
  },
  contact: {
    email: 'info@myblueprint.ca',
    socialLinks: []
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
  // Platinum Tier (27 booths)
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
  voxPopLabs,
  // Standard Tier (4 booths)
  universityOfGuelph,
  communityCollege,
  careerMythBuster,
  industryImmersionSeries
]

export const platinumBooths = allBooths.filter(booth => booth.tier === 'platinum') as PlatinumBoothData[]
export const standardBooths = allBooths.filter(booth => booth.tier === 'standard') as StandardBoothData[]

// Helper function to get booth by slug
export function getBoothBySlug(slug: string): (PlatinumBoothData | StandardBoothData) | undefined {
  return allBooths.find(booth => booth.slug === slug)
}

// Helper function to get booth by presenter/organization name
// Supports partial matching to handle cases where presenter_name includes extra text
export function getBoothByPresenterName(presenterName: string): (PlatinumBoothData | StandardBoothData) | undefined {
  if (!presenterName) return undefined

  const normalizedPresenter = presenterName.toLowerCase().trim()

  // Try exact match first
  const exactMatch = allBooths.find(booth =>
    booth.name.toLowerCase().trim() === normalizedPresenter
  )
  if (exactMatch) return exactMatch

  // Try partial match - check if booth name is contained in presenter name
  const partialMatch = allBooths.find(booth => {
    const boothName = booth.name.toLowerCase().trim()
    return normalizedPresenter.includes(boothName) || boothName.includes(normalizedPresenter)
  })

  return partialMatch
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
