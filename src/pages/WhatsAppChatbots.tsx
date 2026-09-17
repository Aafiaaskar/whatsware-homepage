import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Globe2,
  Headphones,
  MessageCircle,
  MessagesSquare,
  MousePointer2,
  PhoneCall,
  Send,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
  ShoppingBag,
  UserRoundCheck,
  Languages,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppChatbots() {
  const { language } = useLanguage();
  const isTamil = language === "TA";

  const t = {
    badge: isTamil
      ? "WhatsApp AI Chatbots"
      : "WhatsApp AI Chatbots",

    title: isTamil
      ? "WhatsApp உரையாடல்களை புத்திசாலியாக மாற்றுங்கள்."
      : "Turn WhatsApp conversations into smarter customer experiences.",

    subtitle: isTamil
      ? "AI chatbot மூலம் வாடிக்கையாளர்களை 24/7 engage செய்யுங்கள்."
      : "Deploy intelligent WhatsApp chatbots that engage customers 24/7.",

    description: isTamil
      ? "கேள்விகளுக்கு பதிலளிக்கவும், leads-ஐ qualify செய்யவும், customer details சேகரிக்கவும், products மற்றும் services-ஐ பகிரவும், தேவையான நேரத்தில் உங்கள் team-க்கு chat-ஐ மாற்றவும்."
      : "Answer questions, qualify leads, collect customer information, share products and services, and hand conversations to your team when human support is needed.",

    start: isTamil ? "இப்போதே தொடங்குங்கள்" : "Get Started",

    demo: isTamil ? "Demo பார்க்கவும்" : "Book a Demo",

    trusted: isTamil
      ? "வணிகங்களால் நம்பப்படும் WhatsApp automation"
      : "Powering smarter WhatsApp conversations for modern businesses",

    featuresLabel: isTamil
      ? "Powerful Chatbot Features"
      : "Powerful Chatbot Features",

    featuresTitle: isTamil
      ? "ஒரே chatbot. பல business possibilities."
      : "One chatbot. Multiple ways to grow your business.",

    featuresDescription: isTamil
      ? "Simple FAQs முதல் AI-powered customer journeys வரை, உங்கள் WhatsApp conversations-ஐ automation செய்யுங்கள்."
      : "From simple FAQs to AI-powered customer journeys, automate the conversations that matter most.",
  };

  const features = [
    {
      icon: BrainCircuit,
      title: isTamil ? "AI-powered Conversations" : "AI-powered Conversations",
      description: isTamil
        ? "Customer questions-ஐ context புரிந்து இயல்பான முறையில் பதிலளிக்க AI-ஐ பயன்படுத்துங்கள்."
        : "Understand customer questions and respond naturally with intelligent, context-aware AI.",
      tag: "AI",
    },
    {
      icon: Clock3,
      title: isTamil ? "24/7 Customer Support" : "24/7 Customer Support",
      description: isTamil
        ? "உங்கள் team offline-ல் இருந்தாலும் customers-க்கு உடனடி பதில்களை வழங்குங்கள்."
        : "Give customers instant answers even when your team is offline.",
      tag: "24/7",
    },
    {
      icon: Target,
      title: isTamil ? "Lead Qualification" : "Lead Qualification",
      description: isTamil
        ? "Budget, requirement மற்றும் timeline போன்ற கேள்விகளால் leads-ஐ qualify செய்யுங்கள்."
        : "Ask the right questions to identify high-intent prospects before sending them to sales.",
      tag: "Leads",
    },
    {
      icon: Workflow,
      title: isTamil ? "Smart Conversation Flows" : "Smart Conversation Flows",
      description: isTamil
        ? "Booking, registration, feedback மற்றும் enquiry journeys-ஐ WhatsApp-ல் உருவாக்குங்கள்."
        : "Build guided journeys for bookings, registrations, feedback and enquiries directly inside WhatsApp.",
      tag: "Flows",
    },
    {
      icon: ShoppingBag,
      title: isTamil ? "Sell on WhatsApp" : "Sell on WhatsApp",
      description: isTamil
        ? "Products, pricing மற்றும் offers-ஐ chat-ல் share செய்து customers-ஐ purchase செய்ய வழிநடத்துங்கள்."
        : "Showcase products, pricing and offers inside conversations and guide customers toward purchase.",
      tag: "Sales",
    },
    {
      icon: UserRoundCheck,
      title: isTamil ? "Smart Lead Routing" : "Smart Lead Routing",
      description: isTamil
        ? "சரியான department அல்லது salesperson-க்கு conversations-ஐ automatically route செய்யுங்கள்."
        : "Automatically route conversations to the right department or salesperson.",
      tag: "Teams",
    },
  ];

  const benefits = [
    {
      icon: MessageCircle,
      title: isTamil ? "Instant Replies" : "Instant Replies",
      text: isTamil
        ? "Customer questions-க்கு seconds-ல் பதில்."
        : "Respond to customer questions in seconds.",
    },
    {
      icon: Users,
      title: isTamil ? "More Qualified Leads" : "More Qualified Leads",
      text: isTamil
        ? "Sales team-க்கு better-quality prospects."
        : "Send better-qualified prospects to your sales team.",
    },
    {
      icon: Headphones,
      title: isTamil ? "Less Support Work" : "Less Support Work",
      text: isTamil
        ? "Repetitive questions-ஐ chatbot handle செய்யட்டும்."
        : "Let the chatbot handle repetitive customer questions.",
    },
    {
      icon: Globe2,
      title: isTamil ? "Multiple Languages" : "Multiple Languages",
      text: isTamil
        ? "பல மொழிகளில் customers-ஐ engage செய்யுங்கள்."
        : "Engage customers across multiple languages.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FBF9] text-[#12312C]">
      <Navbar />

      <main className="pt-20">

        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="relative overflow-hidden px-4 pb-24 pt-14 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">

          {/* Background glow */}
          <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-[#E8F7E9] opacity-70 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-2 text-sm text-slate-500">
              <Link
                href="/"
                className="transition hover:text-[#159447]"
              >
                {isTamil ? "முகப்பு" : "Home"}
              </Link>

              <span>/</span>

              <Link
                href="/products"
                className="transition hover:text-[#159447]"
              >
                {isTamil ? "Products" : "Products"}
              </Link>

              <span>/</span>

              <span className="font-semibold text-[#12312C]">
                WhatsApp Chatbots
              </span>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >

                {/* Badge */}
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2 text-sm font-bold text-[#075E54] shadow-sm">

                  <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#D9F8ED]">
                    <img
                      src="/whatsware-logo.png"
                      alt="WhatsWare"
                      className="h-6 w-6 object-contain"
                    />
                  </span>

                  {t.badge}

                  <Sparkles className="h-4 w-4 text-[#159447]" />

                </div>

                {/* Heading */}
                <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-[#12312C] sm:text-6xl lg:text-7xl">

                  {isTamil ? (
                    <>
                      WhatsApp-ஐ{" "}
                      <span className="text-[#159447]">
                        Smart
                      </span>{" "}
                      Customer Experience-ஆக மாற்றுங்கள்.
                    </>
                  ) : (
                    <>
                      Make WhatsApp a{" "}
                      <span className="text-[#159447]">
                        smarter
                      </span>{" "}
                      customer experience.
                    </>
                  )}

                </h1>

                <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[#075E54] sm:text-2xl">
                  {t.subtitle}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {t.description}
                </p>

                {/* Buttons */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/signup"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#075E54] px-8 py-4 font-bold text-white shadow-lg shadow-[#075E54]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#064C44]"
                  >
                    {t.start}

                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full border border-[#B8D9CD] bg-white px-8 py-4 font-bold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#159447] hover:bg-[#F1FAF5]"
                  >
                    {t.demo}
                  </Link>

                </div>

                {/* Trust points */}
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

                  {[
                    isTamil ? "AI Conversations" : "AI conversations",
                    isTamil ? "24/7 Automation" : "24/7 automation",
                    isTamil ? "Lead Qualification" : "Lead qualification",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                      {item}
                    </div>
                  ))}

                </div>

              </motion.div>


              {/* =====================================================
                  CHATBOT VISUAL
              ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.94, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto w-full max-w-xl"
              >

                {/* Glow */}
                <div className="absolute -inset-10 rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

                {/* Main dashboard */}
                <div className="relative rounded-[2rem] border border-[#D7E9E1] bg-white p-4 shadow-[0_40px_100px_-30px_rgba(12,75,52,0.45)] sm:p-6">

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[#D9F8ED]">
                        <img
                          src="/whatsware-logo.png"
                          alt="WhatsWare"
                          className="h-9 w-9 object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-black text-[#12312C]">
                          WhatsWare AI
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#159447]" />
                          <p className="text-xs text-slate-400">
                            AI Assistant Online
                          </p>
                        </div>
                      </div>

                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                    </div>

                  </div>


                  {/* Chat area */}
                  <div className="mt-6 rounded-[1.5rem] bg-[#F4F9F6] p-4 sm:p-5">

                    {/* Customer */}
                    <div className="flex justify-end">
                      <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-[#DCF8E8] px-4 py-3 shadow-sm">
                        <p className="text-sm font-medium leading-6 text-[#29433D]">
                          Hi! I want to know more about your WhatsApp chatbot.
                        </p>
                        <p className="mt-1 text-right text-[9px] text-slate-400">
                          10:42 AM
                        </p>
                      </div>
                    </div>


                    {/* Bot */}
                    <div className="mt-4 flex items-end gap-2">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#075E54]">
                        <img
                          src="/whatsware-logo.png"
                          alt="WhatsWare AI"
                          className="h-7 w-7 object-contain"
                        />
                      </div>

                      <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">

                        <div className="mb-2 flex items-center gap-2">
                          <Bot className="h-4 w-4 text-[#159447]" />

                          <span className="text-xs font-black text-[#075E54]">
                            WhatsWare AI
                          </span>
                        </div>

                        <p className="text-sm leading-6 text-[#29433D]">
                          Absolutely! I can help you understand our chatbot
                          features, pricing and setup.
                        </p>

                        <div className="mt-3 rounded-xl bg-[#F1FAF5] p-3">
                          <p className="text-xs font-bold text-[#075E54]">
                            What would you like to explore?
                          </p>

                          <div className="mt-2 grid gap-2">
                            <button className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-left text-xs font-semibold text-[#159447] shadow-sm">
                              AI Chatbots
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>

                            <button className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-left text-xs font-semibold text-[#159447] shadow-sm">
                              Lead Automation
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>

                            <button className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-left text-xs font-semibold text-[#159447] shadow-sm">
                              Book a Demo
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>


                  {/* Bottom stats */}
                  <div className="mt-5 grid grid-cols-3 gap-3">

                    <MiniStat
                      icon={<MessageCircle className="h-4 w-4" />}
                      value="24/7"
                      label="Support"
                    />

                    <MiniStat
                      icon={<Target className="h-4 w-4" />}
                      value="AI"
                      label="Qualified"
                    />

                    <MiniStat
                      icon={<Zap className="h-4 w-4" />}
                      value="Instant"
                      label="Replies"
                    />

                  </div>

                </div>


                {/* Floating card 1 */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-5 bottom-10 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block"
                >
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
                      <Target className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Lead status
                      </p>

                      <p className="mt-1 text-xs font-black text-[#12312C]">
                        Qualified Lead ✓
                      </p>
                    </div>

                  </div>
                </motion.div>


                {/* Floating card 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-5 top-20 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block"
                >
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#075E54]">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] text-slate-400">
                        AI Assistant
                      </p>

                      <p className="mt-1 text-xs font-black text-[#12312C]">
                        Reply sent ✓
                      </p>
                    </div>

                  </div>
                </motion.div>

              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================================
            TRUST / BENEFITS STRIP
        ========================================================= */}

        <section className="border-y border-[#DCEAE4] bg-white px-4 py-10 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <p className="mb-7 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400">
              {t.trusted}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-4 rounded-2xl bg-[#F8FBF9] p-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-black text-[#12312C]">
                        {benefit.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {benefit.text}
                      </p>
                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>


        {/* =========================================================
            FEATURE CARDS
        ========================================================= */}

        <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

          <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#E7F8EF] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E9F8F0] px-4 py-2 text-sm font-bold text-[#159447]">
                <Sparkles className="h-4 w-4" />
                {t.featuresLabel}
              </div>

              <h2 className="text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {t.featuresTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {t.featuresDescription}
              </p>

            </div>


            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-[#DDEBE5] bg-[#F8FBF9] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#BFEBDD] hover:bg-white hover:shadow-[0_25px_70px_-35px_rgba(21,148,71,0.45)]"
                  >

                    {/* Decorative glow */}
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#D9F8ED] opacity-0 blur-2xl transition group-hover:opacity-100" />

                    <div className="relative">

                      <div className="flex items-center justify-between">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
                          <Icon className="h-7 w-7" />
                        </div>

                        <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#159447] shadow-sm">
                          {feature.tag}
                        </span>

                      </div>

                      <h3 className="mt-7 text-xl font-black text-[#12312C]">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {feature.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#159447]">
                        Explore feature
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>


        {/* =========================================================
            AI CONVERSATION SECTION
        ========================================================= */}

        <section className="relative overflow-hidden bg-[#F1F8F4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* Chat visual */}
              <div className="relative order-2 lg:order-1">

                <div className="absolute -inset-8 rounded-[3rem] bg-[#D9F8ED] opacity-60 blur-3xl" />

                <div className="relative rounded-[2rem] border border-[#D8E9E1] bg-white p-5 shadow-[0_30px_80px_-30px_rgba(12,75,52,0.35)] sm:p-7">

                  <div className="flex items-center gap-3 border-b border-slate-100 pb-5">

                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[#075E54]">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-9 w-9 object-contain"
                      />
                    </div>

                    <div>
                      <p className="font-black text-[#12312C]">
                        WhatsWare AI Agent
                      </p>

                      <p className="mt-1 text-xs text-[#159447]">
                        ● Online and responding
                      </p>
                    </div>

                  </div>


                  <div className="space-y-4 py-6">

                    <ChatBubble
                      side="right"
                      text="Do you have any plans for small businesses?"
                    />

                    <ChatBubble
                      side="left"
                      text="Yes! We have plans designed for growing businesses. I can help you find the right option."
                    />

                    <ChatBubble
                      side="right"
                      text="Can I book a demo?"
                    />

                    <ChatBubble
                      side="left"
                      text="Absolutely. I can help you schedule a demo with our team."
                    />

                  </div>


                  <div className="flex items-center gap-2 rounded-xl bg-[#F4F9F6] px-4 py-3">

                    <div className="h-2 w-2 animate-pulse rounded-full bg-[#159447]" />

                    <span className="text-xs font-medium text-slate-400">
                      AI is ready to respond...
                    </span>

                  </div>

                </div>

              </div>


              {/* Text */}
              <div className="order-1 lg:order-2">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">
                  <BrainCircuit className="h-4 w-4" />
                  AI-powered conversations
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#12312C] sm:text-5xl">
                  {isTamil
                    ? "ஒவ்வொரு customer message-க்கும் smarter response."
                    : "Go beyond scripted replies with intelligent conversations."}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {isTamil
                    ? "WhatsWare AI customer intent-ஐ புரிந்து கொண்டு relevant information வழங்க உதவுகிறது."
                    : "WhatsWare AI helps understand customer intent and deliver useful information throughout the conversation."}
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    isTamil
                      ? "Natural customer conversations"
                      : "Natural customer conversations",

                    isTamil
                      ? "Context-aware responses"
                      : "Context-aware responses",

                    isTamil
                      ? "Instant answers to common questions"
                      : "Instant answers to common questions",

                    isTamil
                      ? "Human handoff when required"
                      : "Human handoff when required",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D9F8ED]">
                        <Check className="h-4 w-4 text-[#159447]" />
                      </div>

                      <span className="font-semibold text-[#29433D]">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
            BUSINESS AUTOMATION CARDS
        ========================================================= */}

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                WhatsApp automation
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {isTamil
                  ? "உங்கள் business-ன் repetitive work-ஐ automate செய்யுங்கள்."
                  : "Let your chatbot handle the repetitive work."}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {isTamil
                  ? "Customer support முதல் sales மற்றும் bookings வரை WhatsApp-ல் automation செய்யுங்கள்."
                  : "Automate everything from customer support to lead qualification, bookings and sales conversations."}
              </p>

            </div>


            <div className="mt-14 grid gap-6 md:grid-cols-2">

              <AutomationCard
                icon={<Target className="h-7 w-7" />}
                number="01"
                title={
                  isTamil
                    ? "Leads-ஐ automatically qualify செய்யுங்கள்"
                    : "Qualify leads automatically"
                }
                text={
                  isTamil
                    ? "Customer budget, requirement, location மற்றும் timeline போன்ற தகவல்களை chatbot சேகரிக்கட்டும்."
                    : "Let the chatbot collect details such as budget, requirements, location and timeline before sending qualified prospects to sales."
                }
                items={[
                  "Ask qualifying questions",
                  "Identify high-intent prospects",
                  "Route qualified leads",
                ]}
              />

              <AutomationCard
                icon={<Clock3 className="h-7 w-7" />}
                number="02"
                title={
                  isTamil
                    ? "24/7 customer support"
                    : "Deliver 24/7 customer support"
                }
                text={
                  isTamil
                    ? "FAQs, order questions மற்றும் common support requests-க்கு chatbot உடனடியாக பதிலளிக்கட்டும்."
                    : "Handle FAQs, order questions and repetitive support requests instantly without keeping your team online all day."
                }
                items={[
                  "Answer FAQs instantly",
                  "Handle repetitive questions",
                  "Reduce support workload",
                ]}
              />

              <AutomationCard
                icon={<Workflow className="h-7 w-7" />}
                number="03"
                title={
                  isTamil
                    ? "WhatsApp Flows உருவாக்குங்கள்"
                    : "Build guided WhatsApp Flows"
                }
                text={
                  isTamil
                    ? "Booking, registration, feedback மற்றும் enquiries போன்ற structured journeys-ஐ உருவாக்குங்கள்."
                    : "Create structured journeys for bookings, registrations, feedback and customer enquiries."
                }
                items={[
                  "Collect customer details",
                  "Guide users step by step",
                  "Create smoother journeys",
                ]}
              />

              <AutomationCard
                icon={<ShoppingBag className="h-7 w-7" />}
                number="04"
                title={
                  isTamil
                    ? "WhatsApp-ல் sell செய்யுங்கள்"
                    : "Turn conversations into sales"
                }
                text={
                  isTamil
                    ? "Products, offers, pricing மற்றும் important information-ஐ chat-ல் share செய்யுங்கள்."
                    : "Share products, offers, pricing and important information directly inside customer conversations."
                }
                items={[
                  "Share product information",
                  "Answer buying questions",
                  "Guide customers toward purchase",
                ]}
              />

            </div>

          </div>
        </section>


        {/* =========================================================
            HUMAN HANDOFF
        ========================================================= */}

        <section className="relative overflow-hidden bg-[#075E54] px-4 py-24 sm:px-6 lg:px-8">

          <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#159447] opacity-30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-emerald-300 opacity-20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              <div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-emerald-100">
                  <Headphones className="h-4 w-4" />
                  AI + Human support
                </div>

                <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
                  {isTamil
                    ? "AI வேலை செய்யட்டும். உங்கள் team முக்கியமான conversations-ஐ handle செய்யட்டும்."
                    : "Let AI handle the routine. Let your team handle what matters."}
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
                  {isTamil
                    ? "Complex request வந்தால் chatbot conversation-ஐ உங்கள் support அல்லது sales team-க்கு மாற்றலாம்."
                    : "When a conversation needs a human, move it smoothly from the chatbot to your support or sales team."}
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Automatic human handoff",
                    "Route conversations to the right team",
                    "Keep customer context",
                    "Reduce response time",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-white"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                        <Check className="h-4 w-4 text-emerald-300" />
                      </div>

                      <span className="font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>


              {/* Handoff visual */}
              <div className="relative">

                <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4">

                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-[#D9F8ED]">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-9 w-9 object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-slate-400">
                        WhatsWare AI
                      </p>

                      <p className="mt-1 text-sm font-black text-[#12312C]">
                        Customer needs human support
                      </p>
                    </div>

                    <ArrowRight className="h-5 w-5 text-[#159447]" />

                  </div>


                  <div className="my-5 flex justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#159447] text-white">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>


                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#075E54] text-white">
                      <Users className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-slate-400">
                        Sales / Support Team
                      </p>

                      <p className="mt-1 text-sm font-black text-[#12312C]">
                        Agent takes over conversation
                      </p>
                    </div>

                    <CheckCircle2 className="h-5 w-5 text-[#159447]" />

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
            LANGUAGE SECTION
        ========================================================= */}

        <section className="bg-[#F8FBF9] px-4 py-24 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="rounded-[2rem] border border-[#DDEBE5] bg-white p-8 shadow-sm sm:p-12">

              <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                <div className="flex justify-center">

                  <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[#D9F8ED]">

                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl">
                      <Languages className="h-14 w-14 text-[#159447]" />
                    </div>

                    <div className="absolute -right-3 top-4 rounded-xl bg-[#075E54] px-3 py-2 text-xs font-black text-white shadow-lg">
                      EN
                    </div>

                    <div className="absolute -bottom-2 left-3 rounded-xl bg-[#159447] px-3 py-2 text-xs font-black text-white shadow-lg">
                      தமிழ்
                    </div>

                  </div>

                </div>


                <div>

                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                    Multilingual engagement
                  </p>

                  <h2 className="mt-4 text-3xl font-black text-[#12312C] sm:text-4xl">
                    {isTamil
                      ? "உங்கள் customers எந்த மொழியில் பேசினாலும் engage செய்யுங்கள்."
                      : "Meet customers in the language they are comfortable with."}
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {isTamil
                      ? "Different customer segments-க்கு more natural and accessible WhatsApp experiences உருவாக்குங்கள்."
                      : "Create more natural and accessible WhatsApp experiences for different customer segments and audiences."}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">

                    {[
                      "English",
                      "தமிழ்",
                      "Regional audiences",
                      "Natural conversations",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm font-bold text-[#29433D]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                        {item}
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="relative overflow-hidden bg-[#075E54] px-4 py-24 sm:px-6 lg:px-8">

          <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#159447] opacity-20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white/10">
              <img
                src="/whatsware-logo.png"
                alt="WhatsWare"
                className="h-12 w-12 object-contain"
              />
            </div>

            <h2 className="mt-8 text-3xl font-black tracking-tight text-white sm:text-5xl">
              {isTamil
                ? "உங்கள் WhatsApp-ஐ AI-powered business assistant-ஆக மாற்ற தயாரா?"
                : "Ready to turn WhatsApp into your AI-powered business assistant?"}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
              {isTamil
                ? "Customer conversations-ஐ automate செய்து, leads-ஐ qualify செய்து, உங்கள் team-க்கு அதிக நேரத்தை சேமியுங்கள்."
                : "Automate customer conversations, qualify leads and give your team more time to focus on growing the business."}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#075E54] shadow-xl transition hover:-translate-y-1"
              >
                {t.start}

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                {t.demo}
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}


/* =========================================================
   MINI STAT
========================================================= */

function MiniStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-[#F8FBF9] p-3 text-center">

      <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9F8ED] text-[#159447]">
        {icon}
      </div>

      <p className="mt-2 text-sm font-black text-[#12312C]">
        {value}
      </p>

      <p className="text-[9px] font-medium text-slate-400">
        {label}
      </p>

    </div>
  );
}


/* =========================================================
   CHAT BUBBLE
========================================================= */

function ChatBubble({
  side,
  text,
}: {
  side: "left" | "right";
  text: string;
}) {
  const isRight = side === "right";

  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>

      <div
        className={[
          "max-w-[78%] rounded-2xl px-4 py-3 shadow-sm",
          isRight
            ? "rounded-tr-sm bg-[#DCF8E8]"
            : "rounded-tl-sm bg-white",
        ].join(" ")}
      >

        {!isRight && (
          <div className="mb-1 flex items-center gap-1.5">
            <Bot className="h-3.5 w-3.5 text-[#159447]" />
            <span className="text-[10px] font-black text-[#075E54]">
              WhatsWare AI
            </span>
          </div>
        )}

        <p className="text-sm leading-6 text-[#29433D]">
          {text}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   AUTOMATION CARD
========================================================= */

function AutomationCard({
  icon,
  number,
  title,
  text,
  items,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
  items: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-[2rem] border border-[#DDEBE5] bg-[#F8FBF9] p-7 transition hover:bg-white hover:shadow-[0_25px_70px_-35px_rgba(21,148,71,0.45)] sm:p-9"
    >

      <div className="flex items-center justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447]">
          {icon}
        </div>

        <span className="text-sm font-black text-[#159447]">
          {number}
        </span>

      </div>

      <h3 className="mt-7 text-2xl font-black text-[#12312C]">
        {title}
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-500">
        {text}
      </p>

      <div className="mt-7 space-y-3">

        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >

            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#159447]" />

            <span className="text-sm font-semibold text-[#29433D]">
              {item}
            </span>

          </div>
        ))}

      </div>

    </motion.div>
  );
}