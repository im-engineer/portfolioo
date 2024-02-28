import React from "react";

import "./Experience.css";
import expimg from "../../assets/svg/experience/expPink.svg";
import experienceData from "../../Data/experienceData";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div
      className="experience"
      id="experience"
      style={{ backgroundColor: "#ffff" }}
    >
      <div className="experience-body">
        <div className="experience-image">
          <img src={expimg} alt="" />
        </div>
        <div className="experience-description">
          <h1 style={{ color: "#000000" }}>Experience & Education</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
