import React from 'react'
import InnerBnanner from '../components/InnerBanner'
import ContactInfo from '../components/ResuableComponents/ContactInfo'

const Impressum = () => {
  return (
   <main>
    <section className="inner_hero_section">
    <InnerBnanner title={"Nibh vel velit Auctor Aliquet"} heading={ <> Digitalagentur in der <br /> Schweiz </> } description={<>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, <br /> nisi elit consequat</>}/>
</section>
<div>
    <ContactInfo/>
</div>
   </main>
  )
}

export default Impressum