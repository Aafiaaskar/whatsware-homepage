import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  PhoneCall,
  Bot,
  Users,
  BarChart3,
  Clock3,
  Headphones,
  Zap,
  ShieldCheck,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    badge: "VOICE CHANNEL",
    title1: "Turn every call into",
    title2: "a better customer experience.",
    description:
      "Connect with customers through intelligent voice conversations. Automate calls, assist your team, and deliver faster support with WhatsWare Voice.",
    primary: "Get Started",
    secondary: "Explore Features",

    trust: [
      "AI-powered conversations",
      "24/7 availability",
      "Easy to configure",
    ],

    dashboard: {
      liveCall: "Live Call",
      connected: "Connected",
      customer: "Customer",
      duration: "Call Duration",
      aiAssistant: "AI Assistant",
      active: "Active",
      callsToday: "Calls Today",
      successRate: "Success Rate",
    },

    featuresLabel: "POWERFUL VOICE FEATURES",
    featuresTitle:
      "Everything you need to manage customer conversations",

    features: [
      {
        title: "AI Voice Conversations",
        description:
          "Let AI handle natural customer conversations and provide quick, helpful responses.",
      },
      {
        title: "Automated Calling",
        description:
          "Automate repetitive calls, reminders, follow-ups, and customer notifications.",
      },
      {
        title: "Smart Call Routing",
        description:
          "Route customers to the right team or agent based on their needs.",
      },
      {
        title: "24/7 Availability",
        description:
          "Keep your customer support available even outside normal business hours.",
      },
      {
        title: "Human Handoff",
        description:
          "Move conversations from AI to your team whenever human assistance is needed.",
      },
      {
        title: "Call Analytics",
        description:
          "Track call activity, performance, outcomes, and customer interactions.",
      },
    ],

    benefitsLabel: "WHY WHATSWARE VOICE",
    benefitsTitle1: "Make every customer",
    benefitsTitle2: "conversation count.",

    benefits: [
      {
        title: "Faster Response",
        description:
          "Respond to customers instantly without making them wait for an available agent.",
      },
      {
        title: "More Productive Teams",
        description:
          "Automate repetitive conversations so your team can focus on valuable customer interactions.",
      },
      {
        title: "Consistent Experience",
        description:
          "Deliver consistent information and support across every customer conversation.",
      },
    ],

    useCasesLabel: "USE CASES",
    useCasesTitle1: "Built for businesses that",
    useCasesTitle2: "talk to customers every day.",

    useCases: [
      {
        title: "Customer Support",
        description:
          "Answer common questions, resolve simple issues, and connect customers with your team.",
      },
      {
        title: "Sales & Lead Qualification",
        description:
          "Engage new leads, understand their requirements, and identify high-intent prospects.",
      },
      {
        title: "Appointments & Reminders",
        description:
          "Automate appointment confirmations, reminders, rescheduling, and follow-up calls.",
      },
    ],

    strip: [
      "AI Voice",
      "Automated Calls",
      "Human Handoff",
      "Call Analytics",
    ],

    ctaBadge: "READY TO GET STARTED?",
    ctaTitle1: "Give your customers",
    ctaTitle2: "a smarter way to talk.",
    ctaDescription:
      "Start building better voice experiences with WhatsWare today.",
    ctaButton: "Get Started",
    pricing: "View Pricing",
  },

  ta: {
    badge: "VOICE CHANNEL",
    title1: "ஒவ்வொரு அழைப்பையும்",
    title2: "சிறந்த வாடிக்கையாளர் அனுபவமாக மாற்றுங்கள்.",
    description:
      "புத்திசாலியான Voice உரையாடல்கள் மூலம் வாடிக்கையாளர்களுடன் இணையுங்கள். அழைப்புகளை தானியக்கமாக்கி, உங்கள் குழுவிற்கு உதவி செய்து, வேகமான ஆதரவை WhatsWare மூலம் வழங்குங்கள்.",
    primary: "தொடங்குங்கள்",
    secondary: "அம்சங்களைப் பார்க்கவும்",

    trust: [
      "AI மூலம் இயக்கப்படுகிறது",
      "24/7 கிடைக்கும்",
      "எளிதாக அமைக்கலாம்",
    ],

    dashboard: {
      liveCall: "நேரடி அழைப்பு",
      connected: "இணைக்கப்பட்டது",
      customer: "வாடிக்கையாளர்",
      duration: "அழைப்பு நேரம்",
      aiAssistant: "AI உதவியாளர்",
      active: "செயலில்",
      callsToday: "இன்றைய அழைப்புகள்",
      successRate: "வெற்றி விகிதம்",
    },

    featuresLabel: "சக்திவாய்ந்த VOICE அம்சங்கள்",
    featuresTitle:
      "வாடிக்கையாளர் உரையாடல்களை நிர்வகிக்க தேவையான அனைத்தும்",

    features: [
      {
        title: "AI Voice உரையாடல்கள்",
        description:
          "AI இயல்பான வாடிக்கையாளர் உரையாடல்களை கையாளவும் விரைவான பதில்களை வழங்கவும் உதவும்.",
      },
      {
        title: "தானியங்கி அழைப்புகள்",
        description:
          "மீண்டும் மீண்டும் செய்யப்படும் அழைப்புகள், நினைவூட்டல்கள் மற்றும் பின்தொடர்தல்களை தானியக்கமாக்குங்கள்.",
      },
      {
        title: "Smart Call Routing",
        description:
          "வாடிக்கையாளர்களின் தேவைக்கு ஏற்ப சரியான குழு அல்லது agent-க்கு அழைப்புகளை அனுப்புங்கள்.",
      },
      {
        title: "24/7 கிடைக்கும்",
        description:
          "வழக்கமான வேலை நேரத்திற்கு வெளியேயும் வாடிக்கையாளர் ஆதரவை வழங்குங்கள்.",
      },
      {
        title: "Human Handoff",
        description:
          "மனித உதவி தேவைப்படும் போது AI உரையாடலை உங்கள் குழுவிடம் மாற்றுங்கள்.",
      },
      {
        title: "Call Analytics",
        description:
          "அழைப்புகள், செயல்திறன் மற்றும் வாடிக்கையாளர் தொடர்புகளை கண்காணியுங்கள்.",
      },
    ],

    benefitsLabel: "WHATSWARE VOICE ஏன்?",
    benefitsTitle1: "ஒவ்வொரு வாடிக்கையாளர்",
    benefitsTitle2: "உரையாடலையும் முக்கியமாக்குங்கள்.",

    benefits: [
      {
        title: "வேகமான பதில்",
        description:
          "Agent கிடைக்கும் வரை காத்திருக்காமல் வாடிக்கையாளர்களுக்கு உடனடியாக பதிலளிக்கவும்.",
      },
      {
        title: "சிறந்த குழு செயல்திறன்",
        description:
          "மீண்டும் மீண்டும் செய்யப்படும் உரையாடல்களை தானியக்கமாக்கி முக்கிய பணிகளில் கவனம் செலுத்துங்கள்.",
      },
      {
        title: "ஒரே மாதிரியான அனுபவம்",
        description:
          "ஒவ்வொரு வாடிக்கையாளர் உரையாடலிலும் ஒரே தரமான தகவல் மற்றும் ஆதரவை வழங்குங்கள்.",
      },
    ],

    useCasesLabel: "பயன்பாட்டு முறைகள்",
    useCasesTitle1: "தினமும் வாடிக்கையாளர்களுடன்",
    useCasesTitle2: "பேசும் வணிகங்களுக்காக.",

    useCases: [
      {
        title: "வாடிக்கையாளர் ஆதரவு",
        description:
          "பொதுவான கேள்விகளுக்கு பதிலளித்து, எளிய பிரச்சினைகளைத் தீர்த்து, வாடிக்கையாளர்களை சரியான குழுவுடன் இணைக்கவும்.",
      },
      {
        title: "Sales & Lead Qualification",
        description:
          "புதிய leads-ஐ தொடர்புகொண்டு அவர்களின் தேவைகளைப் புரிந்துகொண்டு அதிக வாய்ப்புள்ள leads-ஐ கண்டறியுங்கள்.",
      },
      {
        title: "Appointments & Reminders",
        description:
          "Appointment confirmations, reminders மற்றும் follow-up calls-ஐ தானியக்கமாக்குங்கள்.",
      },
    ],

    strip: [
      "AI Voice",
      "தானியங்கி அழைப்புகள்",
      "Human Handoff",
      "Call Analytics",
    ],

    ctaBadge: "தொடங்க தயாரா?",
    ctaTitle1: "உங்கள் வாடிக்கையாளர்களுக்கு",
    ctaTitle2: "சிறந்த பேசும் அனுபவத்தை வழங்குங்கள்.",
    ctaDescription:
      "WhatsWare மூலம் இன்று சிறந்த Voice அனுபவங்களை உருவாக்கத் தொடங்குங்கள்.",
    ctaButton: "தொடங்குங்கள்",
    pricing: "விலைத் திட்டங்கள்",
  },
};

