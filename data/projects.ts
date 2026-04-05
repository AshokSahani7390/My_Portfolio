export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  overview?: string;
  problem?: string[];
  goal?: string[];
  approach?: string;
  solution?: string;
  keyFeatures?: string[];
  designThinking?: {
    description: string;
    focus: string[];
  };
  techStack?: {
    frontend: string;
    styling: string;
    animations: string;
    backend: string;
    auth: string;
    deployment: string;
    analytics: string;
  };
  outcome?: string;
  closingSummary?: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
  demoUrl?: string;
  highlights?: string[];
  large?: boolean;
}

export const projects: Project[] = [
  {
    id: "care-connect",
    title: "Care-Connect",
    subtitle: "Modern Healthcare & Service Connection Platform",
    description: "A scalable, user-focused platform designed to connect people with the right care and support services through a clean, modern, and trustworthy digital experience.",
    fullDescription: "Care-Connect was built as a product-driven digital platform focused on helping users discover, understand, and connect with the right services through a structured and intuitive experience. The project was approached with the mindset of building a real startup-ready platform rather than a basic informational website.",
    overview: "Care-Connect is a modern web platform created to solve a common real-world issue: users often struggle to find the right support or service because the experience is fragmented, unclear, and lacking trust. This project was designed to improve that process by bringing together clean user flows, strong interface design, clear information hierarchy, and scalable product structure.",
    problem: [
      "Too much confusion when exploring options",
      "Weak trust in outdated or poorly designed interfaces",
      "Friction between discovery and action",
      "Difficulty understanding available services",
      "Poor user experience on mobile devices",
      "Lack of product structure for long-term growth"
    ],
    goal: [
      "Make service discovery easier and more intuitive",
      "Create a trustworthy and modern digital experience",
      "Improve the path from browsing to action",
      "Support future feature expansion like dashboards, personalization, and advanced workflows",
      "Present a startup-level product standard rather than a basic service directory"
    ],
    approach: "I approached Care-Connect as a full product case study, not just a UI exercise. The focus was on building a clean and scalable experience through structured user journeys, strong visual hierarchy, trust-oriented interface design, and modern SaaS-inspired layout systems.",
    solution: "The final solution was a polished and product-focused platform experience that combines clarity, structure, and usability. The interface was designed to help users quickly understand what the platform offers, navigate important sections easily, and move toward the next step without confusion.",
    keyFeatures: [
      "Modern landing experience with clear positioning",
      "Structured browsing and service discovery interface",
      "Clean navigation and strong content hierarchy",
      "Trust-building layout with professional UI elements",
      "Responsive design for desktop and mobile devices",
      "Scalable dashboard/product architecture",
      "Future-ready structure for additional workflows and modules"
    ],
    designThinking: {
      description: "The design direction for Care-Connect focused on trust, clarity, and usability. Because the platform deals with important user decisions, the interface needed to feel calm, structured, and reliable.",
      focus: [
        "Reducing cognitive overload",
        "Improving scannability",
        "Making calls-to-action clearer",
        "Creating a more professional first impression",
        "Designing for both usability and credibility"
      ]
    },
    techStack: {
      frontend: "React / Next.js",
      styling: "Tailwind CSS / modern component styling system",
      animations: "GSAP / Motion / modern interaction patterns",
      backend: "Supabase or scalable backend-ready structure",
      auth: "Backend-auth-first architecture",
      deployment: "Vercel",
      analytics: "PostHog / Sentry / production-ready monitoring direction"
    },
    outcome: "Care-Connect demonstrates my ability to build a serious SaaS-style product around a real-world problem. It shows that I can think beyond isolated pages and work on end-to-end product journeys, startup-level structure, and conversion-oriented layouts.",
    closingSummary: "Care-Connect is one of the strongest examples of my product thinking. It reflects my ability to combine modern UI, structured UX, and scalable architecture into a platform that feels credible, purposeful, and ready for real-world use.",
    category: "Healthcare SaaS",
    image: "/projects/care-connect.png",
    tags: ["React", "Next.js", "Tailwind CSS", "SaaS Architecture"],
    link: "/projects/care-connect",
    demoUrl: "/videos/SaaS_Product_Demo_Video_Creation.mp4",
    highlights: [
      "Real-world problem-solving product",
      "SaaS-style platform architecture",
      "Clean onboarding and user flow design",
      "Trust-focused UI for service discovery",
      "Scalable structure for future features",
      "Startup-quality product thinking",
    ],
    large: true,
  },
  {
    id: "agrivaani-ai",
    title: "AgriVaani AI",
    subtitle: "AI-Powered Smart Farming Assistant",
    description: "An AI-driven platform created to make agricultural support more accessible, practical, and intelligent for real users through guided workflows and smart assistance.",
    fullDescription: "AgriVaani AI was designed as a real-world utility product that combines artificial intelligence with practical workflows to support users in the agriculture space through a simpler, smarter, and more approachable interface.",
    overview: "AgriVaani AI is a product-focused platform built to explore how AI can deliver meaningful value in agriculture. The concept centers on helping users access useful guidance, structured assistance, and intelligent support without forcing them into overly technical or complicated experiences.",
    problem: [
      "Simpler access to guidance",
      "Faster support workflows",
      "Better clarity in digital tools",
      "Interfaces that are easy to understand",
      "Practical solutions rather than overly technical systems"
    ],
    goal: [
      "Brings AI into a real, practical use case",
      "Remains easy to understand and accessible",
      "Supports users through guided and structured interaction",
      "Feels modern without becoming intimidating",
      "Demonstrates the value of domain-focused AI product design"
    ],
    approach: "I approached AgriVaani AI as a usability-first AI product. Rather than starting from technical complexity, I focused on identifying practical user value, designing approachable AI interaction patterns, and simplifying workflows.",
    solution: "The final product concept brings together smart assistance, guided workflows, and a modern interface designed around user clarity. AgriVaani AI presents AI as a practical layer inside a product experience rather than as a disconnected feature.",
    keyFeatures: [
      "AI-powered guidance experience",
      "User-friendly and practical interaction flow",
      "Clean dashboard and assistant-based interface",
      "Domain-specific product thinking",
      "Mobile-friendly usability",
      "Structured information design",
      "Scalable foundation for future AI workflows"
    ],
    designThinking: {
      description: "The design for AgriVaani AI focused on accessibility, usefulness, and confidence. AI products often fail visually because they feel too abstract or too complicated.",
      focus: [
        "Reducing cognitive overload",
        "Improving scannability",
        "Making calls-to-action clearer",
        "Creating a more professional first impression",
        "Designing for both usability and credibility"
      ]
    },
    techStack: {
      frontend: "Flutter / React / Next.js",
      styling: "Tailwind CSS / modern component styling system",
      animations: "GSAP / Motion / modern interaction patterns",
      backend: "Supabase / Node.js / API-based architecture",
      auth: "Backend-auth-first architecture",
      deployment: "Vercel / mobile deployment-ready stack",
      analytics: "Sentry / PostHog / production-ready observability direction"
    },
    outcome: "AgriVaani AI stands out in a portfolio because it combines AI product thinking, real-world utility, and domain-specific design. It shows that I can build AI-enabled products that are grounded in real user needs.",
    closingSummary: "AgriVaani AI is a strong example of how I approach innovation: not as a flashy feature, but as a practical product system built around real value, clear UX, and scalable thinking.",
    category: "AgriTech AI",
    image: "/projects/agrivaani-ai.png",
    tags: ["React", "Next.js", "AI/ML", "Flutter"],
    link: "/projects/agrivaani-ai",
    demoUrl: "/videos/AI_Agriculture_Platform_Product_Demo.mp4",
    highlights: [
      "AI-powered product experience",
      "Domain-specific real-world use case",
      "Clean and practical user workflows",
      "Smart assistant interaction design",
      "Accessible and user-friendly UI",
      "Strong innovation angle for clients",
    ],
    large: false,
  },
  {
    id: "whatsapp-ai-agent",
    title: "WhatsApp AI Agent",
    subtitle: "Automated Business Communication System",
    description: "A smart automation system built to help businesses manage conversations, qualify leads, and streamline customer interactions through AI-powered WhatsApp workflows.",
    fullDescription: "The WhatsApp AI Agent project was designed as a practical business automation system for modern companies that want to improve communication speed, support quality, and lead handling efficiency.",
    overview: "The WhatsApp AI Agent is a workflow-driven automation product designed to help businesses manage customer conversations more efficiently. It combines AI assistance, messaging automation, and business logic to support use cases such as lead qualification, user support, and information handling.",
    problem: [
      "Delayed responses",
      "Inconsistent lead handling",
      "Repetitive customer questions",
      "Poor follow-up systems",
      "Support bottlenecks",
      "Difficulty scaling conversation volume"
    ],
    goal: [
      "Automates repetitive communication tasks",
      "Improves response speed",
      "Supports lead qualification flows",
      "Makes support interactions more efficient",
      "Creates a scalable communication workflow for businesses",
      "Combines AI with familiar messaging channels"
    ],
    approach: "I approached the project from a business workflow perspective first. Instead of designing 'just a chatbot,' the goal was to build a more complete system that could fit real business needs, focusing on structured automation logic and clear conversation pathways.",
    solution: "The final concept is a WhatsApp-based AI communication system designed to support both user-facing and business-facing workflows. The product can be positioned as a tool for automated lead capture, support assistance, and workflow simplification.",
    keyFeatures: [
      "AI-powered conversation automation",
      "WhatsApp-based interaction model",
      "Lead qualification logic",
      "Support workflow optimization",
      "Messaging system architecture",
      "Business automation use cases",
      "Scalable integration-ready foundation"
    ],
    designThinking: {
      description: "The visual and product design approach focused on making automation feel structured and useful. The interface needed to support clarity and control for business operations.",
      focus: [
        "Easy understanding of message workflows",
        "Clean status visibility",
        "Strong dashboard-style organization",
        "Efficient overview of communication activity",
        "Familiar chat-driven UX patterns"
      ]
    },
    techStack: {
      frontend: "React / Next.js",
      styling: "Tailwind CSS / modern component styling system",
      animations: "GSAP / Motion / modern interaction patterns",
      backend: "Node.js / API workflow architecture",
      auth: "Backend-managed authentication",
      deployment: "Vercel / Meta integration-ready flow",
      analytics: "Sentry / PostHog / observability-ready production stack"
    },
    outcome: "This project is highly effective because it shows that I can build around automation, AI integration, and real business needs. It communicates strong commercial thinking and makes my portfolio more relevant to service businesses.",
    closingSummary: "The WhatsApp AI Agent reflects my ability to combine AI, backend logic, and product strategy into a practical system that solves real communication problems for businesses.",
    category: "Business Automation",
    image: "/projects/whatsapp-ai-agent.png",
    tags: ["Automation", "OpenAI", "Node.js", "WhatsApp API"],
    link: "/projects/whatsapp-ai-agent",
    demoUrl: "/videos/WhatsApp_AI_Agent_Demo_Video.mp4",
    highlights: [
      "AI + automation + business workflow",
      "WhatsApp-based communication system",
      "Lead qualification and support logic",
      "API integration mindset",
      "Monetizable product direction",
      "Real commercial relevance",
    ],
    large: true,
  },
  {
    id: "dataflow-scraping",
    title: "DataFlow Scraping SaaS",
    subtitle: "Automated Data Collection Platform",
    description: "A technical SaaS product built to automate structured data collection and turn repetitive research workflows into scalable business systems.",
    fullDescription: "DataFlow Scraping SaaS is a product concept focused on helping businesses automate data collection and transform manual research processes into reliable digital workflows. The platform was designed around efficiency, structure, and usability, making complex backend functionality feel approachable through a clean product interface.",
    overview: "DataFlow Scraping SaaS is a platform concept centered on helping businesses collect, organize, and operationalize data more efficiently. Instead of treating scraping as a raw technical task, the product frames it as a clean and structured service that supports automation, research, and business workflows.",
    problem: [
      "Manual collection of structured data",
      "Repetitive market research workflows",
      "Lack of automation in data gathering",
      "Poor visibility into extraction status",
      "Inefficient handling of large data tasks",
      "Technical complexity that makes internal adoption difficult"
    ],
    goal: [
      "Automates structured data collection",
      "Saves time for users and businesses",
      "Makes complex workflows easier to manage",
      "Provides a clean interface around technical systems",
      "Demonstrates strong backend and product thinking",
      "Supports future monetization as a business tool"
    ],
    approach: "I approached the project by focusing on the bridge between technical systems and user experience. The challenge was designing a platform that helps users understand what is happening, manage workflows efficiently, and view results clearly.",
    solution: "The final concept is a structured automation platform with a dashboard-oriented interface that makes data extraction workflows easier to launch, monitor, and manage. It positions scraping not as a developer-only function, but as a business utility with operational value.",
    keyFeatures: [
      "Automated data workflow structure",
      "Scraping-focused SaaS interface",
      "Extraction status visibility",
      "Tables, pipelines, and workflow monitoring",
      "Scalable backend-oriented architecture",
      "Business utility framing",
      "Product-ready dashboard experience"
    ],
    designThinking: {
      description: "For this project, the design challenge was making something technical feel usable and trustworthy. The interface direction focused on structured data presentation and minimal friction.",
      focus: [
        "Reducing cognitive overload",
        "Improving scannability",
        "Making calls-to-action clearer",
        "Creating a more professional first impression",
        "Designing for both usability and credibility"
      ]
    },
    techStack: {
      frontend: "React / Next.js",
      styling: "Tailwind CSS / modern component styling system",
      animations: "GSAP / Motion / modern interaction patterns",
      backend: "Node.js / Python / automation-ready architecture",
      auth: "Secure backend-controlled authentication",
      deployment: "Vercel / Backend deployment architecture",
      analytics: "Sentry / PostHog / production-focused tooling direction"
    },
    outcome: "DataFlow Scraping SaaS is valuable in a portfolio because it demonstrates backend depth, automation thinking, and technical problem-solving. It signals that I can build tools that improve workflows and support operational efficiency.",
    closingSummary: "This project shows that I can take a technically demanding concept and package it into a modern SaaS product with clear business value, structured UX, and scalable thinking.",
    category: "Technical SaaS",
    image: "/projects/dataflow-scraping.png",
    tags: ["Backend", "Python", "Automation", "SaaS"],
    link: "/projects/dataflow-scraping",
    demoUrl: "/videos/DataFlow_Product_Demo_Video_Creation.mp4",
    highlights: [
      "Backend-heavy product thinking",
      "Automation and data workflow systems",
      "SaaS dashboard design",
      "Business-value-driven functionality",
      "Technical depth with clean presentation",
      "Time-saving product angle",
    ],
    large: false,
  },
  {
    id: "ai-career-os",
    title: "AI Career OS",
    subtitle: "Intelligent Career Growth Platform",
    description: "A multi-module career platform designed to guide users through onboarding, recommendations, planning, resume support, and career decision-making in one unified experience.",
    fullDescription: "AI Career OS is a product-driven platform designed to help users navigate their career growth through a structured and intelligent digital system. The project includes multiple feature layers such as onboarding, recommendation flows, skill-gap logic, roadmap planning, dashboard experiences, and resume-related workflows.",
    overview: "AI Career OS is a product-focused platform that combines multiple interconnected features into one career growth ecosystem. Instead of solving a single small task, the system is designed to support a broader user journey that includes onboarding, recommendations, skill-gap analysis, roadmap building, dashboard insights, and resume-related workflows.",
    problem: [
      "Too many disconnected tools",
      "Unclear next steps",
      "Weak personalization",
      "Poor onboarding experiences",
      "Resume tools that feel generic",
      "No unified system for planning and action"
    ],
    goal: [
      "Personalizes the early user experience",
      "Provides structured career recommendations",
      "Helps identify gaps and improvement opportunities",
      "Supports roadmap-based planning",
      "Connects multiple workflows into a single ecosystem",
      "Feels like a real startup-grade product"
    ],
    approach: "I approached the project like a modular product system. Instead of treating each feature independently, I focused on how the modules connect into one larger journey, emphasizing onboarding logic and clear information flow.",
    solution: "The final product concept is a connected career platform where users can move from onboarding into recommendations, then into planning and supporting tools. The experience gives each step of the journey a clear purpose while maintaining a consistent product feel.",
    keyFeatures: [
      "Onboarding flow",
      "Recommendation engine direction",
      "Skill-gap analysis workflow",
      "Roadmap planning structure",
      "Dashboard system",
      "Resume / ATS workflow support",
      "Connected multi-module architecture"
    ],
    designThinking: {
      description: "The biggest design challenge was coherence. Because this project contains multiple modules, the interface needed to stay organized and consistent without feeling crowded.",
      focus: [
        "Simplifying user progression",
        "Breaking complex workflows into clearer steps",
        "Maintaining visual consistency",
        "Designing for engagement and progression",
        "Making the product feel intelligent but approachable"
      ]
    },
    techStack: {
      frontend: "React / Next.js / modern product UI stack",
      styling: "Tailwind CSS / modern component architecture",
      animations: "GSAP / Motion / smooth transition patterns",
      backend: "Supabase / API-driven architecture",
      auth: "Backend-first authentication model",
      deployment: "Vercel",
      analytics: "PostHog / Sentry / product observability direction"
    },
    outcome: "AI Career OS is a strong portfolio project because it shows multi-feature product thinking and system architecture. It demonstrates that I can build complex, user-centered digital products with connected flows.",
    closingSummary: "AI Career OS reflects my ability to design and build structured digital ecosystems, not just standalone interfaces. It is a strong example of feature depth, UX planning, and startup-level product design.",
    category: "Career-Tech SaaS",
    image: "/projects/ai-career-os.png",
    tags: ["React", "Next.js", "Supabase", "Career-Tech"],
    link: "/projects/ai-career-os",
    demoUrl: "/videos/AI_Career_OS_Product_Demo_Video.mp4",
    highlights: [
      "Multi-feature product system",
      "Strong onboarding and dashboard UX",
      "Recommendation and planning flows",
      "Product-depth case study",
      "Scalable startup-style architecture",
      "Strong UX and feature integration thinking",
    ],
    large: true,
  },
];
