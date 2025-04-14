import { Project } from './data/projects';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sadatpour',
    icon: 'FaInstagram',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Sadatpour',
    icon: 'FaTelegram',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Sadatpour',
    icon: 'FaGithub',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sadatpour/',
    icon: 'FaLinkedin',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+989120332037',
    icon: 'FaWhatsapp',
  },
  {
    name: 'Email',
    url: 'mailto:sadatpour.web@gmail.com',
    icon: 'FaEnvelope',
  },
  {
    name: 'Phone',
    url: 'tel:+989120332037',
    icon: 'FaPhone',
  },
]; 