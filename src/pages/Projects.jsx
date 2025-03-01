import {useEffect} from "react";
import { Code } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectData } from "../Data/data";

const Projects = () => {
  useEffect(()=>{
      document.title = "Project | Sokchheng";
    }, []);
  return (
    <>
      <div className="project_container">
        <div className="main">
          <section className="projectHeader">
            <div className="project-icon">
              <Code className="CodeIcon" />
            </div>
            <h1>Projects</h1>
          </section>

          <section>
            <div className="projectListCard">
              <ul>
                <ProjectCard projects={projectData} />
              </ul>
            </div>
          </section>
        </div>

        <h2>Testing</h2>
      </div>
    </>
  );
};

export default Projects;
