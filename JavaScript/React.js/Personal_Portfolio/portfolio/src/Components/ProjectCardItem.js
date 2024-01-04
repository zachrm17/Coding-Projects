import React from "react";

const ProjectCardItem = (props) => {
  const { className, imageUrl, title, subtitle, content, viewProjectLink } =
    props;

  return (
    <div className={className}>
      <div className="meta">
        <div
          className="photo"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{content}</p>
        <p className="view-project">
          <a href={viewProjectLink}>View Project</a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCardItem;
