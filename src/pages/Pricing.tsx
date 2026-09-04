import { useState } from "react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

type CategoryKey = "marketing" | "aiAgents";
type PlanKey = "spark" | "boost" | "titan" | "customizable";

interface Plan {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  color: string;
  popular?: boolean;
  button: string;
}

interface FeatureRow {
  feature: string;
  spark: string;
  boost: string;
  titan: string;
  customizable: string;
}

interface FeatureSection {
  title: string;
  rows: FeatureRow[];
}

/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = "918056819125";

const openWhatsApp = () => {
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}`,
    "_blank",
    "noopener,noreferrer",
  );
};

/* =========================================================
   PLANS
========================================================= */

const plans: Record<PlanKey, Plan> = {
  spark: {
    name: "Spark",
    description: "Perfect for getting started",
    price: "$300",
    priceNote: "per year + taxes",
    color: "#159447",
    button: "Get Started",
  },

  boost: {
    name: "Boost",
    description: "Grow your business faster",
    price: "$600",
    priceNote: "per year + taxes",
    color: "#E5A000",
    button: "Get Started",
  },

  titan: {
    name: "Titan",
    description: "For scaling businesses",
    price: "$2,000",
    priceNote: "per year + taxes",
    color: "#7B4DFF",
    popular: true,
    button: "Get Started",
  },

  customizable: {
    name: "Customizable",
    description: "Built around your business",
    price: "Custom",
    priceNote: "Talk to our sales team",
    color: "#8B5A2B",
    button: "Get In Touch",
  },
};

/* =========================================================
   CATEGORIES
========================================================= */

const categories: {
  key: CategoryKey;
  label: string;
  description: string;
}[] = [
  {
    key: "marketing",
    label: "Marketing & Support Hub",
    description:
      "Powerful WhatsApp marketing, customer support and automation tools for growing businesses.",
  },
  {
    key: "aiAgents",
    label: "WhatsApp AI Agents",
    description:
      "Intelligent AI-powered conversations that help your business engage customers automatically.",
  },
];

/* =========================================================
   PLAN CONTENT
========================================================= */

const planContents: Record<
  PlanKey,
  {
    title: string;
    items: string[];
  }[]
> = {
  spark: [
    {
      title: "ADD-ON SERVICES",
      items: [
        "Chatbot Setup",
        "Campaign Setup",
        "Lead Funnel",
        "API Integration",
        "CRM Integration",
        "Payment Integration",
        "Green Tick Assistance",
      ],
    },
  ],

  boost: [
    {
      title: "COMPLETE SERVICES",
      items: [],
    },
    {
      title: "API & SETUP",
      items: [
        "Business API Setup",
        "FB Verification",
        "Number Registration",
        "Panel Access",
      ],
    },
    {
      title: "MARKETING",
      items: [
        "Bulk Broadcast",
        "Festival Campaigns",
        "Click-to-WA Ads",
        "Lead Capture",
      ],
    },
    {
      title: "AUTOMATION",
      items: [
        "Welcome Messages",
        "Keyword Auto-Reply",
        "Auto Follow-ups",
      ],
    },
  ],

  titan: [
    {
      title: "NOTIFICATIONS",
      items: [
        "Appointment Reminders",
        "Order Confirmation",
        "Delivery Updates",
        "Renewal Reminders",
      ],
    },
    {
      title: "INTEGRATIONS",
      items: [
        "Website & Landing Page",
        "Google Sheets",
        "Meta Ads",
        "Payment Gateway",
      ],
    },
    {
      title: "SUPPORT",
      items: [
        "Technical Support",
        "Campaign Support",
        "Monthly Optimization",
      ],
    },
  ],

  customizable: [],
};

/* =========================================================
   FEATURE COMPARISON
========================================================= */

const featureSections: Record<CategoryKey, FeatureSection[]> = {
  marketing: [
    {
      title: "Marketing & Campaigns",
      rows: [
        {
          feature: "WhatsApp Campaigns",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Bulk Messaging",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Campaign Scheduling",
          spark: "Basic",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "Audience Segmentation",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Campaign Analytics",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "Customer Support",
      rows: [
        {
          feature: "Shared Team Inbox",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Customer Conversations",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Greeting Automation",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Out-of-Office Automation",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "FAQ Automation",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "Chat Assignment",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "Automation",
      rows: [
        {
          feature: "Workflow Automation",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Follow-up Automation",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Conditional Workflows",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "Advanced Triggers",
          spark: "—",
          boost: "Basic",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Webhook Automation",
          spark: "—",
          boost: "Basic",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "Commerce & Channels",
      rows: [
        {
          feature: "WhatsApp",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Instagram",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Product Catalog",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "WhatsApp Commerce",
          spark: "—",
          boost: "Basic",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },
  ],

  aiAgents: [
    {
      title: "AI Conversations",
      rows: [
        {
          feature: "AI Conversations",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "AI Agent Creation",
          spark: "1 Agent",
          boost: "3 Agents",
          titan: "Unlimited",
          customizable: "Custom",
        },
        {
          feature: "AI FAQ Handling",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Human Handoff",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "AI Lead Qualification",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "AI Automation",
      rows: [
        {
          feature: "Automated Replies",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Intent Detection",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "Conversation Routing",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "AI Workflow Actions",
          spark: "—",
          boost: "Basic",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "API Actions",
          spark: "—",
          boost: "—",
          titan: "✓",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "AI Knowledge",
      rows: [
        {
          feature: "FAQ Knowledge Base",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Business Information",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Custom Instructions",
          spark: "—",
          boost: "✓",
          titan: "✓",
          customizable: "Custom",
        },
        {
          feature: "AI Agent Training",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },

    {
      title: "AI Controls",
      rows: [
        {
          feature: "Human Takeover",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "Agent Assignment",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
        {
          feature: "Conversation History",
          spark: "✓",
          boost: "✓",
          titan: "✓",
          customizable: "✓",
        },
        {
          feature: "AI Analytics",
          spark: "Basic",
          boost: "Advanced",
          titan: "Advanced",
          customizable: "Custom",
        },
      ],
    },
  ],
};

/* =========================================================
   CAPACITY
========================================================= */

const capacityRows = [
  {
    feature: "WhatsApp Numbers",
    spark: "1",
    boost: "3",
    titan: "10",
    customizable: "Custom",
  },
  {
    feature: "Messages",
    spark: "Unlimited*",
    boost: "Unlimited*",
    titan: "Unlimited*",
    customizable: "Custom",
  },
  {
    feature: "Contacts",
    spark: "Unlimited",
    boost: "Unlimited",
    titan: "Unlimited",
    customizable: "Custom",
  },
  {
    feature: "Team Members",
    spark: "2",
    boost: "5",
    titan: "Unlimited",
    customizable: "Custom",
  },
  {
    feature: "Custom Fields",
    spark: "15",
    boost: "25",
    titan: "50",
    customizable: "Unlimited",
  },
  {
    feature: "Custom Tags",
    spark: "15",
    boost: "30",
    titan: "50",
    customizable: "Unlimited",
  },
];

/* =========================================================
   INTEGRATIONS
========================================================= */

const integrations = [
  "WhatsApp Business",
  "Instagram",
  "Shopify",
  "CRM",
  "Webhooks",
  "Public APIs",
  "Google Sheets",
  "Zapier",
  "E-commerce",
  "Payments",
  "Analytics",
  "Custom Integrations",
];

/* =========================================================
   TAMIL TRANSLATIONS
========================================================= */

const TA: Record<string, string> = {
  "Whatsware Pricing": "Whatsware விலைத் திட்டங்கள்",
  "Powerful Automation.": "சக்திவாய்ந்த தானியக்கம்.",
  "Simple Pricing.": "எளிய விலைத் திட்டங்கள்.",
  "Choose the Whatsware solution that fits your business and scale your marketing, customer support, AI automation and sales.":
    "உங்கள் வணிகத்திற்கு ஏற்ற Whatsware தீர்வைத் தேர்வு செய்து, மார்க்கெட்டிங், வாடிக்கையாளர் ஆதரவு, AI தானியக்கம் மற்றும் விற்பனையை வளர்த்துக் கொள்ளுங்கள்.",
  "Yearly Plans": "வருடாந்திர திட்டங்கள்",
  "SAVE MORE": "மேலும் சேமிக்கவும்",

  "Marketing & Support Hub": "மார்க்கெட்டிங் & ஆதரவு மையம்",
  "Powerful WhatsApp marketing, customer support and automation tools for growing businesses.":
    "வளரும் வணிகங்களுக்கான சக்திவாய்ந்த WhatsApp மார்க்கெட்டிங், வாடிக்கையாளர் ஆதரவு மற்றும் தானியக்க கருவிகள்.",
  "WhatsApp AI Agents": "WhatsApp AI முகவர்கள்",
  "Intelligent AI-powered conversations that help your business engage customers automatically.":
    "AI மூலம் இயக்கப்படும் புத்திசாலித்தனமான உரையாடல்கள், உங்கள் வணிகம் வாடிக்கையாளர்களுடன் தானாக ஈடுபட உதவுகின்றன.",

  "Choose your plan": "உங்கள் திட்டத்தைத் தேர்வு செய்யுங்கள்",

  "Perfect for getting started": "தொடங்குவதற்கு சிறந்தது",
  "Grow your business faster": "உங்கள் வணிகத்தை வேகமாக வளர்க்கவும்",
  "For scaling businesses": "வளரும் வணிகங்களுக்காக",
  "Built around your business": "உங்கள் வணிகத்தை மையமாகக் கொண்டு உருவாக்கப்பட்டது",

  "per year + taxes": "வருடத்திற்கு + வரிகள்",
  "Talk to our sales team": "எங்கள் விற்பனை குழுவுடன் பேசுங்கள்",

  "Get Started": "தொடங்குங்கள்",
  "Get In Touch": "தொடர்பு கொள்ளுங்கள்",

  "MOST POPULAR": "மிகவும் பிரபலமானது",

  "ADD-ON SERVICES": "கூடுதல் சேவைகள்",
  "Chatbot Setup": "Chatbot அமைப்பு",
  "Campaign Setup": "Campaign அமைப்பு",
  "Lead Funnel": "Lead Funnel",
  "API Integration": "API ஒருங்கிணைப்பு",
  "CRM Integration": "CRM ஒருங்கிணைப்பு",
  "Payment Integration": "Payment ஒருங்கிணைப்பு",
  "Green Tick Assistance": "Green Tick உதவி",

  "COMPLETE SERVICES": "முழுமையான சேவைகள்",
  "API & SETUP": "API & அமைப்பு",
  "Business API Setup": "Business API அமைப்பு",
  "FB Verification": "FB சரிபார்ப்பு",
  "Number Registration": "எண் பதிவு",
  "Panel Access": "Panel அணுகல்",

  "MARKETING": "மார்க்கெட்டிங்",
  "Bulk Broadcast": "Bulk Broadcast",
  "Festival Campaigns": "திருவிழா பிரச்சாரங்கள்",
  "Click-to-WA Ads": "Click-to-WA விளம்பரங்கள்",
  "Lead Capture": "Lead Capture",

  "AUTOMATION": "தானியக்கம்",
  "Welcome Messages": "வரவேற்பு செய்திகள்",
  "Keyword Auto-Reply": "Keyword தானியங்கி பதில்",
  "Auto Follow-ups": "தானியங்கி பின்தொடர்வுகள்",

  "NOTIFICATIONS": "அறிவிப்புகள்",
  "Appointment Reminders": "அப்பாயின்ட்மென்ட் நினைவூட்டல்கள்",
  "Order Confirmation": "ஆர்டர் உறுதிப்படுத்தல்",
  "Delivery Updates": "டெலிவரி புதுப்பிப்புகள்",
  "Renewal Reminders": "புதுப்பிப்பு நினைவூட்டல்கள்",

  "INTEGRATIONS": "ஒருங்கிணைப்புகள்",
  "Website & Landing Page": "Website & Landing Page",
  "SUPPORT": "ஆதரவு",
  "Technical Support": "தொழில்நுட்ப ஆதரவு",
  "Campaign Support": "Campaign ஆதரவு",
  "Monthly Optimization": "மாதாந்திர மேம்படுத்தல்",

  "Detailed Comparison": "விரிவான ஒப்பீடு",
  "Compare Plans": "திட்டங்களை ஒப்பிடுங்கள்",
  "See what each Whatsware plan includes for":
    "ஒவ்வொரு Whatsware திட்டத்திலும் என்னென்ன உள்ளன என்பதைப் பாருங்கள்:",
  Features: "அம்சங்கள்",

  "Marketing & Campaigns": "மார்க்கெட்டிங் & பிரச்சாரங்கள்",
  "WhatsApp Campaigns": "WhatsApp பிரச்சாரங்கள்",
  "Bulk Messaging": "மொத்த செய்தியிடல்",
  "Campaign Scheduling": "பிரச்சார திட்டமிடல்",
  "Audience Segmentation": "வாடிக்கையாளர் பிரிவு",
  "Campaign Analytics": "பிரச்சார பகுப்பாய்வு",

  "Customer Support": "வாடிக்கையாளர் ஆதரவு",
  "Shared Team Inbox": "பகிரப்பட்ட குழு Inbox",
  "Customer Conversations": "வாடிக்கையாளர் உரையாடல்கள்",
  "Greeting Automation": "வரவேற்பு தானியக்கம்",
  "Out-of-Office Automation": "அலுவலகத்திற்கு வெளியே தானியக்கம்",
  "FAQ Automation": "FAQ தானியக்கம்",
  "Chat Assignment": "Chat ஒதுக்கீடு",

  Automation: "தானியக்கம்",
  "Workflow Automation": "Workflow தானியக்கம்",
  "Follow-up Automation": "பின்தொடர்தல் தானியக்கம்",
  "Conditional Workflows": "நிபந்தனை Workflow-கள்",
  "Advanced Triggers": "மேம்பட்ட Triggers",
  "Webhook Automation": "Webhook தானியக்கம்",

  "Commerce & Channels": "வணிகம் & சேனல்கள்",
  WhatsApp: "WhatsApp",
  Instagram: "Instagram",
  "Product Catalog": "தயாரிப்பு பட்டியல்",
  "WhatsApp Commerce": "WhatsApp வணிகம்",

  "AI Conversations": "AI உரையாடல்கள்",
  "AI Agent Creation": "AI முகவர் உருவாக்கம்",
  "1 Agent": "1 முகவர்",
  "3 Agents": "3 முகவர்கள்",
  "AI FAQ Handling": "AI FAQ கையாளுதல்",
  "Human Handoff": "மனிதரிடம் மாற்றுதல்",
  "AI Lead Qualification": "AI Lead தகுதி நிர்ணயம்",

  "AI Automation": "AI தானியக்கம்",
  "Automated Replies": "தானியங்கி பதில்கள்",
  "Intent Detection": "நோக்கம் கண்டறிதல்",
  "Conversation Routing": "உரையாடல் வழிமாற்றம்",
  "AI Workflow Actions": "AI Workflow செயல்கள்",
  "API Actions": "API செயல்கள்",

  "AI Knowledge": "AI அறிவுத்தளம்",
  "FAQ Knowledge Base": "FAQ அறிவுத்தளம்",
  "Business Information": "வணிக தகவல்கள்",
  "Custom Instructions": "தனிப்பயன் வழிமுறைகள்",
  "AI Agent Training": "AI முகவர் பயிற்சி",

  "AI Controls": "AI கட்டுப்பாடுகள்",
  "Human Takeover": "மனிதர் கட்டுப்பாட்டை ஏற்றுக்கொள்ளுதல்",
  "Agent Assignment": "முகவர் ஒதுக்கீடு",
  "Conversation History": "உரையாடல் வரலாறு",
  "AI Analytics": "AI பகுப்பாய்வு",

  Basic: "அடிப்படை",
  Advanced: "மேம்பட்ட",
  Custom: "தனிப்பயன்",
  Unlimited: "வரம்பற்ற",
  "Unlimited*": "வரம்பற்ற*",

  "Plan Details": "திட்ட விவரங்கள்",
  "Features & Capacity": "அம்சங்கள் & திறன்",
  "Everything you need to understand what's included in each Whatsware plan.":
    "ஒவ்வொரு Whatsware திட்டத்திலும் என்னென்ன அடங்கியுள்ளது என்பதைப் புரிந்துகொள்ள தேவையான அனைத்தும் இங்கே உள்ளது.",
  "Business Capacity": "வணிக திறன்",
  "WhatsApp Numbers": "WhatsApp எண்கள்",
  Messages: "செய்திகள்",
  Contacts: "தொடர்புகள்",
  "Team Members": "குழு உறுப்பினர்கள்",
  "Custom Fields": "தனிப்பயன் புலங்கள்",
  "Custom Tags": "தனிப்பயன் குறிச்சொற்கள்",

  "* Final usage limits and messaging policies will be confirmed when Whatsware pricing is finalized.":
    "* இறுதி பயன்பாட்டு வரம்புகள் மற்றும் செய்தியிடல் விதிமுறைகள் Whatsware விலைத் திட்டங்கள் இறுதி செய்யப்படும் போது உறுதி செய்யப்படும்.",

  "All plans are billed annually. Taxes and applicable WhatsApp messaging charges may apply.":
    "அனைத்து திட்டங்களும் ஆண்டுதோறும் கட்டணம் வசூலிக்கப்படும். வரிகள் மற்றும் பொருந்தக்கூடிய WhatsApp செய்தியிடல் கட்டணங்கள் இருக்கலாம்.",

  "Optional Add-ons": "விருப்ப கூடுதல் சேவைகள்",
  "Extend Whatsware around your business":
    "உங்கள் வணிகத்திற்கேற்ப Whatsware-ஐ விரிவுபடுத்துங்கள்",
  "Add advanced capabilities whenever your business needs them. Add-on pricing can be defined separately.":
    "உங்கள் வணிகத்திற்கு தேவைப்படும் போது மேம்பட்ட திறன்களைச் சேர்க்கவும். கூடுதல் சேவைகளுக்கான விலை தனியாக நிர்ணயிக்கப்படலாம்.",
  "Explore Add-ons →": "கூடுதல் சேவைகளைப் பார்க்கவும் →",

  "Additional WhatsApp Numbers": "கூடுதல் WhatsApp எண்கள்",
  "Advanced Analytics": "மேம்பட்ட பகுப்பாய்வு",
  "Custom Integrations": "தனிப்பயன் ஒருங்கிணைப்புகள்",
  "Dedicated Support": "தனிப்பட்ட ஆதரவு",
  "Enterprise APIs": "Enterprise APIs",

  Integrations: "ஒருங்கிணைப்புகள்",
  "Connect Whatsware with your existing tools":
    "உங்கள் தற்போதைய கருவிகளுடன் Whatsware-ஐ இணைக்கவும்",
  "Bring your tools together with integrations, APIs and automation workflows.":
    "ஒருங்கிணைப்புகள், APIs மற்றும் தானியக்க Workflow-கள் மூலம் உங்கள் கருவிகளை ஒன்றாக இணைக்கவும்.",

  "WhatsApp Business": "WhatsApp Business",
  Shopify: "Shopify",
  CRM: "CRM",
  Webhooks: "Webhooks",
  "Public APIs": "Public APIs",
  "Google Sheets": "Google Sheets",
  Zapier: "Zapier",
  "E-commerce": "E-commerce",
  Payments: "Payments",
  Analytics: "பகுப்பாய்வு",

  "Need help choosing?": "தேர்வு செய்ய உதவி வேண்டுமா?",
  "Not sure which plan is right for you?":
    "எந்த திட்டம் உங்களுக்கு சரியானது என்று தெரியவில்லையா?",
  "Talk to the Whatsware team and find the right solution for your business.":
    "Whatsware குழுவுடன் பேசுங்கள் மற்றும் உங்கள் வணிகத்திற்கான சரியான தீர்வைக் கண்டறியுங்கள்.",
  "Talk to Whatsware →": "Whatsware குழுவுடன் பேசுங்கள் →",
};

/* =========================================================
   TRANSLATION FUNCTION
========================================================= */

function translate(value: string, language: "EN" | "TA") {
  if (language === "TA") {
    return TA[value] ?? value;
  }

  return value;
}

/* =========================================================
   PRICING PAGE
========================================================= */

export default function Pricing() {
  const { language } = useLanguage();

  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("marketing");

  const currentCategory = categories.find(
    (category) => category.key === activeCategory,
  );

  const planKeys = Object.keys(plans) as PlanKey[];

  const tr = (value: string) => translate(value, language);

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-gray-900">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-green-300/20 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-purple-300/10 blur-3xl" />

        <div className="pointer-events-none absolute left-0 top-72 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-bold text-green-700 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            {tr("Whatsware Pricing")}
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            {tr("Powerful Automation.")}
            <span className="mt-2 block bg-gradient-to-r from-[#159447] via-[#159447] to-[#7B4DFF] bg-clip-text text-transparent">
              {tr("Simple Pricing.")}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            {tr(
              "Choose the Whatsware solution that fits your business and scale your marketing, customer support, AI automation and sales.",
            )}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-6 py-3 shadow-lg shadow-green-900/5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            <span className="font-bold text-gray-800">
              {tr("Yearly Plans")}
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
              {tr("SAVE MORE")}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY NAVIGATION
      ===================================================== */}

      <section className="sticky top-0 z-30 border-y border-gray-200/80 bg-[#FFFDF5]/90 py-4 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-2">
            {categories.map((category) => {
              const isActive = activeCategory === category.key;

              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`group relative overflow-hidden rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#159447] text-white shadow-xl shadow-green-700/20"
                      : "border border-gray-200 bg-white text-gray-700 hover:-translate-y-0.5 hover:border-green-300 hover:shadow-lg"
                  }`}
                >
                  {isActive && (
                    <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
                  )}

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold sm:text-base">
                        {tr(category.label)}
                      </span>

                      <span
                        className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                          isActive
                            ? "text-white"
                            : "text-green-600"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    <p
                      className={`mt-1 text-xs ${
                        isActive
                          ? "text-white/75"
                          : "text-gray-500"
                      }`}
                    >
                      {tr(category.description)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED CATEGORY
      ===================================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-600">
              {tr("Choose your plan")}
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {currentCategory
                ? tr(currentCategory.label)
                : ""}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {currentCategory
                ? tr(currentCategory.description)
                : ""}
            </p>
          </div>

          {/* =================================================
              PRICING CARDS
          ================================================= */}

          <div className="grid items-start gap-6 lg:grid-cols-4">
            {planKeys.map((key) => {
              const plan = plans[key];

              return (
                <div
                  key={key}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    plan.popular
                      ? "border-purple-300 shadow-purple-100"
                      : "border-gray-200"
                  }`}
                >
                  <div
                    className="absolute left-0 right-0 top-0 h-1.5"
                    style={{
                      background: `linear-gradient(90deg, ${plan.color}, transparent)`,
                    }}
                  />

                  {plan.popular && (
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-300/20 blur-3xl" />
                  )}

                  {plan.popular && (
                    <div className="absolute right-5 top-5">
                      <span className="rounded-full bg-gradient-to-r from-[#7B4DFF] to-purple-600 px-3 py-1.5 text-[10px] font-extrabold tracking-wider text-white shadow-lg shadow-purple-500/20">
                        {tr("MOST POPULAR")}
                      </span>
                    </div>
                  )}

                  <div className="relative">
                    <div
                      className="mb-6 h-1.5 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                      style={{
                        backgroundColor: plan.color,
                      }}
                    />

                    <h3 className="text-2xl font-extrabold">
                      {plan.name}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                      {tr(plan.description)}
                    </p>

                    <div className="mt-7">
                      <div
                        className="text-4xl font-extrabold tracking-tight"
                        style={{
                          color: plan.color,
                        }}
                      >
                        {plan.price === "Custom"
                          ? tr("Custom")
                          : plan.price}
                      </div>

                      <p className="mt-2 text-xs font-medium text-gray-500">
                        {tr(plan.priceNote)}
                      </p>
                    </div>

                    {/* =================================================
                        PLAN BUTTON
                    ================================================= */}

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="mt-7 w-full rounded-xl px-5 py-3.5 text-sm font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      style={{
                        backgroundColor: plan.color,
                      }}
                    >
                      {tr(plan.button)}
                    </button>

                    {/* =================================================
                        PLAN SERVICES
                    ================================================= */}

                    <div className="mt-7 border-t border-gray-100 pt-6">
                      <div className="space-y-6">
                        {planContents[key].map(
                          (section, sectionIndex) => (
                            <div
                              key={`${section.title}-${sectionIndex}`}
                            >
                              <p
                                className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.15em]"
                                style={{
                                  color: plan.color,
                                }}
                              >
                                {tr(section.title)}
                              </p>

                              {section.items.length > 0 && (
                                <ul className="space-y-2.5">
                                  {section.items.map(
                                    (item) => (
                                      <li
                                        key={item}
                                        className="flex items-start gap-2.5 text-xs leading-5 text-gray-600"
                                      >
                                        <span
                                          className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-extrabold text-white"
                                          style={{
                                            backgroundColor:
                                              plan.color,
                                          }}
                                        >
                                          ✓
                                        </span>

                                        <span>
                                          {tr(item)}
                                        </span>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              )}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              {tr(
                "All plans are billed annually. Taxes and applicable WhatsApp messaging charges may apply.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-600">
              {tr("Detailed Comparison")}
            </span>

            <h2 className="mt-3 text-3xl font-extrabold">
              {tr("Compare Plans")}
            </h2>

            <p className="mt-2 text-gray-600">
              {tr(
                "See what each Whatsware plan includes for",
              )}{" "}
              {currentCategory
                ? tr(currentCategory.label)
                : ""}
              .
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5">
            <div className="overflow-x-auto">
              <div className="min-w-[950px]">
                <div className="grid grid-cols-[2fr_repeat(4,1fr)] bg-gray-50">
                  <div className="p-6 text-sm font-extrabold text-gray-700">
                    {tr("Features")}
                  </div>

                  {planKeys.map((key) => (
                    <div
                      key={key}
                      className={`border-l border-gray-200 p-6 text-center ${
                        key === "titan"
                          ? "bg-purple-50/50"
                          : ""
                      }`}
                    >
                      <div className="font-extrabold">
                        {plans[key].name}
                      </div>

                      <div
                        className="mx-auto mt-2 h-1 w-10 rounded-full"
                        style={{
                          backgroundColor:
                            plans[key].color,
                        }}
                      />
                    </div>
                  ))}
                </div>

                {featureSections[
                  activeCategory
                ].map((section) => (
                  <div key={section.title}>
                    <div className="grid grid-cols-[2fr_repeat(4,1fr)] bg-green-50/70">
                      <div className="col-span-5 px-6 py-4 text-sm font-extrabold text-green-900">
                        {tr(section.title)}
                      </div>
                    </div>

                    {section.rows.map((row) => (
                      <div
                        key={row.feature}
                        className="grid grid-cols-[2fr_repeat(4,1fr)] border-t border-gray-100 transition-colors hover:bg-gray-50"
                      >
                        <div className="p-5 text-sm font-medium text-gray-700">
                          {tr(row.feature)}
                        </div>

                        {planKeys.map((key) => {
                          const value = row[key];

                          return (
                            <div
                              key={key}
                              className={`border-l border-gray-100 p-5 text-center text-sm ${
                                key === "titan"
                                  ? "bg-purple-50/30"
                                  : ""
                              }`}
                            >
                              {value === "✓" ? (
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 font-extrabold text-green-600">
                                  ✓
                                </span>
                              ) : value === "—" ? (
                                <span className="text-gray-300">
                                  —
                                </span>
                              ) : (
                                <span className="font-medium text-gray-600">
                                  {tr(value)}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES & CAPACITY
      ===================================================== */}

      <section className="border-y border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-600">
              {tr("Plan Details")}
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              {tr("Features & Capacity")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {tr(
                "Everything you need to understand what's included in each Whatsware plan.",
              )}
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5">
            <div className="overflow-x-auto">
              <div className="min-w-[950px]">
                <div className="grid grid-cols-[2fr_repeat(4,1fr)] bg-gray-50">
                  <div className="p-6 text-sm font-extrabold">
                    {tr("Business Capacity")}
                  </div>

                  {planKeys.map((key) => (
                    <div
                      key={key}
                      className={`border-l border-gray-200 p-6 text-center ${
                        key === "titan"
                          ? "bg-purple-50/50"
                          : ""
                      }`}
                    >
                      <div className="font-extrabold">
                        {plans[key].name}
                      </div>

                      <div
                        className="mx-auto mt-2 h-1 w-10 rounded-full"
                        style={{
                          backgroundColor:
                            plans[key].color,
                        }}
                      />
                    </div>
                  ))}
                </div>

                {capacityRows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[2fr_repeat(4,1fr)] border-t border-gray-100 hover:bg-gray-50"
                  >
                    <div className="p-5 text-sm font-medium text-gray-700">
                      {tr(row.feature)}
                    </div>

                    {planKeys.map((key) => (
                      <div
                        key={key}
                        className={`border-l border-gray-100 p-5 text-center text-sm ${
                          key === "titan"
                            ? "bg-purple-50/30"
                            : ""
                        }`}
                      >
                        {tr(row[key])}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-gray-500">
            {tr(
              "* Final usage limits and messaging policies will be confirmed when Whatsware pricing is finalized.",
            )}
          </p>
        </div>
      </section>

      {/* =====================================================
          ADD-ONS
      ===================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0F5132] via-[#126C42] to-[#159447] p-8 text-white shadow-2xl sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-green-300/10 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                  {tr("Optional Add-ons")}
                </span>

                <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                  {tr(
                    "Extend Whatsware around your business",
                  )}
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-white/75">
                  {tr(
                    "Add advanced capabilities whenever your business needs them. Add-on pricing can be defined separately.",
                  )}
                </p>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="mt-7 rounded-xl bg-white px-6 py-3 font-extrabold text-[#0F5132] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {tr("Explore Add-ons →")}
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "WhatsApp AI Agents",
                  "Additional WhatsApp Numbers",
                  "Advanced Analytics",
                  "Custom Integrations",
                  "Dedicated Support",
                  "Enterprise APIs",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-extrabold">
                        ✓
                      </div>

                      <span className="text-sm font-semibold">
                        {tr(item)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATIONS
      ===================================================== */}

      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-600">
            {tr("Integrations")}
          </span>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            {tr(
              "Connect Whatsware with your existing tools",
            )}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {tr(
              "Bring your tools together with integrations, APIs and automation workflows.",
            )}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="group rounded-2xl border border-gray-200 bg-[#FFFDF5] px-4 py-5 text-sm font-bold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50 hover:text-green-700 hover:shadow-lg"
              >
                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-xs font-extrabold text-green-600 transition-transform duration-300 group-hover:scale-110">
                  ✓
                </div>

                {tr(integration)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-green-50 via-white to-purple-50 p-8 text-center shadow-xl sm:p-14">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-green-200/30 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-green-700">
                {tr("Need help choosing?")}
              </span>

              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                {tr(
                  "Not sure which plan is right for you?",
                )}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                {tr(
                  "Talk to the Whatsware team and find the right solution for your business.",
                )}
              </p>

              <button
                type="button"
                onClick={openWhatsApp}
                className="mt-8 rounded-xl bg-[#159447] px-8 py-4 font-extrabold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
              >
                {tr("Talk to Whatsware →")}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}