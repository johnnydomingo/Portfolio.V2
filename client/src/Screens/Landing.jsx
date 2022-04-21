import LandingPage from "../Components/LandingPage";
import ScreenContents from "../Components/ScreenContents";
import React from 'react';
// import Spline from "../Components/Spline";
import "../CSS/Landing.css";

export default function Landing() {
  return (
    <div className="home">
      <LandingPage />
      <ScreenContents />
    </div>
  );
};

