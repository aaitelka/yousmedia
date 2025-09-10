import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../lib/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (code: "en" | "fr") => {
    setLanguage(code);
    setIsOpen(false); // close dropdown
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 h-8 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
      >
        <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-44 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50 overflow-hidden transition-all duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors duration-200 ${
                language === lang.code
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
