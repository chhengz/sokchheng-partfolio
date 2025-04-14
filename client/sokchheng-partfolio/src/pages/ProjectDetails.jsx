import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Loading from '../components/Loading';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          "https://chhengz.github.io/api/v1/projects.json"
        );
        if (response.ok) {
          const data = await response.json();
          const selectedProject = data.find((p) => p.id === parseInt(id));
          setProject(selectedProject || null);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProjectData();
    document.title = `Project - ${id}`;
  }, [id]);


  if (isLoading) {
    return <Loading />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

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
