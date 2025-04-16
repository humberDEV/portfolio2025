import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import profolioUrl from "../assets/profolio.jpg";
import pasapalosUrl from "../assets/pasapalos.jpg";
import menuPageUrl from "../assets/menupage.jpg";

import interfaceTheme from "./interfaces/interfaceTheme";

const ProjectsPage = ({ theme }: interfaceTheme) => {
  const projects = [
    {
      title: "MenuPage",
      description:
        "SaaS app for restaurants to manage dynamic, multilingual QR menus. Built for scalability and local SEO.",
      image: menuPageUrl,
      link: "",
      tech: [
        "Next JS",
        "React",
        "Tailwind CSS",
        "Serverless Functions",
        "MongoDB Atlas",
      ],
    },
    {
      title: "Profolio",
      description:
        "Online portfolio builder for devs. Minimal, fast, and customizable. (Currently paused)",
      image: profolioUrl,
      link: "https://profolioa.netlify.app",
      tech: [
        "Next JS",
        "React",
        "Tailwind CSS",
        "Serverless Functions",
        "MongoDB Atlas",
      ],
    },
    {
      title: "Pasapalos",
      description:
        "Mini menu site for a Venezuelan food brand. Clean, vibrant design with fast UX in mind, multilanguage support, and a beautiful UI.",
      image: pasapalosUrl,
      link: "https://pasapalos.netlify.app",
      tech: ["React", "Tailwind CSS", "Netlify"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h2
        className={`text-4xl font-bold ${
          theme === "dark" ? "text-white" : "text-neutral-900"
        } mb-12`}
      >
        Projects
      </h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`group relative overflow-hidden rounded-2xl ${
              theme === "dark" ? "bg-white/10" : "bg-neutral-100/80"
            } backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.2)] ${
              theme === "dark" ? "ring-white/10" : "ring-neutral-300"
            } hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02]`}
          >
            <div className="aspect-video overflow-hidden">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-105 brightness-75"
                  />
                </a>
              )}
              {!project.link && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-105 brightness-75"
                />
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-neutral-900"
                  } text-shadow-sm`}
                >
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${
                      theme === "dark" ? "gray-300" : "neutral-400"
                    } hover:text-${theme === "dark" ? "white" : "neutral-600"}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <p
                className={`text-${
                  theme === "dark" ? "neutral-300" : "neutral-700"
                } text-sm mb-4`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full ${
                      theme === "dark"
                        ? "bg-white/20 text-white"
                        : "bg-neutral-300 text-neutral-900"
                    } border border-white/20`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
