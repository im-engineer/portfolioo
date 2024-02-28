import React from "react";
import "./About.css";
import { aboutData } from "../../Data/aboutData";
import img from "../../Data/image/MicrosoftTeams-image (1).png";

function About() {
  return (
    <div className="about">
      <div className="about-body">
        <div className="about-img">
          <img size="100" src={img} alt="" className="about-imgg" />
        </div>
        <div className="about-description">
          <p
            style={{
              fontSize: "15px",
            }}
          >
            {aboutData.description1}
            {aboutData.description2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
