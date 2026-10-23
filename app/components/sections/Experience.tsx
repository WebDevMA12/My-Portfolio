export default function Experience() {
  return (
    <section id="experience" className="w-full px-margin md:px-margin-md lg:px-margin-lg py-space-2xl bg-surface">
      <div className="max-w-4xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs">
          <span className="text-label-technical text-secondary uppercase tracking-widest font-bold">
            My Journey
          </span>

          <h2 className="text-headline-lg text-primary tracking-tight">
            Growing Through Building.
          </h2>

          <p className="text-body-lg text-on-surface-variant">
            A continuous track record of turning architectural concepts into tangible, resilient production products.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-surface-container-high flex flex-col gap-space-xl">
          {/* Milestone 1 */}
          <div className="relative flex flex-col gap-space-xs">
            <div className="absolute -left-7.75 md:-left-9.75 top-1.5 w-4 h-4 rounded-full bg-secondary-container border-4 border-surface shadow-sm" />

            <div className="flex flex-wrap items-baseline gap-space-xs">
              <span className="px-2.5 py-0.5 rounded bg-surface-container text-primary-container text-label-technical font-bold">
                2025 — PRESENT
              </span>

              <span className="text-label-technical text-secondary font-bold">
                ENTERPRISE SAAS
              </span>
            </div>

            <h3 className="text-headline-sm text-primary">
              Full-Stack Web Developer
            </h3>

            <p className="text-label-lg text-on-surface-variant font-semibold">
              CloudScale Analytics
            </p>

            <p className="text-body-md text-on-surface-variant max-w-2xl">
              Engineered real-time dashboard visualization suites processing telemetry from over 1.2M daily sensor pings. Collaborated with UI designers to implement custom design token architectures.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">React</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">Express</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">MongoDB</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">Docker</span>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative flex flex-col gap-space-xs">
            <div className="absolute -left-7.75 md:-left-9.75 top-1.5 w-4 h-4 rounded-full bg-secondary-container border-4 border-surface shadow-sm" />

            <div className="flex flex-wrap items-baseline gap-space-xs">
              <span className="px-2.5 py-0.5 rounded bg-surface-container text-primary-container text-label-technical font-bold">
                2023 — 2025
              </span>

              <span className="text-label-technical text-secondary font-bold">
                FREELANCE PROJECTS
              </span>
            </div>

            <h3 className="text-headline-sm text-primary">
              Front-End Engineer
            </h3>

            <p className="text-label-lg text-on-surface-variant font-semibold">
              Digital Product Studio
            </p>

            <p className="text-body-md text-on-surface-variant max-w-2xl">
              Leading front-to-back technical implementation for high-growth client ventures. Designed multi-tenant architecture, reduced client bundle sizes by 38%, and authored automated end-to-end integration test suites.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">Next.js</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">TypeScript</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">Node.js</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">MongoDB</span>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative flex flex-col gap-space-xs">
            <div className="absolute -left-7.75 md:-left-9.75 top-1.5 w-4 h-4 rounded-full bg-secondary-container border-4 border-surface shadow-sm" />

            <div className="flex flex-wrap items-baseline gap-space-xs">
              <span className="px-2.5 py-0.5 rounded bg-surface-container text-primary-container text-label-technical font-bold">
                2022 — 2023
              </span>

              <span className="text-label-technical text-secondary font-bold">
                AGENCY
              </span>
            </div>

            <h3 className="text-headline-sm text-primary">
              Junior Web Developer
            </h3>

            <p className="text-label-lg text-on-surface-variant font-semibold">
              Craft Digital Studio
            </p>

            <p className="text-body-md text-on-surface-variant max-w-2xl">
              Constructed responsive consumer websites, integrated headless CMS layers, and optimized Core Web Vitals to achieve top 95+ Google Lighthouse scores across all desktop and mobile deployments.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">JavaScript</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">HTML / CSS</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">Tailwind</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface text-label-technical font-medium">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
