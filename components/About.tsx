"use client";

import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t('aboutTitle')}
            </h2>
          </div>

          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg md:prose-xl prose-purple dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-xl">
                {t('aboutText')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-gray-600 dark:text-gray-400">Créateurs actifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600 dark:text-gray-400">Projets créés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
                <div className="text-gray-600 dark:text-gray-400">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}