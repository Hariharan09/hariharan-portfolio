import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import contactBg from "../assets/Images/contact-bg.png";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: "easeOut" },
});

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-6 py-28"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* 🔮 Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/70 z-0 backdrop-blur-md" />
      <div className="absolute w-96 h-96 bg-green-400 rounded-full blur-[120px] opacity-10 top-20 left-1/2 -translate-x-1/2 animate-pulse z-0" />

      {/* 💎 Unique Floating Card */}
      <motion.div
        {...fadeIn(0)}
        className="relative z-10 max-w-xl w-full text-center bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-3xl p-10 shadow-2xl transition-all hover:shadow-green-400/30"
      >
        <h2 className="text-4xl font-bold text-green-400 mb-6 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
          Let’s Connect 🤝
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Want to collaborate or just say hi? I’m always open to new conversations and opportunities.
        </p>

        <div className="flex flex-col gap-6 items-center text-white text-lg">
          <motion.a
            href="tel:+919629773070"
            {...fadeIn(0.2)}
            className="flex items-center gap-3 hover:text-green-400 transition duration-300"
          >
            <FaPhone /> +91 96297 73070
          </motion.a>

          <motion.a
            href="mailto:hariharana0110@gmail.com"
            {...fadeIn(0.4)}
            className="flex items-center gap-3 hover:text-green-400 transition duration-300"
          >
            <FaEnvelope /> hariharana0110@gmail.com
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/hariharan-a-aa0b60141/"
            target="_blank"
            rel="noopener noreferrer"
            {...fadeIn(0.6)}
            className="flex items-center gap-3 hover:text-green-400 transition duration-300"
          >
            <FaLinkedin /> LinkedIn Profile
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
