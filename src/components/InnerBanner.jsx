import React from "react";

const InnerBnanner = ({title ,heading,description}) => {
  return (
    <div className="pb_3 inner-banner" style={{ backgroundImage: "url('/images/bg-pattern.png')" }}>
        <div className="container">
            <div className="inner-banner-content text-center">
                <div className="sub_title justify-content-center">{title}</div>
                <h1>{heading}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
  );
}

export default InnerBnanner;