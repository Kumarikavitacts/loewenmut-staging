import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const TalkSection = ({
  img,
  title,
  heading,
  description,
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const themeImages = {
    yellow: "/images/image-loewenmut-yellow.png",
    blue: "/images/image-loewenmut-blue.png",
    green: "/images/image-loewenmut-green.png",
    pink: "/images/image-loewenmut-pink.png",
  };

  // Use manually provided img if available,
  // otherwise use the image according to the selected theme.
  const talkImage = img || themeImages[theme] || themeImages.yellow;

  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center">
        {/* Image */}
        <div className="col-12 col-lg-4 img-col cursorPointer text-center" data-aos="zoom-in" onClick={() => navigate("/kontakt")} >
          <img src={talkImage} alt={title || "Genug geredet"} className="img-fluid mx-auto" />
        </div>
        {/* Content */}
        <div className="col-12 col-lg-8 content-col mt-4 mt-lg-0" data-aos="fade-right">
          <div className="sec-content">
            <div className="sub_title"> Aenean sollicitudin </div>
            <h2> Genug geredet. <br /> Was dürfen <span>wir für Sie bewegen?</span> </h2>
            <p>Lassen Sie uns über Ihr Projekt sprechen.</p>
            <div className="theme_btn_wrap mt-4">
              <Link to="/kontakt" className="button theme_btn">
                Los geht’s <img src="/images/btn-arrow.svg" alt="Arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkSection;