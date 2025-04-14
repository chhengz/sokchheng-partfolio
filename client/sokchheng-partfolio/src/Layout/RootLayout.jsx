import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {

  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
