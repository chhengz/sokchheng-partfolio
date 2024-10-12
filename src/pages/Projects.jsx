import { Code } from "lucide-react";
import ProjectCard from "./projects/ProjectCard";
import { projectData } from "./projects/data";

const Projects = () => {
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

        <h2>test</h2>
      </div>
    </>
  );
};

export default Projects;
