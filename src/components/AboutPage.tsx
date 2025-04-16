import { motion } from "framer-motion";
import profile from "../assets/profile.png";

interface Props {
  theme: "light" | "dark";
}

export default function AboutPage({ theme }: Props) {
  return (
    <section className="h-screen w-full flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Humberto García"
            className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full shadow-xl border border-white/10"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2
            className={`text-4xl font-semibold mb-4 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-lg leading-relaxed mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm <span className="font-bold">Humberto</span>, a Full Stack
            Developer passionate about performance, design, and simplicity. I
            specialize in building intuitive, elegant, and scalable tech
            products with a modern, minimalistic mindset.
          </p>

          <div>
            <h3
              className={`text-lg font-medium mb-2 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Spring",
                "PostgreSQL",
                "Docker",
                "AWS",
                "Git",
              ].map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-sm rounded-full transition-all backdrop-blur-md ${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
