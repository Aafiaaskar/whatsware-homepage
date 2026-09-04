import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  ArrowRight,
  X,
  Sparkles,
  TrendingUp,
  Zap,
  Users,
  Send,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { translations } from "./translation";
import { useLanguage } from "@/context/LanguageContext";

// ─────────────────────────────────────────────────────────────
// SCENE TIMING
// ─────────────────────────────────────────────────────────────

const SCENE_DURATIONS = [3000, 2500, 2500, 3000, 2500, 1500];

function useSceneTimer(paused = false) {
  const [scene, setScene] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

    if (reduced || paused) return;

    const advance = (current: number) => {
      timerRef.current = setTimeout(() => {
        const next = (current + 1) % SCENE_DURATIONS.length;
        setScene(next);
        advance(next);
      }, SCENE_DURATIONS[current]);
    };

    advance(scene);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [paused, scene]);

  return scene;
}

// ─────────────────────────────────────────────────────────────
// COUNT UP
// ─────────────────────────────────────────────────────────────

function CountUp({
  end,
  duration = 1100,
}: {
  end: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = end / (duration / 16);

    const id = setInterval(() => {
      current = Math.min(current + step, end);
      setValue(Math.floor(current));

      if (current >= end) {
        clearInterval(id);
      }
    }, 16);

    return () => clearInterval(id);
  }, [end, duration]);

  return <>{value}</>;
}

// ─────────────────────────────────────────────────────────────
// SPARKLE RING
// ─────────────────────────────────────────────────────────────

