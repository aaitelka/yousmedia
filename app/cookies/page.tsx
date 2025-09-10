"use client";

import { useState } from 'react';
import { ArrowLeft, Cookie, Settings, Shield, BarChart, Target, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTheme } from '@/lib/contexts/ThemeContext';

export default function Cookies() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Always enabled
    analytics: true,
    marketing: false,
    preferences: true
  });

  const goHome = () => {
    window.location.href = '/';
  };

  const handleCookieChange = (type: string, value: boolean) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies

    setCookieSettings(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const saveSettings = () => {
    // Save cookie preferences to localStorage
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));

    // Show success message
    alert(language === 'fr'
      ? 'Paramètres des cookies sauvegardés avec succès!'
      : 'Cookie settings saved successfully!'
    );
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setCookieSettings(allAccepted);
    localStorage.setItem('cookieSettings', JSON.stringify(allAccepted));

    alert(language === 'fr'
      ? 'Tous les cookies ont été acceptés!'
      : 'All cookies have been accepted!'
    );
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setCookieSettings(onlyNecessary);
    localStorage.setItem('cookieSettings', JSON.stringify(onlyNecessary));

    alert(language === 'fr'
      ? 'Seuls les cookies nécessaires ont été acceptés!'
      : 'Only necessary cookies have been accepted!'
    );
  };

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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="h-9 w-9 relative"
              >
                {language === 'fr' ? (
                  <div className="w-6 h-4 relative overflow-hidden rounded-sm shadow-md">
                    <div className="w-full h-full bg-blue-600"></div>
                    <div className="w-2/3 h-full bg-white absolute left-1/3 top-0"></div>
                    <div className="w-1/3 h-full bg-red-600 absolute right-0 top-0"></div>
                  </div>
                ) : (
                  <div className="w-6 h-4 relative overflow-hidden rounded-sm shadow-md">
                    <div className="w-full h-full bg-red-600"></div>
                    <div className="w-full h-0.5 bg-white absolute top-0.5"></div>
                    <div className="w-full h-0.5 bg-white absolute top-1"></div>
                    <div className="w-full h-0.5 bg-white absolute top-1.5"></div>
                    <div className="w-full h-0.5 bg-white absolute top-2"></div>
                    <div className="w-full h-0.5 bg-white absolute top-2.5"></div>
                    <div className="w-full h-0.5 bg-white absolute top-3"></div>
                    <div className="w-full h-0.5 bg-white absolute top-3.5"></div>
                    <div className="w-2.5 h-2 bg-blue-800 absolute top-0 left-0">
                      <div className="w-0.5 h-0.5 bg-white absolute top-0.5 left-0.5"></div>
                    </div>
                  </div>
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-700 rounded-2xl mb-6">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              {language === 'fr' ? 'Paramètres des Cookies' : 'Cookie Settings'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {language === 'fr'
                ? 'Gérez vos préférences de cookies et votre confidentialité'
                : 'Manage your cookie preferences and privacy'
              }
            </p>
          </div>

          {/* Cookie Settings */}
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 mb-8">
            <div className="space-y-8">

              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-6 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {language === 'fr' ? 'Cookies Nécessaires' : 'Necessary Cookies'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {language === 'fr'
                        ? 'Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.'
                        : 'These cookies are essential for the website to function and cannot be disabled.'
                      }
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {language === 'fr' ? 'Exemples: authentification, sécurité, préférences de base' : 'Examples: authentication, security, basic preferences'}
                    </div>
                  </div>
                </div>
                <Switch
                  checked={cookieSettings.necessary}
                  disabled={true}
                  className="ml-4"
                />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-6 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {language === 'fr' ? 'Cookies Analytiques' : 'Analytics Cookies'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {language === 'fr'
                        ? 'Ces cookies nous aident à comprendre comment vous utilisez notre site pour l\'améliorer.'
                        : 'These cookies help us understand how you use our site to improve it.'
                      }
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {language === 'fr' ? 'Exemples: Google Analytics, statistiques de visite' : 'Examples: Google Analytics, visit statistics'}
                    </div>
                  </div>
                </div>
                <Switch
                  checked={cookieSettings.analytics}
                  onCheckedChange={(checked) => handleCookieChange('analytics', checked)}
                  className="ml-4"
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-6 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {language === 'fr' ? 'Cookies Marketing' : 'Marketing Cookies'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {language === 'fr'
                        ? 'Ces cookies sont utilisés pour vous proposer des publicités personnalisées.'
                        : 'These cookies are used to show you personalized advertisements.'
                      }
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {language === 'fr' ? 'Exemples: Facebook Pixel, Google Ads, publicités ciblées' : 'Examples: Facebook Pixel, Google Ads, targeted advertising'}
                    </div>
                  </div>
                </div>
                <Switch
                  checked={cookieSettings.marketing}
                  onCheckedChange={(checked) => handleCookieChange('marketing', checked)}
                  className="ml-4"
                />
              </div>

              {/* Preferences Cookies */}
              <div className="flex items-start justify-between p-6 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {language === 'fr' ? 'Cookies de Préférences' : 'Preference Cookies'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {language === 'fr'
                        ? 'Ces cookies mémorisent vos préférences pour personnaliser votre expérience.'
                        : 'These cookies remember your preferences to personalize your experience.'
                      }
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {language === 'fr' ? 'Exemples: langue, thème, paramètres d\'affichage' : 'Examples: language, theme, display settings'}
                    </div>
                  </div>
                </div>
                <Switch
                  checked={cookieSettings.preferences}
                  onCheckedChange={(checked) => handleCookieChange('preferences', checked)}
                  className="ml-4"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={acceptAll}
              size="lg"
              className="px-8 py-4 text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {language === 'fr' ? 'Accepter Tout' : 'Accept All'}
            </Button>

            <Button
              onClick={saveSettings}
              size="lg"
              className="px-8 py-4 text-lg bg-gradient-to-r bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {language === 'fr' ? 'Sauvegarder les Paramètres' : 'Save Settings'}
            </Button>

            <Button
              onClick={rejectAll}
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg rounded-full border-2 border-gray-400/30 text-gray-600 dark:text-gray-400 hover:bg-gray-600 hover:text-white dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              {language === 'fr' ? 'Rejeter Tout' : 'Reject All'}
            </Button>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              {language === 'fr' ? 'Informations Supplémentaires' : 'Additional Information'}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                {language === 'fr'
                  ? 'Vous pouvez modifier vos préférences de cookies à tout moment en revenant sur cette page. Vos choix seront sauvegardés et appliqués lors de vos prochaines visites.'
                  : 'You can change your cookie preferences at any time by returning to this page. Your choices will be saved and applied during your next visits.'
                }
              </p>
              <p className="mb-4">
                {language === 'fr'
                  ? 'Pour plus d\'informations sur notre utilisation des cookies et la protection de vos données, consultez notre '
                  : 'For more information about our use of cookies and data protection, see our '
                }
                <a href="/privacy" className="text-purple-600 hover:text-purple-700 underline">
                  {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}