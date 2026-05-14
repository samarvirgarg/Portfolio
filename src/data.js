// ============================================================
// Portfolio data populated from Samarvir Garg's resume
// ============================================================

export const personalInfo = {
  name: "Samarvir Garg",
  firstName: "Samarvir",
  lastName: "Garg",
  title: "Computer Engineering Student",
  tagline:
    "Engineering solutions at the intersection of software, systems, and real-world impact.",
  description:
    "Computer Engineering student at the University of Toronto with hands-on experience in full-stack development, ML-based perception systems, and research-driven data visualization. Passionate about building scalable solutions and leading teams to solve meaningful problems.",
  university: "University of Toronto",
  degree: "Bachelor of Applied Science & Engineering — Computer Engineering",
  location: "Toronto, Canada",
  phone: "(905) 617-7205",
  email: "samarvir.garg@mail.utoronto.ca",
  github: "https://github.com/samarvirgarg",
  linkedin: "https://www.linkedin.com/in/samarvir/",
  devpost: "https://devpost.com/samarvirgarg",
  twitter: "#",
  resumeUrl: "/Samarvir_Resume_Summer.pdf",
  resumeLabel: "Samarvir Garg - Resume",
  profileImage: null,
};

export const aboutData = {
  paragraphs: [
    "I'm a Computer Engineering student at the University of Toronto who thrives on building software that solves real problems — from emergency route optimization to ML-powered cone detection for autonomous racing. I bring a research-driven mindset, strong leadership instincts, and a relentless curiosity to every project I touch.",
    "Beyond the classroom, I've contributed to industry SaaS platforms, authored technical reports on healthcare data visualization, and led multidisciplinary engineering design teams. When I'm not coding, you'll find me on the tennis court, volunteering, or exploring the outdoors.",
  ],
  stats: [
    { label: "Projects Built", value: "6+" },
    { label: "Leadership Roles", value: "3+" },
    { label: "Volunteer Roles", value: "4+" },
    { label: "Technologies", value: "12+" },
  ],
};

export const educationData = [
  {
    institution: "University of Toronto",
    degree: "B.A.Sc. — Computer Engineering",
    location: "Toronto, ON",
    period: "Sep 2025 – Present",
  },
  {
    institution: "White Oaks Secondary School",
    degree: "Founder of Math Support Club, Math & Physics Tutor, Executive of Hindu Association",
    location: "Oakville, ON",
    period: "Sep 2023 – June 2025",
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Software Trainee",
    company: "Master Software Solutions",
    location: "Mohali, India",
    period: "Oct 2024 – May 2025",
    description:
      "Contributed to development of route optimization algorithms for a delivery management SaaS platform (Trakop). Trained in Java Spring and PostgreSQL, and built an analytics dashboard for historical sales, customer, orders, payments, and inventory data.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
    type: "work",
  },
  {
    id: 2,
    role: "Research Assistant (Volunteer)",
    company: "University of Toronto — Prof. Clement C. Zai",
    location: "Toronto, ON",
    period: "Nov 2024 – Feb 2025",
    description:
      "Conducted research on pharmacogenetic reporting and data visualization in mental healthcare. Reviewed clinical dashboards and decision-support tools, and authored a technical report proposing scalable, data-driven visualization design recommendations.",
    tags: ["Research", "Data Visualization", "Technical Writing", "Healthcare"],
    type: "leadership",
  },
  {
    id: 3,
    role: "Member, Driverless — Deep Perception Subteam",
    company: "University of Toronto Formula Racing",
    location: "Toronto, ON",
    period: "Jan 2026 – Present",
    description:
      "Working on ML-based perception for cone detection, classification, and localization using camera image streams. Contributing to data collection and manual labeling to improve model generalization, and evaluating models using IoU, mAP, and inference latency under real-time NVIDIA Jetson constraints.",
    tags: ["Python", "ML", "Computer Vision", "NVIDIA Jetson"],
    type: "work",
  },
  {
    id: 4,
    role: "Team Lead — APS111: Engineering Strategies & Practice II",
    company: "University of Toronto",
    location: "Toronto, ON",
    period: "Sep 2025 – Dec 2025",
    description:
      "Led a multidisciplinary team on a client-based engineering design project for High Park. Developed key design deliverables including Technical Criteria, Problem Requirements, and Concept Design Specifications. Coordinated team workflow, timelines, and final design reports and presentations.",
    tags: ["Leadership", "Design", "Project Management", "Presentation"],
    type: "leadership",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Autonomous Biathlon Robot — UTRA HACKS 2026",
    description:
      "Designed and built an autonomous Arduino-based robot inspired by the Winter Olympics biathlon, balancing continuous motion with precision targeting. Implemented a modular C++ architecture on Arduino Uno R4 Minima with clear separation between hardware control, perception/calibration, and high-level behaviors. The robot navigated multiple course layouts using IR, ultrasonic, and color sensors, and reliably executed object manipulation and target alignment. Collaborated with a 4-person team, learning the full robotics stack in real time.",
    tags: ["C++", "Arduino", "Embedded Systems", "Sensors"],
    award: "2nd Overall & 1st Top Track — UTRA HACKS 2026",
    github: "https://github.com/samarvirgarg/UTRA",
    live: "https://devpost.com/software/utra-hacks-2026",
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: "Emergency Route Optimization System",
    description:
      "Built a backend routing engine with priority-based, maps-based path planning and multi-agent coordination for ambulance dispatch. Developed a lightweight REST-style API for emergency inputs, ambulance status updates, and routing decisions. Integrated SQLite for persistence and validated logic through a Java-based Becker Robots simulation — placed 3rd overall at UTEK 2026.",
    tags: ["Java", "Becker Robots", "SQLite", "REST API"],
    award: "3rd Place — UTEK 2026",
    github: "#", // PLACEHOLDER: Add your repo link
    live: null,
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: "FoodChain — FBLA Project",
    description:
      "Designed and developed a full-stack backend system using Java Spring Boot with a 3-layer (Controller–Service–Repository) architecture. Implemented RESTful APIs for managing restaurants, private chefs, and user search/filter functionality backed by a MySQL relational database. Applied CRUD operations, dependency injection, and modular backend design.",
    tags: ["Java", "Spring Boot", "MySQL", "MVC Architecture"],
    github: "https://github.com/samarvirgarg/hackathon-FoodChain-Project",
    live: null,
    image: null,
    featured: true,
  },
  {
    id: 4,
    title: "Log Rush — Arcade Game",
    description:
      "A fast-paced Pygame arcade game where a lumberjack cuts trees while logs fall from above, and the player moves left or right to catch them with a net. Features event handling, collision detection, timers, and randomized log spawning.",
    tags: ["Python", "Pygame", "Game Dev"],
    github: "https://github.com/samarvirgarg/Pygame_LogRush",
    live: null,
    image: null,
    featured: false,
  },
  {
    id: 5,
    title: "Smart Playlist Generator",
    description:
      "A digital music player with playlist management and filtering logic. Users can add or remove songs, apply filters such as genre or artist, and generate random playlists dynamically using Pygame.",
    tags: ["Python", "Pygame", "Data Filtering"],
    github: "https://github.com/samarvirgarg/Pygame_SmartPlaylistGenerator",
    live: null,
    image: null,
    featured: false,
  },
];

