import { useEffect } from "react";
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

const links = [
  { label: "Linkedin", icon: <Linkedin />, path: "" },
  { label: "Twitter", icon: <Twitter />, path: "" },
  { label: "Tiktok", icon: <FaTiktok />, path: "" },
  { label: "Facebook", icon: <Facebook />, path: "" },
  { label: "Instagram", icon: <Instagram />, path: "" },
  { label: "Youtube", icon: <Youtube />, path: "" },
  { label: "Onlyfan", icon: <Gem />, path: "" },
];

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Sokchheng";
  }, []);
  return (
    <>
      <div className="center_contact_container">
        <section>
          <div className="contact-icon">
            <Send className="UserRoundSearch" />
          </div>
          
          <h1>Contact</h1>
          <ul>
            <h2>
              <span>📬</span>Social Media
            </h2>

            {links.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>
                  {item.icon}
                  <h3>{item.label}</h3>
                </Link>
              </li>
            ))}
          </ul>

          <ul>
            <h2>
              <span>🤖</span>Developer
            </h2>
            <li>
              <Link to={"http://github.com/chhengz"} target="_blank">
                <Github />
                <h3>Github</h3>
              </Link>
            </li>
            <li>
              <Link to={"http://jack-zo.vercel.app/"} target="_blank">
                <Globe />
                <h3>Website</h3>
              </Link>
            </li>
          </ul>

          {/* <Link className="backLink" to="/">
            <Undo2 className="ArrowLeft" />
            Back Home
          </Link> */}
        </section>
      </div>
    </>
  );
};

export default Contact;
