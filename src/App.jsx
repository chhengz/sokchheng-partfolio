import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Projects, Error, Contact } from "./pages";
import "./assets/css/main.css";
import RootLayout from "./Layout/RootLayout";
import ProjectLayout from "./Layout/ProjectLayout";
import AboutLayout from "./Layout/AboutLayout";
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
      {
        path: "about",
        element: <AboutLayout />,
        children: [
          {
            index: true,
            element: <About />,
          },
        ],
      },
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
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
