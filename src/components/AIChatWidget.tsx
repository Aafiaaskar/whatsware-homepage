import { useState } from "react";
import {
  Bot,
  ChevronDown,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

const quickQuestions = [
  "What is WhatsWare?",
  "What can Aira do?",
  "Show me pricing",
  "I want a demo",
];

function getBotReply(message: string) {
  const text = message.toLowerCase();

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hi! 👋 I'm Aira, your WhatsWare AI Agent. How can I help you today?";
  }

  if (
    text.includes("what is whatsware") ||
    text.includes("whatsware")
  ) {
    return "WhatsWare helps businesses manage customer conversations, generate leads, automate follow-ups, and connect with customers through WhatsApp and other channels.";
  }

  if (
    text.includes("what can aira") ||
    text.includes("what do you do") ||
    text.includes("what can you do")
  ) {
    return "I can help visitors understand WhatsWare, explore solutions, learn about pricing, discover features, and connect with the WhatsWare team.";
  }

  if (
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("plan") ||
    text.includes("cost")
  ) {
    return "Sure! I can help you explore WhatsWare pricing. Click the button below to view the available plans.";
  }

  if (
    text.includes("demo") ||
    text.includes("sales") ||
    text.includes("talk to") ||
    text.includes("contact")
  ) {
    return "Absolutely! You can connect with the WhatsWare team for a personalized demo.";
  }

  if (
    text.includes("restaurant") ||
    text.includes("food")
  ) {
    return "Yes! WhatsWare can help restaurants automate customer conversations, capture enquiries, follow up with customers, and manage leads.";
  }

  if (
    text.includes("travel") ||
    text.includes("tourism")
  ) {
    return "WhatsWare can help travel businesses respond to enquiries, qualify leads, automate follow-ups, and keep customer conversations organized.";
  }

  return "I'd be happy to help! You can ask me about WhatsWare, AI Agents, WhatsApp automation, pricing, CRM, sales, or getting a demo.";
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hi! 👋 I'm Aira, your WhatsWare AI Agent. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (message?: string) => {
    const text = (message ?? input).trim();

    if (!text || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotReply(text),
      };

      setMessages((current) => [...current, reply]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* =========================================================
          CHAT WINDOW
      ========================================================== */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-[9999] flex h-[620px] w-[380px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-[28px] border border-[#d6a27d]/20 bg-[#fffdf7] shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:right-6">
          
          {/* HEADER */}
          <div className="relative overflow-hidden bg-[#075e54] px-5 pb-5 pt-5 text-white">
            <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#d6a27d]/20 blur-2xl" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                
                {/* Agent image */}
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 bg-white">
                  <img
                    src="/agents/whatsware-agent.png"
                    alt="Aira"
                    className="h-full w-full object-cover object-top"
                  />

                  <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#075e54] bg-emerald-400" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold">
                      Aira
                    </h3>

                    <Sparkles className="h-4 w-4 text-[#f0c5a5]" />
                  </div>

                  <p className="text-xs text-white/70">
                    WhatsWare AI Agent
                  </p>

                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span className="text-[10px] text-white/70">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mt-4 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs leading-5 text-white/80">
                Ask me anything about WhatsWare, our solutions,
                pricing or how we can help your business.
              </p>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-[#fffdf7] px-4 py-5">
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#075e54]">
                    <img
                      src="/agents/whatsware-agent.png"
                      alt="Aira"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.sender === "user"
                      ? "rounded-br-md bg-[#075e54] text-white"
                      : "rounded-bl-md border border-[#eadfd4] bg-white text-[#26312c] shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-[#075e54]">
                  <img
                    src="/agents/whatsware-agent.png"
                    alt="Aira"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-[#eadfd4] bg-white px-4 py-3 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#075e54]" />
                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#075e54]"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#075e54]"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}

            {/* QUICK QUESTIONS */}
            {messages.length === 1 && (
              <div className="pt-2">
                <p className="mb-2 px-1 text-[11px] font-medium uppercase tracking-wider text-[#8b8179]">
                  Try asking
                </p>

                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => sendMessage(question)}
                      className="rounded-full border border-[#d6a27d]/30 bg-white px-3 py-2 text-xs font-medium text-[#075e54] transition hover:border-[#075e54]/30 hover:bg-[#075e54]/5"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="border-t border-[#eadfd4] bg-white px-3 py-3">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2 rounded-2xl border border-[#e2d8ce] bg-[#fffdf7] px-3 py-2 transition focus-within:border-[#075e54]/40"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Aira anything..."
                className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-[#26312c] outline-none placeholder:text-[#aaa19a]"
              />

              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#075e54] text-white transition hover:bg-[#064c44] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-2 text-center text-[9px] text-[#aaa19a]">
              Powered by WhatsWare AI
            </p>
          </div>
        </div>
      )}

      {/* =========================================================
          FLOATING BUTTON
      ========================================================== */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-[9998] flex items-center gap-3 rounded-full bg-[#075e54] p-2 pr-5 text-white shadow-[0_12px_40px_rgba(7,94,84,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(7,94,84,0.4)] sm:bottom-6 sm:right-6"
          aria-label="Open Aira AI Agent"
        >
          {/* Agent image */}
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-white/80 bg-white">
            <img
              src="/agents/whatsware-agent.png"
              alt="Aira"
              className="h-full w-full object-cover object-top"
            />

            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-medium text-white/70">
              Talk to
            </p>

            <p className="text-sm font-semibold">
              Aira AI Agent
            </p>
          </div>

          <MessageCircle className="ml-1 h-5 w-5" />
        </button>
      )}
    </>
  );
}