import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navlinks-container">
      <div className="navlinks">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
        <NavLink className="navlink" to="/projects">
          Projects
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
