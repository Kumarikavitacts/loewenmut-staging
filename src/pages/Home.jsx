import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import ServiceSlider from "../components/ServiceSlider";
import WorkSection from "../components/WorkSection";
import TalkSection from "../components/TalkSection";
import AnimatedText from "../components/AnimatedText";
import NewsCard from "../components/ResuableComponents/NewsCard";
import { newsData } from '../helper/Utils';

const themeAssets = {
  yellow: {
    icon1: "/images/hero-icon-3.png",
    icon2: "/images/hero-icon-4.png",
  },

  blue: {
    icon1: "/images/hero-icon-3-blue.png",
    icon2: "/images/hero-icon-4-blue.png",
  },

  green: {
    icon1: "/images/hero-icon-3-green.png",
    icon2: "/images/hero-icon-4-green.png",
  },

  pink: {
    icon1: "/images/hero-icon-3-pink.png",
    icon2: "/images/hero-icon-4-pink.png",
  },
};

const Home = () => {
  const { theme } = useTheme();
  const nextSectionRef = useRef(null);

  const assets = themeAssets[theme] || themeAssets.yellow;

  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className={`home-page theme-${theme}`}>
      {/* ================= HERO ================= */}
      <section className="pb_3 hero_section">
        <div className="container position-relative">
          <div className="hero_row pb-0">
            <h1 className="text-center">
              <span>Strategie - Design - Technologie</span>

              <div
                className="line"
                data-text="Digitale Lösungen"
              >
                .Digitale Lösungen.
              </div>

              <div
                className="line line-2"
                data-text="Mit Loewenmut"
              >
                Mit Loewenmut
              </div>
            </h1>

            <div className="hero_tech_text">
              <div className="htt_left">
                <img
                  src={assets.icon1}
                  alt=""
                />

                <p>
                  Strategie, Design und Technologie aus einer Hand. Für
                  Marken, Websites und Plattformen, die Unternehmen wirklich
                  weiterbringen.
                </p>
              </div>

              <div className="htt_right">
                <img
                  src={assets.icon2}
                  alt=""
                />

                <button
                  type="button"
                  className="scroll-down-btn"
                  onClick={scrollToNext}
                  aria-label="Scroll down"
                >
                  <span className="mouse-icon">
                    <span className="mouse-wheel"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        ref={nextSectionRef}
        className="pt_pb_3 services_section overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-pattern.png')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 content-col">
              <div className="sub_title">
                Nibh vel velit auctor
              </div>
            </div>

            <div className="col-12 col-lg-7 ms-auto content-col">
              <h2>
                Lorem nibh vel{" "}
                <span>velit auctor aliquet. Aenean sollicitudin.</span>
              </h2>
            </div>
          </div>

          <ServiceSlider />
        </div>
      </section>

      {/* ================= PROJECT ================= */}
      <section className="pt_3 project_section">
        <div className="container">
          <div className="border-wrapper position-relative">
            <div className="row flex-lg-row-reverse">
              <div className="col-12 col-lg-6 ms-auto img-col">
                <img
                  src="/images/ortweise.png"
                  alt="BG Zurlinden"
                  className="w-100 img_radius"
                />
              </div>

              <div className="col-12 col-lg-6 content-col mt-4 mt-lg-0">
                <div className="sec-content">
                  <div className="sub_title">
                    AUSGEWÄHLTES PROJEKT
                  </div>

                  <h2>BG Zurlinden</h2>

                  <h3 className="fw-regular my-3">
                    Digitaler Gesamtauftritt für eine innovative
                    Baugenossenschaft.
                  </h3>

                  <p>
                    Wir durften die BG Zurlinden bei der digitalen
                    Transformation begleiten. Mit Strategie, Design,
                    Technologie und Content aus einer Hand.
                  </p>

                  <ul>
                    <li>Website-Relaunch</li>
                    <li>Support</li>
                    <li>Content-Struktur</li>
                    <li>Projektkommunikation</li>
                    <li>SEO</li>
                  </ul>

                  <div className="theme_btn_wrap mt-4">
                    <Link
                      to={`/insights/9`}
                      className="button theme_btn"
                    >
                      Case ansehen
                      <img
                        src="/images/btn-arrow.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="anim_circle">
              <AnimatedText />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSIGHTS ================= */}
      <section className="pt_pb_3 insight_section">
        <div className="container">
          <div className="sec-content">
            <div className="sub_title">
              AUSGEWÄHLTE insights
            </div>

            <div className="title_btn_flex">
              <h2 className="mb-0">
                Nibh vel velit{" "}
                <span>
                  Auctor
                  <br />
                  Aliquet
                </span>
              </h2>

              <div className="theme_btn_wrap">
                <Link
                  to="/insights"
                  className="button theme_btn"
                >
                  alle Insights
                  <img
                    src="/images/btn-arrow.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt-lg-4">
            {/* Insight 1 */}
            <div className="col-12 col-sm-6 col-lg-4 item-col mt-4">
              <Link
                to="/insights/9"
                className="insight_item"
              >
                <div className="insight_img">
                  <img
                    src="/images/mine-ex.png"
                    alt="mine-ex"
                    className="w-100"
                  />
                </div>

                <div className="insight_content_btn">
                  <div className="insight_content">
                    <h3>mine-ex</h3>
                    <p>Mobile App - UI/UX Design</p>
                  </div>

                  <div className="arrow_btn">
                    <svg
                      width="62"
                      height="62"
                      viewBox="0 0 62 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7031 15.3516L45.8089 15.3516L45.8089 39.4574"
                        stroke="#878C91"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M12.0547 49.1094L45.4732 15.6908"
                        stroke="#878C91"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Insight 2 */}
            <div className="col-12 col-sm-6 col-lg-4 item-col mt-4">
              <Link
                to="/insights/8"
                className="insight_item"
              >
                <div className="insight_img">
                  <img
                    src="/images/martin-guitar.jpg"
                    alt="Martin Guitar"
                    className="w-100"
                  />
                </div>

                <div className="insight_content_btn">
                  <div className="insight_content">
                    <h3>Martin &amp; Co.</h3>
                    <p>Dashboard - UI/UX Design</p>
                  </div>

                  <div className="arrow_btn">
                    <svg
                      width="62"
                      height="62"
                      viewBox="0 0 62 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7031 15.3516L45.8089 15.3516L45.8089 39.4574"
                        stroke="#878C91"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M12.0547 49.1094L45.4732 15.6908"
                        stroke="#878C91"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Insight 3 */}
            <div className="col-12 col-sm-6 col-lg-4 item-col mt-4">
              <Link
                to="/insights/7"
                className="insight_item"
              >
                <div className="insight_img">
                  <img
                    src="/images/tellme.png"
                    alt="Tellme"
                    className="w-100"
                  />
                </div>

                <div className="insight_content_btn">
                  <div className="insight_content">
                    <h3>tellme</h3>
                    <p>Landingpage - UI/UX Design</p>
                  </div>

                  <div className="arrow_btn">
                    <svg
                      width="62"
                      height="62"
                      viewBox="0 0 62 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7031 15.3516L45.8089 15.3516L45.8089 39.4574"
                        stroke="#878C91"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M12.0547 49.1094L45.4732 15.6908"
                        stroke="#878C91"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK ================= */}
      <section
        className="pt_3 search_section"
        style={{
          backgroundImage: "url('/images/bg-pattern.png')",
        }}
      >
        <div className="container small_container">
          <WorkSection />
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="pt_pb_3 news_section">
      <NewsCard
                newsData={newsData.slice(0, 3)}
                showHeader={true}
                showFooter={true}
                button={"Alle News"}
                buttonLink={"/news"}
            />
            </section>

      {/* ================= TALK ================= */}
      <section className="pt_pb_3 talk_section">
        <TalkSection />
      </section>
    </main>
  );
};

export default Home;