import React from "react";
import InnerBnanner from '../components/InnerBanner';
import PrivacyAccordion from "../components/DatenData";

const Datenschutz = () => {
return(
<main>
<section className="inner_hero_section">
    <InnerBnanner title={"IHRE DATEN. UNSERE VERANTWORTUNG."} heading={ <> Datenschutzerklärung </> } description={<>Hier erfahren Sie, welche personenbezogenen Daten wir erheben, wie wir sie verwenden und welche Rechte Sie haben.</>}/>
</section>
<section className="common_info_section">

</section>
<section className="impressum_section pt_pb_3">
    <div className="container">
        <PrivacyAccordion />
    </div>
</section>
</main>
)
}

export default Datenschutz;