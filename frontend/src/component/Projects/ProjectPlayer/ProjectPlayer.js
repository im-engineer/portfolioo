import React, { useState } from "react";
import ReactPlayer from "react-player";
import videoData from "../../../Data/videoData";
import "./ProjectPlayer.css"; // Import CSS file for styling

function ProjectPlayer() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page

  // Calculate total number of pages
  const totalPages = Math.ceil(videoData.length / itemsPerPage);

  // Update current page
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      {videoData.length > 0 && (
        <div
          className="projectplayers"
          style={{ backgroundColor: "#EA738DFF" }}
        >
          <div className="projectplayers--header">
            <h1 style={{ color: "#89abe3ff" }}>Videos</h1>
          </div>
          <div className="projectplayers--body">
            <div className="projectplayers--bodyContainer">
              {videoData.slice(startIndex, endIndex).map((project) => (
                <div key={project.id} className="projectplayers--card">
                  <ReactPlayer
                    url={project.video}
                    controls={true}
                    width="100%"
                    height="200px"
                  />
                  <div
                    className="projectplayers--cardTitle"
                    style={{ color: "white" }}
                  >
                    Project Name : {project.projectName}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="projectplayers--footer">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="pagination-button"
            >
              <i class="fa fa-angle-double-left" aria-hidden="true"></i>
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="pagination-button"
            >
              <i class="fa fa-angle-double-right"  aria-hidden="true"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPlayer;
