import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { isTamil } = useLanguage();

  return (
    <section
      id="cta-section"
      className="relative overflow-hidden bg-[#FFFDF5] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft green glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#159447]/10 blur-[120px]" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#DFF7D8]/60 blur-[90px]" />

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#EEFBE8]/80 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(21,148,71,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(21,148,71,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* =====================================================
            MAIN CTA CARD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#159447] via-[#149044] to-[#087A3E] px-6 py-14 text-center shadow-[0_30px_80px_rgba(21,148,71,0.28)] sm:px-10 sm:py-16 md:px-16 md:py-20 lg:rounded-[3.5rem]"
        >
          {/* =================================================
              DECORATIVE BLOBS
          ================================================== */}

          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#B8F5C5]/10 blur-3xl"
          />

          {/* Decorative circles */}
          <div className="pointer-events-none absolute left-8 top-10 h-3 w-3 rounded-full bg-white/40" />
          <div className="pointer-events-none absolute right-20 top-24 h-2 w-2 rounded-full bg-white/50" />
          <div className="pointer-events-none absolute bottom-24 left-20 h-2 w-2 rounded-full bg-white/30" />
          <div className="pointer-events-none absolute bottom-16 right-12 h-3 w-3 rounded-full bg-white/30" />

          {/* =================================================
              DECORATIVE FLOATING ICONS
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[8%] top-[25%] hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md lg:flex"
          >
            <MessageCircle className="h-5 w-5 text-white/70" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 8, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[8%] top-[30%] hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md lg:flex"
          >
            <Zap className="h-5 w-5 text-white/70" />
          </motion.div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#159447]">
                <Sparkles className="h-3.5 w-3.5" />
              </span>

              <span>
                {isTamil
                  ? "WhatsWare மூலம் உங்கள் வணிகத்தை வளர்த்திடுங்கள்"
                  : "The Smarter Way to Grow Your Business"}
              </span>
            </motion.div>

            {/* Rocket */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.6,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 5,
              }}
              className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:h-20 sm:w-20 sm:rounded-3xl"
            >
              <Rocket className="h-8 w-8 text-white sm:h-10 sm:w-10" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-4xl text-4xl font-serif font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {isTamil ? (
                "உரையாடல்களை வளர்ச்சியாக மாற்ற தயாரா?"
              ) : (
                <>
                  Ready to Turn
                  <br />
                  <span className="text-[#DFF7D8]">
                    Conversations into
                  </span>
                  <br />
                  Growth?
                </>
              )}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
            >
              {isTamil
                ? "WhatsApp-இல் தானியங்குபடுத்த, ஈடுபட மற்றும் வெற்றி பெற ஏற்கனவே WhatsWare-ஐ பயன்படுத்தும் 10,000+ வணிகங்களுடன் சேருங்கள்."
                : "Join 10,000+ businesses already using WhatsWare to automate, engage and succeed on WhatsApp."}
            </motion.p>

            {/* =================================================
                BENEFITS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/85"
            >
              {[
                isTamil ? "வேகமான அமைப்பு" : "Quick Setup",
                isTamil ? "WhatsApp API" : "WhatsApp API",
                isTamil ? "AI Automation" : "AI Automation",
                isTamil ? "நிபுணர் ஆதரவு" : "Expert Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#DFF7D8]" />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
            >
              {/* GET STARTED */}
              <Link
                href="/book-demo"
                className="group inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#159447] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7FFF8] hover:shadow-2xl sm:w-auto"
              >
                <span>
                  {isTamil ? "இப்போதே தொடங்குங்கள்" : "Get Started"}
                </span>

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* TALK TO OUR TEAM */}
              <a
                href="https://wa.me/918056819125"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/10 sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

                <span>
                  {isTamil
                    ? "எங்கள் குழுவுடன் பேசுங்கள்"
                    : "Talk to Our Team"}
                </span>
              </a>
            </motion.div>

            {/* Small reassurance */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 text-xs font-medium text-white/60"
            >
              {isTamil
                ? "எந்த கட்டாயமும் இல்லை • உங்கள் வணிகத்திற்கு ஏற்ற தீர்வு"
                : "No pressure • No complicated setup • Built for your business"}
            </motion.div>

            {/* =================================================
                BOTTOM SIGNATURE
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-12 border-t border-white/15 pt-8"
            >
              <div className="font-['Dancing_Script'] text-3xl text-[#EEFBE8] sm:text-4xl">
                {isTamil
                  ? "ஒன்றாக ஒரு புத்திசாலி வணிகத்தை உருவாக்குவோம்!"
                  : "Let's build a smarter business — together!"}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}