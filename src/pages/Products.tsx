import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Workflow,
  BarChart3,
  MessageSquareText,
  Zap,
  Users,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Target,
  Settings2,
  Headphones,
  Send,
  ChevronRight,
  Layers3,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  en: {
    heroBadge: "Powerful Products. One WhatsApp Platform.",
    heroTitle1: "Everything You Need to",
    heroTitle2: "Grow on WhatsApp",
    heroDescription:
      "From AI-powered conversations to intelligent automation, workflow management, and analytics — WhatsWare gives your business everything it needs to turn WhatsApp into a growth engine.",
    exploreProducts: "Explore Products",
    getStarted: "Get Started",

    trust: [
      "WhatsApp Business API",
      "AI-Powered",
      "Automation",
    ],

    productsLabel: "OUR PRODUCTS",
    productsTitle1: "One platform.",
    productsTitle2: "Endless possibilities.",
    productsDescription:
      "Choose the tools you need to automate conversations, convert leads, support customers, and grow your business.",

    exploreProduct: "Explore Product",

    capabilitiesBadge: "Built for Growth",
    capabilitiesTitle1: "More than messaging.",
    capabilitiesTitle2: "A complete growth engine.",
    capabilitiesDescription:
      "WhatsWare combines communication, automation, AI, and analytics into one powerful platform.",

    howLabel: "HOW IT WORKS",
    howTitle1: "Turn conversations into",
    howTitle2: "business growth.",
    howDescription:
      "Getting started with WhatsWare is simple. Connect, configure, and let your business communication work smarter.",
    startGrowing: "Start Growing",

    featureStrip: [
      "WhatsApp First",
      "Easy to Configure",
      "Human Support",
      "Built to Convert",
    ],

    ctaBadge: "Ready to Grow?",
    ctaTitle1: "Make WhatsApp your",
    ctaTitle2: "next growth channel.",
    ctaDescription:
      "Start building smarter customer experiences with WhatsWare today.",
    getStartedFree: "Get Started",
    viewPlans: "View Plans",

    dashboard: {
      conversations: "Conversations",
      active: "248 active",
      aiAssistant: "AI Assistant",
      online: "Online",
      intentDetected: "Customer intent detected",
      responseSent: "Response automatically sent",
      growth: "Growth",
      thisMonth: "This month",
    },

    products: [
      {
        title: "WhatsApp Automation",
        description:
          "Automate customer conversations, lead capture, follow-ups, and everyday business communication on WhatsApp.",
        features: [
          "Automated customer replies",
          "Lead capture",
          "Instant follow-ups",
          "WhatsApp Business API",
        ],
        badge: "Automation",
      },
      {
        title: "AI Conversations",
        description:
          "Let AI handle customer conversations naturally while your team focuses on the conversations that matter most.",
        features: [
          "24/7 AI assistance",
          "Intent detection",
          "Smart responses",
          "Human handoff",
        ],
        badge: "AI Powered",
      },
      {
        title: "Workflow Builder",
        description:
          "Build powerful customer journeys and automate repetitive business processes without complicated coding.",
        features: [
          "Visual workflow builder",
          "Automated triggers",
          "Conditional actions",
          "Multi-step journeys",
        ],
        badge: "Automation",
      },
      {
        title: "Analytics",
        description:
          "Understand your conversations, leads, campaigns, and customer performance with actionable business insights.",
        features: [
          "Conversation analytics",
          "Lead tracking",
          "Conversion insights",
          "Performance reports",
        ],
        badge: "Insights",
      },
      {
        title: "Product Features",
        description:
          "Everything your team needs to manage WhatsApp communication, customers, campaigns, and conversations.",
        features: [
          "Team inbox",
          "Campaign management",
          "Templates",
          "Customer management",
        ],
        badge: "Complete Suite",
      },
    ],

    capabilities: [
      {
        title: "Automate Repetitive Work",
        description:
          "Reduce manual work by automating routine conversations, follow-ups, notifications, and customer journeys.",
      },
      {
        title: "Bring Your Team Together",
        description:
          "Give your entire team one place to manage customer conversations and collaborate efficiently.",
      },
      {
        title: "Convert More Leads",
        description:
          "Capture, qualify, and follow up with leads automatically so fewer opportunities are missed.",
      },
      {
        title: "Built for Business",
        description:
          "Create reliable customer experiences with powerful automation, permissions, analytics, and integrations.",
      },
    ],

    steps: [
      {
        number: "01",
        title: "Connect WhatsApp",
        description:
          "Connect your WhatsApp Business account and bring your customer conversations into WhatsWare.",
      },
      {
        number: "02",
        title: "Build Your Automation",
        description:
          "Create workflows, AI conversations, campaigns, and customer journeys that fit your business.",
      },
      {
        number: "03",
        title: "Grow Automatically",
        description:
          "Let WhatsWare manage conversations and follow-ups while your team focuses on growth.",
      },
    ],
  },

  ta: {
    heroBadge: "சக்திவாய்ந்த தயாரிப்புகள். ஒரே WhatsApp தளம்.",
    heroTitle1: "உங்கள் வளர்ச்சிக்குத் தேவையான",
    heroTitle2: "அனைத்தும் WhatsApp-ல்",
    heroDescription:
      "AI உரையாடல்கள் முதல் புத்திசாலித்தனமான தானியக்கம், பணிப்பாய்வு மேலாண்மை மற்றும் பகுப்பாய்வு வரை — உங்கள் WhatsApp-ஐ வளர்ச்சிக்கான சக்திவாய்ந்த தளமாக மாற்ற WhatsWare உங்கள் வணிகத்திற்குத் தேவையான அனைத்தையும் வழங்குகிறது.",
    exploreProducts: "தயாரிப்புகளைப் பார்க்கவும்",
    getStarted: "தொடங்குங்கள்",

    trust: [
      "WhatsApp Business API",
      "AI இயக்கம்",
      "தானியக்கம்",
    ],

    productsLabel: "எங்கள் தயாரிப்புகள்",
    productsTitle1: "ஒரே தளம்.",
    productsTitle2: "எல்லையற்ற வாய்ப்புகள்.",
    productsDescription:
      "உரையாடல்களை தானியக்கமாக்கவும், விற்பனை வாய்ப்புகளை மாற்றவும், வாடிக்கையாளர்களுக்கு ஆதரவளிக்கவும் மற்றும் உங்கள் வணிகத்தை வளர்க்கவும் தேவையான கருவிகளைத் தேர்வு செய்யுங்கள்.",

    exploreProduct: "தயாரிப்பைப் பார்க்கவும்",

    capabilitiesBadge: "வளர்ச்சிக்காக உருவாக்கப்பட்டது",
    capabilitiesTitle1: "வெறும் செய்தியிடல் அல்ல.",
    capabilitiesTitle2: "முழுமையான வளர்ச்சி இயந்திரம்.",
    capabilitiesDescription:
      "WhatsWare தகவல்தொடர்பு, தானியக்கம், AI மற்றும் பகுப்பாய்வு ஆகியவற்றை ஒரே சக்திவாய்ந்த தளத்தில் இணைக்கிறது.",

    howLabel: "இது எப்படி செயல்படுகிறது",
    howTitle1: "உரையாடல்களை",
    howTitle2: "வணிக வளர்ச்சியாக மாற்றுங்கள்.",
    howDescription:
      "WhatsWare-ஐ தொடங்குவது மிகவும் எளிது. இணைக்கவும், அமைக்கவும், உங்கள் வணிகத் தகவல்தொடர்புகளை இன்னும் சிறப்பாக செயல்பட விடுங்கள்.",
    startGrowing: "வளர்ச்சியைத் தொடங்குங்கள்",

    featureStrip: [
      "WhatsApp முதன்மை",
      "எளிதாக அமைக்கலாம்",
      "மனித ஆதரவு",
      "மாற்றத்திற்காக உருவாக்கப்பட்டது",
    ],

    ctaBadge: "வளர்ச்சிக்குத் தயாரா?",
    ctaTitle1: "WhatsApp-ஐ உங்கள்",
    ctaTitle2: "அடுத்த வளர்ச்சி சேனலாக மாற்றுங்கள்.",
    ctaDescription:
      "WhatsWare மூலம் இன்று முதல் சிறந்த வாடிக்கையாளர் அனுபவங்களை உருவாக்கத் தொடங்குங்கள்.",
    getStartedFree: "இலவசமாகத் தொடங்குங்கள்",
    viewPlans: "திட்டங்களைப் பார்க்கவும்",

    dashboard: {
      conversations: "உரையாடல்கள்",
      active: "248 செயலில்",
      aiAssistant: "AI உதவியாளர்",
      online: "ஆன்லைன்",
      intentDetected: "வாடிக்கையாளர் நோக்கம் கண்டறியப்பட்டது",
      responseSent: "பதில் தானாக அனுப்பப்பட்டது",
      growth: "வளர்ச்சி",
      thisMonth: "இந்த மாதம்",
    },

    products: [
      {
        title: "WhatsApp தானியக்கம்",
        description:
          "WhatsApp-ல் வாடிக்கையாளர் உரையாடல்கள், விற்பனை வாய்ப்பு சேகரிப்பு, தொடர்ச்சியான தொடர்புகள் மற்றும் தினசரி வணிகத் தகவல்தொடர்புகளை தானியக்கமாக்குங்கள்.",
        features: [
          "தானியங்கி வாடிக்கையாளர் பதில்கள்",
          "விற்பனை வாய்ப்பு சேகரிப்பு",
          "உடனடி தொடர்ச்சியான தொடர்புகள்",
          "WhatsApp Business API",
        ],
        badge: "தானியக்கம்",
      },
      {
        title: "AI உரையாடல்கள்",
        description:
          "AI மூலம் வாடிக்கையாளர் உரையாடல்களை இயல்பாக கையாளுங்கள். உங்கள் குழு முக்கியமான உரையாடல்களில் கவனம் செலுத்தலாம்.",
        features: [
          "24/7 AI உதவி",
          "நோக்கம் கண்டறிதல்",
          "புத்திசாலித்தனமான பதில்கள்",
          "மனிதரிடம் மாற்றுதல்",
        ],
        badge: "AI இயக்கம்",
      },
      {
        title: "பணிப்பாய்வு உருவாக்கி",
        description:
          "சிக்கலான coding இல்லாமல் சக்திவாய்ந்த வாடிக்கையாளர் பயணங்களை உருவாக்கி மீண்டும் மீண்டும் செய்யப்படும் வணிக செயல்முறைகளை தானியக்கமாக்குங்கள்.",
        features: [
          "காட்சி பணிப்பாய்வு உருவாக்கி",
          "தானியங்கி தூண்டுதல்கள்",
          "நிபந்தனை செயல்கள்",
          "பல படி பயணங்கள்",
        ],
        badge: "தானியக்கம்",
      },
      {
        title: "பகுப்பாய்வு",
        description:
          "உங்கள் உரையாடல்கள், விற்பனை வாய்ப்புகள், பிரச்சாரங்கள் மற்றும் வாடிக்கையாளர் செயல்திறனை பயனுள்ள வணிகத் தரவுகளுடன் புரிந்துகொள்ளுங்கள்.",
        features: [
          "உரையாடல் பகுப்பாய்வு",
          "விற்பனை வாய்ப்பு கண்காணிப்பு",
          "மாற்று விகித தகவல்கள்",
          "செயல்திறன் அறிக்கைகள்",
        ],
        badge: "தகவல் பகுப்பாய்வு",
      },
      {
        title: "தயாரிப்பு அம்சங்கள்",
        description:
          "WhatsApp தகவல்தொடர்பு, வாடிக்கையாளர்கள், பிரச்சாரங்கள் மற்றும் உரையாடல்களை நிர்வகிக்க உங்கள் குழுவிற்குத் தேவையான அனைத்தும்.",
        features: [
          "குழு Inbox",
          "பிரச்சார மேலாண்மை",
          "Templates",
          "வாடிக்கையாளர் மேலாண்மை",
        ],
        badge: "முழுமையான தொகுப்பு",
      },
    ],

    capabilities: [
      {
        title: "மீண்டும் செய்யும் பணிகளை தானியக்கமாக்குங்கள்",
        description:
          "வழக்கமான உரையாடல்கள், தொடர்ச்சியான தொடர்புகள், அறிவிப்புகள் மற்றும் வாடிக்கையாளர் பயணங்களை தானியக்கமாக்கி கைமுறை பணிகளை குறைக்கவும்.",
      },
      {
        title: "உங்கள் குழுவை ஒன்றிணைக்கவும்",
        description:
          "வாடிக்கையாளர் உரையாடல்களை நிர்வகிக்கவும் திறம்பட இணைந்து செயல்படவும் உங்கள் முழு குழுவிற்கும் ஒரே இடத்தை வழங்குங்கள்.",
      },
      {
        title: "மேலும் விற்பனை வாய்ப்புகளை மாற்றுங்கள்",
        description:
          "விற்பனை வாய்ப்புகளை தானாக சேகரித்து, தகுதி நிர்ணயித்து, தொடர்ந்து தொடர்பு கொள்ளுங்கள். எந்த வாய்ப்பும் தவறாமல் பார்த்துக்கொள்ளுங்கள்.",
      },
      {
        title: "வணிகத்திற்காக உருவாக்கப்பட்டது",
        description:
          "சக்திவாய்ந்த தானியக்கம், அனுமதிகள், பகுப்பாய்வு மற்றும் ஒருங்கிணைப்புகளுடன் நம்பகமான வாடிக்கையாளர் அனுபவங்களை உருவாக்குங்கள்.",
      },
    ],

    steps: [
      {
        number: "01",
        title: "WhatsApp-ஐ இணைக்கவும்",
        description:
          "உங்கள் WhatsApp Business கணக்கை இணைத்து வாடிக்கையாளர் உரையாடல்களை WhatsWare-க்கு கொண்டு வாருங்கள்.",
      },
      {
        number: "02",
        title: "உங்கள் தானியக்கத்தை உருவாக்குங்கள்",
        description:
          "உங்கள் வணிகத்திற்கு ஏற்ற பணிப்பாய்வுகள், AI உரையாடல்கள், பிரச்சாரங்கள் மற்றும் வாடிக்கையாளர் பயணங்களை உருவாக்குங்கள்.",
      },
      {
        number: "03",
        title: "தானாக வளருங்கள்",
        description:
          "WhatsWare உரையாடல்கள் மற்றும் தொடர்ச்சியான தொடர்புகளை நிர்வகிக்கட்டும். உங்கள் குழு வளர்ச்சியில் கவனம் செலுத்தட்டும்.",
      },
    ],
  },
};

