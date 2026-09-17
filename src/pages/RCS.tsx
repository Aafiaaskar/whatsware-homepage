import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Image as ImageIcon,
  LineChart,
  MessageSquareText,
  MousePointerClick,
  Play,
  Send,
  ShieldCheck,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =========================================================
   WHATSWARE LOGO
========================================================= */

function WhatsWareLogo({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <img
      src="/whatsware-logo.png"
      alt="WhatsWare"
      className={`${className} object-contain`}
    />
  );
}

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: MessageSquareText,
    title: "Rich Messaging",
    description:
      "Send engaging messages with images, videos, buttons, suggested replies and rich content.",
  },
  {
    icon: ImageIcon,
    title: "Rich Cards",
    description:
      "Showcase products, offers and services with visually engaging cards customers can interact with.",
  },
  {
    icon: MousePointerClick,
    title: "Suggested Actions",
    description:
      "Let customers quickly call, open links, find locations or take the next action directly from the message.",
  },
  {
    icon: Target,
    title: "RCS Campaigns",
    description:
      "Create targeted promotional and transactional campaigns that feel more interactive than traditional SMS.",
  },
  {
    icon: Smartphone,
    title: "Carousel Experiences",
    description:
      "Present multiple products, services or offers in a swipeable carousel experience.",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "Connect RCS conversations with your workflows and automate customer journeys at scale.",
  },
];

/* =========================================================
   USE CASES
========================================================= */

const useCases = [
  {
    number: "01",
    title: "Marketing Campaigns",
    description:
      "Promote new launches, seasonal offers, discounts and campaigns with rich interactive messages.",
  },
  {
    number: "02",
    title: "Product Discovery",
    description:
      "Show customers products, prices, images and actions in a mobile-first rich messaging experience.",
  },
  {
    number: "03",
    title: "Order Updates",
    description:
      "Send confirmations, shipping updates, delivery notifications and other transactional messages.",
  },
  {
    number: "04",
    title: "Lead Generation",
    description:
      "Turn conversations into leads using interactive buttons, forms and guided customer journeys.",
  },
  {
    number: "05",
    title: "Customer Support",
    description:
      "Give customers quick access to answers, support actions, links and helpful resources.",
  },
  {
    number: "06",
    title: "Bookings & Reminders",
    description:
      "Make appointments, reservations and reminders more engaging with interactive RCS messages.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  "Interactive messages instead of plain text",
  "Images, videos and rich media",
  "Clickable CTAs and suggested replies",
  "Rich cards and product carousels",
  "Campaign automation",
  "Personalized customer journeys",
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    title: "Retail",
    text: "New launches, offers and abandoned carts.",
    icon: "🛍️",
  },
  {
    title: "D2C",
    text: "Order tracking, COD confirmation and reorders.",
    icon: "📦",
  },
  {
    title: "Healthcare",
    text: "Appointments, reports and reminders.",
    icon: "❤️",
  },
  {
    title: "EdTech",
    text: "Demo reminders and payment follow-ups.",
    icon: "🎓",
  },
  {
    title: "FinTech",
    text: "KYC, statements and transaction alerts.",
    icon: "💳",
  },
  {
    title: "Travel",
    text: "Tickets, itineraries and directions.",
    icon: "✈️",
  },
];

/* =========================================================
   FALLBACK STEPS
========================================================= */

