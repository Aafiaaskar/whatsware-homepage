import { useMemo } from "react";
import { Link, useParams } from "wouter";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Code2,
  FileText,
  Megaphone,
  Bot,
  Workflow,
  Users,
  ShoppingBag,
  MessageSquareText,
  MousePointerClick,
  Zap,
  BarChart3,
  UserPlus,
  Send,
  ShieldCheck,
  Clock3,
  CreditCard,
  Globe2,
  Sparkles,
  Headphones,
  Database,
  FormInput,
  ExternalLink,
  Plug,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Feature = {
  icon: any;
  title: string;
  description: string;
};

type WhatsAppPage = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  heroIcon: any;
  heroColor: string;
  primaryButton: string;
  secondaryButton: string;

  stats: {
    value: string;
    label: string;
  }[];

  features: Feature[];

  benefits: string[];

  steps: {
    number: string;
    title: string;
    description: string;
  }[];
};

/* =========================================================
   ALL WHATSAPP SOLUTION PAGES
========================================================= */

const WHATSAPP_PAGES: Record<string, WhatsAppPage> = {
  /* =======================================================
     1. VOICE CALLING
  ======================================================= */

  "voice-calling": {
    slug: "voice-calling",
    label: "WHATSAPP VOICE CALLING",
    title: "Connect With Customers Through WhatsApp Voice Calls",
    subtitle:
      "Turn conversations into real human connections with WhatsApp voice calling.",
    description:
      "Give customers a faster way to reach your business. WhatsApp Voice Calling helps your team handle enquiries, sales conversations, support requests, and follow-ups directly through voice.",
    heroIcon: PhoneCall,
    heroColor: "from-blue-500 to-indigo-600",
    primaryButton: "Start Voice Calling",
    secondaryButton: "Talk to Our Team",

    stats: [
      {
        value: "1:1",
        label: "Customer Conversations",
      },
      {
        value: "Instant",
        label: "Voice Connection",
      },
      {
        value: "24/7",
        label: "Customer Access",
      },
      {
        value: "Faster",
        label: "Response Times",
      },
    ],

    features: [
      {
        icon: PhoneCall,
        title: "Instant Voice Calls",
        description:
          "Let customers move from messaging to voice when they need a faster conversation.",
      },
      {
        icon: Users,
        title: "Team Call Handling",
        description:
          "Connect incoming customer conversations with the right members of your team.",
      },
      {
        icon: Clock3,
        title: "Faster Follow-Ups",
        description:
          "Reach warm leads quickly instead of waiting for another message response.",
      },
      {
        icon: ShieldCheck,
        title: "Secure Communication",
        description:
          "Keep customer communication inside a familiar business messaging environment.",
      },
    ],

    benefits: [
      "Reduce delays in important customer conversations",
      "Give sales teams a faster way to connect with prospects",
      "Handle support enquiries through voice",
      "Improve customer experience",
      "Follow up with high-intent leads quickly",
      "Keep conversations connected to your WhatsApp workflow",
    ],

    steps: [
      {
        number: "01",
        title: "Customer Starts a Conversation",
        description:
          "A customer reaches your business through WhatsApp.",
      },
      {
        number: "02",
        title: "Move to Voice",
        description:
          "The customer can move the conversation to a voice call when required.",
      },
      {
        number: "03",
        title: "Your Team Responds",
        description:
          "The right team member handles the conversation and continues the customer journey.",
      },
    ],
  },

  /* =======================================================
     2. NO CODE CHATBOT BUILDER
  ======================================================= */

  "chatbots": {
    slug: "chatbots",
    label: "CHATBOT BUILDER",
    title: "Build Powerful WhatsApp Chatbots Without Coding",
    subtitle:
      "Create intelligent WhatsApp conversations with simple visual workflows.",
    description:
      "Build customer-facing WhatsApp chatbots without writing code. Automate FAQs, lead capture, qualification, support, appointment requests, and sales conversations using visual flows.",
    heroIcon: Bot,
    heroColor: "from-violet-500 to-purple-600",
    primaryButton: "Build a Chatbot",
    secondaryButton: "See How It Works",

    stats: [
      {
        value: "24/7",
        label: "Automated Support",
      },
      {
        value: "No-Code",
        label: "Bot Builder",
      },
      {
        value: "Instant",
        label: "Customer Replies",
      },
      {
        value: "Multi-Step",
        label: "Conversation Flows",
      },
    ],

    features: [
      {
        icon: Bot,
        title: "Visual Chatbot Builder",
        description:
          "Create customer journeys visually without needing a developer.",
      },
      {
        icon: Workflow,
        title: "Conversation Flows",
        description:
          "Design multi-step conversations for sales, support, lead capture, and FAQs.",
      },
      {
        icon: MessageCircle,
        title: "Automated Replies",
        description:
          "Answer common questions instantly and keep customers engaged.",
      },
      {
        icon: UserPlus,
        title: "Lead Qualification",
        description:
          "Ask questions and collect information before handing leads to your sales team.",
      },
    ],

    benefits: [
      "Build bots without coding",
      "Automate frequently asked questions",
      "Capture leads automatically",
      "Qualify prospects before sales follow-up",
      "Create structured conversation journeys",
      "Transfer conversations to human agents when necessary",
    ],

    steps: [
      {
        number: "01",
        title: "Design Your Flow",
        description:
          "Create your WhatsApp conversation using a visual workflow builder.",
      },
      {
        number: "02",
        title: "Add Questions and Actions",
        description:
          "Add messages, buttons, questions, lead fields, and automated actions.",
      },
      {
        number: "03",
        title: "Launch Your Bot",
        description:
          "Publish the chatbot and let it handle customer conversations automatically.",
      },
    ],
  },

  /* =======================================================
     3. WHATSAPP BUSINESS API
  ======================================================= */

  "whatsapp-business-api": {
    slug: "whatsapp-business-api",
    label: "WHATSAPP BUSINESS API",
    title: "Connect Your Business to WhatsApp at Scale",
    subtitle:
      "Build reliable WhatsApp communication into your business operations.",
    description:
      "Use the WhatsApp Business API to create scalable customer communication experiences for marketing, sales, support, notifications, automation, and integrations.",
    heroIcon: Code2,
    heroColor: "from-purple-500 to-violet-600",
    primaryButton: "Get WhatsApp API",
    secondaryButton: "Talk to Our Team",

    stats: [
      {
        value: "API",
        label: "Business Integration",
      },
      {
        value: "Scale",
        label: "Customer Messaging",
      },
      {
        value: "Multi-Team",
        label: "Business Access",
      },
      {
        value: "24/7",
        label: "Automation",
      },
    ],

    features: [
      {
        icon: Code2,
        title: "Business API Access",
        description:
          "Connect your business systems with WhatsApp communication.",
      },
      {
        icon: Plug,
        title: "System Integrations",
        description:
          "Connect WhatsApp with CRM, websites, internal tools, and other business systems.",
      },
      {
        icon: Send,
        title: "Template Messaging",
        description:
          "Create structured business messages for notifications, updates, and campaigns.",
      },
      {
        icon: ShieldCheck,
        title: "Business-Ready Infrastructure",
        description:
          "Build reliable communication workflows around your business messaging requirements.",
      },
    ],

    benefits: [
      "Connect WhatsApp with your business systems",
      "Centralize customer communication",
      "Automate transactional messages",
      "Create scalable messaging workflows",
      "Connect CRM and business tools",
      "Build custom WhatsApp experiences",
    ],

    steps: [
      {
        number: "01",
        title: "Connect WhatsApp",
        description:
          "Set up your WhatsApp Business communication environment.",
      },
      {
        number: "02",
        title: "Connect Your Systems",
        description:
          "Integrate your CRM, applications, workflows, or other business tools.",
      },
      {
        number: "03",
        title: "Automate Communication",
        description:
          "Build messaging workflows for marketing, sales, support, and notifications.",
      },
    ],
  },

  /* =======================================================
     4. WHATSAPP FORMS
  ======================================================= */

  "whatsapp-forms": {
    slug: "whatsapp-forms",
    label: "WHATSAPP FORMS",
    title: "Collect Leads and Customer Information Inside WhatsApp",
    subtitle:
      "Replace complicated forms with simple conversational data collection.",
    description:
      "Capture customer information directly inside WhatsApp conversations. Ask questions, collect contact details, understand customer requirements, and move qualified leads into your sales process.",
    heroIcon: FileText,
    heroColor: "from-cyan-500 to-blue-600",
    primaryButton: "Create WhatsApp Forms",
    secondaryButton: "Explore Forms",

    stats: [
      {
        value: "Simple",
        label: "Data Collection",
      },
      {
        value: "Fast",
        label: "Lead Capture",
      },
      {
        value: "Mobile",
        label: "Customer Experience",
      },
      {
        value: "Automated",
        label: "Lead Routing",
      },
    ],

    features: [
      {
        icon: FormInput,
        title: "Conversational Forms",
        description:
          "Collect customer information through natural WhatsApp conversations.",
      },
      {
        icon: Database,
        title: "Collect Customer Data",
        description:
          "Capture names, contact information, requirements, preferences, and other useful fields.",
      },
      {
        icon: UserPlus,
        title: "Lead Capture",
        description:
          "Turn WhatsApp conversations into structured leads for your business.",
      },
      {
        icon: Workflow,
        title: "Automated Routing",
        description:
          "Send collected information into the next step of your sales or support workflow.",
      },
    ],

    benefits: [
      "Collect customer information without external forms",
      "Improve mobile lead capture",
      "Reduce form abandonment",
      "Create conversational experiences",
      "Automatically organize lead information",
      "Move leads into sales workflows faster",
    ],

    steps: [
      {
        number: "01",
        title: "Create Your Form",
        description:
          "Choose the information you want to collect from customers.",
      },
      {
        number: "02",
        title: "Ask Customers",
        description:
          "Collect information through an interactive WhatsApp conversation.",
      },
      {
        number: "03",
        title: "Use the Data",
        description:
          "Send captured information to your team or connected business workflow.",
      },
    ],
  },

  /* =======================================================
     5. CLICK TO WHATSAPP ADS
  ======================================================= */

  "click-to-whatsapp-ads": {
    slug: "click-to-whatsapp-ads",
    label: "CLICK TO WHATSAPP ADS",
    title: "Turn Ad Clicks Into WhatsApp Conversations",
    subtitle:
      "Move customers from your ads directly into conversations with your business.",
    description:
      "Create advertising journeys where customers click your ad and start a WhatsApp conversation instantly. Capture intent, qualify leads, and continue the journey through WhatsApp.",
    heroIcon: MousePointerClick,
    heroColor: "from-pink-500 to-rose-600",
    primaryButton: "Launch WhatsApp Ads",
    secondaryButton: "Explore Ad Journeys",

    stats: [
      {
        value: "1 Click",
        label: "To Start Chat",
      },
      {
        value: "Higher",
        label: "Conversation Intent",
      },
      {
        value: "Instant",
        label: "Lead Engagement",
      },
      {
        value: "24/7",
        label: "Automated Response",
      },
    ],

    features: [
      {
        icon: MousePointerClick,
        title: "Click-to-Chat Ads",
        description:
          "Send customers from your advertising campaigns directly into WhatsApp.",
      },
      {
        icon: MessageCircle,
        title: "Instant Conversations",
        description:
          "Start a WhatsApp conversation as soon as the customer interacts with your ad.",
      },
      {
        icon: Bot,
        title: "Automated Qualification",
        description:
          "Use automated conversations to understand customer intent and requirements.",
      },
      {
        icon: BarChart3,
        title: "Campaign Insights",
        description:
          "Understand how customers move from campaigns into conversations.",
      },
    ],

    benefits: [
      "Reduce the distance between advertising and sales",
      "Start conversations instantly",
      "Capture high-intent leads",
      "Automate first responses",
      "Qualify leads before sales follow-up",
      "Create conversation-driven campaigns",
    ],

    steps: [
      {
        number: "01",
        title: "Create Your Campaign",
        description:
          "Build an advertising campaign designed to start WhatsApp conversations.",
      },
      {
        number: "02",
        title: "Customer Clicks",
        description:
          "The customer interacts with your advertisement and opens WhatsApp.",
      },
      {
        number: "03",
        title: "Convert the Conversation",
        description:
          "Use automation and sales follow-ups to turn the conversation into a business opportunity.",
      },
    ],
  },

  /* =======================================================
     6. WHATSAPP MARKETING
  ======================================================= */

  "whatsapp-marketing": {
    slug: "whatsapp-marketing",
    label: "WHATSAPP MARKETING",
    title: "Grow Your Business With WhatsApp Marketing",
    subtitle:
      "Create personalized campaigns that start conversations and drive action.",
    description:
      "Reach customers with relevant WhatsApp marketing campaigns. Promote products, announce offers, re-engage customers, and create personalized communication journeys.",
    heroIcon: Megaphone,
    heroColor: "from-orange-500 to-red-600",
    primaryButton: "Start WhatsApp Marketing",
    secondaryButton: "Explore Campaigns",

    stats: [
      {
        value: "Targeted",
        label: "Customer Campaigns",
      },
      {
        value: "Personalized",
        label: "Messages",
      },
      {
        value: "Fast",
        label: "Customer Reach",
      },
      {
        value: "Action",
        label: "Driven Conversations",
      },
    ],

    features: [
      {
        icon: Megaphone,
        title: "Campaign Broadcasting",
        description:
          "Reach customer segments with relevant promotional communication.",
      },
      {
        icon: Sparkles,
        title: "Personalized Messaging",
        description:
          "Create messaging experiences tailored to customer interests and context.",
      },
      {
        icon: Users,
        title: "Audience Segmentation",
        description:
          "Organize customers into useful segments for more relevant campaigns.",
      },
      {
        icon: BarChart3,
        title: "Campaign Performance",
        description:
          "Track campaign engagement and understand customer responses.",
      },
    ],

    benefits: [
      "Promote products and services",
      "Re-engage existing customers",
      "Send campaign updates",
      "Create personalized communication",
      "Segment customer audiences",
      "Move campaign responses into sales conversations",
    ],

    steps: [
      {
        number: "01",
        title: "Choose Your Audience",
        description:
          "Select the customer segment you want to reach.",
      },
      {
        number: "02",
        title: "Create Your Campaign",
        description:
          "Build a relevant WhatsApp message and campaign journey.",
      },
      {
        number: "03",
        title: "Start Conversations",
        description:
          "Engage customers and continue responses through WhatsApp.",
      },
    ],
  },

  /* =======================================================
     7. WHATSAPP AUTOMATION
  ======================================================= */

  automation: {
    slug: "automation",
    label: "WHATSAPP AUTOMATION",
    title: "Automate Customer Conversations on WhatsApp",
    subtitle:
      "Save time with workflows that respond, qualify, notify, and follow up automatically.",
    description:
      "Automate repetitive WhatsApp tasks and customer journeys. Create workflows for welcome messages, lead qualification, follow-ups, notifications, support, and sales.",
    heroIcon: Workflow,
    heroColor: "from-green-500 to-emerald-600",
    primaryButton: "Start Automation",
    secondaryButton: "Explore Workflows",

    stats: [
      {
        value: "24/7",
        label: "Automation",
      },
      {
        value: "Faster",
        label: "Customer Replies",
      },
      {
        value: "Less",
        label: "Manual Work",
      },
      {
        value: "More",
        label: "Follow-Ups",
      },
    ],

    features: [
      {
        icon: Workflow,
        title: "Visual Workflows",
        description:
          "Build automated customer journeys using simple workflow logic.",
      },
      {
        icon: Zap,
        title: "Instant Actions",
        description:
          "Trigger messages and actions automatically when customer events occur.",
      },
      {
        icon: Clock3,
        title: "Automated Follow-Ups",
        description:
          "Automatically follow up with customers at the right time.",
      },
      {
        icon: CheckCircle2,
        title: "Business Automation",
        description:
          "Automate repetitive customer communication across your business.",
      },
    ],

    benefits: [
      "Automate repetitive customer conversations",
      "Send instant responses",
      "Create automated follow-ups",
      "Reduce manual work",
      "Build lead qualification workflows",
      "Automate customer notifications",
    ],

    steps: [
      {
        number: "01",
        title: "Choose a Trigger",
        description:
          "Decide what customer action or business event should start the workflow.",
      },
      {
        number: "02",
        title: "Build the Workflow",
        description:
          "Add messages, conditions, actions, delays, and customer responses.",
      },
      {
        number: "03",
        title: "Automate",
        description:
          "Let WhatsApp automation handle the repetitive parts of your customer journey.",
      },
    ],
  },

  /* =======================================================
     8. WHATSAPP CRM
  ======================================================= */

  "whatsapp-crm": {
    slug: "whatsapp-crm",
    label: "WHATSAPP CRM",
    title: "Turn WhatsApp Conversations Into a Sales CRM",
    subtitle:
      "Organize leads, conversations, follow-ups, and customer relationships in one place.",
    description:
      "Give your sales team a complete view of WhatsApp customer conversations. Organize leads, assign conversations, track follow-ups, and manage customer relationships from a centralized workspace.",
    heroIcon: Users,
    heroColor: "from-teal-500 to-cyan-600",
    primaryButton: "Explore WhatsApp CRM",
    secondaryButton: "Talk to Sales",

    stats: [
      {
        value: "Central",
        label: "Customer Workspace",
      },
      {
        value: "Team",
        label: "Collaboration",
      },
      {
        value: "Organized",
        label: "Lead Management",
      },
      {
        value: "Tracked",
        label: "Follow-Ups",
      },
    ],

    features: [
      {
        icon: Users,
        title: "Team Inbox",
        description:
          "Give your team a shared place to manage customer conversations.",
      },
      {
        icon: UserPlus,
        title: "Lead Management",
        description:
          "Organize prospects and customer information around WhatsApp conversations.",
      },
      {
        icon: Clock3,
        title: "Follow-Up Tracking",
        description:
          "Keep sales teams aware of pending customer conversations and follow-ups.",
      },
      {
        icon: BarChart3,
        title: "Sales Visibility",
        description:
          "Understand customer activity and sales conversation performance.",
      },
    ],

    benefits: [
      "Centralize WhatsApp leads",
      "Assign conversations to team members",
      "Track sales follow-ups",
      "Improve team collaboration",
      "Organize customer information",
      "Reduce missed opportunities",
    ],

    steps: [
      {
        number: "01",
        title: "Capture the Lead",
        description:
          "Bring customer conversations and enquiries into your workspace.",
      },
      {
        number: "02",
        title: "Assign the Conversation",
        description:
          "Send the conversation to the appropriate sales or support team member.",
      },
      {
        number: "03",
        title: "Follow Up and Convert",
        description:
          "Track the conversation until the customer journey reaches its next stage.",
      },
    ],
  },

  /* =======================================================
     9. WHATSAPP COMMERCE
  ======================================================= */

  "whatsapp-commerce": {
    slug: "whatsapp-commerce",
    label: "WHATSAPP COMMERCE",
    title: "Sell Products Through WhatsApp Conversations",
    subtitle:
      "Bring product discovery, customer conversations, and buying journeys together.",
    description:
      "Create conversational shopping experiences on WhatsApp. Help customers discover products, answer questions, share product information, and move customers toward purchase.",
    heroIcon: ShoppingBag,
    heroColor: "from-amber-500 to-orange-600",
    primaryButton: "Start WhatsApp Commerce",
    secondaryButton: "Explore Commerce",

    stats: [
      {
        value: "Conversational",
        label: "Shopping",
      },
      {
        value: "Faster",
        label: "Product Discovery",
      },
      {
        value: "Direct",
        label: "Customer Engagement",
      },
      {
        value: "Mobile",
        label: "Buying Experience",
      },
    ],

    features: [
      {
        icon: ShoppingBag,
        title: "Product Discovery",
        description:
          "Help customers discover products directly through WhatsApp conversations.",
      },
      {
        icon: MessageCircle,
        title: "Conversational Selling",
        description:
          "Answer questions and guide customers toward the right product.",
      },
      {
        icon: CreditCard,
        title: "Purchase Journeys",
        description:
          "Create customer journeys that move naturally from product discovery toward purchase.",
      },
      {
        icon: Headphones,
        title: "Post-Sale Support",
        description:
          "Continue engaging customers after purchase through WhatsApp.",
      },
    ],

    benefits: [
      "Turn conversations into sales opportunities",
      "Help customers discover products",
      "Answer product questions instantly",
      "Create personalized shopping journeys",
      "Support customers after purchase",
      "Keep customer communication in one channel",
    ],

    steps: [
      {
        number: "01",
        title: "Customer Discovers",
        description:
          "A customer discovers a product through your WhatsApp experience.",
      },
      {
        number: "02",
        title: "Customer Asks",
        description:
          "Your business answers questions and helps the customer make a decision.",
      },
      {
        number: "03",
        title: "Customer Buys",
        description:
          "Move the customer into the appropriate purchase journey and continue supporting them.",
      },
    ],
  },

  /* =======================================================
     10. WHATSAPP CHAT WIDGET
  ======================================================= */

  "whatsapp-chat-widget": {
    slug: "whatsapp-chat-widget",
    label: "WHATSAPP CHAT WIDGET",
    title: "Add a WhatsApp Chat Widget to Your Website",
    subtitle:
      "Turn website visitors into WhatsApp conversations with one simple click.",
    description:
      "Add a WhatsApp chat experience to your website so visitors can contact your business instantly. Start conversations, answer questions, capture leads, and move website visitors into WhatsApp.",
    heroIcon: MessageSquareText,
    heroColor: "from-emerald-500 to-green-700",
    primaryButton: "Add WhatsApp Widget",
    secondaryButton: "See Widget Demo",

    stats: [
      {
        value: "1 Click",
        label: "To Start Chat",
      },
      {
        value: "24/7",
        label: "Customer Access",
      },
      {
        value: "Mobile",
        label: "Friendly Experience",
      },
      {
        value: "More",
        label: "Website Conversations",
      },
    ],

    features: [
      {
        icon: MessageSquareText,
        title: "Website Chat Button",
        description:
          "Give website visitors an easy way to start a WhatsApp conversation.",
      },
      {
        icon: Globe2,
        title: "Website Integration",
        description:
          "Place WhatsApp chat access directly across important website pages.",
      },
      {
        icon: Bot,
        title: "Automated Welcome",
        description:
          "Start visitors with a helpful automated greeting and conversation flow.",
      },
      {
        icon: Headphones,
        title: "Customer Support",
        description:
          "Move website visitors into WhatsApp support conversations.",
      },
    ],

    benefits: [
      "Turn website visitors into WhatsApp conversations",
      "Make contacting your business easier",
      "Capture website leads",
      "Offer instant customer support",
      "Create automated welcome journeys",
      "Connect website traffic with your WhatsApp team",
    ],

    steps: [
      {
        number: "01",
        title: "Add the Widget",
        description:
          "Place the WhatsApp chat widget on your website.",
      },
      {
        number: "02",
        title: "Customize the Experience",
        description:
          "Configure the greeting, appearance, and customer journey.",
      },
      {
        number: "03",
        title: "Start Conversations",
        description:
          "Website visitors can instantly start chatting with your business on WhatsApp.",
      },
    ],
  },
};

