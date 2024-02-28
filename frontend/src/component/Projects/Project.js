import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../../Data/projectData";
import { HiArrowRight } from "react-icons/hi";

import "./Project.css";
import SingleProject from "./SingleProject/SingleProject";

function Project() {
  return (
    <>
      {projectsData.length > 0 && (
        <div className="projects" id="projects">
          <div className="projects--header">
            <h3>Projects</h3>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 3).map((project) => (
                <SingleProject
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>
            {/* {projectsData.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button className="viewAllBtn">
                    View All
                    <HiArrowRight className="viewArr" />
                  </button>
                </Link>
              </div>
            )} */}
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
