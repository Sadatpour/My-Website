import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SKILLS, Skill } from '../data/skills';
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

const SkillCard: React.FC<{
  skill: Skill;
  index: number;
  theme: string;
}> = ({ skill, index, theme }) => {
  const { name, icon: Icon, color } = skill;
  
  return (
    <motion.div
      className="neumorph-card p-4 rounded-lg flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        className="w-16 h-16 flex items-center justify-center neumorph-btn rounded-full mb-2"
        whileHover={{ rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Icon
          size={32}
          style={{ color: theme === 'dark' ? color : color }}
        />
      </motion.div>
      <p className="text-center font-medium text-gray-800 dark:text-gray-200">{name}</p>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { t } = useTranslate();
  const { direction } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-20 bg-[#E6E7EE] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto neumorph-inset p-4">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 