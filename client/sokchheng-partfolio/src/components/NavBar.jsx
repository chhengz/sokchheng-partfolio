import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, House, UserRound, Code, Send } from "lucide-react";
import "../assets/css/navbar.css";

const links = [
  { path: "/", label: "Home", icon: <House /> },
  { path: "about", label: "About", icon: <UserRound /> },
  { path: "projects", label: "Projects", icon: <Code /> },
  { path: "contact", label: "Contact", icon: <Send /> },
];

export const setCloseNavbar = (close) => {
  const [isOpen, setIsOpen] = useState(false);
  close ? setIsOpen(true) : setIsOpen(false);
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation();
  const btnRef = useRef();
  const menuRef = useRef();

  window.addEventListener("click", (e) => {
    // console.log(e.target === btnRef.current)
    // console.log(e.target === menuRef.current)
    if(e.target === menuRef.current) {
      setIsOpen(!isOpen);
    }
  });

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header>
      <nav>
        <button id="nav-btn" ref={btnRef} onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <Menu /> : <X />}
        </button>

        {
          isOpen && (
            <div className="menu" ref={menuRef}>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <NavLink onClick={() => setIsOpen(!isOpen)} to={link.path}>
                      <div id="icon">{link.icon}</div>
                      <span>{link.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </nav>
    </header>
  );
};

export default NavBar;
