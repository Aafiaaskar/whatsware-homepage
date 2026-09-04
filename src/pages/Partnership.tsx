import React from "react";
import PartnershipPopup from "@/components/PartnershipPopup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

import {
  ArrowRight,
  Check,
  Handshake,
  Building2,
  Code2,
  Users,
  Gift,
  Megaphone,
  Headphones,
  BarChart3,
  Sparkles,
  Globe2,
  Zap,
  ShieldCheck,
  Network,
  Rocket,
} from "lucide-react";

/* =========================================================
   PARTNERSHIP TRANSLATIONS
========================================================= */

const partnershipContent = {
  EN: {
    hero: {
      badge: "Weofy Partnerships",
      title1: "Become Our",
      title2: "Partner",
      title3: "Today.",
      description:
        "Join the Weofy ecosystem and help businesses build smarter customer conversations, automate engagement, and unlock new opportunities through conversational AI.",
      becomePartner: "Become a Partner",
      explorePrograms: "Explore Programs",
      poweredSolutions: "Powered Solutions",
      partnerSupport: "Partner Support",
      growthPossibilities: "Growth Possibilities",
      ecosystem: "Partner Ecosystem",
      agencies: "Agencies",
      growTogether: "Grow together",
      technology: "Technology",
      buildConnect: "Build & connect",
      customers: "Customers",
      betterExperiences: "Better experiences",
      growth: "Growth",
      scaleFaster: "Scale faster",
    },

    network: {
      label: "Partner Network",
      title1: "The Partner Network",
      title2: "Built for Growth.",
      description:
        "From growing agencies and consultants to technology providers and business networks, the Weofy partner ecosystem creates opportunities to build, collaborate, and grow.",
      support: "Partner Support",
      supportDesc: "Support throughout your partnership journey.",
      ai: "Powered Solutions",
      aiDesc: "Smarter automation for modern businesses.",
      connected: "Connected Ecosystem",
      connectedDesc: "Everything working together in one ecosystem.",
      opportunities: "Growth Opportunities",
      opportunitiesDesc: "Unlock new possibilities together.",
    },

    models: {
      label: "Partnership Models",
      title1: "Choose Your",
      title2: "Partnership Model.",
      description:
        "Choose the model that best fits your business and start building new opportunities with Weofy.",
      getStarted: "Get Started",

      referral: {
        name: "Referral",
        label: "Refer & Earn",
        description:
          "Introduce businesses to Weofy and earn rewards while helping them discover smarter customer engagement.",
        features: [
          "Refer new businesses",
          "Earn partner rewards",
          "Simple onboarding",
        ],
      },

      growth: {
        name: "Growth",
        label: "Grow Together",
        description:
          "Help your clients adopt Weofy and unlock new opportunities through WhatsApp automation.",
        features: [
          "Support client growth",
          "Sales enablement",
          "Marketing support",
        ],
      },

      solution: {
        name: "Solution",
        label: "Build & Integrate",
        description:
          "Create customized Weofy-powered solutions, workflows, and integrations for your customers.",
        features: [
          "Custom solutions",
          "Powerful integrations",
          "Technical support",
        ],
      },

      alliance: {
        name: "Alliance",
        label: "Build Together",
        description:
          "Create deeper strategic relationships and build long-term opportunities within the Weofy ecosystem.",
        features: [
          "Strategic collaboration",
          "Joint opportunities",
          "Long-term growth",
        ],
      },
    },

    enterprise: {
      label: "High-Impact Partnership Model",
      title1: "Enterprise-Scale.",
      title2: "Executive-Led.",
      title3: "Custom-Built.",
      description:
        "For organizations looking to build deeper integrations, automate customer journeys, and create customized Weofy-powered experiences.",
      plugPlay: "Plug & Play:",
      plugPlayText: "Add WhatsApp to your platform.",
      deepIntegrations: "Deep Integrations:",
      deepIntegrationsText: "Connect your business ecosystem.",
      automation: "Automation at Scale:",
      automationText: "Power customer journeys automatically.",
      customAI: "Custom AI:",
      customAIText:
        "Build experiences around your unique business needs.",
      getStarted: "Get Started",
      ecosystem: "Connected Business Ecosystem",
    },

    opportunities: {
      label: "Partnership Opportunities",
      title1: "Find the right way to",
      title2: "partner with us.",
      description:
        "Whether you're an agency, technology provider, consultant, or business network, there's a place for you in the Weofy ecosystem.",
      learnMore: "Learn more",

      solutionPartners: {
        title: "Solution Partners",
        description:
          "Build powerful Weofy-powered solutions and deliver smarter customer experiences for your clients.",
      },

      agencyPartners: {
        title: "Agency Partners",
        description:
          "Add AI-powered WhatsApp automation to your agency services and create new opportunities for your clients.",
      },

      technologyPartners: {
        title: "Technology Partners",
        description:
          "Connect your technology with Weofy and create seamless experiences through powerful integrations.",
      },

      referralPartners: {
        title: "Referral Partners",
        description:
          "Introduce businesses to Weofy and unlock exciting rewards while helping them grow.",
      },
    },

    whyPartner: {
      label: "Why Partner with Weofy",
      title1: "More than a partnership.",
      title2: "A growth opportunity.",
      description:
        "Everything you need to build, sell, support, and scale Weofy-powered solutions.",

      meta: {
        title: "Meta & Google Partner",
        description:
          "Benefit from trusted platform relationships, faster approvals, priority support, and access to new opportunities.",
      },

      portal: {
        title: "Unified Partner Portal",
        description:
          "Track leads, conversions, opportunities, and partner growth through one connected experience.",
        dashboard: "Partner Dashboard",
        leads: "Leads",
        growth: "Growth",
      },

      onboarding: {
        title: "White-Glove Onboarding",
        description:
          "From your first conversation to go-live, our team helps every partnership move forward smoothly.",
      },

      payouts: {
        title: "Monthly Payouts",
        description:
          "Unlock predictable partner rewards with a clear and consistent commission cycle.",
      },

      benefits: {
        ai: {
          title: "Powerful AI Solutions",
          description:
            "Give your customers access to intelligent automation and AI-powered conversations.",
        },
        revenue: {
          title: "New Revenue Opportunities",
          description:
            "Create additional revenue streams by offering Weofy solutions to your clients.",
        },
        marketing: {
          title: "Marketing Support",
          description:
            "Access resources that help you promote Weofy-powered solutions and grow your business.",
        },
        support: {
          title: "Dedicated Support",
          description:
            "Get the assistance you need throughout your partnership journey.",
        },
        reach: {
          title: "Expand Your Reach",
          description:
            "Connect with more businesses and unlock new markets through the Weofy ecosystem.",
        },
        growth: {
          title: "Built for Growth",
          description:
            "Partner with a platform designed around automation, communication, and scalable growth.",
        },
      },
    },

    howItWorks: {
      label: "How It Works",
      title1: "Three simple steps to",
      title2: "activate your partnership.",
      description:
        "Getting started is simple. Join the Weofy ecosystem, connect with our team, and start creating meaningful opportunities together.",

      step1: {
        title: "Share Your Details",
        description:
          "Provide details about your business, your goals, and the partnership model you're interested in.",
      },

      step2: {
        title: "Align on Partnership",
        description:
          "We'll connect with you, evaluate the opportunity, and define the right structure for mutual growth.",
      },

      step3: {
        title: "Onboard & Activate",
        description:
          "Access enablement, integrations, resources, and support to get your partnership started quickly.",
      },
    },

    strip: [
      "Partner onboarding",
      "Sales enablement",
      "Marketing resources",
      "Technical support",
    ],

    faq: {
      label: "FAQs",
      title: "Everything you need to know.",
      description:
        "Have questions before becoming a Weofy partner? Here's what you need to know.",

      items: [
        {
          question: "Who can become a Weofy partner?",
          answer:
            "Agencies, consultants, technology providers, solution builders, business networks, and organizations looking to help businesses adopt Weofy can become partners.",
        },
        {
          question: "What partnership model should I choose?",
          answer:
            "Choose Referral if you want to introduce businesses, Growth if you want to help clients adopt Weofy, Solution if you want to build integrations, or Alliance for deeper long-term collaboration.",
        },
        {
          question: "Do partners receive support?",
          answer:
            "Yes. Weofy partners can receive onboarding, sales enablement, marketing resources, and technical support.",
        },
        {
          question: "Can agencies partner with Weofy?",
          answer:
            "Absolutely. Agencies can use Weofy-powered automation as part of their services and help clients create better customer experiences.",
        },
        {
          question: "How do I get started?",
          answer:
            "Click Become a Partner and submit your details. Our team will review your information and get in touch with you.",
        },
      ],
    },

    cta: {
      title: "Ready to Get Started?",
      description:
        "Join the Weofy partner ecosystem and help businesses transform the way they connect with their customers.",
      become: "Become a Weofy Partner",
      explore: "Explore Programs",
    },
  },

  TA: {
    hero: {
      badge: "Weofy கூட்டாண்மைகள்",
      title1: "இன்றே எங்கள்",
      title2: "கூட்டாளராக",
      title3: "இணையுங்கள்.",
      description:
        "Weofy சுற்றுச்சூழல் அமைப்பில் இணைந்து, வணிகங்கள் சிறந்த வாடிக்கையாளர் உரையாடல்களை உருவாக்கவும், தொடர்புகளை தானியக்கமாக்கவும், உரையாடல் AI மூலம் புதிய வாய்ப்புகளை உருவாக்கவும் உதவுங்கள்.",
      becomePartner: "கூட்டாளராகுங்கள்",
      explorePrograms: "திட்டங்களைப் பாருங்கள்",
      poweredSolutions: "AI மூலம் இயக்கப்படும் தீர்வுகள்",
      partnerSupport: "கூட்டாளர் ஆதரவு",
      growthPossibilities: "வளர்ச்சி வாய்ப்புகள்",
      ecosystem: "கூட்டாளர் சுற்றுச்சூழல் அமைப்பு",
      agencies: "ஏஜென்சிகள்",
      growTogether: "ஒன்றாக வளருங்கள்",
      technology: "தொழில்நுட்பம்",
      buildConnect: "உருவாக்கி இணைக்கவும்",
      customers: "வாடிக்கையாளர்கள்",
      betterExperiences: "சிறந்த அனுபவங்கள்",
      growth: "வளர்ச்சி",
      scaleFaster: "வேகமாக வளருங்கள்",
    },

    network: {
      label: "கூட்டாளர் நெட்வொர்க்",
      title1: "வளர்ச்சிக்காக உருவாக்கப்பட்ட",
      title2: "கூட்டாளர் நெட்வொர்க்.",
      description:
        "வளர்ந்து வரும் ஏஜென்சிகள் மற்றும் ஆலோசகர்கள் முதல் தொழில்நுட்ப வழங்குநர்கள் மற்றும் வணிக நெட்வொர்க்குகள் வரை, Weofy கூட்டாளர் சுற்றுச்சூழல் அமைப்பு உருவாக்க, இணைந்து செயல்பட மற்றும் வளர வாய்ப்புகளை வழங்குகிறது.",
      support: "கூட்டாளர் ஆதரவு",
      supportDesc: "உங்கள் கூட்டாண்மை பயணம் முழுவதும் ஆதரவு.",
      ai: "AI மூலம் இயக்கப்படும் தீர்வுகள்",
      aiDesc: "நவீன வணிகங்களுக்கான புத்திசாலித்தனமான தானியக்கம்.",
      connected: "இணைக்கப்பட்ட சுற்றுச்சூழல் அமைப்பு",
      connectedDesc: "அனைத்தும் ஒரே சுற்றுச்சூழல் அமைப்பில் இணைந்து செயல்படும்.",
      opportunities: "வளர்ச்சி வாய்ப்புகள்",
      opportunitiesDesc: "ஒன்றாக புதிய வாய்ப்புகளை உருவாக்குங்கள்.",
    },

    models: {
      label: "கூட்டாண்மை மாதிரிகள்",
      title1: "உங்களுக்கு ஏற்ற",
      title2: "கூட்டாண்மை மாதிரியைத் தேர்ந்தெடுக்கவும்.",
      description:
        "உங்கள் வணிகத்திற்கு மிகவும் பொருத்தமான மாதிரியைத் தேர்ந்தெடுத்து Weofy உடன் புதிய வாய்ப்புகளை உருவாக்கத் தொடங்குங்கள்.",
      getStarted: "தொடங்குங்கள்",

      referral: {
        name: "பரிந்துரை",
        label: "பரிந்துரைத்து சம்பாதிக்கவும்",
        description:
          "வணிகங்களை Weofy-க்கு அறிமுகப்படுத்தி, அவர்கள் சிறந்த வாடிக்கையாளர் தொடர்புகளை உருவாக்க உதவியபடி வெகுமதிகளைப் பெறுங்கள்.",
        features: [
          "புதிய வணிகங்களைப் பரிந்துரைக்கவும்",
          "கூட்டாளர் வெகுமதிகளைப் பெறுங்கள்",
          "எளிய தொடக்க செயல்முறை",
        ],
      },

      growth: {
        name: "வளர்ச்சி",
        label: "ஒன்றாக வளருங்கள்",
        description:
          "உங்கள் வாடிக்கையாளர்கள் Weofy-ஐ பயன்படுத்த உதவி செய்து WhatsApp தானியக்கத்தின் மூலம் புதிய வாய்ப்புகளை உருவாக்குங்கள்.",
        features: [
          "வாடிக்கையாளர் வளர்ச்சிக்கு ஆதரவு",
          "விற்பனை ஆதரவு",
          "மார்க்கெட்டிங் ஆதரவு",
        ],
      },

      solution: {
        name: "தீர்வு",
        label: "உருவாக்கி ஒருங்கிணைக்கவும்",
        description:
          "உங்கள் வாடிக்கையாளர்களுக்காக தனிப்பயனாக்கப்பட்ட Weofy தீர்வுகள், பணிச்செயல்முறைகள் மற்றும் ஒருங்கிணைப்புகளை உருவாக்குங்கள்.",
        features: [
          "தனிப்பயன் தீர்வுகள்",
          "சக்திவாய்ந்த ஒருங்கிணைப்புகள்",
          "தொழில்நுட்ப ஆதரவு",
        ],
      },

      alliance: {
        name: "கூட்டணி",
        label: "ஒன்றாக உருவாக்குங்கள்",
        description:
          "ஆழமான மூலோபாய உறவுகளை உருவாக்கி Weofy சுற்றுச்சூழல் அமைப்பில் நீண்டகால வாய்ப்புகளை உருவாக்குங்கள்.",
        features: [
          "மூலோபாய ஒத்துழைப்பு",
          "கூட்டு வாய்ப்புகள்",
          "நீண்டகால வளர்ச்சி",
        ],
      },
    },

    enterprise: {
      label: "உயர் தாக்கம் கொண்ட கூட்டாண்மை மாதிரி",
      title1: "நிறுவன அளவிலானது.",
      title2: "நிர்வாக தலைமையில்.",
      title3: "தனிப்பயனாக்கப்பட்டது.",
      description:
        "ஆழமான ஒருங்கிணைப்புகளை உருவாக்கவும், வாடிக்கையாளர் பயணங்களை தானியக்கமாக்கவும், தனிப்பயனாக்கப்பட்ட Weofy அனுபவங்களை உருவாக்கவும் விரும்பும் நிறுவனங்களுக்காக.",
      plugPlay: "Plug & Play:",
      plugPlayText: "உங்கள் தளத்தில் WhatsApp-ஐ சேர்க்கவும்.",
      deepIntegrations: "ஆழமான ஒருங்கிணைப்புகள்:",
      deepIntegrationsText: "உங்கள் வணிக சுற்றுச்சூழல் அமைப்பை இணைக்கவும்.",
      automation: "அளவிலான தானியக்கம்:",
      automationText: "வாடிக்கையாளர் பயணங்களை தானாக இயக்குங்கள்.",
      customAI: "தனிப்பயன் AI:",
      customAIText:
        "உங்கள் தனிப்பட்ட வணிகத் தேவைகளுக்கு ஏற்ப அனுபவங்களை உருவாக்குங்கள்.",
      getStarted: "தொடங்குங்கள்",
      ecosystem: "இணைக்கப்பட்ட வணிக சுற்றுச்சூழல் அமைப்பு",
    },

    opportunities: {
      label: "கூட்டாண்மை வாய்ப்புகள்",
      title1: "எங்களுடன் கூட்டாளியாக",
      title2: "சரியான வழியைத் தேர்ந்தெடுக்கவும்.",
      description:
        "நீங்கள் ஒரு ஏஜென்சி, தொழில்நுட்ப வழங்குநர், ஆலோசகர் அல்லது வணிக நெட்வொர்க்காக இருந்தாலும், Weofy சுற்றுச்சூழல் அமைப்பில் உங்களுக்கான இடம் உள்ளது.",
      learnMore: "மேலும் அறிக",

      solutionPartners: {
        title: "தீர்வு கூட்டாளர்கள்",
        description:
          "சக்திவாய்ந்த Weofy தீர்வுகளை உருவாக்கி உங்கள் வாடிக்கையாளர்களுக்கு சிறந்த வாடிக்கையாளர் அனுபவங்களை வழங்குங்கள்.",
      },

      agencyPartners: {
        title: "ஏஜென்சி கூட்டாளர்கள்",
        description:
          "உங்கள் ஏஜென்சி சேவைகளில் AI மூலம் இயக்கப்படும் WhatsApp தானியக்கத்தைச் சேர்த்து உங்கள் வாடிக்கையாளர்களுக்கு புதிய வாய்ப்புகளை உருவாக்குங்கள்.",
      },

      technologyPartners: {
        title: "தொழில்நுட்ப கூட்டாளர்கள்",
        description:
          "உங்கள் தொழில்நுட்பத்தை Weofy உடன் இணைத்து சக்திவாய்ந்த ஒருங்கிணைப்புகள் மூலம் தடையற்ற அனுபவங்களை உருவாக்குங்கள்.",
      },

      referralPartners: {
        title: "பரிந்துரை கூட்டாளர்கள்",
        description:
          "வணிகங்களை Weofy-க்கு அறிமுகப்படுத்தி, அவர்கள் வளர உதவியபடி சிறந்த வெகுமதிகளைப் பெறுங்கள்.",
      },
    },

    whyPartner: {
      label: "ஏன் Weofy உடன் கூட்டாளியாக வேண்டும்",
      title1: "ஒரு கூட்டாண்மையை விட அதிகம்.",
      title2: "ஒரு வளர்ச்சி வாய்ப்பு.",
      description:
        "Weofy மூலம் இயக்கப்படும் தீர்வுகளை உருவாக்க, விற்க, ஆதரிக்க மற்றும் அளவிட உங்களுக்கு தேவையான அனைத்தும்.",

      meta: {
        title: "Meta & Google கூட்டாளர்",
        description:
          "நம்பகமான தள உறவுகள், விரைவான ஒப்புதல்கள், முன்னுரிமை ஆதரவு மற்றும் புதிய வாய்ப்புகளுக்கான அணுகலைப் பெறுங்கள்.",
      },

      portal: {
        title: "ஒருங்கிணைந்த கூட்டாளர் போர்டல்",
        description:
          "ஒரே இணைக்கப்பட்ட அனுபவத்தின் மூலம் லீட்கள், மாற்றங்கள், வாய்ப்புகள் மற்றும் கூட்டாளர் வளர்ச்சியை கண்காணிக்கவும்.",
        dashboard: "கூட்டாளர் டாஷ்போர்டு",
        leads: "லீட்கள்",
        growth: "வளர்ச்சி",
      },

      onboarding: {
        title: "சிறப்பு கூட்டாளர் Onboarding",
        description:
          "முதல் உரையாடலிலிருந்து செயல்படுத்தும் நிலை வரை, ஒவ்வொரு கூட்டாண்மையும் சீராக முன்னேற எங்கள் குழு உதவுகிறது.",
      },

      payouts: {
        title: "மாதாந்திர பணப்பலன்கள்",
        description:
          "தெளிவான மற்றும் நிலையான கமிஷன் சுழற்சியின் மூலம் கணிக்கக்கூடிய கூட்டாளர் வெகுமதிகளைப் பெறுங்கள்.",
      },

      benefits: {
        ai: {
          title: "சக்திவாய்ந்த AI தீர்வுகள்",
          description:
            "உங்கள் வாடிக்கையாளர்களுக்கு புத்திசாலித்தனமான தானியக்கம் மற்றும் AI மூலம் இயக்கப்படும் உரையாடல்களை வழங்குங்கள்.",
        },
        revenue: {
          title: "புதிய வருவாய் வாய்ப்புகள்",
          description:
            "உங்கள் வாடிக்கையாளர்களுக்கு Weofy தீர்வுகளை வழங்குவதன் மூலம் கூடுதல் வருவாய் வாய்ப்புகளை உருவாக்குங்கள்.",
        },
        marketing: {
          title: "மார்க்கெட்டிங் ஆதரவு",
          description:
            "Weofy தீர்வுகளை விளம்பரப்படுத்தவும் உங்கள் வணிகத்தை வளர்க்கவும் உதவும் வளங்களைப் பெறுங்கள்.",
        },
        support: {
          title: "தனிப்பட்ட ஆதரவு",
          description:
            "உங்கள் கூட்டாண்மை பயணம் முழுவதும் தேவையான உதவியைப் பெறுங்கள்.",
        },
        reach: {
          title: "உங்கள் வரம்பை விரிவுபடுத்துங்கள்",
          description:
            "மேலும் வணிகங்களுடன் இணைந்து Weofy சுற்றுச்சூழல் அமைப்பின் மூலம் புதிய சந்தைகளைத் திறக்கவும்.",
        },
        growth: {
          title: "வளர்ச்சிக்காக உருவாக்கப்பட்டது",
          description:
            "தானியக்கம், தொடர்பு மற்றும் அளவிடக்கூடிய வளர்ச்சியை மையமாகக் கொண்ட தளத்துடன் கூட்டாளியாகுங்கள்.",
        },
      },
    },

    howItWorks: {
      label: "இது எப்படி செயல்படுகிறது",
      title1: "உங்கள் கூட்டாண்மையை",
      title2: "செயல்படுத்த மூன்று எளிய படிகள்.",
      description:
        "தொடங்குவது மிகவும் எளிது. Weofy சுற்றுச்சூழல் அமைப்பில் இணையுங்கள், எங்கள் குழுவுடன் இணைந்து செயல்படுங்கள் மற்றும் ஒன்றாக அர்த்தமுள்ள வாய்ப்புகளை உருவாக்கத் தொடங்குங்கள்.",

      step1: {
        title: "உங்கள் விவரங்களைப் பகிருங்கள்",
        description:
          "உங்கள் வணிகம், இலக்குகள் மற்றும் நீங்கள் விரும்பும் கூட்டாண்மை மாதிரி பற்றிய விவரங்களை வழங்குங்கள்.",
      },

      step2: {
        title: "கூட்டாண்மையைத் திட்டமிடுங்கள்",
        description:
          "நாங்கள் உங்களைத் தொடர்புகொண்டு, வாய்ப்பை மதிப்பிட்டு, இருதரப்பு வளர்ச்சிக்கான சரியான அமைப்பை வரையறுப்போம்.",
      },

      step3: {
        title: "Onboard & Activate",
        description:
          "உங்கள் கூட்டாண்மையை விரைவாகத் தொடங்க enablement, ஒருங்கிணைப்புகள், வளங்கள் மற்றும் ஆதரவைப் பெறுங்கள்.",
      },
    },

    strip: [
      "கூட்டாளர் Onboarding",
      "விற்பனை ஆதரவு",
      "மார்க்கெட்டிங் வளங்கள்",
      "தொழில்நுட்ப ஆதரவு",
    ],

    faq: {
      label: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      title: "நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்.",
      description:
        "Weofy கூட்டாளராக மாறுவதற்கு முன் கேள்விகள் உள்ளதா? நீங்கள் தெரிந்து கொள்ள வேண்டியவை இங்கே.",

      items: [
        {
          question: "யார் Weofy கூட்டாளராக முடியும்?",
          answer:
            "ஏஜென்சிகள், ஆலோசகர்கள், தொழில்நுட்ப வழங்குநர்கள், தீர்வு உருவாக்குநர்கள், வணிக நெட்வொர்க்குகள் மற்றும் வணிகங்கள் Weofy-ஐ ஏற்றுக்கொள்ள உதவ விரும்பும் நிறுவனங்கள் கூட்டாளர்களாக முடியும்.",
        },
        {
          question: "எந்த கூட்டாண்மை மாதிரியைத் தேர்ந்தெடுக்க வேண்டும்?",
          answer:
            "வணிகங்களை அறிமுகப்படுத்த விரும்பினால் பரிந்துரை மாதிரியைத் தேர்ந்தெடுக்கவும். வாடிக்கையாளர்கள் Weofy-ஐ பயன்படுத்த உதவ விரும்பினால் வளர்ச்சி மாதிரியைத் தேர்ந்தெடுக்கவும். ஒருங்கிணைப்புகளை உருவாக்க விரும்பினால் தீர்வு மாதிரியைத் தேர்ந்தெடுக்கவும். ஆழமான நீண்டகால ஒத்துழைப்புக்கு கூட்டணி மாதிரியைத் தேர்ந்தெடுக்கவும்.",
        },
        {
          question: "கூட்டாளர்களுக்கு ஆதரவு கிடைக்குமா?",
          answer:
            "ஆம். Weofy கூட்டாளர்கள் onboarding, விற்பனை ஆதரவு, மார்க்கெட்டிங் வளங்கள் மற்றும் தொழில்நுட்ப ஆதரவைப் பெறலாம்.",
        },
        {
          question: "ஏஜென்சிகள் Weofy உடன் கூட்டாளியாக முடியுமா?",
          answer:
            "நிச்சயமாக. ஏஜென்சிகள் Weofy தானியக்கத்தை தங்கள் சேவைகளின் ஒரு பகுதியாகப் பயன்படுத்தி வாடிக்கையாளர்களுக்கு சிறந்த அனுபவங்களை உருவாக்க உதவலாம்.",
        },
        {
          question: "எப்படி தொடங்குவது?",
          answer:
            "Become a Partner பொத்தானைக் கிளிக் செய்து உங்கள் விவரங்களைச் சமர்ப்பிக்கவும். எங்கள் குழு உங்கள் தகவல்களை மதிப்பாய்வு செய்து உங்களைத் தொடர்புகொள்ளும்.",
        },
      ],
    },

    cta: {
      title: "தொடங்க தயாரா?",
      description:
        "Weofy கூட்டாளர் சுற்றுச்சூழல் அமைப்பில் இணைந்து, வணிகங்கள் தங்கள் வாடிக்கையாளர்களுடன் இணையும் விதத்தை மாற்ற உதவுங்கள்.",
      become: "Weofy கூட்டாளராகுங்கள்",
      explore: "திட்டங்களைப் பாருங்கள்",
    },
  },
};

