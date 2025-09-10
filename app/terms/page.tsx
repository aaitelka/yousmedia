"use client";

import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, Ban, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTheme } from '@/lib/contexts/ThemeContext';

export default function Terms() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-700 rounded-2xl mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              {language === 'fr' ? 'Conditions d\'Utilisation' : 'Terms of Service'}
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
                      <FileText className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">1. Acceptation des Conditions</h2>
                    </div>
                    <p className="leading-relaxed">
                      En accédant et en utilisant la plateforme YousMedia, vous acceptez d'être lié par ces
                      conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas
                      utiliser nos services.
                    </p>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Scale className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">2. Description du Service</h2>
                    </div>
                    <p className="mb-4">
                      YousMedia est une plateforme créative qui permet aux utilisateurs de :
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Créer et développer des projets créatifs</li>
                      <li>Collaborer avec d'autres créateurs</li>
                      <li>Accéder à des outils de création avancés</li>
                      <li>Partager et promouvoir leurs créations</li>
                      <li>Gérer leurs projets dans le cloud</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">3. Obligations de l'Utilisateur</h2>
                    </div>
                    <p className="mb-4">En utilisant nos services, vous vous engagez à :</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Fournir des informations exactes et à jour</li>
                      <li>Maintenir la confidentialité de votre compte</li>
                      <li>Respecter les droits de propriété intellectuelle</li>
                      <li>Ne pas utiliser la plateforme à des fins illégales</li>
                      <li>Ne pas perturber le fonctionnement du service</li>
                      <li>Respecter les autres utilisateurs</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">4. Propriété Intellectuelle</h2>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">4.1 Contenu Utilisateur</h3>
                    <p className="mb-4">
                      Vous conservez tous les droits sur le contenu que vous créez et téléchargez.
                      En utilisant notre plateforme, vous nous accordez une licence limitée pour
                      héberger, afficher et distribuer votre contenu.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">4.2 Contenu YousMedia</h3>
                    <p className="mb-4">
                      Tous les éléments de la plateforme (design, code, outils) sont protégés par
                      les droits d'auteur et restent la propriété exclusive de YousMedia.
                    </p>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">5. Tarification et Paiements</h2>
                    </div>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Les prix sont indiqués en dirhams marocains (MAD)</li>
                      <li>Les paiements sont traités de manière sécurisée</li>
                      <li>Les abonnements sont renouvelés automatiquement</li>
                      <li>Les remboursements sont soumis à notre politique de remboursement</li>
                      <li>Nous nous réservons le droit de modifier nos tarifs</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Ban className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">6. Suspension et Résiliation</h2>
                    </div>
                    <p className="mb-4">
                      Nous nous réservons le droit de suspendre ou résilier votre compte en cas de :
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Violation de ces conditions d'utilisation</li>
                      <li>Activité frauduleuse ou illégale</li>
                      <li>Non-paiement des frais dus</li>
                      <li>Comportement nuisant à la communauté</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">7. Limitation de Responsabilité</h2>
                    </div>
                    <p className="mb-4">
                      YousMedia ne peut être tenu responsable des dommages indirects, accessoires
                      ou consécutifs résultant de l'utilisation de nos services. Notre responsabilité
                      est limitée au montant payé pour nos services.
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Scale className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">8. Droit Applicable</h2>
                    </div>
                    <p className="mb-4">
                      Ces conditions sont régies par le droit marocain. Tout litige sera soumis
                      à la juridiction exclusive des tribunaux de Casablanca, Maroc.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p><strong>Contact :</strong> contact@yousmedia.ma</p>
                      <p><strong>Adresse :</strong> 123 Avenue Mohammed V, Casablanca, Maroc</p>
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">1. Acceptance of Terms</h2>
                    </div>
                    <p className="leading-relaxed">
                      By accessing and using the YousMedia platform, you agree to be bound by these
                      terms of service. If you do not agree to these terms, please do not use our services.
                    </p>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Scale className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">2. Service Description</h2>
                    </div>
                    <p className="mb-4">
                      YousMedia is a creative platform that allows users to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Create and develop creative projects</li>
                      <li>Collaborate with other creators</li>
                      <li>Access advanced creation tools</li>
                      <li>Share and promote their creations</li>
                      <li>Manage their projects in the cloud</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">3. User Obligations</h2>
                    </div>
                    <p className="mb-4">By using our services, you agree to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Provide accurate and up-to-date information</li>
                      <li>Maintain the confidentiality of your account</li>
                      <li>Respect intellectual property rights</li>
                      <li>Not use the platform for illegal purposes</li>
                      <li>Not disrupt the service operation</li>
                      <li>Respect other users</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">4. Intellectual Property</h2>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">4.1 User Content</h3>
                    <p className="mb-4">
                      You retain all rights to the content you create and upload. By using our platform,
                      you grant us a limited license to host, display, and distribute your content.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">4.2 YousMedia Content</h3>
                    <p className="mb-4">
                      All platform elements (design, code, tools) are protected by copyright and
                      remain the exclusive property of YousMedia.
                    </p>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">5. Pricing and Payments</h2>
                    </div>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Prices are displayed in Moroccan Dirhams (MAD)</li>
                      <li>Payments are processed securely</li>
                      <li>Subscriptions are automatically renewed</li>
                      <li>Refunds are subject to our refund policy</li>
                      <li>We reserve the right to modify our pricing</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Ban className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">6. Suspension and Termination</h2>
                    </div>
                    <p className="mb-4">
                      We reserve the right to suspend or terminate your account in case of:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Violation of these terms of service</li>
                      <li>Fraudulent or illegal activity</li>
                      <li>Non-payment of due fees</li>
                      <li>Behavior harmful to the community</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">7. Limitation of Liability</h2>
                    </div>
                    <p className="mb-4">
                      YousMedia cannot be held responsible for indirect, incidental, or consequential
                      damages resulting from the use of our services. Our liability is limited to
                      the amount paid for our services.
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Scale className="w-6 h-6 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">8. Governing Law</h2>
                    </div>
                    <p className="mb-4">
                      These terms are governed by Moroccan law. Any dispute will be subject to
                      the exclusive jurisdiction of the courts of Casablanca, Morocco.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p><strong>Contact:</strong> contact@yousmedia.ma</p>
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