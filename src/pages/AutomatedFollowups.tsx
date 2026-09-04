import ProductDetail from "./ProductDetail";
import { useLanguage } from "@/context/LanguageContext";

export default function AutomatedFollowups() {
  const { language } = useLanguage();

  const isTamil = language === "TA";

  return (
    <ProductDetail
      title="Automated Follow-ups"

      subtitle={
        isTamil
          ? "முக்கியமான எந்த லீடும் தவறவிடப்படாமல் பார்த்துக்கொள்ளுங்கள்."
          : "Never let an important lead go cold."
      }

      description={
        isTamil
          ? "சரியான நேரத்தில் வாடிக்கையாளர்களை தானாகவே தொடர்ந்து அணுகுங்கள். கைமுறை முயற்சியின்றி உரையாடல்களை மாற்றத்தை நோக்கி தொடர்ந்து நகர்த்துங்கள்."
          : "Automatically follow up with customers at the right time and keep conversations moving toward conversion without manual effort."
      }

      features={
        isTamil
          ? [
              "தானியங்கி Follow-up செய்திகள்",
              "திட்டமிடப்பட்ட Follow-up-கள்",
              "லீட் வளர்ப்பு",
              "உரையாடல் நினைவூட்டல்கள்",
              "தனிப்பயனாக்கப்பட்ட செய்திகள்",
              "மாற்றத்தை மையமாகக் கொண்ட Workflows",
            ]
          : [
              "Automatic follow-up messages",
              "Scheduled follow-ups",
              "Lead nurturing",
              "Conversation reminders",
              "Personalized messaging",
              "Conversion-focused workflows",
            ]
      }
    />
  );
}