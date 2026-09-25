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

// VALIDATION FIX: German replacements for the browser's default
// (English) HTML5 validation bubble text, keyed by validity state.
// Passed per-field into handleInvalid() below.
const DEFAULT_MESSAGES = {
  valueMissing: "Bitte füllen Sie dieses Feld aus.",
  typeMismatch: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  patternMismatch: "Bitte geben Sie eine gültige Telefonnummer ein (nur Zahlen).",
};

// VALIDATION FIX: only digits, spaces, "+", "-", "(" and ")" are allowed
// in the Telefon field — letters and other characters are stripped as
// the user types, and this same pattern backs the HTML5 `pattern`
// attribute on the input for a final check on submit.
const PHONE_ALLOWED_CHARS_REGEX = /[^0-9+\-\s()]/g;
const PHONE_PATTERN = "^[0-9+\\-\\s()]{6,}$";

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

    // VALIDATION FIX: clear any previously set custom validity message
    // as soon as the user edits the field, so the browser re-checks
    // validity fresh on the next submit attempt instead of re-showing
    // a stale message.
    e.target.setCustomValidity("");
  };

  // VALIDATION FIX: Telefon-specific change handler — strips any
  // character that isn't a digit, space, "+", "-", "(" or ")" so the
  // user simply cannot type letters/symbols into the phone field.
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    const filteredValue = value.replace(PHONE_ALLOWED_CHARS_REGEX, "");

    setFormData((current) => ({
      ...current,
      [name]: filteredValue,
    }));

    e.target.setCustomValidity("");
  };

  // VALIDATION FIX: fires when a field fails native HTML5 validation
  // (e.g. left empty, or — for Telefon — fails the pattern check) and
  // sets a German message instead of the browser's default English one.
  // `messages` lets each field override individual messages as needed.
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
            // VALIDATION FIX: German message on empty submit
            onInvalid={(e) => handleInvalid(e)}
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
            onInvalid={(e) => handleInvalid(e)}
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
            // VALIDATION FIX: German messages for both "empty" and
            // "not a valid email format" cases
            onInvalid={(e) =>
              handleInvalid(e, {
                valueMissing: "Bitte füllen Sie dieses Feld aus.",
                typeMismatch: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
              })
            }
            required
          />
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Telefon*"
            name="telefon"
            value={formData.telefon}
            // VALIDATION FIX: numeric-only handler instead of the
            // generic handleChange
            onChange={handlePhoneChange}
            // VALIDATION FIX: only digits/spaces/+/-/() allowed, at
            // least 6 characters — with a German message either way
            pattern={PHONE_PATTERN}
            inputMode="tel"
            onInvalid={(e) =>
              handleInvalid(e, {
                valueMissing: "Bitte füllen Sie dieses Feld aus.",
                patternMismatch:
                  "Bitte geben Sie eine gültige Telefonnummer ein (nur Zahlen).",
              })
            }
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

export default ContactForm;