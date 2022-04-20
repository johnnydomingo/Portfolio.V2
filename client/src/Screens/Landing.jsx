// import LandingPage from "../Components/LandingPage";
import About from "../Components/About";
import Projects from "../Components/Projects";
// import Spline from "../Components/Spline";
import "../CSS/Landing.css";

const Landing = () => {
  return (
    <div className="home">
      <div>
        {/* <LandingPage /> */}
        {/* <Spline /> */}
      </div>
      <div className="about-section">
        <About />
      </div>
      <Projects />
      <div></div>
    </div>
  );
};
export default Landing;
