import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import useTheme from "./hooks/useTheme";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import noiseTexture from "./assets/noise_texture.jpg";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const pages: { [key: string]: JSX.Element } = {
    home: <HomePage theme={theme} />,
    about: <AboutPage theme={theme} />,
    projects: <ProjectsPage theme={theme} />,
    contact: <ContactPage theme={theme} />,
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-[#f5f5f7] text-black"
      }`}
    >
      {/* 👇 Botón de cambio de tema */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-2 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[calc(100vh-16rem)]"
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>
      </div>

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
