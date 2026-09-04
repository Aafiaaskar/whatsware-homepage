import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* ============================================================
   TYPES
============================================================ */

type Language = "EN" | "TA";

type Resource = {
  category: string;
  type: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
};

type VideoResource = {
  title: string;
  description: string;
  duration: string;
  image: string;
};

/* ============================================================
   TRANSLATIONS
============================================================ */

const TEXT = {
  EN: {
    heroBadge: "WhatsWare Resources",
    heroTitle1: "Learn. Automate.",
    heroTitle2: "Grow with WhatsApp.",
    heroDescription:
      "Explore practical guides, strategies, tutorials, videos, and insights to help your business get more from WhatsApp.",

    searchPlaceholder: "Search resources...",
    search: "Search",

    featuredInsight: "FEATURED INSIGHT",
    featuredTitle:
      "Turn every customer conversation into an opportunity.",
    featuredDescription:
      "Learn how automation, AI, and WhatsApp can transform the way your business communicates.",

    customerMessage: "Customer message",
    conversationAutomated: "Conversation automated",

    featured: "Featured",
    latestInsight: "Start with our latest insight",
    whatsappAutomation: "WHATSAPP AUTOMATION",
    featuredDate: "August 8, 2026 · 6 min read",
    featuredArticle:
      "How WhatsApp AI Agents Can Transform Customer Support",
    featuredArticleDescription:
      "Discover how AI-powered WhatsApp conversations can help businesses respond faster, automate repetitive questions, and create better customer experiences.",
    readFeatured: "Read Featured Article",

    explore: "Explore",
    latestResources: "Latest Resources",
    resourceDescription:
      "Guides, articles, videos, and practical resources for growing businesses.",

    exploreButton: "Explore",
    noResources: "No resources found",
    tryAnother: "Try another search term or category.",

    watchLearn: "Watch & Learn",
    videosTitle: "See WhatsApp automation in action",
    videosDescription:
      "Short videos to help you understand automation, AI, sales, and customer engagement.",
    watchVideo: "Watch Video",

    learnByDoing: "Learn by doing",
    simpleAutomation:
      "See how simple WhatsApp automation can be.",
    interactiveDescription:
      "Explore visual guides and interactive examples that show how WhatsWare can automate conversations, qualify leads, manage support, and help your team sell more.",

    automateConversations: "Automate conversations",
    captureLeads: "Capture leads",
    followUp: "Follow up automatically",
    supportCustomers: "Support customers faster",
    automationMotion: "✦ Automation in motion",

    readyToGrow: "Ready to grow?",
    ctaTitle:
      "Turn WhatsApp conversations into business growth.",
    ctaDescription:
      "Start building better customer experiences with WhatsWare's WhatsApp automation, CRM, and AI tools.",
    getStarted: "Get Started",
    talkToSales: "Talk to Sales",

    categories: {
      All: "All",
      "WhatsApp Marketing": "WhatsApp Marketing",
      Automation: "Automation",
      "WhatsApp AI": "WhatsApp AI",
      "CRM & Sales": "CRM & Sales",
      "Customer Support": "Customer Support",
      "Business Guides": "Business Guides",
    },

    types: {
      Article: "Article",
      GIF: "GIF",
      Video: "Video",
      Guide: "Guide",
    },

    resources: [
      {
        category: "WhatsApp AI",
        type: "Article",
        title: "How WhatsApp AI Agents Can Transform Customer Support",
        description:
          "Discover how AI-powered WhatsApp conversations can help businesses respond faster and deliver better customer experiences.",
        date: "August 8, 2026",
        readTime: "6 min read",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Automation",
        type: "GIF",
        title:
          "WhatsApp Automation: A Complete Guide for Growing Businesses",
        description:
          "Learn how automation can handle repetitive conversations, follow-ups, notifications, and customer journeys.",
        date: "August 5, 2026",
        readTime: "7 min read",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "WhatsApp Marketing",
        type: "Article",
        title:
          "10 WhatsApp Marketing Strategies to Grow Your Business",
        description:
          "Practical WhatsApp marketing strategies to generate leads, engage customers, and increase conversions.",
        date: "August 2, 2026",
        readTime: "8 min read",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "CRM & Sales",
        type: "Article",
        title:
          "WhatsApp CRM: Turn Customer Conversations into Sales",
        description:
          "See how combining WhatsApp conversations with CRM workflows can help your sales team close more opportunities.",
        date: "July 28, 2026",
        readTime: "6 min read",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Customer Support",
        type: "Video",
        title:
          "Build a Customer Support Hub on WhatsApp",
        description:
          "Bring conversations, teams, automation, and customer support workflows together in one place.",
        date: "July 24, 2026",
        readTime: "5 min watch",
        image:
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Business Guides",
        type: "Guide",
        title:
          "WhatsApp Business API: Everything You Need to Know",
        description:
          "A simple guide to understanding WhatsApp Business API, messaging, automation, and business communication.",
        date: "July 20, 2026",
        readTime: "9 min read",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "WhatsApp Marketing",
        type: "GIF",
        title:
          "WhatsApp Broadcasts: Best Practices for Better Engagement",
        description:
          "Learn how to create useful broadcast campaigns without overwhelming your customers.",
        date: "July 16, 2026",
        readTime: "5 min read",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Automation",
        type: "Video",
        title:
          "How to Automate Customer Follow-Ups on WhatsApp",
        description:
          "Turn missed opportunities into conversions with automated reminders and personalized follow-up journeys.",
        date: "July 12, 2026",
        readTime: "6 min watch",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Customer Support",
        type: "Guide",
        title:
          "Create Better Customer Experiences with WhatsApp",
        description:
          "Discover practical ways to make customer conversations faster, smarter, and more personalized.",
        date: "July 8, 2026",
        readTime: "7 min read",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
      },
    ] as Resource[],

    videos: [
      {
        title: "Getting Started with WhatsApp Automation",
        description:
          "Learn how to automate conversations and repetitive customer tasks.",
        duration: "04:32",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "How WhatsApp AI Agents Work",
        description:
          "See how AI agents can answer questions and help customers instantly.",
        duration: "06:18",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Turn WhatsApp Conversations into Sales",
        description:
          "Discover how sales teams can use WhatsApp to capture and convert leads.",
        duration: "05:47",
        image:
          "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1200&q=85",
      },
    ] as VideoResource[],
  },

  /* ============================================================
     TAMIL
  ============================================================ */

  TA: {
    heroBadge: "WhatsWare வளங்கள்",
    heroTitle1: "கற்றுக்கொள்ளுங்கள். தானியக்கமாக்குங்கள்.",
    heroTitle2: "WhatsApp மூலம் வளருங்கள்.",
    heroDescription:
      "உங்கள் வணிகம் WhatsApp மூலம் அதிக பயன் பெற நடைமுறை வழிகாட்டிகள், உத்திகள், பயிற்சிகள், வீடியோக்கள் மற்றும் தகவல்களைப் பாருங்கள்.",

    searchPlaceholder: "வளங்களைத் தேடுங்கள்...",
    search: "தேடுக",

    featuredInsight: "சிறப்பு தகவல்",
    featuredTitle:
      "ஒவ்வொரு வாடிக்கையாளர் உரையாடலையும் ஒரு வாய்ப்பாக மாற்றுங்கள்.",
    featuredDescription:
      "தானியக்கம், AI மற்றும் WhatsApp உங்கள் வணிகத் தொடர்புகளை எவ்வாறு மாற்ற முடியும் என்பதை அறியுங்கள்.",

    customerMessage: "வாடிக்கையாளர் செய்தி",
    conversationAutomated: "உரையாடல் தானியக்கமாக்கப்பட்டது",

    featured: "சிறப்பு",
    latestInsight: "எங்களின் சமீபத்திய தகவலுடன் தொடங்குங்கள்",
    whatsappAutomation: "WHATSAPP தானியக்கம்",
    featuredDate: "ஆகஸ்ட் 8, 2026 · 6 நிமிட வாசிப்பு",
    featuredArticle:
      "WhatsApp AI Agents வாடிக்கையாளர் ஆதரவை எவ்வாறு மாற்றும்",
    featuredArticleDescription:
      "AI மூலம் இயக்கப்படும் WhatsApp உரையாடல்கள் வணிகங்கள் வேகமாக பதிலளிக்கவும், மீண்டும் மீண்டும் வரும் கேள்விகளை தானியக்கமாக்கவும், சிறந்த வாடிக்கையாளர் அனுபவங்களை உருவாக்கவும் எவ்வாறு உதவுகின்றன என்பதை அறியுங்கள்.",
    readFeatured: "சிறப்பு கட்டுரையைப் படிக்கவும்",

    explore: "ஆராயுங்கள்",
    latestResources: "சமீபத்திய வளங்கள்",
    resourceDescription:
      "வளரும் வணிகங்களுக்கான வழிகாட்டிகள், கட்டுரைகள், வீடியோக்கள் மற்றும் நடைமுறை வளங்கள்.",

    exploreButton: "ஆராயுங்கள்",
    noResources: "வளங்கள் எதுவும் கிடைக்கவில்லை",
    tryAnother:
      "வேறு தேடல் சொல் அல்லது வகையை முயற்சிக்கவும்.",

    watchLearn: "பார்த்து கற்றுக்கொள்ளுங்கள்",
    videosTitle:
      "WhatsApp தானியக்கம் செயல்படுவதைப் பாருங்கள்",
    videosDescription:
      "தானியக்கம், AI, விற்பனை மற்றும் வாடிக்கையாளர் ஈடுபாட்டைப் புரிந்துகொள்ள உதவும் குறுகிய வீடியோக்கள்.",
    watchVideo: "வீடியோவைப் பாருங்கள்",

    learnByDoing: "செய்து கற்றுக்கொள்ளுங்கள்",
    simpleAutomation:
      "WhatsApp தானியக்கம் எவ்வளவு எளிமையாக இருக்க முடியும் என்பதைப் பாருங்கள்.",
    interactiveDescription:
      "WhatsWare எவ்வாறு உரையாடல்களை தானியக்கமாக்குகிறது, லீட்களைத் தகுதி பெறச் செய்கிறது, ஆதரவை நிர்வகிக்கிறது மற்றும் உங்கள் குழுவிற்கு அதிக விற்பனை செய்ய உதவுகிறது என்பதை காட்டும் காட்சி வழிகாட்டிகள் மற்றும் உதாரணங்களைப் பாருங்கள்.",

    automateConversations: "உரையாடல்களை தானியக்கமாக்குங்கள்",
    captureLeads: "லீட்களைப் பெறுங்கள்",
    followUp: "தானியங்கி பின்தொடர்தலை செய்யுங்கள்",
    supportCustomers: "வாடிக்கையாளர்களுக்கு வேகமாக ஆதரவு வழங்குங்கள்",
    automationMotion: "✦ தானியக்கம் செயல்பாட்டில்",

    readyToGrow: "வளர தயாரா?",
    ctaTitle:
      "WhatsApp உரையாடல்களை வணிக வளர்ச்சியாக மாற்றுங்கள்.",
    ctaDescription:
      "WhatsWare-ன் WhatsApp தானியக்கம், CRM மற்றும் AI கருவிகளுடன் சிறந்த வாடிக்கையாளர் அனுபவங்களை உருவாக்கத் தொடங்குங்கள்.",
    getStarted: "தொடங்குங்கள்",
    talkToSales: "விற்பனை குழுவுடன் பேசுங்கள்",

    categories: {
      All: "அனைத்தும்",
      "WhatsApp Marketing": "WhatsApp மார்க்கெட்டிங்",
      Automation: "தானியக்கம்",
      "WhatsApp AI": "WhatsApp AI",
      "CRM & Sales": "CRM மற்றும் விற்பனை",
      "Customer Support": "வாடிக்கையாளர் ஆதரவு",
      "Business Guides": "வணிக வழிகாட்டிகள்",
    },

    types: {
      Article: "கட்டுரை",
      GIF: "GIF",
      Video: "வீடியோ",
      Guide: "வழிகாட்டி",
    },

    resources: [
      {
        category: "WhatsApp AI",
        type: "Article",
        title:
          "WhatsApp AI Agents வாடிக்கையாளர் ஆதரவை எவ்வாறு மாற்றும்",
        description:
          "AI மூலம் இயக்கப்படும் WhatsApp உரையாடல்கள் வணிகங்கள் வேகமாக பதிலளித்து சிறந்த வாடிக்கையாளர் அனுபவங்களை வழங்க எவ்வாறு உதவுகின்றன என்பதை அறியுங்கள்.",
        date: "ஆகஸ்ட் 8, 2026",
        readTime: "6 நிமிட வாசிப்பு",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Automation",
        type: "GIF",
        title:
          "WhatsApp தானியக்கம்: வளரும் வணிகங்களுக்கான முழுமையான வழிகாட்டி",
        description:
          "மீண்டும் மீண்டும் வரும் உரையாடல்கள், பின்தொடர்தல்கள், அறிவிப்புகள் மற்றும் வாடிக்கையாளர் பயணங்களை தானியக்கம் எவ்வாறு நிர்வகிக்கிறது என்பதை அறியுங்கள்.",
        date: "ஆகஸ்ட் 5, 2026",
        readTime: "7 நிமிட வாசிப்பு",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "WhatsApp Marketing",
        type: "Article",
        title:
          "உங்கள் வணிகத்தை வளர்க்க 10 WhatsApp மார்க்கெட்டிங் உத்திகள்",
        description:
          "லீட்களை உருவாக்கவும், வாடிக்கையாளர்களை ஈடுபடுத்தவும், மாற்றங்களை அதிகரிக்கவும் உதவும் நடைமுறை WhatsApp மார்க்கெட்டிங் உத்திகள்.",
        date: "ஆகஸ்ட் 2, 2026",
        readTime: "8 நிமிட வாசிப்பு",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "CRM & Sales",
        type: "Article",
        title:
          "WhatsApp CRM: வாடிக்கையாளர் உரையாடல்களை விற்பனையாக மாற்றுங்கள்",
        description:
          "WhatsApp உரையாடல்களையும் CRM பணிச்செயல்முறைகளையும் இணைப்பது உங்கள் விற்பனை குழுவிற்கு அதிக வாய்ப்புகளை முடிக்க எவ்வாறு உதவுகிறது என்பதைப் பாருங்கள்.",
        date: "ஜூலை 28, 2026",
        readTime: "6 நிமிட வாசிப்பு",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Customer Support",
        type: "Video",
        title:
          "WhatsApp-ல் வாடிக்கையாளர் ஆதரவு மையத்தை உருவாக்குங்கள்",
        description:
          "உரையாடல்கள், குழுக்கள், தானியக்கம் மற்றும் வாடிக்கையாளர் ஆதரவு பணிச்செயல்முறைகளை ஒரே இடத்தில் கொண்டு வாருங்கள்.",
        date: "ஜூலை 24, 2026",
        readTime: "5 நிமிட வீடியோ",
        image:
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Business Guides",
        type: "Guide",
        title:
          "WhatsApp Business API: நீங்கள் தெரிந்துகொள்ள வேண்டிய அனைத்தும்",
        description:
          "WhatsApp Business API, மெசேஜிங், தானியக்கம் மற்றும் வணிகத் தொடர்புகளைப் புரிந்துகொள்ள எளிய வழிகாட்டி.",
        date: "ஜூலை 20, 2026",
        readTime: "9 நிமிட வாசிப்பு",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "WhatsApp Marketing",
        type: "GIF",
        title:
          "WhatsApp Broadcasts: சிறந்த ஈடுபாட்டிற்கான நடைமுறைகள்",
        description:
          "வாடிக்கையாளர்களை அதிகமாக தொந்தரவு செய்யாமல் பயனுள்ள Broadcast பிரச்சாரங்களை உருவாக்குவது எப்படி என்பதை அறியுங்கள்.",
        date: "ஜூலை 16, 2026",
        readTime: "5 நிமிட வாசிப்பு",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Automation",
        type: "Video",
        title:
          "WhatsApp-ல் வாடிக்கையாளர் பின்தொடர்தல்களை தானியக்கமாக்குவது எப்படி",
        description:
          "தானியங்கி நினைவூட்டல்கள் மற்றும் தனிப்பயனாக்கப்பட்ட பின்தொடர்தல் பயணங்கள் மூலம் தவறவிட்ட வாய்ப்புகளை மாற்றங்களாக மாற்றுங்கள்.",
        date: "ஜூலை 12, 2026",
        readTime: "6 நிமிட வீடியோ",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
      },
      {
        category: "Customer Support",
        type: "Guide",
        title:
          "WhatsApp மூலம் சிறந்த வாடிக்கையாளர் அனுபவங்களை உருவாக்குங்கள்",
        description:
          "வாடிக்கையாளர் உரையாடல்களை வேகமாகவும், புத்திசாலித்தனமாகவும், தனிப்பயனாக்கப்பட்டதாகவும் மாற்றும் நடைமுறை வழிகளை அறியுங்கள்.",
        date: "ஜூலை 8, 2026",
        readTime: "7 நிமிட வாசிப்பு",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
      },
    ] as Resource[],

    videos: [
      {
        title: "WhatsApp தானியக்கத்துடன் தொடங்குவது எப்படி",
        description:
          "உரையாடல்கள் மற்றும் மீண்டும் மீண்டும் செய்யப்படும் வாடிக்கையாளர் பணிகளை தானியக்கமாக்குவது எப்படி என்பதை அறியுங்கள்.",
        duration: "04:32",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "WhatsApp AI Agents எவ்வாறு செயல்படுகின்றன",
        description:
          "AI Agents கேள்விகளுக்கு பதிலளித்து வாடிக்கையாளர்களுக்கு உடனடியாக உதவுவது எப்படி என்பதைப் பாருங்கள்.",
        duration: "06:18",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "WhatsApp உரையாடல்களை விற்பனையாக மாற்றுங்கள்",
        description:
          "விற்பனை குழுக்கள் WhatsApp மூலம் லீட்களைப் பெற்று மாற்றுவது எப்படி என்பதை அறியுங்கள்.",
        duration: "05:47",
        image:
          "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1200&q=85",
      },
    ] as VideoResource[],
  },
};

