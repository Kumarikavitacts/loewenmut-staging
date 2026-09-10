import React from "react";
import InnerBnanner from '../components/InnerBanner';

const Impressum = () => {
return(
<main>
<section className="inner_hero_section">
    <InnerBnanner title={"KLAR GEREGELT."} heading={ <> Impressum </> } description={<>Angaben zur Loewenmut Punkt GmbH, Kontaktinformationen und rechtliche Hinweise zu unserem Webauftritt. </>}/>
</section>
<section className="common_info_section">

</section>
<section className="impressum_section pt_pb_3">
    <div className="container">
        <div className="imprsm_block">
            <h2>Copyright</h2>
            <p>Sämtliche Texte, Bilder, Grafiken und sonstige Inhalte dieser Website sowie deren Anordnung sind durch das Urheberrecht und andere Schutzgesetze geschützt. Es darf keine Vervielfältigung, Veränderung oder Verwendung der genannten Inhalte in anderen elektronischen oder gedruckten Publikationen ohne vorherige Zustimmung durch die Loewenmut Punkt GmbH erfolgen.</p>
        </div>
        <div className="imprsm_block mt-4 mt-lg-5">
            <h2>Datenschutz</h2>
            <p>Die Loewenmut Punkt GmbH misst dem Schutz Ihrer personenbezogenen Daten einen hohen Stellenwert bei. Die Beachtung und Einhaltung der gesetzlichen Bestimmungen über den Datenschutz und die Datensicherheit sind für uns selbstverständlich. Ihre personenbezogenen Daten werden von uns nur mit Ihrem Wissen und Ihrer Einwilligung erhoben, gespeichert und genutzt.</p>
        </div>
    </div>
</section>
</main>
)
}

export default Impressum;