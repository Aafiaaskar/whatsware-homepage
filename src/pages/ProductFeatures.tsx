import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAgentShowcase from "@/components/AIAgentShowcase";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  FileText,
  GitBranch,
  Globe,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  MousePointerClick,
  Puzzle,
  Rocket,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Deploy intelligent AI agents that understand customer questions, qualify leads and automate conversations around the clock.",
    href: "/products/ai-agents",
    tag: "AI",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description:
      "Automate customer communication with powerful WhatsApp workflows, templates, notifications and smart replies.",
    href: "/products/whatsapp-automation",
    tag: "Communication",
  },
  {
    icon: Workflow,
    title: "Workflow Builder",
    description:
      "Build visual customer journeys without complicated coding. Connect triggers, actions, conditions and automations.",
    href: "/products/workflow-builder",
    tag: "Automation",
  },
  {
    icon: LayoutDashboard,
    title: "Analytics",
    description:
      "Track conversations, campaigns, leads, conversions and automation performance from one powerful dashboard.",
    href: "/products/analytics",
    tag: "Insights",
  },
  {
    icon: Send,
    title: "Marketing Hub",
    description:
      "Create, manage and measure customer campaigns across your communication channels from one centralized workspace.",
    href: "/products/marketing-hub",
    tag: "Marketing",
  },
  {
    icon: Headphones,
    title: "Support Hub",
    description:
      "Give your support team a shared workspace to manage conversations, resolve issues and deliver faster service.",
    href: "/products/support-hub",
    tag: "Support",
  },
];

const platformFeatures = [
  {
    icon: Zap,
    title: "Real-time automation",
    text: "Trigger the right action instantly when customers interact with your business.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    text: "Bring your sales, marketing and support teams together in one workspace.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise security",
    text: "Keep your customer communication and business data protected with secure infrastructure.",
  },
  {
    icon: Puzzle,
    title: "Powerful integrations",
    text: "Connect the tools your business already uses and keep your workflows synchronized.",
  },
  {
    icon: Code2,
    title: "Developer friendly",
    text: "Use APIs and integrations to build custom experiences around your business requirements.",
  },
  {
    icon: Cloud,
    title: "Built for scale",
    text: "Grow from your first campaign to high-volume customer communication without changing platforms.",
  },
];

const channels = [
  "WhatsApp",
  "Instagram",
  "RCS",
  "Voice",
  "Website Chat",
  "Business APIs",
];