/* =========================================================
   PRODUCT ICONS + LINKS
========================================================= */

const productMeta = [
  {
    icon: MessageSquareText,
    href: "/products/whatsapp-automation",
  },
  {
    icon: Bot,
    href: "/products/ai-conversations",
  },
  {
    icon: Workflow,
    href: "/products/workflow-builder",
  },
  {
    icon: BarChart3,
    href: "/products/analytics",
  },
  {
    icon: Layers3,
    href: "/products/features",
  },
];

/* =========================================================
   CAPABILITY ICONS
========================================================= */

const capabilityIcons = [Zap, Users, Target, ShieldCheck];

/* =========================================================
   PRODUCTS PAGE
========================================================= */

export default function Products() {
  const { language } = useLanguage();

  const lang = language === "ta" ? "ta" : "en";
  const t = translations[lang];

  return (
    <div
      className="min-h-screen bg-[#FFFDF5] font-sans text-[#071B35] overflow-hidden"
      lang={lang}
    >
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
          <div
            className="absolute top-0 left-[-180px] w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(21,148,71,0.16) 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute top-20 right-[-180px] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(223,247,216,0.8) 0%, transparent 70%)",
            }}
          />

          <motion.div
            className="absolute top-40 left-[12%] w-3 h-3 rounded-full bg-[#159447]/40"
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
            className="absolute top-56 right-[16%] w-2 h-2 rounded-full bg-[#159447]/50"
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
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEFBE8] border border-[#DFF7D8] text-[#159447] text-sm font-semibold mb-6"
              >
                <Sparkles className="w-4 h-4" />
                {t.heroBadge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="font-serif font-bold tracking-tight text-[#071B35] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]"
              >
                {t.heroTitle1}

                <span className="block text-[#159447] mt-2">
                  {t.heroTitle2}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                className="mt-7 text-lg lg:text-xl text-[#526273] leading-relaxed max-w-3xl mx-auto"
              >
                {t.heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="flex flex-col sm:flex-row justify-center gap-3 mt-9"
              >
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("products-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#159447] text-white font-semibold hover:bg-[#0e7c39] hover:shadow-xl hover:scale-[1.02] transition-all group"
                >
                  {t.exploreProducts}

                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("products-cta")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white border border-gray-200 text-[#071B35] font-semibold hover:border-[#159447] hover:text-[#159447] hover:shadow-md transition-all"
                >
                  {t.getStarted}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.55,
                }}
                className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8 text-sm text-[#526273]"
              >
                {t.trust.map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* =====================================================
                DASHBOARD PREVIEW
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="relative max-w-5xl mx-auto mt-16"
            >
              <div className="absolute inset-0 bg-[#159447]/10 blur-3xl rounded-full" />

              <div className="relative bg-white/90 backdrop-blur-xl border border-[#DFF7D8] rounded-[28px] shadow-[0_30px_90px_rgba(21,148,71,0.15)] p-4 sm:p-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  </div>

                  <div className="hidden sm:block h-2 w-32 rounded-full bg-gray-100" />

                  <div className="w-8 h-8 rounded-full bg-[#EEFBE8] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#159447]" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-5">
                  {/* Inbox */}

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-[#F7FBF5] rounded-2xl p-4 border border-[#E6F4E2]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-[#159447] flex items-center justify-center">
                        <MessageSquareText className="w-4 h-4 text-white" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold">
                          {t.dashboard.conversations}
                        </p>

                        <p className="text-[10px] text-gray-400">
                          {t.dashboard.active}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="h-10 bg-white rounded-xl border border-gray-100"
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* AI */}

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-[#F7FBF5] rounded-2xl p-4 border border-[#E6F4E2]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-[#071B35] flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold">
                          {t.dashboard.aiAssistant}
                        </p>

                        <p className="text-[10px] text-[#159447]">
                          {t.dashboard.online}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-white rounded-xl p-2.5 text-[10px] text-gray-500">
                        {t.dashboard.intentDetected}
                      </div>

                      <div className="bg-[#DCF8C6] rounded-xl p-2.5 text-[10px] text-[#087A3E]">
                        {t.dashboard.responseSent}
                      </div>
                    </div>
                  </motion.div>

                  {/* Analytics */}

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-[#F7FBF5] rounded-2xl p-4 border border-[#E6F4E2]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-[#159447] flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold">
                          {t.dashboard.growth}
                        </p>

                        <p className="text-[10px] text-gray-400">
                          {t.dashboard.thisMonth}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end gap-2 h-20">
                      {[35, 50, 42, 68, 58, 82, 95].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            animate={{
                              height: `${height}%`,
                            }}
                            transition={{
                              duration: 0.7,
                              delay: 0.7 + index * 0.08,
                            }}
                            className="flex-1 rounded-t-md bg-[#159447]/70"
                          />
                        ),
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            PRODUCTS
        ========================================================== */}

        <section
          id="products-section"
          className="relative py-24 lg:py-32"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#FFFDF5]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-14">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-[#159447] font-semibold text-sm mb-4"
              >
                <span className="w-8 h-px bg-[#159447]" />
                {t.productsLabel}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#071B35] leading-tight"
              >
                {t.productsTitle1}

                <span className="block text-[#159447]">
                  {t.productsTitle2}
                </span>
              </motion.h2>

              <p className="mt-5 text-lg text-[#526273] leading-relaxed">
                {t.productsDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.products.map((product, index) => {
                const meta = productMeta[index];

                if (!meta) {
                  return null;
                }

                const Icon = meta.icon;

                return (
                  <motion.div
                    key={product.title}
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
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-[#159447]/10 rounded-[26px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative h-full bg-white border border-gray-100 rounded-[26px] p-7 shadow-[0_10px_40px_rgba(7,27,53,0.05)] group-hover:border-[#DFF7D8] group-hover:shadow-[0_20px_50px_rgba(21,148,71,0.12)] transition-all duration-500">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-[#EEFBE8] flex items-center justify-center group-hover:bg-[#159447] transition-colors duration-300">
                          <Icon className="w-7 h-7 text-[#159447] group-hover:text-white transition-colors duration-300" />
                        </div>

                        <span className="px-3 py-1 rounded-full bg-[#F7FBF5] text-[#159447] text-[11px] font-semibold">
                          {product.badge}
                        </span>
                      </div>

                      <h3 className="mt-7 text-2xl font-bold text-[#071B35]">
                        {product.title}
                      </h3>

                      <p className="mt-3 text-[#526273] leading-relaxed">
                        {product.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {product.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2.5 text-sm text-[#526273]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <a
                        href={meta.href}
                        className="inline-flex items-center mt-7 text-[#159447] font-semibold text-sm group/link"
                      >
                        {t.exploreProduct}

                        <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            CAPABILITIES
        ========================================================== */}

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
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#A9E5B7] text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                {t.capabilitiesBadge}
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-5">
                {t.capabilitiesTitle1}

                <span className="block text-[#63D184]">
                  {t.capabilitiesTitle2}
                </span>
              </h2>

              <p className="text-gray-300 mt-5 text-lg leading-relaxed">
                {t.capabilitiesDescription}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.capabilities.map((item, index) => {
                const Icon = capabilityIcons[index];

                return (
                  <motion.div
                    key={item.title}
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
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#159447]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#63D184]" />
                    </div>

                    <h3 className="text-lg font-bold text-white mt-5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW IT WORKS
        ========================================================== */}

        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[#159447] font-semibold text-sm">
                  <span className="w-8 h-px bg-[#159447]" />
                  {t.howLabel}
                </div>

                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#071B35] mt-5 leading-tight">
                  {t.howTitle1}

                  <span className="text-[#159447]">
                    {" "}
                    {t.howTitle2}
                  </span>
                </h2>

                <p className="text-lg text-[#526273] mt-5 leading-relaxed">
                  {t.howDescription}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("products-cta")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-[#159447] text-white font-semibold hover:bg-[#0e7c39] transition-all group"
                >
                  {t.startGrowing}

                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="space-y-5">
                {t.steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    className="relative flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#DFF7D8] hover:shadow-lg transition-all"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#EEFBE8] flex items-center justify-center text-[#159447] font-bold">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#071B35]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-[#526273] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURE STRIP
        ========================================================== */}

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] bg-[#EEFBE8] border border-[#DFF7D8] p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Smartphone,
                    title: t.featureStrip[0],
                  },
                  {
                    icon: Settings2,
                    title: t.featureStrip[1],
                  },
                  {
                    icon: Headphones,
                    title: t.featureStrip[2],
                  },
                  {
                    icon: Send,
                    title: t.featureStrip[3],
                  },
                ].map((item) => {
                  const Icon = item.icon;

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

        {/* =========================================================
            CTA
        ========================================================== */}

        <section
          id="products-cta"
          className="relative py-28 overflow-hidden"
        >
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
                  type="button"
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#071B35] font-bold hover:bg-[#EEFBE8] hover:scale-[1.02] transition-all group"
                >
                  {t.getStartedFree}

                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/pricing";
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  {t.viewPlans}
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}