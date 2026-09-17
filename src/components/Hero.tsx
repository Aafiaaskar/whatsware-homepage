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
import { Link } from "wouter";

import { translations } from "./translation";
import { useLanguage } from "@/context/LanguageContext";

const SCENE_DURATIONS = [3000, 2500, 2500, 3000, 2500, 1500];

function useSceneTimer(paused = false) {
  const [scene, setScene] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || paused) return;

    timerRef.current = setTimeout(() => {
      setScene(
        (current) => (current + 1) % SCENE_DURATIONS.length
      );
    }, SCENE_DURATIONS[scene]);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [paused, scene]);

  return scene;
}

function AnimatedBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEFBE8]/90 via-[#F7FEF4]/85 to-[#FFFDF5]/90" />

      <div
        className="absolute -left-16 -top-16 h-80 w-80 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, #DFF7D8 0%, transparent 70%)",
          animation: "heroBlob1 14s ease-in-out infinite alternate",
        }}
      />

      <div
        className="absolute -bottom-16 -right-16 h-96 w-96 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, #EEFBE8 0%, transparent 70%)",
          animation: "heroBlob2 18s ease-in-out infinite alternate",
        }}
      />

      <div
        className="absolute right-1/4 top-1/3 h-52 w-52 rounded-full opacity-40 blur-[40px]"
        style={{
          background:
            "radial-gradient(circle, #159447 0%, transparent 70%)",
          animation: "heroBlob3 11s ease-in-out infinite alternate",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-25"
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
            animation: "heroDash 8s linear infinite",
          }}
        />

        <path
          d="M-20,300 Q100,180 260,320 T500,280"
          stroke="#087A3E"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="6 18"
          style={{
            animation:
              "heroDash 12s linear infinite reverse",
          }}
        />

        <path
          d="M0,420 Q200,340 320,420 T520,380"
          stroke="#159447"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="4 20"
          style={{
            animation: "heroDash 10s linear infinite",
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
      ].map(
        ([cx, cy, radius, duration, delay], index) => (
          <div
            key={index}
            className="absolute rounded-full bg-[#159447]"
            style={{
              left: `${(Number(cx) / 480) * 100}%`,
              top: `${(Number(cy) / 540) * 100}%`,
              width: Number(radius) * 2,
              height: Number(radius) * 2,
              opacity: 0.35,
              animation: `heroParticle ${duration} ease-in-out infinite alternate`,
              animationDelay: String(delay),
            }}
          />
        )
      )}

      {[
        ["12%", "18%", 18, "9s", "0s"],
        ["78%", "12%", 14, "11s", "2s"],
        ["88%", "72%", 16, "8s", "1s"],
        ["8%", "70%", 12, "13s", "3.5s"],
      ].map(
        ([x, y, size, duration, delay], index) => (
          <div
            key={index}
            className="absolute opacity-15"
            style={{
              left: String(x),
              top: String(y),
              animation: `heroParticle ${duration} ease-in-out infinite alternate`,
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
        )
      )}

      <style>{`
        @keyframes heroBlob1 {
          0% {
            transform: translate(0,0) scale(1);
          }
          100% {
            transform: translate(40px,30px) scale(1.12);
          }
        }

        @keyframes heroBlob2 {
          0% {
            transform: translate(0,0) scale(1);
          }
          100% {
            transform: translate(-30px,-40px) scale(1.08);
          }
        }

        @keyframes heroBlob3 {
          0% {
            transform: translate(0,0) scale(1);
          }
          100% {
            transform: translate(20px,25px) scale(1.15);
          }
        }

        @keyframes heroDash {
          to {
            stroke-dashoffset: -100;
          }
        }

        @keyframes heroParticle {
          0% {
            transform: translate(0,0);
            opacity: .2;
          }

          100% {
            transform: translate(6px,-18px);
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
}

function ProductVisual({
  t,
}: {
  scene: number;
  t: typeof translations.en.hero;
}) {
  const cards = [
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

          <p className="mt-2 text-right text-[10px] text-gray-400">
            10:42 AM
          </p>
        </div>
      ),
      status: "Lead captured automatically",
    },

    {
      badge: "AI REPLY",
      title: "Aira - AI",
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
          {[
            "Customer interested",
            "Budget identified",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2"
            >
              <span className="text-xs text-gray-500">
                {item}
              </span>

              <CheckCircle2 className="h-4 w-4 text-[#159447]" />
            </div>
          ))}

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
          <p className="text-xs font-semibold text-gray-700">
            Hi Alex 👋
          </p>

          <p className="mt-1 text-xs leading-5 text-gray-600">
            Just following up on your enquiry. Can I help you
            choose a plan?
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
          <p className="text-3xl font-black text-[#159447]">
            +156%
          </p>

          <p className="mt-1 text-[10px] text-gray-500">
            More Conversations
          </p>
        </div>
      ),
      status: "Conversion completed",
    },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      <AnimatedBg />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#159447]/10 blur-3xl" />

      <div className="absolute right-5 top-5 z-30 flex items-center rounded-full border border-green-100 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md">
        <img
          src="/whatsware-logo.png"
          alt="WhatsWare"
          className="h-8 w-auto max-w-[120px] object-contain"
        />
      </div>

      <div className="absolute left-1/2 top-7 z-30 -translate-x-1/2 whitespace-nowrap">
        <div className="flex items-center gap-2 rounded-full border border-green-100 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#159447]" />

          <span className="text-xs font-bold text-[#159447]">
            WhatsApp Automation
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[105px] z-20 overflow-hidden">
        <motion.div
          className="flex w-max items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex items-center gap-5 pr-5"
            >
              {cards.map((card, index) => {
                const Icon = card.Icon;

                return (
                  <div
                    key={`${set}-${card.badge}`}
                    className="flex items-center gap-5"
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                      className="w-[245px] shrink-0 rounded-[24px] border border-white/80 bg-white/95 p-4 shadow-[0_18px_50px_rgba(21,148,71,0.13)] backdrop-blur-xl"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconClass}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-[9px] font-black tracking-[0.12em] text-[#159447]">
                            {card.badge}
                          </p>

                          <p className="text-sm font-bold text-[#071B35]">
                            {card.title}
                          </p>
                        </div>
                      </div>

                      <div className="min-h-[110px]">
                        {card.content}
                      </div>

                      <div className="mt-3 flex items-center gap-1.5 border-t border-gray-100 pt-3">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#159447]" />

                        <span className="text-[10px] font-semibold text-gray-500">
                          {card.status}
                        </span>
                      </div>
                    </motion.div>

                    {index < cards.length - 1 && (
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
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-green-100 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-md"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#159447] text-white">
          <Sparkles className="h-3.5 w-3.5" />
        </div>

        <span className="whitespace-nowrap text-[10px] font-bold text-[#071B35] sm:text-xs">
          Leads → Aira - AI → Follow-up → Conversion
        </span>

        <span className="h-2 w-2 animate-pulse rounded-full bg-[#159447]" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { language } = useLanguage();

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scene = useSceneTimer();

  const normalizedLanguage =
    String(language).toLowerCase() === "ta"
      ? "ta"
      : "en";

  const t = translations[normalizedLanguage].hero;

  useEffect(() => {
    const id = setInterval(() => {
      setHeadlineIndex(
        (previous) =>
          (previous + 1) % t.headlines.length
      );
    }, 5000);

    return () => clearInterval(id);
  }, [t.headlines.length]);

  useEffect(() => {
    setHeadlineIndex(0);
  }, [normalizedLanguage]);

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
    <section className="relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16">
      {/* HERO BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="/hero-bg.mp4"
          type="video/mp4"
        />

        <source
          src="/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,253,245,0.78) 0%, rgba(238,251,232,0.62) 50%, rgba(255,253,245,0.78) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute -left-40 top-16 z-[2] h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, #DFF7D8 0%, transparent 70%)",
          filter: "blur(48px)",
          opacity: 0.35,
          animation:
            "heroBlob1 14s ease-in-out infinite alternate",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-6">
          {/* LEFT */}
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DFF7D8] bg-[#EEFBE8]/90 px-3 py-1.5 text-sm font-medium text-[#159447] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#159447] opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#159447]" />
              </span>

              {t.badge}
            </div>

            <div className="mb-5 min-h-[180px]">
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
                  className="font-serif font-bold leading-[1.08] tracking-tight text-[#071B35]"
                  style={{
                    fontSize:
                      "clamp(34px, 4.5vw, 54px)",
                    textShadow:
                      "0 2px 20px rgba(255,255,255,0.35)",
                  }}
                >
                  {headline.line1}
                  <br />
                  {headline.line2}
                  <br />

                  <span className="relative inline-block text-[#159447]">
                    {headline.highlight}

                    <svg
                      className="absolute -bottom-1 left-0 w-full"
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

            <div className="mb-6 min-h-[56px]">
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
                  className="max-w-xl text-base leading-relaxed text-[#526273] lg:text-lg"
                >
                  {headline.desc}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mb-7 flex gap-2">
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

            {/* HERO BUTTONS */}
            <div className="mb-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-demo"
                className="group inline-flex items-center justify-center rounded-full bg-[#159447] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#0e7c39] hover:shadow-lg"
              >
                Get Started

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={() =>
                  setIsModalOpen(true)
                }
                className="group inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/90 px-7 py-3.5 text-sm font-medium text-[#071B35] backdrop-blur-sm transition-all hover:border-[#159447] hover:text-[#159447] hover:shadow-md"
              >
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-[#EEFBE8]">
                  <Play className="ml-0.5 h-3 w-3 fill-[#159447] text-[#159447]" />
                </div>

                {t.watchHow}
              </button>
            </div>

            {/* TRUST ITEMS */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#526273]">
              {t.trust.map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#159447]" />

                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PRODUCT VISUAL */}
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            {/* CLICK OUTSIDE TO CLOSE */}
            <button
              type="button"
              aria-label="Close video"
              className="absolute inset-0 cursor-default"
              onClick={() =>
                setIsModalOpen(false)
              }
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative z-10 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() =>
                  setIsModalOpen(false)
                }
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-black/80"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>

              {/* ACTUAL VIDEO */}
              <video
                autoPlay
                controls
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-contain bg-black"
              >
                <source
                  src="/works-video.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video
                tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}