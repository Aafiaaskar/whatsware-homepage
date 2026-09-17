import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Headphones,
  MessageCircle,
  MessageSquareText,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOff,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  Volume2,
  Waves,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   WHATSWARE VOXA
========================================================= */

const VOXA_NAME = "Voxa";

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  EN: {
    /* HERO */
    badge: "VOXA • WHATSWARE VOICE",
    title1: "Never let a great",
    title2: "conversation go unanswered.",
    description:
      "Voxa is your AI voice teammate that answers calls, understands customers, captures leads and keeps your team informed — even when you're busy.",
    getStarted: "Get Started",
    seeVoxa: "See Voxa in action",
    trust1: "AI-powered conversations",
    trust2: "24/7 availability",
    trust3: "Human handoff",
    trust4: "Easy to configure",

    /* HERO PHONE */
    incomingCall: "Incoming call",
    answering: "Voxa is answering",
    caller: "Rahul Sharma",
    callReason: "Product enquiry",
    liveCall: "LIVE CALL",
    listening: "Listening",
    understanding: "Understanding",
    responding: "Responding",
    leadCaptured: "Lead captured",
    callSummary: "Call summary",
    whatsappReady: "WhatsApp summary ready",
    highPriority: "High priority",

    /* CALL FLOW */
    flowLabel: "SEE VOXA IN ACTION",
    flowTitle1: "A call comes in.",
    flowTitle2: "Voxa takes it from here.",
    flowDescription:
      "From the first hello to the follow-up, Voxa turns conversations into useful business context.",
    step1Title: "Customer calls",
    step1Text:
      "A customer reaches your business while you're busy, away or unavailable.",
    step2Title: "Voxa answers",
    step2Text:
      "Your AI voice teammate greets the caller and handles the conversation naturally.",
    step3Title: "You get the context",
    step3Text:
      "Receive a concise summary with the customer's intent and next action.",

    /* SUMMARY */
    summaryTitle: "AI call summary",
    summaryCustomer: "Customer",
    summaryIntent: "Intent",
    summaryRequest: "Request",
    summaryNext: "Next action",
    summaryCustomerValue: "Rahul Sharma",
    summaryIntentValue: "Product enquiry",
    summaryRequestValue: "WhatsApp automation pricing",
    summaryNextValue: "Schedule a demo",
    openWhatsapp: "Open WhatsApp",
    captured: "Captured automatically",

    /* PHOTO SECTION */
    photoLabel: "YOUR AI VOICE TEAMMATE",
    photoTitle1: "Your customers don't have to",
    photoTitle2: "wait for you to become available.",
    photoDescription:
      "Meet Voxa — an always-ready AI receptionist designed to help growing businesses handle more conversations without adding more work.",
    busyTitle: "You're already on another call.",
    busyText: "Voxa handles the next customer.",
    meetingTitle: "You're in a meeting.",
    meetingText: "Voxa captures the important details.",
    awayTitle: "You're away from your phone.",
    awayText: "Voxa keeps the conversation moving.",

    /* FEATURES */
    featuresLabel: "POWERFUL VOICE AUTOMATION",
    featuresTitle1: "More than answering calls.",
    featuresTitle2: "Voxa helps move business forward.",
    featuresDescription:
      "Create conversations that feel human while automating the repetitive work behind them.",

    feature1Title: "AI Voice Conversations",
    feature1Text:
      "Natural conversations that understand questions, intent and context.",
    feature2Title: "Automated Calling",
    feature2Text:
      "Handle repetitive customer conversations without adding more people.",
    feature3Title: "Smart Call Routing",
    feature3Text:
      "Send the right conversations to the right person when human help is needed.",
    feature4Title: "24/7 Availability",
    feature4Text:
      "Give customers a helpful response even outside your team's working hours.",
    feature5Title: "Human Handoff",
    feature5Text:
      "Move important conversations to your team without losing the context.",
    feature6Title: "Call Analytics",
    feature6Text:
      "Understand call volume, outcomes, customer intent and opportunities.",

    /* HOW IT WORKS */
    howLabel: "HOW IT WORKS",
    howTitle1: "Set it up once.",
    howTitle2: "Let Voxa handle the conversations.",
    howDescription:
      "Give Voxa the information it needs, choose how you want calls handled and let your AI teammate do the rest.",
    setup1: "Connect your number",
    setup1Text:
      "Connect your business number and decide when Voxa should step in.",
    setup2: "Teach your AI",
    setup2Text:
      "Add your business information, FAQs, services and preferred greeting.",
    setup3: "Let Voxa answer",
    setup3Text:
      "Voxa handles incoming calls according to your rules and instructions.",
    setup4: "Get the summary",
    setup4Text:
      "Receive useful call context so your team knows exactly what happened.",

    /* CALL MODES */
    modesLabel: "SMART CALL HANDLING",
    modesTitle1: "You decide when",
    modesTitle2: "Voxa steps in.",
    modesDescription:
      "Choose the call situations where your AI teammate should take over.",
    mode1: "When you miss a call",
    mode1Text: "Voxa answers when you can't pick up.",
    mode2: "When you're busy",
    mode2Text: "Voxa handles the next caller while you're on another call.",
    mode3: "When you're unreachable",
    mode3Text: "Keep conversations moving when your phone isn't available.",
    mode4: "Always answer",
    mode4Text: "Let Voxa become the first point of contact for every call.",

    /* CONFIG */
    configLabel: "YOUR AI. YOUR RULES.",
    configTitle1: "Make Voxa sound",
    configTitle2: "like your business.",
    configDescription:
      "Customize how your AI speaks, what it knows and what information it should collect.",
    business: "Business",
    industry: "Industry",
    languages: "Languages",
    greeting: "Greeting",
    faqs: "FAQs",
    businessValue: "WhatsWare",
    industryValue: "Technology & Marketing",
    languagesValue: "English • Tamil • Hindi",
    greetingValue: "Hi, you've reached WhatsWare. How can I help?",
    faqsValue: "Pricing • Products • Support • Demo",
    configured: "AI configured",
    saveChanges: "Save configuration",

    /* BENEFITS */
    benefitsLabel: "BUILT FOR GROWING TEAMS",
    benefitsTitle: "A smarter way to handle every conversation.",
    benefit1Title: "Faster response",
    benefit1Text:
      "Give customers an immediate first response instead of leaving them waiting.",
    benefit2Title: "More productive teams",
    benefit2Text:
      "Let your people focus on conversations that actually need a human.",
    benefit3Title: "Consistent experience",
    benefit3Text:
      "Keep your brand voice and customer experience consistent across every call.",

    /* USE CASES */
    useCasesLabel: "BUILT FOR REAL BUSINESS",
    useCasesTitle1: "One voice AI.",
    useCasesTitle2: "Many ways to use it.",
    useCasesDescription:
      "From lead capture to customer support, Voxa adapts to the way your business works.",
    use1Title: "Customer Support",
    use1Text:
      "Answer common questions and route complex issues to your team.",
    use2Title: "Sales & Lead Qualification",
    use2Text:
      "Capture intent, qualify prospects and identify high-value opportunities.",
    use3Title: "Appointments & Reminders",
    use3Text:
      "Handle booking requests, confirmations and reminder conversations.",
    use4Title: "Service Businesses",
    use4Text:
      "Help salons, clinics, restaurants and local businesses stay responsive.",
    use5Title: "Order Enquiries",
    use5Text:
      "Give customers quick answers about orders, delivery and availability.",
    use6Title: "After-hours Calls",
    use6Text:
      "Keep your business responsive even after your team has logged off.",

    /* ANALYTICS */
    analyticsLabel: "YOUR CALLS. YOUR INSIGHTS.",
    analyticsTitle: "Turn conversations into useful signals.",
    analyticsDescription:
      "Voxa doesn't just answer calls. It helps your team understand what customers are asking for.",
    callsToday: "Calls today",
    successRate: "Success rate",
    leadsCaptured: "Leads captured",
    avgDuration: "Avg. call duration",
    callOutcome: "Call outcome",
    qualifiedLead: "Qualified lead",
    followup: "Follow-up required",
    resolved: "Resolved",
    escalated: "Human handoff",

    /* STRIP */
    strip1: "AI Voice",
    strip2: "Automated Calls",
    strip3: "Human Handoff",
    strip4: "Call Summaries",
    strip5: "Lead Capture",
    strip6: "Call Analytics",

    /* CTA */
    ctaLabel: "READY TO GET STARTED?",
    ctaTitle1: "Give every customer",
    ctaTitle2: "a smarter way to talk.",
    ctaDescription:
      "Build a voice experience that works while your team is busy, away or offline.",
    ctaButton: "Start with Voxa",
    pricingButton: "View Pricing",
  },

  TA: {
    /* HERO */
    badge: "VOXA • WHATSWARE VOICE",
    title1: "ஒரு சிறந்த",
    title2: "உரையாடலும் தவற விடாதீர்கள்.",
    description:
      "Voxa உங்கள் AI voice teammate. இது அழைப்புகளுக்கு பதிலளித்து, வாடிக்கையாளர்களை புரிந்து கொண்டு, leads-ஐ சேகரித்து, உங்கள் குழுவிற்கு தகவலை வழங்குகிறது.",
    getStarted: "தொடங்குங்கள்",
    seeVoxa: "Voxa எப்படி செயல்படுகிறது",
    trust1: "AI உரையாடல்கள்",
    trust2: "24/7 கிடைக்கும்",
    trust3: "Human handoff",
    trust4: "எளிதாக அமைக்கலாம்",

    /* HERO PHONE */
    incomingCall: "வரும் அழைப்பு",
    answering: "Voxa பதிலளிக்கிறது",
    caller: "Rahul Sharma",
    callReason: "Product enquiry",
    liveCall: "LIVE CALL",
    listening: "கேட்கிறது",
    understanding: "புரிந்துகொள்கிறது",
    responding: "பதிலளிக்கிறது",
    leadCaptured: "Lead சேமிக்கப்பட்டது",
    callSummary: "அழைப்பு சுருக்கம்",
    whatsappReady: "WhatsApp சுருக்கம் தயாராக உள்ளது",
    highPriority: "முக்கியமானது",

    /* CALL FLOW */
    flowLabel: "VOXA எப்படி செயல்படுகிறது",
    flowTitle1: "ஒரு அழைப்பு வருகிறது.",
    flowTitle2: "அதன்பிறகு Voxa பார்த்துக்கொள்ளும்.",
    flowDescription:
      "முதல் hello முதல் follow-up வரை, Voxa உரையாடல்களை பயனுள்ள business context ஆக மாற்றுகிறது.",
    step1Title: "வாடிக்கையாளர் அழைக்கிறார்",
    step1Text:
      "நீங்கள் busy-யாக இருந்தாலும் அல்லது phone-ல் இல்லாவிட்டாலும் customer அழைக்கலாம்.",
    step2Title: "Voxa பதிலளிக்கிறது",
    step2Text:
      "உங்கள் AI voice teammate அழைப்பை இயல்பாக கையாளுகிறது.",
    step3Title: "தகவல் உங்களிடம் வருகிறது",
    step3Text:
      "Customer intent மற்றும் next action உடன் சுருக்கத்தைப் பெறுங்கள்.",

    /* SUMMARY */
    summaryTitle: "AI call summary",
    summaryCustomer: "வாடிக்கையாளர்",
    summaryIntent: "தேவை",
    summaryRequest: "கோரிக்கை",
    summaryNext: "அடுத்த செயல்",
    summaryCustomerValue: "Rahul Sharma",
    summaryIntentValue: "Product enquiry",
    summaryRequestValue: "WhatsApp automation pricing",
    summaryNextValue: "Demo schedule",
    openWhatsapp: "WhatsApp திறக்கவும்",
    captured: "தானாக சேகரிக்கப்பட்டது",

    /* PHOTO */
    photoLabel: "உங்கள் AI voice teammate",
    photoTitle1: "நீங்கள் available ஆகும் வரை",
    photoTitle2: "வாடிக்கையாளர்கள் காத்திருக்க வேண்டாம்.",
    photoDescription:
      "Voxa ஒரு எப்போதும் தயாராக இருக்கும் AI receptionist. அதிக வேலை சேர்க்காமல் அதிக customer conversations-ஐ கையாள உதவுகிறது.",
    busyTitle: "நீங்கள் வேறு அழைப்பில் இருக்கிறீர்கள்.",
    busyText: "Voxa அடுத்த customer-ஐ கையாளும்.",
    meetingTitle: "நீங்கள் meeting-ல் இருக்கிறீர்கள்.",
    meetingText: "Voxa முக்கியமான தகவலை சேகரிக்கும்.",
    awayTitle: "நீங்கள் phone அருகில் இல்லை.",
    awayText: "Voxa உரையாடலை தொடர்ந்து நடத்தும்.",

    /* FEATURES */
    featuresLabel: "POWERFUL VOICE AUTOMATION",
    featuresTitle1: "அழைப்புகளை எடுப்பதை விட அதிகம்.",
    featuresTitle2: "Voxa business-ஐ முன்னேற்றுகிறது.",
    featuresDescription:
      "Human-like conversations-ஐ உருவாக்கி repetitive வேலைகளை automate செய்யுங்கள்.",

    feature1Title: "AI Voice Conversations",
    feature1Text:
      "Questions, intent மற்றும் context-ஐ புரிந்துகொள்ளும் இயல்பான உரையாடல்கள்.",
    feature2Title: "Automated Calling",
    feature2Text:
      "மீண்டும் மீண்டும் வரும் customer conversations-ஐ automate செய்யுங்கள்.",
    feature3Title: "Smart Call Routing",
    feature3Text:
      "Human help தேவைப்படும் அழைப்புகளை சரியான team member-க்கு அனுப்புங்கள்.",
    feature4Title: "24/7 Availability",
    feature4Text:
      "Working hours-க்கு வெளியிலும் customers-க்கு பதில் கிடைக்கட்டும்.",
    feature5Title: "Human Handoff",
    feature5Text:
      "Context இழக்காமல் முக்கியமான உரையாடல்களை உங்கள் குழுவிடம் மாற்றுங்கள்.",
    feature6Title: "Call Analytics",
    feature6Text:
      "Call volume, outcomes மற்றும் customer intent-ஐ புரிந்துகொள்ளுங்கள்.",

    /* HOW */
    howLabel: "எப்படி செயல்படுகிறது",
    howTitle1: "ஒருமுறை அமைக்கவும்.",
    howTitle2: "மீதியை Voxa பார்த்துக்கொள்ளும்.",
    howDescription:
      "உங்கள் business தகவலை வழங்கி, calls எப்போது handle செய்ய வேண்டும் என்பதைத் தேர்வு செய்யுங்கள்.",
    setup1: "உங்கள் number-ஐ இணைக்கவும்",
    setup1Text:
      "Business number-ஐ இணைத்து Voxa எப்போது செயல்பட வேண்டும் என்பதைத் தேர்வு செய்யுங்கள்.",
    setup2: "AI-க்கு கற்றுக்கொடுங்கள்",
    setup2Text:
      "Business details, FAQs, services மற்றும் greeting-ஐ சேர்க்கவும்.",
    setup3: "Voxa பதிலளிக்கட்டும்",
    setup3Text:
      "உங்கள் rules படி Voxa incoming calls-ஐ கையாளும்.",
    setup4: "Summary பெறுங்கள்",
    setup4Text:
      "Call-ல் என்ன நடந்தது என்பதை உங்கள் குழு உடனடியாக புரிந்துகொள்ளும்.",

    /* MODES */
    modesLabel: "SMART CALL HANDLING",
    modesTitle1: "Voxa எப்போது",
    modesTitle2: "செயல்பட வேண்டும் என்பதை தேர்வு செய்யுங்கள்.",
    modesDescription:
      "AI teammate calls-ஐ எப்போது எடுத்துக்கொள்ள வேண்டும் என்பதை நீங்கள் தீர்மானிக்கலாம்.",
    mode1: "நீங்கள் call miss செய்தால்",
    mode1Text: "நீங்கள் எடுக்க முடியாதபோது Voxa பதிலளிக்கும்.",
    mode2: "நீங்கள் busy-யாக இருந்தால்",
    mode2Text: "நீங்கள் வேறு call-ல் இருக்கும்போது Voxa அடுத்த caller-ஐ கையாளும்.",
    mode3: "நீங்கள் unreachable என்றால்",
    mode3Text: "Phone கிடைக்காத நேரத்திலும் conversations தொடரும்.",
    mode4: "எப்போதும் பதிலளிக்க",
    mode4Text: "ஒவ்வொரு incoming call-க்கும் Voxa முதல் point of contact ஆகும்.",

    /* CONFIG */
    configLabel: "YOUR AI. YOUR RULES.",
    configTitle1: "Voxa உங்கள் business",
    configTitle2: "போல பேசட்டும்.",
    configDescription:
      "AI எப்படி பேச வேண்டும், என்ன தெரிந்திருக்க வேண்டும் என்பதை customize செய்யுங்கள்.",
    business: "Business",
    industry: "Industry",
    languages: "Languages",
    greeting: "Greeting",
    faqs: "FAQs",
    businessValue: "WhatsWare",
    industryValue: "Technology & Marketing",
    languagesValue: "English • Tamil • Hindi",
    greetingValue: "Hi, you've reached WhatsWare. How can I help?",
    faqsValue: "Pricing • Products • Support • Demo",
    configured: "AI configured",
    saveChanges: "Save configuration",

    /* BENEFITS */
    benefitsLabel: "GROWING TEAMS-க்காக",
    benefitsTitle: "ஒவ்வொரு conversation-ஐயும் smarter ஆக கையாளுங்கள்.",
    benefit1Title: "வேகமான பதில்",
    benefit1Text:
      "Customers நீண்ட நேரம் காத்திருக்காமல் உடனடி முதல் பதிலைப் பெறுவார்கள்.",
    benefit2Title: "Productive teams",
    benefit2Text:
      "Human attention தேவைப்படும் conversations-ல் உங்கள் team கவனம் செலுத்தலாம்.",
    benefit3Title: "Consistent experience",
    benefit3Text:
      "ஒவ்வொரு call-லும் உங்கள் brand experience ஒரே மாதிரியாக இருக்கும்.",

    /* USE CASES */
    useCasesLabel: "REAL BUSINESS-க்காக",
    useCasesTitle1: "ஒரே voice AI.",
    useCasesTitle2: "பல business பயன்பாடுகள்.",
    useCasesDescription:
      "Lead capture முதல் customer support வரை Voxa உங்கள் business-க்கு ஏற்ப செயல்படும்.",
    use1Title: "Customer Support",
    use1Text:
      "Common questions-க்கு பதிலளித்து complex issues-ஐ team-க்கு அனுப்புங்கள்.",
    use2Title: "Sales & Lead Qualification",
    use2Text:
      "Customer intent-ஐ capture செய்து high-value opportunities-ஐ கண்டறியுங்கள்.",
    use3Title: "Appointments & Reminders",
    use3Text:
      "Booking requests, confirmations மற்றும் reminders-ஐ handle செய்யுங்கள்.",
    use4Title: "Service Businesses",
    use4Text:
      "Salons, clinics, restaurants மற்றும் local businesses responsive ஆக இருக்க உதவும்.",
    use5Title: "Order Enquiries",
    use5Text:
      "Orders, delivery மற்றும் availability பற்றிய கேள்விகளுக்கு பதில் அளிக்கவும்.",
    use6Title: "After-hours Calls",
    use6Text:
      "Team offline ஆன பிறகும் உங்கள் business responsive ஆக இருக்கும்.",

    /* ANALYTICS */
    analyticsLabel: "YOUR CALLS. YOUR INSIGHTS.",
    analyticsTitle: "Conversations-ஐ useful signals ஆக மாற்றுங்கள்.",
    analyticsDescription:
      "Voxa calls-ஐ answer செய்வதுடன் customers என்ன கேட்கிறார்கள் என்பதையும் புரிய உதவுகிறது.",
    callsToday: "இன்றைய calls",
    successRate: "Success rate",
    leadsCaptured: "Leads",
    avgDuration: "Avg. call",
    callOutcome: "Call outcome",
    qualifiedLead: "Qualified lead",
    followup: "Follow-up தேவை",
    resolved: "Resolved",
    escalated: "Human handoff",

    /* STRIP */
    strip1: "AI Voice",
    strip2: "Automated Calls",
    strip3: "Human Handoff",
    strip4: "Call Summaries",
    strip5: "Lead Capture",
    strip6: "Call Analytics",

    /* CTA */
    ctaLabel: "READY TO GET STARTED?",
    ctaTitle1: "ஒவ்வொரு customer-க்கும்",
    ctaTitle2: "சிறந்த voice experience கொடுங்கள்.",
    ctaDescription:
      "உங்கள் team busy, away அல்லது offline இருந்தாலும் வேலை செய்யும் voice experience உருவாக்குங்கள்.",
    ctaButton: "Voxa-வுடன் தொடங்குங்கள்",
    pricingButton: "Pricing பார்க்கவும்",
  },
};

