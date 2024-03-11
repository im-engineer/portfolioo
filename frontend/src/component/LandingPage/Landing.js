import React from "react";
import "./Landing.css";
import socialsData from "../../Data/socialData";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaHome,
  FaMailBulk,
  FaUserGraduate,
  FaProjectDiagram,
} from "react-icons/fa";

function Landing() {
  return (
    <>
      <div className="landing">
        <div className="personalInfo">
          <h1>
            <span
              className="personalInfos"
              style={{
                color: "#49b29b",
                fontStyle: "BestermindRegular",
                fontSize: "60px",
              }}
            >
              Siddhant Singh
            </span>{" "}
            <br />
            <span style={{ color: "#49b29b", fontSize: "17px" }}>
              a full stack developer.
            </span>
          </h1>
        </div>
        <div className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/about">
                <FaHome className="navbar-icon" />
              </a>
            </li>
            <li className="navbar-item">
              <a href="/project">
                <FaProjectDiagram className="navbar-icon" />
              </a>
            </li>
            <li className="navbar-item">
              <a href="#portfolio">
                <FaUserGraduate className="navbar-icon" />
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact">
                <FaMailBulk className="navbar-icon" />{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="icon-bar">
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: "#49b29b" }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: "#49b29b" }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{ color: "#49b29b" }}
                  aria-label="Twitter"
                />
              </a>
            )}
            {socialsData.instagram && (
              <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                <FaInstagram
                  className="landing--social"
                  style={{ color: "#49b29b" }}
                  aria-label="Instagram"
                />
              </a>
            )}
          </div>
        </div>
        <div className="get-in-touch">
          <a href="mailto:azmsiddhant@gmail.com">
            <button>Get In Touch</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
