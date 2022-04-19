import "../CSS/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Imporium from "../Assets/images/Imporium.png";
import LazyShaka from "../Assets/images/LazyShaka.png";
import Maison1 from "../Assets/images/Maison1.png";

export default function Projects() {
  return (
    <section className="project-card">
      <div className="project-container" id="projects">
        <p className="work">THINGS I'VE BUILT</p>
        {/* <div className="work-text">
          Listed below are projects I am continually working on. Future projects
          of mine will also be added once they are completed.
        </div> */}
        <section className="project-list">
          <div className="container">
            {/* <h3 className="title">Text fadeIn bottom</h3> */}
            <div className="padding">
            <div className="content">
              <a href="https://imporium.netlify.app/" target="_blank" rel="noreferrer">
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src={Imporium} alt=""
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Imporium</h3>
                    <p className="content-text">Team-built MERN full-stack application with user authentication. Imporium is an NFT marketplace application with full CRUD capabilities. In addition, Mongoose and Group Git Version Control was utilized for production.</p>
                    <div className="project-icon">
                    <a href="https://github.com/johnnydomingo/imporium" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} id="git" className="hover"></FontAwesomeIcon></a>
                    </div>
                </div>
              </a>
            </div>
            </div>
            <div className="padding">
            <div className="content">
              <a href="https://maisondesplantes.netlify.app/" target="_blank" rel="noreferrer">
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src={Maison1} alt=""
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Maison des Plantes</h3>
                    <p className="content-text">A full-stack full-CRUD blog paired with authentication, Maison Des Plantes' is a React on Rails application produced with a RESTful JSON API.</p>
                    <div className="project-icon">
                    <a href="https://github.com/johnnydomingo/Maison-Des-Plantes" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} id="git" className="hover"></FontAwesomeIcon></a>
                    </div>
                </div>
              </a>
            </div>
            </div>
            <div className="padding">
            <div className="content">
              <a href="https://johnnydomingo.github.io/Lazy-Shaka/" target="_blank" rel="noreferrer">
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src={LazyShaka} alt=""
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Lazy Shaka</h3>
                    <p className="content-text">Lazy Shaka is a surf forecast application focused on the Hawai'ian Islands. Built with HTML, CSS, and JavaScript, fetch requests to an external API were made to receive accurate data to insert on to the DOM.</p>
                    <div className="project-icon">
                    <a href="https://github.com/johnnydomingo/Lazy-Shaka" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} id="git" className="hover"></FontAwesomeIcon></a>
                    </div>
                </div>
              </a>
            </div>
            </div>
          </div>
        </section>
      </div>
      
    </section>
  );
}
