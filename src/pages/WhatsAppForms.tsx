import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Database,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
  CalendarDays,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import type { ReactNode } from "react";

/* =========================================================
   WHATSWARE OFFICIAL LOGO
========================================================= */

function WhatsWareLogo({
  className = "h-7 w-7",
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
   MAIN PAGE
========================================================= */

export default function WhatsAppForms() {
  const { language } = useLanguage();

  const isTamil = language === "TA";

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FBF9] text-[#12312C]">
      <Navbar />

      <main className="pt-20">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -left-52 top-0 h-[550px] w-[550px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="pointer-events-none absolute -right-52 top-20 h-[550px] w-[550px] rounded-full bg-[#F2E5D8] blur-3xl" />

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
                WhatsApp Forms
              </span>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
              {/* =================================================
                  HERO CONTENT
              ================================================== */}

              <div>
                {/* Badge */}
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2 text-sm font-bold text-[#075E54] shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-[#D9F8ED]">
                    <WhatsWareLogo className="h-6 w-6" />
                  </span>

                  WhatsApp Forms
                </div>

                {/* Title */}
                <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#12312C] sm:text-6xl lg:text-7xl">
                  {isTamil ? (
                    <>
                      WhatsApp-ல்{" "}
                      <span className="text-[#159447]">
                        forms
                      </span>{" "}
                      மூலம் தகவல்களை சேகரிக்கவும்.
                    </>
                  ) : (
                    <>
                      Collect information
                      <span className="text-[#159447]">
                        {" "}inside WhatsApp.
                      </span>
                    </>
                  )}
                </h1>

                {/* Subtitle */}
                <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[#075E54] sm:text-2xl">
                  {isTamil
                    ? "வாடிக்கையாளர்கள் வேறு website-க்கு செல்லாமல் தகவல்களை எளிதாக submit செய்ய உதவுங்கள்."
                    : "Let customers submit information without leaving the WhatsApp conversation."}
                </p>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {isTamil
                    ? "Leads, enquiries, bookings மற்றும் customer details போன்ற தகவல்களை conversational forms மூலம் எளிதாக சேகரிக்கவும்."
                    : "Collect leads, enquiries, bookings and customer details through simple conversational forms that keep customers engaged."}
                </p>

                {/* Buttons */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/signup"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#075E54] px-8 py-4 font-bold text-white shadow-lg shadow-[#075E54]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#064C44] hover:shadow-xl"
                  >
                    Get Started

                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full border border-[#B8D9CD] bg-white px-8 py-4 font-bold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#159447] hover:bg-[#F1FAF5]"
                  >
                    Book a Demo
                  </Link>
                </div>

                {/* Mini benefits */}
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Lead collection",
                    "Customer information",
                    "Automated workflows",
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
                  HERO FORM VISUAL
              ================================================== */}

              <FormHeroVisual />
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                {isTamil ? "எப்படி வேலை செய்கிறது" : "How it works"}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {isTamil
                  ? "Conversation-ல் இருந்தே தகவல்களை சேகரிக்கவும்."
                  : "Collect information without breaking the conversation."}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {isTamil
                  ? "Simple questions மூலம் customer details-ஐ சேகரித்து உங்கள் workflow-க்கு அனுப்புங்கள்."
                  : "Ask simple questions, capture customer details and send the information into your workflow."}
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <FormStep
                number="01"
                icon={<MessageCircle className="h-7 w-7" />}
                title={
                  isTamil
                    ? "Conversation தொடங்குங்கள்"
                    : "Start the conversation"
                }
                description={
                  isTamil
                    ? "WhatsApp-ல் customer-ஐ engage செய்து தேவையான தகவல்களை கேளுங்கள்."
                    : "Engage the customer on WhatsApp and ask for the information you need."
                }
              />

              <FormStep
                number="02"
                icon={<ClipboardList className="h-7 w-7" />}
                title={
                  isTamil
                    ? "Form-ஐ நிரப்புங்கள்"
                    : "Collect the details"
                }
                description={
                  isTamil
                    ? "Name, phone, email, booking details போன்ற தகவல்களை conversational form மூலம் சேகரிக்கவும்."
                    : "Collect names, phone numbers, emails, booking details and more through conversational fields."
                }
              />

              <FormStep
                number="03"
                icon={<Database className="h-7 w-7" />}
                title={
                  isTamil
                    ? "Data-ஐ பயன்படுத்துங்கள்"
                    : "Use the information"
                }
                description={
                  isTamil
                    ? "சேகரிக்கப்பட்ட தகவல்களை உங்கள் sales அல்லது business workflow-ல் பயன்படுத்துங்கள்."
                    : "Use captured information in your sales, support or business workflows."
                }
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#F1F8F4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="pointer-events-none absolute -right-52 top-0 h-[600px] w-[600px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Feature content */}
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">
                  <WhatsWareLogo className="h-5 w-5" />

                  WhatsApp Form Features
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#12312C] sm:text-5xl">
                  {isTamil
                    ? "சிறந்த தகவல் சேகரிப்பு அனுபவம்."
                    : "A smarter way to collect customer information."}
                </h2>

                <div className="mt-8 space-y-5">
                  <FeatureItem
                    icon={<ClipboardList className="h-5 w-5" />}
                    title="Conversational Forms"
                    description="Collect information naturally inside the customer conversation."
                  />

                  <FeatureItem
                    icon={<User className="h-5 w-5" />}
                    title="Lead Collection"
                    description="Capture useful customer details and turn conversations into leads."
                  />

                  <FeatureItem
                    icon={<Phone className="h-5 w-5" />}
                    title="Customer Information"
                    description="Collect names, phone numbers and other important customer details."
                  />

                  <FeatureItem
                    icon={<CalendarDays className="h-5 w-5" />}
                    title="Booking & Enquiry Forms"
                    description="Collect booking requests and enquiries without redirecting customers."
                  />

                  <FeatureItem
                    icon={<Zap className="h-5 w-5" />}
                    title="Automated Workflows"
                    description="Connect captured information with your business workflows."
                  />

                  <FeatureItem
                    icon={<Database className="h-5 w-5" />}
                    title="Easy Data Collection"
                    description="Keep important customer information organized and accessible."
                  />
                </div>
              </div>

              {/* Form UI */}
              <FormBuilderVisual />
            </div>
          </div>
        </section>

        {/* =====================================================
            USE CASES
        ====================================================== */}

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                Use Cases
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#12312C] sm:text-5xl">
                {isTamil
                  ? "ஒவ்வொரு customer interaction-க்கும்."
                  : "Built for everyday customer interactions."}
              </h2>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <UseCase
                icon={<User className="h-6 w-6" />}
                title="Lead Capture"
                description="Capture new customer details directly from WhatsApp."
              />

              <UseCase
                icon={<Mail className="h-6 w-6" />}
                title="Enquiries"
                description="Collect customer questions and requirements."
              />

              <UseCase
                icon={<CalendarDays className="h-6 w-6" />}
                title="Bookings"
                description="Collect appointment and booking requests."
              />

              <UseCase
                icon={<FileText className="h-6 w-6" />}
                title="Applications"
                description="Gather structured information for applications and requests."
              />
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
            {/* WhatsWare official logo */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white/10 backdrop-blur">
              <WhatsWareLogo className="h-14 w-14" />
            </div>

            <h2 className="mt-8 text-3xl font-black tracking-tight text-white sm:text-5xl">
              {isTamil
                ? "WhatsApp-ல் தகவல்களை சேகரிக்க தயாரா?"
                : "Ready to collect information inside WhatsApp?"}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
              {isTamil
                ? "Customers-ஐ வேறு websites-க்கு அனுப்பாமல் leads, enquiries மற்றும் bookings-ஐ சேகரிக்கவும்."
                : "Capture leads, enquiries and bookings without sending customers to another website."}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#075E54] shadow-xl transition hover:-translate-y-1 hover:bg-[#F4FBF7]"
              >
                Get Started

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </div>
  );
}

/* =========================================================
   HERO FORM VISUAL
========================================================= */

function FormHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-10 rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-5 shadow-[0_40px_100px_-30px_rgba(12,75,52,0.45)] sm:p-7">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
          {/* Official WhatsWare logo */}
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#075E54]">
            <WhatsWareLogo className="h-9 w-9" />
          </div>

          <div>
            <p className="text-sm font-black text-[#12312C]">
              WhatsApp Forms
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Customer information
            </p>
          </div>
        </div>

        {/* Customer message */}
        <div className="mt-5 flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-md bg-[#DCF8E9] p-4">
            <p className="text-[10px] font-bold text-[#159447]">
              CUSTOMER
            </p>

            <p className="mt-2 text-sm font-semibold leading-6 text-[#29433D]">
              Hi! I want to enquire about your service.
            </p>
          </div>
        </div>

        {/* WhatsWare message */}
        <div className="mt-4 flex gap-3">
          {/* Official WhatsWare logo instead of Sparkles/bot icon */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#D9F8ED]">
            <WhatsWareLogo className="h-8 w-8" />
          </div>

          <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-[#F1F5F3] p-4">
            <p className="text-sm font-semibold leading-6 text-[#29433D]">
              Great! Please share your details.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-5 rounded-2xl border border-[#DCEAE4] bg-[#F8FBF9] p-5">
          <div className="mb-4 flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-[#159447]" />

            <p className="text-xs font-black text-[#12312C]">
              Customer Details
            </p>
          </div>

          <FormInput
            icon={<User className="h-4 w-4" />}
            label="Full Name"
            value="Aisha Khan"
          />

          <FormInput
            icon={<Phone className="h-4 w-4" />}
            label="Phone Number"
            value="+91 98765 43210"
          />

          <FormInput
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value="aisha@example.com"
          />

          <button
            type="button"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#075E54] py-3 text-xs font-black text-white transition hover:bg-[#064C44]"
          >
            Submit Details

            <Send className="h-4 w-4" />
          </button>
        </div>

        {/* Success */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#BFEBDD] bg-[#F1FAF5] p-4">
          {/* Official WhatsWare logo */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#BFEBDD] bg-white">
            <WhatsWareLogo className="h-8 w-8" />
          </div>

          <div>
            <p className="text-xs font-black text-[#12312C]">
              Information submitted
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              Lead captured successfully
            </p>
          </div>

          <CheckCircle2 className="ml-auto h-5 w-5 text-[#159447]" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FORM BUILDER VISUAL
========================================================= */

function FormBuilderVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#D9F8ED]/70 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-6 shadow-[0_30px_80px_-30px_rgba(12,75,52,0.35)] sm:p-8">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Form Builder
            </p>

            <p className="mt-1 text-xl font-black text-[#12312C]">
              Lead Capture Form
            </p>
          </div>

          {/* Official WhatsWare logo */}
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#D9F8ED]">
            <WhatsWareLogo className="h-9 w-9" />
          </div>
        </div>

        {/* Fields */}
        <div className="mt-7 space-y-4">
          <BuilderField
            icon={<User className="h-4 w-4" />}
            label="Full Name"
            required
          />

          <BuilderField
            icon={<Phone className="h-4 w-4" />}
            label="Phone Number"
            required
          />

          <BuilderField
            icon={<Mail className="h-4 w-4" />}
            label="Email Address"
          />

          <BuilderField
            icon={<FileText className="h-4 w-4" />}
            label="Customer Requirement"
          />
        </div>

        {/* Workflow */}
        <div className="mt-6 rounded-2xl bg-[#075E54] p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Zap className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-black">
                Automated Workflow
              </p>

              <p className="mt-1 text-[10px] text-emerald-50/70">
                New lead → Sales team → Follow-up
              </p>
            </div>
          </div>
        </div>

        {/* Data captured */}
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#DCEAE4] bg-[#F8FBF9] p-4">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-[#159447]" />

            <div>
              <p className="text-xs font-black text-[#12312C]">
                Customer data
              </p>

              <p className="mt-1 text-[10px] text-slate-400">
                Captured and organized
              </p>
            </div>
          </div>

          <CheckCircle2 className="h-5 w-5 text-[#159447]" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="mb-3">
      <p className="mb-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
        <span className="text-[#159447]">
          {icon}
        </span>

        <span className="text-xs font-medium text-slate-600">
          {value}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   FORM STEP
========================================================= */

function FormStep({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: ReactNode;
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
   FEATURE ITEM
========================================================= */

function FeatureItem({
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
   BUILDER FIELD
========================================================= */

function BuilderField({
  icon,
  label,
  required,
}: {
  icon: ReactNode;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#F8FBF9] p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#159447] shadow-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-black text-[#12312C]">
          {label}
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          {required ? "Required field" : "Optional field"}
        </p>
      </div>

      {required && (
        <span className="text-[9px] font-bold text-[#159447]">
          Required
        </span>
      )}
    </div>
  );
}

/* =========================================================
   USE CASE
========================================================= */

function UseCase({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-[#E1ECE7] bg-[#F8FBF9] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#075E54] group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 font-black text-[#12312C]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}