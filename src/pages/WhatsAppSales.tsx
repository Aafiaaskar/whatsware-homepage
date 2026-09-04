import ProductDetail from "./ProductDetail";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppSales() {
  const { language } = useLanguage();

  const isTamil = language === "TA";

  return (
    <ProductDetail
      title="WhatsApp Sales"

      subtitle={
        isTamil
          ? "வாடிக்கையாளர் உரையாடல்களை அதிகமான விற்பனையாக மாற்றுங்கள்."
          : "Turn customer conversations into more sales."
      }

      description={
        isTamil
          ? "வாடிக்கையாளர்களுடன் தொடர்பு கொள்ளவும், லீட்களை வளர்க்கவும், வாடிக்கையாளர்களைத் தொடர்ந்து அணுகவும், WhatsApp மூலம் அதிகமான விற்பனைகளை முடிக்கவும் உங்கள் விற்பனை குழுவிற்கு தேவையான கருவிகளை வழங்குங்கள்."
          : "Give your sales team the tools they need to engage prospects, nurture leads, follow up with customers, and close more deals through WhatsApp."
      }

      features={
        isTamil
          ? [
              "விற்பனை உரையாடல்கள்",
              "லீட் வளர்ப்பு",
              "வாடிக்கையாளர் Follow-up-கள்",
              "விற்பனை குழு ஒத்துழைப்பு",
              "லீட் கண்காணிப்பு",
              "மாற்று விகித மேம்பாடு",
            ]
          : [
              "Sales conversations",
              "Lead nurturing",
              "Customer follow-ups",
              "Sales team collaboration",
              "Lead tracking",
              "Conversion optimization",
            ]
      }
    />
  );
}