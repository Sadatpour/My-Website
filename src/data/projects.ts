/**
 * Project Data File
 * 
 * This file contains all project data for the portfolio.
 * It's easy to add, edit, or remove projects by modifying this file.
 */

// Define the Project interface with all possible properties
export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  image?: string;
  tags?: string[];
  year?: number;
  client?: string;
  category?: string;
  featured?: boolean;
  github?: string;
}

/**
 * Projects Array
 * 
 * To add a new project:
 * 1. Copy an existing project object
 * 2. Update the properties with your new project info
 * 3. Make sure to increment the ID
 * 4. Add any tags that are relevant to the project
 */
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Unique Cut',
    description: 'Professional Hair Salon Website',
    url: 'https://uniquecut.ca/',
    image: '/images/uniquecut.jpg',
    tags: ['WordPress', 'CSS', 'Responsive'],
    year: 2023,
    category: 'Business',
    featured: true
  },
  {
    id: 2,
    title: 'Cyra Beauty',
    description: 'Beauty Products Website',
    url: 'https://cyrabeauty.ca',
    image: '/images/cyrabeauty.jpg',
    tags: ['WordPress', 'WooCommerce', 'CSS'],
    year: 2023,
    category: 'E-commerce'
  },
  {
    id: 3,
    title: 'Chameleon BC',
    description: 'Business Consulting Website',
    url: 'https://chameleonbc.com',
    image: '/images/chameleonbc.jpg',
    tags: ['WordPress', 'Elementor', 'CSS'],
    year: 2022,
    category: 'Business'
  },
  {
    id: 4,
    title: 'Simply Travel & Tour',
    description: 'Travel Agency Website',
    url: 'https://simplytravelandtour.com',
    image: '/images/simplytravelandtour.jpg',
    tags: ['WordPress', 'Booking System', 'CSS'],
    year: 2022,
    category: 'Travel'
  },
  {
    id: 5,
    title: 'Unex Safety',
    description: 'Safety Equipment Website',
    url: 'https://unexsafety.com',
    image: '/images/unexsafety.jpg',
    tags: ['WordPress', 'WooCommerce', 'CSS'],
    year: 2022,
    category: 'E-commerce'
  },
  {
    id: 6,
    title: 'MSI Farsi',
    description: 'Computer Company Website',
    url: 'https://msifarsi.com',
    image: '/images/msifarsi.jpg',
    tags: ['WordPress', 'Community', 'Custom Theme'],
    year: 2021,
    category: 'Gaming'
  },
  {
    id: 7,
    title: 'MSI Club',
    description: 'MSI Club Website',
    url: 'https://club.msifarsi.com',
    image: '/images/msiclub.jpg',
    tags: ['Laravel', 'Membership', 'CSS'],
    year: 2021,
    category: 'Gaming'
  },
  {
    id: 8,
    title: 'Mirrogene',
    description: 'Health Technology Website',
    url: 'https://mirrogene.com',
    image: '/images/mirrogene.jpg',
    tags: ['WordPress', 'Health', 'CSS'],
    year: 2021,
    category: 'Health'
  },
  {
    id: 9,
    title: 'Mirrogene Panel',
    description: 'Admin Panel',
    url: 'https://panel.mirrogene.com',
    image: '/images/mirrogene-panel.jpg',
    tags: ['Laravel', 'Dashboard', 'Admin'],
    year: 2021,
    category: 'Web App'
  },
  {
    id: 10,
    title: 'Rangineh Decoration',
    description: 'Interior Design Website',
    url: 'https://ranginehdecoration.ir',
    image: '/images/ranginehdecoration.jpg',
    tags: ['WordPress', 'CSS', 'Portfolio'],
    year: 2020,
    category: 'Design'
  },
  {
    id: 11,
    title: 'Hub Game Store',
    description: 'Game Store Website',
    url: 'https://hubgamestore.com/',
    image: '/images/hubgamestore.jpg',
    tags: ['WordPress', 'WooCommerce', 'Digital Products'],
    year: 2020,
    category: 'E-commerce'
  },
  {
    id: 12,
    title: 'Pejvak Co',
    description: 'Business Website',
    url: 'https://pejvakco.com',
    image: '/images/pejvakco.jpg',
    tags: ['WordPress', 'Business', 'CSS'],
    year: 2020,
    category: 'Business'
  },
  {
    id: 13,
    title: 'Parchat',
    description: 'Business Website',
    url: 'https://parchat.net',
    image: '/images/parchat.jpg',
    tags: ['React', 'Firebase', 'Real-time'],
    year: 2019,
    category: 'Web App'
  },
  {
    id: 14,
    title: 'Owj Digital',
    description: 'Digital Agency Website',
    url: 'https://owjdigital.com',
    image: '/images/owjdigital.jpg',
    tags: ['WordPress', 'Agency', 'Portfolio'],
    year: 2019,
    category: 'Business'
  },
  {
    id: 15,
    title: 'Sadatpour',
    description: 'Personal Website',
    url: 'https://sadatpour.com',
    image: '/images/sadatpour.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    year: 2023,
    category: 'Portfolio',
    featured: true
  },
  
  // Add new projects below - this makes it easy to add new projects
  /*
  {
    id: 16,
    title: 'New Project',
    description: 'Description of your new project',
    url: 'https://projecturl.com',
    image: '/images/projectimage.jpg',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    year: 2023,
    category: 'Category',
    featured: false,
    github: 'https://github.com/username/repo' // optional GitHub link
  },
  */
]; 