import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Clock3,
  MessageCircle,
  MousePointerClick,
  Send,
  Sparkles,
  Target,
  Users,
  Zap,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

import { Link } from "wouter";

/* =========================================================
   TYPES
========================================================= */

type ChatMessage = {
  id: number;
  sender: "user" | "aira";
  text: string;
};

/* =========================================================
   AIRA KNOWLEDGE BASE
========================================================= */

function getAiraResponse(question: string): string {
  const q = question.toLowerCase().trim();

  /* -----------------------------------------------
     GREETINGS
  ------------------------------------------------ */
  if (
    q.match(/^(hi|hello|hey|hai|vanakkam|good morning|good evening)/)
  ) {
    return `Hi! 👋 I'm Aira, WhatsWare's AI business agent.

I can help you learn about WhatsWare, our WhatsApp solutions, AI agents, automation, lead generation, pricing, integrations, and more.

What would you like to know?`;
  }

  /* -----------------------------------------------
     WHAT IS WHATSWARE
  ------------------------------------------------ */
  if (
    q.includes("what is whatsware") ||
    q.includes("whatsware") &&
      (q.includes("about") ||
        q.includes("company") ||
        q.includes("do"))
  ) {
    return `WhatsWare is a WhatsApp-focused business communication and automation platform.

It helps businesses capture leads, qualify customers, automate conversations, send broadcasts, manage sales conversations, provide customer support, and use AI agents — all through WhatsApp.

The goal is simple: help businesses turn conversations into leads, customers, and long-term relationships.`;
  }

  /* -----------------------------------------------
     AIRA
  ------------------------------------------------ */
  if (
    q.includes("what is aira") ||
    q.includes("who is aira") ||
    q.includes("about aira") ||
    q.includes("aira")
  ) {
    return `I'm Aira 🤖 — WhatsWare's intelligent AI business agent.

I can help businesses:

• Answer customer questions 24/7
• Capture and qualify leads
• Handle repetitive conversations
• Recommend products or services
• Guide customers toward the next step
• Follow up with prospects
• Hand conversations to human team members when needed

Think of me as the first intelligent layer between your business and your customers.`;
  }

  /* -----------------------------------------------
     PRODUCTS
  ------------------------------------------------ */
  if (
    q.includes("products") ||
    q.includes("product") ||
    q.includes("features") ||
    q.includes("what do you offer")
  ) {
    return `WhatsWare offers a complete WhatsApp business ecosystem.

Some of our solutions include:

• WhatsApp AI Agents
• WhatsApp Automation
• WhatsApp Broadcast
• WhatsApp Chatbots
• WhatsApp Forms
• WhatsApp Chat Widget
• WhatsApp QR Code
• WhatsApp Link Generator
• WhatsApp Payments
• WhatsApp Sales
• Shared Team Inbox
• Workflow Builder
• Automated Follow-ups
• AI Lead Qualification
• Analytics
• Click-to-WhatsApp Ads
• Instagram Automation
• RCS
• Voice solutions

You can explore all products from the Products menu.`;
  }

  /* -----------------------------------------------
     AI AGENTS
  ------------------------------------------------ */
  if (
    q.includes("ai agent") ||
    q.includes("ai agents") ||
    q.includes("artificial intelligence") ||
    q.includes("smart ai")
  ) {
    return `WhatsWare AI Agents can have natural conversations with your customers.

They can understand questions, identify customer intent, collect information, qualify leads, answer FAQs, recommend solutions, and guide customers toward conversion.

When a conversation needs a human, your team can step in.

So it's not simply AI replacing people — it's AI handling repetitive conversations while your team focuses on important customers and decisions.`;
  }

  /* -----------------------------------------------
     CHATBOT
  ------------------------------------------------ */
  if (
    q.includes("chatbot") ||
    q.includes("bot") ||
    q.includes("automated chat")
  ) {
    return `WhatsWare Chatbots help businesses automate customer conversations on WhatsApp.

For example, a customer could ask:

"Do you have this product in stock?"

The chatbot can instantly answer using your business information.

It can also collect details such as name, phone number, requirement, location, budget, or appointment preference and pass qualified leads to your team.`;
  }

  /* -----------------------------------------------
     AUTOMATION
  ------------------------------------------------ */
  if (
    q.includes("automation") ||
    q.includes("automate") ||
    q.includes("automatically")
  ) {
    return `WhatsWare automation helps you automate repetitive WhatsApp tasks.

You can automate:

• Welcome messages
• Keyword replies
• Customer follow-ups
• Lead qualification
• Notifications
• Appointment reminders
• Order confirmations
• Delivery updates
• Renewal reminders
• Campaign workflows

This means your customers can receive timely responses even when your team is busy or offline.`;
  }

  /* -----------------------------------------------
     LEADS
  ------------------------------------------------ */
  if (
    q.includes("lead") ||
    q.includes("leads") ||
    q.includes("lead generation") ||
    q.includes("capture customers")
  ) {
    return `Yes! Lead generation is one of WhatsWare's core use cases.

You can capture leads through:

• Click-to-WhatsApp Ads
• WhatsApp QR Codes
• WhatsApp Forms
• WhatsApp Chat Widgets
• WhatsApp Links
• AI conversations

Aira can also ask qualifying questions and identify high-intent prospects before sending them to your sales team.`;
  }

  /* -----------------------------------------------
     SALES
  ------------------------------------------------ */
  if (
    q.includes("sales") ||
    q.includes("sell") ||
    q.includes("conversion") ||
    q.includes("convert")
  ) {
    return `WhatsWare helps your sales team turn WhatsApp conversations into opportunities.

You can capture leads, qualify them with AI, assign conversations to your team, follow up automatically, share product information, collect payments, and track conversations.

The idea is to make WhatsApp part of your complete customer journey — from first message to conversion.`;
  }

  /* -----------------------------------------------
     BROADCAST
  ------------------------------------------------ */
  if (
    q.includes("broadcast") ||
    q.includes("bulk message") ||
    q.includes("bulk whatsapp") ||
    q.includes("campaign")
  ) {
    return `WhatsWare supports WhatsApp broadcast and campaign workflows for businesses.

You can use campaigns for things such as:

• Product launches
• Festival campaigns
• Offers
• Customer updates
• Lead nurturing
• Promotions
• Re-engagement

Campaigns can be combined with lead capture and automation to create a complete customer journey.`;
  }

  /* -----------------------------------------------
     INTEGRATIONS
  ------------------------------------------------ */
  if (
    q.includes("integration") ||
    q.includes("integrations") ||
    q.includes("crm") ||
    q.includes("shopify") ||
    q.includes("zapier") ||
    q.includes("google sheets")
  ) {
    return `WhatsWare is designed to work with the tools your business already uses.

Our integration ecosystem can connect WhatsApp workflows with CRM, marketing, e-commerce, automation, payments, logistics, support, and productivity tools.

Examples include CRM platforms, Shopify, Google Sheets, Zapier, WooCommerce and other business systems.

You can explore the full Integrations section from the website navigation.`;
  }

  /* -----------------------------------------------
     PRICING
  ------------------------------------------------ */
  if (
    q.includes("price") ||
    q.includes("pricing") ||
    q.includes("cost") ||
    q.includes("plan") ||
    q.includes("plans") ||
    q.includes("how much")
  ) {
    return `WhatsWare currently offers yearly plans across two main categories:

Marketing & Support Hub:
• Spark — $300/year
• Boost — $600/year
• Titan — $2,000/year
• Customizable — Contact us

WhatsApp AI Agents are also available with plans designed around AI-powered customer conversations and automation.

For the most suitable plan, I recommend contacting the WhatsWare team so they can understand your business requirements.`;
  }

  /* -----------------------------------------------
     SUPPORT
  ------------------------------------------------ */
  if (
    q.includes("support") ||
    q.includes("customer service") ||
    q.includes("help")
  ) {
    return `WhatsWare combines AI automation with human support.

Aira can handle repetitive questions and conversations automatically.

When a customer needs a person, your team can take over the conversation.

This gives customers fast responses while keeping the human touch where it matters.`;
  }

  /* -----------------------------------------------
     INDUSTRIES
  ------------------------------------------------ */
  if (
    q.includes("industry") ||
    q.includes("industries") ||
    q.includes("business") ||
    q.includes("restaurant") ||
    q.includes("real estate") ||
    q.includes("education") ||
    q.includes("salon")
  ) {
    return `WhatsWare can be used across many industries.

Examples include:

• B2B Sales
• Travel & Tourism
• Restaurants & Food Businesses
• Spas & Salons
• Health & Wellness
• Beauty & Cosmetics
• EdTech
• Automotive
• Home Decor & Furnishing
• Marketing Agencies
• Real Estate
• Freelancers & Consultants

The workflows can be customized around each business's customer journey.`;
  }

  /* -----------------------------------------------
     WHATSAPP
  ------------------------------------------------ */
  if (
    q.includes("whatsapp") ||
    q.includes("wa")
  ) {
    return `WhatsWare is built around WhatsApp business communication.

You can use WhatsApp to:

• Capture leads
• Answer customer questions
• Run AI conversations
• Send campaigns
• Automate follow-ups
• Manage sales conversations
• Provide customer support
• Collect payments
• Send notifications

Instead of using WhatsApp only as a messaging channel, WhatsWare helps turn it into a complete business communication platform.`;
  }

  /* -----------------------------------------------
     DEMO
  ------------------------------------------------ */
  if (
    q.includes("demo") ||
    q.includes("book") ||
    q.includes("contact") ||
    q.includes("talk to someone") ||
    q.includes("sales team")
  ) {
    return `Absolutely! 😊

If you'd like to see how WhatsWare could work for your business, you can book a demo with our team.

They can understand your requirements and recommend the right WhatsWare solution.

Click the "Book a Demo" button below to get started.`;
  }

  /* -----------------------------------------------
     FOLLOW UP
  ------------------------------------------------ */
  if (
    q.includes("follow up") ||
    q.includes("follow-up") ||
    q.includes("followup")
  ) {
    return `Yes. WhatsWare can automate follow-ups so leads don't get forgotten.

For example:

Day 1 → Welcome message
Day 2 → Product information
Day 4 → Helpful reminder
Day 7 → Offer or sales follow-up

You can build workflows around your customer's journey and timing.`;
  }

  /* -----------------------------------------------
     PAYMENT
  ------------------------------------------------ */
  if (
    q.includes("payment") ||
    q.includes("pay") ||
    q.includes("collect money")
  ) {
    return `WhatsWare includes WhatsApp payment capabilities that can help businesses move customers from conversation to transaction.

You can combine product conversations, sales workflows, payment steps, and follow-ups into one customer journey.`;
  }

  /* -----------------------------------------------
     FALLBACK
  ------------------------------------------------ */
  return `That's a great question! 😊

I can currently help you with:

• What WhatsWare is
• Aira AI Agents
• WhatsApp Chatbots
• WhatsApp Automation
• Lead Generation
• WhatsApp Broadcasts
• Sales & Conversions
• Pricing
• Integrations
• Customer Support
• Industries
• Booking a Demo

Try asking something like:

"What is WhatsWare?"
or
"How can WhatsWare generate leads?"`;
}

