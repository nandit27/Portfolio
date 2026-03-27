import quicklearnImg from "./assets/images/quicklearnImg.png";
import autoformgeneratorImg from "./assets/images/autoform.png";
import nudgeImg from "./assets/images/nudge.png";
import enpeesImg from "./assets/images/enpees.png";
export const siteConfig = {
  name: "Nandit Kalaria",
  title: "Nandit Kalaria - Frontend Developer & AI Engineer",
  description: "Frontend developer and AI Engineer based in Gandhinagar, India. Specializing in MERN Stack and designing systems that work at scale.",
  url: "https://nanditkalaria.vercel.app",
  email: "nanditkalaria27@gmail.com",
  social: {
    github: "https://github.com/nandit27",
    linkedin: "https://www.linkedin.com/in/nandit-kalaria-06281631a/",
    twitter: "https://x.com/nanditkalaria27",
  },
};

export const projects = [
  {
  slug: "quicklearn-ai",
  name: "QuickLearnAI - AI-Powered Learning Platform",
  shortName: "QuickLearnAI",
  tagline: "Learn faster with AI-generated quizzes, document chat, and real-time mentorship",
  description: "A full-stack AI learning platform that helps students and teachers generate quizzes, create question papers, chat with documents, and resolve doubts in real time through an integrated React + Node + Flask architecture.",
  type: "UI/UX Design • Full-Stack App Development • Applied GenAI",
  year: "2025-2026",
  tools: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Flask",
    "MongoDB",
    "Redis",
    "Socket.IO",
    "Groq",
    "Razorpay"
  ],
  image: quicklearnImg,
  link: "https://quicklearn.ai.in",
  sourceUrl: null,
  featured: true,
  status: "Production-Ready Web Platform",
  role: "Full-Stack AI Product Developer",
  team: "Multi-role collaborative team",
  platform: "Web (Desktop + Mobile Responsive)",
  tldr: {
    what: "An AI-first learning ecosystem for quiz generation, doubt resolution, document Q&A, and teacher workflows",
    who: "Students, teachers, and admins managing modern digital learning",
    challenge: "Combining low-latency AI features with real-time interaction and reliable full-stack operations",
    outcome: "A deployed multi-service platform with interactive learning flows and role-based dashboards",
    whyItMatters: "It turns passive studying into active, feedback-driven learning with personalized AI support"
  },
  problem: {
    intro: "Most online learning tools are fragmented and passive, making sustained, effective learning difficult.",
    points: [
      "Students jump across multiple tools for notes, quizzes, and doubt resolution",
      "Teachers spend too much time creating assessments manually",
      "Static content lacks instant feedback and adaptation",
      "Real-time support and progress visibility are often missing"
    ],
    coreInsight: "The core issue isn't only access to content, it's the absence of an integrated feedback and practice loop connecting AI generation, assessment, and human help."
  },
  nonGoals: [
    "Replace teachers with autonomous AI tutors",
    "Depend exclusively on a single LLM provider",
    "Optimize for offline-first learning experiences",
    "Serve as a full LMS replacement for enterprise institutions"
  ],
  systemOverview: {
    intro: "At a high level, QuickLearnAI operates as a multi-service learning loop:",
    steps: [
      { title: "Frontend Experience", description: "React app delivers student, teacher, and admin workflows" },
      { title: "Node API Gateway", description: "Handles auth, business logic, chat, maintenance mode, and orchestration" },
      { title: "Flask AI Engine", description: "Runs quiz generation, transcript/document pipelines, and recommendation logic" },
      { title: "Real-Time Layer", description: "Socket.IO powers live interactions like chat and collaborative sessions" },
      { title: "Data Layer", description: "MongoDB + Redis manage persistence, caching, and session/performance needs" }
    ],
    note: "AI endpoints are modular and model-agnostic, enabling evolution across providers and task-specific flows."
  },
  technicalDecisions: [
    {
      title: "Split Backend (Node for Product APIs, Flask for AI Workloads)",
      points: [
        "Node excels at auth, routing, middleware, and realtime integrations",
        "Flask keeps AI and document-processing concerns isolated",
        "Decoupling reduced complexity of deployment and iteration"
      ],
      outcome: "Cleaner service boundaries, easier scaling, and faster feature delivery"
    },
    {
      title: "Proxy + Direct AI Access Pattern",
      points: [
        "Node proxies protected AI routes with user context",
        "Frontend can use configured AI proxy paths for specific features",
        "Supports flexibility without tightly coupling client to backend internals"
      ],
      outcome: "Balanced security, performance, and developer velocity"
    },
    {
      title: "Role-Based Product Architecture",
      points: [
        "Distinct student, teacher, and admin journeys",
        "Protected routes and token-based authorization",
        "Admin controls include platform-level maintenance toggling"
      ],
      outcome: "Safer operations and better UX for each user persona"
    }
  ],
  techStack: [
    { label: "Frontend", value: "React 18 + Vite + Tailwind CSS + Framer Motion" },
    { label: "Backend API", value: "Node.js + Express + Mongoose + JWT + Socket.IO" },
    { label: "AI Backend", value: "Flask + Uvicorn + LangChain + LLM integrations" },
    { label: "Data", value: "MongoDB + Redis" },
    { label: "Payments & Auth", value: "Razorpay + Google OAuth + JWT-based flows" }
  ],
  challenges: [
    {
      title: "Coordinating Multi-Service AI Requests",
      problem: "Request paths crossed frontend, Node APIs, and Flask AI services, increasing failure points.",
      fix: "Introduced clear route boundaries, proxy patterns, and environment-based endpoint configuration"
    },
    {
      title: "Real-Time + AI Latency Management",
      problem: "Combining chat/realtime events with heavy AI generation can degrade perceived responsiveness.",
      fix: "Separated concerns via Socket.IO channels, async AI endpoints, and scoped request payloads"
    },
    {
      title: "Operational Reliability During Updates",
      problem: "Platform updates risked breaking user experience in production.",
      fix: "Implemented centralized maintenance mode checks and admin-controlled maintenance toggling"
    }
  ],
  observations: [
    "AI-assisted quiz and paper generation significantly reduced manual effort",
    "Role-specific dashboards improved task clarity for students, teachers, and admins",
    "Real-time doubt and chat interactions increased engagement and continuity",
    "Hybrid Node + Flask architecture improved maintainability versus monolithic design"
  ],
  ethics: [
    "Role-based access control helps protect sensitive user actions",
    "Token-authenticated APIs reduce unauthorized data access risk",
    "Maintenance-mode controls prevent inconsistent behavior during critical updates",
    "Design emphasis on accessible, responsive UI improves inclusivity across devices"
  ],
  learnings: [
    "Strong system boundaries are crucial when shipping GenAI features in production",
    "User trust depends as much on operational stability as on model quality",
    "Real-time features require careful balancing of network, compute, and UX feedback",
    "Admin tooling is not optional for AI products that evolve quickly",
    "The best learning experiences combine generation, assessment, and human support loops"
  ],
  futureWork: [
    "Adaptive quiz difficulty based on user performance history",
    "Deeper analytics for concept-level mastery and retention",
    "More granular model routing by task (summarization, Q&A, generation)",
    "Teacher collaboration workflows and shared content libraries",
    "Improved cost/performance optimization for high-traffic AI endpoints"
  ],
  whatYouCanLearn: [
    "How to architect a React + Node + Flask AI product end-to-end",
    "How to design role-based educational workflows with real-time features",
    "How to orchestrate LLM-powered content generation safely in production",
    "How to combine MongoDB/Redis with API and socket layers effectively",
    "How to build maintainable AI learning systems with operational controls"
  ],
  finalNote: "QuickLearnAI demonstrates how applied AI becomes truly useful when paired with strong product architecture, real-time collaboration, and education-first UX design."
},
{
  "slug": "nudge",
  "name": "Nudge - One-Click Development Environment Launcher",
  "shortName": "Nudge",
  "tagline": "Launch your full dev workflow in one click",
  "description": "A desktop productivity app that helps developers launch complete project workspaces instantly by opening folders in VS Code, starting URLs in browser profiles, and launching required apps from a single saved project configuration.",
  "type": "UI/UX Design • Desktop App Development • Developer Productivity Tooling",
  "year": "2025",
  "tools": [
    "React",
    "Tailwind CSS",
    "Electron",
    "Node.js",
    "Electron Builder",
    "Lucide React"
  ],
  "image": nudgeImg,
  "link": "https://youtu.be/DN0a4ZsuN5I",
  "sourceUrl": "https://github.com/nandit27/Nudge",
  "featured": true,
  "status": "Production-Ready Desktop App (macOS-first)",
  "role": "Product Designer + Full-Stack Desktop Developer",
  "team": "Solo / Small collaborative build",
  "platform": "Desktop (Electron, macOS optimized)",
  "tldr": {
    "what": "A desktop launcher for project-specific dev setups including folders, URLs, and apps",
    "who": "Developers, students, and technical teams managing multiple local projects",
    "challenge": "Reducing repetitive startup steps while handling multi-app orchestration reliably",
    "outcome": "A clean one-click workflow launcher with project templates and persistent local configs",
    "whyItMatters": "It saves daily context-switching time and improves consistency in development routines"
  },
  "problem": {
    "intro": "Developers repeatedly perform the same setup steps every time they start work, which slows focus and increases friction.",
    "points": [
      "Opening the same folders and tools manually wastes time every session",
      "Launching multiple local URLs and apps requires repetitive context switching",
      "Different projects need different startup combinations with no simple central launcher",
      "Lack of a saved, role-specific startup routine causes inconsistency across workflows"
    ],
    "coreInsight": "The real issue is not just launch speed, but reducing cognitive overhead by converting repeated setup rituals into one predictable, project-aware action."
  },
  "nonGoals": [
    "Replacing full IDEs or becoming a code editor itself",
    "Managing cloud deployment pipelines directly",
    "Acting as a full project management or ticketing system",
    "Supporting every OS-specific launcher workflow in the first release"
  ],
  "systemOverview": {
    "intro": "At a high level, Nudge runs as a desktop orchestration loop:",
    "steps": [
      {
        "title": "Frontend Experience",
        "description": "React UI lets users create, edit, and launch project profiles with folders, URLs, apps, and browser profile options"
      },
      {
        "title": "Electron Main Process",
        "description": "Handles native OS actions, process spawning, app/file dialogs, and secure IPC route handling"
      },
      {
        "title": "IPC Bridge",
        "description": "Preload APIs expose safe commands (get/save/delete/launch/select) from Electron to the renderer"
      },
      {
        "title": "Launch Orchestrator",
        "description": "Opens VS Code folders, launches browser URLs, and starts additional apps while avoiding duplicate launch responsibilities"
      },
      {
        "title": "Persistence Layer",
        "description": "Project configurations are stored locally in userData as JSON for quick restore and update"
      }
    ],
    "note": "The architecture separates UI from native execution logic, improving safety and maintainability while keeping launch operations fast."
  },
  "technicalDecisions": [
    {
      "title": "Electron + React Split (Native Control + Modern UI)",
      "points": [
        "Electron handles OS-level app/folder launch operations",
        "React provides fast, component-driven dashboard interactions",
        "Clear renderer/main separation keeps code easier to evolve"
      ],
      "outcome": "A responsive desktop UX with reliable native capabilities"
    },
    {
      "title": "Detached Spawn Strategy for Launches",
      "points": [
        "Detached process spawning ensures launched tools outlive the app lifecycle",
        "PATH augmentation improves CLI discovery reliability (e.g., VS Code CLI)",
        "Launch errors are logged without crashing the main process"
      ],
      "outcome": "Stable launch orchestration with minimal runtime disruption"
    },
    {
      "title": "Project-Centric Configuration Model",
      "points": [
        "Each project bundles folders, URLs, and apps into one launchable config",
        "Local JSON persistence keeps setup lightweight and offline-friendly",
        "Edit/delete/update flows support rapid iteration of startup routines"
      ],
      "outcome": "Low-friction daily usage and predictable startup behavior"
    }
  ],
  "techStack": [
    {
      "label": "Frontend",
      "value": "React 18 + Vite + Tailwind CSS + Lucide React"
    },
    {
      "label": "Desktop Runtime",
      "value": "Electron (Main + Preload + Secure IPC)"
    },
    {
      "label": "Process & OS Integration",
      "value": "Node.js child_process + shell + dialog APIs"
    },
    {
      "label": "Persistence",
      "value": "Local JSON file in Electron userData"
    },
    {
      "label": "Packaging",
      "value": "Electron Builder (macOS target + DMG setup)"
    }
  ],
  "challenges": [
    {
      "title": "Reliable App/CLI Launch Across Local Environments",
      "problem": "CLI tools like VS Code may not always be available in Electron process PATH.",
      "fix": "Added PATH augmentation plus fallback opening strategy using macOS app launcher commands."
    },
    {
      "title": "Coordinating Mixed Launch Targets",
      "problem": "Folders, URLs, and custom apps require different launch mechanisms and ordering.",
      "fix": "Implemented a structured launch pipeline with target validation and type-specific handlers."
    },
    {
      "title": "Keeping Renderer Secure While Enabling Native Actions",
      "problem": "Direct Node access from UI introduces security and maintainability risks.",
      "fix": "Used context isolation with preload-based IPC methods to expose only required operations."
    }
  ],
  "observations": [
    "One-click startup significantly reduces repetitive setup effort in daily development",
    "Project profiles improve consistency when switching between multiple codebases",
    "Combined folder + URL + app launch flows feel more practical than single-target launchers",
    "Desktop-native control with a modern UI creates a strong productivity experience"
  ],
  "ethics": [
    "User data remains local by default, minimizing unnecessary data exposure",
    "Scoped IPC methods reduce risk of unsafe renderer-level system access",
    "Transparent launch behavior helps users control what opens and when",
    "Accessibility-focused UI decisions improve usability for varied workflows"
  ],
  "learnings": [
    "Developer tools create value by removing small repetitive frictions at scale",
    "Native process orchestration needs strong fallback paths to remain reliable",
    "Simple local persistence can outperform heavier architectures for utility apps",
    "Security boundaries (preload + context isolation) are critical in Electron products",
    "Great productivity UX depends on both speed and predictability"
  ],
  "futureWork": [
    "Cross-platform launch profiles for Windows and Linux",
    "Auto-run scripts per project (e.g., npm start, docker compose up)",
    "Team-sharable project templates and import/export presets",
    "Smart startup sequencing with health checks for local services",
    "Global hotkey and menu bar quick-launch mode"
  ],
  "whatYouCanLearn": [
    "How to build a polished Electron + React desktop utility end-to-end",
    "How to orchestrate native process launches safely from a frontend-driven UX",
    "How to design project-centric developer productivity workflows",
    "How to package and distribute macOS desktop apps with Electron Builder",
    "How to balance simplicity, reliability, and extensibility in tooling products"
  ],
  "finalNote": "Nudge shows how focused desktop tooling can meaningfully improve developer flow by turning repetitive startup routines into a single, reliable action."
},
{
  "slug": "enpees-candles",
  "name": "Enpees Candles - Custom E-Commerce Platform",
  "shortName": "Enpees Candles",
  "tagline": "Artisanal candle shop and custom order management system",
  "description": "A bespoke full-stack e-commerce web application built for a freelance client. It provides a highly responsive storefront for artisanal candles, complete with secure authentication, custom shopping experiences, and a robust backend for order tracking and inventory management.",
  "type": "Full-Stack Web Development • E-Commerce • Freelance Project",
  "year": "2025",
  "tools": [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
  "image": enpeesImg,
  "link": "https://enpeescandles.com",
  "sourceUrl": "https://github.com/nandit27/Enpees-Candles",
  "featured": true,
  "status": "Production-Ready Web App (Freelance Delivery)",
  "role": "Freelance Full-Stack Developer",
  "team": "Solo Freelancer",
  "platform": "Web (Responsive Desktop & Mobile)",
  "tldr": {
    "what": "A custom MERN-stack e-commerce platform built specifically for an artisanal candle business",
    "who": "Candle enthusiasts (customers) and the business owner (admin)",
    "challenge": "Delivering a tailored shopping and order-tracking experience that off-the-shelf platforms couldn't easily accommodate without high ongoing subscription fees",
    "outcome": "A high-performance React frontend paired with a reliable Node/Express backend, empowering the business owner with a fully owned digital storefront",
    "whyItMatters": "It establishes a professional digital presence for the client's freelance business while remaining scalable and subscription-free."
  },
  "problem": {
    "intro": "The freelance client needed a bespoke online storefront to showcase and sell their artisanal candles, as generic e-commerce platforms felt too rigid and expensive for their specific workflow.",
    "points": [
      "Off-the-shelf platform subscriptions eat into the profit margins of small craft businesses",
      "The client required specific, branded flows for product inquiries and custom order tracking",
      "Managing customer communication and order timelines securely was heavily manual and disjointed",
      "Shoppers dropping off due to slow image loading on media-heavy storefronts"
    ],
    "coreInsight": "Building a custom lightweight MERN stack application provides the exact flexibility needed for a specialized craft business, giving the client full ownership of the user journey and data."
  },
  "nonGoals": [
    "Building a massive multi-vendor marketplace",
    "Replacing fully-fledged ERP systems for massive warehouses",
    "Native mobile app development (the focus remained strictly on a highly responsive web experience)",
    "Complex AI-driven product recommendation engines for the V1 release"
  ],
  "systemOverview": {
    "intro": "The platform operates as a decoupled full-stack architecture designed for scalability and ease of hand-off to the freelance client:",
    "steps": [
      {
        "title": "React/Vite Frontend",
        "description": "A fast SPA utilizing Tailwind CSS for styling, featuring optimized LazyImage components to handle high-resolution product photography gracefully."
      },
      {
        "title": "Express Backend API",
        "description": "A RESTful Node.js server handling secure routes for products, categories, orders, user inquiries, and authentication."
      },
      {
        "title": "MongoDB Database",
        "description": "Mongoose-driven data models (User, Order, Product, Category, Inquiry) ensuring structured, reliable data storage."
      },
      {
        "title": "Authentication & Security",
        "description": "Custom JWT-based middleware protecting user order histories and securing admin-level API routes."
      },
      {
        "title": "Notification Layer",
        "description": "Integrated mail services to automate order confirmations and timeline updates for customers."
      }
    ],
    "note": "This clear separation of concerns ensures the project remains maintainable and easily hostable on modern cloud providers (like Vercel and traditional VPS setups)."
  },
  "technicalDecisions": [
    {
      "title": "MERN Stack for Freelance Agility",
      "points": [
        "React + Vite ensures a snappy, modern user experience",
        "Express + MongoDB allows rapid iteration on data models like Orders and Products",
        "JavaScript across the entire stack streamlines development speed for a solo freelancer"
      ],
      "outcome": "A cohesive, high-performing web app delivered efficiently within freelance budget and timeline constraints."
    },
    {
      "title": "Custom Image Optimization (LazyImage Component)",
      "points": [
        "E-commerce relies heavily on high-quality visuals",
        "React-based lazy loading components prevent UI blocking",
        "Improves core web vitals and mobile browsing experience"
      ],
      "outcome": "Fast initial page loads even on storefront pages with dozens of product images."
    },
    {
      "title": "Custom Order Timeline Tracking",
      "points": [
        "Customers needed to know exactly when bespoke items were being crafted vs shipped",
        "Created a visual 'OrderTimeline' component attached to backend order status updates",
        "Reduces manual customer service emails for the business owner"
      ],
      "outcome": "Increased transparency and higher post-purchase customer satisfaction."
    }
  ],
  "techStack": [
    {
      "label": "Frontend",
      "value": "React 18 + Vite + Tailwind CSS"
    },
    {
      "label": "Backend Framework",
      "value": "Node.js + Express.js"
    },
    {
      "label": "Database",
      "value": "MongoDB with Mongoose ORM"
    },
    {
      "label": "Authentication & Security",
      "value": "Custom JWT Auth Middleware"
    },
    {
      "label": "Infrastructure & Hosting",
      "value": "Vercel (Frontend config present) / Node Environment"
    }
  ],
  "challenges": [
    {
      "title": "Handling High-Quality Media Efficiently",
      "problem": "Initially, loading many high-res candle images caused the shop page to stutter.",
      "fix": "Implemented custom a LazyImage component and an image migration script to serve optimized webp assets."
    },
    {
      "title": "Securing Private User Data",
      "problem": "Ensuring users can only see their own order history and profiles in a custom-built solution.",
      "fix": "Built robust ProtectedRoute wrappers on the frontend and strict JWT-verification middleware on backend routes."
    },
    {
      "title": "Delivering a Manageable Solution for a Non-Technical Client",
      "problem": "As a freelance project, handing over a complex codebase to a non-technical owner requires significant forethought.",
      "fix": "Kept the architecture standardized and created straightforward APIs and modular React components for easier future maintenance."
    }
  ],
  "observations": [
    "Building bespoke e-commerce solutions offers massive UX advantages over locked-in CMS platforms if scope is managed correctly",
    "Focusing on the 'post-purchase' experience (like custom Track Order pages) creates significant value for small business owners",
    "Vite and Tailwind make a remarkably fast feedback loop for designing storefronts",
    "Handling custom mail services is crucial for maintaining a professional image for freelance business clients"
  ],
  "ethics": [
    "User authentication utilizes secure best practices to protect customer PII (Personally Identifiable Information)",
    "Clear separation of user and admin roles to prevent privilege escalation",
    "Minimal data collection—only storing what is strictly necessary for fulfilling candle orders"
  ],
  "learnings": [
    "Communicating technical trade-offs to freelance clients is just as important as the code itself",
    "Mongoose schemas shine when building heavily relational e-commerce features (Users -> Orders -> Products)",
    "Custom UI components (like Order Timeline) are where custom builds easily outshine generic platforms",
    "Image optimization is non-negotiable for retail web applications",
    "Structuring a project cleanly (client/server folders) is vital for smooth deployment pipelines"
  ],
  "futureWork": [
    "Integrating a fully headless CMS for the client to update homepage content without code",
    "Adding support for multiple payment gateways (Stripe/PayPal integrations)",
    "Implementing server-side rendering (SSR) or static site generation (Next.js transition) for advanced SEO",
    "Automated inventory alert system via email",
    "Expanding the categories system to support nested product variants (e.g., sizes, wick types)"
  ],
  "whatYouCanLearn": [
    "How to structure and deliver a full MERN stack application for a real-world freelance client",
    "How to manage e-commerce state, from browsing shops to tracking orders",
    "How to build specialized UI components like an Order Timeline and Lazy Loaded images",
    "How to securely implement JWT-based authentication for both shoppers and admins"
  ],
  "finalNote": "Enpees Candles is a testament to how tailored full-stack development can empower small businesses, freeing them from generic templates and costly platform subscriptions through high-quality freelance engineering."
},

{
  "slug": "autoformgenerator",
  "name": "AutoFormGenerator - AI-Powered Dynamic Form Builder",
  "shortName": "AutoFormGenerator",
  "tagline": "Generate production-ready forms from natural language with AI and Google Forms integration",
  "description": "A modern React + Vite application that converts plain-text prompts into structured forms, provides dynamic schema preview, smart validation flows, and integrates seamlessly with Google Forms and Google Sheets for real-world data collection.",
  "type": "UI/UX Design • Frontend App Development • Applied GenAI",
  "year": "2025",
  "tools": [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Zod",
    "TanStack Query",
    "Google Forms API",
    "Google OAuth",
    "Groq",
  ],
  "image": autoformgeneratorImg,
  "link": "https://youtu.be/yOcyl3rz8HI",
  "sourceUrl": "https://github.com/nandit27/AutoFormGenerator",
  "featured": true,
  "status": "Production-Oriented Web Application",
  "role": "Frontend & AI Integration Developer",
  "team": "Solo Development / Open Source",
  "platform": "Web (Desktop + Mobile Responsive)",
  "tldr": {
    "what": "An AI-assisted form creation platform that turns user prompts into structured, validated forms and export-ready workflows.",
    "who": "Founders, educators, and operators who need fast, custom data-collection forms without manual drag-and-drop fatigue.",
    "challenge": "Balancing flexible LLM-generated schemas with strict UI validation, user-friendly previews, and robust Google API integration.",
    "outcome": "A highly responsive, dynamic form-building product with guided AI generation, real-time preview, and seamless export capabilities.",
    "whyItMatters": "It removes the friction of manual form building, enforcing quality data collection and instant integration into existing Google Workflows."
  },
  "problem": {
    "intro": "Manual form creation is slow, repetitive, and error-prone when requirements change frequently or become complex.",
    "points": [
      "Users spend too much time creating forms field-by-field and configuring validation rules.",
      "Data quality drops when edge-case constraints or smart validations are skipped.",
      "Exporting generated structures to reliable, familiar tools like Google Forms often requires tedious duplicate effort.",
      "Traditional form builders lack intuitive, prompt-to-production workflows."
    ],
    "coreInsight": "The main bottleneck isn't just the UI building effort—it's efficiently translating user intent into correctly structured fields, type constraints, and integration-ready outputs without writing a line of code."
  },
  "nonGoals": [
    "Becoming a heavy, enterprise-grade rigid workflow replacement engine.",
    "Serving as a monolithic backend processing and database system.",
    "Locking the user into a single AI provider or proprietary walled garden.",
    "Exclusively targeting offline or localized form administration."
  ],
  "systemOverview": {
    "intro": "At a high level, AutoFormGenerator runs an AI-assisted frontend schema lifecycle:",
    "steps": [
      {
        "title": "Prompt-Driven Generation",
        "description": "Users describe desired form requirements via a guided React interface."
      },
      {
        "title": "AI Schema Pipeline",
        "description": "Provider-configurable LLM services (Groq/OpenAI) parse the intent into a typed JSON schema."
      },
      {
        "title": "Dynamic Validation Engine",
        "description": "Zod and React Hook Form dynamically render the schema into interactive, validated preview components."
      },
      {
        "title": "OAuth Integration Layer",
        "description": "Google APIs authenticate the user to map the validated schema straight securely into a live Google Form."
      },
      {
        "title": "Performance Tracking",
        "description": "Visual dashboards utilizing Recharts measure form performance and usage metrics."
      }
    ],
    "note": "The AI service layer abstraction means swapping models or upgrading to faster providers doesn't break the UI generation flow."
  },
  "technicalDecisions": [
    {
      "title": "Vite + React SPA Architecture for Speed",
      "points": [
        "Enabled blazing fast local iteration and lightweight production builds.",
        "Simplified the route-based page structure mapping the generation, preview, analytics, and settings views.",
        "A highly interactive canvas is best supported by React's robust declarative UI."
      ],
      "outcome": "Smooth UI responsiveness (60fps) and rapid ongoing developer velocity."
    },
    {
      "title": "Schema-First Form Representation",
      "points": [
        "All generated forms are strictly represented as standard JSON schemas prior to rendering.",
        "Complex validation requirements are dynamically executed using React Hook Form + Zod patterns.",
        "This decoupled UI from logic, enabling preview-first iteration."
      ],
      "outcome": "Drastically lowered structural error rates during LLM hallucination and guaranteed robust form data."
    },
    {
      "title": "Configurable AI Provider Adapter",
      "points": [
        "A unified LLM service layer handles multiple backends via `.env` injection.",
        "Keeps the prompt engineering and UI completely unaware of which model (Groq/OpenAI) is executing.",
        "Maximizes generation speed by leveraging faster APIs like Groq when available."
      ],
      "outcome": "Future-proofed the codebase, eliminated vendor lock-in, and lowered operational compute costs."
    }
  ],
  "techStack": [
    {
      "label": "Frontend Framework",
      "value": "React 18 + Vite + React Router DOM"
    },
    {
      "label": "Styling & Motion",
      "value": "Tailwind CSS + Shadcn/UI Patterns + Framer Motion"
    },
    {
      "label": "Dynamic Form Engine",
      "value": "React Hook Form + Zod Validation + React DnD"
    },
    {
      "label": "State & API Clients",
      "value": "TanStack React Query + Axios"
    },
    {
      "label": "Third-Party Integrations",
      "value": "Google Workspace APIs (OAuth, Forms, Sheets) + LLM APIs (Groq/OpenAI)"
    }
  ],
  "challenges": [
    {
      "title": "Translating Unstructured Text into Rigid Components",
      "problem": "LLMs can return inconsistent JSON or suggest non-existent HTML field types depending on the prompt.",
      "fix": "Enforced strict Zod schema validation on the AI response before handing the payload off to the UI renderer."
    },
    {
      "title": "Perceived Latency During Generation",
      "problem": "AI schema generation calls can block the primary flow, frustrating users expecting instant digital tools.",
      "fix": "Integrated Framer Motion loading states, sequenced progress toasts, and optimistic UI updates for perceived speed."
    },
    {
      "title": "Seamless Cross-Platform Publishing",
      "problem": "Mapping custom JSON form schemas directly into Google Forms' strict API syntax required complex data translation.",
      "fix": "Wrote a resilient Google Forms Validator/Mapper utility sequence handling OAuth flow handoffs securely."
    }
  ],
  "observations": [
    "Users drastically prefer editing a generated 80%-complete form over starting from a blank canvas.",
    "Strict type-checking on dynamic outputs is the only way to make generative AI viable for enterprise data tasks.",
    "Fast interface feedback using skeleton loaders retains user attention far better than standard spinners.",
    "Decoupling the AI logic allowed easy swaps to much cheaper/faster inference endpoints mid-project."
  ],
  "ethics": [
    "A schema-first approach naturally scrubs malformed or accidentally malicious input fields.",
    "Google OAuth ensures sensitive API tokens are never exposed or inappropriately cached in the UI.",
    "Clean abstraction allows administrators to enforce responsible AI usage policies strictly at the backend layer.",
    "A heavy focus on responsive CSS layout promotes mobile accessibility for diverse user bases."
  ],
  "learnings": [
    "Relying on AI output without strict structural validation (Zod) inevitably leads to UI crashes.",
    "The 'Preview-to-Publish' step is critical; users require explicit confidence control over automated deliverables.",
    "Model agnosticism is non-negotiable for future-proofing generative applications against API deprecations.",
    "Strong ecosystem pairing (like integrating immediately to Google Sheets) turns a 'cool demo' into a 'daily utility'.",
    "React Hook Form combined with dynamic recursive mapping is the most robust pattern for variable data."
  ],
  "futureWork": [
    "Design collaborative peer-editing sessions for tweaking generated forms before publishing.",
    "Ship domain-specific scaffolding templates to steer the AI (e.g., healthcare, education, tech).",
    "Add intelligent routing so simple prompts use cheap/fast models, and complex logic taps slower reasoning models.",
    "Introduce analytics to track individual field completion drop-off rates.",
    "Expand exporting capabilities specifically to standalone Next.js code or Notion forms."
  ],
  "whatYouCanLearn": [
    "How to architect dynamic, data-driven React components based entirely on recursive JSON.",
    "How to securely implement Google OAuth to manage Google Workspace resources client-side.",
    "How to defensively program against unpredictable LLM responses using Zod schemas.",
    "How to abstract third-party APIs behind a clean, scalable service layer.",
    "Proper setup for Vite, Framer Motion, and Tailwind to ship a polished, production-ready aesthetic."
  ],
  "finalNote": "AutoFormGenerator demonstrates that applied AI reaches its full potential only when constrained by rigorous software engineering guardrails—transforming an unreliable parlor trick into a dependable, daily-use productivity tool."
},



];

export const skills = {
  expertise: [
    "Full Stack Dev",
    "Web Design",
    "AI Integrations",
    "Debugging",
  ],
  tools: [
    "ReactJs",
    "ExpressJs",
    "JavaScript",
    "Python",
    "MongoDB",
    "NodeJs",
    "Java",
    "Figma",
    "LLMs",
    "GenAI",
  ],
};
