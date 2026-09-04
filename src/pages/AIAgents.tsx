import React from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

import {
  ArrowRight,
  Bot,
  Brain,
  Check,
  ChevronRight,
  Clock3,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  Zap,
  ShieldCheck,
  BarChart3,
  Workflow,
  Headphones,
  Globe2,
  Send,
} from "lucide-react";

/* =========================================================
   AI FEATURES
========================================================= */

const aiFeatures = [
  {
    icon: Brain,
    title: "Understands customer intent",
    description:
      "Your AI agent understands what customers mean, not just the words they type.",
  },
  {
    icon: MessageCircle,
    title: "Natural conversations",
    description:
      "Create helpful, human-like conversations across WhatsApp and your digital channels.",
  },
  {
    icon: Zap,
    title: "Instant responses",
    description:
      "Answer customers in seconds, 24/7, without making them wait for your team.",
  },
  {
    icon: Target,
    title: "Qualify leads automatically",
    description:
      "Identify high-intent prospects and send the right leads to your sales team.",
  },
];

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  "Answer FAQs automatically",
  "Qualify and score leads",
  "Recommend products and services",
  "Collect customer information",
  "Book appointments",
  "Send reminders and follow-ups",
  "Transfer conversations to humans",
  "Connect with your existing systems",
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: "24/7",
    label: "Always-on customer engagement",
    icon: Clock3,
  },
  {
    value: "< 1 sec",
    label: "Instant AI responses",
    icon: Zap,
  },
  {
    value: "100%",
    label: "Consistent conversations",
    icon: ShieldCheck,
  },
  {
    value: "∞",
    label: "Scalable conversations",
    icon: Users,
  },
];

/* =========================================================
   CHAT BUBBLE
========================================================= */

