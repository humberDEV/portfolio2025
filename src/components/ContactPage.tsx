import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import interfaceTheme from "./interfaces/interfaceTheme";

const ContactPage = ({ theme }: interfaceTheme) => {
  const email = "hga.personal@gmail.com";

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/humberDEV",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/humberdev",
    },
  ];

  const cardStyles = `w-full p-4 rounded-xl backdrop-blur-md transition-all duration-300 ${
    theme === "dark"
      ? "bg-white/10 text-white hover:bg-white/20"
      : "bg-black/5 text-black hover:bg-black/10 border border-black/10"
  }`;

  return (
    <div className="max-w-2xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className={`text-3xl font-bold mb-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Contacto
        </h2>

        <div className="space-y-6">
          <a
            href={`mailto:${email}`}
            className={cardStyles + " flex items-center gap-3"}
          >
            <Mail size={20} />
            <span>{email}</span>
          </a>

          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cardStyles + " flex items-center gap-3"}
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
