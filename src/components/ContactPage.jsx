import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const email = "tu@email.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourusername'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        
        <div className="space-y-6">
          <button
            onClick={copyEmail}
            className="w-full p-4 rounded-xl backdrop-blur-md bg-white/10 flex items-center justify-between hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <Mail size={20} />
              <span>{email}</span>
            </div>
            {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
          </button>

          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 rounded-xl backdrop-blur-md bg-white/10 flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <link.icon size={20} />
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;