import React from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'about', icon: User, label: 'Sobre mí' },
    { id: 'projects', icon: Briefcase, label: 'Proyectos' },
    { id: 'contact', icon: Mail, label: 'Contacto' }
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-lg bg-white/10 rounded-2xl p-2 shadow-lg">
      <ul className="flex space-x-2">
        {navItems.map(({ id, icon: Icon, label }) => (
          <li key={id}>
            <button
              onClick={() => setCurrentPage(id)}
              className={`relative p-4 rounded-xl transition-all duration-300 ${
                currentPage === id ? 'text-blue-500' : 'hover:text-blue-400'
              }`}
            >
              {currentPage === id && (
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative">
                <Icon size={20} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;