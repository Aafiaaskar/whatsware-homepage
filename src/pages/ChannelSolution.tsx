import { Link, useRoute } from "wouter";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  MessageCircle,
  Instagram,
  Bot,
  Users,
  Workflow,
  Target,
  Megaphone,
  Globe2,
  Plug,
  Zap,
  BarChart3,
  Headphones,
  Sparkles,
  Send,
  Settings2,
  Clock3,
  ShieldCheck,
  Layers3,
  BrainCircuit,
  Building2,
  Plane,
  Utensils,
  Scissors,
  HeartPulse,
  GraduationCap,
  Car,
  LampDesk,
  QrCode,
  FileText,
  Link2,
  CreditCard,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

/* ============================================================
   CHANNEL DATA
============================================================ */

const channelData = {
  whatsapp: {
    name: "WhatsApp",
    eyebrow: "WhatsApp Conversations",
    icon: MessageCircle,
    accent: "#159447",
    soft: "#E8F7EE",

    heroTitle: "Turn WhatsApp into",
    heroAccent: "your growth engine.",

    description:
      "Connect with customers on WhatsApp, automate conversations, generate leads, provide support, and drive sales from one powerful platform.",

    heroPoints: [
      "Business messaging",
      "AI-powered conversations",
      "Automated customer journeys",
      "Sales and support",
    ],

    benefits: [
      {
        icon: MessageCircle,
        title: "Business Conversations",
        text: "Connect with customers through fast, personalized WhatsApp conversations.",
      },
      {
        icon: Bot,
        title: "AI Conversations",
        text: "Let AI answer questions, understand customer intent, and guide conversations.",
      },
      {
        icon: Send,
        title: "Campaign Messaging",
        text: "Send targeted campaigns and updates to customers at the right time.",
      },
      {
        icon: Target,
        title: "Lead Generation",
        text: "Capture and qualify leads directly from WhatsApp conversations.",
      },
      {
        icon: Headphones,
        title: "Customer Support",
        text: "Give customers faster answers while keeping your support team organized.",
      },
      {
        icon: Zap,
        title: "Automation",
        text: "Automate repetitive conversations, follow-ups, reminders, and workflows.",
      },
    ],

    workflow: [
      {
        icon: MessageCircle,
        number: "01",
        title: "Customer starts a conversation",
        text: "Customers reach your business through WhatsApp with questions, enquiries, or requests.",
      },
      {
        icon: Bot,
        number: "02",
        title: "AI understands",
        text: "AI understands the customer's intent and provides an immediate response.",
      },
      {
        icon: Workflow,
        number: "03",
        title: "Automation takes over",
        text: "Automated workflows move the customer toward the correct next step.",
      },
      {
        icon: Target,
        number: "04",
        title: "Business outcome",
        text: "Turn conversations into leads, sales, bookings, support resolutions, or repeat customers.",
      },
    ],

    features: [
      "WhatsApp Business messaging",
      "AI customer conversations",
      "Automated replies",
      "Lead capture",
      "Customer support",
      "Broadcast campaigns",
      "Follow-up automation",
      "Conversation analytics",
    ],
  },

  "ai-agents": {
    name: "AI Agents",
    eyebrow: "Artificial Intelligence",
    icon: Bot,
    accent: "#7B4DFF",
    soft: "#F0EBFF",

    heroTitle: "AI that talks.",
    heroAccent: "AI that gets things done.",

    description:
      "Deploy intelligent AI agents that understand customer intent, answer questions, qualify leads, and automate customer journeys around the clock.",

    heroPoints: [
      "24/7 AI assistance",
      "Natural conversations",
      "Intelligent lead qualification",
      "Automated support",
    ],

    benefits: [
      {
        icon: Bot,
        title: "Intelligent AI Agents",
        text: "Create AI assistants that understand customer questions and respond naturally.",
      },
      {
        icon: BrainCircuit,
        title: "Context-Aware Conversations",
        text: "AI understands conversation context instead of replying with generic answers.",
      },
      {
        icon: Target,
        title: "Lead Qualification",
        text: "Automatically identify valuable prospects and collect the information your team needs.",
      },
      {
        icon: Headphones,
        title: "AI Support",
        text: "Handle repetitive support questions instantly, even outside business hours.",
      },
      {
        icon: Workflow,
        title: "Action-Based AI",
        text: "Connect AI conversations with workflows and business actions.",
      },
      {
        icon: BarChart3,
        title: "Conversation Insights",
        text: "Understand what customers are asking and identify opportunities for improvement.",
      },
    ],

    workflow: [
      {
        icon: MessageCircle,
        number: "01",
        title: "Customer asks",
        text: "A customer starts a conversation and explains what they need.",
      },
      {
        icon: Bot,
        number: "02",
        title: "AI understands",
        text: "The AI agent understands intent, context, and the customer's objective.",
      },
      {
        icon: Zap,
        number: "03",
        title: "AI responds",
        text: "The agent provides the right information or performs the next action.",
      },
      {
        icon: Target,
        number: "04",
        title: "Outcome",
        text: "The conversation moves toward conversion, support resolution, or another business goal.",
      },
    ],

    features: [
      "AI customer agents",
      "Natural language conversations",
      "Lead qualification",
      "AI support",
      "Knowledge-based responses",
      "Automated actions",
      "Conversation context",
      "24/7 availability",
    ],
  },

  "team-inbox": {
    name: "Team Inbox",
    eyebrow: "Customer Support",
    icon: Users,
    accent: "#0F766E",
    soft: "#E5F5F3",

    heroTitle: "One inbox.",
    heroAccent: "One team. Better support.",

    description:
      "Bring customer conversations into one shared workspace so your team can collaborate, assign conversations, and respond faster.",

    heroPoints: [
      "Shared customer inbox",
      "Team collaboration",
      "Conversation assignment",
      "Faster customer support",
    ],

    benefits: [
      {
        icon: Users,
        title: "Shared Inbox",
        text: "Give your entire team one organized place to manage customer conversations.",
      },
      {
        icon: Target,
        title: "Conversation Assignment",
        text: "Assign conversations to the right team member without losing context.",
      },
      {
        icon: Headphones,
        title: "Faster Support",
        text: "Reduce response times with a centralized customer communication workspace.",
      },
      {
        icon: MessageCircle,
        title: "Conversation History",
        text: "Keep customer context available so your team knows what happened before.",
      },
      {
        icon: Bot,
        title: "AI Assistance",
        text: "Use AI to help your team handle repetitive customer questions.",
      },
      {
        icon: BarChart3,
        title: "Team Insights",
        text: "Understand team performance and customer conversation activity.",
      },
    ],

    workflow: [
      {
        icon: MessageCircle,
        number: "01",
        title: "Customer messages",
        text: "A customer sends a message through your connected channel.",
      },
      {
        icon: Layers3,
        number: "02",
        title: "Conversation enters inbox",
        text: "The conversation automatically appears in your shared team workspace.",
      },
      {
        icon: Users,
        number: "03",
        title: "Team collaborates",
        text: "The right team member takes ownership and responds to the customer.",
      },
      {
        icon: Check,
        number: "04",
        title: "Conversation resolved",
        text: "The team completes the conversation while maintaining the full customer context.",
      },
    ],

    features: [
      "Shared team inbox",
      "Conversation assignment",
      "Team collaboration",
      "Conversation history",
      "Customer context",
      "AI assistance",
      "Support workflows",
      "Team analytics",
    ],
  },

  automation: {
    name: "Automation",
    eyebrow: "Workflow Automation",
    icon: Workflow,
    accent: "#E5A000",
    soft: "#FFF5D9",

    heroTitle: "Automate the work.",
    heroAccent: "Focus on the growth.",

    description:
      "Build automated customer journeys that handle repetitive tasks, follow-ups, notifications, lead qualification, and support workflows.",

    heroPoints: [
      "Visual workflows",
      "Automated follow-ups",
      "Trigger-based actions",
      "Always-on automation",
    ],

    benefits: [
      {
        icon: Workflow,
        title: "Visual Workflows",
        text: "Create customer journeys using simple visual workflow logic.",
      },
      {
        icon: Zap,
        title: "Instant Triggers",
        text: "Start automated actions whenever a customer performs a specific action.",
      },
      {
        icon: Clock3,
        title: "Scheduled Follow-ups",
        text: "Automatically send reminders and follow-ups at the right time.",
      },
      {
        icon: Bot,
        title: "AI + Automation",
        text: "Combine AI conversations with automated business workflows.",
      },
      {
        icon: Target,
        title: "Lead Automation",
        text: "Automatically capture, qualify, route, and follow up with leads.",
      },
      {
        icon: Settings2,
        title: "Business Processes",
        text: "Automate repetitive processes without requiring manual intervention.",
      },
    ],

    workflow: [
      {
        icon: Send,
        number: "01",
        title: "Trigger",
        text: "A customer action, message, form submission, or event starts the workflow.",
      },
      {
        icon: Workflow,
        number: "02",
        title: "Workflow runs",
        text: "WhatsWare processes the defined conditions and actions automatically.",
      },
      {
        icon: Bot,
        number: "03",
        title: "Action happens",
        text: "Messages, assignments, notifications, or AI actions are triggered.",
      },
      {
        icon: Target,
        number: "04",
        title: "Journey continues",
        text: "The customer automatically moves to the next stage of their journey.",
      },
    ],

    features: [
      "Visual workflow builder",
      "Automated replies",
      "Follow-up automation",
      "Lead workflows",
      "Reminder workflows",
      "AI automation",
      "Trigger-based actions",
      "Business process automation",
    ],
  },

  marketing: {
    name: "Marketing",
    eyebrow: "Marketing & Engagement",
    icon: Megaphone,
    accent: "#DB2777",
    soft: "#FCEAF3",

    heroTitle: "Reach customers.",
    heroAccent: "At the right moment.",

    description:
      "Create personalized campaigns, broadcasts, promotions, and re-engagement journeys that turn customer conversations into business growth.",

    heroPoints: [
      "Campaign management",
      "Broadcast messaging",
      "Personalized engagement",
      "Customer re-engagement",
    ],

    benefits: [
      {
        icon: Megaphone,
        title: "Campaigns",
        text: "Create targeted campaigns designed around your audience and business goals.",
      },
      {
        icon: Send,
        title: "Broadcast Messaging",
        text: "Reach customers with relevant updates, promotions, and announcements.",
      },
      {
        icon: Target,
        title: "Audience Targeting",
        text: "Create more relevant customer journeys by targeting specific audiences.",
      },
      {
        icon: Sparkles,
        title: "Personalization",
        text: "Deliver more meaningful marketing experiences using customer context.",
      },
      {
        icon: Users,
        title: "Customer Re-engagement",
        text: "Bring inactive customers back through timely campaigns and follow-ups.",
      },
      {
        icon: BarChart3,
        title: "Campaign Analytics",
        text: "Understand campaign performance and improve your customer engagement.",
      },
    ],

    workflow: [
      {
        icon: Users,
        number: "01",
        title: "Choose your audience",
        text: "Select the customers or audience segment you want to engage.",
      },
      {
        icon: Megaphone,
        number: "02",
        title: "Create campaign",
        text: "Build a personalized campaign around your promotion or business objective.",
      },
      {
        icon: Send,
        number: "03",
        title: "Engage",
        text: "Deliver your message through the appropriate customer communication channel.",
      },
      {
        icon: BarChart3,
        number: "04",
        title: "Measure",
        text: "Review campaign performance and improve future customer journeys.",
      },
    ],

    features: [
      "Campaign management",
      "Broadcast messaging",
      "Audience segmentation",
      "Personalized campaigns",
      "Customer re-engagement",
      "Promotional messaging",
      "Campaign analytics",
      "Marketing automation",
    ],
  },

  "website-chat": {
    name: "Website Chat",
    eyebrow: "Website Conversations",
    icon: Globe2,
    accent: "#0891B2",
    soft: "#E5F7FA",

    heroTitle: "Turn website visitors",
    heroAccent: "into conversations.",

    description:
      "Connect your website visitors with intelligent conversations, instant answers, lead capture, and automated customer journeys.",

    heroPoints: [
      "Visitor engagement",
      "Instant answers",
      "Lead capture",
      "AI-powered website conversations",
    ],

    benefits: [
      {
        icon: Globe2,
        title: "Website Conversations",
        text: "Give visitors an easy way to start conversations while they explore your website.",
      },
      {
        icon: Bot,
        title: "AI Website Assistant",
        text: "Answer common questions and guide visitors using an intelligent AI assistant.",
      },
      {
        icon: Target,
        title: "Lead Capture",
        text: "Capture valuable visitor information before they leave your website.",
      },
      {
        icon: MessageCircle,
        title: "Instant Responses",
        text: "Help visitors get answers without waiting for your team.",
      },
      {
        icon: Workflow,
        title: "Automated Journeys",
        text: "Connect website conversations to your existing automation workflows.",
      },
      {
        icon: BarChart3,
        title: "Visitor Insights",
        text: "Understand what visitors are asking and where they need help.",
      },
    ],

    workflow: [
      {
        icon: Globe2,
        number: "01",
        title: "Visitor arrives",
        text: "A potential customer lands on your website and explores your business.",
      },
      {
        icon: MessageCircle,
        number: "02",
        title: "Conversation starts",
        text: "The visitor starts a conversation to ask a question or request information.",
      },
      {
        icon: Bot,
        number: "03",
        title: "AI responds",
        text: "The AI assistant provides relevant information and guides the visitor.",
      },
      {
        icon: Target,
        number: "04",
        title: "Lead captured",
        text: "Qualified visitors can be captured and moved into the next stage of the customer journey.",
      },
    ],

    features: [
      "Website chat",
      "AI website assistant",
      "Visitor engagement",
      "Lead capture",
      "Instant responses",
      "Automated workflows",
      "Customer qualification",
      "Conversation analytics",
    ],
  },

  integrations: {
    name: "Integrations",
    eyebrow: "Connected Business Stack",
    icon: Plug,
    accent: "#A97155",
    soft: "#F5E9E1",

    heroTitle: "Connect your tools.",
    heroAccent: "Keep everything moving.",

    description:
      "Connect WhatsWare with the tools your business already uses and create a connected customer journey without disconnected systems.",

    heroPoints: [
      "CRM integrations",
      "Business tools",
      "APIs and webhooks",
      "Connected workflows",
    ],

    benefits: [
      {
        icon: Plug,
        title: "CRM Connections",
        text: "Connect customer conversations with the CRM systems your team already uses.",
      },
      {
        icon: Layers3,
        title: "Connected Tools",
        text: "Bring your business tools together so information can move between systems.",
      },
      {
        icon: Workflow,
        title: "Connected Workflows",
        text: "Trigger actions across your connected applications automatically.",
      },
      {
        icon: Settings2,
        title: "API Access",
        text: "Build custom connections when your business needs a more flexible integration.",
      },
      {
        icon: Zap,
        title: "Webhooks",
        text: "Send and receive events between WhatsWare and external systems.",
      },
      {
        icon: ShieldCheck,
        title: "Reliable Data Flow",
        text: "Keep your customer journeys connected across the tools your team depends on.",
      },
    ],

    workflow: [
      {
        icon: Plug,
        number: "01",
        title: "Connect your tools",
        text: "Choose the systems you want to connect with your WhatsWare workspace.",
      },
      {
        icon: Settings2,
        number: "02",
        title: "Configure",
        text: "Set up the required connection, events, fields, and business rules.",
      },
      {
        icon: Workflow,
        number: "03",
        title: "Automate",
        text: "Use connected data to trigger workflows and customer actions.",
      },
      {
        icon: BarChart3,
        number: "04",
        title: "Grow",
        text: "Create a more connected customer journey across your business systems.",
      },
    ],

    features: [
      "CRM integrations",
      "API integrations",
      "Webhooks",
      "Connected workflows",
      "Business applications",
      "Customer data sync",
      "Automation triggers",
      "Custom integrations",
    ],
  },
};

