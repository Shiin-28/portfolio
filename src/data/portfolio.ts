/**
 * All site content lives here. Edit this file to update the portfolio —
 * components only render what is defined below.
 */

export const profile = {
  name: "Sean Kenly R. Dela Peña",
  shortName: "Sean Dela Peña",
  initials: "SK.DP",
  headline: "AI-Driven Web Developer & UI/UX Designer",
  intro:
    "4th-year Computer Science student at FEU Tech building AI-powered web apps with interfaces people actually enjoy using.",
  status: "Open to software engineering internships",
  email: "seankenlydelapena@gmail.com",
  github: "https://github.com/Shiin-28",
  githubHandle: "Shiin-28",
  linkedin: "https://www.linkedin.com/in/sean-kenly-dela-pena-004949377/",
  linkedinHandle: "sean-kenly-dela-pena",
  // Drop your resume at /public/delapena_resume.pdf
  resume: "/delapena_resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm a fourth-year BS Computer Science student specializing in Software Engineering at FEU Tech. I work where AI and the web meet: building applications that put machine learning in front of real users, and designing the interfaces that make that feel simple.",
    "As a developer and UI/UX designer, I care about the whole path from a rough idea to a shipped product: research, wireframes, clean front-end code, and the model or API doing the heavy lifting behind it. On my thesis team, Visionaries, I'm the UI/UX designer for Viscrete, a computer-vision system that detects defects in concrete walls.",
    "I'm currently looking for a software engineering internship where I can contribute to a real product team, learn from experienced engineers, and ship work that matters.",
  ],
  focus: [
    { label: "Building", value: "AI-powered web apps" },
    { label: "Designing", value: "Interfaces & user flows" },
    { label: "Seeking", value: "SWE internship" },
  ],
};

export type SkillGroup = { title: string; code: string; items: string[] };

// Mirrors the stack on github.com/Shiin-28
export const skills: SkillGroup[] = [
  { title: "Languages", code: "LANG", items: ["Python", "C++", "JavaScript", "TypeScript", "PHP"] },
  { title: "Frameworks", code: "FRMW", items: ["React", "Next.js"] },
  { title: "Databases", code: "DATA", items: ["Supabase", "MySQL"] },
  { title: "Design Tools", code: "DSGN", items: ["Figma", "Adobe Photoshop", "Adobe Premiere Pro"] },
  { title: "AI Tools", code: "AI", items: ["Claude", "Gemini"] },
  { title: "Dev Tools", code: "DEV", items: ["Git", "GitHub", "Vercel"] },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string; // leave undefined to show "Demo soon"
  demoFallback?: string; // replaces "Demo soon" when there is no live demo
  repoUrl?: string; // leave undefined to show "Repo soon"
  inProgress?: boolean;
  note?: string; // short status note shown under the description
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Viscrete",
    tagline: "Team thesis · Visionaries",
    description:
      "Visual Inspection System for Concrete Evaluation: a modular system that automates concrete wall defect detection. Inspectors upload wall images, which are validated, enhanced with CLAHE preprocessing, run through a YOLOv11 detection model, and compiled into a PDF inspection report.",
    role: "UI/UX Designer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "YOLOv11"],
    image: "/projects/viscrete.png",
    imageAlt: "Viscrete landing page: Visual Inspection System for Concrete Evaluation",
    liveUrl: "https://viscrete.vercel.app",
    repoUrl: "https://github.com/visionaries-cs/viscrete",
    featured: true,
  },
  {
    title: "MapaMars",
    tagline: "Team project · ProXy4",
    description:
      "A Marswalk planning app: pick a start and end point on a 2D map of Mars, share the route with your crew through a mission code, and keep a permanent mission log. Its interactive 3D Mars globe shows NASA landing sites, Phobos and Deimos positioned with NASA JPL's Horizons API, and orbiters such as MRO, Odyssey, Mars Express and Hope, with a timeline to play their motion.",
    role: "Interactive 3D Mars globe developer & UI/UX designer",
    stack: ["React", "TypeScript", "three.js", "Vite", "Supabase", "NASA JPL Horizons"],
    image: "/projects/mapamars.png",
    imageAlt: "MapaMars interactive 3D globe: Mars with NASA landing sites and the orbits of Phobos, Deimos and several orbiters",
    liveUrl: "https://mapa-mars.vercel.app",
    repoUrl: "https://github.com/S-Urchin/MapaMars",
    featured: true,
  },
  {
    title: "Papeles",
    tagline: "Civic guide web app",
    description:
      "Step-by-step guides to Philippine government IDs and documents: a printable requirements checklist, steps, fees, where to go, and crowd-reported wait times per branch. Every item shows when it was last checked against the official source, and pages are built to load fast on budget phones.",
    role: "Solo developer & designer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Prisma", "SQLite"],
    image: "/projects/papeles.png",
    imageAlt: "Papeles home page with a search box and a grid of government ID guides",
    liveUrl: "https://papeles-delta.vercel.app",
    repoUrl: "https://github.com/Shiin-28/Papeles",
    inProgress: true,
  },
  {
    title: "Werewolf",
    tagline: "Real-time multiplayer app",
    description:
      "A game master companion for Werewolf (人狼). Players join from their own phones with a game code, and the app deals secret roles, runs night actions, collects votes, and checks win conditions in real time, in English and Japanese.",
    role: "Solo developer & designer",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/werewolf.png",
    imageAlt: "Werewolf start screen with a nickname field",
    liveUrl: "https://jinroo.vercel.app",
    repoUrl: "https://github.com/Shiin-28/Werewolf",
  },
  {
    title: "MTGDT",
    tagline: "Deck tracker · PH stores",
    description:
      "A Commander deck tracker for Magic: The Gathering players in the Philippines. Import a decklist, mark the cards you own or will proxy, and find the cheapest in-stock copy of the rest across local game stores, priced in pesos.",
    role: "Solo developer & designer",
    stack: ["Next.js", "TypeScript", "Supabase", "Prisma", "PostgreSQL"],
    image: "/projects/mtgdt.png",
    imageAlt: "MTGDT home page: Build it. Own it. Find the rest.",
    liveUrl: "https://mtgdt-five.vercel.app",
    repoUrl: "https://github.com/Shiin-28/mtgdt",
    inProgress: true,
    note: "Some store sites block automated price checks, so store coverage is still partial.",
  },
  {
    title: "SideQuest",
    tagline: "Group project · ProXy4",
    description:
      "“Your Middleman”: a web platform that connects clients who post paid tasks, called quests, with service providers who take them on. Client and provider accounts, quests, and transactions are stored in a MySQL database.",
    role: "Team member",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    image: "/projects/sidequest.svg",
    imageAlt: "SideQuest cover art: a quest board of paid tasks",
    repoUrl: "https://github.com/Shiin-28/SideQuest",
    demoFallback: "Runs locally",
  },
];

