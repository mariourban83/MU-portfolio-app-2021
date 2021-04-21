import React from "react";
import { DiGithubFull, DiGithubBadge } from "react-icons/di";

const TheProjectsCard = ({ name, description, url, img }) => {
  return (
    <section className="project-wrapper">
      <div className="project-card">
        <img src={img} alt="project-cover" className="project-image" />
        <div className="project-card__text-wrapper">
          <h2 className="project-name">{name}</h2>
          <div className="project-card__details-wrapper">
            <p className="project-description">{description}</p>
            <a href={url} className="github-link">
              <DiGithubFull />
              <DiGithubBadge />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheProjectsCard;
