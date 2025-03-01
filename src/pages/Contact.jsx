import {useEffect} from "react";
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
  { media_name: "Linkedin", media_icon: <Linkedin />, link: "" },
  { media_name: "Twitter", media_icon: <Twitter />, link: "" },
  { media_name: "Tiktok", media_icon: <FaTiktok />, link: "" },
  { media_name: "Facebook", media_icon: <Facebook />, link: "" },
  { media_name: "Instagram", media_icon: <Instagram />, link: "" },
  { media_name: "Youtube", media_icon: <Youtube />, link: "" },
  { media_name: "Onlyfan", media_icon: <Gem />, link: "" },
];

const Contact = () => {
  useEffect(()=>{
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
            <h2><span>📬</span>Social Media</h2>
            
            {links.map((l) => (
              <li key={l.media_name}>
                <a href={l.link}>
                  {l.media_icon}
                  <h3>{l.media_name}</h3>
                </a>
              </li>
            ))}
          </ul>

          <ul>
            <h2>Developer</h2>
            <li>
              <a href="http://github.com/chhengz">
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
