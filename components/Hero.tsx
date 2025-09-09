"use client";

import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from "typewriter-effect";
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-secondary-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
      {/* Cyan/Blue blob */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-[#00CFFF] to-[#29ABE2] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>

      {/* Orange/Yellow blob */}
      <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-tr from-[#FF9900] to-[#FFB347] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>

      {/* Pink/Red blob */}
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#FF2D55] to-[#FF5F7E] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-center z-10">
                <Typewriter
                  key={t('hero', 'title')}
                  options={{
                    wrapperClassName: "Typewriter__wrapper",
                    cursorClassName: "Typewriter__cursor",
                    delay: 50,
                    loop: false,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `<span class='bg-gradient-to-r from-primary-400 via-secondary-400 to-[#ff9900] bg-clip-text text-transparent'>YousMedia</span>`
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        `${t('hero', 'title')} <span class='bg-gradient-to-r from-primary-400 via-secondary-400 to-[#ff9900] bg-clip-text text-transparent'>${
                          t('hero', 'titleHighlight'
                        )}</span> ${t('hero', 'titleEnd')}`
                      )
                      .start();
                  }}
                />
              </h1>
          </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}