import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Globe2,
  Check,
  MessageCircle,
  Instagram,
  MessageSquareText,
  Volume2,
  Building2,
  Plane,
  UtensilsCrossed,
  Scissors,
  HeartPulse,
  Sparkles,
  GraduationCap,
  Car,
  Armchair,
  Megaphone,
  Home,
  BriefcaseBusiness,

  // Products
  MousePointer2,
  QrCode,
  Link2,
  MessageSquare,
  Bot,
  ClipboardList,
  UserCheck,
  Radio,
  GitBranch,
  Send,
  Inbox,
  CreditCard,
  ShoppingCart,
  BarChart3,

  // Partnership
  Handshake,
  Users,
  Laptop,
  Link as LinkIcon,

  // Resources
  FileText,
  BookOpen,
  CircleHelp,
  LifeBuoy,
} from "lucide-react";

import { Link, useLocation } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

/* ============================================================
   TYPES
============================================================ */

type NavLink = {
  name: string;
  href?: string;
  dropdown?: string[];
  dropdownGroups?: {
    title: string;
    items: string[];
  }[];
};

/* ============================================================
   NAVIGATION LINKS
============================================================ */

const NAV_LINKS: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  
  {
    name: "About",
    href: "/about",
  },

  {
    name: "Products",
    href: "/products",
    dropdownGroups: [
      {
        title: "Capture Leads",
        items: [
          "Click-to-WhatsApp Ads",
          "WhatsApp QR Code",
          "WhatsApp Link Generator",
          "WhatsApp Chat Widget",
        ],
      },
      {
        title: "Qualify Leads",
        items: [
          "WhatsApp AI Agents",
          "WhatsApp Chatbots",
          "WhatsApp Forms",
          "AI Lead Qualification",
        ],
      },
      {
        title: "Nurture Leads",
        items: [
          "WhatsApp Broadcast",
          "WhatsApp Automation",
          "Workflow Builder",
          "Automated Follow-ups",
        ],
      },
      {
        title: "Close Deals",
        items: [
          "Shared Team Inbox",
          "WhatsApp Sales",
          "WhatsApp Payments",
          "Analytics",
        ],
      },
    ],
  },

  {
    name: "Solutions",
    href: "/solutions",
    dropdownGroups: [
      {
        title: "Channels",
        items: [
          "WhatsApp",
          "Instagram",
          "RCS",
          "Voice",
        ],
      },
      {
        title: "Industries",
        items: [
          "B2B Sales",
          "Travel & Tourism",
          "Restaurant & Food Business",
          "Spas & Salons",
          "Health & Wellness Brands",
          "Beauty & Cosmetic Brands",
          "Edutech",
          "Automotive Industry",
          "Home Decor & Furnishing",
          "Marketing Agency",
          "Real Estate",
          "Freelancers & Consultants",
        ],
      },
    ],
  },

  {
    name: "Integrations",
    href: "/integrations",
  },

  {
    name: "Pricing",
    href: "/pricing",
  },

  {
    name: "Partnership",
    href: "/partnership",
    dropdown: [
      "Become a Partner",
      "Agency Partners",
      "Technology Partners",
      "Affiliate Program",
    ],
  },

  {
    name: "Resources",
    href: "/resources",
    dropdown: [
      "Blog",
      "Guides",
      "FAQs",
      "Help Center",
    ],
  },
];

/* ============================================================
   WHATSAPP SOLUTIONS
============================================================ */

const WHATSAPP_SOLUTIONS = [
  {
    name: "WhatsApp Voice Calling",
    route: "/solutions/whatsapp/voice-calling",
  },
  {
    name: "Chatbot Builder",
    route: "/solutions/whatsapp/chatbots",
  },
  {
    name: "WhatsApp Business API",
    route: "/solutions/whatsapp/business-api",
  },
  {
    name: "WhatsApp Forms",
    route: "/solutions/whatsapp/forms",
  },
  {
    name: "Click to WhatsApp Ads",
    route: "/solutions/whatsapp/click-to-whatsapp-ads",
  },
  {
    name: "WhatsApp Marketing",
    route: "/solutions/whatsapp/marketing",
  },
  {
    name: "WhatsApp Automation",
    route: "/solutions/whatsapp/automation",
  },
  {
    name: "WhatsApp CRM",
    route: "/solutions/whatsapp/crm",
  },
  {
    name: "WhatsApp Commerce",
    route: "/solutions/whatsapp/commerce",
  },
  {
    name: "WhatsApp Chat Widget",
    route: "/solutions/whatsapp/chat-widget",
  },
];

/* ============================================================
   CHANNEL ROUTES
============================================================ */

const CHANNEL_ROUTES: Record<string, string> = {
  Instagram: "/solutions/channels/instagram",
  RCS: "/solutions/rcs",
  Voice: "/solutions/voice",
};

/* ============================================================
   INDUSTRY ROUTES
============================================================ */

const INDUSTRY_ROUTES: Record<string, string> = {
  "B2B Sales": "b2b-sales",
  "Travel & Tourism": "travel-tourism",
  "Restaurant & Food Business": "restaurant-food",
  "Spas & Salons": "spas-salons",
  "Health & Wellness Brands": "health-wellness",
  "Beauty & Cosmetic Brands": "beauty-cosmetics",
  Edutech: "edutech",
  "Automotive Industry": "automotive",
  "Home Decor & Furnishing": "home-decor",
  "Marketing Agency": "marketing-agency",
  "Real Estate": "real-estate",
  "Freelancers & Consultants": "freelancers-consultants",
};

/* ============================================================
   SOLUTION ICONS
============================================================ */

const SOLUTION_ICONS: Record<string, any> = {
  WhatsApp: MessageCircle,
  Instagram: Instagram,
  RCS: MessageSquareText,
  Voice: Volume2,

  "B2B Sales": Building2,
  "Travel & Tourism": Plane,
  "Restaurant & Food Business": UtensilsCrossed,
  "Spas & Salons": Scissors,
  "Health & Wellness Brands": HeartPulse,
  "Beauty & Cosmetic Brands": Sparkles,
  Edutech: GraduationCap,
  "Automotive Industry": Car,
  "Home Decor & Furnishing": Armchair,
  "Marketing Agency": Megaphone,
  "Real Estate": Home,
  "Freelancers & Consultants": BriefcaseBusiness,
};

/* ============================================================
   SOLUTION DESCRIPTIONS
============================================================ */

const SOLUTION_DESCRIPTIONS: Record<string, string> = {
  WhatsApp: "Connect and engage customers on WhatsApp",
  Instagram: "Turn Instagram conversations into opportunities",
  RCS: "Deliver rich and interactive customer messages",
  Voice: "Connect with customers through voice",

  "B2B Sales": "Generate and qualify more business leads",
  "Travel & Tourism": "Convert travel enquiries into bookings",
  "Restaurant & Food Business": "Grow orders and customer engagement",
  "Spas & Salons": "Drive appointments and repeat customers",
  "Health & Wellness Brands": "Build stronger customer relationships",
  "Beauty & Cosmetic Brands": "Turn conversations into beauty sales",
  Edutech: "Engage students and automate admissions",
  "Automotive Industry": "Capture and nurture automotive leads",
  "Home Decor & Furnishing": "Convert enquiries into home sales",
  "Marketing Agency": "Scale campaigns and client conversations",
  "Real Estate": "Capture and qualify property leads",
  "Freelancers & Consultants":
    "Automate enquiries and client follow-ups",
};

/* ============================================================
   TAMIL SOLUTION DESCRIPTIONS
============================================================ */