export const volunteeringData = [
  {
    id: 1,
    role: "Research Assistant (Volunteer)",
    organization: "University of Toronto — Pharmacogenetics Research",
    period: "Nov 2024 – Feb 2025",
    description:
      "Volunteered as a research assistant studying pharmacogenetic reporting and data visualization in mental healthcare, producing actionable design recommendations for clinical tools.",
    icon: "heart",
  },
  {
    id: 2,
    role: "Founder — Math Support Club",
    organization: "White Oaks Secondary School",
    period: "Sep 2023 – June 2025",
    description:
      "Founded and led a peer-tutoring club to support students in mathematics, organizing weekly sessions and creating supplementary learning materials.",
    icon: "code",
  },
  {
    id: 3,
    role: "Math & Physics Tutor",
    organization: "White Oaks Secondary School",
    period: "Sep 2023 – June 2025",
    description:
      "Tutored students in math and physics, helping them build foundational understanding and problem-solving skills for academic success.",
    icon: "heart",
  },
  {
    id: 4,
    role: "Executive — Hindu Association",
    organization: "White Oaks Secondary School",
    period: "Sep 2023 – June 2025",
    description:
      "Served as an executive member organizing cultural events, promoting inclusivity, and managing community engagement activities.",
    icon: "community",
  },
];

export const skillsData = {
  languages: ["Java", "Python", "C/C++", "SQL (Postgres)", "JavaScript", "HTML/CSS"],
  frameworks: ["Spring Boot", "Pygame", "Becker", "Arduino"],
  tools: ["Git", "VS Code", "Visual Studio", "IntelliJ", "Eclipse", "SQLite", "MySQL", "NVIDIA Jetson"],
  concepts: ["REST APIs", "MVC Architecture", "Embedded Systems", "Computer Vision", "Machine Learning", "Data Visualization"],
};

export const interestsData = [
  {
    title: "Tennis",
    description: "Competitive player and lifelong fan of the sport",
    icon: "tennis",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Autonomous Racing",
    description: "Building ML perception systems for UofT Formula Racing",
    icon: "innovation",
    color: "from-red-400 to-orange-600",
  },
  {
    title: "Outdoor Adventures",
    description: "Hiking, camping, and exploring new trails",
    icon: "outdoor",
    color: "from-amber-400 to-orange-600",
  },
  {
    title: "Research & Innovation",
    description: "Data-driven solutions for healthcare and beyond",
    icon: "opensource",
    color: "from-purple-400 to-violet-600",
  },
  {
    title: "Music",
    description: "Discovering new sounds and genres across cultures",
    icon: "music",
    color: "from-pink-400 to-rose-600",
  },
  {
    title: "Community Service",
    description: "Tutoring, mentoring, and giving back",
    icon: "community",
    color: "from-teal-400 to-cyan-600",
  },
];
