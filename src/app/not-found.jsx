"use client";

import StatusHeader from "@/components/ResuableComponents/StatusHeader";

export default function NotFound() {
  return (
    <StatusHeader
      statusType="wrong"
      title={
        <>
          Diese Seite konnte leider <br />
          nicht gefunden werden
        </>
      }
      buttonText="Zurück zur Startseite"
      buttonLink="/"
    />
  );
}