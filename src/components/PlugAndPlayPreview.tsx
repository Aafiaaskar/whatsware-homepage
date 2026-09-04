import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   INTEGRATIONS
========================================================= */

const integrations = [
  {
    name: "Shopify",
    categoryEN: "E-commerce",
    categoryTA: "இ-காமர்ஸ்",
    logo: "https://cdn.simpleicons.org/shopify/95BF47",
  },
  {
    name: "Zoho CRM",
    categoryEN: "CRM",
    categoryTA: "CRM",
    logo: "https://cdn.simpleicons.org/zoho/E42527",
  },
  {
    name: "Razorpay",
    categoryEN: "Payments",
    categoryTA: "பணப்பரிவர்த்தனைகள்",
    logo: "https://cdn.simpleicons.org/razorpay/528FF0",
  },
  {
    name: "HubSpot",
    categoryEN: "CRM",
    categoryTA: "CRM",
    logo: "https://cdn.simpleicons.org/hubspot/FF7A59",
  },
  {
    name: "Facebook",
    categoryEN: "Marketing",
    categoryTA: "மார்க்கெட்டிங்",
    logo: "https://cdn.simpleicons.org/facebook/1877F2",
  },
  {
    name: "Zapier",
    categoryEN: "Automation",
    categoryTA: "தானியக்கம்",
    logo: "https://cdn.simpleicons.org/zapier/FF4A00",
  },
];

/* Duplicate for infinite loop */
const movingIntegrations = [
  ...integrations,
  ...integrations,
];

