import profileImage from "@/app/assets/JaneSmith.png";
import workforceLogo from "@/app/assets/workforce.png";
import prodeusLogo from "@/app/assets/prodeus.jpg";
import praLogo from "@/app/assets/pra.jpg";
import gratitudeLogo from "@/app/assets/gratitude.png";
import analogLogo from "@/app/assets/analogteams_logo.jpg";
import paritiLogo from "@/app/assets/pariti.jpg";
import getHuntedLogo from "@/app/assets/gethunted.png";
import fairmoneyLogo from "@/app/assets/fairmoney.png";
import portraitImage from "@/app/assets/smith.jpg";
import pillImage from "@/app/assets/smithpils.png";
import pillsTwoImage from "@/app/assets/pills2.png";
import pillsThreeImage from "@/app/assets/pills3.png";

export const photos = {
  focus: {
    image: pillsTwoImage,
    alt: "Naomi Smith in a professional portrait",
    eyebrow: "Global recruiting partner",
    caption: "Technical and non-technical hiring across distributed teams."
  },
  approach: {
    image: pillImage,
    alt: "Naomi Smith portrait",
    caption: "People-first hiring, structured search, and calm stakeholder partnership."
  },
  contact: {
    image: pillsThreeImage,
    alt: "Naomi Smith profile photo"
  }
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Focus Areas" },
  { href: "#philosophy", label: "Approach" },
  { href: "#contact", label: "Contact" }
];

export const hero = {
  eyebrow: "Technical Recruiting / Global Sourcing / Talent Acquisition",
  title: ["Hiring", "globally", "with precision."],
  subtitle:
    "Senior Recruiter, global talent sourcer, and technical plus non-technical hiring partner helping high-growth teams build strong talent pipelines across Africa, Europe, North America, and Asia.",
  actions: [
    { href: "#experience", label: "View Experience", variant: "primary" },
    { href: "/resume/SmithResume.pdf", label: "Download Resume", variant: "secondary", download: true }
  ],
  statNumber: "12",
  imageName: "Naomi Smith",
  imageRole:
    "Lead Technical Recruiter / Global Talent Sourcer / Talent Acquisition",
  image: profileImage,
  imageAlt: "Naomi Smith"
};

export const marqueeItems = [
  "Technical Recruiting",
  "Global Talent Sourcing",
  "Full-Cycle Recruitment",
  "Hiring Strategy",
  "Candidate Experience",
  "Team Leadership",
  "Tech and Non-Tech Hiring"
];

export const metrics = [
  {
    value: 12,
    suffix: "+",
    label: ["Years in Recruiting", "and Talent Acquisition"]
  },
  {
    value: 4,
    suffix: "",
    label: ["Global Regions", "Hired Across"]
  },
  {
    value: 4,
    suffix: "",
    label: ["Working Languages", "Across Hiring Contexts"]
  },
  {
    value: 7,
    suffix: "",
    label: ["Career Chapters", "Across HR and Recruiting"]
  }
];

export const companyLogos = [
  { name: "FairMoney", logo: fairmoneyLogo, logoAlt: "FairMoney logo" },
  { name: "Get Hunted", logo: getHuntedLogo, logoAlt: "Get Hunted logo" },
  { name: "Pariti", logo: paritiLogo, logoAlt: "Pariti logo" },
  { name: "Analog Teams", logo: analogLogo, logoAlt: "Analog Teams logo" },
  { name: "Gratitude", logo: gratitudeLogo, logoAlt: "Gratitude logo" },
  { name: "PRA Insurance Brokers", logo: praLogo, logoAlt: "PRA Insurance Brokers logo" },
  { name: "Prodeus", logo: prodeusLogo, logoAlt: "Prodeus logo" },
  { name: "Workforce Group", logo: workforceLogo, logoAlt: "Workforce Group logo" }
];