const TAMIL_SOLUTION_DESCRIPTIONS: Record<string, string> = {
  WhatsApp: "WhatsApp மூலம் வாடிக்கையாளர்களுடன் இணைந்து ஈடுபடுங்கள்",
  Instagram: "Instagram உரையாடல்களை வணிக வாய்ப்புகளாக மாற்றுங்கள்",
  RCS: "சிறப்பான மற்றும் ஊடாடும் வாடிக்கையாளர் செய்திகளை வழங்குங்கள்",
  Voice: "குரல் மூலம் வாடிக்கையாளர்களுடன் இணையுங்கள்",

  "B2B Sales": "மேலும் வணிக லீட்களை உருவாக்கி தகுதி பெறச் செய்யுங்கள்",
  "Travel & Tourism": "பயண விசாரணைகளை முன்பதிவுகளாக மாற்றுங்கள்",
  "Restaurant & Food Business":
    "ஆர்டர்கள் மற்றும் வாடிக்கையாளர் ஈடுபாட்டை அதிகரிக்கவும்",
  "Spas & Salons":
    "அப்பாயின்ட்மென்ட்கள் மற்றும் மீண்டும் வரும் வாடிக்கையாளர்களை அதிகரிக்கவும்",
  "Health & Wellness Brands":
    "வாடிக்கையாளர்களுடன் வலுவான உறவுகளை உருவாக்குங்கள்",
  "Beauty & Cosmetic Brands":
    "உரையாடல்களை அழகு சாதன விற்பனையாக மாற்றுங்கள்",
  Edutech:
    "மாணவர்களுடன் ஈடுபட்டு சேர்க்கை செயல்முறையை தானியங்குபடுத்துங்கள்",
  "Automotive Industry":
    "வாகனத் துறை லீட்களைப் பெற்று வளர்த்தெடுக்கவும்",
  "Home Decor & Furnishing":
    "விசாரணைகளை வீட்டு விற்பனையாக மாற்றுங்கள்",
  "Marketing Agency":
    "பிரச்சாரங்கள் மற்றும் வாடிக்கையாளர் உரையாடல்களை அளவிடுங்கள்",
  "Real Estate":
    "சொத்து லீட்களைப் பெற்று தகுதி பெறச் செய்யுங்கள்",
  "Freelancers & Consultants":
    "விசாரணைகள் மற்றும் வாடிக்கையாளர் பின்தொடர்வுகளை தானியங்குபடுத்துங்கள்",
};

/* ============================================================
   PRODUCT ROUTES
============================================================ */

const PRODUCT_ROUTES: Record<string, string> = {
  "Click-to-WhatsApp Ads":
    "/products/click-to-whatsapp-ads",

  "WhatsApp QR Code":
    "/products/whatsapp-qr-code",

  "WhatsApp Link Generator":
    "/products/whatsapp-link-generator",

  "WhatsApp Chat Widget":
    "/products/whatsapp-chat-widget",

  "WhatsApp AI Agents":
    "/products/ai-agents",

  "WhatsApp Chatbots":
    "/products/whatsapp-chatbots",

  "WhatsApp Forms":
    "/products/whatsapp-forms",

  "AI Lead Qualification":
    "/products/ai-lead-qualification",

  "WhatsApp Broadcast":
    "/products/whatsapp-broadcast",

  "WhatsApp Automation":
    "/products/whatsapp-automation",

  "Workflow Builder":
    "/products/workflow-builder",

  "Automated Follow-ups":
    "/products/automated-follow-ups",

  "Shared Team Inbox":
    "/products/shared-team-inbox",

  "WhatsApp Sales":
    "/products/whatsapp-sales",

  "WhatsApp Payments":
    "/products/whatsapp-payments",

  Analytics:
    "/products/analytics",
};

/* ============================================================
   PRODUCT ICONS
============================================================ */

const PRODUCT_ICONS: Record<string, any> = {
  "Click-to-WhatsApp Ads": MousePointer2,
  "WhatsApp QR Code": QrCode,
  "WhatsApp Link Generator": Link2,
  "WhatsApp Chat Widget": MessageSquare,

  "WhatsApp AI Agents": Bot,
  "WhatsApp Chatbots": Bot,
  "WhatsApp Forms": ClipboardList,
  "AI Lead Qualification": UserCheck,

  "WhatsApp Broadcast": Radio,
  "WhatsApp Automation": MessageSquare,
  "Workflow Builder": GitBranch,
  "Automated Follow-ups": Send,

  "Shared Team Inbox": Inbox,
  "WhatsApp Sales": ShoppingCart,
  "WhatsApp Payments": CreditCard,
  Analytics: BarChart3,
};

/* ============================================================
   PARTNERSHIP & RESOURCE ICONS
============================================================ */

const REGULAR_ICONS: Record<string, any> = {
  // Partnership
  "Become a Partner": Handshake,
  "Agency Partners": Users,
  "Technology Partners": Laptop,
  "Affiliate Program": LinkIcon,

  // Resources
  Blog: FileText,
  Guides: BookOpen,
  FAQs: CircleHelp,
  "Help Center": LifeBuoy,
};

/* ============================================================
   PRODUCT DESCRIPTIONS
============================================================ */

const PRODUCT_DESCRIPTIONS: Record<string, string> = {
  "Click-to-WhatsApp Ads":
    "Turn Meta clicks into WhatsApp conversations",

  "WhatsApp QR Code":
    "Generate QR codes that start WhatsApp chats",

  "WhatsApp Link Generator":
    "Create WhatsApp links to connect with customers",

  "WhatsApp Chat Widget":
    "Add WhatsApp chat to your website",

  "WhatsApp AI Agents":
    "Automate customer conversations with AI",

  "WhatsApp Chatbots":
    "Build automated WhatsApp conversations",

  "WhatsApp Forms":
    "Collect customer information directly on WhatsApp",

  "AI Lead Qualification":
    "Automatically identify and qualify high-intent leads",

  "WhatsApp Broadcast":
    "Reach customers with targeted WhatsApp campaigns",

  "WhatsApp Automation":
    "Automate repetitive WhatsApp conversations",

  "Workflow Builder":
    "Build powerful customer workflows",

  "Automated Follow-ups":
    "Automatically follow up with leads at the right time",

  "Shared Team Inbox":
    "Collaborate with your team from one WhatsApp inbox",

  "WhatsApp Sales":
    "Turn WhatsApp conversations into sales",

  "WhatsApp Payments":
    "Make it easier for customers to complete purchases",

  Analytics:
    "Track conversations, leads and business performance",
};

/* ============================================================
   TAMIL PRODUCT DESCRIPTIONS
============================================================ */

const TAMIL_PRODUCT_DESCRIPTIONS: Record<string, string> = {
  "Click-to-WhatsApp Ads":
    "Meta கிளிக்குகளை WhatsApp உரையாடல்களாக மாற்றுங்கள்",

  "WhatsApp QR Code":
    "WhatsApp உரையாடல்களைத் தொடங்க QR குறியீடுகளை உருவாக்குங்கள்",

  "WhatsApp Link Generator":
    "வாடிக்கையாளர்களுடன் இணைக்க WhatsApp இணைப்புகளை உருவாக்குங்கள்",

  "WhatsApp Chat Widget":
    "உங்கள் இணையதளத்தில் WhatsApp அரட்டையைச் சேர்க்கவும்",

  "WhatsApp AI Agents":
    "AI மூலம் வாடிக்கையாளர் உரையாடல்களை தானியங்குபடுத்துங்கள்",

  "WhatsApp Chatbots":
    "தானியங்கி WhatsApp உரையாடல்களை உருவாக்குங்கள்",

  "WhatsApp Forms":
    "WhatsApp வழியாக வாடிக்கையாளர் தகவல்களை சேகரிக்கவும்",

  "AI Lead Qualification":
    "அதிக ஆர்வமுள்ள லீட்களை தானாக கண்டறிந்து தகுதி பெறச் செய்யுங்கள்",

  "WhatsApp Broadcast":
    "இலக்கு வாடிக்கையாளர்களை WhatsApp பிரச்சாரங்கள் மூலம் சென்றடையுங்கள்",

  "WhatsApp Automation":
    "மீண்டும் மீண்டும் செய்யும் WhatsApp உரையாடல்களை தானியங்குபடுத்துங்கள்",

  "Workflow Builder":
    "சக்திவாய்ந்த வாடிக்கையாளர் workflow-களை உருவாக்குங்கள்",

  "Automated Follow-ups":
    "சரியான நேரத்தில் லீட்களை தானாக பின்தொடருங்கள்",

  "Shared Team Inbox":
    "ஒரே WhatsApp inbox மூலம் உங்கள் குழுவுடன் இணைந்து செயல்படுங்கள்",

  "WhatsApp Sales":
    "WhatsApp உரையாடல்களை விற்பனையாக மாற்றுங்கள்",

  "WhatsApp Payments":
    "வாடிக்கையாளர்கள் வாங்குதலை எளிதாக முடிக்க உதவுங்கள்",

  Analytics:
    "உரையாடல்கள், லீட்கள் மற்றும் வணிக செயல்திறனை கண்காணிக்கவும்",
};

