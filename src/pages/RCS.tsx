import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Image as ImageIcon,
  MessageSquareText,
  MousePointerClick,
  Play,
  Send,
  Sparkles,
  Smartphone,
  Target,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =========================================================
   RCS PAGE
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

const benefits = [
  "Interactive messages instead of plain text",
  "Images, videos and rich media",
  "Clickable CTAs and suggested replies",
  "Rich cards and product carousels",
  "Campaign automation",
  "Personalized customer journeys",
];

export default function RCS() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2FFF8] via-white to-white px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#159447]/10 blur-3xl" />

        <div className="pointer-events-none absolute right-[-160px] top-10 h-[420px] w-[420px] rounded-full bg-[#7B4DFF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#159447]/20 bg-white px-4 py-2 text-sm font-semibold text-[#159447] shadow-sm">
                <Sparkles className="h-4 w-4" />
                RCS Business Messaging
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Turn Every Message Into a
                <span className="block bg-gradient-to-r from-[#159447] via-[#20B957] to-[#7B4DFF] bg-clip-text text-transparent">
                  Rich Customer Experience
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Engage customers with rich, interactive RCS messages that
                combine text, images, videos, buttons, suggested replies,
                rich cards and carousels.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#159447] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#159447]/20 transition hover:-translate-y-0.5 hover:bg-[#0e7c39]"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-[#159447]/30 hover:text-[#159447]"
                >
                  Explore RCS
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Rich interactive messaging",
                  "Campaign automation",
                  "Rich cards & carousels",
                  "Powerful CTAs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#159447]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — PHONE MOCKUP */}
            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="absolute -inset-8 rounded-full bg-[#159447]/10 blur-3xl" />

              <div className="relative mx-auto rounded-[38px] border-[7px] border-slate-900 bg-slate-950 p-2 shadow-2xl">
                {/* Phone top */}
                <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

                <div className="overflow-hidden rounded-[29px] bg-slate-100">
                  {/* Status */}
                  <div className="flex items-center justify-between bg-white px-5 pb-2 pt-7 text-[10px] font-semibold text-slate-500">
                    <span>9:41</span>
                    <span>RCS</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#159447] text-white">
                      <MessageSquareText className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        WhatsWare
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Business verified
                      </p>
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="space-y-3 bg-slate-100 p-4">
                    <div className="rounded-2xl bg-white p-3 shadow-sm">
                      <p className="text-xs font-semibold text-[#159447]">
                        NEW COLLECTION
                      </p>

                      <div className="mt-3 h-28 rounded-xl bg-gradient-to-br from-[#dff9e8] via-white to-[#e9ddff]">
                        <div className="flex h-full items-center justify-center">
                          <Sparkles className="h-10 w-10 text-[#159447]" />
                        </div>
                      </div>

                      <h3 className="mt-3 text-sm font-bold text-slate-900">
                        Discover what's new
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        Explore our latest products and exclusive offers.
                      </p>

                      <button className="mt-3 flex w-full items-center justify-center rounded-xl bg-[#159447] py-2.5 text-xs font-bold text-white">
                        Shop Now
                      </button>
                    </div>

                    <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-[#159447] px-3 py-2.5 text-xs text-white shadow-sm">
                      Show me the latest offers
                    </div>

                    <div className="rounded-2xl rounded-bl-md bg-white p-3 shadow-sm">
                      <p className="text-xs font-semibold text-slate-800">
                        Choose an option
                      </p>

                      <div className="mt-2 space-y-2">
                        {["View Offers", "Talk to Sales", "Visit Website"].map(
                          (item) => (
                            <button
                              key={item}
                              className="w-full rounded-lg border border-[#159447]/20 bg-[#f3fff7] px-3 py-2 text-left text-[11px] font-semibold text-[#159447]"
                            >
                              {item}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="border-t border-slate-200 bg-white p-3">
                    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5">
                      <span className="flex-1 text-[11px] text-slate-400">
                        Type a message...
                      </span>
                      <Send className="h-4 w-4 text-[#159447]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-5 top-24 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf9ef]">
                    <ImageIcon className="h-4 w-4 text-[#159447]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-slate-900">
                      Rich Media
                    </p>
                    <p className="text-[9px] text-slate-500">
                      Images & Videos
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-5 bottom-28 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50">
                    <MousePointerClick className="h-4 w-4 text-purple-600" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-slate-900">
                      Interactive
                    </p>
                    <p className="text-[9px] text-slate-500">
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
          TRUST / INTRO
      ========================================================= */}

      <section className="border-y border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
            Beyond Traditional SMS
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Make customer communication more visual, interactive and useful
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
            RCS gives businesses a richer way to communicate with customers by
            combining the reach of messaging with interactive experiences.
          </p>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section
        id="features"
        className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
              RCS Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need to build richer conversations
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Create messaging experiences that help customers discover,
              interact, respond and take action.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159447]/30 hover:shadow-xl hover:shadow-[#159447]/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf9ef]">
                    <Icon className="h-6 w-6 text-[#159447]" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#159447]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          RICH MESSAGING
      ========================================================= */}

      <section className="bg-[#f7fcf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 rounded-[40px] bg-[#159447]/10 blur-3xl" />

            <div className="relative rounded-[32px] border border-slate-200 bg-white p-5 shadow-xl sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#159447]">
                    Rich Message
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-950">
                    Summer Sale
                  </h3>
                </div>

                <div className="rounded-xl bg-[#eaf9ef] p-2">
                  <Sparkles className="h-5 w-5 text-[#159447]" />
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#dff9e8] via-white to-[#e9ddff]">
                <div className="flex h-52 items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="mx-auto h-14 w-14 text-[#159447]" />
                    <p className="mt-3 text-lg font-extrabold text-slate-800">
                      40% OFF
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Get exclusive summer offers before they're gone. Explore the
                collection and save more today.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="rounded-xl bg-[#159447] py-3 text-sm font-bold text-white">
                  Shop Now
                </button>

                <button className="rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-700">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
              Rich Messaging
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Give customers more than just text
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Build richer customer experiences with media, buttons and
              interactive elements designed for modern mobile messaging.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#159447]">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>

                  <p className="text-sm font-medium text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/book-demo"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#159447] px-6 py-3.5 font-semibold text-white transition hover:bg-[#0e7c39]"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPAIGNS
      ========================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
                RCS Campaigns
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Create campaigns customers can actually interact with
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
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
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#159447]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/book-demo"
                className="mt-9 inline-flex items-center gap-2 font-semibold text-[#159447]"
              >
                Build your RCS campaign
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Campaign builder */}
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-5 shadow-lg sm:p-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Campaign Builder
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-950">
                      Summer Collection
                    </h3>
                  </div>

                  <span className="rounded-full bg-[#eaf9ef] px-3 py-1 text-xs font-bold text-[#159447]">
                    Draft
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
                      <p className="text-xs text-slate-400">{label}</p>
                      <p className="mt-1 text-lg font-extrabold text-slate-950">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-[#159447]/10 bg-[#f5fff8] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447] text-white">
                      <Send className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        RCS Campaign Ready
                      </p>
                      <p className="text-xs text-slate-500">
                        Rich card + CTA + suggested replies
                      </p>
                    </div>
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
          USE CASES
      ========================================================= */}

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#69e895]">
              Use Cases
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              One channel. Many customer journeys.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Use RCS across marketing, sales, support and transactional
              communication to create consistent customer experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <span className="text-sm font-bold text-[#69e895]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY RCS
      ========================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
                Why RCS
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Make every customer interaction more useful
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                RCS combines the simplicity of messaging with richer,
                interactive experiences that help customers understand what
                you offer and act immediately.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Sparkles,
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
                    className="rounded-3xl border border-slate-200 p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf9ef]">
                      <Icon className="h-5 w-5 text-[#159447]" />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-950">
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
          CTA
      ========================================================= */}

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-r from-[#159447] to-[#0f7c38] px-6 py-14 text-center text-white shadow-2xl shadow-[#159447]/20 sm:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Play className="h-6 w-6 fill-white" />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Ready to make messaging more interactive?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85">
              See how WhatsWare can help you build rich RCS customer journeys,
              campaigns and messaging experiences.
            </p>

            <Link
              href="/book-demo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#159447] transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    
      <Footer />
    </main>
  );
}