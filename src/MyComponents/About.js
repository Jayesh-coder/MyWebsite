import React from "react";
import "./About.css";
import school from "../school-pixelicious.png";
import uni from "../uni.png";
import { Cards } from "./Cards";
export const About = () => {
  return (
    <>
      {/* <div className="pixel-card">
        <div className="pixel-img"></div>
        <div className="pixel-body">
          <h5 className="pixel-title">Card title</h5>
          <p className="pixel-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="pixel-button">
            Go somewhere
          </a>
        </div>
      </div> */}
      <h2 className="container my-3 d-flex align-items-center justify-content-center h-100 text">
        About Me
      </h2>
      <div class="row container">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <Cards img={uni} />
        </div>
      </div>
    </>
  );
};