/* ============================================================
   TRANSLATIONS
============================================================ */

const TRANSLATIONS = {
  EN: {
    nav: {
      Home: "Home",
      About: "About",
      Products: "Products",
      Solutions: "Solutions",
      Integrations: "Integrations",
      Pricing: "Pricing",
      Partnership: "Partnership",
      Resources: "Resources",
    },

    groups: {
      "Capture Leads": "Capture Leads",
      "Qualify Leads": "Qualify Leads",
      "Nurture Leads": "Nurture Leads",
      "Close Deals": "Close Deals",
      Channels: "Channels",
      Industries: "Industries",
    },

    groupDescriptions: {
      channels: "Connect with customers everywhere",
      industries: "Solutions built for your industry",
    },

    products: {
      "Click-to-WhatsApp Ads": "Click-to-WhatsApp Ads",
      "WhatsApp QR Code": "WhatsApp QR Code",
      "WhatsApp Link Generator": "WhatsApp Link Generator",
      "WhatsApp Chat Widget": "WhatsApp Chat Widget",
      "WhatsApp AI Agents": "WhatsApp AI Agents",
      "WhatsApp Chatbots": "WhatsApp Chatbots",
      "WhatsApp Forms": "WhatsApp Forms",
      "AI Lead Qualification": "AI Lead Qualification",
      "WhatsApp Broadcast": "WhatsApp Broadcast",
      "WhatsApp Automation": "WhatsApp Automation",
      "Workflow Builder": "Workflow Builder",
      "Automated Follow-ups": "Automated Follow-ups",
      "Shared Team Inbox": "Shared Team Inbox",
      "WhatsApp Sales": "WhatsApp Sales",
      "WhatsApp Payments": "WhatsApp Payments",
      Analytics: "Analytics",
    },

    solutions: {
      WhatsApp: "WhatsApp",
      Instagram: "Instagram",
      RCS: "RCS",
      Voice: "Voice",

      "B2B Sales": "B2B Sales",
      "Travel & Tourism": "Travel & Tourism",
      "Restaurant & Food Business":
        "Restaurant & Food Business",
      "Spas & Salons": "Spas & Salons",
      "Health & Wellness Brands":
        "Health & Wellness Brands",
      "Beauty & Cosmetic Brands":
        "Beauty & Cosmetic Brands",
      Edutech: "Edutech",
      "Automotive Industry": "Automotive Industry",
      "Home Decor & Furnishing":
        "Home Decor & Furnishing",
      "Marketing Agency": "Marketing Agency",
      "Real Estate": "Real Estate",
      "Freelancers & Consultants":
        "Freelancers & Consultants",
    },

    regular: {
      "Become a Partner": "Become a Partner",
      "Agency Partners": "Agency Partners",
      "Technology Partners": "Technology Partners",
      "Affiliate Program": "Affiliate Program",
      Blog: "Blog",
      Guides: "Guides",
      FAQs: "FAQs",
      "Help Center": "Help Center",
    },

    whatsapp: {
      title: "WhatsApp Solutions",
      description:
        "Powerful WhatsApp tools for your business",
    },

    buttons: {
      explore: "Explore all products",
      signIn: "Sign In",
      demo: "Book a Demo",
      language: "Language",
    },

    popup: {
      title: "Ready to Get Started?",
      description:
        "Fill in your details and our team will be in touch within 48 hours.",
      industry: "Industry",
      company: "Company Name",
      name: "Name",
      email: "Email Address",
      phone: "Phone Number",
      robot: "I'm not a robot",
      terms: "I agree to the Terms & Conditions",
      cancel: "Cancel",
      submit: "Submit",
    },
  },

  TA: {
    nav: {
      Home: "முகப்பு",
      About: "எங்களை பற்றி",
      Products: "தயாரிப்புகள்",
      Solutions: "தீர்வுகள்",
      Integrations: "ஒருங்கிணைப்புகள்",
      Pricing: "விலை",
      Partnership: "கூட்டாண்மை",
      Resources: "வளங்கள்",
    },

    groups: {
      "Capture Leads": "லீட்களைப் பெறுங்கள்",
      "Qualify Leads": "லீட்களைத் தகுதி பெறச் செய்யுங்கள்",
      "Nurture Leads": "லீட்களை வளர்த்தெடுங்கள்",
      "Close Deals": "ஒப்பந்தங்களை முடிக்கவும்",
      Channels: "சேனல்கள்",
      Industries: "தொழில்துறைகள்",
    },

    groupDescriptions: {
      channels:
        "எங்கிருந்தும் வாடிக்கையாளர்களுடன் இணையுங்கள்",
      industries:
        "உங்கள் தொழில்துறைக்கான சிறப்பு தீர்வுகள்",
    },

    products: {
      "Click-to-WhatsApp Ads":
        "Click-to-WhatsApp விளம்பரங்கள்",
      "WhatsApp QR Code":
        "WhatsApp QR குறியீடு",
      "WhatsApp Link Generator":
        "WhatsApp இணைப்பு உருவாக்கி",
      "WhatsApp Chat Widget":
        "WhatsApp அரட்டை Widget",
      "WhatsApp AI Agents":
        "WhatsApp AI முகவர்கள்",
      "WhatsApp Chatbots":
        "WhatsApp Chatbots",
      "WhatsApp Forms":
        "WhatsApp படிவங்கள்",
      "AI Lead Qualification":
        "AI லீட் தகுதி நிர்ணயம்",
      "WhatsApp Broadcast":
        "WhatsApp பிராட்காஸ்ட்",
      "WhatsApp Automation":
        "WhatsApp தானியக்கம்",
      "Workflow Builder":
        "Workflow Builder",
      "Automated Follow-ups":
        "தானியங்கி பின்தொடர்வுகள்",
      "Shared Team Inbox":
        "பகிரப்பட்ட குழு Inbox",
      "WhatsApp Sales":
        "WhatsApp விற்பனை",
      "WhatsApp Payments":
        "WhatsApp பணப்பரிவர்த்தனைகள்",
      Analytics: "பகுப்பாய்வு",
    },

    solutions: {
      WhatsApp: "WhatsApp",
      Instagram: "Instagram",
      RCS: "RCS",
      Voice: "குரல்",

      "B2B Sales": "B2B விற்பனை",
      "Travel & Tourism": "பயணம் மற்றும் சுற்றுலா",
      "Restaurant & Food Business":
        "உணவகம் மற்றும் உணவு வணிகம்",
      "Spas & Salons": "ஸ்பா மற்றும் சலூன்கள்",
      "Health & Wellness Brands":
        "ஆரோக்கியம் மற்றும் நலன் பிராண்டுகள்",
      "Beauty & Cosmetic Brands":
        "அழகு மற்றும் அழகுசாதன பிராண்டுகள்",
      Edutech: "கல்வித் தொழில்நுட்பம்",
      "Automotive Industry":
        "வாகனத் தொழில்",
      "Home Decor & Furnishing":
        "வீட்டு அலங்காரம் மற்றும் பொருட்கள்",
      "Marketing Agency":
        "மார்க்கெட்டிங் ஏஜென்சி",
      "Real Estate": "ரியல் எஸ்டேட்",
      "Freelancers & Consultants":
        "ஃப்ரீலான்சர்கள் மற்றும் ஆலோசகர்கள்",
    },

    regular: {
      "Become a Partner": "கூட்டாளராகுங்கள்",
      "Agency Partners": "ஏஜென்சி கூட்டாளர்கள்",
      "Technology Partners": "தொழில்நுட்ப கூட்டாளர்கள்",
      "Affiliate Program": "அஃபிலியேட் திட்டம்",
      Blog: "வலைப்பதிவு",
      Guides: "வழிகாட்டிகள்",
      FAQs: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      "Help Center": "உதவி மையம்",
    },

    whatsapp: {
      title: "WhatsApp தீர்வுகள்",
      description:
        "உங்கள் வணிகத்திற்கான சக்திவாய்ந்த WhatsApp கருவிகள்",
    },

    buttons: {
      explore: "அனைத்து தயாரிப்புகளையும் பார்க்கவும்",
      signIn: "உள்நுழைக",
      demo: "டெமோ பதிவு செய்யுங்கள்",
      language: "மொழி",
    },

    popup: {
      title: "தொடங்க தயாரா?",
      description:
        "உங்கள் விவரங்களை நிரப்புங்கள். எங்கள் குழு 48 மணி நேரத்திற்குள் உங்களைத் தொடர்புகொள்ளும்.",
      industry: "தொழில்துறை",
      company: "நிறுவனத்தின் பெயர்",
      name: "பெயர்",
      email: "மின்னஞ்சல் முகவரி",
      phone: "தொலைபேசி எண்",
      robot: "நான் ரோபோட் அல்ல",
      terms:
        "விதிமுறைகள் மற்றும் நிபந்தனைகளை ஏற்கிறேன்",
      cancel: "ரத்து செய்",
      submit: "சமர்ப்பிக்கவும்",
    },
  },
};

