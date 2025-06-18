// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroBg from "../assets/Images/hero-bg.jpg";
import devAvatar from "../assets/Images/devAvatar.avif"; // make sure this exists
// import Lottie from "lottie-react";
// import devAnimation from "../assets/dev-lottie.json"; // optional

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center text-white flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* 🔵 Background overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* 🌟 Blurred Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-500 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />

      {/* 💫 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center px-6 py-12 backdrop-blur-md bg-white/10 rounded-3xl shadow-xl"
      >
        {/* 🧑 Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src={devAvatar}
            alt="Hariharan Avatar"
            className="w-36 h-36 rounded-full border-4 border-green-400 shadow-lg hover:scale-105 transition duration-500"
          />
        </div>

        {/* 🔤 Headings */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hey, I'm <span className="text-green-400">Hariharan</span>
        </h1>

        <h2 className="text-xl md:text-3xl font-light text-gray-300 mb-6">
          <Typewriter
            words={[
              "React Native Expert 🚀",
              "Next-Gen Coder 💡",
              "Creative UI Architect 🎨",
              "Dreaming Big from a Small Village 🌍"
            ]}
            loop
            cursor
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        {/* 🔘 CTA Buttons */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <a
            href="#projects"
            className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full text-lg font-medium shadow-lg"
          >
            🚀 View Projects
          </a>
          <a
            href="#contact"
            className="border border-green-400 hover:bg-green-400 hover:text-black transition px-6 py-3 rounded-full text-lg font-medium shadow-lg"
          >
            💼 Hire Me
          </a>
        </div>

        {/* 🌐 Social Links */}
        <div className="flex justify-center gap-6 mt-10 text-2xl text-green-300">
          <a
            href="https://github.com/Hariharan09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-white transition" />
          </a>
          <a
            href="https://linkedin.com/in/hariharan-a-aa0b60141/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-white transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