const featureIcons = [
  Bot,
  PhoneCall,
  Zap,
  Clock3,
  Headphones,
  BarChart3,
];

const benefitIcons = [
  Zap,
  Users,
  ShieldCheck,
];

export default function Voice() {
  const { language } = useLanguage();

  const lang: "en" | "ta" = language === "ta" ? "ta" : "en";
  const t = translations[lang];

  const scrollToFeatures = () => {
    document
      .getElementById("voice-features")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

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
            className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(21,148,71,0.18) 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute top-10 right-[-200px] w-[650px] h-[650px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(223,247,216,0.9) 0%, transparent 70%)",
            }}
          />

          <motion.div
            className="absolute top-48 left-[12%] w-3 h-3 rounded-full bg-[#159447]/40"
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
            className="absolute top-64 right-[15%] w-2 h-2 rounded-full bg-[#159447]/50"
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
                  <Phone className="w-4 h-4" />
                  {t.badge}
                </div>

                <h1 className="mt-6 font-serif font-bold tracking-tight text-[#071B35] text-5xl sm:text-6xl lg:text-7xl leading-[1.04]">
                  {t.title1}
                  <span className="block text-[#159447]">
                    {t.title2}
                  </span>
                </h1>

                <p className="mt-7 text-lg lg:text-xl text-[#526273] leading-relaxed max-w-2xl">
                  {t.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-9">
                  <button
                    onClick={scrollToFeatures}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#159447] text-white font-semibold hover:bg-[#0e7c39] hover:shadow-xl hover:scale-[1.02] transition-all group"
                  >
                    {t.secondary}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => {
                      window.location.href = "/signup";
                    }}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white border border-gray-200 text-[#071B35] font-semibold hover:border-[#159447] hover:text-[#159447] hover:shadow-md transition-all"
                  >
                    {t.primary}
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

              {/* RIGHT - VOICE DASHBOARD */}
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
                  {/* Browser Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    </div>

                    <div className="h-2 w-32 rounded-full bg-gray-100" />

                    <div className="w-9 h-9 rounded-xl bg-[#EEFBE8] flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#159447]" />
                    </div>
                  </div>

                  {/* Dashboard */}
                  <div className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-[#159447] flex items-center justify-center shadow-lg">
                          <PhoneCall className="w-8 h-8 text-white" />
                        </div>

                        <div>
                          <p className="text-sm text-gray-400">
                            WhatsWare
                          </p>

                          <h2 className="text-xl sm:text-2xl font-bold text-[#071B35]">
                            {t.dashboard.liveCall}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEFBE8] text-[#159447] text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#159447] animate-pulse" />
                        {t.dashboard.connected}
                      </div>
                    </div>

                    {/* Call Wave */}
                    <div className="mt-8 bg-[#071B35] rounded-2xl p-6">
                      <div className="flex items-center justify-center gap-1.5 h-20">
                        {[20, 35, 55, 35, 70, 45, 80, 50, 65, 35, 55, 30, 45, 70, 40, 25].map(
                          (height, index) => (
                            <motion.div
                              key={index}
                              className="w-1.5 rounded-full bg-[#63D184]"
                              animate={{
                                height: [
                                  `${height * 0.45}%`,
                                  `${height}%`,
                                  `${height * 0.55}%`,
                                  `${height * 0.8}%`,
                                ],
                              }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: index * 0.05,
                                ease: "easeInOut",
                              }}
                            />
                          ),
                        )}
                      </div>

                      <div className="flex justify-between items-center mt-5">
                        <div>
                          <p className="text-gray-400 text-xs">
                            {t.dashboard.customer}
                          </p>
                          <p className="text-white font-semibold mt-1">
                            +91 98765 43210
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-gray-400 text-xs">
                            {t.dashboard.duration}
                          </p>
                          <p className="text-[#63D184] font-bold mt-1">
                            04:32
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="bg-[#EEFBE8] rounded-2xl p-4">
                        <Bot className="w-5 h-5 text-[#159447]" />
                        <p className="text-[#071B35] font-bold text-sm mt-3">
                          {t.dashboard.aiAssistant}
                        </p>
                        <p className="text-[#159447] text-[11px] mt-1 font-semibold">
                          {t.dashboard.active}
                        </p>
                      </div>

                      <div className="bg-[#F7FBF5] border border-[#E6F4E2] rounded-2xl p-4">
                        <PhoneCall className="w-5 h-5 text-[#159447]" />
                        <p className="text-[#071B35] font-bold text-sm mt-3">
                          248
                        </p>
                        <p className="text-[#526273] text-[11px] mt-1">
                          {t.dashboard.callsToday}
                        </p>
                      </div>

                      <div className="bg-[#071B35] rounded-2xl p-4">
                        <BarChart3 className="w-5 h-5 text-[#63D184]" />
                        <p className="text-white font-bold text-sm mt-3">
                          94%
                        </p>
                        <p className="text-gray-400 text-[11px] mt-1">
                          {t.dashboard.successRate}
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
          id="voice-features"
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
              {t.features.map((feature, index) => {
                const Icon = featureIcons[index];

                return (
                  <motion.div
                    key={feature.title}
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
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_10px_35px_rgba(7,27,53,0.04)] hover:border-[#DFF7D8] hover:shadow-[0_20px_45px_rgba(21,148,71,0.10)] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#EEFBE8] flex items-center justify-center group-hover:bg-[#159447] transition-colors">
                      <Icon className="w-6 h-6 text-[#159447] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#071B35]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#526273] leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
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
              {t.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];

                return (
                  <motion.div
                    key={benefit.title}
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
                      delay: index * 0.1,
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
                      {benefit.title}
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
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
              {t.useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
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
                    delay: index * 0.1,
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
                    {useCase.title}
                  </h3>

                  <p className="text-[#526273] mt-3 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div className="mt-6 inline-flex items-center text-[#159447] font-semibold text-sm">
                    WhatsWare
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
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
                    icon: Phone,
                    title: t.strip[0],
                  },
                  {
                    icon: Zap,
                    title: t.strip[1],
                  },
                  {
                    icon: Headphones,
                    title: t.strip[2],
                  },
                  {
                    icon: BarChart3,
                    title: t.strip[3],
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
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#071B35] font-bold hover:bg-[#EEFBE8] hover:scale-[1.02] transition-all group"
                >
                  {t.ctaButton}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    window.location.href = "/pricing";
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  {t.pricing}
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