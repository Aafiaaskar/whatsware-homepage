import { useState, type SVGProps } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =========================================================
   TYPES
========================================================= */

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

type BrandLogo = (props: SVGProps<SVGSVGElement>) => JSX.Element;

interface Integration {
  name: string;
  Logo: BrandLogo;
  color: string;
}

/* =========================================================
   INLINE BRAND LOGOS
   No external URLs
   No react-icons
========================================================= */

const WhatsAppLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="24" r="22" fill="#25D366" />
    <path
      d="M14.5 35.5L16.7 29.2C15.3 27 14.7 24.4 15.1 21.8C15.8 17.3 19.4 13.8 23.9 13.1C29.9 12.2 35.5 16.1 36.6 22C37.8 28.7 32.7 34.8 26.1 34.8C23.8 34.8 21.6 34.2 19.8 33.1L14.5 35.5Z"
      fill="white"
    />
    <path
      d="M20.2 18.7C20.6 18.1 21.1 18.1 21.6 18.2L23 21.4C23.2 21.8 23.1 22.2 22.8 22.5L21.7 23.5C22.6 25.4 24.1 26.8 26 27.7L27 26.6C27.3 26.3 27.7 26.2 28.1 26.4L31.3 27.8C31.7 28 31.8 28.5 31.6 28.9C31.1 30 30.1 30.6 29 30.6C24.2 30.1 18.8 24.7 18.3 19.9C18.3 19.4 19 18.9 20.2 18.7Z"
      fill="#25D366"
    />
  </svg>
);

const InstagramLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <defs>
      <linearGradient id="instagramGradientPricing" x1="5" y1="43" x2="43" y2="5">
        <stop offset="0" stopColor="#FFDC80" />
        <stop offset=".35" stopColor="#F77737" />
        <stop offset=".65" stopColor="#E1306C" />
        <stop offset="1" stopColor="#833AB4" />
      </linearGradient>
    </defs>

    <rect
      x="4"
      y="4"
      width="40"
      height="40"
      rx="11"
      fill="url(#instagramGradientPricing)"
    />

    <rect
      x="13"
      y="13"
      width="22"
      height="22"
      rx="7"
      fill="none"
      stroke="white"
      strokeWidth="3"
    />

    <circle
      cx="24"
      cy="24"
      r="5"
      fill="none"
      stroke="white"
      strokeWidth="3"
    />

    <circle cx="33.5" cy="14.8" r="2" fill="white" />
  </svg>
);

const ShopifyLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M13 14.5L16.5 11H32L35 14.5L38 17V39H10V17L13 14.5Z"
      fill="#95BF47"
    />

    <path
      d="M17 14C17 10.7 19.7 8 23 8H25C28.3 8 31 10.7 31 14"
      fill="none"
      stroke="#5E8E3E"
      strokeWidth="2.5"
    />

    <text
      x="24"
      y="31"
      textAnchor="middle"
      fontSize="14"
      fontWeight="800"
      fill="white"
      fontFamily="Arial"
    >
      S
    </text>
  </svg>
);

const SalesforceLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M15 34C10.6 34 7 30.8 7 26.7C7 23 9.8 20 13.6 19.5C14.9 15.3 18.8 12 23.4 12C27.1 12 30.3 14.1 31.9 17.2C32.5 17.1 33.1 17 33.8 17C38 17 41.5 20.4 41.5 24.5C41.5 28.5 38.4 31.7 34.4 32C33.3 35.1 30.4 37 27.1 37C24.9 37 22.9 36.1 21.5 34.6C19.8 35.5 17.5 36 15 34Z"
      fill="#00A1E0"
    />

    <text
      x="24"
      y="29"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="800"
      fill="white"
      fontFamily="Arial"
    >
      salesforce
    </text>
  </svg>
);

const GoogleSheetsLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M10 5H29L38 14V43H10V5Z" fill="#34A853" />

    <path d="M29 5V14H38" fill="#A8DAB5" />

    <path
      d="M16 20H32M16 26H32M16 32H32M16 38H32M16 20V38M24 20V38M32 20V38"
      stroke="white"
      strokeWidth="1.8"
    />
  </svg>
);

const ZapierLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <g fill="#FF4A00">
      <rect x="21" y="5" width="6" height="14" rx="1" />
      <rect x="21" y="29" width="6" height="14" rx="1" />
      <rect x="5" y="21" width="14" height="6" rx="1" />
      <rect x="29" y="21" width="14" height="6" rx="1" />
      <rect
        x="11"
        y="11"
        width="6"
        height="14"
        rx="1"
        transform="rotate(-45 14 18)"
      />
      <rect
        x="31"
        y="23"
        width="6"
        height="14"
        rx="1"
        transform="rotate(-45 34 30)"
      />
      <rect
        x="31"
        y="11"
        width="6"
        height="14"
        rx="1"
        transform="rotate(45 34 18)"
      />
      <rect
        x="11"
        y="23"
        width="6"
        height="14"
        rx="1"
        transform="rotate(45 14 30)"
      />
    </g>
  </svg>
);

const WooCommerceLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="24" cy="24" r="21" fill="#96588A" />

    <path
      d="M10 18C12 18 13 19 14 22L16 29L20 20C20.5 18.8 21.5 18 23 18C24.5 18 25.5 19 26 20L29 29L33 20C34 18 35 18 37 18"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StripeLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <rect x="4" y="8" width="40" height="32" rx="7" fill="#635BFF" />

    <text
      x="24"
      y="29"
      textAnchor="middle"
      fontSize="15"
      fontWeight="800"
      fontStyle="italic"
      fill="white"
      fontFamily="Arial"
    >
      stripe
    </text>
  </svg>
);

const GoogleAnalyticsLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <rect
      x="9"
      y="24"
      width="7"
      height="17"
      rx="3.5"
      fill="#F9AB00"
    />

    <rect
      x="21"
      y="15"
      width="7"
      height="26"
      rx="3.5"
      fill="#E37400"
    />

    <rect
      x="33"
      y="7"
      width="7"
      height="34"
      rx="3.5"
      fill="#F9AB00"
    />
  </svg>
);

const PostmanLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="24" cy="24" r="21" fill="#FF6C37" />

    <circle
      cx="24"
      cy="24"
      r="13"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
    />

    <path
      d="M18 30L30 18M23 18H30V25"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SwaggerLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M24 3L42 13V35L24 45L6 35V13L24 3Z"
      fill="#85EA2D"
    />

    <text
      x="24"
      y="29"
      textAnchor="middle"
      fontSize="11"
      fontWeight="900"
      fill="#173B0A"
      fontFamily="Arial"
    >
      S
    </text>
  </svg>
);

const HubSpotLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="24" cy="26" r="7" fill="#FF7A59" />
    <circle cx="10" cy="12" r="5" fill="#FF7A59" />
    <circle cx="38" cy="12" r="5" fill="#FF7A59" />
    <circle cx="39" cy="39" r="5" fill="#FF7A59" />

    <path
      d="M14 15L19 21M29 21L34 15M29 30L35 36"
      stroke="#FF7A59"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const MailchimpLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <rect x="4" y="7" width="40" height="34" rx="8" fill="#FFE01B" />

    <path
      d="M12 29C10 26 11 22 14 20C17 18 20 19 22 21C24 18 28 18 30 21C34 19 38 22 37 26C39 29 36 33 33 33H15C12 33 10 31 12 29Z"
      fill="#241C15"
    />

    <circle cx="20" cy="25" r="2" fill="#FFE01B" />
    <circle cx="29" cy="25" r="2" fill="#FFE01B" />
  </svg>
);

const WordPressLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="24" cy="24" r="21" fill="#21759B" />

    <text
      x="24"
      y="32"
      textAnchor="middle"
      fontSize="27"
      fontWeight="900"
      fontFamily="Georgia"
      fill="white"
    >
      W
    </text>
  </svg>
);

const FacebookLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="24" cy="24" r="21" fill="#1877F2" />

    <text
      x="27"
      y="37"
      textAnchor="middle"
      fontSize="31"
      fontWeight="900"
      fontFamily="Arial"
      fill="white"
    >
      f
    </text>
  </svg>
);

const GoogleLogo: BrandLogo = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <text
      x="24"
      y="35"
      textAnchor="middle"
      fontSize="31"
      fontWeight="700"
      fontFamily="Arial"
      fill="#4285F4"
    >
      G
    </text>
  </svg>
);