const BENEFITS = [
  {
    en: "Connect your existing tools",
    ta: "உங்கள் தற்போதைய கருவிகளை இணைக்கவும்",
  },
  {
    en: "Build automated workflows",
    ta: "தானியங்கி workflow-களை உருவாக்குங்கள்",
  },
  {
    en: "Manage conversations in WhatsApp",
    ta: "WhatsApp-இல் உரையாடல்களை நிர்வகிக்கவும்",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function PlugAndPlayPreview() {
  const { isTamil } = useLanguage();

  const trackRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | null>(null);

  const positionRef = useRef(0);

  const lastTimeRef = useRef<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  /* =======================================================
     REAL JAVASCRIPT MARQUEE
  ======================================================== */

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const SPEED = 45; // pixels per second

    const move = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const deltaTime = time - lastTimeRef.current;

      lastTimeRef.current = time;

      if (!isPaused) {
        positionRef.current -= (SPEED * deltaTime) / 1000;

        /*
          Since we have exactly two copies of the cards,
          when the first copy has completely moved away,
          jump back by half of the total width.
        */
        const halfWidth = track.scrollWidth / 2;

        if (Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current += halfWidth;
        }

        track.style.transform =
          `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationFrameRef.current =
        requestAnimationFrame(move);
    };

    animationFrameRef.current =
      requestAnimationFrame(move);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      lastTimeRef.current = null;
    };
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-[#159447]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-[-180px] h-[400px] w-[400px] rounded-full bg-[#7B4DFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#159447]/20 bg-[#159447]/5 px-4 py-2 text-sm font-semibold text-[#159447]">
            <Zap className="h-4 w-4" />

            {isTamil
              ? "பிளக் & பிளே"
              : "Plug & Play"}
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

            {isTamil ? (
              <>
                எல்லாவற்றையும் இணைக்கவும்.
                <br />

                <span className="bg-gradient-to-r from-[#159447] to-[#7B4DFF] bg-clip-text text-transparent">
                  எதையும் தானியங்குபடுத்துங்கள்.
                </span>
              </>
            ) : (
              <>
                Connect everything.
                <br />

                <span className="bg-gradient-to-r from-[#159447] to-[#7B4DFF] bg-clip-text text-transparent">
                  Automate anything.
                </span>
              </>
            )}

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">

            {isTamil
              ? "உங்கள் வணிகம் ஏற்கனவே பயன்படுத்தும் கருவிகளுடன் WhatsWare-ஐ இணைக்கவும். CRM, இ-காமர்ஸ், பணப்பரிவர்த்தனைகள், மார்க்கெட்டிங் மற்றும் பல — அனைத்தும் WhatsApp மூலம் ஒன்றாக செயல்படுகின்றன."
              : "Connect WhatsWare with the tools your business already uses. CRM, e-commerce, payments, marketing and more — all working together through WhatsApp."}

          </p>

        </div>

        {/* =====================================================
            MAIN AREA
        ====================================================== */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* ===================================================
              LEFT DARK CARD
          ==================================================== */}

          <div className="relative z-20 overflow-hidden rounded-3xl bg-[#10251A] p-8 text-white shadow-xl sm:p-10">

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-[#159447]/30 blur-3xl" />

            <div className="relative">

              {/* Icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#159447] shadow-lg shadow-[#159447]/20">

                <Zap className="h-7 w-7 text-white" />

              </div>

              {/* Heading */}

              <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">

                {isTamil ? (
                  <>
                    உங்கள் வணிக கருவிகள்,
                    <br />
                    ஒரே இடத்தில் இணைக்கப்பட்டுள்ளது.
                  </>
                ) : (
                  <>
                    Your business tools,
                    <br />
                    connected in one place.
                  </>
                )}

              </h3>

              {/* Description */}

              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">

                {isTamil
                  ? "பிளாட்பாரங்களுக்கு இடையே மாறுவதை நிறுத்துங்கள். உங்களுக்கு பிடித்த வணிக கருவிகளை WhatsWare-உடன் இணைத்து WhatsApp மூலம் தானியங்கி வாடிக்கையாளர் பயணங்களை உருவாக்குங்கள்."
                  : "Stop switching between platforms. Connect your favourite business tools to WhatsWare and create automated customer journeys through WhatsApp."}

              </p>

              {/* Benefits */}

              <div className="mt-7 space-y-3">

                {BENEFITS.map((item) => (
                  <div
                    key={item.en}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#65E890]" />

                    <span>
                      {isTamil
                        ? item.ta
                        : item.en}
                    </span>

                  </div>
                ))}

              </div>

              {/* Button */}

              <Link
                href="/plug-and-play"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#10251A] transition hover:bg-[#65E890]"
              >

                {isTamil
                  ? "பிளக் & பிளேவை ஆராயுங்கள்"
                  : "Explore Plug & Play"}

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

              </Link>

            </div>
          </div>

          {/* ===================================================
              RIGHT MOVING CARDS
          ==================================================== */}

          <div
            className="relative min-w-0 overflow-hidden py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* LEFT FADE */}

            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />

            {/* RIGHT FADE */}

            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

            {/* =================================================
                MOVING TRACK
            ================================================== */}

            <div
              ref={trackRef}
              className="flex w-max gap-5"
              style={{
                transform: "translate3d(0, 0, 0)",
                willChange: "transform",
              }}
            >

              {movingIntegrations.map(
                (integration, index) => (

                  <Link
                    key={`${integration.name}-${index}`}
                    href="/plug-and-play"
                    className="group block shrink-0"
                  >

                    <div
                      className="
                        flex
                        h-[220px]
                        w-[155px]
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-5
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:-translate-y-2
                        group-hover:border-[#159447]/40
                        group-hover:shadow-xl
                      "
                    >

                      {/* Logo */}

                      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-100 bg-white p-3 shadow-sm">

                        <img
                          src={integration.logo}
                          alt={`${integration.name} logo`}
                          className="h-full w-full object-contain"
                          loading="eager"
                          onError={(event) => {
                            event.currentTarget.style.display =
                              "none";
                          }}
                        />

                      </div>

                      {/* Name */}

                      <h4 className="mt-5 text-center font-bold text-slate-900">
                        {integration.name}
                      </h4>

                      {/* Category */}

                      <p className="mt-1 text-center text-xs font-medium text-slate-400">
                        {isTamil
                          ? integration.categoryTA
                          : integration.categoryEN}
                      </p>

                      {/* Arrow */}

                      <ArrowRight
                        className="
                          mt-4
                          h-5
                          w-5
                          text-slate-300
                          transition-all
                          group-hover:translate-x-1
                          group-hover:text-[#159447]
                        "
                      />

                    </div>

                  </Link>

                )
              )}

            </div>

            {/* =================================================
                MOVING INDICATOR
            ================================================== */}

            <div className="mt-8 flex items-center justify-center gap-4">

              <span className="text-2xl font-bold tracking-widest text-[#65C98A]">
                ‹‹‹
              </span>

              <span className="text-sm font-semibold text-[#159447]">
                {isTamil
                  ? "ஒருங்கிணைப்பு"
                  : "Integrations"}
              </span>

              <span className="text-2xl font-bold tracking-widest text-[#65C98A]">
                ‹‹‹
              </span>

            </div>

          </div>

        </div>

        {/* =====================================================
            VIEW ALL
        ====================================================== */}

        <div className="mt-12 text-center">

          <Link
            href="/plug-and-play"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#159447] transition-all hover:gap-3"
          >

            {isTamil
              ? "அனைத்து ஒருங்கிணைப்புகளையும் பார்க்கவும்"
              : "View all integrations"}

            <ArrowRight className="h-4 w-4" />

          </Link>

        </div>

      </div>
    </section>
  );
}