/* =========================================================
   ROUTE MAPPING
========================================================= */

const SOLUTION_ROUTES: Record<string, string> = {
  "voice-calling": "/solutions/channels/voice",

  chatbots: "/products/whatsapp-chatbots",

  "whatsapp-business-api": "/products",

  "whatsapp-forms": "/products/whatsapp-forms",

  "click-to-whatsapp-ads": "/products/click-to-whatsapp-ads",

  "whatsapp-marketing": "/products/marketing-hub",

  automation: "/products/whatsapp-automation",

  "whatsapp-crm": "/products/shared-team-inbox",

  "whatsapp-commerce": "/products/whatsapp-sales",

  "whatsapp-chat-widget": "/products/whatsapp-chat-widget",
};

const SECONDARY_ROUTES: Record<string, string> = {
  "voice-calling": "/solutions/channels/voice",

  chatbots: "/products/workflow-builder",

  "whatsapp-business-api": "/products",

  "whatsapp-forms": "/products/whatsapp-forms",

  "click-to-whatsapp-ads": "/products/click-to-whatsapp-ads",

  "whatsapp-marketing": "/products/marketing-hub",

  automation: "/products/workflow-builder",

  "whatsapp-crm": "/products/shared-team-inbox",

  "whatsapp-commerce": "/products/whatsapp-sales",

  "whatsapp-chat-widget": "/products/whatsapp-chat-widget",
};

