import React from "react";
import "./Project.css";

import img1 from "../../Data/image/ECG.png";
import img2 from "../../Data/image/OXVirtualCare.png";
import img3 from "../../Data/image/pxalm.png";
import img4 from "../../Data/image/DrivingSafety.png";

function Project() {
  return (
    <>
      <div className="section">
        <div className="line-styling">
          <div className="style-circle"></div>
          <div className="style-circle"></div>
          <div className="style-line"></div>
        </div>
        <div className="header">
          <h3>Something I've Built</h3>
        </div>
        <div className="divvv">
          <div className="body--col--1">
            <div className="data1">
              <div className="project---img">
                <a
                  href="http://ss.stagingsdei.com:9061/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={img1} alt="" className="image1" />
                </a>
              </div>
            </div>

            <div className="data1">
              <div className="project---img">
                <a
                  href="https://app.oxvirtualcare.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={img2} alt="" className="image1" />
                </a>
              </div>
            </div>

            <div className="data1">
              <div className="project---img">
                <a
                  href="https://mean.stagingsdei.com:9193/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={img3} alt="" className="image1" />
                </a>
              </div>
            </div>

            <div className="data1">
              <div className="project---img">
                <a
                  href="http://54.201.160.69:9189/login/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={img4} alt="" className="image1" />
                </a>
              </div>
            </div>
          </div>
          <div className="body--col--2">
            <div className="data2">
              <div className="project---desc">
                <p className="project--desc--p1">
                  The goal of a Pxalm is to accelerate the personal and
                  professional development of mentees. This is achieved by
                  providing mentees with guidance, advice and feedback from
                  mentors with more experience than themselves.
                </p>
              </div>
            </div>

            <div className="data2">
              <div className="project---desc">
                <p className="project--desc--p1">
                  The goal of a Pxalm is to accelerate the personal and
                  professional development of mentees. This is achieved by
                  providing mentees with guidance, advice and feedback from
                  mentors with more experience than themselves.
                </p>
              </div>
            </div>

            <div className="data2">
              <div className="project---desc">
                <p className="project--desc--p1">
                  The goal of a Pxalm is to accelerate the personal and
                  professional development of mentees. This is achieved by
                  providing mentees with guidance, advice and feedback from
                  mentors with more experience than themselves.
                </p>
              </div>
            </div>

            <div className="data2">
              <div className="project---desc">
                <p className="project--desc--p1">
                  The goal of a Pxalm is to accelerate the personal and
                  professional development of mentees. This is achieved by
                  providing mentees with guidance, advice and feedback from
                  mentors with more experience than themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
