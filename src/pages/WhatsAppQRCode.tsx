import {
  ArrowRight,
  Check,
  CheckCircle2,
  MessageCircle,
  QrCode,
  ScanLine,
  Smartphone,
  Sparkles,
  Store,
  Users,
  Zap,
} from "lucide-react";

import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   PROJECT QR CODE
   =========================================================

   This is the SAME QR image used in both QR sections.

   File location:
   public/Whatsware QR.jpeg

   It will be available in the browser as:
   /Whatsware%20QR.jpeg
========================================================= */

const PROJECT_QR_CODE = "/Whatsware%20QR.jpeg";


export default function WhatsAppQRCode() {
  const { language } = useLanguage();
  const isTamil = language === "TA";

  const content = {
    badge: isTamil ? "WhatsApp ஈடுபாடு" : "WhatsApp Engagement",

    title: isTamil
      ? "ஒவ்வொரு Scan-ஐயும் ஒரு உரையாடலாக மாற்றுங்கள்."
      : "Turn every scan into a conversation.",

    subtitle: isTamil
      ? "எளிய WhatsApp QR Code மூலம் வாடிக்கையாளர்கள் உங்கள் வணிகத்துடன் உடனடியாக இணையட்டும்."
      : "Let customers connect with your business instantly through a simple WhatsApp QR code.",

    description: isTamil
      ? "கடைகள், தயாரிப்பு பேக்கேஜிங், Business Cards, Posters, Events மற்றும் Digital Campaigns போன்ற இடங்களில் பயன்படுத்தக்கூடிய WhatsApp QR Code-ஐ உருவாக்குங்கள்."
      : "Create a WhatsApp QR code that customers can scan from stores, product packaging, business cards, posters, events and digital campaigns.",

    create: isTamil ? "QR Code உருவாக்குங்கள்" : "Create QR Code",

    demo: isTamil ? "Demo பார்க்கவும்" : "Book a Demo",

    howLabel: isTamil ? "எப்படி வேலை செய்கிறது?" : "How it works",

    howTitle: isTamil
      ? "Scan முதல் Conversation வரை சில விநாடிகளில்."
      : "From scan to conversation in seconds.",

    howDescription: isTamil
      ? "உங்கள் வாடிக்கையாளர்களுக்கு WhatsApp-ல் உரையாடலைத் தொடங்க மிக எளிதான வழியை வழங்குங்கள்."
      : "Give your customers a frictionless way to start chatting with your business.",

    step1: isTamil ? "QR உருவாக்குங்கள்" : "Create your QR",

    step1Desc: isTamil
      ? "உங்கள் வணிகத்திற்கான WhatsApp QR Code-ஐ சில clicks-ல் உருவாக்குங்கள்."
      : "Generate a WhatsApp QR code for your business in just a few clicks.",

    step2: isTamil ? "Customer Scan செய்கிறார்" : "Customer scans",

    step2Desc: isTamil
      ? "Customer தனது phone camera மூலம் QR Code-ஐ scan செய்கிறார்."
      : "Customers scan your QR code using their phone camera.",

    step3: isTamil ? "Conversation தொடங்குகிறது" : "Conversation starts",

    step3Desc: isTamil
      ? "WhatsApp உடனடியாக திறந்து customer chat செய்யத் தொடங்கலாம்."
      : "WhatsApp opens instantly and the customer can start chatting.",

    sectionTitle: isTamil
      ? "உங்கள் WhatsApp QR Code-ஐ எங்கும் பயன்படுத்துங்கள்."
      : "Your WhatsApp entry point, everywhere.",

    sectionDescription: isTamil
      ? "Online அல்லது Offline — உங்கள் brand-ஐ வாடிக்கையாளர்களுடன் உடனடியாக இணைக்குங்கள்."
      : "Online or offline, make starting a WhatsApp conversation effortless.",

    useTitle: isTamil
      ? "உங்கள் வாடிக்கையாளர்கள் இருக்கும் இடமெல்லாம் QR Code-ஐ வையுங்கள்."
      : "Put your QR code where customers are.",

    ctaTitle: isTamil
      ? "ஒவ்வொரு Scan-ஐயும் முக்கியமானதாக மாற்றுங்கள்."
      : "Make every scan count.",

    ctaDescription: isTamil
      ? "உங்கள் வணிகத்துடன் WhatsApp உரையாடலைத் தொடங்க வாடிக்கையாளர்களுக்கு மிக வேகமான வழியை வழங்குங்கள்."
      : "Give your customers the fastest way to start a WhatsApp conversation with your business.",
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FBF9] text-[#12312C]">
      <Navbar />

      <main className="pt-20">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">

          <div className="pointer-events-none absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

          <div className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full bg-[#E8F3D9] opacity-70 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            {/* Breadcrumb */}

            <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">

              <Link
                href="/"
                className="transition hover:text-[#159447]"
              >
                {isTamil ? "முகப்பு" : "Home"}
              </Link>

              <span>/</span>

              <Link
                href="/products"
                className="transition hover:text-[#159447]"
              >
                Products
              </Link>

              <span>/</span>

              <span className="font-semibold text-[#12312C]">
                WhatsApp QR Code
              </span>

            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <div>

                {/* Badge */}

                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2 text-sm font-bold text-[#075E54] shadow-sm">

                  <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-[#D9F8ED]">

                    <img
                      src="/whatsware-logo.png"
                      alt="WhatsWare"
                      className="h-full w-full object-contain p-1"
                    />

                  </span>

                  {content.badge}

                </div>

                {/* Heading */}

                <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#12312C] sm:text-6xl lg:text-7xl">

                  {isTamil ? (
                    <>
                      ஒவ்வொரு{" "}
                      <span className="text-[#159447]">
                        Scan
                      </span>
                      -ஐயும் ஒரு{" "}
                      <span className="text-[#159447]">
                        உரையாடலாக
                      </span>{" "}
                      மாற்றுங்கள்.
                    </>
                  ) : (
                    <>
                      Turn every scan into a{" "}
                      <span className="text-[#159447]">
                        conversation.
                      </span>
                    </>
                  )}

                </h1>

                {/* Subtitle */}

                <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[#075E54] sm:text-2xl">
                  {content.subtitle}
                </p>

                {/* Description */}

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {content.description}
                </p>

                {/* Buttons */}

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/signup"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#075E54] px-8 py-4 font-bold text-white shadow-lg shadow-[#075E54]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#064C44] hover:shadow-xl"
                  >
                    {content.create}

                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full border border-[#B8D9CD] bg-white px-8 py-4 font-bold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#159447] hover:bg-[#F1FAF5]"
                  >
                    {content.demo}
                  </Link>

                </div>

                {/* Trust points */}

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

                  {[
                    isTamil
                      ? "உடனடி இணைப்பு"
                      : "Instant connection",

                    isTamil
                      ? "எளிதான பகிர்வு"
                      : "Easy to share",

                    isTamil
                      ? "Business-ready"
                      : "Built for businesses",
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
                  RIGHT QR HERO

                  SAME PROJECT QR IMAGE
              ================================================== */}

              <QRHero isTamil={isTamil} />

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
                {content.howLabel}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {content.howTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {content.howDescription}
              </p>

            </div>

            <div className="relative mt-16">

              <div className="absolute left-[16.66%] right-[16.66%] top-16 hidden h-px bg-[#BFEBDD] lg:block" />

              <div className="grid gap-12 lg:grid-cols-3">

                <Step
                  number="01"
                  icon={<QrCode className="h-7 w-7" />}
                  title={content.step1}
                  description={content.step1Desc}
                />

                <Step
                  number="02"
                  icon={<ScanLine className="h-7 w-7" />}
                  title={content.step2}
                  description={content.step2Desc}
                />

                <Step
                  number="03"
                  icon={<MessageCircle className="h-7 w-7" />}
                  title={content.step3}
                  description={content.step3Desc}
                />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            QR CODE SECTION

            SAME QR IMAGE AS HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#F1F8F4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

          <div className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full bg-[#D9F8ED] blur-3xl" />

          <div className="relative mx-auto max-w-6xl">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* LEFT */}

              <div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">

                  <Sparkles className="h-4 w-4" />

                  Smart QR Experience

                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#12312C] sm:text-5xl">
                  {content.sectionTitle}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {content.sectionDescription}
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    isTamil
                      ? "வேகமான Customer Connection"
                      : "Fast customer connection",

                    isTamil
                      ? "Online மற்றும் Offline இரண்டிலும் வேலை செய்கிறது"
                      : "Works across online and offline channels",

                    isTamil
                      ? "Print மற்றும் Share செய்ய எளிதானது"
                      : "Easy to print and share",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D9F8ED]">

                        <Check className="h-4 w-4 text-[#159447]" />

                      </div>

                      <span className="font-semibold text-[#29433D]">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

                <Link
                  href="/signup"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#075E54] px-7 py-4 font-bold text-white transition hover:bg-[#064C44]"
                >

                  {content.create}

                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

                </Link>

              </div>


              {/* =================================================
                  SECOND QR

                  EXACT SAME IMAGE
              ================================================== */}

              <QRGeneratorCard isTamil={isTamil} />

            </div>

          </div>

        </section>


        {/* =====================================================
            USE CASES
        ====================================================== */}

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#159447]">
                {isTamil
                  ? "Business Use Cases"
                  : "Built for every touchpoint"}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12312C] sm:text-5xl">
                {content.useTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {isTamil
                  ? "Online அல்லது Offline — Customer-ஐ WhatsApp-க்கு எளிதாக அழைத்துச் செல்லுங்கள்."
                  : "Online or offline, make starting a WhatsApp conversation effortless."}
              </p>

            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <UseCase
                icon={<Store className="h-6 w-6" />}
                title="Stores & Shops"
                text="Place QR codes at counters, entrances and product displays."
              />

              <UseCase
                icon={<Smartphone className="h-6 w-6" />}
                title="Product Packaging"
                text="Let customers scan your packaging and connect directly."
              />

              <UseCase
                icon={<Users className="h-6 w-6" />}
                title="Business Cards"
                text="Turn your business card into an instant WhatsApp connection."
              />

              <UseCase
                icon={<QrCode className="h-6 w-6" />}
                title="Posters & Flyers"
                text="Add QR codes to promotional material and campaigns."
              />

              <UseCase
                icon={<MessageCircle className="h-6 w-6" />}
                title="Social Media"
                text="Connect social audiences directly to WhatsApp."
              />

              <UseCase
                icon={<Zap className="h-6 w-6" />}
                title="Events"
                text="Help visitors connect with your business instantly."
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#075E54] px-4 py-24 sm:px-6 lg:px-8">

          <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#159447] opacity-30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-emerald-300 opacity-20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">

              <img
                src="/whatsware-logo.png"
                alt="WhatsWare"
                className="h-full w-full object-contain"
              />

            </div>

            <h2 className="mt-8 text-3xl font-black tracking-tight text-white sm:text-5xl">
              {content.ctaTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
              {content.ctaDescription}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#075E54] shadow-xl transition hover:-translate-y-1 hover:bg-[#F4FBF7]"
              >

                {content.create}

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

              </Link>

              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                {content.demo}
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
   QR HERO
   =========================================================

   IMPORTANT:
   Uses the SAME uploaded project QR image.
========================================================= */

function QRHero({ isTamil }: { isTamil: boolean }) {

  return (
    <div className="relative mx-auto w-full max-w-xl">

      <div className="absolute -inset-10 rounded-full bg-[#D9F8ED] opacity-80 blur-3xl" />

      <div className="relative mx-auto max-w-[440px]">

        <div className="relative rounded-[2.5rem] border border-[#D6E8DF] bg-white p-3 shadow-[0_40px_100px_-30px_rgba(12,75,52,0.45)]">

          <div className="overflow-hidden rounded-[2rem] bg-[#F5FAF7]">

            {/* HEADER */}

            <div className="flex items-center justify-between bg-[#075E54] px-6 py-5 text-white">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1">

                  <img
                    src="/whatsware-logo.png"
                    alt="WhatsWare"
                    className="h-full w-full object-contain"
                  />

                </div>

                <div>

                  <p className="text-xs text-white/60">
                    WhatsWare
                  </p>

                  <p className="font-black">
                    WhatsApp
                  </p>

                </div>

              </div>

              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold">
                CONNECT
              </span>

            </div>


            {/* QR CONTENT */}

            <div className="px-6 py-10 text-center">

              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447]">

                <ScanLine className="h-6 w-6" />

              </div>

              <h3 className="text-xl font-black text-[#12312C]">

                {isTamil
                  ? "Scan செய்து Chat செய்யுங்கள்"
                  : "Scan to chat with us"}

              </h3>

              <p className="mt-2 text-sm text-slate-500">

                {isTamil
                  ? "Camera-ஐ திறந்து QR Code-ஐ Scan செய்யுங்கள்"
                  : "Open your camera and scan the QR code"}

              </p>


              {/* =================================================
                  SAME UPLOADED QR IMAGE
              ================================================== */}

              <div className="relative mx-auto mt-7 w-fit">

                <div className="absolute -inset-5 animate-pulse rounded-3xl bg-[#D9F8ED] opacity-80 blur-xl" />

                <div className="relative rounded-3xl border border-[#DCEAE4] bg-white p-5 shadow-lg">

                  <img
                    src={PROJECT_QR_CODE}
                    alt="WhatsWare WhatsApp QR Code"
                    className="h-44 w-44 rounded-xl object-contain sm:h-48 sm:w-48"
                  />

                </div>

              </div>


              {/* STATUS */}

              <div className="mt-7 flex items-center justify-center gap-2">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9F8ED]">

                  <Check className="h-3.5 w-3.5 text-[#159447]" />

                </span>

                <span className="text-xs font-bold text-slate-600">

                  {isTamil
                    ? "Instant WhatsApp Connection"
                    : "Instant WhatsApp connection"}

                </span>

              </div>

            </div>


            {/* BOTTOM */}

            <div className="border-t border-slate-100 bg-white px-6 py-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[10px] text-slate-400">
                    Powered by
                  </p>

                  <p className="mt-1 text-sm font-black text-[#075E54]">
                    WhatsWare
                  </p>

                </div>

                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#D9F8ED] p-1">

                  <img
                    src="/whatsware-logo.png"
                    alt="WhatsWare"
                    className="h-full w-full object-contain"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* FLOATING CARD 1 */}

        <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#D9F8ED] p-1">

              <img
                src="/whatsware-logo.png"
                alt="WhatsWare"
                className="h-full w-full object-contain"
              />

            </div>

            <div>

              <p className="text-[9px] text-slate-400">
                Customer action
              </p>

              <p className="mt-1 text-xs font-black text-[#12312C]">
                QR scanned ✓
              </p>

            </div>

          </div>

        </div>


        {/* FLOATING CARD 2 */}

        <div className="absolute -right-5 top-12 hidden rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-2xl sm:block">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#075E54] p-1">

              <img
                src="/whatsware-logo.png"
                alt="WhatsWare"
                className="h-full w-full object-contain"
              />

            </div>

            <div>

              <p className="text-[9px] text-slate-400">
                Next step
              </p>

              <p className="mt-1 text-xs font-black text-[#12312C]">
                Start chatting
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   QR GENERATOR CARD
   =========================================================

   IMPORTANT:
   The QR preview uses the EXACT SAME uploaded QR image
   as the Hero section.

   The form is kept so your existing page design remains
   intact. The uploaded WhatsWare QR is the default preview.
========================================================= */

function QRGeneratorCard({ isTamil }: { isTamil: boolean }) {

  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState(
    "Hi! I would like to know more about your products."
  );

  const [qrUrl, setQrUrl] = useState(PROJECT_QR_CODE);

  const [generated, setGenerated] = useState(false);


  function generateQR() {

    const cleanPhone = phone.replace(/\D/g, "");

    if (!cleanPhone) {

      alert(
        isTamil
          ? "WhatsApp Number உள்ளிடுங்கள்."
          : "Please enter a WhatsApp number."
      );

      return;
    }

    const whatsappUrl =
      `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

    const generatedQR =
      `https://api.qrserver.com/v1/create-qr-code/?size=500x500&margin=10&data=${encodeURIComponent(
        whatsappUrl
      )}`;

    setQrUrl(generatedQR);

    setGenerated(true);
  }


  function resetQR() {

    setPhone("");

    setMessage(
      "Hi! I would like to know more about your products."
    );

    setQrUrl(PROJECT_QR_CODE);

    setGenerated(false);
  }


  return (
    <div className="relative">

      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#D9F8ED]/70 blur-3xl" />

      <div className="relative rounded-[2rem] border border-[#D6E8DF] bg-white p-5 shadow-[0_30px_80px_-30px_rgba(12,75,52,0.35)] sm:p-7">

        {/* Browser header */}

        <div className="flex items-center justify-between border-b border-slate-100 pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#D9F8ED] p-1">

              <img
                src="/whatsware-logo.png"
                alt="WhatsWare"
                className="h-full w-full object-contain"
              />

            </div>

            <div>

              <p className="text-sm font-black text-[#12312C]">
                WhatsApp QR Generator
              </p>

              <p className="mt-1 text-xs text-slate-400">

                {isTamil
                  ? "உங்கள் Business QR-ஐ உருவாக்குங்கள்"
                  : "Create your business QR"}

              </p>

            </div>

          </div>

          <div className="flex gap-1.5">

            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />

            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />

            <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

          </div>

        </div>


        <div className="grid gap-7 pt-7 sm:grid-cols-2">

          {/* =================================================
              FORM
          ================================================== */}

          <div>

            <label className="text-xs font-bold text-slate-500">
              WhatsApp Number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-[#F8FBF9] px-4 text-sm text-[#12312C] outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
            />


            <label className="mt-5 block text-xs font-bold text-slate-500">
              Message
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#F8FBF9] p-4 text-sm leading-6 text-slate-600 outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
            />


            {/* GENERATE */}

            <button
              type="button"
              onClick={generateQR}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#075E54] py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#064C44]"
            >

              <QrCode className="h-4 w-4" />

              {isTamil
                ? "QR உருவாக்குங்கள்"
                : "Generate QR"}

            </button>


            {generated && (

              <button
                type="button"
                onClick={resetQR}
                className="mt-2 w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-500 transition hover:border-[#159447] hover:text-[#159447]"
              >
                Reset QR
              </button>

            )}

          </div>


          {/* =================================================
              QR PREVIEW

              DEFAULT = SAME PROJECT QR IMAGE
          ================================================== */}

          <div className="flex flex-col items-center justify-center">

            <div className="relative rounded-2xl border border-[#DCEAE4] bg-white p-4 shadow-sm">

              <img
                src={qrUrl}
                alt="WhatsApp QR Code"
                className="h-44 w-44 rounded-xl object-contain"
              />

            </div>


            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#159447]">

              <CheckCircle2 className="h-4 w-4" />

              {generated
                ? isTamil
                  ? "உங்கள் QR உருவாக்கப்பட்டது"
                  : "Your QR is ready"
                : isTamil
                  ? "Share செய்ய தயாராக உள்ளது"
                  : "Ready to share"}

            </div>


            {generated && (

              <a
                href={qrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-full bg-[#159447] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#12833D]"
              >
                Open QR
              </a>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   STEP
========================================================= */

function Step({
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
    <div className="relative text-center">

      <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-white bg-[#D9F8ED] text-[#159447] shadow-lg">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
          {icon}
        </div>

      </div>


      <span className="mt-5 inline-flex rounded-full bg-[#075E54] px-3 py-1 text-[10px] font-black text-white">
        STEP {number}
      </span>


      <h3 className="mt-4 text-xl font-black text-[#12312C]">
        {title}
      </h3>


      <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   USE CASE
========================================================= */

function UseCase({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {

  return (
    <div className="group rounded-[1.5rem] border border-[#E1ECE7] bg-[#F8FBF9] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#BFEBDD] hover:bg-white hover:shadow-[0_25px_60px_-30px_rgba(21,148,71,0.4)]">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9F8ED] text-[#159447] transition group-hover:bg-[#159447] group-hover:text-white">
        {icon}
      </div>


      <h3 className="mt-6 text-lg font-black text-[#12312C]">
        {title}
      </h3>


      <p className="mt-3 text-sm leading-7 text-slate-500">
        {text}
      </p>


      <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#159447]">

        Explore use case

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

      </div>

    </div>
  );
}