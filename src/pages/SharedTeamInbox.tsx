import type { ReactNode } from "react";

import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MessageCircle,
  MoreHorizontal,
  Search,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";

import { Link } from "wouter";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   WHATSWARE OFFICIAL LOGO
========================================================= */

function WhatsWareLogo({
  className = "h-5 w-5",
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
   MAIN PAGE
========================================================= */

export default function SharedTeamInbox() {
  const { language } = useLanguage();

  const isTamil = language === "TA";

  const text = {
    badge: isTamil ? "Shared Team Inbox" : "Shared Team Inbox",

    title: isTamil
      ? "உங்கள் குழுவை ஒரே Inbox-ல் இணைக்கவும்."
      : "Bring your entire team into one shared inbox.",

    subtitle: isTamil
      ? "ஒவ்வொரு customer conversation-ஐயும் எளிதாக நிர்வகித்து, சரியான team member-க்கு assign செய்யுங்கள்."
      : "Manage every customer conversation together and assign each chat to the right team member.",

    description: isTamil
      ? "WhatsApp conversations அனைத்தையும் ஒரே இடத்தில் கொண்டு வந்து, உங்கள் குழுவுடன் இணைந்து பணியாற்றுங்கள். Chats-ஐ assign செய்யவும், leads-ஐ track செய்யவும், customers-க்கு வேகமாக பதிலளிக்கவும்."
      : "Bring all your WhatsApp conversations into one place. Collaborate with your team, assign chats, manage leads and respond to customers faster.",

    start: isTamil ? "Get Started" : "Get Started",

    demo: isTamil ? "Book a Demo" : "Book a Demo",

    inbox: isTamil ? "Team Inbox" : "Team Inbox",

    conversations: isTamil ? "Conversations" : "Conversations",

    online: isTamil ? "Online" : "Online",

    assign: isTamil ? "Assign conversation" : "Assign conversation",

    featuresLabel: isTamil
      ? "Powerful Team Collaboration"
      : "Powerful Team Collaboration",

    featuresTitle: isTamil
      ? "ஒவ்வொரு conversation-ஐயும் உங்கள் குழுவுடன் சிறப்பாக நிர்வகிக்கவும்."
      : "Give your team everything they need to handle conversations better.",

    workflowLabel: isTamil ? "Simple Workflow" : "Simple Workflow",

    workflowTitle: isTamil
      ? "ஒரு conversation கூட தவறவிடாதீர்கள்."
      : "Never let a conversation slip through the cracks.",

    ctaTitle: isTamil
      ? "உங்கள் customer support-ஐ team experience ஆக மாற்றுங்கள்."
      : "Turn customer support into a team experience.",

    ctaDescription: isTamil
      ? "உங்கள் குழுவை ஒரே inbox-ல் இணைத்து, வேகமான மற்றும் சிறந்த customer conversations-ஐ உருவாக்குங்கள்."
      : "Connect your team in one shared inbox and create faster, better customer conversations.",
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FBF9] text-[#12312C]">
      <Navbar />

      <main className="pt-20">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">
          {/* Background glow */}
          <div className="pointer-events-none absolute -left-48 top-0 h-[520px] w-[520px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="pointer-events-none absolute -right-48 top-20 h-[520px] w-[520px] rounded-full bg-[#F2E5D8] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link
                href="/"
                className="transition hover:text-[#159447]"
              >
                {isTamil ? "முகப்பு" : "Home"}
              </Link>

              <ChevronRight className="h-4 w-4" />

              <Link
                href="/products"
                className="transition hover:text-[#159447]"
              >
                Products
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-semibold text-[#12312C]">
                Shared Team Inbox
              </span>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
              {/* =================================================
                  HERO CONTENT
              ================================================== */}

              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2 text-sm font-bold text-[#075E54] shadow-sm">
                  {/* OFFICIAL WHATSWARE LOGO */}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9F8ED] p-1">
                    <WhatsWareLogo className="h-5 w-5" />
                  </span>

                  {text.badge}
                </div>

                <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#12312C] sm:text-6xl lg:text-7xl">
                  {isTamil ? (
                    <>
                      உங்கள் குழுவை{" "}
                      <span className="text-[#159447]">
                        ஒரே Inbox-ல்
                      </span>{" "}
                      இணைக்கவும்.
                    </>
                  ) : (
                    <>
                      Bring your{" "}
                      <span className="text-[#159447]">
                        entire team
                      </span>{" "}
                      into one shared inbox.
                    </>
                  )}
                </h1>

                <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[#075E54] sm:text-2xl">
                  {text.subtitle}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {text.description}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/signup"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#075E54] px-8 py-4 font-bold text-white shadow-lg shadow-[#075E54]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#064C44] hover:shadow-xl"
                  >
                    {text.start}

                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full border border-[#B8D9CD] bg-white px-8 py-4 font-bold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#159447] hover:bg-[#F1FAF5]"
                  >
                    {text.demo}
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Shared conversations",
                    "Chat assignment",
                    "Team collaboration",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  INBOX VISUAL
              ================================================== */}

              <TeamInboxVisual isTamil={isTamil} />
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                {text.workflowLabel}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {text.workflowTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {isTamil
                  ? "உங்கள் team conversations-ஐ ஒரு simple workflow மூலம் நிர்வகிக்கவும்."
                  : "Keep every conversation organized with a simple team workflow."}
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <WorkflowCard
                number="01"
                icon={<MessageCircle className="h-7 w-7" />}
                title={
                  isTamil
                    ? "Conversation வருகிறது"
                    : "Conversation arrives"
                }
                description={
                  isTamil
                    ? "Customer message வந்தவுடன் அது உங்கள் shared inbox-ல் தோன்றும்."
                    : "Every customer message appears instantly in your shared inbox."
                }
              />

              <WorkflowCard
                number="02"
                icon={<UserPlus className="h-7 w-7" />}
                title={
                  isTamil
                    ? "Team member-க்கு assign"
                    : "Assign to a teammate"
                }
                description={
                  isTamil
                    ? "சரியான team member-க்கு conversation-ஐ assign செய்யுங்கள்."
                    : "Assign the conversation to the teammate best suited to handle it."
                }
              />

              <WorkflowCard
                number="03"
                icon={<CheckCircle2 className="h-7 w-7" />}
                title={
                  isTamil
                    ? "விரைவாக resolve செய்யுங்கள்"
                    : "Resolve faster"
                }
                description={
                  isTamil
                    ? "Team collaboration மூலம் customers-க்கு விரைவாக பதிலளிக்கவும்."
                    : "Collaborate with your team and resolve customer requests faster."
                }
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#F1F8F4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">
                  {/* OFFICIAL WHATSWARE LOGO */}
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D9F8ED] p-0.5">
                    <WhatsWareLogo className="h-4 w-4" />
                  </span>

                  {text.featuresLabel}
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#12312C] sm:text-5xl">
                  {text.featuresTitle}
                </h2>

                <div className="mt-8 space-y-5">
                  <FeatureItem
                    icon={<Users className="h-5 w-5" />}
                    title="Shared WhatsApp Inbox"
                    description="Keep customer conversations organized in one central workspace."
                  />

                  <FeatureItem
                    icon={<UserPlus className="h-5 w-5" />}
                    title="Conversation Assignment"
                    description="Assign each conversation to the right team member."
                  />

                  <FeatureItem
                    icon={<Users className="h-5 w-5" />}
                    title="Team Collaboration"
                    description="Help teammates work together without losing context."
                  />

                  <FeatureItem
                    icon={<Clock3 className="h-5 w-5" />}
                    title="Faster Responses"
                    description="Reduce response time and keep customers engaged."
                  />
                </div>
              </div>

              {/* Collaboration visual */}
              <CollaborationVisual />
            </div>
          </div>
        </section>

        {/* =====================================================
            TEAM CARDS
        ====================================================== */}

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                Team Workspace
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                Everyone knows what needs to happen next.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <TeamCard
                initials="AK"
                name="Aisha Khan"
                role="Sales"
                status="Online"
                conversations="24 conversations"
              />

              <TeamCard
                initials="RM"
                name="Rahul Menon"
                role="Support"
                status="Online"
                conversations="18 conversations"
              />

              <TeamCard
                initials="SJ"
                name="Sara Joseph"
                role="Marketing"
                status="Away"
                conversations="11 conversations"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#075E54] px-4 py-24 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#159447] opacity-30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-emerald-300 opacity-20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl text-center">
            {/* OFFICIAL WHATSWARE LOGO */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-lg">
              <WhatsWareLogo className="h-11 w-11" />
            </div>

            <h2 className="mt-8 text-3xl font-black tracking-tight text-white sm:text-5xl">
              {text.ctaTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
              {text.ctaDescription}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#075E54] shadow-xl transition hover:-translate-y-1 hover:bg-[#F4FBF7]"
              >
                {text.start}

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                {text.demo}
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
   TEAM INBOX HERO VISUAL
========================================================= */

function TeamInboxVisual({
  isTamil,
}: {
  isTamil: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-10 rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#D6E8DF] bg-white shadow-[0_40px_100px_-30px_rgba(12,75,52,0.45)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            {/* OFFICIAL WHATSWARE LOGO */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-[#D9F8ED]">
              <WhatsWareLogo className="h-8 w-8" />
            </div>

            <div>
              <p className="text-sm font-black text-[#12312C]">
                {isTamil ? "Shared Inbox" : "Shared Inbox"}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                WhatsWare Team Workspace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-full bg-[#D9F8ED] px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#159447]" />

            <span className="text-[10px] font-black text-[#159447]">
              {isTamil ? "ONLINE" : "ONLINE"}
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-[170px_1fr]">
          {/* Sidebar */}
          <div className="border-b border-slate-100 bg-[#F8FBF9] p-4 sm:border-b-0 sm:border-r">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                {isTamil ? "Chats" : "Chats"}
              </p>

              <span className="rounded-full bg-[#075E54] px-2 py-0.5 text-[9px] font-black text-white">
                24
              </span>
            </div>

            <div className="space-y-2">
              <InboxPerson
                initials="AK"
                name="Aisha"
                message="Need help with my order"
                active
              />

              <InboxPerson
                initials="RM"
                name="Rahul"
                message="Can I know the price?"
              />

              <InboxPerson
                initials="SJ"
                name="Sara"
                message="Thank you!"
              />
            </div>
          </div>

          {/* Chat */}
          <div className="min-w-0">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2E5D8] text-xs font-black text-[#805A42]">
                  AK
                </div>

                <div>
                  <p className="text-xs font-black text-[#12312C]">
                    Aisha Khan
                  </p>

                  <p className="text-[9px] text-[#159447]">
                    Customer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F8FBF9] text-slate-400"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F8FBF9] text-slate-400"
                  aria-label="More options"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 bg-white p-4 sm:p-5">
              <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-[#F1F5F3] px-4 py-3">
                <p className="text-xs leading-5 text-slate-600">
                  Hi! I need some help with my recent order.
                </p>

                <p className="mt-1 text-[9px] text-slate-400">
                  10:42 AM
                </p>
              </div>

              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-[#D9F8ED] px-4 py-3">
                <p className="text-xs leading-5 text-[#31544A]">
                  Of course! Let me check that for you.
                </p>

                <p className="mt-1 text-right text-[9px] text-[#159447]">
                  10:43 AM ✓✓
                </p>
              </div>

              <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-[#F1F5F3] px-4 py-3">
                <p className="text-xs leading-5 text-slate-600">
                  Thank you! I appreciate the quick response.
                </p>

                <p className="mt-1 text-[9px] text-slate-400">
                  10:44 AM
                </p>
              </div>
            </div>

            {/* Assign bar */}
            <div className="border-t border-slate-100 bg-[#F8FBF9] p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#075E54] text-white">
                    <UserPlus className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] text-slate-400">
                      Assigned to
                    </p>

                    <p className="truncate text-xs font-black text-[#12312C]">
                      Aisha Khan
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="shrink-0 rounded-lg bg-[#075E54] px-3 py-2 text-[9px] font-black text-white"
                >
                  {isTamil ? "Assign" : "Assign"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating team card */}
      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#075E54] text-[9px] font-black text-white">
              AK
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#F2E5D8] text-[9px] font-black text-[#805A42]">
              RM
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#D9F8ED] text-[9px] font-black text-[#159447]">
              SJ
            </div>
          </div>

          <div>
            <p className="text-[9px] text-slate-400">
              Team online
            </p>

            <p className="mt-1 text-xs font-black text-[#12312C]">
              8 members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   WORKFLOW CARD
========================================================= */

function WorkflowCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-[1.75rem] border border-[#E1ECE7] bg-[#F8FBF9] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#075E54] group-hover:text-white">
          {icon}
        </div>

        <span className="text-4xl font-black text-[#DCEAE4]">
          {number}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-black text-[#12312C]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   FEATURE ITEM
========================================================= */

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
        {icon}
      </div>

      <div>
        <h3 className="font-black text-[#12312C]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   COLLABORATION VISUAL
========================================================= */

function CollaborationVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#D9F8ED]/70 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-6 shadow-[0_30px_80px_-30px_rgba(12,75,52,0.35)] sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Team Collaboration
            </p>

            <p className="mt-1 text-xl font-black text-[#12312C]">
              Active conversations
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
            <Users className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-7 space-y-3">
          <CollaborationRow
            initials="AK"
            name="Aisha Khan"
            topic="Order support"
            status="Assigned"
          />

          <CollaborationRow
            initials="RM"
            name="Rahul Menon"
            topic="Pricing enquiry"
            status="In progress"
          />

          <CollaborationRow
            initials="SJ"
            name="Sara Joseph"
            topic="Product question"
            status="Waiting"
          />
        </div>

        <div className="mt-6 rounded-2xl bg-[#F1F8F4] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#075E54] text-white">
              <Zap className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-black text-[#12312C]">
                Faster team response
              </p>

              <p className="mt-1 text-[10px] text-slate-500">
                Conversations are assigned instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COLLABORATION ROW
========================================================= */

function CollaborationRow({
  initials,
  name,
  topic,
  status,
}: {
  initials: string;
  name: string;
  topic: string;
  status: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9F8ED] text-[10px] font-black text-[#159447]">
        {initials}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-black text-[#12312C]">
          {name}
        </p>

        <p className="mt-1 truncate text-[10px] text-slate-400">
          {topic}
        </p>
      </div>

      <span className="shrink-0 rounded-full bg-[#F1F8F4] px-2 py-1 text-[9px] font-bold text-[#159447]">
        {status}
      </span>
    </div>
  );
}

/* =========================================================
   TEAM CARD
========================================================= */

function TeamCard({
  initials,
  name,
  role,
  status,
  conversations,
}: {
  initials: string;
  name: string;
  role: string;
  status: string;
  conversations: string;
}) {
  return (
    <div className="group rounded-[1.5rem] border border-[#E1ECE7] bg-[#F8FBF9] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#075E54] text-sm font-black text-white">
          {initials}
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-black text-[#12312C]">
            {name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {role}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              status === "Online"
                ? "bg-[#159447]"
                : "bg-amber-400"
            }`}
          />

          <span className="text-xs font-semibold text-slate-500">
            {status}
          </span>
        </div>

        <span className="text-xs font-bold text-[#075E54]">
          {conversations}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   INBOX PERSON
========================================================= */

function InboxPerson({
  initials,
  name,
  message,
  active = false,
}: {
  initials: string;
  name: string;
  message: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-2.5 ${
        active ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D9F8ED] text-[8px] font-black text-[#159447]">
          {initials}
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-black text-[#12312C]">
            {name}
          </p>

          <p className="mt-1 truncate text-[8px] text-slate-400">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}