function SparkleRing() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[0, 60, 120, 180, 240, 300].map((degree, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-[#159447]"
          initial={{
            opacity: 0,
            x: -3,
            y: -3,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: Math.cos((degree * Math.PI) / 180) * 20 - 3,
            y: Math.sin((degree * Math.PI) / 180) * 20 - 3,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.07,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// ANIMATED BACKGROUND
// ─────────────────────────────────────────────────────────────

function AnimatedBg() {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEFBE8] via-[#f7fef4] to-[#FFFDF5]" />

      <div
        className="absolute -top-16 -left-16 w-80 h-80 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, #DFF7D8 0%, transparent 70%)",
          animation: "blobDrift1 14s ease-in-out infinite alternate",
        }}
      />

      <div
        className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, #EEFBE8 0%, transparent 70%)",
          animation: "blobDrift2 18s ease-in-out infinite alternate",
        }}
      />

      <div
        className="absolute top-1/3 right-1/4 w-52 h-52 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, #159447 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "blobDrift3 11s ease-in-out infinite alternate",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        viewBox="0 0 480 540"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M-20,200 Q120,80 240,200 T500,200"
          stroke="#159447"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8 16"
          style={{
            animation: "dashMove 8s linear infinite",
          }}
        />

        <path
          d="M-20,300 Q100,180 260,320 T500,280"
          stroke="#087A3E"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="6 18"
          style={{
            animation: "dashMove 12s linear infinite reverse",
          }}
        />

        <path
          d="M0,420 Q200,340 320,420 T520,380"
          stroke="#159447"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="4 20"
          style={{
            animation: "dashMove 10s linear infinite",
          }}
        />
      </svg>

      {[
        [60, 80, 2.5, "7s", "0s"],
        [320, 50, 2, "9s", "1.2s"],
        [420, 160, 3, "6s", "0.5s"],
        [140, 300, 2, "11s", "2s"],
        [380, 340, 2.5, "8s", "3s"],
        [240, 470, 2, "10s", "1.8s"],
        [80, 440, 3, "7s", "4s"],
        [460, 420, 2, "9s", "0.8s"],
        [200, 140, 2, "6s", "2.5s"],
        [340, 250, 3, "13s", "1s"],
      ].map(([cx, cy, radius, duration, delay], index) => (
        <div
          key={index}
          className="absolute rounded-full bg-[#159447]"
          style={{
            left: `${(Number(cx) / 480) * 100}%`,
            top: `${(Number(cy) / 540) * 100}%`,
            width: Number(radius) * 2,
            height: Number(radius) * 2,
            opacity: 0.35,
            animation: `particleFloat ${duration} ease-in-out infinite alternate`,
            animationDelay: String(delay),
          }}
        />
      ))}

      {[
        ["12%", "18%", 18, "9s", "0s"],
        ["78%", "12%", 14, "11s", "2s"],
        ["88%", "72%", 16, "8s", "1s"],
        ["8%", "70%", 12, "13s", "3.5s"],
      ].map(([x, y, size, duration, delay], index) => (
        <div
          key={index}
          className="absolute opacity-15"
          style={{
            left: String(x),
            top: String(y),
            animation: `particleFloat ${duration} ease-in-out infinite alternate`,
            animationDelay: String(delay),
          }}
        >
          <svg
            width={Number(size)}
            height={Number(size)}
            viewBox="0 0 24 24"
            fill="#159447"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
      ))}

      {[
        ["72%", "28%", "5s", "0s"],
        ["22%", "52%", "7s", "1.5s"],
        ["58%", "80%", "6s", "3s"],
      ].map(([x, y, duration, delay], index) => (
        <div
          key={index}
          className="absolute opacity-20"
          style={{
            left: x,
            top: y,
            animation: `sparkleGlow ${duration} ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <Sparkles className="w-4 h-4 text-[#159447]" />
        </div>
      ))}

      <svg
        className="absolute inset-0 w-full h-full opacity-15"
        viewBox="0 0 480 540"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <circle cx="90" cy="120" r="3" fill="#159447" />
        <circle cx="390" cy="100" r="3" fill="#159447" />
        <circle cx="420" cy="460" r="3" fill="#159447" />
        <circle cx="70" cy="460" r="3" fill="#159447" />

        <line
          x1="90"
          y1="120"
          x2="390"
          y2="100"
          stroke="#159447"
          strokeWidth="0.8"
          strokeDasharray="3 12"
          style={{
            animation: "dashMove 15s linear infinite",
          }}
        />

        <line
          x1="390"
          y1="100"
          x2="420"
          y2="460"
          stroke="#159447"
          strokeWidth="0.8"
          strokeDasharray="3 12"
          style={{
            animation: "dashMove 18s linear infinite reverse",
          }}
        />

        <line
          x1="420"
          y1="460"
          x2="70"
          y2="460"
          stroke="#159447"
          strokeWidth="0.8"
          strokeDasharray="3 12"
          style={{
            animation: "dashMove 12s linear infinite",
          }}
        />

        <line
          x1="70"
          y1="460"
          x2="90"
          y2="120"
          stroke="#159447"
          strokeWidth="0.8"
          strokeDasharray="3 12"
          style={{
            animation: "dashMove 20s linear infinite reverse",
          }}
        />
      </svg>

      <style>{`
        @keyframes blobDrift1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(40px, 30px) scale(1.12);
          }
        }

        @keyframes blobDrift2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-30px, -40px) scale(1.08);
          }
        }

        @keyframes blobDrift3 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(20px, 25px) scale(1.15);
          }
        }

        @keyframes dashMove {
          to {
            stroke-dashoffset: -100;
          }
        }

        @keyframes particleFloat {
          0% {
            transform: translate(0, 0);
            opacity: 0.2;
          }

          100% {
            transform: translate(6px, -18px);
            opacity: 0.5;
          }
        }

        @keyframes sparkleGlow {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.12;
          }

          50% {
            transform: scale(1.5) rotate(20deg);
            opacity: 0.45;
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PRODUCT VISUAL
// ─────────────────────────────────────────────────────────────

function ProductVisual({
  scene: _scene,
  t,
}: {
  scene: number;
  t: typeof translations.en.hero;
}) {
  const automationCards = [
    {
      badge: "CAPTURE",
      title: "New Lead",
      Icon: Users,
      iconClass: "bg-green-50 text-[#159447]",
      content: (
        <div className="rounded-2xl bg-[#f7f7f7] p-3">
          <p className="text-sm leading-5 text-gray-700">
            {t.whatsapp.customerMessage}
          </p>
          <p className="mt-2 text-right text-[10px] text-gray-400">10:42 AM</p>
        </div>
      ),
      status: "Lead captured automatically",
    },
    {
      badge: "AI REPLY",
      title: t.whatsapp.aiName,
      Icon: Sparkles,
      iconClass: "bg-green-100 text-[#159447]",
      content: (
        <div className="space-y-2">
          <div className="w-fit rounded-2xl rounded-tl-none bg-gray-100 px-3 py-2 text-xs text-gray-600">
            Hi 👋 Welcome to WhatsWare!
          </div>
          <div className="w-fit rounded-2xl rounded-tl-none bg-[#DCF8C6] px-3 py-2 text-xs text-gray-700">
            {t.whatsapp.aiReply}
          </div>
        </div>
      ),
      status: "Reply sent instantly",
    },
    {
      badge: "QUALIFY",
      title: "Lead Qualification",
      Icon: Zap,
      iconClass: "bg-blue-50 text-blue-500",
      content: (
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
            <span className="text-xs text-gray-500">Customer interested</span>
            <CheckCircle2 className="h-4 w-4 text-[#159447]" />
          </div>
          <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
            <span className="text-xs text-gray-500">Budget identified</span>
            <CheckCircle2 className="h-4 w-4 text-[#159447]" />
          </div>
          <div className="rounded-xl bg-green-50 px-3 py-2 text-xs font-bold text-[#159447]">
            🔥 Hot Lead
          </div>
        </div>
      ),
      status: "AI qualified the lead",
    },
    {
      badge: "NURTURE",
      title: "Automated Follow-up",
      Icon: Send,
      iconClass: "bg-purple-50 text-purple-500",
      content: (
        <div className="rounded-2xl bg-green-50 p-3">
          <p className="text-xs font-semibold text-gray-700">Hi Alex 👋</p>
          <p className="mt-1 text-xs leading-5 text-gray-600">
            Just following up on your enquiry. Can I help you choose a plan?
          </p>
        </div>
      ),
      status: "Follow-up sent automatically",
    },
    {
      badge: "CONVERT",
      title: "Deal Converted",
      Icon: TrendingUp,
      iconClass: "bg-green-50 text-[#159447]",
      content: (
        <div className="rounded-2xl bg-green-50 p-4 text-center">
          <p className="text-3xl font-black text-[#159447]">+156%</p>
          <p className="mt-1 text-[10px] text-gray-500">More Conversations</p>
        </div>
      ),
      status: "Conversion completed",
    },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      <AnimatedBg />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#159447]/10 blur-3xl" />

      <div className="absolute right-5 top-5 z-30 flex items-center gap-2 rounded-full border border-green-100 bg-white/85 px-3 py-2 shadow-sm backdrop-blur-md">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#159447] text-[10px] font-bold text-white">W</div>
        <span className="text-xs font-bold text-[#159447]">WhatsWare</span>
      </div>

      <div className="absolute left-1/2 top-7 z-30 -translate-x-1/2 whitespace-nowrap">
        <div className="flex items-center gap-2 rounded-full border border-green-100 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#159447]" />
          <span className="text-xs font-bold text-[#159447]">WhatsApp Automation</span>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[105px] z-20 overflow-hidden">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center gap-5 pr-5">
              {automationCards.map((card, index) => {
                const Icon = card.Icon;
                return (
                  <div key={`${set}-${card.badge}`} className="flex items-center gap-5">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
                      className="w-[245px] shrink-0 rounded-[24px] border border-white/80 bg-white/95 p-4 shadow-[0_18px_50px_rgba(21,148,71,0.13)] backdrop-blur-xl"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconClass}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[9px] font-black tracking-[0.12em] text-[#159447]">{card.badge}</p>
                          <p className="text-sm font-bold text-[#071B35]">{card.title}</p>
                        </div>
                      </div>

                      <div className="min-h-[110px]">{card.content}</div>

                      <div className="mt-3 flex items-center gap-1.5 border-t border-gray-100 pt-3">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#159447]" />
                        <span className="text-[10px] font-semibold text-gray-500">{card.status}</span>
                      </div>
                    </motion.div>

                    {index < automationCards.length - 1 && (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/85 shadow-sm">
                        <ArrowRight className="h-4 w-4 text-[#159447]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-green-100 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-md"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#159447] text-white">
          <Sparkles className="h-3.5 w-3.5" />
        </div>
        <span className="whitespace-nowrap text-[10px] font-bold text-[#071B35] sm:text-xs">
          Leads → AI → Follow-up → Conversion
        </span>
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#159447]" />
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN HERO
// ─────────────────────────────────────────────────────────────

export default function Hero() {
  /*
   * IMPORTANT:
   * Hero now uses the SAME global language state as Navbar.
   * No separate local language state.
   */
  const { language } = useLanguage();

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scene = useSceneTimer();

  /*
   * Your existing translation file uses "en" and "ta".
   * If LanguageContext returns uppercase values such as "EN"/"TA",
   * normalize them here.
   */
  const normalizedLanguage =
    String(language).toLowerCase() === "ta" ? "ta" : "en";

  const t = translations[normalizedLanguage].hero;

  // ─────────────────────────────────────────────────────────
  // ROTATE HEADLINE
  // ─────────────────────────────────────────────────────────

  useEffect(() => {
    const id = setInterval(() => {
      setHeadlineIndex(
        (previous) =>
          (previous + 1) % t.headlines.length
      );
    }, 5000);

    return () => clearInterval(id);
  }, [t.headlines.length]);

  // Reset headline after language change
  useEffect(() => {
    setHeadlineIndex(0);
  }, [normalizedLanguage]);

  // ─────────────────────────────────────────────────────────
  // ESC TO CLOSE VIDEO
  // ─────────────────────────────────────────────────────────

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const headline = t.headlines[headlineIndex];

  return (
    <section
      className="
        relative
        pt-24
        pb-12
        lg:pt-32
        lg:pb-16
        overflow-hidden
      "
    >
      {/* HERO VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
        "
        style={{
          zIndex: 0,
        }}
      >
        <source
          src="/videos/whatsware-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video overlay */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(135deg, rgba(255,253,245,0.88) 0%, rgba(238,251,232,0.78) 50%, rgba(255,253,245,0.88) 100%)",
        }}
      />

      {/* Background glow */}

      <div
        className="absolute top-16 -left-40 w-80 h-80 rounded-full pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(circle, #DFF7D8 0%, transparent 70%)",
          filter: "blur(48px)",
          opacity: 0.45,
          animation:
            "blobDrift1 14s ease-in-out infinite alternate",
        }}
      />

      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="w-full min-w-0"
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEFBE8] border border-[#DFF7D8] text-[#159447] text-sm font-medium mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#159447] opacity-75" />

                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#159447]" />
              </span>

              {t.badge}
            </div>

            {/* Headline */}

            <div
              className="mb-5"
              style={{
                minHeight: 180,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`${normalizedLanguage}-${headlineIndex}`}
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.48,
                    ease: "easeInOut",
                  }}
                  className="
                    font-serif
                    font-bold
                    tracking-tight
                    text-[#071B35]
                    leading-[1.08]
                  "
                  style={{
                    fontSize:
                      "clamp(34px, 4.5vw, 54px)",
                  }}
                >
                  {headline.line1}
                  <br />

                  {headline.line2}
                  <br />

                  <span className="text-[#159447] relative inline-block">
                    {headline.highlight}

                    <svg
                      className="absolute w-full -bottom-1 left-0"
                      style={{
                        height: 10,
                      }}
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 6 Q50 10 100 6"
                        stroke="#DFF7D8"
                        strokeWidth="7"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Description */}

            <div
              className="mb-6"
              style={{
                minHeight: 56,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${normalizedLanguage}-${headlineIndex}-description`}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="text-base lg:text-lg text-[#526273] leading-relaxed max-w-xl"
                >
                  {headline.desc}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Headline navigation */}

            <div className="flex gap-2 mb-7">
              {t.headlines.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setHeadlineIndex(index)
                  }
                  aria-label={`Headline ${index + 1}`}
                  className="p-1"
                >
                  <motion.div
                    className="h-1.5 rounded-full"
                    animate={{
                      width:
                        headlineIndex === index
                          ? 24
                          : 8,
                      backgroundColor:
                        headlineIndex === index
                          ? "#159447"
                          : "#d1d5db",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  />
                </button>
              ))}
            </div>

            {/* CTA */}

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("cta-section")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="
                  inline-flex
                  justify-center
                  items-center
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  bg-[#159447]
                  rounded-full
                  hover:bg-[#0e7c39]
                  hover:shadow-lg
                  hover:scale-[1.02]
                  transition-all
                  group
                "
              >
                {t.startTrial}

                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setIsModalOpen(true)
                }
                className="
                  inline-flex
                  justify-center
                  items-center
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  text-[#071B35]
                  bg-white
                  border
                  border-gray-200
                  rounded-full
                  hover:border-[#159447]
                  hover:text-[#159447]
                  hover:shadow-md
                  transition-all
                  group
                "
              >
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2 group-hover:bg-[#EEFBE8] transition-colors">
                  <Play className="w-3 h-3 ml-0.5 fill-[#159447] text-[#159447]" />
                </div>

                {t.watchHow}
              </button>
            </div>

            {/* Trust */}

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#526273] font-medium">
              {t.trust.map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0" />

                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative w-full"
            style={{
              height: 520,
            }}
          >
            <ProductVisual
              scene={scene}
              t={t}
            />
          </motion.div>
        </div>
      </div>

      {/* VIDEO MODAL */}

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              p-4
              bg-black/60
              backdrop-blur-sm
            "
          >
            {/* Background close */}

            <button
              type="button"
              aria-label="Close video"
              className="absolute inset-0 cursor-default"
              onClick={() =>
                setIsModalOpen(false)
              }
            />

            {/* Modal */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                w-full
                max-w-4xl
                aspect-video
                bg-gray-900
                rounded-2xl
                shadow-2xl
                overflow-hidden
                border
                border-gray-700
                z-10
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* Close */}

              <button
                type="button"
                onClick={() =>
                  setIsModalOpen(false)
                }
                className="
                  absolute
                  top-4
                  right-4
                  z-10
                  p-2
                  bg-black/40
                  hover:bg-black/60
                  rounded-full
                  text-white
                  transition-colors
                "
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Demo */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-20 h-20 bg-[#159447]/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-[#159447]/30">
                    <Play className="w-8 h-8 text-[#159447] ml-1 fill-current" />
                  </div>

                  <h3 className="text-white font-semibold text-xl">
                    {t.demo}
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm">
                    {t.comingSoon}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}