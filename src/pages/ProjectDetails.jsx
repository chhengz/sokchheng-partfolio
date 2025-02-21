import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
    link_url,
  } = projectData.find((d) => d.id == id);

  return (
    <>
      <section className="mainProjectBlog">
        {/* <h1>ProjectDetails</h1> */}
        <Link to={"/projects"} className="back">
          <ArrowLeft className="ArrowLeft" />
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
            <img src={img} />
          </div>

          <div className="description">
            <p>{description}</p>
            <div className="details">
              <p>{description_details}</p>
            </div>
          </div>

          <a href={link_url} target="_blank" rel="noopener noreferrer">
            view project
          </a>
        </article>
      </section>
    </>
  );
};

export default ProjectDetails;
