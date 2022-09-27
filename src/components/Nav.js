import { NavLink } from "react-router-dom";
import line1 from "../images/line1.svg";
import line2 from "../images/line2.svg";
import ev from "../images/ev1.png";


export default function Nav() {
  return (
    <nav className="navlinks-container">
      <div className="navlinks">
        <img src={line1} alt="line" className="lines" />
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
        <NavLink className="navlink" to="/projects">
          Projects
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contact
        </NavLink>

      <NavLink className="EV navlink" to="/">
        <img src={ev} alt="ev" width="40px;" height="40px;"/>
        </NavLink>

        <img src={line2} alt="line" className="lines" />
      </div>
    </nav>
  );
}
