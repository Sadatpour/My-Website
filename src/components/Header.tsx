import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaSun, 
  FaMoon,
  FaInstagram,
  FaTelegram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';
import { useLanguage, languages } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SOCIAL_LINKS } from '../types';

// Helper function to fix TypeScript errors with t function
const useTranslate = () => {
  const { t: originalT } = useTranslation();
  // @ts-ignore
  const t = (key: string) => originalT(key);
  return { t };
};

const CircleLogo: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center neumorph-btn rounded-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-[#E6E7EE] dark:bg-gray-800">
        <img 
          src="/images/logo.png" 
          alt="Sadatpour Logo" 
          className="w-9 h-9 md:w-11 md:h-11 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error("Logo image failed to load");
          }}
        />
      </div>
    </div>
  );
};

// Mapping function for social icons
const getIconComponent = (iconName: string, size = 16) => {
  switch (iconName) {
    case 'FaInstagram':
      return <FaInstagram size={size} />;
    case 'FaTelegram':
      return <FaTelegram size={size} />;
    case 'FaGithub':
      return <FaGithub size={size} />;
    case 'FaLinkedin':
      return <FaLinkedin size={size} />;
    case 'FaWhatsapp':
      return <FaWhatsapp size={size} />;
    default:
      return null;
  }
};

const Header: React.FC = () => {
  const { t } = useTranslate();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if page is scrolled to add background to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  // Filter social links to show only the top 4 for header
  const headerSocialLinks = SOCIAL_LINKS.slice(0, 4);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-md' : 'py-5'
      } ${
        theme === 'dark'
          ? 'bg-gray-900 text-gray-100'
          : isScrolled
          ? 'bg-[#E6E7EE] text-gray-800'
          : 'bg-transparent text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="#hero" className="flex items-center space-x-3" aria-label="Logo">
            <CircleLogo />
            <span className="text-xl font-bold">Sadatpour</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="neumorph-btn px-4 py-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
          >
            {t('header.home')}
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="neumorph-btn px-4 py-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
          >
            {t('header.skills')}
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="neumorph-btn px-4 py-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
          >
            {t('header.projects')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="neumorph-btn px-4 py-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
          >
            {t('header.contact')}
          </button>
        </nav>

        {/* Desktop Right Section: Social Links, Theme Toggle, Language Selector */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Social Links */}
          <div className="flex space-x-2">
            {headerSocialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neumorph-btn w-9 h-9 flex items-center justify-center text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                aria-label={link.name}
              >
                {getIconComponent(link.icon, 16)}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="neumorph-btn w-9 h-9 flex items-center justify-center text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          {/* Language Selector */}
          <div className="relative group">
            <button className="neumorph-btn px-4 py-2 flex items-center space-x-1 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <span>{languages[currentLanguage].name}</span>
            </button>
            <div className="absolute right-0 top-full mt-1 w-32 bg-[#E6E7EE] dark:bg-gray-800 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 neumorph-card">
              {Object.entries(languages).map(([code, { name }]) => (
                <button
                  key={code}
                  onClick={() => changeLanguage(code as keyof typeof languages)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    currentLanguage === code 
                      ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400' 
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  } dark:text-gray-300`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle - Mobile */}
          <button 
            onClick={toggleTheme} 
            className="neumorph-btn w-9 h-9 flex items-center justify-center text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          {/* Menu Toggle - Mobile */}
          <button 
            className="neumorph-btn w-9 h-9 flex items-center justify-center text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#E6E7EE] dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="neumorph-btn px-4 py-2 text-left text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
          >
            {t('header.home')}
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="neumorph-btn px-4 py-2 text-left text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
          >
            {t('header.skills')}
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="neumorph-btn px-4 py-2 text-left text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
          >
            {t('header.projects')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="neumorph-btn px-4 py-2 text-left text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
          >
            {t('header.contact')}
          </button>

          {/* Social Links - Mobile */}
          <div className="py-2 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Social Links</p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neumorph-btn w-9 h-9 flex items-center justify-center text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  aria-label={link.name}
                >
                  {getIconComponent(link.icon, 16)}
                </a>
              ))}
            </div>
          </div>

          {/* Language Selector - Mobile */}
          <div className="py-2 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t('header.language')}</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(languages).map(([code, { name }]) => (
                <button
                  key={code}
                  onClick={() => {
                    changeLanguage(code as keyof typeof languages);
                    closeMenu();
                  }}
                  className={`neumorph-btn text-left px-3 py-2 text-sm rounded ${
                    currentLanguage === code 
                      ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400' 
                      : 'bg-[#E6E7EE] hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header; 