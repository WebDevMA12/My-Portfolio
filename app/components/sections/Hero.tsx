import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden px-margin md:px-margin-md lg:px-margin-lg pt-space-xl pb-space-2xl bg-surface-container-low">
      {/* Decoration glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none" />
    
      <div className="absolute top-1/2 -right-48 w-80 h-80 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
        {/* Hero Content */}
        <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
          <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container-high shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />

            <span className="text-label-technical text-on-surface-variant uppercase tracking-widest font-bold">
              Full-Stack Web Developer
            </span>
          </div>

          <h1 className="text-headline-lg lg:text-display text-primary-container leading-[1.05] tracking-tight">
            Building{" "}
            <span className="text-primary bg-secondary-container px-2 py-0.5 rounded-md inline-block -rotate-1">
              Digital
            </span>{" "}
            Experiences That Make an Impact.
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-xl">
            I build modern, scalable web applications with thoughtful user
            experiences, clean architecture, and reliable engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <Link href="#projects" className="inline-flex items-center gap-space-xs px-7 py-3.5 rounded-xl bg-secondary-container text-primary-container text-label-lg font-bold shadow-md hover:bg-secondary-fixed-dim transition-all hover:-translate-y-0.5">
              <span>Explore My Work</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_downward
              </span>
            </Link>

            <Link href="#contact" className="inline-flex items-center gap-space-xs px-7 py-3.5 rounded-xl bg-surface-container-lowest text-primary-container text-label-lg font-semibold shadow-sm hover:bg-primary-container hover:text-surface-bright transition-all hover:-translate-y-0.5 border border-outline-variant/30">
              <span>Let&apos;s Talk</span>
              <span className="material-symbols-outlined text-[18px]">
                chat_bubble
              </span>
            </Link>
          </div>

          {/* Core Stack */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-space-md">
            <span className="text-label-technical uppercase tracking-wider text-outline font-bold">
              Core Stack:
            </span>

            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary-container text-label-technical font-medium">
              <span>React</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />

              <span>Next.js</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />

              <span>TypeScript</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />

              <span>Node.js</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />

              <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Browser Mockups */}
        <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
          {/* Background Browser */}
          <div className="absolute -top-6 -right-2 md:top-0 md:right-4 w-4/5 rounded-2xl bg-surface-container-high/90 p-3 sm:p-4 shadow-xl -rotate-3 transition-transform hover:rotate-0 duration-500 hidden sm:block border border-outline-variant/40">
            <div className="flex items-center gap-1.5 pb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
              <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />

              <span className="ml-3 text-label-technical text-outline truncate font-medium">
                nexora-analytics.prod.internal
              </span>
            </div>

            <div className="overflow-hidden rounded-xl bg-surface-container opacity-85">
              <Image src={"/hero-bg.png"} loading="eager" width={512} height={512} alt="Dual Application Background Preview" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Main Browser */}
          <div className="relative z-10 w-full max-w-xl rounded-2xl bg-surface-container-lowest p-3 sm:p-4 shadow-2xl transition-all hover:-translate-y-1 duration-500 border border-outline-variant/30">
            <div className="flex items-center justify-between pb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#f87171]" />
                  <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                  <span className="w-3 h-3 rounded-full bg-[#34d399]" />
                </div>

                <div className="ml-2 px-3 py-1 rounded-md bg-surface-container-low text-primary-container text-label-technical flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    lock
                  </span>

                  <span className="truncate font-medium">
                    portfolio-dashboard.app
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-on-surface-variant" aria-hidden="true">
                  <span className="material-symbols-outlined text-[18px]">
                    share
                  </span>

                  <span className="material-symbols-outlined text-[18px]">
                    more_horiz
                  </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-surface-container border border-surface-container-high">
              <Image src={"/hero-bg.png"} width={512} height={512} alt="Full-Stack Application Dashboard Preview" className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]" />
            </div>

            {/* Production Status */}
            <div className="mt-3 p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-ping" />

                <span className="text-label-technical text-primary-container font-bold uppercase tracking-wider">
                  Production Cluster
                </span>
              </div>

              <span className="text-label-technical text-on-surface-variant font-medium">
                Latency: 14ms · Global CDN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
