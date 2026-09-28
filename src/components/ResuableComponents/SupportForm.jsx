"use client";

import React, { useRef, useState } from "react";
import TurnstileWidget from "@/components/ResuableComponents/TurnstileWidget";

// German replacements for the browser's default (English) validation text
const DEFAULT_MESSAGES = {
  valueMissing: "Bitte füllen Sie dieses Feld aus.",
  typeMismatch: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  patternMismatch: "Bitte geben Sie eine gültige Telefonnummer ein (nur Zahlen).",
};

// Telefon: only digits, spaces, "+", "-", "(" and ")" are allowed
const PHONE_ALLOWED_CHARS_REGEX = /[^0-9+\-\s()]/g;
const PHONE_PATTERN = "^[0-9+\\-\\s()]{6,}$";

const INITIAL_FORM = {
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  supportanfrage: "",
  nachricht: "",
};

const SupportForm = () => {
  const turnstileRef = useRef(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
    e.target.setCustomValidity(""); // clear old validation message
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    const filteredValue = value.replace(PHONE_ALLOWED_CHARS_REGEX, "");
    setFormData((current) => ({ ...current, [name]: filteredValue }));
    e.target.setCustomValidity("");
  };

  const handleInvalid = (e, messages = {}) => {
    const target = e.target;
    const merged = { ...DEFAULT_MESSAGES, ...messages };

    if (target.validity.valueMissing) {
      target.setCustomValidity(merged.valueMissing);
    } else if (target.validity.typeMismatch) {
      target.setCustomValidity(merged.typeMismatch);
    } else if (target.validity.patternMismatch) {
      target.setCustomValidity(merged.patternMismatch);
    } else {
      target.setCustomValidity("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!turnstileToken) {
      setErrorMessage("Bitte bestätigen Sie, dass Sie kein Bot sind.");
      return;
    }

    setLoading(true);

    // No backend yet – just show the data in the console
    console.log("Support form data:", formData);

    setSuccessMessage("Ihre Supportanfrage wurde erfasst.");
    setFormData(INITIAL_FORM);
    setLoading(false);

    // Turnstile tokens are single-use – reset after every submit
    setTurnstileToken("");
    turnstileRef.current?.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Vorname"
            name="vorname"
            value={formData.vorname}
            onChange={handleChange}
            onInvalid={(e) => handleInvalid(e)}
            required
          />
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nachname"
            name="nachname"
            value={formData.nachname}
            onChange={handleChange}
            onInvalid={(e) => handleInvalid(e)}
            required
          />
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="email"
            className="form-control"
            placeholder="E-Mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onInvalid={(e) => handleInvalid(e)}
            required
          />
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handlePhoneChange}
            pattern={PHONE_PATTERN}
            inputMode="tel"
            onInvalid={(e) => handleInvalid(e)}
            required
          />
        </div>

        <div className="col-sm-12 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Meine Supportanfrage"
            name="supportanfrage"
            value={formData.supportanfrage}
            onChange={handleChange}
            onInvalid={(e) => handleInvalid(e)}
            required
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
              <img src="/images/btn-arrow.svg" alt="button arrow" />
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

export default SupportForm;