/* =========================================================
   INTEGRATIONS
========================================================= */

const integrations: Integration[] = [
  {
    name: "WhatsApp Business",
    Logo: WhatsAppLogo,
    color: "#25D366",
  },
  {
    name: "Instagram",
    Logo: InstagramLogo,
    color: "#E4405F",
  },
  {
    name: "Shopify",
    Logo: ShopifyLogo,
    color: "#95BF47",
  },
  {
    name: "Salesforce",
    Logo: SalesforceLogo,
    color: "#00A1E0",
  },
  {
    name: "Google Sheets",
    Logo: GoogleSheetsLogo,
    color: "#34A853",
  },
  {
    name: "Zapier",
    Logo: ZapierLogo,
    color: "#FF4A00",
  },
  {
    name: "WooCommerce",
    Logo: WooCommerceLogo,
    color: "#96588A",
  },
  {
    name: "Stripe",
    Logo: StripeLogo,
    color: "#635BFF",
  },
  {
    name: "Google Analytics",
    Logo: GoogleAnalyticsLogo,
    color: "#E37400",
  },
  {
    name: "Postman",
    Logo: PostmanLogo,
    color: "#FF6C37",
  },
  {
    name: "Swagger",
    Logo: SwaggerLogo,
    color: "#85EA2D",
  },
  {
    name: "HubSpot",
    Logo: HubSpotLogo,
    color: "#FF7A59",
  },
  {
    name: "Mailchimp",
    Logo: MailchimpLogo,
    color: "#FFE01B",
  },
  {
    name: "WordPress",
    Logo: WordPressLogo,
    color: "#21759B",
  },
  {
    name: "Facebook",
    Logo: FacebookLogo,
    color: "#1877F2",
  },
  {
    name: "Google",
    Logo: GoogleLogo,
    color: "#4285F4",
  },
];

/* =========================================================
   PLANS
========================================================= */

const plans: Record<CategoryKey, Plan[]> = {
  marketing: [
    {
      name: "Spark",
      description: "Essential WhatsApp marketing automation for growing businesses.",
      price: "$300",
      priceNote: "per year",
      color: "#159447",
      button: "Get Spark",
      icon: "✦",
    },
    {
      name: "Boost",
      description: "Complete marketing automation with setup and campaign support.",
      price: "$600",
      priceNote: "per year",
      color: "#075E54",
      popular: true,
      button: "Choose Boost",
      icon: "⚡",
    },
    {
      name: "Titan",
      description: "Advanced automation, notifications, integrations and optimization.",
      price: "$2,000",
      priceNote: "per year",
      color: "#111827",
      button: "Choose Titan",
      icon: "♛",
    },
    {
      name: "Customizable",
      description: "A tailored WhatsApp solution designed around your business.",
      price: "Custom",
      priceNote: "Let's talk",
      color: "#7C3AED",
      button: "Contact Us",
      icon: "◆",
    },
  ],

  aiAgents: [
    {
      name: "Spark",
      description: "Start automating customer conversations with WhatsApp AI.",
      price: "$300",
      priceNote: "per year",
      color: "#159447",
      button: "Get Spark",
      icon: "✦",
    },
    {
      name: "Boost",
      description: "Powerful AI automation for faster customer engagement.",
      price: "$600",
      priceNote: "per year",
      color: "#075E54",
      popular: true,
      button: "Choose Boost",
      icon: "⚡",
    },
    {
      name: "Titan",
      description: "Enterprise-grade AI agents with advanced automation.",
      price: "$2,000",
      priceNote: "per year",
      color: "#111827",
      button: "Choose Titan",
      icon: "♛",
    },
    {
      name: "Customizable",
      description: "Build an AI automation solution specifically for your workflow.",
      price: "Custom",
      priceNote: "Let's talk",
      color: "#7C3AED",
      button: "Contact Us",
      icon: "◆",
    },
  ],
};

/* =========================================================
   FEATURE DATA
========================================================= */