/* ============================================================
   INDUSTRIES
============================================================ */

const industryData = [
  {
    name: "B2B Sales",
    description: "Generate and qualify business leads.",
    icon: Building2,
    href: "/solutions/industry/b2b",
  },
  {
    name: "Travel and Tourism",
    description: "Convert enquiries into bookings.",
    icon: Plane,
    href: "/solutions/industry/travel-tourism",
  },
  {
    name: "Restaurants & Food Business",
    description: "Automate orders, bookings and support.",
    icon: Utensils,
    href: "/solutions/industry/restaurants",
  },
  {
    name: "Spas and Salons",
    description: "Manage appointments and customer conversations.",
    icon: Scissors,
    href: "/solutions/industry/spas-salons",
  },
  {
    name: "Health & Wellness Brands",
    description: "Build better customer relationships.",
    icon: HeartPulse,
    href: "/solutions/industry/health-wellness",
  },
  {
    name: "Beauty & Cosmetics Brands",
    description: "Engage customers and drive product sales.",
    icon: Sparkles,
    href: "/solutions/industry/beauty-cosmetics",
  },
  {
    name: "Edutech",
    description: "Capture student enquiries automatically.",
    icon: GraduationCap,
    href: "/solutions/industry/edutech",
  },
  {
    name: "Automotive Industry",
    description: "Manage enquiries, leads and follow-ups.",
    icon: Car,
    href: "/solutions/industry/automotive",
  },
  {
    name: "Home Decor & Furnishing",
    description: "Turn product enquiries into customers.",
    icon: LampDesk,
    href: "/solutions/industry/home-decor",
  },
];

