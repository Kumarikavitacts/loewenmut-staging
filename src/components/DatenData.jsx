"use client";

import React from "react";

const PrivacyAccordion = ({ sections = [] }) => {
  if (!sections?.length) {
    return null;
  }

  return (
    <div
      className="accordion privacy_accordion"
      id="privacyAccordion"
      data-aos="fade-up"
    >
      {sections.map((section, index) => {
        const headingId = `privacy-heading-${index}`;
        const collapseId = `privacy-collapse-${index}`;

        return (
          <div
            className="accordion-item"
            key={section?.id || index}
          >
            <h2
              className="accordion-header"
              id={headingId}
            >
              <button
                type="button"
                className={`accordion-button ${
                  index !== 0 ? "collapsed" : ""
                }`}
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={collapseId}
              >
                <span>{section?.title}</span>
              </button>
            </h2>

            <div
              id={collapseId}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              aria-labelledby={headingId}
              data-bs-parent="#privacyAccordion"
            >
              <div className="accordion-body">
                {section?.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PrivacyAccordion;