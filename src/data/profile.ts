import { computed } from "vue";
import { __, paragraph } from "@/i18n";
import type { Profile } from "./types";

/**
 * The profile, in the active language.
 *
 * A computed rather than a constant: `__()` reads the current locale, so the
 * whole object is rebuilt when the language changes. Text that is not wrapped
 * in `__()` — names, technologies — is the same in every language.
 */
export const profile = computed<Profile>(() => ({
  name: "Javier Melero",
  title: __("Lead Web Engineer"),
  tagline: paragraph(
    __("Almost 20 years building for the web."),
    __("I own features end to end: design, data model, architecture, API, UI, and the underlying infrastructure."),
  ),

  location: "Santa Fe, Argentina",
  photo: "profile-photo.jpg",
  timezone: __("UTC-3 · full overlap with US business hours"),
  availability: __("Open to remote roles · Available as an independent contractor"),
  email: "ricmelero@gmail.com",
  phone: "+54 9 342 568 3612",

  links: [
    { label: "linkedin.com/in/javier-melero", url: "https://www.linkedin.com/in/javier-melero/", icon: "linkedin" },
    { label: "github.com/xavier83ar", url: "https://github.com/xavier83ar", icon: "github" },
  ],

  summary: [
    paragraph(
      __("I'm a developer with almost 20 years of experience."),
      __("I've had the chance to work with diverse technologies during my career, but most of my experience was building on web technologies, that's why Lead Web Engineer title is what best describes me."),
    ),
    __("I feel comfortable owning features during the whole lifecycle: from the early design to the implementation, monitoring and maintenance."),
    __("The last five years I've been working for a US digital-health company where I carried features across every layer they touched: data model, API, interface and the infrastructure underneath."),
  ],

  skills: {
    description: __(
      "Although I've been focused on front end and web technologies, " +
      "I would argue that my main strength is versatility, as I worked with an extensive and diverse list " +
      "technologies that goes from web stack to desktop and mobile, " +
      "I touched almost every well known database engine, and I've done infrastructure before DevOps was a thing.",
    ),
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
          __("SCSS / CSS architecture"),
          "i18n / l10n",
          "Storybook",
          __("Design systems & component libraries"),
          __("Embeddable SDKs & widgets"),
          __("Micro-frontend & plugin architectures"),
          "Content Security Policy",
        ],
      },
      {
        group: "Backend",
        items: [
          "Node.js",
          "NestJS",
          __("REST API design"),
          __("Event-driven architecture (GCP Pub/Sub)"),
          "RabbitMQ",
          __("JSON Schema contracts"),
          __("Multi-tenancy & data-level tenancy scoping"),
          "Auth (AWS Cognito, Microsoft SSO)",
          "Hapi",
          "PHP (CakePHP, Symfony, Laravel)",
          "Python",
        ],
      },
      {
        group: __("Database"),
        items: [
          "PostgreSQL",
          "MySQL/MariaDB",
          "SQL Server",
          "Oracle",
          "MongoDB",
          "Firebase",
          "ORM's (TypeORM, CakePHP, Symfony)",
          __("Migrations"),
        ],
      },
      {
        group: __("Infrastructure & CI/CD"),
        items: [
          "Terraform",
          "Google Cloud Platform (Cloud Run, Pub/Sub)",
          "Docker",
          "Kubernetes & Helm",
          "Nx monorepos",
          "GitHub Actions",
          "Harness CD",
          __("Trunk-based development"),
          __("semantic-release & npm package publishing"),
          "Aws (Cognito, CloudFront, Lambda, SES)",
        ],
      },
      {
        group: __("Testing & Observability"),
        items: [
          "Jest",
          "Cypress",
          "MSW (mock service worker)",
          "New Relic (APM & Browser)",
          "Datadog RUM",
          __("Structured logging"),
          __("Flaky-test remediation"),
        ],
      },
      {
        group: __("Leadership & Practice"),
        items: [
          __("Technical leadership"),
          __("RFCs & written technical design"),
          __("Code review at scale"),
          __("Mentoring"),
          __("Cross-team coordination"),
          __("Incident root-cause analysis"),
          __("Agile delivery & refinement"),
          __("AI-assisted engineering workflows"),
        ],
      },
    ]
  },

  ai: [
    paragraph(
      __("AI is part of how I build software day to day, not a novelty I bolt on."),
      __("Claude Code is my primary tool for analysis, technical design and implementation — I use it to draft RFCs, review code and work through cross-repo changes, and I'm comfortable writing agent skills and prompt-driven workflows rather than just prompting ad hoc."),
    ),
    paragraph(
      __("I've also built AI into the product, not just around it."),
      __("At Pager Health I worked on member-facing conversational agents, first on Dialogflow and later migrated to Google's Agent Development Kit (ADK), with a Python service connecting them to the rest of the platform."),
      __("More recently I helped ship an AI-powered search experience for our provider-search product, using Gemini 3.1 Flash Lite as the model behind it."),
    ),
  ],

  experience: [
    {
      company: "Pager Health",
      location: __("Remote — US company"),
      logo: "logos/experience/pager-health-logo.png",
      roles: [
        {
          title: __("Staff Engineer"),
          start: "2026-03",
          end: "2026-09",
          summary: __("Authored the company's internationalization standard, then implemented it across backend and frontend services, adding Spanish and Portuguese for Latin-American and Brazilian markets."),
        },
        {
          title: __("Lead Web Engineer"),
          start: "2022-10",
          end: "2026-02",
          highlights: [
            __(
              "Led web engineering for a provider-search and appointment-scheduling application: authored the provider " +
              "data-model RFC, implemented it, built the member-facing UI, and provisioned the Cloud Run service, Terraform modules and " +
              "delivery pipelines to production.",
            ),
            __(
              "Migrated member and agent video calling from Twilio to the Zoom Video SDK across five services, covering SDK" +
              " core, embedded widget, agent console, Helm CSP policy and external consumer documentation.",
            ),
            __("Delivered WhatsApp Business as a member communication channel end to end across seven services: Twilio templated messages, configuration UI, routing and agent send flow."),
          ],
        },
        {
          title: __("Senior Front-end Engineer"),
          start: "2021-06",
          end: "2022-09",
          summary: __("Built and maintained an embeddable patient SDK, consumed by enterprise health-plan clients."),
        },
      ],
      summary: __("US digital-health company building virtual-care products for enterprise health plans and insurers."),
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
      location: "Santa Fe, Argentina",
      roles: [{ title: __("Partner & CTO"), start: "2016-01", end: "2021-06" }],
      summary: paragraph(
        __(
          "Formed when the software-development branch of Linked Comunicaciones merged with Soluciones yPunto, giving " +
          "the combined company the capacity to take on larger clients.",
        ),
        __("I set technical direction and led delivery."),
      ),
      highlights: [
        __("Set technical direction and led delivery for client web projects, taking on engagements larger than either predecessor company had handled alone."),
        __("Moved from public/institutional website projects to complex systems that powered customers business for external and internal users."),
        __("Developed complete solutions including: public website, web apps (pwa), mobile apps (android and ios), internal admin tools, backend, api's, databases and the infrastructure that serves them."),
      ],
      stack: ["PHP", "CakePHP", "Symfony", "JavaScript", "Vue", "MySQL", "Linux", "Docker"],
      logo: 'logos/experience/soluciones-ypunto.png',
    },
    {
      company: "Linked Comunicaciones",
      location: "Santa Fe, Argentina",
      roles: [{ title: __("Founding Partner & CTO"), start: "2010-01", end: "2016-01" }],
      summary: __("A startup founded with university friends providing web development and hosting to local companies, with clients across gaming, construction and local government."),
      highlights: [
        __("Built the technical practice from zero (development, hosting and infrastructure) for clients across several industries."),
        __("Published reusable components from client work as open source: CakePHP plugins, JavaScript libraries and upstream bug fixes."),
      ],
      stack: ["PHP", "CakePHP", "JavaScript", "MySQL", "Linux", "Apache"],
    },
    {
      company: __("Eniti Media SL (former Cenys Network SL)(extinct)"),
      location: __("Málaga, Spain / Santo Tomé, Argentina"),
      roles: [{ title: __("Project Manager"), start: "2008-01", end: "2010-01" }],
      summary: __("Ran the web development department for a Spanish media company, working across two countries."),
      highlights: [
        __("Worked with internet ads, marketing campaigns and partner programs, massive e-mail campaigns (millions of e-mails sent per day)."),
        __("Services optimization for response time under heavy load."),
        __("DB Administration of large databases with +100 millions records tables."),
      ],
      stack: ["PHP", "CakePHP", "JavaScript", "MySQL"],
    },
    {
      company: "Universidad Tecnológica Nacional",
      location: "Santa Fe, Argentina",
      roles: [
        { title: __("Systems Administrator & Research Assistant"), start: "2007-01", end: "2007-12" },
      ],
      summary: __("Network administration and configuration at the university's connectivity labs, alongside a research position in a math-applied program."),
    },
  ],

  education: [
    {
      institution: "Universidad Tecnológica Nacional",
      qualification: __("Analista Universitario en Sistemas (Systems Analyst)"),
      location: "Santa Fe, Argentina",
      period: "2003 – 2013",
      detail: __("Intermediate degree of the Information Systems Engineering career."),
    },
    {
      institution: "Universidad Tecnológica Nacional",
      qualification: __("Ingeniería en Sistemas de Información — coursework through fifth year"),
      location: "Santa Fe, Argentina",
      period: __("2003 – on hold"),
      detail: __("30 subjects completed."),
    },
  ],

  languages: [
    { name: __("Spanish"), level: __("Native") },
    {
      name: __("English"),
      level: __("Professional working proficiency"),
      detail: __("Five years working in English with a US-based team, written technical design, RFC and architecture review, and daily collaboration."),
    },
  ],
}));