export default function ProductFeatures() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-emerald-100/70 blur-3xl" />
          <div className="absolute right-[-200px] top-0 h-[600px] w-[600px] rounded-full bg-green-100/60 blur-3xl" />
          <div className="absolute left-1/2 top-[350px] h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-lime-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-[#159447]">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link
              href="/products"
              className="transition hover:text-[#159447]"
            >
              Products
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-semibold text-slate-700">
              Product Features
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#159447]">
                <Sparkles className="h-4 w-4" />
                One platform. Everything connected.
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                Everything you need to{" "}
                <span className="bg-gradient-to-r from-[#159447] via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  engage & grow.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                WhatsWare brings AI, automation, marketing, sales, support and
                analytics together in one powerful customer engagement
                platform.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/signup">
                  <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                    Get Started
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="/pricing">
                  <button className="w-full rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto">
                    View Pricing
                  </button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                {[
                  "AI-powered",
                  "Automation",
                  "Multi-channel",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT PRODUCT VISUAL */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-emerald-200/40 via-green-100/30 to-lime-200/30 blur-3xl" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_35px_90px_-25px_rgba(15,23,42,0.3)]">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
                  {/* Top bar */}
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
                        <Rocket className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          WhatsWare
                        </p>
                        <p className="text-[9px] text-slate-500">
                          Customer Engagement OS
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-[70px_1fr]">
                    {/* Sidebar */}
                    <div className="border-r border-white/10 bg-white/[0.03] p-3">
                      <div className="space-y-3">
                        {[LayoutDashboard, MessageCircle, Bot, Workflow, BarChartIcon, Settings2].map(
                          (Icon, index) => (
                            <div
                              key={index}
                              className={`flex h-9 items-center justify-center rounded-xl ${
                                index === 0
                                  ? "bg-emerald-500/20 text-emerald-400"
                                  : "text-slate-600"
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Dashboard */}
                    <div className="bg-[#0b1220] p-5">
                      <div className="mb-5">
                        <p className="text-xs font-bold text-white">
                          Overview
                        </p>
                        <p className="mt-1 text-[9px] text-slate-500">
                          Your business at a glance
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          {
                            label: "Conversations",
                            value: "48.2K",
                            change: "+24%",
                          },
                          {
                            label: "Qualified Leads",
                            value: "8.6K",
                            change: "+31%",
                          },
                          {
                            label: "AI Resolution",
                            value: "87%",
                            change: "+13%",
                          },
                          {
                            label: "Campaign Reach",
                            value: "1.2M",
                            change: "+18%",
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="rounded-2xl border border-white/5 bg-white/[0.04] p-4"
                          >
                            <p className="text-[8px] text-slate-500">
                              {item.label}
                            </p>

                            <div className="mt-2 flex items-end justify-between">
                              <p className="text-lg font-black text-white">
                                {item.value}
                              </p>

                              <span className="text-[8px] font-bold text-emerald-400">
                                {item.change}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.04] p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-[9px] font-bold text-white">
                            Customer engagement
                          </p>

                          <span className="text-[8px] text-emerald-400">
                            Live
                          </span>
                        </div>

                        <div className="mt-5 flex h-24 items-end gap-2">
                          {[30, 42, 38, 58, 49, 67, 60, 78, 70, 88, 74, 96].map(
                            (height, index) => (
                              <div
                                key={index}
                                className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-300"
                                style={{ height: `${height}%` }}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-emerald-100 bg-white p-4 shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[9px] text-slate-400">
                      Automation active
                    </p>

                    <p className="text-xs font-bold text-slate-800">
                      1,284 actions today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE INTRO
      ====================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              The WhatsWare platform
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Powerful products. One connected experience.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Stop switching between disconnected tools. Everything your team
              needs to attract, engage, convert and support customers lives in
              one platform.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Link key={feature.title} href={feature.href}>
                  <div className="group h-full cursor-pointer rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>

                      <span className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold text-slate-500">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-black">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-500">
                      {feature.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#159447]">
                      Explore
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CHANNELS
      ====================================================== */}
      <section className="bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">
                <Globe className="h-4 w-4" />
                Omnichannel engagement
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Meet customers wherever they are.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Connect your customer communication channels to WhatsWare and
                manage conversations from one unified platform.
              </p>

              <Link href="/solutions">
                <button className="group mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-50">
                  Explore Solutions
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {channels.map((channel, index) => (
                <div
                  key={channel}
                  className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-emerald-400">
                    {index === 0 ? (
                      <MessageCircle className="h-6 w-6" />
                    ) : index === 1 ? (
                      <Globe className="h-6 w-6" />
                    ) : index === 2 ? (
                      <Send className="h-6 w-6" />
                    ) : index === 3 ? (
                      <Headphones className="h-6 w-6" />
                    ) : index === 4 ? (
                      <MousePointerClick className="h-6 w-6" />
                    ) : (
                      <Code2 className="h-6 w-6" />
                    )}
                  </div>

                  <p className="mt-4 text-sm font-bold">
                    {channel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM FEATURES
      ====================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Built for modern teams
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              More than features. A complete platform.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Designed to make customer engagement simpler, faster and more
              scalable.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          NO CODE SECTION
      ====================================================== */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-lime-50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                <GitBranch className="h-4 w-4" />
                Automation
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Build smarter customer journeys without complicated code.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Create powerful workflows visually. Connect triggers, rules,
                AI agents and actions to automate repetitive work.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Visual workflow builder",
                  "Conditional logic",
                  "Automated follow-ups",
                  "AI-powered actions",
                  "Real-time triggers",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-medium text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#159447]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/products/workflow-builder">
                <button className="group mt-8 flex items-center gap-2 font-bold text-[#159447]">
                  Explore Workflow Builder
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* Workflow visual */}
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-2xl shadow-emerald-100/50">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black">
                      Lead Follow-up Flow
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Active automation
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700">
                    Active
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: MousePointerClick,
                      title: "New lead received",
                      color: "bg-blue-50 text-blue-600",
                    },
                    {
                      icon: Bot,
                      title: "AI qualifies lead",
                      color: "bg-purple-50 text-purple-600",
                    },
                    {
                      icon: MessageCircle,
                      title: "Send WhatsApp message",
                      color: "bg-emerald-50 text-emerald-600",
                    },
                    {
                      icon: Users,
                      title: "Assign to sales team",
                      color: "bg-orange-50 text-orange-600",
                    },
                  ].map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div key={step.title}>
                        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.color}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="flex-1">
                            <p className="text-sm font-bold">
                              {step.title}
                            </p>

                            <p className="mt-1 text-[10px] text-slate-400">
                              Automated action
                            </p>
                          </div>

                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        </div>

                        {index < 3 && (
                          <div className="ml-9 h-4 border-l-2 border-dashed border-emerald-200" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-xl shadow-emerald-200">
            <Sparkles className="h-8 w-8" />
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            Your customers. Your channels. One powerful platform.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Bring your customer engagement, automation and intelligence
            together with WhatsWare.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-8 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                Start Building
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </Link>

            <Link href="/products">
              <button className="w-full rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      <AIAgentShowcase />
      <Footer />
    </div>
  );
}

/* Small local icon alias used by the dashboard visual */
function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}