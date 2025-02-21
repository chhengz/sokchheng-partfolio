
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// particles (animation background)
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesOptions from "./particles";

// pages
import { Home, About, Projects, Error, Contact } from "./pages";

// layout
import RootLayout from "./Layout/RootLayout";
import ProjectLayout from "./Layout/ProjectLayout";
import ProjectDetails from "./pages/ProjectDetails";


const routers = createBrowserRouter([
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
]);

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadSlim(engine); })
    .then(() => { setInit(true); });
  }, []);
  const particlesLoaded = (container) => console.log(container);
  if (init) {
    return (
      <>
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesOptions}/>
        <RouterProvider router={routers} />
      </>
    );
  }

  return <></>;
}

export default App;
