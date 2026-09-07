import React from "react";

const InnerBnanner = () => {
  return (
    <div className="pt_pb_3 inner-banner" style={{ backgroundImage: "url('/images/bg-pattern.png')" }}>
        <div className="container">
            <div className="inner-banner-content text-center">
                <div className="sub_title justify-content-center">Nibh vel velit auctor</div>
                <h1>Digitalagentur in der <br />Schweiz</h1>
                <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, <br /> nisi elit consequat</p>
            </div>
        </div>
    </div>
  );
}

export default InnerBnanner;