import { Outlet } from "react-router-dom";

const ProjectLayout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default ProjectLayout;
