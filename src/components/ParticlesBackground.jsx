// src/components/ParticlesBg.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim"; // Slim engine

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // ✅ Loads the slim version correctly
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: log or control once loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: { value: "#00ffcc" },
          links: {
            color: "#00ffcc",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          number: { value: 60 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
