import {
  ArrowRight,
  Bot,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

export default function AIAgentShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-[#101512] py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#b77a58]/10 blur-[130px]" />

        <div className="absolute bottom-[-15%] right-[-8%] h-[550px] w-[550px] rounded-full bg-[#527963]/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-18">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#d6a27d]" />
            Meet your AI agent
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Your customers are{" "}
            <span className="text-[#d6a27d]">always heard.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            Meet your AI-powered customer agent that talks, responds,
            qualifies and follows up with customers around the clock.
          </p>
        </div>

        {/* Main Agent Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#171c19]/95 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d6a27d]/10">
                <Bot className="h-5 w-5 text-[#d6a27d]" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  WhatsWare AI
                </p>

                <p className="text-xs text-white/35">
                  Intelligent customer conversations
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-xs text-emerald-300">
                Online 24/7
              </span>
            </div>
          </div>

          {/* Main content */}
          <div className="grid min-h-[650px] grid-cols-1 lg:grid-cols-2">
            {/* LEFT — AI CHARACTER */}
            <div className="relative flex min-h-[520px] items-end justify-center overflow-hidden lg:min-h-[650px]">
              {/* Large glow */}
              <div className="absolute bottom-[-5%] left-1/2 h-[470px] w-[470px] -translate-x-1/2 rounded-full bg-[#b77a58]/20 blur-[100px]" />

              {/* Character background circle */}
              <div className="absolute bottom-[-190px] left-1/2 h-[610px] w-[610px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#b77a58]/30 via-[#6f513f]/20 to-[#355545]/20" />

              {/* Outer ring */}
              <div className="absolute bottom-[-120px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/[0.07]" />

              {/* Inner ring */}
              <div className="absolute bottom-[-70px] left-1/2 h-[430px] w-[430px] -translate-x-1/2 rounded-full border border-white/[0.05]" />

              {/* Floating customer message */}
              <div className="absolute left-[5%] top-[14%] z-20 hidden animate-[floatOne_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#171c19]/85 p-4 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d6a27d]/10">
                    <MessageCircle className="h-4 w-4 text-[#d6a27d]" />
                  </div>

                  <div>
                    <p className="text-[11px] text-white/35">
                      Customer
                    </p>

                    <p className="mt-1 text-sm text-white">
                      I have a question...
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating AI response */}
              <div className="absolute right-[5%] top-[29%] z-20 hidden animate-[floatTwo_5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#171c19]/85 p-4 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10">
                    <Zap className="h-4 w-4 text-emerald-300" />
                  </div>

                  <div>
                    <p className="text-[11px] text-white/35">
                      AI Agent
                    </p>

                    <p className="mt-1 text-sm text-white">
                      Replied instantly
                    </p>
                  </div>
                </div>
              </div>

              {/* Character */}
              <div className="relative z-10 h-[90%] w-full max-w-[540px] animate-[agentAppear_0.9s_ease-out]">
                <img
                  src="/agents/whatsware-agent.png"
                  alt="WhatsWare AI Agent"
                  className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Agent identity */}
              <div className="absolute bottom-7 left-7 z-30 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101512]/85 px-4 py-3 shadow-xl backdrop-blur-xl">
                <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#d6a27d]/10">
                  <Bot className="h-5 w-5 text-[#d6a27d]" />

                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#101512] bg-emerald-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Aira
                  </p>

                  <p className="text-xs text-white/40">
                    WhatsWare AI Agent
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — CONTENT */}
            <div className="flex flex-col justify-center px-7 py-14 md:px-12 lg:px-16">
              {/* Label */}
              <div className="mb-7 flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.25em] text-[#d6a27d]">
                  YOUR AI WORKFORCE
                </span>

                <div className="h-px w-14 bg-white/10" />
              </div>

              {/* Name */}
              <h3 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
                Aira
              </h3>

              <p className="mt-3 text-xl text-[#d6a27d]">
                Your AI Customer Agent
              </p>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-8 text-white/55 md:text-lg">
                Aira talks to your customers like a real member of your
                team. It answers questions, captures leads, qualifies
                prospects and keeps conversations moving — automatically.
              </p>

              {/* Skills */}
              <div className="mt-9">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/35">
                  What Aira can do
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Lead Generation",
                    "Customer Support",
                    "Sales",
                    "Follow-ups",
                    "Automation",
                    "24/7 Conversations",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/70 transition-all duration-300 hover:border-[#d6a27d]/30 hover:bg-[#d6a27d]/10 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-9 space-y-3">
                {[
                  "Responds to customers instantly",
                  "Captures and qualifies leads automatically",
                  "Hands conversations to your team when needed",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/55"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d6a27d]" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/aira"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#d6a27d] px-7 py-3.5 text-sm font-semibold text-[#211813] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e1b08c] hover:shadow-xl hover:shadow-[#d6a27d]/10"
                >
                  Meet Aira
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <span className="text-xs text-white/30">
                  Always working. Never sleeping.
                </span>
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
            {[
              ["24/7", "Availability"],
              ["< 1 sec", "Response time"],
              ["∞", "Conversations"],
              ["100%", "Automated"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-r border-white/10 px-5 py-6 text-center last:border-r-0"
              >
                <p className="text-2xl font-semibold text-white">
                  {value}
                </p>

                <p className="mt-1 text-xs text-white/30">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes agentAppear {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes floatOne {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  );
}