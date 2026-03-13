// ── Personal Info ────────────────────────────────────────────
export const personalInfo = {
  name: "Ajit Vishwakarma",
  title: "Full-Stack Developer & Problem Solver",
  bio: "I am a MERN stack developer who enjoys building full-stack web applications and solving real-world problems. Passionate about React and modern web technologies, I focus on creating simple, efficient, and user-friendly applications.",
  location: "Delhi, India",
  availableForWork: true,
  // Social / CTA links
  github: "https://github.com/ajit202006",
  leetcode: "https://leetcode.com/u/ajit_vishwakarma_110920/",
  linkedin: "https://linkedin.com/in/",
  email: "ajitvishwakarma202006@gmail.com",
  whatsapp: "https://wa.me/+919891909587",
  cvUrl: "https://drive.google.com/file/d/1it12O-a69f01JpCV32g0opMQqO2VpOWO/view?usp=drive_link",
  avatarInitials: "AV",
};

// ── Skills ───────────────────────────────────────────────────
export type SkillCategory = {
  category: string;
  color: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    color: "violet",
    skills: [
      "HTML",
      "Vanilla CSS",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    category: "Backend",
    color: "cyan",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    category: "Languages",
    color: "emerald",
    skills: [
      "Python",
      "C",
      "C++",
      "Java",
      "Javascript"
    ],
  },
  {
    category: "Tools & Practices",
    color: "amber",
    skills: [
      "Git",
      "Figma",
      "Agile / Scrum",
      "Code Review",
      "Jira",
      "Postman",
    ],
  },
];

// ── Experience ───────────────────────────────────────────────
export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "work";
  description: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full stack developer",
    company: "Triweb API Genesis",
    period: "Oct 2025 — Jan 2026",
    location: "Remote",
    type: "work",
    description: [
      "Developed and maintained responsive web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      "Integrated RESTful APIs for seamless frontend-backend communication, improving application performance and data handling.",
      "Collaborated with a team of developers using Git and agile workflows to deliver scalable features and bug fixes."
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "Redux", "WebSockets", "MySQL"],
  },
  {
    role: "Trainee Full-Stack Developer",
    company: "Triweb API Genesis",
    period: "June 2025 — Oct 2025",
    location: "Remote",
    type: "work",
    description: [
      "Built full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      "Designed and integrated REST APIs to manage user authentication, data storage, and real-time interactions.",
      "Worked in agile development cycles with version control (Git) to implement features and optimize performance.",
    ],
    tech: ["MERN", "Postman", "MySQL", "JIRA", "Agile methodologies"],
  },
];

// ── Education ────────────────────────────────────────────────
export type Education = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  type: "education";
  achievements: string[];
};

export const education: Education[] = [
  {
    degree: "BCA",
    institution: "IIMT University",
    period: "2023 — Present",
    location: "Greater Noida, India",
    type: "education",
    achievements: [
      "GPA: Not Declared",
    ],
  },
  {
    degree: "Intermediate",
    institution: "CBSE",
    period: "2021 - 2023",
    location: "Delhi, India",
    type: "education",
    achievements: ["Score: 89%", "Distinction with 1st rank"],
  },
];

// ── Projects ─────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "ChatScure",
    description:
      "ChatScure is a simple web app for instant real-time messaging",
    longDescription:
      "ChatScure is a lightweight real-time chat application for quick online communication. It is built using Node.js, Express, and Socket.IO with a simple web interface. The app allows users to send and receive messages instantly through a clean and responsive design.",
    tech: ["MongoDB", "React", "Node.js", "Express", "Rest API", "WebSockets", "JWT", "Axios", "Zustand", "DaisyUI", "TailwindCSS"],
    githubUrl: "https://github.com/ajit202006/ChatScure",
    liveUrl: "https://chatscure.onrender.com",
    featured: false,
  },
  {
    title: "Task Buddy",
    description:
      "A real-time task manager with responsive design and database support ",
    longDescription:
      "Task Buddy is a simple web app for managing daily tasks. It allows users to add, update, and track tasks easily in one place. The interface is clean and user-friendly for smooth task organization. It helps users stay productive by keeping tasks structured and accessible. The app focuses on simplicity and efficient task management.",
    tech: ["React.js", "Node.js", "TypeScript", "Express", "REST API", "MongoDB", "Fetch API"],
    githubUrl: "https://github.com/ajit202006/Todo-Application",
    liveUrl: "https://task-buddy-gray.vercel.app/",
    featured: false,
  },
  {
    title: "Quizriousity (Not Live)",
    description:
      "A quiz application with result tracking and review system",
    longDescription:
      "This is a quiz manager application created using MERN technologies. As a user you can add quizzes which others can attempt OR you can attempt quizzes created by other users. Also if attempted, you can give review with rating and feedback in the review section of the quiz.",
    tech: ["MongoDB", "React", "Node.js", "Express", "Rest API", "JWT", "Fetch API"],
    githubUrl: "https://github.com/ajit202006/Quizriousity",
    liveUrl: "#",
    featured: false,
  },
];

// ── Stats (Hero section) ─────────────────────────────────────
// export const stats = [
//   { label: "Year Experience", value: "1+" },
//   { label: "Projects Published", value: "5+" },
//   { label: "LeetCode Solved", value: "100+" },
//   { label: "UI designed", value: "20+" },
// ];
