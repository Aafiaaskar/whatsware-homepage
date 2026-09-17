import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronDown,
  Instagram,
  MessageCircle,
  MousePointerClick,
  Play,
  Send,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
  TrendingUp,
  MessageSquareText,
  Clock3,
  UserCheck,
  Bot,
} from "lucide-react";

/* =========================================================
   WHATSWARE OFFICIAL BRAND ASSET
========================================================= */

const WHATSWARE_LOGO = "/whatsware-logo.png";
const INSTAGRAM_URL = "https://www.instagram.com/whatswareofficial/";

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: MessageSquareText,
    title: "Comment to DM",
    description:
      "Automatically turn Instagram comments into personalized private conversations.",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Bot,
    title: "AI DM Assistant",
    description:
      "Let AI answer product, pricing, availability and FAQ questions instantly.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Target,
    title: "Lead Qualification",
    description:
      "Identify high-intent prospects and automatically capture the information your sales team needs.",
    gradient: "from-indigo-500 to-emerald-500",
  },
  {
    icon: Workflow,
    title: "Giveaway Automation",
    description:
      "Capture giveaway participants from comments and DMs without manually building contact lists.",
    gradient: "from-orange-500 to-pink-500",
  },
];

/* =========================================================
   USE CASES
========================================================= */

