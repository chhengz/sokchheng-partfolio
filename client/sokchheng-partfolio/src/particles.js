// particles.js
const particlesOptions = {
    background: {
      color: {
        value: "",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          // mode: "push",
          mode: "repulse",
        },
        onHover: {
          enable: false, // changed
          mode: "grab",
        //   mode: "repulse",
        },
      },
      modes: {
        grab: {
            distance: 150,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#213547",
      },
      links: {
        color: "#213547",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      move: {
        // direction: "none",
        direction: "bottom",
        enable: true,
        outModes: {
          // default: "bounce",
          top: "bounce", // changed
        },
        random: true, // changed
        speed: 5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 100,
      },
      opacity: {
        value: .5,
      },
      shape: {
        // type: "circle",
        // type: "polygon",
        type: "star",
        
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

export default particlesOptions;
