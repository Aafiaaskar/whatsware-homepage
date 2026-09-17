import { useMemo } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  Bot,
  Megaphone,
  Users,
  BarChart3,
  Zap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CompetitorKey =
  | "aisensy"
  | "bitespeed"
  | "delightchat"
  | "limechat"
  | "businessonbot"
  | "wati"
  | "qontak";

interface Competitor {
  key: CompetitorKey;
  name: string;
  shortName: string;
  description: string;
}

const competitors: Competitor[] = [
  {
    key: "aisensy",
    name: "AiSensy",
    shortName: "AiSensy",
    description:
      "Compare WhatsApp campaign, automation and customer engagement workflows.",
  },
  {
    key: "bitespeed",
    name: "Bitespeed",
    shortName: "Bitespeed",
    description:
      "Compare WhatsApp engagement, automation and customer journey capabilities.",
  },
  {
    key: "delightchat",
    name: "DelightChat",
    shortName: "DelightChat",
    description:
      "Compare customer support, team conversations and WhatsApp engagement workflows.",
  },
  {
    key: "limechat",
    name: "LimeChat",
    shortName: "LimeChat",
    description:
      "Compare conversational commerce, automation and AI-focused customer journeys.",
  },
  {
    key: "businessonbot",
    name: "BusinessOnBot",
    shortName: "BusinessOnBot",
    description:
      "Compare WhatsApp marketing, automation and customer communication workflows.",
  },
  {
    key: "wati",
    name: "Wati",
    shortName: "Wati",
    description:
      "Compare WhatsApp business messaging, automation, inbox and customer engagement.",
  },
  {
    key: "qontak",
    name: "Qontak",
    shortName: "Qontak",
    description:
      "Compare customer engagement, automation and communication capabilities.",
  },
];

const comparisonRows = [
  {
    title: "WhatsApp Business Platform",
    icon: MessageCircle,
    whatsware: "Built around WhatsApp customer engagement",
    evaluate:
      "Check the WhatsApp API, onboarding and business messaging capabilities available.",
  },
  {
    title: "AI Agents",
    icon: Bot,
    whatsware: "AI-powered conversation and lead qualification",
    evaluate:
      "Compare AI conversation depth, qualification workflows and escalation options.",
  },
  {
    title: "Marketing Automation",
    icon: Megaphone,
    whatsware: "Campaigns, broadcasts and automated journeys",
    evaluate:
      "Compare campaign tools, audience management and automation capabilities.",
  },
  {
    title: "Sales & Lead Management",
    icon: Users,
    whatsware: "Lead capture, qualification, follow-ups and team workflows",
    evaluate:
      "Compare lead routing, follow-ups, sales workflows and team collaboration.",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    whatsware: "Business-focused conversation and campaign insights",
    evaluate:
      "Compare the analytics, reporting and metrics your team actually needs.",
  },
  {
    title: "Automation",
    icon: Zap,
    whatsware: "Workflow-based WhatsApp automation",
    evaluate:
      "Compare triggers, actions, conditions and integrations.",
  },
  {
    title: "Team Inbox",
    icon: Users,
    whatsware: "Designed for connected team conversations",
    evaluate:
      "Check shared inbox, assignment, collaboration and conversation management.",
  },
  {
    title: "Business Support",
    icon: ShieldCheck,
    whatsware: "Business-focused implementation and support",
    evaluate:
      "Compare onboarding, setup assistance and ongoing support.",
  },
];

function getCompetitorFromUrl(): CompetitorKey {
  if (typeof window === "undefined") return "aisensy";

  const value = new URLSearchParams(window.location.search).get("compare");

  const valid = competitors.some(
    (competitor) => competitor.key === value
  );

  return valid ? (value as CompetitorKey) : "aisensy";
}

