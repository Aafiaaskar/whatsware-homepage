import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Globe2,
  Link2,
  MessageCircle,
  MousePointer2,
  Send,
  Share2,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   WHATSWARE LOGO
   Uses your existing public/whatsware-logo.png
========================================================= */

function WhatsWareLogo({
  className = "h-7 w-7",
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
   INSTAGRAM ICON
========================================================= */

function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

/* =========================================================
   FACEBOOK ICON
========================================================= */

function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.76V3.94c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.37V10H7.1v3h2.86v8h3.54Z" />
    </svg>
  );
}

/* =========================================================
   ADS ICON
========================================================= */

function AdsIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 4.5h16v15H4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 15.5 10.5 12l2.5 2.5L17 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 10h2v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function WhatsAppLinkGenerator() {
  const { language } = useLanguage();
  const isTamil = language === "TA";

  /* =======================================================
     GENERATOR STATE
  ====================================================== */

  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState(
    "Hi! I would like to know more about your products."
  );

  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  /* =======================================================
     TRANSLATIONS
  ====================================================== */

  const t = {
    badge: "WhatsApp Link Generator",

    title: isTamil
      ? "ஒரே Link. உடனடி WhatsApp உரையாடல்."
      : "One link. Instant WhatsApp conversations.",

    subtitle: isTamil
      ? "உங்கள் வாடிக்கையாளர்கள் ஒரே click-ல் WhatsApp-ல் உங்களை தொடர்பு கொள்ளுங்கள்."
      : "Give customers a simple way to start a WhatsApp conversation with one click.",

    description: isTamil
      ? "உங்கள் WhatsApp Business எண்ணிற்கான shareable link-ஐ உருவாக்குங்கள். Website, Instagram, Facebook, Ads, Email அல்லது Business Card எங்கும் அதை பயன்படுத்தலாம்."
      : "Create a shareable link for your WhatsApp Business number and use it anywhere — your website, Instagram, Facebook, ads, email or business cards.",

    create: isTamil ? "Link உருவாக்குங்கள்" : "Create Your Link",

    demo: isTamil ? "Demo பார்க்கவும்" : "Book a Demo",

    howLabel: isTamil ? "எப்படி வேலை செய்கிறது?" : "How it works",

    howTitle: isTamil
      ? "WhatsApp Link உருவாக்குவது மிகவும் எளிது."
      : "Create your WhatsApp link in seconds.",

    howDescription: isTamil
      ? "Number மற்றும் message-ஐ சேர்த்து உங்கள் shareable WhatsApp link-ஐ உருவாக்குங்கள்."
      : "Add your number and an optional message to create a ready-to-share WhatsApp link.",

    step1: isTamil ? "உங்கள் Number-ஐ சேர்க்கவும்" : "Add your number",

    step1Desc: isTamil
      ? "உங்கள் WhatsApp Business எண்ணை உள்ளிடுங்கள்."
      : "Enter the WhatsApp Business number you want customers to contact.",

    step2: isTamil ? "Message சேர்க்கவும்" : "Add a message",

    step2Desc: isTamil
      ? "Customer chat திறக்கும் போது தோன்ற வேண்டிய message-ஐ அமைக்கவும்."
      : "Add an optional pre-filled message for customers.",

    step3: isTamil ? "Link-ஐ Share செய்யுங்கள்" : "Share your link",

    step3Desc: isTamil
      ? "உங்கள் link-ஐ website, social media அல்லது எங்கு வேண்டுமானாலும் share செய்யுங்கள்."
      : "Share your link on your website, social media, ads, emails or anywhere else.",

    featuresLabel: isTamil ? "Powerful & Simple" : "Simple by design",

    featuresTitle: isTamil
      ? "உங்கள் Business-க்கு தேவையான அனைத்தும்."
      : "Everything you need to turn clicks into chats.",

    useLabel: isTamil ? "எங்கு பயன்படுத்தலாம்?" : "Where to use it",

    useTitle: isTamil
      ? "உங்கள் Customers இருக்கும் இடமெல்லாம்."
      : "Put your WhatsApp link everywhere customers are.",

    ctaTitle: isTamil
      ? "உங்கள் அடுத்த WhatsApp conversation ஒரு click தொலைவில்."
      : "Your next WhatsApp conversation is one click away.",

    ctaDescription: isTamil
      ? "ஒரு simple link மூலம் உங்கள் customers-ஐ நேரடியாக WhatsApp-க்கு அழைத்துச் செல்லுங்கள்."
      : "Connect customers directly to your WhatsApp with one simple, shareable link.",
  };

  /* =======================================================
     REAL GENERATED LINK
  ====================================================== */

  const cleanNumber = phoneNumber.replace(/\D/g, "");

  const generatedLink = useMemo(() => {
    if (!cleanNumber) {
      return "";
    }

    const cleanCountry = countryCode.replace(/\D/g, "");

    const fullNumber = `${cleanCountry}${cleanNumber}`;

    return `https://wa.me/${fullNumber}?text=${encodeURIComponent(
      message
    )}`;
  }, [countryCode, cleanNumber, message]);

  /* =======================================================
     GENERATE
  ====================================================== */

  const generateLink = () => {
    if (!cleanNumber) {
      setGenerated(false);
      return;
    }

    setGenerated(true);
    setCopied(false);

    setTimeout(() => {
      document
        .getElementById("generated-link-section")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  /* =======================================================
     COPY
  ====================================================== */

  const copyLink = async () => {
    if (!generatedLink) return;

    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = generatedLink;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  /* =======================================================
     SHARE
  ====================================================== */

  const shareLink = async () => {
    if (!generatedLink) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "WhatsApp Link",
          text: message,
          url: generatedLink,
        });
      } catch {
        // User closed share dialog
      }
    } else {
      await copyLink();
    }
  };

  /* =======================================================
     USE CASE MESSAGE
  ====================================================== */

  const selectUseCase = (useCase: string) => {
    const messages: Record<string, string> = {
      Website:
        "Hi! I found your website and would like to know more about your products and services.",

      Instagram:
        "Hi! I found you on Instagram and would like to know more about your products and services.",

      Facebook:
        "Hi! I found your business on Facebook and would like to know more.",

      Ads:
        "Hi! I saw your advertisement and would like to know more about your offer.",

      "Business Cards":
        "Hi! I scanned your business contact and would like to know more about your business.",

      "Customer Support":
        "Hi! I need help with my order/service. Could you please assist me?",
    };

    setMessage(messages[useCase] || message);

    setTimeout(() => {
      document
        .getElementById("link-generator")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FBF9] text-[#12312C]">
      <Navbar />

      <main className="pt-20">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">
          <div className="pointer-events-none absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

          <div className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full bg-[#F2E5D8] opacity-70 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            {/* Breadcrumb */}

            <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link
                href="/"
                className="transition hover:text-[#159447]"
              >
                {isTamil ? "முகப்பு" : "Home"}
              </Link>

              <span>/</span>

              <Link
                href="/products"
                className="transition hover:text-[#159447]"
              >
                Products
              </Link>

              <span>/</span>

              <span className="font-semibold text-[#12312C]">
                WhatsApp Link Generator
              </span>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
              {/* =================================================
                  HERO CONTENT
              ================================================== */}

              <div>
                {/* Badge */}

                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2 text-sm font-bold text-[#075E54] shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9F8ED]">
                    <WhatsWareLogo className="h-6 w-6" />
                  </span>

                  {t.badge}
                </div>

                {/* Heading */}

                <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#12312C] sm:text-6xl lg:text-7xl">
                  {isTamil ? (
                    <>
                      ஒரே{" "}
                      <span className="text-[#159447]">
                        Link.
                      </span>{" "}
                      உடனடி{" "}
                      <span className="text-[#159447]">
                        WhatsApp
                      </span>{" "}
                      உரையாடல்.
                    </>
                  ) : (
                    <>
                      One{" "}
                      <span className="text-[#159447]">
                        link.
                      </span>{" "}
                      Instant{" "}
                      <span className="text-[#159447]">
                        WhatsApp
                      </span>{" "}
                      conversations.
                    </>
                  )}
                </h1>

                {/* Subtitle */}

                <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[#075E54] sm:text-2xl">
                  {t.subtitle}
                </p>

                {/* Description */}

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {t.description}
                </p>

                {/* Buttons */}

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#link-generator"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#075E54] px-8 py-4 font-bold text-white shadow-lg shadow-[#075E54]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#064C44] hover:shadow-xl"
                  >
                    {t.create}

                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full border border-[#B8D9CD] bg-white px-8 py-4 font-bold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#159447] hover:bg-[#F1FAF5]"
                  >
                    {t.demo}
                  </Link>
                </div>

                {/* Trust points */}

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    isTamil ? "ஒரே Click" : "One-click access",
                    isTamil
                      ? "Pre-filled Message"
                      : "Pre-filled messages",
                    isTamil
                      ? "எளிதாக Share செய்யலாம்"
                      : "Easy to share",
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
                  FUNCTIONAL GENERATOR
              ================================================== */}

              <LinkGeneratorVisual
                isTamil={isTamil}
                countryCode={countryCode}
                setCountryCode={setCountryCode}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                message={message}
                setMessage={setMessage}
                generatedLink={generatedLink}
                generateLink={generateLink}
                copyLink={copyLink}
                copied={copied}
              />
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
                {t.howLabel}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {t.howTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {t.howDescription}
              </p>
            </div>

            <div className="relative mt-16">
              <div className="absolute left-[16.66%] right-[16.66%] top-16 hidden h-px bg-[#BFEBDD] lg:block" />

              <div className="grid gap-12 lg:grid-cols-3">
                <LinkStep
                  number="01"
                  icon={<Smartphone className="h-7 w-7" />}
                  title={t.step1}
                  description={t.step1Desc}
                />

                <LinkStep
                  number="02"
                  icon={<MessageCircle className="h-7 w-7" />}
                  title={t.step2}
                  description={t.step2Desc}
                />

                <LinkStep
                  number="03"
                  icon={<Share2 className="h-7 w-7" />}
                  title={t.step3}
                  description={t.step3Desc}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LIVE LINK SECTION
        ====================================================== */}

        <section
          id="generated-link-section"
          className="relative overflow-hidden bg-[#F1F8F4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* Left */}

              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">
                  <Sparkles className="h-4 w-4" />

                  {t.featuresLabel}
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#12312C] sm:text-5xl">
                  {t.featuresTitle}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {isTamil
                    ? "சிக்கலான setup இல்லாமல் customers-ஐ WhatsApp-க்கு கொண்டு வாருங்கள்."
                    : "Give customers a frictionless path from a click to a real WhatsApp conversation."}
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Pre-filled WhatsApp messages",
                    "Perfect for websites and social media",
                    "Mobile-friendly experience",
                    "Make lead generation easier",
                    "Copy and share your link instantly",
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

              {/* Right */}

              <GeneratedLinkCard
                isTamil={isTamil}
                countryCode={countryCode}
                setCountryCode={setCountryCode}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                message={message}
                setMessage={setMessage}
                generatedLink={generatedLink}
                generated={generated}
                generateLink={generateLink}
                copyLink={copyLink}
                shareLink={shareLink}
                copied={copied}
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            USE CASES
        ====================================================== */}

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                {t.useLabel}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {t.useTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {isTamil
                  ? "ஒரே WhatsApp link-ஐ உங்கள் முழு digital presence முழுவதும் பயன்படுத்துங்கள்."
                  : "Use one simple WhatsApp link across your entire digital presence."}
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <LinkUseCase
                icon={<Globe2 className="h-6 w-6" />}
                title="Website"
                text="Add your WhatsApp link to buttons and CTAs across your website."
                onGenerate={() => selectUseCase("Website")}
              />

              <LinkUseCase
                icon={<InstagramIcon className="h-6 w-6" />}
                title="Instagram"
                text="Add your WhatsApp link to your Instagram bio."
                onGenerate={() => selectUseCase("Instagram")}
              />

              <LinkUseCase
                icon={<FacebookIcon className="h-6 w-6" />}
                title="Facebook"
                text="Drive customers from your Facebook page and posts to WhatsApp."
                onGenerate={() => selectUseCase("Facebook")}
              />

              <LinkUseCase
                icon={<AdsIcon className="h-6 w-6" />}
                title="Ads"
                text="Use the link as a direct WhatsApp CTA in your campaigns."
                onGenerate={() => selectUseCase("Ads")}
              />

              <LinkUseCase
                icon={<Smartphone className="h-6 w-6" />}
                title="Business Cards"
                text="Turn printed business cards into a digital WhatsApp connection."
                onGenerate={() => selectUseCase("Business Cards")}
              />

              <LinkUseCase
                icon={<MessageCircle className="h-6 w-6" />}
                title="Customer Support"
                text="Give customers a direct path to your support team."
                onGenerate={() => selectUseCase("Customer Support")}
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#075E54] px-4 py-24 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#159447] opacity-30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-emerald-300 opacity-20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
              <WhatsWareLogo className="h-10 w-10" />
            </div>

            <h2 className="mt-8 text-3xl font-black tracking-tight text-white sm:text-5xl">
              {t.ctaTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
              {t.ctaDescription}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#link-generator"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#075E54] shadow-xl transition hover:-translate-y-1 hover:bg-[#F4FBF7]"
              >
                {t.create}

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                {t.demo}
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
   HERO LINK GENERATOR VISUAL
========================================================= */

function LinkGeneratorVisual({
  isTamil,
  countryCode,
  setCountryCode,
  phoneNumber,
  setPhoneNumber,
  message,
  setMessage,
  generatedLink,
  generateLink,
  copyLink,
  copied,
}: {
  isTamil: boolean;
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  generatedLink: string;
  generateLink: () => void;
  copyLink: () => void;
  copied: boolean;
}) {
  return (
    <div
      id="link-generator"
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="absolute -inset-10 rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-4 shadow-[0_40px_100px_-30px_rgba(12,75,52,0.45)] sm:p-6">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9F8ED]">
              <WhatsWareLogo className="h-8 w-8" />
            </div>

            <div>
              <p className="text-sm font-black text-[#12312C]">
                WhatsApp Link Generator
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Create your shareable link
              </p>
            </div>
          </div>

          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
          </div>
        </div>

        {/* Number */}

        <div className="mt-7">
          <label className="text-xs font-black text-slate-500">
            WhatsApp Number
          </label>

          <div className="mt-2 flex h-12 items-center gap-3 rounded-xl border border-[#DCEAE4] bg-[#F8FBF9] px-3">
            <input
              type="text"
              value={countryCode}
              onChange={(e) =>
                setCountryCode(
                  e.target.value.replace(/[^\d+]/g, "")
                )
              }
              className="w-14 rounded-md bg-white px-2 py-2 text-xs font-bold text-slate-600 outline-none ring-0"
              aria-label="Country code"
            />

            <input
              type="tel"
              inputMode="numeric"
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(
                  e.target.value.replace(/\D/g, "")
                )
              }
              placeholder="98765 43210"
              className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#12312C] outline-none placeholder:text-slate-300"
              aria-label="WhatsApp number"
            />

            {phoneNumber.length >= 8 && (
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#159447]" />
            )}
          </div>
        </div>

        {/* Message */}

        <div className="mt-5">
          <label className="text-xs font-black text-slate-500">
            {isTamil ? "Pre-filled Message" : "Pre-filled Message"}
          </label>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="mt-2 w-full resize-none rounded-xl border border-[#DCEAE4] bg-[#F8FBF9] p-4 text-sm leading-6 text-slate-600 outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#D9F8ED]"
          />
        </div>

        {/* Generate */}

        <button
          type="button"
          onClick={generateLink}
          disabled={!phoneNumber}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#075E54] py-3.5 text-sm font-black text-white shadow-lg shadow-[#075E54]/10 transition hover:bg-[#064C44] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Zap className="h-4 w-4" />

          Generate WhatsApp Link
        </button>

        {/* Generated link */}

        {generatedLink && (
          <div className="mt-5 rounded-xl border border-[#BFEBDD] bg-[#F1FAF5] p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                <WhatsWareLogo className="h-6 w-6" />
              </div>

              <p className="text-xs font-black text-[#075E54]">
                Your WhatsApp Link
              </p>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-lg bg-white px-3 py-3">
              <p className="min-w-0 flex-1 truncate text-xs font-medium text-slate-500">
                {generatedLink}
              </p>

              <button
                type="button"
                onClick={copyLink}
                aria-label="Copy WhatsApp link"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D9F8ED] text-[#159447] transition hover:bg-[#159447] hover:text-white"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {copied && (
              <p className="mt-2 text-center text-xs font-bold text-[#159447]">
                Link copied successfully!
              </p>
            )}
          </div>
        )}
      </div>

      {/* Floating link card */}

      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9F8ED]">
            <WhatsWareLogo className="h-7 w-7" />
          </div>

          <div>
            <p className="text-[9px] text-slate-400">
              Customer action
            </p>

            <p className="mt-1 text-xs font-black text-[#12312C]">
              Click → WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* Floating message card */}

      <div className="absolute -right-5 top-14 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#075E54]">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-[9px] text-slate-400">
              Result
            </p>

            <p className="mt-1 text-xs font-black text-[#12312C]">
              Chat started ✓
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   GENERATED LINK CARD
========================================================= */

function GeneratedLinkCard({
  isTamil,
  countryCode,
  setCountryCode,
  phoneNumber,
  setPhoneNumber,
  message,
  setMessage,
  generatedLink,
  generated,
  generateLink,
  copyLink,
  shareLink,
  copied,
}: {
  isTamil: boolean;
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  generatedLink: string;
  generated: boolean;
  generateLink: () => void;
  copyLink: () => void;
  shareLink: () => void;
  copied: boolean;
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#D9F8ED]/70 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-5 shadow-[0_30px_80px_-30px_rgba(12,75,52,0.35)] sm:p-7">
        {/* Top */}

        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <div>
            <p className="text-sm font-black text-[#12312C]">
              Generated WhatsApp Link
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Ready to share
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9F8ED]">
            <WhatsWareLogo className="h-7 w-7" />
          </div>
        </div>

        {/* Link */}

        <div className="mt-7 rounded-2xl border border-[#BFEBDD] bg-[#F1FAF5] p-5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
              <Link2 className="h-4 w-4 text-[#159447]" />
            </div>

            <span className="text-xs font-black text-[#075E54]">
              Shareable link
            </span>
          </div>

          {/* Inputs */}

          <div className="mt-4 space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={countryCode}
                onChange={(e) =>
                  setCountryCode(
                    e.target.value.replace(/[^\d+]/g, "")
                  )
                }
                className="w-20 rounded-xl border border-[#DCEAE4] bg-white px-3 py-3 text-sm font-bold text-[#075E54] outline-none focus:border-[#159447]"
                aria-label="Country code"
              />

              <input
                type="tel"
                inputMode="numeric"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                placeholder="WhatsApp number"
                className="min-w-0 flex-1 rounded-xl border border-[#DCEAE4] bg-white px-3 py-3 text-sm font-semibold text-[#075E54] outline-none focus:border-[#159447]"
                aria-label="WhatsApp number"
              />
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Pre-filled message"
              className="w-full resize-none rounded-xl border border-[#DCEAE4] bg-white p-3 text-sm leading-6 text-[#075E54] outline-none focus:border-[#159447]"
            />
          </div>

          <button
            type="button"
            onClick={generateLink}
            disabled={!phoneNumber}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#075E54] py-3 text-sm font-bold text-white transition hover:bg-[#064C44] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Zap className="h-4 w-4" />

            Generate Link
          </button>

          {/* Actual generated URL */}

          {generated && generatedLink ? (
            <>
              <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
                <p className="break-all text-sm font-semibold leading-6 text-[#075E54]">
                  {generatedLink}
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={copyLink}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#075E54] py-3 text-sm font-bold text-white transition hover:bg-[#064C44]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      {isTamil ? "Copy" : "Copy Link"}
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={shareLink}
                  aria-label="Share WhatsApp link"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DCEAE4] bg-white text-[#075E54] transition hover:bg-[#F1FAF5]"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="mt-4 rounded-xl bg-white p-4 text-center">
              <p className="text-xs font-medium text-slate-400">
                Enter your WhatsApp number and generate your link.
              </p>
            </div>
          )}
        </div>

        {/* Chat preview */}

        <div className="mt-6 rounded-2xl bg-[#F8FBF9] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9F8ED]">
              <WhatsWareLogo className="h-7 w-7" />
            </div>

            <div>
              <p className="text-xs font-black text-[#12312C]">
                WhatsApp
              </p>

              <p className="text-[10px] text-slate-400">
                Customer conversation preview
              </p>
            </div>
          </div>

          <div className="mt-5 ml-8 rounded-2xl rounded-tl-sm bg-[#D9F8ED] p-4">
            <p className="text-sm leading-6 text-[#29433D]">
              {message ||
                "Hi! I would like to know more about your products."}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold text-[#159447]">
          <CheckCircle2 className="h-4 w-4" />

          {isTamil
            ? "WhatsApp conversation ready"
            : "Ready to start a conversation"}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HOW-TO STEP
========================================================= */

function LinkStep({
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
   USE CASE CARD
========================================================= */

function LinkUseCase({
  icon,
  title,
  text,
  onGenerate,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  onGenerate: () => void;
}) {
  return (
    <div className="group rounded-[1.5rem] border border-[#E1ECE7] bg-[#F8FBF9] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#BFEBDD] hover:bg-white hover:shadow-[0_25px_60px_-30px_rgba(21,148,71,0.4)]">
      {/* Icon */}

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
        {icon}
      </div>

      {/* Title */}

      <h3 className="mt-6 text-lg font-black text-[#12312C]">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {text}
      </p>

      {/* Generate */}

      <button
        type="button"
        onClick={onGenerate}
        className="mt-5 flex items-center gap-2 text-sm font-bold text-[#159447]"
      >
        Generate link

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}