import type { Metadata } from "next";
import Link from "next/link";
import ConversationForm from "../components/ui/ConversationForm";

export const metadata: Metadata = {
  title: "Start a conversation",
  description: "Tell me about your project. I reply within 24 hours.",
};

const facts = [
  { label: "Reply time", value: "Within 24 hours" },
  { label: "Availability", value: "Open for new projects" },
  { label: "Email", value: "hello@yourdomain.com" },
];

export default function Conversation() {
  return (
    <main className="min-h-screen bg-background font-inter text-on-background">
      <div className="mx-auto grid max-w-6xl gap-space-xl px-margin py-space-2xl md:px-margin-md lg:grid-cols-[5fr_7fr] lg:gap-gutter-lg">
        {/* Left: intro */}
        <section className="lg:sticky lg:top-24 lg:self-start">
          <Link href="/" className="mb-space-lg inline-flex items-center gap-space-sm rounded-full border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm text-label-lg text-on-surface transition hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            ← Back home
          </Link>

          <h1 className="text-headline-lg-mobile md:text-headline-lg">
            Have an idea? <br />
            Let&apos;s talk it through.
          </h1>
          <p className="mt-space-md max-w-md text-body-lg text-on-surface-variant">
            Share a few details and I&apos;ll come back with questions, a rough
            scope, and a clear next step.
          </p>

          <dl className="mt-space-xl space-y-space-sm">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex items-center justify-between rounded-xl border border-outline-variant bg-surface-container-low px-space-lg py-space-md shadow-header"
              >
                <dt className="text-label-lg text-on-surface-variant">{f.label}</dt>
                <dd className="text-label-lg text-on-surface">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Right: form */}
        <section
          aria-label="Contact form"
          className="rounded-xl bg-on-secondary-fixed bg-on- p-space-lg text-inverse-on-surface shadow-warm sm:p-space-xl"
        >
          <ConversationForm />
        </section>
      </div>
    </main>
  );
}