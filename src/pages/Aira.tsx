import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Clock3,
  MessageCircle,
  MousePointerClick,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

export default function Aira() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans text-[#173C32]">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#FFFDF5] px-6 pb-20 pt-28 sm:pt-32 md:pb-28">
          {/* Background glows */}
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D6A27D]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#356B58]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              
              {/* =================================================
                  TEXT
              ================================================== */}
              <div className="order-2 lg:order-1">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6A27D]/40 bg-white/80 px-4 py-2 text-sm font-semibold text-[#356B58] shadow-sm backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#356B58]" />
                  Meet Aira
                </div>

                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#24483C] sm:text-5xl md:text-6xl lg:text-7xl">
                  Your intelligent
                  <span className="block text-[#A97155]">
                    AI business agent.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#526B64] sm:text-lg md:text-xl">
                  Aira is WhatsWare's intelligent AI agent built to understand
                  conversations, engage customers, capture leads, answer
                  questions, and help your business move forward — 24/7.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/signup"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#356B58] px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#285443] hover:shadow-xl"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center rounded-full border border-[#D7DED9] bg-white px-7 py-3.5 font-semibold text-[#356B58] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>

              {/* =================================================
                  AIRA
              ================================================== */}
              <div className="order-1 flex justify-center lg:order-2">
                <div className="relative flex h-[430px] w-full items-center justify-center sm:h-[520px] md:h-[600px]">
                  
                  {/* Glow */}
                  <div className="absolute h-72 w-72 rounded-full bg-[#D6A27D]/20 blur-3xl sm:h-96 sm:w-96 md:h-[500px] md:w-[500px]" />

                  {/* Ring */}
                  <div className="absolute h-[300px] w-[300px] rounded-full border border-[#D6A27D]/20 sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]" />

                  {/* Aira */}
                  <img
                    src="/avatars/whatsware-ai-avatar-transparent.gif"
                    alt="Aira - WhatsWare AI Agent"
                    className="relative z-10 h-[350px] w-[350px] object-contain sm:h-[440px] sm:w-[440px] md:h-[540px] md:w-[540px] lg:h-[600px] lg:w-[600px]"
                  />

                  {/* Floating status */}
                  <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-2xl border border-white/70 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F0E9] text-[#356B58]">
                        <Bot className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">
                          WhatsWare AI
                        </p>
                        <p className="text-sm font-bold text-[#24483C]">
                          Aira is online
                        </p>
                      </div>

                      <span className="h-2.5 w-2.5 rounded-full bg-[#356B58]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F0E9] text-[#356B58]">
              <Brain className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-[#24483C] sm:text-4xl md:text-5xl">
              Not just a chatbot.
              <span className="block text-[#A97155]">
                A business agent.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#718079] sm:text-lg">
              Aira is designed to do more than answer questions. She can
              understand customer intent, guide conversations, capture
              opportunities, and help your team stay responsive around the
              clock.
            </p>
          </div>
        </section>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}
        <section className="bg-[#F8F3ED] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A97155]">
                What Aira Does
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#24483C] sm:text-4xl md:text-5xl">
                Conversations that
                <span className="text-[#A97155]"> get things done.</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: MessageCircle,
                  title: "Smart Conversations",
                  text: "Understand customer questions and respond with relevant, contextual answers.",
                },
                {
                  icon: Target,
                  title: "Lead Capture",
                  text: "Identify potential customers and collect the information your business needs.",
                },
                {
                  icon: Zap,
                  title: "Instant Responses",
                  text: "Give customers immediate answers without making them wait for your team.",
                },
                {
                  icon: Users,
                  title: "Customer Engagement",
                  text: "Keep conversations active and create more personalized customer experiences.",
                },
                {
                  icon: MousePointerClick,
                  title: "Guided Journeys",
                  text: "Move customers naturally from questions to actions, enquiries, and conversions.",
                },
                {
                  icon: Clock3,
                  title: "24/7 Availability",
                  text: "Aira keeps working even when your team is offline, weekends included.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-[#E4DDD4] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F0E9] text-[#356B58] transition-all duration-300 group-hover:bg-[#356B58] group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#24483C]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#718079] sm:text-base">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW AIRA HELPS
        ===================================================== */}
        <section className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A97155]">
                  From Conversation to Action
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#24483C] sm:text-4xl md:text-5xl">
                  Aira doesn't just
                  <span className="text-[#A97155]"> talk.</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#718079] sm:text-lg">
                  Aira is designed to help your business move conversations
                  forward. From the first question to the next action, she
                  helps customers get where they need to go.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Understand what the customer needs",
                    "Respond with useful information",
                    "Capture important lead details",
                    "Guide the customer toward the next step",
                    "Hand conversations to your team when needed",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#356B58]" />

                      <span className="text-sm font-medium text-[#52625B] sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] bg-[#173C32] p-7 shadow-2xl sm:p-9">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#D6A27D]">
                      <Bot className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-xs text-white/50">
                        WhatsWare AI Agent
                      </p>
                      <p className="font-bold text-white">
                        Aira
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#356B58] p-4 text-sm leading-6 text-white">
                      Hi! I'd like to know more about your services.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-white/10 p-4 text-sm leading-6 text-white/80">
                      Absolutely! I can help you find the right solution for
                      your business. What are you looking to improve?
                    </div>

                    <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-[#356B58] p-4 text-sm leading-6 text-white">
                      I want to generate more leads.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-white/10 p-4 text-sm leading-6 text-white/80">
                      Great. Let me help you explore how WhatsWare can capture,
                      qualify, and follow up with your leads automatically.
                    </div>
                  </div>

                  <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#D6A27D]" />
                    <span className="text-xs text-white/50">
                      Aira is thinking...
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            HUMAN + AI
        ===================================================== */}
        <section className="bg-[#F8F3ED] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2rem] border border-[#E2DAD0] bg-white p-7 shadow-sm sm:p-10 md:p-14">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F0E9] text-[#356B58]">
                  <Users className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-3xl font-bold text-[#24483C] sm:text-4xl">
                  AI works with your team.
                  <span className="block text-[#A97155]">
                    Not instead of your team.
                  </span>
                </h2>

                <p className="mt-5 text-base leading-8 text-[#718079] sm:text-lg">
                  When a conversation needs a human touch, your team can step
                  in. Aira handles the repetitive work while your people focus
                  on relationships, decisions, and growth.
                </p>

                <div className="mt-8">
                  <Link
                    href="/signup"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#356B58] px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#285443]"
                  >
                    Bring Aira to Your Business
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#173C32] px-6 py-20 md:py-28">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#356B58]/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#A97155]/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Sparkles className="mx-auto h-10 w-10 text-[#D6A27D]" />

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Meet the AI agent built for
              <span className="block text-[#D6A27D]">
                your business.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Let Aira handle conversations, capture opportunities, and keep
              your customers engaged — while your team focuses on what matters
              most.
            </p>

            <div className="mt-8">
              <Link
                href="/signup"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#173C32] shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Get Started with Aira
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}