const marketingFeatures: FeatureSection[] = [
  {
    title: "Marketing & Support",
    rows: [
      {
        feature: "WhatsApp Business Setup",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "✓",
      },
      {
        feature: "Bulk Broadcast",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Festival Campaigns",
        spark: "—",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Click-to-WhatsApp Ads",
        spark: "—",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Lead Capture",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Welcome Messages",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Keyword Auto-Reply",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Auto Follow-ups",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
    ],
  },

  {
    title: "Business API & Setup",
    rows: [
      {
        feature: "Business API Setup",
        spark: "—",
        boost: "✓",
        titan: "✓",
        customizable: "✓",
      },
      {
        feature: "Facebook Verification",
        spark: "—",
        boost: "✓",
        titan: "✓",
        customizable: "✓",
      },
      {
        feature: "Number Registration",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "✓",
      },
      {
        feature: "Panel Access",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "✓",
      },
    ],
  },
];

const aiAgentFeatures: FeatureSection[] = [
  {
    title: "WhatsApp AI Agents",
    rows: [
      {
        feature: "AI Customer Conversations",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "AI Lead Qualification",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "AI FAQs",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "24/7 Automated Replies",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Conversation Routing",
        spark: "—",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Human Handoff",
        spark: "—",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Advanced AI Workflows",
        spark: "—",
        boost: "—",
        titan: "✓",
        customizable: "Custom",
      },
    ],
  },

  {
    title: "Automation",
    rows: [
      {
        feature: "Workflow Automation",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Automated Follow-ups",
        spark: "✓",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "Lead Routing",
        spark: "—",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
      {
        feature: "CRM Integration",
        spark: "—",
        boost: "✓",
        titan: "✓",
        customizable: "Custom",
      },
    ],
  },
];

const capacityRows: FeatureRow[] = [
  {
    feature: "Campaign Management",
    spark: "Basic",
    boost: "Advanced",
    titan: "Advanced",
    customizable: "Custom",
  },
  {
    feature: "Automation",
    spark: "Basic",
    boost: "Advanced",
    titan: "Advanced",
    customizable: "Custom",
  },
  {
    feature: "Integrations",
    spark: "Limited",
    boost: "Multiple",
    titan: "Advanced",
    customizable: "Custom",
  },
  {
    feature: "Support",
    spark: "Standard",
    boost: "Priority",
    titan: "Premium",
    customizable: "Dedicated",
  },
];

/* =========================================================
   ADD-ONS
========================================================= */

const addOns = {
  spark: [
    "Chatbot Setup",
    "Campaign Setup",
    "Lead Funnel",
    "API Integration",
    "CRM Integration",
    "Payment Integration",
    "Green Tick Assistance",
  ],

  boost: [
    "API & Setup",
    "Business API Setup",
    "FB Verification",
    "Number Registration",
    "Panel Access",
    "Bulk Broadcast",
    "Festival Campaigns",
    "Click-to-WA Ads",
    "Lead Capture",
    "Welcome Messages",
    "Keyword Auto-Reply",
    "Auto Follow-ups",
  ],

  titan: [
    "Appointment Reminders",
    "Order Confirmation",
    "Delivery Updates",
    "Renewal Reminders",
    "Website & Landing Page",
    "Google Sheets",
    "Google Ads / Meta Ads",
    "Payment Gateway",
    "Technical Support",
    "Campaign Support",
    "Monthly Optimization",
  ],
};

/* =========================================================
   SMALL ICON
========================================================= */

function CheckIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-black text-[#159447]">
      ✓
    </span>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Pricing() {
  const [category, setCategory] = useState<CategoryKey>("marketing");

  const activePlans = plans[category];

  const activeFeatures =
    category === "marketing" ? marketingFeatures : aiAgentFeatures;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFFDF5] text-slate-900">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-20 pt-28">
        <div className="absolute left-1/2 top-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-green-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-bold text-[#159447]">
            <span className="text-lg">✦</span>
            Simple & Transparent Pricing
          </div>

          <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
            Choose the plan that
            <span className="block text-[#159447]">
              grows with your business.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Powerful WhatsApp automation, AI agents, marketing and customer
            support tools — without complicated pricing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm">
              ✓ Yearly plans
            </div>

            <div className="rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm">
              ✓ Business automation
            </div>

            <div className="rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm">
              ✓ WhatsApp-first
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY SWITCHER
      ===================================================== */}

      <section className="sticky top-0 z-30 border-y border-slate-200/70 bg-[#FFFDF5]/95 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl justify-center">
          <div className="grid w-full max-w-2xl grid-cols-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-lg">
            <button
              type="button"
              onClick={() => setCategory("marketing")}
              className={`rounded-xl px-4 py-4 text-sm font-bold transition-all md:text-base ${
                category === "marketing"
                  ? "bg-[#075E54] text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              Marketing & Support Hub
            </button>

            <button
              type="button"
              onClick={() => setCategory("aiAgents")}
              className={`rounded-xl px-4 py-4 text-sm font-bold transition-all md:text-base ${
                category === "aiAgents"
                  ? "bg-[#075E54] text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              WhatsApp AI Agents
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING CARDS
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {category === "marketing"
                ? "Marketing & Support"
                : "AI Automation"}
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Plans built for every stage
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Start small, scale quickly and add advanced automation whenever
              your business needs it.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {activePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col overflow-hidden rounded-[28px] border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? "border-[#159447] shadow-xl shadow-green-100"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#159447] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                )}

                <div className="p-7">
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                    style={{
                      backgroundColor: `${plan.color}15`,
                      color: plan.color,
                    }}
                  >
                    {plan.icon}
                  </div>

                  <h3 className="text-2xl font-black">{plan.name}</h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                    {plan.description}
                  </p>

                  <div className="mt-7">
                    <div
                      className="text-4xl font-black"
                      style={{ color: plan.color }}
                    >
                      {plan.price}
                    </div>

                    <div className="mt-1 text-sm font-medium text-slate-500">
                      {plan.priceNote}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-7 w-full rounded-xl px-5 py-3.5 text-sm font-bold transition-all hover:scale-[1.02]"
                    style={{
                      backgroundColor: plan.color,
                      color: "white",
                    }}
                  >
                    {plan.button}
                  </button>
                </div>

                <div className="mt-auto border-t border-slate-100 bg-slate-50/70 p-7">
                  <p className="mb-4 text-xs font-black uppercase tracking-wider text-slate-400">
                    What's included
                  </p>

                  <div className="space-y-3">
                    {[
                      "WhatsApp Business",
                      "Automation",
                      "Business Support",
                      category === "marketing"
                        ? "Marketing Tools"
                        : "AI Automation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium"
                      >
                        <CheckIcon />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Compare Plans
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Everything side by side
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              See exactly what each WhatsWare plan includes.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-[2fr_repeat(4,1fr)] border-b border-slate-200 bg-slate-50">
                <div className="p-5 text-sm font-black text-slate-700">
                  Features
                </div>

                {activePlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="p-5 text-center text-sm font-black"
                  >
                    {plan.name}
                  </div>
                ))}
              </div>

              {activeFeatures.map((section) => (
                <div key={section.title}>
                  <div className="grid grid-cols-[2fr_repeat(4,1fr)] bg-green-50/60">
                    <div className="col-span-5 px-5 py-4 text-sm font-black text-[#075E54]">
                      {section.title}
                    </div>
                  </div>

                  {section.rows.map((row) => (
                    <div
                      key={row.feature}
                      className="grid grid-cols-[2fr_repeat(4,1fr)] border-t border-slate-100"
                    >
                      <div className="p-5 text-sm font-medium text-slate-700">
                        {row.feature}
                      </div>

                      <div className="p-5 text-center text-sm font-semibold">
                        {row.spark}
                      </div>

                      <div className="p-5 text-center text-sm font-semibold">
                        {row.boost}
                      </div>

                      <div className="p-5 text-center text-sm font-semibold">
                        {row.titan}
                      </div>

                      <div className="p-5 text-center text-sm font-semibold">
                        {row.customizable}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPACITY
      ===================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Plan Capabilities
            </span>

            <h2 className="mt-3 text-4xl font-black">
              Built to scale with you
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="min-w-[850px]">
              <div className="grid grid-cols-[2fr_repeat(4,1fr)] bg-[#075E54] text-white">
                <div className="p-5 text-sm font-bold">Capability</div>
                <div className="p-5 text-center text-sm font-bold">Spark</div>
                <div className="p-5 text-center text-sm font-bold">Boost</div>
                <div className="p-5 text-center text-sm font-bold">Titan</div>
                <div className="p-5 text-center text-sm font-bold">
                  Customizable
                </div>
              </div>

              {capacityRows.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-[2fr_repeat(4,1fr)] border-t border-slate-100"
                >
                  <div className="p-5 text-sm font-semibold">
                    {row.feature}
                  </div>

                  <div className="p-5 text-center text-sm text-slate-600">
                    {row.spark}
                  </div>

                  <div className="p-5 text-center text-sm text-slate-600">
                    {row.boost}
                  </div>

                  <div className="p-5 text-center text-sm text-slate-600">
                    {row.titan}
                  </div>

                  <div className="p-5 text-center text-sm text-slate-600">
                    {row.customizable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ADD-ONS
      ===================================================== */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Services
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Add more power when you need it
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Expand your WhatsWare setup with implementation, marketing,
              automation and support services.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* SPARK */}
            <div className="rounded-3xl border border-green-100 bg-green-50/50 p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-[#159447]">
                    Spark
                  </p>

                  <h3 className="mt-1 text-2xl font-black">
                    Add-on Services
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                  ✦
                </div>
              </div>

              <div className="space-y-3">
                {addOns.spark.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-sm"
                  >
                    <span className="text-[#159447]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* BOOST */}
            <div className="rounded-3xl border border-orange-100 bg-orange-50/50 p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-orange-600">
                    Boost
                  </p>

                  <h3 className="mt-1 text-2xl font-black">
                    Complete Services
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                  ⚡
                </div>
              </div>

              <div className="space-y-3">
                {addOns.boost.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-sm"
                  >
                    <span className="text-orange-500">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* TITAN */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Titan
                  </p>

                  <h3 className="mt-1 text-2xl font-black">
                    Enterprise Services
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                  ♛
                </div>
              </div>

              <div className="space-y-3">
                {addOns.titan.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-sm"
                  >
                    <span className="text-slate-700">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATIONS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#FFFDF5] py-24">
        <div className="mx-auto mb-14 max-w-4xl px-6 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-[#159447]">
            30+ Powerful Integrations
          </span>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Connect Everything.
            <span className="block text-[#159447]">
              Automate Anything.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Connect WhatsWare with the tools your business already uses and
            create one powerful automation ecosystem.
          </p>
        </div>

        {/* Moving track */}
        <div className="relative overflow-hidden">
          <div
            className="flex w-max gap-6"
            style={{
              animation: "pricingLogoMove 35s linear infinite",
            }}
          >
            {[...integrations, ...integrations].map(
              (integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="group flex w-[190px] shrink-0 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-5 py-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
                >
                  <div
                    className="mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{
                      boxShadow: `0 8px 25px ${integration.color}18`,
                    }}
                  >
                    <integration.Logo
                      width={54}
                      height={54}
                      aria-label={integration.name}
                    />
                  </div>

                  <p className="text-center text-sm font-bold text-slate-800">
                    {integration.name}
                  </p>

                  <div
                    className="mt-2 h-1 w-6 rounded-full transition-all duration-300 group-hover:w-10"
                    style={{
                      backgroundColor: integration.color,
                    }}
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FFFDF5] to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FFFDF5] to-transparent" />

        <style>{`
          @keyframes pricingLogoMove {
            0% {
              transform: translateX(-50%);
            }

            100% {
              transform: translateX(0%);
            }
          }
        `}</style>
      </section>

      {/* =====================================================
          INTEGRATION DESCRIPTION
      ===================================================== */}

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-xl">
              🔗
            </div>

            <h3 className="text-xl font-black">
              Connect your stack
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Bring your existing CRM, ecommerce, analytics and marketing
              tools into one automation ecosystem.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-xl">
              ⚙️
            </div>

            <h3 className="text-xl font-black">
              Automate repetitive work
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Build workflows that move customer data and conversations
              between your favorite business tools.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-xl">
              📈
            </div>

            <h3 className="text-xl font-black">
              Grow faster
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Turn conversations into leads, sales and long-term customer
              relationships.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#075E54] px-7 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur">
              ✦
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Ready to automate your business?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-green-50/80 md:text-lg">
              Start with WhatsWare and turn WhatsApp conversations into a
              powerful growth engine for your business.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                className="rounded-xl bg-white px-7 py-4 text-sm font-black text-[#075E54] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}