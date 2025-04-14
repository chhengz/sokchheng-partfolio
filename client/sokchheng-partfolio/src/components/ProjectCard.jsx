import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const ProjectCard = ({ projects }) => {
  return (
    <>
      {projects.map(({ id, img, title, description }, index) => (
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
                <Eye id="eyeIcon" />
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

{
  /* <motion.li
          key={id}
          variants={fadeIn("up", index * 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
        ></motion.li> */
}
