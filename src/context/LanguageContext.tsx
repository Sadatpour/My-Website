import React, { createContext, useState, useContext, ReactNode } from 'react';
import i18n from '../i18n';

// Define the supported languages and their text direction
export const languages = {
  en: { name: 'English', dir: 'ltr' as const },
  fa: { name: 'فارسی', dir: 'rtl' as const },
  ar: { name: 'العربية', dir: 'rtl' as const },
  tr: { name: 'Türkçe', dir: 'ltr' as const },
  de: { name: 'Deutsch', dir: 'ltr' as const },
};

type LanguageType = keyof typeof languages;

interface LanguageContextType {
  currentLanguage: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
  direction: 'ltr' | 'rtl';
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageType>('en');

  const changeLanguage = (lang: LanguageType) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    document.documentElement.dir = languages[lang].dir;
    document.documentElement.lang = lang;
    
    // Apply Kalameh font for Persian language
    const head = document.head;
    let style = document.getElementById('persian-font-style') as HTMLStyleElement;
    
    if (!style) {
      style = document.createElement('style');
      style.id = 'persian-font-style';
      head.appendChild(style);
    }
    
    if (lang === 'fa') {
      style.innerHTML = `
        html[lang="fa"], html[lang="fa"] * {
          font-family: 'Kalameh', sans-serif !important;
        }
      `;
    } else {
      style.innerHTML = '';
    }
  };

  const value = {
    currentLanguage,
    changeLanguage,
    direction: languages[currentLanguage].dir,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 