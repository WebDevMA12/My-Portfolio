export default function Services() {
  return (
    <section className="w-full px-margin md:px-margin-md lg:px-margin-lg py-space-2xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="text-label-technical text-secondary uppercase tracking-widest font-bold">
            What I Do
          </span>

          <h2 className="text-headline-lg text-primary tracking-tight">
            From Idea to Implementation.
          </h2>

          <p className="text-body-lg text-on-surface-variant">
            Comprehensive development services tuned for speed, longevity, and exceptional customer experience.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
          {/* Service 01 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-lg hover:-translate-y-1 transition-all border border-outline-variant/20">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[26px]">
                  devices
                </span>
              </div>

              <span className="text-label-technical text-secondary uppercase tracking-wider font-bold">
                01 · Interface Design
              </span>

              <h3 className="text-headline-sm text-primary">
                Frontend Development
              </h3>

              <p className="text-body-md text-on-surface-variant">
                Building responsive, accessible interfaces with modern frontend technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="pt-space-sm border-t border-surface-container">
              <span className="text-label-technical text-outline font-medium">
                Next.js · React · GSAP · CSS Grid
              </span>
            </div>
          </div>

          {/* Service 02 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-lg hover:-translate-y-1 transition-all border border-outline-variant/20">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[26px]">
                  dns
                </span>
              </div>

              <span className="text-label-technical text-secondary uppercase tracking-wider font-bold">
                02 · Full Architecture
              </span>

              <h3 className="text-headline-sm text-primary">
                Full-Stack Development
              </h3>

              <p className="text-body-md text-on-surface-variant">
                Creating complete web applications with reliable APIs, secure authentication, and optimized database integration.
              </p>
            </div>

            <div className="pt-space-sm border-t border-surface-container">
              <span className="text-label-technical text-outline font-medium">
                Node.js · PostgreSQL · MongoDB · Redis
              </span>
            </div>
          </div>

          {/* Service 03 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-lg hover:-translate-y-1 transition-all border border-outline-variant/20">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[26px]">
                  palette
                </span>
              </div>

              <span className="text-label-technical text-secondary uppercase tracking-wider font-bold">
                03 · Design Systems
              </span>

              <h3 className="text-headline-sm text-primary">
                UI Implementation
              </h3>

              <p className="text-body-md text-on-surface-variant">
                Translating design concepts and Figma files into pixel-accurate, componentized, production-ready design systems.
              </p>
            </div>

            <div className="pt-space-sm border-t border-surface-container">
              <span className="text-label-technical text-outline font-medium">
                Figma · Tokens · Storybook · WCAG 2.1
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
