import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Database,
  Headphones,
  Link2,
  Megaphone,
  MessageCircle,
  Search,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
  Zap,
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
  category: string;
  type: "Native" | "API-Powered";
  description: string;
  logo: string;
  icon: React.ElementType;
  iconClass: string;
  bgClass: string;
};

type Feature = {
  title: string;
  description: string;
  second: string;
  icon: React.ElementType;
};

type WhyItem = {
  icon: React.ElementType;
  title: string;
  text: string;
};

/* =========================================================
   FEATURED MOVING INTEGRATIONS
========================================================= */

const featuredIntegrations: Integration[] = [
  {
    name: "Shopify",
    slug: "shopify",
    category: "D2C",
    type: "Native",
    description:
      "Connect Shopify to WhatsApp to share order updates, abandoned cart alerts and customer notifications.",
    logo: "https://cdn.simpleicons.org/shopify/95BF47",
    icon: ShoppingCart,
    iconClass: "text-green-600",
    bgClass: "bg-green-50",
  },

  {
    name: "CleverTap",
    slug: "clevertap",
    category: "Marketing",
    type: "Native",
    description:
      "Connect CleverTap with WhatsWare to create personalized WhatsApp engagement journeys.",
    logo: "https://www.google.com/s2/favicons?domain=clevertap.com&sz=128",
    icon: Megaphone,
    iconClass: "text-purple-600",
    bgClass: "bg-purple-50",
  },

  {
    name: "MoEngage",
    slug: "moengage",
    category: "Marketing",
    type: "Native",
    description:
      "Make customer engagement more effective by connecting MoEngage campaigns with WhatsApp automation.",
    logo: "https://www.google.com/s2/favicons?domain=moengage.com&sz=128",
    icon: Megaphone,
    iconClass: "text-pink-600",
    bgClass: "bg-pink-50",
  },

  {
    name: "WebEngage",
    slug: "webengage",
    category: "Marketing",
    type: "Native",
    description:
      "Elevate customer engagement by sending automated WhatsApp messages and personalized nudges.",
    logo: "https://www.google.com/s2/favicons?domain=webengage.com&sz=128",
    icon: Megaphone,
    iconClass: "text-purple-600",
    bgClass: "bg-purple-50",
  },

  {
    name: "Zoho Flow",
    slug: "zoho-flow",
    category: "Automation",
    type: "Native",
    description:
      "Build automated workflows between WhatsWare and your favourite Zoho applications using Zoho Flow.",
    logo: "https://www.google.com/s2/favicons?domain=zoho.com&sz=128",
    icon: Workflow,
    iconClass: "text-red-500",
    bgClass: "bg-red-50",
  },

  {
    name: "Zoho Integration",
    slug: "zoho-integration",
    category: "CRM",
    type: "Native",
    description:
      "Connect your Zoho ecosystem with WhatsWare and keep customer conversations and business data connected.",
    logo: "https://cdn.simpleicons.org/zoho/E42527",
    icon: Users,
    iconClass: "text-red-500",
    bgClass: "bg-red-50",
  },

  {
    name: "Pabbly",
    slug: "pabbly",
    category: "Automation",
    type: "Native",
    description:
      "Connect WhatsWare with the tools you use every day through simple Pabbly-powered workflows.",
    logo: "https://www.google.com/s2/favicons?domain=pabbly.com&sz=128",
    icon: Link2,
    iconClass: "text-orange-600",
    bgClass: "bg-orange-50",
  },

  {
    name: "Zapier",
    slug: "zapier",
    category: "Automation",
    type: "Native",
    description:
      "Connect your software stack with WhatsWare and automate repetitive business tasks through Zapier.",
    logo: "https://cdn.simpleicons.org/zapier/FF4A00",
    icon: Zap,
    iconClass: "text-orange-600",
    bgClass: "bg-orange-50",
  },

  {
    name: "Google Sheets",
    slug: "google-sheets",
    category: "Connectors",
    type: "Native",
    description:
      "Eliminate manual data entry by connecting Google Sheets with your WhatsWare workflows.",
    logo: "https://cdn.simpleicons.org/googlesheets/34A853",
    icon: Database,
    iconClass: "text-emerald-600",
    bgClass: "bg-emerald-50",
  },

  {
    name: "WooCommerce",
    slug: "woocommerce",
    category: "D2C",
    type: "Native",
    description:
      "Connect your WooCommerce store with WhatsApp for powerful customer engagement and order communication.",
    logo: "https://cdn.simpleicons.org/woocommerce/96588A",
    icon: ShoppingBag,
    iconClass: "text-purple-600",
    bgClass: "bg-purple-50",
  },

  {
    name: "HubSpot",
    slug: "hubspot",
    category: "CRM",
    type: "Native",
    description:
      "Unify customer communication by integrating HubSpot with your WhatsApp Business account.",
    logo: "https://cdn.simpleicons.org/hubspot/FF7A59",
    icon: Database,
    iconClass: "text-orange-500",
    bgClass: "bg-orange-50",
  },
];

