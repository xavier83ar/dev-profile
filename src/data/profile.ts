import type { Profile } from "./types";

export const profile: Profile = {
  name: "Javier Melero",
  title: "Lead Web Engineer",
  tagline:
    "Almost 20 years building for the web. " +
    "I own features end to end: " +
    "design, data model, architecture, API, UI, and the underlying infrastructure.",

  location: "Santa Fe, Argentina",
  photo: "profile-photo.jpg",
  timezone: "UTC-3 · full overlap with US business hours",
  availability: "Open to remote roles · Available as an independent contractor",
  email: "ricmelero@gmail.com",
  phone: "+54 9 342 568 3612",

  links: [
    { label: "linkedin.com/in/javier-melero", url: "https://www.linkedin.com/in/javier-melero/", icon: "linkedin" },
    { label: "github.com/xavier83ar", url: "https://github.com/xavier83ar", icon: "github" },
  ],

  summary: [
    "I'm a developer with almost 20 years of experience. I've had the chance to work with diverse technologies during my career, but most of my experience was building on web technologies, that's why Lead Web Engineer title is what best describes me.",
    "I feel comfortable owning features during the whole lifecycle: from the early design to the implementation, monitoring and maintenance.",
    "The last five years I've been working for a US digital-health company where I carried features across every layer they touched: " +
    "data model, API, interface and the infrastructure underneath. ",
  ],

  skills: {
    description:
      "Although I've been focused on front end and web technologies, " +
      "I would argue that my main strength is versatility, as I worked with an extensive and diverse list " +
      "technologies that goes from web stack to desktop and mobile, " +
      "I touched almost every well known database engine, and I've done infrastructure before DevOps was a thing.",
    groups: [
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
          "i18n / l10n",
          "Storybook",
          "Design systems & component libraries",
          "Embeddable SDKs & widgets",
          "Micro-frontend & plugin architectures",
          "Content Security Policy",
        ],
      },
      {
        group: "Backend",
        items: [
          "Node.js",
          "NestJS",
          "REST API design",
          "Event-driven architecture (GCP Pub/Sub)",
          "RabbitMQ",
          "JSON Schema contracts",
          "Multi-tenancy & data-level tenancy scoping",
          "Auth (AWS Cognito, Microsoft SSO)",
          "Hapi",
          "PHP (CakePHP, Symfony, Laravel)",
          "Python",
        ],
      },
      {
        group: 'Database',
        items: [
          "PostgreSQL",
          "MySQL/MariaDB",
          "SQL Server",
          "Oracle",
          "MongoDB",
          "Firebase",
          "ORM's (TypeORM, CakePHP, Symfony)",
          "Migrations",
        ],
      },
      {
        group: "Infrastructure & CI/CD",
        items: [
          "Terraform",
          "Google Cloud Platform (Cloud Run, Pub/Sub)",
          "Docker",
          "Kubernetes & Helm",
          "Nx monorepos",
          "GitHub Actions",
          "Harness CD",
          "Trunk-based development",
          "semantic-release & npm package publishing",
          "Aws (Cognito, CloudFront, Lambda, SES)",
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
    ]
  },

  experience: [
    {
      company: "Pager Health",
      title: "Lead Web Engineer",
      location: "Remote — US company",
      start: "2021-06",
      end: "2026-09",
      summary:
        "US digital-health company building virtual-care products for enterprise health plans and insurers. " +
        "I led the web engineering for a provider-search and appointment-scheduling product, " +
        "and worked across the member-facing SDK, the agent command center, the backend services " +
        "and the infrastructure behind them.",
      highlights: [
        "Led web engineering for a provider-search and appointment-scheduling application: authored the provider " +
          "data-model RFC, implemented it, built the member-facing UI, and provisioned the Cloud Run service, Terraform modules and " +
          "delivery pipelines to production.",
        "Migrated member and agent video calling from Twilio to the Zoom Video SDK across five services, covering SDK" +
          " core, embedded widget, agent console, Helm CSP policy and external consumer documentation.",
        "Built and maintained an embeddable patient SDK, consumed by enterprise health-plan clients.",
        "Authored the company's internationalisation standard, then implemented it across backend and frontend services, adding Spanish and Portuguese for Latin-American and Brazilian markets.",
        "Delivered WhatsApp Business as a member communication channel end to end across seven services: Twilio templated messages, configuration UI, routing and agent send flow.",
      ],
      stack: [
        "TypeScript",
        "Next.js",
        "React",
        "Vue",
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
        "Formed when the software-development branch of Linked Comunicaciones merged with Soluciones yPunto, giving " +
        "the combined company the capacity to take on larger clients. I set technical direction and led delivery.",
      highlights: [
        "Set technical direction and led delivery for client web projects, taking on engagements larger than either predecessor company had handled alone.",
        "Moved from public/institutional website projects to complex systems that powered customers business for external and internal users.",
        "Developed complete solutions including: public website, web apps (pwa), mobile apps (android and ios), internal admin tools, backend, api's, databases and the infrastructure that serves them.",
      ],
      stack: ["PHP", "CakePHP", "Symfony", "JavaScript", "Vue", "MySQL", "Linux", "Docker"],
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
        "Built the technical practice from zero (development, hosting and infrastructure) for clients across several industries.",
        "Published reusable components from client work as open source: CakePHP plugins, JavaScript libraries and upstream bug fixes.",
      ],
      stack: ["PHP", "CakePHP", "JavaScript", "MySQL", "Linux", "Apache"],
    },
    {
      company: "Eniti Media SL (former Cenys Network SL)(extinct)",
      title: "Project Manager",
      location: "Málaga, Spain / Santo Tomé, Argentina",
      start: "2008-01",
      end: "2010-01",
      summary:
        "Ran the web development department for a Spanish media company, working across two countries.",
      highlights: [
        "Worked with internet ads, marketing campaigns and partner programs, massive e-mail campaigns (millions of e-mails sent per day).",
        "Services optimization for response time under heavy load.",
        "DB Administration of large databases with +100 millions records tables.",
      ],
      stack: ["PHP", "CakePHP", "JavaScript", "MySQL"],
    },
    {
      company: "Universidad Tecnológica Nacional",
      title: "Systems Administrator & Research Assistant",
      location: "Santa Fe, Argentina",
      start: "2007-01",
      end: "2007-12",
      summary:
        "Network administration and configuration at the university's connectivity labs, alongside a research position in a math-applied program.",
    },
  ],

  education: [
    {
      institution: "Universidad Tecnológica Nacional",
      qualification: "Analista Universitario en Sistemas (Systems Analyst)",
      location: "Santa Fe, Argentina",
      period: "2003 – 2013",
      detail:
        "Intermediate degree of the Information Systems Engineering career.",
    },
    {
      institution: "Universidad Tecnológica Nacional",
      qualification: "Ingeniería en Sistemas de Información — coursework through fifth year",
      location: "Santa Fe, Argentina",
      period: "2003 – on hold",
      detail: "30 subjects completed.",
    },
  ],

  languages: [
    { name: "Spanish", level: "Native" },
    {
      name: "English",
      level: "Professional working proficiency",
      detail:
        "Five years working in English with a US-based team, written technical design, RFC and architecture review, and daily collaboration.",
    },
  ],
};
