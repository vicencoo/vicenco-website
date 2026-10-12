"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries/en";
import { site } from "@/lib/site";
import { Arrow } from "./Logo";

// Sends the form through Web3Forms (https://web3forms.com) — submissions arrive in your inbox.
export function ContactForm({
  t,
  email,
}: {
  t: Dictionary["contact"];
  email: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", site.web3formsKey);
    data.append("subject", `${t.subject} — ${data.get("name")}`);
    data.append("from_name", site.name);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
      {/* Spam trap: hidden from people, bots that tick it are rejected by Web3Forms. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <Field label={t.name}>
        <input name="name" required autoComplete="name" className="field" />
      </Field>
      <Field label={t.email}>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="field"
        />
      </Field>
      <Field label={t.phone}>
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="field"
        />
      </Field>
      <Field label={t.type}>
        <select name="type" className="field" defaultValue={t.types[0]}>
          {t.types.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label={t.message} className="sm:col-span-2">
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t.messagePlaceholder}
          className="field resize-none"
        />
      </Field>
      <div className="flex flex-wrap items-center gap-5 pt-2 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group disabled:cursor-wait disabled:opacity-60 inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-500 hover:bg-brand-hover hover:shadow-[0_0_40px_-5px_rgba(47,107,255,0.6)]"
        >
          {status === "sending" ? t.sending : t.send}
          <Arrow />
        </button>
        <p aria-live="polite" className="text-sm text-muted">
          {status === "sent" && t.sent}
          {status === "error" && (
            <>
              {t.error}{" "}
              <a
                href={`mailto:${email}`}
                className="text-brand underline underline-offset-4"
              >
                {email}
              </a>
            </>
          )}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2.5 block text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
