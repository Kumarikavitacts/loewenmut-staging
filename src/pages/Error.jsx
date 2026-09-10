import React from "react";
import StatusHeader from "../components/ResuableComponents/StatusHeader";

const Error = () => {
    return (
        <StatusHeader
            statusType="wrong"
            title={
                <>
                    Diese Seite konnte leider
                    <br />
                    nicht gefunden werden
                </>
            }
            buttonText="Zurück zur Startseite"
            buttonLink="/"
        />
    );
};

export default Error;