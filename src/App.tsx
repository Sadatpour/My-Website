import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import NotFound from './pages/NotFound';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

// Helper function to fix TypeScript errors with t function
const useTranslate = () => {
  const { t: originalT, i18n } = useTranslation();
  // @ts-ignore
  const t = (key: string) => originalT(key);
  return { t, i18n };
};

const HomePage: React.FC = () => {
  const { i18n } = useTranslate();
  const { direction } = useLanguage();

  useEffect(() => {
    // Set the document direction based on the current language
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <div dir={direction} lang={i18n.language} className="min-h-screen">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Structured Data for Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mojtaba Sadatpour",
          "url": "https://www.sadatpour.com",
          "jobTitle": "Front-End Developer",
          "sameAs": [
            "https://github.com/sadatpour",
            "https://linkedin.com/in/sadatpour"
          ],
          "image": "https://www.sadatpour.com/profile-image.jpg"
        })}
      </script>

      {/* Structured Data for WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Mojtaba Sadatpour Portfolio",
          "url": "https://www.sadatpour.com",
          "description": "Portfolio website of Mojtaba Sadatpour, a Front-End Developer specializing in React and modern web technologies."
        })}
      </script>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
