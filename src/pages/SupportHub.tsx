import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronRight,
  Clock3,
  Headphones,
  Inbox,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Inbox,
    title: "Shared Team Inbox",
    description:
      "Bring customer conversations into one organized workspace so your entire support team can work together.",
  },
  {
    icon: Bot,
    title: "AI-Powered Support",
    description:
      "Let AI answer repetitive questions instantly while your team focuses on conversations that need human attention.",
  },
  {
    icon: Workflow,
    title: "Support Automation",
    description:
      "Automatically route, tag, prioritize and follow up on conversations using intelligent workflows.",
  },
  {
    icon: BarChart3,
    title: "Support Analytics",
    description:
      "Understand response times, conversation volume, resolution rates and team performance.",
  },
];

const supportCapabilities = [
  "Centralize customer conversations",
  "Automatically answer common questions",
  "Assign conversations to the right team",
  "Create and manage support tickets",
  "Prioritize important conversations",
  "Trigger automated follow-ups",
  "Escalate complex issues to humans",
  "Track support performance",
];

const supportStats = [
  {
    value: "24/7",
    label: "AI-powered support",
    icon: Clock3,
  },
  {
    value: "1 Inbox",
    label: "For your entire team",
    icon: Inbox,
  },
  {
    value: "< 1 min",
    label: "Faster first responses",
    icon: Zap,
  },
  {
    value: "100%",
    label: "Conversation visibility",
    icon: BarChart3,
  },
];

