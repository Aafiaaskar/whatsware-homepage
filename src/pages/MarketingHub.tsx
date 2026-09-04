import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAgentShowcase from "@/components/AIAgentShowcase";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  PieChart,
  Play,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const marketingFeatures = [
  {
    icon: Megaphone,
    title: "Bulk Broadcasts",
    description:
      "Reach thousands of customers with personalized WhatsApp campaigns without losing the human touch.",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description:
      "Segment customers based on behavior, interests, purchase history, and engagement.",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description:
      "Trigger the right campaign at the right moment using powerful automated workflows.",
  },
  {
    icon: BarChart3,
    title: "Campaign Analytics",
    description:
      "Track delivery, engagement, clicks, conversions, and campaign performance in one place.",
  },
];

const campaignSteps = [
  {
    number: "01",
    title: "Build your audience",
    description:
      "Create powerful customer segments using the data you already have.",
  },
  {
    number: "02",
    title: "Create your campaign",
    description:
      "Design engaging WhatsApp messages, offers, announcements and promotions.",
  },
  {
    number: "03",
    title: "Launch automatically",
    description:
      "Schedule campaigns or trigger them automatically based on customer behavior.",
  },
  {
    number: "04",
    title: "Measure & optimize",
    description:
      "Understand what works and improve your next campaign using real-time insights.",
  },
];

const marketingStats = [
  {
    value: "98%+",
    label: "Potential message reach",
    icon: MessageCircle,
  },
  {
    value: "24/7",
    label: "Automated engagement",
    icon: Clock3,
  },
  {
    value: "10x",
    label: "Faster campaign execution",
    icon: Zap,
  },
  {
    value: "1 Hub",
    label: "For your entire marketing team",
    icon: BarChart3,
  },
];