const useCases = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Turn product comments and DMs into qualified shopping conversations.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Capture and qualify prospects automatically from Instagram engagement.",
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    description:
      "Answer repetitive Instagram questions around the clock.",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    description:
      "Convert campaigns, giveaways and engagement into measurable leads.",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "What is Instagram automation?",
    answer:
      "Instagram automation lets businesses automatically respond to comments, DMs and customer questions using predefined workflows and AI-powered conversations.",
  },
  {
    question: "Can Whatsware automatically reply to Instagram comments?",
    answer:
      "Yes. You can create workflows that detect specific comments and automatically trigger personalized responses or private DMs.",
  },
  {
    question: "Can Instagram comments trigger a DM?",
    answer:
      "Yes. Comment-to-DM workflows can automatically start a private conversation when a customer interacts with your post.",
  },
  {
    question: "Can I connect Instagram with WhatsApp?",
    answer:
      "Yes. Whatsware can help move high-intent Instagram conversations into WhatsApp so your sales team can continue the conversation.",
  },
  {
    question: "Can AI answer Instagram DMs?",
    answer:
      "Yes. AI can handle common questions, understand customer intent and respond naturally while allowing your team to take over whenever needed.",
  },
  {
    question: "Can my team handle Instagram conversations?",
    answer:
      "Yes. Conversations can be managed through a shared workspace so your team can collaborate instead of relying on individual Instagram accounts.",
  },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export default function InstagramAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-12%] top-[-15%] h-[500px] w-[500px] rounded-full bg-pink-200/40 blur-[120px]" />

          <div className="absolute right-[-10%] top-[5%] h-[550px] w-[550px] rounded-full bg-purple-200/40 blur-[130px]" />

          <div className="absolute bottom-[-20%] left-[35%] h-[450px] w-[450px] rounded-full bg-green-100/50 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#159447 1px, transparent 1px), linear-gradient(90deg, #159447 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

            {/* HERO COPY */}

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.div variants={fadeUp}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur">

                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
                    <Instagram size={14} />
                  </span>

                  Instagram Automation

                  <Sparkles
                    size={14}
                    className="text-pink-500"
                  />
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Turn Instagram
                <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  Conversations
                </span>
                Into Customers.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
              >
                Automate comments, DMs, mentions and lead qualification with
                Whatsware AI. Engage customers instantly and move high-intent
                conversations toward a sale.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="/signup"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#159447] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-[#117b3b]"
                >
                  Start Free Trial

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <Play size={16} fill="currentColor" />
                  See How It Works
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-[#159447]">
                    <Check size={14} />
                  </span>

                  AI-powered conversations
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-[#159447]">
                    <Check size={14} />
                  </span>

                  Instagram + WhatsApp
                </div>
              </motion.div>
            </motion.div>

            {/* HERO VISUAL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="relative mx-auto w-full max-w-[610px]"
            >
              <div className="absolute inset-10 rounded-full bg-gradient-to-r from-purple-300/40 via-pink-300/40 to-green-200/40 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-[0_30px_100px_rgba(40,30,80,0.15)] backdrop-blur-xl sm:p-5">

                {/* BROWSER HEADER */}

                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <Instagram size={13} />
                    Instagram Automation
                  </div>

                  <div className="h-2 w-12 rounded-full bg-slate-200" />
                </div>

                {/* CONVERSATION */}

                <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.9fr]">

                  {/* INSTAGRAM */}

                  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

                    <div className="mb-4 flex items-center gap-2">

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
                        <Instagram size={18} />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          Instagram
                        </p>

                        <p className="text-[10px] text-slate-400">
                          New conversation
                        </p>
                      </div>

                      <span className="ml-auto h-2 w-2 rounded-full bg-green-500" />
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[10px] font-semibold text-slate-400">
                        CUSTOMER COMMENT
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-800">
                        “How much is this? 😍”
                      </p>
                    </div>

                    <div className="mt-3 flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-2 text-[11px] font-medium text-white">
                        Hey! 👋 Sending you the details in DM.
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-slate-100" />
                      <div className="h-2 flex-1 rounded-full bg-slate-100" />
                    </div>
                  </div>

                  {/* WHATSWARE AI */}

                  <div className="relative rounded-2xl bg-slate-950 p-4 text-white shadow-xl">

                    <div className="absolute right-3 top-3 h-20 w-20 rounded-full bg-green-500/20 blur-2xl" />

                    <div className="relative">

                      <div className="flex items-center gap-2">

                        {/* OFFICIAL WHATSWARE LOGO */}

                        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
                          <img
                            src={WHATSWARE_LOGO}
                            alt="WhatsWare"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-bold">
                            Whatsware AI
                          </p>

                          <p className="text-[10px] text-green-400">
                            ● Online
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 space-y-3">

                        <div className="rounded-xl bg-white/10 p-3">
                          <p className="text-[10px] text-slate-400">
                            CUSTOMER INTENT
                          </p>

                          <p className="mt-1 text-xs font-bold">
                            Product enquiry
                          </p>
                        </div>

                        <div className="rounded-xl border border-green-400/20 bg-green-500/10 p-3">

                          <div className="flex items-center gap-2">
                            <Sparkles
                              size={13}
                              className="text-green-400"
                            />

                            <p className="text-[10px] font-bold text-green-300">
                              AI RESPONSE
                            </p>
                          </div>

                          <p className="mt-2 text-[11px] leading-5 text-slate-200">
                            “Absolutely! This product is ₹2,499. Would you like
                            to see available colours?”
                          </p>
                        </div>

                        <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">

                          <span className="text-[10px] text-slate-400">
                            Lead score
                          </span>

                          <span className="text-xs font-bold text-green-400">
                            92 / 100
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* FLOW */}

                <div className="mt-4 rounded-2xl bg-slate-50 p-4">

                  <div className="flex items-center justify-between gap-2">

                    {[
                      {
                        icon: Instagram,
                        label: "Instagram",
                      },
                      {
                        logo: true,
                        label: "Whatsware AI",
                      },
                      {
                        icon: MessageCircle,
                        label: "DM",
                      },
                      {
                        icon: Send,
                        label: "WhatsApp",
                      },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className="flex flex-1 items-center"
                      >

                        <div className="flex min-w-0 flex-1 flex-col items-center">

                          <motion.div
                            animate={{
                              y: [0, -4, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                            className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm"
                          >
                            {item.logo ? (
                              <img
                                src={WHATSWARE_LOGO}
                                alt="WhatsWare"
                                className="h-6 w-6 object-contain"
                              />
                            ) : (
                              (() => {
                                const Icon = item.icon!;
                                return (
                                  <Icon
                                    size={16}
                                    className={
                                      index === 0
                                        ? "text-pink-500"
                                        : "text-[#159447]"
                                    }
                                  />
                                );
                              })()
                            )}
                          </motion.div>

                          <span className="mt-1.5 truncate text-[9px] font-bold text-slate-500">
                            {item.label}
                          </span>
                        </div>

                        {index < 3 && (
                          <ArrowRight
                            size={13}
                            className="shrink-0 text-slate-300"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FLOATING CARD */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-[#159447]">
                    <Zap size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold text-slate-400">
                      RESPONSE TIME
                    </p>

                    <p className="text-sm font-black text-slate-900">
                      Instant ⚡
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOCIAL PROOF
      ========================================================= */}

      <section className="border-y border-slate-100 bg-slate-50/70">

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

            <p className="text-center text-sm font-semibold text-slate-500 sm:text-left">
              Built to help businesses turn conversations into growth.
            </p>

            <div className="flex flex-wrap justify-center gap-3">

              {[
                "E-commerce",
                "Education",
                "Restaurants",
                "Services",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500"
                >
                  {item}
                </span>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW VISUAL INSTAGRAM SHOWCASE
      ========================================================= */}

      <section className="relative overflow-hidden bg-white py-20 sm:py-28">

        <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-pink-100/70 blur-3xl" />

        <div className="absolute right-[-100px] bottom-20 h-72 w-72 rounded-full bg-purple-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <span className="text-sm font-black uppercase tracking-[0.18em] text-pink-500">
                Your Instagram. Supercharged.
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Turn every post into a
                <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  customer conversation.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Create automated journeys that react to comments, start
                conversations and move interested customers toward your sales
                team.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  ["Comments", "Automatically detected"],
                  ["DMs", "Instant responses"],
                  ["Leads", "Automatically qualified"],
                  ["Sales", "Passed to your team"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-[#159447]">
                        <Check size={18} />
                      </div>

                      <div>
                        <p className="text-sm font-black">
                          {title}
                        </p>

                        <p className="text-xs text-slate-500">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </motion.div>

            {/* VISUAL */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >

              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-pink-300/40 via-purple-300/30 to-green-200/40 blur-3xl" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl sm:p-6">

                <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-1">

                  <div className="rounded-[1.3rem] bg-white p-5">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
                          <Instagram size={21} />
                        </div>

                        <div>
                          <p className="text-sm font-black">
                            Your Business
                          </p>

                          <p className="text-[10px] text-slate-400">
                            Instagram Campaign
                          </p>
                        </div>

                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold text-[#159447]">
                        LIVE
                      </span>

                    </div>

                    {/* FAKE POST IMAGE */}

                    <div className="mt-5 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-pink-600">

                      <div className="flex aspect-[4/3] items-center justify-center p-8">

                        <div className="text-center">

                          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">

                            <ShoppingBag
                              size={38}
                              className="text-white"
                            />

                          </div>

                          <p className="mt-5 text-2xl font-black text-white">
                            NEW COLLECTION
                          </p>

                          <p className="mt-2 text-xs text-white/70">
                            Comment “PRICE” to know more
                          </p>

                        </div>

                      </div>

                    </div>

                    <div className="mt-4 flex items-center gap-4 text-slate-400">

                      <MessageCircle size={18} />

                      <Send size={18} />

                      <div className="ml-auto text-xs font-semibold">
                        1,284 interactions
                      </div>

                    </div>

                    {/* AUTOMATION CARD */}

                    <div className="mt-5 rounded-2xl border border-green-100 bg-green-50 p-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
                          <img
                            src={WHATSWARE_LOGO}
                            alt="WhatsWare"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-black text-slate-900">
                            Whatsware automation
                          </p>

                          <p className="text-[10px] text-green-700">
                            Comment detected → DM triggered
                          </p>
                        </div>

                        <Check
                          size={18}
                          className="ml-auto text-[#159447]"
                        />

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="relative py-24 sm:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mx-auto max-w-3xl text-center"
          >

            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#159447]">
              Engage. Automate. Convert.
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Every Instagram interaction
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                can become a sales opportunity.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Stop losing customers because your team couldn't respond in
              time. Whatsware helps you engage customers instantly and
              intelligently across Instagram.
            </p>

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="bg-slate-50 py-24 sm:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-12 max-w-2xl">

            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#159447]">
              Powerful automation
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Turn engagement into
              <span className="block">
                conversations automatically.
              </span>
            </h2>

          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid gap-5 md:grid-cols-2"
          >

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl sm:p-9"
                >

                  <div
                    className={`absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-[0.08] blur-2xl`}
                  />

                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#159447]">

                    Explore automation

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </div>

                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          COMMENT TO CUSTOMER FLOW
      ========================================================= */}

      <section
        id="how-it-works"
        className="relative overflow-hidden py-24 sm:py-32"
      >

        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-purple-100/60 blur-[110px]" />

        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-green-100/60 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* PHONE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mx-auto w-full max-w-[420px]"
            >

              <div className="rounded-[2.5rem] border-[8px] border-slate-950 bg-slate-950 p-2 shadow-2xl">

                <div className="overflow-hidden rounded-[2rem] bg-white">

                  <div className="flex items-center justify-between bg-white px-5 pb-4 pt-5">

                    <div>
                      <p className="text-sm font-black">
                        Instagram
                      </p>

                      <p className="text-[10px] text-slate-400">
                        @yourbusiness
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
                      <Instagram size={17} />
                    </div>

                  </div>

                  <div className="bg-slate-50 px-4 py-5">

                    <div className="rounded-2xl bg-white p-4 shadow-sm">

                      <div className="h-36 rounded-xl bg-gradient-to-br from-slate-200 via-white to-pink-100" />

                      <div className="mt-4 flex items-center justify-between">

                        <div className="flex gap-2">
                          <span className="h-6 w-6 rounded-full bg-pink-100" />
                          <span className="h-6 w-6 rounded-full bg-purple-100" />
                          <span className="h-6 w-6 rounded-full bg-slate-100" />
                        </div>

                        <span className="text-[10px] font-bold text-slate-400">
                          1,284 likes
                        </span>

                      </div>

                      <p className="mt-4 text-xs font-bold text-slate-800">
                        New collection is here ✨
                      </p>

                      <div className="mt-4 rounded-xl bg-slate-50 p-3">

                        <p className="text-[9px] font-bold text-slate-400">
                          COMMENT
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-700">
                          “Price please! 🔥”
                        </p>

                      </div>

                      <div className="mt-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-3 text-white">

                        <p className="text-[9px] font-bold text-white/60">
                          WHATSWARE AUTOMATION
                        </p>

                        <p className="mt-1 text-xs font-semibold">
                          “Sure! Check your DM 💜”
                        </p>

                      </div>

                    </div>
                  </div>

                  <div className="bg-white px-5 py-4">

                    <div className="flex items-center gap-2">

                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />

                      <div className="h-2 flex-1 rounded-full bg-slate-100" />

                      <Send
                        size={14}
                        className="text-slate-300"
                      />

                    </div>

                  </div>

                </div>
              </div>
            </motion.div>

            {/* CONTENT */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >

              <motion.div variants={fadeUp}>
                <span className="text-sm font-black uppercase tracking-[0.18em] text-pink-500">
                  Comment → DM → Customer
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"
              >
                From “How much?”
                <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  to “Here’s your order.”
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-base leading-7 text-slate-600"
              >
                Don't let high-intent comments disappear into your Instagram
                notifications. Create an automated path from public engagement
                to private conversation and finally to conversion.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 space-y-4"
              >

                {[
                  "Detect keywords and customer intent",
                  "Automatically respond to comments",
                  "Start personalized private conversations",
                  "Qualify leads with AI",
                  "Move high-intent customers to WhatsApp",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#159447]">
                      <Check
                        size={14}
                        strokeWidth={3}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {item}
                      </p>
                    </div>

                    {index === 0 && (
                      <span className="ml-auto hidden rounded-full bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-400 sm:block">
                        AUTOMATED
                      </span>
                    )}

                  </div>
                ))}

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AI SECTION
      ========================================================= */}

      <section className="bg-slate-950 py-24 text-white sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >

              <motion.div variants={fadeUp}>

                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-bold text-green-300">

                  {/* OFFICIAL WHATSWARE LOGO */}

                  <div className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-md bg-white p-0.5">
                    <img
                      src={WHATSWARE_LOGO}
                      alt="WhatsWare"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  Whatsware AI

                </div>

              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-6 text-3xl font-black tracking-tight sm:text-5xl"
              >
                Your Instagram
                <span className="block text-green-400">
                  never sleeps.
                </span>
                Neither does your AI.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-base leading-7 text-slate-400"
              >
                Give your customers instant answers without making your team
                manually handle every repetitive question.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8"
              >

                <a
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#159447] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#117b3b]"
                >
                  Build Your AI Workflow
                  <ArrowRight size={17} />
                </a>

              </motion.div>
            </motion.div>

            {/* AI DASHBOARD */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              <div className="absolute inset-10 rounded-full bg-green-500/10 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl sm:p-6">

                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div className="flex items-center gap-3">

                    {/* OFFICIAL LOGO */}

                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
                      <img
                        src={WHATSWARE_LOGO}
                        alt="WhatsWare"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>

                      <p className="text-sm font-bold">
                        Whatsware AI Agent
                      </p>

                      <p className="text-[10px] text-green-400">
                        ● Handling conversations
                      </p>

                    </div>
                  </div>

                  <span className="rounded-full bg-green-400/10 px-3 py-1.5 text-[10px] font-bold text-green-300">
                    ACTIVE
                  </span>

                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[0.75fr_1.25fr]">

                  <div className="space-y-3">

                    {[
                      ["Intent", "Product enquiry"],
                      ["Sentiment", "Positive"],
                      ["Lead score", "92 / 100"],
                      ["Next action", "WhatsApp"],
                    ].map(([label, value]) => (

                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                      >

                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                          {label}
                        </p>

                        <p className="mt-1 text-xs font-bold text-slate-200">
                          {value}
                        </p>

                      </div>
                    ))}

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">

                    <div className="mb-5 flex items-center gap-2">

                      <MessageCircle
                        size={14}
                        className="text-green-400"
                      />

                      <span className="text-xs font-bold">
                        Live conversation
                      </span>

                    </div>

                    <div className="space-y-4">

                      <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 p-3">

                        <p className="text-[10px] leading-5 text-slate-300">
                          Is this available in black?
                        </p>

                      </div>

                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-green-500 p-3">

                        <p className="text-[10px] leading-5 text-white">
                          Yes! 🖤 Black is currently available. Would you like
                          me to connect you with our team on WhatsApp?
                        </p>

                      </div>

                      <div className="flex items-center gap-2 rounded-xl border border-green-400/10 bg-green-400/5 p-3">

                        <Sparkles
                          size={13}
                          className="text-green-400"
                        />

                        <span className="text-[9px] font-semibold text-green-300">
                          AI detected high purchase intent
                        </span>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW RESULTS / DASHBOARD VISUAL
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f7fbf8] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#159447]">
              See the bigger picture
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Turn conversations into
              <span className="block text-[#159447]">
                measurable growth.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              See which conversations are creating opportunities and where
              your customers are moving through the funnel.
            </p>

          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto mt-14 max-w-6xl"
          >

            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl sm:p-7">

              <div className="flex flex-col justify-between gap-5 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">

                <div>
                  <p className="text-sm font-black">
                    Instagram Performance
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Automated conversation overview
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold text-[#159447]">

                  <TrendingUp size={13} />

                  +38.4% conversations
                </span>

              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {[
                  {
                    label: "Conversations",
                    value: "2,480",
                    icon: MessageCircle,
                  },
                  {
                    label: "Qualified Leads",
                    value: "850",
                    icon: UserCheck,
                  },
                  {
                    label: "Response Time",
                    value: "< 1 min",
                    icon: Clock3,
                  },
                  {
                    label: "Conversions",
                    value: "320",
                    icon: TrendingUp,
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                    >

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
                        <Icon size={19} />
                      </div>

                      <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>

                      <p className="mt-1 text-2xl font-black text-slate-900">
                        {item.value}
                      </p>

                    </div>
                  );
                })}

              </div>

              {/* GRAPH */}

              <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-5">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-black">
                      Conversation activity
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Last 7 days
                    </p>
                  </div>

                  <BarChart3
                    size={18}
                    className="text-[#159447]"
                  />

                </div>

                <div className="mt-8 flex h-40 items-end gap-2 sm:gap-4">

                  {[38, 54, 42, 72, 60, 88, 100, 82, 92, 76, 108, 95].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height: `${height}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.04,
                        }}
                        className="flex-1 rounded-t-xl bg-gradient-to-t from-[#159447] to-green-300"
                      />
                    ),
                  )}

                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          OMNICHANNEL
      ========================================================= */}

      <section className="relative overflow-hidden py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-3xl text-center"
          >

            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#159447]">
              One customer. Multiple channels.
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Instagram + WhatsApp.
              <span className="block text-[#159447]">
                One powerful conversation.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
              Start the conversation where your customer is and continue it
              where your sales team can close the deal.
            </p>

          </motion.div>

          <motion.div
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
              duration: 0.7,
            }}
            className="relative mx-auto mt-16 max-w-5xl"
          >

            <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">

              {/* INSTAGRAM */}

              <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-purple-50 p-7 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg">
                  <Instagram size={29} />
                </div>

                <h3 className="mt-5 font-black">
                  Instagram
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Comments, DMs, mentions and story interactions
                </p>

              </div>

              <div className="hidden items-center justify-center md:flex">
                <ArrowRight className="text-slate-300" />
              </div>

              <div className="flex items-center justify-center md:hidden">
                <ArrowRight className="rotate-90 text-slate-300" />
              </div>

              {/* WHATSWARE AI */}

              <div className="rounded-3xl border border-green-100 bg-green-50 p-7 text-center shadow-xl shadow-green-100/50">

                <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
                  <img
                    src={WHATSWARE_LOGO}
                    alt="WhatsWare"
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="mt-5 font-black">
                  Whatsware AI
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Understand, respond, qualify and route
                </p>

              </div>

              <div className="hidden items-center justify-center md:flex">
                <ArrowRight className="text-slate-300" />
              </div>

              <div className="flex items-center justify-center md:hidden">
                <ArrowRight className="rotate-90 text-slate-300" />
              </div>

              {/* WHATSAPP */}

              <div className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-7 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg">
                  <MessageCircle size={29} />
                </div>

                <h3 className="mt-5 font-black">
                  WhatsApp
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Continue the conversation and close the opportunity
                </p>

              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          LEAD FUNNEL
      ========================================================= */}

      <section className="bg-[#f7fbf8] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >

              <span className="text-sm font-black uppercase tracking-[0.18em] text-[#159447]">
                Built for conversion
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Don't just collect
                <span className="block text-[#159447]">
                  engagement.
                </span>
                Capture intent.
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-600">
                Whatsware turns scattered Instagram interactions into a
                structured customer journey that your team can actually act
                on.
              </p>

              <div className="mt-8 space-y-3">

                {[
                  "Capture customer information",
                  "Understand what they're looking for",
                  "Score and qualify the lead",
                  "Route to the right team member",
                  "Continue the sale on WhatsApp",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm"
                  >

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-[#159447]">
                      <Check size={15} />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>

                  </div>
                ))}

              </div>
            </motion.div>

            {/* FUNNEL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              <div className="mx-auto max-w-md space-y-3">

                {[
                  {
                    label: "Instagram Engagement",
                    value: "10,000",
                    width: "100%",
                    icon: Instagram,
                  },
                  {
                    label: "Conversations",
                    value: "2,400",
                    width: "82%",
                    icon: MessageCircle,
                  },
                  {
                    label: "Qualified Leads",
                    value: "850",
                    width: "64%",
                    icon: Target,
                  },
                  {
                    label: "Sales Opportunities",
                    value: "320",
                    width: "48%",
                    icon: BarChart3,
                  },
                  {
                    label: "Customers",
                    value: "120",
                    width: "34%",
                    icon: Check,
                  },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
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
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="mx-auto"
                      style={{
                        width: item.width,
                      }}
                    >

                      <div className="rounded-2xl border border-white bg-white p-4 shadow-md">

                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-[#159447]">
                            <Icon size={18} />
                          </div>

                          <div className="min-w-0 flex-1">

                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {item.label}
                            </p>

                            <p className="mt-1 text-xl font-black text-slate-900">
                              {item.value}
                            </p>

                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          USE CASES
      ========================================================= */}

      <section className="py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-12 text-center">

            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#159447]">
              Built for every conversation
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              One platform.
              <span className="block text-[#159447]">
                Endless possibilities.
              </span>
            </h2>

          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >

            {useCases.map((item) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#159447]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHY WHATSWARE
      ========================================================= */}

      <section className="bg-slate-50 py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#159447]">
              Why Whatsware
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              More than automation.
              <span className="block">
                A better way to sell.
              </span>
            </h2>

          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >

            {[
              ["AI-powered conversations", BrainCircuit],
              ["Comment-to-DM automation", MousePointerClick],
              ["Instagram + WhatsApp", MessageCircle],
              ["Shared team workspace", Users],
              ["Lead qualification", Target],
              ["Conversation analytics", BarChart3],
            ].map(([title, Icon]) => {

              const IconComponent =
                Icon as typeof BrainCircuit;

              return (
                <motion.div
                  key={title as string}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#159447]">
                    <IconComponent size={20} />
                  </div>

                  <p className="text-sm font-bold text-slate-800">
                    {title as string}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">

        <motion.div
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
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-7 py-16 text-center shadow-2xl sm:px-12 sm:py-20"
        >

          <div className="absolute left-1/2 top-[-180px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-green-500/30 blur-[100px]" />

          <div className="relative">

            {/* OFFICIAL WHATSWARE LOGO */}

            <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
              <img
                src={WHATSWARE_LOGO}
                alt="WhatsWare"
                className="h-full w-full object-contain"
              />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              Your next customer could be
              <span className="block text-green-400">
                in your comments.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Don't leave high-intent customers waiting. Start automating your
              Instagram conversations with Whatsware.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 py-4 text-sm font-black text-white shadow-lg shadow-green-900/30 transition hover:-translate-y-0.5 hover:bg-[#1aaa50]"
              >
                Start Free Trial

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                View Pricing
              </a>

            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="pb-24 sm:pb-32">

        <div className="mx-auto max-w-4xl px-5 sm:px-8">

          <div className="text-center">

            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#159447]">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Questions?
              <span className="block text-[#159447]">
                We've got answers.
              </span>
            </h2>

          </div>

          <div className="mt-12 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen =
                openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-green-200 bg-green-50/50"
                      : "border-slate-200 bg-white"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen
                          ? null
                          : index,
                      )
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >

                    <span className="text-sm font-bold text-slate-800 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-slate-400 transition-transform ${
                        isOpen
                          ? "rotate-180 text-[#159447]"
                          : ""
                      }`}
                    />

                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen
                        ? "auto"
                        : 0,
                      opacity: isOpen
                        ? 1
                        : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="overflow-hidden"
                  >

                    <p className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:px-6">
                      {faq.answer}
                    </p>

                  </motion.div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM MINI CTA
      ========================================================= */}

      <section className="border-t border-slate-100 bg-white py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8 lg:px-10">

          <div>

            <p className="text-sm font-black text-slate-900">
              Ready to turn Instagram into a growth channel?
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Start building smarter conversations with Whatsware.
            </p>

          </div>

          <a
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-[#159447] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#117b3b]"
          >
            Get Started
            <ArrowRight size={16} />
          </a>

        </div>
      </section>

      {/* =========================================================
          FOLLOW WHATSWARE ON INSTAGRAM
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#FFFDF5] py-20 sm:py-28">

        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-xl"
          >

            <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">

              {/* CONTENT */}
              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-bold text-pink-600">
                  <Instagram size={17} />
                  Follow WhatsWare
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Stay connected with
                  <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                    WhatsWare on Instagram.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  Follow our official Instagram page for WhatsApp automation tips,
                  AI updates, product features, business ideas and the latest
                  WhatsWare updates.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <Instagram size={19} />

                    Follow us on Instagram

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-pink-200 hover:bg-pink-50"
                  >
                    @whatswareofficial
                  </a>

                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500">
                    ✨ Product Updates
                  </span>

                  <span className="rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500">
                    🤖 AI Automation
                  </span>

                  <span className="rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500">
                    📈 Business Growth
                  </span>
                </div>

              </div>

              {/* INSTAGRAM QR CODE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mx-auto w-full max-w-[270px]"
              >

                <div className="rounded-[2rem] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-[3px] shadow-xl">

                  <div className="rounded-[1.8rem] bg-white p-5">

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <img
                        src="/insta%20qr.jpeg"
                        alt="Scan to follow WhatsWare on Instagram"
                        className="mx-auto h-auto w-full rounded-xl object-contain"
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-sm font-black text-slate-900">
                        Scan to follow us
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        Open Instagram and connect with WhatsWare
                      </p>
                    </div>

                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-pink-500 transition hover:text-pink-600"
                    >
                      <Instagram size={14} />
                      @whatswareofficial
                    </a>

                  </div>
                </div>

              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />

    </div>
  );
}