const fallbackSteps = [
  {
    number: "01",
    title: "Send with WhatsApp",
    text: "Start your customer journey on WhatsApp as your primary channel.",
  },
  {
    number: "02",
    title: "Detect delivery issue",
    text: "If the WhatsApp message cannot be delivered, WhatsWare can move the journey to another messaging channel.",
  },
  {
    number: "03",
    title: "Continue with RCS",
    text: "Deliver a rich, branded RCS experience with interactive content and clear actions.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function RCS() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FFF7] via-white to-white px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-purple-300/20 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-green-200/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-[#159447]">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link
              href="/solutions"
              className="transition hover:text-[#159447]"
            >
              Solutions
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-semibold text-slate-700">RCS</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT */}

            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9f9ef] p-1">
                  <WhatsWareLogo className="h-5 w-5" />
                </div>

                <span className="text-sm font-bold text-[#159447]">
                  WhatsWare RCS Business Messaging
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
                Turn every message into a{" "}
                <span className="bg-gradient-to-r from-[#159447] via-[#20B957] to-[#7B4DFF] bg-clip-text text-transparent">
                  rich customer experience.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Engage customers with rich, interactive RCS messages that
                combine text, images, videos, buttons, suggested replies,
                rich cards and carousels.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#159447] px-7 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#0e7c39]"
                >
                  Book a Demo
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447]"
                >
                  Explore RCS
                  <ChevronRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  "Rich interactive messaging",
                  "Campaign automation",
                  "Rich cards & carousels",
                  "Powerful CTAs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#159447]" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Mini stats */}

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <p className="text-xl font-black text-slate-950">
                    Rich
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Media experiences
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <p className="text-xl font-black text-slate-950">
                    Smart
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Customer journeys
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <p className="text-xl font-black text-slate-950">
                    Fast
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Customer actions
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="relative mx-auto w-full max-w-[510px]">
              <div className="absolute -inset-10 rounded-full bg-emerald-300/20 blur-3xl" />

              {/* Main device */}

              <div className="relative rounded-[42px] border-[7px] border-slate-950 bg-slate-950 p-2 shadow-[0_35px_90px_-20px_rgba(15,23,42,0.45)]">
                <div className="absolute left-1/2 top-0 z-30 h-7 w-36 -translate-x-1/2 rounded-b-3xl bg-slate-950" />

                <div className="overflow-hidden rounded-[32px] bg-slate-100">
                  {/* Status */}

                  <div className="flex items-center justify-between bg-white px-5 pb-2 pt-8 text-[10px] font-bold text-slate-500">
                    <span>9:41</span>

                    <div className="flex items-center gap-2">
                      <span>5G</span>
                      <span>●●●</span>
                    </div>
                  </div>

                  {/* Brand header */}

                  <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-100 bg-white p-1.5 shadow-sm">
                      <WhatsWareLogo className="h-8 w-8" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-black text-slate-900">
                          WhatsWare
                        </p>

                        <span className="rounded-full bg-[#159447] px-1.5 py-0.5 text-[7px] font-bold text-white">
                          VERIFIED
                        </span>
                      </div>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        RCS Business Messaging
                      </p>
                    </div>

                    <MessageSquareText className="h-5 w-5 text-[#159447]" />
                  </div>

                  {/* Conversation */}

                  <div className="space-y-3 bg-slate-100 p-4">
                    {/* Rich card */}

                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#dff9e8] via-white to-[#e8dcff]">
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-300/30 blur-2xl" />

                        <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-300/30 blur-2xl" />

                        <div className="relative flex h-full flex-col items-center justify-center">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-lg">
                            <WhatsWareLogo className="h-10 w-10" />
                          </div>

                          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#159447]">
                            WhatsWare RCS
                          </p>
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#159447]">
                          NEW COLLECTION
                        </p>

                        <h3 className="mt-1 text-sm font-black text-slate-900">
                          Discover what's new
                        </h3>

                        <p className="mt-1 text-[10px] leading-5 text-slate-500">
                          Explore our latest products and exclusive offers.
                        </p>

                        <button className="mt-3 flex w-full items-center justify-center rounded-xl bg-[#159447] py-2.5 text-xs font-bold text-white shadow-md">
                          Shop Now
                        </button>
                      </div>
                    </div>

                    {/* Customer message */}

                    <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-[#159447] px-4 py-3 text-xs font-medium text-white shadow-sm">
                      Show me the latest offers
                    </div>

                    {/* Suggested replies */}

                    <div className="rounded-2xl rounded-bl-md bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
                          <Zap className="h-4 w-4 text-[#159447]" />
                        </div>

                        <p className="text-xs font-bold text-slate-800">
                          Choose an option
                        </p>
                      </div>

                      <div className="mt-3 grid gap-2">
                        {[
                          "View Offers",
                          "Talk to Sales",
                          "Visit Website",
                        ].map((item) => (
                          <button
                            key={item}
                            className="rounded-xl border border-[#159447]/20 bg-[#f3fff7] px-3 py-2.5 text-left text-[11px] font-semibold text-[#159447] transition hover:bg-[#e5f8eb]"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Input */}

                  <div className="border-t border-slate-200 bg-white p-3">
                    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3">
                      <span className="flex-1 text-[11px] text-slate-400">
                        Type a message...
                      </span>

                      <Send className="h-4 w-4 text-[#159447]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating rich media card */}

              <div className="absolute -left-7 top-24 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <ImageIcon className="h-5 w-5 text-[#159447]" />
                  </div>

                  <div>
                    <p className="text-[11px] font-black text-slate-900">
                      Rich Media
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-500">
                      Images • Video • Cards
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating CTA card */}

              <div className="absolute -right-7 bottom-28 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                    <MousePointerClick className="h-5 w-5 text-purple-600" />
                  </div>

                  <div>
                    <p className="text-[11px] font-black text-slate-900">
                      Interactive
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-500">
                      Smart CTAs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================== */}

      <section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-5 sm:grid-cols-4 sm:px-8">
          {[
            {
              value: "Rich",
              label: "Media Messaging",
            },
            {
              value: "2-Way",
              label: "Conversations",
            },
            {
              value: "Smart",
              label: "Customer Journeys",
            },
            {
              value: "24/7",
              label: "Automation",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-slate-50 p-5 text-center"
            >
              <p className="text-2xl font-black text-[#159447]">
                {item.value}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
            Beyond Traditional SMS
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Messaging that looks more like an experience.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            RCS gives businesses a richer way to communicate by combining the
            reach of messaging with interactive experiences customers can
            actually use.
          </p>
        </div>
      </section>

      {/* =========================================================
          WHATSAPP + RCS FALLBACK
      ========================================================== */}

      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* TEXT */}

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                WhatsApp + RCS Fallback
              </div>

              <h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Don't let one failed message become a lost customer.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Build a stronger communication journey by using WhatsApp as a
                primary channel and RCS as a rich fallback when another
                channel cannot complete delivery.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Reduce communication drop-offs",
                  "Keep important customer journeys moving",
                  "Deliver richer experiences through RCS",
                  "Connect campaigns and transactional messaging",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-200"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/book-demo"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#159447] transition hover:-translate-y-1"
              >
                Talk to an Expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* FALLBACK VISUAL */}

            <div className="relative">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                <div className="rounded-3xl bg-[#0b1220] p-5">
                  {/* Top */}

                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400">
                        Smart Delivery
                      </p>

                      <p className="mt-1 text-lg font-black">
                        Channel Fallback
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5">
                      <WhatsWareLogo className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Flow */}

                  <div className="mt-7 space-y-3">
                    {/* WhatsApp */}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15">
                          <MessageSquareText className="h-5 w-5 text-emerald-400" />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-bold">
                            WhatsApp
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-500">
                            Primary channel
                          </p>
                        </div>

                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold text-emerald-400">
                          SEND
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}

                    <div className="flex justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <ArrowRight className="h-4 w-4 rotate-90 text-slate-500" />
                      </div>
                    </div>

                    {/* Detection */}

                    <div className="rounded-2xl border border-amber-400/10 bg-amber-400/5 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10">
                          <Clock3 className="h-5 w-5 text-amber-400" />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-bold">
                            Delivery Check
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-500">
                            Detect unavailable delivery
                          </p>
                        </div>

                        <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-[9px] font-bold text-amber-400">
                          CHECK
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}

                    <div className="flex justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <ArrowRight className="h-4 w-4 rotate-90 text-slate-500" />
                      </div>
                    </div>

                    {/* RCS */}

                    <div className="rounded-2xl border border-purple-400/20 bg-purple-400/5 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-400/10">
                          <Smartphone className="h-5 w-5 text-purple-300" />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-bold">
                            RCS Experience
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-500">
                            Rich fallback channel
                          </p>
                        </div>

                        <span className="rounded-full bg-purple-400/10 px-2.5 py-1 text-[9px] font-bold text-purple-300">
                          ACTIVE
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-emerald-400/10 p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                      <p className="text-xs font-semibold text-emerald-300">
                        Customer journey continues
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fallback steps */}

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {fallbackSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="text-sm font-black text-emerald-400">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================== */}

      <section
        id="features"
        className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
              RCS Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Everything you need to build richer conversations
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Create messaging experiences that help customers discover,
              interact, respond and take action.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-50 opacity-0 blur-2xl transition group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#eaf9ef] p-3">
                        <Icon className="h-6 w-6 text-[#159447]" />
                      </div>

                      <span className="text-xs font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-black text-slate-950">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>

                    <div className="mt-6 flex items-center gap-1 text-sm font-bold text-[#159447]">
                      Explore capability
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          RICH MESSAGING
      ========================================================== */}

      <section className="bg-[#f5fbf7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Visual */}

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-emerald-200/30 blur-3xl" />

            <div className="relative rounded-[34px] border border-slate-200 bg-white p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#159447]">
                    Rich Message
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-950">
                    Summer Sale
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 p-2">
                  <WhatsWareLogo className="h-7 w-7" />
                </div>
              </div>

              {/* Product visual */}

              <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#dff9e8] via-white to-[#e8ddff]">
                <div className="relative flex h-60 items-center justify-center">
                  <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-emerald-300/30 blur-2xl" />

                  <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-purple-300/30 blur-2xl" />

                  <div className="relative">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white p-4 shadow-xl">
                      <WhatsWareLogo className="h-12 w-12" />
                    </div>

                    <p className="mt-5 text-center text-2xl font-black text-slate-800">
                      40% OFF
                    </p>

                    <p className="mt-1 text-center text-xs text-slate-500">
                      Exclusive summer offer
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Get exclusive summer offers before they're gone. Explore the
                collection and save more today.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="rounded-xl bg-[#159447] py-3 text-sm font-bold text-white shadow-lg shadow-emerald-100">
                  Shop Now
                </button>

                <button className="rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-700">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Content */}

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
              Rich Messaging
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Give customers more than just text.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Build richer customer experiences with media, buttons and
              interactive elements designed for modern mobile messaging.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#159447]">
                    <Check className="h-4 w-4 text-white" />
                  </div>

                  <p className="text-sm font-semibold text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/book-demo"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#159447] px-7 py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-1 hover:bg-[#0e7c39]"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAROUSEL EXPERIENCE
      ========================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                Interactive Carousels
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Let customers explore without leaving the conversation.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Present multiple products, services, offers or destinations
                through swipeable RCS cards with images, descriptions and
                clear actions.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Multiple cards in one experience",
                  "Images and product information",
                  "Individual calls-to-action",
                  "Mobile-first product discovery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#159447]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel mockup */}

            <div className="relative overflow-hidden rounded-[34px] bg-slate-950 p-5 shadow-2xl sm:p-7">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                      RCS Carousel
                    </p>

                    <p className="mt-1 text-lg font-black text-white">
                      Featured Products
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5">
                    <WhatsWareLogo className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-6 flex gap-4 overflow-hidden">
                  {[
                    {
                      title: "Premium Pack",
                      price: "₹1,999",
                      icon: "✦",
                    },
                    {
                      title: "Growth Kit",
                      price: "₹2,499",
                      icon: "◆",
                    },
                    {
                      title: "Business Pro",
                      price: "₹3,999",
                      icon: "●",
                    },
                  ].map((product) => (
                    <div
                      key={product.title}
                      className="min-w-[210px] overflow-hidden rounded-3xl bg-white"
                    >
                      <div className="flex h-32 items-center justify-center bg-gradient-to-br from-[#dff9e8] to-[#eadfff]">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-black text-[#159447] shadow-lg">
                          {product.icon}
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-sm font-black text-slate-900">
                          {product.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Rich product experience
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="font-black text-[#159447]">
                            {product.price}
                          </span>

                          <button className="rounded-lg bg-[#159447] px-3 py-2 text-[10px] font-bold text-white">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-center gap-1.5">
                  <span className="h-1.5 w-6 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPAIGNS
      ========================================================== */}

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                RCS Campaigns
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Create campaigns customers can actually interact with.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Move beyond one-way promotional messages. Build campaign
                experiences with rich content and clear actions that guide
                customers toward the next step.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Create targeted campaign journeys",
                  "Use rich media and interactive cards",
                  "Add clear calls-to-action",
                  "Personalize customer communication",
                  "Automate follow-ups",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#159447]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/book-demo"
                className="mt-9 inline-flex items-center gap-2 font-bold text-[#159447]"
              >
                Build your RCS campaign
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Campaign builder */}

            <div className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-xl sm:p-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      Campaign Builder
                    </p>

                    <h3 className="mt-1 text-lg font-black text-slate-950">
                      Summer Collection
                    </h3>
                  </div>

                  <span className="rounded-full bg-[#eaf9ef] px-3 py-1 text-xs font-bold text-[#159447]">
                    Ready
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Audience", "12,480"],
                    ["Reach", "98%"],
                    ["Clicks", "8.4%"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-slate-50 p-4"
                    >
                      <p className="text-xs text-slate-400">
                        {label}
                      </p>

                      <p className="mt-1 text-xl font-black text-slate-950">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-100 bg-[#f5fff8] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#159447] p-2">
                      <WhatsWareLogo className="h-7 w-7 brightness-0 invert" />
                    </div>

                    <div>
                      <p className="text-sm font-black text-slate-900">
                        RCS Campaign Ready
                      </p>

                      <p className="text-xs text-slate-500">
                        Rich card + CTA + suggested replies
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-emerald-100">
                    <div className="h-full w-[86%] rounded-full bg-[#159447]" />
                  </div>

                  <div className="mt-2 flex justify-between text-[9px] text-slate-400">
                    <span>Campaign setup</span>
                    <span>86%</span>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700">
                    Preview
                  </button>

                  <button className="flex-1 rounded-xl bg-[#159447] py-3 text-sm font-semibold text-white">
                    Schedule Campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
              Built for Every Business
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Power high-intent customer journeys across industries.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Use RCS across marketing, sales, support and transactional
              communication.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-2xl">
                    {industry.icon}
                  </div>

                  <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#159447]" />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950">
                  {industry.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {industry.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          AUTOMATION + ANALYTICS
      ========================================================== */}

      <section className="bg-[#f7fcf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Automation */}

            <div className="relative overflow-hidden rounded-[34px] bg-slate-950 p-7 text-white shadow-xl sm:p-9">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10">
                  <Zap className="h-6 w-6 text-emerald-400" />
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  RCS API & Automation
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-slate-300">
                  Connect RCS messaging with signups, purchases, abandoned
                  carts, renewals and other real-time business events.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Triggered messages",
                    "Customer journey automation",
                    "CRM and workflow connections",
                    "Personalized messaging",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Analytics */}

            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-7 shadow-xl sm:p-9">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-200/30 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50">
                    <LineChart className="h-6 w-6 text-purple-600" />
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#159447]">
                    LIVE
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-950">
                  Unified Analytics
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Understand delivery, engagement, clicks and customer actions
                  across your messaging journeys.
                </p>

                {/* Fake chart */}

                <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-end gap-2">
                    {[30, 44, 38, 58, 52, 70, 64, 82, 75, 92].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-[#159447] to-emerald-300"
                          style={{ height: `${height}px` }}
                        />
                      )
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Engagement</span>

                    <span className="flex items-center gap-1 font-bold text-[#159447]">
                      <TrendingUp className="h-3 w-3" />
                      Growing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          USE CASES
      ========================================================== */}

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#69e895]">
              Use Cases
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              One channel. Many customer journeys.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Use RCS across marketing, sales, support and transactional
              communication to create consistent customer experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#69e895]">
                    {item.number}
                  </span>

                  <ArrowRight className="h-4 w-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-emerald-400" />
                </div>

                <h3 className="mt-5 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY RCS
      ========================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                Why RCS
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Make every customer interaction more useful.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                RCS combines the simplicity of messaging with richer,
                interactive experiences that help customers understand what
                you offer and act immediately.
              </p>

              <Link
                href="/book-demo"
                className="mt-8 inline-flex items-center gap-2 font-bold text-[#159447]"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ImageIcon,
                  title: "Rich Experiences",
                  text: "Create visually engaging conversations.",
                },
                {
                  icon: MousePointerClick,
                  title: "More Actions",
                  text: "Give customers clear next steps.",
                },
                {
                  icon: Target,
                  title: "Better Journeys",
                  text: "Guide customers from discovery to conversion.",
                },
                {
                  icon: Zap,
                  title: "Automation",
                  text: "Scale personalized messaging workflows.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf9ef]">
                      <Icon className="h-5 w-5 text-[#159447]" />
                    </div>

                    <h3 className="mt-5 font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#159447] via-[#117d3c] to-[#075E54] px-6 py-16 text-center text-white shadow-2xl sm:px-10 lg:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-xl">
              <WhatsWareLogo className="h-11 w-11" />
            </div>

            <h2 className="mt-7 text-3xl font-black tracking-tight sm:text-5xl">
              Ready to make messaging more interactive?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
              See how WhatsWare can help you build rich RCS customer journeys,
              campaigns, fallback experiences and messaging automation.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/book-demo"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#159447] shadow-xl transition hover:-translate-y-1"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/15"
              >
                Explore WhatsWare
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}