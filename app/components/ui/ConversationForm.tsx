"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          const hash = `#${visibleSections[0].target.id}`;

          setActiveHash(hash);

          // Update the URL without adding a history entry
          if (window.location.hash !== hash) {
            window.history.replaceState(null, "", hash);
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(43,25,14,0.06)]">
      <div className="h-20 w-full px-margin md:px-margin-md lg:px-margin-lg flex items-center justify-between">
        {/* Brand */}
        <Link href="#home" className="flex items-center gap-space-sm">
          <div className="w-9 h-9 rounded-lg bg-primary-container text-secondary-container flex items-center justify-center font-bold text-base tracking-tighter shadow-sm">
            MA
          </div>

          <div className="flex flex-col">
            <span className="text-label-lg text-on-surface leading-tight tracking-tight font-bold">
              MA
            </span>

            <span className="text-label-technical text-on-surface-variant uppercase tracking-wider">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-gutter" aria-label="Main navigation">
          {links.map((link) => {
            const isActive = activeHash === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`text-label-lg px-space-md py-space-sm rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary-container text-on-primary font-bold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact CTA */}
        <div className="flex items-center gap-space-xs md:gap-space-md">
          <Link href="/conversation" className="inline-flex items-center justify-center bg-secondary-container text-primary-container text-label-lg px-space-md py-space-sm rounded-lg shadow-[0_4px_12px_-2px_rgba(43,25,14,0.08)] hover:bg-secondary-fixed-dim transition-all hover:-translate-y-0.5 font-bold">
            Let&apos;s Talk
          </Link>

          <div className="flex lg:hidden h-16 items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <button
                type="button"
                aria-label={menuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((open) => !open)}
                className="w-11 h-11 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-variant active:scale-95 transition-all"
                id="menu-open-btn"
              >
                <span className="material-symbols-outlined text-[28px]">
                  {menuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center" aria-hidden="true">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="lg:hidden absolute top-full left-0 right-0 bg-surface shadow-[0_8px_16px_-4px_rgba(43,25,14,0.12)] px-margin md:px-margin-md py-space-md"
        >
          <ul className="flex flex-col gap-space-xs">
            {links.map((link) => {
              const isActive = activeHash === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`block text-label-lg px-space-md py-space-sm rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary-container text-on-primary font-bold shadow-sm"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
