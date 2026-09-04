import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import PartnershipPopup from "@/components/PartnershipPopup";

export default function CTA() {
  const { isTamil } = useLanguage();

  const [isPartnershipPopupOpen, setIsPartnershipPopupOpen] = useState(false);

  return (
    <>
      <section
        id="cta-section"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFDF5]"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20"
          >
            {/* Decorative icon */}
            <div className="absolute -top-12 -left-12 w-48 h-48 opacity-10 transform -rotate-12 pointer-events-none">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.13 2.13l3.41 3.42c.86.86.86 2.26 0 3.12l-1.59 1.59 3.03 3.03c.59.59.59 1.54 0 2.12l-1.41 1.41c-.59.59-1.54.59-2.12 0l-3.03-3.03-1.59 1.59c-.86.86-2.26.86-3.12 0l-3.42-3.41c-.86-.86-.86-2.26 0-3.12l1.59-1.59-3.03-3.03c-.59-.59-.59-1.54 0-2.12l1.41-1.41c.59-.59 1.54-.59 2.12 0l3.03 3.03 1.59-1.59c.86-.86 2.26-.86 3.12 0z" />
              </svg>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

              {/* Rocket */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30 shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                {isTamil
                  ? "உரையாடல்களை வளர்ச்சியாக மாற்ற தயாரா?"
                  : "Ready to Turn Conversations into Growth?"}
              </h2>

              {/* Description */}
              <p className="text-xl text-white/80 mb-10 max-w-2xl">
                {isTamil
                  ? "WhatsApp-இல் தானியங்குபடுத்த, ஈடுபட மற்றும் வெற்றி பெற ஏற்கனவே WhatsWare-ஐ பயன்படுத்தும் 10,000+ வணிகங்களுடன் சேருங்கள்."
                  : "Join 10,000+ businesses already using WhatsWare to automate, engage and succeed on WhatsApp."}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-12">

                {/* GET STARTED → PARTNERSHIP POPUP */}
                <button
                  type="button"
                  onClick={() => setIsPartnershipPopupOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-xl text-center"
                >
                  {isTamil
                    ? "இப்போதே தொடங்குங்கள் →"
                    : "Get Started →"}
                </button>

                {/* TALK TO OUR TEAM → WHATSAPP */}
                <a
                  href="https://wa.me/918056819125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-center"
                >
                  {isTamil
                    ? "எங்கள் குழுவுடன் பேசுங்கள்"
                    : "Talk to Our Team"}
                </a>

              </div>

              {/* Bottom text */}
              <div className="font-['Dancing_Script'] text-3xl md:text-4xl text-[#EEFBE8] transform -rotate-2">
                {isTamil
                  ? "ஒன்றாக ஒரு புத்திசாலி வணிகத்தை உருவாக்குவோம்!"
                  : "Let's build a smarter business — together!"}
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP POPUP
      ===================================================== */}
      <PartnershipPopup
        isOpen={isPartnershipPopupOpen}
        onClose={() => setIsPartnershipPopupOpen(false)}
      />
    </>
  );
}