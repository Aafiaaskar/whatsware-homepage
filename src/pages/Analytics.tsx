import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAgentShowcase from "@/components/AIAgentShowcase";

import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Eye,
  LineChart,
  MessageCircle,
  MousePointerClick,
  PieChart,
  Send,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

/* =========================================================
   WHATSWARE OFFICIAL LOGO
   ========================================================= */

function WhatsWareLogo({
  className = "h-6 w-6",
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
   METRICS
   ========================================================= */

const metrics = [
  {
    title: "Total Conversations",
    value: "48,291",
    change: "+24.8%",
    icon: MessageCircle,
  },
  {
    title: "Qualified Leads",
    value: "8,642",
    change: "+31.4%",
    icon: Users,
  },
  {
    title: "Campaign Reach",
    value: "1.28M",
    change: "+18.6%",
    icon: Eye,
  },
  {
    title: "Automation Rate",
    value: "87.4%",
    change: "+12.9%",
    icon: Zap,
  },
];

/* =========================================================
   AI INSIGHTS
   ========================================================= */

const insights = [
  {
    icon: TrendingUp,
    title: "Lead conversion increased",
    text: "Your WhatsApp campaigns generated 31% more qualified leads this month.",
  },
  {
    icon: Clock3,
    title: "Response time improved",
    text: "AI automation reduced average customer response time by 42%.",
  },
  {
    icon: Bot,
    title: "AI handled more conversations",
    text: "Your AI agents resolved 8,420 conversations without human intervention.",
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function Analytics() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-emerald-100/70 blur-3xl" />

          <div className="absolute -right-48 top-0 h-[600px] w-[600px] rounded-full bg-green-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/"
              className="transition hover:text-[#159447]"
            >
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
              Analytics
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* =====================================================
                LEFT
            ====================================================== */}

            <div>
              {/* WhatsWare branding badge */}

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#159447]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1 shadow-sm">
                  <WhatsWareLogo className="h-5 w-5" />
                </span>

                <span>WhatsWare Analytics</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                Turn conversations into{" "}
                <span className="bg-gradient-to-r from-[#159447] via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  business insights.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                See exactly what is happening across your conversations,
                campaigns, leads and automations — and use those insights to
                make smarter decisions.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/signup">
                  <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                    Explore Analytics

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
                  "Real-time data",
                  "AI-powered insights",
                  "Custom reports",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#159447]" />

                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* =====================================================
                RIGHT DASHBOARD
            ====================================================== */}

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_35px_90px_-25px_rgba(15,23,42,0.3)]">
                {/* Header */}

                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                  <div className="flex items-center gap-3">
                    {/* Official logo */}

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 p-1.5">
                      <WhatsWareLogo className="h-7 w-7" />
                    </div>

                    <div>
                      <p className="text-sm font-black">
                        Business Overview
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-400">
                        Last 30 days
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 px-3 py-2 text-[10px] font-semibold text-slate-500">
                    Last 30 days
                  </div>
                </div>

                <div className="space-y-5 bg-slate-50 p-5">
                  {/* Mini metrics */}

                  <div className="grid grid-cols-2 gap-3">
                    {metrics.slice(0, 4).map((metric) => {
                      const Icon = metric.icon;

                      return (
                        <div
                          key={metric.title}
                          className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-[#159447]">
                              <Icon className="h-4 w-4" />
                            </div>

                            <span className="text-[9px] font-bold text-emerald-600">
                              {metric.change}
                            </span>
                          </div>

                          <p className="mt-3 text-[9px] text-slate-400">
                            {metric.title}
                          </p>

                          <p className="mt-1 text-lg font-black text-slate-900">
                            {metric.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Chart */}

                  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold">
                          Conversations
                        </p>

                        <p className="mt-1 text-[9px] text-slate-400">
                          Conversation volume
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600">
                        <TrendingUp className="h-3 w-3" />
                        24.8%
                      </div>
                    </div>

                    <div className="relative mt-5 h-36">
                      {/* Grid lines */}

                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[1, 2, 3, 4].map((line) => (
                          <div
                            key={line}
                            className="border-t border-dashed border-slate-100"
                          />
                        ))}
                      </div>

                      {/* Bars */}

                      <div className="absolute inset-0 flex items-end justify-between gap-2 px-1">
                        {[
                          38,
                          48,
                          42,
                          60,
                          52,
                          69,
                          58,
                          78,
                          65,
                          83,
                          74,
                          94,
                        ].map((height, index) => (
                          <div
                            key={index}
                            className="group relative flex h-full flex-1 items-end"
                          >
                            <div
                              className="w-full rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-300 transition group-hover:from-emerald-700 group-hover:to-emerald-400"
                              style={{
                                height: `${height}%`,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom analytics */}

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />

                        <span className="text-[9px] text-slate-400">
                          AI Resolved
                        </span>
                      </div>

                      <p className="mt-2 text-xl font-black">
                        87.4%
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />

                        <span className="text-[9px] text-slate-400">
                          Conversion
                        </span>
                      </div>

                      <p className="mt-2 text-xl font-black">
                        18.6%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI insight */}

              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-emerald-100 bg-white p-4 shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  {/* Official logo instead of Sparkles */}

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 p-1.5 ring-1 ring-emerald-100">
                    <WhatsWareLogo className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-[9px] text-slate-400">
                      WhatsWare AI Insight
                    </p>

                    <p className="text-xs font-bold text-slate-800">
                      Leads are growing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          METRICS
      ========================================================== */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              One dashboard. Every metric.
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Know what is working.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Replace guesswork with a complete view of your customer
              communication and business performance.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="flex items-center gap-1 text-sm font-bold text-emerald-600">
                      <TrendingUp className="h-4 w-4" />
                      {metric.change}
                    </span>
                  </div>

                  <p className="mt-7 text-sm text-slate-500">
                    {metric.title}
                  </p>

                  <p className="mt-2 text-3xl font-black text-slate-950">
                    {metric.value}
                  </p>

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#159447] to-lime-400"
                      style={{
                        width: `${65 + (index * 7 + 5)}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          REPORTING SECTION
      ========================================================== */}

      <section className="bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Dashboard */}

            <div className="order-2 lg:order-1">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-2xl bg-[#0b1220]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-3">
                      {/* Official WhatsWare logo */}

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5">
                        <WhatsWareLogo className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-sm font-bold">
                          Campaign Performance
                        </p>

                        <p className="text-[9px] text-slate-500">
                          Marketing analytics
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[9px] font-bold text-emerald-400">
                      +28.4%
                    </span>
                  </div>

                  <div className="space-y-5 p-6">
                    {[
                      {
                        name: "Summer Campaign",
                        reach: "248K",
                        conversion: "24.8%",
                        width: "88%",
                      },
                      {
                        name: "New Product Launch",
                        reach: "184K",
                        conversion: "19.6%",
                        width: "72%",
                      },
                      {
                        name: "Festival Campaign",
                        reach: "142K",
                        conversion: "17.2%",
                        width: "62%",
                      },
                      {
                        name: "Lead Generation",
                        reach: "96K",
                        conversion: "14.8%",
                        width: "48%",
                      },
                    ].map((campaign) => (
                      <div key={campaign.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-200">
                            {campaign.name}
                          </span>

                          <span className="text-[9px] text-slate-500">
                            {campaign.reach} reach
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-400"
                            style={{
                              width: campaign.width,
                            }}
                          />
                        </div>

                        <div className="mt-2 flex justify-between">
                          <span className="text-[9px] text-slate-500">
                            Conversion
                          </span>

                          <span className="text-[9px] font-bold text-emerald-400">
                            {campaign.conversion}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}

            <div className="order-1 lg:order-2">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <BarChart3 className="h-4 w-4" />
                Advanced Reporting
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Understand every campaign, customer and conversation.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                See which campaigns generate leads, which channels perform best
                and where customers drop off.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Campaign performance",
                  "Lead conversion tracking",
                  "Agent performance",
                  "Conversation analytics",
                  "Customer journey insights",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-200"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AI INSIGHTS
      ========================================================== */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              {/* WhatsWare logo instead of Sparkles */}

              <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 p-1">
                  <WhatsWareLogo className="h-5 w-5" />
                </span>

                AI Insights
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Your data should tell you what to do next.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                WhatsWare doesn't just show numbers. AI turns your business
                data into actionable insights.
              </p>

              <Link href="/products/ai-agents">
                <button className="group mt-8 flex items-center gap-2 font-bold text-[#159447]">
                  Explore AI Agents

                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              {insights.map((insight) => {
                const Icon = insight.icon;

                return (
                  <div
                    key={insight.title}
                    className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/40"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#159447]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold">
                          {insight.title}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-500">
                          {insight.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES GRID
      ========================================================== */}

      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Everything your team needs to measure growth.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Powerful analytics designed to give your entire team clarity.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: PieChart,
                title: "Channel Analytics",
                text: "Compare WhatsApp, Instagram, RCS and other channels in one place.",
              },
              {
                icon: MousePointerClick,
                title: "Campaign Tracking",
                text: "Measure clicks, reach, engagement and conversions from every campaign.",
              },
              {
                icon: Users,
                title: "Lead Analytics",
                text: "Track lead sources, qualification, conversion and revenue.",
              },
              {
                icon: Bot,
                title: "AI Performance",
                text: "See how much work your AI agents handle automatically.",
              },
              {
                icon: Send,
                title: "Message Analytics",
                text: "Understand delivery, engagement and response rates.",
              },
              {
                icon: BarChart3,
                title: "Custom Reports",
                text: "Build reports around the metrics that matter most to your business.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Official WhatsWare logo */}

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-xl ring-1 ring-emerald-100">
            <WhatsWareLogo className="h-12 w-12" />
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            Stop guessing. Start growing.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Get a complete picture of your customer conversations, campaigns,
            leads and automation performance.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-8 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                Start for Free

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

      {/* =========================================================
          AI AGENT SHOWCASE
      ========================================================== */}

      <AIAgentShowcase />

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <Footer />
    </div>
  );
}