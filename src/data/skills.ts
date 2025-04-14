/**
 * Skills Data File
 * 
 * This file contains all skill data for the portfolio.
 * It's easy to add, edit, or remove skills by modifying this file.
 */

import { 
  SiWordpress,
  SiJoomla, 
  SiPrestashop,
  SiDrupal,
  SiJavascript,
  SiReact,
  SiGit,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiNextdotjs,
  SiVisualstudiocode,
  SiGoogleanalytics,
  SiNx,
  SiFigma,
  SiLighthouse,
} from 'react-icons/si';
import { 
  FaBrain, 
  FaCode, 
  FaColumns, 
  FaPaintBrush, 
  FaHandshake, 
  FaSearch, 
  FaMobileAlt 
} from 'react-icons/fa';
import React from 'react';

// Define the Skill interface with all possible properties
export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  category?: string;
  level?: number; // 1-5 for beginner to expert
  yearsOfExperience?: number;
  description?: string;
  featured?: boolean;
}

/**
 * Skills Array
 * 
 * To add a new skill:
 * 1. Import the icon from react-icons (or use an existing one)
 * 2. Add a new entry to the array with the necessary properties
 * 3. Set a color that represents the skill
 * 4. Optionally add: category, level, yearsOfExperience, description, featured
 */
export const SKILLS: Skill[] = [
  { name: 'WordPress', icon: SiWordpress, color: '#21759b', category: 'CMS', level: 5, yearsOfExperience: 7 },
  { name: 'Joomla', icon: SiJoomla, color: '#5091cd', category: 'CMS', level: 4 },
  { name: 'PrestaShop', icon: SiPrestashop, color: '#df0067', category: 'E-commerce', level: 4 },
  { name: 'Drupal', icon: SiDrupal, color: '#0678be', category: 'CMS', level: 3 },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', category: 'Programming', level: 5, featured: true },
  { name: 'React', icon: SiReact, color: '#61dafb', category: 'Frontend', level: 5, featured: true },
  { name: 'Git', icon: SiGit, color: '#f05032', category: 'Dev Tools', level: 4 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38b2ac', category: 'CSS', level: 5, featured: true },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26', category: 'Frontend', level: 5 },
  { name: 'CSS3', icon: SiCss3, color: '#1572b6', category: 'Frontend', level: 5 },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3', category: 'CSS', level: 5 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend', level: 4, featured: true },
  { name: 'Cursor Editor', icon: FaCode, color: '#4b32c3', category: 'Dev Tools', level: 4 },
  { name: 'Visual Studio', icon: SiVisualstudiocode, color: '#007acc', category: 'Dev Tools', level: 4 },
  { name: 'Elementor', icon: SiWordpress, color: '#92003b', category: 'WordPress', level: 5 },
  { name: 'Google Studio', icon: SiGoogleanalytics, color: '#e37400', category: 'Analytics', level: 4 },
  { name: 'AI Agent', icon: FaBrain, color: '#6e44ff', category: 'AI', level: 4, featured: true },
  { name: 'NX', icon: SiNx, color: '#143055', category: 'Dev Tools', level: 3 },
  { name: 'Flex & Grid', icon: FaColumns, color: '#2d7eb7', category: 'CSS', level: 5 },
  { name: 'UI & UX', icon: FaPaintBrush, color: '#ff7262', category: 'Design', level: 4, featured: true },
  { name: 'Figma', icon: SiFigma, color: '#f24e1e', category: 'Design', level: 4 },
  { name: 'Online business consulting', icon: FaHandshake, color: '#0077b5', category: 'Business', level: 4 },
  { name: 'SEO', icon: FaSearch, color: '#47bec7', category: 'Marketing', level: 4, featured: true },
  { name: 'Responsive Design', icon: FaMobileAlt, color: '#ff6b6b', category: 'Design', level: 5 },
  { name: 'Web Performance', icon: SiLighthouse, color: '#f1c40f', category: 'Performance', level: 4 },
  // Add new skills below - this makes it easy to add new skills
  /*
  { 
    name: 'New Skill', 
    icon: IconComponent, 
    color: '#hexcolor', 
    category: 'Category',
    level: 3, // 1-5 scale
    yearsOfExperience: 2, 
    description: 'Brief description of your expertise with this skill',
    featured: false
  },
  */
]; 