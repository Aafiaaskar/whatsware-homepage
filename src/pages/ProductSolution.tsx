import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Users,
  Target,
  ShieldCheck,
  MessageSquareText,
  BarChart3,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import PartnershipPopup from "@/components/PartnershipPopup";
import Footer from "@/components/Footer";
import { getProductPage } from "@/data/productPages";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  en: {
    exploreFeatures: "Explore Features",
    getStarted: "Get Started",

    trust: [
      "WhatsApp Business API",
      "AI-Powered",
      "Easy to Configure",
    ],

    dashboard: {
      whatsware: "WhatsWare",
      automation: "Automation",
      collaboration: "Collaboration",
      analytics: "Analytics",
      team: "Team",
      insights: "Insights",
    },

    benefitsLabel: "WHY WHATSWARE",
    benefitsTitle1: "Built to help your",
    benefitsTitle2: "business grow",

    useCasesLabel: "USE CASES",
    useCasesTitle1: "Built for the way",
    useCasesTitle2: "your business works",

    featureStrip: [
      "WhatsApp First",
      "Easy Automation",
      "Team Collaboration",
      "Actionable Insights",
    ],

    featureDescription:
      "Built to help your team create better WhatsApp customer experiences.",

    ctaBadge: "Ready to Get Started?",
    ctaTitle1: "Turn WhatsApp into",
    ctaTitle2: "your growth engine.",

    ctaDescription:
      "Start creating smarter customer experiences with WhatsWare today.",

    getStartedFree: "Get Started",
    viewPricing: "View Pricing",

    backToProducts: "Back to Products",

    featuresLabel: "POWERFUL FEATURES",

    featuresTitle:
      "Everything you need to get more from WhatsApp",

    notFoundTitle: "Product not found",

    notFoundDescription:
      "The product page you are looking for does not exist.",
  },

  ta: {
    exploreFeatures: "அம்சங்களைப் பார்க்கவும்",
    getStarted: "தொடங்குங்கள்",

    trust: [
      "WhatsApp Business API",
      "AI மூலம் இயக்கப்படுகிறது",
      "எளிதாக அமைக்கலாம்",
    ],

    dashboard: {
      whatsware: "WhatsWare",
      automation: "தானியக்கம்",
      collaboration: "குழு ஒத்துழைப்பு",
      analytics: "பகுப்பாய்வு",
      team: "குழு",
      insights: "தகவல் அறிக்கைகள்",
    },

    benefitsLabel: "WHATSWARE ஏன்?",

    benefitsTitle1: "உங்கள் வணிகம்",
    benefitsTitle2: "வளர உதவும் வகையில் உருவாக்கப்பட்டது",

    useCasesLabel: "பயன்பாட்டு முறைகள்",

    useCasesTitle1: "உங்கள் வணிகம் செயல்படும்",
    useCasesTitle2: "விதத்திற்காக உருவாக்கப்பட்டது",

    featureStrip: [
      "WhatsApp முதன்மை",
      "எளிய தானியக்கம்",
      "குழு ஒத்துழைப்பு",
      "பயனுள்ள தகவல் அறிக்கைகள்",
    ],

    featureDescription:
      "உங்கள் குழு சிறந்த WhatsApp வாடிக்கையாளர் அனுபவங்களை உருவாக்க உதவும் வகையில் வடிவமைக்கப்பட்டுள்ளது.",

    ctaBadge: "தொடங்க தயாரா?",

    ctaTitle1: "WhatsApp-ஐ உங்கள்",
    ctaTitle2: "வளர்ச்சி இயந்திரமாக மாற்றுங்கள்.",

    ctaDescription:
      "WhatsWare மூலம் இன்று சிறந்த வாடிக்கையாளர் அனுபவங்களை உருவாக்கத் தொடங்குங்கள்.",

    getStartedFree: "இலவசமாகத் தொடங்குங்கள்",
    viewPricing: "விலைத் திட்டங்களைப் பார்க்கவும்",

    backToProducts: "தயாரிப்புகளுக்குத் திரும்பவும்",

    featuresLabel: "சக்திவாய்ந்த அம்சங்கள்",

    featuresTitle:
      "WhatsApp மூலம் அதிகம் பெற உங்களுக்குத் தேவையான அனைத்தும்",

    notFoundTitle: "தயாரிப்பு கிடைக்கவில்லை",

    notFoundDescription:
      "நீங்கள் தேடும் தயாரிப்பு பக்கம் கிடைக்கவில்லை.",
  },
};

