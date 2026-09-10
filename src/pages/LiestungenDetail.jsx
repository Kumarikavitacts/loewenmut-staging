import React from 'react'
import InnerBnanner from '../components/InnerBanner'
import TalkSection from '../components/TalkSection'
import AnimatedText from '../components/AnimatedText';

const LeistungenDetail = () => {
const cards = [
  {
    title: "Strategie",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.",
    icon: "/images/mk-icon-1.svg",
    active: true,
  },
  {
    title: "Strategie",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.",
    icon: "/images/mk-icon-2.svg",
  },
  {
    title: "Markenbildung",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.",
    icon: "/images/mk-icon-3.svg",
  },
  {
    title: "Corporate Design",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.",
    icon: "/images/mk-icon-4.svg",
  },
  {
    title: "Inhalte",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.",
    icon: "/images/mk-icon-5.svg",
  },
  {
    title: "Kampagnen",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.",
    icon: "/images/mk-icon-1.svg",
  },
];

return (
<main>
<section className="inner_hero_section">
    <InnerBnanner  title={"Nibh vel velit Auctor Aliquet"} heading={ <>Marke & Kommunikation </> } description={<>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis<br /> bibendum auctor, nisi elit consequat   </>}/>
</section>
<section className="content_emo_section liestung_emo_sec pt_pb_3">
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-4 ms-auto img-col">
                <div class="anim_circle mx-auto">
                    <AnimatedText />
                </div>
            </div>
            <div className="col-12 col-lg-8 content-col mt-4 mt-lg-0">
                <div className="sec-content">
                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh <span className='txt-001'>vulputate</span> cursus a sit amet mauris. Morbi et amet accumsan <span className='txt-002'>ipsum</span> velit.</p>
                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in <span className='txt-003'>elit.</span> </p>
                    <h3>Nam nec tellus a odio tincidunt auctor a ornare odio. </h3>
                    <div className="theme_btn_wrap mt-4">
                        <a href="/kontakt" className="button theme_btn">Offerte anfordern <img src="/images/btn-arrow.svg" alt="Arrow" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="ld_section_2 pt_pb_3">
    <div className="container">
        <div className='heading-content mb-4'>
            <div className='sub_title'>AUCTOR ALIQUET</div>
            <h2>Nibh vel velit  <span>Auctor Aliquet</span></h2>
        </div>
        <div className="service-grid">
            {cards.map((card, index) => (
            <div key={index} className={`service-card ${card.active ? "active" : ""}`}>
                <div className="service-icon"><img src={card.icon} /></div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>
            ))}
        </div>
    </div>
</section>
<section className="ld_section_3 pt_pb_3 position-relative" style={{ backgroundImage: "url('/images/bg-pattern.png')" }}>
    <div className="container">
        <div className="row flex-lg-row-reverse">
            <div className="col-12 col-lg-5 ms-auto img-col">
                <img src="/images/mk-image.png" alt="Aenean sollicitudin" />
            </div>
            <div className="col-12 col-lg-7 content-col mt-4 mt-lg-0">
                <div className="sec-content list_tick">
                    <div className="sub_title">auctor aliquet 🚀</div>
                    <h2>Aenean sollicitudin, lorem quis bibendum auctor</h2>
                    <p>Nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi et amet accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. </p>
                    <p><strong>Sed non mauris vitae erat consequat auctor eu in elit.</strong></p>
                    <ul>
                        <li>Proin gravida nibh vel velit auctor aliquet.</li>
                        <li>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.</li>
                        <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</li>
                    </ul>
                    <div className="theme_btn_wrap mt-4">
                        <a href="/kontakt" className="button theme_btn">Dieses Projekt starten <img src="/images/btn-arrow.svg" alt="Arrow" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="pt_pb_3 talk_section">
    <TalkSection />
</section>
</main>
)
}

export default LeistungenDetail