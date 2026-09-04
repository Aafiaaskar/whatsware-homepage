import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MessageCircle,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppAIAgents() {
  const { language } = useLanguage();
  const isTamil = language === "TA";

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FBF9] text-[#12312C]">
      <Navbar />

      <main className="pt-16">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-14">

          {/* Soft background glow */}
          <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="pointer-events-none absolute right-[-180px] top-10 h-[550px] w-[550px] rounded-full bg-[#F0DED0] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            {/* =================================================
                BREADCRUMB
            ================================================== */}
            <div className="mb-10 flex items-center gap-2 text-sm">

              <Link
                href="/"
                className="text-[#62817B] transition hover:text-[#075E54]"
              >
                {isTamil ? "முகப்பு" : "Home"}
              </Link>

              <ChevronRight className="h-4 w-4 text-[#86A39D]" />

              <Link
                href="/products"
                className="text-[#62817B] transition hover:text-[#075E54]"
              >
                {isTamil ? "Products" : "Products"}
              </Link>

              <ChevronRight className="h-4 w-4 text-[#86A39D]" />

              <span className="font-semibold text-[#12312C]">
                {isTamil ? "WhatsApp AI Agents" : "WhatsApp AI Agents"}
              </span>

            </div>


            {/* =================================================
                HERO GRID
            ================================================== */}
            <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">

              {/* =================================================
                  LEFT
              ================================================== */}
              <div className="relative z-10">

                {/* Badge */}
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2.5 text-sm font-bold text-[#075E54] shadow-[0_8px_25px_rgba(7,94,84,0.08)]">

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9F8ED]">
                    <Sparkles className="h-4 w-4 text-[#159447]" />
                  </span>

                  WhatsWare Product

                </div>


                {/* Heading */}
                <h1 className="max-w-[650px] text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#12312C] sm:text-6xl lg:text-[72px]">

                  {isTamil ? (
                    <>
                      WhatsApp{" "}
                      <span className="text-[#159447]">
                        AI Agents
                      </span>
                    </>
                  ) : (
                    <>
                      WhatsApp{" "}
                      <span className="text-[#159447]">
                        AI Agents
                      </span>
                    </>
                  )}

                </h1>


                {/* Subtitle */}
                <p className="mt-7 max-w-xl text-xl font-bold leading-8 text-[#075E54] sm:text-2xl">

                  {isTamil
                    ? "வாடிக்கையாளர் உரையாடல்களை AI மூலம் தானியக்கமாக்குங்கள்."
                    : "Automate customer conversations with intelligent AI agents."}

                </p>


                {/* Description */}
                <p className="mt-5 max-w-xl text-base leading-8 text-[#607A75] sm:text-lg">

                  {isTamil
                    ? "Aira மூலம் வாடிக்கையாளர் கேள்விகளுக்கு பதிலளிக்கவும், leads-ஐ qualify செய்யவும், தகவல்களை சேகரிக்கவும் மற்றும் உரையாடல்களை சரியான நடவடிக்கைகளாக மாற்றவும்."
                    : "Let Aira answer questions, qualify leads, collect information and guide customers toward the right action — automatically."}

                </p>


                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/book-demo"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#087568] px-7 py-4 font-bold text-white shadow-[0_12px_30px_rgba(8,117,104,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#075E54] hover:shadow-[0_18px_35px_rgba(8,117,104,0.3)]"
                  >
                    Book a Demo

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>


                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full border border-[#C8DED7] bg-white px-7 py-4 font-bold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#159447] hover:bg-[#F1FAF5]"
                  >
                    Get Started
                  </Link>

                </div>


                {/* Small benefits */}
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#607A75]">
                    <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                    24/7 AI support
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#607A75]">
                    <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                    Instant responses
                  </div>

                </div>

              </div>


              {/* =================================================
                  RIGHT VISUAL
              ================================================== */}
              <div className="relative">

                {/* Large glow */}
                <div className="absolute -inset-10 rounded-[4rem] bg-[#BFEBDD]/60 blur-3xl" />


                {/* Browser window */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white bg-[#092A24] p-2.5 shadow-[0_35px_90px_-20px_rgba(7,94,84,0.48)] sm:rounded-[2.5rem]">

                  {/* Browser top bar */}
                  <div className="flex h-14 items-center border-b border-white/10 px-4 sm:px-5">

                    <div className="flex gap-2">

                      <span className="h-3 w-3 rounded-full bg-[#F15B5B]" />

                      <span className="h-3 w-3 rounded-full bg-[#E8B83F]" />

                      <span className="h-3 w-3 rounded-full bg-[#17B978]" />

                    </div>


                    <div className="mx-auto hidden rounded-full bg-white/[0.06] px-10 py-2 text-[10px] font-medium text-white/40 sm:block">
                      app.whatsware.com
                    </div>


                    <div className="w-[48px]" />

                  </div>


                  {/* Browser content */}
                  <div className="relative overflow-hidden rounded-b-[1.7rem] bg-[#0B3029]">

                    {/* Top content */}
                    <div className="flex items-center justify-between px-6 pb-4 pt-5 sm:px-7">

                      <div>

                        <p className="text-[10px] font-bold tracking-wide text-[#6DE0B0]">
                          WHATSWARE
                        </p>

                        <h3 className="mt-1 text-base font-black text-white sm:text-lg">
                          Conversations that work for you
                        </h3>

                      </div>


                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFFFFF12] text-[#73E2B5]">
                        <Bot className="h-5 w-5" />
                      </div>

                    </div>


                    {/* Video */}
                    <div className="mx-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#EAE9E6] shadow-2xl sm:mx-6">

                      <div className="relative aspect-[16/9] sm:aspect-[1.65/1]">

                        <video
                          src="/images/chatbot/whatsware-ai-avatar.mp4"
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* Video overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />

                      </div>

                    </div>


                    {/* Capability cards */}
                    <div className="grid gap-3 px-5 pb-6 pt-4 sm:grid-cols-2 sm:px-6">

                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">

                        <p className="text-[9px] uppercase tracking-wider text-white/40">
                          AI capability
                        </p>

                        <div className="mt-2 flex items-center gap-2">

                          <Brain className="h-4 w-4 text-[#6DE0B0]" />

                          <span className="text-sm font-bold text-white">
                            Understands intent
                          </span>

                        </div>

                      </div>


                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">

                        <p className="text-[9px] uppercase tracking-wider text-white/40">
                          Experience
                        </p>

                        <div className="mt-2 flex items-center gap-2">

                          <MessageCircle className="h-4 w-4 text-[#6DE0B0]" />

                          <span className="text-sm font-bold text-white">
                            Natural conversations
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =================================================
                    FLOATING CARD — TOP RIGHT
                ================================================== */}
                <div className="absolute -right-3 -top-6 hidden w-[210px] rounded-2xl border border-[#E1EEE9] bg-white p-3 shadow-[0_20px_45px_rgba(7,94,84,0.16)] sm:block lg:-right-8">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
                      <Sparkles className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">

                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#8AA19C]">
                        Smart platform
                      </p>

                      <p className="mt-1 truncate text-xs font-black text-[#12312C]">
                        Ready to automate
                      </p>

                    </div>

                  </div>

                </div>


                {/* =================================================
                    FLOATING CARD — BOTTOM LEFT
                ================================================== */}
                <div className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-[#E1EEE9] bg-white p-4 shadow-[0_20px_45px_rgba(7,94,84,0.16)] sm:block lg:-left-8">

                  <div className="flex items-center gap-3">

                    <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#075E54] text-white">

                      <Bot className="h-5 w-5" />

                      <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#36C98F]" />

                    </div>

                    <div>

                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#8AA19C]">
                        Aira
                      </p>

                      <p className="mt-1 text-xs font-black text-[#12312C]">
                        AI Agent Online
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                Meet Aira
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                Your AI agent for every conversation.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#647B76]">
                Aira helps your business respond faster, understand customer
                intent and turn everyday WhatsApp conversations into meaningful
                business opportunities.
              </p>

            </div>


            {/* AI cards */}
            <div className="mt-14 grid gap-5 md:grid-cols-3">

              <InfoCard
                icon={<Brain className="h-6 w-6" />}
                title="Understands"
                description="Aira understands customer questions and intent so conversations feel natural and relevant."
              />

              <InfoCard
                icon={<MessageCircle className="h-6 w-6" />}
                title="Responds"
                description="Give customers quick answers without making them wait for your team."
              />

              <InfoCard
                icon={<Zap className="h-6 w-6" />}
                title="Takes action"
                description="Capture leads, qualify customers and trigger the right workflows automatically."
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURES
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#F1F8F4] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="pointer-events-none absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                AI capabilities
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                Everything your AI agent needs.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#647B76]">
                Build faster, smarter and more helpful customer experiences
                directly through WhatsApp.
              </p>

            </div>


            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <FeatureCard
                icon={<MessageCircle className="h-6 w-6" />}
                title="24/7 Conversations"
                description="Keep customer conversations active day and night."
              />

              <FeatureCard
                icon={<Brain className="h-6 w-6" />}
                title="Intent Understanding"
                description="Understand what customers are actually looking for."
              />

              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Lead Qualification"
                description="Ask the right questions and identify valuable leads automatically."
              />

              <FeatureCard
                icon={<Workflow className="h-6 w-6" />}
                title="Automated Workflows"
                description="Connect conversations to follow-ups and business workflows."
              />

              <FeatureCard
                icon={<Clock3 className="h-6 w-6" />}
                title="Instant Responses"
                description="Respond to customers immediately without unnecessary waiting."
              />

              <FeatureCard
                icon={<Bot className="h-6 w-6" />}
                title="Human Handoff"
                description="Let your team step in whenever human assistance is needed."
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                How it works
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                From customer message to action.
              </h2>

            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-4">

              <Step
                number="01"
                icon={<MessageCircle className="h-6 w-6" />}
                title="Customer messages"
                description="A customer starts a conversation with your business."
              />

              <Step
                number="02"
                icon={<Brain className="h-6 w-6" />}
                title="Aira understands"
                description="AI understands the customer's intent and requirements."
              />

              <Step
                number="03"
                icon={<Bot className="h-6 w-6" />}
                title="Aira responds"
                description="The customer receives a helpful and relevant response."
              />

              <Step
                number="04"
                icon={<Zap className="h-6 w-6" />}
                title="Action happens"
                description="Leads, workflows and follow-ups can happen automatically."
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#075E54] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#159447]/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#BFEBDD]/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
              <Bot className="h-8 w-8" />
            </div>

            <h2 className="mt-7 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Ready to put AI to work?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50/80">
              Start creating faster, smarter and more helpful WhatsApp
              conversations with WhatsWare AI Agents.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/book-demo"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#075E54] shadow-xl transition hover:-translate-y-1 hover:bg-[#F4FBF7]"
              >
                Book a Demo

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Get Started
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-[1.75rem] border border-[#DDEBE5] bg-[#F8FBF9] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#075E54] group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-black text-[#12312C]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#6A817C]">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-[1.75rem] border border-[#DCEAE4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#075E54] group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-black text-[#12312C]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#6A817C]">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   STEP
========================================================= */

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-[1.75rem] border border-[#DDEBE5] bg-[#F8FBF9] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#075E54] group-hover:text-white">
          {icon}
        </div>

        <span className="text-3xl font-black text-[#D8E8E2]">
          {number}
        </span>

      </div>

      <h3 className="mt-6 text-lg font-black text-[#12312C]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#6A817C]">
        {description}
      </p>

    </div>
  );
}