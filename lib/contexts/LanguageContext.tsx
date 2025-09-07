"use client";

import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

const translations: Translations = {
  hero: {
    fr: "créez votre idée",
    en: "create your idea"
  },
  heroSubtitle: {
    fr: "Transformez vos idées créatives en réalité avec notre plateforme innovante. Rejoignez des milliers de créateurs qui font confiance à YousMedia.",
    en: "Transform your creative ideas into reality with our innovative platform. Join thousands of creators who trust YousMedia."
  },
  getStarted: {
    fr: "Commencer",
    en: "Get Started"
  },
  watchDemo: {
    fr: "Voir la démo",
    en: "Watch Demo"
  },
  features: {
    fr: "Fonctionnalités",
    en: "Features"
  },
  featuresTitle: {
    fr: "Tout ce dont vous avez besoin pour créer",
    en: "Everything you need to create"
  },
  featuresSubtitle: {
    fr: "Des outils puissants et intuitifs pour donner vie à vos idées créatives",
    en: "Powerful and intuitive tools to bring your creative ideas to life"
  },
  creativeTools: {
    fr: "Outils Créatifs",
    en: "Creative Tools"
  },
  creativeToolsDesc: {
    fr: "Suite complète d'outils de création pour tous vos besoins artistiques",
    en: "Complete suite of creation tools for all your artistic needs"
  },
  collaboration: {
    fr: "Collaboration",
    en: "Collaboration"
  },
  collaborationDesc: {
    fr: "Travaillez en équipe en temps réel sur vos projets créatifs",
    en: "Work in real-time with your team on creative projects"
  },
  cloudSync: {
    fr: "Sync Cloud",
    en: "Cloud Sync"
  },
  cloudSyncDesc: {
    fr: "Vos créations synchronisées sur tous vos appareils",
    en: "Your creations synced across all your devices"
  },
  about: {
    fr: "À Propos",
    en: "About"
  },
  aboutTitle: {
    fr: "Notre Mission",
    en: "Our Mission"
  },
  aboutText: {
    fr: "Chez YousMedia, nous croyons que chaque personne a une histoire unique à raconter. Notre mission est de fournir les outils et la plateforme nécessaires pour que vous puissiez exprimer votre créativité sans limites.",
    en: "At YousMedia, we believe that every person has a unique story to tell. Our mission is to provide the tools and platform needed for you to express your creativity without limits."
  },
  contact: {
    fr: "Contact",
    en: "Contact"
  },
  contactTitle: {
    fr: "Prêt à commencer ?",
    en: "Ready to get started?"
  },
  contactText: {
    fr: "Rejoignez notre communauté de créateurs et donnez vie à vos idées dès aujourd'hui.",
    en: "Join our community of creators and bring your ideas to life today."
  },
  name: {
    fr: "Nom complet",
    en: "Full Name"
  },
  company: {
    fr: "Entreprise",
    en: "Company"
  },
  phone: {
    fr: "Téléphone",
    en: "Phone"
  },
  message: {
    fr: "Message",
    en: "Message"
  },
  send: {
    fr: "Envoyer",
    en: "Send"
  },
  messageSent: {
    fr: "Message envoyé avec succès!",
    en: "Message sent successfully!"
  },
  messageError: {
    fr: "Erreur lors de l'envoi du message",
    en: "Error sending message"
  },
  email: {
    fr: "Votre email",
    en: "Your email"
  },
  subscribe: {
    fr: "S'abonner",
    en: "Subscribe"
  },
  portfolio: {
    fr: "Portfolio",
    en: "Portfolio"
  },
  portfolioTitle: {
    fr: "Nos Réalisations",
    en: "Our Work"
  },
  portfolioSubtitle: {
    fr: "Découvrez quelques-uns de nos projets les plus remarquables",
    en: "Discover some of our most remarkable projects"
  },
  viewProject: {
    fr: "Voir le projet",
    en: "View Project"
  },
  backHome: {
    fr: "Retour à l'accueil",
    en: "Back to Home"
  },
  rights: {
    fr: "Tous droits réservés",
    en: "All rights reserved"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
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