export const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Other']

export const skills = [
  {
    title: 'AI & LLM',
    items: ['AI / LLM Evaluation', 'Prompt Engineering', 'Code Review'],
  },
  {
    title: 'Languages',
    items: ['C++', 'C#', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Bootstrap', 'ASP.NET Core MVC'],
  },
  {
    title: 'Backend & Data',
    items: ['ASP.NET Core Web API', 'EF Core', 'SQL Server', 'REST APIs'],
  },
  {
    title: 'Cloud & Tools',
    items: ['Azure', 'AWS', 'Docker', 'Linux', 'Git', 'GitHub'],
  },
  {
    title: 'Core CS',
    items: ['DSA'],
  },
  {
    title: 'Data & Analytics',
    items: ['Power BI'],
  },
]

const projectEntries = [
  {
    title: 'IT Service Desk Management System',
    category: 'Featured · .NET Full-Stack',
    problem: 'Service requests need a structured workflow for users and administrators.',
    built: 'A React client connected to an ASP.NET Core Web API, with separate API and data-access projects.',
    decision: 'The API uses EF Core with SQLite; the DAL contains repository abstractions, models, and migrations.',
    learning: 'Practiced full-stack integration and working with a multi-project .NET solution and an Azure Pipelines definition.',
    stack: ['ASP.NET Core', 'EF Core', 'React', 'SQLite', 'Azure DevOps'],
    link: 'https://github.com/Prudvi14/AccentureTraning/tree/main/CapstoneProject',
    featured: true,
    architecture: ['React client', 'ASP.NET Core API', 'DAL · EF Core · SQLite'],
  },
  {
    title: 'Student Mental Health & Depression Dashboard',
    category: 'Power BI · Data & Analytics',
    problem: 'Make patterns in a student mental-health dataset easier to explore.',
    built: 'A Power BI report with comparisons across depression, academic pressure, sleep, age groups, and other dataset fields.',
    decision: 'Present observed relationships as correlations rather than evidence of causation.',
    learning: 'Practiced organizing dataset fields into visual comparisons and communicating the limits of the analysis.',
    stack: ['Power BI', 'Data Cleaning', 'Visualization', 'Insights'],
    link: 'https://github.com/Prudvi14/Student_depression_analysis-',
    preview: 'projects/student-depression-dashboard.png',
    previewAlt: 'Screenshot of the Student Mental Health and Depression Power BI dashboard',
  },
  {
    title: 'RentMyCargo',
    category: 'React · Vehicle Catalog Prototype',
    problem: 'Present bikes, cars, and cargo vehicles in one browsable catalog.',
    built: 'A React interface with category pages, vehicle cards, and client-side search across vehicle data.',
    decision: 'Use shared vehicle data and reusable cards for bikes, cars, and cargo listings.',
    learning: 'Practiced React routing, reusable UI, and client-side filtering. The booking action is currently a UI alert, not a connected reservation service.',
    stack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Prudvi14/RentMyCargo',
    preview: 'projects/rentmycargo-bike.jpeg',
    previewAlt: 'Bike-category illustration used in the RentMyCargo app',
  },
]

export const projects = projectEntries

const experienceEntries = [
  {
    role: 'Research Participant',
    company: 'Prolific',
    relationship: 'Research participation, not employment',
    period: 'Jan 2025 — Present',
    start: '2025-01',
    bullets: [
      'Participated in studies covering linguistics, cognitive assessment, and AI/LLM behavior.',
      'Provided human judgments used as ground-truth data in research and model-evaluation workflows.',
    ],
  },
  {
    role: 'AI / LLM Evaluation',
    company: 'Scalar AI Labs',
    relationship: 'Role type and dates need confirmation before publication',
    period: 'Jan 2025 — Present',
    start: '2025-01',
    bullets: [
      'Evaluated AI/LLM outputs and reviewed response quality against task requirements.',
      'Supported output validation and data-quality workflows.',
    ],
    needsReview: true,
  },
  {
    role: 'Data Annotator',
    company: 'Outlier AI',
    relationship: 'AI annotation work',
    period: 'Nov 2024 — Jan 2025',
    start: '2024-11',
    bullets: [
      'Reviewed AI-generated responses for factual accuracy, logical consistency, and code correctness.',
      'Created prompts for English-language and coding evaluation tasks.',
    ],
  },
  {
    role: 'AASE Trainee — .NET Full Stack Development',
    company: 'Accenture',
    relationship: 'Training program',
    period: 'Jun 2026 — Sep 2026',
    start: '2026-06',
    bullets: [
      'Completed AASE full-stack training in C#, .NET, React, API development, testing, and database fundamentals.',
      'Built a capstone in a multi-project solution with React, ASP.NET Core API, EF Core, and SQLite.',
      'Worked with an Azure Pipelines build/test/deployment definition included in the capstone repository.',
    ],
  },
]

const educationEntries = [
  {
    school: 'Lovely Professional University',
    degree: 'Bachelor of Technology - BTech, Computer Science',
    mark: 'Grade: CGPA: 7.93',
    timeline: 'Sep 2022 – Jun 2026',
    start: '2022-09',
  },
  {
    school: 'Narayana Junior College',
    degree: 'Intermediate, MPC',
    mark: 'Board of Intermediate Education, Andhra Pradesh',
    timeline: 'Aug 2020 – Apr 2022',
    start: '2020-08',
  },
  {
    school: 'Chanakya Public School',
    degree: 'High School, Science',
    mark: 'Board of Secondary Education, Andhra Pradesh',
    timeline: 'May 2020',
    start: '2020-05',
  },
]

export const experiences = experienceEntries
  .filter((entry) => !entry.needsReview)
  .sort((a, b) => b.start.localeCompare(a.start))
export const experienceReviewNotes = experienceEntries.filter((entry) => entry.needsReview)
export const education = [...educationEntries].sort((a, b) => b.start.localeCompare(a.start))

export const certifications = [
  'Madhyama & Prathmik Hindi Certification',
]

export const training = [
  'Accenture AASE — .NET Full-Stack Development training',
]

export const achievements = [
  { title: '183 LeetCode problems solved', verified: 'LeetCode profile checked Oct 16, 2026' },
]

export const contactEmail = 'gadeshulaprudhvi2004@gmail.com'

export const profileLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gprudvi/' },
  { label: 'GitHub', href: 'https://github.com/Prudvi14' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/gadeshula_prudvi/' },
]
