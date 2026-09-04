import ProductDetail from "./ProductDetail";
import { useLanguage } from "@/context/LanguageContext";

export default function ClickToWhatsAppAds() {
  const { language } = useLanguage();

  const isTamil = language?.toUpperCase() === "TA";

  return (
    <ProductDetail
      title={isTamil ? "Click-to-WhatsApp விளம்பரங்கள்" : "Click-to-WhatsApp Ads"}

      subtitle={
        isTamil
          ? "விளம்பர கிளிக்குகளை அர்த்தமுள்ள WhatsApp உரையாடல்களாக மாற்றுங்கள்."
          : "Turn ad clicks into meaningful WhatsApp conversations."
      }

      description={
        isTamil
          ? "உங்கள் விளம்பர பிரச்சாரங்களை நேரடியாக WhatsApp உடன் இணைத்து, வாடிக்கையாளர்கள் உடனடியாக உரையாடல்களைத் தொடங்க உதவுங்கள்."
          : "Connect your advertising campaigns directly to WhatsApp and let customers start conversations instantly."
      }

      features={
        isTamil
          ? [
              "உடனடி WhatsApp உரையாடல்கள்",
              "உயர்தர லீட் சேகரிப்பு",
              "பிரச்சாரத்திலிருந்து உரையாடல் வரை கண்காணிப்பு",
              "தானியங்கி முதல் பதில்கள்",
              "லீட் தகுதி மதிப்பீடு",
              "நிகழ்நேர வாடிக்கையாளர் ஈடுபாடு",
            ]
          : [
              "Instant WhatsApp conversations",
              "Higher-quality lead capture",
              "Campaign-to-conversation tracking",
              "Automated first responses",
              "Lead qualification",
              "Real-time customer engagement",
            ]
      }
    />
  );
}