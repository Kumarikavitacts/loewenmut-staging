import React from "react";
import Link from "next/link";
import { renderHtmlText } from "./ResuableComponents/renderHtmlText";

const InnerBnanner = ({
  title,
  heading,
  description,
  footer = false,
  button,
  buttonLink,
  buttonTarget,
  buttonRel,
}) => {
  const isExternal = Boolean(buttonTarget);

  return (
    <div
      className="pt_pb_3 inner-banner"
      style={{
        backgroundImage: "url('/images/bg-pattern.png')",
      }}
    >
      <div className="container">
        <div className="inner-banner-content text-center">
          <div className="sub_title justify-content-center">
            {renderHtmlText(title)}
          </div>

          <h1>{renderHtmlText(heading)}</h1>

          <p>{renderHtmlText(description)}</p>

          {footer && button && (
            <div className="ms-lg-3 mt-3 ">
              {isExternal ? (
                <a
                  href={buttonLink || "#"}
                  className="button theme_btn"
                  target={buttonTarget}
                  rel={buttonRel}
                >
                  {button}
                  <img
                    src="/images/btn-arrow.svg"
                    alt="button arrow"
                  />
                </a>
              ) : (
                <Link
                  href={buttonLink || "#"}
                  className="button theme_btn"
                >
                  {button}
                  <img
                    src="/images/btn-arrow.svg"
                    alt="button arrow"
                  />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InnerBnanner;
