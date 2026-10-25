"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";

const topics = [
  "Frontend development",
  "Full-stack app",
  "UI implementation",
  "Something else",
] as const;

const stages = ["New build", "Redesign", "Add features", "Fix bugs", "Not sure yet"] as const;

type Status = "idle" | "sending" | "sent" | "error";

interface FormState {
  topic: (typeof topics)[number] | "";
  message: string;
  budget: (typeof stages)[number] | "";
  name: string;
  email: string;
}

const initial: FormState = { topic: "", message: "", budget: "", name: "", email: "" };

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-space-md py-space-sm text-label-lg transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container ${
        active
          ? "border-on-primary bg-secondary-container text-on-primary-fixed"
          : "border-on-primary-container text-inverse-on-surface hover:border-inverse-primary"
      }`}
    >
      {children}
    </button>
  );
}

const field = 
  "w-full rounded-lg border border-inverse-on-surface bg-primary-container px-space-md py-space-md text-body-md text-inverse-on-surface placeholder:text-background transition-all focus:border-on-t focus:outline-none focus:ring-2 focus:ring-secondary-container"

const legend = "mb-space-md block text-headline-sm";

export default function ConversationForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      let data: { error?: string } = {};
      try {
        data = JSON.parse(text);
      } catch {
        // server returned HTML, not JSON
      }

      if (!res.ok) throw new Error(data.error ?? `Server error (${res.status}).`);
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="py-space-xl text-center">
        <p className="text-headline-md">Message sent.</p>
        <p className="mx-auto mt-space-md max-w-sm text-body-md text-inverse-primary">
          Thanks for reaching out. I&apos;ll reply within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-space-lg rounded-full bg-secondary-container px-space-lg py-space-md text-label-lg text-on-secondary-container transition hover:bg-secondary-fixed-dim"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-space-xl">
      <div className="absolute bottom-60 right-50 w-64 h-64 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />

      <div className="w-full flex justify-center items-center">
        <Image src="/Logo.png" width={128} height={128} className="w-16 h-16 rounded-lg pointer-events-none select-none drop-shadow-[0_8px_18px_rgba(255,222,168,0.25)]" alt="Mohamed Abobakr Logo" />
      </div>
      <fieldset>
        <legend className={legend}>What do you need help with?</legend>
        <div className="flex flex-wrap gap-space-sm">
          {topics.map((t) => (
            <Chip key={t} active={form.topic === t} onClick={() => set("topic", t)}>
              {t}
            </Chip>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className={legend}>
          Tell me about your project
        </label>
        <textarea
          id="message"
          required
          minLength={20}
          rows={5}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="What are you building, who is it for, and when do you need it?"
          className={field}
        />
      </div>

      <fieldset>
        <legend className={legend}>Project stage</legend>
        <div className="flex flex-wrap gap-space-sm">
          {stages.map((b) => (
            <Chip key={b} active={form.budget === b} onClick={() => set("budget", b)}>
              {b}
            </Chip>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-gutter sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-space-sm block text-label-lg">
            Your name
          </label>
          <input
            id="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Mohamed Abobakr"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-space-sm block text-label-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="mohamed.dev.m@gmail.com"
            className={field}
          />
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg bg-error-container px-space-md py-space-md text-label-lg text-on-error-container"
        >
          {error} Check your details and try again.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-secondary-container px-space-xl py-space-md text-label-lg text-primary-container shadow-warm transition hover:bg-secondary-fixed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse-on-surface disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
