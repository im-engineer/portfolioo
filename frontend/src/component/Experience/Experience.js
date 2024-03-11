import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="line-styling">
        <div className="style-circle"></div>
        <div className="style-circle"></div>
        <div className="style-line"></div>
      </div>
      <h3 className="experience-header">Experience</h3>
      {/* <div className="experience-line"></div> */}
      <div className="experience-body">
        <div className="experience-description"></div>
      </div>
    </div>
  );
}

export default Experience;
