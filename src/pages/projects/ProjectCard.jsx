import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const ProjectCard = ({ projects }) => {
  return (
    <>
      {projects.map(({ id, img, title, description }) => (
        <li key={id}>
          <div className="preview_card">
            <div className="project_image">
              <img src={img} alt={title} />
            </div>
            <div className="project_body">
              <div className="title">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
            <div className="buttonPreview">
              <Link to={id.toString()} className="viewProjectBtn">
                <Eye className="eyeIcon" />
                Read More
              </Link>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default ProjectCard;
