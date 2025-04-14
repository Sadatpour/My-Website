import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaInstagram, 
  FaTelegram, 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhone,
  FaHeart 
} from 'react-icons/fa';
import { SOCIAL_LINKS } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

// Helper function to fix TypeScript errors with t function
const useTranslate = () => {
  const { t: originalT } = useTranslation();
  // @ts-ignore
  const t = (key: string) => originalT(key);
  return { t };
};

const Footer: React.FC = () => {
  const { t } = useTranslate();
  const { direction } = useLanguage();
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  // Map icon strings to actual React components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'FaInstagram':
        return <FaInstagram size={16} />;
      case 'FaTelegram':
        return <FaTelegram size={16} />;
      case 'FaGithub':
        return <FaGithub size={16} />;
      case 'FaLinkedin':
        return <FaLinkedin size={16} />;
      case 'FaWhatsapp':
        return <FaWhatsapp size={16} />;
      case 'FaEnvelope':
        return <FaEnvelope size={16} />;
      case 'FaPhone':
        return <FaPhone size={16} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#E6E7EE] dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 neumorph-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sadatpour</h2>
            <p className="text-gray-600 dark:text-gray-400">Front-End Developer</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neumorph-btn w-10 h-10 flex items-center justify-center text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                aria-label={link.name}
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-white text-sm mb-4 md:mb-0 neumorph-inset p-2">
            &copy; {currentYear} Mojtaba Sadatpour. {t('footer.rights')}
          </p>
          <p className="text-gray-600 dark:text-white text-sm flex items-center neumorph-inset p-2">
            {t('footer.madeWith')} <FaHeart size={12} className="text-red-500 mx-1" /> & Moji
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 