export const impactHighlights = [
  {
    label: "Functions Covered",
    value: "Engineering, Product, Design, Data",
    body:
      "Recruiting coverage across core product-building teams and supporting business functions."
  },
  {
    label: "Markets Reached",
    value: "Africa, Europe, North America, Asia",
    body:
      "Search experience across multiple regions, hiring cultures, and candidate expectations."
  },
  {
    label: "Hiring Motion",
    value: "Sourcing to Offer",
    body:
      "Full-cycle support across intake, sourcing, candidate management, stakeholder alignment, and offer stages."
  },
  {
    label: "Recruiting Systems",
    value: "LinkedIn, Greenhouse, Lever, Workable",
    body:
      "A practical toolkit for structured search, pipeline tracking, and efficient recruiting workflows."
  }
];

export const about = {
  title: ["Global hiring.", "Bilingual sourcing.", "People-first execution."],
  body: [
    "Naomi Smith is a Senior Recruiter with experience helping companies build high-performing teams across multiple regions including Africa, Europe, North America, and Asia.",
    "She specializes in full-cycle recruitment, talent sourcing, and building strong talent pipelines for high-growth organizations. Her work spans technical and non-technical hiring, stakeholder partnership, recruitment process improvement, and candidate experience.",
    "Her sourcing toolkit includes LinkedIn Recruiter, Greenhouse, Lever, Workable, GitHub, and other search workflows used to identify, engage, and move top talent through competitive hiring markets."
  ],
  quote:
    "I specialize in full-cycle recruitment, talent sourcing, and building strong talent pipelines for high-growth organizations.",
  pills: [
    "Project Management",
    "Recruiting",
    "Human Resources",
    "Technical Hiring",
    "Talent Sourcing",
    "Stakeholder Management",
    "Candidate Experience",
    "Team Leadership"
  ],
  image: portraitImage,
  imageAlt: "Naomi Smith portrait"
};

export const experiences = [
  {
    period: "Sep 2023 - Present",
    company: "FairMoney",
    logo: fairmoneyLogo,
    logoAlt: "FairMoney logo",
    role: "Lead - Technical Recruiter",
    title: "Leading technical hiring across core product-building functions",
    body:
      "Supports hiring across Engineering, Product and Design, and Data and Analytics while partnering with teams in a fast-scaling international environment.",
    achievements: [
      "Drives technical recruitment strategy for high-impact product and engineering teams.",
      "Partners with stakeholders on hiring priorities, talent calibration, and pipeline planning.",
      "Works across technical domains where speed, quality, and candidate experience all matter."
    ]
  },
  {
    period: "Apr 2023 - Present",
    company: "FairMoney",
    logo: fairmoneyLogo,
    logoAlt: "FairMoney logo",
    role: "Senior Technical Recruiter",
    title: "Building strong pipelines for specialist technical talent",
    body:
      "Focuses on sourcing and full-cycle recruitment for technical talent in a globally connected hiring market.",
    achievements: [
      "Sources and manages candidates across competitive technical talent pools.",
      "Supports process quality from intake to offer stage.",
      "Brings structured sourcing and recruiter partnership into fast-moving hiring teams."
    ]
  },
  {
    period: "Feb 2023 - Apr 2023",
    company: "Get Hunted",
    logo: getHuntedLogo,
    logoAlt: "Get Hunted logo",
    role: "Researcher",
    title: "Researching talent and market-fit opportunities",
    body:
      "Contributed research support in a short-term role focused on talent discovery and matching.",
    achievements: [
      "Conducted candidate and market research.",
      "Supported sourcing workflows and talent intelligence."
    ]
  },
  {
    period: "Jan 2023 - Mar 2023",
    company: "Pariti",
    logo: paritiLogo,
    logoAlt: "Pariti logo",
    role: "Talent Scout",
    title: "Scouting EMEA candidates across technical and non-technical roles",
    body:
      "Sourced qualified candidates for technical and non-technical roles across sectors including health, fintech, telecoms, IT, and logistics.",
    achievements: [
      "Worked across EMEA-focused search activity.",
      "Supported broad hiring needs across both business and technical functions.",
      "Handled multi-sector sourcing in startup and growth contexts."
    ]
  },
  {
    period: "Feb 2021 - Aug 2022",
    company: "Analog Teams",
    logo: analogLogo,
    logoAlt: "Analog Teams logo",
    role: "Technical Talent Recruiter",
    title: "Recruiting across complex US technical hiring mandates",
    body:
      "Worked on sourcing and recruiting contracts with notable IT, financial, and healthcare companies in the United States.",
    achievements: [
      "Recruited for frontend, backend, full-stack, iOS, Android, AI and ML, and data roles.",
      "Supported searches for hardware engineers, product managers, designers, engineering managers, and sales engineers.",
      "Delivered across both deeply technical and business-facing hiring briefs."
    ]
  },
  {
    period: "Mar 2019 - Jan 2021",
    company: "Gratitude",
    logo: gratitudeLogo,
    logoAlt: "Gratitude logo",
    role: "Senior HR Sourcing Specialist",
    title: "Expanding sourcing capability in cross-border recruiting environments",
    body:
      "Worked in a sourcing-focused HR role that strengthened talent discovery and hiring support across international markets.",
    achievements: [
      "Supported recruitment sourcing activity at senior specialist level.",
      "Built sourcing depth before moving fully into technical recruiting tracks."
    ]
  },
  {
    period: "Mar 2017 - Feb 2019",
    company: "PRA Insurance Brokers",
    logo: praLogo,
    logoAlt: "PRA Insurance Brokers logo",
    role: "Human Resources Manager",
    title: "Leading talent sourcing, acquisition, and people management",
    body:
      "Handled talent sourcing and acquisition alongside broader people management responsibilities in Lagos, Nigeria.",
    achievements: [
      "Managed HR delivery while supporting recruitment outcomes.",
      "Balanced hiring needs with day-to-day people operations."
    ]
  },
  {
    period: "Feb 2015 - Jan 2017",
    company: "Prodeus",
    logo: prodeusLogo,
    logoAlt: "Prodeus logo",
    role: "Human Resources Manager",
    title: "Building people operations alongside talent acquisition",
    body:
      "Worked across talent sourcing, acquisition, and people management responsibilities during a foundational HR leadership period.",
    achievements: [
      "Supported organizational hiring and people management functions.",
      "Strengthened end-to-end HR execution in a Nigeria-based context."
    ]
  },
  {
    period: "Apr 2012 - Jan 2015",
    company: "Workforce Group",
    logo: workforceLogo,
    logoAlt: "Workforce Group logo",
    role: "HR Consultant",
    title: "Starting in consulting across sourcing, assessments, and checks",
    body:
      "Began her career supporting talent sourcing, assessments, and background checks for clients in Lagos, Nigeria.",
    achievements: [
      "Built early recruiting and assessment discipline in a consulting environment.",
      "Developed a practical foundation for later talent acquisition leadership."
    ]
  }
];

