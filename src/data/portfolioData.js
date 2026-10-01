export const navItems = ['Projects', 'Experience', 'Skills', 'About']

export const stats = [
  { label: 'Experience', value: '3+', href: 'https://www.linkedin.com/in/gprudvi/' },
  { label: 'Projects', value: '4+', href: 'https://github.com/Prudvi14' },
  { label: 'LeetCode', value: '150+', href: 'https://leetcode.com/u/gadeshula_prudvi/' },
]

export const skills = [
  {
    title: 'AI / LLM',
    items: ['Prompt Engineering', 'LLM Evaluation', 'Code Review', 'AI Research Tasks'],
  },
  {
    title: 'Languages',
    items: ['C++', 'C#', 'JavaScript', 'SQL', 'HTML5'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Bootstrap', 'CSS3', 'ASP.NET Core MVC'],
  },
  {
    title: 'Backend & Data',
    items: ['ASP.NET Core Web API', 'EF Core', 'SQL Server', 'REST APIs', 'Power BI'],
  },
  {
    title: 'Cloud & Tools',
    items: ['Azure', 'AWS', 'Docker', 'Git', 'GitHub'],
  },
]

const projectEntries = [
  {
    title: 'IT Service Desk Management System',
    category: 'Service request portal',
    description:
      'Built a full-stack IT service request portal with a 3-layer architecture using EF Core, ASP.NET Core Web API, and React, supporting role-based access for users and admins.',
    stack: ['ASP.NET Core', 'EF Core', 'React', 'SQLite', 'Azure DevOps'],
    link: 'https://github.com/Prudvi14',
    start: '2025-01',
  },
  {
    title: 'Student Mental Health & Depression Dashboard',
    category: 'Power BI Dashboard',
    description:
      'Designed an interactive Power BI dashboard analyzing trends across 1,000+ student records and highlighting relationships between depression, CGPA, sleep, and financial stress.',
    stack: ['Power BI', 'Data Cleaning', 'Visualization', 'Insights'],
    link: 'https://github.com/Prudvi14/Student_depression_analysis',
    start: '2024-06',
  },
  {
    title: 'RentMyCargo',
    category: 'Vehicle Rental Platform',
    description:
      'Engineered a responsive single-page app for bikes, cars, and cargo vehicles with dynamic booking flows, real-time search, and mobile-friendly layouts.',
    stack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Prudvi14/RentMyCargo',
    start: '2023-11',
  },
]

const experienceEntries = [
  {
    role: 'Research Participant',
    company: 'Prolific',
    period: 'Jan 2025 — Present',
    start: '2025-01',
    description:
      'Completed research studies covering linguistics, cognitive assessment, and AI/LLM behavior, providing human judgments used as ground-truth data for model evaluation and research workflows.',
  },
  {
    role: 'AI Research & Data Evaluation Associate',
    company: 'Scalar AI Labs',
    period: 'Jan 2025 — Present',
    start: '2025-01',
    description:
      'Contributed to AI and LLM research workflows by evaluating model behavior, validating outputs, and supporting data-quality tasks that improve the reliability and usefulness of AI systems.',
  },
  {
    role: 'Data Annotator',
    company: 'Outlier AI',
    period: 'Nov 2024 — Jan 2025',
    start: '2024-11',
    description:
      'Reviewed and annotated AI-generated responses for logical consistency, factual accuracy, and code correctness, while designing high-quality prompts for English and coding tasks.',
  },
  {
    role: 'AASE Trainee — .NET Full Stack Development',
    company: 'Accenture',
    period: 'Jun 2026 — Sep 2026',
    start: '2026-06',
    description:
      'Completed intensive .NET Full Stack training covering C#, OOP, LINQ, SOLID principles, design patterns, unit testing, EF Core, SQL Server, Azure fundamentals, Docker, and Agile/DevOps workflows.',
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

export const projects = [...projectEntries].sort((a, b) => b.start.localeCompare(a.start))
export const experiences = [...experienceEntries].sort((a, b) => b.start.localeCompare(a.start))
export const education = [...educationEntries].sort((a, b) => b.start.localeCompare(a.start))

export const certifications = [
  'Madhyama & Prathmik Hindi Certification',
  'Solved 150+ DSA problems on LeetCode',
  'Accenture AASE — .NET Full Stack Development',
  'AI / LLM evaluation and annotation training',
]
