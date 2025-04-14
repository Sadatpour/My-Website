import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane 
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

// EmailJS configuration parameters
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Get your public key from Account > API Keys
const EMAILJS_SERVICE_ID = "service_qnevh1p"; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = "template_wcal4de"; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = "x9bJSqJZt2mmZDPvE"; // Replace with your public key

// Helper function to fix TypeScript errors with t function
const useTranslate = () => {
  const { t: originalT } = useTranslation();
  // @ts-ignore
  const t = (key: string) => originalT(key);
  return { t };
};

const Contact: React.FC = () => {
  const { t } = useTranslate();
  const { direction } = useLanguage();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };
    
    // Initialize EmailJS with your public key (required for the newer version)
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    // Send email using EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#E6E7EE] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto neumorph-inset p-4">
            {t('contact.getInTouch')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${direction === 'rtl' ? 'md:order-2' : 'md:order-1'}`}
          >
            <form onSubmit={handleSubmit} className="neumorph-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg neumorph-inset border-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-[#E6E7EE] dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg neumorph-inset border-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-[#E6E7EE] dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg neumorph-inset border-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-[#E6E7EE] dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg neumorph-inset border-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-[#E6E7EE] dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 neumorph-btn text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-gray-600 dark:border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FaPaperPlane size={16} />
                    <span>{t('contact.send')}</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-center">
                  {t('contact.successMessage')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-center">
                  {t('contact.errorMessage')}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${direction === 'rtl' ? 'md:order-1' : 'md:order-2'}`}
          >
            <div className="neumorph-card p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.contactInfo')}
              </h3>

              <div className="space-y-6 flex-grow">
                <div className="flex items-start space-x-4">
                  <div className="neumorph-btn w-10 h-10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {t('contact.emailAddress')}
                    </h4>
                    <a 
                      href="mailto:sadatpour.web@gmail.com" 
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      sadatpour.web@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="neumorph-btn w-10 h-10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {t('contact.phoneNumber')}
                    </h4>
                    <a 
                      href="tel:+989120332037" 
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      +98 912 033 2037
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="neumorph-btn w-10 h-10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {t('contact.location')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Iran, Tehran
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {t('contact.followMe')}
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="mailto:sadatpour.web@gmail.com" 
                    rel="noopener noreferrer"
                    className="neumorph-btn w-10 h-10 flex items-center justify-center text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                    aria-label="Email"
                  >
                    <FaEnvelope size={16} />
                  </a>
                  <a 
                    href="https://wa.me/+989120332037" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neumorph-btn w-10 h-10 flex items-center justify-center text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                    aria-label="WhatsApp"
                  >
                    <FaPhone size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 