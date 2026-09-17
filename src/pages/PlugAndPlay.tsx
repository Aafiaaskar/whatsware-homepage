import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";

import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Search,
  Sparkles,
  X,
  Zap,
  Database,
  CreditCard,
  ShoppingBag,
  CalendarDays,
  Truck,
  Megaphone,
  Workflow,
  Bot,
  MessageCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   TYPES
========================================================= */

type Language = "en" | "ta";

type Integration = {
  name: string;
  slug: string;
  website: string;
  category:
    | "CRM"
    | "Payments"
    | "E-commerce"
    | "Accounting"
    | "Marketing"
    | "Scheduler"
    | "Logistics"
    | "Connectors";
  description: string;
  badge: "Native" | "API Powered";
  logo: string;
};

/* =========================================================
   INTEGRATION DATA — ALL 39
========================================================= */

const integrations: Integration[] = [
  /* ---------------- CRM ---------------- */

  {
    name: "Zoho CRM",
    slug: "zoho-crm",
    website: "https://www.zoho.com/crm/",
    category: "CRM",
    description:
      "Sync leads, contacts, and customer conversations with WhatsApp automatically.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/zoho/E42527",
  },

  {
    name: "HubSpot",
    slug: "hubspot",
    website: "https://www.hubspot.com/",
    category: "CRM",
    description:
      "Connect HubSpot with WhatsApp to manage conversations and nurture leads.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/hubspot/FF7A59",
  },

  {
    name: "Salesforce",
    slug: "salesforce",
    website: "https://www.salesforce.com/",
    category: "CRM",
    description:
      "Bring WhatsApp conversations and customer engagement directly into Salesforce.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/salesforce/00A1E0",
  },

  {
    name: "LeadSquared",
    slug: "leadsquared",
    website: "https://www.leadsquared.com/",
    category: "CRM",
    description:
      "Engage, follow up, and convert your leads on WhatsApp with LeadSquared.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=leadsquared.com&sz=128",
  },

  {
    name: "Freshworks CRM",
    slug: "freshworks-crm",
    website: "https://www.freshworks.com/crm/",
    category: "CRM",
    description:
      "Connect your customer data with WhatsApp for faster and smarter engagement.",
    badge: "Native",
    logo: "https://www.google.com/s2/favicons?domain=freshworks.com&sz=128",
  },

  {
    name: "Zoho Bigin",
    slug: "zoho-bigin",
    website: "https://www.zoho.com/bigin/",
    category: "CRM",
    description:
      "Connect your sales pipeline with WhatsApp and automate customer communication.",
    badge: "Native",
    logo: "https://www.google.com/s2/favicons?domain=zoho.com&sz=128",
  },

  {
    name: "Odoo",
    slug: "odoo",
    website: "https://www.odoo.com/",
    category: "CRM",
    description:
      "Send automated notifications, alerts, and customer updates from Odoo through WhatsApp.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/odoo/714B67",
  },

  {
    name: "Kylas",
    slug: "kylas",
    website: "https://kylas.io/",
    category: "CRM",
    description:
      "Extend your Kylas CRM workflow with powerful WhatsApp communication.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=kylas.io&sz=128",
  },

  {
    name: "Corefactors",
    slug: "corefactors",
    website: "https://www.corefactors.in/",
    category: "CRM",
    description:
      "Manage prospect and customer conversations directly through your CRM workflow.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=corefactors.in&sz=128",
  },

  {
    name: "KONDESK",
    slug: "kondesk",
    website: "https://www.kondesk.com/",
    category: "CRM",
    description:
      "Connect your customer management workflow with WhatsApp automation.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=kondesk.com&sz=128",
  },

  {
    name: "LEDSAK",
    slug: "ledsak",
    website: "https://www.ledsak.com/",
    category: "CRM",
    description:
      "Engage, nurture, and convert leads through WhatsApp-powered automation.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=ledsak.com&sz=128",
  },

  /* ---------------- PAYMENTS ---------------- */

  {
    name: "Razorpay",
    slug: "razorpay",
    website: "https://razorpay.com/",
    category: "Payments",
    description:
      "Collect payments directly through WhatsApp and simplify your payment journey.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/razorpay/528FF0",
  },

  {
    name: "Cashfree",
    slug: "cashfree",
    website: "https://www.cashfree.com/",
    category: "Payments",
    description:
      "Accept and share payment links through WhatsApp with a seamless experience.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/cashfree/00A86B",
  },

  {
    name: "PayU",
    slug: "payu",
    website: "https://payu.in/",
    category: "Payments",
    description:
      "Connect PayU with WhatsApp to make payment collection faster and easier.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=payu.in&sz=128",
  },

  {
    name: "Stripe",
    slug: "stripe",
    website: "https://stripe.com/",
    category: "Payments",
    description:
      "Share payment experiences with customers through automated WhatsApp journeys.",
    badge: "API Powered",
    logo: "https://cdn.simpleicons.org/stripe/635BFF",
  },

  {
    name: "WhatsApp Pay",
    slug: "whatsapp-pay",
    website: "https://www.whatsapp.com/payments/",
    category: "Payments",
    description:
      "Enable convenient payment experiences for customers directly on WhatsApp.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/whatsapp/25D366",
  },

  {
    name: "Instamojo",
    slug: "instamojo",
    website: "https://www.instamojo.com/",
    category: "Payments",
    description:
      "Share payment links and automate payment-related customer communication.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=instamojo.com&sz=128",
  },

  /* ---------------- E-COMMERCE ---------------- */

  {
    name: "Shopify",
    slug: "shopify",
    website: "https://www.shopify.com/",
    category: "E-commerce",
    description:
      "Send order updates, abandoned cart alerts, and customer notifications on WhatsApp.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/shopify/95BF47",
  },

  {
    name: "WooCommerce",
    slug: "woocommerce",
    website: "https://woocommerce.com/",
    category: "E-commerce",
    description:
      "Connect your WooCommerce store with WhatsApp for automated customer updates.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/woocommerce/96588A",
  },

  {
    name: "Judge.me",
    slug: "judge-me",
    website: "https://judge.me/",
    category: "E-commerce",
    description:
      "Connect customer reviews and engagement workflows with WhatsApp.",
    badge: "Native",
    logo: "https://www.google.com/s2/favicons?domain=judge.me&sz=128",
  },

  {
    name: "Return Prime",
    slug: "return-prime",
    website: "https://returnprime.com/",
    category: "E-commerce",
    description:
      "Keep customers informed about returns and post-purchase experiences on WhatsApp.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=returnprime.com&sz=128",
  },

  {
    name: "Shopaccino",
    slug: "shopaccino",
    website: "https://www.shopaccino.com/",
    category: "E-commerce",
    description:
      "Connect your online store with WhatsApp and automate customer communication.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=shopaccino.com&sz=128",
  },

  {
    name: "VasyERP",
    slug: "vasyerp",
    website: "https://www.vasyerp.com/",
    category: "E-commerce",
    description:
      "Connect business operations with WhatsApp notifications and automation.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=vasyerp.com&sz=128",
  },

  /* ---------------- ACCOUNTING ---------------- */

  {
    name: "Zoho Books",
    slug: "zoho-books",
    website: "https://www.zoho.com/books/",
    category: "Accounting",
    description:
      "Streamline accounting notifications, invoices, and customer communication through WhatsApp.",
    badge: "Native",
    logo: "https://www.google.com/s2/favicons?domain=zoho.com&sz=128",
  },

  {
    name: "TallyPrime",
    slug: "tallyprime",
    website: "https://tallysolutions.com/tally-prime/",
    category: "Accounting",
    description:
      "Connect TallyPrime with WhatsApp to automate business and payment notifications.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=tallysolutions.com&sz=128",
  },

  {
    name: "Wafeq",
    slug: "wafeq",
    website: "https://wafeq.com/",
    category: "Accounting",
    description:
      "Connect accounting workflows with WhatsApp for faster customer communication.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=wafeq.com&sz=128",
  },

  /* ---------------- MARKETING ---------------- */

  {
    name: "Facebook Leads",
    slug: "facebook-leads",
    website: "https://www.facebook.com/business/",
    category: "Marketing",
    description:
      "Push Facebook leads directly into WhatsApp and follow up instantly.",
    badge: "API Powered",
    logo: "https://cdn.simpleicons.org/facebook/1877F2",
  },

  {
    name: "MoEngage",
    slug: "moengage",
    website: "https://www.moengage.com/",
    category: "Marketing",
    description:
      "Turn customer engagement insights into personalized WhatsApp journeys.",
    badge: "Native",
    logo: "https://www.google.com/s2/favicons?domain=moengage.com&sz=128",
  },

  {
    name: "WebEngage",
    slug: "webengage",
    website: "https://webengage.com/",
    category: "Marketing",
    description:
      "Send automated WhatsApp nudges and personalized customer engagement campaigns.",
    badge: "Native",
    logo: "https://www.google.com/s2/favicons?domain=webengage.com&sz=128",
  },

  {
    name: "CleverTap",
    slug: "clevertap",
    website: "https://clevertap.com/",
    category: "Marketing",
    description:
      "Connect customer engagement data with WhatsApp automation.",
    badge: "Native",
    logo: "https://www.google.com/s2/favicons?domain=clevertap.com&sz=128",
  },

  /* ---------------- SCHEDULER ---------------- */

  {
    name: "Calendly",
    slug: "calendly",
    website: "https://calendly.com/",
    category: "Scheduler",
    description:
      "Send booking confirmations and appointment reminders through WhatsApp.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/calendly/006BFF",
  },

  {
    name: "Zoho Bookings",
    slug: "zoho-bookings",
    website: "https://www.zoho.com/bookings/",
    category: "Scheduler",
    description:
      "Connect your booking calendar with WhatsApp notifications and reminders.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=zoho.com&sz=128",
  },

  {
    name: "Zoho Meetings",
    slug: "zoho-meetings",
    website: "https://www.zoho.com/meeting/",
    category: "Scheduler",
    description:
      "Manage meeting registrations and reminders through WhatsApp.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=zoho.com&sz=128",
  },

  /* ---------------- LOGISTICS ---------------- */

  {
    name: "Shiprocket",
    slug: "shiprocket",
    website: "https://www.shiprocket.in/",
    category: "Logistics",
    description:
      "Send timely shipping, tracking, and delivery alerts to customers on WhatsApp.",
    badge: "Native",
    logo: "https://www.google.com/s2/favicons?domain=shiprocket.in&sz=128",
  },

  /* ---------------- CONNECTORS ---------------- */

  {
    name: "Google Sheets",
    slug: "google-sheets",
    website: "https://www.google.com/sheets/about/",
    category: "Connectors",
    description:
      "Sync customer data with Google Sheets and eliminate repetitive manual work.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/googlesheets/34A853",
  },

  {
    name: "Pabbly Connect",
    slug: "pabbly-connect",
    website: "https://www.pabbly.com/connect/",
    category: "Connectors",
    description:
      "Connect WhatsApp with the tools you use every day through powerful workflows.",
    badge: "Native",
    logo: "https://www.google.com/s2/favicons?domain=pabbly.com&sz=128",
  },

  {
    name: "Zapier",
    slug: "zapier",
    website: "https://zapier.com/",
    category: "Connectors",
    description:
      "Connect your WhatsApp account with thousands of apps and automate repetitive tasks.",
    badge: "Native",
    logo: "https://cdn.simpleicons.org/zapier/FF4A00",
  },

  {
    name: "Make",
    slug: "make",
    website: "https://www.make.com/",
    category: "Connectors",
    description:
      "Build powerful visual automation workflows between WhatsApp and your business tools.",
    badge: "API Powered",
    logo: "https://cdn.simpleicons.org/make/6D00CC",
  },

  {
    name: "ViaSocket",
    slug: "viasocket",
    website: "https://viasocket.com/",
    category: "Connectors",
    description:
      "Connect WhatsApp with thousands of applications using powerful automation.",
    badge: "API Powered",
    logo: "https://www.google.com/s2/favicons?domain=viasocket.com&sz=128",
  },
];

