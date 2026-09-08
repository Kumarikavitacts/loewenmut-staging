import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InnerBnanner from '../components/InnerBanner';
import TalkSection from '../components/TalkSection';
import AnimatedText from '../components/AnimatedText';

const Agentur = () => {
return (
<main>
<section className="inner_hero_section">
    <InnerBnanner title={"Nibh vel velit Auctor Aliquet"} heading={ <> Digitalagentur in der <br /> Schweiz </> } description={<>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, <br /> nisi elit consequat</>}/>
</section>
<section className="content_emo_section agen_emo_sec pt_pb_3">
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-4">
                <div class="sub_title">lorem quis</div>
            </div>
            <div className="col-12 col-lg-8">
                <h2>Über <span>uns</span></h2>
            </div>
            <div className="col-12 col-lg-4 img-col mt-4">
                <div class="anim_circle">
                    <AnimatedText />
                </div>
            </div>
            <div className="col-12 col-lg-8 content-col mt-4">
                <div className="sec-content">
                    <p>Loewenmut ist seit 2006 Ihr kompetenter Partner in allen <span className='txt-004'>digitalen Fragen.</span> Professionelles Webdesign, starke Vermarktung, gewinnbringende Werbeplatzierung oder Entwicklung <span className='txt-005'>eines</span> umfassendes Konzeptes: Wir unterstützen Sie in jeder Situation. Nennen Sie uns Ihre Anforderungen, Ziele und Wünsche - gemeinsam realisieren <span className='txt-006'>wir</span> Ihren Erfolg.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="uber_unique_section pt_pb_3" style={{ backgroundImage: "url('/images/bg-pattern.png')" }}>
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-6 content-col mb-4 mb-lg-0">
                <div className="sec-content">
                    <div className="sub_title">auctor aliquet </div>
                    <h2>Das macht uns einzigartig</h2>
                    <p>Wir bieten mit unserem grenzenlosen Webdesign nachhaltigen Mehrwert für jedes Unternehmen. Unsere Leidenschaft sind Produkte und Dienstleistungen, welche durch uns auch in der digitalen Welt jeden Tag aufs Neue begeistern. Wir sind ein zuverlässiger und innovativer Partner und arbeiten mit den neuesten Technologien.</p>
                    <p>Mit der Idee verbinden wir das Ziel, aussergewöhnliche Chancen zu bieten – sowohl in wirtschaftlicher, beruflicher als auch persönlicher Hinsicht. Gerade weil es in unserem Metier auch um Menschen geht, machen wir das was wir tun, mit grosser Leidenschaft.</p>
                </div>
            </div>
            <div className="col-12 col-lg-6 img-col">
                <img src="/images/image-unique.png" alt="Aenean sollicitudin" className='rounded' />
            </div>
        </div>
    </div>
</section>
<section className="pt_pb_3 talk_section">
    <TalkSection />
</section>
</main>
);
}

export default Agentur;