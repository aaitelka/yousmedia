"use client";

import { ArrowLeft, Shield, Eye, Database, Lock, Mail, Phone, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTheme } from '@/lib/contexts/ThemeContext';

export default function Privacy() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const goHome = () => {
    window.location.href = '/';
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {language === 'fr'
                ? 'Dernière mise à jour : 15 janvier 2025'
                : 'Last updated: January 15, 2025'
              }
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">

              {language === 'fr' ? (
                <>
                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Eye className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">1. Introduction</h2>
                    </div>
                    <p className="leading-relaxed">
                      Chez YousMedia, nous nous engageons à protéger votre vie privée et vos données personnelles.
                      Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et
                      protégeons vos informations lorsque vous utilisez notre plateforme créative.
                    </p>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">2. Données Collectées</h2>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">2.1 Informations Personnelles</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Nom complet et adresse e-mail</li>
                      <li>Informations de contact (téléphone, adresse)</li>
                      <li>Informations de profil et préférences</li>
                      <li>Données de facturation et de paiement</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">2.2 Données Techniques</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Adresse IP et informations de géolocalisation</li>
                      <li>Type de navigateur et système d'exploitation</li>
                      <li>Données d'utilisation et de navigation</li>
                      <li>Cookies et technologies similaires</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">3. Utilisation des Données</h2>
                    </div>
                    <p className="mb-4">Nous utilisons vos données pour :</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Fournir et améliorer nos services créatifs</li>
                      <li>Personnaliser votre expérience utilisateur</li>
                      <li>Traiter vos commandes et paiements</li>
                      <li>Vous envoyer des communications importantes</li>
                      <li>Assurer la sécurité de notre plateforme</li>
                      <li>Respecter nos obligations légales</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">4. Protection des Données</h2>
                    </div>
                    <p className="mb-4">
                      Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées :
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Chiffrement SSL/TLS pour toutes les transmissions</li>
                      <li>Stockage sécurisé avec accès restreint</li>
                      <li>Audits de sécurité réguliers</li>
                      <li>Formation du personnel sur la protection des données</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">5. Vos Droits</h2>
                    </div>
                    <p className="mb-4">Conformément au RGPD, vous avez le droit de :</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Accéder à vos données personnelles</li>
                      <li>Rectifier ou supprimer vos données</li>
                      <li>Limiter le traitement de vos données</li>
                      <li>Vous opposer au traitement</li>
                      <li>Portabilité de vos données</li>
                      <li>Retirer votre consentement à tout moment</li>
                    </ul>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">6. Contact</h2>
                    </div>
                    <p className="mb-4">
                      Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p><strong>Email :</strong> contact@yousmedia.ma</p>
                      <p><strong>Téléphone :</strong> +212 522 123 456</p>
                      <p><strong>Adresse :</strong> 123 Avenue Mohammed V, Casablanca, Maroc</p>
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Eye className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">1. Introduction</h2>
                    </div>
                    <p className="leading-relaxed">
                      At YousMedia, we are committed to protecting your privacy and personal data.
                      This privacy policy explains how we collect, use, store, and protect your
                      information when you use our creative platform.
                    </p>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">2. Data We Collect</h2>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">2.1 Personal Information</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Full name and email address</li>
                      <li>Contact information (phone, address)</li>
                      <li>Profile information and preferences</li>
                      <li>Billing and payment data</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">2.2 Technical Data</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>IP address and geolocation information</li>
                      <li>Browser type and operating system</li>
                      <li>Usage and navigation data</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">3. How We Use Your Data</h2>
                    </div>
                    <p className="mb-4">We use your data to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Provide and improve our creative services</li>
                      <li>Personalize your user experience</li>
                      <li>Process your orders and payments</li>
                      <li>Send you important communications</li>
                      <li>Ensure platform security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">4. Data Protection</h2>
                    </div>
                    <p className="mb-4">
                      We implement appropriate technical and organizational security measures:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>SSL/TLS encryption for all transmissions</li>
                      <li>Secure storage with restricted access</li>
                      <li>Regular security audits</li>
                      <li>Staff training on data protection</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">5. Your Rights</h2>
                    </div>
                    <p className="mb-4">Under GDPR, you have the right to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Access your personal data</li>
                      <li>Rectify or delete your data</li>
                      <li>Restrict data processing</li>
                      <li>Object to processing</li>
                      <li>Data portability</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">6. Contact Us</h2>
                    </div>
                    <p className="mb-4">
                      For any questions about this privacy policy or to exercise your rights:
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p><strong>Email:</strong> contact@yousmedia.ma</p>
                      <p><strong>Phone:</strong> +212 522 123 456</p>
                      <p><strong>Address:</strong> 123 Mohammed V Avenue, Casablanca, Morocco</p>
                    </div>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}