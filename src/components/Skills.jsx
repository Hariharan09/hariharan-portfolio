import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBg";
import skillsImage from "../assets/Images/skills-bg.png";

const skills = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "Redux Toolkit",
  "RESTful APIs",
  "Tailwind CSS",
  "Node.js (Learning)",
  "AWS Basics",
  "DevOps Basics",
  "Git & GitHub",
  "Debugging & Optimization",
  "Testing (Jest, Detox)",
  "Third-Party SDK Integration",
  "App Deployment",
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen text-white py-20 px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${skillsImage})` }}
    >
      {/* 🌟 Animated particle background */}
      <ParticlesBackground />

      {/* 🌈 Glowing glass container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center bg-black/30 backdrop-blur-md rounded-3xl p-10 border border-green-400/30 shadow-lg animate-pulse hover:animate-none transition-all duration-500">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-400 mb-12 drop-shadow-md tracking-wide"
        >
          🚀 My Tech Arsenal
        </motion.h2>

        {/* 💎 Skill cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              className="bg-white/10 border border-white/10 text-white px-4 py-6 rounded-xl backdrop-blur-md shadow-md hover:shadow-green-400 hover:bg-green-500/20 hover:text-green-200 transition-all duration-300 text-lg font-semibold tracking-wide"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
