import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  previewUrl: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: "01",
    category: "Social Platform",
    title: "Nexora Web App",
    description:
      "A social platform featuring dynamic user profiles, interactive feeds, real-time messaging, and personalized content streams.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Tailwind CSS",
    ],
    previewUrl: "nexora.network/feed",
    image: "/images/projects/nexora.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "02",
    category: "Storefront Experience",
    title: "E-Commerce Platform",
    description:
      "A modern shopping experience featuring product discovery, advanced filters, responsive cart states, and Stripe checkout integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe",
    ],
    previewUrl: "storefront.checkout-v2.io",
    image: "/images/projects/ecommerce.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "03",
    category: "Fintech App",
    title: "Expense Tracker & Ledger",
    description:
      "A finance application for managing recurring cash flows, multi-currency conversions, category breakdowns, and reconciliation reports.",
    technologies: [
      "React",
      "Chart.js",
      "Express",
      "PostgreSQL",
      "JWT Auth",
    ],
    previewUrl: "ledger.finance-app.dev",
    image: "/images/projects/expense-tracker.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "04",
    category: "Operations & Admin",
    title: "Enterprise Management System",
    description:
      "A full-stack business application for inventory tracking, role-based permissions, automated invoicing, and audit logs.",
    technologies: [
      "TypeScript",
      "React Query",
      "Node.js",
      "Docker",
      "Tailwind CSS",
    ],
    previewUrl: "enterprise-ops.internal.net",
    image: "/images/projects/enterprise.png",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="w-full px-margin md:px-margin-md lg:px-margin-lg py-space-2xl bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        {/* Section Header */}
        <header className="flex flex-col gap-space-xs max-w-2xl">
          <span className="text-label-technical text-secondary uppercase tracking-widest font-bold">Selected Work</span>

          <h2 id="projects-heading" className="text-headline-lg text-primary tracking-tight">Things I&apos;ve Built.</h2>

          <p className="text-body-lg text-on-surface-variant">
            A selection of web applications and digital experiences showcasing my approach to design, engineering, and practical problem-solving.
          </p>
        </header>

        {/* Projects */}
        <div className="flex flex-col gap-space-2xl">
          {projects.map((project, index) => {
            const imageFirst = index % 2 === 1;

            return (
              <article key={project.id} className={`p-space-lg lg:p-space-xl rounded-3xl shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center border border-outline-variant/20 ${index === 1 ? "bg-surface-container" : index === 3 ? "bg-surface-container-high" : "bg-surface-container-low"}`}>
                {/* Project Preview */}
                <div className={`lg:col-span-7 ${imageFirst ? "order-1" : "order-1 lg:order-2"}`}>
                  <div className={`rounded-2xl ${index === 1 ? "bg-surface-container-lowest" : "bg-surface-container"} p-3 sm:p-4 shadow-xl border border-outline-variant/30`}>
                    <div className="flex items-center gap-1.5 pb-2.5 px-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                      <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                      <span className="ml-2 text-label-technical text-outline font-medium">{project.previewUrl}</span>
                    </div>

                    <div className="overflow-hidden rounded-xl bg-surface-container-lowest">
                      <Image src={project.image} alt={`${project.title} preview`} width={1200} height={800} className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" sizes="(min-width: 1024px) 58vw, 100vw" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`lg:col-span-5 flex flex-col gap-space-md ${imageFirst ? "order-2" : "order-2 lg:order-1"}`}>
                  <div className="flex items-center gap-space-xs">
                    <span className="text-headline-md text-secondary-container font-extrabold">{project.id}</span>
                    <span className="w-8 h-0.5 bg-outline-variant" />
                    <span className="text-label-technical uppercase tracking-wider text-outline font-bold">{project.category}</span>
                  </div>

                  <h3 className="text-headline-md text-primary tracking-tight">{project.title}</h3>

                  <p className="text-body-md text-on-surface-variant">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className={`px-3 py-1 rounded-full ${index === 1 ? "bg-surface-container-high" : "bg-surface-container"} text-primary-container text-label-technical font-medium`}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-space-md pt-space-xs">
                    <Link href={project.liveUrl} className="inline-flex items-center gap-1 text-label-lg text-primary-container font-bold hover:text-secondary transition-colors underline decoration-secondary-container decoration-2 underline-offset-4">
                      <span>View Project</span>
                      <span className="material-symbols-outlined text-[16px]">north_east</span>
                    </Link>

                    <Link href={project.githubUrl} className="inline-flex items-center gap-1 text-label-lg text-on-surface-variant hover:text-primary-container transition-colors font-medium">
                      <span className="material-symbols-outlined text-[18px]">terminal</span>
                      <span>GitHub</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
