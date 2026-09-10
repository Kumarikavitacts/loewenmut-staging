import React from "react";
import InnerBnanner from '../components/InnerBanner';
import VictoryIcon from "../components/VictoryIcon";
import MapComponent from "../components/MapComponent";

const Kontakt = () => {
return(
<main>
<section className="inner_hero_section">
    <InnerBnanner title={"Starten Sie jetzt Ihren Countdown"} heading={ <> Wie können wir Sie unterstützen?<VictoryIcon /> </> } description={<>Erzählen Sie uns kurz, worum es geht. Wir hören zu, denken mit und melden uns persönlich bei Ihnen. </>}/>
</section>
<section className="common_info_section">

</section>
<section className="kontakt_section pt_pb_3">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 map-col pe-lg-5">
                <div className="map-wrapper">
                    <MapComponent />
                </div>
                <div className="fw-regular mt-4">Kommen Sie doch mal bei uns vorbei, rufen Sie uns an oder füllen dieses Formular aus, um mit uns ins Gespräch zu kommen!</div>
            </div>
            <div className="col-lg-6 form-col">
                <div className="form_wrapper">
                    <div className="sub_title">WAS DÜRFEN WIR FÜR SIE ANPACKEN?</div>
                    <h2 className="mb-4">Erzählen Sie uns von <span>Ihrem Projekt.</span></h2>
                    <form>
                        <div className="row">
                            <div className="col-12 form-group">
                                <div className="inline_radio_btns">
                                    <div className="radio_item">
                                        <input type="checkbox" id="strategie" className="fake-radio" value="Strategie" />
                                        <label for="strategie">Strategie</label>
                                    </div>
                                    <div className="radio_item">
                                        <input type="checkbox" id="beratung" className="fake-radio" value="Beratung" />
                                        <label for="beratung">Beratung</label>
                                    </div>
                                    <div className="radio_item">
                                        <input type="checkbox" id="branding" className="fake-radio" value="Branding" />
                                        <label for="branding">Branding</label>
                                    </div>
                                    <div className="radio_item">
                                        <input type="checkbox" id="website" className="fake-radio" value="Online / Website" />
                                        <label for="website">Online / Website</label>
                                    </div>
                                    <div className="radio_item">
                                        <input type="checkbox" id="print" className="fake-radio" value="Print" />
                                        <label for="print">Print</label>
                                    </div>
                                    <div className="radio_item">
                                        <input type="checkbox" id="betrieb" className="fake-radio" value="Betrieb" />
                                        <label for="betrieb">Betrieb</label>
                                    </div>
                                    <div className="radio_item">
                                        <input type="checkbox" id="content" className="fake-radio" value="Content" />
                                        <label for="content">Content</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input type="text" className="form-control" required="" placeholder="Vorname" name="vorname"/>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input type="text" className="form-control" required="" placeholder="Nachname" name="nachname"/>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input type="email" className="form-control" required="" placeholder="E-Mail" name="email"/>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input type="text" className="form-control" required="" placeholder="Telefon" name="telefon"/>
                            </div>
                            <div className="col-sm-12 form-group">
                                <input type="text" className="form-control" required="" placeholder="Betreff" name="betreff"/>
                            </div>
                            <div className="col-sm-12 form-group">
                                <textarea rows="5" className="form-control" required="" placeholder="Nachricht" name="nachricht"></textarea>
                            </div>
                            <div className="col-md-6 form-group">
                                <div className="google_captcha">
                                    <img src="/images/re-captcha.png" />
                                </div>
                            </div>
                            <div className="col-md-6 form-group">
                                <div className="form_btn d-flex justify-content-md-end">
                                    <button type="submit" className="button theme_btn">
                                        Senden <img src="/images/btn-arrow.svg" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</main>
)
}

export default Kontakt;