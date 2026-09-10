import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NewsCard = ({
  newsData = [],
  showHeader = false,
  subTitle = "Related news",
  heading = (
    <>
      Nibh vel velit <span>Auctor Aliquet</span>
    </>
  ),
  showFooter  = false,
  button,
  buttonLink
}) => {

  return (
      <div className="container">

        {/* Section Header */}
        {showHeader && (
          <div className="sec-content">
            <div className="sub_title">
              {subTitle}
            </div>

            <h2>
              {heading}
            </h2>
          </div>
        )}

        {/* News Cards */}
        <div className="row">
          {newsData.map((news) => (
            <div
              className="col-12 col-sm-6 col-lg-4 item-col mt-4"
              key={news.id}
            >
              <Link
                to={`/news/${news.id}`|| "/"}
                className="news_item grey_bg"
              >
                <div className="news_img position-relative">

                  <span
                    className={`news_tag ${news.categoryClass}`}
                  >
                    {news.category}
                  </span>

                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-100"
                  />

                </div>

                <div className="news_content">

                  <div className="news_date">
                    {news.date}
                  </div>

                  <h3>
                    {news.title}
                  </h3>

                  <p>
                    {news.description}
                  </p>

                  <hr />

                  <div className="arrow_btn">
                    <span>
                      Weiterlesen
                    </span>

                    <svg
                      width="74"
                      height="74"
                      viewBox="0 0 74 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="36.7696"
                        cy="36.7696"
                        r="26"
                        transform="rotate(-45 36.7696 36.7696)"
                        fill="var(--bs-themecolor)"
                      />

                      <path
                        d="M47.1916 26.7107L47.4887 42.1906L45.1998 42.1464L44.9756 30.4976L27.8367 47.6365L26.1986 45.9984L43.1878 29.0092L31.5364 28.7862L31.492 26.4895L47.1916 26.7107Z"
                        fill="#373737"
                      />
                    </svg>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* All News Button */}
        {showFooter && newsData?.length > 5  && (
          <div className="theme_btn_wrap d-flex justify-content-center mt-4">
            <Link
              to={buttonLink}
              className="button theme_btn"
            >
           {button}

              <img
                src="/images/btn-arrow.svg"
                alt="Arrow"
              />
            </Link>
          </div>
        )}

      </div>
  );
};

export default NewsCard;