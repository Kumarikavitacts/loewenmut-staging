import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const AnimatedText = () => {
    const navigate =useNavigate()
    const handleGoToContact =()=>{
 
      navigate("/kontakt")
    }

    const { theme } = useTheme();

    const themeImages = {
    yellow: "/images/image-loewenmut-yellow.png",
    blue: "/images/image-loewenmut-blue.png",
    green: "/images/image-loewenmut-green.png",
    pink: "/images/image-loewenmut-pink.png",
    };

    // Use manually provided img if available,
    // otherwise use the image according to the selected theme.
    const talkImage =  themeImages[theme] || themeImages.yellow;

return (
    <>
        <span>
            <img src={talkImage} alt="#" />
        </span>
        <img src='/images/moving-text.svg' className="cursorPointer"  onClick={handleGoToContact}  />
    </>
);
};

export default AnimatedText;