import React from 'react';
import {
  FaInstagram,
  FaTelegram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';
import { SOCIAL_LINKS } from '../types';

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

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = "", iconSize = 16 }) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {SOCIAL_LINKS.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="neumorph-btn w-9 h-9 flex items-center justify-center text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
          aria-label={link.name}
        >
          {getIconComponent(link.icon, iconSize)}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 