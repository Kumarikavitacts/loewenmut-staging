
"use client";

import React, { useEffect, useRef, useState } from "react";
import TurnstileWidget from "@/components/ResuableComponents/TurnstileWidget";
import { useRouter } from "next/navigation";

// -----------------------------------------
// VALIDATION
// -----------------------------------------

const REQUIRED_MESSAGE = "Bitte füllen Sie dieses Feld aus.";
const EMAIL_ERROR_MESSAGE =
  "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
const PHONE_ERROR_MESSAGE =
  "Bitte geben Sie eine gültige Telefonnummer ein.";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_ALLOWED_CHARS_REGEX = /[^0-9+\-\s()]/g;
const PHONE_REGEX = /^[0-9+\-\s()]+$/;

const ERROR_DELAY = 600;

// Only fields marked with * are mandatory.
const validators = {
  vorname: (value) =>
    value.trim() ? "" : REQUIRED_MESSAGE,

  nachname: (value) =>
    value.trim() ? "" : REQUIRED_MESSAGE,

  email: (value) => {
    const trimmed = value.trim();

    if (!trimmed) return REQUIRED_MESSAGE;
    if (!EMAIL_REGEX.test(trimmed)) return EMAIL_ERROR_MESSAGE;

    return "";
  },

  // Phone is optional, but validate its format when provided.
  telefon: (value) => {
    const trimmed = value.trim();

    if (!trimmed) return "";
    if (!PHONE_REGEX.test(trimmed)) return PHONE_ERROR_MESSAGE;

    return "";
  },

  nachricht: (value) =>
    value.trim() ? "" : REQUIRED_MESSAGE,
};

// Explicitly list only mandatory fields.
const REQUIRED_FIELDS = [
  "vorname",
  "nachname",
  "email",
  "nachricht",
];

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
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Clean up timers when the component unmounts.
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

  const getInputStyle = (name) =>
    errors[name]
      ? {
          borderColor: "#e53935",
          borderBottomColor: "#e53935",
        }
      : undefined;

  const renderError = (name) =>
    errors[name] ? (
      <div
        className="field-error"
        id={`${name}-error`}
        role="alert"
      >
        {errors[name]}
      </div>
    ) : null;

  // -----------------------------------------
  // HANDLERS
  // -----------------------------------------

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    // Allow only valid phone characters.
    if (name === "telefon") {
      value = value.replace(PHONE_ALLOWED_CHARS_REGEX, "");
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (!validators[name]) return;

    clearTimeout(errorTimersRef.current[name]);

    const validationMessage = validators[name](value);

    // Clear an existing error immediately when corrected.
    if (errors[name] && !validationMessage) {
      setFieldError(name, "");
      return;
    }

    // Show validation errors after the user stops typing.
    errorTimersRef.current[name] = setTimeout(() => {
      validateField(name, value);
    }, ERROR_DELAY);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!validators[name]) return;

    clearTimeout(errorTimersRef.current[name]);
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    Object.values(errorTimersRef.current).forEach(clearTimeout);

    // Validate all mandatory fields.
    const newErrors = {};

    REQUIRED_FIELDS.forEach((name) => {
      const message = validators[name](formData[name]);

      if (message) {
        newErrors[name] = message;
      }
    });

    // Validate optional phone only when supplied.
    const phoneError = validators.telefon(formData.telefon);

    if (phoneError) {
      newErrors.telefon = phoneError;
    }

    setErrors(newErrors);

    const firstInvalid = [
      ...REQUIRED_FIELDS,
      "telefon",
    ].find((name) => newErrors[name]);

    if (firstInvalid) {
      formRef.current?.elements.namedItem(firstInvalid)?.focus();
      return;
    }

    if (!turnstileToken) {
      setErrorMessage(
        "Bitte bestätigen Sie, dass Sie kein Bot sind."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Etwas ist schiefgelaufen."
        );
      }

      setFormData(INITIAL_FORM);
      router.push("/vielen-dank");
      setErrors({});
      setTurnstileToken("");

    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ihre Anfrage konnte nicht gesendet werden."
      );
    } finally {
      setLoading(false);
      turnstileRef.current?.reset();
    }
  };

  // -----------------------------------------
  // RENDER
  // -----------------------------------------

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="row">
        {/* Vorname - Required */}
        <div className="col-sm-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Vorname*"
            name="vorname"
            value={formData.vorname}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle("vorname")}
            aria-invalid={errors.vorname ? "true" : "false"}
            aria-describedby={
              errors.vorname ? "vorname-error" : undefined
            }
            required
          />
          {renderError("vorname")}
        </div>

        {/* Nachname - Required */}
        <div className="col-sm-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nachname*"
            name="nachname"
            value={formData.nachname}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle("nachname")}
            aria-invalid={errors.nachname ? "true" : "false"}
            aria-describedby={
              errors.nachname ? "nachname-error" : undefined
            }
            required
          />
          {renderError("nachname")}
        </div>

        {/* E-Mail - Required */}
        <div className="col-sm-6 form-group">
          <input
            type="email"
            className="form-control"
            placeholder="E-Mail*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle("email")}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={
              errors.email ? "email-error" : undefined
            }
            required
          />
          {renderError("email")}
        </div>

        {/* Telefon - Optional */}
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
            aria-describedby={
              errors.telefon ? "telefon-error" : undefined
            }
          />
          {renderError("telefon")}
        </div>

        {/* Betreff - Optional */}
        <div className="col-sm-12 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Betreff"
            name="supportanfrage"
            value={formData.supportanfrage}
            onChange={handleChange}
          />
        </div>

        {/* Meine Supportanfrage - Required */}
        <div className="col-sm-12 form-group">
          <textarea
            rows={5}
            className="form-control"
            placeholder="Meine Supportanfrage*"
            name="nachricht"
            value={formData.nachricht}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle("nachricht")}
            aria-invalid={errors.nachricht ? "true" : "false"}
            aria-describedby={
              errors.nachricht ? "nachricht-error" : undefined
            }
            required
          />
          {renderError("nachricht")}
        </div>

        {/* Turnstile */}
        <div className="col-md-6 form-group">
          <TurnstileWidget
            ref={turnstileRef}
            onVerify={setTurnstileToken}
          />
        </div>

        {/* Submit */}
        <div className="col-md-6 form-group">
          <div className="form_btn d-flex justify-content-md-end">
            <button
              type="submit"
              className="button theme_btn"
              disabled={loading}
            >
              {loading ? "senden..." : "senden"}
              <img
                src="/images/btn-arrow.svg"
                alt="button arrow"
              />
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className="col-12">
            <div className="error-message" role="alert">
              {errorMessage}
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default SupportForm;
