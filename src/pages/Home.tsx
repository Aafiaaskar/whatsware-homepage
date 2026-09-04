import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import FeatureCards from "@/components/FeatureCards";
import BusinessScenarios from "@/components/BusinessScenarios";
import HowItWorks from "@/components/HowItWorks";
import AIHumanSection from "@/components/AIHumanSection";
import TrustedBusinesses from "@/components/TrustedBusinesses";
import PlugAndPlayPreview from "@/components/PlugAndPlayPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const isTamil = language === "ta";

  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Trust / Statistics */}
        <TrustStats />

        {/* Features */}
        <FeatureCards />

        {/* Business Scenarios */}
        <BusinessScenarios />

        {/* How It Works */}
        <HowItWorks />

        {/* AI + Human Support */}
        <AIHumanSection />

        {/* Trusted Businesses */}
        <TrustedBusinesses />

        {/* Plug & Play Integrations */}
        <PlugAndPlayPreview />

        {/* =====================================================
            AIRA - WHATSWARE AI AGENT
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#F8F3ED] py-20 md:py-28">
          {/* Decorative background elements */}
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

                  {isTamil ? "Aira-வை சந்தியுங்கள்" : "Meet Aira"}

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
                    {isTamil ? "Aira-வை சந்தியுங்கள்" : "Meet Aira"}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTA />
      </main>
      

      {/* Footer */}
      <Footer />
    </div>
  );
}