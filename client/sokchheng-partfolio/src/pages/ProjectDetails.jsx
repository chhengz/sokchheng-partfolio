import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Loading from '../components/Loading';
import { fetchData } from '../utils/api';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      try {
        const allProjects = await fetchData();
        const selectedProject = allProjects.find((p) => p.id === parseInt(id));
        setProject(selectedProject || null);
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getProject();
    document.title = `Project - ${id}`;
  }, [id]);

  if (isLoading) return <Loading />;
  if (!project) return <div>Project not found</div>;

  const { img, title, description, description_details, releaseDate, author, link_url } = project;

  return (
    <section className="wrapper">
      <Link to="/projects" id="backButton">
        <ArrowLeft id="ArrowLeft" />
        Back
      </Link>

      <header className="project__header">
        <h2>{title}</h2>
        <div className="meta_date">
          <p>{releaseDate}</p>
          <span>•</span>
          <p>{author}</p>
        </div>
      </header>

      <div className="banner_image">
        <img src={img} className="cover_image" alt={title} />
      </div>

      <article>
        <div className="description">
          <p>{description}</p>
          <div className="details">
            <p>{description_details}</p>
          </div>
        </div>

        <a href={link_url} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </article>
    </section>
  );
};

export default ProjectDetails;