function ChatBubble({
  children,
  user = false,
}: {
  children: React.ReactNode;
  user?: boolean;
}) {
  return (
    <div className={`flex ${user ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          user
            ? "rounded-br-md bg-[#159447] text-white"
            : "rounded-bl-md border border-slate-100 bg-white text-slate-700 shadow-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   AI AGENTS PAGE
========================================================= */

export default function AIAgents() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative isolate overflow-hidden pt-28 lg:pt-36">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-emerald-100/60 blur-3xl" />

          <div className="absolute right-[-180px] top-[180px] h-[500px] w-[500px] rounded-full bg-green-100/70 blur-3xl" />

          <div className="absolute left-1/2 top-[20%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-lime-100/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/"
              className="transition hover:text-[#159447]"
            >
              {t("Home")}
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link
              href="/products"
              className="transition hover:text-[#159447]"
            >
              {t("Products")}
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-medium text-slate-700">
              {t("AI Agents")}
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
            {/* =====================================================
                HERO LEFT
            ====================================================== */}

            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-[#159447] shadow-sm">
                <Sparkles className="h-4 w-4" />

                {t("WhatsWare AI Agents")}
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                {t("AI that")}{" "}
                <span className="bg-gradient-to-r from-[#159447] via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  {t("talks, understands & acts.")}
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                {t(
                  "Turn every customer conversation into an intelligent experience. WhatsWare AI Agents answer questions, qualify leads, automate support, and take action — around the clock."
                )}
              </p>

              {/* CTA BUTTONS */}

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/signup">
                  <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 py-4 font-bold text-white shadow-lg shadow-emerald-200 transition duration-300 hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                    {t("Start Building with AI")}

                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="/pricing">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto">
                    {t("Explore Plans")}
                  </button>
                </Link>
              </div>

              {/* BENEFITS */}

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#159447]" />

                  {t("No-code setup")}
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#159447]" />

                  {t("24/7 automation")}
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#159447]" />

                  {t("Human handoff")}
                </span>
              </div>
            </div>

            {/* =====================================================
                AI CONVERSATION VISUAL
            ====================================================== */}

            <div className="relative mx-auto w-full max-w-[560px]">
              {/* Floating card 1 */}

              <div className="absolute -left-4 top-12 z-20 hidden animate-[bounce_4s_ease-in-out_infinite] rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                    <Brain className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      {t("AI Status")}
                    </p>

                    <p className="font-bold text-slate-800">
                      {t("Thinking...")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}

              <div className="absolute -right-5 bottom-16 z-20 hidden animate-[bounce_5s_ease-in-out_infinite] rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                    <Check className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      {t("Lead detected")}
                    </p>

                    <p className="font-bold text-slate-800">
                      {t("High Intent")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Main window */}

              <div className="relative rounded-[2rem] border border-emerald-100 bg-white p-3 shadow-[0_30px_80px_-25px_rgba(21,148,71,0.35)]">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
                  {/* Header */}

                  <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#159447] to-emerald-400 text-white">
                        <Bot className="h-6 w-6" />

                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
                      </div>

                      <div>
                        <p className="font-bold text-slate-900">
                          Aira
                        </p>

                        <p className="text-xs text-emerald-600">
                          {t("Online • AI Agent")}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#159447]">
                      {t("Active")}
                    </div>
                  </div>

                  {/* Conversation */}

                  <div className="space-y-4 p-5">
                    <div className="mx-auto w-fit rounded-full bg-slate-200 px-3 py-1 text-[11px] text-slate-500">
                      {t("Today • 10:42 AM")}
                    </div>

                    <ChatBubble user>
                      {t(
                        "Hi! I want to know which plan is best for my business."
                      )}
                    </ChatBubble>

                    <ChatBubble>
                      <div className="space-y-2">
                        <p>
                          {t(
                            "Absolutely! I can help you choose the right plan. 😊"
                          )}
                        </p>

                        <p className="text-slate-500">
                          {t(
                            "How many customer conversations do you handle each month?"
                          )}
                        </p>
                      </div>
                    </ChatBubble>

                    <ChatBubble user>
                      {t("Around 5,000 conversations.")}
                    </ChatBubble>

                    <ChatBubble>
                      {t("Based on that")}{" "}
                      <strong className="text-[#159447]">
                        {t("Boost")}
                      </strong>{" "}
                      {t(
                        "would be a great fit. I can also connect you with our sales team if you'd like."
                      )}
                    </ChatBubble>

                    {/* Typing */}

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />

                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />

                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>

                  {/* Input */}

                  <div className="border-t border-slate-100 bg-white p-4">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <span className="flex-1 text-sm text-slate-400">
                        {t("Ask WhatsWare AI anything...")}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#159447] text-white">
                        <Send className="h-4 w-4" />
                      </div>
                    </div>
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

      <section className="mt-24 border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group px-5 py-10 text-center transition hover:bg-white sm:px-8"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#159447] transition group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="text-3xl font-black text-slate-950">
                  {stat.value}
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {t(stat.label)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          INTRO / FEATURES
      ========================================================== */}

      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t("One intelligent agent")}
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {t("More than a chatbot.")}
              <br />

              <span className="text-[#159447]">
                {t("An AI employee.")}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {t(
                "WhatsWare AI Agents can understand conversations, make decisions, collect information, trigger workflows, and hand over to your team whenever a human is needed."
              )}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#159447] transition duration-300 group-hover:scale-110 group-hover:bg-[#159447] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {t(feature.title)}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {t(feature.description)}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#159447]">
                    {t("Learn more")}

                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          AI WORKFLOW VISUAL
      ========================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500 blur-[120px]" />

          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-green-400 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <Workflow className="h-4 w-4" />

                {t("Intelligent automation")}
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                {t("From conversation")}

                <span className="text-emerald-400">
                  {t(" to action.")}
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {t(
                  "Your AI doesn't just reply. It understands the customer's intent and connects that conversation to the next action."
                )}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Understand what the customer wants",
                  "Choose the right response",
                  "Trigger an automated workflow",
                  "Escalate to your team when needed",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-bold text-emerald-300 ring-1 ring-emerald-400/30">
                      {index + 1}
                    </div>

                    <span className="text-slate-200">
                      {t(item)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WORKFLOW CARDS */}

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent" />

              <div className="relative space-y-5">
                {[
                  {
                    icon: MessageCircle,
                    title: "Customer message",
                    text: "I want to book an appointment",
                  },
                  {
                    icon: Brain,
                    title: "AI understands",
                    text: "Intent: Appointment Booking",
                  },
                  {
                    icon: Workflow,
                    title: "Workflow triggered",
                    text: "Check availability → Offer slots",
                  },
                  {
                    icon: Check,
                    title: "Action completed",
                    text: "Appointment confirmed",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:border-emerald-400/40 hover:bg-white/[0.09]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <div className="font-bold text-white">
                            {t(item.title)}
                          </div>

                          <div className="mt-1 text-sm text-slate-400">
                            {t(item.text)}
                          </div>
                        </div>
                      </div>

                      {index !== 3 && (
                        <div className="absolute -bottom-5 left-1/2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-emerald-400/30 bg-slate-950 text-emerald-400">
                          <ChevronRight className="h-3 w-3 rotate-90" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                {t("Built for real business")}
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                {t("Give your AI the power to")}{" "}
                <span className="text-[#159447]">
                  {t("get things done.")}
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {t(
                  "Move beyond simple automated replies. Build customer experiences where conversations naturally lead to meaningful business actions."
                )}
              </p>

              <Link href="/plug-and-play">
                <button className="group mt-8 flex items-center gap-2 font-bold text-[#159447]">
                  {t("Explore integrations")}

                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
                    <Check className="h-5 w-5" />
                  </div>

                  <span className="font-semibold text-slate-700">
                    {t(capability)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          USE CASES
      ========================================================== */}

      <section className="bg-emerald-50/50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t("One AI. Many jobs.")}
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {t(
                "Built for every stage of the customer journey."
              )}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              {t(
                "Let AI handle repetitive conversations while your people focus on the moments that need a human touch."
              )}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Sales",
                description:
                  "Capture, qualify and nurture leads automatically before handing high-intent prospects to your sales team.",
                items: [
                  "Lead qualification",
                  "Product recommendations",
                  "Follow-ups",
                ],
              },
              {
                icon: Headphones,
                title: "Customer Support",
                description:
                  "Resolve common questions instantly and route complex conversations to the right team member.",
                items: [
                  "24/7 FAQ support",
                  "Smart routing",
                  "Human handoff",
                ],
              },
              {
                icon: BarChart3,
                title: "Operations",
                description:
                  "Automate repetitive customer workflows and keep your teams focused on high-value work.",
                items: [
                  "Data collection",
                  "Appointment booking",
                  "Notifications",
                ],
              },
            ].map((useCase) => {
              const Icon = useCase.icon;

              return (
                <div
                  key={useCase.title}
                  className="group rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-slate-900">
                    {t(useCase.title)}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {t(useCase.description)}
                  </p>

                  <div className="mt-7 space-y-3">
                    {useCase.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <Check className="h-4 w-4 text-[#159447]" />

                        {t(item)}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          GLOBAL / CHANNEL SECTION
      ========================================================== */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#159447] to-emerald-700 p-8 text-white shadow-2xl shadow-emerald-200 sm:p-12 lg:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* LEFT */}

              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20">
                  <Globe2 className="h-4 w-4" />

                  {t("Connected conversations")}
                </div>

                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  {t("One AI experience.")}
                  <br />
                  {t("Every customer touchpoint.")}
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50">
                  {t(
                    "Connect your AI agents with WhatsApp, your website, workflows, CRM and the tools your business already uses."
                  )}
                </p>

                <Link href="/plug-and-play">
                  <button className="group mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#159447] transition hover:-translate-y-1 hover:bg-emerald-50">
                    {t("Explore integrations")}

                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>

              {/* RIGHT */}

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                    },
                    {
                      icon: Bot,
                      label: "AI Agents",
                    },
                    {
                      icon: Workflow,
                      label: "Workflows",
                    },
                    {
                      icon: BarChart3,
                      label: "Analytics",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
                      >
                        <Icon className="h-8 w-8 text-white" />

                        <p className="mt-5 font-bold">
                          {t(item.label)}
                        </p>

                        <div className="mt-4 h-1 w-8 rounded-full bg-white/50 transition-all group-hover:w-full" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-lg shadow-emerald-200">
            <Bot className="h-8 w-8" />
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            {t("Ready to put AI to work?")}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {t(
              "Start building smarter customer experiences with WhatsWare AI Agents today."
            )}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-8 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                {t("Get Started")}

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </Link>

            <Link href="/pricing">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto">
                {t("View Pricing")}
              </button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#159447]" />

              {t("Built for SMBs")}
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#159447]" />

              {t("Easy to get started")}
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#159447]" />

              {t("Scale when you need it")}
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}