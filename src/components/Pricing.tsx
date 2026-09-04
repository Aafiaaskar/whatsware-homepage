import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CategoryKey = "marketing" | "aiAgents";
type PlanKey = "spark" | "boost" | "titan" | "customizable";

interface Plan {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  color: string;
  popular?: boolean;
  button: string;
  icon: string;
}

interface FeatureRow {
  feature: string;
  spark: string;
  boost: string;
  titan: string;
  customizable: string;
}

interface FeatureSection {
  title: string;
  rows: FeatureRow[];
}

const plans: Record<PlanKey, Plan> = {
  spark: {
    name: "Spark",
    description: "Perfect for getting started",
    price: "$300",
    priceNote: "per year + taxes",
    color: "#159447",
    button: "Get Started",
    icon: "✦",
  },

  boost: {
    name: "Boost",
    description: "Grow your business faster",
    price: "$600",
    priceNote: "per year + taxes",
    color: "#E5A000",
    button: "Get Started Now!",
    icon: "⚡",
  },

  titan: {
    name: "Titan",
    description: "For scaling businesses",
    price: "$2,000",
    priceNote: "per year + taxes",
    color: "#7B4DFF",
    popular: true,
    button: "Get Started",
    icon: "◆",
  },

  customizable: {
    name: "Customizable",
    description: "Built around your business",
    price: "Custom",
    priceNote: "Talk to our sales team",
    color: "#8B5A2B",
    button: "Get In Touch",
    icon: "⚙",
  },
};

const categories: {
  key: CategoryKey;
  label: string;
  description: string;
}[] = [
  {
    key: "marketing",
    label: "Marketing & Support Hub",
    description:
      "Powerful WhatsApp marketing, customer support and automation tools for growing businesses.",
  },
  {
    key: "aiAgents",
    label: "WhatsApp AI Agents",
    description:
      "Intelligent AI-powered conversations that help your business engage customers automatically.",
  },
];

