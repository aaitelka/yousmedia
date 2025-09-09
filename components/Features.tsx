"use client";

import { Palette, Users, Cloud } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: t('features', 'creativeTools'),
      description: t('features', 'creativeToolsDesc'),
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('features', 'collaboration'),
      description: t('features', 'collaborationDesc'),
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: t('features', 'cloudSync'),
      description: t('features', 'cloudSyncDesc'),
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/10 to-transparent dark:via-purple-950/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t('features', 'title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('features', 'subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center p-8 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}