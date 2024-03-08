import React from "react";
// import projectsData from "../../Data/projectData";
import "./Project.css";

import img1 from "../../Data/image/ECG.png";
import img3 from "../../Data/image/pxalm.png";
import img2 from "../../Data/image/OXVirtualCare.png";

function Project() {
  return (
    <>
      <header className="header" style={{ marginBottom: "3rem" }}>
        <div className="header-content">
          {" "}
          <h3>Something I've Built</h3>
        </div>
      </header>

      <div className="projects" id="projects">
        <div className="project-content">
          <div className="project--img">
            <div className="image-container">
              <img size="100" src={img1} alt="" className="project--img" />
            </div>

            <p className="project--desc--p2">
              The goal of a Pxalm is to accelerate the personal and professional
              development of mentees. This is achieved by providing mentees with
              guidance, advice and feedback from mentors with more experience
              than themselves.
            </p>

            <div className="image-container">
              <img
                size="100"
                src={img3}
                alt=""
                className="project--img"
                style={{ marginTop: "4rem", marginBottom: "4rem" }}
              />
            </div>
          </div>
        </div>

        <div className="project-content2">
          <div className="project--desc">
            <p className="project--desc--p1">
              The goal of a Pxalm is to accelerate the personal and professional
              development of mentees. This is achieved by providing mentees with
              guidance, advice and feedback from mentors with more experience
              than themselves.
            </p>

            <div className="project--img2">
              <img size="100" src={img2} alt="" className="project--img2" />
            </div>

            <p className="project--desc--p3">
              The goal of a Pxalm is to accelerate the personal and professional
              development of mentees. This is achieved by providing mentees with
              guidance, advice and feedback from mentors with more experience
              than themselves.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
