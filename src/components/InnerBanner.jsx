import React from "react";
import { NavLink } from "react-router-dom";

const InnerBnanner = ({ title, heading, description, footer = false, button, buttonLink }) => {
  return (
    <div className="pt_pb_3 inner-banner" style={{ backgroundImage: "url('/images/bg-pattern.png')" }}>
      <div className="container">
        <div className="inner-banner-content text-center">
          <div className="sub_title justify-content-center">{title}</div>
          <h1>{heading}</h1>
          <p>{description}</p>
          {footer && <div className="ms-lg-3 mt-3 mt-lg-0">
            <NavLink to={buttonLink} className="button theme_btn">{button} <img src="/images/btn-arrow.svg" alt="" /></NavLink>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default InnerBnanner;