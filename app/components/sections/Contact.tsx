"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "mohamed.dev.m@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="w-full px-margin md:px-margin-md lg:px-margin-lg py-space-2xl bg-primary-container text-surface-bright relative overflow-hidden">
      {/* Ambient Warm Golden Halo */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-space-xl relative z-10">
        {/* Top Text */}
        <div className="flex flex-col items-center text-center gap-space-sm max-w-2xl mx-auto">
          <span className="text-label-technical text-secondary-fixed uppercase tracking-widest font-bold">
            Start Something New
          </span>

          <h2 className="text-headline-lg text-surface-bright tracking-tight leading-tight">
            Have an Idea? Let&apos;s Build Something{" "}
            <span className="text-secondary-container">Great.</span>
          </h2>

          <p className="text-body-lg text-tertiary-fixed-dim">
            Have a project in mind? Let&apos;s discuss how we can turn your idea into a useful, polished, high-performing digital product.
          </p>
        </div>

        {/* Quick Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg pt-space-xs">
          {/* Direct Email Card */}
          <div className="p-space-lg rounded-2xl bg-tertiary-container/80 flex flex-col justify-between gap-space-md shadow-lg border border-outline-variant/10">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </div>

              <div>
                <p className="text-label-technical text-secondary-fixed uppercase font-bold">
                  Direct Email
                </p>

                <p className="text-label-lg text-surface-bright font-bold">
                  {email}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container-high/20 text-surface-bright text-label-technical hover:bg-surface-container-high/30 transition-colors font-semibold"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? "check" : "content_copy"}
              </span>

              <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
            </button>
          </div>

          {/* GitHub Profile Card */}
          <Link href="https://github.com/WebDevMA12" rel="noopener noreferrer" target="_blank" className="p-space-lg rounded-2xl bg-tertiary-container/80 flex flex-col justify-between gap-space-md shadow-lg hover:-translate-y-1 transition-all border border-outline-variant/10">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                <span className="material-symbols-outlined text-[20px]">
                  terminal
                </span>
              </div>

              <div>
                <p className="text-label-technical text-secondary-fixed uppercase font-bold">
                  Open Source
                </p>

                <p className="text-label-lg text-surface-bright font-bold">
                  github.com/WebDevMA12
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-secondary-container text-label-technical font-bold">
              <span>Explore Repositories</span>
              <span className="material-symbols-outlined text-[16px]">
                north_east
              </span>
            </div>
          </Link>

          {/* LinkedIn Card */}
          <Link href="https://linkedin.com/in/mohamed-abobakr-9b83551b2/" rel="noopener noreferrer" target="_blank" className="p-space-lg rounded-2xl bg-tertiary-container/80 flex flex-col justify-between gap-space-md shadow-lg hover:-translate-y-1 transition-all border border-outline-variant/10">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                <span className="material-symbols-outlined text-[20px]">
                  badge
                </span>
              </div>

              <div>
                <p className="text-label-technical text-secondary-fixed uppercase font-bold">
                  Professional
                </p>

                <p className="text-label-lg text-surface-bright font-bold">
                  linkedin.com/in/mohamed...
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-secondary-container text-label-technical font-bold">
              <span>Connect on LinkedIn</span>
              <span className="material-symbols-outlined text-[16px]">
                north_east
              </span>
            </div>
          </Link>
        </div>

        {/* Main Contact Action Banner */}
        <div className="p-space-xl rounded-3xl bg-tertiary-container/95 flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-xl text-center md:text-left border border-outline-variant/10">
          <div className="flex flex-col gap-space-xs max-w-lg">
            <div className="inline-flex items-center gap-2 text-secondary-container">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />

              <span className="text-label-technical uppercase tracking-widest font-bold">
                Available Now
              </span>
            </div>

            <h3 className="text-headline-sm text-surface-bright font-bold">
              Ready to kick off a new sprint or engineering role?
            </h3>

            <p className="text-body-md text-tertiary-fixed-dim">
              I respond within 24 hours to review scopes, technical requirements, and delivery roadmaps.
            </p>
          </div>

          <Link href="mailto:mohamed.dev.m@gmail.com?subject=Project%20Inquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary-container text-primary-container text-label-lg font-bold shadow-lg hover:bg-secondary-fixed hover:text-primary-container transition-all hover:scale-105 whitespace-nowrap">
            <span>Start a Conversation</span>

            <span className="material-symbols-outlined text-[20px]">
              send
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
