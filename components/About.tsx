"use client";

import { useLanguage } from '@/lib/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';

export default function About() {
  const { t } = useLanguage();

return (
  <section id="about" className="pt-20 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-blue-900/10"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-100 to-primary-300 bg-clip-text text-transparent">
            {t('about', 'title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xl max-w-3xl mx-auto">
            {t('about', 'text')}
          </p>
        </div>

        {/* Grid for Who / Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who We Are */}
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-primary-200 mb-3">
              {t('about', 'who')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about', 'whoText')}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-primary-200 mb-3">
              {t('about', 'mission')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about', 'missionText')}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-primary-200 mb-3">
              {t('about', 'vision')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about', 'visionText')}
            </p>
          </div>

          {/* Values */}
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-primary-200 mb-3">
              {t('about', 'values')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about', 'valuesText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

}