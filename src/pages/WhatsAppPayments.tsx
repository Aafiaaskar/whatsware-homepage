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
  Sparkles,
  User,
  WalletCards,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppPayments() {
  const { language } = useLanguage();

  const isTamil = language === "TA";

  const text = {
    badge: isTamil ? "WhatsApp Payments" : "WhatsApp Payments",

    subtitle: isTamil
      ? "உரையாடலிலிருந்து வாங்குதல் வரை customer journey-ஐ எளிதாக்குங்கள்."
      : "Make the journey from conversation to purchase simpler.",

    description: isTamil
      ? "வாடிக்கையாளர்கள் product பற்றி கேட்பதிலிருந்து payment மற்றும் order confirmation வரை seamless அனுபவத்தை பெற உதவுங்கள்."
      : "Help customers move smoothly from product enquiries to payment and order confirmation while keeping the entire experience connected.",

    start: isTamil ? "Get Started" : "Get Started",

    demo: isTamil ? "Book a Demo" : "Book a Demo",

    journeyLabel: isTamil ? "Customer Journey" : "Customer Journey",

    journeyTitle: isTamil
      ? "ஒரே conversation-ல் enquiry முதல் purchase வரை."
      : "From enquiry to purchase in one connected journey.",

    journeyDescription: isTamil
      ? "வாடிக்கையாளர்களை conversation-ல் engage செய்து, purchase முடிக்க உதவுங்கள்."
      : "Engage customers in conversation and help them complete their purchase with less friction.",

    featuresLabel: isTamil ? "Payment Experience" : "Payment Experience",

    featuresTitle: isTamil
      ? "ஒவ்வொரு purchase-ஐயும் எளிமையாகவும் தெளிவாகவும் மாற்றுங்கள்."
      : "Make every purchase simpler, smoother and clearer.",

    ctaTitle: isTamil
      ? "உரையாடல்களை purchases-ஆக மாற்ற தயாரா?"
      : "Ready to turn conversations into purchases?",

    ctaDescription: isTamil
      ? "Customer questions, payment support மற்றும் order communication அனைத்தையும் ஒரே experience-ல் இணைக்கவும்."
      : "Connect customer questions, payment support and order communication into one seamless experience.",
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FBF9] text-[#12312C]">
      <Navbar />

      <main className="pt-20">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">

          <div className="pointer-events-none absolute -left-48 top-0 h-[520px] w-[520px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="pointer-events-none absolute -right-48 top-20 h-[520px] w-[520px] rounded-full bg-[#F2E5D8] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            {/* Breadcrumb */}
            <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">

              <Link
                href="/"
                className="transition hover:text-[#159447]"
              >
                {isTamil ? "முகப்பு" : "Home"}
              </Link>

              <ChevronRight className="h-4 w-4" />

              <Link
                href="/products"
                className="transition hover:text-[#159447]"
              >
                Products
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-semibold text-[#12312C]">
                WhatsApp Payments
              </span>

            </div>


            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

              {/* =================================================
                  HERO CONTENT
              ================================================== */}
              <div>

                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2 text-sm font-bold text-[#075E54] shadow-sm">

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9F8ED]">
                    <WalletCards className="h-4 w-4 text-[#159447]" />
                  </span>

                  {text.badge}

                </div>


                <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#12312C] sm:text-6xl lg:text-7xl">

                  {isTamil ? (
                    <>
                      Conversation-ஐ{" "}
                      <span className="text-[#159447]">
                        purchase
                      </span>{" "}
                      ஆக மாற்றுங்கள்.
                    </>
                  ) : (
                    <>
                      Turn every{" "}
                      <span className="text-[#159447]">
                        conversation
                      </span>{" "}
                      into a purchase.
                    </>
                  )}

                </h1>


                <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[#075E54] sm:text-2xl">
                  {text.subtitle}
                </p>


                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {text.description}
                </p>


                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/signup"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#075E54] px-8 py-4 font-bold text-white shadow-lg shadow-[#075E54]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#064C44] hover:shadow-xl"
                  >
                    {text.start}

                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>


                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full border border-[#B8D9CD] bg-white px-8 py-4 font-bold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#159447] hover:bg-[#F1FAF5]"
                  >
                    {text.demo}
                  </Link>

                </div>


                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

                  {[
                    "Purchase assistance",
                    "Payment support",
                    "Order communication",
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
                  PAYMENT VISUAL
              ================================================== */}
              <PaymentJourneyVisual isTamil={isTamil} />

            </div>

          </div>
        </section>


        {/* =====================================================
            CUSTOMER JOURNEY
        ====================================================== */}
        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                {text.journeyLabel}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {text.journeyTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {text.journeyDescription}
              </p>

            </div>


            <div className="mt-16 grid gap-6 md:grid-cols-3">

              <JourneyCard
                number="01"
                icon={<MessageCircle className="h-7 w-7" />}
                title={
                  isTamil
                    ? "Product பற்றி கேளுங்கள்"
                    : "Start with a conversation"
                }
                description={
                  isTamil
                    ? "Customer WhatsApp மூலம் product அல்லது service பற்றி கேட்கலாம்."
                    : "Customers can ask about your product or service directly through WhatsApp."
                }
              />

              <JourneyCard
                number="02"
                icon={<CreditCard className="h-7 w-7" />}
                title={
                  isTamil
                    ? "Purchase-க்கு உதவுங்கள்"
                    : "Guide the purchase"
                }
                description={
                  isTamil
                    ? "வாடிக்கையாளர்களுக்கு purchase மற்றும் payment process-ல் உதவுங்கள்."
                    : "Help customers understand the purchase and payment process."
                }
              />

              <JourneyCard
                number="03"
                icon={<PackageCheck className="h-7 w-7" />}
                title={
                  isTamil
                    ? "Order-ஐ confirm செய்யுங்கள்"
                    : "Confirm the order"
                }
                description={
                  isTamil
                    ? "Payment முடிந்ததும் order மற்றும் customer communication-ஐ தொடர்ந்து manage செய்யுங்கள்."
                    : "Once payment is completed, keep order and customer communication connected."
                }
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURES
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#F1F8F4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

          <div className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              <div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">

                  <Sparkles className="h-4 w-4" />

                  {text.featuresLabel}

                </div>


                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#12312C] sm:text-5xl">
                  {text.featuresTitle}
                </h2>


                <div className="mt-8 space-y-5">

                  <PaymentFeature
                    icon={<MessageCircle className="h-5 w-5" />}
                    title="Payment Conversations"
                    description="Keep payment-related customer questions connected to the conversation."
                  />

                  <PaymentFeature
                    icon={<ShoppingBag className="h-5 w-5" />}
                    title="Purchase Assistance"
                    description="Help customers move confidently from product interest to purchase."
                  />

                  <PaymentFeature
                    icon={<CreditCard className="h-5 w-5" />}
                    title="Checkout Support"
                    description="Guide customers when they need help completing their purchase."
                  />

                  <PaymentFeature
                    icon={<Receipt className="h-5 w-5" />}
                    title="Order Communication"
                    description="Keep customers informed about their order after purchase."
                  />

                  <PaymentFeature
                    icon={<Zap className="h-5 w-5" />}
                    title="Payment Follow-ups"
                    description="Continue the conversation when customers need additional support."
                  />

                  <PaymentFeature
                    icon={<CheckCircle2 className="h-5 w-5" />}
                    title="Sales Conversion Support"
                    description="Reduce friction between customer intent and completed purchase."
                  />

                </div>

              </div>


              {/* Feature visual */}
              <PaymentSupportVisual />

            </div>

          </div>

        </section>


        {/* =====================================================
            TRUST / SECURITY
        ====================================================== */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-5xl">

            <div className="rounded-[2rem] border border-[#DCEAE4] bg-[#F8FBF9] p-8 text-center shadow-sm sm:p-12">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-2xl font-black text-[#12312C] sm:text-3xl">
                Connected customer payment experience
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
                Keep customer conversations, purchase assistance and order
                communication connected throughout the buying journey.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">

                {[
                  "Clear communication",
                  "Purchase assistance",
                  "Order support",
                  "Better customer experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-[#31544A]"
                  >
                    <Check className="h-4 w-4 text-[#159447]" />
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#075E54] px-4 py-24 sm:px-6 lg:px-8">

          <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#159447] opacity-30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-emerald-300 opacity-20 blur-3xl" />


          <div className="relative mx-auto max-w-5xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
              <WalletCards className="h-8 w-8" />
            </div>


            <h2 className="mt-8 text-3xl font-black tracking-tight text-white sm:text-5xl">
              {text.ctaTitle}
            </h2>


            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
              {text.ctaDescription}
            </p>


            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#075E54] shadow-xl transition hover:-translate-y-1 hover:bg-[#F4FBF7]"
              >
                {text.start}

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>


              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                {text.demo}
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
   PAYMENT JOURNEY HERO VISUAL
========================================================= */

function PaymentJourneyVisual({
  isTamil,
}: {
  isTamil: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-xl">

      <div className="absolute -inset-10 rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-5 shadow-[0_40px_100px_-30px_rgba(12,75,52,0.45)] sm:p-7">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#075E54] text-white">
              <MessageCircle className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-black text-[#12312C]">
                WhatsApp Shopping
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Customer conversation
              </p>
            </div>

          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D9F8ED] text-[#159447]">
            <ShieldCheck className="h-4 w-4" />
          </div>

        </div>


        {/* Customer */}
        <div className="mt-5 flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2E5D8] text-xs font-black text-[#805A42]">
            AK
          </div>

          <div>

            <p className="text-xs font-black text-[#12312C]">
              Aisha Khan
            </p>

            <p className="mt-1 text-[10px] text-[#159447]">
              Customer
            </p>

          </div>

        </div>


        {/* Product message */}
        <div className="mt-5 rounded-2xl bg-[#F1F5F3] p-4">

          <p className="text-[10px] font-bold text-slate-400">
            CUSTOMER
          </p>

          <p className="mt-2 text-sm font-semibold leading-6 text-[#29433D]">
            Hi! I would like to order this product.
          </p>

        </div>


        {/* Product card */}
        <div className="mt-4 rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-sm">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447]">
              <ShoppingBag className="h-7 w-7" />
            </div>

            <div className="min-w-0 flex-1">

              <p className="text-xs font-black text-[#12312C]">
                Premium Product
              </p>

              <p className="mt-1 text-[10px] text-slate-400">
                Quantity: 1
              </p>

              <p className="mt-2 text-sm font-black text-[#075E54]">
                ₹1,499
              </p>

            </div>

          </div>

        </div>


        {/* Payment card */}
        <div className="mt-4 rounded-2xl bg-[#075E54] p-5 text-white">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <CreditCard className="h-5 w-5" />
              </div>

              <div>

                <p className="text-[10px] font-medium text-emerald-100/70">
                  PAYMENT
                </p>

                <p className="mt-1 text-sm font-black">
                  Complete your purchase
                </p>

              </div>

            </div>

            <IndianRupee className="h-5 w-5 text-emerald-100" />

          </div>


          <div className="mt-5 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">

            <span className="text-xs text-emerald-50/70">
              Total
            </span>

            <span className="text-lg font-black">
              ₹1,499
            </span>

          </div>


          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-black text-[#075E54]">
            <WalletCards className="h-4 w-4" />
            Pay securely
          </div>

        </div>


        {/* Success */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#BFEBDD] bg-[#F1FAF5] p-4">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#159447] text-white">
            <CheckCircle2 className="h-5 w-5" />
          </div>

          <div>

            <p className="text-xs font-black text-[#12312C]">
              {isTamil ? "Payment successful" : "Payment successful"}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              Order #WW-1048 confirmed
            </p>

          </div>

        </div>

      </div>


      {/* Floating payment card */}
      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
            <CheckCircle2 className="h-5 w-5" />
          </div>

          <div>

            <p className="text-[9px] text-slate-400">
              Payment
            </p>

            <p className="mt-1 text-xs font-black text-[#12312C]">
              Completed ✓
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   JOURNEY CARD
========================================================= */

function JourneyCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-[1.75rem] border border-[#E1ECE7] bg-[#F8FBF9] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#075E54] group-hover:text-white">
          {icon}
        </div>

        <span className="text-4xl font-black text-[#DCEAE4]">
          {number}
        </span>

      </div>


      <h3 className="mt-7 text-xl font-black text-[#12312C]">
        {title}
      </h3>


      <p className="mt-3 text-sm leading-7 text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   PAYMENT FEATURE
========================================================= */

function PaymentFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
        {icon}
      </div>

      <div>

        <h3 className="font-black text-[#12312C]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   PAYMENT SUPPORT VISUAL
========================================================= */

function PaymentSupportVisual() {
  return (
    <div className="relative">

      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#D9F8ED]/70 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-6 shadow-[0_30px_80px_-30px_rgba(12,75,52,0.35)] sm:p-8">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Purchase Support
            </p>

            <p className="mt-1 text-xl font-black text-[#12312C]">
              Customer assistance
            </p>

          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447]">
            <HeadsetIcon />
          </div>

        </div>


        <div className="mt-7 space-y-4">

          <SupportRow
            icon={<MessageCircle className="h-5 w-5" />}
            title="Customer question"
            description="Can I complete my order here?"
            completed
          />

          <SupportRow
            icon={<CreditCard className="h-5 w-5" />}
            title="Payment assistance"
            description="Payment details shared"
            completed
          />

          <SupportRow
            icon={<Receipt className="h-5 w-5" />}
            title="Order confirmation"
            description="Order #WW-1048 confirmed"
            completed
          />

        </div>


        <div className="mt-6 rounded-2xl bg-[#075E54] p-5 text-white">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Zap className="h-5 w-5" />
            </div>

            <div>

              <p className="text-xs font-black">
                Smooth customer journey
              </p>

              <p className="mt-1 text-[10px] text-emerald-50/70">
                Enquiry → Payment → Order
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   SUPPORT ROW
========================================================= */

function SupportRow({
  icon,
  title,
  description,
  completed,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  completed?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#F8FBF9] p-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-xs font-black text-[#12312C]">
          {title}
        </p>

        <p className="mt-1 truncate text-[10px] text-slate-400">
          {description}
        </p>

      </div>

      {completed && (
        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#159447]" />
      )}

    </div>
  );
}


/* =========================================================
   HEADSET ICON
========================================================= */

function HeadsetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M3 13a9 9 0 0 1 18 0" />
      <path d="M3 13v4a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2Z" />
      <path d="M21 13v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
      <path d="M16 19c0 1.1-.9 2-2 2h-2" />
    </svg>
  );
}