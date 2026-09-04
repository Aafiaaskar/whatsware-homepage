import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Clock3,
  GitBranch,
  MessageCircle,
  Play,
  Plus,
  Send,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export default function WorkflowBuilder() {
  const { language } = useLanguage();
  const isTamil = language === "TA";

  const features = [
    {
      icon: Workflow,
      title: isTamil
        ? "விஷுவல் Workflow Builder"
        : "Visual Workflow Builder",
      description: isTamil
        ? "எந்தவொரு code-யும் எழுதாமல், எளிதான visual builder மூலம் முழுமையான customer journeys-ஐ உருவாக்குங்கள்."
        : "Design complete customer journeys using an intuitive visual builder without writing code.",
    },
    {
      icon: Zap,
      title: isTamil ? "ஸ்மார்ட் Triggers" : "Smart Triggers",
      description: isTamil
        ? "வாடிக்கையாளர்கள் செய்தி அனுப்பும்போது, form submit செய்யும்போது, campaign-ஐ click செய்யும்போது அல்லது ஏதேனும் action செய்யும்போது workflows-ஐ தானாகத் தொடங்குங்கள்."
        : "Start workflows automatically when customers send messages, submit forms, click campaigns or perform actions.",
    },
    {
      icon: GitBranch,
      title: isTamil ? "Conditions & Branches" : "Conditions & Branches",
      description: isTamil
        ? "வாடிக்கையாளர் தரவு, பதில்கள், tags, lead status மற்றும் நடத்தையின் அடிப்படையில் புத்திசாலித்தனமான பாதைகளை உருவாக்குங்கள்."
        : "Create intelligent paths based on customer data, responses, tags, lead status and behavior.",
    },
    {
      icon: Bot,
      title: isTamil ? "AI மூலம் இயக்கப்படும் Actions" : "AI-Powered Actions",
      description: isTamil
        ? "உரையாடல்களைப் புரிந்துகொள்ளவும், leads-ஐ qualify செய்யவும், கேள்விகளுக்கு பதிலளிக்கவும், அடுத்த நடவடிக்கையைத் தீர்மானிக்கவும் AI-ஐ பயன்படுத்துங்கள்."
        : "Let AI understand conversations, qualify leads, answer questions and decide what happens next.",
    },
    {
      icon: Clock3,
      title: isTamil ? "Time-Based Actions" : "Time-Based Actions",
      description: isTamil
        ? "ஒவ்வொரு வாடிக்கையாளருக்கும் சரியான நேரத்தில் சரியான செய்தி கிடைக்க reminders, delays மற்றும் follow-ups-ஐ திட்டமிடுங்கள்."
        : "Schedule reminders, delays and follow-ups so every customer receives the right message at the right time.",
    },
    {
      icon: Users,
      title: isTamil ? "Team Assignment" : "Team Assignment",
      description: isTamil
        ? "உரையாடல்கள் மற்றும் leads-ஐ சரியான குழு அல்லது sales representative-க்கு தானாக ஒதுக்குங்கள்."
        : "Automatically assign conversations and leads to the right team or sales representative.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-100/70 blur-3xl" />
          <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-green-100/60 blur-3xl" />
          <div className="absolute left-1/2 top-[35%] h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-lime-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-[#159447]">
              {isTamil ? "முகப்பு" : "Home"}
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link href="/products" className="transition hover:text-[#159447]">
              {isTamil ? "தயாரிப்புகள்" : "Products"}
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-semibold text-slate-700">
              {isTamil ? "Workflow Builder" : "Workflow Builder"}
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#159447]">
                <Workflow className="h-4 w-4" />
                {isTamil ? "Automation" : "Automation"}
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                {isTamil
                  ? "உங்கள் வணிகத்தை இயக்கும் workflows-ஐ உருவாக்குங்கள்."
                  : "Build workflows that "}
                {!isTamil && (
                  <>
                    <span className="bg-gradient-to-r from-[#159447] via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                      run your business.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                {isTamil
                  ? "Triggers, conditions, AI actions மற்றும் automated follow-ups மூலம் புத்திசாலித்தனமான customer journeys-ஐ உருவாக்குங்கள் — அனைத்தையும் ஒரே powerful visual workflow builder-ல் நிர்வகிக்கலாம்."
                  : "Create intelligent customer journeys with triggers, conditions, AI actions and automated follow-ups — all from one powerful visual workflow builder."}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/signup">
                  <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition duration-300 hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                    {isTamil ? "உருவாக்கத் தொடங்குங்கள்" : "Start Building"}
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </button>
                </Link>

                <button
                  onClick={() =>
                    document
                      .getElementById("workflow-demo")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto"
                >
                  <Play className="h-4 w-4 fill-current" />
                  {isTamil ? "இது எப்படி செயல்படுகிறது" : "See How It Works"}
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                {[
                  isTamil ? "Coding தேவையில்லை" : "No coding required",
                  isTamil ? "Drag & drop" : "Drag & drop",
                  isTamil ? "AI மூலம் இயக்கப்படுகிறது" : "AI powered",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#159447]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — BUILDER MOCKUP */}
            <div
              id="workflow-demo"
              className="relative mx-auto w-full max-w-[650px]"
            >
              {/* Floating notification */}
              <div className="absolute -left-5 top-12 z-30 hidden animate-pulse rounded-2xl border border-emerald-100 bg-white p-4 shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                    <Zap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      {isTamil ? "Workflow நிலை" : "Workflow status"}
                    </p>
                    <p className="text-sm font-bold text-emerald-600">
                      {isTamil ? "இயங்குகிறது" : "Running"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Main builder */}
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_35px_90px_-25px_rgba(15,23,42,0.28)]">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                      <Workflow className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        {isTamil ? "Lead தகுதி மதிப்பீடு" : "Lead Qualification"}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {isTamil ? "Automation workflow" : "Automation workflow"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-[#159447]">
                      ● LIVE
                    </div>

                    <div className="hidden rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] font-semibold text-slate-500 sm:block">
                      {isTamil ? "சேமி" : "Save"}
                    </div>
                  </div>
                </div>

                <div className="grid min-h-[500px] grid-cols-[155px_1fr] bg-slate-50">
                  {/* Sidebar */}
                  <div className="border-r border-slate-200 bg-white p-4">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {isTamil ? "Actions" : "Actions"}
                    </p>

                    <div className="space-y-2">
                      {[
                        {
                          icon: MessageCircle,
                          name: isTamil ? "செய்தி" : "Message",
                        },
                        {
                          icon: Bot,
                          name: isTamil ? "AI Agent" : "AI Agent",
                        },
                        {
                          icon: GitBranch,
                          name: isTamil ? "நிபந்தனை" : "Condition",
                        },
                        {
                          icon: Clock3,
                          name: isTamil ? "தாமதம்" : "Delay",
                        },
                        {
                          icon: Users,
                          name: isTamil ? "குழுவை ஒதுக்கு" : "Assign Team",
                        },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.name}
                            className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-100 bg-white px-2.5 py-2.5 text-[10px] font-semibold text-slate-600 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-[#159447]"
                          >
                            <Icon className="h-3.5 w-3.5" />
                            {item.name}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100 p-3">
                      <Sparkles className="h-5 w-5 text-[#159447]" />

                      <p className="mt-2 text-[10px] font-bold text-slate-700">
                        {isTamil ? "AI பரிந்துரை" : "AI suggestion"}
                      </p>

                      <p className="mt-1 text-[9px] leading-4 text-slate-500">
                        {isTamil
                          ? "24 மணி நேரத்திற்குப் பிறகு follow-up-ஐ சேர்க்கவும்."
                          : "Add a follow-up after 24 hours."}
                      </p>
                    </div>
                  </div>

                  {/* Canvas */}
                  <div className="relative overflow-hidden bg-[#f8fafb] p-5">
                    {/* Grid */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "radial-gradient(#cbd5e1 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    <div className="relative">
                      {/* Trigger */}
                      <div className="mx-auto max-w-[260px] rounded-2xl border border-emerald-200 bg-white p-4 shadow-lg shadow-emerald-100/50">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-[#159447]">
                            <MessageCircle className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-xs font-bold text-slate-800">
                              {isTamil
                                ? "WhatsApp செய்தி"
                                : "WhatsApp Message"}
                            </p>

                            <p className="mt-0.5 text-[9px] text-slate-400">
                              {isTamil ? "Trigger" : "Trigger"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Connector */}
                      <div className="mx-auto h-10 w-px bg-emerald-300" />

                      {/* AI */}
                      <div className="mx-auto max-w-[260px] rounded-2xl border border-violet-200 bg-white p-4 shadow-lg shadow-violet-100/50">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                            <Bot className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-xs font-bold text-slate-800">
                              {isTamil
                                ? "AI தகுதி மதிப்பீடு"
                                : "AI Qualification"}
                            </p>

                            <p className="mt-0.5 text-[9px] text-slate-400">
                              {isTamil ? "AI Action" : "AI Action"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Connector */}
                      <div className="mx-auto h-10 w-px bg-emerald-300" />

                      {/* Condition */}
                      <div className="mx-auto max-w-[260px] rounded-2xl border border-blue-200 bg-white p-4 shadow-lg shadow-blue-100/50">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <GitBranch className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-xs font-bold text-slate-800">
                              {isTamil
                                ? "Lead Score > 70?"
                                : "Lead Score > 70?"}
                            </p>

                            <p className="mt-0.5 text-[9px] text-slate-400">
                              {isTamil ? "Condition" : "Condition"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Branches */}
                      <div className="relative mx-auto mt-10 grid max-w-[360px] grid-cols-2 gap-5">
                        <div className="absolute left-1/4 right-1/4 top-[-20px] h-px bg-slate-300" />

                        <div className="relative rounded-2xl border border-emerald-200 bg-white p-4 shadow-lg">
                          <div className="absolute -top-6 left-1/2 h-6 w-px bg-slate-300" />

                          <div className="mb-2 flex items-center justify-between">
                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-[#159447]">
                              {isTamil ? "ஆம்" : "YES"}
                            </span>

                            <Send className="h-4 w-4 text-[#159447]" />
                          </div>

                          <p className="text-[10px] font-bold">
                            {isTamil ? "Sales-க்கு தெரிவி" : "Notify Sales"}
                          </p>

                          <p className="mt-1 text-[8px] text-slate-400">
                            {isTamil
                              ? "தகுதி பெற்ற lead-ஐ அனுப்பு"
                              : "Send qualified lead"}
                          </p>
                        </div>

                        <div className="relative rounded-2xl border border-orange-200 bg-white p-4 shadow-lg">
                          <div className="absolute -top-6 left-1/2 h-6 w-px bg-slate-300" />

                          <div className="mb-2 flex items-center justify-between">
                            <span className="rounded-full bg-orange-50 px-2 py-1 text-[8px] font-bold text-orange-600">
                              {isTamil ? "இல்லை" : "NO"}
                            </span>

                            <Clock3 className="h-4 w-4 text-orange-500" />
                          </div>

                          <p className="text-[10px] font-bold">
                            {isTamil ? "Nurture தொடங்கு" : "Start Nurture"}
                          </p>

                          <p className="mt-1 text-[8px] text-slate-400">
                            {isTamil ? "பின்னர் follow-up செய்யவும்" : "Follow up later"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom floating card */}
              <div className="absolute -bottom-7 -right-5 z-20 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                    <Check className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      {isTamil ? "இன்றைய Executions" : "Executions today"}
                    </p>

                    <p className="font-black text-slate-800">12,482</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {isTamil ? "உங்களுக்கு தேவையான அனைத்தும்" : "Everything you need"}
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {isTamil
                ? "சிக்கலின்றி Automation."
                : "Automation without the complexity."}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {isTamil
                ? "சிக்கலான workflows-ஐ visual-ஆக உருவாக்குங்கள் மற்றும் repetitive வேலைகளை WhatsWare நிர்வகிக்கட்டும்."
                : "Build sophisticated workflows visually and let WhatsWare handle the repetitive work."}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    {isTamil ? "ஆராயுங்கள்" : "Explore"}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DRAG & DROP SECTION
      ========================================================== */}
      <section className="bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <Plus className="h-4 w-4" />
                {isTamil
                  ? "Drag. Connect. Automate."
                  : "Drag. Connect. Automate."}
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                {isTamil
                  ? "உங்கள் automation logic-ஐ அழகாக visualise செய்யுங்கள்."
                  : "Your automation logic, beautifully visualized."}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {isTamil
                  ? "சிக்கலான automation tools-ஐ மறந்துவிடுங்கள். உங்கள் குழுவில் யாரும் எளிதாகப் புரிந்துகொள்ளக்கூடிய building blocks-ஐ இணைத்து workflows-ஐ உருவாக்குங்கள்."
                  : "Forget complicated automation tools. Build your workflows by connecting simple building blocks that anyone on your team can understand."}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  isTamil
                    ? "Workflow blocks-ஐ Drag and drop செய்யுங்கள்"
                    : "Drag and drop workflow blocks",
                  isTamil
                    ? "பல channels மற்றும் tools-ஐ இணைக்கவும்"
                    : "Connect multiple channels and tools",
                  isTamil
                    ? "Unlimited branches உருவாக்குங்கள்"
                    : "Create unlimited branches",
                  isTamil
                    ? "Publish செய்வதற்கு முன் workflows-ஐ test செய்யுங்கள்"
                    : "Test workflows before publishing",
                  isTamil
                    ? "ஒவ்வொரு workflow execution-ஐ கண்காணிக்கவும்"
                    : "Monitor every workflow execution",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-200"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark visual */}
            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-2xl bg-[#0b1220]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div>
                      <p className="text-sm font-bold">
                        {isTamil ? "Customer Onboarding" : "Customer Onboarding"}
                      </p>
                      <p className="text-[10px] text-slate-500">
                        {isTamil ? "7 steps · Published" : "7 steps · Published"}
                      </p>
                    </div>

                    <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-[9px] font-bold text-emerald-400">
                      {isTamil ? "ACTIVE" : "ACTIVE"}
                    </div>
                  </div>

                  <div className="relative min-h-[390px] overflow-hidden p-8">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(#64748b 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                      }}
                    />

                    <div className="relative mx-auto max-w-[380px] space-y-4">
                      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                        <div className="flex items-center gap-3">
                          <MessageCircle className="h-5 w-5 text-emerald-400" />
                          <div>
                            <p className="text-xs font-bold">
                              {isTamil
                                ? "வாடிக்கையாளர் WhatsApp-ல் இணைகிறார்"
                                : "Customer joins WhatsApp"}
                            </p>
                            <p className="text-[9px] text-slate-500">
                              {isTamil ? "Trigger" : "Trigger"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="ml-8 h-6 w-px bg-emerald-400/30" />

                      <div className="rounded-2xl border border-violet-400/30 bg-violet-400/10 p-4">
                        <div className="flex items-center gap-3">
                          <Bot className="h-5 w-5 text-violet-400" />
                          <div>
                            <p className="text-xs font-bold">
                              {isTamil
                                ? "AI வாடிக்கையாளரை வரவேற்கிறது"
                                : "AI welcomes customer"}
                            </p>
                            <p className="text-[9px] text-slate-500">
                              {isTamil ? "AI Action" : "AI Action"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="ml-8 h-6 w-px bg-emerald-400/30" />

                      <div className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4">
                        <div className="flex items-center gap-3">
                          <GitBranch className="h-5 w-5 text-blue-400" />
                          <div>
                            <p className="text-xs font-bold">
                              {isTamil
                                ? "வாடிக்கையாளர் வகை?"
                                : "Customer type?"}
                            </p>
                            <p className="text-[9px] text-slate-500">
                              {isTamil ? "Condition" : "Condition"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3">
                          <p className="text-[10px] font-bold text-emerald-300">
                            {isTamil ? "புதிய வாடிக்கையாளர்" : "New customer"}
                          </p>
                        </div>

                        <div className="rounded-xl border border-orange-400/20 bg-orange-400/5 p-3">
                          <p className="text-[10px] font-bold text-orange-300">
                            {isTamil
                              ? "ஏற்கனவே உள்ள வாடிக்கையாளர்"
                              : "Existing customer"}
                          </p>
                        </div>
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
          USE CASES
      ========================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {isTamil ? "உண்மையான வணிகத்திற்காக உருவாக்கப்பட்டது" : "Built for real business"}
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              {isTamil
                ? "உங்கள் குழுவை மெதுவாக்கும் வேலைகளை automate செய்யுங்கள்."
                : "Automate the work that slows your team down."}
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MessageCircle,
                title: isTamil ? "Lead Follow-ups" : "Lead Follow-ups",
                text: isTamil
                  ? "Leads sales-உடன் பேசத் தயாராகும் வரை அவர்களை தானாக follow up செய்யுங்கள்."
                  : "Automatically follow up with leads until they are ready to talk to sales.",
              },
              {
                icon: Bot,
                title: isTamil ? "AI Support" : "AI Support",
                text: isTamil
                  ? "AI மூலம் பொதுவான கேள்விகளுக்கு பதிலளிக்கவும் மற்றும் சிக்கலான உரையாடல்களை escalate செய்யவும்."
                  : "Let AI answer common questions and escalate complex conversations.",
              },
              {
                icon: Send,
                title: isTamil ? "Campaign Journeys" : "Campaign Journeys",
                text: isTamil
                  ? "வாடிக்கையாளர் நடத்தையின் அடிப்படையில் personalized campaign sequences-ஐ உருவாக்குங்கள்."
                  : "Create personalized campaign sequences based on customer behavior.",
              },
              {
                icon: Clock3,
                title: isTamil ? "Reminders" : "Reminders",
                text: isTamil
                  ? "Appointment, payment, renewal மற்றும் order reminders-ஐ தானாக அனுப்புங்கள்."
                  : "Send appointment, payment, renewal and order reminders automatically.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:bg-emerald-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
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
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-xl shadow-emerald-200">
            <Workflow className="h-8 w-8" />
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            {isTamil
              ? "Repetitive வேலைகளை கைமுறையாக செய்வதை நிறுத்துங்கள்."
              : "Stop doing repetitive work manually."}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {isTamil
              ? "உங்கள் முதல் automated workflow-ஐ உருவாக்குங்கள். உங்கள் business-ஐ தொடர்ந்து இயக்கும் conversations, follow-ups மற்றும் actions-ஐ WhatsWare நிர்வகிக்கட்டும்."
              : "Build your first automated workflow and let WhatsWare handle the conversations, follow-ups and actions that keep your business moving."}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-8 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                {isTamil ? "உங்கள் Workflow-ஐ உருவாக்குங்கள்" : "Build Your Workflow"}
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </Link>

            <Link href="/pricing">
              <button className="w-full rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto">
                {isTamil ? "Pricing-ஐ பார்க்கவும்" : "Explore Pricing"}
              </button>
            </Link>
          </div>
        </div>
      </section>
     
      <Footer />
    </div>
  );
}