/* =========================================================
   HELPER
========================================================= */

function WhatsWareLogo({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <img
      src="/whatsware-logo.png"
      alt="WhatsWare"
      className={`${className} object-contain`}
    />
  );
}

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function Voice() {
  const { language } = useLanguage();

  const t =
    language?.toUpperCase() === "TA"
      ? translations.TA
      : translations.EN;

  const featureIcons = [
    null,
    PhoneCall,
    Zap,
    Clock3,
    Headphones,
    BarChart3,
  ];

  const benefitIcons = [Zap, Users, ShieldCheck];

  const useCases = [
    {
      title: t.use1Title,
      text: t.use1Text,
      icon: Headphones,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: t.use2Title,
      text: t.use2Text,
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: t.use3Title,
      text: t.use3Text,
      icon: Clock3,
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: t.use4Title,
      text: t.use4Text,
      icon: Phone,
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: t.use5Title,
      text: t.use5Text,
      icon: MessageSquareText,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: t.use6Title,
      text: t.use6Text,
      icon: PhoneOff,
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const features = [
    {
      title: t.feature1Title,
      text: t.feature1Text,
    },
    {
      title: t.feature2Title,
      text: t.feature2Text,
    },
    {
      title: t.feature3Title,
      text: t.feature3Text,
    },
    {
      title: t.feature4Title,
      text: t.feature4Text,
    },
    {
      title: t.feature5Title,
      text: t.feature5Text,
    },
    {
      title: t.feature6Title,
      text: t.feature6Text,
    },
  ];

  const modes = [
    {
      title: t.mode1,
      text: t.mode1Text,
      icon: PhoneOff,
    },
    {
      title: t.mode2,
      text: t.mode2Text,
      icon: PhoneCall,
    },
    {
      title: t.mode3,
      text: t.mode3Text,
      icon: ShieldCheck,
    },
    {
      title: t.mode4,
      text: t.mode4Text,
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFDF5] text-[#071B35]">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-[#159447]/10 blur-3xl" />
          <div className="absolute right-[4%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#075E54]/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-[#D9F99D]/20 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#071B35_1px,transparent_1px),linear-gradient(90deg,#071B35_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            {/* LEFT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#159447]/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#075E54]">
                  <WhatsWareLogo className="h-5 w-5" />
                </span>

                <span className="text-[11px] font-bold tracking-[0.18em] text-[#075E54]">
                  {t.badge}
                </span>

                <span className="h-2 w-2 animate-pulse rounded-full bg-[#159447]" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#071B35] sm:text-6xl lg:text-[76px]"
              >
                {t.title1}
                <br />
                <span className="relative inline-block text-[#159447]">
                  {t.title2}

                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      delay: 0.9,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="absolute -bottom-1 left-0 h-[5px] rounded-full bg-[#159447]/20"
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
              >
                {t.description}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#075E54] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-[#075E54]/20 transition hover:-translate-y-1 hover:bg-[#064c44]"
                >
                  {t.getStarted}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#voxa-demo"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 text-sm font-bold text-[#071B35] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#159447]/30"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#159447]/10">
                    <Play className="ml-0.5 h-3.5 w-3.5 fill-[#159447] text-[#159447]" />
                  </span>
                  {t.seeVoxa}
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-9 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {[t.trust1, t.trust2, t.trust3, t.trust4].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs font-semibold leading-5 text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#159447]" />
                      {item}
                    </div>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* RIGHT HERO PRODUCT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[600px] lg:ml-auto"
            >
              {/* glow */}
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#159447]/15 blur-[90px]" />

              {/* dashboard */}
              <div className="relative rounded-[32px] border border-white/80 bg-white/70 p-3 shadow-[0_35px_100px_rgba(7,27,53,0.16)] backdrop-blur-xl sm:p-4">
                <div className="relative overflow-hidden rounded-[26px] bg-[#071B35]">
                  {/* top browser bar */}
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>

                    <div className="flex items-center gap-2">
                      <WhatsWareLogo className="h-6 w-6" />
                      <span className="text-xs font-bold text-white">
                        Voxa
                      </span>
                    </div>

                    <span className="rounded-full bg-[#159447]/15 px-2.5 py-1 text-[9px] font-bold text-[#70e1a0]">
                      AI ONLINE
                    </span>
                  </div>

                  <div className="grid gap-4 p-4 sm:p-5">
                    {/* incoming call */}
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.055] p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#70e1a0]">
                            {t.liveCall}
                          </p>

                          <p className="mt-2 text-lg font-bold text-white">
                            {t.incomingCall}
                          </p>
                        </div>

                        <motion.div
                          animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#159447]"
                        >
                          <PhoneIncoming className="h-5 w-5 text-white" />
                        </motion.div>
                      </div>

                      <div className="mt-5 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#159447] to-[#075E54]">
                          <Users className="h-5 w-5 text-white" />
                        </div>

                        <div>
                          <p className="font-bold text-white">
                            {t.caller}
                          </p>
                          <p className="text-xs text-slate-400">
                            {t.callReason}
                          </p>
                        </div>

                        <div className="ml-auto rounded-full bg-[#159447]/10 px-2.5 py-1 text-[10px] font-semibold text-[#70e1a0]">
                          {t.answering}
                        </div>
                      </div>

                      {/* waveform */}
                      <div className="mt-6 flex h-14 items-center justify-center gap-[3px] overflow-hidden">
                        {Array.from({ length: 42 }).map((_, index) => (
                          <motion.span
                            key={index}
                            animate={{
                              height: [
                                `${8 + ((index * 7) % 26)}px`,
                                `${12 + ((index * 13) % 38)}px`,
                                `${8 + ((index * 5) % 25)}px`,
                              ],
                            }}
                            transition={{
                              duration: 0.8 + (index % 5) * 0.08,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.015,
                            }}
                            className="w-[3px] rounded-full bg-gradient-to-t from-[#159447] to-[#8ef0b5]"
                          />
                        ))}
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                        <span>00:42</span>

                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#159447]" />
                          {t.listening}
                        </div>

                        <span>AI</span>
                      </div>
                    </div>

                    {/* summary */}
                    <div className="relative overflow-hidden rounded-[22px] border border-[#159447]/20 bg-gradient-to-br from-[#0a725f] to-[#06483f] p-4">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#159447]/20 blur-2xl" />

                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                              <WhatsWareLogo className="h-6 w-6" />
                            </div>

                            <div>
                              <p className="text-xs font-bold text-white">
                                {t.summaryTitle}
                              </p>
                              <p className="text-[9px] text-white/60">
                                {t.captured}
                              </p>
                            </div>
                          </div>

                          <MessageCircle className="h-5 w-5 text-[#8ef0b5]" />
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="rounded-xl bg-black/10 p-2.5">
                            <p className="text-[8px] uppercase tracking-wider text-white/50">
                              {t.summaryCustomer}
                            </p>
                            <p className="mt-1 text-[11px] font-semibold text-white">
                              {t.summaryCustomerValue}
                            </p>
                          </div>

                          <div className="rounded-xl bg-black/10 p-2.5">
                            <p className="text-[8px] uppercase tracking-wider text-white/50">
                              {t.summaryIntent}
                            </p>
                            <p className="mt-1 text-[11px] font-semibold text-white">
                              {t.summaryIntentValue}
                            </p>
                          </div>
                        </div>

                        <div className="mt-2 rounded-xl bg-black/10 p-2.5">
                          <p className="text-[8px] uppercase tracking-wider text-white/50">
                            {t.summaryRequest}
                          </p>
                          <p className="mt-1 text-[11px] font-semibold text-white">
                            {t.summaryRequestValue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating lead card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-5 bottom-16 hidden rounded-2xl border border-white/80 bg-white p-3 shadow-2xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447]/10">
                      <CheckCircle2 className="h-5 w-5 text-[#159447]" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        {t.leadCaptured}
                      </p>
                      <p className="mt-0.5 text-xs font-bold text-[#071B35]">
                        {t.highPriority}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* floating WhatsApp */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-4 top-24 hidden rounded-2xl border border-white/80 bg-white p-3 shadow-2xl sm:block"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold text-slate-400">
                        WHATSAPP
                      </p>
                      <p className="text-xs font-bold text-[#071B35]">
                        {t.whatsappReady}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CALL FLOW
      ====================================================== */}

      <section
        id="voxa-demo"
        className="relative bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-black tracking-[0.22em] text-[#159447]"
            >
              {t.flowLabel}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#071B35] sm:text-5xl"
            >
              {t.flowTitle1}
              <br />
              <span className="text-[#159447]">{t.flowTitle2}</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-7 text-slate-500"
            >
              {t.flowDescription}
            </motion.p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
            {[
              {
                number: "01",
                icon: PhoneIncoming,
                title: t.step1Title,
                text: t.step1Text,
              },
              {
                number: "02",
                icon: Volume2,
                title: t.step2Title,
                text: t.step2Text,
              },
              {
                number: "03",
                icon: MessageCircle,
                title: t.step3Title,
                text: t.step3Text,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.number} className="contents">
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    className="group rounded-[28px] border border-slate-200 bg-[#FFFDF5] p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075E54] text-white shadow-lg shadow-[#075E54]/15">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-4xl font-black text-[#159447]/10">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-black text-[#071B35]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>

                  {index < 2 && (
                    <div className="hidden justify-center lg:flex">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#159447]/20 bg-[#159447]/5">
                        <ArrowRight className="h-4 w-4 text-[#159447]" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* WhatsApp summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-4xl"
          >
            <div className="overflow-hidden rounded-[30px] bg-[#071B35] p-2 shadow-2xl">
              <div className="grid overflow-hidden rounded-[24px] bg-[#0a213d] lg:grid-cols-[1fr_0.9fr]">
                {/* conversation */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447]">
                      <PhoneCall className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Voxa live conversation
                      </p>
                      <p className="text-xs text-slate-400">
                        {t.responding}
                      </p>
                    </div>

                    <span className="ml-auto h-2.5 w-2.5 animate-pulse rounded-full bg-[#70e1a0]" />
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-4">
                      <p className="text-[10px] font-bold text-[#70e1a0]">
                        CUSTOMER
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/80">
                        Hi, I wanted to know how WhatsApp automation works for
                        my business.
                      </p>
                    </div>

                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#159447] p-4">
                      <p className="text-[10px] font-bold text-white/70">
                        VOXA
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white">
                        Absolutely. I can help with that. Would you like to
                        know about automation, AI agents or pricing?
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
                      <Waves className="h-4 w-4 text-[#70e1a0]" />
                      AI understanding customer intent...
                    </div>
                  </div>
                </div>

                {/* summary */}
                <div className="bg-[#075E54] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                      <WhatsWareLogo className="h-7 w-7" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        {t.summaryTitle}
                      </p>
                      <p className="text-xs text-white/60">
                        {t.whatsappReady}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/50">
                        {t.summaryCustomer}
                      </p>
                      <p className="mt-1 font-bold text-white">
                        {t.summaryCustomerValue}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/50">
                        {t.summaryIntent}
                      </p>
                      <p className="mt-1 font-bold text-white">
                        {t.summaryIntentValue}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/50">
                        {t.summaryRequest}
                      </p>
                      <p className="mt-1 font-bold text-white">
                        {t.summaryRequestValue}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/50">
                        {t.summaryNext}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8ef0b5]" />
                        <p className="text-sm font-bold text-white">
                          {t.summaryNextValue}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#075E54] transition hover:bg-[#f3fff8]">
                    <MessageCircle className="h-4 w-4" />
                    {t.openWhatsapp}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PHOTO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#FFFDF5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[38px] bg-[#159447]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[34px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=85"
                  alt="Business team communicating"
                  className="h-[540px] w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B35]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#159447]">
                      <WhatsWareLogo className="h-7 w-7" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#8ef0b5]">
                        VOXA BY WHATSWARE
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {t.answering}
                      </p>
                    </div>

                    <div className="ml-auto flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#70e1a0]" />
                      <span className="text-[10px] font-bold text-white/70">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black tracking-[0.22em] text-[#159447]"
              >
                {t.photoLabel}
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-[#071B35] sm:text-5xl"
              >
                {t.photoTitle1}
                <br />
                <span className="text-[#159447]">{t.photoTitle2}</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-base leading-8 text-slate-600"
              >
                {t.photoDescription}
              </motion.p>

              <motion.div
                variants={stagger}
                className="mt-8 space-y-4"
              >
                {[
                  {
                    icon: PhoneCall,
                    title: t.busyTitle,
                    text: t.busyText,
                  },
                  {
                    icon: Users,
                    title: t.meetingTitle,
                    text: t.meetingText,
                  },
                  {
                    icon: PhoneOff,
                    title: t.awayTitle,
                    text: t.awayText,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      variants={fadeUp}
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#159447]/10">
                        <Icon className="h-5 w-5 text-[#159447]" />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#071B35]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-black tracking-[0.22em] text-[#159447]"
            >
              {t.featuresLabel}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#071B35] sm:text-5xl"
            >
              {t.featuresTitle1}
              <br />
              <span className="text-[#159447]">
                {t.featuresTitle2}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-7 text-slate-500"
            >
              {t.featuresDescription}
            </motion.p>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = featureIcons[index];

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#FFFDF5] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#159447]/20 hover:shadow-2xl"
                >
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#159447]/5 blur-2xl transition group-hover:bg-[#159447]/10" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075E54] shadow-lg shadow-[#075E54]/10">
                      {index === 0 ? (
                        <WhatsWareLogo className="h-8 w-8" />
                      ) : Icon ? (
                        <Icon className="h-6 w-6 text-white" />
                      ) : null}
                    </div>

                    <div className="mt-7 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-black text-[#071B35]">
                        {feature.title}
                      </h3>

                      <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#159447]" />
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B35] py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#159447] blur-[100px]" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#075E54] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black tracking-[0.22em] text-[#70e1a0]"
              >
                {t.howLabel}
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl"
              >
                {t.howTitle1}
                <br />
                <span className="text-[#70e1a0]">{t.howTitle2}</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-8 text-slate-300"
              >
                {t.howDescription}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#159447]">
                  <WhatsWareLogo className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Voxa by WhatsWare
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {t.configured}
                  </p>
                </div>

                <div className="ml-auto h-2.5 w-2.5 animate-pulse rounded-full bg-[#70e1a0]" />
              </motion.div>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-8 hidden h-[80%] border-l border-dashed border-[#70e1a0]/20 sm:block" />

              <div className="space-y-5">
                {[
                  {
                    number: "01",
                    title: t.setup1,
                    text: t.setup1Text,
                    icon: Phone,
                  },
                  {
                    number: "02",
                    title: t.setup2,
                    text: t.setup2Text,
                    icon: Bot,
                  },
                  {
                    number: "03",
                    title: t.setup3,
                    text: t.setup3Text,
                    icon: Volume2,
                  },
                  {
                    number: "04",
                    title: t.setup4,
                    text: t.setup4Text,
                    icon: MessageCircle,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.1,
                      }}
                      className="relative flex gap-5 rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition hover:bg-white/[0.07]"
                    >
                      <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#70e1a0]/20 bg-[#159447]/10">
                        <Icon className="h-6 w-6 text-[#70e1a0]" />
                      </div>

                      <div>
                        <span className="text-[9px] font-black tracking-[0.2em] text-[#70e1a0]">
                          STEP {item.number}
                        </span>

                        <h3 className="mt-1 text-lg font-black text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-sm leading-6 text-slate-400">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CALL MODES
      ====================================================== */}

      <section className="bg-[#FFFDF5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black tracking-[0.22em] text-[#159447]"
              >
                {t.modesLabel}
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-[#071B35] sm:text-5xl"
              >
                {t.modesTitle1}
                <br />
                <span className="text-[#159447]">{t.modesTitle2}</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-md text-base leading-8 text-slate-500"
              >
                {t.modesDescription}
              </motion.p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {modes.map((mode, index) => {
                const Icon = mode.icon;

                return (
                  <motion.div
                    key={mode.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#075E54] text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#159447]/10 text-xs font-black text-[#159447]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-black text-[#071B35]">
                      {mode.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {mode.text}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#159447]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#159447]" />
                      Voxa ready
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONFIGURATION
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            {/* dashboard */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-[32px] border border-slate-200 bg-[#071B35] p-3 shadow-[0_30px_80px_rgba(7,27,53,0.18)]">
                <div className="rounded-[26px] bg-[#0b2442] p-5 sm:p-7">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#159447]">
                        <WhatsWareLogo className="h-7 w-7" />
                      </div>

                      <div>
                        <p className="text-sm font-black text-white">
                          Voxa
                        </p>
                        <p className="text-[10px] text-slate-400">
                          AI Voice Agent
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-[#159447]/10 px-3 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#70e1a0]" />
                      <span className="text-[9px] font-bold text-[#70e1a0]">
                        {t.configured}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        label: t.business,
                        value: t.businessValue,
                        icon: Users,
                      },
                      {
                        label: t.industry,
                        value: t.industryValue,
                        icon: BarChart3,
                      },
                      {
                        label: t.languages,
                        value: t.languagesValue,
                        icon: Volume2,
                      },
                      {
                        label: t.greeting,
                        value: t.greetingValue,
                        icon: MessageSquareText,
                      },
                      {
                        label: t.faqs,
                        value: t.faqsValue,
                        icon: Bot,
                      },
                    ].map((field) => {
                      const Icon = field.icon;

                      return (
                        <div
                          key={field.label}
                          className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                              <Icon className="h-4 w-4 text-[#70e1a0]" />
                            </div>

                            <div className="min-w-0">
                              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                                {field.label}
                              </p>
                              <p className="mt-1 truncate text-xs font-semibold text-white">
                                {field.value}
                              </p>
                            </div>

                            <Check className="ml-auto h-4 w-4 shrink-0 text-[#70e1a0]" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button className="mt-5 w-full rounded-xl bg-[#159447] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#117d3b]">
                    {t.saveChanges}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-black tracking-[0.22em] text-[#159447]"
              >
                {t.configLabel}
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-[#071B35] sm:text-5xl"
              >
                {t.configTitle1}
                <br />
                <span className="text-[#159447]">{t.configTitle2}</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-8 text-slate-500"
              >
                {t.configDescription}
              </motion.p>

              <motion.div
                variants={stagger}
                className="mt-8 space-y-3"
              >
                {[
                  t.business,
                  t.industry,
                  t.languages,
                  t.greeting,
                  t.faqs,
                ].map((item, index) => (
                  <motion.div
                    variants={fadeUp}
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#159447]/10">
                      <Check className="h-3.5 w-3.5 text-[#159447]" />
                    </div>

                    <span className="text-sm font-semibold text-slate-600">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#075E54] py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#159447]/20 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#8ef0b5]/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black tracking-[0.22em] text-[#8ef0b5]">
              {t.benefitsLabel}
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              {t.benefitsTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                title: t.benefit1Title,
                text: t.benefit1Text,
              },
              {
                title: t.benefit2Title,
                text: t.benefit2Text,
              },
              {
                title: t.benefit3Title,
                text: t.benefit3Text,
              },
            ].map((benefit, index) => {
              const Icon = benefitIcons[index];

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.09]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Icon className="h-6 w-6 text-[#8ef0b5]" />
                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}

      <section className="bg-[#FFFDF5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black tracking-[0.22em] text-[#159447]">
              {t.useCasesLabel}
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#071B35] sm:text-5xl">
              {t.useCasesTitle1}
              <br />
              <span className="text-[#159447]">{t.useCasesTitle2}</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              {t.useCasesDescription}
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B35]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-lg">
                      <Icon className="h-5 w-5 text-[#075E54]" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-[#071B35]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#159447]">
                      Explore use case
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ANALYTICS
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[0.22em] text-[#159447]">
                {t.analyticsLabel}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-[#071B35] sm:text-5xl">
                {t.analyticsTitle}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
                {t.analyticsDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  t.strip1,
                  t.strip3,
                  t.strip4,
                  t.strip5,
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#159447]/15 bg-[#159447]/5 px-3 py-1.5 text-xs font-bold text-[#075E54]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-slate-200 bg-[#FFFDF5] p-4 shadow-xl sm:p-6"
            >
              <div className="rounded-[25px] bg-[#071B35] p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">
                      Voxa Analytics
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Voice activity overview
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447]">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    [t.callsToday, "248"],
                    [t.successRate, "94%"],
                    [t.leadsCaptured, "42"],
                    [t.avgDuration, "01:48"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-white/[0.05] p-3"
                    >
                      <p className="text-[9px] text-slate-500">
                        {label}
                      </p>
                      <p className="mt-1 text-xl font-black text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* fake chart */}
                <div className="mt-7 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="flex h-36 items-end gap-2">
                    {[35, 55, 42, 72, 58, 88, 67, 95, 74, 100, 82, 92].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.04,
                          }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-[#159447] to-[#70e1a0]"
                        />
                      )
                    )}
                  </div>

                  <div className="mt-4 flex justify-between text-[9px] text-slate-500">
                    <span>9 AM</span>
                    <span>12 PM</span>
                    <span>3 PM</span>
                    <span>6 PM</span>
                    <span>9 PM</span>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-4">
                  {[
                    {
                      label: t.qualifiedLead,
                      icon: CheckCircle2,
                    },
                    {
                      label: t.followup,
                      icon: Clock3,
                    },
                    {
                      label: t.resolved,
                      icon: Check,
                    },
                    {
                      label: t.escalated,
                      icon: Users,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 rounded-xl bg-white/[0.04] p-2.5"
                      >
                        <Icon className="h-3.5 w-3.5 text-[#70e1a0]" />
                        <span className="text-[9px] font-semibold text-slate-400">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOVING FEATURE STRIP
      ====================================================== */}

      <section className="overflow-hidden border-y border-[#159447]/10 bg-[#FFFDF5] py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max"
        >
          {[
            t.strip1,
            t.strip2,
            t.strip3,
            t.strip4,
            t.strip5,
            t.strip6,
            t.strip1,
            t.strip2,
            t.strip3,
            t.strip4,
            t.strip5,
            t.strip6,
          ].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center"
            >
              <span className="px-7 text-sm font-black tracking-wide text-[#075E54]">
                {item}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#159447]" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B35] py-24 text-white sm:py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#159447]/20 blur-[120px]" />

          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] shadow-2xl shadow-[#159447]/20">
              <WhatsWareLogo className="h-10 w-10" />
            </div>

            <p className="mt-8 text-xs font-black tracking-[0.25em] text-[#70e1a0]">
              {t.ctaLabel}
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-6xl">
              {t.ctaTitle1}
              <br />
              <span className="text-[#70e1a0]">{t.ctaTitle2}</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {t.ctaDescription}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/book-demo"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#159447] px-7 py-4 text-sm font-black text-white shadow-xl shadow-[#159447]/20 transition hover:-translate-y-1 hover:bg-[#117d3b]"
              >
                {t.ctaButton}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                {t.pricingButton}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}