export const workCases = [
  {
    number: "01",
    org: "Global Talent Acquisition",
    title: "Full-cycle hiring across multiple international regions",
    tags: ["Africa", "Europe", "North America", "Asia"],
    body:
      "Naomi has recruited professionals across multiple regions, helping companies reach qualified talent pools beyond a single market and adapt to different hiring expectations.",
    resultLabel: "Reach",
    resultNumber: "4",
    resultText: "major regions covered in her recruiting track record."
  },
  {
    number: "02",
    org: "Technical and Non-Technical Recruiting",
    title: "Sourcing for broad role families without losing quality",
    tags: ["Engineering", "Product", "Design", "Business"],
    body:
      "Her recruiting scope spans engineering, product, design, analytics, business development, sales engineering, and other technical and non-technical functions.",
    resultLabel: "Coverage",
    resultNumber: "End-to-End",
    resultText: "recruitment ownership from sourcing through hiring process support."
  },
  {
    number: "03",
    org: "Search Tools and Recruiting Systems",
    title: "Using modern sourcing tools to build stronger pipelines",
    tags: ["LinkedIn Recruiter", "Greenhouse", "Lever", "GitHub"],
    body:
      "She uses sourcing and recruiting tools such as LinkedIn Recruiter, Greenhouse, Lever, Workable, and GitHub to identify talent, improve workflows, and support efficient hiring teams.",
    resultLabel: "Toolkit",
    resultNumber: "5+",
    resultText: "core sourcing and recruiting platforms named in her profile."
  }
];

