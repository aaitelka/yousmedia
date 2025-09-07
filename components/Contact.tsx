"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call to contact@yousmedia.ma
    setTimeout(() => {
      try {
        // In a real application, you would send this data to your backend
        console.log('Form data to be sent to contact@yousmedia.ma:', formData);
        
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('contactText')}
          </p>

          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input
                  type="text"
                  name="name"
                  placeholder={t('name')}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-6 py-4 text-lg rounded-2xl border-2 border-purple-400/30 bg-white/10 dark:bg-white/10 backdrop-blur-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-6 py-4 text-lg rounded-2xl border-2 border-purple-400/30 bg-white/10 dark:bg-white/10 backdrop-blur-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  required
                />
                <Input
                  type="text"
                  name="company"
                  placeholder={t('company')}
                  value={formData.company}
                  onChange={handleInputChange}
                  className="px-6 py-4 text-lg rounded-2xl border-2 border-purple-400/30 bg-white/10 dark:bg-white/10 backdrop-blur-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder={t('phone')}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-6 py-4 text-lg rounded-2xl border-2 border-purple-400/30 bg-white/10 dark:bg-white/10 backdrop-blur-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
              </div>
              
              <div className="mb-6">
                <Textarea
                  name="message"
                  placeholder={t('message')}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-purple-400/30 bg-white/10 dark:bg-white/10 backdrop-blur-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Envoi...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      {t('send')}
                    </div>
                  )}
                </Button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-500 animate-fade-in">
                    <CheckCircle className="w-5 h-5" />
                    <span>{t('messageSent')}</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 animate-fade-in">
                    <AlertCircle className="w-5 h-5" />
                    <span>{t('messageError')}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}