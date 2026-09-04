import { useMemo, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Search,
  Zap,
  Bot,
  ShoppingBag,
  CreditCard,
  Database,
  CalendarDays,
  Truck,
  Megaphone,
  Workflow,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Integration = {
  name: string;
  category: string;
  description: string;
  badge: "Native" | "API Powered";
  logo?: string;
};

/* =========================================================
   INTEGRATION DATA
========================================================= */

const integrations: Integration[] = [
  // CRM
  {
    name: "Zoho CRM",
    category: "CRM",
    description:
      "Sync leads, contacts, and customer conversations with WhatsApp automatically.",
    badge: "Native",
  },
  {
    name: "HubSpot",
    category: "CRM",
    description:
      "Connect HubSpot with WhatsApp to manage conversations and nurture leads.",
    badge: "Native",
  },
  {
    name: "Salesforce",
    category: "CRM",
    description:
      "Bring WhatsApp conversations and customer engagement directly into Salesforce.",
    badge: "Native",
  },
  {
    name: "LeadSquared",
    category: "CRM",
    description:
      "Engage, follow up, and convert your leads on WhatsApp with LeadSquared.",
    badge: "API Powered",
  },
  {
    name: "Freshworks CRM",
    category: "CRM",
    description:
      "Connect your customer data with WhatsApp for faster and smarter engagement.",
    badge: "Native",
  },
  {
    name: "Zoho Bigin",
    category: "CRM",
    description:
      "Connect your sales pipeline with WhatsApp and automate customer communication.",
    badge: "Native",
  },
  {
    name: "Odoo",
    category: "CRM",
    description:
      "Send automated notifications, alerts, and customer updates from Odoo through WhatsApp.",
    badge: "Native",
  },
  {
    name: "Kylas",
    category: "CRM",
    description:
      "Extend your Kylas CRM workflow with powerful WhatsApp communication.",
    badge: "API Powered",
  },
  {
    name: "Corefactors",
    category: "CRM",
    description:
      "Manage prospect and customer conversations directly through your CRM workflow.",
    badge: "API Powered",
  },
  {
    name: "KONDESK",
    category: "CRM",
    description:
      "Connect your customer management workflow with WhatsApp automation.",
    badge: "API Powered",
  },
  {
    name: "LEDSAK",
    category: "CRM",
    description:
      "Engage, nurture, and convert leads through WhatsApp-powered automation.",
    badge: "API Powered",
  },

  // Payments
  {
    name: "Razorpay",
    category: "Payments",
    description:
      "Collect payments directly through WhatsApp and simplify your payment journey.",
    badge: "Native",
  },
  {
    name: "Cashfree",
    category: "Payments",
    description:
      "Accept and share payment links through WhatsApp with a seamless experience.",
    badge: "Native",
  },
  {
    name: "PayU",
    category: "Payments",
    description:
      "Connect PayU with WhatsApp to make payment collection faster and easier.",
    badge: "API Powered",
  },
  {
    name: "Stripe",
    category: "Payments",
    description:
      "Share payment experiences with customers through automated WhatsApp journeys.",
    badge: "API Powered",
  },
  {
    name: "WhatsApp Pay",
    category: "Payments",
    description:
      "Enable convenient payment experiences for customers directly on WhatsApp.",
    badge: "Native",
  },
  {
    name: "Instamojo",
    category: "Payments",
    description:
      "Share payment links and automate payment-related customer communication.",
    badge: "API Powered",
  },

  // E-commerce
  {
    name: "Shopify",
    category: "E-commerce",
    description:
      "Send order updates, abandoned cart alerts, and customer notifications on WhatsApp.",
    badge: "Native",
  },
  {
    name: "WooCommerce",
    category: "E-commerce",
    description:
      "Connect your WooCommerce store with WhatsApp for automated customer updates.",
    badge: "Native",
  },
  {
    name: "Judge.me",
    category: "E-commerce",
    description:
      "Connect customer reviews and engagement workflows with WhatsApp.",
    badge: "Native",
  },
  {
    name: "Return Prime",
    category: "E-commerce",
    description:
      "Keep customers informed about returns and post-purchase experiences on WhatsApp.",
    badge: "API Powered",
  },
  {
    name: "Shopaccino",
    category: "E-commerce",
    description:
      "Connect your online store with WhatsApp and automate customer communication.",
    badge: "API Powered",
  },
  {
    name: "VasyERP",
    category: "E-commerce",
    description:
      "Connect business operations with WhatsApp notifications and automation.",
    badge: "API Powered",
  },

  // Accounting
  {
    name: "Zoho Books",
    category: "Accounting",
    description:
      "Streamline accounting notifications, invoices, and customer communication through WhatsApp.",
    badge: "Native",
  },
  {
    name: "TallyPrime",
    category: "Accounting",
    description:
      "Connect TallyPrime with WhatsApp to automate business and payment notifications.",
    badge: "API Powered",
  },
  {
    name: "Wafeq",
    category: "Accounting",
    description:
      "Connect accounting workflows with WhatsApp for faster customer communication.",
    badge: "API Powered",
  },

  // Marketing
  {
    name: "Facebook Leads",
    category: "Marketing",
    description:
      "Push Facebook leads directly into WhatsApp and follow up instantly.",
    badge: "API Powered",
  },
  {
    name: "MoEngage",
    category: "Marketing",
    description:
      "Turn customer engagement insights into personalized WhatsApp journeys.",
    badge: "Native",
  },
  {
    name: "WebEngage",
    category: "Marketing",
    description:
      "Send automated WhatsApp nudges and personalized customer engagement campaigns.",
    badge: "Native",
  },
  {
    name: "CleverTap",
    category: "Marketing",
    description:
      "Connect customer engagement data with WhatsApp automation.",
    badge: "Native",
  },

  // Scheduler
  {
    name: "Calendly",
    category: "Scheduler",
    description:
      "Send booking confirmations and appointment reminders through WhatsApp.",
    badge: "Native",
  },
  {
    name: "Zoho Bookings",
    category: "Scheduler",
    description:
      "Connect your booking calendar with WhatsApp notifications and reminders.",
    badge: "API Powered",
  },
  {
    name: "Zoho Meetings",
    category: "Scheduler",
    description:
      "Manage meeting registrations and reminders through WhatsApp.",
    badge: "API Powered",
  },

  // Logistics
  {
    name: "Shiprocket",
    category: "Logistics",
    description:
      "Send timely shipping, tracking, and delivery alerts to customers on WhatsApp.",
    badge: "Native",
  },

  // Connectors
  {
    name: "Google Sheets",
    category: "Connectors",
    description:
      "Sync customer data with Google Sheets and eliminate repetitive manual work.",
    badge: "Native",
  },
  {
    name: "Pabbly Connect",
    category: "Connectors",
    description:
      "Connect WhatsApp with the tools you use every day through powerful workflows.",
    badge: "Native",
  },
  {
    name: "Zapier",
    category: "Connectors",
    description:
      "Connect your WhatsApp account with thousands of apps and automate repetitive tasks.",
    badge: "Native",
  },
  {
    name: "Make",
    category: "Connectors",
    description:
      "Build powerful visual automation workflows between WhatsApp and your business tools.",
    badge: "API Powered",
  },
  {
    name: "ViaSocket",
    category: "Connectors",
    description:
      "Connect WhatsApp with thousands of applications using whatsapp automation.",
    badge: "API Powered",
  },
];

/* =========================================================
   FEATURED INTEGRATIONS
========================================================= */

const featuredIntegrations = [
  {
    name: "Odoo",
    category: "CRM",
    description:
      "Send automated notifications and alerts to your Odoo contacts through WhatsApp.",
  },
  {
    name: "Zoho CRM",
    category: "CRM",
    description:
      "Create a single source of truth with powerful two-way CRM and WhatsApp workflows.",
  },
  {
    name: "HubSpot",
    category: "CRM",
    description:
      "Unify customer communication by connecting HubSpot with WhatsApp.",
  },
  {
    name: "Shopify",
    category: "E-commerce",
    description:
      "Share order updates, abandoned cart alerts, and customer notifications on WhatsApp.",
  },
  {
    name: "Google Sheets",
    category: "Connectors",
    description:
      "Eliminate manual intervention by connecting your WhatsApp workflows with Google Sheets.",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    name: "All",
    icon: Sparkles,
  },
  {
    name: "CRM",
    icon: Database,
  },
  {
    name: "Payments",
    icon: CreditCard,
  },
  {
    name: "E-commerce",
    icon: ShoppingBag,
  },
  {
    name: "Accounting",
    icon: Database,
  },
  {
    name: "Marketing",
    icon: Megaphone,
  },
  {
    name: "Scheduler",
    icon: CalendarDays,
  },
  {
    name: "Logistics",
    icon: Truck,
  },
  {
    name: "Connectors",
    icon: Workflow,
  },
];

/* =========================================================
   LOGO COMPONENT
========================================================= */

function IntegrationLogo({
  name,
  large = false,
}: {
  name: string;
  large?: boolean;
}) {
  const letters = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`${
        large ? "h-16 w-16 text-xl" : "h-12 w-12 text-sm"
      } flex shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white font-bold text-[#159447] shadow-sm`}
    >
      {letters}
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function NotFound() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  /* =========================================================
     GET STARTED POPUP STATE
  ========================================================= */

  const [showGetStartedPopup, setShowGetStartedPopup] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const filteredIntegrations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return integrations.filter((integration) => {
      const matchesCategory =
        activeCategory === "All" ||
        integration.category === activeCategory;

      const matchesSearch =
        !query ||
        integration.name.toLowerCase().includes(query) ||
        integration.category.toLowerCase().includes(query) ||
        integration.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4fff8] via-white to-white pt-28 sm:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#159447]/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-[-150px] top-[250px] h-[300px] w-[300px] rounded-full bg-[#b8f5cf]/40 blur-[100px]" />

        <div className="pointer-events-none absolute right-[-120px] top-[180px] h-[350px] w-[350px] rounded-full bg-green-100/60 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 text-center sm:px-8 lg:px-10 lg:pb-28">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#159447]/20 bg-white px-4 py-2 text-sm font-medium text-[#159447] shadow-sm">
            <Zap className="h-4 w-4" />
            Powerful WhatsApp Integrations
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Connect WhatsApp With Your
            <span className="block bg-gradient-to-r from-[#159447] via-[#20b957] to-[#0f7c38] bg-clip-text text-transparent">
              Entire Business
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Connect your CRM, e-commerce store, payment gateway, marketing
            tools, accounting software, and more with WhatsApp. Automate
            conversations, sync data, and grow your business from one powerful
            platform.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setShowGetStartedPopup(true)}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 font-semibold text-white shadow-lg shadow-[#159447]/20 transition-all hover:-translate-y-0.5 hover:bg-[#117b3b] hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
                  <Check className="h-3 w-3 text-gray-500" />
                </span>
                No setup fee
              </span>

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
                  <Check className="h-3 w-3 text-gray-500" />
                </span>
                No credit card required
              </span>
            </div>
          </div>

          <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {[
              "Shopify",
              "Zoho CRM",
              "HubSpot",
              "Razorpay",
              "Google Sheets",
            ].map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm"
              >
                <div className="h-2 w-2 rounded-full bg-[#159447]" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED INTEGRATIONS
      ===================================================== */}

      <section className="border-y border-gray-100 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
              Connect Your Favorite Tools
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Latest WhatsApp Business Integrations
            </h2>

            <p className="mt-4 text-gray-600">
              Bring all your business tools together and manage customer
              communication through WhatsApp.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {featuredIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159447]/30 hover:shadow-xl hover:shadow-[#159447]/10"
              >
                <IntegrationLogo name={integration.name} />

                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#159447]">
                    {integration.category}
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-gray-950">
                    {integration.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {integration.description}
                  </p>

                  <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#159447]">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATION DIRECTORY
      ===================================================== */}

      <section className="bg-[#f8fcf9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
              Integration Directory
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              A Snapshot of Our Integrations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Choose the tools you already use and connect them with your
              WhatsApp workflows.
            </p>
          </div>

          {/* Search */}

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search integrations..."
                className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-12 text-sm text-gray-900 outline-none shadow-sm transition focus:border-[#159447] focus:ring-4 focus:ring-[#159447]/10"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category filters */}

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    active
                      ? "bg-[#159447] text-white shadow-md shadow-[#159447]/20"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-[#159447]/30 hover:text-[#159447]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Result count */}

          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-gray-800">
                {filteredIntegrations.length}
              </span>{" "}
              integrations
            </p>

            {activeCategory !== "All" && (
              <button
                onClick={() => setActiveCategory("All")}
                className="text-sm font-semibold text-[#159447] hover:underline"
              >
                Clear category
              </button>
            )}
          </div>

          {/* Cards */}

          {filteredIntegrations.length > 0 ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredIntegrations.map((integration) => (
                <div
                  key={`${integration.name}-${integration.category}`}
                  className="group flex min-h-[285px] flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#159447]/30 hover:shadow-xl hover:shadow-[#159447]/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <IntegrationLogo name={integration.name} />

                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                        integration.badge === "Native"
                          ? "bg-[#eaf9ef] text-[#159447]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {integration.badge}
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {integration.category}
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-gray-950">
                      {integration.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {integration.description}
                    </p>
                  </div>

                  <button className="mt-auto flex items-center gap-1 pt-6 text-sm font-semibold text-[#159447]">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf9ef]">
                <Search className="h-6 w-6 text-[#159447]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-950">
                No integrations found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">
                We couldn't find an integration matching your search. Try
                another app or request a new integration.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-6 rounded-xl bg-[#159447] px-5 py-2.5 text-sm font-semibold text-white"
              >
                View All Integrations
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          REQUEST INTEGRATION
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f7c38] via-[#159447] to-[#21b85b] px-6 py-14 text-center text-white shadow-2xl shadow-[#159447]/20 sm:px-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-black/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <MessageCircle className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                Can't find your favorite app?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                Don't see the integration you need? Tell us what you use and
                we'll help you connect it with WhatsApp.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#159447] shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-50">
                Request an Integration
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="bg-[#f8fcf9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
              Built For Growth
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              More Than Just Integrations
            </h2>

            <p className="mt-4 text-gray-600">
              Everything you need to connect your tools, automate conversations,
              and run your business efficiently on WhatsApp.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Access WhatsApp APIs",
                text: "Use powerful WhatsApp Business APIs and unlock advanced communication capabilities.",
              },
              {
                icon: Workflow,
                title: "Scalable Infrastructure",
                text: "Handle growing customer conversations and campaigns without worrying about your infrastructure.",
              },
              {
                icon: Bot,
                title: "AI-Powered Automation",
                text: "Automate repetitive conversations, qualify leads, answer questions, and support customers 24/7.",
              },
              {
                icon: Sparkles,
                title: "Smooth Onboarding",
                text: "Get started quickly with an easy setup process designed for growing businesses.",
              },
              {
                icon: CreditCard,
                title: "Transparent Pricing",
                text: "Simple pricing with no unnecessary complexity or unexpected platform fees.",
              },
              {
                icon: MessageCircle,
                title: "Business Support",
                text: "Get the support you need to build better WhatsApp workflows and customer journeys.",
              },
            ].map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf9ef] text-[#159447]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHATSAPP FEATURES
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
              WhatsApp Business Platform
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Everything You Need to Run WhatsApp Efficiently
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Turn your WhatsApp account into a complete customer engagement,
              sales, and support platform.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Megaphone,
                title: "Hassle-Free Broadcast",
                text: "Send personalized, media-rich marketing messages to segmented audiences.",
              },
              {
                icon: Workflow,
                title: "Drip Marketing",
                text: "Send sequences of WhatsApp messages automatically at the right time.",
              },
              {
                icon: CreditCard,
                title: "Collect Payments",
                text: "Share payment links and turn conversations into completed transactions.",
              },
              {
                icon: ShoppingBag,
                title: "WhatsApp Shop",
                text: "Showcase your products and create a seamless shopping experience.",
              },
              {
                icon: Sparkles,
                title: "AI-Powered WhatsApp",
                text: "Create smarter responses and accelerate customer conversations with AI.",
              },
              {
                icon: Bot,
                title: "Intelligent Chatbot",
                text: "Keep customers engaged 24/7 with automated WhatsApp conversations.",
              },
            ].map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159447]/30 hover:shadow-xl hover:shadow-[#159447]/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf9ef] text-[#159447] transition-transform group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4fff8] py-20 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#159447]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-lg shadow-[#159447]/20">
            <MessageCircle className="h-8 w-8" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            Connect Your Business.
            <span className="block text-[#159447]">
              Automate WhatsApp. Grow Faster.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Bring your favorite business tools together and create powerful
            WhatsApp experiences for your customers.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {/* =================================================
                GET STARTED NOW - OPENS POPUP
            ================================================= */}

            <button
              type="button"
              onClick={() => setShowGetStartedPopup(true)}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 font-semibold text-white shadow-lg shadow-[#159447]/20 transition hover:-translate-y-0.5 hover:bg-[#117b3b] sm:w-auto"
            >
              Get Started Now!
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="918056819125"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-7 font-semibold text-gray-700 shadow-sm transition hover:border-[#159447]/30 hover:text-[#159447] sm:w-auto"
            >
               Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          GET STARTED POPUP
      ===================================================== */}

      {showGetStartedPopup && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 px-3 py-4 backdrop-blur-sm sm:px-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowGetStartedPopup(false);
            }
          }}
        >
          <div
            className="relative max-h-[96vh] w-full max-w-[775px] overflow-y-auto rounded-[24px] bg-[#f5f5f5] shadow-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setShowGetStartedPopup(false)}
              aria-label="Close popup"
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:bg-gray-100 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="px-6 pb-8 pt-9 sm:px-10 sm:pb-10 sm:pt-10">
              {/* =================================================
                  POPUP HEADING
              ================================================= */}

              <h2 className="pr-14 text-3xl font-bold tracking-tight text-black sm:text-[38px]">
                Ready to Get Started?
              </h2>

              <p className="mt-4 max-w-[650px] text-lg leading-8 text-black sm:text-[26px] sm:leading-[1.8]">
                Fill in your details and our team will be in touch within 48
                hours.
              </p>

              {/* =================================================
                  PARTNERSHIP DROPDOWN
              ================================================= */}

              <div className="mt-7">
                <select
                  defaultValue=""
                  className="h-[65px] w-full appearance-none rounded-lg border border-[#08a99f] bg-white px-4 text-base text-gray-500 outline-none transition focus:ring-4 focus:ring-[#08a99f]/10 sm:text-[20px]"
                >
                  <option value="" disabled>
                    Select the partnership you wish to apply for
                  </option>

                  <option value="business">
                    Business Partnership
                  </option>

                  <option value="technology">
                    Technology Partnership
                  </option>

                  <option value="reseller">
                    Reseller Partnership
                  </option>

                  <option value="agency">
                    Agency Partnership
                  </option>
                </select>
              </div>

              {/* =================================================
                  COMPANY + NAME
              ================================================= */}

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="h-[60px] w-full rounded-lg border border-transparent bg-white px-4 text-base text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#08a99f] focus:ring-4 focus:ring-[#08a99f]/10 sm:text-[20px]"
                />

                <input
                  type="text"
                  placeholder="Name"
                  className="h-[60px] w-full rounded-lg border border-transparent bg-white px-4 text-base text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#08a99f] focus:ring-4 focus:ring-[#08a99f]/10 sm:text-[20px]"
                />
              </div>

              {/* =================================================
                  EMAIL + COUNTRY + PHONE
              ================================================= */}

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_98px_1.35fr]">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-[60px] w-full rounded-lg border border-transparent bg-white px-4 text-base text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#08a99f] focus:ring-4 focus:ring-[#08a99f]/10 sm:text-[20px]"
                />

                <select
                  defaultValue="+91"
                  className="h-[60px] w-full rounded-lg border border-transparent bg-white px-3 text-base text-gray-700 outline-none focus:border-[#08a99f] focus:ring-4 focus:ring-[#08a99f]/10 sm:text-[18px]"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+971">+971</option>
                  <option value="+65">+65</option>
                </select>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-[60px] w-full rounded-lg border border-transparent bg-white px-4 text-base text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#08a99f] focus:ring-4 focus:ring-[#08a99f]/10 sm:text-[20px]"
                />
              </div>

              {/* =================================================
                  CAPTCHA
              ================================================= */}

              <div className="mt-6 flex h-[118px] w-full max-w-[475px] items-center justify-between border border-gray-300 bg-white px-5 shadow-sm sm:px-5">
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    aria-label="I'm not a robot"
                    onClick={() =>
                      setCaptchaChecked(!captchaChecked)
                    }
                    className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 transition ${
                      captchaChecked
                        ? "border-[#159447] bg-[#159447]"
                        : "border-gray-500 bg-white"
                    }`}
                  >
                    {captchaChecked && (
                      <Check className="h-6 w-6 text-white" />
                    )}
                  </button>

                  <span className="text-base text-gray-800 sm:text-[19px]">
                    I'm not a robot
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-[38px] leading-none text-blue-500">
                    ↻
                  </div>

                  <span className="mt-2 text-xs text-gray-500">
                    reCAPTCHA
                  </span>
                </div>
              </div>

              {/* =================================================
                  TERMS & CONDITIONS
              ================================================= */}

              <label className="mt-7 flex cursor-pointer items-center gap-4">
                <button
                  type="button"
                  aria-label="Accept Terms and Conditions"
                  onClick={() =>
                    setTermsAccepted(!termsAccepted)
                  }
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition ${
                    termsAccepted
                      ? "border-[#159447] bg-[#159447]"
                      : "border-gray-500 bg-white"
                  }`}
                >
                  {termsAccepted && (
                    <Check className="h-3.5 w-3.5 text-white" />
                  )}
                </button>

                <span className="text-base text-black sm:text-[20px]">
                  I agree to the Terms &amp; Conditions
                </span>
              </label>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================= */}

              <button
                type="button"
                disabled={!captchaChecked || !termsAccepted}
                onClick={() => {
                  if (!captchaChecked || !termsAccepted) return;

                  alert(
                    "Thank you! Your details have been submitted. Our team will be in touch within 48 hours."
                  );

                  setShowGetStartedPopup(false);
                  setCaptchaChecked(false);
                  setTermsAccepted(false);
                }}
                className={`mt-7 flex h-[62px] w-full items-center justify-center rounded-lg text-xl font-bold text-white transition sm:text-[28px] ${
                  captchaChecked && termsAccepted
                    ? "bg-[#08aa9f] hover:bg-[#07968c]"
                    : "cursor-not-allowed bg-[#08aa9f]/60"
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </div>
  );
}