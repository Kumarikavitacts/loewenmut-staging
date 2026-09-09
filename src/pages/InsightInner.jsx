import React from 'react'
import { useParams } from 'react-router-dom';
import ProjectCarousel from '../components/Carousel/ProjectCarousel';
import InnerBnanner from '../components/InnerBanner';
import ProjectInfoCard from '../components/ResuableComponents/ProjectInfoCard';
import { insights, projectInfoData } from '../helper/Utils';


const InsightInner = () => {
  const { id } = useParams();

  return (
    <main>
      <section className="inner_hero_section">
        <InnerBnanner title={"lorem quis"} heading={<> BG Zurlinden </>} description={<>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,<br /> nisi elit consequat </>} />
      </section>

    <section className="project_detail_section pt_pb_3">
      <div className="container">
        <div className="row">
          {/* SVG */}
          <div className="col-12 col-lg-4 title-col">
            <div className="sub_title">Nibh vel velit auctor</div>
          </div>
          {/* Text */}
          <div className="col-12 col-lg-8 content-col">
            <p className="intro-text mb-0"> Aenean sollicitudin,{" "} <span className="theme-text"> lorem quis bibendum auctor, nisi elit consequat </span>{" "} ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
          </div>
        </div>
        <div className="project-showcase py-4 py-md-5">
          <div className="row g-3 g-lg-4 align-items-stretch">
            {/* Left Image */}
            <div className="col-12 col-lg-6">
              <div className="project-image-card position-relative overflow-hidden rounded-4 h-100">
                <img src="/images/Rectangle1226.png" alt="BG Zurlinden"  className="project-main-image w-100 h-100" />

                {/* Image Info */}
                <div className="project-image-info position-absolute start-0 end-0 bottom-0 d-flex align-items-center justify-content-between m-3 p-3 p-md-4 rounded-4">
                  <div className="project-image-content">
                    <h3 className="mb-1">BG Zurlinden</h3>
                    <p className="mb-0"> Die innovative Genossenschaft </p>
                  </div>
                  <img className="project-logo-svg" src='/images/logo-bgz.svg' />
                </div>
              </div>
            </div>
            {/* Right Cards */}
            <div className="col-12 col-lg-6">
              <div className="project-info-list d-flex flex-column gap-3 h-100 list_tick">
                {projectInfoData.map((item, index) => (
                  <ProjectInfoCard key={index} icon={item.icon} title={item.title} items={item.items} active={item.active} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pt_pb_3 search_section" style={{ backgroundImage: "url('/images/bg-pattern.png')" }}>
      <div className="container" >
          <div className="sec-heading mb-4">
            <div className='sub_title'>auctor aliquet</div>
            <h2>Nibh vel velit <span>Auctor Aliquet</span></h2>
          </div>
          <div className="overflow-hidden project-detail-image mb-4">
            <img src="/images/Rectangle1281.png" alt="Nibh vel velit Auctor Aliquet" className="w-100 d-block" />
          </div>
        {/* Description */}
        <div className="row article_in_detail">
          {/* Left Description */}
          <div className="col-12 col-lg-6 content-col">
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi et amet accumsan ipsum velit. Nam nec tellus <span class="txt-007">a</span> odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
          </div>
          {/* Right Description */}
          <div className="col-12 col-lg-6">
            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi et amet accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a <span class="txt-008">ornare</span> odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
          </div>
        </div>
      </div>
      </section>
      <section className='pt_pb_3 project-carousel-section overflow-hidden'>
        <ProjectCarousel title={"Entdecken Sie weitere Projekte"} description={"Proin gravida nibh vel velit auctor aliquet. Aenea sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."} description2={<> Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit <span class='txt-008'>consequat</span> ipsum, nec sagittis sem nibh id elit.</> } project={insights} button={"Case ansehen"}/>
      </section>
    </main>
  )
}

export default InsightInner