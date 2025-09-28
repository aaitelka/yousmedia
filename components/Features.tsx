"use client";

import { Code, Share2, Megaphone, PenTool, Search, Lightbulb } from "lucide-react";

import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: t('services', 'web'),
      description: t('services', 'webDesc'),
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: t('services', 'social'),
      description: t('services', 'socialDesc'),
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: t('services', 'ads'),
      description: t('services', 'adsDesc'),
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: t('services', 'branding'),
      description: t('services', 'brandingDesc'),
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: t('services', 'seo'),
      description: t('services', 'seoDesc'),
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('services', 'strategy'),
      description: t('services', 'strategyDesc'),
    }
  ];

  return (
    <section id="services" className="pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/10 to-transparent dark:via-primary-950/10"></div>

      <div className="container mx-auto px-4 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-100 to-primary-300 bg-clip-text text-transparent">
            {t('services', 'title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('services', 'subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:border-primary-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-300 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}