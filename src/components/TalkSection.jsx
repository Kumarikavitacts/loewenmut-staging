import React from "react";

const TalkSection = ({img, title, heading, description}) => {
  return (
    <div className="container">
        <div className="row flex-lg-row-reverse">
            <div className="col-12 col-lg-4 img-col">
                <img src="/images/image-loewenmut.png" alt="Genug geredet" className="img-fluid mx-auto" />
            </div>
            <div className="col-12 col-lg-8 content-col mt-4 mt-lg-0">
                <div className="sec-content">
                    <div className="sub_title">Aenean sollicitudin</div>
                    <h2>Genug geredet.<br />Was dürfen <span>wir für Sie bewegen?</span></h2>
                    <p>Lassen Sie uns über Ihr Projekt sprechen.</p>
                    <div className="theme_btn_wrap mt-4">
                        <a href="/projekt-starten" className="button theme_btn">Los geht’s <img src="/images/btn-arrow.svg" alt="Arrow" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TalkSection;