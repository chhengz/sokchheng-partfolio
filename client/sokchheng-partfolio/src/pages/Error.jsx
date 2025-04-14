import { House } from "lucide-react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import "../assets/css/404.css";

const Error = () => {
  return (
    <>
      <div className="error_page_container">
        <main className="error">
        <MdError className="error-icon" />
          <h1>404</h1>
          <h2>Page not found!</h2>
          <Link id="btn-art" className="backHome" to="/">
            <House className="house-icon" />
            Back Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Error;
