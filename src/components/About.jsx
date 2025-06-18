import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import aboutBg from "../assets/Images/about-bg.jpeg";
import Lottie from "lottie-react";
import devAnimation from "../assets/dev-lottie.json";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: "easeOut" }
});

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-cover bg-center py-24 px-6 text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.95), rgba(15,23,42,0.85)), url(${aboutBg})`,
      }}
    >
      <ParticlesBackground />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        
        {/* 🚀 Dev Lottie (not circle, wide view) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <Lottie
            animationData={devAnimation}
            loop
            className="w-full max-w-lg md:max-w-xl drop-shadow-lg"
            style={{ filter: "brightness(1.1)", transform: "rotate(-2deg)" }}
          />
        </motion.div>

        {/* 🧊 Glassmorphic Text Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-10 text-left shadow-2xl"
        >
          <motion.h2 className="text-4xl font-bold text-green-400 mb-6" {...fadeIn(0)}>
            👋 About Me
          </motion.h2>

          <motion.p className="text-lg text-gray-300" {...fadeIn(0.2)}>
            I’m <span className="text-green-400 font-semibold">Hariharan A</span>, a passionate
            <span className="text-yellow-400 font-semibold"> Senior Software Engineer</span> with
            <span className="text-pink-400 font-semibold"> 3.6+ years</span> building smooth mobile apps.
          </motion.p>

          <motion.p className="mt-4 text-lg text-gray-300" {...fadeIn(0.4)}>
            🌍 From a small village in India, I now dream and build at a global scale.
          </motion.p>

          <motion.p className="mt-4 text-lg text-gray-300" {...fadeIn(0.6)}>
            ⚙️ I build architecture, squash bugs, test, deploy, and optimize with finesse.
          </motion.p>

          <motion.p className="mt-4 text-lg text-gray-300" {...fadeIn(0.8)}>
            💡 Always upgrading — I’m diving deep into backend, cloud, and AI to become a full-stack beast.
          </motion.p>

          <motion.p className="mt-6 text-xl font-bold text-green-300" {...fadeIn(1.0)}>
            ✨ I’m not just building code. I’m building experiences.
          </motion.p>
        </motion.div>
      </div>
      {/* ✨ Divider */}
<div className="w-full h-[1px] bg-gradient-to-r from-green-400/20 via-white/10 to-green-400/20 blur-sm mt-20" />
    </section>
  );
};

export default About;