const featureSections: Record<CategoryKey, FeatureSection[]> = {
  marketing: [
    {
      title: "Marketing & Campaigns",
      rows: [
        {
          feature: "WhatsApp Campaigns",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Bulk Messaging",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Campaign Scheduling",
          spark: "Basic",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "Audience Segmentation",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Campaign Analytics",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "Customer Support",
      rows: [
        {
          feature: "Shared Team Inbox",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Customer Conversations",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Greeting Automation",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Out-of-Office Automation",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "FAQ Automation",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "Chat Assignment",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "Automation",
      rows: [
        {
          feature: "Workflow Automation",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Follow-up Automation",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Conditional Workflows",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "Advanced Triggers",
          spark: "—",
          boost: "Basic",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Webhook Automation",
          spark: "—",
          boost: "Basic",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "Commerce & Channels",
      rows: [
        {
          feature: "WhatsApp",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Instagram",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Product Catalog",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "WhatsApp Commerce",
          spark: "—",
          boost: "Basic",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },
  ],

  aiAgents: [
    {
      title: "AI Conversations",
      rows: [
        {
          feature: "AI Conversations",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "AI Agent Creation",
          spark: "1 Agent",
          boost: "3 Agents",
          titan: "Unlimited",
          customizable: "Custom",
        },
        {
          feature: "AI FAQ Handling",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Human Handoff",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "AI Lead Qualification",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "AI Automation",
      rows: [
        {
          feature: "Automated Replies",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Intent Detection",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "Conversation Routing",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "AI Workflow Actions",
          spark: "—",
          boost: "Basic",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "API Actions",
          spark: "—",
          boost: "—",
          titan: "✓",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "AI Knowledge",
      rows: [
        {
          feature: "FAQ Knowledge Base",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Business Information",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Custom Instructions",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "AI Agent Training",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "AI Controls",
      rows: [
        {
          feature: "Human Takeover",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Agent Assignment",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Conversation History",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "AI Analytics",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },
  ],
};

const capacityRows = [
  {
    feature: "WhatsApp Numbers",
    spark: "1",
    boost: "3",
    titan: "10",
    customizable: "Custom",
  },
  {
    feature: "Messages",
    spark: "Unlimited*",
    boost: "Unlimited*",
    titan: "Unlimited*",
    customizable: "Custom",
  },
  {
    feature: "Contacts",
    spark: "Unlimited",
    boost: "Unlimited",
    titan: "Unlimited",
    customizable: "Custom",
  },
  {
    feature: "Team Members",
    spark: "2",
    boost: "5",
    titan: "Unlimited",
    customizable: "Custom",
  },
  {
    feature: "Custom Fields",
    spark: "15",
    boost: "25",
    titan: "50",
    customizable: "Unlimited",
  },
  {
    feature: "Custom Tags",
    spark: "15",
    boost: "30",
    titan: "50",
    customizable: "Unlimited",
  },
];

const integrations = [
  "WhatsApp Business",
  "Instagram",
  "Shopify",
  "CRM",
  "Webhooks",
  "Public APIs",
  "Google Sheets",
  "Zapier",
  "E-commerce",
  "Payments",
  "Analytics",
  "Custom Integrations",
];

const planVisuals: Record<PlanKey, string> = {
  spark: "✨",
  boost: "⚡",
  titan: "🚀",
  customizable: "🛠️",
};

const addOnIcons = ["🤖", "📱", "📊", "🔗", "🎧", "⚙️"];

export default function Pricing() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("marketing");

  const currentCategory = categories.find(
    (category) => category.key === activeCategory
  );

  const planKeys = Object.keys(plans) as PlanKey[];

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFDF5] text-gray-900">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Background decorative shapes */}
        <div className="pointer-events-none absolute left-[8%] top-20 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[5%] top-32 h-80 w-80 rounded-full bg-purple-300/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-yellow-200/20 blur-3xl" />

        {/* Decorative floating elements */}
        <div className="pointer-events-none absolute left-[7%] top-48 hidden animate-[bounce_5s_ease-in-out_infinite] lg:block">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-200 bg-white text-2xl shadow-xl shadow-green-900/10">
            💬
          </div>
        </div>

        <div className="pointer-events-none absolute right-[8%] top-56 hidden animate-[bounce_6s_ease-in-out_infinite] lg:block">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-200 bg-white text-2xl shadow-xl shadow-purple-900/10">
            🤖
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-bold text-green-700 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Whatsware Pricing
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            Powerful Automation.
            <span className="mt-2 block bg-gradient-to-r from-[#159447] via-[#159447] to-[#7B4DFF] bg-clip-text text-transparent">
              Simple Pricing.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Choose the Whatsware solution that fits your business and scale
            your marketing, customer support, AI automation and sales.
          </p>

          {/* Hero visual */}
          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="relative rounded-[2rem] border border-green-100 bg-white/80 p-3 shadow-2xl shadow-green-900/10 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#0F5132] via-[#126C42] to-[#159447] p-8 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-3">
                  {[
                    {
                      icon: "💬",
                      title: "Engage",
                      text: "Connect with customers",
                    },
                    {
                      icon: "🤖",
                      title: "Automate",
                      text: "Let AI handle conversations",
                    },
                    {
                      icon: "📈",
                      title: "Grow",
                      text: "Turn conversations into sales",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        {item.icon}
                      </div>

                      <h3 className="font-extrabold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-white/65">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating mini cards */}
            <div className="absolute -left-5 bottom-10 hidden rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                  ✓
                </span>

                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900">
                    Automation Active
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Your business is working smarter
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-5 top-8 hidden rounded-2xl border border-purple-100 bg-white px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100">
                  ✦
                </span>

                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900">
                    AI Agent Online
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Responding automatically
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Yearly plans */}
          <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-6 py-3 shadow-lg shadow-green-900/5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            <span className="font-bold text-gray-800">
              Yearly Plans
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
              SAVE MORE
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CATEGORY NAVIGATION */}
      {/* ========================================================= */}
      <section className="sticky top-0 z-30 border-y border-gray-200/80 bg-[#FFFDF5]/90 py-4 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-2">
            {categories.map((category) => {
              const isActive = activeCategory === category.key;

              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`group relative overflow-hidden rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#159447] text-white shadow-xl shadow-green-700/20"
                      : "border border-gray-200 bg-white text-gray-700 hover:-translate-y-0.5 hover:border-green-300 hover:shadow-lg"
                  }`}
                >
                  {isActive && (
                    <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
                  )}

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold sm:text-base">
                        {category.label}
                      </span>

                      <span
                        className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                          isActive ? "text-white" : "text-green-600"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    <p
                      className={`mt-1 text-xs ${
                        isActive
                          ? "text-white/75"
                          : "text-gray-500"
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SELECTED CATEGORY + PRICING */}
      {/* ========================================================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-600">
              Choose your plan
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {currentCategory?.label}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {currentCategory?.description}
            </p>
          </div>

          {/* PRICING CARDS */}
          <div className="grid gap-6 lg:grid-cols-4">
            {planKeys.map((key) => {
              const plan = plans[key];

              return (
                <div
                  key={key}
                  className={`group relative flex flex-col overflow-hidden rounded-[2rem] border bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                    plan.popular
                      ? "border-purple-300 shadow-purple-100"
                      : "border-gray-200"
                  }`}
                >
                  {/* decorative glow */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{
                      backgroundColor: plan.color,
                    }}
                  />

                  {/* top gradient */}
                  <div
                    className="absolute left-0 right-0 top-0 h-1.5"
                    style={{
                      background: `linear-gradient(90deg, ${plan.color}, transparent)`,
                    }}
                  />

                  {plan.popular && (
                    <div className="absolute right-5 top-5">
                      <span className="rounded-full bg-gradient-to-r from-[#7B4DFF] to-purple-600 px-3 py-1.5 text-[10px] font-extrabold tracking-wider text-white shadow-lg shadow-purple-500/20">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="relative">
                    {/* Plan icon */}
                    <div
                      className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        backgroundColor: `${plan.color}15`,
                        color: plan.color,
                      }}
                    >
                      {planVisuals[key]}
                    </div>

                    <div
                      className="mb-5 h-1.5 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                      style={{ backgroundColor: plan.color }}
                    />

                    <h3 className="text-2xl font-extrabold">
                      {plan.name}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                      {plan.description}
                    </p>

                    <div className="mt-7">
                      <div
                        className="text-4xl font-extrabold tracking-tight"
                        style={{
                          color:
                            key === "customizable"
                              ? "#8B5A2B"
                              : plan.color,
                        }}
                      >
                        {plan.price}
                      </div>

                      <p className="mt-2 text-xs font-medium text-gray-500">
                        {plan.priceNote}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="mt-7 w-full rounded-xl px-5 py-3.5 text-sm font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      style={{
                        backgroundColor: plan.color,
                      }}
                    >
                      {plan.button}
                    </button>

                    <div className="mt-7 border-t border-gray-100 pt-6">
                      <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.15em] text-gray-400">
                        Includes
                      </p>

                      <ul className="space-y-3.5 text-sm text-gray-600">
                        {[
                          "WhatsApp Business",
                          "Team Inbox",
                          "Automation Tools",
                          "Analytics",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3"
                          >
                            <span
                              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white"
                              style={{
                                backgroundColor: plan.color,
                              }}
                            >
                              ✓
                            </span>

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              All plans are billed annually. Taxes and applicable
              WhatsApp messaging charges may apply.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* COMPARISON */}
      {/* ========================================================= */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-600">
              Detailed Comparison
            </span>

            <h2 className="mt-3 text-3xl font-extrabold">
              Compare Plans
            </h2>

            <p className="mt-2 text-gray-600">
              See what each Whatsware plan includes for{" "}
              {currentCategory?.label}.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5">
            <div className="overflow-x-auto">
              <div className="min-w-[950px]">
                <div className="grid grid-cols-[2fr_repeat(4,1fr)] bg-gray-50">
                  <div className="p-6 text-sm font-extrabold text-gray-700">
                    Features
                  </div>

                  {planKeys.map((key) => (
                    <div
                      key={key}
                      className={`border-l border-gray-200 p-6 text-center ${
                        key === "titan"
                          ? "bg-purple-50/50"
                          : ""
                      }`}
                    >
                      <div className="font-extrabold">
                        {plans[key].name}
                      </div>

                      <div
                        className="mx-auto mt-2 h-1 w-10 rounded-full"
                        style={{
                          backgroundColor: plans[key].color,
                        }}
                      />
                    </div>
                  ))}
                </div>

                {featureSections[activeCategory].map((section) => (
                  <div key={section.title}>
                    <div className="grid grid-cols-[2fr_repeat(4,1fr)] bg-green-50/70">
                      <div className="col-span-5 px-6 py-4 text-sm font-extrabold text-green-900">
                        {section.title}
                      </div>
                    </div>

                    {section.rows.map((row) => (
                      <div
                        key={row.feature}
                        className="grid grid-cols-[2fr_repeat(4,1fr)] border-t border-gray-100 transition-colors hover:bg-gray-50"
                      >
                        <div className="p-5 text-sm font-medium text-gray-700">
                          {row.feature}
                        </div>

                        {planKeys.map((key) => {
                          const value = row[key];

                          return (
                            <div
                              key={key}
                              className={`border-l border-gray-100 p-5 text-center text-sm ${
                                key === "titan"
                                  ? "bg-purple-50/30"
                                  : ""
                              }`}
                            >
                              {value === "✓" ? (
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 font-extrabold text-green-600">
                                  ✓
                                </span>
                              ) : value === "—" ? (
                                <span className="text-gray-300">
                                  —
                                </span>
                              ) : (
                                <span className="font-medium text-gray-600">
                                  {value}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURES & CAPACITY */}
      {/* ========================================================= */}
      <section className="border-y border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-600">
              Plan Details
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Features & Capacity
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Everything you need to understand what's included in
              each Whatsware plan.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5">
            <div className="overflow-x-auto">
              <div className="min-w-[950px]">
                <div className="grid grid-cols-[2fr_repeat(4,1fr)] bg-gray-50">
                  <div className="p-6 text-sm font-extrabold">
                    Business Capacity
                  </div>

                  {planKeys.map((key) => (
                    <div
                      key={key}
                      className={`border-l border-gray-200 p-6 text-center ${
                        key === "titan"
                          ? "bg-purple-50/50"
                          : ""
                      }`}
                    >
                      <div className="font-extrabold">
                        {plans[key].name}
                      </div>

                      <div
                        className="mx-auto mt-2 h-1 w-10 rounded-full"
                        style={{
                          backgroundColor: plans[key].color,
                        }}
                      />
                    </div>
                  ))}
                </div>

                {capacityRows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[2fr_repeat(4,1fr)] border-t border-gray-100 hover:bg-gray-50"
                  >
                    <div className="p-5 text-sm font-medium text-gray-700">
                      {row.feature}
                    </div>

                    {planKeys.map((key) => (
                      <div
                        key={key}
                        className={`border-l border-gray-100 p-5 text-center text-sm ${
                          key === "titan"
                            ? "bg-purple-50/30"
                            : ""
                        }`}
                      >
                        {row[key]}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-gray-500">
            * Final usage limits and messaging policies will be
            confirmed when Whatsware pricing is finalized.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ADD-ONS */}
      {/* ========================================================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0F5132] via-[#126C42] to-[#159447] p-8 text-white shadow-2xl sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-green-300/10 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                  Optional Add-ons
                </span>

                <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                  Extend Whatsware around your business
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-white/75">
                  Add advanced capabilities whenever your business
                  needs them. Add-on pricing can be defined
                  separately.
                </p>

                <button
                  type="button"
                  className="mt-7 rounded-xl bg-white px-6 py-3 font-extrabold text-[#0F5132] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Add-ons →
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "WhatsApp AI Agents",
                  "Additional WhatsApp Numbers",
                  "Advanced Analytics",
                  "Custom Integrations",
                  "Dedicated Support",
                  "Enterprise APIs",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                        {addOnIcons[index]}
                      </div>

                      <span className="text-sm font-semibold">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTEGRATIONS */}
      {/* ========================================================= */}
      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-600">
            Integrations
          </span>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Connect Whatsware with your existing tools
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Bring your tools together with integrations, APIs and
            automation workflows.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="group rounded-2xl border border-gray-200 bg-[#FFFDF5] px-4 py-5 text-sm font-bold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50 hover:text-green-700 hover:shadow-lg"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-sm font-extrabold text-green-600 transition-transform duration-300 group-hover:scale-110">
                  ✓
                </div>

                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-green-50 via-white to-purple-50 p-8 text-center shadow-xl sm:p-14">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-green-200/30 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl shadow-sm">
                💬
              </div>

              <span className="mt-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-green-700">
                Need help choosing?
              </span>

              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                Not sure which plan is right for you?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                Talk to the Whatsware team and find the right
                solution for your business.
              </p>

              <button
                type="button"
                className="mt-8 rounded-xl bg-[#159447] px-8 py-4 font-extrabold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
              >
                Talk to Whatsware →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}