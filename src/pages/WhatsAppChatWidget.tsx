import ProductDetail from "./ProductDetail";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppChatWidget() {
  const { language } = useLanguage();

  const isTamil = language === "TA";

  return (
    <ProductDetail
      title="WhatsApp Chat Widget"

      subtitle={
        isTamil
          ? "WhatsApp உரையாடல்களை நேரடியாக உங்கள் இணையதளத்திற்கு கொண்டு வாருங்கள்."
          : "Bring WhatsApp conversations directly to your website."
      }

      description={
        isTamil
          ? "உங்கள் இணையதளத்தை விட்டு வெளியேறாமல் WhatsApp உரையாடலைத் தொடங்க இணையதள பார்வையாளர்களுக்கு எளிதான வழியை வழங்குங்கள்."
          : "Give website visitors an easy way to start a WhatsApp conversation without leaving your website."
      }

      features={
        isTamil
          ? [
              "இணையதள WhatsApp Widget",
              "உடனடி வாடிக்கையாளர் உரையாடல்கள்",
              "தனிப்பயனாக்கக்கூடிய Call-to-Action",
              "மொபைல் Responsive வடிவமைப்பு",
              "லீட் சேகரிப்பு",
              "எளிதான ஒருங்கிணைப்பு",
            ]
          : [
              "Website WhatsApp widget",
              "Instant customer conversations",
              "Custom call-to-action",
              "Mobile responsive",
              "Lead capture",
              "Easy integration",
            ]
      }
    />
  );
}