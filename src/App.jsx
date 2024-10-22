import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Projects, Error, Contact } from "./pages";
import "./assets/css/main.css";
import RootLayout from "./Layout/RootLayout";
// import AboutLayout from "./Layout/AboutLayout";
import ProjectLayout from "./Layout/ProjectLayout";
import ProjectDetails from "./pages/ProjectDetails";
import Partfolio from "./pages/Partfolio";

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
  return <RouterProvider router={routers} />;
}

export default App;