function CustomerMessage({
  children,
  agent = false,
}: {
  children: React.ReactNode;
  agent?: boolean;
}) {
  return (
    <div className={`flex ${agent ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          agent
            ? "rounded-bl-md border border-slate-100 bg-white text-slate-700 shadow-sm"
            : "rounded-br-md bg-[#159447] text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function SupportHub() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-220px] top-24 h-[480px] w-[480px] rounded-full bg-emerald-100/70 blur-3xl" />
          <div className="absolute right-[-200px] top-32 h-[500px] w-[500px] rounded-full bg-green-100/60 blur-3xl" />
          <div className="absolute left-1/2 top-[30%] h-72 w-72 -translate-x-1/2 rounded-full bg-lime-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-[#159447]">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link href="/products" className="transition hover:text-[#159447]">
              Products
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-medium text-slate-700">
              Support Hub
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#159447]">
                <Headphones className="h-4 w-4" />
                WhatsWare Support Hub
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
                Support that feels{" "}
                <span className="bg-gradient-to-r from-[#159447] via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  effortless.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Give your customers faster answers and your team a smarter
                way to work. WhatsWare Support Hub brings AI, conversations,
                automation and your support team together in one powerful
                workspace.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/signup">
                  <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                    Improve Your Support
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="/pricing">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto">
                    View Pricing
                  </button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#159447]" />
                  Shared inbox
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#159447]" />
                  AI support
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#159447]" />
                  Smart automation
                </span>
              </div>
            </div>

            {/* =====================================================
                SUPPORT INBOX VISUAL
            ====================================================== */}
            <div className="relative mx-auto w-full max-w-[620px]">
              {/* Floating card */}
              <div className="absolute -left-6 top-16 z-20 hidden animate-[bounce_4s_ease-in-out_infinite] rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                    <TicketCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Ticket resolved
                    </p>
                    <p className="font-bold text-slate-800">
                      #WA-10482
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating response card */}
              <div className="absolute -right-5 bottom-12 z-20 hidden animate-[bounce_5s_ease-in-out_infinite] rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447] text-white">
                    <Zap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      First response
                    </p>
                    <p className="font-bold text-emerald-600">
                      38 sec
                    </p>
                  </div>
                </div>
              </div>

              {/* Main support dashboard */}
              <div className="rounded-[2rem] border border-emerald-100 bg-white p-3 shadow-[0_30px_80px_-25px_rgba(21,148,71,0.35)]">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447] text-white">
                        <Inbox className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="font-black text-slate-900">
                          Team Inbox
                        </p>
                        <p className="text-xs text-slate-400">
                          24 conversations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-[9px] font-bold text-white">
                          A
                        </div>

                        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-[9px] font-bold text-white">
                          R
                        </div>

                        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-purple-500 text-[9px] font-bold text-white">
                          S
                        </div>
                      </div>

                      <span className="text-xs font-semibold text-emerald-600">
                        Online
                      </span>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="border-b border-slate-100 bg-white p-4">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5">
                      <Search className="h-4 w-4 text-slate-400" />

                      <span className="text-sm text-slate-400">
                        Search conversations...
                      </span>
                    </div>
                  </div>

                  {/* Conversations */}
                  <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                    <div className="border-r border-slate-100 bg-white">
                      {[
                        {
                          name: "Priya Sharma",
                          message: "I need help with my order...",
                          time: "2m",
                          active: true,
                        },
                        {
                          name: "Rahul Kumar",
                          message: "Can I change my plan?",
                          time: "8m",
                          active: false,
                        },
                        {
                          name: "Aarav Mehta",
                          message: "Thank you for your help!",
                          time: "14m",
                          active: false,
                        },
                      ].map((conversation) => (
                        <div
                          key={conversation.name}
                          className={`border-b border-slate-100 p-4 ${
                            conversation.active
                              ? "bg-emerald-50/70"
                              : "bg-white"
                          }`}
                        >
                          <div className="flex gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
                              {conversation.name.charAt(0)}
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex justify-between gap-2">
                                <p className="truncate text-xs font-bold text-slate-800">
                                  {conversation.name}
                                </p>

                                <span className="text-[10px] text-slate-400">
                                  {conversation.time}
                                </span>
                              </div>

                              <p className="mt-1 truncate text-[11px] text-slate-400">
                                {conversation.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chat */}
                    <div className="hidden min-h-[340px] flex-col bg-slate-50 md:flex">
                      <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
                            P
                          </div>

                          <div>
                            <p className="text-xs font-bold text-slate-800">
                              Priya Sharma
                            </p>

                            <p className="text-[10px] text-emerald-600">
                              Customer • Online
                            </p>
                          </div>
                        </div>

                        <button className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-[#159447]">
                          Resolve
                        </button>
                      </div>

                      <div className="flex-1 space-y-3 p-4">
                        <CustomerMessage>
                          Hi! My order hasn't arrived yet. Can you check the
                          status?
                        </CustomerMessage>

                        <CustomerMessage agent>
                          Of course! I'll check that for you. One moment
                          please. 😊
                        </CustomerMessage>

                        <CustomerMessage agent>
                          <div>
                            Your order is currently out for delivery and
                            should arrive today.
                            <div className="mt-2 rounded-lg bg-emerald-50 p-2 text-xs font-semibold text-[#159447]">
                              📦 Order #48291
                            </div>
                          </div>
                        </CustomerMessage>

                        <CustomerMessage>
                          Perfect, thank you!
                        </CustomerMessage>
                      </div>

                      <div className="border-t border-slate-100 bg-white p-3">
                        <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
                          <span className="flex-1 text-xs text-slate-400">
                            Type a reply...
                          </span>

                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#159447] text-white">
                            <Send className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom status */}
                  <div className="flex items-center justify-between border-t border-slate-100 bg-white px-5 py-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      All systems operational
                    </div>

                    <span className="text-xs font-semibold text-slate-500">
                      AI assistance enabled
                    </span>
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
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 lg:grid-cols-4">
          {supportStats.map((stat) => {
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
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Smarter support operations
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Everything your support team needs.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Give your agents one workspace for every conversation, customer
              and support action.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#159447] transition duration-300 group-hover:bg-[#159447] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#159447]">
                    Explore feature
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          AI SUPPORT SECTION
      ========================================================== */}
      <section className="overflow-hidden bg-slate-950 py-28 text-white">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />

          <div className="relative grid items-center gap-16 lg:grid-cols-2">
            {/* Text */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <Bot className="h-4 w-4" />
                AI Support Assistant
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Let AI handle the{" "}
                <span className="text-emerald-400">
                  repetitive questions.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Your customers shouldn't have to wait for an agent to answer
                the same question for the hundredth time. Let AI provide
                instant answers and involve your team when necessary.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Instant answers to common questions",
                  "Context-aware customer conversations",
                  "Automatic escalation to human agents",
                  "Consistent support across every interaction",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15">
                      <Check className="h-4 w-4 text-emerald-300" />
                    </div>

                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI card */}
            <div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
                  <div className="flex items-center gap-3 border-b border-slate-100 bg-white px-5 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#159447] to-emerald-400 text-white">
                      <Bot className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        WhatsWare AI Support
                      </p>

                      <p className="text-xs text-emerald-600">
                        Online • Ready to help
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 p-5">
                    <div className="rounded-2xl rounded-br-md bg-[#159447] px-4 py-3 text-sm leading-6 text-white ml-auto max-w-[80%]">
                      How can I reset my account password?
                    </div>

                    <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm max-w-[85%]">
                      No problem! I can help with that. I'll send you a secure
                      password reset link right away.
                    </div>

                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#159447] text-white">
                          <ShieldCheck className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="text-xs font-bold text-slate-800">
                            Secure action completed
                          </p>

                          <p className="mt-0.5 text-[11px] text-slate-500">
                            Password reset link generated
                          </p>
                        </div>

                        <Check className="ml-auto h-5 w-5 text-[#159447]" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      AI resolved this conversation
                    </div>
                  </div>
                </div>
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
                Built for your team
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Turn support into a{" "}
                <span className="text-[#159447]">
                  competitive advantage.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A better support experience doesn't just solve problems. It
                builds trust, improves retention and creates customers who want
                to come back.
              </p>

              <Link href="/products/ai-agents">
                <button className="group mt-8 flex items-center gap-2 font-bold text-[#159447]">
                  Add AI to your support
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportCapabilities.map((capability) => (
                <div
                  key={capability}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
                    <Check className="h-5 w-5" />
                  </div>

                  <span className="font-semibold text-slate-700">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFLOW
      ========================================================== */}
      <section className="bg-emerald-50/50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Intelligent support workflow
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Every conversation finds its way.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Automatically move each customer conversation through the right
              support journey.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute left-[10%] right-[10%] top-16 hidden h-px bg-emerald-200 lg:block" />

            <div className="grid gap-6 lg:grid-cols-4">
              {[
                {
                  icon: MessageCircle,
                  title: "Customer contacts you",
                  text: "A customer starts a conversation.",
                },
                {
                  icon: Bot,
                  title: "AI understands",
                  text: "The system identifies intent and context.",
                },
                {
                  icon: Users,
                  title: "Right team gets it",
                  text: "Complex requests reach the right agent.",
                },
                {
                  icon: Check,
                  title: "Issue resolved",
                  text: "The conversation is completed and tracked.",
                },
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="relative z-10 rounded-3xl border border-emerald-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-lg shadow-emerald-100">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ANALYTICS
      ========================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#159447] to-emerald-700 p-8 text-white shadow-2xl shadow-emerald-200 sm:p-12 lg:p-16">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20">
                  <BarChart3 className="h-4 w-4" />
                  Support Analytics
                </div>

                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Know exactly how your support team is performing.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50">
                  See conversation volume, response times, resolution rates
                  and customer activity from one clear dashboard.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Track team response times",
                    "Monitor conversation volume",
                    "Measure resolution rates",
                    "Identify support bottlenecks",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-emerald-200" />
                      <span className="text-emerald-50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-5 text-slate-900 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-black">Support Performance</p>
                    <p className="text-xs text-slate-400">
                      This month
                    </p>
                  </div>

                  <BarChart3 className="h-5 w-5 text-[#159447]" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">
                      Conversations
                    </p>
                    <p className="mt-2 text-2xl font-black">18.4K</p>
                    <p className="mt-1 text-xs font-bold text-emerald-600">
                      +14.2%
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">
                      Resolution
                    </p>
                    <p className="mt-2 text-2xl font-black">94.8%</p>
                    <p className="mt-1 text-xs font-bold text-emerald-600">
                      +8.6%
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-end gap-2">
                    {[45, 58, 52, 72, 66, 86, 92, 80, 96].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex flex-1 items-end"
                        >
                          <div
                            className="w-full rounded-t-md bg-gradient-to-t from-[#159447] to-emerald-300"
                            style={{ height: `${height}px` }}
                          />
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-3 flex justify-between text-[10px] text-slate-400">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-xl shadow-emerald-200">
            <Headphones className="h-8 w-8" />
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            Make every customer feel heard.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Combine AI, automation and your support team to create faster,
            smarter and more personal customer experiences.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-8 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                Build Better Support
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </Link>

            <Link href="/pricing">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto">
                Explore Pricing
              </button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#159447]" />
              AI-powered
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#159447]" />
              Team collaboration
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#159447]" />
              Real-time insights
            </span>
          </div>
        </div>
      </section>
    
      <Footer />
    </div>
  );
}