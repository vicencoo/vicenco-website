"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries/en";
import { Arrow } from "./Logo";

// No backend needed: the form composes an email in the visitor's mail app.
export function ContactForm({ t, email }: { t: Dictionary["contact"]; email: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `${t.name}: ${data.get("name")}`,
      `${t.email}: ${data.get("email")}`,
      `${t.type}: ${data.get("type")}`,
      `${t.budget}: ${data.get("budget")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    const subject = `${t.subject} — ${data.get("name")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <Field label={t.name}>
        <input name="name" required autoComplete="name" className="field" />
      </Field>
      <Field label={t.email}>
        <input name="email" type="email" required autoComplete="email" className="field" />
      </Field>
      <Field label={t.type}>
        <select name="type" className="field" defaultValue={t.types[0]}>
          {t.types.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label={t.budget}>
        <select name="budget" className="field" defaultValue={t.budgets[1]}>
          {t.budgets.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label={t.message} className="sm:col-span-2">
        <textarea name="message" required rows={4} className="field resize-none" />
      </Field>
      <div className="flex flex-wrap items-center gap-5 pt-2 sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-bg transition-all duration-500 hover:bg-gold-2 hover:shadow-[0_0_40px_-5px_rgba(201,169,110,0.6)]"
        >
          {t.send}
          <Arrow />
        </button>
        <p aria-live="polite" className="text-sm text-muted">
          {sent ? t.sent : ""}
        </p>
      </div>
    </form>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted">{label}</span>
      {children}
    </label>
  );
}