/* ============================================================
   COMPONENT
============================================================ */

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const t = TRANSLATIONS[language];

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [activeDropdown, setActiveDropdown] =
    useState<string | null>(null);

  const [hoveredProduct, setHoveredProduct] =
    useState<string | null>("WhatsApp AI Agents");

  const [whatsappOpen, setWhatsappOpen] =
    useState(false);

  const [languageOpen, setLanguageOpen] =
    useState(false);

  const [industryPopup, setIndustryPopup] =
    useState<string | null>(null);

  const [popupForm, setPopupForm] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    captchaChecked: false,
    termsAccepted: false,
  });

  const [location, navigate] = useLocation();

  const dropdownRef =
    useRef<HTMLDivElement | null>(null);

  const languageRef =
    useRef<HTMLDivElement | null>(null);

  /* ============================================================
     LANGUAGES
  ============================================================ */

  const languages = [
    {
      code: "EN" as const,
      name: "English",
      flag: "🇬🇧",
    },
    {
      code: "TA" as const,
      name: "தமிழ்",
      flag: "🇮🇳",
    },
  ];

  /* ============================================================
     SCROLL
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ============================================================
     CLICK OUTSIDE
  ============================================================ */

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      const target =
        event.target as Node;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setActiveDropdown(null);
        setWhatsappOpen(false);
      }

      if (
        languageRef.current &&
        !languageRef.current.contains(target)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* ============================================================
     DESKTOP RESIZE
  ============================================================ */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* ============================================================
     DROPDOWN
  ============================================================ */

  const toggleDropdown = (
    name: string
  ) => {
    setActiveDropdown(
      (current) =>
        current === name
          ? null
          : name
    );

    if (name !== "Solutions") {
      setWhatsappOpen(false);
    }
  };

  /* ============================================================
     CLOSE MENUS
  ============================================================ */

  const closeMenus = () => {
    setActiveDropdown(null);
    setWhatsappOpen(false);
    setMobileMenuOpen(false);
    setLanguageOpen(false);
  };

  /* ============================================================
     LANGUAGE
  ============================================================ */

  const selectLanguage = (
    code: "EN" | "TA"
  ) => {
    setLanguage(code);
    setLanguageOpen(false);
  };

  /* ============================================================
     TEXT HELPERS
  ============================================================ */

  const getNavText = (name: string) => {
    return (
      t.nav[name as keyof typeof t.nav] ||
      name
    );
  };

  const getGroupText = (name: string) => {
    return (
      t.groups[
        name as keyof typeof t.groups
      ] || name
    );
  };

  const getProductText = (item: string) => {
    return (
      t.products[
        item as keyof typeof t.products
      ] || item
    );
  };

  const getSolutionText = (item: string) => {
    return (
      t.solutions[
        item as keyof typeof t.solutions
      ] || item
    );
  };

  const getRegularText = (item: string) => {
    return (
      t.regular[
        item as keyof typeof t.regular
      ] || item
    );
  };

  const getProductDescription = (
    item: string
  ) => {
    return language === "TA"
      ? TAMIL_PRODUCT_DESCRIPTIONS[item] ||
          PRODUCT_DESCRIPTIONS[item]
      : PRODUCT_DESCRIPTIONS[item];
  };

  const getSolutionDescription = (
    item: string
  ) => {
    return language === "TA"
      ? TAMIL_SOLUTION_DESCRIPTIONS[item] ||
          SOLUTION_DESCRIPTIONS[item]
      : SOLUTION_DESCRIPTIONS[item];
  };

  /* ============================================================
     DROPDOWN NAVIGATION
  ============================================================ */

  const handleDropdownItem = (
    item: string,
    parent: string
  ) => {
    if (
      parent === "Solutions" &&
      item === "WhatsApp"
    ) {
      setWhatsappOpen(
        (current) => !current
      );

      return;
    }

    if (
      parent === "Solutions" &&
      INDUSTRY_ROUTES[item]
    ) {
      setActiveDropdown(null);
      setWhatsappOpen(false);
      setMobileMenuOpen(false);
      setLanguageOpen(false);

      setPopupForm({
        companyName: "",
        name: "",
        email: "",
        phone: "",
        captchaChecked: false,
        termsAccepted: false,
      });

      setIndustryPopup(item);

      return;
    }

    setActiveDropdown(null);
    setWhatsappOpen(false);
    setMobileMenuOpen(false);

    if (parent === "Products") {
      navigate(
        PRODUCT_ROUTES[item] ||
          "/products"
      );

      return;
    }

    if (parent === "Solutions") {
      if (INDUSTRY_ROUTES[item]) {
        navigate(
          `/solutions/${INDUSTRY_ROUTES[item]}`
        );

        return;
      }

      if (CHANNEL_ROUTES[item]) {
        navigate(
          CHANNEL_ROUTES[item]
        );

        return;
      }

      navigate("/solutions");

      return;
    }

    if (parent === "Integrations") {
      navigate("/integrations");
      return;
    }

    if (parent === "Partnership") {
      navigate("/partnership");
      return;
    }

    if (parent === "Resources") {
      navigate("/resources");
      return;
    }

    navigate("/");
  };

  /* ============================================================
     INDUSTRY POPUP
  ============================================================ */

  const goToSelectedIndustry = () => {
    if (!industryPopup) return;

    const route =
      INDUSTRY_ROUTES[industryPopup];

    setIndustryPopup(null);

    setPopupForm({
      companyName: "",
      name: "",
      email: "",
      phone: "",
      captchaChecked: false,
      termsAccepted: false,
    });

    closeMenus();

    if (route) {
      navigate(
        `/solutions/${route}`
      );
    }
  };

  /* ============================================================
     POPUP ESCAPE + SCROLL LOCK
  ============================================================ */

  useEffect(() => {
    if (!industryPopup) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        goToSelectedIndustry();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [industryPopup]);

  /* ============================================================
     WHATSAPP SOLUTION
  ============================================================ */

  const handleWhatsAppSolution = (
    route: string
  ) => {
    setActiveDropdown(null);
    setWhatsappOpen(false);
    setMobileMenuOpen(false);

    navigate(route);
  };

  /* ============================================================
     SOLUTION ICON
  ============================================================ */

  const SolutionIcon = ({
    item,
  }: {
    item: string;
  }) => {
    const Icon =
      SOLUTION_ICONS[item] ||
      MessageCircle;

    return (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#08A878] transition-all duration-200 group-hover:bg-[#08A878] group-hover:text-white">
        <Icon
          className="h-5 w-5"
          strokeWidth={2.2}
        />
      </div>
    );
  };

  /* ============================================================
     PRODUCT ICON
  ============================================================ */

  const ProductIcon = ({
    item,
  }: {
    item: string;
  }) => {
    const Icon =
      PRODUCT_ICONS[item] ||
      MessageSquare;

    return (
      <Icon
        className="h-[18px] w-[18px]"
        strokeWidth={2.1}
      />
    );
  };

  /* ============================================================
     REGULAR DROPDOWN ICON
  ============================================================ */

  const RegularIcon = ({
    item,
  }: {
    item: string;
  }) => {
    const Icon =
      REGULAR_ICONS[item];

    if (!Icon) return null;

    return (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#08A878] transition-all duration-200 group-hover:bg-[#075E54] group-hover:text-white">
        <Icon
          className="h-[18px] w-[18px]"
          strokeWidth={2.1}
        />
      </div>
    );
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-green-900 bg-[#075E54]/95 shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-md"
            : "bg-[#075E54]"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-3 sm:px-5 lg:px-6">

          {/* LOGO */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={closeMenus}
          >
            <img
              src="/whatsware-logo.png"
              alt="WhatsWare"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            ref={dropdownRef}
             className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:gap-4 xl:gap-5 md:flex"
          >
            {NAV_LINKS.map((link) => {
              const hasDropdown =
                !!link.dropdown ||
                !!link.dropdownGroups;

              const isActive =
                activeDropdown ===
                link.name;

              return (
                <div
                  key={link.name}
                  className="relative"
                >

                  {/* MAIN NAV ITEM */}

                  {hasDropdown ? (
                    <div className="flex items-center">

                      {link.name === "Products" ||
                      link.name === "Solutions" ||
                      !link.href ? (
                        <button
                          type="button"
                          onClick={() =>
                            toggleDropdown(
                              link.name
                            )
                          }
                          className={`flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors ${
                            isActive
                              ? "text-green-200"
                              : "text-white hover:text-green-200"
                          }`}
                        >
                          {getNavText(link.name)}

                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isActive
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <>
                          <Link
                            href={link.href}
                            className={`px-1 py-2 text-sm font-medium transition-colors ${
                              location ===
                              link.href
                                ? "text-green-200"
                                : "text-white hover:text-green-200"
                            }`}
                            onClick={closeMenus}
                          >
                            {getNavText(link.name)}
                          </Link>

                          <button
                            type="button"
                            aria-label={`Open ${getNavText(
                              link.name
                            )} menu`}
                            onClick={() =>
                              toggleDropdown(
                                link.name
                              )
                            }
                            className="flex items-center px-1 py-2 text-white transition-colors hover:text-green-200"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isActive
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        </>
                      )}

                    </div>
                  ) : (
                    <Link
                      href={
                        link.href || "/"
                      }
                      className={`flex items-center px-1 py-2 text-sm font-medium transition-colors ${
                        location ===
                        link.href
                          ? "text-green-200"
                          : "text-white hover:text-green-200"
                      }`}
                      onClick={closeMenus}
                    >
                      {getNavText(link.name)}
                    </Link>
                  )}

                  {/* =================================================
                      PREMIUM PRODUCTS MEGA MENU
                  ================================================= */}

                  {link.name === "Products" &&
                    link.dropdownGroups &&
                    isActive && (
                      <AnimatePresence>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -10,
                            scale: 0.985,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                            scale: 0.985,
                          }}
                          transition={{
                            duration: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="fixed left-1/2 top-[84px] z-[60] w-[1180px] max-w-[calc(100vw-32px)] -translate-x-1/2 overflow-hidden rounded-[24px] border border-[#E6ECE9] bg-white shadow-[0_30px_90px_rgba(7,94,84,0.18)]"
                        >
                          <div className="h-[3px] w-full bg-gradient-to-r from-[#075E54] via-[#08A878] to-[#25D366]" />

                          <div className="grid grid-cols-4 gap-0">
                            {link.dropdownGroups.map(
                              (group, groupIndex) => (
                                <div
                                  key={group.title}
                                  className={`relative px-5 pb-6 pt-6 ${
                                    groupIndex !==
                                    link.dropdownGroups!.length - 1
                                      ? "border-r border-[#EEF2F0]"
                                      : ""
                                  }`}
                                >
                                  <div className="mb-5 px-1">
                                    <div className="flex items-center gap-2">
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#08A878] shadow-[0_0_10px_rgba(8,168,120,0.55)]" />
                                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#526176]">
                                        {getGroupText(group.title)}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="space-y-1">
                                    {group.items.map((item) => {
                                      const isHovered =
                                        hoveredProduct === item;

                                      return (
                                        <motion.button
                                          key={item}
                                          type="button"
                                          onMouseEnter={() =>
                                            setHoveredProduct(item)
                                          }
                                          onFocus={() =>
                                            setHoveredProduct(item)
                                          }
                                          onClick={() =>
                                            handleDropdownItem(
                                              item,
                                              "Products"
                                            )
                                          }
                                          whileHover={{ x: 3 }}
                                          whileTap={{ scale: 0.985 }}
                                          transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 28,
                                          }}
                                          className={`group relative flex w-full items-start gap-3 rounded-[15px] px-2.5 py-2.5 text-left transition-all duration-200 ${
                                            isHovered
                                              ? "bg-[#F0FBF6]"
                                              : "bg-transparent hover:bg-[#F7FBF9]"
                                          }`}
                                        >
                                          <motion.span
                                            initial={false}
                                            animate={{
                                              opacity: isHovered ? 1 : 0,
                                              scaleY: isHovered ? 1 : 0.5,
                                            }}
                                            transition={{ duration: 0.16 }}
                                            className="absolute left-0 top-2.5 h-9 w-[3px] origin-center rounded-full bg-[#08A878]"
                                          />

                                          <motion.div
                                            animate={{
                                              scale: isHovered ? 1.08 : 1,
                                              rotate: isHovered ? -2 : 0,
                                            }}
                                            transition={{
                                              type: "spring",
                                              stiffness: 400,
                                              damping: 20,
                                            }}
                                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] transition-all duration-200 ${
                                              isHovered
                                                ? "bg-[#075E54] text-white shadow-[0_7px_18px_rgba(7,94,84,0.22)]"
                                                : "bg-[#F0F5F3] text-[#075E54]"
                                            }`}
                                          >
                                            <ProductIcon item={item} />
                                          </motion.div>

                                          <div className="min-w-0 flex-1 pt-0.5">
                                            <div className="flex items-center gap-1">
                                              <span
                                                className={`text-[13px] font-semibold leading-[18px] transition-colors duration-200 ${
                                                  isHovered
                                                    ? "text-[#075E54]"
                                                    : "text-[#151A19]"
                                                }`}
                                              >
                                                {getProductText(item)}
                                              </span>

                                              <motion.span
                                                initial={false}
                                                animate={{
                                                  opacity: isHovered ? 1 : 0,
                                                  x: isHovered ? 0 : -4,
                                                }}
                                                className="shrink-0 text-[#08A878]"
                                              >
                                                <ArrowRight className="h-3.5 w-3.5" />
                                              </motion.span>
                                            </div>

                                            <p
                                              className={`mt-1 text-[10.5px] leading-[15px] transition-colors duration-200 ${
                                                isHovered
                                                  ? "text-[#55746B]"
                                                  : "text-[#7B8582]"
                                              }`}
                                            >
                                              {getProductDescription(item)}
                                            </p>
                                          </div>
                                        </motion.button>
                                      );
                                    })}
                                  </div>
                                </div>
                              )
                            )}
                          </div>

                          <div className="relative overflow-hidden border-t border-[#E9EFEC] bg-[#F8FCFA]">
                            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#25D366]/10 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-32 right-10 h-64 w-64 rounded-full bg-[#075E54]/10 blur-3xl" />

                            <div className="relative grid grid-cols-[1fr_360px] items-center gap-8 px-7 py-5">
                              <div>
                                <div className="mb-2 flex items-center gap-2">
                                  <motion.span
                                    animate={{
                                      scale: [1, 1.2, 1],
                                      opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                      duration: 1.8,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                    className="h-2 w-2 rounded-full bg-[#25D366] shadow-[0_0_12px_rgba(37,211,102,0.7)]"
                                  />

                                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#08A878]">
                                    WhatsWare Product Suite
                                  </span>
                                </div>

                                <AnimatePresence mode="wait">
                                  <motion.div
                                    key={
                                      hoveredProduct ||
                                      "WhatsApp AI Agents"
                                    }
                                    initial={{
                                      opacity: 0,
                                      y: 6,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      y: 0,
                                    }}
                                    exit={{
                                      opacity: 0,
                                      y: -6,
                                    }}
                                    transition={{ duration: 0.18 }}
                                  >
                                    <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#10211D]">
                                      {getProductText(
                                        hoveredProduct ||
                                          "WhatsApp AI Agents"
                                      )}
                                    </h3>

                                    <p className="mt-1 max-w-[600px] text-[11px] leading-5 text-[#66736F]">
                                      {getProductDescription(
                                        hoveredProduct ||
                                          "WhatsApp AI Agents"
                                      )}
                                    </p>
                                  </motion.div>
                                </AnimatePresence>

                                <button
                                  type="button"
                                  onClick={() => {
                                    navigate("/products");
                                    closeMenus();
                                  }}
                                  className="group mt-3 inline-flex items-center gap-2 rounded-full bg-[#075E54] px-4 py-2 text-[11px] font-semibold text-white shadow-[0_7px_20px_rgba(7,94,84,0.2)] transition-all duration-200 hover:bg-[#064C44] hover:shadow-[0_10px_25px_rgba(7,94,84,0.28)]"
                                >
                                  {t.buttons.explore}

                                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                                </button>
                              </div>

                              <div className="relative h-[132px] overflow-hidden rounded-[18px] border border-[#DCEBE5] bg-white shadow-[0_15px_35px_rgba(7,94,84,0.09)]">
                                <div className="flex h-8 items-center gap-1.5 border-b border-[#EDF2F0] bg-[#FBFDFC] px-3">
                                  <span className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
                                  <span className="h-2 w-2 rounded-full bg-[#FFC857]" />
                                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                                  <div className="ml-3 h-4 flex-1 rounded-full bg-[#F0F4F2]" />
                                </div>

                                <div className="relative h-[104px] p-3">
                                  <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{
                                      duration: 2.4,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#075E54] text-white shadow-[0_8px_18px_rgba(7,94,84,0.25)]"
                                  >
                                    <Bot className="h-4 w-4" />
                                  </motion.div>

                                  <motion.div
                                    animate={{ x: [0, 2, 0] }}
                                    transition={{
                                      duration: 2.2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                    className="absolute left-3 top-7 max-w-[170px] rounded-[10px] rounded-tl-[3px] bg-[#F0F5F3] px-3 py-2"
                                  >
                                    <div className="h-1.5 w-24 rounded-full bg-[#B8C7C2]" />
                                    <div className="mt-1.5 h-1.5 w-32 rounded-full bg-[#D0DAD6]" />
                                  </motion.div>

                                  <motion.div
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      delay: 0.5,
                                    }}
                                    className="absolute bottom-4 right-3 max-w-[180px] rounded-[10px] rounded-br-[3px] bg-[#D9F8ED] px-3 py-2"
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#08A878]" />
                                      <span className="h-1.5 w-20 rounded-full bg-[#79C9AE]" />
                                    </div>

                                    <div className="mt-1.5 h-1.5 w-28 rounded-full bg-[#A7DCC8]" />
                                  </motion.div>

                                  <div className="absolute bottom-5 left-4 flex items-center gap-1">
                                    {[0, 0.15, 0.3].map((delay) => (
                                      <motion.span
                                        key={delay}
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{
                                          duration: 0.8,
                                          repeat: Infinity,
                                          delay,
                                        }}
                                        className="h-1.5 w-1.5 rounded-full bg-[#08A878]"
                                      />
                                    ))}
                                  </div>
                                </div>

                                <motion.div
                                  animate={{ x: ["-100%", "420%"] }}
                                  transition={{
                                    duration: 2.8,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                  className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-20 bg-gradient-to-r from-transparent via-[#25D366] to-transparent opacity-80"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}

                  {/* =================================================
                      SOLUTIONS MEGA MENU
                  ================================================= */}

                  {link.name === "Solutions" &&
                    link.dropdownGroups &&
                    isActive && (
                      <div className="fixed left-1/2 top-[84px] z-[60] w-[860px] max-w-[calc(100vw-32px)] -translate-x-1/2 overflow-visible rounded-3xl border border-gray-100 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.18)]">

                        <div className="grid grid-cols-[260px_1fr]">

                          {/* CHANNELS */}

                          <div className="border-r border-gray-100 bg-[#FAFFFD] p-6">

                            <div className="mb-5">
                              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#08A878]">
                                {getGroupText("Channels")}
                              </p>

                              <p className="mt-1 text-xs text-gray-400">
                                {t.groupDescriptions.channels}
                              </p>
                            </div>

                            <div className="space-y-2">
                              {link.dropdownGroups[0].items.map(
                                (item) => (
                                  <div
                                    key={item}
                                    className="relative"
                                  >
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleDropdownItem(
                                          item,
                                          link.name
                                        )
                                      }
                                      className={`group flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-all ${
                                        item ===
                                          "WhatsApp" &&
                                        whatsappOpen
                                          ? "bg-[#E7FBF3] text-[#075E54]"
                                          : "text-gray-700 hover:bg-[#E7FBF3] hover:text-[#075E54]"
                                      }`}
                                    >
                                      <SolutionIcon
                                        item={item}
                                      />

                                      <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                          <span className="text-sm font-semibold">
                                            {getSolutionText(item)}
                                          </span>

                                          <ChevronDown
                                            className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                                              item ===
                                                "WhatsApp" &&
                                              whatsappOpen
                                                ? "rotate-180"
                                                : ""
                                            }`}
                                          />
                                        </div>

                                        <p className="mt-0.5 text-[10px] leading-4 text-gray-400">
                                          {getSolutionDescription(item)}
                                        </p>
                                      </div>
                                    </button>

                                    {/* WHATSAPP SUBMENU */}

                                    {item ===
                                      "WhatsApp" &&
                                      whatsappOpen && (
                                        <div className="absolute left-full top-0 z-[70] ml-3 w-[330px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

                                          <div className="mb-2 border-b border-gray-100 px-3 pb-3 pt-2">
                                            <div className="flex items-center gap-3">
                                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#08A878]">
                                                <MessageCircle className="h-5 w-5" />
                                              </div>

                                              <div>
                                                <h4 className="text-sm font-bold text-[#075E54]">
                                                  {t.whatsapp.title}
                                                </h4>

                                                <p className="mt-0.5 text-[11px] text-gray-400">
                                                  {t.whatsapp.description}
                                                </p>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="max-h-[480px] overflow-y-auto">
                                            {WHATSAPP_SOLUTIONS.map(
                                              (solution) => (
                                                <button
                                                  key={solution.name}
                                                  type="button"
                                                  onClick={() =>
                                                    handleWhatsAppSolution(
                                                      solution.route
                                                    )
                                                  }
                                                  className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-gray-600 transition-colors hover:bg-green-50 hover:text-[#075E54]"
                                                >
                                                  <span>
                                                    {solution.name}
                                                  </span>

                                                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                                </button>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )}
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* INDUSTRIES */}

                          <div className="p-6">
                            <div className="mb-5">
                              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#08A878]">
                                {getGroupText("Industries")}
                              </p>

                              <p className="mt-1 text-xs text-gray-400">
                                {t.groupDescriptions.industries}
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {link.dropdownGroups[1].items.map(
                                (item) => (
                                  <button
                                    key={item}
                                    type="button"
                                    onClick={() =>
                                      handleDropdownItem(
                                        item,
                                        link.name
                                      )
                                    }
                                    className="group flex min-h-[72px] items-center gap-3 rounded-2xl p-3 text-left transition-all hover:bg-[#E7FBF3]"
                                  >
                                    <SolutionIcon item={item} />

                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-[#075E54]">
                                          {getSolutionText(item)}
                                        </span>

                                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#08A878] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                      </div>

                                      <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-gray-400">
                                        {getSolutionDescription(item)}
                                      </p>
                                    </div>
                                  </button>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  {/* =================================================
                      REGULAR DROPDOWN
                  ================================================= */}

                  {link.dropdown &&
                    !link.dropdownGroups &&
                    isActive && (
                      <div className="absolute left-1/2 top-full mt-2 w-[285px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#E6ECE9] bg-white py-2 shadow-[0_18px_50px_rgba(7,94,84,0.16)]">

                        {link.dropdown.map(
                          (item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() =>
                                handleDropdownItem(
                                  item,
                                  link.name
                                )
                              }
                              className="group flex w-full items-center gap-3 px-3 py-2.5 text-left transition-all duration-200 hover:bg-[#F0FBF6]"
                            >

                              {/* ICON */}

                              <RegularIcon item={item} />

                              {/* TEXT */}

                              <div className="min-w-0 flex-1">
                                <span className="block text-[13px] font-semibold text-[#18201D] transition-colors group-hover:text-[#075E54]">
                                  {getRegularText(item)}
                                </span>
                              </div>

                              {/* ARROW */}

                              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#08A878] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />

                            </button>
                          )
                        )}

                      </div>
                    )}

                </div>
              );
            })}
          </nav>

          {/* ==================================================
              DESKTOP BUTTONS
          ================================================== */}

          <div className="hidden shrink-0 items-center gap-2 md:flex">

            {/* SIGN IN */}

            <button
              type="button"
              onClick={() => {
                navigate("/login");
                closeMenus();
              }}
              className="whitespace-nowrap rounded-full border border-white/30 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-all hover:border-[#075E54] hover:text-[#075E54] hover:shadow-sm"
            >
              {t.buttons.signIn}
            </button>

            {/* BOOK DEMO */}

            <Link
              href="/book-demo"
              className="group flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-[#0e7c39] hover:shadow-md"
                onClick={closeMenus}
            >
              {t.buttons.demo}

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* LANGUAGE SWITCHER */}

            <div
              ref={languageRef}
              className="relative z-[100] shrink-0"
            >
              <button
                type="button"
                onClick={() => {
                  setLanguageOpen((current) => !current);
                  setActiveDropdown(null);
                  setWhatsappOpen(false);
                }}
                className="flex min-w-[72px] shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/20 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:text-green-200"
                aria-label="Select language"
                aria-expanded={languageOpen}
              >
                <Globe2 className="h-4 w-4 shrink-0" />

                <span className="whitespace-nowrap">
                 {language === "EN" ? "EN" : "TA"}
                </span>

                <ChevronDown
                  className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
                </button>

                {languageOpen && (
                  <div className="absolute right-0 top-full mt-3 z-[9999] w-52 overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-[0_15px_50px_rgba(0,0,0,0.18)]">

                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => selectLanguage(lang.code)}
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors ${
                          language === lang.code
                            ? "bg-green-50 text-[#075E54]"
                            : "text-gray-700 hover:bg-green-50 hover:text-[#075E54]"
                        }`}
                      >
                        <span className="text-xl">
                          {lang.flag}
                        </span>

                        <span className="flex-1">
                          {lang.name}
                        </span>

                        {language === lang.code && (
                          <Check className="h-4 w-4 text-[#075E54]" />
                        )}
                      </button>
                    ))}

                  </div>
              )}
            </div>

          </div>

          {/* ==================================================
              MOBILE BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(
                (current) =>
                  !current
              );

              setActiveDropdown(null);
              setWhatsappOpen(false);
            }}
            className="rounded-md p-2 text-white hover:bg-white/10 focus:outline-none md:hidden"
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>

        {/* ======================================================
            MOBILE NAVIGATION
        ======================================================= */}

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-white shadow-lg md:hidden">

            <div className="max-h-[80vh] overflow-y-auto px-4 py-5">

              <div className="space-y-2">

                {NAV_LINKS.map(
                  (link) => {
                    const hasDropdown =
                      !!link.dropdown ||
                      !!link.dropdownGroups;

                    return (
                      <div
                        key={link.name}
                      >

                        {hasDropdown ? (
                          <>

                            <div className="flex items-center">

                              {link.name ===
                                "Products" ||
                              link.name ===
                                "Solutions" ||
                              !link.href ? (
                                <button
                                  type="button"
                                  className="flex-1 rounded-lg px-3 py-3 text-left font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-[#075E54]"
                                  onClick={() =>
                                    toggleDropdown(
                                      link.name
                                    )
                                  }
                                >
                                  {getNavText(
                                    link.name
                                  )}
                                </button>
                              ) : (
                                <Link
                                  href={
                                    link.href
                                  }
                                  className="flex-1 rounded-lg px-3 py-3 font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-[#075E54]"
                                  onClick={
                                    closeMenus
                                  }
                                >
                                  {getNavText(
                                    link.name
                                  )}
                                </Link>
                              )}

                              <button
                                type="button"
                                className="rounded-lg px-3 py-3 text-gray-700 transition-colors hover:bg-green-50 hover:text-[#075E54]"
                                onClick={() =>
                                  toggleDropdown(
                                    link.name
                                  )
                                }
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    activeDropdown ===
                                    link.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                            </div>

                            {/* MOBILE GROUPED DROPDOWN */}

                            {link.dropdownGroups &&
                              activeDropdown ===
                                link.name && (
                                <div className="ml-4 space-y-5 border-l-2 border-gray-100 pl-5">

                                  {link.dropdownGroups.map(
                                    (group) => (
                                      <div
                                        key={
                                          group.title
                                        }
                                      >

                                        <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-[#075E54]">
                                          {getGroupText(
                                            group.title
                                          )}
                                        </h3>

                                        <div className="space-y-1">

                                          {group.items.map(
                                            (item) => (
                                              <button
                                                key={
                                                  item
                                                }
                                                type="button"
                                                onClick={() =>
                                                  handleDropdownItem(
                                                    item,
                                                    link.name
                                                  )
                                                }
                                                className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-gray-600 transition-colors hover:bg-green-50 hover:text-[#075E54]"
                                              >

                                                {link.name ===
                                                "Products" ? (
                                                  <ProductIcon
                                                    item={
                                                      item
                                                    }
                                                  />
                                                ) : (
                                                  <SolutionIcon
                                                    item={
                                                      item
                                                    }
                                                  />
                                                )}

                                                <div className="min-w-0 flex-1">

                                                  <div className="flex items-center justify-between">

                                                    <span className="text-sm font-medium">
                                                      {link.name ===
                                                      "Products"
                                                        ? getProductText(
                                                            item
                                                          )
                                                        : getSolutionText(
                                                            item
                                                          )}
                                                    </span>

                                                    <ArrowRight className="h-3.5 w-3.5 text-[#08A878] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />

                                                  </div>

                                                  <p className="mt-0.5 text-[10px] leading-4 text-gray-400">
                                                    {link.name ===
                                                    "Products"
                                                      ? getProductDescription(
                                                          item
                                                        )
                                                      : getSolutionDescription(
                                                          item
                                                        )}
                                                  </p>

                                                </div>

                                              </button>
                                            )
                                          )}

                                        </div>

                                      </div>
                                    )
                                  )}

                                </div>
                              )}

                            {/* MOBILE REGULAR DROPDOWN */}

                            {link.dropdown &&
                              !link.dropdownGroups &&
                              activeDropdown ===
                                link.name && (
                                <div className="ml-4 space-y-1 border-l-2 border-gray-100 pl-5">

                                  {link.dropdown.map(
                                    (item) => (
                                      <button
                                        key={
                                          item
                                        }
                                        type="button"
                                        onClick={() =>
                                          handleDropdownItem(
                                            item,
                                            link.name
                                          )
                                        }
                                        className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-gray-600 transition-all hover:bg-green-50 hover:text-[#075E54]"
                                      >

                                        {/* ICON */}

                                        <RegularIcon
                                          item={item}
                                        />

                                        {/* TEXT */}

                                        <span className="flex-1 text-sm font-medium">
                                          {getRegularText(
                                            item
                                          )}
                                        </span>

                                        {/* ARROW */}

                                        <ArrowRight className="h-3.5 w-3.5 text-[#08A878] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />

                                      </button>
                                    )
                                  )}

                                </div>
                              )}

                          </>
                        ) : (
                          <Link
                            href={
                              link.href ||
                              "/"
                            }
                            className="block rounded-lg px-3 py-3 font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-[#075E54]"
                            onClick={
                              closeMenus
                            }
                          >
                            {getNavText(
                              link.name
                            )}
                          </Link>
                        )}

                      </div>
                    );
                  }
                )}

              </div>

              {/* MOBILE BUTTONS */}

              <div className="flex flex-col gap-3 px-3 pt-5">

                <button
                  type="button"
                  onClick={() => {
                    navigate(
                      "/login"
                    );
                    closeMenus();
                  }}
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-center font-medium text-gray-700 transition-colors hover:border-[#075E54] hover:text-[#075E54]"
                >
                  {t.buttons.signIn}
                </button>

                <Link
                  href="/book-demo"
                  className="w-full rounded-full bg-primary px-4 py-2.5 text-center font-medium text-white transition-colors hover:bg-[#0e7c39]"
                  onClick={
                    closeMenus
                  }
                >
                  {t.buttons.demo}
                </Link>

                {/* MOBILE LANGUAGE */}

                <div className="mt-2 border-t border-gray-100 pt-4">

                  <p className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    {t.buttons.language}
                  </p>

                  <div className="grid grid-cols-2 gap-2">

                    {languages.map(
                      (lang) => (
                        <button
                          key={
                            lang.code
                          }
                          type="button"
                          onClick={() =>
                            selectLanguage(
                              lang.code
                            )
                          }
                          className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                            language ===
                            lang.code
                              ? "border-[#075E54] bg-green-50 text-[#075E54]"
                              : "border-gray-200 bg-white text-gray-700 hover:bg-green-50"
                          }`}
                        >

                          <span>
                            {lang.flag}
                          </span>

                          <span>
                            {lang.name}
                          </span>

                          {language ===
                            lang.code && (
                            <Check className="h-4 w-4" />
                          )}

                        </button>
                      )
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          INDUSTRY POPUP
      ========================================================== */}

      {industryPopup && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/55 p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="industry-popup-title"
        >

          <div className="relative max-h-[92vh] w-full max-w-[620px] overflow-y-auto rounded-[22px] bg-[#f4f4f4] shadow-[0_24px_70px_rgba(0,0,0,0.35)]">

            {/* CLOSE */}

            <button
              type="button"
              onClick={
                goToSelectedIndustry
              }
              aria-label="Close and open industry page"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all hover:scale-105 hover:bg-gray-50 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="px-5 pb-6 pt-6 sm:px-8 sm:pb-7 sm:pt-7">

              <div className="pr-10 sm:pr-12">

                <h2
                  id="industry-popup-title"
                  className="text-2xl font-semibold tracking-tight text-black sm:text-3xl"
                >
                  {t.popup.title}
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-800 sm:text-base sm:leading-7">
                  {t.popup.description}
                </p>

              </div>

              {/* INDUSTRY */}

              <div className="mt-5 sm:mt-6">

                <label className="mb-1.5 block text-xs font-medium text-gray-500">
                  {t.popup.industry}
                </label>

                <div className="flex h-11 items-center justify-between rounded-xl border border-[#0aa99d] bg-white px-3 text-sm text-gray-700 sm:h-12 sm:px-4 sm:text-base">

                  <span>
                    {getSolutionText(
                      industryPopup
                    )}
                  </span>

                  <ChevronDown className="h-4 w-4 text-gray-500" />

                </div>
              </div>

              {/* COMPANY + NAME */}

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <input
                  type="text"
                  value={
                    popupForm.companyName
                  }
                  onChange={(event) =>
                    setPopupForm(
                      (current) => ({
                        ...current,
                        companyName:
                          event.target
                            .value,
                      })
                    )
                  }
                  placeholder={
                    t.popup.company
                  }
                  className="h-11 rounded-xl border-0 bg-white px-3 text-sm text-gray-800 outline-none ring-1 ring-transparent placeholder:text-gray-500 focus:ring-[#0aa99d] sm:h-12 sm:px-4 sm:text-base"
                />

                <input
                  type="text"
                  value={
                    popupForm.name
                  }
                  onChange={(event) =>
                    setPopupForm(
                      (current) => ({
                        ...current,
                        name:
                          event.target
                            .value,
                      })
                    )
                  }
                  placeholder={
                    t.popup.name
                  }
                  className="h-11 rounded-xl border-0 bg-white px-3 text-sm text-gray-800 outline-none ring-1 ring-transparent placeholder:text-gray-500 focus:ring-[#0aa99d] sm:h-12 sm:px-4 sm:text-base"
                />
              </div>

              {/* EMAIL + PHONE */}

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1.35fr]">

                <input
                  type="email"
                  value={
                    popupForm.email
                  }
                  onChange={(event) =>
                    setPopupForm(
                      (current) => ({
                        ...current,
                        email:
                          event.target
                            .value,
                      })
                    )
                  }
                  placeholder={
                    t.popup.email
                  }
                  className="h-11 rounded-xl border-0 bg-white px-3 text-sm text-gray-800 outline-none ring-1 ring-transparent placeholder:text-gray-500 focus:ring-[#0aa99d] sm:h-12 sm:px-4 sm:text-base"
                />

                <div className="flex gap-2">

                  <div className="flex h-11 w-[78px] shrink-0 items-center justify-center gap-1.5 rounded-xl bg-white text-sm text-gray-700 sm:h-12 sm:w-[84px] sm:text-base">
                    <span>+91</span>

                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>

                  <input
                    type="tel"
                    value={
                      popupForm.phone
                    }
                    onChange={(event) =>
                      setPopupForm(
                        (current) => ({
                          ...current,
                          phone:
                            event.target
                              .value,
                        })
                      )
                    }
                    placeholder={
                      t.popup.phone
                    }
                    className="h-11 min-w-0 flex-1 rounded-xl border-0 bg-white px-3 text-sm text-gray-800 outline-none ring-1 ring-transparent placeholder:text-gray-500 focus:ring-[#0aa99d] sm:h-12 sm:px-4 sm:text-base"
                  />
                </div>
              </div>

              {/* CAPTCHA */}

              <button
                type="button"
                onClick={() =>
                  setPopupForm(
                    (current) => ({
                      ...current,
                      captchaChecked:
                        !current.captchaChecked,
                    })
                  )
                }
                className="mt-4 flex h-[78px] w-full max-w-[390px] items-center justify-between rounded-sm border border-gray-300 bg-white px-3 text-left shadow-sm transition hover:bg-gray-50 sm:h-[82px] sm:px-4"
              >

                <div className="flex items-center gap-3">

                  <span
                    className={`flex h-8 w-8 items-center justify-center border-2 ${
                      popupForm.captchaChecked
                        ? "border-[#0aa99d] bg-[#0aa99d]"
                        : "border-gray-500 bg-white"
                    }`}
                  >
                    {popupForm.captchaChecked && (
                      <Check className="h-5 w-5 text-white" />
                    )}
                  </span>

                  <span className="text-sm text-gray-900 sm:text-base">
                    {t.popup.robot}
                  </span>

                </div>

                <div className="flex flex-col items-center text-gray-500">

                  <span className="text-4xl leading-none text-blue-500">
                    ↻
                  </span>

                  <span className="mt-1 text-xs">
                    reCAPTCHA
                  </span>

                </div>
              </button>

              {/* TERMS */}

              <button
                type="button"
                onClick={() =>
                  setPopupForm(
                    (current) => ({
                      ...current,
                      termsAccepted:
                        !current.termsAccepted,
                    })
                  )
                }
                className="mt-4 flex items-center gap-3 text-left"
              >

                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
                    popupForm.termsAccepted
                      ? "border-[#0aa99d] bg-[#0aa99d]"
                      : "border-gray-500 bg-white"
                  }`}
                >
                  {popupForm.termsAccepted && (
                    <Check className="h-4 w-4 text-white" />
                  )}
                </span>

                <span className="text-sm text-gray-900 sm:text-base">
                  {t.popup.terms}
                </span>

              </button>

              {/* BUTTONS */}

              <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">

                <button
                  type="button"
                  onClick={
                    goToSelectedIndustry
                  }
                  className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  {t.popup.cancel}
                </button>

                <button
                  type="button"
                  onClick={
                    goToSelectedIndustry
                  }
                  className="rounded-full bg-[#0aa99d] px-7 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#078f85] hover:shadow-md"
                >
                  {t.popup.submit}
                </button>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}