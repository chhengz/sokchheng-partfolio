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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  /*
  const menuRef = useRef();
  useEffect(() => {
    const closeMenu = (e) => {
      // Check if the clicked element is outside the menu and button
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest("#nav-btn")
      ) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeMenu);
    return () => document.body.removeEventListener("click", closeMenu);
  }, []);
  */

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header>
      <nav>
        <button id="nav-btn" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <Menu /> : <X />}
        </button>

        {/*
          <button id="nav-btn" ref={menuRef} onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <Menu /> : <X />}
        </button>
        */}

        <div className={!isOpen ? "menu" : "menu active"}>
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
      </nav>
    </header>
  );
};

export default NavBar;
