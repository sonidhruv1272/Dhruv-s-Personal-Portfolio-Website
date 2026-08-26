import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.2,
          },
          move: {
            direction: "right",
            speed: 1,
          },
          size: {
            value: 2,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.2,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onhover: {
              enable: true,
              mode: "connect",
            }
          },
          modes: {
            push: {
              particles_nb: 1,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 1,
              },
              radius: 60,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              speed: 1
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
