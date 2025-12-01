import { PlatinumBoothData, StandardBoothData } from '@/types/booth'

// ======================
// PLATINUM TIER BOOTHS (27 TOTAL)
// ======================

export const healthFirst: PlatinumBoothData = {
  id: 'agrobotics-working-group-innovation-farms-ontario',
  name: 'AgRobotics Working Group',
  slug: 'agrobotics-working-group-innovation-farms-ontario',
  tier: 'platinum',
  associatedSessionSlug: 'agrobotics',
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
    title: 'AgRobotics Career Quiz',
    description: 'Test your knowledge about careers in agricultural robotics',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Agricultural Robotics: Future of Farming',
      description: 'Discover where technology meets agriculture!',
      badgeImageUrl: '/badges/badge-agrobotics.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'agro1',
          question: 'What types of professionals work together in agricultural robotics?',
          options: ['Only farmers', 'Engineers, programmers, agronomists, data scientists, and entrepreneurs', 'Only computer scientists', 'Only mechanical engineers'],
          correctIndex: 1,
          explanation: 'Agricultural robotics brings together engineers, programmers, agronomists, data scientists, and entrepreneurs all working to make farming smarter and more sustainable.'
        },
        {
          id: 'agro2',
          question: 'Why is robotics becoming essential in agriculture?',
          options: ['To replace all human workers permanently', 'To solve labor challenges and reduce backbreaking work', 'To make farming more expensive', 'To eliminate crop variety'],
          correctIndex: 1,
          explanation: 'Robotics helps solve labor challenges, as finding workers willing to do difficult harvesting work at affordable costs is increasingly difficult.'
        },
        {
          id: 'agro3',
          question: 'What programming languages are useful for careers in agricultural robotics?',
          options: ['HTML and CSS only', 'Python, C++, and MATLAB', 'Only assembly language', 'No programming is needed'],
          correctIndex: 1,
          explanation: 'Coding experience in Python, C++, or MATLAB can open doors in agricultural robotics careers.'
        },
        {
          id: 'agro4',
          question: 'What does RTK technology enable agricultural robots to do?',
          options: ['Play music in fields', 'Provide high-precision GPS navigation for autonomous operation', 'Change crop colors', 'Control weather patterns'],
          correctIndex: 1,
          explanation: 'RTK (Real-Time Kinematic) technology provides high-precision GPS that enables robots to navigate autonomously and work as close to crops as possible.'
        },
        {
          id: 'agro5',
          question: 'What educational pathways can lead to careers in ag robotics?',
          options: ['Only PhDs are accepted', 'College diplomas in robotics/precision ag or university degrees in mechatronics/agricultural engineering', 'No education is required', 'Only farming experience counts'],
          correctIndex: 1,
          explanation: 'Pathways include college diplomas in robotics automation or precision agriculture, and university degrees in mechatronics, computer science, or agricultural engineering.'
        },
        {
          id: 'agro6',
          question: 'Do you need to come from a farm family to work in agricultural robotics?',
          options: ['Yes, it\'s required', 'No, the industry welcomes people from all backgrounds', 'Only if you want leadership roles', 'Yes, for at least three generations'],
          correctIndex: 1,
          explanation: 'You don\'t need to come from a farm family. The industry needs engineers, programmers, data scientists, and problem solvers from every background.'
        },
        {
          id: 'agro7',
          question: 'What tasks can the OZ robot from Naio Technologies perform autonomously?',
          options: ['Only mowing grass', 'Weeding and planting without human intervention', 'Building barns', 'Selling produce at markets'],
          correctIndex: 1,
          explanation: 'The OZ robot is an autonomous multi-task robot capable of weeding and planting without human intervention.'
        },
        {
          id: 'agro8',
          question: 'What combination of knowledge makes the best ag robotics innovators?',
          options: ['Only mechanical skills', 'Understanding both technology and biology/agriculture', 'Only business skills', 'Only computer skills'],
          correctIndex: 1,
          explanation: 'The best innovators understand both the tech and the biology, designing machines that truly work for farmers and for the planet.'
        },
        {
          id: 'agro9',
          question: 'How can high school students start preparing for ag robotics careers now?',
          options: ['Wait until university to start learning', 'Join robotics clubs, try coding tutorials, or volunteer on local farms', 'Only focus on non-technical subjects', 'Avoid all technology until graduation'],
          correctIndex: 1,
          explanation: 'Students can join robotics clubs, try coding tutorials online, build robot kits at home, or volunteer on local farms to understand food production.'
        },
        {
          id: 'agro10',
          question: 'What soft skills are important in agricultural robotics careers?',
          options: ['Only technical skills matter', 'Problem-solving, communication, and teamwork', 'Working completely alone', 'Avoiding collaboration'],
          correctIndex: 1,
          explanation: 'Strong problem-solving, communication, and teamwork skills are essential as you\'ll collaborate with farmers, engineers, and researchers who speak different technical languages.'
        },
        {
          id: 'agro11',
          question: 'What technical areas should aspiring ag robotics professionals study?',
          options: ['Only art history', 'Mechanical/electrical engineering, computer vision, AI, and data analytics', 'Only foreign languages', 'Only physical education'],
          correctIndex: 1,
          explanation: 'Key areas include mechanical and electrical engineering, robotics and control systems, computer vision and AI, and data analytics.'
        },
        {
          id: 'agro12',
          question: 'What background did Kaya have before becoming a research coordinator at Haggerty Ag Robotics?',
          options: ['Only farming experience', 'Arts and science with mathematics, geography, electrical trades, and environmental sustainability', 'Only computer science', 'No prior education'],
          correctIndex: 1,
          explanation: 'Kaya had diverse training including arts and science with minors in mathematics and geography, an electrical trades certificate, and a Master\'s in Environment and Sustainability.'
        }
      ]
    }
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
  associatedSessionSlug: 'air-force',
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
      title: 'Paid Education',
      description: 'Canadian Armed Forces (CAF)',
      url: 'https://forces.ca/en/paid-education/',
      type: 'link'
    },
    {
      title: 'Canadian Armed Forces',
      description: 'Visit the official CAF website for more information',
      url: 'https://forces.ca/en/',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/1QdPmFRPPPgxhyTrKnl7YCBx_6LTTTDgo/edit?usp=sharing&ouid=104643732425535067008&rtpof=true&sd=true',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    title: 'RCAF Career Quiz',
    description: 'Test your knowledge about careers in the Royal Canadian Air Force',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Royal Canadian Air Force: Career Pathways',
      description: 'Discover opportunities in Canada\'s Air Force!',
      badgeImageUrl: '/badges/badge-rcaf.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'rcaf1',
          question: 'What are the two main categories of service in the Canadian Armed Forces?',
          options: ['Army and Navy', 'Regular Force and Reserve Force', 'Combat and Support', 'Enlisted and Officer'],
          correctIndex: 1,
          explanation: 'Regular Force is full-time military service, while Reserve Force is part-time alongside civilian careers or education.'
        },
        {
          id: 'rcaf2',
          question: 'What is the minimum age to join the Canadian Armed Forces?',
          options: ['15 years old', '18, or 16 with parental consent', '21 years old', '14 years old'],
          correctIndex: 1,
          explanation: 'You can join at 18, or at 16 with parental consent.'
        },
        {
          id: 'rcaf3',
          question: 'What does ROTP stand for in military education programs?',
          options: ['Reserve Officer Training Plan', 'Regular Officer Training Plan', 'Royal Officer Training Protocol', 'Recruit Officer Transition Path'],
          correctIndex: 1,
          explanation: 'As part of our ROTP you\'ll receive a fully paid degree, and a salary while you study.'
        },
        {
          id: 'rcaf4',
          question: 'How much can new recruits earn per month while in training?',
          options: ['Less than $1,000', '$1,500-$2,000', '$3,000 or more', 'Training is unpaid'],
          correctIndex: 2,
          explanation: 'New recruits can earn $3,000+ per month even during basic training.'
        },
        {
          id: 'rcaf5',
          question: 'What is the minimum education requirement to join the Canadian Armed Forces?',
          options: ['No education required', 'Grade 10', 'High school diploma', 'College certificate'],
          correctIndex: 1,
          explanation: 'Grade 10 is the minimum, though some occupations require higher education.'
        },
        {
          id: 'rcaf6',
          question: 'How many vacation days do Regular Force members receive annually?',
          options: ['10 days', '15 days', '20 days', '25 days'],
          correctIndex: 2,
          explanation: 'New Members receive 20 paid vacation days per year increasing to 25 after 5 years.'
        },
        {
          id: 'rcaf7',
          question: 'What does the NCM-STEP program provide?',
          options: ['Combat training for officers', 'Subsidized education for Non-Commissioned Members', 'Medical training certification', 'Language learning courses'],
          correctIndex: 1,
          explanation: 'NCM-STEP covers college expenses and pays a salary while you study.'
        },
        {
          id: 'rcaf8',
          question: 'What is an AC Op (Aerospace Control Operator)?',
          options: ['A pilot who flies fighter jets', 'A controller who manages air traffic and airspace', 'A mechanic who repairs aircraft', 'A cook who works on air bases'],
          correctIndex: 1,
          explanation: 'AC Ops manage airspace, direct aircraft, and support air operations from ground stations.'
        },
        {
          id: 'rcaf10',
          question: 'Which occupation involves maintaining aircraft navigation and communication systems?',
          options: ['AVN (Aviation Technician)', 'AVS (Avionics Systems Technician)', 'ACS (Airfield Combat Systems)', 'AEC (Aerospace Engineering Controller)'],
          correctIndex: 1,
          explanation: 'AVS technicians maintain and repair aircraft electronic, navigation, and communication systems.'
        },
        {
          id: 'rcaf11',
          question: 'What healthcare benefits do Canadian Armed Forces members receive?',
          options: ['Basic medical only', 'Medical and dental coverage', 'No healthcare benefits', 'Only emergency coverage'],
          correctIndex: 1,
          explanation: 'Members receive comprehensive medical and dental coverage as part of their benefits package.'
        },
        {
          id: 'rcaf12',
          question: 'How does Reserve Force service differ from Regular Force?',
          options: ['Reserves cannot deploy overseas', 'Reserves serve part-time while maintaining civilian careers', 'Reserves receive no pay', 'Reserves only serve during wartime'],
          correctIndex: 1,
          explanation: 'Reserve Force members serve part-time, allowing them to maintain civilian jobs or continue education.'
        }
      ]
    }
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
    embedUrl: 'https://docs.google.com/presentation/d/1WKuAbyqjEX19QEV-j35bas9n1UZ0ROWO/edit?usp=sharing&ouid=104643732425535067008&rtpof=true&sd=true',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities',
    type: 'google-slides'
  },
  engagementActivity: {
    title: 'Canadian Nuclear Laboratories Career Quiz',
    description: 'Test your knowledge about diverse careers at Canada\'s premier nuclear science organization',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'CNL: Powering Canada\'s Future',
      description: 'Test your knowledge about careers at Canadian Nuclear Laboratories!',
      badgeImageUrl: '/badges/badge-cnl.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'cnl1',
          question: 'What percentage of Ontario\'s electricity is generated by CANDU nuclear reactors?',
          options: ['20%', '40%', '60%', '80%'],
          correctIndex: 2,
          explanation: 'CANDU reactors power 60% of Ontario\'s electricity. CNL and its predecessor organization created the prototypes for these reactors.'
        },
        {
          id: 'cnl2',
          question: 'What is radio ecology, the field that environmental biologists at CNL work in?',
          options: ['Using radios to communicate in the field', 'Studying the behavior of radioactive materials in ecosystems', 'Broadcasting environmental news', 'Recording sounds in nature'],
          correctIndex: 1,
          explanation: 'Radio ecology is a multidisciplinary science that studies the behavior of radionuclides (radioactive materials) in the environment and how they move through ecosystems.'
        },
        {
          id: 'cnl3',
          question: 'How long did Amy\'s electrical apprenticeship take, and how many hours did it require?',
          options: ['2 years, 4,000 hours', '5.5 years, 9,000 hours', '3 years, 6,000 hours', '8 years, 12,000 hours'],
          correctIndex: 1,
          explanation: 'Amy\'s electrical apprenticeship took 5.5 years and required 9,000 hours. She attended college three times (8, 10, and 11 weeks) and was paid while learning.'
        },
        {
          id: 'cnl4',
          question: 'How much can a Group 1 Radiation Surveyor earn at CNL?',
          options: ['Up to $40,000 per year', 'Up to $64,000 per year', 'Up to $125,000 per year', 'Up to $200,000 per year'],
          correctIndex: 2,
          explanation: 'Group 1 Radiation Surveyors can earn up to $125,000 per year. Group 2 workers earn up to $64,000, while Group 1 Health Physicists can earn approximately $200,000. CNL is unionized, so salaries are renegotiated every 2-3 years.'
        },
        {
          id: 'cnl5',
          question: 'What college program trains workers for radiation protection careers?',
          options: ['Nuclear Physics at University of Toronto', 'Applied Nuclear Science and Radiation Safety at Algonquin College (Pembroke Campus)', 'Chemistry at Carleton University', 'Environmental Studies at Ottawa U'],
          correctIndex: 1,
          explanation: 'Algonquin College\'s Pembroke Waterfront Campus offers Applied Nuclear Science and Radiation Safety (formerly called Radiation Safety Program), which prepares students for careers in radiation protection.'
        },
        {
          id: 'cnl6',
          question: 'What driver\'s license do CNL firefighters need to drive fire apparatus?',
          options: ['G license only', 'DZ license with air brake endorsement', 'A motorcycle license', 'No special license required'],
          correctIndex: 1,
          explanation: 'CNL firefighters need a valid DZ driver\'s license with air brake endorsement to drive fire trucks, along with NFPA 1001 certification, first aid, CPR, and wildland fire suppression training.'
        },
        {
          id: 'cnl7',
          question: 'What specialized disciplines do CNL firefighters train in beyond structural firefighting?',
          options: ['Only structural fires', 'Auto extrication, hazardous materials, confined space rescue, medical emergencies, and wildland fires', 'Only medical emergencies', 'Only wildland fires'],
          correctIndex: 1,
          explanation: 'CNL firefighters specialize in structural firefighting, auto extrication, hazardous materials, confined space and high angle rescue, medical emergencies, and wildland fire suppression.'
        },
        {
          id: 'cnl8',
          question: 'How many active job postings does CNL typically have at any given time?',
          options: ['10-20', '50-75', '150-300', '500-1000'],
          correctIndex: 2,
          explanation: 'CNL has 150 to nearly 300 active job postings at any given time, hiring for positions ranging from scientists and engineers to security officers, firefighters, administrative roles, and more.'
        },
        {
          id: 'cnl9',
          question: 'What is an RSA in radiation protection work?',
          options: ['Radiological Safety Assessment - evaluating hazards before work begins', 'Remote Sensing Application', 'Radioactive Storage Area', 'Research Science Award'],
          correctIndex: 0,
          explanation: 'RSA stands for Radiological Safety Assessment. Group 1 radiation surveyors perform RSAs before any radiological work, using specialized instruments to assess hazards and inform workers about the conditions.'
        },
        {
          id: 'cnl10',
          question: 'What career progression did Amy follow at CNL before becoming an electrical planner?',
          options: ['Started as an engineer', 'Co-op student → utility worker → tool crib operator → mechanical service attendant → electrical apprentice → electrical planner', 'Started directly as an electrician', 'Started as a manager'],
          correctIndex: 1,
          explanation: 'Amy started as a high school co-op student, then worked as a utility worker, tool crib operator (learning about tools for all trades), mechanical service attendant, completed an electrical apprenticeship, and now works in electrical planning.'
        },
        {
          id: 'cnl11',
          question: 'What types of professionals work together on nuclear fuel management projects at CNL?',
          options: ['Only engineers', 'Project managers, engineers, environmental specialists, technologists, technical officers, drivers, and admin staff', 'Only scientists', 'Only construction workers'],
          correctIndex: 1,
          explanation: 'Nuclear fuel projects require diverse teams including project managers, engineers, environmental and biological specialists, technologists, technical officers, project staff, admin staff, and even specially trained drivers for transporting nuclear material.'
        },
        {
          id: 'cnl12',
          question: 'What is the RAT team at CNL and what do they do?',
          options: ['A pest control team', 'The Radiological Assessment Team - responds to radiological emergencies across Canada', 'A research animal team', 'A rapid action training team'],
          correctIndex: 1,
          explanation: 'The RAT (Radiological Assessment Team) was established to assist with radiological emergencies across Canada. Team members receive extra pay, continuously train, and participate in emergency response practices with the CNSC and Health Canada.'
        }
      ]
    }
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
  associatedSessionSlug: 'cansbridge-scholars',
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
    title: 'Cansbridge Scholars Career Quiz',
    description: 'Test your knowledge about building your own career path',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Cansbridge Scholars: Pave Your Own Path',
      description: 'Test your knowledge about career development, mentorship, and building high agency!',
      badgeImageUrl: '/badges/badge-cansbridge.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'cansbridge1',
          question: 'What Japanese concept represents "your reason for being" and combines passion, mission, profession, and vocation?',
          options: ['Kaizen', 'Ikigai', 'Wabi-sabi', 'Kintsugi'],
          correctIndex: 1,
          explanation: 'Ikigai is the Japanese concept meaning "your reason for being" - the intersection of what you love, what you\'re good at, what the world needs, and what you can be paid for.'
        },
        {
          id: 'cansbridge2',
          question: 'What advantage did Lyn say students have over professionals when approaching potential mentors?',
          options: ['More free time', 'A student card - people want to help students', 'Better technology skills', 'Larger social networks'],
          correctIndex: 1,
          explanation: 'Lyn emphasized that having a student card is a superpower - people are more willing to help students because there\'s no ulterior motive assumed.'
        },
        {
          id: 'cansbridge3',
          question: 'How many transferable skills did Lyn say students can develop through entrepreneurship?',
          options: ['5-10 skills', '10-15 skills', '20+ skills', '50+ skills'],
          correctIndex: 2,
          explanation: 'Lyn mentioned that entrepreneurship helps develop over 20 transferable skills including problem-solving, communication, resilience, and many more.'
        },
        {
          id: 'cansbridge4',
          question: 'What is the best approach to reaching out to potential mentors according to Lyn?',
          options: ['Ask them to be your mentor right away', 'Send a long email about yourself', 'Ask one specific question you genuinely want answered', 'Wait for them to notice you'],
          correctIndex: 2,
          explanation: 'Lyn advised asking one specific question you genuinely want answered rather than asking someone to be your mentor immediately - it\'s less intimidating and more likely to get a response.'
        },
        {
          id: 'cansbridge5',
          question: 'What framework did Lyn share for identifying core values?',
          options: ['The Values Wheel', 'The Values Bullseye', 'The Values Pyramid', 'The Values Matrix'],
          correctIndex: 1,
          explanation: 'The Values Bullseye is a framework for identifying your core values, helping you understand what matters most to you in your career and life decisions.'
        },
        {
          id: 'cansbridge6',
          question: 'What term describes the phenomenon where people limit themselves based on past constraints that no longer apply?',
          options: ['Imposter syndrome', 'Baby elephant syndrome', 'Glass ceiling effect', 'Self-fulfilling prophecy'],
          correctIndex: 1,
          explanation: 'Baby elephant syndrome (or learned helplessness) describes how people continue to limit themselves based on constraints from their past, even when those barriers no longer exist.'
        },
        {
          id: 'cansbridge7',
          question: 'What expert in learning did Lyn cite who switched from Russian literature to engineering?',
          options: ['Carol Dweck', 'Barbara Oakley', 'Angela Duckworth', 'Malcolm Gladwell'],
          correctIndex: 1,
          explanation: 'Barbara Oakley\'s story of switching from Russian literature to engineering demonstrates that career paths don\'t have to be linear - you can reinvent yourself at any stage.'
        },
        {
          id: 'cansbridge8',
          question: 'According to Lyn, what shape best describes most career paths?',
          options: ['A straight line', 'A ladder', 'A squiggly line', 'A circle'],
          correctIndex: 2,
          explanation: 'Lyn emphasized that most successful careers follow a squiggly path rather than a linear one - embracing pivots and changes is normal and often leads to unexpected opportunities.'
        },
        {
          id: 'cansbridge9',
          question: 'What type of skills did Lyn describe as things others lack that you can use to stand out?',
          options: ['Hard skills', 'Soft skills', 'Leverage skills', 'Technical skills'],
          correctIndex: 2,
          explanation: 'Leverage skills are abilities you have that others lack - they give you an advantage and help you stand out in your career pursuits.'
        },
        {
          id: 'cansbridge10',
          question: 'What simple daily practice did Lyn suggest for building confidence in pursuing opportunities?',
          options: ['Meditation', 'Asking for something small every day', 'Writing in a journal', 'Exercising'],
          correctIndex: 1,
          explanation: 'Lyn suggested building the "asking muscle" by asking for something small every day - this builds confidence and makes it easier to ask for bigger opportunities.'
        },
        {
          id: 'cansbridge11',
          question: 'What did Lyn say is more important than following a linear career path?',
          options: ['Getting a degree', 'Making lots of money', 'Being curious and following what interests you', 'Having a 10-year plan'],
          correctIndex: 2,
          explanation: 'Lyn emphasized that being curious and following your interests is more important than following a predetermined linear path - this leads to more fulfilling and often more successful careers.'
        },
        {
          id: 'cansbridge12',
          question: 'What did Lyn describe as the key mindset for students who want to create their own opportunities?',
          options: ['Being competitive', 'Having high agency', 'Being risk-averse', 'Following trends'],
          correctIndex: 1,
          explanation: 'High agency - the belief that you can shape your own path and create opportunities rather than waiting for them - is core to Cansbridge Scholars\' philosophy.'
        }
      ]
    }
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
  associatedSessionSlug: 'behind-the-magic',
  tier: 'platinum',
  industries: ['Hospitality/Tourism', 'Business', 'Arts/Culture', 'ICT'],
  organizationType: 'employer',
  pathway: 'apprenticeship',
  logo: '/logos/encore-canada.png',
  tagline: 'Canada\'s Largest Event Technology and Production Partner.',
  description: 'At Encore Canada, we\'re a proud part of the communities we serve. Our Canadian team members live, work, and lead in cities across the country, making an impact that goes beyond events.\n\nAs the leading provider of event technology and production in the country we have 80 years of expertise.\n\nInterested in joining our team, check out our career page today!',
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
      url: 'https://tbcdn.talentbrew.com/company/6228/v3_0/docs/wave_certification_instructions-2025.pdf',
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
    embedUrl: 'https://docs.google.com/presentation/d/1EuwMNVvf8_yyI9XYgOP8Er4OGoEjt8nB/embed?start=false&loop=false&delayms=3000',
    type: 'google-slides',
    title: 'Career Pathways Presentation',
    description: 'Interactive presentation on career opportunities'
  },
  engagementActivity: {
    title: 'Behind the Magic Career Quiz',
    description: 'Test your knowledge about careers in the events industry',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Behind the Magic: Event Industry Careers',
      description: 'Test your knowledge and discover your future in events!',
      badgeImageUrl: '/badges/badge-encore.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'q1',
          question: 'How much does the Canadian business events industry contribute to the economy in direct economic impact?',
          options: ['$12 billion', '$27 billion', '$47 billion', '$5 billion'],
          correctIndex: 2,
          explanation: 'The Canadian business events industry generates $47 billion in direct economic impact, making it a major contributor to our national economy. [Learn more here](https://www.destinationcanada.com/en-ca/news/international-business-events-powering-canadas-economic-future)'
        },
        {
          id: 'q2',
          question: 'How many direct jobs does the business events industry create in Canada?',
          options: ['50,000', '120,000', '242,000', '500,000'],
          correctIndex: 2,
          explanation: 'The industry creates 242,000 direct jobs in Canada—part of the 10.9 million direct jobs generated globally.'
        },
        {
          id: 'q3',
          question: 'What percentage of all tourism spending in Canada comes from the business events industry?',
          options: ['15%', '25%', '40%', '60%'],
          correctIndex: 2,
          explanation: 'Business events account for 40% of all tourism spending in Canada, showing how significant conferences, meetings, and events are to the tourism sector.'
        },
        {
          id: 'q4',
          question: 'What is one of the biggest misconceptions about event professionals?',
          options: ['They only work weekends', 'They\'re just party planners, not strategic planners', 'They don\'t need education', 'They only work outdoors'],
          correctIndex: 1,
          explanation: 'Professional event planners are strategic planners who blend business strategy, logistics, creativity, and experience design—not just party planning.'
        },
        {
          id: 'q5',
          question: 'In the events industry, what does "DMC" stand for?',
          options: ['Digital Media Creator', 'Destination Management Company', 'Direct Marketing Channel', 'Design Management Consultant'],
          correctIndex: 1,
          explanation: 'A DMC (Destination Management Company) is the local expert in a destination, providing services like tours, transportation, and end-to-end event planning.'
        },
        {
          id: 'q6',
          question: 'What does "DMO" stand for in the events industry?',
          options: ['Destination Marketing Organization', 'Digital Meeting Operator', 'Direct Management Office', 'Design Media Outlet'],
          correctIndex: 0,
          explanation: 'A DMO (Destination Marketing Organization), like Destination Toronto, markets a city globally to attract meetings, conferences, and events for economic impact.'
        },
        {
          id: 'q7',
          question: 'Which of these roles can you pursue in the events industry?',
          options: ['Only event planner', 'Only catering staff', 'AV technician, show producer, catering manager, and many more', 'Only hotel front desk'],
          correctIndex: 2,
          explanation: 'The events industry offers diverse roles: AV technicians, show callers, producers, catering managers, videographers, sales, finance, HR, legal, and more.'
        },
        {
          id: 'q8',
          question: 'What is a benefit to working in events that were highlighted in the video?',
          options: ['Travel', 'Happiness and life fulfillment', 'Community & Partnership', 'All the above'],
          correctIndex: 3,
          explanation: 'A career in hospitality and events lets you create moments that matter. Every day is different, filled with creativity, connection, and opportunities to shape experiences people remember long after they happen.'
        },
        {
          id: 'q9',
          question: 'Which organization can students join to network with event professionals and find mentors?',
          options: ['FIFA', 'MPI (Meeting Professionals International)', 'NHL', 'NASA'],
          correctIndex: 1,
          explanation: 'MPI, PCMA, and CanSPEP offer student memberships, volunteering, committees, and mentorship.'
        },
        {
          id: 'q10',
          question: 'How is the events industry evolving according to industry professionals?',
          options: ['Moving entirely online', 'Becoming more interactive with less "talking at" audiences', 'Eliminating in-person gatherings', 'Reducing human involvement'],
          correctIndex: 1,
          explanation: 'The future of events is about engagement and human connection. Audiences want to participate and interact, not just sit passively listening to speakers.'
        },
        {
          id: 'q11',
          question: 'What types of events fall under "business events" in this industry?',
          options: ['Only birthday parties', 'Only music concerts', 'Conferences, trade shows, brand activations, and corporate events', 'Only weddings'],
          correctIndex: 2,
          explanation: 'Business events include conferences, trade shows, brand activations, incentive programs, corporate meetings, and user conferences—each with strategic business objectives.'
        },
        {
          id: 'q12',
          question: 'What is the #1 recommended way for students to break into the events industry?',
          options: ['Wait for job postings', 'Volunteer and join industry associations', 'Only apply to large companies', 'Get a graduate degree first'],
          correctIndex: 1,
          explanation: 'The panelists all emphasized: volunteer, join associations like MPI or PCMA, get on committees, and build relationships. That\'s how doors open in this industry.'
        }
      ]
    }
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
  associatedSessionSlug: 'cpkc',
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
    title: 'CPKC Career Quiz',
    description: 'Test your knowledge about careers at North America\'s first transnational railroad',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'CPKC: Connecting a Continent, Building Careers',
      description: 'Test your knowledge and discover your future in rail!',
      badgeImageUrl: '/badges/badge-cpkc.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'q1',
          question: 'What makes CPKC\'s rail network unique in North America?',
          options: ['It only operates in Canada', 'It\'s the first single-line network connecting Canada, the US, and Mexico', 'It only moves passengers', 'It only operates during daytime'],
          correctIndex: 1,
          explanation: 'CPKC is the first single-line rail network connecting all three North American countries, created when Canadian Pacific and Kansas City Southern joined forces.'
        },
        {
          id: 'q2',
          question: 'By how much can rail freight cut greenhouse gas emissions compared to trucks?',
          options: ['25%', '50%', '75%', '90%'],
          correctIndex: 2,
          explanation: 'Rail can cut greenhouse gas emissions by up to 75% compared to trucks, making it one of the greenest ways to move goods across the continent.'
        },
        {
          id: 'q3',
          question: 'How many trucks can one train replace?',
          options: ['50 trucks', '100 trucks', '300 trucks', '500 trucks'],
          correctIndex: 2,
          explanation: 'One train can replace 300 trucks on the road. CPKC removes 60,000 trucks from highways every year, meaning cleaner air and safer roads.'
        },
        {
          id: 'q4',
          question: 'What do you need to start an entry-level career at CPKC?',
          options: ['A university degree', '5 years of experience', 'A high school diploma and valid driver\'s license', 'A trade certification'],
          correctIndex: 2,
          explanation: 'You don\'t need years of experience to start at CPKC. With a high school diploma and valid driver\'s license, you can begin careers as a train conductor, diesel service attendant, track laborer, or signal maintainer.'
        },
        {
          id: 'q5',
          question: 'What is the average annual salary for a train conductor at CPKC?',
          options: ['$45,000', '$65,000', '$85,000', '$105,000'],
          correctIndex: 2,
          explanation: 'Train conductors at CPKC earn an average salary of $85,000 annually. The role combines physical work with critical thinking and comes with training and career growth opportunities.'
        },
        {
          id: 'q6',
          question: 'What groundbreaking technology is CPKC developing for zero-emission locomotives?',
          options: ['Solar-powered trains', 'Hydrogen-powered locomotives that only output water', 'Electric trains with extension cords', 'Wind-powered rail cars'],
          correctIndex: 1,
          explanation: 'CPKC has deployed six fully functional hydrogen-powered locomotives that are now in regular commercial operations. These are trains that only output water as exhaust!'
        },
        {
          id: 'q7',
          question: 'What does a signal and communication maintainer do at CPKC?',
          options: ['Drive the trains', 'Install, test, and repair signal systems at crossings and tracks', 'Sell tickets to passengers', 'Cook meals for train crews'],
          correctIndex: 1,
          explanation: 'Signal and communication maintainers install, test, and repair the signal systems that keep rail crossings and trains operating safely. CPKC trains you and pays you while you learn.'
        },
        {
          id: 'q8',
          question: 'What does CPKC\'s wayside detector technology measure on trains?',
          options: ['Passenger comfort levels', 'Temperature, vibration, and other safety attributes', 'Train ticket sales', 'Weather forecasts'],
          correctIndex: 1,
          explanation: 'Wayside detectors are devices along the rail that measure temperature, vibration, and other attributes. This data creates algorithms to find defects and safety issues before they become problems.'
        },
        {
          id: 'q9',
          question: 'How many employees does CPKC have across North America?',
          options: ['5,000', '10,000', '20,000+', '50,000'],
          correctIndex: 2,
          explanation: 'CPKC has over 20,000 employees across Canada, the US, and Mexico. They are neighbors, family, and friends—part of communities throughout North America.'
        },
        {
          id: 'q10',
          question: 'Since 1999, how much has the CPKC Holiday Train raised for food banks?',
          options: ['$5 million', '$10 million', '$26 million', '$50 million'],
          correctIndex: 2,
          explanation: 'The CPKC Holiday Train has raised more than $26 million and collected about 5.4 million pounds of food for community food banks across Canada and the US since 1999.'
        },
        {
          id: 'q11',
          question: 'Which corporate roles does CPKC offer for those with post-secondary education?',
          options: ['Only train conductor positions', 'Engineering, information technology, and project management', 'Only outdoor manual labor', 'Only customer service'],
          correctIndex: 1,
          explanation: 'CPKC offers dynamic corporate roles in engineering, information technology, project management, and more—designed for innovators, leaders, and problem solvers ready to shape the future.'
        },
        {
          id: 'q12',
          question: 'Which hands-on mechanic roles are available at CPKC?',
          options: ['Only office jobs', 'Diesel mechanic and rail car mechanic', 'Only driving positions', 'Only technology jobs'],
          correctIndex: 1,
          explanation: 'As a diesel mechanic, you work on powerful locomotives. As a rail car mechanic, you inspect, repair, and maintain the rail cars that carry goods across North America. Great for those who love fixing things.'
        }
      ]
    }
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
  associatedSessionSlug: 'world-of-welding',
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
    embedUrl: 'https://docs.google.com/presentation/d/1bQd3L0VgQjYt_On_OgLpD0j43frtoX8A/edit?usp=sharing&ouid=104643732425535067008&rtpof=true&sd=true',
    type: 'google-slides',
    title: 'CWB Welding Foundation Presentation',
    description: 'Learn about welding careers and certification programs'
  },
  engagementActivity: {
    title: 'CWB Welding Career Quiz',
    description: 'Test your knowledge about careers in welding and materials joining',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'CWB Welding Foundation: The World of Welding',
      description: 'Test your knowledge about welding careers, pathways, and opportunities!',
      badgeImageUrl: '/badges/badge-cwb-welding.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'cwb1',
          question: 'What does the Red Seal qualification allow welders to do?',
          options: ['Work only in Ontario', 'Work anywhere in Canada', 'Work only in unionized shops', 'Work only on pipelines'],
          correctIndex: 1,
          explanation: 'A Red Seal is transferable to any province or territory in Canada, making you mobile and typically increasing your earning potential.'
        },
        {
          id: 'cwb2',
          question: 'How long does a welding apprenticeship typically take to complete?',
          options: ['6 months to 1 year', '2 to 5 years (average of 4 years)', '6 to 8 years', '10 years minimum'],
          correctIndex: 1,
          explanation: 'Welding apprenticeships take between 2 to 5 years, with 4 years being the average. You spend about 80% of time working and 20% in technical training.'
        },
        {
          id: 'cwb3',
          question: 'What percentage of apprenticeship time is spent doing hands-on work with an employer?',
          options: ['20%', '50%', '80%', '100%'],
          correctIndex: 2,
          explanation: 'About 80% of apprenticeship time is hands-on employment where you work with an employer and gain competencies, while about 20% is spent in technical training at school.'
        },
        {
          id: 'cwb4',
          question: 'What are the three major types of welding?',
          options: ['Hot, cold, and warm', 'Arc, gas, and resistance', 'Manual, automatic, and robotic', 'Indoor, outdoor, and underwater'],
          correctIndex: 1,
          explanation: 'The three major types of welding are arc welding, gas welding, and resistance welding. Each has various specialized processes within them.'
        },
        {
          id: 'cwb5',
          question: 'What does OYAP stand for, and why is it valuable for high school students?',
          options: ['Ontario Youth Achievement Program - provides scholarships', 'Ontario Youth Apprenticeship Program - earn apprenticeship hours while in high school', 'Ontario Young Adults Program - job placement service', 'Ontario Yearly Assessment Plan - testing program'],
          correctIndex: 1,
          explanation: 'OYAP (Ontario Youth Apprenticeship Program) allows high school students to start earning apprenticeship hours while also earning high school credits.'
        },
        {
          id: 'cwb6',
          question: 'Why is welding described as a "gateway" career?',
          options: ['It only leads to one type of job', 'It opens doors to many career paths like inspector, engineer, business owner, or specialized welder', 'It\'s the easiest trade to enter', 'It requires no training'],
          correctIndex: 1,
          explanation: 'Welding is a gateway because once you enter the field, you can move into many directions: inspector, researcher, educator, engineer, business owner, underwater welder, metal artist, or work with robots and automation.'
        },
        {
          id: 'cwb7',
          question: 'What is a boilermaker and why do they earn higher wages?',
          options: ['Someone who makes coffee boilers - low demand', 'Someone who makes boilers and large constructions under extreme pressure - requires special qualifications', 'Someone who repairs kitchen appliances - entry level', 'Someone who inspects equipment - management role'],
          correctIndex: 1,
          explanation: 'Boilermakers make boilers and large constructions that heat fluids under extreme pressure. This specialized pressure welding requires additional qualifications, which is why average wages jump from about $25 to over $45 per hour.'
        },
        {
          id: 'cwb8',
          question: 'What emerging technology field is creating new opportunities in welding?',
          options: ['Social media marketing', 'Robots, cobots, and tele-welding', 'Website development', 'Accounting software'],
          correctIndex: 1,
          explanation: 'Robots, cobots (collaborative robots), and tele-welding are advancing fields in welding. If you appreciate the alignment of technology and manufacturing, these areas offer exciting career opportunities.'
        },
        {
          id: 'cwb9',
          question: 'What is an advantage of completing a welding apprenticeship compared to other post-secondary paths?',
          options: ['It takes longer', 'You earn money while learning and typically graduate with less student debt', 'You never have to go to school', 'You work alone without a mentor'],
          correctIndex: 1,
          explanation: 'Apprentices earn money while learning and can receive EI during school periods. This means you gain earning potential without accumulating significant student debt like other education paths.'
        },
        {
          id: 'cwb10',
          question: 'What industries can welders work in beyond traditional manufacturing?',
          options: ['Only factories and construction', 'Aerospace, green energy (wind turbines), electric vehicles, underwater structures, and art', 'Only automotive repair', 'Only plumbing'],
          correctIndex: 1,
          explanation: 'Welders work in aerospace (aircraft), green technology (wind turbines), electric vehicles, underwater welding (ships, bridges, dams), pipeline, and even creating metal art sculptures.'
        },
        {
          id: 'cwb11',
          question: 'What is the CWB 47.1 ticket and why is it valuable?',
          options: ['A driver\'s license for welders', 'A nationally recognized welding credential that helps you get hired', 'A discount card for welding supplies', 'A membership to a welding club'],
          correctIndex: 1,
          explanation: 'The CWB 47.1 ticket is a nationally recognized welding qualification in Canada. Having this credential makes you more employable and is recognized by employers across the country and internationally.'
        },
        {
          id: 'cwb12',
          question: 'What is the quickest way to start working in welding if you don\'t do a full apprenticeship?',
          options: ['There\'s no way to work without a 4-year apprenticeship', 'Complete a pre-employment program or adult workshop (2-4 weeks) to get an entry-level ticket', 'You must have a university degree', 'Wait until you\'re 30 years old'],
          correctIndex: 1,
          explanation: 'Since welding is a "voluntary trade" in Ontario, you don\'t need a Certificate of Qualification to work. Pre-employment programs through CWB Foundation can be as short as 2-4 weeks and provide a 47.1 ticket to help you get started.'
        }
      ]
    }
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
  associatedSessionSlug: 'discover-year',
  tier: 'platinum',
  industries: ['Arts/Culture'],
  organizationType: 'gap-year',
  pathway: 'college',
  logo: '/logos/discover-year.jpg',
  tagline: 'At Discover Year, we help young adults better understand what they want in life and build the skills they need to get it.',
  description: 'At Discover Year, we help young adults better understand what they want in life and build the skills they need to get it.\n\nOur purposeful gap year program helps students gain what they need to thrive in adulthood through meaningful self-discovery, crucial skills development, coaching and mentorship, and work, travel, and volunteer experience. At the end of the year, our students graduate with a Double Certificate in Career and Leadership Skills.',
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
      title: 'Victory Lap Students',
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
    title: 'Discover Year Quiz',
    description: 'Test your knowledge about gap years and career development',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Discover Year: Purposeful Gap Years',
      description: 'Learn about structured gap year programs!',
      badgeImageUrl: '/badges/badge-discover-year.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'dy1',
          question: 'What type of program is Discover Year?',
          options: ['A four-year university degree', 'A structured gap year program offering a certificate in career and leadership skills', 'A high school diploma program', 'An online-only course'],
          correctIndex: 1,
          explanation: 'Discover Year is a structured and purposeful gap year program that offers a post-secondary certificate in career and leadership skills over one year.'
        },
        {
          id: 'dy2',
          question: 'What prestigious university has been recommending gap years to admitted students for over 50 years?',
          options: ['Oxford University', 'University of Toronto', 'Harvard University', 'Stanford University'],
          correctIndex: 2,
          explanation: 'Harvard University has been actively suggesting purposeful gap years to every admitted undergraduate student for over 50 years.'
        },
        {
          id: 'dy3',
          question: 'How do Canadian universities generally view gap years on applications?',
          options: ['They automatically reject gap year students', 'They don\'t look down on gap years and may ask students to confirm what they did during that time', 'They require gap year students to reapply', 'They consider gap years as academic failures'],
          correctIndex: 1,
          explanation: 'Universities like the University of Ottawa don\'t look down on gap years but ask students to confirm what they did during that time.'
        },
        {
          id: 'dy4',
          question: 'What is a key component of a structured gap year that helps students develop skills?',
          options: ['Avoiding all work', 'Paid work experience while learning', 'Only academic study', 'Complete isolation'],
          correctIndex: 1,
          explanation: 'Work is a key component as it encourages experiential learning and skill application while allowing students to earn savings.'
        },
        {
          id: 'dy5',
          question: 'How much can students potentially earn during a gap year while working in Ontario?',
          options: ['Nothing - gap years are unpaid', 'Around $20,000 or more working near full-time', 'Only $1,000 total', 'Minimum $50,000 guaranteed'],
          correctIndex: 1,
          explanation: 'Students working almost full-time can earn about $20,000 or more at minimum wage over the year.'
        },
        {
          id: 'dy6',
          question: 'What role does a "life path coach" serve in the Discover Year program?',
          options: ['Teaching sports techniques', 'Helping students understand their interests, values, and strengths to support achieving goals', 'Grading academic papers', 'Managing student finances'],
          correctIndex: 1,
          explanation: 'The coach helps students understand how to set and achieve goals by making use of their authentic interests, values, and strengths.'
        },
        {
          id: 'dy7',
          question: 'What communication skills did students specifically develop during their gap year?',
          options: ['Only writing skills', 'Listening effectively and asking good questions', 'Only public speaking', 'Only email etiquette'],
          correctIndex: 1,
          explanation: 'Students learned to listen effectively and ask good questions, skills that are crucial for meaningful conversations and often underrated.'
        },
        {
          id: 'dy8',
          question: 'Where can students find gap year resources and scholarships in Canada?',
          options: ['Only through banks', 'Canadian Gap Year Association (CanGap)', 'Only government offices', 'Only travel agencies'],
          correctIndex: 1,
          explanation: 'CAN Gap (Canadian Gap Year Association at cangap.ca) offers resources and scholarships for gap years.'
        },
        {
          id: 'dy9',
          question: 'What career did Rhys pursue after completing Discover Year in 2020?',
          options: ['Software engineer', 'Firefighter paramedic in Yellowknife', 'Lawyer', 'Chef'],
          correctIndex: 1,
          explanation: 'Rhys became a firefighter paramedic in Yellowknife, discovering these career interests during the gap year that weren\'t even on his radar before.'
        },
        {
          id: 'dy10',
          question: 'What distinguishes a "purposeful gap year" from simply taking time off?',
          options: ['They are exactly the same thing', 'Intentional planning, goals, and focus on growth rather than avoiding decisions', 'Just traveling for fun', 'Working without any personal development'],
          correctIndex: 1,
          explanation: 'A purposeful gap year involves planning, thought about goals, and intentionality about growth, rather than simply avoiding making decisions.'
        },
        {
          id: 'dy11',
          question: 'How does the cohort model benefit students in a structured gap year?',
          options: ['Students never interact with each other', 'Students learn from diverse perspectives and build meaningful relationships with peers', 'Students compete against each other for grades', 'Students are isolated throughout the program'],
          correctIndex: 1,
          explanation: 'The cohort model (25-35 students) allows students to learn from different perspectives, build close friendships, and support each other through growth challenges.'
        },
        {
          id: 'dy12',
          question: 'What did multiple graduates say about academic readiness after a gap year?',
          options: ['They forgot everything and failed', 'They were refreshed, more motivated, and often performed better academically', 'They could never return to school', 'They lost all interest in learning'],
          correctIndex: 1,
          explanation: 'Graduates reported feeling refreshed, more motivated, and excited to return to academics, with some performing better than before the gap year.'
        }
      ]
    }
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
  associatedSessionSlug: 'diversity-institute',
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
    title: 'Career Exploration Quiz',
    description: 'Test your knowledge about career exploration and pathways',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Career Exploration: Using Data to Choose Your Future',
      description: 'Test your knowledge and discover tools to plan your career!',
      badgeImageUrl: '/badges/badge-diversity-institute.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'q1',
          question: 'According to research, approximately how many job titles are currently classified in Canada?',
          options: ['5,000', '15,000', '40,000+', '100,000'],
          correctIndex: 2,
          explanation: 'There are over 40,000 job titles currently classified, and new ones appear every year. This is why exploring widely is so important—you can\'t choose something you\'ve never heard of.'
        },
        {
          id: 'q2',
          question: 'What percentage of jobs are never publicly advertised and are filled through connections and networking?',
          options: ['30%', '50%', '70%', '90%'],
          correctIndex: 2,
          explanation: 'Approximately 70% of jobs are never advertised—this is called the hidden job market. People are often hired through connections, which is why building your network is so important.'
        },
        {
          id: 'q3',
          question: 'Career planning across Canada focuses on four key questions. Which of these is one of them?',
          options: ['How much money will I make?', 'What are my strengths and interests?', 'What do my parents want me to do?', 'Which job is easiest to get?'],
          correctIndex: 1,
          explanation: 'The four key questions are: What are my strengths and interests? What are my opportunities? What do I want to become? What is my plan for achieving my goals?'
        },
        {
          id: 'q4',
          question: 'How many foundational transferable skills does Canada\'s Skills for Success framework identify?',
          options: ['3', '5', '9', '15'],
          correctIndex: 2,
          explanation: 'The Skills for Success framework identifies 9 foundational skills: creativity and innovation, problem solving, reading, digital, collaboration, adaptability, writing, numeracy, and communication.'
        },
        {
          id: 'q5',
          question: 'How many green job opportunities are expected by 2030 in Canada?',
          options: ['50,000', '150,000', '300,000', '500,000'],
          correctIndex: 2,
          explanation: 'Around 300,000 green job opportunities are expected by 2030. These include ecologists, solar consultants, energy efficiency specialists, and environmental health professionals.'
        },
        {
          id: 'q6',
          question: 'How many skilled trade workers are there in Ontario, and across how many different trades?',
          options: ['500,000 workers across 50 trades', '1.3 million workers across 140+ trades', '2 million workers across 200 trades', '100,000 workers across 30 trades'],
          correctIndex: 1,
          explanation: 'Ontario has around 1.3 million skilled trade workers across more than 140 different trades—showing just how diverse and in-demand this career pathway is.'
        },
        {
          id: 'q7',
          question: 'Over the next 10 years, how fast are tech jobs expected to grow compared to other jobs?',
          options: ['At the same rate', 'Slightly faster', 'Almost twice as fast', 'Three times as fast'],
          correctIndex: 2,
          explanation: 'Tech jobs are expected to grow almost twice as fast as other jobs over the next 10 years. These roles exist in almost every industry—healthcare, sports, entertainment, and business.'
        },
        {
          id: 'q8',
          question: 'What is the Ontario Youth Apprenticeship Program (OYAP)?',
          options: ['A university scholarship program', 'A program for high school students to start apprenticeship training', 'An online coding bootcamp', 'A summer job placement service'],
          correctIndex: 1,
          explanation: 'OYAP lets high school students (as young as 15) get a head start on apprenticeship training, learning hands-on skills while still in school.'
        },
        {
          id: 'q9',
          question: 'Why are transferable skills like communication, adaptability, and problem-solving so important?',
          options: ['They only matter for office jobs', 'They help you thrive no matter how jobs evolve', 'They\'re only needed for university', 'They replace technical skills'],
          correctIndex: 1,
          explanation: 'Transferable skills help you adapt as jobs change with AI and automation. They make you valuable to employers and help you bridge gaps when changing careers or starting out.'
        },
        {
          id: 'q10',
          question: 'Which of these is a major trend shaping the future of jobs?',
          options: ['Fewer people retiring', 'Decreased use of technology', 'Aging population increasing demand for healthcare', 'Less global connection'],
          correctIndex: 2,
          explanation: 'Major trends include: aging population (healthcare demand), climate change (environmental jobs), globalization (remote work), and technology/AI growth.'
        },
        {
          id: 'q11',
          question: 'On average, which educational pathway costs the most per year in Ontario?',
          options: ['Apprenticeship training', 'College diploma', 'University undergraduate', 'They all cost the same'],
          correctIndex: 2,
          explanation: 'Average annual costs: Apprenticeships ~$1,400 (but you earn while learning), College diplomas ~$2,400, University undergraduate ~$8,958. All pathways are valid—understanding trade-offs helps you choose what fits.'
        },
        {
          id: 'q12',
          question: 'What is an informational interview?',
          options: ['A job interview for an entry-level position', 'A conversation where you ask questions to learn about a career or organization', 'A test you take to assess your skills', 'A formal application process'],
          correctIndex: 1,
          explanation: 'Informational interviews are conversations where you ask insightful questions to learn about careers, industries, or organizations from people working in those fields—a powerful networking tool.'
        }
      ]
    }
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
  associatedSessionSlug: 'ernst-young',
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
    url: 'https://www.youtube.com/embed/Lx6zmV-JYUM',
    type: 'youtube',
    title: 'Generations',
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
    title: 'Ernst & Young Career Quiz',
    description: 'Test your knowledge about careers at one of the Big Four professional services firms',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'EY: Building a Better Working World',
      description: 'Test your knowledge about career pathways and opportunities at Ernst & Young!',
      badgeImageUrl: '/badges/badge-ey.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'ey1',
          question: 'What type of firm is EY (Ernst & Young)?',
          options: ['A law firm', 'One of the Big Four accounting/professional services firms', 'A technology startup', 'A marketing agency'],
          correctIndex: 1,
          explanation: 'EY is one of the Big Four accounting firms, known as a professional services firm with four main service lines.'
        },
        {
          id: 'ey2',
          question: 'What are EY\'s four main service lines?',
          options: ['Marketing, Sales, HR, and IT', 'Assurance, Tax, Consulting, and Strategy & Transactions', 'Banking, Insurance, Real Estate, and Retail', 'Legal, Finance, Operations, and Technology'],
          correctIndex: 1,
          explanation: 'EY\'s four main service lines are Assurance (audit), Tax, Consulting, and Strategy and Transactions.'
        },
        {
          id: 'ey3',
          question: 'Where is EY\'s Canadian headquarters located?',
          options: ['Vancouver', 'Ottawa', 'Toronto', 'Montreal'],
          correctIndex: 2,
          explanation: 'EY\'s Canadian headquarters is in Toronto, which is also their biggest office in Canada. They also have offices in Waterloo, London, and Ottawa.'
        },
        {
          id: 'ey4',
          question: 'What do consultants at EY primarily do for their clients?',
          options: ['Prepare tax returns', 'Help companies solve problems they can\'t solve internally', 'Recruit new employees', 'Design advertising campaigns'],
          correctIndex: 1,
          explanation: 'Consultants help companies solve problems by bringing fresh outside perspectives and expertise. They interview stakeholders, build solutions, help implement changes, and oversee success.'
        },
        {
          id: 'ey5',
          question: 'What is a "digital transformation" in consulting terms?',
          options: ['Replacing all employees with robots', 'Finding ways to replace paper processes with technology', 'Moving offices to a new location', 'Changing company leadership'],
          correctIndex: 1,
          explanation: 'A digital transformation is finding ways to get rid of paper and implement technology to make operations more efficient, faster, or easier for employees and customers.'
        },
        {
          id: 'ey6',
          question: 'Which three skill areas does EY look for in candidates?',
          options: ['Coding, design, and sales', 'Teamwork, communication, and time management', 'Languages, athletics, and music', 'Leadership, public speaking, and writing'],
          correctIndex: 1,
          explanation: 'EY values teamwork and collaboration skills, communication skills (both visual and verbal), and time management/organization skills.'
        },
        {
          id: 'ey7',
          question: 'When is "busy season" in accounting, when work hours typically increase?',
          options: ['June to August', 'September to November', 'January to March', 'October to December'],
          correctIndex: 2,
          explanation: 'Busy season in accounting is typically January to March, when hours increase and work-life balance becomes harder to maintain.'
        },
        {
          id: 'ey8',
          question: 'What is the first position someone starts at when joining EY\'s audit practice?',
          options: ['Senior Accountant', 'Associate', 'Junior Staff Accountant', 'Analyst'],
          correctIndex: 2,
          explanation: 'Everyone who starts at EY in assurance begins as a Junior Staff Accountant in their first year, then progresses to Intermediate Staff Accountant in year two.'
        },
        {
          id: 'ey9',
          question: 'How many years of experience at EY does it typically take to become a Manager in the audit practice?',
          options: ['2 years', '4 years', '6 years', '8 years'],
          correctIndex: 1,
          explanation: 'After 2 years as staff (junior then intermediate) and 2 years as senior accountant, employees become eligible for Manager after 4 years total.'
        },
        {
          id: 'ey10',
          question: 'What two factors are required to become a Partner at EY?',
          options: ['Longest tenure and highest billable hours', 'Technical excellence and bringing/retaining clients', 'Most certifications and best attendance', 'Highest sales and most travel'],
          correctIndex: 1,
          explanation: 'To become Partner or Executive Director, you need technical excellence AND the ability to bring clients to EY and retain them for a longer period of time.'
        },
        {
          id: 'ey11',
          question: 'What does EY\'s "dress for the day" policy mean?',
          options: ['Always wear a suit', 'Dress appropriately for your specific activities that day', 'Casual dress every day', 'Follow a strict uniform policy'],
          correctIndex: 1,
          explanation: 'In the post-COVID environment, EY follows a "dress for the day" approach - dress specifically for your meetings or client site visits, with more junior employees often dressing more casually than partners.'
        },
        {
          id: 'ey12',
          question: 'What made EY co-founder Arthur Young unique, demonstrating the firm\'s long-standing commitment to diversity?',
          options: ['He was the youngest founder of a Big Four firm', 'He was blind and deaf', 'He was the first accountant from Canada', 'He started the company as a student'],
          correctIndex: 1,
          explanation: 'Arthur Young, who co-founded EY in the 1980s, was blind and deaf. Despite his disabilities, he practiced law and believed everyone has a role to play regardless of background - establishing DEI as core to EY\'s culture from the beginning.'
        }
      ]
    }
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
  associatedSessionSlug: 'humber-engineering',
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
    title: 'Humber Engineering Career Quiz',
    description: 'Test your knowledge about engineering careers and pathways via Humber Polytechnic',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Humber Polytechnic: Engineer Your Dream Career',
      description: 'Test your knowledge about engineering careers, specializations, and pathways!',
      badgeImageUrl: '/badges/badge-humber-engineering.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'humber1',
          question: 'What three career levels can you pursue in engineering via Humber Polytechnic?',
          options: ['Intern, Junior Engineer, Senior Engineer', 'Technician, Technologist, Engineer', 'Assistant, Associate, Manager', 'Apprentice, Journeyperson, Master'],
          correctIndex: 1,
          explanation: 'Humber offers pathways to become a technician, technologist, or engineer. Each plays an important role in making products and systems work.'
        },
        {
          id: 'humber2',
          question: 'What is automation in engineering terms?',
          options: ['Replacing all human workers with machines', 'Setting things up so they happen automatically', 'Building robots from scratch', 'Programming video games'],
          correctIndex: 1,
          explanation: 'Automation is setting things up so stuff happens automatically - like smart thermostats, Roomba vacuums, and cruise control. Technicians, technologists, and engineers all play roles in automation.'
        },
        {
          id: 'humber3',
          question: 'Besides factories, where else can you find robots being used today?',
          options: ['Only in science fiction movies', 'Only in car manufacturing plants', 'Hospitals, hotels, construction sites, farms, and space', 'Only in research laboratories'],
          correctIndex: 2,
          explanation: 'Robots are now found in hospitals, hotels, construction sites, farms, and even in space - not just factories. This means more diverse career opportunities for people who work with robotics.'
        },
        {
          id: 'humber4',
          question: 'What systems do mechanical technicians, technologists, and engineers work with to "keep the world in motion"?',
          options: ['Computer software and databases', 'Hydraulics, pneumatics, and motors', 'Marketing and sales systems', 'Financial accounting systems'],
          correctIndex: 1,
          explanation: 'Mechanical professionals work with hydraulic fluid, pneumatics, and motors - systems found in airplanes, cars, buses, theme park rides, and robots that help things move.'
        },
        {
          id: 'humber5',
          question: 'What is environmental engineering focused on?',
          options: ['Building the tallest structures possible', 'Ensuring infrastructure has minimal environmental impact and is resilient', 'Creating video games about nature', 'Designing office furniture'],
          correctIndex: 1,
          explanation: 'Environmental engineering ensures that buildings and infrastructure have as little impact as possible on the environment while being built to be resilient and sustainable.'
        },
        {
          id: 'humber6',
          question: 'What does civil engineering focus on building?',
          options: ['Consumer electronics and apps', 'Bridges, roads, and water systems - infrastructure that supports society', 'Robots and automation systems', 'Medical devices only'],
          correctIndex: 1,
          explanation: 'Civil engineering is all about the infrastructure that supports society - bridges, roads, water systems, and everything that makes communities function.'
        },
        {
          id: 'humber7',
          question: 'What do electronics and computer engineering professionals create?',
          options: ['Only video games', 'Devices and apps by bringing hardware and software together', 'Only physical buildings', 'Only hydraulic systems'],
          correctIndex: 1,
          explanation: 'Electronics and computer engineering bring hardware and software together to create devices and apps. If you can pick something up and it lights up, someone in this field likely played a role in making it work.'
        },
        {
          id: 'humber8',
          question: 'In a manufacturing automation cell, what do technicians, technologists, and engineers collaborate on?',
          options: ['Only marketing products', 'Bringing together robots, CNC machines, PLCs, and electric circuits to manufacture products', 'Only designing logos', 'Only customer service'],
          correctIndex: 1,
          explanation: 'Automation cells bring together robots, CNC machines, PLCs, electric circuits, motors, and hydraulics - and professionals in electrical, mechanical, electro-mechanical, and mechatronics all collaborate to make manufacturing work.'
        },
        {
          id: 'humber9',
          question: 'What advice does Humber give about math and pursuing engineering?',
          options: ['You must be a math genius to apply', 'Math is not used in engineering', 'Don\'t let fear of math stop you - hands-on learning makes math easier', 'You need to complete university-level math first'],
          correctIndex: 2,
          explanation: 'Humber advises not to let fear of math stand in the way. When you do hands-on work, math often comes more easily because you\'re applying it directly to something tangible.'
        },
        {
          id: 'humber10',
          question: 'What is Humber\'s graduate employment rate compared to other institutions in the GTA?',
          options: ['Below average', 'Average', 'One of the highest in the GTA', 'Not tracked'],
          correctIndex: 2,
          explanation: 'Humber has one of the highest graduate employment rates in the GTA, and graduates typically don\'t take long to find jobs due to their hands-on skills being like having job experience before getting the job.'
        },
        {
          id: 'humber11',
          question: 'What role does 3D design play in engineering careers?',
          options: ['It\'s only used for video games', 'Creating digital and physical models of parts and buildings to analyze energy use and building codes', 'It\'s not used in engineering', 'Only for creating marketing materials'],
          correctIndex: 1,
          explanation: '3D design is used to create digital models of parts and buildings, analyze energy usage, and build physical scale models to understand building codes and visualize designs.'
        },
        {
          id: 'humber12',
          question: 'What fields combine in architectural technology and sustainable building engineering?',
          options: ['Marketing and sales', '3D modeling, environmental considerations, and creating energy-efficient buildings', 'Only interior decoration', 'Only landscaping'],
          correctIndex: 1,
          explanation: 'Architectural technology combines 3D modeling (digital and physical), environmental engineering principles, and sustainable design to create buildings that use less energy and have less environmental impact.'
        }
      ]
    }
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
  associatedSessionSlug: 'hydro-one',
  tier: 'platinum',
  industries: ['Energy', 'Environment', 'Business', 'ICT'],
  organizationType: 'employer',
  pathway: 'direct-to-workplace',
  logo: '/logos/hydro-one.jpg',
  tagline: 'Our team is made up of some of Ontario\'s best and brightest people, from engineers and project managers to customer service specialists and communications professionals.',
  description: 'At Hydro One, we deliver electricity to nearly 1.5 million people across Ontario. We have become Ontario\'s largest electricity transmission and distribution services provider. We are building the future of energy.\n\nOur team is made up of some of Ontario\'s best and brightest people – from engineers and project managers to customer service specialists and communications professionals.',
  website: 'https://www.hydroone.com/',
  video: {
    url: 'https://www.youtube.com/watch?v=7LvDmU-QG10',
    type: 'youtube',
    title: 'Connecting power and possibility',
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
    embedUrl: 'https://docs.google.com/presentation/d/1iXBAgNPJzJT8LO4ij1XWfFvDmK7P5rvX/embed?start=false&loop=false&delayms=3000',
    type: 'google-slides',
    title: 'Hydro One Career Opportunities',
    description: 'Explore careers in Ontario\'s electricity sector'
  },
  engagementActivity: {
    title: 'Hydro One Career Quiz',
    description: 'Test your knowledge about careers at Ontario\'s largest electricity provider',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Hydro One: Powering Ontario Careers',
      description: 'Test your knowledge and discover your future in energy!',
      badgeImageUrl: '/badges/badge-hydro-one.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'q1',
          question: 'What does Hydro One actually do with electricity?',
          options: ['Generate electricity at nuclear plants', 'Transmit and distribute electricity across Ontario', 'Sell electricity directly to international markets', 'Build solar panels and wind turbines'],
          correctIndex: 1,
          explanation: 'Hydro One doesn\'t produce any electricity—that\'s done by partners like OPG and Bruce Power. Hydro One moves electricity around the province through transmission and distribution lines.'
        },
        {
          id: 'q2',
          question: 'How much of Ontario\'s transmission capacity does Hydro One\'s system account for?',
          options: ['About 50%', 'About 75%', 'About 92%', '100%'],
          correctIndex: 2,
          explanation: 'Hydro One\'s system accounts for approximately 92% of Ontario\'s transmission capacity with about 30,000 circuit kilometers of high voltage transmission lines.'
        },
        {
          id: 'q3',
          question: 'What types of skills do field workers at Hydro One need?',
          options: ['Only computer programming', 'Technical skills like climbing poles, operating bucket trucks, and working with electrical equipment', 'Only customer service skills', 'Only management and supervision skills'],
          correctIndex: 1,
          explanation: 'Field workers at Hydro One need hands-on technical skills including climbing poles, operating bucket trucks, and working safely with electrical equipment in all weather conditions.'
        },
        {
          id: 'q4',
          question: 'What apprenticeship programs does Hydro One offer in the skilled trades?',
          options: ['None—they only hire experienced workers', 'Powerline technician, Utility Arborist, Construction and Utility Electrician, Truck and Coach Technician', 'Only management training programs', 'Only summer internships'],
          correctIndex: 1,
          explanation: 'Hydro One offers apprenticeship programs in Powerline Technician, Utility Arborist, Construction and Utility Electrician, and Truck and Coach Technician, developing the next generation of skilled tradespeople for Ontario\'s electricity grid.'
        },
        {
          id: 'q5',
          question: 'What types of technology and innovation roles exist at Hydro One?',
          options: ['Only electrical engineering', 'Cybersecurity, data architecture, and project management', 'Only field work', 'Marketing and sales only'],
          correctIndex: 1,
          explanation: 'Hydro One has technology roles including cybersecurity, data architecture, and project management. They work on smart meters, data systems, and keeping everything cyber secure.'
        },
        {
          id: 'q6',
          question: 'How many co-op students does Hydro One welcome each year?',
          options: ['About 50', 'About 100', 'About 150', 'About 500'],
          correctIndex: 2,
          explanation: 'Hydro One welcomes about 150 university and college students each year for co-op positions across a variety of roles.'
        },
        {
          id: 'q7',
          question: 'What is Hydro One\'s New Grad Program?',
          options: ['A one-month internship', 'A two-year rotation program to develop new graduates', 'A scholarship for high school students', 'A summer job program'],
          correctIndex: 1,
          explanation: 'The New Grad Program is a two-year rotation program that trains and develops new university graduates, giving them experience across different areas of the company.'
        },
        {
          id: 'q8',
          question: 'What types of engineering roles are available at Hydro One?',
          options: ['Only software engineering', 'Electrical, civil, mechanical, and systems engineering', 'Only chemical engineering', 'They don\'t hire engineers'],
          correctIndex: 1,
          explanation: 'Hydro One employs various types of engineers including electrical engineers for power systems, civil engineers for infrastructure, mechanical engineers for equipment, and systems engineers for grid operations.'
        },
        {
          id: 'q9',
          question: 'What kinds of educational backgrounds do Hydro One employees come from?',
          options: ['Only electrical engineering degrees', 'Engineering, Business, Legal, Real Estate, HR, and many more', 'Only college diplomas', 'Only graduate degrees'],
          correctIndex: 1,
          explanation: 'Hydro One employees come from diverse educational backgrounds including Engineering, Business, Legal, Real Estate, HR, and many more, showing there are many paths into the company.'
        },
        {
          id: 'q10',
          question: 'What are the "One Awards" at Hydro One?',
          options: ['A sports competition', 'Three distinct awards recognizing high-potential students from underrepresented backgrounds, offering a monetary award and a paid work placement', 'An industry conference', 'A training certification'],
          correctIndex: 1,
          explanation: 'The One Awards are three distinct awards recognizing high-potential students from underrepresented backgrounds, offering a monetary award and a paid work placement at Hydro One.'
        },
        {
          id: 'q11',
          question: 'What value is most central to Hydro One\'s workplace culture?',
          options: ['Speed and efficiency above all', 'Safety first in everything they do', 'Individual competition', 'Working the longest hours'],
          correctIndex: 1,
          explanation: 'Safety is the core value at Hydro One. Working with high-voltage electricity means safety protocols and training are paramount in everything they do.'
        },
        {
          id: 'q12',
          question: 'Besides electricity, what other business does Hydro One operate?',
          options: ['Natural gas distribution', 'A telecommunications network using their infrastructure', 'Solar panel manufacturing', 'Electric vehicle charging stations'],
          correctIndex: 1,
          explanation: 'Hydro One operates a telecommunications business using their extensive network infrastructure across Ontario, providing another career pathway within the company.'
        }
      ]
    }
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
  associatedSessionSlug: 'mental-health-skills',
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
    title: 'Jack.org Mental Health Quiz',
    description: 'Test your knowledge about youth mental health advocacy and peer support skills',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Jack.org: Be There for Others',
      description: 'Learn about youth mental health advocacy and how you can make a difference!',
      badgeImageUrl: '/badges/badge-jack-org.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'jack1',
          question: 'What is Jack.org?',
          options: [
            'A therapy clinic for youth',
            'A national Canadian organization focused on youth empowerment and mental health prevention',
            'A government mental health hotline',
            'A school counseling service'
          ],
          correctIndex: 1,
          explanation: 'Jack.org is a national Canadian organization that empowers young people with the skills to start conversations about mental health and support themselves and others.'
        },
        {
          id: 'jack2',
          question: 'What is Jack.org\'s main approach to mental health?',
          options: [
            'Only helping during crisis situations',
            'Prevention - providing resources and skills before a crisis happens',
            'Diagnosing mental illnesses',
            'Prescribing medication'
          ],
          correctIndex: 1,
          explanation: 'Jack.org focuses on prevention - providing young people with resources, tools, and strategies before a crisis situation, building community and connection early on.'
        },
        {
          id: 'jack3',
          question: 'What are Jack Talks?',
          options: [
            'Professional therapy sessions',
            'Young people speaking in schools and communities to share personal stories about mental health',
            'Phone counseling services',
            'Online chat support'
          ],
          correctIndex: 1,
          explanation: 'Jack Talks are presentations where young people go into schools and community groups to speak to other young people, share personal stories, and help others learn about mental health.'
        },
        {
          id: 'jack4',
          question: 'What are Jack Chapters?',
          options: [
            'Textbook sections about mental health',
            'Groups of young people in schools and communities working together to create change around mental health',
            'Professional counselor meetings',
            'Government health departments'
          ],
          correctIndex: 1,
          explanation: 'Jack Chapters are groups of young people in their schools and communities who work together to bring about positive change surrounding mental health and build a sense of belonging.'
        },
        {
          id: 'jack5',
          question: 'What is the Be There Certificate?',
          options: [
            'A medical degree',
            'A free, self-paced online learning module that teaches peer support skills, delivered with Born This Way Foundation',
            'A first aid certification',
            'A therapy license'
          ],
          correctIndex: 1,
          explanation: 'The Be There Certificate is a free, self-paced online course delivered in partnership with Born This Way Foundation that teaches youth how to support others using the Golden Rules framework.'
        },
        {
          id: 'jack6',
          question: 'How long does it take to complete the Be There Certificate?',
          options: [
            'Several months',
            'A few hours',
            'One full year',
            'Just 10 minutes'
          ],
          correctIndex: 1,
          explanation: 'The Be There Certificate takes just a few hours to complete, is completely free, and you receive a certificate at the end - great for your resume!'
        },
        {
          id: 'jack7',
          question: 'What is the first of the "Be There Golden Rules"?',
          options: [
            'Diagnose their condition',
            'Say what you see - state the facts without judging',
            'Tell them to see a doctor immediately',
            'Give them advice on how to fix their problems'
          ],
          correctIndex: 1,
          explanation: 'The first Golden Rule is "Say what you see" - break the ice by stating facts without judging. For example: "Hey, I noticed you haven\'t been at practice lately. Is everything okay?"'
        },
        {
          id: 'jack8',
          question: 'What does "Know Your Role" mean in the Golden Rules framework?',
          options: [
            'You should become a therapist',
            'Set boundaries - you\'re a supporter and friend, not a mental health professional',
            'Take full responsibility for your friend\'s mental health',
            'Avoid talking about mental health entirely'
          ],
          correctIndex: 1,
          explanation: 'Know Your Role means setting boundaries - you can validate, support, and be a cheerleader for your friend, but you\'re not a therapist or mental health expert. Connect them to professional help.'
        },
        {
          id: 'jack9',
          question: 'According to Jack.org, can someone have good mental health while also having a diagnosed mental illness?',
          options: [
            'No, that\'s impossible',
            'Yes, with appropriate treatment and support, someone with a mental illness can still have optimal mental health',
            'Only if they\'re cured',
            'Mental health and mental illness are the same thing'
          ],
          correctIndex: 1,
          explanation: 'Yes! With appropriate treatment like therapy or medication, someone with a mental illness can still manage their mental health well. Mental health and mental illness are two different spectrums.'
        },
        {
          id: 'jack10',
          question: 'What distinguishes a mental health struggle from just having a bad day?',
          options: [
            'There\'s no difference',
            'It\'s intense, long-lasting (usually 2+ weeks), and has a big impact on daily life',
            'Only a doctor can tell',
            'A struggle means you need hospitalization'
          ],
          correctIndex: 1,
          explanation: 'A mental health struggle is typically intense, long-lasting (2 weeks or longer), and has a significant impact on day-to-day life - like withdrawing from activities you used to enjoy.'
        },
        {
          id: 'jack11',
          question: 'Do you need to be a mental health professional to support others with their mental health?',
          options: [
            'Yes, only licensed therapists can help',
            'No - anyone can learn peer support skills to be there for others',
            'Only if you have a psychology degree',
            'You need at least 5 years of training'
          ],
          correctIndex: 1,
          explanation: 'No! Jack.org believes anyone can learn peer support skills. You don\'t need to be a therapist - just a caring person willing to listen, validate, and connect others to help.'
        },
        {
          id: 'jack12',
          question: 'What three components does Jack.org recommend for a good self-care practice?',
          options: [
            'Medication, therapy, and hospitalization',
            'Something you\'re good at (competence), something that gives you control, and community connection',
            'Only exercise, sleep, and nutrition',
            'Social media, gaming, and streaming'
          ],
          correctIndex: 1,
          explanation: 'Good self-care includes: something you feel competent at, something that gives you a sense of control (like organizing), and something that connects you with community and others.'
        }
      ]
    }
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
  associatedSessionSlug: 'kids-help-phone',
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
    embedUrl: 'https://drive.google.com/file/d/1b9D6FnQXzgrzDHWaOsNtDfWdldx8vyTU/view?usp=sharing',
    type: 'google-drive-pdf',
    title: 'Kids Help Phone Services',
    description: '24/7 support for young people across Canada'
  },
  engagementActivity: {
    title: 'Kids Help Phone Volunteer Quiz',
    description: 'Test your knowledge about volunteering and mental health support at Kids Help Phone',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Kids Help Phone: Get Involved',
      description: 'Discover volunteer opportunities and learn about Canada\'s leading youth mental health service!',
      badgeImageUrl: '/badges/badge-kids-help-phone.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'khp1',
          question: 'What is Kids Help Phone?',
          options: [
            'A hospital for children',
            'Canada\'s only 24/7 e-mental health service offering free, multilingual, confidential support',
            'A phone company for teenagers',
            'A government crisis hotline'
          ],
          correctIndex: 1,
          explanation: 'Kids Help Phone is Canada\'s only 24/7 e-mental health service that offers free, multilingual, and confidential support for young people across Canada.'
        },
        {
          id: 'khp2',
          question: 'How can young people access Kids Help Phone services?',
          options: [
            'Only by phone call',
            'Only through a school counselor referral',
            'By calling, texting, or using online chat',
            'Only by visiting in person'
          ],
          correctIndex: 2,
          explanation: 'Kids Help Phone offers multiple ways to access support - you can call, text, or use online chat on their website, making help accessible however you\'re most comfortable.'
        },
        {
          id: 'khp3',
          question: 'When should someone reach out to Kids Help Phone?',
          options: [
            'Only during a mental health crisis',
            'Only during school hours',
            'Anytime you need support - you don\'t have to be in crisis',
            'Only if referred by a doctor'
          ],
          correctIndex: 2,
          explanation: 'You don\'t have to be in crisis to reach out. Kids Help Phone is there to support you anytime you need it, whether it\'s something big or small.'
        },
        {
          id: 'khp4',
          question: 'What professional certifications can CAMS Kids volunteers receive?',
          options: [
            'No certifications are offered',
            'Mental Health First Aid training and Peer Support training',
            'Only a participation certificate',
            'CPR certification only'
          ],
          correctIndex: 1,
          explanation: 'CAMS Kids volunteers can receive valuable professional certifications including Mental Health First Aid training and Peer Support training - real credentials for your resume.'
        },
        {
          id: 'khp5',
          question: 'What is the Paving Paths program at Kids Help Phone?',
          options: [
            'A hiking club',
            'A volunteer program for newcomer and ethno-cultural individuals ages 15+ passionate about mental health',
            'A career counseling service',
            'A university scholarship program'
          ],
          correctIndex: 1,
          explanation: 'Paving Paths is a volunteer program for newcomer and ethno-cultural individuals who are 15 years and older and passionate about mental health.'
        },
        {
          id: 'khp6',
          question: 'What age range can join the Kids Help Phone National Youth Council?',
          options: [
            '10-14 years old',
            '14-24 years old',
            '18-25 years old',
            '25-35 years old'
          ],
          correctIndex: 1,
          explanation: 'The National Youth Council is open to youth ages 14-24 across Canada. Members represent Kids Help Phone at events, work on mental health projects, and engage in youth advocacy.'
        },
        {
          id: 'khp7',
          question: 'What skills do volunteers develop at Kids Help Phone that are valuable for future careers?',
          options: [
            'Only administrative skills',
            'Empathy, communication, leadership, and staying calm under pressure',
            'Only public speaking',
            'Only social media skills'
          ],
          correctIndex: 1,
          explanation: 'Volunteers develop transferable skills including empathy, patience, communication, leadership, confidence, and the ability to stay calm and think on their feet - skills valuable in any career.'
        },
        {
          id: 'khp8',
          question: 'Do you need perfect grades to become a Kids Help Phone volunteer?',
          options: [
            'Yes, you need at least an 85% average',
            'No - passion and willingness to learn matter more than grades',
            'Yes, grades are the main selection criteria',
            'You need to be in the top 10% of your class'
          ],
          correctIndex: 1,
          explanation: 'Kids Help Phone doesn\'t even request grades! What matters most is your passion for mental health, your reason for wanting to volunteer, and your willingness to learn.'
        },
        {
          id: 'khp9',
          question: 'According to Kids Help Phone volunteers, do universities and employers actually value volunteer experience?',
          options: [
            'No, they only care about paid work experience',
            'Yes, and quality of involvement matters more than quantity',
            'Only if you have 500+ volunteer hours',
            'Only for specific career fields'
          ],
          correctIndex: 1,
          explanation: 'Universities and employers do care about volunteer work. Quality is more important than quantity - doing meaningful work aligned with your values stands out more than a long list of activities.'
        },
        {
          id: 'khp10',
          question: 'What is CAMS Kids?',
          options: [
            'A children\'s cartoon show',
            'A campus ambassador program for high school and university students supporting mental health',
            'A summer camp',
            'A kids\' fitness program'
          ],
          correctIndex: 1,
          explanation: 'CAMS Kids is a campus ambassador program where high school and university students support mental health awareness through events, tabling, and connecting peers with resources.'
        },
        {
          id: 'khp11',
          question: 'What makes Kids Help Phone unique as a volunteer opportunity?',
          options: [
            'It\'s the smallest mental health organization',
            'National scale, recognized brand, and professional training with certifications',
            'It only operates in Ontario',
            'It doesn\'t offer any training'
          ],
          correctIndex: 1,
          explanation: 'Kids Help Phone is a well-known national organization - you\'ve probably seen their logo on chocolate bars, milk cartons, or billboards. Volunteers gain real professional training and certifications.'
        },
        {
          id: 'khp12',
          question: 'What advice did Kids Help Phone volunteers give about balancing volunteering with school?',
          options: [
            'You should quit all other activities to focus on volunteering',
            'Use organizational tools, know your priorities, plan ahead, and be willing to say no sometimes',
            'Volunteering should always come first',
            'Only volunteer during summer break'
          ],
          correctIndex: 1,
          explanation: 'Successful volunteers use calendars and planning tools, know their priorities, plan in advance, and aren\'t afraid to say no sometimes. Balance is a continual process that can be managed.'
        }
      ]
    }
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
  name: 'Conservation Authorities',
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
    title: 'Conservation Careers Quiz',
    description: 'Test your knowledge about careers protecting Ontario\'s watersheds',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Conservation Authorities: Protecting Ontario\'s Watersheds',
      description: 'Test your knowledge and discover your future in conservation!',
      badgeImageUrl: '/badges/badge-conservation.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'q1',
          question: 'What major event led to the creation of conservation authorities in Ontario?',
          options: ['The Great Depression', 'Hurricane Hazel in 1954', 'The founding of Confederation', 'World War II'],
          correctIndex: 1,
          explanation: 'Hurricane Hazel hit Ontario in 1954, causing devastating flooding that killed over 80 people. This tragedy led to the creation of conservation authorities to manage flood risks and protect communities.'
        },
        {
          id: 'q2',
          question: 'How many conservation authorities exist across Ontario today?',
          options: ['12', '24', '36', '48'],
          correctIndex: 2,
          explanation: 'There are 36 conservation authorities across Ontario, each responsible for managing and protecting the natural resources within their specific watershed.'
        },
        {
          id: 'q3',
          question: 'What is a watershed?',
          options: ['A building that stores water', 'An area of land where all water drains to a common point like a lake or river', 'A type of dam', 'A water treatment facility'],
          correctIndex: 1,
          explanation: 'A watershed is an area of land where all precipitation drains into a common water body like a stream, river, or lake. Conservation authorities are organized around these natural boundaries.'
        },
        {
          id: 'q4',
          question: 'How are conservation authority boundaries determined?',
          options: ['By municipal boundaries', 'By provincial riding boundaries', 'By natural watershed drainage patterns', 'By population density'],
          correctIndex: 2,
          explanation: 'Conservation authority boundaries follow natural watershed patterns—where water flows—rather than political boundaries. Water doesn\'t care about municipal lines!'
        },
        {
          id: 'q5',
          question: 'What types of monitoring do conservation authority staff regularly perform?',
          options: ['Only wildlife counting', 'Water quality, water levels, and weather monitoring', 'Only building inspections', 'Traffic monitoring'],
          correctIndex: 1,
          explanation: 'CA staff monitor water quality at sampling stations, track water levels in streams and lakes, and maintain weather stations to predict flooding and protect communities.'
        },
        {
          id: 'q6',
          question: 'Why are customer service skills important in conservation careers?',
          options: ['They\'re not—it\'s all fieldwork', 'Because staff regularly interact with the public, landowners, and permit applicants', 'Only for management positions', 'Only for gift shop workers'],
          correctIndex: 1,
          explanation: 'Conservation authority staff regularly work with the public—answering questions from park visitors, helping landowners understand regulations, and processing permit applications.'
        },
        {
          id: 'q7',
          question: 'What educational paths can lead to a career at a conservation authority?',
          options: ['Only environmental science degrees', 'Various paths including environmental studies, ecology, GIS, forestry, and skilled trades', 'Only graduate degrees', 'Only apprenticeships'],
          correctIndex: 1,
          explanation: 'Conservation authorities hire people with diverse educational backgrounds including environmental studies, ecology, GIS/mapping, forestry, horticulture, civil engineering, and skilled trades.'
        },
        {
          id: 'q8',
          question: 'How does weather affect the work of conservation authority staff?',
          options: ['It doesn\'t—they only work indoors', 'Storms create flooding emergencies requiring immediate response and monitoring', 'They only work in good weather', 'Weather only affects summer staff'],
          correctIndex: 1,
          explanation: 'Weather directly impacts CA work. Storms can create flooding emergencies where staff must monitor water levels, close trails, and protect public safety—sometimes working through the night.'
        },
        {
          id: 'q9',
          question: 'How do conservation authorities measure success in their work?',
          options: ['Only by counting visitors to parks', 'Through water quality metrics, flood damage prevention, and ecosystem health indicators', 'Only by revenue generated', 'By the number of staff employed'],
          correctIndex: 1,
          explanation: 'CAs measure success through environmental outcomes like improved water quality, reduced flood damage to properties, healthy fish populations, and protected natural areas.'
        },
        {
          id: 'q10',
          question: 'What unexpected tasks might conservation authority staff handle at parks and conservation areas?',
          options: ['Only leading nature walks', 'Facility maintenance including managing porta-potties, fixing trails, and emergency repairs', 'Only selling admission tickets', 'Only wildlife research'],
          correctIndex: 1,
          explanation: 'CA staff handle diverse tasks including facility maintenance, trail repairs, washroom servicing, and emergency repairs—whatever it takes to keep parks safe and operational for visitors.'
        },
        {
          id: 'q11',
          question: 'What diverse work do watershed management teams perform?',
          options: ['Only office paperwork', 'Tree planting, stream restoration, water sampling, permit reviews, and flood forecasting', 'Only enforcement of bylaws', 'Only public education'],
          correctIndex: 1,
          explanation: 'Watershed teams do varied work: planting trees for restoration, sampling water quality, reviewing development permits, forecasting floods, and restoring natural habitats.'
        },
        {
          id: 'q12',
          question: 'What do conservation authorities typically look for when hiring new staff?',
          options: ['Only people with 10+ years experience', 'Diverse backgrounds, passion for the environment, and willingness to learn', 'Only people with specific degrees', 'Only local residents'],
          correctIndex: 1,
          explanation: 'CAs value diverse backgrounds, genuine passion for environmental protection, willingness to learn, and the ability to work as part of a team. Many entry-level positions are available for those starting their careers.'
        }
      ]
    }
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
  associatedSessionSlug: 'money-skills',
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
    title: 'Making Bank: Money Skills Quiz',
    description: 'Test your knowledge about managing money and building financial habits',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Making Bank: Money Skills for Real Life',
      description: 'Test your knowledge and master your money!',
      badgeImageUrl: '/badges/badge-money-skills.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'q1',
          question: 'Why does Shannon say it\'s harder for your generation to manage money than previous generations?',
          options: ['There\'s less money available', 'Contactless payments make spending invisible', 'Banks charge more fees now', 'Parents don\'t give allowances anymore'],
          correctIndex: 1,
          explanation: 'Tap technology and contactless payments mean you rarely see physical money, making it much harder to track spending and budget effectively.'
        },
        {
          id: 'q2',
          question: 'What are the five money habits Shannon says you need to practice?',
          options: ['Earning, spending, borrowing, investing, retiring', 'Tracking, saving, spending, enjoying, growing', 'Budgeting, investing, trading, lending, donating', 'Working, shopping, banking, taxing, retiring'],
          correctIndex: 1,
          explanation: 'The five habits are: tracking your money, saving your money, spending (budgeting), enjoying your money, and growing your money.'
        },
        {
          id: 'q3',
          question: 'When calculating your "regular income," what type of money should you NOT include?',
          options: ['Predictable income', 'Reoccurring income', 'Random income', 'Employment income'],
          correctIndex: 2,
          explanation: 'Random income (like unexpected birthday money) shouldn\'t be counted because you don\'t know when it\'s coming or how much. Only include predictable and reoccurring income.'
        },
        {
          id: 'q4',
          question: 'According to Shannon, what\'s MORE important than the dollar amount you save?',
          options: ['The interest rate you earn', 'The habit of saving itself', 'Having a savings account', 'Telling your friends about it'],
          correctIndex: 1,
          explanation: 'The habit of putting money aside—even $5—and not spending it all is the life skill that matters. The dollar amounts will grow as your income increases.'
        },
        {
          id: 'q5',
          question: 'What\'s the difference between "short-term savings" and "long-term savings"?',
          options: ['Short-term is cash, long-term is digital', 'Short-term is for expensive purchases, long-term improves your financial future', 'Short-term is weekly, long-term is monthly', 'There\'s no real difference'],
          correctIndex: 1,
          explanation: 'Short-term savings is for buying something expensive (like concert tickets or a grad dress). Long-term savings improves your future—like education that leads to higher income.'
        },
        {
          id: 'q6',
          question: 'Shannon describes a "line in the sand" in budgeting. What does this separate?',
          options: ['Wants vs. needs', 'Money you can spend vs. money you cannot spend', 'Cash vs. credit', 'Income vs. expenses'],
          correctIndex: 1,
          explanation: 'The line separates money you CAN\'T spend (fixed expenses + savings) from money you CAN spend (everything left over). That\'s your realistic budget.'
        },
        {
          id: 'q7',
          question: 'What is EROI and how does Shannon suggest using it?',
          options: ['Electronic Return On Investment—an app for tracking stocks', 'Emotional Return On Investment—rating purchases 1-5 based on happiness', 'Estimated Return On Income—calculating future earnings', 'Extended Rate Of Interest—comparing bank accounts'],
          correctIndex: 1,
          explanation: 'EROI (Emotional Return on Investment) means rating your spending 1-5. Cut the 1s and 2s (regret purchases), keep the 4s and 5s (things that truly make you happy).'
        },
        {
          id: 'q8',
          question: 'How does Shannon suggest saying no to friends who want to spend money on something you don\'t value?',
          options: ['Just lie and say you\'re busy', 'Say it\'s a low EROI for you, but acknowledge it might be high for them', 'Never hang out with friends who spend money', 'Always say yes to avoid conflict'],
          correctIndex: 1,
          explanation: 'You can say "That\'s a 2 for me, but I get it\'s a 5 for you." This gives you permission to say no without feeling like a jerk—it\'s not about rejecting friends.'
        },
        {
          id: 'q9',
          question: 'What\'s the key difference between SAVING money and INVESTING money?',
          options: ['Saving is digital, investing is physical', 'Saving can\'t lose value, investing has potential growth AND risk', 'Saving is for adults, investing is for teens', 'There\'s no real difference'],
          correctIndex: 1,
          explanation: 'Saved money (in a savings account) won\'t go down. Invested money (stocks, ETFs) can grow OR shrink. That\'s why investing involves risk.'
        },
        {
          id: 'q10',
          question: 'At what age can you open investment accounts like a TFSA or RRSP in Canada?',
          options: ['Any age with parental permission', '16', 'Age of majority (18 in most provinces)', '21'],
          correctIndex: 2,
          explanation: 'You must be the age of majority (18 in Ontario) to open investment accounts. That\'s why practicing saving habits NOW is so important—so you\'re ready when you can invest.'
        },
        {
          id: 'q11',
          question: 'Shannon says you should only invest money that you don\'t need for how long?',
          options: ['1 month', '1 year', 'At least 5 years', '10+ years only'],
          correctIndex: 2,
          explanation: 'Only invest money you won\'t need for at least 5 years. If you need it sooner (like for rent or tuition), keep it in a savings account where it can\'t lose value.'
        },
        {
          id: 'q12',
          question: 'Why does Shannon recommend getting a debit card NOW, before you turn 18?',
          options: ['Debit cards have better rewards', 'To practice contactless budgeting before it\'s attached to a credit card', 'Banks give better interest rates to young people', 'Credit cards aren\'t accepted everywhere'],
          correctIndex: 1,
          explanation: 'Your adult life will be mostly contactless payments. Practice budgeting with tap technology now using a debit card—so when you get a credit card at 18, you already know how to manage it.'
        },
        {
          id: 'q13',
          question: 'What does Shannon say is your greatest asset in the whole world?',
          options: ['Your savings account', 'Your credit score', 'Your future income', 'Your investment portfolio'],
          correctIndex: 2,
          explanation: 'Your future income is your greatest asset. That\'s why investing in education (even with student loans) can be worthwhile—it increases your earning potential for life.'
        }
      ]
    }
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

