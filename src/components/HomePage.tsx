import { motion } from "framer-motion";

interface Props {
  theme: "light" | "dark";
}

export default function HomePage({ theme }: Props) {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        {/* 👇 Gradiente animado en movimiento automático */}
        <motion.h1
          className="text-4xl md:text-7xl font-bold tracking-tight mb-4"
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundImage:
              theme === "dark"
                ? "linear-gradient(90deg, #b2b6ba, #ffffff, #b2b6ba)"
                : "linear-gradient(90deg, #222222, #999999, #222222)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% center",
            transition: "background-image 0.4s ease-in-out",
            filter:
              theme === "light"
                ? "drop-shadow(0 1px 1px rgba(0,0,0,0.15))"
                : "drop-shadow(0 1px 1px rgba(255,255,255,0.05))",
          }}
        >
          Humberto García
        </motion.h1>

        <p
          className={`text-lg md:text-xl mb-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          FullStack Developer · Crafting clean & powerful apps
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className={`text-sm ${
            theme === "dark" ? "text-gray-500" : "text-gray-600"
          }`}
        >
          Valencia, Spain 🇪🇸
        </motion.p>
      </motion.div>
    </div>
  );
}