/* =========================================================
   COMPONENT
========================================================= */

export default function WhatsAppSolution() {
  const params = useParams<{ solution?: string }>();

  /*
   * Example:
   *
   * /solutions/whatsapp/automation
   *
   * params.solution:
   *
   * "automation"
   */

  const solutionSlug = (params.solution || "")
  .trim()
  .toLowerCase();

/*
 * Map short WhatsApp URLs to the actual WhatsApp page slugs.
 *
 * Example:
 * /solutions/whatsapp/forms
 *        ↓
 * whatsapp-forms
 */
const SLUG_ALIASES: Record<string, string> = {
  forms: "whatsapp-forms",
  chatbots: "chatbots",
  "chatbot-builder": "chatbots",
  "business-api": "whatsapp-business-api",
  "whatsapp-business-api": "whatsapp-business-api",
  "click-to-whatsapp-ads": "click-to-whatsapp-ads",
  marketing: "whatsapp-marketing",
  "whatsapp-marketing": "whatsapp-marketing",
  automation: "automation",
  crm: "whatsapp-crm",
  "whatsapp-crm": "whatsapp-crm",
  commerce: "whatsapp-commerce",
  "whatsapp-commerce": "whatsapp-commerce",
  "chat-widget": "whatsapp-chat-widget",
  "whatsapp-chat-widget": "whatsapp-chat-widget",
  "voice-calling": "voice-calling",
};

/*
 * Convert the URL slug into the matching page slug.
 */
const normalizedSlug =
  SLUG_ALIASES[solutionSlug] || solutionSlug;

  /*
   * Find page.
   */
  const page = useMemo(() => {
    return WHATSAPP_PAGES[normalizedSlug] || null;
  }, [normalizedSlug]);

  /* =======================================================
     INVALID PAGE
  ======================================================= */

  if (!page) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5FBF7] px-6">
        <div className="w-full max-w-lg rounded-3xl border border-green-100 bg-white p-8 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E4F8EF] text-[#159447]">
            <MessageCircle className="h-8 w-8" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-950">
            WhatsApp Solution Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            We couldn't find the WhatsApp solution:
          </p>

          <p className="mt-3 rounded-xl bg-gray-50 px-4 py-3 font-mono text-sm text-gray-700">
            {solutionSlug || "unknown"}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#159447] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#117B3A]"
            >
              View All Solutions

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#159447] hover:bg-green-50"
            >
              View Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const HeroIcon = page.heroIcon;

  const primaryRoute =
    SOLUTION_ROUTES[normalizedSlug] || "/products";

  const secondaryRoute =
    SECONDARY_ROUTES[normalizedSlug] || "/solutions";

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F4FCF8] pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

          <div className="absolute right-[-100px] top-10 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

          <div className="absolute bottom-[-150px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          {/* Breadcrumb */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link
              href="/"
              className="transition-colors hover:text-[#159447]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/solutions"
              className="transition-colors hover:text-[#159447]"
            >
              Solutions
            </Link>

            <span>/</span>

            <span className="font-medium text-[#159447]">
              WhatsApp
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* =================================================
                LEFT
            ================================================= */}

            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${page.heroColor} text-white`}
                >
                  <HeroIcon className="h-4 w-4" />
                </div>

                <span className="text-xs font-bold tracking-[0.16em] text-[#159447]">
                  {page.label}
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-[#075E54]">
                {page.subtitle}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                {page.description}
              </p>

              {/* =================================================
                  HERO BUTTONS
              ================================================= */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={primaryRoute}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#159447] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition-all hover:-translate-y-0.5 hover:bg-[#117B3A] hover:shadow-xl sm:w-auto"
                >
                  {page.primaryButton}

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={secondaryRoute}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-[#159447] hover:bg-green-50 hover:text-[#075E54] sm:w-auto"
                >
                  {page.secondaryButton}
                </Link>
              </div>

              {/* Trust points */}

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#159447]" />

                  WhatsApp-first experience
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#159447]" />

                  Built for growing businesses
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <div className="relative">
              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-green-200/30 to-emerald-100/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-5 shadow-[0_30px_100px_rgba(0,0,0,0.10)] sm:p-7">
                {/* Header */}

                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${page.heroColor} text-white shadow-lg`}
                    >
                      <HeroIcon className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                        WhatsApp Solution
                      </p>

                      <h2 className="mt-1 text-base font-bold text-gray-900">
                        {page.label}
                      </h2>
                    </div>
                  </div>

                  <div className="h-3 w-3 rounded-full bg-[#159447]" />
                </div>

                {/* Chat mockup */}

                <div className="mt-6 rounded-3xl bg-[#F3F9F6] p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#159447] text-white">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div className="rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                      <p className="text-sm font-medium text-gray-800">
                        How can we help your business today?
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <div className="rounded-2xl rounded-tr-md bg-[#159447] px-4 py-3 text-sm font-medium text-white shadow-sm">
                      I want to learn more about{" "}
                      {page.label.toLowerCase()}.
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                    <Sparkles className="h-3.5 w-3.5 text-[#159447]" />

                    Powered by WhatsWare
                  </div>
                </div>

                {/* Dynamic mini cards */}

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {page.stats.slice(0, 4).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-gray-100 bg-white p-4"
                    >
                      <p className="text-lg font-bold text-[#159447]">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gray-100 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
          {page.stats.map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-7 text-center sm:px-6"
            >
              <p className="text-2xl font-bold text-[#159447] sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#159447]">
              Everything You Need
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Powerful tools for{" "}
              <span className="text-[#159447]">
                {page.label.toLowerCase()}
              </span>
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Build better customer experiences with features designed
              around your WhatsApp business journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-[0_20px_60px_rgba(21,148,71,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E4F8EF] text-[#159447] transition-all duration-300 group-hover:bg-[#159447] group-hover:text-white">
                    <FeatureIcon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="bg-[#F5FBF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#159447]">
              Why WhatsWare
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Make every WhatsApp conversation more valuable
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              WhatsWare helps businesses create structured WhatsApp
              experiences that connect marketing, sales, support, and
              customer engagement.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {page.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-green-100 bg-white p-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E4F8EF] text-[#159447]">
                    <Check className="h-4 w-4" />
                  </div>

                  <span className="text-sm leading-6 text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-green-200/30 blur-2xl" />

            <div className="relative rounded-[2rem] border border-green-100 bg-white p-6 shadow-[0_25px_80px_rgba(21,148,71,0.10)] sm:p-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${page.heroColor} text-white`}
                >
                  <HeroIcon className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    WhatsWare
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    {page.label}
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {page.benefits.slice(0, 4).map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl bg-[#F5FBF7] p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
                      <span className="text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-gray-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#159447]">
              How It Works
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Get started in three simple steps
            </h2>
          </div>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-green-100 md:block" />

            {page.steps.map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#F5FBF7] bg-[#159447] text-xl font-bold text-white shadow-lg">
                  {step.number}
                </div>

                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#075E54] via-[#087A69] to-[#159447] px-6 py-14 text-center text-white shadow-[0_25px_80px_rgba(7,94,84,0.20)] sm:px-10 sm:py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <HeroIcon className="h-8 w-8" />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your WhatsApp customer experience?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Start building better conversations with WhatsWare and
            turn WhatsApp into a powerful channel for your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={primaryRoute}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#075E54] transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              {page.primaryButton}

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/solutions"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15 sm:w-auto"
            >
              View All Solutions

              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}