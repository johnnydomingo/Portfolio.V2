import { NavHashLink } from "react-router-hash-link";
import resume from "../Assets/files/resume.pdf";
import "../CSS/Nav.css"

export default function Nav({ open }) {
  return(
    <nav className={open ? "nav open" : "nav"} open={open}>
        {/*ADD BACK TO TOP BUTTON */}

        {/* NavLinks - ABOUT, PROJECTS, CONTACT, RESUME */}
        <div className="section-links">
          <NavHashLink
            className="nav-link"
            smooth
            to="#about"
            activeClassName="selected"
          >
            ABOUT
          </NavHashLink>
          <NavHashLink
            className="nav-link"
            smooth
            to="#projects"
            activeClassName="selected"
          >
            WORK
          </NavHashLink>
          <a
            href="mailto:johnnykdomingo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="email-btn">CONTACT</button>
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="resume-btn">RESUME</button>
          </a>
        </div>
      </nav>
  )
}
