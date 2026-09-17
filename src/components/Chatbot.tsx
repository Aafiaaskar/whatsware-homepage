import { useState } from "react";
import { Link } from "wouter";
import { X, Send, ArrowRight } from "lucide-react";

type Message = {
  id: number;
  sender: "user" | "aira";
  text: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "aira",
    text: "Hi 👋 I'm Aira, your WhatsWare AI assistant. How can I help you today?",
  },
];

function getAiraResponse(message: string): string {
  const text = message.toLowerCase();

  if (
    text.includes("whatsapp") ||
    text.includes("automation") ||
    text.includes("automate")
  ) {
    return "WhatsWare helps businesses automate WhatsApp conversations, follow-ups, lead qualification, broadcasts, and customer support.";
  }

  if (
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("cost")
  ) {
    return "You can explore all WhatsWare plans and features on our Pricing page.";
  }

  if (
    text.includes("ai") ||
    text.includes("agent") ||
    text.includes("aira")
  ) {
    return "WhatsWare AI Agents can answer customer questions, qualify leads, recommend products, and automate conversations.";
  }

  if (
    text.includes("demo") ||
    text.includes("book")
  ) {
    return "You can book a demo with the WhatsWare team and see how the platform works for your business.";
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hi 👋 Great to meet you! Ask me anything about WhatsWare, WhatsApp automation, AI Agents, pricing, or demos.";
  }

  return "I can help you learn about WhatsWare, WhatsApp automation, AI Agents, pricing, lead qualification, customer support, and more. What would you like to know?";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] =
    useState<Message[]>(initialMessages);

  const [input, setInput] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    const trimmed = input.trim();

    if (!trimmed || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const airaMessage: Message = {
        id: Date.now() + 1,
        sender: "aira",
        text: getAiraResponse(trimmed),
      };

      setMessages((prev) => [...prev, airaMessage]);
      setIsTyping(false);
    }, 700);
  };

  const sendQuickQuestion = (question: string) => {
    if (isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const airaMessage: Message = {
        id: Date.now() + 1,
        sender: "aira",
        text: getAiraResponse(question),
      };

      setMessages((prev) => [...prev, airaMessage]);
      setIsTyping(false);
    }, 700);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* =====================================================
          AIRA CHAT WINDOW
      ===================================================== */}

      {isOpen && (
        <div
          className="
            fixed
            bottom-[105px]
            right-4
            z-[10001]
            flex
            max-h-[calc(100vh-125px)]
            w-[370px]
            max-w-[calc(100vw-24px)]
            flex-col
            overflow-hidden
            rounded-[24px]
            border
            border-[#dceee5]
            bg-white
            shadow-[0_25px_70px_rgba(7,94,84,0.25)]
            sm:right-6
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              bg-[#075E54]
              px-5
              py-4
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-white
                "
              >
                <img
                  src="/avatars/whatsware-ai-avatar-transparent.gif"
                  alt="Aira"
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>

              <div>
                <p className="font-semibold text-white">
                  Aira
                </p>

                <div className="flex items-center gap-1.5">
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#62db8a]
                    "
                  />

                  <span className="text-xs text-white/80">
                    Online
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                text-white
                transition
                hover:bg-white/10
              "
              aria-label="Close Aira"
            >
              <X size={20} />
            </button>
          </div>

          {/* =================================================
              MESSAGES
          ================================================= */}

          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              bg-[#f8fcf8]
              p-4
            "
          >
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[82%]
                      rounded-2xl
                      px-4
                      py-3
                      text-sm
                      leading-relaxed
                      ${
                        message.sender === "user"
                          ? "rounded-br-md bg-[#159447] text-white"
                          : "rounded-bl-md border border-[#e5eee9] bg-white text-[#173C32] shadow-sm"
                      }
                    `}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="
                      rounded-2xl
                      rounded-bl-md
                      border
                      border-[#e5eee9]
                      bg-white
                      px-4
                      py-3
                      shadow-sm
                    "
                  >
                    <div className="flex gap-1">
                      <span
                        className="
                          h-1.5
                          w-1.5
                          animate-bounce
                          rounded-full
                          bg-[#159447]
                        "
                      />

                      <span
                        className="
                          h-1.5
                          w-1.5
                          animate-bounce
                          rounded-full
                          bg-[#159447]
                        "
                        style={{
                          animationDelay: "120ms",
                        }}
                      />

                      <span
                        className="
                          h-1.5
                          w-1.5
                          animate-bounce
                          rounded-full
                          bg-[#159447]
                        "
                        style={{
                          animationDelay: "240ms",
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* =================================================
              QUICK QUESTIONS
          ================================================= */}

          <div
            className="
              shrink-0
              border-t
              border-[#e8eee9]
              bg-white
              px-4
              py-3
            "
          >
            <p
              className="
                mb-2
                text-[11px]
                font-semibold
                uppercase
                tracking-wide
                text-[#789087]
              "
            >
              Quick Questions
            </p>

            <div
              className="
                flex
                gap-2
                overflow-x-auto
                pb-1
                scrollbar-thin
              "
            >
              {[
                "What is WhatsWare?",
                "Show pricing",
                "AI Agents",
              ].map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() =>
                    sendQuickQuestion(question)
                  }
                  className="
                    shrink-0
                    rounded-full
                    border
                    border-[#cfe5d9]
                    bg-[#f7fbf8]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-[#075E54]
                    transition
                    hover:border-[#159447]
                    hover:bg-[#ecf8f0]
                  "
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* =================================================
              INPUT
          ================================================= */}

          <div
            className="
              shrink-0
              border-t
              border-[#e8eee9]
              bg-white
              p-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#dce9e1]
                bg-[#f8fbf9]
                p-1.5
                pl-4
                focus-within:border-[#159447]
              "
            >
              <input
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask Aira anything..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  text-sm
                  text-[#173C32]
                  outline-none
                  placeholder:text-[#91a29b]
                "
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={
                  !input.trim() || isTyping
                }
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#159447]
                  text-white
                  transition
                  hover:bg-[#117c3b]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>

            <Link
              href="/aira"
              onClick={() => setIsOpen(false)}
              className="
                mt-2
                flex
                items-center
                justify-center
                gap-1
                text-xs
                font-medium
                text-[#159447]
                hover:underline
              "
            >
              Explore Aira
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}

      {/* =====================================================
          FLOATING AIRA
      ===================================================== */}

      <div
        className="
          fixed
          bottom-3
          right-4
          z-[10000]
          flex
          items-end
          sm:right-8
          md:right-10
        "
      >
        {/* =================================================
            ASK AIRA BUBBLE
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            setIsOpen((previous) => !previous)
          }
          className="
            absolute
            right-[75px]
            top-[38px]
            z-20
            whitespace-nowrap
            rounded-full
            border
            border-[#e2eee7]
            bg-white
            px-4
            py-2
            text-[13px]
            font-bold
            text-[#159447]
            shadow-[0_5px_18px_rgba(7,94,84,0.13)]
            transition
            duration-200
            hover:-translate-y-0.5
            hover:shadow-[0_8px_25px_rgba(7,94,84,0.18)]
            sm:right-[95px]
            sm:top-[48px]
          "
        >
          Ask Aira 👋
        </button>

        {/* =================================================
            TRANSPARENT FULL AIRA
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            setIsOpen((previous) => !previous)
          }
          className="
            relative
            h-[235px]
            w-[125px]
            cursor-pointer
            bg-transparent
            p-0
            outline-none
            sm:h-[280px]
            sm:w-[150px]
          "
          aria-label="Open Aira"
        >
          <img
            src="/avatars/whatsware-ai-avatar-transparent.gif"
            alt="Aira - WhatsWare AI Assistant"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-full
              w-full
              -translate-x-1/2
              object-contain
              drop-shadow-[0_12px_18px_rgba(7,94,84,0.16)]
            "
          />
        </button>
      </div>
    </>
  );
}