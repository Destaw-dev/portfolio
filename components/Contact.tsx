"use client";

import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail, CheckCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, getSafeLanguage } from "../lib/i18n";

const EMAILJS_TIMEOUT_MS = 10_000;
const SUCCESS_RESET_MS = 5_000;

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactTranslations {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  messageMinLength: string;
}

function validate(data: FormData, t: ContactTranslations) {
  const errs: Partial<Record<keyof FormData, string>> = {};
  if (!data.name.trim()) errs.name = t.nameRequired;
  if (!data.email.trim()) errs.email = t.emailRequired;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = t.emailInvalid;
  if (!data.message.trim()) errs.message = t.messageRequired;
  else if (data.message.trim().length < 10) errs.message = t.messageMinLength;
  return errs;
}

export function Contact() {
  const { language } = useLanguage();
  const t = translations[getSafeLanguage(language)].contact;

  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), SUCCESS_RESET_MS);
    return () => clearTimeout(timer);
  }, [status]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(formData, t);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      if (errs.name) nameRef.current?.focus();
      else if (errs.email) emailRef.current?.focus();
      else if (errs.message) messageRef.current?.focus();
      return;
    }
    setStatus("sending");
    try {
      const sendPromise = emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), EMAILJS_TIMEOUT_MS)
      );
      await Promise.race([sendPromise, timeoutPromise]);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 glass rounded-xl border transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none ${
      errors[field]
        ? "border-red-400 dark:border-red-500 focus:border-red-400"
        : "border-gray-300/50 dark:border-gray-700/50 focus:border-purple-500 dark:focus:border-purple-400"
    }`;

  return (
    <section
      id="contact"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow dark:opacity-10 pointer-events-none"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
            {t.badge}
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/Destaw-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
          >
            <Github className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{t.github}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/destawmelese/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
          >
            <Linkedin className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{t.linkedin}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="mailto:destawgm@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 glass border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            {t.email}
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-xl mx-auto text-start">
          <h3 className="text-2xl font-bold gradient-text mb-6">{t.formTitle}</h3>

          {status === "success" ? (
            <div className="glass rounded-2xl p-10 border border-green-300/50 dark:border-green-700/50 text-center space-y-4" role="status" aria-live="polite">
              <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{t.successTitle}</p>
              <p className="text-gray-600 dark:text-gray-400">{t.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t.nameLabel}
                </label>
                <input
                  ref={nameRef}
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  className={inputClass("name")}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="mt-1 text-sm text-red-500 dark:text-red-400" role="alert">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t.emailLabel}
                </label>
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className={inputClass("email")}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="mt-1 text-sm text-red-500 dark:text-red-400" role="alert">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t.messageLabel}
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  className={`${inputClass("message")} resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <p id="message-error" className="mt-1 text-sm text-red-500 dark:text-red-400" role="alert">{errors.message}</p>}
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500 dark:text-red-400">{t.errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-4 h-4" />
                {status === "sending" ? t.sending : t.sendButton}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