export default function WhyWhatsWare() {
  const [, setLocation] = useLocation();

  const competitorKey = getCompetitorFromUrl();

  const selectedCompetitor = useMemo(
    () =>
      competitors.find((competitor) => competitor.key === competitorKey) ||
      competitors[0],
    [competitorKey]
  );

  const selectCompetitor = (key: CompetitorKey) => {
    setLocation(`/why-whatsware?compare=${key}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#071B35]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-10 h-[420px] w-[420px] rounded-full bg-[#159447]/10 blur-[110px]" />
          <div className="absolute right-[-8%] top-0 h-[420px] w-[420px] rounded-full bg-[#DFF7D8] blur-[110px]" />

          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(21,148,71,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(21,148,71,0.08) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#159447]/20 bg-white/90 px-4 py-2 text-sm font-bold text-[#159447] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Why WhatsWare
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Choose a platform built for
              <span className="text-[#159447]"> conversations.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#526273] sm:text-xl">
              Compare WhatsWare with the platforms you're considering and
              understand which capabilities matter most for your business.
            </p>
          </motion.div>

          {/* COMPETITOR SELECTOR */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="rounded-[30px] border border-[#159447]/10 bg-white p-5 shadow-xl sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#159447]">
                    Compare WhatsWare
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#071B35]">
                    WhatsWare vs. {selectedCompetitor.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#526273]">
                    {selectedCompetitor.description}
                  </p>
                </div>

                <div className="relative w-full lg:w-[300px]">
                  <select
                    value={competitorKey}
                    onChange={(event) =>
                      selectCompetitor(
                        event.target.value as CompetitorKey
                      )
                    }
                    className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-[#FFFDF5] px-4 pr-10 text-sm font-semibold outline-none focus:border-[#159447] focus:ring-4 focus:ring-[#159447]/10"
                  >
                    {competitors.map((competitor) => (
                      <option
                        key={competitor.key}
                        value={competitor.key}
                      >
                        WhatsWare vs. {competitor.name}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#159447]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK DIFFERENTIATORS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
              WhatsWare Advantage
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
              One connected WhatsApp experience
            </h2>

            <p className="mt-5 leading-7 text-[#526273]">
              Instead of thinking about individual tools, WhatsWare is designed
              around the complete customer journey — from the first message to
              qualification, follow-up, sales and support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp First",
                text: "Build customer journeys around WhatsApp conversations.",
              },
              {
                icon: Bot,
                title: "AI Powered",
                text: "Use AI agents to handle and qualify customer conversations.",
              },
              {
                icon: Zap,
                title: "Automation",
                text: "Connect triggers, actions and follow-ups into workflows.",
              },
              {
                icon: BarChart3,
                title: "Business Insights",
                text: "Understand conversations, leads and campaign performance.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-gray-200 bg-[#FFFDF5] p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEFBE8] text-[#159447]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#526273]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-[#FFFDF5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
                Feature Comparison
              </p>

              <h2 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">
                WhatsWare vs. {selectedCompetitor.name}
              </h2>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#159447]"
            >
              Change competitor
              <ChevronDown className="h-4 w-4 rotate-180" />
            </button>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-xl">
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-gray-200 bg-[#075E54] text-white">
              <div className="p-5 font-bold sm:p-6">
                Capability
              </div>

              <div className="border-l border-white/10 p-5 font-bold sm:p-6">
                WhatsWare
              </div>

              <div className="border-l border-white/10 p-5 font-bold sm:p-6">
                {selectedCompetitor.name}
              </div>
            </div>

            {/* ROWS */}
            {comparisonRows.map((row, index) => {
              const Icon = row.icon;

              return (
                <motion.div
                  key={row.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-gray-100 last:border-b-0"
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEFBE8] text-[#159447]">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="text-sm font-bold leading-6 text-[#071B35] sm:text-base">
                        {row.title}
                      </span>
                    </div>
                  </div>

                  <div className="border-l border-gray-100 bg-[#F7FFF5] p-5 sm:p-6">
                    <div className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#159447]" />

                      <span className="text-sm leading-6 text-[#071B35]">
                        {row.whatsware}
                      </span>
                    </div>
                  </div>

                  <div className="border-l border-gray-100 p-5 sm:p-6">
                    <p className="text-sm leading-6 text-[#526273]">
                      {row.evaluate}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-gray-400">
            Capabilities and offerings can change over time. Review the current
            product documentation and speak with each provider when making a
            purchasing decision.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#159447]">
              One Connected Journey
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
              From first message to loyal customer
            </h2>
          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-5">
            {[
              ["01", "Capture", "Bring new prospects into WhatsApp."],
              ["02", "Qualify", "Understand intent and identify opportunities."],
              ["03", "Nurture", "Follow up automatically at the right time."],
              ["04", "Convert", "Help your team move conversations forward."],
              ["05", "Support", "Continue the relationship after the sale."],
            ].map(([number, title, text], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-3xl border border-gray-200 bg-[#FFFDF5] p-6"
              >
                <span className="text-sm font-black text-[#159447]">
                  {number}
                </span>

                <h3 className="mt-4 text-lg font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#526273]">
                  {text}
                </p>

                {index < 4 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white md:flex">
                    <ArrowRight className="h-3.5 w-3.5 text-[#159447]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF5] px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[36px] bg-[#159447] px-8 py-14 text-center text-white shadow-2xl sm:px-12"
          >
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <Sparkles className="h-8 w-8" />
              </div>

              <h2 className="mt-7 font-serif text-4xl font-bold sm:text-5xl">
                See what WhatsWare can do for your business
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Instead of comparing features alone, let us show you how a
                connected WhatsApp customer journey could work for your team.
              </p>

              <div className="mt-8">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#159447] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#EEFBE8]"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}