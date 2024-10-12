import { Link, useParams } from "react-router-dom";
import { projectData } from "./projects/data";

const ProjectDetails = () => {
  const { id } = useParams();

  const {
    img,
    title,
    description,
    description_details,
    releaseDate,
    author,
    LINK_URL,
  } = projectData.find((d) => d.id == id);

  return (
    <>
      <section className="mainProjectBlog">
        <h1>ProjectDetails</h1>
        <Link to={"/projects"} className="back">
          Back
        </Link>

        <header className="blogHeader">
          <h2>{title}</h2>
          <div className="release">
            <p>{releaseDate}</p> <span> - </span> <p>{author}</p>
          </div>
        </header>

        <article>
          <div className="cover_image">
            <img src={img} width={300} />
          </div>

          <p>{description}</p>
          <div className="details">
            <p>{description_details}</p>
          </div>

          <a href={LINK_URL} target="_blank" rel="noopener noreferrer">
            view project
          </a>
        </article>
      </section>
    </>
  );
};

export default ProjectDetails;
