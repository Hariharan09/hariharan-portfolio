import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#0f172a" },
        particles: {
          number: { value: 40 },
          color: { value: "#22c55e" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#22c55e",
            opacity: 0.2,
            width: 1,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBg;
