import { Outlet } from "react-router-dom";

const ProjectLayout = () => {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default ProjectLayout;
