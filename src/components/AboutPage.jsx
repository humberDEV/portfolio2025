import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS',
    'PostgreSQL', 'Docker', 'AWS', 'Git'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto py-12"
    >
      <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
        Desarrollador Full Stack apasionado por crear experiencias web excepcionales.
        Me especializo en arquitecturas escalables y diseño de interfaces modernas.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutPage;