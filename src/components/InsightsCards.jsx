import React from "react";

export const InsightCard = ({ insight }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <article
        className={`insight-card position-relative overflow-hidden rounded-4 ${
          insight.image ? "has-image" : "no-image"
        }`}
        style={{
          aspectRatio: "375 / 345",
          backgroundColor: insight.bgColor || "#000",
        }}
      >
        {/* IMAGE */}
        {insight.image && (
          <img
            src={insight.image}
            alt=""
            className="insight-card-image position-absolute top-0 start-0 w-100 h-100"
          />
        )}

        {/* LOGO CENTER */}
        {insight.logo && (
          <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100">
            <img
              src={insight.logo}
              alt={insight.title}
              className="insight-card-logo img-fluid"
            />
          </div>
        )}
      </article>
    </div>
  );
};