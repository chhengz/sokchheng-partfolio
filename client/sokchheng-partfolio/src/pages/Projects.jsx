import {useEffect, useState} from "react";
import { Code } from "lucide-react";
import Loading from "../components/Loading";
import ProjectCard from "../components/ProjectCard";

const BESE_URL = import.meta.env.REACT_APP_GITHUB_API_URL

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Projects | Sokchheng";

    // Fetch projects from GitHub
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${BESE_URL}/projects.json`
        );
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error("Failed to fetch projects");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <Loading />; // Show loading state
  }

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
              {projects.length > 0 ? (
                <ProjectCard projects={projects} />
              ) : (
                <p>No projects found.</p>
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
