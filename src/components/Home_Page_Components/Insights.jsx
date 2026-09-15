"use client";

import React from 'react'
import Link from "next/link"
import { useRouter } from "next/navigation";

import { useSelector } from 'react-redux';
import { getMediaUrl } from '@/helper/MediaUrl';
import {renderHtmlText} from "@/components/ResuableComponents/renderHtmlText"
const Insights = () => {
  const router = useRouter();
  const insights = useSelector(
    (state) => state.home.data?.references
  );

  const subTitle = insights?.Kurztitel || "";
  const titel = insights?.Titel || "";
  const buttonText = insights?.Button?.[0]?.button_text ;
const buttonLink = insights?.Button?.[0]?.button_link ;
// const buttonTarget = insights?.Button?.[0]?.Target || "_self";
  // Map API references
  const mappedReferences = (insights?.referenzens || []).map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.Titel,
    slug: item.Slug,
    text: item.Text,
    image: item.Bild,
    imageUrl: item.Bild?.url
      ? getMediaUrl(item.Bild.url)
      : null,
    module: item.Modul || [],
  }));


  return (
<>
<section className="pt_pb_3 insight_section">
        <div className="container">
          <div className="sec-content" data-aos="fade-up">
            <div className="sub_title">
             {renderHtmlText(subTitle)}
            </div>
            <div className="title_btn_flex">
              <h2 className="mb-0">{renderHtmlText(titel)} </h2>
              <div className="theme_btn_wrap">
                <Link href="/insights" className="button theme_btn">{buttonText} <img src="/images/btn-arrow.svg" alt="" /> </Link>
              </div>
            </div>
          </div>
          <div className="row mt-lg-4" data-aos="fade-up">

            {mappedReferences.map((insight) => (
              <div
                className="col-12 col-sm-6 col-lg-4 item-col mt-4"
                key={insight.id}
              >



                <div
                  onClick={() => router.push(`/insights/${insight.slug}`)}
                  className="insight_item"
                >

                  {/* ONLY THIS CHANGES HEIGHT */}
                  <div className="insight_img">
                    <img
                      src={insight.imageUrl}
                      alt={insight.alt}
                    />
                  </div>

                  {/* THIS MOVES WITH IMAGE */}
                  <div className="insight_content_btn">

                    <div className="insight_content">
                      <h3>{insight.title}</h3>
                      <p>{insight.text}</p>
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

                </div>


              </div>
            ))}


          </div>
        </div>
      </section></>
  )
}

export default Insights