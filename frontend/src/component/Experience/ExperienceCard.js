import React from "react";
import Fade from "react-reveal/Fade";
import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";

import "./Experience.css";

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  return (
    <Fade bottom>
      <div
        key={id}
        className="experience-card"
        style={{ backgroundColor: "#49B29b" }}
      >
        <div className="expcard-img" style={{ backgroundColor: "#000000" }}>
          <img src={expImgWhite} alt="" />
        </div>
        <div className="experience-details">
          <h6 style={{ color: "#000000" }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: "#000000" }}>{jobtitle}</h4>
          <h5 style={{ color: "#000000" }}>{company}</h5>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
