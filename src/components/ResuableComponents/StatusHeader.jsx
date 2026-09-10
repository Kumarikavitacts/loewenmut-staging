import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const StatusHeader = ({
    statusType = "correct",
    title,
    description,
    buttonText = "Zurück zur Startseite",
    buttonLink = "/",
}) => {
    const { theme } = useTheme();

    const statusImages = {
        yellow: {
            correct: "/images/status/yellow-correct.png",
            wrong: "/images/status/yellow-wrong.png",
        },
        blue: {
            correct: "/images/status/blue-correct.png",
            wrong: "/images/status/blue-wrong.png",
        },
        green: {
            correct: "/images/status/green-correct.png",
            wrong: "/images/status/green-wrong.png",
        },
        pink: {
            correct: "/images/status/pink-correct.png",
            wrong: "/images/status/pnk-wrong.png",
        },
    };

    const statusImage =
        statusImages[theme]?.[statusType] ||
        statusImages.yellow[statusType];

    return (
    <section className="status-header-section pb_3" style={{ backgroundImage: "url('/images/bg-pattern.png')", }}>
        <div className="container">
            {/* Status Image */}
            <div className="status-header-icon text-center">
                <img  src={statusImage}  alt={statusType === "correct" ? "Success" : "Error"} className="img-fluid" />
            </div>
            <div className="inner-banner-content text-center">
                {title && (
                <h1>{title}</h1>
                )}
                {description && (
                <p>{description}</p>
                )}
                {buttonText && buttonLink && (
                <div className="mt-4">
                    <NavLink to={buttonLink} className="button theme_btn" >
                        {buttonText} <img src="/images/btn-arrow.svg" alt="" />
                    </NavLink>
                </div>
                )}
            </div>
        </div>
    </section>
    );
};

export default StatusHeader;