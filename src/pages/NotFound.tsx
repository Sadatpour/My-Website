import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Helper function to fix TypeScript errors with t function
const useTranslate = () => {
  const { t: originalT } = useTranslation();
  // @ts-ignore
  const t = (key: string) => originalT(key);
  return { t };
};

const NotFound: React.FC = () => {
  const { t } = useTranslate();

  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist."
        noIndex={true}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-[#E6E7EE] dark:bg-gray-900 px-4">
        <div className="max-w-md w-full neumorph-card p-8 text-center">
          <h1 className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            {t('notFound.title') || 'Page Not Found'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('notFound.message') || 'The page you are looking for does not exist or has been moved.'}
          </p>
          <Link 
            to="/" 
            className="neumorph-btn px-6 py-3 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium inline-block"
            aria-label="Return to homepage"
          >
            {t('notFound.backHome') || 'Back to Homepage'}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound; 