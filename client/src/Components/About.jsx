import "../CSS/About.css";
import { stacks } from "../services/stacks";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h4>Hello!</h4>
        <div className="about-description">
          <p>
            I am a full-stack software engineer with a background in social services and retail.
            I enjoy building things from scratch and apply my passion to software, DIY projects, and Legos. If I am not at my desk coding or planning my next project, you can find me catching a wave, taking a dive, or watching a movie.
          </p>
        </div>
        <div className="skills-description">
          <h5>SKILLS</h5>
          <p>Here are a few technologies I have been working with recently:</p>
        </div>
        <section className="stack-list">
          {stacks.map((stack) => (
            <figure className="stack-item" key={stack.name}>
              {stack.svg}
              <figcaption className="stack-label">{stack.name}</figcaption>
            </figure>
          ))}
        </section>
      </div>
    </section>
  );
};
export default About;