/* =========================================================
   SAFE LOCALIZED VALUE
========================================================= */

function getLocalizedValue(
  value: any,
  language: "en" | "ta",
): string {
  if (!value) return "";

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "object") {
    return (
      value[language] ||
      value.en ||
      value.ta ||
      ""
    );
  }

  return String(value);
}

/* =========================================================
   PRODUCT-SPECIFIC TAMIL TRANSLATIONS

   These are used even if productPages.ts still contains
   English-only values.
========================================================= */

const tamilProducts: Record<
  string,
  {
    title?: string;
    shortTitle?: string;
    badge?: string;
    description?: string;
    features?: Record<string, string>;
    benefits?: Record<
      string,
      {
        title: string;
        description: string;
      }
    >;
    useCases?: Record<
      string,
      {
        title: string;
        description: string;
      }
    >;
  }
> = {
  "whatsapp-automation": {
    title: "WhatsApp தானியக்கம்",
    shortTitle: "WhatsApp தானியக்கம்",
    badge: "தானியக்கம்",
    description:
      "WhatsApp மூலம் வாடிக்கையாளர் உரையாடல்கள், முன்னணி வாடிக்கையாளர் சேகரிப்பு, பின்தொடர்தல்கள் மற்றும் தினசரி வணிக தொடர்புகளை தானியக்கமாக்குங்கள்.",
  },

  "ai-agents": {
    title: "AI உரையாடல்கள்",
    shortTitle: "AI உரையாடல்கள்",
    badge: "AI மூலம் இயக்கப்படுகிறது",
    description:
      "உங்கள் குழு முக்கியமான உரையாடல்களில் கவனம் செலுத்தும்போது, AI இயல்பான முறையில் வாடிக்கையாளர் உரையாடல்களை கையாளட்டும்.",
  },

  "workflow-builder": {
    title: "Workflow Builder",
    shortTitle: "Workflow Builder",
    badge: "தானியக்கம்",
    description:
      "சிக்கலான குறியீடுகள் இல்லாமல் சக்திவாய்ந்த வாடிக்கையாளர் பயணங்களையும் மீண்டும் மீண்டும் செய்யப்படும் வணிக செயல்முறைகளையும் உருவாக்குங்கள்.",
  },

  analytics: {
    title: "பகுப்பாய்வு",
    shortTitle: "பகுப்பாய்வு",
    badge: "தகவல் அறிக்கைகள்",
    description:
      "உங்கள் உரையாடல்கள், முன்னணி வாடிக்கையாளர்கள், பிரச்சாரங்கள் மற்றும் வாடிக்கையாளர் செயல்திறனை பயனுள்ள வணிக தகவல்களுடன் புரிந்துகொள்ளுங்கள்.",
  },

  "product-features": {
    title: "தயாரிப்பு அம்சங்கள்",
    shortTitle: "தயாரிப்பு அம்சங்கள்",
    badge: "முழுமையான தொகுப்பு",
    description:
      "WhatsApp தொடர்புகள், வாடிக்கையாளர்கள், பிரச்சாரங்கள் மற்றும் உரையாடல்களை நிர்வகிக்க உங்கள் குழுவிற்கு தேவையான அனைத்தும் ஒரே இடத்தில்.",
  },
};

/* =========================================================
   PRODUCT SOLUTION PAGE
========================================================= */

