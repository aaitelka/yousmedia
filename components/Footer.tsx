"use client";

import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-white/20 backdrop-blur-sm bg-white/5 dark:bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            YousMedia
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            © 2025 YousMedia. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}