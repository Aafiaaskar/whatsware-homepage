import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  ExternalLink,
  FileText,
  Link2,
  MessageCircle,
  MousePointerClick,
  Play,
  QrCode,
  Send,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProductDetailProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge?: string;
}

/* =========================================================
   PRODUCT MEDIA CONFIGURATION
   Each product gets its own visual identity.
========================================================= */

type ProductVisualConfig = {
  image?: string;
  video?: string;
  gif?: string;
  icon: React.ElementType;
  accent: string;
  lightAccent: string;
  label: string;
  visualTitle: string;
  visualDescription: string;
};

function getProductVisual(title: string): ProductVisualConfig {
  const value = title.toLowerCase();

  if (value.includes("ai lead")) {
    return {
      image: "/resources/whatsapp-ai.jpg",
      video: "/images/chatbot/whatsware-ai-avatar.mp4",
      gif: "/avatars/whatsware-ai-avatar-transparent.gif",
      icon: Bot,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "AI Lead Intelligence",
      visualTitle: "AI Lead Qualification",
      visualDescription:
        "Understand intent, qualify prospects and identify high-value leads automatically.",
    };
  }

  if (value.includes("follow")) {
    return {
      image: "/resources/whatsapp-automation.jpg",
      video: "/works-video.mp4",
      icon: Clock3,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "Smart Follow-ups",
      visualTitle: "Never let a lead go cold",
      visualDescription:
        "Keep conversations moving with timely, personalized follow-ups.",
    };
  }

  if (value.includes("click-to-whatsapp")) {
    return {
      image: "/resources/whatsapp-marketing.jpg",
      video: "/hero-video.mp4",
      icon: MousePointerClick,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "Ads → WhatsApp",
      visualTitle: "Turn clicks into conversations",
      visualDescription:
        "Connect advertising campaigns directly to WhatsApp conversations.",
    };
  }

  if (value.includes("team inbox")) {
    return {
      image: "/resources/customer-support.jpg",
      video: "/works-video.mp4",
      icon: Users,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "Team Collaboration",
      visualTitle: "One inbox. One team.",
      visualDescription:
        "Bring customer conversations together so your team can collaborate faster.",
    };
  }

  if (value.includes("broadcast")) {
    return {
      image: "/resources/whatsapp-marketing.jpg",
      video: "/hero-video.mp4",
      icon: Send,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "WhatsApp Marketing",
      visualTitle: "Reach customers at scale",
      visualDescription:
        "Create targeted campaigns and engage customers through WhatsApp.",
    };
  }

  if (value.includes("chatbot")) {
    return {
      image: "/resources/whatsapp-ai.jpg",
      video: "/images/chatbot/whatsware-ai-avatar.mp4",
      gif: "/avatars/whatsware-ai-avatar-transparent.gif",
      icon: Bot,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "AI Conversations",
      visualTitle: "Conversations that work for you",
      visualDescription:
        "Automate customer questions, lead capture and support with intelligent conversations.",
    };
  }

  if (value.includes("chat widget")) {
    return {
      image: "/resources/customer-support.jpg",
      video: "/hero-video.mp4",
      icon: MessageCircle,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "Website Engagement",
      visualTitle: "Bring WhatsApp to your website",
      visualDescription:
        "Let visitors start a WhatsApp conversation directly from your website.",
    };
  }

  if (value.includes("form")) {
    return {
      image: "/resources/whatsapp-api.jpg",
      video: "/works-video.mp4",
      icon: FileText,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "Conversational Forms",
      visualTitle: "Collect information inside WhatsApp",
      visualDescription:
        "Capture enquiries, leads, bookings and customer information through conversations.",
    };
  }

  if (value.includes("link generator")) {
    return {
      image: "/resources/whatsapp-api.jpg",
      icon: Link2,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "WhatsApp Links",
      visualTitle: "One click to start a conversation",
      visualDescription:
        "Create simple WhatsApp links that customers can use anywhere.",
    };
  }

  if (value.includes("payment")) {
    return {
      image: "/resources/crm-sales.jpg",
      video: "/works-video.mp4",
      icon: ShoppingCart,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "WhatsApp Commerce",
      visualTitle: "From conversation to purchase",
      visualDescription:
        "Help customers move smoothly from enquiry to checkout.",
    };
  }

  if (value.includes("qr")) {
    return {
      image: "/resources/whatsapp-api.jpg",
      icon: QrCode,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "WhatsApp QR",
      visualTitle: "Scan. Connect. Chat.",
      visualDescription:
        "Make it easy for customers to instantly connect with your business.",
    };
  }

  if (value.includes("sales")) {
    return {
      image: "/resources/crm-sales.jpg",
      video: "/works-video.mp4",
      icon: ShoppingCart,
      accent: "#159447",
      lightAccent: "#D9F8ED",
      label: "WhatsApp Sales",
      visualTitle: "Turn conversations into sales",
      visualDescription:
        "Help your sales team engage, nurture and convert customers.",
    };
  }

  /* Default */
  return {
    image: "/resources/whatsapp-automation.jpg",
    video: "/hero-video.mp4",
    icon: Sparkles,
    accent: "#159447",
    lightAccent: "#D9F8ED",
    label: "WhatsWare Product",
    visualTitle: title,
    visualDescription:
      "Powerful tools to help your business engage customers and grow.",
  };
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ProductDetail({
  title,
  subtitle,
  description,
  features,
  badge = "WhatsWare Product",
}: ProductDetailProps) {
  const visual = getProductVisual(title);
  const ProductIcon = visual.icon;

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FBF9] text-[#12312C]">
      <Navbar />

      <main className="pt-20">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28">
          {/* Soft background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-[#D9F8ED] opacity-70 blur-3xl" />

            <div className="absolute -right-48 top-20 h-[550px] w-[550px] rounded-full bg-[#E8F4D9] opacity-70 blur-3xl" />

            <div className="absolute left-1/2 top-[500px] h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#D9F8ED] opacity-30 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link
                href="/"
                className="transition-colors hover:text-[#159447]"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />

              <Link
                href="/products"
                className="transition-colors hover:text-[#159447]"
              >
                Products
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-semibold text-[#12312C]">
                {title}
              </span>
            </div>

            <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              {/* =================================================
                  LEFT
              ================================================== */}
              <div>
                {/* Badge */}
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2 text-sm font-bold text-[#075E54] shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9F8ED]">
                    <Sparkles className="h-3.5 w-3.5 text-[#159447]" />
                  </span>

                  {badge}
                </div>

                {/* Title */}
                <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.05em] text-[#12312C] sm:text-5xl lg:text-6xl xl:text-7xl">
                  {title}
                </h1>

                {/* Subtitle */}
                <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-[#075E54] sm:text-2xl">
                  {subtitle}
                </p>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {description}
                </p>

                {/* CTA */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/book-demo"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#075E54] px-7 py-4 font-bold text-white shadow-lg shadow-[#075E54]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#064C44] hover:shadow-xl"
                  >
                    Book a Demo

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full border border-[#B8D9CD] bg-white px-7 py-4 font-bold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#159447] hover:bg-[#F1FAF5]"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Trust */}
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Easy to use",
                    "Built for teams",
                    "Scalable",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  RIGHT PRODUCT-SPECIFIC VISUAL
              ================================================== */}
              <ProductMedia
                title={title}
                visual={visual}
                ProductIcon={ProductIcon}
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCT HIGHLIGHTS
        ====================================================== */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid overflow-hidden rounded-[2rem] border border-[#DDEBE4] bg-white shadow-[0_25px_70px_-35px_rgba(15,80,55,0.3)] sm:grid-cols-3">
              <Highlight
                icon={<Zap className="h-5 w-5" />}
                value="24/7"
                label="Always-on engagement"
              />

              <Highlight
                icon={<MessageCircle className="h-5 w-5" />}
                value="Faster"
                label="Customer conversations"
                border
              />

              <Highlight
                icon={<Workflow className="h-5 w-5" />}
                value="Smart"
                label="Business automation"
                border
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}
        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                Powerful capabilities
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                Everything you need to get more done
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Powerful features designed to make customer engagement
                simpler, faster and more effective.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={`${feature}-${index}`}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCT EXPERIENCE
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#F1F8F4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <WorkflowPreview />

              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">
                  <Workflow className="h-4 w-4" />
                  Connected experience
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#12312C] sm:text-5xl">
                  From first message to meaningful action.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  WhatsWare helps your business connect customer conversations,
                  automation and team actions into one smooth experience.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Capture customer interest",
                    "Understand and qualify intent",
                    "Trigger the right action",
                    "Keep your team informed",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D9F8ED] text-sm font-black text-[#159447]">
                        {index + 1}
                      </div>

                      <span className="text-sm font-bold text-[#29433D] sm:text-base">
                        {item}
                      </span>

                      <CheckCircle2 className="ml-auto h-5 w-5 text-[#159447]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VISUAL MEDIA SHOWCASE
        ====================================================== */}
        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                See it in action
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                Built around real customer conversations.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A visual experience designed around the way modern businesses
                communicate with their customers.
              </p>
            </div>

            <MediaShowcase visual={visual} title={title} />
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#075E54] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#159447] opacity-30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-emerald-300 opacity-20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
              <Sparkles className="h-8 w-8" />
            </div>

            <h2 className="mt-8 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to grow with WhatsWare?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
              Turn conversations into meaningful business opportunities with
              powerful WhatsApp tools, automation and AI.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/book-demo"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#075E54] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#F4FBF7]"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
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

/* =========================================================
   PRODUCT MEDIA
========================================================= */

function ProductMedia({
  title,
  visual,
  ProductIcon,
}: {
  title: string;
  visual: ProductVisualConfig;
  ProductIcon: React.ElementType;
}) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-8 rounded-[3rem] bg-[#D9F8ED] opacity-70 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#D9E8E1] bg-white p-2 shadow-[0_40px_100px_-35px_rgba(12,75,52,0.4)]">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#10251F]">
          {/* Top browser bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>

            <div className="hidden rounded-full bg-white/5 px-5 py-1.5 text-[9px] text-white/40 sm:block">
              app.whatsware.com
            </div>

            <div className="h-5 w-12 rounded bg-white/5" />
          </div>

          {/* Main visual */}
          <div className="relative min-h-[430px] overflow-hidden p-4 sm:min-h-[500px] sm:p-6">
            {/* Actual image */}
            {visual.image && (
              <img
                src={visual.image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#10251F]/95 via-[#10251F]/90 to-[#075E54]/80" />

            <div className="relative z-10 h-full">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-medium text-emerald-200/60">
                    WhatsWare
                  </p>

                  <p className="mt-1 text-lg font-black text-white">
                    {visual.visualTitle}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 backdrop-blur">
                  <ProductIcon className="h-5 w-5" />
                </div>
              </div>

              {/* Media */}
              <div className="relative mt-7 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] shadow-2xl">
                {visual.video ? (
                  <video
                    src={visual.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[245px] w-full object-cover opacity-90 sm:h-[285px]"
                  />
                ) : visual.gif ? (
                  <img
                    src={visual.gif}
                    alt={`${title} AI`}
                    className="h-[245px] w-full object-contain bg-[#0C1916] p-5 sm:h-[285px]"
                  />
                ) : visual.image ? (
                  <img
                    src={visual.image}
                    alt={title}
                    className="h-[245px] w-full object-cover sm:h-[285px]"
                  />
                ) : (
                  <GenericProductVisual icon={ProductIcon} />
                )}

                {/* Media overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071914]/60 via-transparent to-transparent" />

                {/* Play decoration */}
                {visual.video && (
                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#075E54] shadow-xl">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </div>
                )}
              </div>

              {/* Bottom information */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
                  <p className="text-[9px] text-white/40">
                    Product capability
                  </p>

                  <p className="mt-2 text-sm font-black text-white">
                    {visual.label}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
                  <p className="text-[9px] text-white/40">
                    Experience
                  </p>

                  <p className="mt-2 text-sm font-black text-emerald-300">
                    Connected & intelligent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating card */}
      <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
            <CheckCircle2 className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[9px] text-slate-400">
              WhatsWare
            </p>

            <p className="mt-1 text-xs font-black text-[#12312C]">
              Built for growth
            </p>
          </div>
        </div>
      </div>

      {/* Floating label */}
      <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#075E54] text-white">
            <Sparkles className="h-4 w-4" />
          </div>

          <div>
            <p className="text-[9px] text-slate-400">
              Smart platform
            </p>

            <p className="mt-1 text-xs font-black text-[#12312C]">
              Ready to automate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   GENERIC VISUAL
========================================================= */

function GenericProductVisual({
  icon: Icon,
}: {
  icon: React.ElementType;
}) {
  return (
    <div className="flex h-[245px] items-center justify-center bg-[#0C1916] sm:h-[285px]">
      <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#159447]/20 text-[#65E7A1]">
        <Icon className="h-12 w-12" />
      </div>
    </div>
  );
}

/* =========================================================
   HIGHLIGHT
========================================================= */

function Highlight({
  icon,
  value,
  label,
  border = false,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 p-6 sm:p-7 ${
        border
          ? "border-t border-[#E3EEE9] sm:border-l sm:border-t-0"
          : ""
      }`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
        {icon}
      </div>

      <div>
        <p className="text-xl font-black text-[#12312C]">
          {value}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {label}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  feature,
  index,
}: {
  feature: string;
  index: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#E1ECE7] bg-[#F8FBF9] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#BFEBDD] hover:bg-white hover:shadow-[0_25px_60px_-30px_rgba(21,148,71,0.4)] sm:p-7">
      {/* Number */}
      <div className="absolute right-5 top-3 text-6xl font-black text-[#EAF5EF] transition group-hover:text-[#D9F8ED]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447] transition duration-300 group-hover:bg-[#159447] group-hover:text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>

        <h3 className="mt-6 pr-8 text-lg font-black text-[#12312C]">
          {feature}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          Designed to make your customer engagement simpler, faster and more
          effective.
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#159447]">
          Included in WhatsWare
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   WORKFLOW PREVIEW
========================================================= */

function WorkflowPreview() {
  const steps = [
    {
      icon: Users,
      title: "Customer starts",
      text: "A new conversation begins",
    },
    {
      icon: Bot,
      title: "AI understands",
      text: "Intent and requirements identified",
    },
    {
      icon: Workflow,
      title: "Automation runs",
      text: "The right action is triggered",
    },
    {
      icon: CheckCircle2,
      title: "Team takes action",
      text: "Important conversations reach your team",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#D9F8ED]/60 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#DDEBE4] bg-white p-5 shadow-[0_30px_70px_-30px_rgba(21,148,71,0.3)] sm:p-7">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-black text-[#12312C]">
              Customer journey
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              Connected workflow
            </p>
          </div>

          <span className="flex items-center gap-1.5 rounded-full bg-[#D9F8ED] px-3 py-1.5 text-[10px] font-bold text-[#159447]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#159447]" />
            Active
          </span>
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title}>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#F8FBF9] p-4 transition hover:border-[#BFEBDD] hover:bg-white">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-black text-[#12312C]">
                      {step.title}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {step.text}
                    </p>
                  </div>

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#159447]" />
                </div>

                {index < steps.length - 1 && (
                  <div className="ml-[35px] h-4 border-l-2 border-dashed border-[#BFEBDD]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MEDIA SHOWCASE
========================================================= */

function MediaShowcase({
  visual,
  title,
}: {
  visual: ProductVisualConfig;
  title: string;
}) {
  return (
    <div className="mt-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#DCEAE4] bg-[#10251F] p-2 shadow-[0_35px_90px_-35px_rgba(12,75,52,0.4)]">
        <div className="relative overflow-hidden rounded-[1.5rem]">
          {/* Background */}
          {visual.image && (
            <img
              src={visual.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-15"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-br from-[#10251F] via-[#10251F]/95 to-[#075E54]" />

          <div className="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:p-14">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-emerald-200">
                <Sparkles className="h-4 w-4" />
                {visual.label}
              </div>

              <h3 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {visual.visualTitle}
              </h3>

              <p className="mt-5 text-base leading-7 text-emerald-50/70">
                {visual.visualDescription}
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Simple customer experience",
                  "Powerful business automation",
                  "Designed for modern teams",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-white/80"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 shadow-2xl">
              {visual.video ? (
                <video
                  src={visual.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-video w-full object-cover"
                />
              ) : visual.gif ? (
                <img
                  src={visual.gif}
                  alt={title}
                  className="aspect-video w-full object-contain bg-[#0C1916] p-8"
                />
              ) : visual.image ? (
                <img
                  src={visual.image}
                  alt={title}
                  className="aspect-video w-full object-cover"
                />
              ) : (
                <GenericProductVisual icon={visual.icon} />
              )}

              {visual.video && (
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                  Live product preview
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}