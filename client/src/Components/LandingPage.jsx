import "../CSS/LandingPage.css";
import Spline from "./Spline";
import React from 'react';


export default function LandingPage(props) {
  return (
    <div className="landing-page">
      {/* <Spline /> */}
      {/* <div className="scroll-container"> */}
      <div className="arrow" id="arrow" onClick={props.onClick}>
        <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
          {/* </div> */}
      </div>
    // </div>
  );
};
