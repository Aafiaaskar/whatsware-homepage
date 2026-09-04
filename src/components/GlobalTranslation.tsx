import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   ENGLISH → TAMIL TRANSLATIONS
   ========================================================= */

const translations: Record<string, string> = {
  /* =======================================================
     NAVBAR
  ======================================================= */

  Home: "முகப்பு",
  Products: "தயாரிப்புகள்",
  Solutions: "தீர்வுகள்",
  Integrations: "ஒருங்கிணைப்புகள்",
  Pricing: "விலை",
  Partnership: "கூட்டாண்மை",
  Resources: "வளங்கள்",
  Login: "உள்நுழை",
  "Get Started": "தொடங்குங்கள்",
  "Get started": "தொடங்குங்கள்",
  "Talk to Sales": "விற்பனை குழுவுடன் பேசுங்கள்",
  "Book a Demo": "டெமோவை முன்பதிவு செய்யுங்கள்",

  /* =======================================================
     COMMON
  ======================================================= */

  "Learn More": "மேலும் அறிக",
  "Learn more": "மேலும் அறிக",
  "Contact Us": "எங்களை தொடர்பு கொள்ளுங்கள்",
  "Read More": "மேலும் படிக்க",
  "View Pricing": "விலையைப் பார்க்கவும்",
  "Explore Integrations": "ஒருங்கிணைப்புகளை ஆராயுங்கள்",
  "Explore plans": "திட்டங்களை ஆராயுங்கள்",
  "All Solutions": "அனைத்து தீர்வுகளும்",
  "Back to Solutions": "தீர்வுகளுக்குத் திரும்புக",
  Back: "பின்செல்",
  Next: "அடுத்து",
  Previous: "முந்தைய",
  Continue: "தொடரவும்",
  Save: "சேமிக்கவும்",
  Edit: "திருத்து",
  Delete: "நீக்கு",
  Confirm: "உறுதிப்படுத்து",
  Done: "முடிந்தது",
  Close: "மூடு",
  Cancel: "ரத்து செய்",
  Submit: "சமர்ப்பிக்கவும்",
  Send: "அனுப்பு",
  Search: "தேடுக",
  "Coming Soon": "விரைவில் வருகிறது",

  /* =======================================================
     PRODUCTS
  ======================================================= */

  "Marketing Hub": "மார்க்கெட்டிங் ஹப்",
  "Support Hub": "ஆதரவு ஹப்",
  "AI Agents": "AI முகவர்கள்",
  "WhatsApp Automation": "WhatsApp தானியக்கம்",
  "Workflow Builder": "Workflow Builder",
  Analytics: "பகுப்பாய்வு",
  "Product Features": "தயாரிப்பு அம்சங்கள்",
  "WhatsApp Chatbots": "WhatsApp Chatbots",
  "WhatsApp Forms": "WhatsApp படிவங்கள்",
  "WhatsApp Broadcast": "WhatsApp பிராட்காஸ்ட்",
  "Automated Follow-ups": "தானியங்கி பின்தொடரல்கள்",
  "Shared Team Inbox": "பகிரப்பட்ட குழு Inbox",
  "WhatsApp Sales": "WhatsApp விற்பனை",
  "WhatsApp Payments": "WhatsApp பணப்பரிவர்த்தனைகள்",
  "Click to WhatsApp Ads": "WhatsApp விளம்பரங்களுக்கு கிளிக் செய்யவும்",
  "WhatsApp QR Code": "WhatsApp QR குறியீடு",
  "WhatsApp Link Generator": "WhatsApp இணைப்பு உருவாக்கி",
  "WhatsApp Chat Widget": "WhatsApp Chat Widget",

  /* =======================================================
     HOME
  ======================================================= */

  "Empowering SMBs All Over India":
    "இந்தியா முழுவதும் உள்ள SMBs-ஐ மேம்படுத்துகிறது",

  "Meet your new": "உங்கள் புதிய",

  "AI Agent.": "AI முகவரை சந்தியுங்கள்.",

  "Meet your new AI Agent.":
    "உங்கள் புதிய AI முகவரை சந்தியுங்கள்.",

  "Meet Aira": "Aira-வை சந்தியுங்கள்",

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

  /* =======================================================
     SOLUTIONS — GENERAL
  ======================================================= */

  "Explore Solutions": "தீர்வுகளை ஆராயுங்கள்",

  "For Every Business": "ஒவ்வொரு வணிகத்திற்கும்",

  "Industry Solution": "தொழில் தீர்வு",

  Industries: "தொழில்கள்",

  "What you can do": "நீங்கள் செய்யக்கூடியவை",

  "How it works": "எப்படி செயல்படுகிறது",

  "Built for your workflow.":
    "உங்கள் பணிச்சூழலுக்காக உருவாக்கப்பட்டது.",

  "Ready for your growth.":
    "உங்கள் வளர்ச்சிக்குத் தயாராக உள்ளது.",

  "A simpler way to":
    "எளிமையான வழி",

  "move customers forward.":
    "வாடிக்கையாளர்களை அடுத்த நிலைக்கு நகர்த்த.",

  "Ready to make": "தயாரா",

  "work harder for your business?":
    "உங்கள் வணிகத்திற்காக இன்னும் சிறப்பாக செயல்பட?",

  "Start building smarter customer journeys with WhatsWare.":
    "WhatsWare மூலம் சிறந்த வாடிக்கையாளர் பயணங்களை உருவாக்கத் தொடங்குங்கள்.",

  /* =======================================================
     INDUSTRY HERO
  ======================================================= */

  Better: "சிறந்த",

  "Better conversations.": "சிறந்த உரையாடல்கள்.",

  "Better customer experiences.":
    "சிறந்த வாடிக்கையாளர் அனுபவங்கள்.",

  "Better Conversations.": "சிறந்த உரையாடல்கள்.",

  "Better Customer Experiences.":
    "சிறந்த வாடிக்கையாளர் அனுபவங்கள்.",

  "Give customers faster answers, smoother appointment assistance, and personalized engagement through one connected WhatsApp-powered platform.":
    "ஒரே WhatsApp மூலம் இயங்கும் இணைக்கப்பட்ட தளத்தின் மூலம் வாடிக்கையாளர்களுக்கு விரைவான பதில்கள், எளிதான சந்திப்பு உதவி மற்றும் தனிப்பயனாக்கப்பட்ட ஈடுபாட்டை வழங்குங்கள்.",

  "Health & Wellness":
    "சுகாதாரம் மற்றும் நலவாழ்வு",

  "Health and Wellness":
    "சுகாதாரம் மற்றும் நலவாழ்வு",

  "Customer Conversation":
    "வாடிக்கையாளர் உரையாடல்",

  "AI is helping your customer":
    "AI உங்கள் வாடிக்கையாளருக்கு உதவுகிறது",

  "AI Assistance":
    "AI உதவி",

  "Always Available":
    "எப்போதும் கிடைக்கும்",

  "Business Insights":
    "வணிக நுண்ணறிவுகள்",

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

  "Customer Experiences":
    "வாடிக்கையாளர் அனுபவங்கள்",

  /* =======================================================
     INDUSTRIES
  ======================================================= */

  "E-commerce": "மின் வணிகம்",

  Education: "கல்வி",

  Healthcare: "சுகாதாரம்",

  "Real Estate": "ரியல் எஸ்டேட்",

  Restaurants: "உணவகங்கள்",

  "Restaurants & Food Business":
    "உணவகங்கள் மற்றும் உணவு வணிகம்",

  "Travel and Tourism":
    "பயணம் மற்றும் சுற்றுலா",

  "Spas and Salons":
    "ஸ்பாக்கள் மற்றும் சலூன்கள்",

  "Health & Wellness Brands":
    "சுகாதாரம் மற்றும் நலவாழ்வு பிராண்டுகள்",

  "Beauty & Cosmetics Brands":
    "அழகு மற்றும் அழகுசாதனப் பொருட்கள் பிராண்டுகள்",

  Edutech: "எட்டுடெக்",

  "Automotive Industry":
    "வாகனத் தொழில்",

  "Home Decor & Furnishing":
    "வீட்டு அலங்காரம் மற்றும் பொருத்துதல்",

  "Home Decor":
    "வீட்டு அலங்காரம்",

  "B2B Sales":
    "B2B விற்பனை",

  /* =======================================================
     WHATSAPP
  ======================================================= */

  WhatsApp: "WhatsApp",

  "WhatsApp Conversations":
    "WhatsApp உரையாடல்கள்",

  "Business messaging":
    "வணிக செய்தியிடல்",

  "AI-powered conversations":
    "AI மூலம் இயக்கப்படும் உரையாடல்கள்",

  "Automated customer journeys":
    "தானியங்கி வாடிக்கையாளர் பயணங்கள்",

  "Sales and support":
    "விற்பனை மற்றும் ஆதரவு",

  "Business Conversations":
    "வணிக உரையாடல்கள்",

  "AI Conversations":
    "AI உரையாடல்கள்",

  "Campaign Messaging":
    "பிரச்சார செய்தியிடல்",

  Automation: "தானியக்கம்",

  "Always On":
    "எப்போதும் செயல்பாட்டில்",

  /* =======================================================
     AI AGENTS
  ======================================================= */

  "Artificial Intelligence":
    "செயற்கை நுண்ணறிவு",

  "AI that talks.":
    "பேசும் AI.",

  "AI that gets things done.":
    "வேலைகளை செய்து முடிக்கும் AI.",

  "24/7 AI assistance":
    "24/7 AI உதவி",

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

  /* =======================================================
     TEAM INBOX
  ======================================================= */

  "Team Inbox": "குழு Inbox",

  "One inbox.": "ஒரே Inbox.",

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

  "Shared Inbox":
    "பகிரப்பட்ட Inbox",

  "Conversation Assignment":
    "உரையாடல் ஒதுக்கீடு",

  "Faster Support":
    "வேகமான ஆதரவு",

  "Conversation History":
    "உரையாடல் வரலாறு",

  "Team Insights":
    "குழு நுண்ணறிவுகள்",

  /* =======================================================
     WORKFLOW / AUTOMATION
  ======================================================= */

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

  /* =======================================================
     CRM
  ======================================================= */

  "CRM & Sales":
    "CRM மற்றும் விற்பனை",

  "Sales Automation":
    "விற்பனை தானியக்கம்",

  "Turn conversations":
    "உரையாடல்களை மாற்றுங்கள்",

  "into sales opportunities.":
    "விற்பனை வாய்ப்புகளாக.",

  "Sales Team Workspace":
    "விற்பனை குழு பணியிடம்",

  "Follow-up Automation":
    "பின்தொடரல் தானியக்கம்",

  "Sales Insights":
    "விற்பனை நுண்ணறிவுகள்",

  "Faster Conversions":
    "வேகமான மாற்றங்கள்",

  /* =======================================================
     MARKETING
  ======================================================= */

  Marketing: "மார்க்கெட்டிங்",

  "Marketing & Engagement":
    "மார்க்கெட்டிங் மற்றும் ஈடுபாடு",

  "Reach customers.":
    "வாடிக்கையாளர்களை சென்றடையுங்கள்.",

  "At the right moment.":
    "சரியான நேரத்தில்.",

  "Campaign management":
    "பிரச்சார மேலாண்மை",

  "Broadcast messaging":
    "பிராட்காஸ்ட் செய்தியிடல்",

  "Personalized engagement":
    "தனிப்பயனாக்கப்பட்ட ஈடுபாடு",

  "Customer re-engagement":
    "வாடிக்கையாளர் மீள் ஈடுபாடு",

  Campaigns: "பிரச்சாரங்கள்",

  "Broadcast Messaging":
    "பிராட்காஸ்ட் செய்தியிடல்",

  "Audience Targeting":
    "பார்வையாளர் இலக்கு நிர்ணயம்",

  Personalization:
    "தனிப்பயனாக்கம்",

  "Campaign Analytics":
    "பிரச்சார பகுப்பாய்வு",

  /* =======================================================
     WEBSITE CHAT
  ======================================================= */

  "Website Chat":
    "வலைத்தள உரையாடல்",

  "Website Conversations":
    "வலைத்தள உரையாடல்கள்",

  "Turn website visitors":
    "வலைத்தள பார்வையாளர்களை மாற்றுங்கள்",

  "into conversations.":
    "உரையாடல்களாக.",

  "Visitor engagement":
    "பார்வையாளர் ஈடுபாடு",

  "Instant answers":
    "உடனடி பதில்கள்",

  "AI-powered website conversations":
    "AI மூலம் இயக்கப்படும் வலைத்தள உரையாடல்கள்",

  "AI Website Assistant":
    "AI வலைத்தள உதவியாளர்",

  "Visitor Insights":
    "பார்வையாளர் நுண்ணறிவுகள்",

  /* =======================================================
     INTEGRATIONS
  ======================================================= */

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

  Webhooks: "Webhooks",

  "Reliable Data Flow":
    "நம்பகமான தரவு ஓட்டம்",

  /* =======================================================
     STATS
  ======================================================= */

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

  /* =======================================================
     PRICING
  ======================================================= */

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

  /* =======================================================
     LOGIN / SIGNUP
  ======================================================= */

  "Welcome Back":
    "மீண்டும் வரவேற்கிறோம்",

  "Sign in to your account":
    "உங்கள் கணக்கில் உள்நுழையுங்கள்",

  Email: "மின்னஞ்சல்",

  Password: "கடவுச்சொல்",

  "Forgot Password?":
    "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",

  "Sign In":
    "உள்நுழைக",

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

  /* =======================================================
     FOOTER
  ======================================================= */

  Company: "நிறுவனம்",

  Legal: "சட்டம்",

  Privacy: "தனியுரிமை",

  "Privacy Policy":
    "தனியுரிமைக் கொள்கை",

  "Terms & Conditions":
    "விதிமுறைகள் மற்றும் நிபந்தனைகள்",

  /* =======================================================
     CTA
  ======================================================= */

  "Ready to grow your business?":
    "உங்கள் வணிகத்தை வளர்க்க தயாரா?",

  "Let's get started":
    "தொடங்குவோம்",

  /* =======================================================
     COMMON PHRASES
  ======================================================= */

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

  "24/7":
    "24/7",
};

