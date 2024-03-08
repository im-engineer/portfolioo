import React from "react";
import "./Landing.css";
import socialsData from "../../Data/socialData";
// import resume from "../../assets/resume/ssrresume.pdf";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
            <span
              style={{
                color: "#49b29b",
                fontSize: "17px",
              }}
            >
              a full stack developer.
            </span>
          </h1>
        </div>
        <div class="icon-bar">
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
          <button>Get In Touch</button>
        </div>
      </div>
    </>
  );
}

export default Landing;