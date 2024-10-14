import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Projects, Error, Contact } from "./pages";
import "./assets/css/main.css";
import RootLayout from "./Layout/RootLayout";
// import AboutLayout from "./Layout/AboutLayout";
import ProjectLayout from "./Layout/ProjectLayout";
import ProjectDetails from "./pages/ProjectDetails";

const routers = createBrowserRouter([
  // {
  //   path: "*",
  //   element: <Error />,
  // },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    // loader: ,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/about",
    // element: <AboutLayout />,
    element: <About />,
  },
  {
    path: "/projects",
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
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
