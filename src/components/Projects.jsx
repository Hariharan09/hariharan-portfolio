import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projectBg from "../assets/Images/projects-bg.png";

const projects = [
  {
    title: "PharmacyDemo",
    description:
      "A modern mobile app for searching medicines, browsing products, and seamless cart checkout — built with React Native and Redux Toolkit.",
    github: "https://github.com/Hariharan09/PharmacyDemo",
    live: "#",
  },
  {
    title: "PickYours",
    description:
      "An interactive mobile marketplace allowing users to explore and manage listings with sleek UI, fast performance, and smooth UX.",
    github: "https://github.com/Hariharan09/PickYours",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-center bg-no-repeat bg-cover py-28 px-6 text-white"
      style={{ backgroundImage: `url(${projectBg})` }}
    >
      <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-16 text-green-400 drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌌 My Creative Builds
        </motion.h2>

        {/* Zigzag Project Showcase */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-green-400/30 transition duration-300`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Left/Right Title & Description */}
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-bold text-green-300 mb-4 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-400 text-green-300 hover:text-black hover:bg-green-400 transition"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-400 text-green-300 hover:text-black hover:bg-green-400 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>

              {/* Placeholder for image or animation */}
              <div className="flex-1 w-full h-60 md:h-72 bg-green-400/10 border border-green-500/20 rounded-xl shadow-inner shadow-green-400/10 flex items-center justify-center">
                <span className="text-4xl text-green-400 font-bold">
                  🔧 {project.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
