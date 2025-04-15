import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowDown, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import SEO from './SEO';

// Helper function to fix TypeScript errors with t function
const useTranslate = () => {
  const { t: originalT, i18n } = useTranslation();
  // @ts-ignore
  const t = (key: string) => originalT(key);
  return { t, i18n };
};

const Hero: React.FC = () => {
  const { t, i18n } = useTranslate();
  const { direction } = useLanguage();
  const { theme } = useTheme();
  const currentLanguage = i18n.language;
  const isRightAligned = currentLanguage === 'ar' || currentLanguage === 'fa';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Home" 
        description={t('hero.description')} 
        keywords="front-end developer, react, javascript, typescript, web development, portfolio"
      />
      
      <section id="hero" className="pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#E6E7EE] dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              className={`md:w-1/2 text-center md:text-left ${direction === 'rtl' ? 'md:order-2' : 'md:order-1'}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className={`w-full ${isRightAligned ? 'text-right' : ''}`}>
                <motion.p 
                  className="text-indigo-600 dark:text-indigo-400 font-medium mb-5 neumorph-btn px-4 py-2 inline-block mx-auto md:mx-0"
                  variants={itemVariants}
                >
                  {t('hero.greeting')}
                </motion.p>
                
                <motion.h1 
                  className={`text-4xl md:text-6xl font-bold text-[#1F2937] dark:text-white mt-6 mb-6 ${isRightAligned ? 'text-center md:text-right' : ''}`}
                  variants={itemVariants}
                >
                  {t('hero.name')}
                </motion.h1>
                
                <motion.h2 
                  className={`text-2xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6 mb-8 ${isRightAligned ? 'text-center md:text-right' : ''}`}
                  variants={itemVariants}
                >
                  {t('hero.title')}
                </motion.h2>
              </div>
              
              <motion.p 
                className={`text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl neumorph-inset p-4 mx-auto md:mx-0 ${isRightAligned ? 'text-right' : ''}`}
                variants={itemVariants}
              >
                {t('hero.description')}
              </motion.p>
              
              <motion.div
                className="flex items-center mb-2 w-full text-justify"
                variants={itemVariants}
              >
                <FaGraduationCap className="text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" size={20} aria-hidden="true" />
                <p className="text-gray-700 dark:text-gray-300">{t('hero.education')}</p>
              </motion.div>
              
              <motion.div
                className="flex items-center mb-6 w-full text-justify"
                variants={itemVariants}
              >
                <FaLanguage className="text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" size={20} aria-hidden="true" />
                <p className="text-gray-700 dark:text-gray-300">{t('hero.languages')}</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center md:justify-start" 
                variants={itemVariants}
              >
                <button 
                  onClick={scrollToSkills}
                  className="neumorph-btn px-6 py-3 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
                  aria-label={t('skills.title')}
                >
                  {t('skills.title')}
                </button>
                
                <button 
                  onClick={scrollToProjects}
                  className="neumorph-btn px-6 py-3 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
                  aria-label={t('hero.viewProjects')}
                >
                  {t('hero.viewProjects')}
                </button>
                
                <a 
                  href="#contact" 
                  className="neumorph-btn px-6 py-3 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
                  aria-label={t('hero.contactMe')}
                >
                  {t('hero.contactMe')}
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className={`md:w-1/2 ${direction === 'rtl' ? 'md:order-1' : 'md:order-2'} hidden md:block`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full neumorph-card overflow-hidden flex items-center justify-center">
                  <img 
                    src="/images/logo.png" 
                    alt="Mojtaba Sadatpour Logo" 
                    className="w-48 h-48 md:w-60 md:h-60 object-contain"
                    style={{ opacity: 1 }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300?text=Mojtaba+Sadatpour';
                    }}
                  />
                </div>
                
                <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 blur-3xl opacity-30 top-10 -left-10" aria-hidden="true" />
              </div>
            </motion.div>
            
            {/* Mobile Logo (Smaller Version) */}
            <motion.div
              className="md:hidden w-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-40 h-40 mx-auto rounded-full neumorph-card overflow-hidden flex items-center justify-center">
                  <img 
                    src="/images/logo.png" 
                    alt="Mojtaba Sadatpour Logo" 
                    className="w-32 h-32 object-contain"
                    style={{ opacity: 1 }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300?text=Mojtaba+Sadatpour';
                    }}
                  />
                </div>
                <div className="absolute -z-10 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 blur-3xl opacity-30 top-6 -left-6" aria-hidden="true" />
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center mt-16 md:mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <button
              onClick={scrollToSkills}
              className="neumorph-btn w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
              aria-label="Scroll down to skills section"
            >
              <FaArrowDown size={16} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
