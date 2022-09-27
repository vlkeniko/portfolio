import gmail from "../images/gm.svg";
import ln from "../images/ln.svg";
import github from "../images/git.svg";
import line3 from "../images/line3.svg";

export default function SocialsIcons() {
  return (
    <>
      <div className="socials-icons">
        <a href="mailto:eniko.valko@gmail.com">
          <img
            className="icon"
            src={gmail}
            alt="gmail"
            width="30"
            height="30"
          />
        </a>
        <a href="https://www.linkedin.com/in/eniko-valko-380875249/">
          <img className="icon" src={ln} alt="ln" width="30" height="30" />
        </a>
        <a href="https://github.com/vlkeniko">
          <img className="icon" src={github} alt="git" width="30" height="30" />
        </a>

        <img className="icon bottom-line" src={line3} alt="blue line" />
      </div>
      <a href="/" className="EV-web">
        EV
      </a>
    </>
  );
}
