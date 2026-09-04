import ProductDetail from "./ProductDetail";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppChatbots() {
  const { language } = useLanguage();

  const isTamil = language === "TA";

  return (
    <ProductDetail
      title="WhatsApp Chatbots"

      subtitle={
        isTamil
          ? "WhatsApp இல் வாடிக்கையாளர் உரையாடல்களை தானியக்கமாக்குங்கள்."
          : "Automate customer conversations on WhatsApp."
      }

      description={
        isTamil
          ? "கேள்விகளுக்கு பதிலளிக்கவும், தகவல்களை சேகரிக்கவும், வாடிக்கையாளர்களை அவர்களின் பயணத்தின் ஒவ்வொரு கட்டத்திலும் வழிநடத்தவும் தானியங்கி உரையாடல்களை உருவாக்குங்கள்."
          : "Build automated conversations that answer questions, collect information, and guide customers through their journey."
      }

      features={
        isTamil
          ? [
              "தானியங்கி உரையாடல்கள்",
              "லீட் சேகரிப்பு",
              "FAQ தானியக்கம்",
              "வாடிக்கையாளர் தகுதி மதிப்பீடு",
              "உரையாடல் ஓட்டங்கள்",
              "24/7 வாடிக்கையாளர் ஈடுபாடு",
            ]
          : [
              "Automated conversations",
              "Lead capture",
              "FAQ automation",
              "Customer qualification",
              "Conversation flows",
              "24/7 customer engagement",
            ]
      }
    />
  );
}