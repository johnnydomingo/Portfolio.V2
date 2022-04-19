import "../CSS/LandingPage.css";
import Spline from "./Spline";
import TextScramble from "./TextScramble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const LandingPage = () => {
  return (
    <div className="me">
      {/* <BurgerMenu /> */}
      <Spline />
        {/* <h2 className="name">JOHNNY DOMINGO</h2> */}
        {/* <TextScramble /> */}
        {/* <div className="icons">
          <a
            className="social-link"
            href="https://github.com/johnnydomingo"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              id="git-icon"
              className="hover"
            ></FontAwesomeIcon>
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/johnny-domingo/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover"
              id="li-icon"
            ></FontAwesomeIcon>
          </a>
        </div> */}
      {/* </div> */}
    </div>
  );
};
export default LandingPage;
