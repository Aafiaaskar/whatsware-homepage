import type { ReactNode } from "react";

import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  Megaphone,
  MessageCircle,
  Send,
  Target,
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

const WHATSWARE_LOGO = "/whatsware-logo.png";

function WhatsWareLogo({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    <img
      src={WHATSWARE_LOGO}
      alt="WhatsWare"
      className={`${className} object-contain`}
    />
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function WhatsAppBroadcast() {
  const { language } = useLanguage();

  const isTamil = language === "TA";

  const text = {
    badge: isTamil ? "WhatsApp Broadcast" : "WhatsApp Broadcast",

    title: isTamil
      ? "ஒரே செய்தி. ஆயிரக்கணக்கான வாடிக்கையாளர்கள்."
      : "One message. Thousands of customers.",

    subtitle: isTamil
      ? "சரியான வாடிக்கையாளர்களை சரியான WhatsApp செய்தியுடன் சென்றடையுங்கள்."
      : "Reach the right customers with the right WhatsApp message.",

    description: isTamil
      ? "உங்கள் வாடிக்கையாளர்களை குழுக்களாக பிரித்து, தனிப்பயனாக்கப்பட்ட WhatsApp பிரச்சாரங்களை அளவில் அனுப்புங்கள். உங்கள் offers, updates மற்றும் promotions அனைத்தையும் எளிதாக பகிருங்கள்."
      : "Segment your customers and send personalized WhatsApp campaigns at scale. Share offers, updates and promotions while keeping your audience engaged.",

    primary: isTamil ? "Start Broadcasting" : "Start Broadcasting",
    secondary: isTamil ? "Book a Demo" : "Book a Demo",

    campaign: isTamil ? "Campaign Overview" : "Campaign Overview",

    howLabel: isTamil ? "எப்படி வேலை செய்கிறது?" : "How it works",

    howTitle: isTamil
      ? "உங்கள் campaign-ஐ சில எளிய steps-ல் தொடங்குங்கள்."
      : "Launch your campaign in a few simple steps.",

    howDescription: isTamil
      ? "Audience-ஐ தேர்ந்தெடுத்து, message-ஐ உருவாக்கி, campaign-ஐ அனுப்புங்கள்."
      : "Choose your audience, create your message and send your campaign.",

    audience: isTamil ? "Audience-ஐ தேர்ந்தெடுக்கவும்" : "Choose your audience",

    message: isTamil ? "Message-ஐ உருவாக்கவும்" : "Create your message",

    send: isTamil ? "Campaign-ஐ அனுப்பவும்" : "Send your campaign",

    featuresLabel: isTamil ? "Campaign Power" : "Campaign power",

    featuresTitle: isTamil
      ? "உங்கள் WhatsApp Marketing-ஐ அடுத்த நிலைக்கு கொண்டு செல்லுங்கள்."
      : "Everything you need for smarter WhatsApp marketing.",

    resultsLabel: isTamil ? "Campaign Results" : "Campaign results",

    resultsTitle: isTamil
      ? "ஒவ்வொரு campaign-ஐயும் புரிந்து கொள்ளுங்கள்."
      : "Know how every campaign performs.",

    ctaTitle: isTamil
      ? "உங்கள் அடுத்த WhatsApp campaign-ஐ தொடங்க தயாரா?"
      : "Ready to launch your next WhatsApp campaign?",

    ctaDescription: isTamil
      ? "சரியான customers-ஐ சென்றடையுங்கள், meaningful conversations-ஐ உருவாக்குங்கள்."
      : "Reach the right customers and turn campaigns into meaningful conversations.",
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FBF9] text-[#12312C]">
      <Navbar />

      <main className="pt-20">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">

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
                WhatsApp Broadcast
              </span>

            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

              {/* HERO CONTENT */}

              <div>

                {/* OFFICIAL WHATSWARE LOGO BADGE */}

                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2 text-sm font-bold text-[#075E54] shadow-sm">

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9F8ED] p-1">
                    <WhatsWareLogo className="h-5 w-5" />
                  </span>

                  {text.badge}

                </div>

                <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#12312C] sm:text-6xl lg:text-7xl">

                  {isTamil ? (
                    <>
                      ஒரே{" "}
                      <span className="text-[#159447]">
                        செய்தி.
                      </span>{" "}
                      ஆயிரக்கணக்கான{" "}
                      <span className="text-[#159447]">
                        customers.
                      </span>
                    </>
                  ) : (
                    <>
                      One{" "}
                      <span className="text-[#159447]">
                        message.
                      </span>{" "}
                      Thousands of{" "}
                      <span className="text-[#159447]">
                        customers.
                      </span>
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
                    {text.primary}

                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full border border-[#B8D9CD] bg-white px-8 py-4 font-bold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#159447] hover:bg-[#F1FAF5]"
                  >
                    {text.secondary}
                  </Link>

                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

                  {[
                    isTamil
                      ? "Targeted campaigns"
                      : "Targeted campaigns",

                    isTamil
                      ? "Personalized messages"
                      : "Personalized messages",

                    isTamil
                      ? "Campaign analytics"
                      : "Campaign analytics",
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

              {/* HERO CAMPAIGN VISUAL */}

              <BroadcastCampaignVisual isTamil={isTamil} />

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
                {text.howLabel}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {text.howTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {text.howDescription}
              </p>

            </div>

            <div className="relative mt-16">

              <div className="absolute left-[16.66%] right-[16.66%] top-16 hidden h-px bg-[#BFEBDD] lg:block" />

              <div className="grid gap-12 lg:grid-cols-3">

                <BroadcastStep
                  number="01"
                  icon={<Users className="h-7 w-7" />}
                  title={text.audience}
                  description={
                    isTamil
                      ? "உங்கள் campaign-க்கு தேவையான customer segment-ஐ தேர்ந்தெடுக்கவும்."
                      : "Select the customer segment you want to reach with your campaign."
                  }
                />

                <BroadcastStep
                  number="02"
                  icon={<MessageCircle className="h-7 w-7" />}
                  title={text.message}
                  description={
                    isTamil
                      ? "உங்கள் audience-க்கு பொருத்தமான message மற்றும் offer-ஐ உருவாக்குங்கள்."
                      : "Create a relevant message and offer for your selected audience."
                  }
                />

                <BroadcastStep
                  number="03"
                  icon={<Send className="h-7 w-7" />}
                  title={text.send}
                  description={
                    isTamil
                      ? "Campaign-ஐ அனுப்பி customer engagement-ஐ தொடர்ந்து கண்காணிக்கவும்."
                      : "Send your campaign and monitor customer engagement."
                  }
                />

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#F1F8F4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

          <div className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              <div>

                {/* OFFICIAL WHATSWARE LOGO */}

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D9F8ED] p-1">
                    <WhatsWareLogo className="h-4 w-4" />
                  </span>

                  {text.featuresLabel}

                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#12312C] sm:text-5xl">
                  {text.featuresTitle}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">

                  {isTamil
                    ? "உங்கள் marketing campaigns-ஐ எளிமையாகவும், திட்டமிட்டும் நடத்த WhatsWare உதவுகிறது."
                    : "Build smarter campaigns with the tools you need to reach, engage and understand your audience."}

                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Customer segmentation",
                    "Personalized campaign messages",
                    "Targeted broadcasts",
                    "Campaign scheduling",
                    "Engagement tracking",
                    "Marketing automation",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D9F8ED]">
                        <Check className="h-4 w-4 text-[#159447]" />
                      </div>

                      <span className="font-semibold text-[#29433D]">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              <CampaignAnalyticsVisual isTamil={isTamil} />

            </div>

          </div>

        </section>

        {/* =====================================================
            CAMPAIGN RESULTS
        ====================================================== */}

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                {text.resultsLabel}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {text.resultsTitle}
              </h2>

            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <ResultCard
                icon={<Send className="h-6 w-6" />}
                value="12,480"
                label={isTamil ? "Messages Sent" : "Messages Sent"}
              />

              <ResultCard
                icon={<MessageCircle className="h-6 w-6" />}
                value="9,820"
                label={isTamil ? "Delivered" : "Delivered"}
              />

              <ResultCard
                icon={<BarChart3 className="h-6 w-6" />}
                value="78.7%"
                label={isTamil ? "Engagement" : "Engagement"}
              />

              <ResultCard
                icon={<Target className="h-6 w-6" />}
                value="2,640"
                label={isTamil ? "Responses" : "Responses"}
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

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 p-3 backdrop-blur">

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
                {text.primary}

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                {text.secondary}
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
   BROADCAST CAMPAIGN VISUAL
========================================================= */

function BroadcastCampaignVisual({
  isTamil,
}: {
  isTamil: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-xl">

      <div className="absolute -inset-10 rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-5 shadow-[0_40px_100px_-30px_rgba(12,75,52,0.45)] sm:p-7">

        {/* Top bar */}

        <div className="flex items-center justify-between border-b border-slate-100 pb-5">

          <div className="flex items-center gap-3">

            {/* WHATSWARE OFFICIAL LOGO */}

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#075E54] p-2">

              <WhatsWareLogo className="h-7 w-7" />

            </div>

            <div>

              <p className="text-sm font-black text-[#12312C]">
                {isTamil ? "Broadcast Campaign" : "Broadcast Campaign"}
              </p>

              <div className="mt-1 flex items-center gap-1.5">

                <WhatsWareLogo className="h-3.5 w-3.5" />

                <p className="text-xs text-slate-400">
                  WhatsWare Campaign Manager
                </p>

              </div>

            </div>

          </div>

          <span className="rounded-full bg-[#D9F8ED] px-3 py-1 text-[10px] font-black text-[#159447]">
            LIVE
          </span>

        </div>

        {/* Audience */}

        <div className="mt-6 rounded-2xl bg-[#F8FBF9] p-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
                <Users className="h-5 w-5" />
              </div>

              <div>

                <p className="text-xs font-bold text-slate-400">
                  Audience
                </p>

                <p className="mt-1 text-sm font-black text-[#12312C]">
                  Interested Customers
                </p>

              </div>

            </div>

            <span className="text-lg font-black text-[#075E54]">
              12,480
            </span>

          </div>

        </div>

        {/* Message */}

        <div className="mt-4 rounded-2xl border border-[#BFEBDD] bg-[#F1FAF5] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#075E54] text-white">
              <MessageCircle className="h-5 w-5" />
            </div>

            <div>

              <p className="text-xs font-bold text-[#159447]">
                WhatsApp Message
              </p>

              <p className="mt-1 text-sm font-black text-[#12312C]">
                Special Offer 🎉
              </p>

            </div>

          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Hi! We have something special for you. Discover our latest
            offers and enjoy exclusive benefits today.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#075E54] shadow-sm">
            <Zap className="h-3.5 w-3.5" />
            Personalized campaign
          </div>

        </div>

        {/* Progress */}

        <div className="mt-5">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-xs font-bold text-slate-500">
              Campaign progress
            </span>

            <span className="text-xs font-black text-[#159447]">
              78%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#E4EEE9]">

            <div className="h-full w-[78%] rounded-full bg-[#159447]" />

          </div>

        </div>

        {/* Send */}

        <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#075E54] py-3.5 text-sm font-black text-white shadow-lg">

          <Send className="h-4 w-4" />

          {isTamil
            ? "Campaign அனுப்பப்படுகிறது"
            : "Campaign is running"}

        </div>

      </div>

      {/* Floating audience card */}

      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
            <Users className="h-5 w-5" />
          </div>

          <div>

            <p className="text-[9px] text-slate-400">
              Target audience
            </p>

            <p className="mt-1 text-xs font-black text-[#12312C]">
              12.4K Customers
            </p>

          </div>

        </div>

      </div>

      {/* Floating result card */}

      <div className="absolute -right-5 top-12 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#075E54] text-white">
            <BarChart3 className="h-5 w-5" />
          </div>

          <div>

            <p className="text-[9px] text-slate-400">
              Engagement
            </p>

            <p className="mt-1 text-xs font-black text-[#12312C]">
              +78.7%
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   CAMPAIGN ANALYTICS VISUAL
========================================================= */

function CampaignAnalyticsVisual({
  isTamil,
}: {
  isTamil: boolean;
}) {
  return (
    <div className="relative">

      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#D9F8ED]/60 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-6 shadow-[0_30px_80px_-30px_rgba(12,75,52,0.35)] sm:p-8">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {isTamil ? "Campaign Analytics" : "Campaign Analytics"}
            </p>

            <p className="mt-1 text-xl font-black text-[#12312C]">
              This Campaign
            </p>

          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
            <BarChart3 className="h-5 w-5" />
          </div>

        </div>

        {/* Main number */}

        <div className="mt-8">

          <p className="text-4xl font-black text-[#075E54]">
            78.7%
          </p>

          <div className="mt-2 flex items-center gap-2 text-xs font-bold text-[#159447]">

            <span className="rounded-full bg-[#D9F8ED] px-2 py-1">
              +12.4%
            </span>

            <span className="text-slate-400">
              vs previous campaign
            </span>

          </div>

        </div>

        {/* Chart */}

        <div className="mt-8 flex h-36 items-end gap-3">

          {[38, 55, 45, 68, 60, 78, 88, 72, 94, 82, 100, 92].map(
            (height, index) => (

              <div
                key={index}
                className="group relative flex h-full flex-1 items-end"
              >

                <div
                  className="w-full rounded-t-lg bg-[#D9F8ED] transition-all duration-300 group-hover:bg-[#159447]"
                  style={{ height: `${height}%` }}
                />

              </div>

            )
          )}

        </div>

        {/* Stats */}

        <div className="mt-7 grid grid-cols-3 gap-3">

          <MiniStat
            value="12.4K"
            label="Sent"
          />

          <MiniStat
            value="9.8K"
            label="Delivered"
          />

          <MiniStat
            value="2.6K"
            label="Replies"
          />

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   STEP
========================================================= */

function BroadcastStep({
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
    <div className="relative text-center">

      <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-white bg-[#D9F8ED] text-[#159447] shadow-lg">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
          {icon}
        </div>

      </div>

      <span className="mt-5 inline-flex rounded-full bg-[#075E54] px-3 py-1 text-[10px] font-black text-white">
        STEP {number}
      </span>

      <h3 className="mt-4 text-xl font-black text-[#12312C]">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   RESULT CARD
========================================================= */

function ResultCard({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="group rounded-[1.5rem] border border-[#E1ECE7] bg-[#F8FBF9] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#BFEBDD] hover:bg-white hover:shadow-[0_25px_60px_-30px_rgba(21,148,71,0.4)]">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
        {icon}
      </div>

      <p className="mt-6 text-3xl font-black text-[#12312C]">
        {value}
      </p>

      <p className="mt-2 text-sm font-medium text-slate-500">
        {label}
      </p>

    </div>
  );
}


/* =========================================================
   MINI STAT
========================================================= */

function MiniStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-[#F8FBF9] p-3 text-center">

      <p className="text-sm font-black text-[#075E54]">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-medium text-slate-400">
        {label}
      </p>

    </div>
  );
}