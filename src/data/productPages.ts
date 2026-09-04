import type { ElementType } from "react";
import {
MessageSquareText,
Bot,
Workflow,
BarChart3,
Layers3,
} from "lucide-react";

export type ProductLanguage = "en" | "ta";

export type ProductFeature = {
en: string;
ta: string;
};

export type ProductBenefit = {
title: {
en: string;
ta: string;
};
description: {
en: string;
ta: string;
};
};

export type ProductUseCase = {
title: {
en: string;
ta: string;
};
description: {
en: string;
ta: string;
};
};

export type ProductPage = {
id: string;

title: {
en: string;
ta: string;
};

shortTitle: {
en: string;
ta: string;
};

heroDescription: {
en: string;
ta: string;
};

badge: {
en: string;
ta: string;
};

href: string;

icon: ElementType;

features: ProductFeature[];

benefits: ProductBenefit[];

useCases: ProductUseCase[];
};

export const productPages: ProductPage[] = [
{
id: "whatsapp-automation",
title: {
  en: "WhatsApp Automation",
  ta: "WhatsApp தானியக்கம்",
},

shortTitle: {
  en: "WhatsApp Automation",
  ta: "WhatsApp தானியக்கம்",
},

heroDescription: {
  en: "Automate customer conversations, lead capture, follow-ups, and everyday business communication on WhatsApp.",
  ta: "WhatsApp-ல் வாடிக்கையாளர் உரையாடல்கள், விற்பனை வாய்ப்பு சேகரிப்பு, தொடர்ச்சியான தொடர்புகள் மற்றும் தினசரி வணிகத் தகவல்தொடர்புகளை தானியக்கமாக்குங்கள்.",
},

badge: {
  en: "Automation",
  ta: "தானியக்கம்",
},

href: "/products/whatsapp-automation",

icon: MessageSquareText,

features: [
  {
    en: "Automated customer replies",
    ta: "தானியங்கி வாடிக்கையாளர் பதில்கள்",
  },
  {
    en: "Lead capture",
    ta: "விற்பனை வாய்ப்பு சேகரிப்பு",
  },
  {
    en: "Instant follow-ups",
    ta: "உடனடி தொடர்ச்சியான தொடர்புகள்",
  },
  {
    en: "WhatsApp Business API",
    ta: "WhatsApp Business API",
  },
  {
    en: "Automated notifications",
    ta: "தானியங்கி அறிவிப்புகள்",
  },
  {
    en: "Smart customer journeys",
    ta: "புத்திசாலித்தனமான வாடிக்கையாளர் பயணங்கள்",
  },
],

benefits: [
  {
    title: {
      en: "Save Time",
      ta: "நேரத்தை சேமிக்கவும்",
    },
    description: {
      en: "Automate repetitive conversations and reduce manual work for your team.",
      ta: "மீண்டும் மீண்டும் செய்யப்படும் உரையாடல்களை தானியக்கமாக்கி உங்கள் குழுவின் கைமுறை பணிகளை குறைக்கவும்.",
    },
  },
  {
    title: {
      en: "Respond Faster",
      ta: "வேகமாக பதிலளிக்கவும்",
    },
    description: {
      en: "Give customers quick and consistent responses whenever they need them.",
      ta: "வாடிக்கையாளர்களுக்கு தேவையான நேரத்தில் விரைவான மற்றும் ஒரே மாதிரியான பதில்களை வழங்குங்கள்.",
    },
  },
  {
    title: {
      en: "Grow Efficiently",
      ta: "திறமையாக வளருங்கள்",
    },
    description: {
      en: "Handle more customer conversations without increasing your workload.",
      ta: "உங்கள் பணிச்சுமையை அதிகரிக்காமல் அதிகமான வாடிக்கையாளர் உரையாடல்களை கையாளுங்கள்.",
    },
  },
],

useCases: [
  {
    title: {
      en: "Lead Follow-ups",
      ta: "விற்பனை வாய்ப்பு தொடர்ச்சியான தொடர்புகள்",
    },
    description: {
      en: "Automatically follow up with leads and keep conversations moving.",
      ta: "விற்பனை வாய்ப்புகளுடன் தானாக தொடர்ந்து தொடர்பு கொண்டு உரையாடல்களை முன்னெடுக்கவும்.",
    },
  },
  {
    title: {
      en: "Customer Support",
      ta: "வாடிக்கையாளர் ஆதரவு",
    },
    description: {
      en: "Answer common customer questions instantly through WhatsApp.",
      ta: "WhatsApp மூலம் பொதுவான வாடிக்கையாளர் கேள்விகளுக்கு உடனடியாக பதிலளிக்கவும்.",
    },
  },
  {
    title: {
      en: "Notifications",
      ta: "அறிவிப்புகள்",
    },
    description: {
      en: "Send order updates, reminders, confirmations, and important notifications automatically.",
      ta: "ஆர்டர் புதுப்பிப்புகள், நினைவூட்டல்கள், உறுதிப்படுத்தல்கள் மற்றும் முக்கிய அறிவிப்புகளை தானாக அனுப்புங்கள்.",
    },
  },
],

},

{
id: "ai-conversations",
title: {
  en: "AI Conversations",
  ta: "AI உரையாடல்கள்",
},

shortTitle: {
  en: "AI Conversations",
  ta: "AI உரையாடல்கள்",
},

heroDescription: {
  en: "Let AI handle customer conversations naturally while your team focuses on the conversations that matter most.",
  ta: "AI மூலம் வாடிக்கையாளர் உரையாடல்களை இயல்பாக கையாளுங்கள். உங்கள் குழு முக்கியமான உரையாடல்களில் கவனம் செலுத்தலாம்.",
},

badge: {
  en: "AI Powered",
  ta: "AI இயக்கம்",
},

href: "/products/ai-agents",

icon: Bot,

features: [
  {
    en: "24/7 AI assistance",
    ta: "24/7 AI உதவி",
  },
  {
    en: "Intent detection",
    ta: "வாடிக்கையாளர் நோக்கம் கண்டறிதல்",
  },
  {
    en: "Smart responses",
    ta: "புத்திசாலித்தனமான பதில்கள்",
  },
  {
    en: "Human handoff",
    ta: "மனிதரிடம் மாற்றுதல்",
  },
  {
    en: "Natural conversations",
    ta: "இயல்பான உரையாடல்கள்",
  },
  {
    en: "Instant customer support",
    ta: "உடனடி வாடிக்கையாளர் ஆதரவு",
  },
],

benefits: [
  {
    title: {
      en: "Always Available",
      ta: "எப்போதும் கிடைக்கும்",
    },
    description: {
      en: "AI can respond to customers 24/7, even outside business hours.",
      ta: "வணிக நேரத்திற்கு வெளியிலும் AI வாடிக்கையாளர்களுக்கு 24/7 பதிலளிக்க முடியும்.",
    },
  },
  {
    title: {
      en: "Smarter Conversations",
      ta: "புத்திசாலித்தனமான உரையாடல்கள்",
    },
    description: {
      en: "Understand customer intent and provide more relevant responses.",
      ta: "வாடிக்கையாளர் நோக்கத்தை புரிந்து கொண்டு மிகவும் பொருத்தமான பதில்களை வழங்குங்கள்.",
    },
  },
  {
    title: {
      en: "Human Handoff",
      ta: "மனிதரிடம் மாற்றுதல்",
    },
    description: {
      en: "Move important conversations to your team whenever human support is needed.",
      ta: "மனித ஆதரவு தேவைப்படும் போது முக்கியமான உரையாடல்களை உங்கள் குழுவிடம் மாற்றுங்கள்.",
    },
  },
],

useCases: [
  {
    title: {
      en: "Customer Questions",
      ta: "வாடிக்கையாளர் கேள்விகள்",
    },
    description: {
      en: "Answer frequently asked questions instantly with AI.",
      ta: "அடிக்கடி கேட்கப்படும் கேள்விகளுக்கு AI மூலம் உடனடியாக பதிலளிக்கவும்.",
    },
  },
  {
    title: {
      en: "Lead Qualification",
      ta: "விற்பனை வாய்ப்பு தகுதி நிர்ணயம்",
    },
    description: {
      en: "Understand customer requirements and identify high-quality leads.",
      ta: "வாடிக்கையாளர் தேவைகளை புரிந்து கொண்டு தரமான விற்பனை வாய்ப்புகளை கண்டறியுங்கள்.",
    },
  },
  {
    title: {
      en: "24/7 Support",
      ta: "24/7 ஆதரவு",
    },
    description: {
      en: "Provide instant assistance to customers at any time.",
      ta: "எந்த நேரத்திலும் வாடிக்கையாளர்களுக்கு உடனடி உதவியை வழங்குங்கள்.",
    },
  },
],
},

{
id: "workflow-builder",
title: {
  en: "Workflow Builder",
  ta: "பணிப்பாய்வு உருவாக்கி",
},

shortTitle: {
  en: "Workflow Builder",
  ta: "பணிப்பாய்வு உருவாக்கி",
},

heroDescription: {
  en: "Build powerful customer journeys and automate repetitive business processes without complicated coding.",
  ta: "சிக்கலான coding இல்லாமல் சக்திவாய்ந்த வாடிக்கையாளர் பயணங்களை உருவாக்கி மீண்டும் மீண்டும் செய்யப்படும் வணிக செயல்முறைகளை தானியக்கமாக்குங்கள்.",
},

badge: {
  en: "Automation",
  ta: "தானியக்கம்",
},

href: "/products/workflow-builder",

icon: Workflow,

features: [
  {
    en: "Visual workflow builder",
    ta: "காட்சி பணிப்பாய்வு உருவாக்கி",
  },
  {
    en: "Automated triggers",
    ta: "தானியங்கி தூண்டுதல்கள்",
  },
  {
    en: "Conditional actions",
    ta: "நிபந்தனை செயல்கள்",
  },
  {
    en: "Multi-step journeys",
    ta: "பல படி வாடிக்கையாளர் பயணங்கள்",
  },
  {
    en: "Automated follow-ups",
    ta: "தானியங்கி தொடர்ச்சியான தொடர்புகள்",
  },
  {
    en: "Business process automation",
    ta: "வணிக செயல்முறை தானியக்கம்",
  },
],

benefits: [
  {
    title: {
      en: "Automation",
      ta: "தானியக்கம்",
    },
    description: {
      en: "Build powerful workflows without needing complicated programming.",
      ta: "சிக்கலான programming இல்லாமல் சக்திவாய்ந்த பணிப்பாய்வுகளை உருவாக்குங்கள்.",
    },
  },
  {
    title: {
      en: "Consistent Processes",
      ta: "நிலையான செயல்முறைகள்",
    },
    description: {
      en: "Create reliable customer journeys that work the same way every time.",
      ta: "ஒவ்வொரு முறையும் ஒரே மாதிரி செயல்படும் நம்பகமான வாடிக்கையாளர் பயணங்களை உருவாக்குங்கள்.",
    },
  },
  {
    title: {
      en: "Scale Faster",
      ta: "வேகமாக விரிவடையுங்கள்",
    },
    description: {
      en: "Automate more processes as your business and customer base grows.",
      ta: "உங்கள் வணிகமும் வாடிக்கையாளர் எண்ணிக்கையும் வளரும்போது அதிக செயல்முறைகளை தானியக்கமாக்குங்கள்.",
    },
  },
],

useCases: [
  {
    title: {
      en: "Lead Journeys",
      ta: "விற்பனை வாய்ப்பு பயணங்கள்",
    },
    description: {
      en: "Create automated journeys from first contact to conversion.",
      ta: "முதல் தொடர்பிலிருந்து மாற்றம் வரை தானியங்கி வாடிக்கையாளர் பயணங்களை உருவாக்குங்கள்.",
    },
  },
  {
    title: {
      en: "Follow-ups",
      ta: "தொடர்ச்சியான தொடர்புகள்",
    },
    description: {
      en: "Automatically send follow-up messages based on customer actions.",
      ta: "வாடிக்கையாளர் செயல்பாடுகளின் அடிப்படையில் தானாக தொடர்ச்சியான செய்திகளை அனுப்புங்கள்.",
    },
  },
  {
    title: {
      en: "Notifications",
      ta: "அறிவிப்புகள்",
    },
    description: {
      en: "Automate reminders, confirmations, updates, and notifications.",
      ta: "நினைவூட்டல்கள், உறுதிப்படுத்தல்கள், புதுப்பிப்புகள் மற்றும் அறிவிப்புகளை தானியக்கமாக்குங்கள்.",
    },
  },
],

},

{
id: "analytics",
title: {
  en: "Analytics",
  ta: "பகுப்பாய்வு",
},

shortTitle: {
  en: "Analytics",
  ta: "பகுப்பாய்வு",
},

heroDescription: {
  en: "Understand your conversations, leads, campaigns, and customer performance with actionable business insights.",
  ta: "உங்கள் உரையாடல்கள், விற்பனை வாய்ப்புகள், பிரச்சாரங்கள் மற்றும் வாடிக்கையாளர் செயல்திறனை பயனுள்ள வணிகத் தரவுகளுடன் புரிந்துகொள்ளுங்கள்.",
},

badge: {
  en: "Insights",
  ta: "தகவல் பகுப்பாய்வு",
},

href: "/products/analytics",

icon: BarChart3,

features: [
  {
    en: "Conversation analytics",
    ta: "உரையாடல் பகுப்பாய்வு",
  },
  {
    en: "Lead tracking",
    ta: "விற்பனை வாய்ப்பு கண்காணிப்பு",
  },
  {
    en: "Conversion insights",
    ta: "மாற்று விகித தகவல்கள்",
  },
  {
    en: "Performance reports",
    ta: "செயல்திறன் அறிக்கைகள்",
  },
  {
    en: "Campaign insights",
    ta: "பிரச்சார தகவல்கள்",
  },
  {
    en: "Customer performance",
    ta: "வாடிக்கையாளர் செயல்திறன்",
  },
],

benefits: [
  {
    title: {
      en: "Understand Performance",
      ta: "செயல்திறனை புரிந்துகொள்ளுங்கள்",
    },
    description: {
      en: "See how your conversations, campaigns, and teams are performing.",
      ta: "உங்கள் உரையாடல்கள், பிரச்சாரங்கள் மற்றும் குழுக்கள் எவ்வாறு செயல்படுகின்றன என்பதைப் பாருங்கள்.",
    },
  },
  {
    title: {
      en: "Track Leads",
      ta: "விற்பனை வாய்ப்புகளை கண்காணிக்கவும்",
    },
    description: {
      en: "Monitor leads throughout the customer journey.",
      ta: "வாடிக்கையாளர் பயணம் முழுவதும் விற்பனை வாய்ப்புகளை கண்காணிக்கவும்.",
    },
  },
  {
    title: {
      en: "Make Better Decisions",
      ta: "சிறந்த முடிவுகளை எடுக்கவும்",
    },
    description: {
      en: "Use actionable insights to improve your WhatsApp strategy.",
      ta: "உங்கள் WhatsApp உத்தியை மேம்படுத்த பயனுள்ள தரவுகளைப் பயன்படுத்துங்கள்.",
    },
  },
],

useCases: [
  {
    title: {
      en: "Campaign Tracking",
      ta: "பிரச்சார கண்காணிப்பு",
    },
    description: {
      en: "Measure how your campaigns turn conversations into opportunities.",
      ta: "உங்கள் பிரச்சாரங்கள் எவ்வாறு உரையாடல்களை விற்பனை வாய்ப்புகளாக மாற்றுகின்றன என்பதை அளவிடுங்கள்.",
    },
  },
  {
    title: {
      en: "Team Performance",
      ta: "குழு செயல்திறன்",
    },
    description: {
      en: "Understand team response times and customer engagement.",
      ta: "குழுவின் பதில் நேரம் மற்றும் வாடிக்கையாளர் ஈடுபாட்டை புரிந்துகொள்ளுங்கள்.",
    },
  },
  {
    title: {
      en: "Conversion Insights",
      ta: "மாற்று விகித தகவல்கள்",
    },
    description: {
      en: "Identify what is helping your business convert more customers.",
      ta: "உங்கள் வணிகம் அதிக வாடிக்கையாளர்களை மாற்ற உதவும் காரணிகளை கண்டறியுங்கள்.",
    },
  },
],
},

{
id: "product-features",
title: {
  en: "Product Features",
  ta: "தயாரிப்பு அம்சங்கள்",
},

shortTitle: {
  en: "Product Features",
  ta: "தயாரிப்பு அம்சங்கள்",
},

heroDescription: {
  en: "Everything your team needs to manage WhatsApp communication, customers, campaigns, and conversations.",
  ta: "WhatsApp தகவல்தொடர்பு, வாடிக்கையாளர்கள், பிரச்சாரங்கள் மற்றும் உரையாடல்களை நிர்வகிக்க உங்கள் குழுவிற்குத் தேவையான அனைத்தும்.",
},

badge: {
  en: "Complete Suite",
  ta: "முழுமையான தொகுப்பு",
},

href: "/products/product-features",

icon: Layers3,

features: [
  {
    en: "Team inbox",
    ta: "குழு Inbox",
  },
  {
    en: "Campaign management",
    ta: "பிரச்சார மேலாண்மை",
  },
  {
    en: "Templates",
    ta: "Templates",
  },
  {
    en: "Customer management",
    ta: "வாடிக்கையாளர் மேலாண்மை",
  },
  {
    en: "Conversation management",
    ta: "உரையாடல் மேலாண்மை",
  },
  {
    en: "Team collaboration",
    ta: "குழு ஒத்துழைப்பு",
  },
],

benefits: [
  {
    title: {
      en: "One Powerful Platform",
      ta: "ஒரே சக்திவாய்ந்த தளம்",
    },
    description: {
      en: "Manage your WhatsApp operations from one centralized platform.",
      ta: "உங்கள் WhatsApp செயல்பாடுகளை ஒரே மையப்படுத்தப்பட்ட தளத்தில் நிர்வகிக்கவும்.",
    },
  },
  {
    title: {
      en: "Better Collaboration",
      ta: "சிறந்த ஒத்துழைப்பு",
    },
    description: {
      en: "Give your team the tools they need to work together efficiently.",
      ta: "உங்கள் குழு திறமையாக இணைந்து செயல்பட தேவையான கருவிகளை வழங்குங்கள்.",
    },
  },
  {
    title: {
      en: "Complete Visibility",
      ta: "முழுமையான பார்வை",
    },
    description: {
      en: "Keep customer conversations, campaigns, and performance information organized.",
      ta: "வாடிக்கையாளர் உரையாடல்கள், பிரச்சாரங்கள் மற்றும் செயல்திறன் தகவல்களை ஒழுங்காக வைத்திருங்கள்.",
    },
  },
],

useCases: [
  {
    title: {
      en: "Team Inbox",
      ta: "குழு Inbox",
    },
    description: {
      en: "Manage customer conversations together from one shared inbox.",
      ta: "ஒரே பகிரப்பட்ட Inbox-ல் வாடிக்கையாளர் உரையாடல்களை ஒன்றாக நிர்வகிக்கவும்.",
    },
  },
  {
    title: {
      en: "Campaign Management",
      ta: "பிரச்சார மேலாண்மை",
    },
    description: {
      en: "Create and manage WhatsApp campaigns from one place.",
      ta: "WhatsApp பிரச்சாரங்களை ஒரே இடத்தில் உருவாக்கி நிர்வகிக்கவும்.",
    },
  },
  {
    title: {
      en: "Customer Management",
      ta: "வாடிக்கையாளர் மேலாண்மை",
    },
    description: {
      en: "Keep your customer conversations and information organized.",
      ta: "உங்கள் வாடிக்கையாளர் உரையாடல்கள் மற்றும் தகவல்களை ஒழுங்காக வைத்திருங்கள்.",
    },
  },
],

},
];

export function getProductPage(
  slug: string,
): ProductPage | undefined {
  return productPages.find((product) => {
    const productSlug = product.href
      .replace(/^\/products\//, "")
      .replace(/\/$/, "");

    return productSlug === slug;
  });
}

export default productPages;
