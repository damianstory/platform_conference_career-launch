import { PlatinumBoothData, StandardBoothData } from '@/types/booth'

// ======================
// PLATINUM TIER BOOTHS (27 TOTAL)
// ======================

export const healthFirst: PlatinumBoothData = {
  id: 'agrobotics-working-group-innovation-farms-ontario',
  name: 'AgRobotics Working Group',
  slug: 'agrobotics-working-group-innovation-farms-ontario',
  tier: 'platinum',
  associatedSessionSlug: 'agrobotics-farm-kids',
  industries: ['Agriculture', 'Food Processing', 'ICT'],
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/agroboticswg-fav.avif',
  tagline: 'Fostering productivity, resilience and competitiveness in agriculture by making innovation accessible, practical and grounded in real farming conditions.',
  description: 'We bring together a network of farmers, researchers, industry mentors, and start-ups. Whether you\'re exploring new robotic solutions, testing emerging farm technologies, or seeking insightful data to guide decisions, we provide the connection, support and ground-truthing you need.\n\nOur promise: to foster productivity, resilience and competitiveness in agriculture — by making innovation accessible, practical and grounded in real farming conditions. We believe strong networks, mentorship, and applied research are the keys to smarter farming today and tomorrow.',
  video: {
    url: 'https://youtu.be/N4Hinc3LDsw',
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
    embedUrl: 'https://docs.google.com/presentation/d/1xhpdR_pCvO21z-ARG-bM3GdJ68bzMPkKDtls36GWhms/embed?start=false&loop=false',
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
  associatedSessionSlug: 'canadian-armed-forces-careers',
  industries: ['Aviation/Aerospace', 'Justice/Emergency', 'ICT', 'Health/Wellness'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/Roundel_of_Canada.svg.png',
  imageScale: 0.9,
  tagline: 'The RCAF is hiring now for many exciting career opportunities from aircraft technicians to air traffic controllers.',
  description: 'The Royal Canadian Air Force (RCAF) is part of National Defence and the Canadian Armed Forces. We protect Canadian and North American airspace, support peace missions around the world, and provide space capabilities to help meet national defence goals. Whether at home or abroad, the RCAF works to keep Canadians and their interests safe.\n\nThe RCAF is hiring now for many exciting career opportunities from aircraft technicians to air traffic controllers. All training is provided, and paid college and university programs are available.',
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
    url: 'https://forces.ca/en/careers/env_2',
    type: 'careers'
  },
  contact: {
    email: 'RCAFApplicants-CandidatsdelARC@forces.gc.ca',
    website: 'https://www.forces.ca',
    headquarters: {
      address: '200 Engineering Drive',
      city: 'Ottawa',
      province: 'ON',
      postalCode: 'K1A 0B1'
    },
    socialLinks: [
      { platform: 'globe', url: 'https://outlook.office.com/book/RCAFAttractionsTeamApplicantLiaisonCell@018gc.onmicrosoft.com/?ismsaljsauthenabled=true', label: 'Talk to our team' },
      { platform: 'instagram', url: 'https://www.instagram.com/forcesjobs.forcesemplois/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/canadianforces-forcescanada/' },
      { platform: 'youtube', url: 'https://www.youtube.com/@CanadianForcescanadiennes' }
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
  associatedSessionSlug: 'canadian-nuclear-labs',
  industries: ['Energy', 'Environment'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/cnl.webp',
  imageScale: 0.9,
  tagline: 'CNL is Canada\'s premier nuclear science and technology organization, and a world leader in developing nuclear technology for peaceful and innovative applications.',
  description: 'CNL is Canada\'s premier nuclear science and technology organization, and a world leader in developing nuclear technology for peaceful and innovative applications. Using our unique expertise, we are restoring and protecting the environment, we are advancing clean energy technology, and our medical breakthroughs continue to improve the health of people around the world.',
  website: 'https://www.cnl.ca/',
  video: {
    url: 'https://www.youtube.com/watch?v=fl0QDfr3_iU',
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
    embedUrl: 'https://docs.google.com/presentation/d/1jquwMp9MQeHigJQljm405mE5WOabBkou/edit?usp=sharing&ouid=104643732425535067008&rtpof=true&sd=true',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities',
    type: 'google-slides'
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
    url: 'https://www.cnl.ca/',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://financehub.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'communications@cnl.ca',
    website: 'https://www.cnl.ca/',
    headquarters: {
      address: '1 Financial Place',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5X 1H3'
    },
    socialLinks: [
      { platform: 'facebook', url: 'https://www.facebook.com/CanadianNuclearLaboratories' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/canadian-nuclear-laboratories/' },
      { platform: 'instagram', url: 'https://www.instagram.com/canadiannuclearlaboratories/' },
      { platform: 'youtube', url: 'https://www.youtube.com/@CNLCanada/videos' }
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
  associatedSessionSlug: 'cansbridge-figure-out-life',
  tier: 'platinum',
  industries: ['Non-Profit/Education'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/cansbridge-scholars.png',
  tagline: 'We believe everyone has the capacity to be high agency and to pave their own path.',
  description: 'Cansbridge Scholars is an education company that focuses on cohort-based entrepreneurship classes for students 18-25. They also help build and deliver educational experiences for philanthropic, corporate, and youth focused organizations. We believe everyone has the capacity to be high agency and to pave their own path.',
  website: 'https://cansbridgescholars.com',
  video: {
    url: 'https://youtu.be/WhB8t_37mp0',
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
    embedUrl: 'https://drive.google.com/file/d/1x4CNtjeQqXuJbDj2rHEM7zi7CP73UvrK/view',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities',
    type: 'google-drive-pdf'
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
    url: 'https://www.cansbridgescholars.com/',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://edupath.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'lyn@cansbridgescholars.com',
    website: 'https://cansbridgescholars.com',
    headquarters: {
      address: '1000 University Drive',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M3J 1P3'
    },
    socialLinks: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/cansbridgescholars' },
      { platform: 'instagram', url: 'https://www.instagram.com/cansbridgescholars' }
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
  associatedSessionSlug: 'behind-magic-events-concerts',
  tier: 'platinum',
  industries: ['Hospitality/Tourism', 'Business', 'Arts/Culture', 'ICT'],
  organizationType: 'employer',
  pathway: 'apprenticeship',
  logo: '/logos/encore-canada.png',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  description: 'Conestoga is a leader in polytechnic education delivering a full range of career-focused education, training and applied research programs to prepare students for success in the new knowledge economy and promote economic prosperity throughout our region and across Ontario.',
  website: 'https://www.encore-can.com/',
  video: {
    url: 'https://youtu.be/cFaE3wC-_7I',
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
    text: 'Learn More',
    url: 'https://www.encore-can.com/about/working-at-encore/',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://tradesmaster.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://www.encore-can.com/',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/encore_global/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/encore-canada/?originalSubdomain=ca' },
      { platform: 'facebook', url: 'https://www.facebook.com/encoreglobal1/' }
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
  associatedSessionSlug: 'cpkc-big-moves',
  tier: 'platinum',
  industries: ['Transportation', 'ICT'],
  organizationType: 'employer',
  pathway: 'gap-year',
  logo: '/logos/CPKC-Logo.jpg',
  tagline: 'We connect communities, fuel economic growth, and provide meaningful work in a culture that values diversity, accountability, and pride.',
  description: 'Join CPKC, North America\'s first transnational railroad connecting the U.S. Canada and Mexico, where your career drives progress and safety is paramount. We connect communities, fuel economic growth, and provide meaningful work in a culture that values diversity, accountability, and pride. With opportunities for training, development, and advancement, you\'re not just building a career—you\'re part of something bigger. Together, we move goods, connect people, and create lasting change. Your future starts here.',
  website: 'https://www.cpkcr.com/en/careers',
  video: {
    url: 'https://www.youtube.com/watch?v=lns0jDx4CXY',
    type: 'youtube',
    title: 'Go places no one else can go with CPKC',
    description: 'Discover career opportunities with CPKC'
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
    embedUrl: 'https://docs.google.com/presentation/d/1jcKG6MEE3c5igzOBveD9a2nodIiOM7sOhmPyT9JVQ5E/embed?start=false&loop=false',
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
    text: 'Make Big Moves',
    url: 'https://www.cpkcr.com/en/careers',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://worldexplorer.example.com/contact',
    type: 'contact'
  },
  contact: {
    headquarters: {
      address: '250 Queen Street East',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5A 1S1'
    },
    socialLinks: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/cpkcrail/' },
      { platform: 'instagram', url: 'https://www.instagram.com/cpkcrail/' },
      { platform: 'twitter', url: 'https://x.com/CPKCrail' },
      { platform: 'facebook', url: 'https://www.facebook.com/cpkcr' },
      { platform: 'youtube', url: 'https://www.youtube.com/@CPKCrail' }
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
  associatedSessionSlug: 'cwb-welding-materials',
  tier: 'platinum',
  industries: ['Manufacturing', 'Construction', 'Transportation', 'Energy'],
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/cwb.png',
  tagline: 'We envision a future where all individuals have the opportunity to explore and gain the knowledge and awareness to choose a career that allows them to reach their full potential.',
  description: 'The CWB Foundation is a Canadian-based not-for-profit registered charity founded by the Canadian Welding Bureau (CWB) in 2013. With the support of government, educators, industry, corporate partners, and community organizations, we address the needs of the North American industry for skilled professionals in welding, fabrication, and allied processes and technologies.',
  website: 'https://www.cwbweldingfoundation.org/',
  video: {
    url: 'https://www.youtube.com/watch?v=Y1cawe84Lb8&t=8',
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
    embedUrl: 'https://docs.google.com/presentation/d/1MKmSV8ATdQ2xfHyTl2iOwvhSCtP1dpzv/edit?usp=sharing&ouid=104643732425535067008&rtpof=true&sd=true',
    type: 'google-slides',
    title: 'CWB Welding Foundation Presentation',
    description: 'Learn about welding careers and certification programs'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Bursaries & Awards',
    url: 'https://www.cwbweldingfoundation.org/programs/#scholarships-and-bursaries',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://greenpower.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://www.cwbweldingfoundation.org/',
    socialLinks: [
      { platform: 'facebook', url: 'https://www.facebook.com/cwbweldingfoundation' },
      { platform: 'instagram', url: 'https://www.instagram.com/cwbweldingfoundation/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/cwb-welding-foundation/' },
      { platform: 'twitter', url: 'https://x.com/cwb_foundation' }
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
  associatedSessionSlug: 'discover-year-gap-year',
  tier: 'platinum',
  industries: ['Arts/Culture'],
  organizationType: 'gap-year',
  pathway: 'college',
  logo: '/logos/discover-year.jpg',
  tagline: 'At Discover Year, we help young adults better understand what they want in life and build the skills they need to get it.',
  description: 'At Discover Year, we help young adults better understand what they want in life and build the skills they need to get it. Our purposeful gap year program helps students gain what they need to thrive in adulthood through meaningful self-discovery, crucial skills development, coaching and mentorship, and work, travel, and volunteer experience. At the end of the year, our students graduate with a Double Certificate in Career and Leadership Skills.',
  video: {
    url: 'https://youtu.be/7ZlVdfHqiRk',
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
    embedUrl: 'https://docs.google.com/presentation/d/1OXqcU2hbSrlj-dC5IvYqo7a91VSUJMriXJlDOZRKCwA/edit?usp=sharing',
    type: 'google-slides',
    title: 'Discover Year Program Overview',
    description: 'Explore gap year opportunities and programs'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Info Sessions',
    url: 'https://discoveryear.ca/events/',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://creativeminds.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'outreach@discoveryear.ca',
    socialLinks: [
      { platform: 'globe', url: 'https://discoveryear.ca/book-a-call/', label: 'Book a call' },
      { platform: 'instagram', url: 'https://www.instagram.com/discoveryear' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/school/discover-year' }
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
  associatedSessionSlug: 'decode-job-market-data',
  tier: 'platinum',
  industries: ['Life Skills', 'ICT'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/diversity-institute.png',
  tagline: 'The Diversity Institute conducts and coordinates multidisciplinary research that promotes equity, diversity and inclusion as the key to Canada\'s competitiveness.',
  description: 'Founded in 1999, The Diversity Institute conducts and coordinates multidisciplinary research that promotes equity, diversity and inclusion as the key to Canada\'s competitiveness. Our action-oriented evidence-based approach is advancing knowledge of the complex barriers facing women and non-binary people; Indigenous Peoples; Black and other racialized people; persons with disabilities; immigrants; and 2SLGBTQ+ and gender and sexually diverse people.',
  website: 'https://torontomu.ca/diversity',
  video: {
    url: 'https://www.youtube.com/watch?v=-x6Kxo_5biY',
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
    text: 'Learn More',
    url: 'https://www.torontomu.ca/diversity/',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://datadynamics.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'diversityinstitute@torontomu.ca',
    website: 'https://torontomu.ca/diversity',
    socialLinks: [
      { platform: 'linkedin', url: 'https://ca.linkedin.com/company/diversity-institute' },
      { platform: 'youtube', url: 'https://www.youtube.com/@diversityinstitute5448' }
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
  associatedSessionSlug: 'ernst-young-consulting',
  tier: 'platinum',
  industries: ['Business', 'ICT'],
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/ernst-and-young.jpg',
  imageScale: 0.9,
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  description: 'MarketGenius is a full-service marketing agency creating innovative campaigns for leading Canadian brands.',
  website: 'https://www.ey.com/en_ca',
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
    text: 'Learn More',
    url: 'https://www.ey.com/en_ca/careers/what-we-look-for',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://marketgenius.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://www.ey.com/en_ca',
    socialLinks: [
      { platform: 'youtube', url: 'https://www.youtube.com/@EYCanada_' },
      { platform: 'instagram', url: 'https://www.instagram.com/eycanada_/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/ernstandyoung/posts/?feedView=all' }
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
  associatedSessionSlug: 'humber-engineering-dream',
  tier: 'platinum',
  industries: ['Construction', 'Business', 'Energy', 'Environment'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/humber-fast.png',
  imageScale: 0.9,
  tagline: 'Humber\'s learning environment is an opportunity to get hands-on experience and grow into the version of yourself you\'ve always known you could become.',
  description: 'At Humber, we help you find your edge to break through to the person you were always meant to be. Our programs are designed to leverage the talents you already know are inside you. Whether you\'re drawn to creative fields, healthcare, technology, or in-demand trades, Humber Polytechnic provides the education, resources, and support you need to transform your inner vision into reality. Join a community where instructors inspire students to see beyond the classroom and into their professional futures. Humber\'s learning environment is an opportunity to get hands-on experience and grow into the version of yourself you\'ve always known you could become.',
  video: {
    url: 'https://youtu.be/1KrY1Zo_WMs',
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
    embedUrl: 'https://docs.google.com/presentation/d/1fTah5wWTA2EegqKvQ2biKrkvSnS7yMQqVLdgmlSJlyw/edit?usp=sharing',
    type: 'google-slides',
    title: 'Humber FAST Program Information',
    description: 'Discover programs in applied science and technology'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Career Areas',
    url: 'https://humber.ca/search/full-time/career-areas.html',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://consultpro.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'student.recruitment@humber.ca',
    phone: '416-675-3111',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/humberpoly/' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@humberpoly' },
      { platform: 'youtube', url: 'https://www.youtube.com/@humberpoly' }
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
  associatedSessionSlug: 'hydro-one-future',
  tier: 'platinum',
  industries: ['Energy', 'Environment', 'Business', 'ICT'],
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/hydro-one.jpg',
  tagline: 'Our team is made up of some of Ontario\'s best and brightest people, from engineers and project managers to customer service specialists and communications professionals.',
  description: 'At Hydro One, we deliver electricity to nearly 1.5 million people across Ontario. We have become Ontario\'s largest electricity transmission and distribution services provider. We are building the future of energy. Our team is made up of some of Ontario\'s best and brightest people – from engineers and project managers to customer service specialists and communications professionals.',
  website: 'https://www.hydroone.com/',
  video: {
    url: 'https://www.youtube.com/watch?v=1NkOMDzPTMY',
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
    embedUrl: 'https://docs.google.com/presentation/d/173uZo9Dm0_IdfgUVL0IaaVCIUrVkccYY/edit?usp=sharing&ouid=104643732425535067008&rtpof=true&sd=true',
    type: 'google-slides',
    title: 'Hydro One Career Opportunities',
    description: 'Explore careers in Ontario\'s electricity sector'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Explore Careers',
    url: 'https://www.hydroone.com/careers',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://manufacturetech.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://www.hydroone.com/',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/hydrooneofficial' },
      { platform: 'facebook', url: 'https://www.facebook.com/HydroOneOfficial' },
      { platform: 'youtube', url: 'https://www.youtube.com/c/hydroonechannel' },
      { platform: 'twitter', url: 'https://twitter.com/HydroOne' },
      { platform: 'linkedin', url: 'https://ca.linkedin.com/company/hydro-one' }
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
  associatedSessionSlug: 'jack-org-mental-health',
  tier: 'platinum',
  industries: ['Health/Wellness', 'Non-Profit/Education'],
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/jack-org.png',
  tagline: 'If your school doesn\'t have a Jack Chapter, you can be the person who brings one to life. Build community, run events, and make mental health support normal at your school.',
  description: 'We believe in the extraordinary power of young people to transform the mental health landscape. Young people often recognize when their peers are struggling before anyone else. They are trusted sources of support and information, and their voices carry the power to normalize difficult conversations around mental health. By equipping young people with resources, knowledge, and community to drive change, we\'re not only supporting individuals but strengthening entire communities through peer-to-peer connection and support.',
  video: {
    url: 'https://youtu.be/NPy1UyRr7l0',
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
    embedUrl: 'https://drive.google.com/file/d/1VUGk7TLuKFPsRQ_Y4_t8rtwZTD1RZbws/view?usp=sharing',
    type: 'google-drive-pdf',
    title: 'Jack.org Mental Health Resources',
    description: 'Youth mental health support and advocacy'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Start a Chapter',
    url: 'https://www.jack.org/communities',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://cybershield.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'hello@jack.org',
    socialLinks: [
      { platform: 'globe', url: 'https://www.jack.org/campaigns/thatfeeling', label: 'Join our mailing list' },
      { platform: 'instagram', url: 'https://www.instagram.com/p/DQeseY8DnvM/' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@jackdotorg?lang=en' },
      { platform: 'pinterest', url: 'https://ca.pinterest.com/jackdotorgg/' }
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
  associatedSessionSlug: 'kids-help-phone-leadership',
  tier: 'platinum',
  industries: ['Health/Wellness'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/kids-help-phone.jpg',
  tagline: 'Kids Help Phone is Canada\'s only 24/7 e-mental-health support service made just for young people. It\'s free, confidential, and available in multiple languages.',
  description: 'Kids Help Phone is Canada\'s only 24/7 e-mental-health support service made just for young people. It\'s free, confidential, and available in multiple languages – here for youth whenever they need to Feel Out Loud. Kids Help Phone also offers meaningful volunteer opportunities that empower youth to get involved and make a positive impact in their schools and communities.',
  video: {
    url: 'https://www.youtube.com/watch?v=cj1cc2JMQbA',
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
    embedUrl: 'https://drive.google.com/file/d/1CKksmJYxRPRZcHYhiqPyvJk7j9ZoDYFq/view?usp=sharing',
    type: 'google-drive-pdf',
    title: 'Kids Help Phone Services',
    description: '24/7 support for young people across Canada'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Get Involved',
    url: 'https://kidshelpphone.ca/get-involved/participate/volunteer',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://biomedical.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://kidshelpphone.ca/',
    email: 'YouthEngagement@kidshelpphone.ca',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/kidshelpphone/?hl=en' },
      { platform: 'youtube', url: 'https://www.youtube.com/@KidsHelpPhone' },
      { platform: 'twitter', url: 'https://x.com/KidsHelpPhone?lang=en' },
      { platform: 'facebook', url: 'https://www.facebook.com/KidsHelpPhone/' },
      { platform: 'snapchat', url: 'https://www.snapchat.com/@kidshelp_phone' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const foodService: PlatinumBoothData = {
  id: 'multiple-conservation-authorities-trca-ch-npca',
  name: 'TRCA, CH, & NPCA',
  slug: 'multiple-conservation-authorities-trca-ch-npca',
  associatedSessionSlug: 'conservation-careers',
  tier: 'platinum',
  industries: ['Environment', 'Forestry', 'Horticulture'],
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/trca.png',
  imageScale: 0.9,
  tagline: 'As the region\'s first line of defence against natural hazards, conservation authorities maintain vital infrastructure and provide programs and services that promote public health and safety, protecting people and property.',
  description: 'Conservation authorities are watershed-based resource management agencies, unique to Ontario, that work to protect and manage natural resources through programs balancing human, environmental, and economic needs. Their responsibilities include managing natural hazards like flooding and erosion, protecting source water, and overseeing land use planning and development in their watersheds.',
  website: 'https://trca.ca',
  video: {
    url: 'https://www.youtube.com/watch?v=RSoW_5KX3lQ',
    type: 'youtube',
    title: 'TTP - 2025 New Sustainable Cities and Human Settlements Award for Ecological Restoration Excellence',
    description: 'Award-winning ecological restoration work'
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
    embedUrl: 'https://docs.google.com/presentation/d/1IVyKj5TOdI4xT9x9nNliKuCVWDleCnqeaYblN5aOlXc/embed?start=false&loop=false',
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
    text: 'Find Your CA',
    url: 'https://conservationontario.ca/conservation-authorities/find-a-conservation-authority',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://foodservicepro.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://trca.ca',
    email: 'Peel.education@trca.ca',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/trca_hq/?hl=en' }
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
  associatedSessionSlug: 'mydoh-making-bank',
  tier: 'platinum',
  industries: ['Business'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/mydoh.jpeg',
  tagline: 'Mydoh is the app and cash card that was built for kids & teens and gives them the freedom to make money decisions on their own, safely.',
  description: 'Mydoh is the app and cash card that was built for kids & teens and gives them the freedom to make money decisions on their own, safely. Free to download, with no monthly fees or minimums, Mydoh provides kids & teens with the ability to spend and save their money, their way.',
  website: 'https://www.mydoh.ca',
  video: {
    url: 'https://www.youtube.com/shorts/9bnCNakZByM',
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
    embedUrl: 'https://docs.google.com/presentation/d/15Is3efUPPUh7X1qQuCGi8oca_P0fzEAE/embed?start=false&loop=false',
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
    url: 'https://www.mydoh.ca/',
    type: 'learn-more'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://legalservices.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://www.mydoh.ca',
    socialLinks: [
      { platform: 'globe', url: 'https://www.indigo.ca/en-ca/making-bank-money-skills-for-real-life/9781443469814.html', label: 'Making Bank: Money Skills for Real Life' },
      { platform: 'instagram', url: 'https://www.instagram.com/mydohapp/?hl=en' },
      { platform: 'linkedin', url: 'https://ca.linkedin.com/company/mydohapp' }
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
  associatedSessionSlug: 'nfte-no-degree-no-problem',
  tier: 'platinum',
  industries: ['Non-Profit/Education'],
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/nfte-canada.jpg',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  description: 'SocialImpact is a non-profit organization dedicated to community development and social justice initiatives.',
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
    headquarters: {
      address: '1100 Community Way',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M4Y 1J6'
    }
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
  associatedSessionSlug: 'water-careers-ontario',
  tier: 'platinum',
  industries: ['Construction', 'Transportation', 'Environment', 'Manufacturing'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/ontario-water-careers.png',
  tagline: 'Whether students are just starting out or bringing previous experience forward, we help them connect directly to real job opportunities and discover diverse roles available across Ontario\'s infrastructure construction sector.',
  description: 'Ontario Water Careers is your all-in-one resource for exploring meaningful and rewarding careers in Ontario\'s water infrastructure sector. Our mission is to inspire the next generation of construction leaders by showcasing real opportunities, connecting young people to good-paying jobs, and opening the door to a wide range of career paths across the province.',
  website: 'https://ontariowatercareers.com/contact/',
  video: {
    url: 'https://www.youtube.com/watch?v=9ansl_lNE94',
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
    embedUrl: 'https://docs.google.com/presentation/d/1lz746QaZ0s4w0e8S-dKTQjN96iK57bD134KQYY5yKKI/embed?start=false&loop=false',
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
    text: 'Explore Careers',
    url: 'https://ontariowatercareers.com/careers/',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://urbanplanning.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://ontariowatercareers.com/contact/',
    email: 'info@ontariowatercareers.com',
    socialLinks: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/showcase/ontariowatercareers' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@ontariowatercareers?_t=8r971pWTbjv&_r=1' },
      { platform: 'instagram', url: 'https://www.instagram.com/ontariowatercareers/?hl=en' },
      { platform: 'facebook', url: 'https://www.facebook.com/people/Ontario-Water-Careers/61568605020011/' }
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
  associatedSessionSlug: 'seeking-scholarships-funding',
  tier: 'platinum',
  industries: ['Arts/Culture'],
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/seeking-scholarships.png',
  tagline: 'For over a decade, we\'ve supported Ontario schools, students, and families with trusted tools to navigate the path to funding postsecondary education.',
  description: 'For over a decade, we\'ve supported Ontario schools, students, and families with trusted tools to navigate the path to funding postsecondary education. Our up-to-date resources support guidance counsellors and help students and families understand their options. Whether heading to university, college, or skilled trades, every student deserves to feel informed and prepared.',
  website: 'https://seekingscholarships.com/',
  video: {
    url: 'https://www.youtube.com/watch?v=YF0IeVUDv3w',
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
    embedUrl: 'https://docs.google.com/presentation/d/1DShvWaweroZWpGEsP7uXKs2oxetbVuGSOarXPoEw70I/edit?usp=sharing',
    type: 'google-slides',
    title: 'Scholarship Opportunities Guide',
    description: 'Find and apply for scholarships and financial aid'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Scholarship Report',
    url: 'https://seekingscholarships.com/the-scholarship-report/',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://sportsmgmt.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://seekingscholarships.com/',
    email: 'seekingscholarshipscanada@gmail.com',
    socialLinks: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/glenda-healy-ba-bed-oct-9772b0163/' },
      { platform: 'twitter', url: 'https://x.com/SkgScholarships' }
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
  associatedSessionSlug: 'studenthaus-entrepreneurship',
  tier: 'platinum',
  industries: ['Business', 'Construction', 'Non-Profit/Education'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/studenthaus.png',
  tagline: 'Studenthaus helps housing developers, post-secondary institutions, municipalities, and charities understand what young renters want.',
  description: 'Studenthaus helps housing developers, post-secondary institutions, municipalities, and charities understand what young renters want.',
  video: {
    url: 'https://www.instagram.com/reel/DMWfWhqJB9w/?igsh=OWhkYXI0dWZqNmNp',
    type: 'instagram',
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
    embedUrl: 'https://docs.google.com/presentation/d/1PZSqs122bSJUj54Nkz2n62jCknIqotPC/edit?usp=sharing&ouid=104643732425535067008&rtpof=true&sd=true',
    type: 'google-slides',
    title: 'Studenthaus Gap Year Programs',
    description: 'Gap year opportunities and international experiences'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Tell Your Story',
    url: 'https://studenthaus.typeform.com/to/uRT2TWTT',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://ecoconsult.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'julian@studenthousinginitiative.com',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/studenthaushq/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/studenthaus/' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@studenthaus' }
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
  associatedSessionSlug: 'support-ontario-youth-trades',
  tier: 'platinum',
  industries: ['Construction', 'Manufacturing', 'Hospitality/Tourism', 'Mining'],
  organizationType: 'employer',
  pathway: 'apprenticeship',
  logo: '/logos/support-ontario-youth.jpg',
  tagline: 'At Support Ontario Youth, our mission is to raise awareness and provide guidance, resources and expertise to jobseekers, apprentices, employers, and educators to enable successful completion of the skilled trades pathway, leading to fulfilling, life-long careers.',
  description: 'Support Ontario Youth is a registered charity transforming skilled trades. We empower apprentices, employers, and industry stakeholders by addressing gaps in training. Our program includes safety training, mentorship, apprenticeship pathways, employability skills, and hands-on tool experiences across multiple trades. Through partnerships with employers, industry stakeholders and government, we will be leaders in providing workforce development solutions for apprentices and journeypersons that support economic growth.',
  website: 'https://www.supportontarioyouth.ca/',
  video: {
    url: 'https://youtu.be/sAI1ioviJTQ',
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
    embedUrl: 'https://docs.google.com/presentation/d/1KAoJ8G42xScBQsdP3seDEoQMvxm4CP1hNSmCRC-2UBs/embed?start=false&loop=false',
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
    text: 'Tools in the Trades',
    url: 'https://toolsinthetrades.ca/',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://autotech.example.com/contact',
    type: 'contact'
  },
  contact: {
    website: 'https://www.supportontarioyouth.ca/',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/supportonyouth/' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@supportontarioyouth' },
      { platform: 'youtube', url: 'https://www.youtube.com/channel/UCpOgnFr4a08w0hJpCyocH0g/featured' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/support-ontario-youth/' }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

export const fashionDesign: PlatinumBoothData = {
  id: 'thinkag-canadian-agricultural-human-resource-council',
  name: 'AITC-C & CAHRC',
  slug: 'thinkag-canadian-agricultural-human-resource-council',
  associatedSessionSlug: 'agriculture-agri-food-careers',
  tier: 'platinum',
  industries: ['Agriculture', 'Food Processing', 'Environment', 'Business'],
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/think-ag.png',
  tagline: 'Working collaboratively with provincial member organizations across the country, we help students discover the many exciting careers and opportunities within Canada\'s agriculture and agri-food sector.',
  description: 'Agriculture in the Classroom Canada (AITC-C) is a national, charitable organization dedicated to connecting students and educators to agriculture and food.\n\nThe Canadian Agricultural Human Resource Council (CAHRC) provides research, tools, and resources to strengthen the agriculture workforce in Canada.',
  video: {
    url: 'https://youtu.be/0F4sfXzSw0Y?t=2',
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
    embedUrl: 'https://drive.google.com/file/d/1s4HjPDbo4woC6gVEE1kND0XLjjSN341G/view?usp=sharing',
    type: 'google-drive-pdf',
    title: 'Agriculture Career Pathways',
    description: 'Explore careers in Canadian agriculture'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Explore Careers',
    url: 'https://thinkag.ca/en-ca/explore-careers',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://fashionforward.example.com/contact',
    type: 'contact'
  },
  contact: {
    socialLinks: [
      { platform: 'email', url: 'mailto:mlockhart@cahrc-ccrha.ca', label: 'mlockhart@cahrc-ccrha.ca' },
      { platform: 'email', url: 'mailto:khanrahan@aitc-canada.ca', label: 'khanrahan@aitc-canada.ca' },
      { platform: 'linktree', url: 'https://linktr.ee/cahrc' },
      { platform: 'instagram', url: 'https://www.instagram.com/cdnaghrcouncil/?hl=en' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/agriculture-in-the-classroom-canada/' },
      { platform: 'instagram', url: 'https://www.instagram.com/aitccanada/?hl=en' }
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
  associatedSessionSlug: 'toronto-police-careers',
  tier: 'platinum',
  industries: ['Justice/Emergency', 'Health/Wellness', 'ICT'],
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/toronto-police-services.png',
  tagline: 'Beyond crime prevention and investigations, Toronto\'s police officers also keep our communities safe by maintaining order during public events, responding to emergencies and more.',
  description: 'As a Toronto Police Officer, you will be a part of a diverse and inclusive team that shares a passion for keeping Toronto safe. You will take on responsibility for preventing and solving crimes of all kinds. From collecting evidence and pursuing suspects, to comforting victims, police officers are there at every step. As a police officer, you will also have the opportunity to work in tandem with other emergency experts in Toronto, including Communications (9-1-1) operators, emergency medical services and firefighters. Most importantly, you will get to connect with people in communities and see for yourself the positive impact the Toronto Police Service has on communities in our city.',
  video: {
    url: 'https://www.youtube.com/watch?v=wbyWLM9gR94',
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
    embedUrl: 'https://docs.google.com/presentation/d/1PmMR148jxjarfCqu_GMdvhOJMyGyby8suzC2JrZRM20/embed?start=false&loop=false',
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
    text: 'Explore Careers',
    url: 'https://www.tps.ca/careers/',
    type: 'application'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://hospitalitypro.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'policerecruiters@tps.ca',
    headquarters: {
      address: '1800 Service Boulevard',
      city: 'Niagara Falls',
      province: 'ON',
      postalCode: 'L2E 6T2'
    },
    socialLinks: [
      { platform: 'linktree', url: 'https://linktr.ee/tpsrecruiting' },
      { platform: 'instagram', url: 'https://www.instagram.com/tpsrecruiting/' },
      { platform: 'facebook', url: 'https://www.facebook.com/TPSRecruiting/' },
      { platform: 'twitter', url: 'https://x.com/TPSRecruiting' }
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
  associatedSessionSlug: 'tourism-careers-ontario',
  tier: 'platinum',
  industries: ['Hospitality/Tourism', 'Business', 'Arts/Culture'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/tourism-industry-association.png',
  tagline: 'The Tourism Industry Association of Ontario (TIAO) is the voice of Ontario\'s tourism industry and host of award-winning Ontario Tourism Summit.',
  description: 'At TIAO, we work on behalf of our membership, collectively representing the majority of tourism businesses and workers across the province, to take on pressing policy issues that impact the Ontario tourism industry.\n\nTIAO is committed to supporting Ontario\'s future tourism workforce because it is the foundation of a strong and sustainable industry. Investing in skills and career pathways today builds resilience and readiness for change. For TIAO, supporting the workforce isn\'t just about filling roles—it\'s about shaping leaders who will drive tourism forward.',
  video: {
    url: 'https://www.youtube.com/watch?v=7n2Bkljvo4U',
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
    embedUrl: 'https://docs.google.com/presentation/d/1Zl4PXixJ_Uf8KHNHbaSIY_8zFP34Q7jXtrwITPaj0NU/edit?usp=sharing',
    type: 'google-slides',
    title: 'Tourism Career Opportunities',
    description: 'Careers in Ontario\'s tourism and hospitality sector'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Get Inspired',
    url: 'https://www.skillsthattravel.ca/skills-that-travel',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://publichealth.example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'info@tiaontario.ca',
    phone: '416-483-1691',
    socialLinks: [
      { platform: 'facebook', url: 'https://www.facebook.com/TIAONTARIO/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/tiaontario/' },
      { platform: 'instagram', url: 'https://www.instagram.com/tiaogram' },
      { platform: 'twitter', url: 'https://x.com/TIAOntario' }
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
  associatedSessionSlug: 'vox-pop-labs-careers',
  tier: 'platinum',
  industries: ['ICT', 'Business', 'Non-Profit/Education'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/vox-pop-labs.png',
  tagline: 'Vox Pop Labs is a B Corporation founded and run by academics. We bring together human and artificial intelligence to help communities navigate important choices.',
  description: 'Vox Pop Labs is a B Corporation founded and run by academics. We bring together human and artificial intelligence to help communities navigate important choices.',
  website: 'https://voxpoplabs.com/',
  video: {
    url: 'https://youtube.com/shorts/k9LR3JqO2Tg',
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
    embedUrl: 'https://docs.google.com/presentation/d/195AsBqKRhNdLGUETvfQmidEFgYMxbMkT3Idj4o-lDbk/edit?usp=sharing',
    type: 'google-slides',
    title: 'Vox Pop Labs Civic Technology',
    description: 'Innovative civic engagement and technology solutions'
  },
  engagementActivity: {
    embedUrl: 'https://gemini.google.com/share/451c917ba735',
    embedType: 'iframe',
    title: 'Career Skills Assessment',
    description: 'Test your knowledge and discover career opportunities',
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Get Involved',
    url: 'https://voxpoplabs.com/signup',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Contact Us',
    url: 'https://voxpoplabs.example.com/contact',
    type: 'contact'
  },
  contact: {
    socialLinks: [
      { platform: 'twitter', url: 'https://x.com/voxpoplabs' },
      { platform: 'linkedin', url: 'https://ca.linkedin.com/company/voxpoplabs' },
      { platform: 'facebook', url: 'https://www.facebook.com/voxpoplabs' }
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
  industries: ['Manufacturing'],
  organizationType: 'post-secondary',
  pathway: 'direct-to-workplace',
  logo: '/logos/university-of-guelph.png',
  tagline: 'The University of Guelph reached a major milestone, ranking as the second largest university co-op program in Ontario and the fifth largest in Canada.',
  description: 'At the University of Guelph, everyone who studies here, explores here, teaches here and works here is committed to one simple purpose: to Improve Life.\n\nNo matter where you\'re from, once you enroll at U of G, you\'re part of a community – a network of fellow students and staff who will help you achieve your goals and set you up for success.\n\nConnect with us to learn more about our programs, upcoming events, webinars, and more!',
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
    text: 'Visit Us',
    url: 'https://www.uoguelph.ca/admission/undergraduate/events/',
    type: 'contact'
  },
  secondaryCTA: {
    text: 'Learn More',
    url: 'https://apply.uoguelph.ca/register/?id=410f4687-a8f0-43f1-82a2-799607493e20',
    type: 'application'
  },
  contact: {
    website: 'https://www.uoguelph.ca/admission/undergraduate/',
    headquarters: {
      address: '45 Industrial Drive',
      city: 'Hamilton',
      province: 'ON',
      postalCode: 'L8E 2X9'
    },
    socialLinks: [
      { platform: 'globe', url: 'https://www.uoguelph.ca/admission/undergraduate/', label: 'Undergraduate Admissions' },
      { platform: 'instagram', url: 'https://www.instagram.com/uofgadmission/' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@uofgadmission?lang=en' },
      { platform: 'spotify', url: 'https://open.spotify.com/user/neuro38hfoyaojlkjoqvywkpp' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/UofGAdmissions/featured' },
      { platform: 'globe', url: 'https://apply.uoguelph.ca/register/?id=410f4687-a8f0-43f1-82a2-799607493e20', label: 'Sign Up to Learn More' }
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
  industries: ['Non-Profit/Education'],
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
  industries: ['Non-Profit/Education'],
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
  industries: ['Non-Profit/Education'],
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
  // All booths in alphabetical order by name
  healthFirst,                  // AgRobotics Working Group
  financeHub,                   // Canadian Nuclear Laboratories
  eduPath,                      // Cansbridge Scholars
  careerMythBuster,             // Career Myth Buster
  communityCollege,             // Conestoga College
  worldExplorer,                // CPKC
  greenPower,                   // CWB Welding Foundation
  creativeMinds,                // Discover Year
  dataDynamics,                 // Diversity Institute
  tradesMaster,                 // Encore Canada
  marketGenius,                 // Ernst & Young
  consultPro,                   // Humber FAST
  manufactureTech,              // Hydro One
  industryImmersionSeries,      // Industry Immersion Series
  cyberShield,                  // Jack.org
  bioMedical,                   // Kids Help Phone
  legalServices,                // Mydoh
  socialImpact,                 // NFTE Canada
  urbanPlanning,                // Ontario Water Careers
  futureBuild,                  // Royal Canadian Air Force
  sportsManagement,             // Seeking Scholarships
  environmentalConsulting,      // Studenthaus
  automotiveTech,               // Support Ontario Youth
  fashionDesign,                // thinkAG & The Canadian Agricultural Human Resource Council
  hospitalityCollege,           // Toronto Police Services
  publicHealth,                 // Tourism Industry Association
  foodService,                  // TRCA, CH, & NPCA
  universityOfGuelph,           // University of Guelph
  voxPopLabs                    // Vox Pop Labs
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
    filtered = filtered.filter(booth =>
      booth.industries.some(industry => filters.industries!.includes(industry))
    )
  }

  return filtered
}
