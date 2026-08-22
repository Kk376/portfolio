/**
 * Static Data Store for Kushagra Kumar's Developer Portfolio
 *
 * Centralized constant datasets used across Hero, About, Skills, Experience, and Contact components.
 */

/**
 * Core personal metadata, contact coordinates, and external repository links.
 */
export const PERSONAL_INFO = {
  name: "Kushagra Kumar",
  title: "Python & SQL Learner | Data Analytics Journey",
  shortBio:
    "BCA graduate (8.2 CGPA) building a strong foundation in Python and MySQL. Building hands-on CLI tools and practicing daily on GitHub as I work toward Data Analytics and AI/ML.",
  email: "kkushagra86@gmail.com",
  phone: "+91 79767 53740",
  location: "India",
  education: "BCA (8.2 CGPA)",
  university: "Suresh Gyan Vihar University",
  graduationYear: "2022",
  status: "Learning · Building Daily",
  githubUrl: "https://github.com/kk376",
  journeyRepoUrl: "https://github.com/kk376/ai-ml-journey",
  crudRepoUrl: "https://github.com/kk376/cli-python-crud-project",
  miniProjectsUrl: "https://github.com/kk376/ai-ml-journey/tree/main/Python_Mini_Projects",
  linkedinUrl: "https://www.linkedin.com/in/kushagra-kumar376/",
};

/**
 * Primary navigation item definitions corresponding to section HTML IDs.
 */
export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Career and academic milestones in chronological descending order.
 */
export const TIMELINE_DATA = [
  {
    year: "July 2026 – Present",
    title: "Learning Core Python & MySQL",
    subtitle: "AI/ML & Data Journey Started",
    description:
      "Covered Python fundamentals, data structures, file handling, and built 10 interactive mini-projects plus a standalone CRUD CLI application. Mastered MySQL queries, joins, window functions, CTEs, and procedures.",
    side: "left" as const,
    highlight: true,
  },
  {
    year: "Mid 2022 – Mid 2026",
    title: "Government Exam Preparation",
    subtitle: "4 Years Dedication",
    description:
      "Dedicated four focused years to competitive exams. Built deep discipline, analytical thinking, and mental stamina before transitioning fully to software development and data.",
    side: "right" as const,
  },
  {
    year: "2019 – 2022",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Suresh Gyan Vihar University",
    description:
      "Graduated with an 8.2 CGPA. Studied core computer science concepts, database management systems, programming fundamentals, and software engineering.",
    side: "left" as const,
  },
  {
    year: "2019",
    title: "First Lines of Code",
    subtitle: "Java & Programming Basics",
    description:
      "Wrote my first program in Java, sparking a lasting interest in logic, algorithms, and computers.",
    side: "right" as const,
  },
];
