import React from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

import skillsData from "../../Data/skillData";
import skillsImage from "../../utils/skillsImage";

function Skills() {
  const skillBoxStyle = {
    backgroundColor: "#4995B2",
    boxShadow: `0px 0px 30px #ffff`,
  };

  return (
    <div className="skills" style={{ backgroundColor: "#4995B2" }}>
      <div className="skillsHeader">
        <h2 style={{ color: "#fff" }}>Skills</h2>
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
                <h3 style={{ color: "#ffff" }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
