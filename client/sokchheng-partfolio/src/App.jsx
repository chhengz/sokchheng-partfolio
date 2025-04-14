import { createBrowserRouter, RouterProvider } from "react-router-dom";

// particles framwork (animation background)
import Particle from "./components/models/ParticleModel";

// pages
import { Home, About, Projects, Error, Contact, ProjectDetails } from "./pages";
import LoginPage from "./components/features/auth/pages/LoginPage";
import RegisterPage from "./components/features/auth/pages/RegisterPage";

// protect route
import ProtectedRoute from "./components/features/auth/components/ProtectedRoute";

// layout
import RootLayout from "./Layout/RootLayout";
import ProjectLayout from "./Layout/ProjectLayout";
import DashboardPage from "./components/features/auth/pages/DashboardPage";
// import DashboardLayout from "./Layout/DashboardLayout";

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
  // Protected Route for Dashboard
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ]
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
]);

function App() {
  return (
    <>
      <Particle>
        <RouterProvider router={routers} />
      </Particle>
    </>
  );
}

export default App;
