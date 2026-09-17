import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import FeatureCards from "@/components/FeatureCards";
import BusinessScenarios from "@/components/BusinessScenarios";
import HowItWorks from "@/components/HowItWorks";
import PlugAndPlayPreview from "@/components/PlugAndPlayPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const isTamil =
    language?.toLowerCase() === "ta" ||
    language?.toUpperCase() === "TA";

  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans selection:bg-green-200">

      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ====================================================== */}
        <Hero />

        {/* =====================================================
            TRUST / STATISTICS
        ====================================================== */}
        <TrustStats />

        {/* =====================================================
            FEATURES
        ====================================================== */}
        <FeatureCards />

        {/* =====================================================
            BUSINESS SCENARIOS
        ====================================================== */}
        <BusinessScenarios />

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}
        <HowItWorks />

        {/* =====================================================
            AI + HUMAN SUPPORT
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#FFFDF5] py-16 md:py-24">

          {/* Background glow */}
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#087F42] via-[#0B914B] to-[#159447] px-6 py-12 shadow-[0_30px_80px_rgba(21,148,71,0.20)] sm:px-10 md:px-14 md:py-16 lg:px-16"
            >

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-white/5 blur-2xl" />

              {/* Small decorative dots */}
              <div className="pointer-events-none absolute right-[38%] top-10 h-2 w-2 rounded-full bg-white/50" />
              <div className="pointer-events-none absolute right-[35%] top-20 h-1.5 w-1.5 rounded-full bg-lime-200/70" />
              <div className="pointer-events-none absolute bottom-16 left-[48%] h-2 w-2 rounded-full bg-white/30" />

              <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

                {/* =================================================
                    LEFT CONTENT
                ================================================== */}
                <div>

                  {/* WhatsWare logo badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="mb-7 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white px-4 py-2.5 shadow-lg"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E9FFF2] p-1.5">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="h-7 w-px bg-gray-200" />

                    <span className="text-sm font-bold text-[#087F42]">
                      {isTamil
                        ? "AI + மனித ஆதரவு"
                        : "AI + Human Support"}
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="max-w-2xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
                  >
                    {isTamil ? (
                      <>
                        AI + மனிதர்கள்
                        <span className="block text-[#B8F5C9]">
                          ஒன்றாக.
                        </span>
                      </>
                    ) : (
                      <>
                        AI + Human
                        <span className="block text-[#B8F5C9]">
                          Together
                        </span>
                      </>
                    )}
                  </motion.h2>

                  {/* Subheading */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-5 max-w-xl text-xl font-medium leading-8 text-white/95 md:text-2xl"
                  >
                    {isTamil
                      ? "ஸ்மார்ட் ஆட்டோமேஷனும் மனித அக்கறையும் இணைந்த சிறந்த அனுபவம்."
                      : "The perfect blend of smart automation and human touch."}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg"
                  >
                    {isTamil
                      ? "WhatsWare வழக்கமான கேள்விகளை கையாள்கிறது, லீட்களை தகுதி நிர்ணயம் செய்கிறது மற்றும் வாடிக்கையாளர்களை தொடர்ந்து ஈடுபாட்டுடன் வைத்திருக்கிறது — தேவையான நேரத்தில் உங்கள் குழு தனிப்பட்ட முறையில் செயல்படுகிறது."
                      : "WhatsWare handles routine queries, qualifies leads and keeps customers engaged — while your team steps in for the personal touch exactly when needed."}
                  </motion.p>

                  {/* =================================================
                      BENEFIT BADGES
                  ================================================== */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-8 flex flex-wrap gap-3"
                  >

                    {/* Faster */}
                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm transition-all hover:bg-white/15">
                      <span className="text-lg">⚡</span>
                      <span className="text-sm font-semibold text-white">
                        {isTamil
                          ? "வேகமான பதில்கள்"
                          : "Faster Responses"}
                      </span>
                    </div>

                    {/* Happier */}
                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm transition-all hover:bg-white/15">
                      <span className="text-lg">☺</span>
                      <span className="text-sm font-semibold text-white">
                        {isTamil
                          ? "மகிழ்ச்சியான வாடிக்கையாளர்கள்"
                          : "Happier Customers"}
                      </span>
                    </div>

                    {/* Conversions */}
                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm transition-all hover:bg-white/15">
                      <span className="text-lg">↗</span>
                      <span className="text-sm font-semibold text-white">
                        {isTamil
                          ? "அதிக மாற்றங்கள்"
                          : "Higher Conversions"}
                      </span>
                    </div>

                  </motion.div>
                </div>

                {/* =================================================
                    RIGHT CHAT VISUAL
                ================================================== */}
                <div className="relative flex min-h-[450px] items-center justify-center lg:min-h-[500px]">

                  {/* Main glow */}
                  <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl md:h-[420px] md:w-[420px]" />

                  {/* Floating AI badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -7, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      y: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute right-[8%] top-2 z-30 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl sm:right-[12%]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8FFF0] p-2">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare AI"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        WhatsWare AI
                      </p>
                      <p className="text-xs text-slate-500">
                        {isTamil
                          ? "உடனடி பதில்கள்"
                          : "Replies instantly"}
                      </p>
                    </div>
                  </motion.div>

                  {/* =================================================
                      CHAT WINDOW
                  ================================================== */}
                  <motion.div
                    initial={{ opacity: 0, x: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="relative z-20 w-full max-w-[470px] rotate-[0.5deg] overflow-hidden rounded-[28px] border-[5px] border-white/90 bg-[#E9E1D8] shadow-[0_30px_70px_rgba(0,0,0,0.25)]"
                  >

                    {/* Chat header */}
                    <div className="flex items-center gap-3 bg-white px-5 py-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9FFF1] p-2.5">
                        <img
                          src="/whatsware-logo.png"
                          alt="WhatsWare"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-slate-800">
                            WhatsWare
                          </p>

                          <span className="h-2 w-2 rounded-full bg-[#18B957]" />
                        </div>

                        <p className="text-xs text-slate-500">
                          {isTamil ? "ஆன்லைன்" : "Online"}
                        </p>
                      </div>

                      <div className="rounded-full bg-[#E8FFF0] px-3 py-1 text-xs font-bold text-[#087F42]">
                        AI
                      </div>
                    </div>

                    {/* Chat body */}
                    <div className="space-y-4 p-5 sm:p-6">

                      {/* Live transfer */}
                      <div className="flex items-center justify-center">
                        <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#12B956]" />

                          <span className="text-xs font-bold text-slate-700">
                            {isTamil
                              ? "நேரடி Chat Transfer"
                              : "Live Chat Transfer"}
                          </span>
                        </div>
                      </div>

                      {/* Customer message */}
                      <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="flex justify-start"
                      >
                        <div className="max-w-[82%] rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                          <p className="text-sm leading-6 text-slate-700">
                            {isTamil
                              ? "சரியான skincare combo தேர்வு செய்ய உதவ முடியுமா?"
                              : "I need help choosing the right skincare combo. Can you suggest?"}
                          </p>
                        </div>
                      </motion.div>

                      {/* AI message */}
                      <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="flex justify-end gap-2"
                      >

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DFFFE9] p-1.5">
                          <img
                            src="/whatsware-logo.png"
                            alt="WhatsWare AI"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="max-w-[82%] rounded-2xl rounded-tr-md bg-[#C8F8D0] px-4 py-3 shadow-sm">
                          <p className="text-sm leading-6 text-slate-700">
                            {isTamil
                              ? "உங்கள் skin type அடிப்படையில் உங்களுக்கு ஏற்ற combo இதோ. 😊"
                              : "Sure! Based on your skin type, here's the best combo for you. 😊"}
                          </p>
                        </div>

                      </motion.div>

                      {/* Agent joined */}
                      <div className="flex justify-center py-1">
                        <div className="rounded-full bg-[#B7B1AA] px-4 py-1.5 text-xs font-semibold text-white">
                          {isTamil
                            ? "Agent Sarah chat-ல் இணைந்தார்"
                            : "Agent Sarah joined the chat"}
                        </div>
                      </div>

                      {/* Human message */}
                      <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="flex justify-end gap-2"
                      >

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#087F42] shadow-sm">
                          <span className="text-sm">●</span>
                        </div>

                        <div className="max-w-[82%] rounded-2xl rounded-tr-md bg-[#C8F8D0] px-4 py-3 shadow-sm">
                          <p className="text-sm leading-6 text-slate-700">
                            {isTamil
                              ? "நீங்கள் எங்கள் combos-ஐ பார்க்கிறீர்கள். இன்று 15% discount வழங்க முடியும்!"
                              : "Hi! I see you're looking at our combos. I can offer you a 15% discount today!"}
                          </p>
                        </div>

                      </motion.div>

                    </div>
                  </motion.div>

                  {/* =================================================
                      FLOATING WHATSWARE LOGO CARD
                  ================================================== */}
                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                      rotate: [-2, 1, -2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-[18%] left-[1%] z-30 hidden h-20 w-20 items-center justify-center rounded-2xl bg-white p-3 shadow-2xl sm:flex"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#E8FFF0] p-2">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* =================================================
                      YOUR TEAM CARD
                  ================================================== */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.5 },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute bottom-1 right-[0%] z-30 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl sm:right-[3%]"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                      <span className="text-xl">◎</span>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {isTamil ? "உங்கள் Team" : "Your Team"}
                      </p>

                      <p className="text-xs text-slate-500">
                        {isTamil
                          ? "தேவைப்படும் போது செயல்படும்"
                          : "Steps in when needed"}
                      </p>
                    </div>

                  </motion.div>

                </div>

              </div>

            </motion.div>
          </div>
        </section>

        {/* =====================================================
            TRUSTED BY GROWING BUSINESSES
        ====================================================== */}
        <section className="w-full border-y border-gray-100 bg-white py-14 md:py-16">

          <div className="mx-auto max-w-7xl px-6">

            <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
              {isTamil
                ? "வளர்ந்து வரும் நிறுவனங்களின் நம்பிக்கை"
                : "Trusted by growing businesses"}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-20">

              {/* ZOMATO */}
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-16 w-32 items-center justify-center"
              >
                <img
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Zomato_Logo.svg"
                  alt="Zomato"
                  className="max-h-11 max-w-[125px] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </a>

              {/* RAPIDO */}
              <a
                href="https://www.rapido.bike"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-16 w-32 items-center justify-center"
              >
                <img
                  src="https://www.rapido.bike/favicon.ico"
                  alt="Rapido"
                  className="h-12 w-12 object-contain transition-all duration-300 group-hover:scale-105"
                />

                <span className="ml-2 text-xl font-bold text-[#F9A825]">
                  Rapido
                </span>
              </a>

              {/* BYJU'S */}
              <a
                href="https://byjus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-16 w-32 items-center justify-center"
              >
                <img
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/BYJU%27S_logo.svg"
                  alt="BYJU'S"
                  className="max-h-11 max-w-[125px] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </a>

              {/* OPPO */}
              <a
                href="https://www.oppo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-16 w-32 items-center justify-center"
              >
                <img
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/OPPO_LOGO_2019.svg"
                  alt="OPPO"
                  className="max-h-11 max-w-[125px] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </a>

              {/* FABINDIA */}
              <a
                href="https://www.fabindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-16 w-32 items-center justify-center"
              >
                <img
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Fabindia_logo.svg"
                  alt="Fabindia"
                  className="max-h-12 max-w-[130px] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </a>

              {/* LICIOUS */}
              <a
                href="https://www.licious.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-16 w-32 items-center justify-center"
              >
                <img
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Licious-Logo.png"
                  alt="Licious"
                  className="max-h-12 max-w-[130px] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </a>

            </div>
          </div>
        </section>

        {/* =====================================================
            PLUG & PLAY INTEGRATIONS
        ====================================================== */}
        <PlugAndPlayPreview />

        {/* =====================================================
            AIRA - WHATSWARE AI AGENT
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#F8F3ED] py-20 md:py-28">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#D6A27D]/15 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#356B58]/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6">

            <div className="grid items-center gap-12 md:grid-cols-2">

              {/* =================================================
                  AIRA AVATAR
              ================================================== */}
              <div className="flex justify-center md:order-2">

                <div className="relative flex items-center justify-center">

                  {/* Glow */}
                  <div className="absolute h-80 w-80 rounded-full bg-[#D6A27D]/20 blur-3xl sm:h-96 sm:w-96 md:h-[520px] md:w-[520px]" />

                  {/* Aira GIF */}
                  <img
                    src="/avatars/whatsware-ai-avatar-transparent.gif"
                    alt={
                      isTamil
                        ? "Aira - WhatsWare AI முகவர்"
                        : "Aira - WhatsWare AI Agent"
                    }
                    className="relative z-10 h-[300px] w-[300px] object-contain sm:h-[380px] sm:w-[380px] md:h-[480px] md:w-[480px] lg:h-[540px] lg:w-[540px]"
                  />

                </div>
              </div>

              {/* =================================================
                  AIRA CONTENT
              ================================================== */}
              <div className="md:order-1">

                {/* Label */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D6A27D]/40 bg-white/70 px-4 py-2 text-sm font-semibold text-[#356B58] shadow-sm backdrop-blur-sm">

                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-[#356B58]" />

                  {isTamil
                    ? "Aira-வை சந்தியுங்கள்"
                    : "Meet Aira"}

                </div>

                {/* Heading */}
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#24483C] md:text-5xl lg:text-6xl">

                  {isTamil ? (
                    <>
                      உங்கள் புதிய
                      <span className="block text-[#A97155]">
                        AI முகவரை சந்தியுங்கள்.
                      </span>
                    </>
                  ) : (
                    <>
                      Meet your new
                      <span className="block text-[#A97155]">
                        AI Agent.
                      </span>
                    </>
                  )}

                </h2>

                {/* Description */}
                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 md:text-xl">

                  {isTamil
                    ? "Aira என்பது WhatsWare-ன் புத்திசாலித்தனமான AI முகவர். உரையாடல்களை கையாளவும், லீட்களைப் பெறவும், கேள்விகளுக்கு பதிலளிக்கவும், உங்கள் வாடிக்கையாளர்களை 24/7 ஈடுபாட்டுடன் வைத்திருக்கவும் இது உருவாக்கப்பட்டுள்ளது."
                    : "Aira is WhatsWare's intelligent AI agent, built to handle conversations, capture leads, answer questions, and keep your customers engaged — 24/7."}

                </p>

                {/* Features */}
                <div className="mt-8 space-y-4">

                  {/* Feature 1 */}
                  <div className="flex items-center gap-3">

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#356B58] text-sm font-bold text-white">
                      ✓
                    </div>

                    <span className="text-gray-700">
                      {isTamil
                        ? "AI மூலம் இயக்கப்படும் வாடிக்கையாளர் உரையாடல்கள்"
                        : "AI-powered customer conversations"}
                    </span>

                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-center gap-3">

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#356B58] text-sm font-bold text-white">
                      ✓
                    </div>

                    <span className="text-gray-700">
                      {isTamil
                        ? "லீட்களை தானாகப் பெற்று தகுதி நிர்ணயம் செய்யுங்கள்"
                        : "Automatic lead capture & qualification"}
                    </span>

                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-center gap-3">

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#356B58] text-sm font-bold text-white">
                      ✓
                    </div>

                    <span className="text-gray-700">
                      {isTamil
                        ? "24/7 உடனடி வாடிக்கையாளர் ஆதரவு"
                        : "24/7 instant customer support"}
                    </span>

                  </div>

                </div>

                {/* CTA */}
                <div className="mt-9">

                  <Link
                    href="/aira"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#356B58] px-7 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#285443] hover:shadow-xl"
                  >

                    {isTamil
                      ? "Aira-வை சந்தியுங்கள்"
                      : "Meet Aira"}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <CTA />

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

    </div>
  );
}