export const urbanPlanning: PlatinumBoothData = {
  id: 'ontario-water-careers',
  name: 'Ontario Water Careers',
  slug: 'ontario-water-careers',
  associatedSessionSlug: 'ontario-water-careers',
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
    title: 'Ontario Water Careers Quiz',
    description: 'Test your knowledge about careers in water infrastructure construction',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Ontario Water Careers: Build Critical Infrastructure',
      description: 'Test your knowledge about careers in Ontario\'s water infrastructure industry!',
      badgeImageUrl: '/badges/badge-build-big-things.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'owc1',
          question: 'What is Ontario Water Careers best described as?',
          options: ['A government agency', 'A platform connecting people to water/infrastructure jobs (like LinkedIn for construction)', 'A college training program', 'A construction company'],
          correctIndex: 1,
          explanation: 'Ontario Water Careers is like a "LinkedIn for construction jobs" - a one-stop shop connecting job seekers directly to real jobs and real employers in the water and infrastructure industry.'
        },
        {
          id: 'owc2',
          question: 'What type of infrastructure do water infrastructure workers build?',
          options: ['Cell phone towers and internet cables', 'Underground systems for drinking water, wastewater, and sewage', 'Office buildings and shopping malls', 'Wind turbines and solar panels'],
          correctIndex: 1,
          explanation: 'Water infrastructure workers build the underground systems you use every day - from the water you drink and wash with to the toilet you flush. This work is called "the first line of health" for society.'
        },
        {
          id: 'owc3',
          question: 'What is the average starting wage for entry-level positions in the water infrastructure industry?',
          options: ['$18 per hour', '$25 per hour', '$35 per hour', '$50 per hour'],
          correctIndex: 2,
          explanation: 'The average starting wage in the water infrastructure industry is roughly $35 per hour, which is significantly higher than many other entry-level positions.'
        },
        {
          id: 'owc4',
          question: 'How much can workers potentially earn within their first couple of years in this industry?',
          options: ['$40,000', '$60,000', '$80,000', 'Over $100,000'],
          correctIndex: 3,
          explanation: 'Workers can make over $100,000 within their first couple of years in the industry, which the presenters described as "unheard of" compared to other fields.'
        },
        {
          id: 'owc5',
          question: 'How much investment is projected to be needed in Ontario\'s infrastructure over the next 10 years?',
          options: ['$50 billion', '$100 billion', '$250 billion', '$500 billion'],
          correctIndex: 2,
          explanation: 'Over $250 billion is projected to be needed over the next 10 years to invest in infrastructure, making this industry recession-proof with strong job security.'
        },
        {
          id: 'owc6',
          question: 'What is typically the entry-level position for someone starting in water infrastructure construction?',
          options: ['Pipe Layer', 'Foreman', 'General Laborer', 'Site Supervisor'],
          correctIndex: 2,
          explanation: 'Most people start as a General Laborer and can progress to Pipe Layer Assistant, then Pipe Layer, and eventually Foreman within a few years.'
        },
        {
          id: 'owc7',
          question: 'What do employers look for most in candidates with no construction experience?',
          options: ['A college degree', 'Previous office work experience', 'A positive attitude and eagerness to learn', 'Physical fitness certifications'],
          correctIndex: 2,
          explanation: 'Employers value attitude above all else for entry-level candidates - someone who is positive, eager to learn, flexible, and willing to try new things will do "absolutely fine" regardless of experience.'
        },
        {
          id: 'owc8',
          question: 'How is training typically done in the water infrastructure industry?',
          options: ['Six months of classroom training before starting', 'On-the-job training where you\'re paid to learn', 'Online courses only', 'Unpaid internships'],
          correctIndex: 1,
          explanation: 'Training is done on-the-job in real time, meaning you\'re being paid while you learn. This is one of the main attractions for people with no experience entering the industry.'
        },
        {
          id: 'owc9',
          question: 'What does an equipment operator do in construction?',
          options: ['Repairs broken equipment', 'Operates heavy equipment like bulldozers, excavators, and cranes', 'Orders new equipment for the company', 'Inspects equipment for safety issues only'],
          correctIndex: 1,
          explanation: 'Operators run heavy equipment - bulldozers, excavators, cranes, and more. They often operate different equipment each day and are highly valued for their versatility.'
        },
        {
          id: 'owc10',
          question: 'What does an estimator do in the construction industry?',
          options: ['Counts workers on a job site', 'Estimates the cost of a project for the bidding process', 'Estimates how long a project will take', 'Estimates materials needed for safety equipment'],
          correctIndex: 1,
          explanation: 'Estimators look at projects designed by engineers, visit the site, and put together cost estimates. This is essential for the bidding process where companies compete for public work contracts.'
        },
        {
          id: 'owc11',
          question: 'Why is a Health & Safety Coordinator critical to construction sites?',
          options: ['They negotiate worker salaries', 'They keep the site compliant with safety standards and ensure everyone is working safely', 'They design the construction projects', 'They operate the heavy equipment'],
          correctIndex: 1,
          explanation: 'Health & Safety Coordinators keep sites compliant with company, Ontario, and provincial safety standards. They do checklists, ensure proper training, and are "number one" priority in today\'s construction industry.'
        },
        {
          id: 'owc12',
          question: 'When is peak hiring season for the water infrastructure industry?',
          options: ['January to March', 'April to June', 'July to September (through November)', 'December only'],
          correctIndex: 2,
          explanation: 'Peak hiring season runs from July through September and continues through November. Students finishing school in July should start looking then, as the industry is busiest all summer.'
        }
      ]
    }
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
  associatedSessionSlug: 'seeking-scholarships',
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
      description: 'Explore skilled trades and apprenticeships.',
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
      title: 'Write a Winning Essay',
      description: 'How to guide (downloadable pdf)',
      url: 'https://docs.google.com/viewerng/viewer?url=https://seekingscholarships.com/wp-content/uploads/2025/11/Seeking-Scholarships-Resource-How-to-Write-a-Winning-Essay-for-Your-Scholarship-Application-1.pdf&hl=en_US',
      type: 'pdf'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/1qzZSwd91eGn5i1SiuyXUc2hh_ATJH-kg9_NwipSUQEE/edit?usp=sharing',
    type: 'google-slides',
    title: 'Scholarship Opportunities Guide',
    description: 'Find and apply for scholarships and financial aid'
  },
  engagementActivity: {
    title: 'Funding Your Future Quiz',
    description: 'Test your knowledge about scholarships, bursaries, and paying for post-secondary education',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Funding Post-Secondary Education',
      description: 'Learn how to find and win scholarships, bursaries, and other financial aid!',
      badgeImageUrl: '/badges/badge-seeking-scholarships.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'ss1',
          question: 'What is the approximate total cost of one year of post-secondary education including living away from home?',
          options: [
            'About $5,000',
            'About $10,000',
            'About $20,000 or more',
            'About $50,000'
          ],
          correctIndex: 2,
          explanation: 'The total cost of post-secondary education for one year, including tuition, fees, books, and living away from home, is approximately $20,000 or more - and that\'s a conservative estimate.'
        },
        {
          id: 'ss2',
          question: 'What is the key difference between scholarships and bursaries?',
          options: [
            'Scholarships are larger amounts',
            'Scholarships are based on merit/achievement, while bursaries are based on financial need',
            'Bursaries are only for university students',
            'There is no difference'
          ],
          correctIndex: 1,
          explanation: 'Scholarships recognize outstanding achievement (merit) in areas like academics, leadership, or community service. Bursaries are awarded based on financial need. Neither has to be repaid!'
        },
        {
          id: 'ss3',
          question: 'What is OSAP?',
          options: [
            'A scholarship search website',
            'A government financial aid program providing loans and grants to supplement your own resources',
            'A private bank loan program',
            'A university entrance exam'
          ],
          correctIndex: 1,
          explanation: 'OSAP (Ontario Student Assistance Program) is financial aid from the federal and provincial governments. It includes both loans (must be repaid) and grants (don\'t have to be repaid).'
        },
        {
          id: 'ss4',
          question: 'Do you need to have extremely high grades (90%+) to win scholarships?',
          options: [
            'Yes, only top students win scholarships',
            'No - there are many different eligibility requirements, and well-rounded students often win',
            'Only for university scholarships',
            'Grades don\'t matter at all'
          ],
          correctIndex: 1,
          explanation: 'While high grades help for some scholarships, many awards look for well-rounded students with volunteerism, leadership, and community involvement. Don\'t discount yourself!'
        },
        {
          id: 'ss5',
          question: 'What\'s the difference between automatic entrance awards and major entrance awards?',
          options: [
            'Automatic awards are based on your admission average with no application; major awards require extensive applications and look for well-rounded students',
            'They are the same thing',
            'Automatic awards are larger',
            'Major awards don\'t consider grades'
          ],
          correctIndex: 0,
          explanation: 'Automatic awards are given based on your grades (usually 75%+) without applying. Major entrance awards can cover tuition and residence for 4 years but require extensive applications showing leadership and achievements.'
        },
        {
          id: 'ss6',
          question: 'How much can students earn per 4-month co-op work term at universities like Waterloo?',
          options: [
            '$1,000-$2,000',
            '$5,000-$7,000',
            '$10,000-$20,000',
            '$30,000-$40,000'
          ],
          correctIndex: 2,
          explanation: 'Co-op students can earn between $10,000 and $20,000 in a four-month work term. This can put a substantial dent in education costs while gaining valuable experience!'
        },
        {
          id: 'ss7',
          question: 'Why should you apply for smaller scholarships ($1,000-$2,500)?',
          options: [
            'You shouldn\'t - they\'re not worth the effort',
            'There\'s less competition for them, and they add up to significant amounts',
            'They\'re only for students with low grades',
            'They\'re harder to win than large scholarships'
          ],
          correctIndex: 1,
          explanation: 'Since we don\'t hear much about smaller awards, fewer people apply - meaning better chances for you! One presenter\'s daughters won thousands of dollars by focusing on small scholarships that added up.'
        },
        {
          id: 'ss8',
          question: 'What do scholarship committees look for most in applicants?',
          options: [
            'Only the highest grades',
            'Only athletic ability',
            'Well-rounded students who demonstrate responsibility, volunteerism, leadership, and overcoming obstacles',
            'Only financial need'
          ],
          correctIndex: 2,
          explanation: 'Scholarship committees want to see the whole picture: part-time jobs, volunteerism, leadership, overcoming challenges, and extracurricular activities. Students with the highest marks don\'t automatically win.'
        },
        {
          id: 'ss9',
          question: 'How can high school students demonstrate leadership without having formal titles?',
          options: [
            'They can\'t - you need to be student council president',
            'Through initiative, taking responsibility, and making an impact - like starting a club, tutoring others, or training coworkers',
            'Only through sports team captain positions',
            'Leadership doesn\'t matter for scholarships'
          ],
          correctIndex: 1,
          explanation: 'Leadership isn\'t about titles - it\'s about the initiative you take, the responsibility you demonstrate, and the impact you have on others. Starting a club, tutoring, or training coworkers all count!'
        },
        {
          id: 'ss10',
          question: 'When should students start preparing for scholarships?',
          options: [
            'Only in grade 12',
            'As early as grade 9 - building volunteer experience, activities, and achievements takes time',
            'Only after receiving university acceptance',
            'It doesn\'t matter when you start'
          ],
          correctIndex: 1,
          explanation: 'Earning a scholarship is a process that can start as early as grade 9. Scholarship committees want to see a history of involvement, not just something you did in the last six months.'
        },
        {
          id: 'ss11',
          question: 'Besides universities and colleges, who else offers scholarships and bursaries?',
          options: [
            'No one else offers them',
            'Employers, unions, cultural groups, professional associations, credit unions, foundations, and community organizations',
            'Only the government',
            'Only private companies'
          ],
          correctIndex: 1,
          explanation: 'Many external sources offer scholarships: employers, unions, cultural groups, professional associations, clubs, financial institutions, insurance companies, and community organizations. Check everywhere!'
        },
        {
          id: 'ss12',
          question: 'What\'s an important tip when applying for bursaries (need-based awards)?',
          options: [
            'Hide your financial challenges',
            'Be open about your situation, explain challenges like illness or job loss, and show you\'ve applied for OSAP',
            'Only apply if you have perfect grades',
            'Bursaries don\'t require any explanation'
          ],
          correctIndex: 1,
          explanation: 'For bursaries, be transparent about your financial challenges. Explain circumstances like family job loss or limited work opportunities, and show you\'ve tried to access all resources including OSAP.'
        }
      ]
    }
  },
  primaryCTA: {
    text: 'Learn More',
    url: 'https://seekingscholarships.com/',
    type: 'careers'
  },
  contact: {
    website: 'https://seekingscholarships.com/contact-us/',
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
  associatedSessionSlug: 'studenthaus',
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
    embedUrl: 'https://studenthaus.typeform.com/to/uRT2TWTT',
    embedType: 'iframe',
    title: 'Housing Survey',
    description: 'Share your thoughts and help shape the future of student housing',
    duration: '2-3 minutes'
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
  associatedSessionSlug: 'support-ontario-youth',
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
    title: 'Skilled Trades Apprenticeship Quiz',
    description: 'Test your knowledge about apprenticeships and skilled trades careers in Ontario',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Discover Skilled Trades',
      description: 'Learn about apprenticeship pathways and high-demand skilled trades careers!',
      badgeImageUrl: '/badges/badge-soy.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'soy1',
          question: 'How many skilled trades are there in Ontario?',
          options: [
            '25 trades',
            '50 trades',
            '144 trades across 4 sectors',
            'Over 500 trades'
          ],
          correctIndex: 2,
          explanation: 'Ontario has 144 skilled trades across four sectors: Construction, Industrial, Motive Power, and Service - offering a huge variety of career options.'
        },
        {
          id: 'soy2',
          question: 'How is apprenticeship training divided between work and school?',
          options: [
            '50% work, 50% school',
            '80% on-the-job training, 20% in-school learning',
            '100% classroom learning',
            '20% work, 80% school'
          ],
          correctIndex: 1,
          explanation: 'About 80% of apprenticeship training happens right on the job working alongside skilled experts, with 20% in school learning the theory behind what you\'re doing.'
        },
        {
          id: 'soy3',
          question: 'What is a Red Seal certification?',
          options: [
            'A basic safety certificate',
            'A national standard that lets you work in your trade anywhere across Canada',
            'A first-year apprentice badge',
            'A high school diploma endorsement'
          ],
          correctIndex: 1,
          explanation: 'Red Seal is called the "Passport of Skilled Workers" - once you\'re licensed, you can work anywhere across Canada without extra training or certifications.'
        },
        {
          id: 'soy4',
          question: 'How much does apprenticeship tuition cost per level?',
          options: [
            '$5,000-$10,000',
            '$2,000-$3,000',
            '$400-$600',
            'It\'s completely free'
          ],
          correctIndex: 2,
          explanation: 'Apprenticeship tuition is only $400-$600 per level - thousands of dollars cheaper than college or university programs.'
        },
        {
          id: 'soy5',
          question: 'What is OYAP (Ontario Youth Apprenticeship Program)?',
          options: [
            'A university degree program',
            'A program that lets high school students gain apprenticeship experience through co-op while earning credits',
            'An online-only certification',
            'A summer camp for trades'
          ],
          correctIndex: 1,
          explanation: 'OYAP lets you start your apprenticeship journey while still in high school through co-op placements, earning credits and real experience toward your trade.'
        },
        {
          id: 'soy6',
          question: 'What do you need BEFORE you can begin an apprenticeship?',
          options: [
            'A college diploma',
            'To be hired by an employer willing to train you',
            'Five years of experience',
            'To pass a provincial exam first'
          ],
          correctIndex: 1,
          explanation: 'Apprenticeship is unique - it\'s the only education pathway where you need to be hired by an employer first before you can begin your learning journey.'
        },
        {
          id: 'soy7',
          question: 'What are the four skilled trades sectors in Ontario?',
          options: [
            'Technology, Healthcare, Finance, Retail',
            'Construction, Industrial, Motive Power, and Service',
            'Electrical, Plumbing, HVAC, Carpentry',
            'Manufacturing, Transportation, Energy, Agriculture'
          ],
          correctIndex: 1,
          explanation: 'The four sectors are Construction, Industrial, Motive Power, and Service - covering everything from electricians and welders to chefs and hairstylists.'
        },
        {
          id: 'soy8',
          question: 'What is the Certificate of Qualification (CofQ)?',
          options: [
            'A high school diploma',
            'The final exam you write after completing your apprenticeship to become a licensed journey person',
            'A first-year apprentice certificate',
            'A safety training certificate'
          ],
          correctIndex: 1,
          explanation: 'The CofQ is your final exam after completing all apprenticeship requirements. Pass it and you become a licensed journey person in your trade!'
        },
        {
          id: 'soy9',
          question: 'According to employer surveys, what traits do they value MOST in new apprentices?',
          options: [
            'Advanced technical skills and certifications',
            'Positive attitude, integrity, and being coachable/willing to learn',
            'Previous industry experience only',
            'High grades in math and science'
          ],
          correctIndex: 1,
          explanation: 'Employers look for who you are as an employee - positive attitude, integrity, and willingness to learn matter more than technical skills when starting out.'
        },
        {
          id: 'soy10',
          question: 'What career options exist AFTER becoming a licensed journey person?',
          options: [
            'You must stay in the same job forever',
            'Entrepreneur, educator/instructor, inspector, mentor, or get multiple trade licenses',
            'Only working on job sites',
            'You have to retire early'
          ],
          correctIndex: 1,
          explanation: 'After becoming a journey person, you can open your own business, become an instructor, work as an inspector, mentor apprentices, or even get licensed in multiple trades!'
        },
        {
          id: 'soy11',
          question: 'What should new apprentices expect when starting out?',
          options: [
            'Immediately managing projects',
            'Starting in entry-level positions like general laborer and working up, with a probation period',
            'Getting the highest-paying tasks right away',
            'Working alone without supervision'
          ],
          correctIndex: 1,
          explanation: 'It\'s normal to start as a general laborer with a probation period. Every task is a chance to build trust with your employer and prove yourself as a valuable team member.'
        },
        {
          id: 'soy12',
          question: 'What earning potential do skilled trades offer?',
          options: [
            'Minimum wage only',
            'Some tradespeople earn six-figure salaries ($100,000+), and you earn while you learn',
            'Less than other career paths',
            'Only after 20+ years of experience'
          ],
          correctIndex: 1,
          explanation: 'Some tradespeople earn six-figure salaries after a few years of experience. Plus, you\'re earning income from day one of your apprenticeship - the only pathway where you get paid to learn!'
        }
      ]
    }
  },
  primaryCTA: {
    text: 'Tools in the Trades',
    url: 'https://toolsinthetrades.ca/',
    type: 'application'
  },
  contact: {
    website: 'https://www.supportontarioyouth.ca/',
    email: 'info@supportontarioyouth.ca',
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
      title: 'Earn a $500 micro grant',
      description: 'Industry Immersion Series',
      url: 'https://www.industryimmersionseries.ca/december',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://drive.google.com/file/d/1GnIHsb-3leM3O4jgUHJyME2OXJg-kqTv/view?usp=sharing',
    type: 'google-drive-pdf',
    title: 'Agriculture Career Pathways',
    description: 'Explore careers in Canadian agriculture'
  },
  engagementActivity: {
    title: 'Agriculture Careers Quiz',
    description: 'Test your knowledge about careers in Canada\'s agriculture and agri-food sector',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Discover Agriculture Careers',
      description: 'Test your knowledge about the opportunities waiting in Canadian agriculture!',
      badgeImageUrl: '/badges/badge-agriculture-agri-food.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'ag1',
          question: 'How many jobs does Canada\'s agriculture and agri-food sector support?',
          options: [
            'About 500,000 jobs',
            'About 1 million jobs',
            'About 2.3 million jobs',
            'About 5 million jobs'
          ],
          correctIndex: 2,
          explanation: 'Canada\'s agriculture and agri-food sector employs about 2.3 million people, making it one of the largest employment sectors in the country.'
        },
        {
          id: 'ag2',
          question: 'According to CAHRC research, what percentage of high school students cannot name a single job in agriculture besides "farmer"?',
          options: [
            '25%',
            '37%',
            '54%',
            '72%'
          ],
          correctIndex: 2,
          explanation: '54% of high school students could not name a single job in agriculture other than farmer, highlighting a major awareness gap about the diversity of careers available.'
        },
        {
          id: 'ag3',
          question: 'How many workers is the agriculture industry projected to be short by 2030?',
          options: [
            '25,000 workers',
            '50,000 workers',
            '100,000+ workers',
            '200,000 workers'
          ],
          correctIndex: 2,
          explanation: 'The agriculture industry is facing a significant labour gap and is projected to be short over 100,000 workers by 2030, creating abundant job opportunities.'
        },
        {
          id: 'ag4',
          question: 'Which of these is an emerging career path in modern agriculture?',
          options: [
            'Agricultural biotechnology',
            'Precision agriculture and data analytics',
            'Agricultural technology development',
            'All of the above'
          ],
          correctIndex: 3,
          explanation: 'Modern agriculture includes diverse career paths like biotechnology, precision agriculture with data analytics, and technology development - it\'s not just traditional farming anymore.'
        },
        {
          id: 'ag5',
          question: 'Do you need to come from a farming background to work in agriculture?',
          options: [
            'Yes, you need farming experience',
            'No - 60.7% of new ag workers come from non-agricultural programs',
            'Only for management positions',
            'Only for field work positions'
          ],
          correctIndex: 1,
          explanation: '60.7% of new agriculture workers come from non-agricultural college and university programs. The industry welcomes people from all backgrounds.'
        },
        {
          id: 'ag6',
          question: 'What did CAHRC research find about public perception of agriculture careers?',
          options: [
            '76% have a positive view, and 47% would consider a career in agriculture',
            'Most people think agriculture jobs are low-paying',
            'Only rural residents are interested in agriculture careers',
            'Young people are not interested in agriculture'
          ],
          correctIndex: 0,
          explanation: 'CAHRC research found that 76% of Canadians have a positive view of agriculture, and 47% would consider a career in the sector - there\'s strong interest once people learn about the opportunities.'
        },
        {
          id: 'ag7',
          question: 'What is "Work Integrated Learning" (WIL) in the context of agriculture careers?',
          options: [
            'Online farming courses',
            'Programs that combine classroom learning with hands-on work experience',
            'Learning to work with farm equipment',
            'Integration of technology with traditional farming'
          ],
          correctIndex: 1,
          explanation: 'Work Integrated Learning (WIL) programs combine classroom education with practical work experience in the agriculture sector, helping students gain real-world skills before graduation.'
        },
        {
          id: 'ag8',
          question: 'What percentage of Ontario\'s agriculture workforce is expected to retire by 2030?',
          options: [
            '15%',
            '25%',
            '37%',
            '50%'
          ],
          correctIndex: 2,
          explanation: '37% of Ontario\'s agriculture workforce is expected to retire by 2030, creating significant opportunities for young people entering the industry.'
        },
        {
          id: 'ag9',
          question: 'What skills are increasingly in demand in modern agriculture?',
          options: [
            'Digital literacy and automation',
            'Data analysis and interpretation',
            'Technology operation and maintenance',
            'All of the above'
          ],
          correctIndex: 3,
          explanation: 'Modern agriculture demands a combination of digital literacy, automation skills, data analysis capabilities, and technology expertise - the industry is rapidly evolving.'
        },
        {
          id: 'ag10',
          question: 'How many Work Integrated Learning opportunities are available across Canada in the agriculture sector?',
          options: [
            'About 500 programs',
            'About 1,200 programs',
            'About 3,400 programs',
            'About 10,000 programs'
          ],
          correctIndex: 2,
          explanation: 'There are approximately 3,400 Work Integrated Learning opportunities available across Canada in the agriculture sector, providing many pathways into the industry.'
        },
        {
          id: 'ag11',
          question: 'Who can pursue a career in Canada\'s agriculture and agri-food sector?',
          options: [
            'Only people from rural areas',
            'Only people with farming families',
            'Only people with agriculture degrees',
            'People from all backgrounds and education paths'
          ],
          correctIndex: 3,
          explanation: 'Agriculture welcomes people from all backgrounds - urban or rural, with various educational paths. The industry needs diverse skills including IT, business, science, engineering, and more.'
        },
        {
          id: 'ag12',
          question: 'What is the Canadian Agricultural Human Resource Council (CAHRC)?',
          options: [
            'A farming equipment company',
            'A government department',
            'An organization that provides research and resources to strengthen the agriculture workforce',
            'A university agriculture program'
          ],
          correctIndex: 2,
          explanation: 'CAHRC is a national organization that provides research, tools, and resources to help address workforce challenges and strengthen Canada\'s agriculture sector.'
        }
      ]
    }
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
  associatedSessionSlug: 'toronto-police-service',
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
    title: 'Toronto Police Services Career Quiz',
    description: 'Test your knowledge about careers with Canada\'s largest municipal police service',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Toronto Police Services: Serve Your City',
      description: 'Test your knowledge about career pathways and requirements at Toronto Police Service!',
      badgeImageUrl: '/badges/badge-toronto-police.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'tps1',
          question: 'What is Toronto Police Service\'s distinction among Canadian municipal police forces?',
          options: ['Oldest police service in Canada', 'Largest municipal police service in Canada', 'Most diverse police service in Canada', 'First community-focused police service'],
          correctIndex: 1,
          explanation: 'Toronto Police Service is the largest municipal police service in Canada, with over 8,000 members.'
        },
        {
          id: 'tps2',
          question: 'What is the minimum education requirement to become a Toronto police constable?',
          options: ['Police Foundations diploma', 'Bachelor\'s degree in criminology', 'Ontario Secondary School diploma', 'College certificate in law enforcement'],
          correctIndex: 2,
          explanation: 'The minimum education requirement is an Ontario Secondary School diploma. While higher education makes you more competitive, it\'s not mandatory.'
        },
        {
          id: 'tps3',
          question: 'What does OACP stand for in the application process?',
          options: ['Ontario Academy of Constable Preparation', 'Ontario Association of Chiefs of Police', 'Official Assessment for Canadian Policing', 'Ontario Applicant Certification Program'],
          correctIndex: 1,
          explanation: 'OACP stands for Ontario Association of Chiefs of Police. This third-party organization facilitates a mandatory evaluation covering grammar, spelling, and logic questions.'
        },
        {
          id: 'tps4',
          question: 'What is the name of the physical fitness test for police constable applicants?',
          options: ['Physical Readiness Evaluation for Police (PREP)', 'Pursuit Restraint Circuit', 'Police Fitness Assessment', 'Tactical Readiness Test'],
          correctIndex: 0,
          explanation: 'The fitness test is called PREP (Pursuit Restraint Circuit and Shuttle Run), which simulates a foot pursuit and arrest.'
        },
        {
          id: 'tps5',
          question: 'How much weight do candidates wear during the PREP fitness test to simulate police equipment?',
          options: ['10 pounds total', '18 pounds total (9-pound vest and 9-pound belt)', '25 pounds total', '15 pounds total'],
          correctIndex: 1,
          explanation: 'Candidates wear a 9-pound vest and 9-pound belt (18 pounds total) during the PREP test to emulate the equipment worn while on patrol.'
        },
        {
          id: 'tps6',
          question: 'What are the two components of the police constable interview?',
          options: ['Written test and oral exam', 'Group interview and panel interview', 'ECI (Essential Competency Interview) and LFI (Local Focus Interview)', 'Situational test and personality assessment'],
          correctIndex: 2,
          explanation: 'The interview has two parts: the ECI features scenario-based questions about past behavior, while the LFI asks questions specific to Toronto Police Service and the City of Toronto.'
        },
        {
          id: 'tps7',
          question: 'How long is the training period for police cadets?',
          options: ['3 months', '6 months', '9 months', '12 months'],
          correctIndex: 1,
          explanation: 'Police cadet training is 6 months, divided between the Toronto Police College in South Etobicoke and the Ontario Police College in Aylmer, Ontario.'
        },
        {
          id: 'tps8',
          question: 'Which of these is NOT one of Toronto Police Service\'s four core values?',
          options: ['Connect with compassion', 'Service at our core', 'Strength through authority', 'Do the right thing'],
          correctIndex: 2,
          explanation: 'The four core values are: Connect with compassion, Service at our core, Reflect and grow, and Do the right thing.'
        },
        {
          id: 'tps9',
          question: 'What driving record issue would screen you out during the background investigation?',
          options: ['Any traffic ticket ever', '6 or more demerit points', 'Not having a G2 license', 'Having received a speeding ticket'],
          correctIndex: 1,
          explanation: 'Having 6 or more demerit points is one of the factors that could screen you out during the background investigation.'
        },
        {
          id: 'tps10',
          question: 'What certifications must applicants have before applying?',
          options: ['Security guard license and firearms training', 'Standard First Aid, CPR level C, and full G Class license', 'Emergency response certification only', 'Police foundations certificate'],
          correctIndex: 1,
          explanation: 'Applicants must be certified in Standard First Aid and CPR level C and have a full G Class driver\'s license.'
        },
        {
          id: 'tps11',
          question: 'Besides police constable, which of these is a career path at Toronto Police Service?',
          options: ['Communications operator (911)', 'Forensic identification services', 'Parking enforcement officer', 'All of the above'],
          correctIndex: 3,
          explanation: 'TPS offers many career paths including communications operators, parking enforcement officers, special constables, forensic identification services, administrators, mechanics, and more.'
        },
        {
          id: 'tps12',
          question: 'How many divisions does Toronto Police Service have across the city?',
          options: ['8 divisions', '12 divisions', '16 divisions', '20 divisions'],
          correctIndex: 2,
          explanation: 'Toronto Police Service has 16 divisions across the city, plus specialized units like traffic services, marine unit, emergency task force, and many more.'
        }
      ]
    }
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
    embedUrl: 'https://docs.google.com/presentation/d/18QLIsWFdJt6emIBb2jW42hN60TjIA9RLwUd4FblLsIE/edit?usp=sharing',
    type: 'google-slides',
    title: 'Tourism Career Opportunities',
    description: 'Careers in Ontario\'s tourism and hospitality sector'
  },
  engagementActivity: {
    title: 'Tourism Careers Quiz',
    description: 'Test your knowledge about careers in Ontario\'s tourism and hospitality industry',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Discover Tourism Careers',
      description: 'Explore the exciting world of tourism and hospitality careers in Ontario!',
      badgeImageUrl: '/badges/badge-tourism.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'tiao1',
          question: 'What is the Tourism Industry Association of Ontario (TIAO)?',
          options: [
            'A hotel chain',
            'An organization that supports Ontario\'s tourism businesses by advocating for changes, to help them grow',
            'A travel agency',
            'A government tourism office'
          ],
          correctIndex: 1,
          explanation: 'TIAO is the voice of Ontario\'s tourism industry, helping to bring forward policy and regulation issues that prevent tourism-related businesses from growing and provide recommendations for change.'
        },
        {
          id: 'tiao2',
          question: 'What is a Red Seal certification in the culinary industry?',
          options: [
            'A basic food safety certificate',
            'The highest cooking qualification in Canada, recognized nationally and internationally',
            'A restaurant health inspection rating',
            'A certificate for washing dishes'
          ],
          correctIndex: 1,
          explanation: 'Red Seal is the highest cooking qualification in Canada, recognized across the country and around the world as proof of professional culinary expertise.'
        },
        {
          id: 'tiao3',
          question: 'According to industry professionals, what\'s a great entry point into tourism careers?',
          options: [
            'You need a university degree first',
            'Seasonal jobs at parks, ski resorts, or entry-level positions like dishwashing',
            'You must start as a manager',
            'Only hotel front desk positions'
          ],
          correctIndex: 1,
          explanation: 'Seasonal jobs at parks, ski resorts, and entry-level positions like dishwashing are excellent starting points. One speaker started as a dishwasher at 14 and became a Red Seal chef!'
        },
        {
          id: 'tiao4',
          question: 'What transferable skills does tourism teach that apply to any career?',
          options: [
            'Only cooking techniques',
            'Communication, leadership, problem solving, time management, and resilience',
            'Only customer service',
            'Only computer skills'
          ],
          correctIndex: 1,
          explanation: 'Tourism teaches skills you can use in any job: communication, leadership, problem solving, time management, and resilience - skills that will help you your whole life.'
        },
        {
          id: 'tiao5',
          question: 'What significant business opportunity exists in Canadian tourism over the next 10 years?',
          options: [
            'All tourism businesses are closing',
            'Over 70% of Canadian business owners are retiring, creating opportunities to buy into businesses',
            'No new jobs will be available',
            'Only international companies can enter the market'
          ],
          correctIndex: 1,
          explanation: 'Over 70% of Canadian business owners are looking to retire in the next 10 years, creating opportunities for young people to gain experience and potentially buy into existing businesses.'
        },
        {
          id: 'tiao6',
          question: 'Which industry is the largest employer offering students their first job experience?',
          options: [
            'Technology',
            'The food service industry',
            'Banking',
            'Manufacturing'
          ],
          correctIndex: 1,
          explanation: 'The food service industry is the largest employer that offers students their first taste of professional work experience.'
        },
        {
          id: 'tiao7',
          question: 'What did the event planner say about career paths in tourism?',
          options: [
            'They are always straight and predictable',
            'They are rarely linear - people move between different areas and roles frequently',
            'You must stay in one specialization forever',
            'There\'s only one path to success'
          ],
          correctIndex: 1,
          explanation: 'Career paths in tourism are rarely linear. The event planner started at Jack Astor\'s, went to hospitality school, worked at Culinary Tourism Alliance, started her own company, and now works with clients from restaurants to cryptocurrency conferences!'
        },
        {
          id: 'tiao8',
          question: 'What types of tourism careers exist beyond customer-facing roles?',
          options: [
            'There are no behind-the-scenes jobs',
            'Many roles including marketing, finance, logistics, event design, and corporate positions',
            'Only tour guide positions exist',
            'Tourism is only seasonal work'
          ],
          correctIndex: 1,
          explanation: 'Tourism isn\'t just about customer-facing roles - there are many jobs behind the scenes including marketing, finance, logistics, event design, AV requirements, and corporate positions that make tourism businesses run successfully.'
        },
        {
          id: 'tiao9',
          question: 'How did the tour operator (Aaron Binder) eventually become a business owner?',
          options: [
            'He inherited the company',
            'He started as a part-time tour guide, took on responsibilities, then bought stake in 2014 and full ownership in 2020',
            'He started the company immediately',
            'He won the company in a contest'
          ],
          correctIndex: 1,
          explanation: 'Aaron started as a part-time tour guide in 2008, took on more responsibilities, bought a stake in the business in 2014, and bought it out completely in 2020 - showing how you can grow into ownership.'
        },
        {
          id: 'tiao10',
          question: 'What did the chef say about being introverted in tourism?',
          options: [
            'You can\'t work in tourism if you\'re shy',
            'Back-of-house kitchen work is great for introverts who prefer focusing on craft rather than talking to customers',
            'All tourism jobs require being outgoing',
            'Introverts should avoid the industry'
          ],
          correctIndex: 1,
          explanation: 'The chef shared that he was shy and worked in the back of house (kitchen) where he didn\'t have to talk to hundreds of people - he could focus on the craft itself. Tourism has roles for all personality types!'
        },
        {
          id: 'tiao11',
          question: 'What major event will create tourism opportunities in Toronto in 2026?',
          options: [
            'The Olympics',
            'FIFA World Cup (Toronto as a host city)',
            'A music festival',
            'A political convention'
          ],
          correctIndex: 1,
          explanation: 'Toronto will be one of the host cities for FIFA 2026, welcoming folks from around the globe and creating exciting tourism opportunities.'
        },
        {
          id: 'tiao12',
          question: 'According to the speakers, what\'s the unique reward of tourism careers?',
          options: [
            'There are no rewards',
            'The fulfillment of creating memorable experiences, seeing 5-star reviews with your name, and deep human connections',
            'Tourism pays more than finance',
            'The same rewards as any other job'
          ],
          correctIndex: 1,
          explanation: 'While you might not get "Bay Street money," the reward is different - creating memorable experiences, seeing 5-star reviews with your name on them, and building deep connections with people from around the world.'
        }
      ]
    }
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
  associatedSessionSlug: 'vox-pop-labs',
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
    title: 'Vox Pop Labs Career Quiz',
    description: 'Test your knowledge about careers in civic technology and data science',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Vox Pop Labs: Civic Tech Careers',
      description: 'Discover how data science meets democracy!',
      badgeImageUrl: '/badges/badge-vox-pop-labs.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'vpl1',
          question: 'What type of company is Vox Pop Labs?',
          options: ['A publicly traded tech company', 'A B corporation founded and run by academics', 'A government research agency', 'A non-profit charity'],
          correctIndex: 1,
          explanation: 'Vox Pop Labs is a B corporation founded and run by academics, with a team of social scientists and developers.'
        },
        {
          id: 'vpl2',
          question: 'What is a data engineer\'s primary responsibility at Vox Pop Labs?',
          options: ['Designing company logos', 'Building pipelines to move and transform data', 'Writing news articles', 'Managing office supplies'],
          correctIndex: 1,
          explanation: 'Data engineers build pipelines to move data from one place to another, transforming survey answers into tables for analysis.'
        },
        {
          id: 'vpl3',
          question: 'What educational background helped Jesse transition into data engineering?',
          options: ['Marketing degree', 'PhD in applied and engineering physics', 'Law degree', 'Journalism diploma'],
          correctIndex: 1,
          explanation: 'His PhD gave him a toolkit of math, programming, and engineering that allowed him to work in various technical areas.'
        },
        {
          id: 'vpl4',
          question: 'What does a Research Lead do at Vox Pop Labs?',
          options: ['Manages large research projects that shape government policy', 'Repairs computer hardware', 'Delivers mail to clients', 'Designs office furniture'],
          correctIndex: 0,
          explanation: 'The Research Lead manages large research projects that help shape government policy and give voice to people.'
        },
        {
          id: 'vpl5',
          question: 'What is Degree Hub?',
          options: ['A social media platform', 'A machine learning tool that matches students with undergraduate programs', 'A video game', 'A banking application'],
          correctIndex: 1,
          explanation: 'Degree Hub is powered by machine learning and matches prospective students with the undergraduate programs and schools they will love.'
        },
        {
          id: 'vpl6',
          question: 'What are psychometric scales used for in research?',
          options: ['Measuring weight and height', 'Assessing personality, interests, and learning styles', 'Calculating shipping costs', 'Tracking weather patterns'],
          correctIndex: 1,
          explanation: 'Established psychometric scales from social science research are used to assess personality, interests, and learning styles for personalized assessments.'
        },
        {
          id: 'vpl7',
          question: 'What is Vote Compass Youth Edition designed to help students understand?',
          options: ['How to play sports', 'The political landscape and how parties really work', 'How to cook meals', 'Music theory'],
          correctIndex: 1,
          explanation: 'Vote Compass Youth Edition helps high school students understand the political landscape and the issues that matter most to Canadians.'
        },
        {
          id: 'vpl8',
          question: 'What advantage do small companies like Vox Pop Labs offer employees?',
          options: ['Less work responsibility', 'Work doesn\'t get lost in the crowd and you see results firsthand', 'Guaranteed promotions every month', 'No need to learn new skills'],
          correctIndex: 1,
          explanation: 'At small companies, your work doesn\'t get lost in the crowd, you wear lots of hats, see results firsthand, and work directly with people in charge.'
        },
        {
          id: 'vpl9',
          question: 'What military experience contributed to Cara\'s leadership skills?',
          options: ['Army infantry training', 'Lieutenant in the Royal Canadian Naval Reserve', 'Air Force pilot training', 'Coast Guard rescue operations'],
          correctIndex: 1,
          explanation: 'She served as a lieutenant in the Royal Canadian Naval Reserve, where she learned to lead teams and be led by others.'
        },
        {
          id: 'vpl10',
          question: 'What field did Cara study for her Master\'s degree?',
          options: ['Computer Science', 'European and Russian Studies with a focus on electoral systems', 'Medicine', 'Accounting'],
          correctIndex: 1,
          explanation: 'She completed a Master\'s in European and Russian studies at the Munk School of Global Affairs, focusing on electoral systems and divided societies.'
        },
        {
          id: 'vpl11',
          question: 'What does "mission-driven" work mean at Vox Pop Labs?',
          options: ['Working only for profit', 'Helping students, voters, and democracy as a whole', 'Competing against other companies', 'Avoiding all challenges'],
          correctIndex: 1,
          explanation: 'Mission-driven work means always trying to help students, voters, or democracy and society as a whole with impactful work.'
        },
        {
          id: 'vpl12',
          question: 'How did the speakers define career success?',
          options: ['By job title and salary alone', 'Having work that makes a positive difference while maintaining life outside work', 'Working the longest hours possible', 'Avoiding all responsibility'],
          correctIndex: 1,
          explanation: 'Success is defined on your own terms—having a job that makes a positive difference in the world while still having a life outside of work.'
        }
      ]
    }
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

