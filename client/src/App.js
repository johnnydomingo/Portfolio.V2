import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Landing from "./Screens/Landing";
// import Spline from "./Components/Spline";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./CSS/App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const $bigBall = document.querySelector(".cursor__ball--big");
    const $smallBall = document.querySelector(".cursor__ball--small");

    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);

    // Move the cursor
    function onMouseMove(e) {
      gsap.to($bigBall, { duration: 0.5, x: e.pageX - 15, y: e.pageY - 15 });
      gsap.to($smallBall, { duration: 0.01, x: e.pageX - 5, y: e.pageY - 7 });
    }
  }, []);

  return (
      <div className="App">
        <div className="cursor">
        <div className="cursor__ball cursor__ball--big ">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
        <div className="cursor__ball cursor__ball--small">
          <svg height="12" width="12">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
        {/* <Spline /> */}
        {/* <LandingPage /> */}
        <Layout>
        <LandingPage />
          {/* <Spline /> */}
          {/* <Landing /> */}
          <Footer />
        </Layout>
      </div>
    
  );
}
