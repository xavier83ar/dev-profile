import type { Profile } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  THIS FILE IS THE CV.
 *
 *  Sourced from docs/cv-ricardo-javier-melero.md and docs/DEVELOPER-PROFILE.md.
 *  Privacy rules applied (PLAN.md §3): no internal repository, product, team or
 *  client names. Vendors, employers and activity metrics are kept.
 *
 *  Anything marked TODO: needs your input. Grep for it before publishing.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile: Profile = {
  name: "Javier Melero",
  title: "Lead Web Engineer",
  tagline:
    "Nineteen years building for the web. I own features end to end — data model, API, interface, and the infrastructure that serves them.",

  location: "Santa Fe, Argentina",
  timezone: "UTC-3 — full overlap with US business hours",
  availability: "Open to remote roles · Available as an independent contractor",
  email: "ricmelero@gmail.com",
  phone: "+54 9 342 568 3612",

  links: [
    { label: "linkedin.com/in/javier-melero", url: "https://www.linkedin.com/in/javier-melero/" },
    { label: "github.com/xavier83ar", url: "https://github.com/xavier83ar" },
  ],

  summary:
    "Lead web engineer with nineteen years on the web, the last five at a US digital-health company where I carried features across every layer they touched — data model, API, interface and the infrastructure underneath. I work primarily in TypeScript: Next.js and React at the front, NestJS and PostgreSQL behind, inside an Nx monorepo on GCP. My specialism is the shared and the embeddable — SDKs, component libraries and plugin platforms that other engineers and other companies build on, where public API surface, versioning and backward compatibility are the actual work. I write the design down before I write the code, and I review widely: 442 pull requests for more than 25 engineers across the organisation, alongside 391 of my own.",

  skills: [
    {
      group: "Frontend",
      items: [
        "TypeScript",
        "Next.js",
        "React",
        "Vue",
        "Svelte",
        "Tailwind CSS",
        "SCSS / CSS architecture",
        "Design systems & component libraries",
        "Embeddable SDKs & widgets",
        "Micro-frontend & plugin architectures",
        "Storybook",
        "i18next / internationalisation",
        "Content Security Policy",
      ],
    },
    {
      group: "Backend",
      items: [
        "Node.js",
        "NestJS",
        "REST API design",
        "PostgreSQL",
        "TypeORM",
        "Event-driven architecture (GCP Pub/Sub)",
        "JSON Schema contracts",
        "Multi-tenancy & data-level tenancy scoping",
        "Auth (AWS Cognito, Microsoft SSO)",
        "Hapi",
        "PHP — CakePHP, Symfony, Laravel (pre-2021)",
      ],
    },
    {
      group: "Infrastructure & Delivery",
      items: [
        "Terraform",
        "Google Cloud Platform (Cloud Run, Pub/Sub, Firebase, load balancers)",
        "Docker",
        "Kubernetes & Helm",
        "Nx monorepos",
        "GitHub Actions",
        "Harness CD",
        "Trunk-based development",
        "semantic-release & npm package publishing",
      ],
    },
    {
      group: "Testing & Observability",
      items: [
        "Jest",
        "Cypress",
        "MSW (mock service worker)",
        "New Relic (APM & Browser)",
        "Datadog RUM",
        "Structured logging",
        "Flaky-test remediation",
      ],
    },
    {
      group: "Leadership & Practice",
      items: [
        "Technical leadership",
        "RFCs & written technical design",
        "Code review at scale",
        "Mentoring",
        "Cross-team coordination",
        "Incident root-cause analysis",
        "Agile delivery & refinement",
        "AI-assisted engineering workflows",
      ],
    },
  ],

  experience: [
    {
      company: "Pager Health",
      title: "Lead Web Engineer",
      location: "Remote — US company",
      start: "2021-06",
      end: "2026-09",
      summary:
        "US digital-health company building virtual-care products for enterprise health plans and insurers. I led the web engineering for a provider-search and appointment-scheduling product, and worked across the member-facing SDK, the agent console, the backend services and the infrastructure behind them.",
      highlights: [
        "Led web engineering for a provider-search and appointment-scheduling product across three major versions, from an embedded chat widget to a standalone multi-tenant web application — authored the provider data-model RFC through architecture review, implemented it in a NestJS/PostgreSQL Nx monorepo, built the member-facing UI, and provisioned the Cloud Run service, Terraform modules and delivery pipelines to production.",
        "Migrated member and agent video calling from Twilio to the Zoom Video SDK across five services and ten deployment environments, covering SDK core, embedded widget, agent console, Helm CSP policy and external consumer documentation.",
        "Built and maintained an embeddable patient SDK in TypeScript — core client, component library and widget — published with semantic-release and consumed by enterprise health-plan clients, with versioning and backward compatibility managed across a multi-package surface.",
        "Authored the company's internationalisation standard, then implemented it across eight backend and frontend services, adding Spanish and Portuguese for Latin-American and Brazilian markets.",
        "Designed and shipped an event-driven handoff architecture on GCP Pub/Sub spanning a publisher service, two subscriber services, infrastructure provisioning and feature-flag wiring.",
        "Delivered WhatsApp Business as a member communication channel end to end across seven services — Twilio templated messages, configuration UI, routing and agent send flow.",
        "Authored 391 pull requests across 49 repositories and reviewed 442 for more than 25 engineers, reviewing across teams and across the stack rather than only my own area.",
      ],
      stack: [
        "TypeScript",
        "Next.js",
        "React",
        "Vue",
        "Svelte",
        "NestJS",
        "PostgreSQL",
        "GCP",
        "Terraform",
        "Nx",
      ],
    },
    {
      company: "Soluciones yPunto",
      title: "Partner & CTO",
      location: "Santa Fe, Argentina",
      start: "2016-01",
      end: "2021-06",
      summary:
        "Formed when the software-development arm of Linked Comunicaciones merged with Soluciones yPunto, giving the combined company the capacity to take on larger clients. I set technical direction and led delivery.",
      highlights: [
        "Set technical direction and led delivery for client web projects, taking on engagements larger than either predecessor company had handled alone.",
        "TODO: a project you are proud of here — what it was, the scale, and what you owned technically.",
        "TODO: team size you led, and anything you can quantify (clients, uptime, delivery time, revenue).",
      ],
      stack: ["PHP", "CakePHP", "JavaScript", "Vue", "MySQL", "Linux"],
    },
    {
      company: "Linked Comunicaciones",
      title: "Founding Partner & CTO",
      location: "Santa Fe, Argentina",
      start: "2010-01",
      end: "2016-01",
      summary:
        "A startup founded with university friends providing web development and hosting to local companies, with clients across gaming, construction and local government.",
      highlights: [
        "Built the technical practice from zero — development, hosting and infrastructure — for clients across several industries.",
        "Published reusable components from client work as open source: CakePHP plugins, JavaScript libraries and upstream bug fixes.",
      ],
      stack: ["PHP", "CakePHP", "JavaScript", "MySQL", "Linux", "Apache"],
    },
    {
      company: "Cenys Network SL (Eniti Media SL)",
      title: "Project Manager, Web Development",
      location: "Málaga, Spain / Santo Tomé, Argentina",
      start: "2008-01",
      end: "2010-01",
      summary:
        "Ran the web development department for a Spanish media company, working across two countries.",
    },
    {
      company: "Universidad Tecnológica Nacional",
      title: "Systems Administrator & Research Assistant",
      location: "Santa Fe, Argentina",
      start: "2007-01",
      end: "2007-12",
      summary:
        "Network administration and configuration at the university's connectivity labs, alongside a research post in the technological-education programme.",
    },
  ],

  education: [
    {
      institution: "Universidad Tecnológica Nacional — Facultad Regional Santa Fe",
      qualification: "Analista Universitario en Sistemas (University Systems Analyst)",
      location: "Santa Fe, Argentina",
      period: "2003 – 2013",
      detail:
        "Intermediate degree of the Information Systems Engineering programme.",
    },
    {
      institution: "Universidad Tecnológica Nacional — Facultad Regional Santa Fe",
      qualification: "Ingeniería en Sistemas de Información — coursework through fifth year",
      location: "Santa Fe, Argentina",
      period: "2003 – paused",
      detail: "30 subjects completed. Paused to work full-time.",
    },
  ],

  languages: [
    { name: "Spanish", level: "Native" },
    {
      name: "English",
      level: "Professional working proficiency",
      detail:
        "Five years working entirely in English with a US-based team — written technical design, RFC and architecture review, and daily collaboration.",
    },
  ],
};