export default function MarketingHub() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-200px] top-20 h-[450px] w-[450px] rounded-full bg-emerald-100/70 blur-3xl" />
          <div className="absolute right-[-180px] top-32 h-[500px] w-[500px] rounded-full bg-lime-100/60 blur-3xl" />
          <div className="absolute left-1/2 top-[30%] h-72 w-72 -translate-x-1/2 rounded-full bg-green-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-[#159447]">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link href="/products" className="hover:text-[#159447]">
              Products
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-medium text-slate-700">
              Marketing Hub
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#159447]">
                <Sparkles className="h-4 w-4" />
                WhatsWare Marketing Hub
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
                Turn conversations into{" "}
                <span className="bg-gradient-to-r from-[#159447] via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  conversions.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Create, launch and optimize high-performing WhatsApp marketing
                campaigns from one powerful workspace. Reach the right
                customers with the right message at the right time.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/signup">
                  <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                    Start Marketing
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
                  Campaign builder
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#159447]" />
                  Audience segmentation
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#159447]" />
                  Real-time analytics
                </span>
              </div>
            </div>

            {/* =====================================================
                MARKETING DASHBOARD VISUAL
            ====================================================== */}
            <div className="relative mx-auto w-full max-w-[590px]">
              {/* Floating notification */}
              <div className="absolute -left-7 top-16 z-20 hidden animate-[bounce_4s_ease-in-out_infinite] rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                    <Send className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Campaign sent</p>
                    <p className="font-bold text-slate-800">
                      12,480 customers
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating conversion card */}
              <div className="absolute -right-5 bottom-12 z-20 hidden animate-[bounce_5s_ease-in-out_infinite] rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Conversions</p>
                    <p className="font-bold text-emerald-600">+32.8%</p>
                  </div>
                </div>
              </div>

              {/* Dashboard */}
              <div className="rounded-[2rem] border border-emerald-100 bg-white p-3 shadow-[0_30px_80px_-25px_rgba(21,148,71,0.35)]">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                    <div>
                      <p className="font-black text-slate-900">
                        Marketing Overview
                      </p>

                      <p className="text-xs text-slate-400">
                        Campaign performance
                      </p>
                    </div>

                    <button className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-bold text-[#159447]">
                      This month
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 p-5">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          Messages
                        </span>

                        <Send className="h-4 w-4 text-[#159447]" />
                      </div>

                      <p className="mt-2 text-2xl font-black text-slate-900">
                        48.2K
                      </p>

                      <p className="mt-1 text-xs font-semibold text-emerald-600">
                        +18.4%
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          Conversions
                        </span>

                        <Target className="h-4 w-4 text-[#159447]" />
                      </div>

                      <p className="mt-2 text-2xl font-black text-slate-900">
                        4,860
                      </p>

                      <p className="mt-1 text-xs font-semibold text-emerald-600">
                        +32.8%
                      </p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mx-5 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          Campaign engagement
                        </p>
                        <p className="text-xs text-slate-400">
                          Last 7 days
                        </p>
                      </div>

                      <BarChart3 className="h-5 w-5 text-[#159447]" />
                    </div>

                    <div className="mt-6 flex h-32 items-end gap-3">
                      {[35, 52, 44, 68, 58, 82, 96].map((height, index) => (
                        <div
                          key={index}
                          className="group relative flex flex-1 items-end"
                        >
                          <div
                            className="w-full rounded-t-lg bg-gradient-to-t from-[#159447] to-emerald-300 transition group-hover:from-emerald-500 group-hover:to-lime-300"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
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

                  {/* Campaign */}
                  <div className="p-5">
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447] text-white">
                          <Megaphone className="h-5 w-5" />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-800">
                            Weekend Sale Campaign
                          </p>

                          <p className="text-xs text-slate-500">
                            Scheduled • 12,480 recipients
                          </p>
                        </div>

                        <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                          Ready
                        </span>
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
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 lg:grid-cols-4">
          {marketingStats.map((stat) => {
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

                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
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
              Everything marketers need
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Your entire marketing engine.
              <br />
              <span className="text-[#159447]">One powerful hub.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Stop switching between tools. Build campaigns, reach customers,
              automate engagement and understand your results from one place.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {marketingFeatures.map((feature) => {
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
          CAMPAIGN CREATOR
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Campaign preview */}
            <div className="order-2 lg:order-1">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.5rem] bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#159447]">
                        <Megaphone className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          Create Campaign
                        </p>

                        <p className="text-xs text-slate-400">
                          Weekend promotion
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-slate-400">
                      Draft
                    </span>
                  </div>

                  <div className="space-y-5 p-6">
                    <div>
                      <label className="text-xs font-bold text-slate-500">
                        Campaign name
                      </label>

                      <div className="mt-2 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                        Weekend Mega Sale
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500">
                        Audience
                      </label>

                      <div className="mt-2 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                        <Users className="h-4 w-4 text-[#159447]" />

                        <span className="text-sm font-semibold text-slate-700">
                          Engaged Customers
                        </span>

                        <span className="ml-auto text-xs font-bold text-[#159447]">
                          12,480
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500">
                        Message
                      </label>

                      <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                        🔥 Weekend Mega Sale is LIVE!
                        <br />
                        Get up to 40% OFF this weekend.
                        <br />
                        Shop now before it's gone!
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-bold text-slate-700">
                        <Clock3 className="h-4 w-4" />
                        Schedule
                      </button>

                      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#159447] py-3 text-sm font-bold text-white">
                        <Send className="h-4 w-4" />
                        Launch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <Sparkles className="h-4 w-4" />
                Campaign Builder
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Launch campaigns in{" "}
                <span className="text-emerald-400">minutes, not hours.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Create personalized campaigns, select your audience, schedule
                your send time and launch — all without juggling multiple
                platforms.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Drag-and-drop campaign creation",
                  "Personalized customer messaging",
                  "Audience segmentation",
                  "Instant or scheduled campaigns",
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
          </div>
        </div>
      </section>

      {/* =========================================================
          AUTOMATION JOURNEY
      ========================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
                Marketing automation
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Make every campaign work{" "}
                <span className="text-[#159447]">harder.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Turn one-time campaigns into automated customer journeys that
                continue working even when your team is offline.
              </p>

              <Link href="/products">
                <button className="group mt-8 flex items-center gap-2 font-bold text-[#159447]">
                  Explore products
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              {campaignSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative flex gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-black text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                  {index !== campaignSteps.length - 1 && (
                    <div className="absolute -bottom-4 left-[3.1rem] z-10 h-5 w-px bg-emerald-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES GRID
      ========================================================== */}
      <section className="bg-emerald-50/50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              Built to convert
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Everything you need to grow.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              From first message to final conversion, WhatsWare gives your
              marketing team the tools to move faster.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Customer Segmentation",
                text: "Group customers by behavior, location, purchase history and engagement.",
              },
              {
                icon: MousePointerClick,
                title: "Click-to-WhatsApp Ads",
                text: "Turn ad clicks into direct WhatsApp conversations and measurable leads.",
              },
              {
                icon: FileText,
                title: "Campaign Templates",
                text: "Create reusable campaign templates for promotions, announcements and events.",
              },
              {
                icon: Bell,
                title: "Automated Follow-ups",
                text: "Bring customers back with timely follow-ups triggered by their actions.",
              },
              {
                icon: PieChart,
                title: "Performance Analytics",
                text: "Understand exactly how your campaigns perform from delivery to conversion.",
              },
              {
                icon: TrendingUp,
                title: "Conversion Tracking",
                text: "Connect conversations to business outcomes and see what actually drives revenue.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-50 p-3 text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
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
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-xl shadow-emerald-200">
            <Megaphone className="h-8 w-8" />
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            Your next campaign starts here.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Build smarter campaigns, reach more customers and turn every
            conversation into an opportunity.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-8 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                Start Marketing
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
              Powerful campaigns
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#159447]" />
              Smart automation
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#159447]" />
              Actionable analytics
            </span>
          </div>
        </div>
      </section>
      
      <AIAgentShowcase />
      <Footer />
    </div>
  );
}