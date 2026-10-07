"use client";

import React, { useEffect, useRef, useState } from "react";
import TurnstileWidget from "@/components/ResuableComponents/TurnstileWidget";
import { useRouter } from "next/navigation";

// -----------------------------------------
// VALIDATION
// -----------------------------------------

const REQUIRED_MESSAGE = "Bitte füllen Sie dieses Feld aus.";
const EMAIL_ERROR_MESSAGE = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
const PHONE_ERROR_MESSAGE =
  "Bitte geben Sie eine gültige Telefonnummer ein (nur Zahlen).";

// Requires something@domain.tld (the browser's built-in type="email" check
// accepts "name@gmail", which has no domain ending)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Telefon: only digits, spaces, "+", "-", "(" and ")" are allowed
const PHONE_ALLOWED_CHARS_REGEX = /[^0-9+\-\s()]/g;
const PHONE_REGEX = /^[0-9+\-\s()]+$/;
// How long the user must stop typing before the error appears (ms)
const ERROR_DELAY = 600;

// One validator per required field. Returns "" when valid,
// otherwise the error message shown below the input.
const validators = {
  vorname: (value) => (value.trim() ? "" : REQUIRED_MESSAGE),

  nachname: (value) => (value.trim() ? "" : REQUIRED_MESSAGE),

  email: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return REQUIRED_MESSAGE;
    if (!EMAIL_REGEX.test(trimmed)) return EMAIL_ERROR_MESSAGE;
    return "";
  },

  telefon: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return REQUIRED_MESSAGE;
    if (!PHONE_REGEX.test(trimmed)) return PHONE_ERROR_MESSAGE;
    return "";
  },

  supportanfrage: (value) => (value.trim() ? "" : REQUIRED_MESSAGE),
};

const REQUIRED_FIELDS = Object.keys(validators);

const INITIAL_FORM = {
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  supportanfrage: "",
  nachricht: "",
};

const SupportForm = () => {
  const router = useRouter();
  const turnstileRef = useRef(null);
  const formRef = useRef(null);
  const errorTimersRef = useRef({});

  const [turnstileToken, setTurnstileToken] = useState("");
  const [formData, setFormData] = useState(INITIAL_FORM);

  // { vorname: "…", email: "…" } — only fields that currently have an error
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Clean up pending timers when the component unmounts
  useEffect(() => {
    const timers = errorTimersRef.current;

    return () => {
      Object.values(timers).forEach(clearTimeout);
    };
  }, []);

  // -----------------------------------------
  // HELPERS
  // -----------------------------------------

  const setFieldError = (name, message) => {
    setErrors((current) => {
      const next = { ...current };

      if (message) {
        next[name] = message;
      } else {
        delete next[name];
      }

      return next;
    });
  };

  const validateField = (name, value) => {
    const validate = validators[name];
    if (!validate) return;

    setFieldError(name, validate(value));
  };

  // Red border for an invalid input
  const getInputStyle = (name) =>
    errors[name]
      ? { borderColor: "#e53935", borderBottomColor: "#e53935" }
      : undefined;

  // Error text shown below an input
  const renderError = (name) =>
    errors[name] ? (
      <div className="field-error" id={`${name}-error`} role="alert">
        {errors[name]}
      </div>
    ) : null;

  // -----------------------------------------
  // HANDLERS
  // -----------------------------------------

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    // Phone: only digits, spaces, + - ( )
    if (name === "telefon") {
      value = value.replace(PHONE_ALLOWED_CHARS_REGEX, "");
    }

    setFormData((current) => ({ ...current, [name]: value }));

    if (!validators[name]) return;

    clearTimeout(errorTimersRef.current[name]);

    // If an error is showing and the value is now valid, clear it at once
    if (errors[name] && !validators[name](value)) {
      setFieldError(name, "");
      return;
    }

    // Otherwise show / update the error once the user stops typing
    errorTimersRef.current[name] = setTimeout(() => {
      validateField(name, value);
    }, ERROR_DELAY);
  };

  // Leaving a field: validate straight away
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!validators[name]) return;

    clearTimeout(errorTimersRef.current[name]);
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    // Validate every required field
    Object.values(errorTimersRef.current).forEach(clearTimeout);

    const newErrors = {};

    REQUIRED_FIELDS.forEach((name) => {
      const message = validators[name](formData[name]);
      if (message) newErrors[name] = message;
    });

    setErrors(newErrors);

    const firstInvalid = REQUIRED_FIELDS.find((name) => newErrors[name]);

    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    if (!turnstileToken) {
      setErrorMessage("Bitte bestätigen Sie, dass Sie kein Bot sind.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Etwas ist schiefgelaufen.");
      }

      setSuccessMessage(
        result.message || "Ihre Supportanfrage wurde erfolgreich gesendet."
      );
      setFormData(INITIAL_FORM);
      setErrors({});
      router.push("/vielen-dank");
    } catch (error) {
      setErrorMessage(
        error.message || "Ihre Anfrage konnte nicht gesendet werden."
      );
    } finally {
      setLoading(false);

      // Turnstile tokens are single-use – reset after every attempt
      setTurnstileToken("");
      turnstileRef.current?.reset();
    }
  };

  return (
    // noValidate: turns off the browser's own popups, we show our own
    // error messages below each input instead
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col-sm-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Vorname"
            name="vorname"
            value={formData.vorname}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle("vorname")}
            aria-invalid={errors.vorname ? "true" : "false"}
            aria-describedby={errors.vorname ? "vorname-error" : undefined}
            required
          />
          {renderError("vorname")}
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nachname"
            name="nachname"
            value={formData.nachname}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle("nachname")}
            aria-invalid={errors.nachname ? "true" : "false"}
            aria-describedby={errors.nachname ? "nachname-error" : undefined}
            required
          />
          {renderError("nachname")}
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="email"
            className="form-control"
            placeholder="E-Mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle("email")}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {renderError("email")}
        </div>

        <div className="col-sm-6 form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            onBlur={handleBlur}
            inputMode="tel"
            style={getInputStyle("telefon")}
            aria-invalid={errors.telefon ? "true" : "false"}
            aria-describedby={errors.telefon ? "telefon-error" : undefined}
            required
          />
          {renderError("telefon")}
        </div>

        <div className="col-sm-12 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Meine Supportanfrage"
            name="supportanfrage"
            value={formData.supportanfrage}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle("supportanfrage")}
            aria-invalid={errors.supportanfrage ? "true" : "false"}
            aria-describedby={
              errors.supportanfrage ? "supportanfrage-error" : undefined
            }
            required
          />
          {renderError("supportanfrage")}
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

        {/* {successMessage && (
          <div className="col-12">
            <div className="alert alert-success">{successMessage}</div>
          </div>
        )} */}

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