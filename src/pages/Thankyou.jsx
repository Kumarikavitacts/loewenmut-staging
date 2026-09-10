import React from "react";
import StatusHeader from "../components/ResuableComponents/StatusHeader";

const Thankyou = () => {
    return (
        <StatusHeader
            statusType="correct"
            title={
                <> Vielen Dank für Ihre <br /> Nachricht! </>
            }
            description="Wir werden uns mit Ihnen in Verbindung setzen."
            buttonText="Zurück zur Startseite"
            buttonLink="/"
        />
    );
};

export default Thankyou;