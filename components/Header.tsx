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
          <div className="flex items-center space-x-2 cursor-pointer">
               <img
              src="/YousMedia-300x80.png"
              alt="YousMedia"
              className="h-8 w-auto"
            />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {t('features')}
            </button>
            <button
              onClick={navigateToPortfolio}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {t('about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {t('contact')}
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
                <div className="w-6 h-4 bg-blue-600 relative overflow-hidden rounded-sm">
                  <div className="w-2 h-full bg-white absolute left-0"></div>
                  <div className="w-2 h-full bg-red-600 absolute right-0"></div>
                </div>
              ) : (
                <div className="w-6 h-4 relative overflow-hidden rounded-sm">
                  <div className="w-full h-full bg-blue-800"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-0.5 bg-white transform rotate-45"></div>
                    <div className="w-3 h-0.5 bg-white transform -rotate-45 absolute"></div>
                  </div>
                  <div className="w-full h-1 bg-red-600 absolute bottom-0"></div>
                  <div className="w-full h-1 bg-white absolute bottom-1"></div>
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
              onClick={() => scrollToSection('hero')}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t('features')}
            </button>
            <button
              onClick={navigateToPortfolio}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t('about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t('contact')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}