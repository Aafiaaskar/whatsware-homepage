import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  Bot,
  Users,
  Zap,
  BarChart3,
  Workflow,
  CreditCard,
  Megaphone,
  QrCode,
  Link2,
  Headphones,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Home,
  Utensils,
  Building2,
  Plane,
  Store,
  Play,
  Globe2,
  Smartphone,
  MousePointerClick,
  Star,
  Rocket,
  Layers3,
} from "lucide-react";

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const tamil = language === "TA";

  /*
  ============================================================
  WHATSWARE BRAND ASSET
  ============================================================

  This is the ONLY image used on this page.

  File location:
  public/whatsware-logo.png

  Browser path:
  /whatsware-logo.png

  No external Unsplash images are used anywhere.
  ============================================================
  */

  const logo = "/whatsware-logo.png";

  /* ============================================================
     PLATFORM FEATURES
  ============================================================ */

  const features = [
    {
      icon: MessageCircle,
      title: tamil ? "WhatsApp ஆட்டோமேஷன்" : "WhatsApp Automation",
      description: tamil
        ? "ஸ்மார்ட் workflows, உடனடி பதில்கள், வரவேற்பு செய்திகள், நினைவூட்டல்கள் மற்றும் follow-ups மூலம் தினசரி வாடிக்கையாளர் உரையாடல்களை தானியக்கமாக்குங்கள்."
        : "Automate everyday customer conversations with smart workflows, instant replies, welcome messages, reminders and follow-ups.",
      points: tamil
        ? [
            "தானியங்கி வாடிக்கையாளர் பதில்கள்",
            "வரவேற்பு மற்றும் away செய்திகள்",
            "Keyword அடிப்படையிலான automation",
            "ஸ்மார்ட் follow-ups",
          ]
        : [
            "Automated customer replies",
            "Welcome & away messages",
            "Keyword-based automation",
            "Smart follow-ups",
          ],
      href: "/products/whatsapp-automation",
      iconBg: "bg-[#E8F8E8]",
      iconColor: "text-[#159447]",
    },

    {
      icon: Megaphone,
      title: tamil
        ? "Bulk Messaging & Broadcasts"
        : "Bulk Messaging & Broadcasts",
      description: tamil
        ? "ஆயிரக்கணக்கான வாடிக்கையாளர்களை targeted WhatsApp campaigns மூலம் சென்றடையுங்கள்."
        : "Reach thousands of customers with targeted WhatsApp campaigns while keeping your communication organized and relevant.",
      points: tamil
        ? [
            "Bulk WhatsApp broadcasts",
            "திருவிழா மற்றும் promotional campaigns",
            "வாடிக்கையாளர் segmentation",
            "Campaign management",
          ]
        : [
            "Bulk WhatsApp broadcasts",
            "Festival & promotional campaigns",
            "Customer segmentation",
            "Campaign management",
          ],
      href: "/products/whatsapp-broadcast",
      iconBg: "bg-[#FFF4D9]",
      iconColor: "text-[#D99100]",
    },

    {
      icon: Bot,
      title: tamil ? "AI Agents & Chatbots" : "AI Agents & Chatbots",
      description: tamil
        ? "AI-powered agents மூலம் கேள்விகளுக்கு பதிலளித்து, leads-ஐ qualify செய்து, உரையாடல்களை வழிநடத்துங்கள்."
        : "Give your customers instant assistance with AI-powered agents that can answer questions, qualify leads and guide conversations.",
      points: tamil
        ? [
            "AI-powered conversations",
            "Lead qualification",
            "தானியங்கி FAQs",
            "24/7 வாடிக்கையாளர் உதவி",
          ]
        : [
            "AI-powered conversations",
            "Lead qualification",
            "Automated FAQs",
            "24/7 customer assistance",
          ],
      href: "/products/ai-agents",
      iconBg: "bg-[#F0EAFE]",
      iconColor: "text-[#7B4DFF]",
    },

    {
      icon: Target,
      title: tamil
        ? "Lead Capture & Qualification"
        : "Lead Capture & Qualification",
      description: tamil
        ? "வாடிக்கையாளர் தகவல்களை சேகரித்து high-intent leads-ஐ தானாக அடையாளம் காணுங்கள்."
        : "Turn conversations into qualified opportunities by capturing customer information and automatically identifying high-intent leads.",
      points: tamil
        ? [
            "Lead capture forms",
            "AI lead qualification",
            "Click-to-WhatsApp campaigns",
            "Lead nurturing",
          ]
        : [
            "Lead capture forms",
            "AI lead qualification",
            "Click-to-WhatsApp campaigns",
            "Lead nurturing",
          ],
      href: "/products/ai-lead-qualification",
      iconBg: "bg-[#E7F5FF]",
      iconColor: "text-[#1687D9]",
    },

    {
      icon: Zap,
      title: tamil ? "Automated Follow-ups" : "Automated Follow-ups",
      description: tamil
        ? "தானியங்கி follow-up journeys மூலம் எந்த valuable lead-யும் தவறவிடாதீர்கள்."
        : "Never let a valuable lead go cold. Create automated follow-up journeys that keep your business connected with customers.",
      points: tamil
        ? [
            "Scheduled follow-ups",
            "Lead nurturing sequences",
            "Reminder automation",
            "Customer re-engagement",
          ]
        : [
            "Scheduled follow-ups",
            "Lead nurturing sequences",
            "Reminder automation",
            "Customer re-engagement",
          ],
      href: "/products/automated-followups",
      iconBg: "bg-[#FFF0F3]",
      iconColor: "text-[#E94B70]",
    },

    {
      icon: Users,
      title: tamil ? "Shared Team Inbox" : "Shared Team Inbox",
      description: tamil
        ? "முழு customer communication team-ஐ ஒரே shared workspace-ல் இணைக்கவும்."
        : "Bring your entire customer communication team together in one shared workspace for faster and more organized support.",
      points: tamil
        ? [
            "Shared WhatsApp inbox",
            "Team collaboration",
            "Conversation assignment",
            "Customer conversation history",
          ]
        : [
            "Shared WhatsApp inbox",
            "Team collaboration",
            "Conversation assignment",
            "Customer conversation history",
          ],
      href: "/products/shared-team-inbox",
      iconBg: "bg-[#EAF7F3]",
      iconColor: "text-[#0E9F6E]",
    },

    {
      icon: Workflow,
      title: tamil ? "Workflow Builder" : "Workflow Builder",
      description: tamil
        ? "Triggers, actions மற்றும் conversations-ஐ இணைத்து powerful customer journeys உருவாக்குங்கள்."
        : "Build powerful customer journeys without complicated development. Connect triggers, actions and conversations into automated workflows.",
      points: tamil
        ? [
            "Visual workflow creation",
            "Multiple triggers",
            "Automated actions",
            "Custom customer journeys",
          ]
        : [
            "Visual workflow creation",
            "Multiple triggers",
            "Automated actions",
            "Custom customer journeys",
          ],
      href: "/products/workflow-builder",
      iconBg: "bg-[#F3EDFF]",
      iconColor: "text-[#805AD5]",
    },

    {
      icon: CreditCard,
      title: tamil
        ? "WhatsApp Sales & Payments"
        : "WhatsApp Sales & Payments",
      description: tamil
        ? "WhatsApp-based sales மற்றும் payment workflows மூலம் conversation-ஐ conversion ஆக மாற்றுங்கள்."
        : "Move customers from conversation to conversion with WhatsApp-based sales experiences and payment workflows.",
      points: tamil
        ? [
            "Product conversations",
            "Sales automation",
            "Payment workflows",
            "Order-related communication",
          ]
        : [
            "Product conversations",
            "Sales automation",
            "Payment workflows",
            "Order-related communication",
          ],
      href: "/products/whatsapp-sales",
      iconBg: "bg-[#EAF8EA]",
      iconColor: "text-[#159447]",
    },

    {
      icon: BarChart3,
      title: tamil ? "Analytics & Insights" : "Analytics & Insights",
      description: tamil
        ? "Meaningful analytics மூலம் WhatsApp communication எப்படி செயல்படுகிறது என்பதை புரிந்துகொள்ளுங்கள்."
        : "Understand how your WhatsApp communication performs with meaningful analytics that help your team make better decisions.",
      points: tamil
        ? [
            "Campaign performance",
            "Conversation analytics",
            "Team performance",
            "Customer engagement insights",
          ]
        : [
            "Campaign performance",
            "Conversation analytics",
            "Team performance",
            "Customer engagement insights",
          ],
      href: "/products/analytics",
      iconBg: "bg-[#FFF3E8]",
      iconColor: "text-[#E97816]",
    },

    {
      icon: QrCode,
      title: tamil ? "WhatsApp QR Codes" : "WhatsApp QR Codes",
      description: tamil
        ? "Offline மற்றும் online marketing-ஐ WhatsApp உடன் இணைத்து வாடிக்கையாளர்கள் உரையாடலை எளிதாக தொடங்க உதவுங்கள்."
        : "Make it easy for customers to start a conversation by connecting your offline and online marketing directly to WhatsApp.",
      points: tamil
        ? [
            "Custom WhatsApp QR codes",
            "Offline-to-online engagement",
            "Easy customer onboarding",
            "Campaign tracking",
          ]
        : [
            "Custom WhatsApp QR codes",
            "Offline-to-online engagement",
            "Easy customer onboarding",
            "Campaign tracking",
          ],
      href: "/products/whatsapp-qr-code",
      iconBg: "bg-[#EEFBE8]",
      iconColor: "text-[#159447]",
    },

    {
      icon: Link2,
      title: tamil
        ? "WhatsApp Links & Chat Widgets"
        : "WhatsApp Links & Chat Widgets",
      description: tamil
        ? "Simple WhatsApp links மற்றும் website chat experiences மூலம் visitors-ஐ conversations ஆக மாற்றுங்கள்."
        : "Convert website visitors into WhatsApp conversations with simple WhatsApp links and website chat experiences.",
      points: tamil
        ? [
            "WhatsApp link generation",
            "Website chat widgets",
            "One-click conversations",
            "Higher visitor engagement",
          ]
        : [
            "WhatsApp link generation",
            "Website chat widgets",
            "One-click conversations",
            "Higher visitor engagement",
          ],
      href: "/products/whatsapp-link-generator",
      iconBg: "bg-[#EAF4FF]",
      iconColor: "text-[#2779BD]",
    },

    {
      icon: Headphones,
      title: tamil ? "Customer Support" : "Customer Support",
      description: tamil
        ? "Automation, AI assistance மற்றும் team tools மூலம் வேகமான மற்றும் consistent customer support அனுபவத்தை உருவாக்குங்கள்."
        : "Build faster and more consistent customer support experiences with automation, AI assistance and collaborative team tools.",
      points: tamil
        ? [
            "Instant customer responses",
            "Support automation",
            "Team inbox",
            "AI-assisted support",
          ]
        : [
            "Instant customer responses",
            "Support automation",
            "Team inbox",
            "AI-assisted support",
          ],
      href: "/products/support-hub",
      iconBg: "bg-[#FFF1E8]",
      iconColor: "text-[#E56B1F]",
    },
  ];

  /* ============================================================
     BENEFITS
  ============================================================ */

  const benefits = [
    {
      icon: Sparkles,
      number: "01",
      title: tamil
        ? "நவீன வணிகங்களுக்காக உருவாக்கப்பட்டது"
        : "Built for Modern Businesses",
      description: tamil
        ? "Marketing, sales மற்றும் customer support-ஐ WhatsApp மூலம் ஒரே இடத்தில் இணைக்கவும்."
        : "Bring marketing, sales and customer support together through WhatsApp.",
    },

    {
      icon: ShieldCheck,
      number: "02",
      title: tamil ? "நம்பகமான தொடர்பு" : "Reliable Communication",
      description: tamil
        ? "Organized conversations மற்றும் automation மூலம் consistent customer experiences உருவாக்குங்கள்."
        : "Create consistent customer experiences with organized conversations and automation.",
    },

    {
      icon: TrendingUp,
      number: "03",
      title: tamil ? "வளர்ச்சிக்காக வடிவமைக்கப்பட்டது" : "Designed for Growth",
      description: tamil
        ? "Simple automation-ல் தொடங்கி advanced AI, campaigns மற்றும் workflows வரை scale செய்யுங்கள்."
        : "Start with simple automation and scale into advanced AI, campaigns and workflows.",
    },
  ];

  /* ============================================================
     INDUSTRIES
  ============================================================ */

  const industries = [
    {
      Icon: ShoppingBag,
      title: tamil ? "மின் வணிகம்" : "E-commerce",
      text: tamil
        ? "WhatsApp automation, broadcasts மற்றும் support மூலம் product conversations-ஐ sales ஆக மாற்றுங்கள்."
        : "Turn product conversations into sales with WhatsApp automation, broadcasts and support.",
      href: "/solutions/industry/e-commerce",
      bg: "from-[#EAF8EA] to-[#F8FFF6]",
    },

    {
      Icon: GraduationCap,
      title: tamil ? "கல்வி" : "Education",
      text: tamil
        ? "Instant answers, admissions support மற்றும் reminders மூலம் students மற்றும் parents-ஐ engage செய்யுங்கள்."
        : "Engage students and parents with instant answers, admissions support and reminders.",
      href: "/solutions/industry/edutech",
      bg: "from-[#EEF5FF] to-[#F9FBFF]",
    },

    {
      Icon: HeartPulse,
      title: tamil ? "சுகாதாரம்" : "Healthcare",
      text: tamil
        ? "Appointments, reminders மற்றும் patient support-ஐ எளிதாக நிர்வகிக்கவும்."
        : "Simplify appointment communication, reminders and patient support.",
      href: "/solutions/industry/health-wellness",
      bg: "from-[#FFF0F3] to-[#FFF9FA]",
    },

    {
      Icon: Home,
      title: tamil ? "Home Decor" : "Home Decor",
      text: tamil
        ? "Products-ஐ showcase செய்து enquiries-ஐ customers ஆக மாற்றுங்கள்."
        : "Showcase products, answer questions and convert enquiries into customers.",
      href: "/solutions/industry/home-decor",
      bg: "from-[#FFF6E8] to-[#FFFCF6]",
    },

    {
      Icon: Utensils,
      title: tamil ? "உணவகங்கள்" : "Restaurants",
      text: tamil
        ? "Orders, enquiries, promotions மற்றும் customer communication-ஐ ஒரே இடத்தில் நிர்வகிக்கவும்."
        : "Manage orders, enquiries, promotions and customer communication in one place.",
      href: "/solutions/industry/restaurant-food",
      bg: "from-[#FFF1E8] to-[#FFFBF8]",
    },

    {
      Icon: Building2,
      title: tamil ? "ரியல் எஸ்டேட்" : "Real Estate",
      text: tamil
        ? "Property enquiries-ஐ capture செய்து leads-ஐ qualify செய்து follow-ups-ஐ automate செய்யுங்கள்."
        : "Capture property enquiries, qualify leads and automate follow-ups.",
      href: "/solutions/industry/real-estate",
      bg: "from-[#F0EAFE] to-[#FAF8FF]",
    },

    {
      Icon: Plane,
      title: tamil ? "பயணம்" : "Travel",
      text: tamil
        ? "Instant responses, reminders மற்றும் updates மூலம் travellers-ஐ informed ஆக வைத்திருங்கள்."
        : "Keep travellers informed with instant responses, reminders and updates.",
      href: "/solutions/industry/travel-tourism",
      bg: "from-[#EAF6FF] to-[#F8FCFF]",
    },

    {
      Icon: Store,
      title: tamil ? "சில்லறை விற்பனை" : "Retail",
      text: tamil
        ? "Campaigns, conversations மற்றும் customer support-ஐ WhatsApp மூலம் இணைக்கவும்."
        : "Connect campaigns, conversations and customer support through WhatsApp.",
      href: "/solutions/industry/e-commerce",
      bg: "from-[#EEFBE8] to-[#FAFFF8]",
    },
  ];

  /* ============================================================
     JOURNEY
  ============================================================ */

  const journey = [
    {
      number: "01",
      title: tamil ? "ஈர்க்கவும்" : "Attract",
      text: "Click-to-WhatsApp Ads",
      icon: Megaphone,
    },
    {
      number: "02",
      title: tamil ? "சேகரிக்கவும்" : "Capture",
      text: "Forms & QR Codes",
      icon: QrCode,
    },
    {
      number: "03",
      title: tamil ? "தகுதி பார்க்கவும்" : "Qualify",
      text: "AI Agents",
      icon: Bot,
    },
    {
      number: "04",
      title: tamil ? "மாற்றவும்" : "Convert",
      text: "Sales & Payments",
      icon: CreditCard,
    },
    {
      number: "05",
      title: tamil ? "தக்கவைக்கவும்" : "Retain",
      text: "Support & Follow-ups",
      icon: Headphones,
    },
  ];

  /* ============================================================
     HERO STATS
  ============================================================ */

  const heroStats = [
    {
      icon: MessageCircle,
      value: "WhatsApp",
      label: tamil
        ? "வாடிக்கையாளர் உரையாடல்கள்"
        : "Customer conversations",
    },

    {
      icon: Bot,
      value: "AI",
      label: tamil ? "நுண்ணறிவு உதவி" : "Intelligent assistance",
    },

    {
      icon: Workflow,
      value: "Automation",
      label: tamil ? "சிறந்த workflows" : "Smarter workflows",
    },

    {
      icon: TrendingUp,
      value: "Growth",
      label: tamil ? "வணிக முடிவுகள்" : "Business outcomes",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <Navbar />

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative overflow-hidden bg-[#FFFDF5] pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#DDF7D7] blur-3xl opacity-70" />

        <div className="absolute top-20 -right-40 h-[550px] w-[550px] rounded-full bg-[#EAF7E5] blur-3xl opacity-80" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F3EEDC] blur-3xl opacity-50" />

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#159447 1px, transparent 1px), linear-gradient(90deg, #159447 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D6F0CE] bg-white px-4 py-2 text-sm font-semibold text-[#159447] shadow-sm"
            >
              <Sparkles className="w-4 h-4" />

              {tamil
                ? "WhatsApp-ல் உங்கள் வணிகத்திற்கு தேவையான அனைத்தும்"
                : "Everything your business needs on WhatsApp"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.04]"
            >
              {tamil ? "WhatsApp-ஐ உங்கள்" : "Turn WhatsApp into your"}

              <span className="block bg-gradient-to-r from-[#159447] via-[#24A95A] to-[#0D7C3B] bg-clip-text text-transparent">
                {tamil
                  ? "வணிக வளர்ச்சி இயந்திரமாக மாற்றுங்கள்"
                  : "business growth engine"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              {tamil
                ? "WhatsWare WhatsApp மார்க்கெட்டிங், automation, AI, sales மற்றும் customer support-ஐ ஒரே சக்திவாய்ந்த platform-ல் இணைக்கிறது — businesses வாடிக்கையாளர்களை ஈர்க்கவும், leads-ஐ convert செய்யவும், வலுவான உறவுகளை உருவாக்கவும் உதவுகிறது."
                : "WhatsWare brings WhatsApp marketing, automation, AI, sales and customer support into one powerful platform — helping businesses attract customers, convert leads and build stronger relationships."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/signup">
                <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 py-3.5 text-white font-bold shadow-lg shadow-[#159447]/20 hover:bg-[#117C3B] hover:-translate-y-0.5 transition-all">
                  {tamil ? "தொடங்குங்கள்" : "Get Started"}

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/products">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#CFE8C8] bg-white px-7 py-3.5 font-bold text-[#159447] hover:bg-[#F4FBF1] hover:-translate-y-0.5 transition-all">
                  {tamil ? "தளத்தை ஆராயுங்கள்" : "Explore Platform"}

                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* ====================================================
              HERO BRAND VISUAL
              NO EXTERNAL IMAGE
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-5xl mx-auto mt-12"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#DCEBD7] bg-white shadow-2xl shadow-[#159447]/10">
              <div className="grid md:grid-cols-[0.8fr_1.2fr] items-stretch">

                {/* LEFT */}
                <div className="relative flex flex-col justify-center p-7 md:p-10 bg-gradient-to-br from-[#F4FFF1] via-white to-[#EAF8E5]">
                  <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-[#159447]/10 blur-2xl" />

                  <div className="relative">
                    <div className="inline-flex items-center gap-3 rounded-2xl border border-[#D7EED0] bg-white/90 px-4 py-3 shadow-sm">
                      <img
                        src={logo}
                        alt="WhatsWare logo"
                        className="w-12 h-12 object-contain"
                      />

                      <div>
                        <div className="font-extrabold text-slate-900 text-lg">
                          WhatsWare
                        </div>

                        <div className="text-xs font-semibold text-[#159447]">
                          Smart WhatsApp Business Platform
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed">
                      {tamil
                        ? "Marketing, AI, automation, sales மற்றும் support — அனைத்தையும் ஒரே connected experience-ல் இணைக்கவும்."
                        : "Marketing, AI, automation, sales and support — connected in one powerful business experience."}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["AI", "Automation", "Marketing", "Sales"].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-full bg-[#EEFBE8] px-3 py-1.5 text-xs font-bold text-[#159447]"
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT — CSS VISUAL INSTEAD OF BROKEN IMAGE */}
                <div className="relative min-h-[300px] md:min-h-[360px] overflow-hidden bg-gradient-to-br from-[#075E54] via-[#159447] to-[#0B7A4B]">

                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                        backgroundSize: "38px 38px",
                      }}
                    />
                  </div>

                  <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

                  <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-[#BCE9AE]/20 blur-3xl" />

                  <div className="relative z-10 h-full flex items-center justify-center p-8">

                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full max-w-sm rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white p-3 shadow-xl">
                          <img
                            src={logo}
                            alt="WhatsWare logo"
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div>
                          <div className="text-white text-2xl font-extrabold">
                            WhatsWare
                          </div>

                          <div className="text-white/70 text-sm">
                            Business platform
                          </div>
                        </div>
                      </div>

                      <div className="mt-7 grid grid-cols-2 gap-3">
                        {[
                          ["AI Agents", Bot],
                          ["Automation", Workflow],
                          ["Broadcasts", Send],
                          ["Sales", TrendingUp],
                        ].map(([label, Icon], index) => {
                          const IconComponent =
                            Icon as typeof MessageCircle;

                          return (
                            <motion.div
                              key={String(label)}
                              animate={{
                                y: [0, index % 2 === 0 ? -4 : 4, 0],
                              }}
                              transition={{
                                duration: 3 + index * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="rounded-2xl bg-white/95 p-4 shadow-lg"
                            >
                              <div className="w-9 h-9 rounded-xl bg-[#EEFBE8] text-[#159447] flex items-center justify-center">
                                <IconComponent className="w-4 h-4" />
                              </div>

                              <div className="mt-3 text-xs font-bold text-slate-900">
                                {String(label)}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-5 bottom-5 rounded-2xl border border-white/20 bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={logo}
                        alt="WhatsWare"
                        className="w-9 h-9 object-contain"
                      />

                      <div>
                        <div className="text-sm font-extrabold text-slate-900">
                          WhatsWare AI
                        </div>

                        <div className="text-[11px] text-[#159447] font-semibold">
                          {tamil
                            ? "இப்போது செயல்பாட்டில்"
                            : "AI agent active"}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ====================================================
              HERO DASHBOARD
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="relative max-w-6xl mx-auto mt-16"
          >
            <div className="absolute -inset-5 bg-gradient-to-r from-[#159447]/10 via-[#FFFFFF] to-[#159447]/10 blur-2xl rounded-[3rem]" />

            <div className="relative rounded-[2rem] border border-[#DCEBD7] bg-white p-3 md:p-5 shadow-2xl shadow-[#159447]/10">

              <div className="flex items-center justify-between px-3 md:px-5 py-3 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD166]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6BCB77]" />
                </div>

                <div className="hidden sm:flex items-center gap-2 rounded-full bg-slate-50 border border-slate-100 px-5 py-1.5 text-xs text-slate-400">
                  <Globe2 className="w-3.5 h-3.5" />
                  app.whatsware.com
                </div>

                <div className="w-10" />
              </div>

              <div className="grid lg:grid-cols-[220px_1fr] min-h-[320px]">

                {/* SIDEBAR */}

                <div className="hidden lg:block border-r border-slate-100 p-5">
                  <div className="flex items-center gap-2 mb-8">
                    <img
                      src={logo}
                      alt="WhatsWare"
                      className="w-8 h-8 object-contain"
                    />

                    <span className="font-extrabold">
                      WhatsWare
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        label: "Overview",
                        icon: Layers3,
                        href: "/products",
                      },
                      {
                        label: "Messages",
                        icon: MessageCircle,
                        href: "/products/shared-team-inbox",
                      },
                      {
                        label: "Automation",
                        icon: Workflow,
                        href: "/products/workflow-builder",
                      },
                      {
                        label: "AI Agents",
                        icon: Bot,
                        href: "/products/ai-agents",
                      },
                      {
                        label: "Analytics",
                        icon: BarChart3,
                        href: "/products/analytics",
                      },
                    ].map((item, index) => {
                      const IconComponent = item.icon;

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 ${
                            index === 0
                              ? "bg-[#EEFBE8] text-[#159447]"
                              : "text-slate-500 hover:bg-[#F4FBF1] hover:text-[#159447]"
                          }`}
                        >
                          <IconComponent className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />

                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* DASHBOARD */}

                <div className="p-5 md:p-7 bg-[#FCFEFB]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-[#159447]">
                        {tamil
                          ? "வணிக மேலோட்டம்"
                          : "Business Overview"}
                      </p>

                      <h3 className="text-xl md:text-2xl font-extrabold mt-1">
                        {tamil
                          ? "மாற்றத்தை உருவாக்கும் உரையாடல்கள்"
                          : "Conversations that convert"}
                      </h3>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 rounded-xl bg-white border border-slate-100 px-3 py-2 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#159447]" />
                      Live
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      [
                        "12.8K",
                        tamil ? "உரையாடல்கள்" : "Conversations",
                        MessageCircle,
                      ],
                      [
                        "4.2K",
                        tamil ? "Qualified Leads" : "Qualified Leads",
                        Target,
                      ],
                      [
                        "87%",
                        tamil ? "பதில் விகிதம்" : "Response Rate",
                        Zap,
                      ],
                      [
                        "3.4X",
                        tamil ? "வளர்ச்சி" : "Growth",
                        TrendingUp,
                      ],
                    ].map(([value, label, Icon]) => {
                      const IconComponent =
                        Icon as typeof MessageCircle;

                      return (
                        <motion.div
                          key={String(label)}
                          whileHover={{ y: -3 }}
                          className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-xl md:text-2xl font-extrabold text-slate-900">
                              {String(value)}
                            </div>

                            <div className="w-8 h-8 rounded-lg bg-[#EEFBE8] text-[#159447] flex items-center justify-center">
                              <IconComponent className="w-4 h-4" />
                            </div>
                          </div>

                          <div className="text-xs text-slate-500 mt-2">
                            {String(label)}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-4 grid md:grid-cols-[1.4fr_1fr] gap-4">

                    <div className="rounded-2xl bg-white border border-slate-100 p-5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm">
                          {tamil
                            ? "வாடிக்கையாளர் உரையாடல்கள்"
                            : "Customer conversations"}
                        </span>

                        <BarChart3 className="w-4 h-4 text-[#159447]" />
                      </div>

                      <div className="mt-5 flex items-end gap-2 h-28">
                        {[35, 48, 42, 64, 55, 76, 68, 88, 72, 94, 81, 100].map(
                          (height, index) => (
                            <motion.div
                              key={index}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{
                                duration: 0.7,
                                delay: 0.5 + index * 0.04,
                              }}
                              className="flex-1 rounded-t-md bg-gradient-to-t from-[#159447] to-[#BCE9AE]"
                            />
                          ),
                        )}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#159447] p-5 text-white relative overflow-hidden">
                      <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />

                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                          <Bot className="w-5 h-5" />
                        </div>

                        <p className="mt-5 text-xs uppercase tracking-wider text-white/70 font-bold">
                          {tamil ? "AI உதவியாளர்" : "AI Assistant"}
                        </p>

                        <h4 className="text-lg font-extrabold mt-1">
                          {tamil
                            ? "எப்போதும் உதவ தயாராக உள்ளது"
                            : "Always ready to help"}
                        </h4>

                        <div className="mt-5 rounded-xl bg-white/10 border border-white/10 p-3 text-xs text-white/80">
                          {tamil
                            ? "“இன்று நான் உங்களுக்கு எப்படி உதவலாம்?”"
                            : "“How can I help you today?”"}
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />

                          {tamil
                            ? "AI agent செயல்பாட்டில் உள்ளது"
                            : "AI agent active"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ====================================================
              HERO CAPABILITY CARDS
          ==================================================== */}

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {heroStats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-white border border-[#E5EBDD] p-5 text-center shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 mx-auto rounded-xl bg-[#EEFBE8] flex items-center justify-center text-[#159447] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-extrabold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT WHATSWARE
      ======================================================== */}

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 text-[#159447] font-bold text-sm uppercase tracking-wider mb-4">
                <MessageCircle className="w-4 h-4" />

                {tamil ? "WhatsWare பற்றி" : "About WhatsWare"}
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                {tamil ? "ஒரே தளம்." : "One platform."}

                <span className="block text-[#159447]">
                  {tamil
                    ? "ஒவ்வொரு WhatsApp உரையாடலும்."
                    : "Every WhatsApp conversation."}
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                {tamil
                  ? "WhatsWare என்பது WhatsApp-ஐ ஒரு முழுமையான customer engagement platform ஆக பயன்படுத்த businesses-க்கு உதவும் வகையில் உருவாக்கப்பட்டுள்ளது — ஒரு messaging channel மட்டுமல்ல."
                  : "WhatsWare is designed to help businesses use WhatsApp as a complete customer engagement platform — not just as a messaging channel."}
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {tamil
                  ? "முதல் customer interaction முதல் lead qualification, automated follow-ups, sales, payments மற்றும் support வரை முழு customer journey-ஐ ஒரே connected experience மூலம் WhatsWare நிர்வகிக்க உதவுகிறது."
                  : "From the first customer interaction to lead qualification, automated follow-ups, sales, payments and support, WhatsWare helps businesses manage the complete customer journey through one connected experience."}
              </p>

              <div className="mt-8 space-y-4">
                {(tamil
                  ? [
                      "Marketing, sales மற்றும் support-ஐ இணைக்கவும்",
                      "மீண்டும் மீண்டும் செய்யும் conversations-ஐ automate செய்யவும்",
                      "AI மூலம் customers-ஐ உடனடியாக engage செய்யவும்",
                      "Conversations-ஐ measurable business outcomes ஆக மாற்றவும்",
                    ]
                  : [
                      "Connect marketing, sales and support",
                      "Automate repetitive conversations",
                      "Use AI to engage customers instantly",
                      "Turn conversations into measurable business outcomes",
                    ]
                ).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#159447] mt-0.5 flex-shrink-0" />

                    <span className="text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/products">
                  <button className="inline-flex items-center gap-2 font-bold text-[#159447] hover:gap-3 transition-all">
                    {tamil
                      ? "WhatsWare-ஐ ஆராயுங்கள்"
                      : "Explore WhatsWare"}

                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* ====================================================
                WHATSWARE VISUAL
                NO BROKEN IMAGE
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-[2rem] bg-[#EEFBE8] border border-[#DDF3D7] p-5 md:p-7">

                <div className="relative overflow-hidden rounded-[1.5rem] mb-5 h-52 md:h-60 bg-gradient-to-br from-[#075E54] via-[#159447] to-[#0B7A4B]">

                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>

                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-center"
                    >
                      <div className="mx-auto w-20 h-20 rounded-3xl bg-white p-4 shadow-2xl">
                        <img
                          src={logo}
                          alt="WhatsWare logo"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="mt-4 text-white font-extrabold text-2xl">
                        WhatsWare
                      </div>

                      <div className="text-white/75 text-xs mt-1">
                        {tamil
                          ? "உங்கள் connected business platform"
                          : "Your connected business platform"}
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute left-5 bottom-5 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white p-2 shadow-xl">
                      <img
                        src={logo}
                        alt="WhatsWare logo"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <div className="text-white font-extrabold text-lg">
                        WhatsWare
                      </div>

                      <div className="text-white/75 text-xs">
                        {tamil
                          ? "Smart business platform"
                          : "Smart business platform"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["WhatsApp", MessageCircle],
                    ["AI Agents", Bot],
                    ["Broadcasts", Send],
                    ["Automation", Workflow],
                    ["Sales", TrendingUp],
                    ["Analytics", BarChart3],
                  ].map(([label, Icon], index) => {
                    const IconComponent =
                      Icon as typeof MessageCircle;

                    return (
                      <motion.div
                        key={String(label)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="rounded-2xl bg-white p-5 shadow-sm border border-white"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#EEFBE8] text-[#159447] flex items-center justify-center mb-3">
                          <IconComponent className="w-5 h-5" />
                        </div>

                        <div className="font-bold text-slate-900">
                          {String(label)}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 rounded-2xl bg-white border border-[#E3EBDD] shadow-xl px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#159447] flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="text-xl font-extrabold text-[#159447]">
                      All-in-one
                    </div>

                    <div className="text-xs text-slate-500">
                      WhatsApp business platform
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY WHATSWARE
      ======================================================== */}

      <section className="py-20 md:py-28 bg-[#FFFDF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-[#159447] font-bold text-sm uppercase tracking-wider">
              {tamil ? "ஏன் WhatsWare?" : "Why WhatsWare"}
            </div>

            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              {tamil
                ? "வாடிக்கையாளர் உரையாடல்களை"
                : "Built to make customer conversations"}

              <span className="text-[#159447]">
                {tamil ? " சிறப்பாக மாற்ற" : " work harder"}
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              {tamil
                ? "Businesses வேகமாக communicate செய்யவும், சிறப்பாக automate செய்யவும், meaningful customer conversations மூலம் வளரவும் அனைத்தும் வடிவமைக்கப்பட்டுள்ளது."
                : "Everything is designed around helping businesses communicate faster, automate better and grow through meaningful customer conversations."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -7 }}
                  className="relative overflow-hidden rounded-3xl bg-white border border-[#E8EBDD] p-7 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="absolute right-4 top-3 text-7xl font-black text-[#159447]/5">
                    {benefit.number}
                  </div>

                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEFBE8] text-[#159447] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-xs font-extrabold text-[#159447]">
                      {benefit.number}
                    </div>

                    <h3 className="text-xl font-bold mt-1">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          PLATFORM FEATURES
      ======================================================== */}

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-[#159447] font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />

              {tamil ? "WhatsWare தளம்" : "WhatsWare Platform"}
            </div>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              {tamil
                ? "உங்கள் customer journey-யின்"
                : "Powerful features for"}

              <span className="block text-[#159447]">
                {tamil
                  ? "ஒவ்வொரு நிலையிற்கும் powerful features"
                  : "every stage of your customer journey"}
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              {tamil
                ? "முதல் lead உருவாக்குவது முதல் sale close செய்வது மற்றும் customers-ஐ support செய்வது வரை WhatsWare அனைத்தையும் நிர்வகிக்க உதவுகிறது."
                : "From generating your first lead to closing a sale and supporting your customers, WhatsWare gives your team the tools to manage it all."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.08,
                  }}
                  whileHover={{ y: -7 }}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 hover:border-[#BFE7B6] hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {feature.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#159447] flex-shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <Link href={feature.href}>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#159447] group-hover:gap-3 transition-all cursor-pointer">
                      {tamil
                        ? "Feature-ஐ ஆராயுங்கள்"
                        : "Explore feature"}

                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          CUSTOMER JOURNEY
      ======================================================== */}

      <section className="py-20 md:py-28 bg-[#EEFBE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-[#159447] font-bold text-sm uppercase tracking-wider">
              {tamil
                ? "ஒருங்கிணைந்த பயணம்"
                : "One Connected Journey"}
            </div>

            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              {tamil ? "முதல் message முதல்" : "From first message to"}

              <span className="text-[#159447]">
                {tamil ? " loyal customer" : " loyal customer"}
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              {tamil
                ? "WhatsWare உங்கள் customer journey-யின் ஒவ்வொரு முக்கிய நிலையையும் இணைக்கிறது."
                : "WhatsWare connects every important stage of your customer journey."}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="relative rounded-3xl bg-white p-6 border border-[#D8EBD3] shadow-sm"
                >
                  <div className="text-sm font-extrabold text-[#159447]">
                    {item.number}
                  </div>

                  <div className="mt-4 w-11 h-11 rounded-xl bg-[#EEFBE8] text-[#159447] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="mt-5 font-bold text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.text}
                  </p>

                  {index < journey.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#159447] z-10" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          INDUSTRIES
          NO IMAGES
      ======================================================== */}

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-[#159447] font-bold text-sm uppercase tracking-wider">
                <Globe2 className="w-4 h-4" />

                {tamil
                  ? "அனைத்து தொழில்களுக்கும்"
                  : "Built for Every Industry"}
              </div>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                {tamil ? "ஒரே தளம்." : "One platform."}

                <span className="block text-[#159447]">
                  {tamil
                    ? "எண்ணற்ற வாய்ப்புகள்."
                    : "Endless possibilities."}
                </span>
              </h2>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                {tamil
                  ? "நீங்கள் products விற்கிறீர்களா, students-ஐ teach செய்கிறீர்களா, properties manage செய்கிறீர்களா அல்லது customers-க்கு சேவை செய்கிறீர்களா — WhatsWare everyday WhatsApp conversations-ஐ meaningful business outcomes ஆக மாற்ற உதவுகிறது."
                  : "Whether you sell products, teach students, manage properties or serve customers, WhatsWare helps you turn everyday WhatsApp conversations into meaningful business outcomes."}
              </p>

              <div className="mt-7 rounded-3xl bg-[#EEFBE8] border border-[#D8EBD3] p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#159447] flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <div className="font-extrabold text-slate-900">
                      {tamil
                        ? "Conversations-ஐ மையமாகக் கொண்டது"
                        : "Built around conversations"}
                    </div>

                    <div className="text-sm text-slate-600 mt-1">
                      {tamil
                        ? "Customers எங்கு இருந்தாலும் connect செய்யுங்கள்."
                        : "Connect customers wherever they are."}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* INDUSTRY CARDS */}

            <div className="grid sm:grid-cols-2 gap-5">
              {industries.map(
                ({ Icon, title, text, href, bg }, index) => (
                  <Link
                    key={title}
                    href={href}
                    className="block h-full"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant",
                      });
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.01,
                      }}
                      className="group h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-xl hover:border-[#BFE7B6] transition-all duration-300 cursor-pointer"
                    >
                      {/* CSS VISUAL — NO IMAGE */}
                      <div
                        className={`mb-4 h-28 overflow-hidden rounded-2xl relative bg-gradient-to-br ${bg}`}
                      >
                        <div className="absolute inset-0 opacity-30">
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage:
                                "linear-gradient(#159447 1px, transparent 1px), linear-gradient(90deg, #159447 1px, transparent 1px)",
                              backgroundSize: "24px 24px",
                            }}
                          />
                        </div>

                        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/70 blur-2xl" />

                        <div className="relative h-full flex items-center justify-center">
                          <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#159447] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="w-8 h-8" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#EEFBE8] text-[#159447] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>

                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#159447] group-hover:translate-x-1 transition-all" />
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {text}
                      </p>
                    </motion.div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          VISUAL STORY
          NO IMAGE
      ======================================================== */}

      <section className="py-20 md:py-28 bg-[#FFFDF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 min-h-[420px]">

            <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[#159447]/20 blur-3xl" />

            <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[#159447]/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center p-8 md:p-14 lg:p-16">

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#8FE080]">
                  <Play className="w-4 h-4 fill-current" />

                  {tamil
                    ? "WhatsWare அனுபவம்"
                    : "The WhatsWare experience"}
                </div>

                <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  {tamil ? "உரையாடல்கள்" : "Conversations become"}

                  <span className="block text-[#75D467]">
                    {tamil
                      ? "வாய்ப்புகளாக மாறுகின்றன."
                      : "opportunities."}
                  </span>
                </h2>

                <p className="mt-5 text-white/65 text-lg leading-relaxed">
                  {tamil
                    ? "Campaigns, conversations, AI, automation, sales மற்றும் support-ஐ ஒரே seamless customer experience-ல் இணைக்கவும்."
                    : "Connect campaigns, conversations, AI, automation, sales and support into one seamless customer experience."}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "Marketing",
                    "Automation",
                    "AI",
                    "Sales",
                    "Support",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CHAT UI */}

              <motion.div
                initial={{ opacity: 0, x: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">

                  <div className="rounded-[1.5rem] bg-[#F8FFF6] p-5 min-h-[280px]">

                    {/* HEADER */}

                    <div className="mb-4 h-20 overflow-hidden rounded-xl relative bg-gradient-to-r from-[#075E54] to-[#159447]">

                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                      </div>

                      <div className="absolute inset-0 flex items-center gap-2 px-4">
                        <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-md">
                          <img
                            src={logo}
                            alt="WhatsWare"
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div>
                          <div className="text-white font-extrabold text-sm">
                            WhatsWare Business Chat
                          </div>

                          <div className="text-white/70 text-[10px]">
                            AI powered customer engagement
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AGENT */}

                    <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                      <div className="w-10 h-10 rounded-xl bg-[#159447] flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>

                      <div>
                        <div className="font-extrabold text-slate-900">
                          WhatsWare AI
                        </div>

                        <div className="text-xs text-[#159447]">
                          {tamil ? "இப்போது Online" : "Online now"}
                        </div>
                      </div>
                    </div>

                    {/* MESSAGES */}

                    <div className="mt-5 space-y-3">

                      <div className="flex justify-start">
                        <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-white border border-slate-200 px-4 py-3 text-sm text-slate-600 shadow-sm">
                          {tamil
                            ? "வணக்கம்! இன்று உங்கள் customer-க்கு நான் எப்படி உதவலாம்?"
                            : "Hi! How can I help your customer today?"}
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-[#159447] px-4 py-3 text-sm text-white">
                          {tamil
                            ? "உங்கள் product பற்றி மேலும் தெரிந்து கொள்ள விரும்புகிறேன்."
                            : "I want to know more about your product."}
                        </div>
                      </div>

                      <div className="flex justify-start">
                        <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-white border border-slate-200 px-4 py-3 text-sm text-slate-600 shadow-sm">
                          {tamil
                            ? "நிச்சயமாக. அதைப் பற்றி நான் உங்களுக்கு உதவுகிறேன்."
                            : "Absolutely. Let me help you with that."}
                        </div>
                      </div>
                    </div>

                    {/* INPUT */}

                    <div className="mt-5 flex items-center gap-2">
                      <div className="flex-1 rounded-xl bg-white border border-slate-200 px-4 py-3 text-xs text-slate-400">
                        {tamil
                          ? "ஒரு message type செய்யுங்கள்..."
                          : "Type a message..."}
                      </div>

                      <div className="w-11 h-11 rounded-xl bg-[#159447] flex items-center justify-center">
                        <Send className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#EEFBE8] flex items-center justify-center">
                    <MousePointerClick className="w-4 h-4 text-[#159447]" />
                  </div>

                  <div className="text-xs">
                    <div className="font-bold text-slate-900">
                      Customer engaged
                    </div>

                    <div className="text-slate-500">
                      {tamil ? "இப்போதுதான்" : "Just now"}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SOCIAL PROOF
      ======================================================== */}

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[#159447] font-bold text-sm uppercase tracking-wider">
              <Star className="w-4 h-4 fill-current" />

              {tamil
                ? "வளரும் வணிகங்களுக்காக"
                : "Made for growing businesses"}
            </div>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              {tamil
                ? "ஒவ்வொன்றும் ஒரு உரையாடலிலிருந்து தொடங்குகிறது."
                : "Everything starts with a conversation."}
            </h2>

            <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
              {tamil
                ? "WhatsWare அந்த conversations-ஐ relationships, leads, sales மற்றும் long-term growth ஆக மாற்ற businesses-க்கு உதவுகிறது."
                : "WhatsWare helps businesses turn those conversations into relationships, leads, sales and long-term growth."}
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(tamil
              ? [
                  {
                    icon: MessageCircle,
                    title: "Engage",
                    text: "Conversations நடக்கும் இடத்தில் customers-ஐ சந்திக்கவும்.",
                  },
                  {
                    icon: Zap,
                    title: "Automate",
                    text: "Intelligent workflows மூலம் repetitive work-ஐ குறைக்கவும்.",
                  },
                  {
                    icon: Bot,
                    title: "Understand",
                    text: "ஒவ்வொரு conversation-ஐயும் smarter ஆக AI பயன்படுத்தவும்.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Grow",
                    text: "Conversations-ஐ measurable outcomes ஆக மாற்றவும்.",
                  },
                ]
              : [
                  {
                    icon: MessageCircle,
                    title: "Engage",
                    text: "Meet customers where conversations happen.",
                  },
                  {
                    icon: Zap,
                    title: "Automate",
                    text: "Remove repetitive work with intelligent workflows.",
                  },
                  {
                    icon: Bot,
                    title: "Understand",
                    text: "Use AI to make every conversation smarter.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Grow",
                    text: "Turn conversations into measurable outcomes.",
                  },
                ]
            ).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EEFBE8] text-[#159447] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          FINAL CTA
      ======================================================== */}

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-[#159447] px-7 py-14 md:px-14 md:py-16 text-center text-white"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5" />

            <div className="relative">

              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-white p-3 shadow-xl shadow-black/10">
                <img
                  src={logo}
                  alt="WhatsWare logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                {tamil
                  ? "WhatsApp-ஐ உங்கள் வணிகத்திற்காக"
                  : "Ready to make WhatsApp work"}

                <span className="block">
                  {tamil
                    ? "சிறப்பாக பயன்படுத்த தயாரா?"
                    : "harder for your business?"}
                </span>
              </h2>

              <p className="mt-5 max-w-2xl mx-auto text-white/80 text-lg">
                {tamil
                  ? "Marketing, automation, AI, sales மற்றும் support-ஐ WhatsWare மூலம் ஒரே இடத்தில் இணைக்கவும்."
                  : "Bring marketing, automation, AI, sales and support together with WhatsWare."}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                <Link href="/signup">
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-[#159447] hover:bg-[#F3FFF0] transition-colors">
                    {tamil ? "தொடங்குங்கள்" : "Get Started"}

                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <Link href="/pricing">
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white hover:bg-white/20 transition-colors">
                    {tamil
                      ? "விலை விவரங்களை பார்க்க"
                      : "View Pricing"}
                  </button>
                </Link>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}