/* =========================================================
   DIRECTORY INTEGRATIONS
========================================================= */

const directoryIntegrations: Integration[] = [
  ...featuredIntegrations,

  {
    name: "Odoo",
    slug: "odoo",
    category: "CRM",
    type: "Native",
    description:
      "Send automated notifications and alerts to your Odoo contacts through WhatsApp.",
    logo: "https://cdn.simpleicons.org/odoo/714B67",
    icon: Settings2,
    iconClass: "text-purple-600",
    bgClass: "bg-purple-50",
  },

  {
    name: "Zoho CRM",
    slug: "zoho-crm",
    category: "CRM",
    type: "Native",
    description:
      "Get a single source of truth with a two-way sync between WhatsWare and Zoho CRM.",
    logo: "https://cdn.simpleicons.org/zoho/E42527",
    icon: Users,
    iconClass: "text-red-500",
    bgClass: "bg-red-50",
  },

  {
    name: "Razorpay",
    slug: "razorpay",
    category: "Payments",
    type: "Native",
    description:
      "Collect payments on WhatsApp by integrating your Razorpay account.",
    logo: "https://cdn.simpleicons.org/razorpay/528FF0",
    icon: CreditCard,
    iconClass: "text-blue-600",
    bgClass: "bg-blue-50",
  },

  {
    name: "Cashfree",
    slug: "cashfree",
    category: "Payments",
    type: "Native",
    description:
      "Accept payments on WhatsApp by connecting your Cashfree account.",
    logo: "https://cdn.simpleicons.org/cashfree/00A86B",
    icon: CreditCard,
    iconClass: "text-sky-600",
    bgClass: "bg-sky-50",
  },

  {
    name: "Shiprocket",
    slug: "shiprocket",
    category: "Logistics",
    type: "Native",
    description:
      "Send timely shipping alerts to your customers on WhatsApp.",
    logo: "https://www.google.com/s2/favicons?domain=shiprocket.in&sz=128",
    icon: ShoppingCart,
    iconClass: "text-orange-600",
    bgClass: "bg-orange-50",
  },

  {
    name: "Salesforce",
    slug: "salesforce",
    category: "CRM",
    type: "Native",
    description:
      "Bring Salesforce customer conversations and WhatsApp engagement together.",
    logo: "https://cdn.simpleicons.org/salesforce/00A1E0",
    icon: Users,
    iconClass: "text-blue-600",
    bgClass: "bg-blue-50",
  },

  {
    name: "Freshdesk",
    slug: "freshdesk",
    category: "Support",
    type: "Native",
    description:
      "Connect customer support conversations with WhatsApp for faster service.",
    logo: "https://cdn.simpleicons.org/freshdesk/25C16F",
    icon: Headphones,
    iconClass: "text-green-600",
    bgClass: "bg-green-50",
  },

  {
    name: "Make",
    slug: "make",
    category: "Automation",
    type: "API-Powered",
    description:
      "Build powerful automated workflows between WhatsWare and your favourite apps.",
    logo: "https://cdn.simpleicons.org/make/6D00CC",
    icon: Workflow,
    iconClass: "text-purple-600",
    bgClass: "bg-purple-50",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "CRM",
  "Marketing",
  "D2C",
  "Automation",
  "Connectors",
  "Payments",
  "Logistics",
  "Support",
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

    learnMore: "Learn More",

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

    reasonsTitle: "Everything you need to grow your business on WhatsApp.",

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

    faqLabel: "FAQS",

    faqTitle: "Have more questions?",

    demoText: "Join a live demo and see WhatsWare in action.",

    liveDemo: "Get a Live Demo",

    finalTitle: "Get Started with WhatsWare Today",

    finalDescription:
      "Turn WhatsApp into a powerful customer engagement and business communication platform.",

    freeTrial: "Try WhatsWare for Free",

    bookDemo: "Book a Demo",

    categories: {
      All: "All",
      CRM: "CRM",
      Marketing: "Marketing",
      D2C: "D2C",
      Automation: "Automation",
      Connectors: "Connectors",
      Payments: "Payments",
      Logistics: "Logistics",
      Support: "Support",
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

    featuredTitle: "உங்களுக்குப் பிடித்த கருவிகள். ஒன்றாக செயல்படும்.",

    featuredDescription:
      "உங்கள் வணிகம் ஏற்கனவே பயன்படுத்தும் தளங்களுடன் WhatsWare-ஐ இணைத்து தடையற்ற வாடிக்கையாளர் அனுபவத்தை உருவாக்குங்கள்.",

    hoverPause: "ஒருங்கிணைப்புகளின் மீது மவுஸை வைத்தால் நிறுத்தப்படும்",

    learnMore: "மேலும் அறிக",

    directoryLabel: "ஒருங்கிணைப்பு பட்டியல்",

    directoryTitle: "உங்களுக்குப் பிடித்த அனைத்து கருவிகளையும் இணைக்கவும்",

    directoryDescription:
      "CRM, மார்க்கெட்டிங், காமர்ஸ், ஆட்டோமேஷன், பணப்பரிவர்த்தனைகள் மற்றும் பலவற்றிற்கான ஒருங்கிணைப்புகளைத் தேர்வு செய்யுங்கள்.",

    searchPlaceholder: "ஒருங்கிணைப்புகளைத் தேடுங்கள்...",

    noIntegrations: "ஒருங்கிணைப்புகள் எதுவும் கிடைக்கவில்லை",

    tryAnother: "வேறு தேடல் அல்லது வகையை முயற்சிக்கவும்.",

    requestTitle: "நீங்கள் தேடும் ஒருங்கிணைப்பு கிடைக்கவில்லையா?",

    requestDescription:
      "நீங்கள் இணைக்க விரும்பும் தளத்தைத் தெரிவியுங்கள். சரியான ஒருங்கிணைப்பைத் தேர்வு செய்ய எங்கள் குழு உதவும்.",

    requestButton: "ஒருங்கிணைப்பைக் கோருங்கள்",

    reasonsLabel: "WHATSWARE-ஐ தேர்வு செய்வதற்கான கூடுதல் காரணங்கள்",

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

    faqLabel: "அடிக்கடி கேட்கப்படும் கேள்விகள்",

    faqTitle: "மேலும் கேள்விகள் உள்ளதா?",

    demoText:
      "நேரடி demo-வில் WhatsWare எப்படி செயல்படுகிறது என்பதைப் பாருங்கள்.",

    liveDemo: "Live Demo பெறுங்கள்",

    finalTitle: "இன்றே WhatsWare-ஐ தொடங்குங்கள்",

    finalDescription:
      "WhatsApp-ஐ சக்திவாய்ந்த வாடிக்கையாளர் ஈடுபாடு மற்றும் வணிக தகவல்தொடர்பு தளமாக மாற்றுங்கள்.",

    freeTrial: "WhatsWare இலவசமாக முயற்சிக்கவும்",

    bookDemo: "Demo பதிவு செய்யுங்கள்",

    categories: {
      All: "அனைத்தும்",
      CRM: "CRM",
      Marketing: "மார்க்கெட்டிங்",
      D2C: "D2C",
      Automation: "ஆட்டோமேஷன்",
      Connectors: "இணைப்புகள்",
      Payments: "பணம் செலுத்துதல்",
      Logistics: "லாஜிஸ்டிக்ஸ்",
      Support: "ஆதரவு",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function Integrations() {
  const { isTamil } = useLanguage();

  const language: Language = isTamil ? "ta" : "en";

  const t = translations[language];

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const carouselRef =
    useRef<HTMLDivElement | null>(null);

  const [isPaused, setIsPaused] =
    useState(false);

  /* =======================================================
     AUTO MOVING CAROUSEL

     This is NOT a CSS-only animation.

     It physically scrolls the carousel so:
     - desktop works
     - mobile works
     - touch works
     - mouse wheel works
     - arrow buttons work
     - hover pauses movement
  ======================================================= */

  useEffect(() => {
  const carousel = carouselRef.current;

  if (!carousel) return;

  let animationFrame: number;

  const move = () => {
    if (!isPaused) {
      carousel.scrollLeft += 0.5;

      // When reaching the end, smoothly return to start
      if (
        carousel.scrollLeft >=
        carousel.scrollWidth - carousel.clientWidth
      ) {
        carousel.scrollLeft = 0;
      }
    }

    animationFrame = requestAnimationFrame(move);
  };

  animationFrame = requestAnimationFrame(move);

  return () => {
    cancelAnimationFrame(animationFrame);
  };
}, [isPaused]);
  /* =======================================================
     ARROW CONTROLS
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
    const value =
      search.toLowerCase().trim();

    return directoryIntegrations.filter(
      (integration) => {
        const categoryMatch =
          activeCategory === "All" ||
          integration.category ===
            activeCategory;

        const searchMatch =
          !value ||
          integration.name
            .toLowerCase()
            .includes(value) ||
          integration.category
            .toLowerCase()
            .includes(value) ||
          integration.description
            .toLowerCase()
            .includes(value);

        return (
          categoryMatch &&
          searchMatch
        );
      }
    );
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-[#F0FFF7]
          via-white
          to-white
          px-5
          pb-20
          pt-32
          sm:px-8
          sm:pt-36
          lg:px-12
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-10
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#159447]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-10
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#7B4DFF]/10
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#159447]/20
                bg-white
                px-4
                py-2
                text-sm
                font-bold
                text-[#159447]
                shadow-sm
              "
            >
              <Zap className="h-4 w-4" />

              {t.heroBadge}
            </div>

            <h1
              className="
                mt-6
                text-4xl
                font-black
                tracking-tight
                text-slate-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              {t.heroTitle}

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#159447]
                  to-[#7B4DFF]
                  bg-clip-text
                  text-transparent
                "
              >
                {t.heroAccent}
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                leading-8
                text-slate-500
                sm:text-lg
              "
            >
              {t.heroDescription}
            </p>

            <div className="mt-8">

              <Link
                href="/signup"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#159447]
                  px-8
                  py-4
                  text-sm
                  font-black
                  text-white
                  shadow-xl
                  shadow-[#159447]/20
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#107B3D]
                "
              >
                {t.getStarted}

                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            <div
              className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-6
                text-sm
                text-slate-500
              "
            >
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
          MOVING INTEGRATIONS
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16">

        <div className="mx-auto max-w-[1500px]">

          <div
            className="
              mb-8
              flex
              flex-col
              gap-6
              px-5
              sm:px-8
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:px-12
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[#159447]
                "
              >
                {t.featuredLabel}
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-950
                  sm:text-4xl
                "
              >
                {t.featuredTitle}
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                "
              >
                {t.featuredDescription}
              </p>

            </div>


            {/* ARROWS */}

            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={() =>
                  moveCarousel("left")
                }
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  shadow-sm
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-[#159447]
                  hover:text-[#159447]
                  hover:shadow-md
                "
                aria-label="Previous integrations"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  moveCarousel("right")
                }
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  shadow-sm
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-[#159447]
                  hover:text-[#159447]
                  hover:shadow-md
                "
                aria-label="Next integrations"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

            </div>

          </div>


          {/* =================================================
              REAL SCROLL CONTAINER
          ================================================= */}

          <div
            ref={carouselRef}
            onMouseEnter={() =>
              setIsPaused(true)
            }
            onMouseLeave={() =>
              setIsPaused(false)
            }
            className="
              flex
              gap-5
              overflow-x-auto
              scroll-smooth
              px-5
              pb-6
              sm:px-8
              lg:px-12
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {featuredIntegrations.map(
              (integration) => (
                <Link
                  key={integration.slug}
                  href={`/integrations/${integration.slug}`}
                  data-integration-card
                  className="
                    group
                    block
                    w-[290px]
                    min-w-[290px]
                    snap-start
                    sm:w-[330px]
                    sm:min-w-[330px]
                  "
                >

                  <div
                    className="
                      relative
                      flex
                      min-h-[340px]
                      flex-col
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-slate-200
                      bg-white
                      p-6
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:-translate-y-2
                      group-hover:border-[#159447]/30
                      group-hover:shadow-2xl
                    "
                  >

                    {/* glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        right-[-70px]
                        top-[-70px]
                        h-40
                        w-40
                        rounded-full
                        bg-[#159447]/10
                        blur-3xl
                        transition-all
                        duration-500
                        group-hover:bg-[#159447]/20
                      "
                    />

                    <div
                      className="
                        relative
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >

                      <div
                        className={`
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          ${integration.bgClass}
                        `}
                      >

                        <img
                          src={integration.logo}
                          alt={`${integration.name} logo`}
                          className="
                            max-h-10
                            max-w-[130px]
                            object-contain
                          "
                          loading="lazy"
                        />

                      </div>

                      <span
                        className="
                          rounded-full
                          bg-[#EAF9F0]
                          px-3
                          py-1.5
                          text-[10px]
                          font-black
                          uppercase
                          tracking-wide
                          text-[#159447]
                        "
                      >
                        {integration.type}
                      </span>

                    </div>


                    <h3
                      className="
                        relative
                        mt-6
                        text-xl
                        font-black
                        text-slate-950
                      "
                    >
                      {integration.name}
                    </h3>

                    <p
                      className="
                        relative
                        mt-2
                        text-xs
                        font-black
                        uppercase
                        tracking-wider
                        text-[#159447]
                      "
                    >
                      {integration.category}
                    </p>

                    <p
                      className="
                        relative
                        mt-4
                        flex-1
                        text-sm
                        leading-7
                        text-slate-500
                      "
                    >
                      {integration.description}
                    </p>


                    <div
                      className="
                        relative
                        mt-6
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-sm
                          font-black
                          text-[#159447]
                        "
                      >
                        {t.learnMore}
                      </span>

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F2F8F5]
                          text-[#159447]
                          transition-all
                          duration-300
                          group-hover:bg-[#159447]
                          group-hover:text-white
                        "
                      >
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>

                    </div>

                  </div>

                </Link>
              )
            )}

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

      <section
        className="
          bg-[#F7FAF8]
          px-5
          py-20
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-[#159447]
              "
            >
              {t.directoryLabel}
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-slate-950
                sm:text-4xl
              "
            >
              {t.directoryTitle}
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              {t.directoryDescription}
            </p>

          </div>


          {/* SEARCH */}

          <div className="mx-auto mt-9 max-w-xl">

            <div className="relative">

              <Search
                className="
                  absolute
                  left-5
                  top-1/2
                  h-5
                  w-5
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder={
                  t.searchPlaceholder
                }
                className="
                  h-14
                  w-full
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  pl-14
                  pr-6
                  text-sm
                  outline-none
                  transition
                  focus:border-[#159447]
                  focus:ring-4
                  focus:ring-[#159447]/10
                "
              />

            </div>

          </div>


          {/* CATEGORY */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >

            {categories.map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-bold
                    transition-all
                    ${
                      activeCategory ===
                      category
                        ? "bg-[#159447] text-white shadow-lg shadow-[#159447]/20"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-[#159447]/40 hover:text-[#159447]"
                    }
                  `}
                >
                  {
                    t.categories[
                      category as keyof typeof t.categories
                    ]
                  }
                </button>
              )
            )}

          </div>


          {/* DIRECTORY CARDS */}

          <div
            className="
              mt-12
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >

            {filteredIntegrations.map(
              (integration) => (
                <Link
                  key={integration.slug}
                  href={`/integrations/${integration.slug}`}
                  className="group"
                >

                  <div
                    className="
                      flex
                      min-h-[330px]
                      flex-col
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-5
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:border-[#159447]/30
                      group-hover:shadow-xl
                    "
                  >

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-3
                      "
                    >

                      <div
                        className={`
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          ${integration.bgClass}
                        `}
                      >

                        <img
                          src={integration.logo}
                          alt={`${integration.name} logo`}
                          className="
                            max-h-10
                            max-w-[125px]
                            object-contain
                          "
                          loading="lazy"
                        />

                      </div>

                      <span
                        className="
                          rounded-full
                          bg-[#EAF9F0]
                          px-2.5
                          py-1
                          text-[10px]
                          font-black
                          text-[#159447]
                        "
                      >
                        {integration.type}
                      </span>

                    </div>


                    <h3
                      className="
                        mt-5
                        text-lg
                        font-black
                        text-slate-950
                      "
                    >
                      {integration.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        font-black
                        uppercase
                        tracking-wide
                        text-slate-400
                      "
                    >
                      {integration.category}
                    </p>

                    <p
                      className="
                        mt-4
                        flex-1
                        text-sm
                        leading-6
                        text-slate-500
                      "
                    >
                      {integration.description}
                    </p>

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        text-sm
                        font-black
                        text-[#159447]
                      "
                    >

                      <span>
                        {t.learnMore}
                      </span>

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F2F8F5]
                          transition
                          group-hover:bg-[#159447]
                          group-hover:text-white
                        "
                      >
                        <ArrowRight className="h-4 w-4" />
                      </span>

                    </div>

                  </div>

                </Link>
              )
            )}

          </div>


          {filteredIntegrations.length ===
            0 && (
            <div className="py-20 text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-sm
                "
              >
                <Search className="h-7 w-7 text-slate-400" />
              </div>

              <h3 className="mt-5 text-xl font-black">
                {t.noIntegrations}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {t.tryAnother}
              </p>

            </div>
          )}

        </div>

      </section>


      {/* =====================================================
          REQUEST INTEGRATION
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <div
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[32px]
            bg-[#10251A]
            px-6
            py-14
            text-center
            shadow-2xl
            sm:px-12
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              left-[-100px]
              top-[-100px]
              h-72
              w-72
              rounded-full
              bg-[#159447]/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-[#159447]
            "
          >
            <Link2 className="h-7 w-7 text-white" />
          </div>

          <h2
            className="
              relative
              mt-6
              text-3xl
              font-black
              text-white
              sm:text-4xl
            "
          >
            {t.requestTitle}
          </h2>

          <p
            className="
              relative
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-white/65
              sm:text-base
            "
          >
            {t.requestDescription}
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScqMd_kej2WvSN1kAMMWNVzmF7CTl2yi4xnAQfGUR5YXTt0A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-7
              py-3.5
              text-sm
              font-black
              text-[#10251A]
              transition
              hover:-translate-y-1
              hover:bg-[#E7FBF3]
            "
          >
            {t.requestButton}

            <ArrowRight className="h-4 w-4" />
          </a>

        </div>

      </section>


      {/* =====================================================
          MORE REASONS
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#F7FAF8]
          px-5
          py-20
          sm:px-8
          lg:px-12
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-[-150px]
            top-20
            h-96
            w-96
            rounded-full
            bg-[#159447]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-150px]
            right-[-100px]
            h-96
            w-96
            rounded-full
            bg-[#7B4DFF]/10
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-[#159447]
              "
            >
              {t.reasonsLabel}
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-slate-950
                sm:text-5xl
              "
            >
              {t.reasonsTitle}
            </h2>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              {t.reasonsDescription}
            </p>

          </div>


          <div
            className="
              mt-14
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

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
                icon: Settings2,
                title: t.setupTitle,
                text: t.setupText,
              },
              {
                icon: CreditCard,
                title: t.pricingTitle,
                text: t.pricingText,
              },
              {
                icon: Headphones,
                title: t.supportTitle,
                text: t.supportText,
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-7
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#E7FBF3]
                      text-[#159447]
                      transition
                      group-hover:scale-110
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-black
                      text-slate-950
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-slate-500
                    "
                  >
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-[#159447]
              "
            >
              {t.faqLabel}
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-slate-950
                sm:text-5xl
              "
            >
              {t.faqTitle}
            </h2>

          </div>


          <div className="mt-10 space-y-4">

            <details
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
              "
            >
              <summary
                className="
                  cursor-pointer
                  list-none
                  font-black
                  text-slate-950
                "
              >
                Can I connect my existing CRM?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Yes. WhatsWare can connect with CRM, marketing,
                commerce and automation platforms to bring your
                customer workflows together.
              </p>
            </details>


            <details
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
              "
            >
              <summary
                className="
                  cursor-pointer
                  list-none
                  font-black
                  text-slate-950
                "
              >
                Can I request a new integration?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Absolutely. Use the Request an Integration button
                above and tell us which platform you want to connect.
              </p>
            </details>


            <details
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
              "
            >
              <summary
                className="
                  cursor-pointer
                  list-none
                  font-black
                  text-slate-950
                "
              >
                Do integrations work with WhatsApp automation?
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Yes. Integrations can be used with WhatsWare
                automation and customer engagement workflows.
              </p>
            </details>

          </div>


          <div className="mt-12 text-center">

            <p className="text-lg font-black text-slate-950">
              {t.demoText}
            </p>

            <Link
              href="/book-demo"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#159447]
                px-7
                py-3.5
                text-sm
                font-black
                text-white
                shadow-lg
                shadow-[#159447]/20
                transition
                hover:-translate-y-1
                hover:bg-[#107B3D]
              "
            >
              {t.liveDemo}

              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 pb-20 sm:px-8 lg:px-12">

        <div
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-br
            from-[#075E54]
            via-[#159447]
            to-[#087F3D]
            px-6
            py-16
            text-center
            shadow-2xl
            sm:px-12
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              left-[-100px]
              top-[-100px]
              h-80
              w-80
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-150px]
              right-[-100px]
              h-80
              w-80
              rounded-full
              bg-[#7B4DFF]/20
              blur-3xl
            "
          />

          <div className="relative">

            <Sparkles className="mx-auto h-10 w-10 text-white" />

            <h2
              className="
                mt-6
                text-3xl
                font-black
                text-white
                sm:text-5xl
              "
            >
              {t.finalTitle}
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-white/80
                sm:text-base
              "
            >
              {t.finalDescription}
            </p>


            <div
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >

              {[
                "Engage & Re-engage Prospects",
                "Drive Sales",
                "Deliver higher CSAT",
                "Support at Scale",
              ].map((item) => (

                <span
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-white
                    backdrop-blur
                  "
                >
                  <Check className="h-3.5 w-3.5" />
                  {item}
                </span>

              ))}

            </div>


            <div
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >

              <Link
                href="/signup"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  text-sm
                  font-black
                  text-[#075E54]
                  transition
                  hover:-translate-y-1
                  hover:bg-[#E7FBF3]
                  hover:shadow-xl
                "
              >
                {t.freeTrial}

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/book-demo"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/30
                  px-8
                  py-4
                  text-sm
                  font-black
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                {t.bookDemo}
              </Link>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}