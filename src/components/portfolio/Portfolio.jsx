import "./portfolio.css";

import IMG1 from "../../assets/ECG.png";
import IMG2 from "../../assets/OXVirtualCare.png";
import IMG3 from "../../assets/pxalm.png";
import IMG4 from "../../assets/DrivingSafety.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "EKG",
      img: IMG1,
      description:
        "The goal of EKG is to offer a flexible platform for patients to submit their EKG reports anytime, saving both patient and provider time.",
      technologies:
        "Angular | Node | JavaScript | TypeScript | ExpressJs | MongoDB",
      link: "http://ss.stagingsdei.com:9061/login",
    },
    {
      id: 2,
      title: "Driving Safety",
      img: IMG4,
      description:
        "The Driving Safety project ensures driver fitness by utilizing camera and SoXAI ring technology to monitor pulse, determining whether the driver is fit to operate a vehicle.",
      technologies:
        "Angular | Node | JavaScript | TypeScript | ExpressJs | MongoDB",
      link: "http://54.201.160.69:9189/login/",
    },
    {
      id: 3,
      title: "OX Virtual Care",
      img: IMG2,
      description:
        "Ox Virtual Care provides post-discharge support with leading monitors, ensuring optimal clinical user experience and seamless integration with other systems.",
      technologies:
        "Angular | Node | JavaScript | TypeScript | ExpressJs | MongoDB",
      link: "https://app.oxvirtualcare.com/",
    },
    {
      id: 4,
      title: "Pxalm",
      img: IMG3,
      description:
        "Pxalm accelerates mentees' personal and professional growth by connecting them with experienced mentors who offer guidance, advice, and feedback.",
      technologies:
        "Angular | Node | JavaScript | TypeScript | ExpressJs | MongoDB",
      link: "https://mean.stagingsdei.com:9193/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-success"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
