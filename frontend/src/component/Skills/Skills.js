import React from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

import skillsData from "../../Data/skillData";
import skillsImage from "../../utils/skillsImage";

function Skills() {
  const skillBoxStyle = {
    backgroundColor: "#ffff",
    boxShadow: `0px 0px 30px #49b29b`,
  };

  return (
    <div className="skills">
      <div className="line-styling">
        <div className="style-circle"></div>
        <div className="style-circle"></div>
        <div className="style-line"></div>
      </div>
      <div className="skillsHeader">
        <h3>Technology have been working</h3>
      </div>

      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: "#49b29b" }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
