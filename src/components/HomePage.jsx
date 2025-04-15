import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Humberto García
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          FullStack Developer · Crafting clean & powerful apps
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Valencia, España 🇪🇸
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} className="text-gray-600" />
      </motion.div>
    </div>
  );
};

export default HomePage;
