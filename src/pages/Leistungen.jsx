import React from 'react'
import InnerBnanner from '../components/InnerBanner'
import LiestungenSlider from '../components/LeistungenSlider'
import StackingCards from '../components/StackingCards'

const Leistungen = () => {
return (
<main>
<section className="inner_hero_section">
    <InnerBnanner  title={"Nibh vel velit Auctor Aliquet"} heading={ <>Unsere massgeschneiderten <br/> Dienstleistungen </> } description={<>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,<br/> nisi elit consequat  </>}/>
</section>
<section className="liestungen_section pb_3 overflow-hidden"  style={{ backgroundImage: "url('/images/bg-pattern.png')" }}>
    <div className="container">
      <LiestungenSlider />
    </div>
</section>
<section className="liestungen_section pt_pb_3">
    <div className="container small_container">
        <div className='heading-content text-center'>
            <div className='sub_title justify-content-center'>Wie funktioniert das?</div>
            <h2>Von der Idee zur <span>digitalen Lösung</span></h2>
            <p>Wir verbinden Strategie, Kreativität und Technologie, um digitale Lösungen zu entwickeln, die nachhaltig funktionieren.</p>
        </div>
      <StackingCards />
    </div>
</section>
</main>
)
}

export default Leistungen