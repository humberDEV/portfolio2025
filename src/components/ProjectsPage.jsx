import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Profolio',
      description: 'Creador online de portafolios rápidos para devs, moderno y personalizable.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      title: 'DigiMenu',
      description: 'SaaS para restaurantes que ofrece menús digitales por QR, personalizables y multilingües.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      link: '#'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                {project.title}
                <a href={project.link} className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} />
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;