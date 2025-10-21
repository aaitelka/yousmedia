"use client";

import { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTheme } from '@/lib/contexts/ThemeContext';
import LanguageSelector from '@/components/LanguageSelector';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  description: {
    fr: string;
    en: string;
  };
  image: string;
  tags: string[];
  date: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'design' | 'branding';
}

const projects: Project[] = [
  {
    id: 1,
    title: "MASDAC",
    description: {
      fr: "Site institutionnel moderne pour la Moroccan Agency of Services Development And Consulting. Design corporate et interface professionnelle.",
      en: "Modern institutional website for the Moroccan Agency of Services Development And Consulting. Corporate design and professional interface."
    },
    image: "./masdac-portfolio.jpeg",
    tags: ["Wordpress", "Elementor"],
    date: "2024",
    category: "web",
    liveUrl: "https://www.masdac.ma",
  },
  {
    id: 2,
    title: "Difaf Assurance",
    description: {
      fr: "Plateforme d’assurance intuitive avec gestion des offres et demandes de devis en ligne.",
      en: "Intuitive insurance platform with offers management and online quote requests."
    },
    image: "./difaf-portfolio.jpeg",
    tags: ["Express", "AngularJS", "TypeScript", "Firebase"],
    date: "2024",
    category: "web",
    liveUrl: "https://www.difafassurance.ma"
  },
  {
    id: 3,
    title: "WeSurfSkate Morocco",
    description: {
      fr: "Site dynamique pour un camp de surf & skate, intégrant réservations et expériences clients.",
      en: "Dynamic website for a surf & skate camp, integrating bookings and customer experiences."
    },
    image: "./we-skate-surf-portfolio.jpeg",
    tags: ["Branding", "Logo Design", "UI/UX"],
    date: "2023",
    category: "branding",
    liveUrl: "https://www.wesurfskatemorocco.com"
  },
  {
    id: 4,
    title: "GoNaji Restaurant",
    description: {
      fr: "Tableau de bord analytique pour plateforme SaaS avec visualisations avancées",
      en: "Analytics dashboard for SaaS platform with advanced visualizations"
    },
    image: "./go-naji-portfolio.jpeg",
    tags: ["Wordpress", "UI Design", "Prototyping"],
    date: "2023",
    category: "web",
    liveUrl: "https://www.gonaji.com"
  },
  {
    id: 5,
    title: "Wave Chaser Surfhouse",
    description: {
      fr: "Site web responsive pour chaîne de restaurants avec système de réservation",
      en: "Responsive website for restaurant chain with reservation system"
    },
    image: "./wave-chaser-surfhouse-portfolio.jpeg",
    tags: ["Wordpress", "UI Design", "Prototyping"],
    date: "2023",
    category: "web",
    liveUrl: "https://www.wavechasermorocco.com"
  },
  {
    id: 6,
    title: "Era Bio Energy",
    description: {
      fr: "Site professionnel dans le domaine de l’énergie solaire, valorisant l’innovation et les solutions écologiques.",
      en: "Professional website in the solar energy field, highlighting innovation and eco-friendly solutions."
    },
    image: "./era-bio-energy-portfolio.jpeg",
    tags: ["Wordpress", "UI Design", "Prototyping"],
    date: "2023",
    category: "web",
    liveUrl: "https://www.erabioenergy.com"
  },
  {
    id: 7,
    title: "FPS Maroc",
    description: {
      fr: "Entreprise spécialisée en solutions gaz et fluides. Site corporate avec mise en avant des projets et expertises.",
      en: "Company specialized in gas and fluid solutions. Corporate site highlighting projects and expertise."
    },
    image: "./fps-maroc-portfolio.jpeg",
    tags: ["Wordpress", "UI Design", "Prototyping"],
    date: "2023",
    category: "web",
    liveUrl: "https://www.fpsmaroc.com"
  },
  {
    id: 8,
    title: "TamraZen Retreat",
    description: {
      fr: "Camp de surf, yoga et skate à Tamraght, avec système de réservation intégré et contenu immersif.",
      en: "Surf, yoga, and skate retreat in Tamraght, with integrated booking system and immersive content."
    },
    image: "./tamra-zen-retreat-portfolio.jpeg",
    tags: ["Wordpress", "UI Design", "Prototyping"],
    date: "2023",
    category: "web",
    liveUrl: "https://www.tamrazen.com"
  }
];

export default function Portfolio() {
  const { t, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('portfolio', 'all') },
    { id: 'web', label: t('portfolio', 'web') },
    { id: 'mobile', label: t('portfolio', 'mobile') },
    { id: 'design', label: t('portfolio', 'design') },
    { id: 'branding', label: t('portfolio', 'branding') }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const goHome = () => {
    window.location.href = '/';
  };

  function setIsMenuOpen(arg0: boolean) {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={goHome}
                className="h-9 w-9"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <img
                src="/YousMedia-300x80.png"
                alt="YousMedia Logo"
                className="h-8 w-auto"
              />
            </div>

            <div className="flex items-center space-x-4">
            <LanguageSelector onSelectLanguage={() => setIsMenuOpen(false)} />

              {/* <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-100 to-primary-300 bg-clip-text text-transparent">
              {t('portfolio', 'title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('portfolio', 'subtitle')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-100 to-primary-300 text-white'
                    : 'border-primary-400/30 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-primary-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.liveUrl && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-primary-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t('portfolio', 'noProjects')}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}