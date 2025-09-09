"use client";

import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-white/20 backdrop-blur-sm bg-white/5 dark:bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/YousMedia-300x80.png" 
              alt="YousMedia Logo" 
              className="h-8 w-auto"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span>{t('footer', 'followUs')}</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 YousMedia. {t('footer', 'rights')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}