/* =========================================================
   FEATURED ROW
   10 CARDS FROM THE 39-INTEGRATION DIRECTORY
========================================================= */

const featuredNames = [
  "Shopify",
  "Zoho CRM",
  "Razorpay",
  "HubSpot",
  "Google Sheets",
  "Salesforce",
  "Odoo",
  "CleverTap",
  "Zapier",
  "Make",
];

const featuredIntegrations = featuredNames
  .map((name) => integrations.find((item) => item.name === name))
  .filter(Boolean) as Integration[];

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
   TRANSLATIONS
========================================================= */

const translations = {
  en: {
    heroBadge: "WhatsWare Integrations",
    heroTitle: "Powerful WhatsApp Integrations",
    heroAccent: "Everything Working Together",
    heroDescription:
      "Connect WhatsWare with the platforms your business already uses. Automate workflows, sync data and create better customer experiences through WhatsApp.",
    getStarted: "Get Started",
    noSetup: "No setup fee",
    noCard: "No credit card required",

    featuredLabel: "POWERFUL CONNECTIONS",
    featuredTitle: "Your favourite tools. Working together.",
    featuredDescription:
      "Connect WhatsWare with the platforms your business already uses and create a seamless customer experience.",
    hoverPause: "Hover over the integrations to pause",

    learnMore: "Visit Website",

    directoryLabel: "INTEGRATION DIRECTORY",
    directoryTitle: "Connect all your favourite tools",
    directoryDescription:
      "Choose from powerful integrations across CRM, marketing, commerce, automation, payments and more.",
    searchPlaceholder: "Search integrations...",
    noIntegrations: "No integrations found",
    tryAnother: "Try another search or category.",

    requestTitle: "Can't find what you're looking for?",
    requestDescription:
      "Tell us which platform you want to connect and our team will help you find the right integration.",
    requestButton: "Request an integration",

    reasonsLabel: "MORE REASONS TO CHOOSE WHATSWARE",
    reasonsTitle:
      "Everything you need to grow your business on WhatsApp.",
    reasonsDescription:
      "Combine integrations, automation and customer engagement tools to create a complete WhatsApp business experience.",

    metaTitle: "Access to Meta's APIs",
    metaText:
      "Leverage direct Meta APIs and get access to the latest WhatsApp Business API features.",

    scaleTitle: "Scalable Infrastructure",
    scaleText:
      "Built to help growing businesses scale their customer support and engagement.",

    aiTitle: "AI-powered Business Platform",
    aiText:
      "Use WhatsWare AI Agents, Chatbots and intelligent automation to acquire, engage and support customers.",

    setupTitle: "Smooth onboarding & easy setup",
    setupText:
      "Minimize operational disruption and deploy powerful WhatsApp solutions in a few simple steps.",

    pricingTitle: "Highly competitive pricing",
    pricingText:
      "Transparent pricing with no hidden costs and no surprises.",

    supportTitle: "Industry Leading Support",
    supportText:
      "Access premium customer support whenever your team needs help.",

    categories: {
      All: "All",
      CRM: "CRM",
      Payments: "Payments",
      "E-commerce": "E-commerce",
      Accounting: "Accounting",
      Marketing: "Marketing",
      Scheduler: "Scheduler",
      Logistics: "Logistics",
      Connectors: "Connectors",
    },
  },

  ta: {
    heroBadge: "WhatsWare ஒருங்கிணைப்புகள்",
    heroTitle: "சக்திவாய்ந்த WhatsApp ஒருங்கிணைப்புகள்",
    heroAccent: "அனைத்தும் ஒன்றாக செயல்படும்",
    heroDescription:
      "உங்கள் வணிகம் ஏற்கனவே பயன்படுத்தும் தளங்களுடன் WhatsWare-ஐ இணைக்கவும். பணிச்சூழல்களை தானியக்கமாக்கி, தரவை ஒத்திசைத்து, WhatsApp மூலம் சிறந்த வாடிக்கையாளர் அனுபவத்தை உருவாக்குங்கள்.",
    getStarted: "தொடங்குங்கள்",
    noSetup: "அமைப்பு கட்டணம் இல்லை",
    noCard: "கிரெடிட் கார்டு தேவையில்லை",

    featuredLabel: "சக்திவாய்ந்த இணைப்புகள்",
    featuredTitle:
      "உங்களுக்குப் பிடித்த கருவிகள். ஒன்றாக செயல்படும்.",
    featuredDescription:
      "உங்கள் வணிகம் ஏற்கனவே பயன்படுத்தும் தளங்களுடன் WhatsWare-ஐ இணைத்து தடையற்ற வாடிக்கையாளர் அனுபவத்தை உருவாக்குங்கள்.",
    hoverPause:
      "ஒருங்கிணைப்புகளின் மீது மவுஸை வைத்தால் நிறுத்தப்படும்",

    learnMore: "வலைத்தளத்தைப் பார்வையிடவும்",

    directoryLabel: "ஒருங்கிணைப்பு பட்டியல்",
    directoryTitle:
      "உங்களுக்குப் பிடித்த அனைத்து கருவிகளையும் இணைக்கவும்",
    directoryDescription:
      "CRM, மார்க்கெட்டிங், காமர்ஸ், ஆட்டோமேஷன், பணப்பரிவர்த்தனைகள் மற்றும் பலவற்றிற்கான ஒருங்கிணைப்புகளைத் தேர்வு செய்யுங்கள்.",
    searchPlaceholder: "ஒருங்கிணைப்புகளைத் தேடுங்கள்...",
    noIntegrations: "ஒருங்கிணைப்புகள் எதுவும் கிடைக்கவில்லை",
    tryAnother:
      "வேறு தேடல் அல்லது வகையை முயற்சிக்கவும்.",

    requestTitle:
      "நீங்கள் தேடும் ஒருங்கிணைப்பு கிடைக்கவில்லையா?",
    requestDescription:
      "நீங்கள் இணைக்க விரும்பும் தளத்தைத் தெரிவியுங்கள். சரியான ஒருங்கிணைப்பைத் தேர்வு செய்ய எங்கள் குழு உதவும்.",
    requestButton: "ஒருங்கிணைப்பைக் கோருங்கள்",

    reasonsLabel:
      "WHATSWARE-ஐ தேர்வு செய்வதற்கான கூடுதல் காரணங்கள்",
    reasonsTitle:
      "WhatsApp மூலம் உங்கள் வணிகத்தை வளர்க்க தேவையான அனைத்தும்.",
    reasonsDescription:
      "ஒருங்கிணைப்புகள், ஆட்டோமேஷன் மற்றும் வாடிக்கையாளர் ஈடுபாட்டு கருவிகளை இணைத்து முழுமையான WhatsApp வணிக அனுபவத்தை உருவாக்குங்கள்.",

    metaTitle: "Meta API-களுக்கான அணுகல்",
    metaText:
      "நேரடி Meta API-களைப் பயன்படுத்தி சமீபத்திய WhatsApp Business API அம்சங்களைப் பெறுங்கள்.",

    scaleTitle: "வளரக்கூடிய உள்கட்டமைப்பு",
    scaleText:
      "வளர்ந்து வரும் வணிகங்களின் வாடிக்கையாளர் ஆதரவு மற்றும் ஈடுபாட்டை அளவிட உதவும் உள்கட்டமைப்பு.",

    aiTitle: "AI அடிப்படையிலான வணிக தளம்",
    aiText:
      "WhatsWare AI Agents, Chatbots மற்றும் intelligent automation மூலம் வாடிக்கையாளர்களை ஈர்த்து, ஈடுபடுத்தி ஆதரிக்கவும்.",

    setupTitle: "எளிதான onboarding & setup",
    setupText:
      "சில எளிய படிகளில் சக்திவாய்ந்த WhatsApp தீர்வுகளை செயல்படுத்துங்கள்.",

    pricingTitle: "போட்டி விலைகள்",
    pricingText:
      "மறைக்கப்பட்ட கட்டணங்கள் இல்லாத வெளிப்படையான விலை நிர்ணயம்.",

    supportTitle: "சிறந்த வாடிக்கையாளர் ஆதரவு",
    supportText:
      "உங்கள் குழுவிற்கு உதவி தேவைப்படும் போதெல்லாம் சிறந்த ஆதரவைப் பெறுங்கள்.",

    categories: {
      All: "அனைத்தும்",
      CRM: "CRM",
      Payments: "பணம் செலுத்துதல்",
      "E-commerce": "E-commerce",
      Accounting: "கணக்கியல்",
      Marketing: "மார்க்கெட்டிங்",
      Scheduler: "அட்டவணை",
      Logistics: "லாஜிஸ்டிக்ஸ்",
      Connectors: "இணைப்புகள்",
    },
  },
};

