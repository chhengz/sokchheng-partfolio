import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa6";
import {
  Send,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Github,
  Gem,
  Globe,
  ArrowLeft,
  Undo2,
} from "lucide-react";

const Contact = () => {
  return (
    <>
      <div className="center_contact_container">
        <section>
          <div className="contact-icon">
            <Send className="UserRoundSearch" />
          </div>
          <h1>Contact</h1>
          <ul>
            <h2>Social Media</h2>
            <li>
              <a href="">
                <Linkedin />
                <h3>Linkedin</h3>
              </a>
            </li>
            <li>
              <a href="">
                <Twitter />
                <h3>Twitter</h3>
              </a>
            </li>
            <li>
              {/* <h2>Tiktok</h2> */}
              <a href="">
                <FaTiktok />
                <h3>Tiktok</h3>
              </a>
            </li>
            <li>
              {/* <h2>Facebook</h2> */}
              <a href="">
                <Facebook />
                <h3>Facebook</h3>
              </a>
            </li>
            <li>
              {/* <h2>Instagram</h2> */}
              <a href="">
                <Instagram />
                <h3>Instagram</h3>
              </a>
            </li>
            <li>
              {/* <h2>Youtube</h2> */}
              <a href="">
                <Youtube />
                <h3>Youtube</h3>
              </a>
            </li>

            <li>
              {/* <h2>Tiktok</h2> */}
              <a href="">
                <Gem />
                <h3>Onlyfan</h3>
              </a>
            </li>
          </ul>

          <ul>
            <h2>Developer</h2>
            <li>
              <a href="">
                <Github />
                <h3>Github</h3>
              </a>
            </li>
            <li>
              <a href="http://sokchheng.site">
                <Globe />
                <h3>Website</h3>
              </a>
            </li>
          </ul>

          <Link className="backLink" to="/">
            {/* <ArrowLeft className="ArrowLeft" /> */}
            <Undo2 className="ArrowLeft" />
            Back Home
          </Link>
        </section>
      </div>
    </>
  );
};

export default Contact;
