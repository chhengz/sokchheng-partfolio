import {useEffect, useState} from "react";
import ProjectCard from "../components/ProjectCard";
import useFetchData from "../hooks/useFetchData";

import { Code } from "lucide-react";


const Projects = () => {
  const { data, loading } = useFetchData();

  useEffect(() => {
    document.title = "Projects | Sokchheng";
  }, []);

  return (
    <div className="project__container">
      <div className="main">
        <section className="projectHeader">
          <div className="project-icon">
            <Code className="CodeIcon" />
          </div>
          <h1>Projects</h1>
        </section>

        {/* Project Section */}
        <section>
          <div className="projectListCard">
            <ul>
              <ProjectCard data={data} />
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
