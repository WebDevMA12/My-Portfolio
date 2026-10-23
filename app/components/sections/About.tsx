const metrics = [
  {
    value: "2",
    suffix: "+",
    title: "Years of Engineering Experience",
    description: "Shipped robust client & internal applications",
    icon: "history_edu",

    cardStyle:
      "bg-surface-container-low shadow-sm border border-outline-variant/20",
    valueStyle:
      "text-headline-lg text-primary",
    titleStyle:
      "text-label-lg text-on-surface font-semibold",
    descriptionStyle:
      "text-label-technical text-on-surface-variant mt-1",
    iconStyle:
      "text-secondary-container text-[42px]",
  },

  {
    value: "30",
    suffix: "+",
    title: "Projects Built & Deployed",
    description: "From dynamic SPAs to distributed microservices",
    icon: "rocket_launch",

    cardStyle:
      "bg-surface-container shadow-sm border border-outline-variant/20",
    valueStyle:
      "text-headline-lg text-primary",
    titleStyle:
      "text-label-lg text-on-surface font-semibold",
    descriptionStyle:
      "text-label-technical text-on-surface-variant mt-1",
    iconStyle:
      "text-secondary-container text-[42px]",
  },

  {
    value: "Full-Stack",
    suffix: "",
    title: "Architectural Focus",
    description: "End-to-end design, API modeling & cloud infra",
    icon: "layers",

    cardStyle:
      "bg-primary-container text-surface-bright shadow-md border border-primary",
    valueStyle:
      "text-headline-md text-secondary-container",
    titleStyle:
      "text-label-lg text-surface-bright font-semibold",
    descriptionStyle:
      "text-label-technical text-tertiary-fixed-dim mt-1",
    iconStyle:
      "text-secondary-fixed text-[42px]",
  },
];

const principles = [
  {
  icon: "terminal",
  title: "Clean Codebase",
  description:
    "Predictable state, strong typing, comprehensive tests and modular file structures.",
  },
  {
    icon: "speed",
    title: "Performance First",
    description:
      "Sub-second loads, lean bundle size, lazy-loaded modules, and aggressive caching.",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full px-margin md:px-margin-md lg:px-margin-lg py-space-2xl bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Heading */}
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="text-label-technical text-secondary uppercase tracking-widest font-bold">
            A Little About Me
          </span>

          <h2 className="text-headline-lg text-primary-container tracking-tight">
            More Than Just Code.
          </h2>

          <p className="text-body-lg text-on-surface-variant">
            I&apos;m a Full-Stack Web Developer passionate about turning ideas into
            useful digital products. I focus on clean interfaces, maintainable
            architecture, performance, and practical problem-solving.
          </p>
        </div>

        {/* Metrics + Engineering Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch">
          {/* Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
            {metrics.map((metric) => (
              <div key={metric.title} className={`p-space-lg rounded-2xl flex items-center justify-between ${metric.cardStyle}`}>
                <div>
                  <div className={`${metric.valueStyle} font-black tracking-tight flex items-baseline`}>
                    <span>{metric.value}</span>

                    {metric.suffix && (
                      <span className="text-secondary-container font-black ml-1">
                        {metric.suffix}
                      </span>
                    )}
                  </div>

                  <p className={metric.titleStyle}>
                    {metric.title}
                  </p>

                  <p className={metric.descriptionStyle}>
                    {metric.description}
                  </p>
                </div>

                <span className={`material-symbols-about ${metric.iconStyle}`} aria-hidden="true">
                  {metric.icon}
                </span>
              </div>
            ))}
          </div>

          {/* Engineering Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-space-md bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm border border-outline-variant/20">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                  architecture
                </span>

                <span className="text-label-technical uppercase tracking-wider font-bold">
                  Engineering Manifesto
                </span>
              </div>

              <h3 className="text-headline-sm text-primary">
                Where rigorous backend precision harmonizes with editorial UI
                craftsmanship.
              </h3>

              <p className="text-body-md text-on-surface-variant">
                Modern digital engineering often falls into two extremes:
                aesthetically stunning sites with fragile codebases, or
                rock-solid enterprise tools with dreadful user experiences.
                My philosophy bridges both worlds. Every API endpoint is
                designed with rigorous schema validation, every database
                index is tested under load, and every client component is
                tuned for 60fps fluidity and accessibility.
              </p>
            </div>

            {/* Engineering Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-sm">
              {principles.map((principle) => (
                <div key={principle.title} className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[22px]" aria-hidden="true">
                    {principle.icon}
                  </span>

                  <span className="text-label-lg text-primary font-bold">
                    {principle.title}
                  </span>

                  <p className="text-label-technical text-on-surface-variant">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
