import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  IndianRupee,
  MessageCircle,
  PackageCheck,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  WalletCards,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =========================================================
   WHATSWARE OFFICIAL LOGO
========================================================= */

function WhatsWareLogo({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <img
      src="/whatsware-logo.png"
      alt="WhatsWare"
      className={`${className} object-contain`}
    />
  );
}

/* =========================================================
   SMALL HELPERS
========================================================= */

function SectionBadge({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D9F8ED] bg-[#F3FFF9] px-4 py-2 text-sm font-semibold text-[#159447] shadow-sm">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 shadow-sm">
        {icon}
      </span>

      <span>{children}</span>
    </div>
  );
}

function JourneyCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9FBF3] text-[#159447] transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      <h3 className="mb-2 text-lg font-bold text-[#123B32]">{title}</h3>

      <p className="text-sm leading-6 text-gray-600">{description}</p>
    </motion.div>
  );
}

function PaymentFeature({
  icon,
  title,
  description,
  items,
  reverse = false,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <SectionBadge icon={icon}>Payment Experience</SectionBadge>

        <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-[#123B32] sm:text-4xl">
          {title}
        </h3>

        <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
          {description}
        </p>

        <div className="mt-7 space-y-3">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DDF8EC] text-[#159447]">
                <Check className="h-4 w-4" />
              </span>

              <span className="text-sm font-medium leading-6 text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <PaymentJourneyVisual />
    </motion.div>
  );
}

/* =========================================================
   PAYMENT JOURNEY VISUAL
========================================================= */

function PaymentJourneyVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute -inset-5 rounded-[40px] bg-[#DFF8ED]/60 blur-3xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-[#DDF2E9] bg-white p-5 shadow-[0_25px_80px_rgba(0,0,0,0.10)] sm:p-7">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-[#D9F8ED]">
              <WhatsWareLogo className="h-8 w-8" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#123B32]">
                WhatsApp Shopping
              </p>

              <p className="text-xs text-gray-500">
                Customer conversation
              </p>
            </div>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8FAF1] text-[#159447]">
            <CheckCircle2 className="h-5 w-5" />
          </div>
        </div>

        {/* Product */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-[#FAFCFB] p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#EAF8F1]">
              <ShoppingBag className="h-7 w-7 text-[#159447]" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold text-[#123B32]">
                Premium Product
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Order directly through WhatsApp
              </p>

              <div className="mt-2 flex items-center gap-1 text-sm font-bold text-[#159447]">
                <IndianRupee className="h-3.5 w-3.5" />
                2,499
              </div>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="mt-4 rounded-2xl border border-[#DDF2E9] bg-[#F5FFF9] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
                <CreditCard className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#123B32]">
                  Secure Payment
                </p>

                <p className="text-xs text-gray-500">
                  Payment completed
                </p>
              </div>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDF8EC] text-[#159447]">
              <Check className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Order status */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF8F1] text-[#159447]">
              <PackageCheck className="h-5 w-5" />
            </div>

            <p className="text-xs font-semibold text-gray-500">
              Order Status
            </p>

            <p className="mt-1 text-sm font-bold text-[#123B32]">
              Confirmed
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF8F1] text-[#159447]">
              <Receipt className="h-5 w-5" />
            </div>

            <p className="text-xs font-semibold text-gray-500">
              Receipt
            </p>

            <p className="mt-1 text-sm font-bold text-[#123B32]">
              Sent on WhatsApp
            </p>
          </div>
        </div>

        {/* Bottom status */}
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#075E54] px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />

            <span className="text-xs font-semibold">
              Secure & encrypted
            </span>
          </div>

          <span className="text-xs font-medium text-white/80">
            Completed
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SUPPORT ROW
========================================================= */

function SupportRow({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF8F1] text-[#159447]">
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-[#123B32]">{title}</h4>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function WhatsAppPayments() {
  const benefits = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Sell inside WhatsApp",
      description:
        "Let customers discover products, ask questions and complete purchases without leaving their conversation.",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Simple payments",
      description:
        "Give customers a smoother payment journey with secure payment experiences connected to your WhatsApp conversations.",
    },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: "Instant order updates",
      description:
        "Keep customers informed with automated confirmations, payment updates and order notifications.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Trusted experience",
      description:
        "Create a professional purchasing experience while keeping customer conversations personal and direct.",
    },
  ];

  const paymentFeatures = [
    {
      title: "Turn conversations into purchases",
      description:
        "Your customers are already talking to your business on WhatsApp. Make it easier for them to move from a product conversation to payment without unnecessary steps.",
      items: [
        "Share products directly inside customer conversations",
        "Guide customers from enquiry to purchase",
        "Create a frictionless WhatsApp buying experience",
        "Reduce drop-offs between interest and payment",
      ],
    },
    {
      title: "Automate the post-payment journey",
      description:
        "Payment is only the beginning. Keep customers engaged with automated confirmations, order updates and useful notifications after every purchase.",
      items: [
        "Send payment confirmation automatically",
        "Share order confirmation instantly",
        "Send delivery and order-status updates",
        "Keep customers informed throughout the journey",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFDF5] text-gray-900">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#DFF8ED]/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Brand badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#D9F8ED] bg-white px-4 py-2 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9F8ED] p-1">
                <WhatsWareLogo className="h-5 w-5" />
              </span>

              <span className="text-sm font-semibold text-[#159447]">
                WhatsWare Payments
              </span>
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#123B32] sm:text-5xl lg:text-6xl">
              Turn WhatsApp conversations into{" "}
              <span className="text-[#159447]">completed payments.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Make it easy for customers to discover products, complete
              purchases and receive order updates without leaving WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/book-demo"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#159447] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#159447]/20 transition-all hover:-translate-y-0.5 hover:bg-[#117B3A]"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-[#123B32] transition hover:border-[#159447] hover:text-[#159447]"
              >
                See How It Works
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                WhatsApp-first commerce
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                Secure payments
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#159447]" />
                Automated updates
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <PaymentJourneyVisual />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-[#DDF2E9] bg-white p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF8F1] text-[#159447]">
                  <Zap className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    Payment
                  </p>

                  <p className="text-sm font-bold text-[#123B32]">
                    Completed instantly
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <SectionBadge
              icon={<WhatsWareLogo className="h-4 w-4" />}
            >
              WhatsWare Payments
            </SectionBadge>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#123B32] sm:text-4xl lg:text-5xl">
              A better way to{" "}
              <span className="text-[#159447]">sell through WhatsApp.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Bring conversations, payments and order updates together so
              customers can complete their buying journey with less friction.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <JourneyCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        id="how-it-works"
        className="bg-[#F7FBF8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <SectionBadge
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Simple Customer Journey
            </SectionBadge>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#123B32] sm:text-4xl lg:text-5xl">
              From{" "}
              <span className="text-[#159447]">conversation</span> to
              payment in a few simple steps.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Create a seamless commerce experience that keeps your customers
              connected with your business throughout the entire journey.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div className="absolute left-[12%] right-[12%] top-24 hidden h-px bg-[#CFEADD] lg:block" />

            <div className="relative grid gap-6 lg:grid-cols-4">
              <JourneyCard
                icon={<MessageCircle className="h-6 w-6" />}
                title="1. Customer Enquiry"
                description="A customer discovers your product and starts a conversation on WhatsApp."
              />

              <JourneyCard
                icon={<ShoppingBag className="h-6 w-6" />}
                title="2. Product Selection"
                description="Share product details, pricing and information directly inside the conversation."
                delay={0.08}
              />

              <JourneyCard
                icon={<CreditCard className="h-6 w-6" />}
                title="3. Secure Payment"
                description="Guide customers to a convenient payment experience without unnecessary friction."
                delay={0.16}
              />

              <JourneyCard
                icon={<PackageCheck className="h-6 w-6" />}
                title="4. Order Confirmation"
                description="Automatically send confirmation and keep customers updated after payment."
                delay={0.24}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PAYMENT FEATURES
      ===================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-24">
          <PaymentFeature
            icon={<WhatsWareLogo className="h-4 w-4" />}
            title={paymentFeatures[0].title}
            description={paymentFeatures[0].description}
            items={paymentFeatures[0].items}
          />

          <PaymentFeature
            icon={<WhatsWareLogo className="h-4 w-4" />}
            title={paymentFeatures[1].title}
            description={paymentFeatures[1].description}
            items={paymentFeatures[1].items}
            reverse
          />
        </div>
      </section>

      {/* =====================================================
          SECURITY
      ===================================================== */}

      <section className="bg-[#075E54] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold">
              <ShieldCheck className="h-4 w-4" />
              Secure payment experience
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Give customers confidence at every step.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
              Make every payment interaction feel professional, transparent
              and trustworthy while keeping the entire experience connected to
              the customer's WhatsApp conversation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <ShieldCheck className="h-7 w-7 text-[#9AF0C3]" />

              <h3 className="mt-5 text-lg font-bold">
                Secure interactions
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/65">
                Build trust into every stage of the payment journey.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <Receipt className="h-7 w-7 text-[#9AF0C3]" />

              <h3 className="mt-5 text-lg font-bold">
                Instant confirmation
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/65">
                Keep customers informed immediately after payment.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <PackageCheck className="h-7 w-7 text-[#9AF0C3]" />

              <h3 className="mt-5 text-lg font-bold">
                Order visibility
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/65">
                Share useful order information throughout the journey.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <Zap className="h-7 w-7 text-[#9AF0C3]" />

              <h3 className="mt-5 text-lg font-bold">
                Faster conversions
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/65">
                Reduce unnecessary steps between intent and purchase.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS USE CASES
      ===================================================== */}

      <section className="bg-[#FFFDF5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionBadge
                icon={<WhatsWareLogo className="h-4 w-4" />}
              >
                Built for growing businesses
              </SectionBadge>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#123B32] sm:text-4xl">
                Make every customer conversation{" "}
                <span className="text-[#159447]">
                  commercially valuable.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Whether you sell products, services, subscriptions or
                experiences, WhatsWare Payments helps you create a smoother
                customer-to-payment journey.
              </p>

              <a
                href="/book-demo"
                className="group mt-7 inline-flex items-center gap-2 font-bold text-[#159447]"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <SupportRow
                icon={<ShoppingBag className="h-5 w-5" />}
                title="D2C & Ecommerce"
                description="Convert product enquiries into purchases through WhatsApp."
              />

              <SupportRow
                icon={<IndianRupee className="h-5 w-5" />}
                title="Service Businesses"
                description="Collect payments while keeping customers connected to your team."
              />

              <SupportRow
                icon={<Receipt className="h-5 w-5" />}
                title="Subscriptions"
                description="Keep customers informed about renewals and payment activity."
              />

              <SupportRow
                icon={<PackageCheck className="h-5 w-5" />}
                title="Order-Based Businesses"
                description="Connect payment confirmation with order and delivery updates."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[#159447] px-6 py-14 text-center shadow-[0_25px_80px_rgba(21,148,71,0.22)] sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          {/* OFFICIAL WHATSWARE LOGO */}
          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-lg">
            <WhatsWareLogo className="h-11 w-11" />
          </div>

          <h2 className="relative mx-auto mt-7 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to turn WhatsApp conversations into payments?
          </h2>

          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
            Give your customers a smoother way to discover, purchase and
            receive updates — all through WhatsApp.
          </p>

          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#159447] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F5FFF9]"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              View Pricing
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </div>
  );
}