/* =========================================================
   SORT LONGEST FIRST
========================================================= */

const translationEntries = Object.entries(translations).sort(
  ([a], [b]) => b.length - a.length
);

/* =========================================================
   REVERSE TRANSLATION TABLE
   ENGLISH ← TAMIL

   This is the important fix.
   It allows EN mode to restore Tamil text.
========================================================= */

const reverseTranslations: Record<string, string> = {};

for (const [english, tamil] of Object.entries(translations)) {
  if (!reverseTranslations[tamil]) {
    reverseTranslations[tamil] = english;
  }
}

const reverseTranslationEntries = Object.entries(
  reverseTranslations
).sort(([a], [b]) => b.length - a.length);

/* =========================================================
   ENGLISH → TAMIL
========================================================= */

function translateToTamil(text: string): string {
  if (!text || !text.trim()) {
    return text;
  }

  let result = text;

  for (const [english, tamil] of translationEntries) {
    if (result.includes(english)) {
      result = result.split(english).join(tamil);
    }
  }

  return result;
}

/* =========================================================
   TAMIL → ENGLISH

   IMPORTANT:
   This fixes the problem where the Solutions page
   remains Tamil after selecting EN.
========================================================= */

function translateToEnglish(text: string): string {
  if (!text || !text.trim()) {
    return text;
  }

  let result = text;

  for (const [tamil, english] of reverseTranslationEntries) {
    if (result.includes(tamil)) {
      result = result.split(tamil).join(english);
    }
  }

  return result;
}

