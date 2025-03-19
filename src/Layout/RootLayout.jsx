import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";
// import { LoadingBar } from "react-top-loading-bar";

const RootLayout = () => {

  // const [progress, setProgress] = useState(0);

  return (
    <div>
      <ScrollToTop />
      {/* <LoadingBar color={barColor} progress={progress} onLoaderFinished={() => setProgress(0)} /> */}
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