/* ============================================================
   WHATSAPP PRODUCT DATA
============================================================ */

const whatsappProducts = [
  {
    name: "WhatsApp AI Agents",
    description:
      "Deploy intelligent AI agents that answer customers, qualify leads and automate conversations 24/7.",
    icon: Bot,
    href: "/products/whatsapp-ai-agents",
  },
  {
    name: "WhatsApp Automation",
    description:
      "Automate replies, customer journeys, notifications, reminders and repetitive conversations.",
    icon: Workflow,
    href: "/products/whatsapp-automation",
  },
  {
    name: "WhatsApp Broadcast",
    description:
      "Reach your customers with targeted campaigns, updates, offers and personalized broadcasts.",
    icon: Megaphone,
    href: "/products/whatsapp-broadcast",
  },
  {
    name: "WhatsApp Chatbots",
    description:
      "Build automated WhatsApp conversations that answer questions and guide customers.",
    icon: MessageSquare,
    href: "/products/whatsapp-chatbots",
  },
  {
    name: "WhatsApp Chat Widget",
    description:
      "Turn website visitors into WhatsApp conversations with an easy-to-use chat widget.",
    icon: Globe2,
    href: "/products/whatsapp-chat-widget",
  },
  {
    name: "WhatsApp Forms",
    description:
      "Collect customer information and leads directly through WhatsApp conversations.",
    icon: FileText,
    href: "/products/whatsapp-forms",
  },
  {
    name: "WhatsApp Link Generator",
    description:
      "Create WhatsApp links that let customers instantly start conversations with your business.",
    icon: Link2,
    href: "/products/whatsapp-link-generator",
  },
  {
    name: "WhatsApp Payments",
    description:
      "Make it easier for customers to complete payment journeys through WhatsApp.",
    icon: CreditCard,
    href: "/products/whatsapp-payments",
  },
  {
    name: "WhatsApp QR Code",
    description:
      "Create QR codes that instantly connect customers to your WhatsApp business.",
    icon: QrCode,
    href: "/products/whatsapp-qr-code",
  },
  {
    name: "WhatsApp Sales",
    description:
      "Turn WhatsApp conversations into qualified opportunities and sales.",
    icon: Target,
    href: "/products/whatsapp-sales",
  },
  {
    name: "WhatsApp Solution",
    description:
      "Explore the complete WhatsApp customer engagement solution from WhatsWare.",
    icon: MessageCircle,
    href: "/solutions/whatsapp/solution",
  },
  {
    name: "Workflow Builder",
    description:
      "Create visual workflows that automate customer journeys and business processes.",
    icon: Workflow,
    href: "/products/workflow-builder",
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function ChannelSolution() {
  const [singularMatch, singularParams] = useRoute(
    "/solutions/channel/:channel",
  );

  const [pluralMatch, pluralParams] = useRoute(
    "/solutions/channels/:channel",
  );

  const channelKey =
    (singularMatch
      ? singularParams?.channel
      : pluralMatch
        ? pluralParams?.channel
        : "whatsapp") || "whatsapp";

  const channel =
    channelData[channelKey as keyof typeof channelData] ||
    channelData.whatsapp;

  const ChannelIcon = channel.icon;

  const isWhatsApp = channelKey === "whatsapp";

  return (
    <div className="min-h-screen bg-[#F9F6EF] text-[#173C32]">
      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#F9F6EF] pb-20 pt-32 lg:pb-28 lg:pt-40">
          {/* Background decoration */}

          <div
            className="pointer-events-none absolute -right-48 -top-48 h-[38rem] w-[38rem] rounded-full blur-3xl"
            style={{
              backgroundColor: `${channel.accent}14`,
            }}
          />

          <div
            className="pointer-events-none absolute left-[8%] top-[45%] h-72 w-72 rounded-full blur-3xl"
            style={{
              backgroundColor: `${channel.accent}08`,
            }}
          />

          <div className="pointer-events-none absolute -left-40 top-96 h-80 w-80 rounded-full bg-[#B7CDBB]/20 blur-3xl" />

          {/* Decorative grid */}

          <div className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-[0.035] [background-image:linear-gradient(#173C32_1px,transparent_1px),linear-gradient(90deg,#173C32_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/solutions"
              className="group mb-10 inline-flex items-center gap-2 rounded-full border border-[#D7CDC1] bg-white/85 px-4 py-2 text-sm font-semibold text-[#53655E] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-x-1 hover:border-[#159447]/30 hover:text-[#159447]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Solutions
            </Link>

            <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
              {/* LEFT HERO */}

              <div>
                {isWhatsApp && (
                  <div className="mb-7 flex items-center gap-3">
                    <div className="flex h-12 items-center rounded-2xl border border-[#E5DED3] bg-white px-4 shadow-sm">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-7 w-auto object-contain"
                      />
                    </div>

                    <div className="h-8 w-px bg-[#D7CDC1]" />

                    <div className="flex items-center gap-2 text-sm font-semibold text-[#687871]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#25D366] shadow-[0_0_0_4px_rgba(37,211,102,0.12)]" />
                      WhatsApp Business Platform
                    </div>
                  </div>
                )}

                <div
                  className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm"
                  style={{
                    borderColor: `${channel.accent}45`,
                    backgroundColor: channel.soft,
                    color: channel.accent,
                  }}
                >
                  <ChannelIcon className="h-4 w-4" />
                  {channel.eyebrow}
                </div>

                <h1 className="max-w-4xl text-4xl font-bold leading-[1.06] tracking-tight text-[#173C32] sm:text-5xl lg:text-7xl">
                  {channel.heroTitle}

                  <span
                    className="mt-3 block"
                    style={{
                      color: channel.accent,
                    }}
                  >
                    {channel.heroAccent}
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#60736B] sm:text-xl">
                  {channel.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {channel.heroPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm font-medium text-[#53655E]"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: channel.soft,
                        }}
                      >
                        <Check
                          className="h-4 w-4"
                          style={{
                            color: channel.accent,
                          }}
                        />
                      </span>

                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#173C32] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#285B4D] hover:shadow-xl"
                  >
                    View Pricing

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/integrations"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#D7CDC1] bg-white px-7 py-3.5 text-sm font-semibold text-[#173C32] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159447]/30 hover:text-[#159447]"
                  >
                    Explore Integrations
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {isWhatsApp && (
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-[#7B8982]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                      Built for business messaging
                    </div>

                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                      AI-ready workflows
                    </div>
                  </div>
                )}
              </div>

              {/* HERO VISUAL */}

              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div
                  className="absolute inset-6 rounded-[2.5rem] blur-3xl"
                  style={{
                    backgroundColor: `${channel.accent}15`,
                  }}
                />

                <div className="relative">
                  {/* Main card */}

                  <div className="relative overflow-hidden rounded-[2rem] border border-[#E5DED3] bg-white p-5 shadow-[0_30px_80px_rgba(23,60,50,0.13)] sm:p-7">
                    <div
                      className="absolute -right-28 -top-28 h-72 w-72 rounded-full blur-3xl"
                      style={{
                        backgroundColor: `${channel.accent}15`,
                      }}
                    />

                    <div className="relative">
                      {/* Card header */}

                      <div className="flex items-center justify-between border-b border-[#EEE8DF] pb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
                            style={{
                              backgroundColor: channel.accent,
                            }}
                          >
                            <ChannelIcon className="h-6 w-6" />
                          </div>

                          <div>
                            <div className="text-sm font-bold text-[#173C32]">
                              {channel.name}
                            </div>

                            <div className="mt-0.5 flex items-center gap-1.5 text-xs text-[#7B8982]">
                              <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                              Connected
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 rounded-full bg-[#F5F0E8] px-3 py-1.5 text-xs font-semibold text-[#7B8982]">
                          <Clock3 className="h-3.5 w-3.5" />
                          Always On
                        </div>
                      </div>

                      {/* WhatsApp conversation preview */}

                      {isWhatsApp ? (
                        <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-[#E6E2D9] bg-[#F3F7F3]">
                          {/* Fake chat header */}

                          <div className="flex items-center gap-3 border-b border-[#DDE7DE] bg-white px-4 py-3.5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#159447] text-white">
                              <img
                                src="/whatsware-logo.png"
                                alt="WhatsWare"
                                className="h-6 w-6 object-contain brightness-0 invert"
                              />
                            </div>

                            <div className="flex-1">
                              <div className="text-sm font-bold text-[#173C32]">
                                WhatsWare Assistant
                              </div>
                              <div className="text-[11px] text-[#7B8982]">
                                AI-powered customer conversations
                              </div>
                            </div>

                            <div className="rounded-full bg-[#E8F7EE] px-2.5 py-1 text-[10px] font-bold text-[#159447]">
                              ONLINE
                            </div>
                          </div>

                          {/* Chat area */}

                          <div className="space-y-3 p-4 sm:p-5">
                            <div className="flex justify-start">
                              <div className="max-w-[78%] rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                                <p className="text-xs leading-5 text-[#53655E]">
                                  Hi! 👋 I&apos;d like to know more about your
                                  services.
                                </p>
                                <div className="mt-1 text-[9px] text-[#9AA59F]">
                                  10:42 AM
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-end">
                              <div className="max-w-[78%] rounded-2xl rounded-tr-md bg-[#DDF8E7] px-4 py-3 shadow-sm">
                                <p className="text-xs leading-5 text-[#285B4D]">
                                  Absolutely! I can help you with that. What
                                  are you looking to automate?
                                </p>
                                <div className="mt-1 text-right text-[9px] text-[#6F9180]">
                                  10:42 AM ✓✓
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-start">
                              <div className="max-w-[82%] rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                                <p className="text-xs leading-5 text-[#53655E]">
                                  I want to automate leads and customer
                                  support.
                                </p>
                                <div className="mt-1 text-[9px] text-[#9AA59F]">
                                  10:43 AM
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-end">
                              <div className="max-w-[82%] rounded-2xl rounded-tr-md bg-[#159447] px-4 py-3 text-white shadow-md">
                                <p className="text-xs leading-5">
                                  Perfect. WhatsWare can automate both. 🚀
                                </p>
                                <div className="mt-1 text-right text-[9px] text-white/60">
                                  10:43 AM ✓✓
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom status */}

                          <div className="border-t border-[#DDE7DE] bg-white px-4 py-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F7EE]">
                                  <Bot className="h-3.5 w-3.5 text-[#159447]" />
                                </div>
                                <span className="text-[11px] font-semibold text-[#687871]">
                                  AI is handling the conversation
                                </span>
                              </div>

                              <div className="flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#159447]" />
                                <span className="h-1.5 w-1.5 rounded-full bg-[#159447]/60" />
                                <span className="h-1.5 w-1.5 rounded-full bg-[#159447]/30" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="mt-7">
                            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A7566]">
                              WhatsWare
                            </div>

                            <h2 className="mt-2 text-3xl font-bold text-[#173C32]">
                              {channel.name}
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[#687871]">
                              A smarter way to manage this part of your
                              customer journey.
                            </p>
                          </div>

                          <div className="mt-7 space-y-3">
                            {[
                              {
                                icon: ChannelIcon,
                                title: `${channel.name} Active`,
                                text: "Customer journey connected",
                              },
                              {
                                icon: Bot,
                                title: "AI Assistance",
                                text: "Intelligent automation available",
                              },
                              {
                                icon: BarChart3,
                                title: "Business Insights",
                                text: "Track conversations and outcomes",
                              },
                            ].map((item) => {
                              const Icon = item.icon;

                              return (
                                <div
                                  key={item.title}
                                  className="rounded-2xl border border-[#E8E1D8] bg-[#FFFDF8] p-4"
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                                      style={{
                                        backgroundColor: channel.soft,
                                        color: channel.accent,
                                      }}
                                    >
                                      <Icon className="h-5 w-5" />
                                    </div>

                                    <div className="flex-1">
                                      <div className="text-sm font-semibold text-[#173C32]">
                                        {item.title}
                                      </div>

                                      <div className="mt-1 text-xs text-[#7B8982]">
                                        {item.text}
                                      </div>
                                    </div>

                                    <span
                                      className="h-2.5 w-2.5 rounded-full"
                                      style={{
                                        backgroundColor: channel.accent,
                                      }}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Floating AI badge */}

                  <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[#E5DED3] bg-white p-3 shadow-xl sm:block">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F7EE] text-[#159447]">
                        <BrainCircuit className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-xs font-bold text-[#173C32]">
                          AI Powered
                        </div>
                        <div className="mt-0.5 text-[10px] text-[#7B8982]">
                          Intelligent conversations
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating automation badge */}

                  <div className="absolute -right-4 top-24 hidden rounded-2xl border border-[#E5DED3] bg-white p-3 shadow-xl sm:block">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F8F2] text-[#159447]">
                        <Zap className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-xs font-bold text-[#173C32]">
                          Automated
                        </div>
                        <div className="mt-0.5 text-[10px] text-[#7B8982]">
                          Workflows running
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO STATS */}

            <div className="mt-20 overflow-hidden rounded-3xl border border-[#E5DED3] bg-white shadow-xl">
              <div className="grid sm:grid-cols-3">
                {[
                  ["24/7", "Always Available"],
                  ["AI", "Intelligent Assistance"],
                  ["1", "Connected Platform"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={`relative px-6 py-8 text-center ${
                      index !== 2
                        ? "border-b border-[#E5DED3] sm:border-b-0 sm:border-r"
                        : ""
                    }`}
                  >
                    <div
                      className="text-3xl font-bold"
                      style={{
                        color: channel.accent,
                      }}
                    >
                      {value}
                    </div>

                    <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#7B8982]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHATSAPP PRODUCTS
        ====================================================== */}

        {isWhatsApp && (
          <section className="relative overflow-hidden bg-white py-24">
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#159447]/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#25D366]/10 blur-3xl" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[60%] -translate-x-1/2 bg-[#159447]/[0.035] blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#159447]/20 bg-[#E8F7EE] px-4 py-2 text-sm font-bold text-[#159447]">
                  <img
                    src="/whatsware-logo.png"
                    alt="WhatsWare"
                    className="h-5 w-auto object-contain"
                  />

                  <span className="h-4 w-px bg-[#159447]/20" />

                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Solutions
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#173C32] sm:text-5xl">
                  Everything you need to{" "}
                  <span className="text-[#159447]">
                    grow on WhatsApp.
                  </span>
                </h2>

                <p className="mt-5 text-lg leading-8 text-[#687871]">
                  Explore every WhatsApp product available in WhatsWare.
                  Choose a solution below to build smarter customer
                  conversations.
                </p>
              </div>

              {/* PRODUCT CARDS */}

              <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {whatsappProducts.map((product, index) => {
                  const ProductIcon = product.icon;

                  return (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="group relative overflow-hidden rounded-3xl border border-[#E5DED3] bg-[#FFFDF8] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#159447]/30 hover:shadow-2xl"
                    >
                      {/* Number */}

                      <div className="absolute right-5 top-5 text-xs font-bold text-[#C9D0CB] transition-colors group-hover:text-[#159447]/40">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Hover glow */}

                      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#159447]/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative">
                        <div className="flex items-start justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EE] text-[#159447] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#159447] group-hover:text-white">
                            <ProductIcon className="h-6 w-6" />
                          </div>

                          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5DED3] bg-white text-[#8A978F] transition-all duration-300 group-hover:border-[#159447] group-hover:bg-[#159447] group-hover:text-white">
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>

                        <div className="mt-6">
                          <h3 className="text-xl font-bold text-[#173C32] transition-colors group-hover:text-[#159447]">
                            {product.name}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-[#687871]">
                            {product.description}
                          </p>
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#159447]">
                          Explore solution
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{
                  color: channel.accent,
                }}
              >
                What you can do
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#173C32] sm:text-5xl">
                Everything you need for{" "}
                <span style={{ color: channel.accent }}>
                  {channel.name}.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#687871]">
                Powerful capabilities designed specifically around this part
                of your customer journey.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {channel.benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group rounded-3xl border border-[#E5DED3] bg-[#FFFDF8] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#159447]/20 hover:shadow-xl"
                  >
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: channel.soft,
                        color: channel.accent,
                      }}
                    >
                      <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#173C32]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#687871]">
                      {benefit.text}
                    </p>

                    <div
                      className="mt-6 h-1 w-8 rounded-full transition-all duration-300 group-hover:w-14"
                      style={{
                        backgroundColor: channel.accent,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            INDUSTRIES
        ====================================================== */}

        <section className="bg-[#F9F6EF] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#A97155]">
                Industries
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#173C32] sm:text-5xl">
                Built for the way{" "}
                <span className="text-[#A97155]">
                  your industry works.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#687871]">
                Use WhatsWare to automate conversations, capture leads and
                create better customer experiences across different industries.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industryData.map((industry) => {
                const Icon = industry.icon;

                return (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className="group flex items-center gap-4 rounded-2xl border border-[#E5DED3] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159447]/20 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#DDF8EF] text-[#08A88A] transition-all duration-300 group-hover:scale-105">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={2.2}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-[#173C32]">
                        {industry.name}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-[#7B8982]">
                        {industry.description}
                      </p>
                    </div>

                    <ArrowRight className="h-5 w-5 shrink-0 text-[#A97155] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <section className="bg-[#F9F6EF] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <div
                  className="text-sm font-bold uppercase tracking-[0.2em]"
                  style={{
                    color: channel.accent,
                  }}
                >
                  How it works
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-[#173C32] sm:text-5xl">
                  A simpler way to
                  <span
                    className="block"
                    style={{
                      color: channel.accent,
                    }}
                  >
                    move customers forward.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-lg leading-8 text-[#687871]">
                  Connect people, technology, and automation into one
                  continuous customer experience.
                </p>

                {isWhatsApp && (
                  <div className="mt-7 flex items-center gap-3 rounded-2xl border border-[#DCE9DF] bg-white p-4 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F7EE]">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-7 w-auto object-contain"
                      />
                    </div>

                    <div>
                      <div className="text-sm font-bold text-[#173C32]">
                        WhatsWare
                      </div>
                      <div className="text-xs text-[#7B8982]">
                        Conversations → automation → outcomes
                      </div>
                    </div>
                  </div>
                )}

                <Link
                  href="/pricing"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#173C32] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#285B4D]"
                >
                  Get started

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="space-y-5">
                {channel.workflow.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="group relative overflow-hidden rounded-3xl border border-[#E5DED3] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159447]/20 hover:shadow-xl sm:p-7"
                    >
                      <div
                        className="absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          backgroundColor: `${channel.accent}20`,
                        }}
                      />

                      <div className="relative flex gap-5">
                        <div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
                          style={{
                            backgroundColor: channel.accent,
                          }}
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <span
                              className="text-xs font-bold tracking-widest"
                              style={{
                                color: channel.accent,
                              }}
                            >
                              {step.number}
                            </span>

                            <h3 className="text-xl font-bold text-[#173C32]">
                              {step.title}
                            </h3>
                          </div>

                          <p className="mt-3 text-sm leading-6 text-[#687871]">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#173C32] p-8 text-white shadow-2xl sm:p-12 lg:p-14">
              {/* Background effects */}

              <div
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
                style={{
                  backgroundColor: `${channel.accent}18`,
                }}
              />

              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

              <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  {isWhatsApp ? (
                    <div className="flex h-14 w-fit items-center rounded-2xl bg-white px-5 shadow-lg">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                      style={{
                        backgroundColor: channel.accent,
                      }}
                    >
                      <ChannelIcon className="h-7 w-7" />
                    </div>
                  )}

                  <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
                    Built for your workflow.

                    <span className="block text-white/50">
                      Ready for your growth.
                    </span>
                  </h2>

                  <p className="mt-5 text-base leading-7 text-white/65">
                    Get the tools you need to create a faster, smarter, and
                    more connected customer experience.
                  </p>

                  <Link
                    href="/pricing"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#173C32] transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    Explore plans

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {channel.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all hover:border-white/20 hover:bg-white/10"
                    >
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${channel.accent}35`,
                        }}
                      >
                        <Check
                          className="h-4 w-4"
                          style={{
                            color: channel.accent,
                          }}
                        />
                      </div>

                      <span className="text-sm font-medium text-white/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Logo watermark */}

              {isWhatsApp && (
                <div className="pointer-events-none absolute bottom-5 right-7 opacity-[0.035]">
                  <img
                    src="/whatsware-logo.png"
                    alt=""
                    className="w-52 brightness-0 invert"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="bg-[#F9F6EF] pb-24 pt-4">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E5DED3] bg-white px-7 py-14 text-center shadow-xl sm:px-14 sm:py-16">
              <div
                className="absolute -left-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                style={{
                  backgroundColor: `${channel.accent}15`,
                }}
              />

              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#B7CDBB]/25 blur-3xl" />

              <div className="relative">
                {isWhatsApp ? (
                  <div className="mx-auto flex h-16 w-fit items-center rounded-2xl border border-[#E5DED3] bg-white px-6 shadow-lg">
                    <img
                      src="/whatsware-logo.png"
                      alt="WhatsWare"
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg"
                    style={{
                      backgroundColor: channel.accent,
                    }}
                  >
                    <ChannelIcon className="h-8 w-8" />
                  </div>
                )}

                <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold text-[#173C32] sm:text-5xl">
                  Ready to make {channel.name} work harder for your business?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#687871]">
                  Start building smarter customer journeys with WhatsWare.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#173C32] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#285B4D]"
                  >
                    View Pricing

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D7CDC1] bg-white px-7 py-3.5 text-sm font-semibold text-[#173C32] transition-all hover:-translate-y-1 hover:border-[#159447]/30 hover:text-[#159447]"
                  >
                    All Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}