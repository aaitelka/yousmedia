"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navigateToPortfolio = () => {
    window.location.href = "/portfolio";
    setIsMenuOpen(false);
  };

  return (
      <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-3xl bg-white/10 dark:bg-black/20 text-black dark:text-white"
          : "bg-transparent text-white dark:text-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img
                src="/YousMedia-300x80.png"
                alt="YousMedia Logo"
                className="h-8 w-auto animate-pulse"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-100 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t("header", "services")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-100 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t("header", "about")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-100 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t("header", "contact")}
            </button>
            <button
              onClick={navigateToPortfolio}
              className="text-gray-100 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t("header", "portfolio")}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector onSelectLanguage={() => setIsMenuOpen(false)} />

            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4 text-white" />
              ) : (
                <Sun className="h-4 w-4 text-[#FFCD59]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button> */}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-4 h-4">
                <Menu
                  className={`h-4 w-4 absolute transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-0 rotate-180"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`h-4 w-4 absolute transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="block text-white dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t("header", "features")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-white dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t("header", "about")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-white dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t("header", "contact")}
            </button>
            <button
              onClick={navigateToPortfolio}
              className="block text-white dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:translate-x-2 duration-200"
            >
              {t("header", "portfolio")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