/* =========================================================
   QUICK QUESTIONS
========================================================= */

const quickQuestions = [
  "What is WhatsWare?",
  "What can Aira do?",
  "How can WhatsWare generate leads?",
  "How much does WhatsWare cost?",
];

/* =========================================================
   AIRA PAGE
========================================================= */

export default function Aira() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "aira",
      text: `Hi! 👋 I'm Aira, WhatsWare's AI business agent.

Ask me anything about WhatsWare, our products, automation, AI agents, pricing, integrations, or lead generation.`,
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  /* =======================================================
     SEND MESSAGE
  ======================================================== */

  const sendMessage = (customQuestion?: string) => {
    const question = (customQuestion ?? input).trim();

    if (!question || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const answer = getAiraResponse(question);

      const airaMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "aira",
        text: answer,
      };

      setMessages((prev) => [...prev, airaMessage]);
      setIsTyping(false);
    }, 700);
  };

  /* =======================================================
     RESET CHAT
  ======================================================== */

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "aira",
        text: `Hi! 👋 I'm Aira, WhatsWare's AI business agent.

Ask me anything about WhatsWare, our products, automation, AI agents, pricing, integrations, or lead generation.`,
      },
    ]);

    setInput("");
    setIsTyping(false);
  };

  /* =======================================================
     ENTER KEY
  ======================================================== */

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans text-[#173C32]">

      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#FFFDF5] px-6 pb-20 pt-28 sm:pt-32 md:pb-28">

          {/* Background glows */}
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D6A27D]/15 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#356B58]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

              {/* TEXT */}
              <div className="order-2 lg:order-1">

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6A27D]/40 bg-white/80 px-4 py-2 text-sm font-semibold text-[#356B58] shadow-sm backdrop-blur-sm">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#356B58]" />

                  Meet Aira

                </div>

                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#24483C] sm:text-5xl md:text-6xl lg:text-7xl">

                  Your intelligent

                  <span className="block text-[#A97155]">
                    AI business agent.
                  </span>

                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#526B64] sm:text-lg md:text-xl">
                  Aira is WhatsWare's intelligent AI agent built to understand
                  conversations, engage customers, capture leads, answer
                  questions, and help your business move forward — 24/7.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/signup"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#356B58] px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#285443] hover:shadow-xl"
                  >
                    Get Started

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full border border-[#D7DED9] bg-white px-7 py-3.5 font-semibold text-[#356B58] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Book a Demo
                  </Link>

                </div>

              </div>

              {/* AIRA */}
              <div className="order-1 flex justify-center lg:order-2">

                <div className="relative flex h-[430px] w-full items-center justify-center sm:h-[520px] md:h-[600px]">

                  {/* Glow */}
                  <div className="absolute h-72 w-72 rounded-full bg-[#D6A27D]/20 blur-3xl sm:h-96 sm:w-96 md:h-[500px] md:w-[500px]" />

                  {/* Ring */}
                  <div className="absolute h-[300px] w-[300px] rounded-full border border-[#D6A27D]/20 sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]" />

                  {/* Animated ring */}
                  <div className="absolute h-[330px] w-[330px] animate-pulse rounded-full border border-[#356B58]/10 sm:h-[430px] sm:w-[430px] md:h-[530px] md:w-[530px]" />

                  {/* Aira */}
                  <img
                    src="/avatars/whatsware-ai-avatar-transparent.gif"
                    alt="Aira - WhatsWare AI Agent"
                    className="relative z-10 h-[350px] w-[350px] object-contain sm:h-[440px] sm:w-[440px] md:h-[540px] md:w-[540px] lg:h-[600px] lg:w-[600px]"
                  />

                  {/* Floating status */}
                  <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-2xl border border-white/70 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-md">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F0E9] p-2">
                        <img
                          src="/whatsware-logo.png"
                          alt="WhatsWare"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">
                          WhatsWare AI
                        </p>

                        <p className="text-sm font-bold text-[#24483C]">
                          Aira is online
                        </p>
                      </div>

                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#18B957]" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ⭐ TRY AIRA - LIVE CUSTOMER DEMO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#173C32] px-6 py-20 md:py-28">

          {/* Background */}
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#356B58]/50 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#159447]/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#B8F5C9] backdrop-blur-md">

                <Sparkles className="h-4 w-4" />

                Try Aira Live

              </div>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">

                Talk to Aira.

                <span className="block text-[#B8F5C9]">
                  See how your customers could be answered.
                </span>

              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                Ask Aira anything about WhatsWare. This interactive demo
                shows how an AI business agent can answer customers instantly.
              </p>

            </div>


            {/* CHAT DEMO */}
            <div className="mx-auto mt-12 max-w-5xl">

              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#F7F5EF] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">

                {/* Chat Header */}
                <div className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4 sm:px-7">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7FFF0] p-2.5">
                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">

                        <h3 className="font-bold text-[#173C32]">
                          Aira
                        </h3>

                        <span className="h-2 w-2 rounded-full bg-[#18B957]" />

                      </div>

                      <p className="text-xs text-gray-500">
                        WhatsWare AI Agent • Online
                      </p>
                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={resetChat}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition hover:bg-gray-50 hover:text-[#159447]"
                    title="Reset conversation"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>

                </div>


                {/* Chat Messages */}
                <div className="h-[470px] overflow-y-auto bg-[#EFE8DF] px-4 py-6 sm:px-7">

                  <div className="mx-auto max-w-3xl space-y-4">

                    {messages.map((message) => (

                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >

                        {message.sender === "aira" && (
                          <div className="mr-2 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E7FFF0] p-2 shadow-sm">
                            <img
                              src="/whatsware-logo.png"
                              alt="Aira"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        )}

                        <div
                          className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3.5 text-sm leading-6 shadow-sm sm:max-w-[75%] ${
                            message.sender === "user"
                              ? "rounded-br-md bg-[#159447] text-white"
                              : "rounded-bl-md bg-white text-[#33463F]"
                          }`}
                        >
                          {message.text}
                        </div>

                      </div>

                    ))}


                    {/* Typing */}
                    {isTyping && (
                      <div className="flex justify-start">

                        <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#E7FFF0] p-2">
                          <img
                            src="/whatsware-logo.png"
                            alt="Aira"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="rounded-2xl rounded-bl-md bg-white px-5 py-4 shadow-sm">

                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 animate-bounce rounded-full bg-[#159447]" />
                            <span
                              className="h-2 w-2 animate-bounce rounded-full bg-[#159447]"
                              style={{ animationDelay: "120ms" }}
                            />
                            <span
                              className="h-2 w-2 animate-bounce rounded-full bg-[#159447]"
                              style={{ animationDelay: "240ms" }}
                            />
                          </div>

                        </div>

                      </div>
                    )}

                  </div>

                </div>


                {/* Quick Questions */}
                <div className="border-t border-gray-200 bg-white px-4 py-4 sm:px-7">

                  <div className="mb-3 flex items-center justify-between">

                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Try asking
                    </p>

                    <span className="hidden text-xs text-gray-400 sm:block">
                      Powered by WhatsWare
                    </span>

                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-1">

                    {quickQuestions.map((question) => (

                      <button
                        key={question}
                        type="button"
                        disabled={isTyping}
                        onClick={() => sendMessage(question)}
                        className="group flex shrink-0 items-center gap-2 rounded-full border border-[#DCE8E1] bg-[#F7FBF8] px-4 py-2.5 text-xs font-semibold text-[#356B58] transition-all hover:border-[#159447] hover:bg-[#E9FFF1] disabled:cursor-not-allowed disabled:opacity-50"
                      >

                        {question}

                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />

                      </button>

                    ))}

                  </div>


                  {/* Input */}
                  <div className="mt-4 flex items-center gap-2 rounded-2xl border border-gray-200 bg-[#FAFAFA] p-2 focus-within:border-[#159447] focus-within:ring-2 focus-within:ring-[#159447]/10">

                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask Aira anything about WhatsWare..."
                      className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />

                    <button
                      type="button"
                      onClick={() => sendMessage()}
                      disabled={!input.trim() || isTyping}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#159447] text-white shadow-md transition-all hover:bg-[#087A3E] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Send className="h-4 w-4" />
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="bg-white px-6 py-20 md:py-28">

          <div className="mx-auto max-w-6xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F0E9] p-3">

              <img
                src="/whatsware-logo.png"
                alt="WhatsWare"
                className="h-full w-full object-contain"
              />

            </div>

            <h2 className="mt-6 text-3xl font-bold text-[#24483C] sm:text-4xl md:text-5xl">

              Not just a chatbot.

              <span className="block text-[#A97155]">
                A business agent.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#718079] sm:text-lg">
              Aira is designed to do more than answer questions. She can
              understand customer intent, guide conversations, capture
              opportunities, and help your team stay responsive around the
              clock.
            </p>

          </div>

        </section>


        {/* =====================================================
            CAPABILITIES
        ====================================================== */}
        <section className="bg-[#F8F3ED] px-6 py-20 md:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A97155]">
                What Aira Does
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#24483C] sm:text-4xl md:text-5xl">

                Conversations that

                <span className="text-[#A97155]">
                  {" "}get things done.
                </span>

              </h2>

            </div>


            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  icon: MessageCircle,
                  title: "Smart Conversations",
                  text: "Understand customer questions and respond with relevant, contextual answers.",
                },
                {
                  icon: Target,
                  title: "Lead Capture",
                  text: "Identify potential customers and collect the information your business needs.",
                },
                {
                  icon: Zap,
                  title: "Instant Responses",
                  text: "Give customers immediate answers without making them wait for your team.",
                },
                {
                  icon: Users,
                  title: "Customer Engagement",
                  text: "Keep conversations active and create more personalized customer experiences.",
                },
                {
                  icon: MousePointerClick,
                  title: "Guided Journeys",
                  text: "Move customers naturally from questions to actions, enquiries, and conversions.",
                },
                {
                  icon: Clock3,
                  title: "24/7 Availability",
                  text: "Aira keeps working even when your team is offline, weekends included.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-[#E4DDD4] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F0E9] text-[#356B58] transition-all duration-300 group-hover:bg-[#356B58] group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#24483C]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#718079] sm:text-base">
                      {item.text}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            HOW AIRA HELPS
        ====================================================== */}
        <section className="bg-white px-6 py-20 md:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A97155]">
                  From Conversation to Action
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#24483C] sm:text-4xl md:text-5xl">

                  Aira doesn't just

                  <span className="text-[#A97155]">
                    {" "}talk.
                  </span>

                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#718079] sm:text-lg">
                  Aira is designed to help your business move conversations
                  forward. From the first question to the next action, she
                  helps customers get where they need to go.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Understand what the customer needs",
                    "Respond with useful information",
                    "Capture important lead details",
                    "Guide the customer toward the next step",
                    "Hand conversations to your team when needed",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#356B58]" />

                      <span className="text-sm font-medium text-[#52625B] sm:text-base">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* Conversation Visual */}
              <div className="relative">

                <div className="rounded-[2rem] bg-[#173C32] p-7 shadow-2xl sm:p-9">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 p-2.5">

                      <img
                        src="/whatsware-logo.png"
                        alt="WhatsWare"
                        className="h-full w-full object-contain"
                      />

                    </div>

                    <div>

                      <p className="text-xs text-white/50">
                        WhatsWare AI Agent
                      </p>

                      <p className="font-bold text-white">
                        Aira
                      </p>

                    </div>

                    <span className="ml-auto h-2.5 w-2.5 rounded-full bg-[#38D978]" />

                  </div>


                  <div className="mt-8 space-y-4">

                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#356B58] p-4 text-sm leading-6 text-white">
                      Hi! I'd like to know more about WhatsWare.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-white/10 p-4 text-sm leading-6 text-white/80">
                      Absolutely! WhatsWare helps businesses capture leads,
                      automate conversations, qualify customers and manage
                      WhatsApp communication.
                    </div>

                    <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-[#356B58] p-4 text-sm leading-6 text-white">
                      Can it help me generate more leads?
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-white/10 p-4 text-sm leading-6 text-white/80">
                      Yes! You can capture leads through Click-to-WhatsApp
                      Ads, QR Codes, Forms, Chat Widgets and AI-powered
                      conversations.
                    </div>

                  </div>


                  <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#38D978]" />

                    <span className="text-xs text-white/50">
                      Aira is online
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            HUMAN + AI
        ====================================================== */}
        <section className="bg-[#F8F3ED] px-6 py-20 md:py-28">

          <div className="mx-auto max-w-6xl">

            <div className="rounded-[2rem] border border-[#E2DAD0] bg-white p-7 shadow-sm sm:p-10 md:p-14">

              <div className="mx-auto max-w-3xl text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F0E9] p-3">

                  <img
                    src="/whatsware-logo.png"
                    alt="WhatsWare"
                    className="h-full w-full object-contain"
                  />

                </div>

                <h2 className="mt-6 text-3xl font-bold text-[#24483C] sm:text-4xl">

                  AI works with your team.

                  <span className="block text-[#A97155]">
                    Not instead of your team.
                  </span>

                </h2>

                <p className="mt-5 text-base leading-8 text-[#718079] sm:text-lg">
                  When a conversation needs a human touch, your team can step
                  in. Aira handles the repetitive work while your people focus
                  on relationships, decisions, and growth.
                </p>

                <div className="mt-8">

                  <Link
                    href="/signup"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#356B58] px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#285443]"
                  >

                    Bring Aira to Your Business

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#173C32] px-6 py-20 md:py-28">

          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#356B58]/40 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#159447]/30 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 p-3">

              <img
                src="/whatsware-logo.png"
                alt="WhatsWare"
                className="h-full w-full object-contain"
              />

            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">

              Meet the AI agent built for

              <span className="block text-[#B8F5C9]">
                your business.
              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Let Aira handle conversations, capture opportunities, and keep
              your customers engaged — while your team focuses on what matters
              most.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/book-demo"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#173C32] shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Book a Demo

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

              </Link>

              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15"
              >
                Get Started
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}