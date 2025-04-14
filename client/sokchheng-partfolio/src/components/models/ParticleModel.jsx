import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesOptions from "../../particles";

import { useEffect, useState } from "react";


const Particle = ({children}) => {
    const [init, setInit] = useState(false);
      useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);
      // const particlesLoaded = (container) => console.log(container);
      if (init) {
        return (
          <>
          <Particles id="tsparticles" options={particlesOptions} />
          {children}
          </>
        );
      }

      return <></>;
}

export default Particle