import React from "react";

const ProjectInfoCard = ({ icon, title, items, active = false }) => {
  return (
    <div
      className={`project-info-card ${
        active ? "active" : ""
      }`}
    >
      {/* Icon + Title */}
      <div className="project-info-header d-flex align-items-center gap-3 mb-4">
        <div className="project-icon flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle"><img src={icon} alt="" /></div>
        <h3 className="mb-0 fs_40">{title}</h3>
      </div>

      {/* List */}
      <div className="project-info-content">
        <ul className="list-unstyled mb-0">
          {items.map((item, index) => (
            <li key={index}><span>{item}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfoCard;