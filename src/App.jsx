import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// particles framwork (animation background)
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesOptions from "./particles";

// pages
import { Home, About, Projects, Error, Contact, ProjectDetails } from "./pages";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";

// protect route
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

// layout
import RootLayout from "./Layout/RootLayout";
import ProjectLayout from "./Layout/ProjectLayout";

// create routers lists
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
   // Login
  {
    path: "auth/login",
    element: <LoginPage />,
  },
  // Register
  {
    path: "auth/register",
    element: <RegisterPage />,
  },
  // Protected Route for Dashboard
  {
    path: "dashboard",
    element: <ProtectedRoute element={<div>Dashboard Page</div>} />,
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
  // const particlesLoaded = (container) => console.log(container);
  if (init) {
    return (
      <>
        {/* <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesOptions}/> */}
        <Particles id="tsparticles" options={particlesOptions} />
        <RouterProvider router={routers} />
      </>
    );
  }

  return <></>;
}

export default App;
