import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/* =========================================================
   LANGUAGE TYPES
========================================================= */

export type Language = "EN" | "TA";

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  EN: {
    Home: "Home",
    Products: "Products",
    Solutions: "Solutions",
    Integrations: "Integrations",
    Pricing: "Pricing",
    Partnership: "Partnership",
    Resources: "Resources",

    "Sign In": "Sign In",
    "Book a Demo": "Book a Demo",
    "Get Started": "Get Started",
    "Talk to Sales": "Talk to Sales",

    Channels: "Channels",
    Industries: "Industries",

    WhatsApp: "WhatsApp",
    Instagram: "Instagram",
    RCS: "RCS",
    Voice: "Voice",

    "B2B Sales": "B2B Sales",
    "Travel & Tourism": "Travel & Tourism",
    "Restaurant & Food Business": "Restaurant & Food Business",
    "Spas & Salons": "Spas & Salons",
    "Health & Wellness Brands": "Health & Wellness Brands",
    "Beauty & Cosmetic Brands": "Beauty & Cosmetic Brands",
    Edutech: "Edutech",
    "Automotive Industry": "Automotive Industry",
    "Home Decor & Furnishing": "Home Decor & Furnishing",
    "Marketing Agency": "Marketing Agency",
    "Real Estate": "Real Estate",
    "Freelancers & Consultants": "Freelancers & Consultants",

    "AI Agents": "AI Agents",
    "Marketing Hub": "Marketing Hub",
    "Support Hub": "Support Hub",
    "WhatsApp Automation": "WhatsApp Automation",
    "Workflow Builder": "Workflow Builder",
    Analytics: "Analytics",
    "Product Features": "Product Features",

    "WhatsApp Voice Calling": "WhatsApp Voice Calling",
    "No Code Chatbot Builder": "No Code Chatbot Builder",
    "WhatsApp Business API": "WhatsApp Business API",
    "WhatsApp Forms": "WhatsApp Forms",
    "Click to WhatsApp Ads": "Click to WhatsApp Ads",
    "WhatsApp Marketing": "WhatsApp Marketing",
    "WhatsApp CRM": "WhatsApp CRM",
    "WhatsApp Commerce": "WhatsApp Commerce",
    "WhatsApp Chat Widget": "WhatsApp Chat Widget",

    "Connect with customers everywhere":
      "Connect with customers everywhere",

    "Solutions built for your industry":
      "Solutions built for your industry",

    "Industry Solution": "Industry Solution",
    "Explore Solution": "Explore Solution",

    Cancel: "Cancel",
    Language: "Language",

    "Connect and engage customers on WhatsApp":
      "Connect and engage customers on WhatsApp",

    "Turn Instagram conversations into opportunities":
      "Turn Instagram conversations into opportunities",

    "Deliver rich and interactive customer messages":
      "Deliver rich and interactive customer messages",

    "Connect with customers through voice":
      "Connect with customers through voice",

    "Generate and qualify more business leads":
      "Generate and qualify more business leads",

    "Convert travel enquiries into bookings":
      "Convert travel enquiries into bookings",

    "Grow orders and customer engagement":
      "Grow orders and customer engagement",

    "Drive appointments and repeat customers":
      "Drive appointments and repeat customers",

    "Build stronger customer relationships":
      "Build stronger customer relationships",

    "Turn conversations into beauty sales":
      "Turn conversations into beauty sales",

    "Engage students and automate admissions":
      "Engage students and automate admissions",

    "Capture and nurture automotive leads":
      "Capture and nurture automotive leads",

    "Convert enquiries into home sales":
      "Convert enquiries into home sales",

    "Scale campaigns and client conversations":
      "Scale campaigns and client conversations",

    "Capture and qualify property leads":
      "Capture and qualify property leads",

    "Automate enquiries and client follow-ups":
      "Automate enquiries and client follow-ups",

    "Powerful WhatsApp tools for your business":
      "Powerful WhatsApp tools for your business",

    "WhatsApp Solutions": "WhatsApp Solutions",

    "Empowering SMBs All Over India":
      "Empowering SMBs All Over India",

    "Meet your new AI Agent.":
      "Meet your new AI Agent.",

    "AI-powered customer conversations":
      "AI-powered customer conversations",

    "Automatic lead capture & qualification":
      "Automatic lead capture & qualification",

    "24/7 instant customer support":
      "24/7 instant customer support",

    "See How It Works": "See How It Works",

    "No credit card required":
      "No credit card required",

    "Easy to get started":
      "Easy to get started",

    "Built for growing businesses":
      "Built for growing businesses",

    "Explore Solutions": "Explore Solutions",

    "For Every Business": "For Every Business",

    "What you can do": "What you can do",

    "How it works": "How it works",

    "Built for your workflow.":
      "Built for your workflow.",

    "Ready for your growth.":
      "Ready for your growth.",

    "A simpler way to":
      "A simpler way to",

    "move customers forward.":
      "move customers forward.",

    "Ready to make":
      "Ready to make",

    "work harder for your business?":
      "work harder for your business?",

    "Start building smarter customer journeys with WhatsWare.":
      "Start building smarter customer journeys with WhatsWare.",

    Better: "Better",

    "Better conversations.":
      "Better conversations.",

    "Better customer experiences.":
      "Better customer experiences.",

    "Customer Conversation":
      "Customer Conversation",

    "AI is helping your customer":
      "AI is helping your customer",

    "AI Assistance": "AI Assistance",

    "Always Available": "Always Available",

    "Business Insights": "Business Insights",

    "Customer Support": "Customer Support",

    "Lead Generation": "Lead Generation",

    "Lead Capture": "Lead Capture",

    "Lead Qualification": "Lead Qualification",

    "Customer Engagement": "Customer Engagement",

    "Customer Experience": "Customer Experience",

    "Customer Experiences":
      "Customer Experiences",

    "WhatsApp Conversations":
      "WhatsApp Conversations",

    "Business messaging":
      "Business messaging",

    "AI-powered conversations":
      "AI-powered conversations",

    "Automated customer journeys":
      "Automated customer journeys",

    "Sales and support":
      "Sales and support",

    "Business Conversations":
      "Business Conversations",

    "AI Conversations":
      "AI Conversations",

    "Campaign Messaging":
      "Campaign Messaging",

    Automation: "Automation",

    "Always On": "Always On",

    "Artificial Intelligence":
      "Artificial Intelligence",

    "AI that talks.":
      "AI that talks.",

    "AI that gets things done.":
      "AI that gets things done.",

    "24/7 AI assistance":
      "24/7 AI assistance",

    "Natural conversations":
      "Natural conversations",

    "Intelligent lead qualification":
      "Intelligent lead qualification",

    "Automated support":
      "Automated support",

    "Intelligent AI Agents":
      "Intelligent AI Agents",

    "Context-Aware Conversations":
      "Context-Aware Conversations",

    "Action-Based AI":
      "Action-Based AI",

    "Conversation Insights":
      "Conversation Insights",

    "Team Inbox":
      "Team Inbox",

    "One inbox.": "One inbox.",

    "One team. Better support.":
      "One team. Better support.",

    "Shared customer inbox":
      "Shared customer inbox",

    "Team collaboration":
      "Team collaboration",

    "Conversation assignment":
      "Conversation assignment",

    "Faster customer support":
      "Faster customer support",

    "Shared Inbox": "Shared Inbox",

    "Conversation Assignment":
      "Conversation Assignment",

    "Faster Support":
      "Faster Support",

    "Conversation History":
      "Conversation History",

    "Team Insights":
      "Team Insights",

    "Workflow Automation":
      "Workflow Automation",

    "Automate the work.":
      "Automate the work.",

    "Focus on the growth.":
      "Focus on the growth.",

    "Visual workflows":
      "Visual workflows",

    "Automated follow-ups":
      "Automated follow-ups",

    "Trigger-based actions":
      "Trigger-based actions",

    "Always-on automation":
      "Always-on automation",

    "Visual Workflows":
      "Visual Workflows",

    "Instant Triggers":
      "Instant Triggers",

    "Scheduled Follow-ups":
      "Scheduled Follow-ups",

    "AI + Automation":
      "AI + Automation",

    "Lead Automation":
      "Lead Automation",

    "Business Processes":
      "Business Processes",

    "CRM & Sales":
      "CRM & Sales",

    "Sales Automation":
      "Sales Automation",

    "Turn conversations":
      "Turn conversations",

    "into sales opportunities.":
      "into sales opportunities.",

    "Sales Team Workspace":
      "Sales Team Workspace",

    "Follow-up Automation":
      "Follow-up Automation",

    "Sales Insights":
      "Sales Insights",

    "Faster Conversions":
      "Faster Conversions",

    Marketing: "Marketing",

    "Marketing & Engagement":
      "Marketing & Engagement",

    "Reach customers.":
      "Reach customers.",

    "At the right moment.":
      "At the right moment.",

    "Campaign management":
      "Campaign management",

    "Broadcast messaging":
      "Broadcast messaging",

    "Personalized engagement":
      "Personalized engagement",

    "Customer re-engagement":
      "Customer re-engagement",

    Campaigns: "Campaigns",

    "Broadcast Messaging":
      "Broadcast Messaging",

    "Audience Targeting":
      "Audience Targeting",

    Personalization: "Personalization",

    "Campaign Analytics":
      "Campaign Analytics",

    "Website Chat":
      "Website Chat",

    "Website Conversations":
      "Website Conversations",

    "Turn website visitors":
      "Turn website visitors",

    "into conversations.":
      "into conversations.",

    "Visitor engagement":
      "Visitor engagement",

    "Instant answers":
      "Instant answers",

    "AI-powered website conversations":
      "AI-powered website conversations",

    "AI Website Assistant":
      "AI Website Assistant",

    "Visitor Insights":
      "Visitor Insights",

    "Connected Business Stack":
      "Connected Business Stack",

    "Connect your tools.":
      "Connect your tools.",

    "Keep everything moving.":
      "Keep everything moving.",

    "CRM Connections":
      "CRM Connections",

    "Connected Tools":
      "Connected Tools",

    "Connected Workflows":
      "Connected Workflows",

    "API Access":
      "API Access",

    Webhooks: "Webhooks",

    "Reliable Data Flow":
      "Reliable Data Flow",

    "Businesses Trust WhatsWare":
      "Businesses Trust WhatsWare",

    "Conversations Automated":
      "Conversations Automated",

    "Message Delivery":
      "Message Delivery",

    "Customer Satisfaction":
      "Customer Satisfaction",

    "Connected Platform":
      "Connected Platform",

    "Intelligent Assistance":
      "Intelligent Assistance",

    "Choose the perfect plan for your business":
      "Choose the perfect plan for your business",

    "Start with Spark":
      "Start with Spark",

    "Choose Boost":
      "Choose Boost",

    "Go Titan":
      "Go Titan",

    "Contact Sales":
      "Contact Sales",

    "Most Popular":
      "Most Popular",

    "Per Month":
      "Per Month",

    "Welcome Back":
      "Welcome Back",

    "Sign in to your account":
      "Sign in to your account",

    Email: "Email",

    Password: "Password",

    "Forgot Password?":
      "Forgot Password?",

    "Don't have an account?":
      "Don't have an account?",

    "Create Account":
      "Create Account",

    "Create your account":
      "Create your account",

    "Get started with WhatsWare":
      "Get started with WhatsWare",

    "Full Name": "Full Name",

    "Phone Number":
      "Phone Number",

    "Company Name":
      "Company Name",

    "Create Password":
      "Create Password",

    "Sign Up": "Sign Up",

    Company: "Company",

    Legal: "Legal",

    Privacy: "Privacy",

    "Privacy Policy":
      "Privacy Policy",

    "Terms & Conditions":
      "Terms & Conditions",

    "Ready to grow your business?":
      "Ready to grow your business?",

    "Let's get started":
      "Let's get started",

    "One connected platform":
      "One connected platform",

    "Customer journey":
      "Customer journey",

    "Customer journeys":
      "Customer journeys",

    "Business growth":
      "Business growth",

    "Business outcomes":
      "Business outcomes",

    "Customer conversations":
      "Customer conversations",
  },

  TA: {
    Home: "முகப்பு",
    Products: "தயாரிப்புகள்",
    Solutions: "தீர்வுகள்",
    Integrations: "ஒருங்கிணைப்புகள்",
    Pricing: "விலை",
    Partnership: "கூட்டாண்மை",
    Resources: "வளங்கள்",

    "Sign In": "உள்நுழைக",
    "Book a Demo": "டெமோவை முன்பதிவு செய்யுங்கள்",
    "Get Started": "தொடங்குங்கள்",
    "Talk to Sales": "விற்பனை குழுவுடன் பேசுங்கள்",

    Channels: "சேனல்கள்",
    Industries: "தொழில்கள்",

    WhatsApp: "WhatsApp",
    Instagram: "Instagram",
    RCS: "RCS",
    Voice: "குரல்",

    "AI Agents": "AI முகவர்கள்",
    "Marketing Hub": "மார்க்கெட்டிங் ஹப்",
    "Support Hub": "ஆதரவு ஹப்",
    "WhatsApp Automation": "WhatsApp தானியக்கம்",
    "Workflow Builder": "Workflow Builder",
    Analytics: "பகுப்பாய்வு",
    "Product Features": "தயாரிப்பு அம்சங்கள்",

    "Explore Solution": "தீர்வை ஆராயுங்கள்",
    "Industry Solution": "தொழில் தீர்வு",

    Cancel: "ரத்து செய்",
    Language: "மொழி",

    "Meet your new AI Agent.":
      "உங்கள் புதிய AI முகவரை சந்தியுங்கள்.",

    "AI-powered customer conversations":
      "AI மூலம் இயக்கப்படும் வாடிக்கையாளர் உரையாடல்கள்",

    "Automatic lead capture & qualification":
      "லீட்களை தானாகப் பெற்று தகுதி நிர்ணயம் செய்யுங்கள்",

    "24/7 instant customer support":
      "24/7 உடனடி வாடிக்கையாளர் ஆதரவு",

    "See How It Works":
      "எப்படி செயல்படுகிறது என்பதைப் பாருங்கள்",

    "No credit card required":
      "கிரெடிட் கார்டு தேவையில்லை",

    "Easy to get started":
      "எளிதாகத் தொடங்கலாம்",

    "Built for growing businesses":
      "வளரும் வணிகங்களுக்காக உருவாக்கப்பட்டது",

    "Explore Solutions":
      "தீர்வுகளை ஆராயுங்கள்",

    "Natural conversations":
      "இயல்பான உரையாடல்கள்",

    "Intelligent lead qualification":
      "நுண்ணறிவு கொண்ட லீட் தகுதி நிர்ணயம்",

    "Automated support":
      "தானியங்கி ஆதரவு",

    "Intelligent AI Agents":
      "நுண்ணறிவு கொண்ட AI முகவர்கள்",

    "Context-Aware Conversations":
      "சூழலைப் புரிந்துகொள்ளும் உரையாடல்கள்",

    "Action-Based AI":
      "செயல்களை அடிப்படையாகக் கொண்ட AI",

    "Conversation Insights":
      "உரையாடல் நுண்ணறிவுகள்",

    "Customer Support":
      "வாடிக்கையாளர் ஆதரவு",

    "Lead Generation":
      "லீட் உருவாக்கம்",

    "Lead Capture":
      "லீட் சேகரிப்பு",

    "Lead Qualification":
      "லீட் தகுதி நிர்ணயம்",

    "Customer Engagement":
      "வாடிக்கையாளர் ஈடுபாடு",

    "Customer Experience":
      "வாடிக்கையாளர் அனுபவம்",

    "WhatsApp Conversations":
      "WhatsApp உரையாடல்கள்",

    "AI-powered conversations":
      "AI மூலம் இயக்கப்படும் உரையாடல்கள்",

    "Automated customer journeys":
      "தானியங்கி வாடிக்கையாளர் பயணங்கள்",

    "Business Conversations":
      "வணிக உரையாடல்கள்",

    "AI Conversations":
      "AI உரையாடல்கள்",

    Automation:
      "தானியக்கம்",

    "Always On":
      "எப்போதும் செயல்பாட்டில்",

    "Artificial Intelligence":
      "செயற்கை நுண்ணறிவு",

    "AI that talks.":
      "பேசும் AI.",

    "AI that gets things done.":
      "வேலைகளை செய்து முடிக்கும் AI.",

    "24/7 AI assistance":
      "24/7 AI உதவி",

    "Team Inbox":
      "குழு Inbox",

    "One inbox.":
      "ஒரே Inbox.",

    "One team. Better support.":
      "ஒரே குழு. சிறந்த ஆதரவு.",

    "Shared customer inbox":
      "பகிரப்பட்ட வாடிக்கையாளர் Inbox",

    "Team collaboration":
      "குழு ஒத்துழைப்பு",

    "Conversation assignment":
      "உரையாடல் ஒதுக்கீடு",

    "Faster customer support":
      "வேகமான வாடிக்கையாளர் ஆதரவு",

    "Workflow Automation":
      "பணிச்சூழல் தானியக்கம்",

    "Automate the work.":
      "வேலைகளை தானியக்கமாக்குங்கள்.",

    "Focus on the growth.":
      "வளர்ச்சியில் கவனம் செலுத்துங்கள்.",

    "Visual workflows":
      "காட்சி பணிச்சூழல்கள்",

    "Automated follow-ups":
      "தானியங்கி பின்தொடரல்கள்",

    "Trigger-based actions":
      "தூண்டுதல் அடிப்படையிலான செயல்கள்",

    "Always-on automation":
      "எப்போதும் செயல்படும் தானியக்கம்",

    "Visual Workflows":
      "காட்சி பணிச்சூழல்கள்",

    "Instant Triggers":
      "உடனடி தூண்டுதல்கள்",

    "Scheduled Follow-ups":
      "திட்டமிடப்பட்ட பின்தொடரல்கள்",

    "AI + Automation":
      "AI + தானியக்கம்",

    "Lead Automation":
      "லீட் தானியக்கம்",

    "Business Processes":
      "வணிக செயல்முறைகள்",

    "CRM & Sales":
      "CRM மற்றும் விற்பனை",

    "Sales Automation":
      "விற்பனை தானியக்கம்",

    Marketing:
      "மார்க்கெட்டிங்",

    "Marketing & Engagement":
      "மார்க்கெட்டிங் மற்றும் ஈடுபாடு",

    "Campaign management":
      "பிரச்சார மேலாண்மை",

    "Broadcast messaging":
      "பிராட்காஸ்ட் செய்தியிடல்",

    "Personalized engagement":
      "தனிப்பயனாக்கப்பட்ட ஈடுபாடு",

    "Campaign Analytics":
      "பிரச்சார பகுப்பாய்வு",

    "Website Chat":
      "வலைத்தள உரையாடல்",

    "Website Conversations":
      "வலைத்தள உரையாடல்கள்",

    "Instant answers":
      "உடனடி பதில்கள்",

    "AI-powered website conversations":
      "AI மூலம் இயக்கப்படும் வலைத்தள உரையாடல்கள்",

    "AI Website Assistant":
      "AI வலைத்தள உதவியாளர்",

    "Visitor Insights":
      "பார்வையாளர் நுண்ணறிவுகள்",

    "Connected Business Stack":
      "இணைக்கப்பட்ட வணிக அமைப்பு",

    "Connect your tools.":
      "உங்கள் கருவிகளை இணைக்கவும்.",

    "Keep everything moving.":
      "எல்லாவற்றையும் தொடர்ந்து செயல்படச் செய்யுங்கள்.",

    "CRM Connections":
      "CRM இணைப்புகள்",

    "Connected Tools":
      "இணைக்கப்பட்ட கருவிகள்",

    "Connected Workflows":
      "இணைக்கப்பட்ட பணிச்சூழல்கள்",

    "API Access":
      "API அணுகல்",

    "Reliable Data Flow":
      "நம்பகமான தரவு ஓட்டம்",

    "Businesses Trust WhatsWare":
      "WhatsWare-ஐ நம்பும் வணிகங்கள்",

    "Conversations Automated":
      "தானியக்கமாக்கப்பட்ட உரையாடல்கள்",

    "Message Delivery":
      "செய்தி விநியோகம்",

    "Customer Satisfaction":
      "வாடிக்கையாளர் திருப்தி",

    "Connected Platform":
      "இணைக்கப்பட்ட தளம்",

    "Intelligent Assistance":
      "நுண்ணறிவு உதவி",

    "Choose the perfect plan for your business":
      "உங்கள் வணிகத்திற்கான சரியான திட்டத்தைத் தேர்ந்தெடுக்கவும்",

    "Start with Spark":
      "Spark மூலம் தொடங்குங்கள்",

    "Choose Boost":
      "Boost-ஐ தேர்வு செய்யுங்கள்",

    "Go Titan":
      "Titan-ஐ தேர்வு செய்யுங்கள்",

    "Contact Sales":
      "விற்பனை குழுவை தொடர்பு கொள்ளுங்கள்",

    "Most Popular":
      "மிகவும் பிரபலமானது",

    "Per Month":
      "மாதத்திற்கு",

    "Welcome Back":
      "மீண்டும் வரவேற்கிறோம்",

    "Sign in to your account":
      "உங்கள் கணக்கில் உள்நுழையுங்கள்",

    Email:
      "மின்னஞ்சல்",

    Password:
      "கடவுச்சொல்",

    "Forgot Password?":
      "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",

    "Don't have an account?":
      "கணக்கு இல்லையா?",

    "Create Account":
      "கணக்கை உருவாக்குங்கள்",

    "Create your account":
      "உங்கள் கணக்கை உருவாக்குங்கள்",

    "Get started with WhatsWare":
      "WhatsWare உடன் தொடங்குங்கள்",

    "Full Name":
      "முழுப் பெயர்",

    "Phone Number":
      "தொலைபேசி எண்",

    "Company Name":
      "நிறுவனத்தின் பெயர்",

    "Create Password":
      "கடவுச்சொல்லை உருவாக்குங்கள்",

    "Sign Up":
      "பதிவு செய்யுங்கள்",

    Company:
      "நிறுவனம்",

    Legal:
      "சட்டம்",

    Privacy:
      "தனியுரிமை",

    "Privacy Policy":
      "தனியுரிமைக் கொள்கை",

    "Terms & Conditions":
      "விதிமுறைகள் மற்றும் நிபந்தனைகள்",

    "Ready to grow your business?":
      "உங்கள் வணிகத்தை வளர்க்க தயாரா?",

    "Let's get started":
      "தொடங்குவோம்",

    "One connected platform":
      "ஒரே இணைக்கப்பட்ட தளம்",

    "Customer journey":
      "வாடிக்கையாளர் பயணம்",

    "Customer journeys":
      "வாடிக்கையாளர் பயணங்கள்",

    "Business growth":
      "வணிக வளர்ச்சி",

    "Business outcomes":
      "வணிக முடிவுகள்",

    "Customer conversations":
      "வாடிக்கையாளர் உரையாடல்கள்",
  },
} as const;

/* =========================================================
   TYPES
========================================================= */

export type TranslationKey =
  keyof typeof translations.EN;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  isTamil: boolean;
  t: (key: TranslationKey | string) => string;
}

/* =========================================================
   CONTEXT
========================================================= */

const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  );

/* =========================================================
   PROVIDER
========================================================= */

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>(() => {
      if (typeof window === "undefined") {
        return "EN";
      }

      const saved =
        localStorage.getItem(
          "whatsware-language"
        );

      return saved === "TA" ? "TA" : "EN";
    });

  useEffect(() => {
    document.documentElement.lang =
      language === "TA" ? "ta" : "en";
  }, [language]);

  const setLanguage = (
    newLanguage: Language
  ) => {
    setLanguageState(newLanguage);

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "whatsware-language",
        newLanguage
      );
    }
  };

  const t = (
    key: TranslationKey | string
  ): string => {
    const currentTranslations =
      translations[language] as Record<
        string,
        string
      >;

    if (
      Object.prototype.hasOwnProperty.call(
        currentTranslations,
        key
      )
    ) {
      return currentTranslations[key];
    }

    return key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isTamil: language === "TA",
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/* =========================================================
   useLanguage HOOK
========================================================= */

export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}