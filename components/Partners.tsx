'use client';

import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';

export default function Partners() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Partner list - only once!
  const partners = [

    { name: "Masdac", logo: "./masdac.png" },
    { name: "Sof Kitchen", logo: "./sofkitchen.jpg" },
    { name: "Amazon", logo: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Apple", logo: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Masdac", logo: "./masdac.png" },
    { name: "Sof Kitchen", logo: "./sofkitchen.jpg" },
    { name: "Amazon", logo: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Apple", logo: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Masdac", logo: "./masdac.png" },
    { name: "Sof Kitchen", logo: "./sofkitchen.jpg" },
    { name: "Amazon", logo: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Apple", logo: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
  ];

  useEffect(() => {
    function checkWidth() {
      if (!scrollRef.current) return;
      const contentWidth = scrollRef.current.scrollWidth;
      const containerWidth = scrollRef.current.parentElement?.offsetWidth || 0;

      setShouldAnimate(contentWidth > containerWidth);
    }

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary-600 bg-clip-text text-transparent">
            {t('partners', 'title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t('partners', 'subtitle')}
          </p>
        </div>

        <div className="overflow-hidden p-4 group">
        <div
            ref={scrollRef}
            className={`flex gap-8 w-max ${
            shouldAnimate ? 'carousel-animation' : 'mx-auto'
            }`}
        >
            {partners.map((partner, index) => (
            <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-36 partner-card group/item"
            >
                <div className="w-36 h-36 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center p-4 hover:border-primary-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-300 opacity-70 group-hover/item:opacity-100"
                    loading="lazy"
                />
                </div>
                <p className="text-center mt-3 text-sm font-medium text-gray-600 dark:text-gray-200 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-300">
                {partner.name}
                </p>
            </div>
            ))}
        </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes infiniteCarousel {
            0% { 
              transform: translateX(0); 
            }
            100% { 
              transform: translateX(calc(-100% / 3)); 
            }
          }
          
          .carousel-animation {
            animation: infiniteCarousel 30s linear infinite;
          }

          /* Pause on hover */
          .group:hover .carousel-animation {
            animation-play-state: paused !important;
          }
        `
      }} />
    </section>
  );
}
