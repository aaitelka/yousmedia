"use client";

import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/lib/contexts/ThemeContext';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigateToPortfolio = () => {
    window.location.href = '/portfolio';
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/YousMedia-300x80.png" 
                alt="YousMedia Logo" 
                className="h-8 w-auto animate-pulse"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {t('header', 'features')}
            </button>
            <button 
              onClick={navigateToPortfolio}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {t('header', 'portfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {t('header', 'about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {t('header', 'contact')}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="h-9 w-9 relative"
            >
              {language === 'fr' ? (
                <div className="w-6 h-4 relative overflow-hidden rounded-sm shadow-md">
                  <div className="w-full h-full bg-blue-600"></div>
                  <div className="w-2/3 h-full bg-white absolute left-1/3 top-0"></div>
                  <div className="w-1/3 h-full bg-red-600 absolute right-0 top-0"></div>
                </div>
              ) : (
                <div className="w-6 h-4 relative overflow-hidden rounded-sm shadow-md">
                  <div className="w-full h-full bg-red-600"></div>
                  <div className="w-full h-0.5 bg-white absolute top-0.5"></div>
                  <div className="w-full h-0.5 bg-white absolute top-1"></div>
                  <div className="w-full h-0.5 bg-white absolute top-1.5"></div>
                  <div className="w-full h-0.5 bg-white absolute top-2"></div>
                  <div className="w-full h-0.5 bg-white absolute top-2.5"></div>
                  <div className="w-full h-0.5 bg-white absolute top-3"></div>
                  <div className="w-full h-0.5 bg-white absolute top-3.5"></div>
                  <div className="w-2.5 h-2 bg-blue-800 absolute top-0 left-0">
                    <div className="w-0.5 h-0.5 bg-white absolute top-0.5 left-0.5"></div>
                  </div>
                </div>
              )}
              <span className="sr-only">Toggle language</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-4 h-4">
                <Menu className={`h-4 w-4 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`h-4 w-4 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </Button>
          </div>
        </div>

        <div className={`md:hidden border-t border-white/20 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t('header', 'features')}
            </button>
            <button 
              onClick={navigateToPortfolio}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t('header', 'portfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t('header', 'about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t('header', 'contact')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}