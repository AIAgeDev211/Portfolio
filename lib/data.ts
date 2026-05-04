export type SkillGroup = {
  title: string;
  description: string;
  skills: { name: string; level?: "core" | "strong" | "working" }[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  live?: string;
  repo?: string;
  highlight?: boolean;
  flagship?: boolean;
  image: string;
  accent: string;
  icon:
    | "book-heart"
    | "users-round"
    | "shopping-bag"
    | "line-chart"
    | "heart-pulse"
    | "map-pin"
    | "sparkles"
    | "message-square";
  motif: string;
  category: "web" | "mobile";
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
};

export const profile = {
  name: "Phoebe Johnson",
  role: "AI Engineer & Founder, OpenClaw",
  location: "Remote · Worldwide",
  tagline:
    "I build production AI — grounded RAG, agents that use tools, and on-device models — for teams that can't ship hallucinations.",
  bio: `I'm an AI engineer and the founder of OpenClaw AI — a retrieval-augmented
        generation platform that turns a team's docs, data, and APIs into grounded,
        citation-backed AI experiences. I work end-to-end across model selection,
        retrieval pipelines (chunking, embeddings, hybrid search, cross-encoder
        reranking), agent tool use, structured outputs, evals, and the SwiftUI / Next.js
        surfaces those models live behind. Seven years of shipping web and mobile
        products before AI is what keeps my AI work shippable rather than demo-only.`,
  email: "Phoebe.johnson7@protonmail.com",
  social: {
    github: "https://github.com/s0ftwareDeveloper",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    dribbble: "https://dribbble.com/"
  },
  availability: "building OpenClaw AI · open to select AI engagements",
  stats: [
    { label: "Building", value: "OpenClaw" },
    { label: "AI in production since", value: "2022" },
    { label: "Models shipped on", value: "Claude · GPT · Gemini" },
    { label: "Focus", value: "Grounded RAG · Agents" }
  ]
};

export const skills: SkillGroup[] = [
  {
    title: "AI / ML",
    description:
      "End-to-end production AI — model selection, retrieval pipelines, agents, evals, and the safety + observability that keep them shippable.",
    skills: [
      { name: "Claude Sonnet / Opus 4.x", level: "core" },
      { name: "GPT-5 / GPT-4o", level: "core" },
      { name: "Gemini 2.5", level: "strong" },
      { name: "Anthropic SDK", level: "core" },
      { name: "OpenAI SDK", level: "core" },
      { name: "Vercel AI SDK", level: "core" },
      { name: "RAG (chunking · embeddings)", level: "core" },
      { name: "Hybrid search", level: "core" },
      { name: "Cross-encoder reranking", level: "core" },
      { name: "pgvector", level: "core" },
      { name: "Pinecone", level: "strong" },
      { name: "Tool use / Agents", level: "core" },
      { name: "Structured outputs", level: "core" },
      { name: "Streaming", level: "core" },
      { name: "MCP", level: "strong" },
      { name: "LangChain / LlamaIndex", level: "strong" },
      { name: "Evals (Promptfoo · Braintrust)", level: "working" },
      { name: "Whisper", level: "strong" },
      { name: "Core ML / MLX", level: "working" }
    ]
  },
  {
    title: "Web",
    description: "Typed, composable UI and services I reach for every day.",
    skills: [
      { name: "Next.js", level: "core" },
      { name: "React", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "Node.js", level: "core" },
      { name: "Express", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "tRPC", level: "working" },
      { name: "REST / GraphQL", level: "strong" }
    ]
  },
  {
    title: "Mobile",
    description: "Native-first experiences with cross-platform velocity when it counts.",
    skills: [
      { name: "Swift", level: "core" },
      { name: "SwiftUI", level: "core" },
      { name: "Kotlin", level: "core" },
      { name: "Jetpack Compose", level: "core" },
      { name: "React Native", level: "core" },
      { name: "Expo", level: "core" }
    ]
  },
  {
    title: "Data & Backend",
    description: "Modeling, realtime sync, auth, and everything that runs behind the glass.",
    skills: [
      { name: "PostgreSQL", level: "core" },
      { name: "MongoDB", level: "core" },
      { name: "Supabase", level: "core" },
      { name: "Firebase", level: "core" },
      { name: "MySQL", level: "core" },
      { name: "Prisma", level: "core" },
      { name: "Redis", level: "working" }
    ]
  },
  {
    title: "Tooling & Cloud",
    description: "The boring-good stuff that keeps teams shipping safely.",
    skills: [
      { name: "Vercel", level: "core" },
      { name: "AWS", level: "core" },
      { name: "GCP", level: "working" },
      { name: "Docker", level: "core" },
      { name: "GitHub Actions", level: "strong" },
      { name: "Jest / Vitest", level: "strong" },
      { name: "Playwright", level: "strong" }
    ]
  }
];

export const projects: Project[] = [
  {
    title: "OpenClaw AI — RAG Platform",
    description:
      "A developer-first retrieval-augmented generation platform. Plug in your docs, data, and APIs — OpenClaw handles chunking, embeddings, hybrid search, cross-encoder reranking, and grounded generation with full citation trails. Built for teams who can't ship hallucinations.",
    tags: [
      "Next.js",
      "TypeScript",
      "pgvector",
      "OpenAI",
      "Anthropic",
      "Hybrid search",
      "Reranking"
    ],
    role: "",
    year: "2024 — 2025",
    live: "#",
    repo: "#",
    highlight: true,
    flagship: true,
    image: "/image/Web+AI.png",
    accent: "from-rose-500/40 via-fuchsia-500/30 to-indigo-500/20",
    icon: "sparkles",
    motif: "Grounded retrieval",
    category: "web"
  },
  {
    title: "OpenClaw Mobile — On-device AI SDK",
    description:
      "A mobile companion to OpenClaw that brings grounded, citation-backed AI to iOS and Android. On-device embeddings, streaming responses over your team's docs, and offline-safe retrieval — wrapped in a Swift and Kotlin SDK that product teams can drop in without a backend of their own.",
    tags: [
      "Swift",
      "Kotlin",
      "SwiftUI",
      "Jetpack Compose",
      "Core ML",
      "Streaming",
      "On-device RAG"
    ],
    role: "",
    year: "2024 — 2025",
    live: "#",
    repo: "#",
    highlight: true,
    flagship: true,
    image: "/image/Mobile+AI.png",
    accent: "from-sky-500/40 via-indigo-500/30 to-emerald-500/20",
    icon: "sparkles",
    motif: "On-device retrieval",
    category: "mobile"
  },
  {
    title: "Muselink — Modern iOS App",
    description:
      "A mobile app that helps artists connect, collaborate, and organize projects in one place. Built with a focus on smooth user experience and seamless communication between users.",
    tags: ["iOS Development", "Swift / SwiftUi", "XCode", "Supabase"],
    role: "iOS engineer",
    year: "2024",
    image: "/image/12.png",
    accent: "from-rose-500/30 via-fuchsia-500/20 to-transparent",
    icon: "users-round",
    motif: "Music industry collab",
    category: "mobile"
  },
  {
    title: "Web Design Project",
    description:
      "Designed a modern marketing website for a restaurant to showcase its menu, brand, and customer experience. Focused on creating a clean, visually appealing, and easy-to-navigate interface to attract new customers and drive more reservations and orders.",
    tags: ["Figma Design", "High-quality"],
    role: "Design & frontend",
    year: "2023",
    image: "/image/1.jpg",
    accent: "from-amber-500/30 via-orange-500/20 to-transparent",
    icon: "sparkles",
    motif: "Startup marketing site",
    category: "web"
  },
  {
    title: "User-Friendly iOS App",
    description:
      "A user-friendly iOS application built with Swift and SwiftUI — focused on fluid interactions and a clean mental model.",
    tags: ["iOS Development", "Swift / SwiftUi", "XCode", "Firebase"],
    role: "iOS engineer",
    year: "2023",
    image: "/image/2.png",
    accent: "from-cyan-500/30 via-blue-500/20 to-transparent",
    icon: "sparkles",
    motif: "SwiftUI polish",
    category: "mobile"
  },
  {
    title: "MERN Stack Project",
    description:
      "A full-stack web application built on the MERN stack — MongoDB, Express.js, React.js, and Node.js.",
    tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
    role: "Full-stack engineer",
    year: "2023",
    image: "/image/3.jpg",
    accent: "from-emerald-500/30 via-green-500/20 to-transparent",
    icon: "sparkles",
    motif: "MERN end-to-end",
    category: "web"
  },
  {
    title: "Restaurant Directory — Android",
    description:
      "A restaurant directory listing app that lets users search restaurants by location and filters. Shipped on both iOS and Android.",
    tags: ["Android Development", "Kotlin", "Firebase"],
    role: "Mobile engineer",
    year: "2022",
    image: "/image/4.png",
    accent: "from-orange-500/30 via-red-500/20 to-transparent",
    icon: "map-pin",
    motif: "Location-based search",
    category: "mobile"
  },
  {
    title: "Web Site Design",
    description:
      "A collection of client website designs — translated from Figma into clean HTML, CSS, and JavaScript.",
    tags: ["Figma Design", "Html", "Css", "JavaScript"],
    role: "Designer & frontend",
    year: "2022",
    image: "/image/5.jpg",
    accent: "from-fuchsia-500/30 via-pink-500/20 to-transparent",
    icon: "sparkles",
    motif: "Client design work",
    category: "web"
  },
  {
    title: "Food Delivery — Android",
    description:
      "A food ordering app with a wide menu, favorite-store ordering, instant delivery, and in-app payments.",
    tags: ["Android Studio", "Kotlin", "Supabase"],
    role: "Android engineer",
    year: "2022",
    image: "/image/7.jpg",
    accent: "from-orange-500/30 via-amber-500/20 to-transparent",
    icon: "shopping-bag",
    motif: "Order & delivery",
    category: "mobile"
  },
  {
    title: "Laundry On-Demand — React Native",
    description:
      "A complete on-demand laundry platform that lets users schedule pickups, track deliveries in real time, and manage orders seamlessly. Designed to simplify operations and improve the customer experience from booking through delivery.",
    tags: ["React Native", "Firebase"],
    role: "Mobile engineer",
    year: "2022",
    image: "/image/8.png",
    accent: "from-indigo-500/30 via-violet-500/20 to-transparent",
    icon: "shopping-bag",
    motif: "On-demand services",
    category: "mobile"
  },
  {
    title: "Smart Web Site Design",
    description:
      "A modern, responsive website designed in Figma with a focus on clean aesthetics and user-friendly navigation.",
    tags: ["Figma Design", "Bootstrap", "JavaScript"],
    role: "Designer & frontend",
    year: "2022",
    image: "/image/9.jpg",
    accent: "from-violet-500/30 via-purple-500/20 to-transparent",
    icon: "sparkles",
    motif: "Responsive UI",
    category: "web"
  },
  {
    title: "DVSS — Vehicle Sharing iOS",
    description:
      "Share, rent, buy, or sell vehicles effortlessly in a user-friendly app — no credit checks, no hidden fees. A disruptive take on traditional vehicle transactions with affordable rentals.",
    tags: ["iOS Development", "Swift / SwiftUI", "XCode", "Supabase"],
    role: "iOS engineer",
    year: "2023",
    image: "/image/10.png",
    accent: "from-sky-500/30 via-cyan-500/20 to-transparent",
    icon: "map-pin",
    motif: "Vehicle marketplace",
    category: "mobile"
  },
  {
    title: "MERN Stack Application",
    description:
      "A full-stack web application with a modern, scalable architecture, supporting dynamic data, user interactions, and real-time updates. Designed for performance, reliability, and easy future expansion.",
    tags: ["Node.js", "React.js", "Express", "MongoDB"],
    role: "Full-stack engineer",
    year: "2023",
    image: "/image/11.png",
    accent: "from-teal-500/30 via-emerald-500/20 to-transparent",
    icon: "sparkles",
    motif: "MERN full-stack",
    category: "web"
  },
  // {
  //   title: "Lumen — Journaling App",
  //   description:
  //     "An offline-first iOS & Android journaling app with mood analytics, Siri shortcuts, and end-to-end encrypted sync. Designed and shipped solo.",
  //   tags: ["SwiftUI", "Jetpack Compose", "Supabase", "E2EE"],
  //   role: "Designer & sole engineer",
  //   year: "2024 — 2025",
  //   live: "#",
  //   repo: "#",
  //   highlight: true,
  //   image: "https://picsum.photos/seed/lumen-journal/1400/900",
  //   accent: "from-rose-500/30 via-fuchsia-500/20 to-transparent",
  //   icon: "book-heart",
  //   motif: "Mood-linked pages",
  //   category: "mobile"
  // },
  // {
  //   title: "Harbor — Team Collaboration",
  //   description:
  //     "A realtime multiplayer workspace for distributed teams. Led the frontend architecture, CRDT merges, and presence system on Next.js + Supabase Realtime.",
  //   tags: ["Next.js", "TypeScript", "Supabase", "CRDT"],
  //   role: "Lead frontend engineer",
  //   year: "2024 — 2025",
  //   live: "#",
  //   highlight: true,
  //   image: "https://picsum.photos/seed/harbor-collab/1400/900",
  //   accent: "from-sky-500/30 via-indigo-500/20 to-transparent",
  //   icon: "users-round",
  //   motif: "Realtime presence",
  //   category: "web"
  // },
  // {
  //   title: "Ember — AI Product Discovery",
  //   description:
  //     "Retrieval-augmented product search for Next.js storefronts. Embeddings and cross-encoder reranking over pgvector, with streaming LLM explanations for why each result fits the shopper's query.",
  //   tags: ["Next.js", "pgvector", "OpenAI", "Reranking"],
  //   role: "Full-stack engineer",
  //   year: "2025",
  //   live: "#",
  //   image: "https://picsum.photos/seed/ember-commerce/1200/900",
  //   accent: "from-amber-500/30 via-orange-500/20 to-transparent",
  //   icon: "sparkles",
  //   motif: "RAG over catalog",
  //   category: "web"
  // },
  // {
  //   title: "Aurora — AI Chat Assistant",
  //   description:
  //     "A customer-support chat product for SaaS teams. Grounded, citation-backed answers over a team's docs and tickets, with streaming, tool-use, and hand-off to humans when confidence drops.",
  //   tags: ["Next.js", "OpenAI", "Anthropic", "pgvector"],
  //   role: "Creator & lead engineer",
  //   year: "2025",
  //   live: "#",
  //   repo: "#",
  //   image: "https://picsum.photos/seed/aurora-chat/1200/900",
  //   accent: "from-emerald-500/30 via-teal-500/20 to-transparent",
  //   icon: "message-square",
  //   motif: "Grounded support chat",
  //   category: "web"
  // },
  // {
  //   title: "Sable Health",
  //   description:
  //     "HIPAA-aligned patient intake platform for a telehealth network. Built the provider dashboard and the SwiftUI patient app.",
  //   tags: ["SwiftUI", "Next.js", "Firebase", "HIPAA"],
  //   role: "Senior engineer",
  //   year: "2023",
  //   image: "https://picsum.photos/seed/sable-health/1200/900",
  //   accent: "from-violet-500/30 via-purple-500/20 to-transparent",
  //   icon: "heart-pulse",
  //   motif: "HIPAA-aligned intake",
  //   category: "mobile"
  // },
  // {
  //   title: "Pocket Atlas",
  //   description:
  //     "A SwiftUI & Jetpack Compose travel companion with offline maps, itinerary sharing, and a Node + Postgres backend.",
  //   tags: ["SwiftUI", "Kotlin", "Node", "PostgreSQL"],
  //   role: "Mobile lead",
  //   year: "2022",
  //   image: "https://picsum.photos/seed/pocket-atlas/1200/900",
  //   accent: "from-cyan-500/30 via-blue-500/20 to-transparent",
  //   icon: "map-pin",
  //   motif: "Offline-first travel",
  //   category: "mobile"
  // },
  // {
  //   title: "Lexica — Legal RAG",
  //   description:
  //     "Retrieval-augmented assistant for contract review. Clause-level chunking, structured outputs for redlines, and citation trails back to the source PDF — built for in-house legal teams who can't guess.",
  //   tags: ["Next.js", "pgvector", "Claude", "Structured outputs"],
  //   role: "Consulting engineer",
  //   year: "2025",
  //   live: "#",
  //   image: "https://picsum.photos/seed/lexica-legal/1200/900",
  //   accent: "from-indigo-500/30 via-violet-500/20 to-transparent",
  //   icon: "sparkles",
  //   motif: "Clause-grounded review",
  //   category: "web"
  // },
  // {
  //   title: "Mesa — Meeting Intelligence",
  //   description:
  //     "Auto-summarized standups and async video notes for distributed teams. Whisper transcription, LLM summaries, and action-item extraction piped straight into Linear and Notion.",
  //   tags: ["Next.js", "Whisper", "OpenAI", "Webhooks"],
  //   role: "Technical co-founder",
  //   year: "2024",
  //   live: "#",
  //   repo: "#",
  //   image: "https://picsum.photos/seed/mesa-meetings/1200/900",
  //   accent: "from-sky-500/30 via-cyan-500/20 to-transparent",
  //   icon: "message-square",
  //   motif: "Summaries that ship",
  //   category: "web"
  // },
  // {
  //   title: "Relay — PR Review Bot",
  //   description:
  //     "A GitHub App that reviews pull requests like a thoughtful senior: pulls in linked issues, design docs, and test coverage, and leaves focused inline comments instead of noise.",
  //   tags: ["Node", "Claude", "GitHub App", "Tool use"],
  //   role: "Creator & maintainer",
  //   year: "2024",
  //   repo: "#",
  //   image: "https://picsum.photos/seed/relay-bot/1200/900",
  //   accent: "from-emerald-500/30 via-green-500/20 to-transparent",
  //   icon: "message-square",
  //   motif: "Context-aware reviews",
  //   category: "web"
  // },
  // {
  //   title: "Trove — Multimodal Search",
  //   description:
  //     "Image-and-text search for creative teams. CLIP embeddings over a design studio's asset library, with re-ranking and palette-aware filtering for mood-board workflows.",
  //   tags: ["Next.js", "CLIP", "pgvector", "Python"],
  //   role: "Full-stack engineer",
  //   year: "2024",
  //   live: "#",
  //   image: "https://picsum.photos/seed/trove-search/1200/900",
  //   accent: "from-fuchsia-500/30 via-pink-500/20 to-transparent",
  //   icon: "sparkles",
  //   motif: "Images by feel",
  //   category: "web"
  // },
  // {
  //   title: "Gist — Browser Assistant",
  //   description:
  //     "A Chrome extension that answers questions about the current tab. Streaming answers over the page's own DOM, with source highlighting — no data leaves the user's browser without consent.",
  //   tags: ["TypeScript", "Chrome API", "Anthropic", "Streaming"],
  //   role: "Solo engineer",
  //   year: "2024",
  //   live: "#",
  //   repo: "#",
  //   image: "https://picsum.photos/seed/gist-browser/1200/900",
  //   accent: "from-zinc-500/30 via-slate-500/20 to-transparent",
  //   icon: "sparkles",
  //   motif: "Any tab, answered",
  //   category: "web"
  // },
  // {
  //   title: "Pulse — Realtime Observability",
  //   description:
  //     "A tracing dashboard for Next.js apps with server-timing waterfalls, edge-region breakdowns, and slow-query detection. ClickHouse under the hood, React Server Components on top.",
  //   tags: ["Next.js", "ClickHouse", "OpenTelemetry", "RSC"],
  //   role: "Lead engineer",
  //   year: "2023",
  //   live: "#",
  //   image: "https://picsum.photos/seed/pulse-obs/1200/900",
  //   accent: "from-orange-500/30 via-red-500/20 to-transparent",
  //   icon: "line-chart",
  //   motif: "Edge-aware traces",
  //   category: "web"
  // },  
];

export const experience: ExperienceItem[] = [
  {
    company: "",
    role: "Senior Software Engineer",
    period: "2022 — 2025",
    summary:
      "Partnered with startups and design teams to plan, build, and launch web and mobile applications from idea to production.Focused on delivering scalable, high-quality products that are fast, reliable, and ready for real users.",
    stack: ["Next.js", "SwiftUI", "Jetpack Compose", "Supabase", "PostgreSQL"]
  },
  {
    company: "",
    role: "Lead Frontend Engineer",
    period: "2020 — 2022",
    summary:
      "Led front-end development, building reusable UI systems to keep products consistent and easy to scale. Developed real-time features (such as live updates and user activity) and improved performance to ensure fast, smooth user experiences.",
    stack: ["Next.js", "TypeScript", "tRPC", "Postgres"]
  },
  {
    company: "",
    role: "Full-Stack Engineer",
    period: "2018 — 2020",
    summary:
      "Built and launched 12+ web and mobile applications for clients, handling both front-end and back-end development.",
    stack: ["React", "React Native", "Node", "MongoDB"]
  }
];

export const nav = [
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];
