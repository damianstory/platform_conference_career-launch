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
      title: 'Air Force Career Profiles',
      description: 'Explore detailed career profiles and opportunities in the Royal Canadian Air Force',
      url: 'https://forces.ca/en/careers/env_2',
      type: 'link'
    },
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
      title: 'Youth Outreach',
      description: 'Programs and opportunities for youth to engage with nuclear science and technology',
      url: 'https://www.cnl.ca/youth-outreach/',
      type: 'link'
    },
    {
      title: 'CNL Careers',
      description: 'Explore career opportunities at Canada\'s premier nuclear science organization',
      url: 'https://www.cnl.ca/about-cnl/work-with-us/',
      type: 'link'
    },
    {
      title: 'Academic Partnership Program',
      description: 'Collaborative research and learning opportunities with CNL',
      url: 'https://www.cnl.ca/about-cnl/academic-partnership-program/',
      type: 'link'
    },
    {
      title: 'Student Careers',
      description: 'Co-op placements, internships, and entry-level opportunities for students',
      url: 'https://www.cnl.ca/about-cnl/student-careers/',
      type: 'link'
    },
    {
      title: 'Health Sciences: Meet the Team',
      description: 'Discover the professionals advancing medical isotopes and health innovations',
      url: 'https://www.cnl.ca/health-science-2/meet-the-team-health-sciences',
      type: 'link'
    },
    {
      title: 'Clean Energy: Meet the Team',
      description: 'Meet the experts developing Canada\'s clean energy future',
      url: 'https://www.cnl.ca/clean-energy/meet-the-team-clean-energy/',
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
      title: 'About Us',
      description: 'Learn about our mission to help young people develop high agency and entrepreneurial thinking',
      url: 'https://www.cansbridgescholars.com/about',
      type: 'link'
    },
    {
      title: 'Foundations Course',
      description: 'Our flagship cohort-based entrepreneurship program for students aged 18-25',
      url: 'https://www.cansbridgescholars.com/courses/foundations',
      type: 'link'
    },
    {
      title: 'Cansbridge Fellowship',
      description: 'Join our community of young leaders and entrepreneurs',
      url: 'https://cansbridgefellowship.com/',
      type: 'link'
    },
    {
      title: 'Connect with Lyn',
      description: 'Connect with Lyn Chen, founder of Cansbridge Scholars, on LinkedIn',
      url: 'https://www.linkedin.com/in/lynchen/',
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
  slug: 'encore-canada',
  associatedSessionSlug: 'behind-magic-events-concerts',
  tier: 'platinum',
  industries: ['Hospitality/Tourism', 'Business', 'Arts/Culture', 'ICT'],
  organizationType: 'employer',
  pathway: 'apprenticeship',
  logo: '/logos/encore-canada.png',
  tagline: 'Canada\'s Largest Event Technology and Production Partner.',
  description: 'Encore Canada is a proud part of the communities they serve. Their Canadian team members live, work, and lead in cities across the country, making an impact that goes beyond events.\n\nAs the leading provider of event technology and production in the country they have 80 years of expertise.\n\nInterested in joining our team, check out our career page today!',
  website: 'https://www.encore-can.com/',
  video: {
    url: 'https://youtu.be/cFaE3wC-_7I',
    type: 'youtube',
    title: 'Power of Trades',
    description: 'See what our graduates build'
  },
  resources: [
    {
      title: 'Encore Canada Careers',
      description: 'Explore career opportunities with Encore and join our team of event professionals',
      url: 'https://jobs.encoreglobal.com/en?utm_source=encoreglobal.com&utm_medium=referral&utm_campaign=corporate-site&utm_content=footer',
      type: 'link'
    },
    {
      title: 'Introduction to Event Technology & Hospitality',
      description: 'Learn about career paths in event technology and hospitality',
      url: '/Users/damianmatheson/Desktop/Career Launch_Company Logos/Career Launch_Booth Logos/encore pdf .pdf',
      type: 'pdf'
    },
    {
      title: 'Cielle & Co.',
      description: 'Boutique event production and design company creating unforgettable experiences',
      url: 'https://cielleandco.com/',
      type: 'link'
    },
    {
      title: 'Live Nation',
      description: 'Canada\'s leading live entertainment company producing concerts and events',
      url: 'https://www.livenation.ca/',
      type: 'link'
    },
    {
      title: 'JPdL',
      description: 'Full-service event production and design company specializing in corporate events',
      url: 'https://www.jpdl.com/',
      type: 'link'
    },
    {
      title: 'The Creative Connoisseur',
      description: 'Event design and production services for luxury and corporate events',
      url: 'https://the-cc.ca/',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: '/slides/encore-career-presentation.pdf',
    type: 'local-pdf',
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
  contact: {
    website: 'https://www.encore-can.com/',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/encore.canada/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/encore-canada/' }
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
      title: 'Careers at CPKC',
      description: 'Explore career opportunities across North America\'s first transnational railroad',
      url: 'https://www.cpkcr.com/en/careers',
      type: 'link'
    },
    {
      title: 'CPKC Job Map',
      description: 'Interactive map showing available positions across the network',
      url: 'https://careers.cpr.ca/',
      type: 'link'
    },
    {
      title: 'Innovation & Technology',
      description: 'Discover how CPKC is leading the rail industry with cutting-edge technology',
      url: 'https://www.cpkcr.com/en/safety/Innovation',
      type: 'link'
    },
    {
      title: 'Connecting a Continent',
      description: 'Learn how CPKC connects Canada, the U.S., and Mexico',
      url: 'https://www.cpkcr.com/en/our-advantage/connecting-a-continent',
      type: 'link'
    },
    {
      title: 'Sustainability Driven',
      description: 'Our commitment to environmental responsibility and sustainable operations',
      url: 'https://www.cpkcr.com/en/sustainability',
      type: 'link'
    },
    {
      title: 'Our History',
      description: 'The rich heritage of Canadian Pacific and Kansas City Southern railways',
      url: 'https://www.cpkcr.com/en/about-cpkc/history',
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
      title: 'Career Profiles',
      description: 'Explore diverse career paths in welding, fabrication, and allied technologies',
      url: 'https://www.cwbweldingfoundation.org/pathways/#career-profiles',
      type: 'link'
    },
    {
      title: 'Programs & Events',
      description: 'Youth programs, workshops, and events to explore welding careers',
      url: 'https://www.cwbweldingfoundation.org/programs/#programs-for-youth',
      type: 'link'
    },
    {
      title: 'Post-Secondary Program Support',
      description: 'Financial support and resources for post-secondary welding students',
      url: 'https://www.cwbweldingfoundation.org/programs/post-secondary-support/',
      type: 'link'
    },
    {
      title: 'Curriculum Support Program',
      description: 'Resources and support for educators teaching welding and fabrication',
      url: 'https://www.cwbweldingfoundation.org/programs/curriculum-support-program/',
      type: 'link'
    },
    {
      title: 'Equipment and Technology Advancement Program',
      description: 'Funding to help schools upgrade welding equipment and technology',
      url: 'https://www.cwbweldingfoundation.org/programs/equipment-and-technology-advancement-program/',
      type: 'link'
    },
    {
      title: 'Women of Steel',
      description: 'Empowering women in welding and skilled trades through mentorship and support',
      url: 'https://www.cwbweldingfoundation.org/programs/wos/',
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
      title: 'Discover Year Flyer',
      description: 'Download our program overview and learn about the transformative gap year experience',
      url: '/resources/discover-year-flyer.pdf',
      type: 'pdf'
    },
    {
      title: 'Apply to Discover Year',
      description: 'Start your application for the transformative gap year program',
      url: 'https://discoveryear.ca/apply/',
      type: 'link'
    },
    {
      title: 'Hear from Our Graduates',
      description: 'Student stories and testimonials from Discover Year alumni',
      url: 'https://discoveryear.ca/student-stories/',
      type: 'link'
    },
    {
      title: 'Gap Year: A Path to Purposeful Education',
      description: 'TED Talk by Jay Gosselin on the power of gap year programs',
      url: 'https://www.ted.com/talks/jay_gosselin_gap_year_a_path_to_purposeful_education',
      type: 'video'
    },
    {
      title: 'Program Structure',
      description: 'Learn about the curriculum, timeline, and key components of Discover Year',
      url: 'https://discoveryear.ca/program-structure/',
      type: 'link'
    },
    {
      title: 'Learn About Our 2026 Winter/Spring Term',
      description: 'Explore the upcoming 2026 Winter/Spring program and application details',
      url: 'https://discoveryear.ca/2026-winter-term/',
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
      title: 'MyStartr Future Skills and Careers',
      description: 'A one-stop-shop of resources to help students discover their strengths, learn more about possible careers, and provide next steps to move towards career goals.',
      url: 'https://mystartr.ca/careers/',
      type: 'link'
    },
    {
      title: 'Perceptions of Trades Training Gaining Traction Over University Report',
      description: 'Find out what Canadians are most likely to recommend - trades or university.',
      url: 'https://www.torontomu.ca/diversity/reports/perceptions-of-trades-training-gaining-traction-over-university/',
      type: 'pdf'
    },
    {
      title: 'Ecosystem Map of Skills Organizations',
      description: 'Search from a list of 4,814 skills training and employment organizations.',
      url: 'https://www.torontomu.ca/diversity/research/future-skills/eco-system-map-of-skills-organization/',
      type: 'link'
    },
    {
      title: 'ADaPT for Black Youth',
      description: 'Level up your digital skills and stand out in the job market by joining our Winter 2026 cohort.',
      url: 'https://www.torontomu.ca/diversity/research/future-skills/adaptforblackyouth/',
      type: 'link'
    },
    {
      title: 'Newcomer Employment and Entrepreneurship Knowledge Hub (NEESH)',
      description: 'Jumpstart your job search or business with in-demand training tailored to your goals.',
      url: 'https://scaddingcourt.org/programs/program-category/entrepreneurship-programs/',
      type: 'link'
    },
    {
      title: 'Meet the DI Team',
      description: 'Learn about the researchers and leaders at the Diversity Institute',
      url: 'https://www.torontomu.ca/diversity/about/team/#!tab-1605106727445-team',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/1RF5u4yEwFfABTTLAn5KfXqDQEln2vx6C/embed?start=false&loop=false',
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
  tagline: 'At EY, we develop you with future-focused skills, and equip you with world-class experiences. We empower you in a flexible environment, and fuel you and your extraordinary talents in a diverse and inclusive culture of globally connected teams.',
  description: 'At EY, our purpose is Building a better working world. The insights and quality services we provide help build trust and confidence in the capital markets and in economies the world over. We develop outstanding leaders who team to deliver on our promises to all our stakeholders. In so doing, we play a critical role in building a better working world for our people, for our clients and for our communities.',
  website: 'https://www.ey.com/en_ca',
  video: {
    url: 'https://www.youtube.com/embed/v-tWYAvJ08s',
    type: 'youtube',
    title: 'Reframe Your Future',
    description: 'Discover career opportunities at EY'
  },
  resources: [
    {
      title: 'What You Can Do Here',
      description: 'Explore diverse career opportunities and service lines at EY',
      url: 'https://www.ey.com/en_ca/careers/what-you-can-do-here',
      type: 'link'
    },
    {
      title: 'What It\'s Like to Work Here',
      description: 'Discover EY\'s culture, values, and employee experience',
      url: 'https://www.ey.com/en_ca/careers/what-its-like-to-work-here',
      type: 'link'
    },
    {
      title: 'How to Join Us',
      description: 'Learn about the application process and recruitment timeline',
      url: 'https://www.ey.com/en_ca/careers/how-to-join-us',
      type: 'link'
    },
    {
      title: 'Student Job Search',
      description: 'Browse and apply for student positions, internships, and co-op opportunities',
      url: 'https://eyglobal.yello.co/job_boards/c1riT--B2O-KySgYWsZO1Q?locale=en',
      type: 'link'
    },
    {
      title: 'Our People & Purpose',
      description: 'Learn about EY\'s commitment to making a positive impact in the world',
      url: 'https://www.ey.com/en_ca/about-us#our-people',
      type: 'link'
    },
    {
      title: 'Alumni at EY',
      description: 'Stay connected with the EY alumni network and opportunities',
      url: 'https://www.ey.com/en_ca/alumni',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: '/slides/ey-presentation.pdf',
    type: 'local-pdf',
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
  name: 'Humber Polytechnic',
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
      title: 'Future Students',
      description: 'Explore Humber',
      url: 'https://humber.ca/future-students.html',
      type: 'link'
    },
    {
      title: 'Career Finder',
      description: 'Find your career match',
      url: 'https://humbercareerfinder.com/',
      type: 'link'
    },
    {
      title: 'Engineer Your Dream Career',
      description: 'Explore Engineering programs',
      url: 'https://appliedtechnology.humber.ca/future-students/explore/full-time/related-programs/engineering.html',
      type: 'link'
    },
    {
      title: 'Work Integrated Learning',
      description: 'Working while studying',
      url: 'https://humber.ca/work-integrated-learning/',
      type: 'link'
    },
    {
      title: 'The Barrett STEAM Academy',
      description: 'Innovative programs in Science, Technology, Engineering, Arts, and Mathematics',
      url: 'https://humber.ca/barrett-centre-for-technology-innovation/steam-academy.html',
      type: 'link'
    },
    {
      title: 'Faculty of Applied Science & Technology',
      description: 'Explore FAST programs, open house events, and campus tours',
      url: 'https://humber.ca/future-students/tours-events/open-house/faculties-programs/fast.html',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/1fTah5wWTA2EegqKvQ2biKrkvSnS7yMQqVLdgmlSJlyw/edit?usp=sharing',
    type: 'google-slides',
    title: 'Humber Polytechnic Program Information',
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
      title: 'Working at Hydro One',
      description: 'Explore career opportunities at Ontario\'s largest electricity provider',
      url: 'https://www.hydroone.com/careers',
      type: 'link'
    },
    {
      title: 'About Hydro One',
      description: 'Learn about our mission, values, and role in powering Ontario',
      url: 'https://www.hydroone.com/about/',
      type: 'link'
    },
    {
      title: 'Indigenous Partnerships',
      description: 'Our commitment to building meaningful relationships with Indigenous communities',
      url: 'https://www.hydroone.com/about/indigenous-partnerships',
      type: 'link'
    },
    {
      title: 'Community Investment',
      description: 'Building safe communities through investment and support programs',
      url: 'https://www.hydroone.com/about/sustainability/building-safe-communities',
      type: 'link'
    },
    {
      title: 'Diversity',
      description: 'Our commitment to fostering an inclusive and diverse workplace',
      url: 'https://www.hydroone.com/careers/diversity',
      type: 'link'
    },
    {
      title: 'Sustainability',
      description: 'Environmental stewardship and sustainable energy practices at Hydro One',
      url: 'https://www.hydroone.com/Sustainability/',
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
  tagline: 'Learn to support someone struggling with their mental health through this online course created by Jack.org in partnership with Born This Way Foundation.',
  description: 'We believe in the extraordinary power of young people to transform the mental health landscape. Young people often recognize when their peers are struggling before anyone else. They are trusted sources of support and information, and their voices carry the power to normalize difficult conversations around mental health. By equipping young people with resources, knowledge, and community to drive change, we\'re not only supporting individuals but strengthening entire communities through peer-to-peer connection and support.',
  video: {
    url: 'https://youtu.be/NPy1UyRr7l0',
    type: 'youtube',
    title: 'Security Careers',
    description: 'Explore cybersecurity opportunities'
  },
  resources: [
    {
      title: 'Complete Your Be There Certificate',
      description: 'Free mental health training to help you support others in need',
      url: 'https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion',
      type: 'link'
    },
    {
      title: 'Jack Amplified',
      description: 'Our podcast featuring young people sharing their mental health journeys',
      url: 'https://open.spotify.com/show/5cWPTXeVfdY7szJ9U9OvpO?si=90aeed6f021d4c25&nd=1&dlsi=efc97b5ef40d4382',
      type: 'link'
    },
    {
      title: 'Start a Chapter or Become a Champion!',
      description: 'Bring Jack.org to your school or community and make a difference',
      url: 'https://www.jack.org/communities',
      type: 'link'
    },
    {
      title: 'For Educators: Visit Our EdHub',
      description: 'Resources, lesson plans, and support materials for educators',
      url: 'https://edhub.jack.org',
      type: 'link'
    },
    {
      title: 'Be There Poster',
      description: 'Download and share this poster about mental health support',
      url: '/resources/be-there-poster.pdf',
      type: 'pdf'
    },
    {
      title: 'Join Our Mailing List',
      description: 'Stay connected with Jack.org news, events, and mental health resources',
      url: 'https://www.jack.org/campaigns/thatfeeling',
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
    text: 'Be There Certificate',
    url: 'https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion',
    type: 'careers'
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
      title: 'Student Resources',
      description: 'Comprehensive toolkit with mental health resources designed for students',
      url: 'https://khp-student-toolkit.carrd.co/',
      type: 'link'
    },
    {
      title: 'National Youth Council - Kids Help Phone',
      description: 'Join our youth leadership council and help shape mental health services for young people',
      url: 'https://kidshelpphone.ca/opportunities/national-youth-council/',
      type: 'link'
    },
    {
      title: 'Cam\'s Kids Ambassador Program',
      description: 'Become a mental health advocate and champion in your community',
      url: 'https://kidshelpphone.ca/get-involved/programs-resources/cams-kids-ambassadors/',
      type: 'link'
    },
    {
      title: 'We Rise: A Black Engagement Program',
      description: 'Culturally responsive mental health support and engagement for Black youth',
      url: 'https://kidshelpphone.ca/opportunities/we-rise-a-black-engagement-program/',
      type: 'link'
    },
    {
      title: 'Paving Paths: A Newcomer Engagement Program',
      description: 'Mental health resources and support specifically for newcomer youth',
      url: 'https://kidshelpphone.ca/opportunities/paving-paths-a-newcomer-engagement-program-by-kids-help-phone/',
      type: 'link'
    },
    {
      title: 'For Educators: Counsellor in the Classroom',
      description: 'Register for mental health education and support resources for your classroom',
      url: 'https://kidshelpphone.ca/get-involved/are-you-an-educator-check-out-counsellor-in-the-classroom',
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
      title: 'Conservation Authorities Infographic',
      description: 'Learn how conservation authorities create a resilient Ontario through watershed management',
      url: 'https://conservationontario.ca/fileadmin/pdf/conservation_authorities_section/CO_Resilient_Ontario_2021_FINAL.pdf',
      type: 'pdf'
    },
    {
      title: 'TRCA | Events Calendar',
      description: 'Discover upcoming conservation events, programs, and community activities',
      url: 'https://trca.ca/events-calendar/',
      type: 'link'
    },
    {
      title: 'TRCA | Get Involved',
      description: 'Explore volunteer opportunities, community programs, and ways to participate in conservation',
      url: 'https://trca.ca/get-involved/',
      type: 'link'
    },
    {
      title: 'Niagara Peninsula Conservation Authority',
      description: 'Learn about conservation work in the Niagara Peninsula region',
      url: 'https://npca.ca/',
      type: 'link'
    },
    {
      title: 'Conservation Halton',
      description: 'Discover conservation initiatives and programs in the Halton region',
      url: 'https://www.conservationhalton.ca/',
      type: 'link'
    },
    {
      title: 'Conservation Ontario',
      description: 'Explore the network of 36 conservation authorities across Ontario',
      url: 'https://conservationontario.ca/',
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
  logo: '/logos/mydoh-coal.png',
  imageScale: 0.9,
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
      title: 'Should I Buy It Quiz',
      description: 'This spending tool can help you figure out if your next planned purchase is really worth it',
      url: 'https://www.mydoh.ca/tools/should-i-buy-it-quiz/?utm_medium=partnership&utm_source=partnerships&utm_campaign=myblueprint&utm_content=careerlaunch2025',
      type: 'link'
    },
    {
      title: 'How to Write a Resume',
      description: 'Get advice about how to make a resume for teens, including resume examples for teens and tips for what should be on a resume for a teenager.',
      url: 'https://www.mydoh.ca/learn/blog/career/how-to-make-a-resume-for-teens-with-examples/?utm_medium=partnership&utm_source=partnerships&utm_campaign=myblueprint&utm_content=careerlaunch2025',
      type: 'link'
    },
    {
      title: 'Part Time Jobs for Teens',
      description: 'Are you a teen thinking about applying for your first job? Here\'s a list of the most popular part-time jobs for teens and tips on how to balance work with school.',
      url: 'https://www.mydoh.ca/learn/blog/career/14-best-part-time-jobs-for-teens/?utm_medium=partnership&utm_source=partnerships&utm_campaign=myblueprint&utm_content=careerlaunch2025',
      type: 'link'
    },
    {
      title: 'How to Help Teens with ADHD Manage Their Money',
      description: 'Help kids and teens with ADHD or ADD develop money skills. We share 8 tips to help them with impulsivity, improve decision-making and financial literacy.',
      url: 'https://www.mydoh.ca/learn/blog/banking/how-to-help-teens-with-adhd-manage-their-money/?utm_medium=partnership&utm_source=partnerships&utm_campaign=myblueprint&utm_content=careerlaunch2025',
      type: 'link'
    },
    {
      title: 'Career Tools',
      description: 'Resources to help teens land their first job or turn a hobby into a profit.',
      url: 'https://www.mydoh.ca/learn/blog/category/career/?utm_medium=partnership&utm_source=partnerships&utm_campaign=myblueprint&utm_content=careerlaunch2025',
      type: 'link'
    },
    {
      title: 'Mydoh - How it Works',
      description: 'Learn more about how Mydoh works',
      url: 'https://www.mydoh.ca/how-it-works/?utm_medium=partnership&utm_source=partnerships&utm_campaign=myblueprint&utm_content=careerlaunch2025',
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
    url: 'https://www.mydoh.ca/?utm_medium=partnership&utm_source=partnerships&utm_campaign=myblueprint&utm_content=careerlaunch2025',
    type: 'learn-more'
  },
  contact: {
    website: 'https://www.mydoh.ca/?utm_medium=partnership&utm_source=partnerships&utm_campaign=myblueprint&utm_content=careerlaunch2025',
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
      title: 'Infrastructure Construction Industry',
      description: 'Explore career opportunities in Ontario\'s water infrastructure construction sector',
      url: 'https://ontariowatercareers.com/careers/',
      type: 'link'
    },
    {
      title: 'Find Your Perfect Role',
      description: 'Discover entry-level positions that match your interests and skills',
      url: 'https://ontariowatercareers.com/jobs/entry-level-interest/',
      type: 'link'
    },
    {
      title: 'Why Work In Water?',
      description: 'Learn about the benefits, impact, and opportunities in the water infrastructure sector',
      url: 'https://ontariowatercareers.com/why-water/',
      type: 'link'
    },
    {
      title: 'Educator Resources',
      description: 'Resources and materials for educators to teach about water infrastructure careers',
      url: 'https://ontariowatercareers.com/educator-resources/',
      type: 'link'
    },
    {
      title: 'Talking Points & Salary Guide',
      description: 'Comprehensive guide for guidance counselors with salary information and career talking points',
      url: '/resources/oswca-talking-points-salary-guide.pdf',
      type: 'pdf'
    },
    {
      title: 'Trading Cards',
      description: 'Interactive trading cards featuring water infrastructure careers and roles',
      url: '/resources/oswca-trading-cards.pdf',
      type: 'pdf'
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
  tagline: 'Our mission is to provide Ontario schools and families with the information they need to support the pathways of all students as they plan for postsecondary destinations.',
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
      title: 'Scholarship Report Library',
      description: 'Access our comprehensive library of scholarship opportunities and funding resources',
      url: 'https://seekingscholarships.com/the-scholarship-report/',
      type: 'link'
    },
    {
      title: 'The Trades Report',
      description: 'Explore scholarships and funding opportunities specifically for skilled trades education',
      url: 'https://seekingscholarships.com/the-trades-report',
      type: 'link'
    },
    {
      title: 'About Us',
      description: 'Learn about our mission to help Ontario students fund their postsecondary education',
      url: 'https://seekingscholarships.com/about',
      type: 'link'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team for questions about scholarships and funding resources',
      url: 'https://seekingscholarships.com/contact-us/',
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
      title: 'Studenthaus Website',
      description: 'Learn about how Studenthaus helps understand what young renters want',
      url: 'https://www.studenthaus.ca/',
      type: 'link'
    },
    {
      title: 'Housing Survey for High School Students',
      description: 'Share your thoughts and help shape the future of student housing',
      url: 'https://studenthaus.typeform.com/to/uRT2TWTT',
      type: 'link'
    },
    {
      title: 'About Studenthaus',
      description: 'Discover our mission and approach to understanding young renters',
      url: 'https://www.studenthaus.ca/about',
      type: 'link'
    },
    {
      title: 'Haus Hacks Newsletter',
      description: 'Subscribe to our newsletter for tips, insights, and student housing news',
      url: 'https://haushacks.beehiiv.com/',
      type: 'link'
    },
    {
      title: 'Studenthaus Case Studies',
      description: 'See examples of our work with developers, institutions, and communities',
      url: 'https://www.studenthaus.ca/work',
      type: 'link'
    },
    {
      title: 'Julian Builds Things Instagram',
      description: 'Follow Julian\'s journey building Studenthaus and creating solutions',
      url: 'https://www.instagram.com/julianbuildsthings/',
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
      title: 'Support Ontario Youth Website',
      description: 'Learn about our mission to transform skilled trades education and support apprentices',
      url: 'https://www.supportontarioyouth.ca/',
      type: 'link'
    },
    {
      title: 'Tools in the Trades',
      description: 'Explore our innovative program providing hands-on tool experiences across multiple trades',
      url: 'https://toolsinthetrades.ca/',
      type: 'link'
    },
    {
      title: 'How to Get Started',
      description: 'Step-by-step guide to beginning your apprenticeship journey in the skilled trades',
      url: 'https://www.supportontarioyouth.ca/how-to-get-started/',
      type: 'link'
    },
    {
      title: 'Apprenticeship Toolkit',
      description: 'Comprehensive toolkit with resources and guidance for apprentices',
      url: 'https://drive.google.com/file/d/18jTSEA8zhn-PWcRHRbBHNygfFBGsPUnJ/view',
      type: 'pdf'
    },
    {
      title: 'Trades Readiness Program',
      description: 'Discover our program offering safety training, mentorship, and employability skills',
      url: 'https://www.supportontarioyouth.ca/trades-readiness-program/',
      type: 'link'
    },
    {
      title: 'Apprentice Resources',
      description: 'Access resources, tools, and support materials for apprentices and journeypersons',
      url: 'https://www.supportontarioyouth.ca/apprentice-resources/',
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
      title: 'Identifying and Addressing Barriers to Careers in Agriculture',
      description: 'Research document exploring barriers students face when considering agricultural careers',
      url: 'https://cahrc-ccrha.ca/resources/document/identifying-and-addressing-barriers-careers-agriculture',
      type: 'pdf'
    },
    {
      title: 'Find Yourself in Agriculture - Kareero Virtual Reality Tool',
      description: 'Kareero game experience',
      url: 'https://kareero.vrts.ca/webgl/',
      type: 'link'
    },
    {
      title: '"I Am Agriculture" Career Exploration Tool',
      description: 'Discover agricultural careers that match your interests and skills',
      url: 'https://www.iamag.ca',
      type: 'link'
    },
    {
      title: 'AITC-C National Resource Library',
      description: 'Comprehensive collection of agriculture education resources for Ontario educators',
      url: 'https://aitcdashboard.ca/resource_matrix/NATIONAL/',
      type: 'link'
    },
    {
      title: 'Agriculture Labour Market Forecast 2023-2030',
      description: 'CAHRC\'s comprehensive analysis of workforce trends and career opportunities in Canadian agriculture',
      url: 'https://cahrc-ccrha.ca/sites/default/files/2024-02/CAHRC_LMI-Report_FEB_2024_EN%20%281%29.pdf',
      type: 'pdf'
    },
    {
      title: 'CAHRC x AITC-C In-Person Career Counsellor Event (Ottawa)',
      description: 'Join us for a professional development event focused on building awareness of careers in agriculture',
      url: 'https://www.eventbrite.ca/e/building-awareness-of-careers-in-agriculture-tickets-1974900117414?aff=oddtdtcreator',
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
      title: 'Careers | Toronto Police Services',
      description: 'Explore career opportunities with Toronto Police Services and learn about our diverse roles',
      url: 'https://www.tps.ca/careers/',
      type: 'link'
    },
    {
      title: 'TPS Uniform Recruitment Process',
      description: 'Step-by-step guide to the uniform recruitment process and requirements',
      url: 'https://drive.google.com/file/d/1cSc_I-ZJOPbee97Wg8IvayP9eblqVjfC/view',
      type: 'pdf'
    },
    {
      title: 'TPS Recruiting Events',
      description: 'Find upcoming recruiting events and connect with our team',
      url: 'https://linktr.ee/TPSRecruitingEvents',
      type: 'link'
    },
    {
      title: 'Apply to Join the Service',
      description: 'Start your application to become a Toronto Police Officer',
      url: 'https://www.tps.ca/careers/join-service/',
      type: 'link'
    },
    {
      title: 'Youth in Policing Initiative',
      description: 'Summer employment program for youth aged 15-18 to explore policing careers',
      url: 'https://www.tps.ca/youth-policing-initiative/',
      type: 'link'
    },
    {
      title: 'Connect with Us!',
      description: 'Get in touch with our recruiting team and ask questions about TPS careers',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSeUyq2Y2jNOyNCjQk-5azMtjkryR6UyzkjpAxac55d8Wq47sw/viewform',
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
  name: 'Tourism Industry Association of Ontario',
  slug: 'tourism-industry-association-ontario',
  associatedSessionSlug: 'tourism-careers-ontario',
  tier: 'platinum',
  industries: ['Hospitality/Tourism', 'Business', 'Arts/Culture'],
  organizationType: 'employer',
  pathway: 'university',
  logo: '/logos/tourism-industry-association.png',
  tagline: 'The Tourism Industry Association of Ontario (TIAO) is the voice of Ontario\'s tourism industry.',
  description: 'TIAO represents the majority of Ontario\'s tourism businesses and workers, advocating on critical policy issues that shape the industry. We are committed to supporting Ontario\'s future tourism workforce because it is the foundation of a strong and sustainable industry. Investing in skills and career pathways today builds resilience and readiness for change.\n\nFor TIAO, supporting the workforce isn\'t just about filling roles, it\'s about shaping leaders who will drive tourism forward.',
  video: {
    url: 'https://www.youtube.com/watch?v=7n2Bkljvo4U',
    type: 'youtube',
    title: 'Public Health Careers',
    description: 'Make a difference in public health'
  },
  resources: [
    {
      title: 'Tourism Career Pathways',
      description: 'Map your own pathway in tourism.',
      url: 'https://discovertourism.ca/guidebook/career-pathways/',
      type: 'link'
    },
    {
      title: 'Tourism Career Stories',
      description: 'Get inspired by real stories.',
      url: 'https://discovertourism.ca/featured-stories/',
      type: 'link'
    },
    {
      title: 'Is Tourism Right for Me?',
      description: 'Take our interactive quiz to discover if tourism careers align with your interests',
      url: 'https://discovertourism.ca/tool/is-tourism-right-for-me/#quiz',
      type: 'link'
    },
    {
      title: 'What Is Tourism Really Like?',
      description: 'Fact or fiction – take the quiz to find out.',
      url: 'https://discovertourism.ca/tool/tourism-what-is-it-really-like/',
      type: 'link'
    },
    {
      title: 'Skills That Travel',
      description: 'Discover how skills developed in tourism transfer to opportunities worldwide',
      url: 'https://www.skillsthattravel.ca/skills-that-travel',
      type: 'link'
    },
    {
      title: 'Stay Connected',
      description: 'Subscribe to TIAO updates and stay informed about tourism industry news',
      url: 'https://www.tiaontario.ca/cpages/subscription',
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
      title: 'Meet the VPL Team',
      description: 'Get to know the team behind Vox Pop Labs and our mission',
      url: 'https://voxpoplabs.com/about#TeamMembers',
      type: 'link'
    },
    {
      title: 'DegreeHub',
      description: 'Explore postsecondary programs and career pathways with AI-powered guidance',
      url: 'https://degreehub.com/',
      type: 'link'
    },
    {
      title: 'Vote Compass Youth Edition',
      description: 'Interactive civic engagement tool designed for young voters',
      url: 'https://youth.votecompass.com/',
      type: 'link'
    },
    {
      title: 'Career Myth Buster',
      description: 'Debunk common career myths and discover evidence-based career information',
      url: 'https://degreehub.com/careermythbuster',
      type: 'link'
    },
    {
      title: 'About Us',
      description: 'Learn about Vox Pop Labs\' mission to combine human and AI to help communities',
      url: 'https://voxpoplabs.com/about#TeamMembers',
      type: 'link'
    },
    {
      title: 'B Corp Impact Score',
      description: 'See our B Corporation certification and commitment to social and environmental impact',
      url: 'https://www.bcorporation.net/en-us/find-a-b-corp/company/vox-pop-labs/',
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
  description: '**The Education you Need for the Life you Want - Choose U of Guelph.**\n\nAt the University of Guelph, everyone who studies here, explores here, teaches here and works here is committed to one simple purpose: to Improve Life. No matter where you\'re from, once you enroll at U of G, you\'re part of a community – a network of fellow students and staff who will help you achieve your goals and set you up for success.\n\nConnect with us to learn more about our programs, upcoming events, webinars, and more!',
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
  contact: {
    email: 'recruitment@conestogac.on.ca',
    website: 'https://www.conestogac.on.ca',
    socialLinks: [
      { platform: 'x', url: 'https://x.com/ConestogaC' },
      { platform: 'facebook', url: 'https://www.facebook.com/ConestogaCollege' },
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
  contact: {
    email: 'info@myblueprint.ca',
    socialLinks: []
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#22224C'
  }
}

// DegreeHub - External Booth
export const degreeHub: StandardBoothData = {
  id: 'degree-hub',
  name: 'DegreeHub Survey',
  slug: 'degree-hub',
  tier: 'standard',
  industries: ['Non-Profit/Education'],
  organizationType: 'activities',
  pathway: 'general',
  logo: '/logos/degree-hub.png',
  tagline: 'Explore postsecondary programs and career pathways with AI-powered guidance',
  description: 'DegreeHub helps students navigate their postsecondary journey with AI-powered tools and evidence-based career information. Discover programs, explore career pathways, and make informed decisions about your future.',
  website: 'https://degreehub.com/',
  externalUrl: 'https://degreehub.com/',
  video: {
    url: 'https://degreehub.com/',
    type: 'custom',
    title: 'DegreeHub',
    description: 'AI-powered postsecondary program and career pathway guidance'
  },
  resources: [],
  primaryCTA: {
    text: 'Explore Programs',
    url: 'https://degreehub.com/',
    type: 'learn-more'
  },
  contact: {
    email: 'info@degreehub.com',
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
  // Platinum booths in alphabetical order by name
  healthFirst,                  // AgRobotics Working Group
  financeHub,                   // Canadian Nuclear Laboratories
  eduPath,                      // Cansbridge Scholars
  worldExplorer,                // CPKC
  greenPower,                   // CWB Welding Foundation
  creativeMinds,                // Discover Year
  dataDynamics,                 // Diversity Institute
  tradesMaster,                 // Encore Canada
  marketGenius,                 // Ernst & Young
  consultPro,                   // Humber FAST
  manufactureTech,              // Hydro One
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
  voxPopLabs,                   // Vox Pop Labs
  // Standard booths in custom order
  communityCollege,             // Conestoga College
  universityOfGuelph,           // University of Guelph
  industryImmersionSeries,      // Industry Immersion Series
  careerMythBuster,             // Career Myth Buster
  degreeHub                     // DegreeHub Survey
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