/* =========================================================
   GET TEXT NODES
========================================================= */

function getTextNodes(root: Node): Text[] {
  const nodes: Text[] = [];

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;

        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }

        const tag = parent.tagName.toLowerCase();

        if (
          tag === "script" ||
          tag === "style" ||
          tag === "noscript" ||
          tag === "svg" ||
          tag === "textarea"
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        if (!node.textContent?.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  let node: Node | null;

  while ((node = walker.nextNode())) {
    nodes.push(node as Text);
  }

  return nodes;
}

/* =========================================================
   PROCESS ONE TEXT NODE
========================================================= */

function processTextNode(
  node: Text,
  isTamil: boolean
) {
  if (!node || !node.parentElement) {
    return;
  }

  const currentText = node.textContent || "";

  if (!currentText.trim()) {
    return;
  }

  /*
   * Save the original English text when possible.
   *
   * This helps React components that stay mounted.
   */

  const textNode = node as Text & {
    __whatswareOriginal?: string;
    __whatswareTranslated?: boolean;
  };

  /*
   * If this node has never been translated,
   * store its current value as the source text.
   *
   * Do NOT overwrite it later.
   */

  if (
    typeof textNode.__whatswareOriginal ===
    "undefined"
  ) {
    textNode.__whatswareOriginal = currentText;
  }

  const original =
    textNode.__whatswareOriginal || currentText;

  /* =======================================================
     TAMIL MODE
  ======================================================= */

  if (isTamil) {
    /*
     * If we already know the original English,
     * translate that instead of translating Tamil again.
     */

    const sourceText =
      textNode.__whatswareTranslated
        ? original
        : original;

    const translated =
      translateToTamil(sourceText);

    if (node.textContent !== translated) {
      node.textContent = translated;
    }

    textNode.__whatswareTranslated = true;

    return;
  }

  /* =======================================================
     ENGLISH MODE
  ======================================================= */

  /*
   * First try the stored original English.
   */

  if (
    textNode.__whatswareOriginal &&
    !containsTamil(textNode.__whatswareOriginal)
  ) {
    if (node.textContent !== original) {
      node.textContent = original;
    }

    textNode.__whatswareTranslated = false;

    return;
  }

  /*
   * If React created a new node while Tamil was active,
   * the current value itself may be Tamil.
   *
   * Reverse-translate it back to English.
   */

  const restored =
    translateToEnglish(currentText);

  if (node.textContent !== restored) {
    node.textContent = restored;
  }

  /*
   * Update the original value only after we have
   * successfully restored English.
   */

  if (
    !containsTamil(restored)
  ) {
    textNode.__whatswareOriginal = restored;
  }

  textNode.__whatswareTranslated = false;
}

/* =========================================================
   DETECT TAMIL TEXT
========================================================= */

function containsTamil(text: string): boolean {
  return /[\u0B80-\u0BFF]/.test(text);
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function GlobalTranslation() {
  const { isTamil } = useLanguage();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const root = document.body;

    let isProcessing = false;

    /* =====================================================
       TRANSLATE EVERYTHING
    ===================================================== */

    const translateEverything = () => {
      if (isProcessing) {
        return;
      }

      isProcessing = true;

      try {
        const nodes = getTextNodes(root);

        nodes.forEach((node) => {
          processTextNode(node, isTamil);
        });
      } finally {
        isProcessing = false;
      }
    };

    /*
     * Small delay lets React finish rendering the page
     * before we translate it.
     */

    const initialTimer = window.setTimeout(() => {
      translateEverything();
    }, 0);

    /* =====================================================
       WATCH FOR NEW ROUTES / COMPONENTS
    ===================================================== */

    const observer = new MutationObserver(
      (mutations) => {
        if (isProcessing) {
          return;
        }

        let shouldProcess = false;

        for (const mutation of mutations) {
          /* ===============================================
             NEW ELEMENTS
          =============================================== */

          if (
            mutation.type === "childList" &&
            mutation.addedNodes.length > 0
          ) {
            shouldProcess = true;

            mutation.addedNodes.forEach(
              (addedNode) => {
                if (
                  addedNode.nodeType ===
                  Node.TEXT_NODE
                ) {
                  processTextNode(
                    addedNode as Text,
                    isTamil
                  );

                  return;
                }

                if (
                  addedNode.nodeType ===
                  Node.ELEMENT_NODE
                ) {
                  const newNodes =
                    getTextNodes(addedNode);

                  newNodes.forEach((node) => {
                    processTextNode(
                      node,
                      isTamil
                    );
                  });
                }
              }
            );
          }

          /* ===============================================
             TEXT CHANGES
          =============================================== */

          if (
            mutation.type === "characterData"
          ) {
            shouldProcess = true;

            const changedNode =
              mutation.target as Text;

            processTextNode(
              changedNode,
              isTamil
            );
          }
        }

        /*
         * React route changes can replace larger
         * sections without us seeing every final text node.
         */

        if (shouldProcess) {
          window.requestAnimationFrame(() => {
            translateEverything();
          });
        }
      }
    );

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      window.clearTimeout(initialTimer);
      observer.disconnect();
    };
  }, [isTamil]);

  return null;
}