/* ============================================================
   COMPONENT
============================================================ */

export default function Resources() {
  const { language } = useLanguage();

  const currentLanguage: Language =
    language === "TA" ? "TA" : "EN";

  const t = TEXT[currentLanguage];

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const categories = Object.keys(
    t.categories
  ) as Array<keyof typeof t.categories>;

  const filteredResources = useMemo(() => {
    const query = search.toLowerCase().trim();

    return t.resources.filter((resource) => {
      const categoryMatch =
        activeCategory === "All" ||
        resource.category === activeCategory;

      const searchMatch =
        !query ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search, t.resources]);

  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans text-gray-900">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#FFFDF5] px-6 pb-20 pt-28 sm:pt-32">
        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#159447]/10 blur-3xl" />

        <div className="absolute right-[-100px] top-10 h-96 w-96 rounded-full bg-[#B8E8C9]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* HERO TEXT */}

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#159447]/20 bg-white px-4 py-2 text-sm font-semibold text-[#159447] shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#159447]" />

              {t.heroBadge}
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.heroTitle1}

              <br />

              <span className="bg-gradient-to-r from-[#159447] to-[#55B878] bg-clip-text text-transparent">
                {t.heroTitle2}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              {t.heroDescription}
            </p>

            {/* SEARCH */}

            <div className="mt-8 max-w-xl">
              <div className="flex items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-200/40">

                <span className="px-4 text-xl text-gray-400">
                  ⌕
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400 sm:text-base"
                />

                <button
                  type="button"
                  onClick={() => {}}
                  className="rounded-xl bg-[#159447] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#117B3A]"
                >
                  {t.search}
                </button>

              </div>
            </div>
          </div>

          {/* HERO VISUAL */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-[#159447]/10">

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#075E54]">

                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=90"
                  alt="Business team using digital communication tools"
                  className="h-full w-full object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-[#075E54] via-[#075E54]/60 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">

                  <div className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {t.featuredInsight}
                  </div>

                  <h2 className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {t.featuredTitle}
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-green-50">
                    {t.featuredDescription}
                  </p>

                </div>

                {/* FLOATING NOTIFICATION */}

                <div className="absolute right-5 top-5 rounded-2xl bg-white p-4 shadow-xl sm:right-7 sm:top-7">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9F8EF] text-lg text-[#159447]">
                      ✓
                    </div>

                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        {t.customerMessage}
                      </p>

                      <p className="text-sm font-bold text-gray-900">
                        {t.conversationAutomated}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#159447]/20 blur-2xl" />

            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-[#8B5A2B]/10 blur-2xl" />
          </div>

        </div>
      </section>

      {/* =====================================================
          CATEGORY FILTERS
      ===================================================== */}

      <section className="border-y border-gray-100 bg-white/80 px-6 py-5 backdrop-blur-md">

        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1">

          {categories.map((category) => {

            const active =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? "bg-[#159447] text-white shadow-lg shadow-[#159447]/20"
                    : "bg-[#F4F7F4] text-gray-600 hover:bg-[#E9F8EF] hover:text-[#159447]"
                }`}
              >
                {t.categories[category]}
              </button>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          FEATURED RESOURCE
      ===================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8">

            <p className="text-sm font-bold uppercase tracking-widest text-[#159447]">
              {t.featured}
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              {t.latestInsight}
            </h2>

          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl lg:grid-cols-2">

            <div className="relative min-h-[320px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=90"
                alt="WhatsApp automation and business strategy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#075E54]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">

                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#159447] backdrop-blur">
                  {t.whatsappAutomation}
                </span>

              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">

              <p className="text-sm font-medium text-gray-500">
                {t.featuredDate}
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight">
                {t.featuredArticle}
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                {t.featuredArticleDescription}
              </p>

              <button
                type="button"
                className="mt-8 flex w-fit items-center gap-2 rounded-xl bg-[#159447] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#117B3A]"
              >
                {t.readFeatured}

                <span>→</span>
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          RESOURCE GRID
      ===================================================== */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-widest text-[#159447]">
                {t.explore}
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                {t.latestResources}
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              {t.resourceDescription}
            </p>

          </div>

          {filteredResources.length > 0 ? (

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {filteredResources.map((resource) => (

                <article
                  key={resource.title}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#159447]/30 hover:shadow-2xl hover:shadow-[#159447]/10"
                >

                  {/* IMAGE */}

                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">

                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#159447] shadow-sm backdrop-blur">
                      {t.types[
                        resource.type as keyof typeof t.types
                      ]}
                    </div>

                    {resource.type === "Video" && (

                      <button
                        type="button"
                        aria-label={t.watchVideo}
                        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#159447] shadow-xl transition hover:scale-110"
                      >
                        <span className="ml-1 text-xl">
                          ▶
                        </span>
                      </button>

                    )}

                  </div>

                  {/* CONTENT */}

                  <div className="p-6">

                    <div className="flex items-center justify-between gap-3">

                      <span className="text-xs font-bold uppercase tracking-wide text-[#159447]">
                        {t.categories[
                          resource.category as keyof typeof t.categories
                        ]}
                      </span>

                      <span className="text-xs text-gray-400">
                        {resource.readTime}
                      </span>

                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-7 transition group-hover:text-[#159447]">
                      {resource.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {resource.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                      <span className="text-xs text-gray-500">
                        {resource.date}
                      </span>

                      <button
                        type="button"
                        className="flex items-center gap-2 text-sm font-bold text-[#159447] transition-all group-hover:gap-3"
                      >
                        {t.exploreButton}

                        <span>→</span>
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center">

              <div className="text-4xl">
                ⌕
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {t.noResources}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {t.tryAnother}
              </p>

            </div>

          )}

        </div>
      </section>

      {/* =====================================================
          VIDEO RESOURCES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F1F8F3] px-6 py-20">

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#159447]/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#B8E8C9]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#159447] shadow-sm">

              <span>▶</span>

              {t.watchLearn}

            </div>

            <h2 className="text-3xl font-bold sm:text-4xl">
              {t.videosTitle}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {t.videosDescription}
            </p>

          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {t.videos.map((video) => (

              <article
                key={video.title}
                className="group overflow-hidden rounded-3xl border border-white bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative aspect-video overflow-hidden">

                  <img
                    src={video.image}
                    alt={video.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20" />

                  <button
                    type="button"
                    aria-label={t.watchVideo}
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#159447] shadow-2xl transition duration-300 hover:scale-110"
                  >
                    <span className="ml-1 text-xl">
                      ▶
                    </span>
                  </button>

                  <div className="absolute bottom-4 right-4 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-semibold text-white">
                    {video.duration}
                  </div>

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold leading-7 transition group-hover:text-[#159447]">
                    {video.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {video.description}
                  </p>

                  <button
                    type="button"
                    className="mt-5 flex items-center gap-2 text-sm font-bold text-[#159447]"
                  >
                    {t.watchVideo}

                    <span>→</span>
                  </button>

                </div>

              </article>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          INTERACTIVE SECTION
      ===================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl lg:grid-cols-2 lg:p-10">

          <div className="relative overflow-hidden rounded-3xl bg-[#075E54]">

            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85"
              alt="WhatsApp automation workflow"
              className="aspect-video h-full w-full object-cover opacity-80"
            />

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="rounded-2xl bg-white/90 px-5 py-3 text-sm font-bold text-[#159447] shadow-xl backdrop-blur">
                {t.automationMotion}
              </div>

            </div>

          </div>

          <div className="p-2 lg:p-6">

            <p className="text-sm font-bold uppercase tracking-widest text-[#159447]">
              {t.learnByDoing}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              {t.simpleAutomation}
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              {t.interactiveDescription}
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              {[
                t.automateConversations,
                t.captureLeads,
                t.followUp,
                t.supportCustomers,
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#F1F8F3] px-4 py-3"
                >

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#159447] text-sm font-bold text-white">
                    ✓
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 pb-20">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#159447] px-8 py-16 text-center text-white sm:px-12">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <div className="mb-4 text-4xl">
              ✦
            </div>

            <p className="text-sm font-bold uppercase tracking-widest text-green-100">
              {t.readyToGrow}
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
              {t.ctaTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-green-50 sm:text-base">
              {t.ctaDescription}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="#start"
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#159447] transition hover:bg-green-50"
              >
                {t.getStarted}
              </a>

              <a
                href="https://wa.me/918056819125?text=Hi%20WhatsWare%20team%2C%20I%27d%20like%20to%20talk%20to%20sales."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                {t.talkToSales}
              </a>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}