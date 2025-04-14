import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

// Helper function to fix TypeScript errors with t function
const useTranslate = () => {
  const { t: originalT, i18n } = useTranslation();
  // @ts-ignore
  const t = (key: string) => originalT(key);
  return { t, i18n };
};

const AppContent: React.FC = () => {
  const { i18n } = useTranslate();
  const { direction } = useLanguage();

  useEffect(() => {
    // Set the document direction based on the current language
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <div dir={direction} lang={i18n.language} className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