/* =========================================================
   PAGE
========================================================= */

export default function Partnership() {
  const { language } = useLanguage();

  const t =
    partnershipContent[language] || partnershipContent.EN;

  /* =========================================================
     PARTNERSHIP TYPES
  ========================================================= */

  const partnershipTypes = [
    {
      icon: Building2,
      title: t.opportunities.solutionPartners.title,
      description: t.opportunities.solutionPartners.description,
    },
    {
      icon: Megaphone,
      title: t.opportunities.agencyPartners.title,
      description: t.opportunities.agencyPartners.description,
    },
    {
      icon: Code2,
      title: t.opportunities.technologyPartners.title,
      description: t.opportunities.technologyPartners.description,
    },
    {
      icon: Gift,
      title: t.opportunities.referralPartners.title,
      description: t.opportunities.referralPartners.description,
    },
  ];

  /* =========================================================
     PARTNERSHIP MODELS
  ========================================================= */

  const partnershipModels = [
    {
      icon: Gift,
      name: t.models.referral.name,
      label: t.models.referral.label,
      description: t.models.referral.description,
      features: t.models.referral.features,
    },
    {
      icon: Rocket,
      name: t.models.growth.name,
      label: t.models.growth.label,
      description: t.models.growth.description,
      features: t.models.growth.features,
    },
    {
      icon: Code2,
      name: t.models.solution.name,
      label: t.models.solution.label,
      description: t.models.solution.description,
      features: t.models.solution.features,
    },
    {
      icon: Network,
      name: t.models.alliance.name,
      label: t.models.alliance.label,
      description: t.models.alliance.description,
      features: t.models.alliance.features,
    },
  ];

  /* =========================================================
     BENEFITS
  ========================================================= */

  const benefits = [
    {
      icon: Zap,
      title: t.whyPartner.benefits.ai.title,
      description: t.whyPartner.benefits.ai.description,
    },
    {
      icon: BarChart3,
      title: t.whyPartner.benefits.revenue.title,
      description: t.whyPartner.benefits.revenue.description,
    },
    {
      icon: Megaphone,
      title: t.whyPartner.benefits.marketing.title,
      description: t.whyPartner.benefits.marketing.description,
    },
    {
      icon: Headphones,
      title: t.whyPartner.benefits.support.title,
      description: t.whyPartner.benefits.support.description,
    },
    {
      icon: Globe2,
      title: t.whyPartner.benefits.reach.title,
      description: t.whyPartner.benefits.reach.description,
    },
    {
      icon: Sparkles,
      title: t.whyPartner.benefits.growth.title,
      description: t.whyPartner.benefits.growth.description,
    },
  ];

  /* =========================================================
     PARTNER ADVANTAGES
  ========================================================= */

  const partnerAdvantages = [
    {
      icon: ShieldCheck,
      title: t.whyPartner.meta.title,
      description: t.whyPartner.meta.description,
    },
    {
      icon: Network,
      title: t.whyPartner.portal.title,
      description: t.whyPartner.portal.description,
    },
    {
      icon: Handshake,
      title: t.whyPartner.onboarding.title,
      description: t.whyPartner.onboarding.description,
    },
    {
      icon: BarChart3,
      title: t.whyPartner.payouts.title,
      description: t.whyPartner.payouts.description,
    },
  ];

  /* =========================================================
     STEPS
  ========================================================= */

  const steps = [
    {
      number: "01",
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      number: "02",
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      number: "03",
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-gray-900">
      <Navbar />
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden px-6 pb-24 pt-28">

        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#159447]/10 blur-3xl" />

        <div className="absolute right-[-100px] top-32 h-80 w-80 rounded-full bg-[#0e7c39]/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#E8F7EE] px-4 py-2 text-sm font-semibold text-[#159447]">
              <Handshake size={17} />
              {t.hero.badge}
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {t.hero.title1}
              <span className="text-[#159447]">
                {" "}
                {t.hero.title2}{" "}
              </span>
              {t.hero.title3}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {t.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#become-partner"
                className="inline-flex items-center gap-2 rounded-xl bg-[#159447] px-7 py-4 font-semibold text-white shadow-lg shadow-[#159447]/20 transition-all hover:bg-[#0e7c39]"
              >
                {t.hero.becomePartner}
                <ArrowRight size={18} />
              </a>

              <a
                href="#partnership-models"
                className="inline-flex items-center gap-2 rounded-xl border border-[#B9DFC7] bg-white px-7 py-4 font-semibold text-[#159447] transition-all hover:bg-[#E8F7EE]"
              >
                {t.hero.explorePrograms}
              </a>

            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#D5EBDD] pt-8">

              <div>
                <p className="text-3xl font-bold text-[#159447]">
                  AI
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {t.hero.poweredSolutions}
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#159447]">
                  360°
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {t.hero.partnerSupport}
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#159447]">
                  ∞
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {t.hero.growthPossibilities}
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT VISUAL */}

          <div className="relative flex justify-center">

            <div className="relative aspect-square w-full max-w-[520px]">

              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[#BDE8CB] via-[#E8F7EE] to-[#159447]/20" />

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="flex h-52 w-52 flex-col items-center justify-center rounded-[2rem] border border-[#D5EBDD] bg-white shadow-2xl md:h-60 md:w-60">

                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-lg">
                    <Handshake size={38} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    Weofy
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {t.hero.ecosystem}
                  </p>

                </div>

              </div>

              {/* Agencies */}

              <div className="absolute left-2 top-8 flex items-center gap-3 rounded-2xl border border-[#D5EBDD] bg-white px-5 py-4 shadow-xl md:left-0">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F7EE] text-[#159447]">
                  <Building2 size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {t.hero.agencies}
                  </p>

                  <p className="text-xs text-gray-500">
                    {t.hero.growTogether}
                  </p>
                </div>

              </div>

              {/* Technology */}

              <div className="absolute right-0 top-28 flex items-center gap-3 rounded-2xl border border-[#D5EBDD] bg-white px-5 py-4 shadow-xl">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F7EE] text-[#159447]">
                  <Code2 size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {t.hero.technology}
                  </p>

                  <p className="text-xs text-gray-500">
                    {t.hero.buildConnect}
                  </p>
                </div>

              </div>

              {/* Customers */}

              <div className="absolute bottom-16 left-0 flex items-center gap-3 rounded-2xl border border-[#D5EBDD] bg-white px-5 py-4 shadow-xl">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F7EE] text-[#159447]">
                  <Users size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {t.hero.customers}
                  </p>

                  <p className="text-xs text-gray-500">
                    {t.hero.betterExperiences}
                  </p>
                </div>

              </div>

              {/* Growth */}

              <div className="absolute bottom-4 right-8 flex items-center gap-3 rounded-2xl border border-[#D5EBDD] bg-white px-5 py-4 shadow-xl">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F7EE] text-[#159447]">
                  <BarChart3 size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {t.hero.growth}
                  </p>

                  <p className="text-xs text-gray-500">
                    {t.hero.scaleFaster}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PARTNER NETWORK
      ====================================================== */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t.network.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {t.network.title1}
              <span className="text-[#159447]">
                {" "}{t.network.title2}
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              {t.network.description}
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Support */}

            <div className="rounded-3xl border border-[#D5EBDD] bg-[#F8FCF9] p-7 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EE] text-[#159447]">
                <Users size={26} />
              </div>

              <p className="mt-5 text-3xl font-bold text-[#159447]">
                360°
              </p>

              <p className="mt-2 font-semibold">
                {t.network.support}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {t.network.supportDesc}
              </p>

            </div>

            {/* AI */}

            <div className="rounded-3xl border border-[#D5EBDD] bg-[#F8FCF9] p-7 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EE] text-[#159447]">
                <Zap size={26} />
              </div>

              <p className="mt-5 text-3xl font-bold text-[#159447]">
                AI
              </p>

              <p className="mt-2 font-semibold">
                {t.network.ai}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {t.network.aiDesc}
              </p>

            </div>

            {/* Ecosystem */}

            <div className="rounded-3xl border border-[#D5EBDD] bg-[#F8FCF9] p-7 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EE] text-[#159447]">
                <Globe2 size={26} />
              </div>

              <p className="mt-5 text-3xl font-bold text-[#159447]">
                1
              </p>

              <p className="mt-2 font-semibold">
                {t.network.connected}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {t.network.connectedDesc}
              </p>

            </div>

            {/* Growth */}

            <div className="rounded-3xl border border-[#D5EBDD] bg-[#F8FCF9] p-7 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EE] text-[#159447]">
                <BarChart3 size={26} />
              </div>

              <p className="mt-5 text-3xl font-bold text-[#159447]">
                ∞
              </p>

              <p className="mt-2 font-semibold">
                {t.network.opportunities}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {t.network.opportunitiesDesc}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP MODELS
      ====================================================== */}

      <section
        id="partnership-models"
        className="bg-[#FFFDF5] px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t.models.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              {t.models.title1}
              <span className="text-[#159447]">
                {" "}{t.models.title2}
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              {t.models.description}
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {partnershipModels.map((model) => {

              const Icon = model.icon;

              return (
                <div
                  key={model.name}
                  className="group relative overflow-hidden rounded-3xl border border-[#D5EBDD] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#159447]/40 hover:shadow-xl"
                >

                  <div className="absolute right-[-50px] top-[-50px] h-32 w-32 rounded-full bg-[#159447]/5 transition-all group-hover:scale-150" />

                  <div className="relative">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EE] text-[#159447] transition-all group-hover:bg-[#159447] group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[#159447]">
                      {model.label}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {model.name}
                    </h3>

                    <p className="mt-4 min-h-[100px] leading-relaxed text-gray-600">
                      {model.description}
                    </p>

                    <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">

                      {model.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >

                          <Check
                            size={16}
                            className="shrink-0 text-[#159447]"
                          />

                          {feature}

                        </div>

                      ))}

                    </div>

                    <a
                      href="#become-partner"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#159447]"
                    >
                      {t.models.getStarted}

                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>

                  </div>

                </div>
              );

            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          ENTERPRISE MODEL
      ====================================================== */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#E8F7EE] px-8 py-14 md:px-14 lg:px-16">

            <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full border-[3px] border-[#A5EBC0]" />

            <div className="absolute right-[-30px] top-[-30px] h-64 w-64 rounded-full border-[3px] border-[#A5EBC0]" />

            <div className="absolute right-10 top-10 h-48 w-48 rounded-full border-[3px] border-[#A5EBC0]" />

            <div className="relative z-10 max-w-2xl">

              <p className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-[#159447]">
                {t.enterprise.label}
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                {t.enterprise.title1}
                <br />
                {t.enterprise.title2}
                <br />
                {t.enterprise.title3}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                {t.enterprise.description}
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-start gap-3">

                  <Check className="mt-1 shrink-0 text-[#159447]" />

                  <p>
                    <strong>{t.enterprise.plugPlay}</strong>{" "}
                    {t.enterprise.plugPlayText}
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <Check className="mt-1 shrink-0 text-[#159447]" />

                  <p>
                    <strong>{t.enterprise.deepIntegrations}</strong>{" "}
                    {t.enterprise.deepIntegrationsText}
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <Check className="mt-1 shrink-0 text-[#159447]" />

                  <p>
                    <strong>{t.enterprise.automation}</strong>{" "}
                    {t.enterprise.automationText}
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <Check className="mt-1 shrink-0 text-[#159447]" />

                  <p>
                    <strong>{t.enterprise.customAI}</strong>{" "}
                    {t.enterprise.customAIText}
                  </p>

                </div>

              </div>

              <a
                href="#become-partner"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#159447] px-7 py-4 font-semibold text-white shadow-lg shadow-[#159447]/20 transition-all hover:bg-[#0e7c39]"
              >
                {t.enterprise.getStarted}
                <ArrowRight size={18} />
              </a>

            </div>

            <div className="absolute bottom-12 right-12 hidden lg:block">

              <div className="flex items-center gap-3 rounded-2xl bg-[#159447] px-6 py-4 text-white shadow-xl">

                <Network size={22} />

                <span className="font-semibold">
                  {t.enterprise.ecosystem}
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP OPPORTUNITIES
      ====================================================== */}

      <section
        id="partnership-types"
        className="bg-white px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t.opportunities.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {t.opportunities.title1}
              <span className="text-[#159447]">
                {" "}{t.opportunities.title2}
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              {t.opportunities.description}
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {partnershipTypes.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#D5EBDD] bg-[#F8FCF9] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#159447]/10"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EE] text-[#159447] transition-all group-hover:bg-[#159447] group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#159447]">

                    {t.opportunities.learnMore}

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </div>

                </div>

              );

            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY PARTNER
      ====================================================== */}

      <section className="bg-[#E8F7EE] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t.whyPartner.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              {t.whyPartner.title1}
              <br />

              <span className="text-[#159447]">
                {t.whyPartner.title2}
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              {t.whyPartner.description}
            </p>

          </div>

          {/* MAIN FOUR BENEFITS */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {partnerAdvantages.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="group overflow-hidden rounded-3xl border border-[#D5EBDD] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  {/* Illustration */}

                  <div className="flex h-56 items-center justify-center overflow-hidden bg-[#D5F5E8]">

                    {item.title === t.whyPartner.meta.title ? (

                      <div className="relative flex h-full w-full items-center justify-center">

                        <div className="absolute left-[20%] top-[25%] flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-sm">

                          <span className="text-6xl font-black text-[#1877F2]">
                            ∞
                          </span>

                        </div>

                        <div className="absolute bottom-[15%] right-[15%] flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-sm">

                          <span className="text-5xl font-bold">

                            <span className="text-[#4285F4]">
                              G
                            </span>

                          </span>

                        </div>

                      </div>

                    ) : item.title === t.whyPartner.portal.title ? (

                      <div className="relative h-40 w-64 rounded-2xl border border-[#B9DFC7] bg-white p-4 shadow-lg">

                        <p className="text-left text-sm font-bold text-[#159447]">
                          {t.whyPartner.portal.dashboard}
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-3">

                          <div className="rounded-xl bg-[#E8F7EE] p-3">

                            <p className="text-xs text-gray-500">
                              {t.whyPartner.portal.leads}
                            </p>

                            <p className="text-xl font-bold text-[#159447]">
                              96
                            </p>

                          </div>

                          <div className="rounded-xl bg-[#E8F7EE] p-3">

                            <p className="text-xs text-gray-500">
                              {t.whyPartner.portal.growth}
                            </p>

                            <p className="text-xl font-bold text-[#159447]">
                              ↑
                            </p>

                          </div>

                        </div>

                      </div>

                    ) : item.title === t.whyPartner.onboarding.title ? (

                      <div className="relative flex h-full w-full items-center justify-center">

                        <div className="relative h-32 w-56 rounded-2xl border border-[#B9DFC7] bg-white shadow-lg">

                          <div className="absolute left-6 top-6 h-12 w-12 rounded-full bg-[#E8F7EE]" />

                          <div className="absolute left-24 top-8 h-3 w-24 rounded-full bg-[#A5EBC0]" />

                          <div className="absolute left-24 top-16 h-3 w-16 rounded-full bg-[#D5EBDD]" />

                          <div className="absolute -right-5 -top-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#159447] text-white shadow-lg">

                            <Check size={35} />

                          </div>

                        </div>

                      </div>

                    ) : (

                      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#80D8B4] text-[#075E54]">

                        <span className="text-6xl font-bold">
                          ₹
                        </span>

                      </div>

                    )}

                  </div>

                  {/* Content */}

                  <div className="bg-[#F0FFF9] p-7">

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

          {/* BENEFITS */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl border border-[#D5EBDD] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7EE] text-[#159447]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t.howItWorks.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              {t.howItWorks.title1}
              <span className="text-[#159447]">
                {" "}{t.howItWorks.title2}
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              {t.howItWorks.description}
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {steps.map((step) => (

              <div
                key={step.number}
                className="relative rounded-3xl border border-[#D5EBDD] bg-[#F8FCF9] p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="text-5xl font-black text-[#159447]/15">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          PARTNER BENEFITS STRIP
      ====================================================== */}

      <section className="bg-[#075E54] px-6 py-20 text-white">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">

          {t.strip.map((item) => (

            <div
              key={item}
              className="flex items-center gap-4"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#159447]">
                <Check size={19} />
              </div>

              <span className="font-semibold">
                {item}
              </span>

            </div>

          ))}

        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="bg-[#FFFDF5] px-6 py-24">

        <div className="mx-auto max-w-4xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t.faq.label}
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              {t.faq.title}
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              {t.faq.description}
            </p>

          </div>

          <div className="mt-12 space-y-4">

            {t.faq.items.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-[#D5EBDD] bg-white p-6"
              >

                <summary className="cursor-pointer list-none pr-8 text-lg font-bold">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section
        id="become-partner"
        className="bg-[#FFFDF5] px-6 py-28"
      >

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#159447] to-[#0e7c39] px-8 py-16 text-center text-white md:px-16">

          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-black/10" />

          <div className="relative z-10">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <Handshake size={32} />
            </div>

            <h2 className="text-4xl font-bold md:text-5xl">
              {t.cta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {t.cta.description}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#159447] transition-all hover:bg-[#F1FFF5]"
              >
                {t.cta.become}
                <ArrowRight size={18} />
              </button>

              <a
                href="#partnership-types"
                className="rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition-all hover:bg-white/10"
              >
                {t.cta.explore}
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP POPUP
      ====================================================== */}

      <PartnershipPopup />

      <Footer />

    </div>
  );
}