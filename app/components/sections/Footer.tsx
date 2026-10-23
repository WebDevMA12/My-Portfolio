"use client"
import Link from "next/link";
import { year } from "@/app/lib/getYear";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-surface-bright py-space-2xl border-t border-outline-variant/10">
      <div className="w-full px-margin md:px-margin-md lg:px-margin-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-lg pb-space-xl">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-surface-container text-primary-container flex items-center justify-center font-bold text-base tracking-tighter">
                MA
              </div>

              <span className="text-headline-sm text-surface-bright tracking-tight font-bold">
                Portfolio
              </span>
            </div>

            <p className="text-body-md text-tertiary-fixed-dim max-w-md">
              Full-Stack Web Developer specialized in modern architectural systems, high-concurrency web services, and bespoke craft editorial interfaces.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 flex flex-col gap-space-sm">
            <span className="text-label-technical text-secondary-fixed uppercase tracking-widest font-bold">
              Navigation Architecture
            </span>

            <div className="grid grid-cols-2 gap-space-xs">
              <Link href="#hero" className="text-label-lg text-tertiary-fixed-dim hover:text-surface-bright transition-colors">Home</Link>
              <Link href="#about" className="text-label-lg text-tertiary-fixed-dim hover:text-surface-bright transition-colors">About</Link>
              <Link href="#skills" className="text-label-lg text-tertiary-fixed-dim hover:text-surface-bright transition-colors">Skills</Link>
              <Link href="#projects" className="text-label-lg text-tertiary-fixed-dim hover:text-surface-bright transition-colors">Projects</Link>
              <Link href="#experience" className="text-label-lg text-tertiary-fixed-dim hover:text-surface-bright transition-colors">Experience</Link>
              <Link href="#contact" className="text-label-lg text-tertiary-fixed-dim hover:text-surface-bright transition-colors">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <span className="text-label-technical text-secondary-fixed uppercase tracking-widest font-bold">
              Connect
            </span>

            <div className="flex flex-col gap-space-xs">
              <Link href="https://github.com/WebDevMA12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-space-xs text-label-lg text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                GitHub
              </Link>

              <Link href="https://linkedin.com/in/mohamed-abobakr-9b83551b2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-space-xs text-label-lg text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[18px]">work</span>
                LinkedIn
              </Link>

              <Link href="mailto:mohamed.dev.m@gmail.com" className="flex items-center gap-space-xs text-label-lg text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                Email Direct
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm border-t border-surface-container-high/10">
          <span className="text-label-technical text-outline-variant">
            &copy; { year } MA. Crafted with editorial engineering &amp; precision systems.
          </span>

          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />

            <span className="text-label-technical text-tertiary-fixed font-medium">
              Available for Select Architecture &amp; Engineering Roles
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
