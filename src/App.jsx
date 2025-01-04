/*
 @ author: sokchheng
 @ domain: https://sokchheng.site/
 */
 import { useEffect, useState } from "react";
 import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import particlesOptions from "./particles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Projects, Error, Contact } from "./pages";
import RootLayout from "./Layout/RootLayout";
// import AboutLayout from "./Layout/AboutLayout";
import ProjectLayout from "./Layout/ProjectLayout";
import ProjectDetails from "./pages/ProjectDetails";
import Partfolio from "./pages/Partfolio";
import "./assets/css/main.css";

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
      // About
      // {
      //   path: "about",
      //   element: <AboutLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <About />,
      //     },
      //   ],
      // },
      {
        path: "about",
        element: <About />,
      },
      // Contact
      {
        path: "contact",
        element: <Contact />,
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
    ],
  },
  {
    path: "/partfolio",
    element: <Partfolio />,
  },
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
