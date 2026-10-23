import Image from "next/image";

const skills = [
  {
    id: "lettuce",
    number: "02",
    ingredient: "Crisp Lettuce",
    title: "UI/UX & INTERACTION",
    description:
      "Fresh motion, intuitive interfaces, and seamless accessibility standards.",
    technologies: [
      "Responsive Design",
      "UI Implementation",
      "Animations",
      "Accessibility",
    ],
    position: "left",
    color: "#56834A",
    borderColor: "rgba(86, 131, 74, 0.35)",
    background: "#E8F1DF",
  },
  {
    id: "patty",
    number: "04",
    ingredient: "Savory Beef Patty",
    title: "DATABASES",
    description:
      "The high-protein persistent core powering stateful architectures and relations.",
    technologies: [
      "MongoDB",
      "Mongoose",
      "Database Design",
      "PostgreSQL",
    ],
    position: "left",
    color: "#70452E",
    borderColor: "rgba(112, 69, 46, 0.35)",
    background: "#F0E3D8",
  },
  {
    id: "top-bun",
    number: "01",
    ingredient: "Top Bun",
    title: "FRONTEND & UI",
    description:
      "The visible golden crust and client-facing layer of every digital product.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
    ],
    position: "right",
    color: "#E5A000",
    borderColor: "rgba(229, 160, 0, 0.35)",
    background: "#FFF0BD",
  },
  {
    id: "cheese",
    number: "03",
    ingredient: "Tomato & Cheese",
    title: "BACKEND & APIs",
    description:
      "The savory flavor powering domain logic, security pipelines, and data.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "JWT",
    ],
    position: "right",
    color: "#D65343",
    borderColor: "rgba(214, 83, 67, 0.35)",
    background: "#FBE6DF",
  },
  {
    id: "bottom-bun",
    number: "05",
    ingredient: "Bottom Bun",
    title: "TOOLS & DEPLOYMENT",
    description:
      "The solid foundation and infrastructure holding the stack together.",
    technologies: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Vercel",
    ],
    position: "right",
    color: "#C58B28",
    borderColor: "rgba(197, 139, 40, 0.35)",
    background: "#F8EACB",
  },
] as const;

type Skill = (typeof skills)[number];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article
      id={`card-${skill.id}`}
      className="relative flex flex-col gap-2 rounded-2xl border bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ borderColor: skill.borderColor }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: skill.background, color: skill.color, }}>
          {skill.number} · {skill.ingredient}
        </span>

        <span
          aria-hidden="true"
          className="h-3 w-3 shrink-0 rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>

      <h3 className="text-lg font-bold tracking-tight" style={{ color: skill.color }}>
        {skill.title}
      </h3>

      <p className="text-sm leading-6 text-stone-600">
        {skill.description}
      </p>

      <ul className="flex flex-wrap gap-1.5 pt-1.5">
        {skill.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full px-2.5 py-1 text-xs font-medium"
            style={{
              backgroundColor: skill.background,
              color: "#2B190E",
            }}
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}

function SkillConnectors() {
  const connectors = [
    {
      id: "top-bun",
      path: "M 660 88 H 535 V 135",
      x: 535,
      y: 135,
      color: "#E5A000",
    },
    {
      id: "lettuce",
      path: "M 340 215 H 430 V 225",
      x: 430,
      y: 225,
      color: "#56834A",
    },
    {
      id: "cheese",
      path: "M 660 330 H 550 V 325",
      x: 550,
      y: 325,
      color: "#D65343",
    },
    {
      id: "patty",
      path: "M 340 470 H 445 V 445",
      x: 445,
      y: 445,
      color: "#70452E",
    },
    {
      id: "bottom-bun",
      path: "M 660 550 H 520 V 520",
      x: 520,
      y: 520,
      color: "#C58B28",
    },
  ];

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block"
      viewBox="0 0 1000 660"
      preserveAspectRatio="none"
      fill="none"
    >
      {connectors.map((connector) => (
        <g key={connector.id}>
          <path
            d={connector.path}
            stroke={connector.color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx={connector.x}
            cy={connector.y}
            r="4.5"
            fill="#2B190E"
          />
          <circle
            cx={connector.x}
            cy={connector.y}
            r="8"
            stroke={connector.color}
            strokeWidth="2"
          />
        </g>
      ))}
    </svg>
  );
}

export default function Skills() {
  const leftSkills = skills.filter(
    (skill) => skill.position === "left"
  );

  const rightSkills = skills.filter(
    (skill) => skill.position === "right"
  );

  return (
    <section id="skills" className="relative w-full overflow-hidden bg-surface-container-low px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        {/* Section Header */}
        <header className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
            My Tech Stack
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
            Built Layer by Layer.
          </h2>

          <p className="text-base leading-7 text-stone-600 sm:text-lg">
            Every layer brings together the tools and technologies I use
            to design, develop, and deliver robust digital products.
          </p>
        </header>

        {/* Main Layout */}
        <div className="relative mx-auto w-full max-w-7xl py-4 lg:py-8">
          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:min-h-165 lg:grid-cols-12 lg:items-stretch lg:gap-6">
            {/* Left Column */}
            <div className="order-2 flex flex-col justify-around gap-6 lg:order-1 lg:col-span-4 lg:gap-12 lg:pt-16 lg:pb-12">
              {leftSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>

            {/* Center Burger */}
            <div className="order-1 flex items-center justify-center lg:order-2 lg:col-span-4">
              <div className="relative mx-auto flex w-full max-w-107.5 items-center justify-center">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 m-auto h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

                <Image
                  src="/skills-burger.png"
                  alt="Exploded 3D burger representing the technology stack"
                  width={600}
                  height={800}
                  priority
                  className="relative z-10 h-auto max-h-155 w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="order-3 flex flex-col justify-between gap-6 lg:col-span-4">
              {rightSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>

          {/* Connector Lines */}
          <SkillConnectors />
        </div>
      </div>
    </section>
  );
}