/* =========================================================
   LOGO
========================================================= */

function IntegrationLogo({
  integration,
  large = false,
}: {
  integration: Integration;
  large?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  const letters = integration.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`${
        large ? "h-16 w-16 text-xl" : "h-14 w-14 text-sm"
      } flex shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white font-black text-[#159447] shadow-sm`}
    >
      {!failed ? (
        <img
          src={integration.logo}
          alt={`${integration.name} logo`}
          className="max-h-10 max-w-[48px] object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        letters
      )}
    </div>
  );
}

/* =========================================================
   EXTERNAL LINK
========================================================= */

function ExternalIntegrationLink({
  integration,
  children,
  className = "",
  tabIndex,
}: {
  integration: Integration;
  children: React.ReactNode;
  className?: string;
  tabIndex?: number;
}) {
  return (
    <a
      href={integration.website}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      className={className}
      aria-label={`Visit ${integration.name} website`}
    >
      {children}
    </a>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PlugAndPlay() {
  const { isTamil } = useLanguage();

  const language: Language = isTamil ? "ta" : "en";
  const t = translations[language];

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const carouselRef =
    useRef<HTMLDivElement | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  /* =======================================================
     CONTINUOUS SINGLE-ROW CAROUSEL
  ======================================================= */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    let frameId = 0;
    let lastTime = performance.now();

    const speed = 42;

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        const firstGroup =
          carousel.querySelector<HTMLElement>(
            "[data-integration-group]"
          );

        if (firstGroup) {
          carousel.scrollLeft += speed * delta;

          const groupWidth =
            firstGroup.offsetWidth;

          if (
            groupWidth > 0 &&
            carousel.scrollLeft >= groupWidth
          ) {
            carousel.scrollLeft -= groupWidth;
          }
        }
      }

      frameId =
        window.requestAnimationFrame(animate);
    };

    frameId =
      window.requestAnimationFrame(animate);

    return () =>
      window.cancelAnimationFrame(frameId);
  }, [isPaused]);

  /* =======================================================
     ARROWS
  ======================================================= */

  const moveCarousel = (
    direction: "left" | "right"
  ) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard =
      carousel.querySelector<HTMLElement>(
        "[data-integration-card]"
      );

    if (!firstCard) return;

    const amount =
      firstCard.offsetWidth + 20;

    carousel.scrollBy({
      left:
        direction === "right"
          ? amount
          : -amount,
      behavior: "smooth",
    });
  };

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredIntegrations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return integrations.filter((integration) => {
      const matchesCategory =
        activeCategory === "All" ||
        integration.category === activeCategory;

      const matchesSearch =
        !query ||
        integration.name
          .toLowerCase()
          .includes(query) ||
        integration.category
          .toLowerCase()
          .includes(query) ||
        integration.description
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FFF7] via-white to-white px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12">
        <div className="pointer-events-none absolute left-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-[#159447]/10 blur-3xl" />

        <div className="pointer-events-none absolute right-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-[#7B4DFF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#159447]/20 bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">
              <Zap className="h-4 w-4" />
              {t.heroBadge}
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {t.heroTitle}

              <br />

              <span className="bg-gradient-to-r from-[#159447] to-[#7B4DFF] bg-clip-text text-transparent">
                {t.heroAccent}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
              {t.heroDescription}
            </p>

            <div className="mt-8">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-[#159447] px-8 py-4 text-sm font-black text-white shadow-xl shadow-[#159447]/20 transition-all hover:-translate-y-1 hover:bg-[#107B3D]"
              >
                {t.getStarted}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#159447]" />
                {t.noSetup}
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#159447]" />
                {t.noCard}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SINGLE MOVING ROW
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 flex flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#159447]">
                {t.featuredLabel}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {t.featuredTitle}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                {t.featuredDescription}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => moveCarousel("left")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#159447] hover:text-[#159447] hover:shadow-md"
                aria-label="Previous integrations"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => moveCarousel("right")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#159447] hover:text-[#159447] hover:shadow-md"
                aria-label="Next integrations"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* MOVING ROW */}

          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-0 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 lg:px-12"
          >
            {/* FIRST GROUP */}

            <div
              data-integration-group
              className="flex shrink-0 gap-5 pr-5"
            >
              {featuredIntegrations.map(
                (integration) => (
                  <ExternalIntegrationLink
                    key={`first-${integration.slug}`}
                    integration={integration}
                    className="group block w-[290px] min-w-[290px] sm:w-[330px] sm:min-w-[330px]"
                  >
                    <div
                      data-integration-card
                      className="relative flex min-h-[340px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#159447]/30 group-hover:shadow-2xl"
                    >
                      <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-40 w-40 rounded-full bg-[#159447]/10 blur-3xl transition-all duration-500 group-hover:bg-[#159447]/20" />

                      <div className="relative flex items-start justify-between gap-4">
                        <IntegrationLogo
                          integration={integration}
                          large
                        />

                        <span className="rounded-full bg-[#EAF9F0] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#159447]">
                          {integration.badge}
                        </span>
                      </div>

                      <h3 className="relative mt-6 text-xl font-black text-slate-950">
                        {integration.name}
                      </h3>

                      <p className="relative mt-2 text-xs font-black uppercase tracking-wider text-[#159447]">
                        {integration.category}
                      </p>

                      <p className="relative mt-4 flex-1 text-sm leading-7 text-slate-500">
                        {integration.description}
                      </p>

                      <div className="relative mt-6 flex items-center justify-between">
                        <span className="text-sm font-black text-[#159447]">
                          {t.learnMore}
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F8F5] text-[#159447] transition-all duration-300 group-hover:bg-[#159447] group-hover:text-white">
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </ExternalIntegrationLink>
                )
              )}
            </div>

            {/* SECOND IDENTICAL GROUP */}

            <div
              aria-hidden="true"
              className="flex shrink-0 gap-5 pr-5"
            >
              {featuredIntegrations.map(
                (integration) => (
                  <ExternalIntegrationLink
                    key={`second-${integration.slug}`}
                    integration={integration}
                    tabIndex={-1}
                    className="group block w-[290px] min-w-[290px] sm:w-[330px] sm:min-w-[330px]"
                  >
                    <div className="relative flex min-h-[340px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#159447]/30 group-hover:shadow-2xl">
                      <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-40 w-40 rounded-full bg-[#159447]/10 blur-3xl transition-all duration-500 group-hover:bg-[#159447]/20" />

                      <div className="relative flex items-start justify-between gap-4">
                        <IntegrationLogo
                          integration={integration}
                          large
                        />

                        <span className="rounded-full bg-[#EAF9F0] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#159447]">
                          {integration.badge}
                        </span>
                      </div>

                      <h3 className="relative mt-6 text-xl font-black text-slate-950">
                        {integration.name}
                      </h3>

                      <p className="relative mt-2 text-xs font-black uppercase tracking-wider text-[#159447]">
                        {integration.category}
                      </p>

                      <p className="relative mt-4 flex-1 text-sm leading-7 text-slate-500">
                        {integration.description}
                      </p>

                      <div className="relative mt-6 flex items-center justify-between">
                        <span className="text-sm font-black text-[#159447]">
                          {t.learnMore}
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F8F5] text-[#159447] transition-all duration-300 group-hover:bg-[#159447] group-hover:text-white">
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </ExternalIntegrationLink>
                )
              )}
            </div>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#159447]" />
            {t.hoverPause}
          </div>
        </div>
      </section>

      {/* =====================================================
          DIRECTORY
      ===================================================== */}

      <section className="bg-[#F7FAF8] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#159447]">
              {t.directoryLabel}
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              {t.directoryTitle}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              {t.directoryDescription}
            </p>
          </div>

          {/* SEARCH */}

          <div className="mx-auto mt-9 max-w-xl">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder={t.searchPlaceholder}
                className="h-14 w-full rounded-full border border-slate-200 bg-white pl-14 pr-12 text-sm outline-none transition focus:border-[#159447] focus:ring-4 focus:ring-[#159447]/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* CATEGORY */}

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const active =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.name)
                  }
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    active
                      ? "bg-[#159447] text-white shadow-lg shadow-[#159447]/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#159447]/40 hover:text-[#159447]"
                  }`}
                >
                  <Icon className="h-4 w-4" />

                  {
                    t.categories[
                      category.name as keyof typeof t.categories
                    ]
                  }
                </button>
              );
            })}
          </div>

          {/* DIRECTORY CARDS */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredIntegrations.map(
              (integration) => (
                <ExternalIntegrationLink
                  key={`${integration.name}-${integration.category}`}
                  integration={integration}
                  className="group"
                >
                  <div className="flex min-h-[330px] flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#159447]/30 group-hover:shadow-xl">
                    <div className="flex items-start justify-between gap-3">
                      <IntegrationLogo
                        integration={integration}
                      />

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wide ${
                          integration.badge ===
                          "Native"
                            ? "bg-[#EAF9F0] text-[#159447]"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {integration.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-slate-950">
                      {integration.name}
                    </h3>

                    <p className="mt-1 text-xs font-black uppercase tracking-wide text-slate-400">
                      {integration.category}
                    </p>

                    <p className="mt-4 flex-1 text-sm leading-6 text-slate-500">
                      {integration.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-sm font-black text-[#159447]">
                      <span>{t.learnMore}</span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F8F5] transition group-hover:bg-[#159447] group-hover:text-white">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </ExternalIntegrationLink>
              )
            )}
          </div>

          {/* NO RESULTS */}

          {filteredIntegrations.length === 0 && (
            <div className="py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <Search className="h-7 w-7 text-slate-400" />
              </div>

              <h3 className="mt-5 text-xl font-black">
                {t.noIntegrations}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {t.tryAnother}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-6 rounded-full bg-[#159447] px-6 py-3 text-sm font-bold text-white"
              >
                {t.categories.All}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          REQUEST INTEGRATION
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#10251A] px-6 py-14 text-center shadow-2xl sm:px-12">
          <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[#159447]/20 blur-3xl" />

          <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#159447]">
            <Workflow className="h-7 w-7 text-white" />
          </div>

          <h2 className="relative mt-6 text-3xl font-black text-white sm:text-4xl">
            {t.requestTitle}
          </h2>

          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            {t.requestDescription}
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScqMd_kej2WvSN1kAMMWNVzmF7CTl2yi4xnAQfGUR5YXTt0A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-[#10251A] transition hover:-translate-y-1 hover:bg-[#E7FBF3]"
          >
            {t.requestButton}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* =====================================================
          MORE REASONS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F7FAF8] px-5 py-20 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-[#159447]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-[#7B4DFF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#159447]">
              {t.reasonsLabel}
            </p>

            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">
              {t.reasonsTitle}
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              {t.reasonsDescription}
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Database,
                title: t.metaTitle,
                text: t.metaText,
              },
              {
                icon: Zap,
                title: t.scaleTitle,
                text: t.scaleText,
              },
              {
                icon: Bot,
                title: t.aiTitle,
                text: t.aiText,
              },
              {
                icon: Workflow,
                title: t.setupTitle,
                text: t.setupText,
              },
              {
                icon: CreditCard,
                title: t.pricingTitle,
                text: t.pricingText,
              },
              {
                icon: MessageCircle,
                title: t.supportTitle,
                text: t.supportText,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7FBF3] text-[#159447] transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
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

      <section className="relative overflow-hidden bg-[#F0FFF7] px-5 py-20 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#159447]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-lg shadow-[#159447]/20">
            <MessageCircle className="h-8 w-8" />
          </div>

          <h2 className="mt-7 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Connect Your Business.
            <span className="block text-[#159447]">
              Automate WhatsApp. Grow Faster.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Bring your favorite business tools together and create powerful
            WhatsApp experiences for your customers.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-[#159447] px-8 py-4 text-sm font-black text-white shadow-xl shadow-[#159447]/20 transition hover:-translate-y-1 hover:bg-[#107B3D]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}