export type ExperienceKind = "Work" | "Competition" | "Leadership";

export type Experience = {
  kind: ExperienceKind;
  title: string;
  org?: string;
  period: string;
  team?: boolean; // shows "Team" next to the kind tag
  summary?: string; // one line on what you built or did
  points: string[];
  tools?: string[];
};

// Newest first
export const experience: Experience[] = [
  {
    kind: "Competition",
    team: true,
    title: "NASA Space Apps Challenge",
    org: "NASA",
    period: "2026 · In progress",
    summary:
      "Built MapaMars with team ProXy4, a Marswalk planning app. I developed its interactive 3D Mars globe, which shows NASA landing sites, Phobos and Deimos, and active orbiters.",
    points: [],
  },
  {
    kind: "Competition",
    team: true,
    title: "Agora Voice AI Hackathon",
    org: "Agora",
    period: "Early 2026",
    summary:
      "Built a voice AI coach that helps students rehearse their thesis or research defense, and reviews their paper to point out its weak spots, what to strengthen, and what to change.",
    points: [],
  },
  {
    kind: "Work",
    title: "Junior Officer, Media Committee",
    org: "FEU Tech ACM Student Chapter",
    period: "Oct 2025 – Jul 2026",
    points: [
      "Produced the chapter's visual assets by taking and editing photos for event coverage and promotion.",
      "Worked closely with other committees to make organizational events run smoothly.",
    ],
    tools: ["Photography", "Adobe Photoshop", "Adobe Lightroom"],
  },
  {
    kind: "Competition",
    team: true,
    title: "Caffeine Hackathon",
    org: "DFINITY · Internet Computer",
    period: "2025",
    summary:
      "Built Imbak-Chain, a humanitarian inventory management system made with Caffeine. Its dashboard gives a real-time overview of aid items, partner organizations, and deployments to make relief operations more efficient and transparent.",
    points: [],
  },
];

export const education = {
  school: "FEU Institute of Technology",
  schoolShort: "FEU Tech",
  degree: "Bachelor of Science in Computer Science",
  specialization: "Specialization in Software Engineering (BSCSSE)",
  period: "2024 – Present",
  year: "4th year",
};

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
};

export const certificates: Certificate[] = [
  {
    name: "PMI Project Management Ready",
    issuer: "Project Management Institute",
    date: "Mar 2026",
    credentialId: "w69H4-48D4",
    url: "https://verify.certiport.com",
  },
  {
    name: "Information Technology Specialist: Python",
    issuer: "Certiport · Pearson",
    date: "Jul 2025",
    credentialId: "or72-uS7B",
    url: "https://verify.certiport.com",
  },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
