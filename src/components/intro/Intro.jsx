import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.png";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Siddhant Singh" className="image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4 Completed Projects</small>
            </article>
          </div>
          <p>
            With 1 experience in the MEARN stack, I specialize in frontend, backend, and database tasks, particularly within healthcare projects. Proficient in tools like Trello, Jira, and Jenkins, I ensure seamless project management and integration. I also work with microservices, Docker, Firebase, and Swagger REST API. Passionate about contributing to innovative projects, I am excited to continue making a difference.
          </p>
          <a href="#contact" className="btn btn-success">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

// 1+ years experienced Front End Developer with hands-on experience in
// identifying web-based user interactions along with designing and
// implementing highly-responsive user interface components by
// deploying React concepts. Proficient in translating designs and
// wireframes into high-quality code, and writing application interface
// code via JavaScript and React JS workflows. Adept at monitoring and
// maintaining frontend performance and troubleshooting and debugging
// the same to bolster overall performance.
