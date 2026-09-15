"use client";

import React from 'react'
import ServiceSlider from '@/components/ServiceSlider'
import { useSelector } from 'react-redux'
import { renderHtmlText } from '@/components/ResuableComponents/renderHtmlText';
 const Services = ({nextSectionRef}) => {
  const servicesIntro = useSelector((state) => state.home.data?.servicesIntro);
  const kurztitel = servicesIntro?.Kurztitel || "";
  const titel = servicesIntro?.Titel || "";
  const paragraph=servicesIntro?.Text?.[0]?.children?.[0]?.text ||""
  return (
    <section ref={nextSectionRef} className="pt_pb_3 services_section overflow-hidden" style={{ backgroundImage: "url('/images/bg-pattern.png')", }} >
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 content-col" data-aos="fade-right">
          <div className="sub_title">{kurztitel} </div>
        </div>
        <div className="col-12 col-lg-7 ms-auto content-col" data-aos="fade-left">
          <h2> {renderHtmlText(titel)}</h2>
        </div>
      </div>
      <ServiceSlider paragraph={renderHtmlText(paragraph)}/>
    </div>
  </section>
  )
}
export default Services