export const philosophy = {
  quote:
    "I have led recruitment teams, partnered with senior stakeholders to develop hiring strategies, and implemented recruitment processes that improve candidate experience and reduce time-to-hire.",
  emphasis: "candidate experience and reduce time-to-hire",
  pillars: [
    {
      number: "I",
      title: "Build pipelines before urgency hits",
      body:
        "Strong hiring starts before the requisition becomes painful. Naomi’s work emphasizes sourcing discipline and proactive pipeline building for high-growth teams."
    },
    {
      number: "II",
      title: "Partner closely with stakeholders",
      body:
        "Recruitment works better when recruiters and hiring leaders stay aligned on role priorities, quality bars, and interview flow from the beginning."
    },
    {
      number: "III",
      title: "Protect experience while moving fast",
      body:
        "A better candidate journey and a faster hiring process are not opposites. Her approach is built around both speed and professionalism."
    }
  ]
};

export const expertiseItems = [
  {
    number: "01",
    name: "Technical Recruiting",
    description:
      "Hiring across engineering, product, design, data, mobile, infrastructure, AI and ML, and other specialist technical functions."
  },
  {
    number: "02",
    name: "Global Talent Sourcing",
    description:
      "Finding and engaging qualified talent across Africa, Europe, North America, and Asia for growth-stage and distributed hiring teams."
  },
  {
    number: "03",
    name: "Full-Cycle Recruitment",
    description:
      "Supporting the hiring process from intake and sourcing through candidate management, coordination, and recruiting partnership."
  },
  {
    number: "04",
    name: "Technical and Non-Technical Hiring",
    description:
      "Balancing searches across deeply technical roles as well as commercial, operational, and people-facing functions."
  },
  {
    number: "05",
    name: "Talent Pipeline Strategy",
    description:
      "Creating stronger, more durable pipelines for high-growth organizations that need speed without sacrificing candidate quality."
  },
  {
    number: "06",
    name: "Recruiting Operations and Tools",
    description:
      "Using platforms such as LinkedIn Recruiter, Greenhouse, Lever, Workable, and GitHub to make sourcing and hiring workflows more effective."
  }
];

export const credentials = [
  {
    title: "Languages",
    body:
      "Yoruba (full professional), English (native or bilingual), French (professional working), and Igbo (native or bilingual).",
    meta: "Multilingual hiring communication"
  },
  {
    title: "Certifications",
    body:
      "Diploma in Human Resources, Supervision - Effective Communication Skills, Talent Sourcing, and Tech Recruitment+ Certified Professional.",
    meta: "Recruiting and HR credentials"
  },
  {
    title: "Recognition",
    body:
      "Recognized in the Top 11 Recruitment and Talent Managers Every African Techie Should Follow.",
    meta: "Industry recognition"
  },
  {
    title: "Education",
    body:
      "Bachelor of Arts in French from the University of Ibadan, with a French language year-abroad program at Centre Culturel Francaise De Lome / Universite de Lome, Togo.",
    meta: "Language and cross-cultural foundation"
  }
];

export const contactDetails = {
  intro:
    "Naomi partners with hiring teams on technical and non-technical recruiting, global sourcing, and stronger talent pipelines for growth-focused organizations.",
  primaryAction: {
    href: "https://www.linkedin.com/in/naomismith345",
    label: "View LinkedIn"
  },
  secondaryAction: {
    href: "/resume/SmithResume.pdf",
    label: "Download Resume",
    download: true
  },
  emailAction: {
    href: "mailto:your-email@example.com",
    label: "Email Naomi"
  },
  details: [
    { label: "Location", value: "Nigeria" },
    { label: "Email", value: "your-email@example.com" },
    { label: "LinkedIn", value: "linkedin.com/in/naomismith345" },
    { label: "Focus", value: "Global Talent Acquisition" }
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/naomismith345",
      handle: "naomismith345"
    },
    {
      label: "Facebook",
      href: "https://facebook.com/",
      handle: "naomismith345"
    },
    {
      label: "Instagram",
      href: "https://instagram.com/",
      handle: "naomismith345  "
    },
    {
      label: "Twitter",
      href: "https://twitter.com/",
      handle: "naomismith345"
    }
  ]
};
