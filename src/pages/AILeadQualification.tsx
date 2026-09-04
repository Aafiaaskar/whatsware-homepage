import ProductDetail from "./ProductDetail";
import { useLanguage } from "@/context/LanguageContext";

export default function AILeadQualification() {
  const { language } = useLanguage();

  const isTamil = language === "TA";

  return (
    <ProductDetail
      title="AI Lead Qualification"

      subtitle={
        isTamil
          ? "அதிக ஆர்வமுள்ள லீட்களை தானாகவே கண்டறியுங்கள்."
          : "Identify your highest-intent leads automatically."
      }

      description={
        isTamil
          ? "AI மூலம் இயக்கப்படும் உரையாடல்களைப் பயன்படுத்தி வாடிக்கையாளர் ஆர்வத்தைப் புரிந்துகொண்டு, வாய்ப்புள்ள லீட்களைத் தகுதிப்படுத்தி, மாற்றம் பெற அதிக வாய்ப்புள்ள லீட்களில் உங்கள் விற்பனை குழு கவனம் செலுத்த உதவுங்கள்."
          : "Use AI-powered conversations to understand customer intent, qualify prospects, and help your sales team focus on the leads most likely to convert."
      }

      features={
        isTamil
          ? [
              "AI மூலம் இயக்கப்படும் லீட் தகுதி மதிப்பீடு",
              "லீட் மதிப்பீடு",
              "வாடிக்கையாளர் ஆர்வத்தைக் கண்டறிதல்",
              "தானியங்கி தகுதி கேள்விகள்",
              "அதிக ஆர்வமுள்ள லீட்களைக் கண்டறிதல்",
              "விற்பனை குழுவிடம் ஒப்படைத்தல்",
            ]
          : [
              "AI-powered lead qualification",
              "Lead scoring",
              "Customer intent detection",
              "Automated qualification questions",
              "High-intent lead identification",
              "Sales team handoff",
            ]
      }
    />
  );
}