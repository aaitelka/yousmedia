"use client";

import React, { createContext, useContext, useState } from 'react';
import { fr } from '@/lib/translations/fr';
import { en } from '@/lib/translations/en';

type Language = 'fr' | 'en';

const translations = { fr, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (section: string, key: string): string => {
    const sectionTranslations = translations[language][section as keyof typeof translations[Language]];
    if (sectionTranslations && typeof sectionTranslations === 'object') {
      return (sectionTranslations as any)[key] || `${section}.${key}`;
    }
    return `${section}.${key}`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}