export default function ProductSolution() {
  const [showPartnershipPopup, setShowPartnershipPopup] = 
    useState(false);
    
  const { language } = useLanguage();

  const lang: "en" | "ta" =
    language === "ta" ? "ta" : "en";

  const t = translations[lang];

  /* =======================================================
     CURRENT PRODUCT
  ======================================================= */

  const pathname =
    typeof window !== "undefined"
      ? window.location.pathname
      : "";

  const slug = pathname
    .replace(/^\/products\//, "")
    .replace(/\/$/, "");

  const product = getProductPage(slug);

  /* =======================================================
     FALLBACK
  ======================================================= */

  if (!product) {
    return (
      <div
        className="min-h-screen bg-[#FFFDF5] text-[#071B35]"
        lang={lang}
      >
        <Navbar />

        <main className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="text-center max-w-xl">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#EEFBE8] flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#159447]" />
            </div>

            <h1 className="mt-6 text-4xl font-bold">
              {t.notFoundTitle}
            </h1>

            <p className="mt-4 text-[#526273]">
              {t.notFoundDescription}
            </p>

            <button
              onClick={() => {
                window.location.href = "/products";
              }}
              className="mt-7 inline-flex items-center px-6 py-3 rounded-full bg-[#159447] text-white font-semibold hover:bg-[#0e7c39] transition-all"
            >
              {t.backToProducts}

              <ArrowRight className="ml-2 w-4 h-4" />
            </button>

          </div>
        </main>

        <Footer />
      </div>
    );
  }

  /* =======================================================
     PRODUCT DATA
  ======================================================= */

  const tamilProduct =
    tamilProducts[slug] || {};

  const productTitle =
    lang === "ta" && tamilProduct.title
      ? tamilProduct.title
      : getLocalizedValue(
          product.title,
          lang,
        );

  const productShortTitle =
    lang === "ta" && tamilProduct.shortTitle
      ? tamilProduct.shortTitle
      : getLocalizedValue(
          product.shortTitle,
          lang,
        );

  const productDescription =
    lang === "ta" && tamilProduct.description
      ? tamilProduct.description
      : getLocalizedValue(
          product.heroDescription,
          lang,
        );

  const productBadge =
    lang === "ta" && tamilProduct.badge
      ? tamilProduct.badge
      : getLocalizedValue(
          product.badge,
          lang,
        );

  const ProductIcon =
    product.icon || Sparkles;

  /* =======================================================
     FEATURES
  ======================================================= */

  const features = Array.isArray(product.features)
    ? product.features
    : [];

  /* =======================================================
     BENEFITS
  ======================================================= */

  const benefits = Array.isArray(product.benefits)
    ? product.benefits
    : [];

  /* =======================================================
     USE CASES
  ======================================================= */

  const useCases = Array.isArray(product.useCases)
    ? product.useCases
    : [];

  return (
    <div
      className="min-h-screen bg-[#FFFDF5] text-[#071B35] overflow-hidden"
      lang={lang}
    >
      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">

          <div
            className="absolute top-0 left-[-180px] w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(21,148,71,0.18) 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute top-20 right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(223,247,216,0.9) 0%, transparent 70%)",
            }}
          />

          <motion.div
            className="absolute top-44 left-[12%] w-3 h-3 rounded-full bg-[#159447]/40"
            animate={{
              y: [0, -18, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-60 right-[14%] w-2 h-2 rounded-full bg-[#159447]/50"
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* LEFT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEFBE8] border border-[#DFF7D8] text-[#159447] text-sm font-semibold">

                  <Sparkles className="w-4 h-4" />

                  {productBadge}

                </div>

                <h1 className="mt-6 font-serif font-bold tracking-tight text-[#071B35] text-5xl sm:text-6xl lg:text-7xl leading-[1.04]">

                  {productTitle}

                </h1>

                <p className="mt-7 text-lg lg:text-xl text-[#526273] leading-relaxed max-w-2xl">

                  {productDescription}

                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-9">

                  <button
                    onClick={() =>
                      document
                        .getElementById(
                          "product-features",
                        )
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#159447] text-white font-semibold hover:bg-[#0e7c39] hover:shadow-xl hover:scale-[1.02] transition-all group"
                  >

                    {t.exploreFeatures}

                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />

                  </button>

                  <button
                    onClick={() => setShowPartnershipPopup(true)}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white border border-gray-200 text-[#071B35] font-semibold hover:border-[#159447] hover:text-[#159447] hover:shadow-md transition-all"
                  >

                    {t.getStarted}

                  </button>

                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-3 mt-8 text-sm text-[#526273]">

                  {t.trust.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5"
                    >

                      <CheckCircle2 className="w-4 h-4 text-[#159447]" />

                      {item}

                    </div>
                  ))}

                </div>

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="relative"
              >

                <div className="absolute inset-0 bg-[#159447]/15 blur-3xl rounded-full" />

                <div className="relative bg-white/90 backdrop-blur-xl border border-[#DFF7D8] rounded-[32px] shadow-[0_30px_90px_rgba(21,148,71,0.16)] p-5 sm:p-7">

                  {/* Browser header */}

                  <div className="flex items-center justify-between pb-5 border-b border-gray-100">

                    <div className="flex gap-1.5">

                      <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />

                    </div>

                    <div className="h-2 w-32 rounded-full bg-gray-100" />

                    <div className="w-9 h-9 rounded-xl bg-[#EEFBE8] flex items-center justify-center">

                      <ProductIcon className="w-5 h-5 text-[#159447]" />

                    </div>

                  </div>

                  {/* Main visual */}

                  <div className="pt-6">

                    <div className="flex items-center gap-4">

                      <div className="w-16 h-16 rounded-2xl bg-[#159447] flex items-center justify-center shadow-lg">

                        <ProductIcon className="w-8 h-8 text-white" />

                      </div>

                      <div>

                        <p className="text-sm text-gray-400">

                          {t.dashboard.whatsware}

                        </p>

                        <h2 className="text-xl sm:text-2xl font-bold text-[#071B35]">

                          {productShortTitle}

                        </h2>

                      </div>

                    </div>

                    {/* Feature preview */}

                    <div className="grid grid-cols-2 gap-3 mt-7">

                      {features
                        .slice(0, 6)
                        .map(
                          (
                            feature: any,
                            index: number,
                          ) => {

                            const featureText =
                              getLocalizedValue(
                                feature,
                                lang,
                              );

                            return (
                              <motion.div
                                key={
                                  featureText ||
                                  index
                                }
                                initial={{
                                  opacity: 0,
                                  y: 10,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{
                                  delay:
                                    0.5 +
                                    index *
                                      0.08,
                                }}
                                className="bg-[#F7FBF5] border border-[#E6F4E2] rounded-xl p-3"
                              >

                                <div className="flex items-start gap-2">

                                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />

                                  <span className="text-xs sm:text-sm font-medium text-[#526273]">

                                    {featureText}

                                  </span>

                                </div>

                              </motion.div>
                            );
                          },
                        )}

                    </div>

                    {/* Bottom stats */}

                    <div className="grid grid-cols-3 gap-3 mt-4">

                      <div className="bg-[#071B35] rounded-2xl p-4">

                        <Zap className="w-5 h-5 text-[#63D184]" />

                        <p className="text-white font-bold text-lg mt-3">
                          24/7
                        </p>

                        <p className="text-gray-400 text-[11px] mt-1">
                          {t.dashboard.automation}
                        </p>

                      </div>

                      <div className="bg-[#EEFBE8] rounded-2xl p-4">

                        <Users className="w-5 h-5 text-[#159447]" />

                        <p className="text-[#071B35] font-bold text-lg mt-3">
                          {t.dashboard.team}
                        </p>

                        <p className="text-[#526273] text-[11px] mt-1">
                          {t.dashboard.collaboration}
                        </p>

                      </div>

                      <div className="bg-[#F7FBF5] border border-[#E6F4E2] rounded-2xl p-4">

                        <BarChart3 className="w-5 h-5 text-[#159447]" />

                        <p className="text-[#071B35] font-bold text-lg mt-3">
                          {t.dashboard.insights}
                        </p>

                        <p className="text-[#526273] text-[11px] mt-1">
                          {t.dashboard.analytics}
                        </p>

                      </div>

                    </div>

                  </div>
                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section
          id="product-features"
          className="py-24 lg:py-32 relative"
        >

          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-[#FFFDF5]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="max-w-3xl mx-auto text-center">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="inline-flex items-center gap-2 text-[#159447] font-semibold text-sm"
              >

                <span className="w-8 h-px bg-[#159447]" />

                {t.featuresLabel}

                <span className="w-8 h-px bg-[#159447]" />

              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="font-serif text-4xl sm:text-5xl font-bold text-[#071B35] mt-5 leading-tight"
              >

                {t.featuresTitle}

              </motion.h2>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

              {features.map(
                (
                  feature: any,
                  index: number,
                ) => {

                  const featureText =
                    getLocalizedValue(
                      feature,
                      lang,
                    );

                  return (
                    <motion.div
                      key={
                        featureText ||
                        index
                      }
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        margin: "-60px",
                      }}
                      transition={{
                        delay:
                          index * 0.06,
                      }}
                      whileHover={{
                        y: -5,
                      }}
                      className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_10px_35px_rgba(7,27,53,0.04)] hover:border-[#DFF7D8] hover:shadow-[0_20px_45px_rgba(21,148,71,0.10)] transition-all"
                    >

                      <div className="w-12 h-12 rounded-xl bg-[#EEFBE8] flex items-center justify-center group-hover:bg-[#159447] transition-colors">

                        <CheckCircle2 className="w-6 h-6 text-[#159447] group-hover:text-white transition-colors" />

                      </div>

                      <h3 className="mt-5 text-lg font-bold text-[#071B35]">

                        {featureText}

                      </h3>

                      <p className="mt-2 text-sm text-[#526273] leading-relaxed">

                        {t.featureDescription}

                      </p>

                    </motion.div>
                  );
                },
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <section className="py-24 bg-[#071B35] relative overflow-hidden">

          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #159447 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute bottom-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #159447 0%, transparent 70%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="max-w-3xl mx-auto text-center">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#A9E5B7] text-sm font-semibold">

                <Sparkles className="w-4 h-4" />

                {t.benefitsLabel}

              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-5 leading-tight">

                {t.benefitsTitle1}

                <span className="block text-[#63D184]">

                  {t.benefitsTitle2}

                </span>

              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-14">

              {benefits.map(
                (
                  benefit: any,
                  index: number,
                ) => {

                  const icons = [
                    Zap,
                    Target,
                    ShieldCheck,
                  ];

                  const Icon =
                    icons[
                      index %
                        icons.length
                    ];

                  const benefitTitle =
                    getLocalizedValue(
                      benefit?.title,
                      lang,
                    );

                  const benefitDescription =
                    getLocalizedValue(
                      benefit?.description,
                      lang,
                    );

                  return (
                    <motion.div
                      key={
                        benefitTitle ||
                        index
                      }
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          index * 0.1,
                      }}
                      whileHover={{
                        y: -6,
                      }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all"
                    >

                      <div className="w-12 h-12 rounded-xl bg-[#159447]/20 flex items-center justify-center">

                        <Icon className="w-6 h-6 text-[#63D184]" />

                      </div>

                      <h3 className="text-xl font-bold text-white mt-6">

                        {benefitTitle}

                      </h3>

                      <p className="text-gray-400 mt-3 leading-relaxed">

                        {benefitDescription}

                      </p>

                    </motion.div>
                  );
                },
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            USE CASES
        ====================================================== */}

        <section className="py-24 lg:py-32">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 text-[#159447] font-semibold text-sm">

                <span className="w-8 h-px bg-[#159447]" />

                {t.useCasesLabel}

              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#071B35] mt-5 leading-tight">

                {t.useCasesTitle1}

                <span className="block text-[#159447]">

                  {t.useCasesTitle2}

                </span>

              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-14">

              {useCases.map(
                (
                  useCase: any,
                  index: number,
                ) => {

                  const useCaseTitle =
                    getLocalizedValue(
                      useCase?.title,
                      lang,
                    );

                  const useCaseDescription =
                    getLocalizedValue(
                      useCase?.description,
                      lang,
                    );

                  return (
                    <motion.div
                      key={
                        useCaseTitle ||
                        index
                      }
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          index * 0.1,
                      }}
                      whileHover={{
                        y: -7,
                      }}
                      className="group bg-white border border-gray-100 rounded-[26px] p-7 shadow-[0_10px_40px_rgba(7,27,53,0.05)] hover:border-[#DFF7D8] hover:shadow-[0_20px_50px_rgba(21,148,71,0.10)] transition-all"
                    >

                      <div className="flex items-center justify-between">

                        <div className="w-12 h-12 rounded-xl bg-[#EEFBE8] flex items-center justify-center">

                          <MessageSquareText className="w-6 h-6 text-[#159447]" />

                        </div>

                        <span className="text-[#159447] font-bold text-sm">

                          0{index + 1}

                        </span>

                      </div>

                      <h3 className="text-xl font-bold text-[#071B35] mt-6">

                        {useCaseTitle}

                      </h3>

                      <p className="text-[#526273] mt-3 leading-relaxed">

                        {useCaseDescription}

                      </p>

                      <div className="mt-6 inline-flex items-center text-[#159447] font-semibold text-sm">

                        WhatsWare

                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />

                      </div>

                    </motion.div>
                  );
                },
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            FEATURE STRIP
        ====================================================== */}

        <section className="pb-10">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="rounded-[28px] bg-[#EEFBE8] border border-[#DFF7D8] p-6 sm:p-8">

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {[
                  {
                    icon: MessageSquareText,
                    title:
                      t.featureStrip[0],
                  },
                  {
                    icon: Zap,
                    title:
                      t.featureStrip[1],
                  },
                  {
                    icon: Users,
                    title:
                      t.featureStrip[2],
                  },
                  {
                    icon: BarChart3,
                    title:
                      t.featureStrip[3],
                  },
                ].map((item) => {

                  const Icon =
                    item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3"
                    >

                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">

                        <Icon className="w-5 h-5 text-[#159447]" />

                      </div>

                      <span className="font-semibold text-[#071B35]">

                        {item.title}

                      </span>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="relative py-28 overflow-hidden">

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #071B35 0%, #0B3825 50%, #159447 100%)",
            }}
          />

          <div
            className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #63D184 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute bottom-[-200px] left-[-100px] w-[450px] h-[450px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, white 0%, transparent 70%)",
            }}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#A9E5B7] text-sm font-semibold">

                <Sparkles className="w-4 h-4" />

                {t.ctaBadge}

              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight">

                {t.ctaTitle1}

                <span className="block text-[#63D184]">

                  {t.ctaTitle2}

                </span>

              </h2>

              <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">

                {t.ctaDescription}

              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-9">

                <button
                  onClick={() => setShowPartnershipPopup(true)}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#071B35] font-bold hover:bg-[#EEFBE8] hover:scale-[1.02] transition-all group"
                >

                  {t.getStartedFree}

                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />

                </button>

                <button
                  onClick={() => {
                    window.location.href =
                      "/pricing";
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                >

                  {t.viewPricing}

                </button>

              </div>

            </motion.div>

          </div>

        </section>

      </main>
      
      <Footer />

      <PartnershipPopup
        isOpen={showPartnershipPopup}
        onClose={() => setShowPartnershipPopup(false)}
      />
    </div>
  );
}