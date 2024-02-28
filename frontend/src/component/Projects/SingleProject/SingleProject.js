import React from "react";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

export default function SingleProject({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
}) {
  return (
    <>
      <Fade bottom>
        <div
          key={id}
          className="singleProject"
          style={{ backgroundColor: "#49b29b" }}
        >
          <div className="projectContent">
            <h2
              id={name.replace(" ", "-").toLowerCase()}
              style={{ color: "#fff" }}
            >
              {name}
            </h2>
            <img src={image ? image : placeholder} alt={name} />
            <div className="project--showcaseBtn">
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="iconBtn"
                aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                  .replace(" ", "-")
                  .toLowerCase()}-demo`}
              >
                <FaPlay
                  id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                  className="icon"
                  aria-label="Demo"
                />
              </a>
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className="iconBtn"
                aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                  .replace(" ", "-")
                  .toLowerCase()}-code`}
              >
                <FaCode
                  id={`${name.replace(" ", "-").toLowerCase()}-code`}
                  className="icon"
                  aria-label="Code"
                />
              </a>
            </div>
          </div>
          <p
            className="project--desc"
            style={{
              background: "#89ABE3FF",
              color: "#212121",
            }}
          >
            {desc}
          </p>
          <>
            {" "}
            <div
              className="project--lang"
              style={{
                background: "#89ABE3FF",
                color: "#212121",
              }}
            >
              <>
                {Array.isArray(tags) &&
                  tags.map((tag, id) => <span key={id}>{tag}</span>)}
              </>
            </div>
          </>
        </div>
      </Fade>
    </>
  );
}
