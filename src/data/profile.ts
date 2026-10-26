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
  title: __("Staff Full-Stack Engineer"),
  tagline: paragraph(
    __("Frontend-focused, with almost 20 years building for the web."),
    __("I own features end to end: design, data model, architecture, API, UI, and the underlying infrastructure."),
  ),

  location: "Santa Fe, Argentina",
  photo: "profile-photo-cutout.png",
  timezone: __("UTC-3 · full overlap with US business hours"),
  availability: __("Open to remote Staff/Senior Frontend or Full-Stack roles · Contract or full-time · US, Canada & EU"),
  email: "ricmelero@gmail.com",
  phone: "+54 9 342 568 3612",

  links: [
    { label: "linkedin.com/in/javier-melero", url: "https://www.linkedin.com/in/javier-melero/", icon: "linkedin" },
    { label: "github.com/xavier83ar", url: "https://github.com/xavier83ar", icon: "github" },
  ],

  summary: [
    __("Full-stack Staff Engineer with a frontend center of gravity and almost 20 years in web development."),
    __("The last five years were at a US digital-health company working with HIPAA and Medicare/Medicaid Parts C & D, where I grew from Senior Front-end Engineer to Lead (2022) to Staff (2026)."),
    __("I own features end to end: React/Next.js and TypeScript interfaces, embeddable SDKs and component libraries, Node.js/NestJS APIs, PostgreSQL data models, and the GCP/Terraform/CD pipeline that ships them. I write the RFC, build it, and review the team's code."),
    __("Reviewed 440+ pull requests for 25+ engineers while shipping around 390 of my own."),
    __("Before that, I spent 12 years running my own software factory, delivering web, mobile and touch-kiosk products for regulated clients in gaming, government and health."),
    __("Remote from Argentina (UTC-3), working in English day to day.")
  ],

  skills: {
    featured: [
      { label: "TypeScript", icon: "typescript" },
      { label: "React", icon: "custom:react" },
      { label: "Next.js", icon: "custom:nextjs" },
      { label: "Vue", icon: "custom:vuejs" },
      { label: "Node.js", icon: "custom:nodejs" },
      { label: "NestJS", icon: "custom:nestjs" },
      { label: "PostgreSQL", icon: "database" },
      { label: __("Design systems"), icon: "layers" },
      { label: __("Embeddable SDKs"), icon: "code-slash" },
      { label: __("Technical leadership"), icon: "people" },
    ],
    description: __("My focus is frontend engineering and end-to-end ownership of web products, backed by experience across backend, mobile, databases and infrastructure."),

    groups: [
      {
        group: "Frontend",
        items: [
          __("Frontend development"),
          "TypeScript",
          "JavaScript",
          "HTML / HTML5",
          "CSS",
          "jQuery",
          "Next.js",
          "React",
          "Vue",
          "Svelte",
          "Tailwind CSS",
          __("SCSS / CSS architecture"),
          "i18n / l10n (i18next)",
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
          "Google Kubernetes Engine (GKE)",
          "Linux / Ubuntu",
          "Apache",
          "Git",
          "Apache Subversion",
          __("Continuous integration & delivery (CI/CD)"),
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
          "Pendo",
          __("Structured logging"),
          __("Flaky-test remediation"),
        ],
      },
      {
        group: __("Leadership & Practice"),
        items: [
          __("Software design"),
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
      {
        group: __("Additional technologies & domains"),
        items: [
          __("Full-stack development"),
          __("Android development"),
          "Java",
          "C++",
          "WordPress",
          __("Linux system administration"),
          __("Search engine optimization (SEO)"),
          "HIPAA",
          "Medicare / Medicaid Parts C & D"
        ]
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
      summary: __("US digital-health company building virtual-care products for enterprise health plans and insurers."),
      roles: [
        {
          title: __("Staff Engineer"),
          start: "2026-03",
          end: "2026-09",
          summary: __("Staff-level, full-stack ownership of a healthcare provider-navigation platform and the engineering standards around it."),
          highlights: [
            __("Authored the company's internationalization standard and implemented it across eight backend and frontend services, adding Spanish and Portuguese support for Latin American and Brazilian markets."),
            __("Turned the provider-navigation widget into a standalone multi-tenant web app: Cloud Run service, reusable Terraform modules, load-balancer routing and CD pipelines from development to production, plus New Relic and Pendo monitoring."),
            __("Implemented data-level tenancy filtering and extended the shared authorization framework for the appointment-scheduling API."),
            __("Led cross-repo migrations: Node.js upgrade, queue-to-Pub/Sub workers, and a coordinated SDK upgrade across nine plugin repositories."),
            __("Wrote RFCs and implementation plans for AI-assisted development workflows; used Claude Code daily.")
          ],
          stack: [
            "i18next",
            "NestJS",
            "TypeScript",
            "React",
            "Node.js",
            "Next.js"
          ]
        },
        {
          title: __("Lead Web Engineer"),
          start: "2022-09",
          end: "2026-02",
          summary: __("Led web engineering for a healthcare provider-search and appointment-scheduling product across three major versions, from a chat-embedded widget to a standalone multi-tenant web app."),
          highlights: [
            __("Authored the provider data-model RFC, reviewed by the architecture group, and implemented it in a NestJS/PostgreSQL monorepo."),
            __("Migrated video calling from Twilio to the Zoom Video SDK across five repositories and around ten environments, including Kubernetes CSP policy and documentation for external SDK consumers."),
            __("Delivered WhatsApp Business as a member communication channel end to end across seven services."),
            __("Designed the event-driven encounter-handoff flow on GCP Pub/Sub, including publisher and subscriber services, infrastructure and feature flags."),
            __("Built and maintained the embeddable patient SDK and component library with React, TypeScript and semantic-release, consumed by enterprise health-plan clients, with JSON Schema message contracts."),
            __("Built an AI-powered provider search and conversational agents."),
            __("Reviewed 440+ pull requests for 25+ engineers; mentored teammates and ran RFC and design discussions in English.")
          ],
          stack: [
            __("Frontend development"),
            __("Continuous integration & delivery (CI/CD)"),
            "PostgreSQL",
            __("Design systems"),
            "JavaScript",
            "Google Cloud",
            "Jest",
            "Google Kubernetes Engine (GKE)",
            "NestJS",
            "Kubernetes",
            "TypeScript",
            "React",
            "Git",
            "Microfrontends",
            "CSS",
            "Next.js",
            __("Software design"),
            "Vue",
            "Docker",
            "Terraform"
          ]
        },
        {
          title: __("Front-end Senior Engineer"),
          start: "2021-07",
          end: "2022-08",
          summary: __("Senior front-end engineer on the consumer squad, responsible for customers' main web app built with Vue, TypeScript and HTML/CSS."),
          highlights: [
            __("Localized the agent console into Spanish by extracting hundreds of hardcoded strings, laying the foundation for the company-wide internationalization standard."),
            __("Built a standalone chat-transcript package with configuration UI, sorting, role-based download permissions and PDF generation, and integrated it into the agent console."),
            __("Added screen sharing and video-call error instrumentation with Datadog RUM."),
            __("Introduced trunk-based development, semantic-release and API mocking with MSW; fixed a refresh-token expiry bug affecting production."),
            __("Contributed to the embeddable patient SDK.")
          ],
          stack: [
            __("Frontend development"),
            "TypeScript",
            "CSS",
            "HTML",
            "HTML5",
            "Vue"
          ]
        }
      ]
    },
    {
      company: "Soluciones YPunto",
      location: "Santa Fe, Argentina",
      roles: [
        {
          title: __("Partner & CTO"),
          start: "2015-01",
          end: "2021-07"
        }
      ],
      summary: __("Set technical direction and led delivery for client web projects."),
      highlights: [
        __("Developed complete solutions: public websites, progressive web apps, Android and iOS apps, internal admin tools, backends, APIs, databases and the infrastructure serving them.")
      ],
      stack: [
        "MySQL",
        "Symfony",
        "JavaScript",
        "PHP",
        "Git",
        "Vue",
        "HTML5",
        "Docker",
        __("Full-stack development"),
        __("Android development"),
        "CakePHP"
      ],
      logo: "logos/experience/soluciones-ypunto.png"
    },
    {
      company: "Linked Comunicaciones",
      location: "Argentina",
      roles: [
        {
          title: "CEO",
          start: "2005-01",
          end: "2015-01"
        }
      ],
      summary: __("Developed web-based systems and applications, alongside IP telephony, telecommunications and data-network solutions."),
      stack: [
        __("Frontend development"),
        "CakePHP",
        "MySQL",
        "PostgreSQL",
        "JavaScript",
        "PHP",
        "Apache",
        "CSS",
        __("Software design")
      ]
    },
    {
      company: "Server Protectors",
      location: "Argentina",
      roles: [
        {
          title: __("Systems Administrator"),
          start: "2010-08",
          end: "2011-07"
        }
      ],
      summary: __("Remote server administration and customer support for more than 700 Windows and Linux servers across three datacenters in St. Louis, Toronto and Ashburn."),
      highlights: [
        __("Installed operating systems and administered Apache, IIS, MySQL, SQL Server, DNS and mail services on Windows Server 2003/2008, RHEL and Ubuntu; supported customer applications including WordPress and Joomla.")
      ],
      stack: [
        "Apache"
      ]
    },
    {
      company: "Cenys Network",
      location: __("Málaga, Spain / Santo Tomé, Argentina"),
      roles: [
        {
          title: __("Project Manager"),
          start: "2008-03",
          end: "2009-12"
        }
      ],
      summary: __("Led projects and the web development department, coordinating programmers, layout specialists and designers."),
      highlights: [
        __("Developed PHP systems using the CakePHP framework.")
      ],
      stack: [
        __("Frontend development"),
        "CakePHP",
        "MySQL",
        "PHP",
        __("Software design")
      ]
    }
  ,
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
      level: __("Full professional proficiency"),
      detail: __("Five years working in English with a US-based team, written technical design, RFC and architecture review, and daily collaboration."),
    },
  ],
}));
