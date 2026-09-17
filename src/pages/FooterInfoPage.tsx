import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Users,
  MessageCircle,
  CreditCard,
  Ban,
  Scale,
  RefreshCw,
  Mail,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   TYPES
========================================================= */

type Section = {
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
};

type PageData = {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  sections: Section[];
};

/* =========================================================
   TERMS & CONDITIONS CONTENT
========================================================= */

const termsSections: Section[] = [
  {
    title: "1. Acceptance of Terms",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          Welcome to WhatsWare. These Terms & Conditions govern your access
          to and use of the WhatsWare website, platform, products, services,
          applications, and related features.
        </p>

        <p>
          By accessing or using WhatsWare, you agree to be bound by these
          Terms & Conditions. If you do not agree with any part of these
          terms, please do not use our services.
        </p>

        <p>
          If you are using WhatsWare on behalf of a company or organization,
          you represent that you have the authority to accept these terms on
          its behalf.
        </p>
      </>
    ),
  },

  {
    title: "2. Description of Services",
    icon: MessageCircle,
    content: (
      <>
        <p>
          WhatsWare provides business communication and automation solutions
          designed to help businesses manage customer conversations and
          engagement through WhatsApp and other supported channels.
        </p>

        <p>Our services may include features such as:</p>

        <ul>
          <li>WhatsApp business communication tools</li>
          <li>WhatsApp automation</li>
          <li>AI-powered agents and chatbots</li>
          <li>Lead capture and qualification</li>
          <li>Broadcast and campaign management</li>
          <li>Automated follow-ups</li>
          <li>Customer support tools</li>
          <li>Team inbox and conversation management</li>
          <li>Analytics and reporting</li>
          <li>Integrations with third-party services</li>
        </ul>

        <p>
          Features may be added, modified, suspended, or discontinued from
          time to time as WhatsWare evolves its platform.
        </p>
      </>
    ),
  },

  {
    title: "3. Eligibility and Account Registration",
    icon: Users,
    content: (
      <>
        <p>
          You must provide accurate and complete information when creating or
          using a WhatsWare account.
        </p>

        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities performed through your
          account.
        </p>

        <p>
          You agree to notify WhatsWare promptly if you become aware of
          unauthorized access, suspicious activity, or any security issue
          involving your account.
        </p>

        <p>
          WhatsWare may suspend or restrict an account if we reasonably
          believe that it has been used in violation of these Terms,
          applicable law, or third-party platform requirements.
        </p>
      </>
    ),
  },

  {
    title: "4. Acceptable Use",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          You agree to use WhatsWare only for lawful business and
          communication purposes.
        </p>

        <p>You must not use the platform to:</p>

        <ul>
          <li>Send unlawful, fraudulent, misleading, or deceptive content.</li>
          <li>Send spam or unwanted communications.</li>
          <li>Harass, threaten, abuse, or harm another person.</li>
          <li>Distribute malicious software or harmful code.</li>
          <li>Attempt to gain unauthorized access to systems or accounts.</li>
          <li>Impersonate another person, company, or organization.</li>
          <li>Violate intellectual property or privacy rights.</li>
          <li>Use the platform for illegal activities.</li>
          <li>Attempt to bypass platform security or usage restrictions.</li>
        </ul>

        <p>
          You are solely responsible for the messages, campaigns, data, and
          other content you submit or distribute through WhatsWare.
        </p>
      </>
    ),
  },

  {
    title: "5. WhatsApp and Third-Party Platforms",
    icon: MessageCircle,
    content: (
      <>
        <p>
          WhatsWare may rely on WhatsApp, Meta, and other third-party
          platforms or APIs to provide certain functionality.
        </p>

        <p>
          Your use of WhatsApp-related features is also subject to the
          applicable terms, policies, and requirements of WhatsApp and Meta.
        </p>

        <p>
          WhatsWare does not control third-party platforms and cannot
          guarantee their continued availability, functionality, pricing,
          policies, or services.
        </p>

        <p>
          If a third-party provider changes, limits, suspends, or terminates
          an API or service, certain WhatsWare functionality may also become
          unavailable or require modification.
        </p>
      </>
    ),
  },

  {
    title: "6. Messaging and Customer Consent",
    icon: AlertCircle,
    content: (
      <>
        <p>
          You are responsible for obtaining all required permissions,
          consents, and lawful bases before sending messages to customers or
          other recipients through WhatsWare.
        </p>

        <p>
          You must comply with applicable communication, privacy,
          advertising, consumer-protection, and anti-spam laws.
        </p>

        <p>
          You must also respect applicable WhatsApp and Meta messaging
          policies, including requirements relating to customer opt-ins,
          message templates, and prohibited content.
        </p>

        <p>
          WhatsWare is not responsible for consequences arising from
          messages sent by you or your users in violation of applicable laws,
          policies, or customer permissions.
        </p>
      </>
    ),
  },

  {
    title: "7. Subscriptions, Fees and Payments",
    icon: CreditCard,
    content: (
      <>
        <p>
          Certain WhatsWare services may require payment of subscription
          fees, setup fees, usage charges, or other applicable charges.
        </p>

        <p>
          Pricing and plan details presented on the WhatsWare website may
          change from time to time.
        </p>

        <p>
          Where a paid subscription applies, you agree to provide accurate
          billing information and authorize applicable charges according to
          your selected plan or agreement.
        </p>

        <p>
          Third-party charges, including charges from Meta, WhatsApp,
          payment providers, communication providers, or other external
          services, may apply separately where applicable.
        </p>

        <p>
          Unless otherwise stated in a written agreement, fees already
          incurred may not be refundable.
        </p>
      </>
    ),
  },

  {
    title: "8. Intellectual Property",
    icon: FileText,
    content: (
      <>
        <p>
          WhatsWare and its licensors retain all rights, title, and interest
          in the WhatsWare platform, software, website, branding, designs,
          logos, content, documentation, and related intellectual property.
        </p>

        <p>
          These Terms do not transfer ownership of WhatsWare intellectual
          property to you.
        </p>

        <p>
          You receive only the limited rights necessary to access and use
          the services according to these Terms and any applicable service
          agreement.
        </p>

        <p>
          You may not copy, reproduce, modify, distribute, sell, reverse
          engineer, or create derivative works from WhatsWare services
          except where expressly permitted by law or by WhatsWare in
          writing.
        </p>
      </>
    ),
  },

  {
    title: "9. Your Content and Data",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          You retain ownership of content and business data that you submit
          to WhatsWare, subject to the rights necessary for WhatsWare to
          provide the services.
        </p>

        <p>
          By using the platform, you grant WhatsWare the limited permission
          necessary to host, process, transmit, display, and otherwise handle
          your content for the purpose of providing and improving the
          services.
        </p>

        <p>
          You are responsible for ensuring that you have the necessary
          rights and permissions to provide such content and data to
          WhatsWare.
        </p>

        <p>
          Our handling of personal information is also described in the
          WhatsWare Privacy Policy.
        </p>

        <Link
          href="/privacy-policy"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-[#159447] hover:underline"
        >
          Read our Privacy Policy
          <ArrowRight className="h-4 w-4" />
        </Link>
      </>
    ),
  },

  {
    title: "10. Prohibited Activities",
    icon: Ban,
    content: (
      <>
        <p>
          In addition to the acceptable-use requirements above, you may not
          use WhatsWare to:
        </p>

        <ul>
          <li>Attempt to disrupt or overload the platform.</li>
          <li>Scan or test the platform for vulnerabilities without authorization.</li>
          <li>Access another user's account without permission.</li>
          <li>Collect information through unauthorized automated methods.</li>
          <li>Circumvent technical restrictions or security mechanisms.</li>
          <li>Use WhatsWare to facilitate illegal or fraudulent activity.</li>
          <li>Resell or sublicense services without authorization.</li>
          <li>Interfere with the normal operation of the platform.</li>
        </ul>

        <p>
          WhatsWare may take appropriate action where prohibited activity is
          detected or reasonably suspected.
        </p>
      </>
    ),
  },

  {
    title: "11. Service Availability",
    icon: RefreshCw,
    content: (
      <>
        <p>
          We aim to provide a reliable and secure service, but WhatsWare
          cannot guarantee that the platform will always be available,
          uninterrupted, error-free, or completely secure.
        </p>

        <p>
          Service availability may be affected by maintenance, upgrades,
          technical failures, internet connectivity, third-party services,
          API changes, or circumstances outside our reasonable control.
        </p>

        <p>
          We may temporarily suspend portions of the service when reasonably
          necessary for maintenance, security, upgrades, or other operational
          reasons.
        </p>
      </>
    ),
  },

  {
    title: "12. Suspension and Termination",
    icon: Ban,
    content: (
      <>
        <p>
          You may stop using WhatsWare at any time, subject to any applicable
          subscription or contractual obligations.
        </p>

        <p>
          WhatsWare may suspend or terminate access where we reasonably
          believe that:
        </p>

        <ul>
          <li>You have violated these Terms.</li>
          <li>Your activity creates a security or legal risk.</li>
          <li>Your account is being used for prohibited activity.</li>
          <li>Required third-party services are no longer available.</li>
          <li>Suspension is necessary to protect WhatsWare or its users.</li>
        </ul>

        <p>
          Following termination, certain provisions that by their nature
          should survive termination may continue to apply.
        </p>
      </>
    ),
  },

  {
    title: "13. Disclaimers",
    icon: AlertCircle,
    content: (
      <>
        <p>
          WhatsWare services are provided on an availability basis and,
          except where expressly stated in a written agreement, without
          warranties of any kind to the maximum extent permitted by
          applicable law.
        </p>

        <p>
          We do not guarantee that using WhatsWare will produce a specific
          number of leads, sales, customers, conversions, revenue, or other
          business results.
        </p>

        <p>
          Business outcomes depend on factors including your products,
          services, campaigns, audience, messaging, customer demand,
          platform policies, and other circumstances outside WhatsWare's
          control.
        </p>
      </>
    ),
  },

  {
    title: "14. Limitation of Liability",
    icon: Scale,
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, WhatsWare and
          its affiliates, officers, employees, partners, and service
          providers will not be liable for indirect, incidental, special,
          consequential, or punitive damages arising from your use of or
          inability to use the services.
        </p>

        <p>
          This may include loss of profits, revenue, business opportunities,
          data, goodwill, or anticipated savings.
        </p>

        <p>
          Nothing in these Terms is intended to exclude or limit liability
          that cannot legally be excluded or limited under applicable law.
        </p>
      </>
    ),
  },

  {
    title: "15. Indemnification",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          To the extent permitted by applicable law, you agree to defend,
          indemnify, and hold harmless WhatsWare and its affiliates,
          officers, employees, and service providers from claims,
          liabilities, damages, losses, and expenses arising from:
        </p>

        <ul>
          <li>Your use or misuse of the services.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of applicable law or third-party rights.</li>
          <li>Content or communications submitted through your account.</li>
        </ul>
      </>
    ),
  },

  {
    title: "16. Changes to These Terms",
    icon: RefreshCw,
    content: (
      <>
        <p>
          WhatsWare may update these Terms & Conditions from time to time to
          reflect changes in our services, business practices, legal
          requirements, or technology.
        </p>

        <p>
          When material changes are made, we may provide an appropriate
          notice through the website, platform, email, or another reasonable
          method.
        </p>

        <p>
          Your continued use of WhatsWare after updated Terms become
          effective constitutes acceptance of the revised Terms, to the
          extent permitted by applicable law.
        </p>
      </>
    ),
  },

  {
    title: "17. Governing Law",
    icon: Scale,
    content: (
      <>
        <p>
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the applicable laws of India, unless a separate
          written agreement with you specifies otherwise.
        </p>

        <p>
          Any disputes will be subject to the jurisdiction of the courts
          having appropriate jurisdiction under applicable law.
        </p>
      </>
    ),
  },

  {
    title: "18. Contact Us",
    icon: Mail,
    content: (
      <>
        <p>
          If you have questions about these Terms & Conditions, please
          contact WhatsWare.
        </p>

        <div className="mt-6 rounded-2xl border border-[#DFF7D8] bg-[#F4FFF8] p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#159447] shadow-sm">
              <Mail className="h-5 w-5" />
            </div>

            <div>
              <p className="font-bold text-[#071B35]">WhatsWare</p>

              <a
                href="mailto:privacy@whatsware.in"
                className="mt-1 inline-block text-[#159447] hover:underline"
              >
                privacy@whatsware.in
              </a>

              <p className="mt-2 text-sm text-gray-600">
                Please verify that this email address matches your official
                WhatsWare contact before publishing the policy.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

/* =========================================================
   PAGE DATA
========================================================= */

const pageData: Record<string, PageData> = {
  "/terms-conditions": {
    title: "Terms & Conditions",
    subtitle: "Terms governing your use of WhatsWare",
    badge: "LEGAL INFORMATION",
    description:
      "These Terms & Conditions explain the rules, responsibilities, and conditions that apply when you access or use WhatsWare services.",
    sections: termsSections,
  },

  "/privacy-policy": {
    title: "Privacy Policy",
    subtitle: "How WhatsWare handles information",
    badge: "LEGAL INFORMATION",
    description:
      "This page explains how information may be collected, used, protected, and handled when you interact with WhatsWare.",
    sections: [
      {
        title: "Privacy Policy",
        icon: ShieldCheck,
        content: (
          <>
            <p>
              Please visit the dedicated WhatsWare Privacy Policy page for
              complete information about our privacy practices.
            </p>

            <Link
              href="/privacy-policy"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#159447] px-6 py-3 font-semibold text-white transition hover:bg-[#0e7c39]"
            >
              View Privacy Policy
              <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        ),
      },
    ],
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function FooterInfoPage() {
  const [location] = useLocation();
  const { isTamil } = useLanguage();

  const currentPath = location.split("?")[0];

  const data =
    pageData[currentPath] || pageData["/terms-conditions"];

  const isTermsPage = currentPath === "/terms-conditions";

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#071B35]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#DFF7D8] bg-gradient-to-br from-[#F4FFF8] via-white to-[#FFFDF5] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-120px] top-20 h-[350px] w-[350px] rounded-full bg-[#159447]/10 blur-[100px]" />

        <div className="pointer-events-none absolute right-[-100px] top-10 h-[400px] w-[400px] rounded-full bg-[#DFF7D8]/70 blur-[100px]" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute right-[12%] top-[20%] h-3 w-3 rounded-full bg-[#159447]/40" />
        <div className="pointer-events-none absolute right-[18%] top-[35%] h-2 w-2 rounded-full bg-[#159447]/30" />
        <div className="pointer-events-none absolute left-[15%] bottom-[20%] h-2 w-2 rounded-full bg-[#159447]/30" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#159447]/20 bg-white px-4 py-2 text-sm font-bold text-[#159447] shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              {data.badge}
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-[#071B35] sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>

            <p className="mt-5 text-xl font-semibold text-[#159447] sm:text-2xl">
              {data.subtitle}
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#526273] sm:text-lg">
              {data.description}
            </p>

            {/* Last updated */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-500 shadow-sm backdrop-blur">
              <FileText className="h-4 w-4 text-[#159447]" />
              Last updated: September 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr]">
          {/* =================================================
              SIDE NAV
          ================================================= */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#159447]">
                On this page
              </p>

              <div className="space-y-1">
                {data.sections.map((section, index) => {
                  const Icon = section.icon;

                  return (
                    <a
                      key={section.title}
                      href={`#terms-section-${index}`}
                      className="group flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-[#F4FFF8] hover:text-[#159447]"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="line-clamp-1">
                        {section.title.replace(/^\d+\.\s*/, "")}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="space-y-6">
            {data.sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.section
                  key={section.title}
                  id={`terms-section-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.025, 0.2),
                  }}
                  className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#159447]/20 hover:shadow-md sm:p-8"
                >
                  {/* Section header */}
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEFBE8] text-[#159447]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-xl font-bold leading-snug text-[#071B35] sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Section content */}
                  <div
                    className="
                      space-y-5
                      text-[15px]
                      leading-8
                      text-[#526273]
                      [&_p]:m-0
                      [&_ul]:my-0
                      [&_ul]:list-disc
                      [&_ul]:space-y-2
                      [&_ul]:pl-6
                      [&_li]:pl-1
                      [&_strong]:font-bold
                      [&_strong]:text-[#071B35]
                    "
                  >
                    {section.content}
                  </div>
                </motion.section>
              );
            })}

            {/* =================================================
                FINAL CTA
            ================================================= */}

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mt-10 overflow-hidden rounded-[2.5rem] bg-[#159447] p-8 text-white shadow-2xl shadow-[#159447]/20 sm:p-12"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#0e7c39]/40 blur-3xl" />

              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
                  {isTamil
                    ? isTermsPage
                      ? "உங்கள் WhatsWare அனுபவத்தை பாதுகாப்பாக தொடங்குங்கள்"
                      : "WhatsWare உடன் பாதுகாப்பாக தொடங்குங்கள்"
                    : isTermsPage
                      ? "Use WhatsWare with confidence"
                      : "Your privacy matters to us"}
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
                  {isTamil
                    ? "WhatsWare-ஐப் பயன்படுத்துவதற்கு முன் இந்த தகவல்களை கவனமாகப் படிக்கவும்."
                    : "Please review this information carefully before using WhatsWare services."}
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/book-demo"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#159447] shadow-xl transition hover:scale-[1.02] hover:bg-gray-50"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
                  >
                    Back to Home
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}