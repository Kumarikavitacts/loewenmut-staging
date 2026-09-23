"use client";

import React, { useRef, useState } from "react";
import TurnstileWidget from "@/components/ResuableComponents/TurnstileWidget";
import { useRouter } from "next/navigation";
const strategies = [
  { id: "strategie", label: "Strategie", value: "Strategie" },
  { id: "beratung", label: "Beratung", value: "Beratung" },
  { id: "branding", label: "Branding", value: "Branding" },
  { id: "website", label: "Online / Website", value: "Online / Website" },
  { id: "print", label: "Print", value: "Print" },
  { id: "betrieb", label: "Betrieb", value: "Betrieb" },
  { id: "content", label: "Content", value: "Content" },
];

const ContactForm = () => {
  const turnstileRef = useRef(null);
const router = useRouter();
  const [selectedStrategies, setSelectedStrategies] = useState([]);
  const [turnstileToken, setTurnstileToken] = useState("");

  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    betreff: "",
    nachricht: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleStrategyChange = (value) => {
    setSelectedStrategies((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!turnstileToken) {
      setErrorMessage("Bitte bestätigen Sie, dass Sie kein Bot sind.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          strategien: selectedStrategies,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSuccessMessage(result.message || "Nachricht erfolgreich gesendet.");

      setFormData({
        vorname: "",
        nachname: "",
        email: "",
        telefon: "",
        betreff: "",
        nachricht: "",
      });
      setSelectedStrategies([]);
      // Redirect after 2 seconds
          setTimeout(() => {
            router.push("/vielen-dank");
          }, 2000);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error instanceof Error ? error.message : "Ein Fehler ist aufgetreten."
      );
    } finally {
      setLoading(false);
      // Turnstile tokens are single-use — always reset after an attempt,
      // whether it succeeded or failed.
      turnstileRef.current?.reset();

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 form-group">
          <div className="inline_radio_btns">
            {strategies.map((strategy) => (
              <div className="radio_item" key={strategy.id}>
                <input
                  type="checkbox"
                  id={strategy.id}
                  className="fake-radio"
                  value={strategy.value}
                  checked={selectedStrategies.includes(strategy.value)}
                  onChange={() => handleStrategyChange(strategy.value)}
                />
                <label htmlFor={strategy.id}>{strategy.label}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Vorname*"
            name="vorname"
            value={formData.vorname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nachname*"
            name="nachname"
            value={formData.nachname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="email"
            className="form-control"
            placeholder="E-Mail*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Telefon*"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-sm-12 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Betreff"
            name="betreff"
            value={formData.betreff}
            onChange={handleChange}
          />
        </div>

        <div className="col-sm-12 form-group">
          <textarea
            rows={5}
            className="form-control"
            placeholder="Nachricht"
            name="nachricht"
            value={formData.nachricht}
            onChange={handleChange}
            
          />
        </div>

        <div className="col-md-6 form-group">
          <TurnstileWidget ref={turnstileRef} onVerify={setTurnstileToken} />
        </div>

        <div className="col-md-6 form-group">
          <div className="form_btn d-flex justify-content-md-end">
            <button type="submit" className="button theme_btn" disabled={loading}>
              {loading ? "Senden..." : "Senden"}
              <img src="/images/btn-arrow.svg" alt="" />
            </button>
          </div>
        </div>

        {successMessage && (
          <div className="col-12">
            <div className="alert alert-success">{successMessage}</div>
          </div>
        )}

        {errorMessage && (
          <div className="col-12">
            <div className="alert alert-danger">{errorMessage}</div>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;