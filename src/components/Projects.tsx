import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS, Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
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
import { FaBrain, FaCode, FaColumns, FaPaintBrush, FaHandshake, FaSearch, FaMobileAlt } from 'react-icons/fa';

// Helper function to fix TypeScript errors with t function
const useTranslate = () => {
  const { t: originalT } = useTranslation();
  // @ts-ignore
  const t = (key: string) => originalT(key);
  return { t };
};

// Skill icons array for abstract background
const skillIcons = [
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
  FaCode, 
  SiVisualstudiocode,
  SiGoogleanalytics, 
  FaBrain, 
  SiNx, 
  FaColumns, 
  FaPaintBrush,
  SiFigma,
  FaHandshake,
  FaSearch, 
  FaMobileAlt, 
  SiLighthouse
];

// Colors for the icons
const skillColors = [
  '#21759b', // WordPress
  '#5091cd', // Joomla
  '#df0067', // PrestaShop
  '#0678be', // Drupal
  '#f7df1e', // JavaScript
  '#61dafb', // React
  '#f05032', // Git
  '#38b2ac', // Tailwind
  '#e34f26', // HTML5
  '#1572b6', // CSS3
  '#7952b3', // Bootstrap
  '#000000', // Next.js
  '#4b32c3', // Cursor Editor
  '#007acc', // VS Code
  '#e37400', // Google Studio
  '#6e44ff', // AI Agent
  '#143055', // NX
  '#2d7eb7', // Flex & Grid
  '#ff7262', // UI & UX
  '#f24e1e', // Figma
  '#0077b5', // Business Consulting
  '#47bec7', // SEO
  '#ff6b6b', // Responsive Design
  '#f1c40f', // Web Performance
];

// Abstract background component for project cards
const AbstractBackground: React.FC<{ title: string }> = ({ title }) => {
  const { theme } = useTheme();
  const iconSize = 24;
  
  // Use the project title to generate a consistent pattern
  const seed = title.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
  // Create a grid of icons (4x4)
  const gridSize = 4;
  const icons: ReactNode[] = [];
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    const iconIndex = (seed + i) % skillIcons.length;
    const Icon = skillIcons[iconIndex];
    const color = skillColors[iconIndex];
    const x = (i % gridSize) * (100 / gridSize);
    const y = Math.floor(i / gridSize) * (100 / gridSize);
    const rotation = ((seed + i) * 7) % 360;
    const opacity = 0.15 + ((seed + i) % 7) * 0.05;
    
    icons.push(
      <div 
        key={i} 
        style={{
          position: 'absolute',
          left: `${x}%`,
          top: `${y}%`,
          transform: `rotate(${rotation}deg)`,
          opacity: opacity,
          color: color,
        }}
      >
        <Icon size={iconSize} />
      </div>
    );
  }
  
  return (
    <div 
      className="w-full h-full relative flex items-center justify-center"
      style={{
        backgroundColor: theme === 'dark' ? '#2D3748' : '#F0F1F7',
        overflow: 'hidden',
      }}
    >
      {icons}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(26, 32, 44, 0.5)' : 'rgba(255, 255, 255, 0.5)'
        }}
      >
        <h3 className="text-xl font-bold text-center px-4 py-2 rounded z-10">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t } = useTranslate();
  const { direction } = useLanguage();
  const { theme } = useTheme();
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  
  // For debugging - log the number of projects
  useEffect(() => {
    console.log(`Total projects: ${PROJECTS.length}, Visible: ${visibleProjects}`);
  }, [visibleProjects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const showMoreProjects = () => {
    const newCount = Math.min(visibleProjects + 6, PROJECTS.length);
    console.log(`Showing more projects: ${visibleProjects} -> ${newCount}`);
    setVisibleProjects(newCount);
  };

  // Make sure we show the correct projects based on visibleProjects state
  const projectsToShow = PROJECTS.slice(0, visibleProjects) as Project[];

  return (
    <section id="projects" className="py-20 bg-[#E6E7EE] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-[#1F2937] dark:text-gray-300 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projectsToShow.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="neumorph-card overflow-hidden group"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative h-48 overflow-hidden">
                    <AbstractBackground title={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-end items-center">
                          <FaExternalLinkAlt size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#1F2937] dark:text-white mb-2">{project.title}</h3>
                    <p className="text-[#1F2937] dark:text-gray-300">{project.description}</p>
                    {project.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-2 py-1 text-xs rounded-md neumorph-btn text-[#1F2937] dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleProjects < PROJECTS.length && (
          <div className="mt-12 text-center">
            <button
              onClick={showMoreProjects}
              className="neumorph-btn px-6 py-3 font-medium"
            >
              {t('projects.seeMore')} ({visibleProjects}/{PROJECTS.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 