export const hsmcBooth: PlatinumBoothData = {
  id: 'health-safety-management-college',
  name: 'Health and Safety Management College (HSMC)',
  slug: 'health-safety-management-college',
  tier: 'platinum',
  associatedSessionSlug: 'fire-alarm-technician',
  industries: ['Justice/Emergency', 'Construction', 'Energy'],
  organizationType: 'employer',
  pathway: 'college',
  logo: '/logos/hsmc-logo.jpg',
  tagline: 'Through Canadian Fire Alarm Technology Program, offered by Health and Safety Management College, students gain the foundational expertise necessary to become skilled Fire Alarm Technicians, ready to take on the responsibility of protecting public safety.',
  description: 'Health and Safety Management College (HSMC) is a leading career college based in Ontario, dedicated to providing high-quality education in workplace health and safety.\n\nAs an approved training partner of the Canadian Fire Alarm Association (CFAA) and a registered career college under the Ontario Career Colleges Act, 2005, we specialize in equipping students with the knowledge and skills needed for success in the fire alarm and safety industry.',
  video: {
    url: 'https://www.youtube.com/watch?v=qgCiN6AZ3vw',
    type: 'youtube',
    title: 'A Career in Fire & Life Safety',
    description: 'Learn about careers in the fire alarm industry'
  },
  resources: [
    {
      title: 'About HSMC',
      description: 'Learn about Health and Safety Management College',
      url: 'https://hsmcollege.ca/about-us/',
      type: 'link'
    },
    {
      title: 'Program Details',
      description: 'Explore the Canadian Fire Alarm Technology Program',
      url: 'https://hsmcollege.ca/the-canadian-fire-alarm-technology-program/',
      type: 'link'
    },
    {
      title: 'A Rewarding Career',
      description: 'Discover why fire alarm technician is a rewarding career',
      url: 'https://youtu.be/Jkjw503EBqc?si=C-eqbsZaYasM6eCx',
      type: 'link'
    },
    {
      title: 'Part 1: Day in the Life',
      description: 'See what a typical day looks like for a fire alarm technician',
      url: 'https://youtu.be/yMROFazPza0?si=vM9Tp_vfJBPyKnl5',
      type: 'link'
    },
    {
      title: 'Part 2: Day in the Life',
      description: 'Continue exploring the daily work of a fire alarm technician',
      url: 'https://youtu.be/RMuTllqHP_0?si=5uMEo-NZZf5GPdbU',
      type: 'link'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://drive.google.com/file/d/1-mnd-8Jp9wfNeMGtiTf44ql39EUHmFtX/view?usp=sharing',
    type: 'google-drive-pdf',
    title: 'HSMC Program Information',
    description: 'Learn about the Canadian Fire Alarm Technology Program'
  },
  engagementActivity: {
    title: 'Fire Alarm Technician Career Quiz',
    description: 'Test your knowledge about careers in fire safety and life protection',
    embedType: 'skills-gap-quiz',
    duration: '2-3 minutes',
    quizData: {
      title: 'Fire Alarm Technician: A Career That Keeps People Safe',
      description: 'Test your knowledge and discover if this career is right for you!',
      badgeImageUrl: '/badges/badge-fire-alarm.png',
      duration: '2-3 minutes',
      questions: [
        {
          id: 'q1',
          question: 'What is the primary role of a fire alarm technician?',
          options: ['Run into burning buildings to fight fires', 'Test, inspect, repair, and maintain fire alarm systems', 'Design new buildings', 'Sell fire alarm equipment'],
          correctIndex: 1,
          explanation: 'Fire alarm technicians are trained professionals who ensure fire alarm systems work properly so people get early warnings before emergencies become life-threatening.'
        },
        {
          id: 'q2',
          question: 'In which types of buildings do fire alarm technicians typically work?',
          options: ['Only hospitals', 'Only residential homes', 'Schools, hospitals, malls, apartments, factories, and offices', 'Only government buildings'],
          correctIndex: 2,
          explanation: 'Fire alarm technicians work in almost every type of building—anywhere fire alarm systems need testing, inspection, and maintenance.'
        },
        {
          id: 'q3',
          question: 'Why is there currently high demand for fire alarm technicians?',
          options: ['Many technicians are retiring', 'There are more job openings than trained people to fill them', 'The job is being automated', 'Fewer buildings need fire alarms'],
          correctIndex: 1,
          explanation: 'Service companies, building owners, and engineering firms all need qualified technicians, but there aren\'t enough trained people to fill the positions.'
        },
        {
          id: 'q4',
          question: 'Why is fire alarm technician work considered "future ready" and hard to automate?',
          options: ['It\'s done entirely by computer', 'It requires on-site work, human judgment, and physical checks', 'Robots already do most of it', 'It only uses paper records'],
          correctIndex: 1,
          explanation: 'Fire alarm work is done on site and requires human judgment, physical checks, and communication with building staff—making it a stable career even as technology changes.'
        },
        {
          id: 'q5',
          question: 'Fire alarm technician experience can be a stepping stone into which related fields?',
          options: ['Only retail sales', 'Firefighting, fire prevention, life safety consulting, and occupational health and safety', 'Only teaching', 'Only office administration'],
          correctIndex: 1,
          explanation: 'Many people use fire alarm experience to move into firefighting, fire prevention inspections, life safety consulting, system design, or occupational health and safety roles.'
        },
        {
          id: 'q6',
          question: 'What does C-F-A-T-P stand for?',
          options: ['Canadian Fire Association Training Plan', 'Canadian Fire Alarm Technology Program', 'Certified Fire Alarm Testing Protocol', 'Community Fire Alert Training Program'],
          correctIndex: 1,
          explanation: 'The Canadian Fire Alarm Technology Program (C-F-A-T-P) is a theory-based training program approved by the Canadian Fire Alarm Association that prepares you to become a registered fire alarm technician.'
        },
        {
          id: 'q7',
          question: 'How long does it take to complete the five C-F-A-T-P theory courses at HSMC?',
          options: ['About 4 years', 'About 2 years', 'About 11 weekends', 'About 6 months full-time'],
          correctIndex: 2,
          explanation: 'The program is accelerated and weekend-based, allowing you to complete all five theory courses in about 11 weekends while keeping up with school or work during the week.'
        },
        {
          id: 'q8',
          question: 'What do you receive after passing the CFAA theory exam?',
          options: ['A university degree', 'Your CFAA Fire Alarm Technician number', 'A firefighter badge', 'A building permit'],
          correctIndex: 1,
          explanation: 'When you pass the CFAA theory exam, you receive your official CFAA Fire Alarm Technician number, which registers you as a qualified technician.'
        },
        {
          id: 'q9',
          question: 'Which traits suggest you might enjoy working as a fire alarm technician?',
          options: ['Prefer sitting at a desk all day', 'Dislike technology and tools', 'Enjoy solving problems and notice small details others miss', 'Prefer working alone without interacting with anyone'],
          correctIndex: 2,
          explanation: 'Fire alarm technicians need to enjoy working with technology, solving puzzles, noticing small details, caring about safety, and moving around to different sites rather than sitting at a desk.'
        },
        {
          id: 'q10',
          question: 'How many continuing education courses must fire alarm technicians complete annually to maintain their CFAA registration?',
          options: ['2 courses', '4 courses', '8 courses', '12 courses'],
          correctIndex: 2,
          explanation: 'Each year, registered fire alarm technicians complete 8 continuing education courses to stay current with new technology, standards, and maintain their CFAA registration.'
        }
      ]
    }
  },
  primaryCTA: {
    text: 'Learn More',
    url: 'https://hsmcollege.ca/the-canadian-fire-alarm-technology-program/',
    type: 'learn-more'
  },
  contact: {
    email: 'info@hsmcollege.ca',
    website: 'https://hsmcollege.ca/',
    socialLinks: [
      { platform: 'globe', url: 'https://hsmcollege.ca/the-canadian-fire-alarm-technology-program/', label: 'Program Info' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/health-and-safety-management-college/' },
      { platform: 'youtube', url: 'https://www.youtube.com/@hsmcollege-ca' }
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
  hsmcBooth,                    // Health and Safety Management College (HSMC)
  cyberShield,                  // Jack.org
  bioMedical,                   // Kids Help Phone
  legalServices,                // Mydoh
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
