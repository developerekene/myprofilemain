// src/App/UI/ParticlesBackground.tsx

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: { value: "#ffffff" },
      opacity: {
        value: 0.3,
        random: true,
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none" as const,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1,
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="particles-bg"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;
