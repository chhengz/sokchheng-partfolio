/*
 @ author: sokchheng
 @ domain: https://sokchheng.site/
 */
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesOptions from "./particles";
import { Home, About, Projects, Error, Contact } from "./pages";
import RootLayout from "./Layout/RootLayout";
// import AboutLayout from "./Layout/AboutLayout";
import ProjectLayout from "./Layout/ProjectLayout";
import ProjectDetails from "./pages/ProjectDetails";
import Partfolio from "./pages/Partfolio";
import "./assets/css/main.css";

import FetchAPI from "./tests/FetchAPI";

const routers = createBrowserRouter([
  // {
  //   path: "*",
  //   element: <Error />,
  // },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Projects
      {
        path: "projects",
        element: <ProjectLayout />,
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: ":id",
            element: <ProjectDetails />,
          },
        ],
      },
      // About
      {
        path: "about",
        element: <About />,
      },
      // Contact
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "/partfolio",
  //   element: <Partfolio />,
  // },
  // Test
  // {
  //   path: "test",
  //   element: <FetchAPI />,
  // },
]);

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
        />
        <RouterProvider router={routers} />
      </>
    );
  }

  return <></>;
}

export default App;
