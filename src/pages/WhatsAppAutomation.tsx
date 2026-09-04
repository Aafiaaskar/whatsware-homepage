import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  MessageCircle,
  MessagesSquare,
  Play,
  Send,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  EN: {
    breadcrumbHome: "Home",
    breadcrumbProducts: "Products",

    badge: "WhatsApp Automation",

    heroTitle: "Turn every WhatsApp conversation into an",
    heroHighlight: "automated journey.",

    heroDescription:
      "Automate customer conversations, campaigns, lead follow-ups, notifications and support on WhatsApp — while keeping your brand experience personal.",

    startAutomating: "Start Automating",
    viewPlans: "View Plans",

    noCode: "Workflows",
    aiAutomation: "AI automation",
    smartCampaigns: "Smart campaigns",

    automation: "Automation",
    triggered: "Triggered",
    messagesSent: "Messages sent",

    business: "WhatsWare Business",
    online: "Online",
    today: "TODAY",

    customerMessage:
      "Hi! I want to know more about your plans.",

    aiName: "WhatsWare AI",

    aiReply:
      "Absolutely! I'd be happy to help. 😊",

    aiQuestion:
      "Which solution are you interested in?",

    marketing: "Marketing",
    support: "Support",
    aiAgents: "AI Agents",

    marketingReply: "Marketing",

    marketingAnswer:
      "Great choice! 🚀",

    marketingAnswer2:
      "I can help you launch targeted WhatsApp campaigns, automate follow-ups and capture leads.",

    typeMessage: "Type a message",

    automatedReplies: "Automated replies",
    leadNurturing: "Lead nurturing",
    campaignAutomation: "Campaign automation",
    notifications: "Notifications",
    teamHandover: "Team handover",

    featureEyebrow: "One platform. Endless automation.",

    featureTitle:
      "Build conversations that work for you.",

    featureDescription:
      "From the first message to the final follow-up, automate the repetitive work and keep your team focused on growth.",

    explore: "Explore",

    features: [
      {
        icon: Workflow,
        title: "Visual Workflow Builder",
        description:
          "Create powerful WhatsApp journeys with triggers, conditions, actions and automated responses.",
      },
      {
        icon: Send,
        title: "Smart Broadcasts",
        description:
          "Reach the right customers with personalized campaigns instead of sending the same message to everyone.",
      },
      {
        icon: Bot,
        title: "AI Auto Replies",
        description:
          "Answer customer questions automatically and hand conversations to your team when needed.",
      },
      {
        icon: FileText,
        title: "Message Templates",
        description:
          "Create reusable templates for campaigns, notifications, reminders, follow-ups and customer journeys.",
      },
      {
        icon: Clock3,
        title: "Automated Follow-ups",
        description:
          "Never forget a lead. Trigger follow-ups automatically based on customer actions and timing.",
      },
      {
        icon: Users,
        title: "Team Handover",
        description:
          "Move conversations from automation to the right human agent without losing context.",
      },
    ],

    workflowBadge: "automation",

    workflowTitle:
      "Build powerful workflows without writing code.",

    workflowDescription:
      "Connect triggers, decisions and actions visually. Create customer journeys that automatically adapt to what your customers do.",

    workflowButton: "Explore Workflow Builder",

    leadFollowup: "Lead Follow-up",
    activeWorkflow: "Active workflow",
    live: "LIVE",

    newWhatsappLead: "New WhatsApp Lead",
    trigger: "Trigger",

    aiQualifiesLead: "AI qualifies lead",
    aiAction: "AI Action",

    hotLead: "Hot lead",
    assignSales: "Assign sales",

    coldLead: "Cold lead",
    startNurture: "Start nurture",

    howItWorks: "How it works",

    howTitle:
      "From message to action automatically.",

    workflowSteps: [
      {
        number: "01",
        title: "Customer starts",
        text:
          "A customer sends a WhatsApp message or interacts with your campaign.",
      },
      {
        number: "02",
        title: "Automation triggers",
        text:
          "WhatsWare identifies the event and starts the right workflow.",
      },
      {
        number: "03",
        title: "AI responds",
        text:
          "The customer receives an instant, contextual response.",
      },
      {
        number: "04",
        title: "Action happens",
        text:
          "Follow up, notify your team, update CRM or continue the journey.",
      },
    ],

    useCases: [
      {
        title: "Lead Generation",
        text:
          "Capture, qualify and nurture leads automatically.",
        icon: Users,
      },
      {
        title: "Customer Support",
        text:
          "Answer questions and route complex issues to agents.",
        icon: MessageCircle,
      },
      {
        title: "Marketing Campaigns",
        text:
          "Send personalized campaigns and track engagement.",
        icon: Send,
      },
      {
        title: "Notifications",
        text:
          "Send order, appointment and payment updates instantly.",
        icon: MessagesSquare,
      },
    ],

    learnMore: "Learn more",

    ctaTitle:
      "Make WhatsApp work harder for your business.",

    ctaDescription:
      "Automate conversations, capture leads, nurture customers and deliver better experiences — all from one powerful platform.",

    explorePricing: "Explore Pricing",
  },

  TA: {
    breadcrumbHome: "முகப்பு",
    breadcrumbProducts: "தயாரிப்புகள்",

    badge: "WhatsApp தானியக்கம்",

    heroTitle:
      "ஒவ்வொரு WhatsApp உரையாடலையும்",

    heroHighlight:
      "தானியங்கி பயணமாக மாற்றுங்கள்.",

    heroDescription:
      "WhatsApp மூலம் வாடிக்கையாளர் உரையாடல்கள், பிரச்சாரங்கள், லீட் பின்தொடர்வுகள், அறிவிப்புகள் மற்றும் ஆதரவை தானியக்கமாக்குங்கள் — உங்கள் பிராண்டின் தனிப்பட்ட அனுபவத்தைத் தொடர்ந்து வழங்குங்கள்.",

    startAutomating: "தானியக்கத்தைத் தொடங்குங்கள்",
    viewPlans: "திட்டங்களைப் பார்க்கவும்",

    noCode: "கோடு இல்லாத workflows",
    aiAutomation: "AI தானியக்கம்",
    smartCampaigns: "ஸ்மார்ட் பிரச்சாரங்கள்",

    automation: "தானியக்கம்",
    triggered: "தொடங்கப்பட்டது",
    messagesSent: "அனுப்பப்பட்ட செய்திகள்",

    business: "WhatsWare Business",
    online: "ஆன்லைனில்",
    today: "இன்று",

    customerMessage:
      "வணக்கம்! உங்கள் திட்டங்களைப் பற்றி மேலும் தெரிந்து கொள்ள விரும்புகிறேன்.",

    aiName: "WhatsWare AI",

    aiReply:
      "நிச்சயமாக! உங்களுக்கு உதவுவதில் மகிழ்ச்சி. 😊",

    aiQuestion:
      "நீங்கள் எந்த தீர்வில் ஆர்வமாக உள்ளீர்கள்?",

    marketing: "மார்க்கெட்டிங்",
    support: "ஆதரவு",
    aiAgents: "AI ஏஜென்ட்கள்",

    marketingReply: "மார்க்கெட்டிங்",

    marketingAnswer:
      "சிறந்த தேர்வு! 🚀",

    marketingAnswer2:
      "இலக்கு வாடிக்கையாளர்களுக்கான WhatsApp பிரச்சாரங்களைத் தொடங்கவும், பின்தொடர்வுகளை தானியக்கமாக்கவும், லீட்களைப் பெறவும் நான் உதவ முடியும்.",

    typeMessage: "செய்தியை உள்ளிடவும்",

    automatedReplies: "தானியங்கி பதில்கள்",
    leadNurturing: "லீட் வளர்ப்பு",
    campaignAutomation: "பிரச்சார தானியக்கம்",
    notifications: "அறிவிப்புகள்",
    teamHandover: "குழு ஒப்படைப்பு",

    featureEyebrow:
      "ஒரே தளம். முடிவில்லா தானியக்கம்.",

    featureTitle:
      "உங்களுக்காக செயல்படும் உரையாடல்களை உருவாக்குங்கள்.",

    featureDescription:
      "முதல் செய்தியிலிருந்து இறுதி பின்தொடர்வு வரை மீண்டும் மீண்டும் செய்ய வேண்டிய பணிகளை தானியக்கமாக்கி, உங்கள் குழுவை வளர்ச்சியில் கவனம் செலுத்தச் செய்யுங்கள்.",

    explore: "ஆராயுங்கள்",

    features: [
      {
        icon: Workflow,
        title: "Visual Workflow Builder",
        description:
          "Triggers, conditions, actions மற்றும் தானியங்கி பதில்களுடன் சக்திவாய்ந்த WhatsApp customer journeys-ஐ உருவாக்குங்கள்.",
      },
      {
        icon: Send,
        title: "ஸ்மார்ட் Broadcasts",
        description:
          "அனைவருக்கும் ஒரே செய்தியை அனுப்புவதற்குப் பதிலாக தனிப்பயனாக்கப்பட்ட பிரச்சாரங்கள் மூலம் சரியான வாடிக்கையாளர்களைச் சென்றடையுங்கள்.",
      },
      {
        icon: Bot,
        title: "AI தானியங்கி பதில்கள்",
        description:
          "வாடிக்கையாளர் கேள்விகளுக்கு தானாக பதிலளித்து, தேவையான போது உரையாடல்களை உங்கள் குழுவிடம் ஒப்படையுங்கள்.",
      },
      {
        icon: FileText,
        title: "செய்தி Templates",
        description:
          "பிரச்சாரங்கள், அறிவிப்புகள், நினைவூட்டல்கள், பின்தொடர்வுகள் மற்றும் customer journeys-க்கான reusable templates-ஐ உருவாக்குங்கள்.",
      },
      {
        icon: Clock3,
        title: "தானியங்கி Follow-ups",
        description:
          "எந்த லீடையும் மறக்க வேண்டாம். வாடிக்கையாளர் செயல்கள் மற்றும் நேரத்தின் அடிப்படையில் follow-ups-ஐ தானாகத் தொடங்குங்கள்.",
      },
      {
        icon: Users,
        title: "குழு ஒப்படைப்பு",
        description:
          "Context-ஐ இழக்காமல் automation-இலிருந்து சரியான மனித agent-க்கு உரையாடல்களை மாற்றுங்கள்.",
      },
    ],

    workflowBadge: "கோடு இல்லாத தானியக்கம்",

    workflowTitle:
      "கோடு எழுதாமல் சக்திவாய்ந்த workflows-ஐ உருவாக்குங்கள்.",

    workflowDescription:
      "Triggers, decisions மற்றும் actions-ஐ காட்சிப்பூர்வமாக இணைக்கவும். உங்கள் வாடிக்கையாளர்களின் செயல்களுக்கு ஏற்ப தானாக மாறும் customer journeys-ஐ உருவாக்குங்கள்.",

    workflowButton:
      "Workflow Builder-ஐ ஆராயுங்கள்",

    leadFollowup: "Lead Follow-up",
    activeWorkflow: "செயலில் உள்ள workflow",
    live: "செயலில்",

    newWhatsappLead: "புதிய WhatsApp Lead",
    trigger: "Trigger",

    aiQualifiesLead: "AI லீட்டைத் தகுதி செய்கிறது",
    aiAction: "AI Action",

    hotLead: "முக்கியமான Lead",
    assignSales: "Sales-க்கு ஒதுக்கவும்",

    coldLead: "Cold Lead",
    startNurture: "Nurture தொடங்கவும்",

    howItWorks: "இது எப்படி செயல்படுகிறது",

    howTitle:
      "செய்தியிலிருந்து செயலுக்கு தானாக.",

    workflowSteps: [
      {
        number: "01",
        title: "வாடிக்கையாளர் தொடங்குகிறார்",
        text:
          "ஒரு வாடிக்கையாளர் WhatsApp செய்தியை அனுப்புகிறார் அல்லது உங்கள் பிரச்சாரத்துடன் தொடர்பு கொள்கிறார்.",
      },
      {
        number: "02",
        title: "தானியக்கம் தொடங்குகிறது",
        text:
          "WhatsWare நிகழ்வைக் கண்டறிந்து சரியான workflow-ஐத் தொடங்குகிறது.",
      },
      {
        number: "03",
        title: "AI பதிலளிக்கிறது",
        text:
          "வாடிக்கையாளர் உடனடி மற்றும் சூழலுக்கு ஏற்ற பதிலைப் பெறுகிறார்.",
      },
      {
        number: "04",
        title: "செயல் நடைபெறுகிறது",
        text:
          "Follow-up செய்யவும், உங்கள் குழுவுக்கு அறிவிக்கவும், CRM-ஐ புதுப்பிக்கவும் அல்லது customer journey-ஐ தொடரவும்.",
      },
    ],

    useCases: [
      {
        title: "Lead Generation",
        text:
          "லீட்களை தானாகப் பெறவும், தகுதி செய்யவும் மற்றும் வளர்க்கவும்.",
        icon: Users,
      },
      {
        title: "வாடிக்கையாளர் ஆதரவு",
        text:
          "கேள்விகளுக்கு பதிலளித்து சிக்கலான பிரச்சினைகளை agents-க்கு அனுப்புங்கள்.",
        icon: MessageCircle,
      },
      {
        title: "மார்க்கெட்டிங் பிரச்சாரங்கள்",
        text:
          "தனிப்பயனாக்கப்பட்ட பிரச்சாரங்களை அனுப்பி engagement-ஐ கண்காணிக்கவும்.",
        icon: Send,
      },
      {
        title: "அறிவிப்புகள்",
        text:
          "Order, appointment மற்றும் payment updates-ஐ உடனடியாக அனுப்புங்கள்.",
        icon: MessagesSquare,
      },
    ],

    learnMore: "மேலும் அறிய",

    ctaTitle:
      "உங்கள் வணிகத்திற்காக WhatsApp-ஐ இன்னும் சிறப்பாக செயல்படச் செய்யுங்கள்.",

    ctaDescription:
      "உரையாடல்களை தானியக்கமாக்குங்கள், லீட்களைப் பெறுங்கள், வாடிக்கையாளர்களை வளர்த்துக் கொள்ளுங்கள் மற்றும் சிறந்த அனுபவங்களை வழங்குங்கள் — அனைத்தும் ஒரே சக்திவாய்ந்த தளத்தில்.",

    explorePricing: "Pricing-ஐ ஆராயுங்கள்",
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function WhatsAppAutomation() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] ||
    translations.EN;

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-24 h-[500px] w-[500px] rounded-full bg-emerald-100/70 blur-3xl" />
          <div className="absolute right-[-180px] top-20 h-[550px] w-[550px] rounded-full bg-green-100/70 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-[#159447]">
              {t.breadcrumbHome}
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link href="/products" className="hover:text-[#159447]">
              {t.breadcrumbProducts}
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-semibold text-slate-700">
              {t.badge}
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#159447]">
                <MessageCircle className="h-4 w-4" />
                {t.badge}
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
                {t.heroTitle}{" "}
                <span className="bg-gradient-to-r from-[#159447] via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  {t.heroHighlight}
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                {t.heroDescription}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/signup">
                  <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                    {t.startAutomating}
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="/pricing">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto">
                    {t.viewPlans}
                  </button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                {[
                  t.noCode,
                  t.aiAutomation,
                  t.smartCampaigns,
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#159447]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* =====================================================
                WHATSAPP VISUAL
            ====================================================== */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -left-5 top-20 z-20 hidden rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                    <Zap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      {t.automation}
                    </p>
                    <p className="font-bold text-slate-800">
                      {t.triggered}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-16 z-20 hidden rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447] text-white">
                    <Check className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      {t.messagesSent}
                    </p>
                    <p className="font-bold text-emerald-600">
                      2,481
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mx-auto w-[320px] rounded-[3rem] border-[10px] border-slate-950 bg-slate-950 p-2 shadow-[0_35px_90px_-25px_rgba(21,148,71,0.45)] sm:w-[360px]">
                <div className="overflow-hidden rounded-[2.3rem] bg-[#efeae2]">
                  {/* Phone header */}
                  <div className="bg-[#075e54] px-5 pb-4 pt-5 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                        <MessageCircle className="h-5 w-5" />
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-bold">
                          {t.business}
                        </p>
                        <p className="text-[11px] text-emerald-100">
                          {t.online}
                        </p>
                      </div>

                      <span className="text-lg">⋮</span>
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="space-y-3 px-4 py-6">
                    <div className="mx-auto w-fit rounded-lg bg-white px-3 py-1 text-[9px] text-slate-400 shadow-sm">
                      {t.today}
                    </div>

                    <div className="ml-auto max-w-[82%] rounded-xl rounded-tr-sm bg-[#d9fdd3] p-3 text-xs leading-5 text-slate-700 shadow-sm">
                      {t.customerMessage}

                      <div className="mt-1 text-right text-[9px] text-slate-400">
                        10:42 AM ✓✓
                      </div>
                    </div>

                    <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white p-3 text-xs leading-5 text-slate-700 shadow-sm">
                      <div className="mb-2 flex items-center gap-2 font-bold text-[#159447]">
                        <Bot className="h-4 w-4" />
                        {t.aiName}
                      </div>

                      {t.aiReply}

                      <br />
                      <br />

                      {t.aiQuestion}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        t.marketing,
                        t.support,
                        t.aiAgents,
                      ].map((option) => (
                        <div
                          key={option}
                          className="rounded-full border border-emerald-300 bg-white px-3 py-1.5 text-[10px] font-semibold text-[#159447]"
                        >
                          {option}
                        </div>
                      ))}
                    </div>

                    <div className="ml-auto max-w-[70%] rounded-xl rounded-tr-sm bg-[#d9fdd3] p-3 text-xs text-slate-700 shadow-sm">
                      {t.marketingReply}
                    </div>

                    <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white p-3 text-xs leading-5 text-slate-700 shadow-sm">
                      {t.marketingAnswer}

                      <br />
                      <br />

                      {t.marketingAnswer2}
                    </div>
                  </div>

                  {/* Input */}
                  <div className="bg-[#f0f0f0] p-3">
                    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5">
                      <span className="flex-1 text-[10px] text-slate-400">
                        {t.typeMessage}
                      </span>

                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25d366] text-white">
                        <Send className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================== */}
      <section className="mt-24 border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-6 py-7 text-sm font-semibold text-slate-500">
          {[
            t.automatedReplies,
            t.leadNurturing,
            t.campaignAutomation,
            t.notifications,
            t.teamHandover,
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2"
            >
              <Check className="h-4 w-4 text-[#159447]" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t.featureEyebrow}
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {t.featureTitle}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {t.featureDescription}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#159447]">
                    {t.explore}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFLOW BUILDER
      ========================================================== */}
      <section className="overflow-hidden bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <Workflow className="h-4 w-4" />
                {t.workflowBadge}
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                {t.workflowTitle}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {t.workflowDescription}
              </p>

              <Link href="/products/workflow-builder">
                <button className="group mt-8 flex items-center gap-2 rounded-xl bg-[#159447] px-6 py-3.5 font-bold text-white transition hover:bg-emerald-500">
                  {t.workflowButton}

                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* Workflow visual */}
            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-2xl bg-slate-900 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="font-bold">
                        {t.leadFollowup}
                      </p>

                      <p className="text-xs text-slate-500">
                        {t.activeWorkflow}
                      </p>
                    </div>

                    <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                      {t.live}
                    </div>
                  </div>

                  <div className="relative space-y-4">
                    <div className="mx-auto max-w-[230px] rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400 text-slate-950">
                          <MessageCircle className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="text-xs font-bold">
                            {t.newWhatsappLead}
                          </p>

                          <p className="text-[10px] text-slate-500">
                            {t.trigger}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto h-8 w-px bg-emerald-400/40" />

                    <div className="mx-auto max-w-[230px] rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400 text-slate-950">
                          <Sparkles className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="text-xs font-bold">
                            {t.aiQualifiesLead}
                          </p>

                          <p className="text-[10px] text-slate-500">
                            {t.aiAction}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto h-8 w-px bg-emerald-400/40" />

                    <div className="mx-auto grid max-w-[300px] grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4">
                        <p className="text-xs font-bold">
                          {t.hotLead}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500">
                          {t.assignSales}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-orange-400/30 bg-orange-400/10 p-4">
                        <p className="text-xs font-bold">
                          {t.coldLead}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500">
                          {t.startNurture}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
      <section className="bg-emerald-50/50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
              {t.howItWorks}
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              {t.howTitle}
            </h2>
          </div>

          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-emerald-200 lg:block" />

            <div className="grid gap-6 lg:grid-cols-4">
              {t.workflowSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative z-10 rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#159447] text-white">
                      <Play className="h-5 w-5 fill-current" />
                    </div>

                    <span className="text-3xl font-black text-emerald-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          USE CASES
      ========================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.useCases.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl bg-slate-50 p-7 transition hover:bg-emerald-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {item.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#159447]">
                    {t.learnMore}

                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#159447] text-white shadow-xl shadow-emerald-200">
            <MessageCircle className="h-8 w-8" />
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {t.ctaDescription}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-8 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 hover:bg-[#117c3b] sm:w-auto">
                {t.startAutomating}

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </Link>

            <Link href="/pricing">
              <button className="w-full rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-[#159447] sm:w-auto">
                {t.explorePricing}
              </button>
            </Link>
          </div>
        </div>
      </section>
    
      <Footer />
    </div>
  );
}