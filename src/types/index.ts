// Social link type definition
export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

// Social links data
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/sadatpour',
    icon: 'FaInstagram'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/sadatpour',
    icon: 'FaTelegram'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sadatpour',
    icon: 'FaGithub'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sadatpour',
    icon: 'FaLinkedin'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/sadatpour',
    icon: 'FaWhatsapp'
  }
];

// Project type definition
export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  url: string;
  tags?: string[];
};

// Sample projects data
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    description: "A responsive personal website built with React, TypeScript, and Tailwind CSS.",
    url: "https://sadatpour.com",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management and cart functionality.",
    url: "https://github.com/sadatpour/ecommerce",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "WordPress Portfolio Theme",
    description: "A custom WordPress theme designed for creative professionals and portfolios.",
    url: "https://themeforest.net/user/sadatpour",
    tags: ["WordPress", "PHP", "CSS"]
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with team collaboration.",
    url: "https://github.com/sadatpour/task-manager",
    tags: ["React", "Firebase", "Material UI"]
  },
  {
    id: 5,
    title: "Restaurant Website",
    description: "A responsive website for a restaurant with online menu and reservation system.",
    url: "https://sadatpour.com/restaurant",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 6,
    title: "Weather App",
    description: "A weather forecast application with location-based services.",
    url: "https://github.com/sadatpour/weather-app",
    tags: ["React", "API", "CSS"]
  },
  {
    id: 7,
    title: "Custom CMS",
    description: "A lightweight content management system built from scratch.",
    url: "https://github.com/sadatpour/custom-cms",
    tags: ["PHP", "MySQL", "Bootstrap"]
  },
  {
    id: 8,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media performance.",
    url: "https://sadatpour.com/dashboard",
    tags: ["React", "Chart.js", "API"]
  },
  {
    id: 9,
    title: "Real Estate Website",
    description: "A property listing website with search and filter capabilities.",
    url: "https://github.com/sadatpour/real-estate",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 10,
    title: "Health & Fitness App",
    description: "A mobile app for tracking workouts and nutrition.",
    url: "https://github.com/sadatpour/fitness-app",
    tags: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 11,
    title: "Photography Portfolio",
    description: "A minimalist portfolio for photographers with image galleries.",
    url: "https://sadatpour.com/photography",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 12,
    title: "Blog Platform",
    description: "A custom blogging platform with admin panel and user management.",
    url: "https://github.com/sadatpour/blog-platform",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"]
  }
]; 