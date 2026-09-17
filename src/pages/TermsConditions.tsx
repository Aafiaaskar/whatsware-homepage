import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Lock,
  Users,
  MessageCircle,
  CreditCard,
  Globe2,
  AlertTriangle,
  CheckCircle2,
  Mail,
  ChevronRight,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

type Section = {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
};

type ContactCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

function ContactCard({
  icon: Icon,
  title,
  description,
  href,
  external = false,
}: ContactCardProps) {
  const content = (
    <div className="group flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
}

export default function TermsConditions() {
  const { language } = useLanguage();

  const isTamil =
    String(language || "").toUpperCase() === "TA";

  /* =========================================================
     ENGLISH CONTENT
  ========================================================= */

  const englishSections: Section[] = [
    {
      id: "acceptance",
      title: "1. Acceptance of These Terms",
      icon: CheckCircle2,
      content: (
        <>
          <p>
            These Terms and Conditions govern your access to and use of
            the WhatsWare website, products, applications, platforms,
            integrations, and related services.
          </p>

          <p className="mt-4">
            By accessing or using WhatsWare, you agree to be bound by
            these Terms and Conditions. If you do not agree with these
            Terms, please do not use our services.
          </p>

          <p className="mt-4">
            If you are using WhatsWare on behalf of a company,
            organization, or other legal entity, you represent that you
            have the authority to bind that entity to these Terms.
          </p>
        </>
      ),
    },

    {
      id: "services",
      title: "2. WhatsWare Services",
      icon: Zap,
      content: (
        <>
          <p>
            WhatsWare provides business communication and customer
            engagement solutions, including WhatsApp automation,
            marketing tools, AI-powered agents, customer support tools,
            analytics, integrations, and related services.
          </p>

          <p className="mt-4">
            The features and functionality available to you may depend
            on the plan, subscription, configuration, integrations, and
            services selected by you.
          </p>

          <p className="mt-4">
            WhatsWare may modify, improve, suspend, or discontinue
            features from time to time where reasonably necessary for
            business, technical, security, or legal reasons.
          </p>
        </>
      ),
    },

    {
      id: "account",
      title: "3. Accounts and Registration",
      icon: Users,
      content: (
        <>
          <p>
            Certain WhatsWare services may require you to create an
            account.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "You must provide accurate and current information.",
              "You are responsible for maintaining the confidentiality of your account credentials.",
              "You are responsible for activity performed through your account.",
              "You must promptly notify us if you suspect unauthorized access.",
              "You must not share account credentials in a manner that creates unauthorized access.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },

    {
      id: "acceptable-use",
      title: "4. Acceptable Use",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            You agree to use WhatsWare only for lawful business
            purposes and in accordance with applicable laws, regulations,
            platform policies, and these Terms.
          </p>

          <p className="mt-4">
            You must not use WhatsWare to:
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Send unlawful, fraudulent, deceptive, abusive, threatening, or harmful communications.",
              "Send spam or unsolicited communications in violation of applicable laws or platform rules.",
              "Impersonate another person, company, or organization.",
              "Attempt to gain unauthorized access to WhatsWare or another user's account.",
              "Upload malicious code, malware, viruses, or harmful content.",
              "Interfere with the operation, security, or performance of our services.",
              "Collect or process personal information without an appropriate legal basis or permission.",
              "Use WhatsWare for activities prohibited by WhatsApp, Meta, or other connected platforms.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },

    {
      id: "whatsapp",
      title: "5. WhatsApp, Meta and Third-Party Platforms",
      icon: MessageCircle,
      content: (
        <>
          <p>
            WhatsWare may integrate with WhatsApp, Meta, and other
            third-party platforms.
          </p>

          <p className="mt-4">
            Your use of such platforms is also subject to the terms,
            policies, requirements, and restrictions imposed by those
            platforms.
          </p>

          <p className="mt-4">
            WhatsWare does not control third-party platforms and cannot
            guarantee their availability, functionality, policies, or
            continued operation.
          </p>

          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
            <div className="flex gap-3">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-green-600" />

              <div>
                <h4 className="font-semibold text-gray-900">
                  Your responsibility
                </h4>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  You are responsible for obtaining the necessary
                  permissions and ensuring that your use of WhatsWare
                  and connected platforms complies with applicable
                  laws and platform policies.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },

    {
      id: "content",
      title: "6. User Content and Data",
      icon: FileText,
      content: (
        <>
          <p>
            You may provide or upload information, messages, media,
            customer information, business data, documents, and other
            content while using WhatsWare.
          </p>

          <p className="mt-4">
            You retain ownership of content that you own, subject to the
            rights and permissions necessary for WhatsWare to provide
            the services.
          </p>

          <p className="mt-4">
            By using our services, you grant WhatsWare the limited
            rights necessary to host, process, transmit, display, and
            otherwise handle your content solely as reasonably required
            to provide, secure, maintain, and improve the services.
          </p>

          <p className="mt-4">
            You are responsible for ensuring that you have all required
            rights, permissions, and lawful bases for content and
            personal information submitted through WhatsWare.
          </p>
        </>
      ),
    },

    {
      id: "intellectual-property",
      title: "7. Intellectual Property",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            WhatsWare and its licensors retain all rights, title, and
            interest in the WhatsWare website, software, platform,
            branding, designs, documentation, technology, trademarks,
            and other intellectual property owned or licensed by
            WhatsWare.
          </p>

          <p className="mt-4">
            These Terms do not transfer ownership of WhatsWare
            intellectual property to you.
          </p>

          <p className="mt-4">
            You may not copy, modify, distribute, reverse engineer,
            reproduce, sell, lease, or create derivative works from
            WhatsWare services except where expressly permitted by law
            or by written authorization from WhatsWare.
          </p>
        </>
      ),
    },

    {
      id: "subscriptions",
      title: "8. Plans, Subscriptions and Payments",
      icon: CreditCard,
      content: (
        <>
          <p>
            Certain WhatsWare services may be offered through paid
            subscriptions, plans, packages, or custom commercial
            agreements.
          </p>

          <p className="mt-4">
            Pricing, features, billing periods, usage limits, and
            included services will depend on the plan or agreement
            selected.
          </p>

          <p className="mt-4">
            Unless otherwise agreed in writing, applicable fees must be
            paid according to the payment terms presented during
            purchase or agreed between the parties.
          </p>

          <p className="mt-4">
            Additional third-party charges may apply for services such
            as WhatsApp/Meta messaging, communication providers,
            payment processors, or external integrations.
          </p>
        </>
      ),
    },

    {
      id: "refunds",
      title: "9. Refunds and Cancellations",
      icon: CreditCard,
      content: (
        <>
          <p>
            Refund and cancellation terms may vary depending on the
            product, subscription, commercial agreement, or applicable
            offer.
          </p>

          <p className="mt-4">
            If a specific refund or cancellation policy applies to your
            purchase, that policy will govern where it conflicts with
            these general Terms.
          </p>

          <p className="mt-4">
            You may contact WhatsWare support regarding billing or
            cancellation questions.
          </p>
        </>
      ),
    },

    {
      id: "third-party",
      title: "10. Third-Party Services and Integrations",
      icon: Globe2,
      content: (
        <>
          <p>
            WhatsWare may provide integrations with third-party
            services such as CRM systems, payment providers,
            communication platforms, analytics tools, e-commerce
            platforms, and other software.
          </p>

          <p className="mt-4">
            Your use of third-party services is governed by the
            applicable third-party terms and privacy policies.
          </p>

          <p className="mt-4">
            WhatsWare is not responsible for failures, outages,
            changes, restrictions, data practices, or actions of
            third-party services outside our reasonable control.
          </p>
        </>
      ),
    },

    {
      id: "availability",
      title: "11. Service Availability",
      icon: Globe2,
      content: (
        <>
          <p>
            We aim to keep WhatsWare services available and reliable,
            but we do not guarantee uninterrupted or error-free
            operation.
          </p>

          <p className="mt-4">
            Services may occasionally be unavailable because of
            maintenance, upgrades, security measures, technical
            failures, internet connectivity, third-party services, or
            circumstances outside our reasonable control.
          </p>
        </>
      ),
    },

    {
      id: "security",
      title: "12. Security",
      icon: Lock,
      content: (
        <>
          <p>
            WhatsWare implements reasonable technical and organizational
            measures intended to protect our services and information.
          </p>

          <p className="mt-4">
            However, no internet-based system can be guaranteed to be
            completely secure.
          </p>

          <p className="mt-4">
            You are responsible for maintaining appropriate security
            practices for your account, devices, credentials, and
            integrations.
          </p>
        </>
      ),
    },

    {
      id: "suspension",
      title: "13. Suspension and Termination",
      icon: AlertTriangle,
      content: (
        <>
          <p>
            WhatsWare may suspend or terminate access to services where
            reasonably necessary, including if:
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "You violate these Terms.",
              "Your use creates a security or legal risk.",
              "You engage in fraudulent or abusive activity.",
              "Your account is used for prohibited communications.",
              "Payment obligations are not satisfied.",
              "Suspension is required by a third-party platform or applicable law.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5">
            Where reasonably practical, we may provide notice before
            suspension or termination, except where immediate action is
            required.
          </p>
        </>
      ),
    },

    {
      id: "disclaimer",
      title: "14. Disclaimer of Warranties",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law,
            WhatsWare services are provided on an "as available" and
            "as is" basis.
          </p>

          <p className="mt-4">
            We do not guarantee that the services will always be
            uninterrupted, completely secure, error-free, or suitable
            for every particular business requirement.
          </p>

          <p className="mt-4">
            You are responsible for evaluating whether WhatsWare is
            appropriate for your business needs.
          </p>
        </>
      ),
    },

    {
      id: "liability",
      title: "15. Limitation of Liability",
      icon: Lock,
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, WhatsWare
            and its officers, employees, affiliates, partners, and
            service providers will not be liable for indirect,
            incidental, special, consequential, or punitive damages
            arising from or related to your use of the services.
          </p>

          <p className="mt-4">
            This may include loss of profits, revenue, business
            opportunities, data, goodwill, or other intangible losses,
            subject to applicable law.
          </p>

          <p className="mt-4">
            Nothing in these Terms is intended to exclude liability that
            cannot legally be excluded or limited under applicable law.
          </p>
        </>
      ),
    },

    {
      id: "indemnification",
      title: "16. Indemnification",
      icon: Users,
      content: (
        <>
          <p>
            To the extent permitted by applicable law, you agree to
            defend, indemnify, and hold harmless WhatsWare and its
            affiliates, officers, employees, and service providers from
            claims, losses, liabilities, damages, and expenses arising
            from:
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Your violation of these Terms.",
              "Your misuse of WhatsWare services.",
              "Your violation of applicable laws or third-party rights.",
              "Content or data submitted through your account.",
              "Your violation of WhatsApp, Meta, or other third-party platform policies.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },

    {
      id: "changes",
      title: "17. Changes to These Terms",
      icon: FileText,
      content: (
        <>
          <p>
            WhatsWare may update these Terms and Conditions from time to
            time to reflect changes in our services, technology,
            business practices, or legal requirements.
          </p>

          <p className="mt-4">
            Updated Terms will be published on this page with a revised
            "Last Updated" date.
          </p>

          <p className="mt-4">
            Your continued use of WhatsWare after updated Terms become
            effective may constitute acceptance of the updated Terms,
            to the extent permitted by applicable law.
          </p>
        </>
      ),
    },

    {
      id: "governing-law",
      title: "18. Governing Law",
      icon: Globe2,
      content: (
        <>
          <p>
            These Terms will be governed by and interpreted in
            accordance with the applicable laws of India, unless
            otherwise required by applicable law or agreed in a written
            commercial agreement.
          </p>

          <p className="mt-4">
            Any disputes will be subject to the jurisdiction of the
            courts or dispute-resolution mechanisms applicable to the
            WhatsWare legal entity and the relevant agreement.
          </p>
        </>
      ),
    },

    {
      id: "contact",
      title: "19. Contact Us",
      icon: Mail,
      content: (
        <>
          <p>
            If you have questions regarding these Terms and Conditions,
            billing, your account, or our services, please contact the
            WhatsWare team.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ContactCard
              icon={Mail}
              title="General Enquiries"
              description="Contact WhatsWare regarding our services, accounts, or these Terms."
              href="mailto:weofyindia@gmail.com"
              external
            />

            <ContactCard
              icon={MessageCircle}
              title="Contact WhatsWare"
              description="Speak with our team about your business requirements."
              href="/book-demo"
            />
          </div>
        </>
      ),
    },
  ];

  /* =========================================================
     TAMIL CONTENT
  ========================================================= */

  const tamilSections: Section[] = [
    {
      id: "acceptance",
      title: "1. இந்த விதிமுறைகளை ஏற்றுக்கொள்வது",
      icon: CheckCircle2,
      content: (
        <>
          <p>
            இந்த Terms and Conditions, WhatsWare website, products,
            applications, integrations மற்றும் தொடர்புடைய services-ஐ
            நீங்கள் பயன்படுத்துவதற்கான விதிமுறைகளை விளக்குகிறது.
          </p>

          <p className="mt-4">
            WhatsWare-ஐ பயன்படுத்துவதன் மூலம் இந்த விதிமுறைகளுக்கு
            நீங்கள் ஒப்புக்கொள்கிறீர்கள்.
          </p>
        </>
      ),
    },

    {
      id: "services",
      title: "2. WhatsWare சேவைகள்",
      icon: Zap,
      content: (
        <>
          <p>
            WhatsWare WhatsApp automation, marketing, AI agents,
            customer support, analytics, integrations மற்றும் business
            communication services போன்றவற்றை வழங்குகிறது.
          </p>

          <p className="mt-4">
            உங்கள் plan மற்றும் நீங்கள் தேர்ந்தெடுக்கும் services-ஐ
            பொறுத்து கிடைக்கும் features மாறுபடலாம்.
          </p>
        </>
      ),
    },

    {
      id: "account",
      title: "3. Account மற்றும் Registration",
      icon: Users,
      content: (
        <>
          <p>
            சில WhatsWare services-ஐ பயன்படுத்த account உருவாக்க
            வேண்டியிருக்கலாம்.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "நீங்கள் வழங்கும் தகவல்கள் சரியாகவும் தற்போதையதாகவும் இருக்க வேண்டும்.",
              "உங்கள் account credentials-ஐ பாதுகாப்பாக வைத்திருப்பது உங்கள் பொறுப்பு.",
              "உங்கள் account மூலம் நடைபெறும் activity-க்கு நீங்கள் பொறுப்பானவர்.",
              "Unauthorized access இருப்பதாக சந்தேகித்தால் உடனடியாக எங்களுக்கு தெரிவிக்க வேண்டும்.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },

    {
      id: "acceptable-use",
      title: "4. ஏற்றுக்கொள்ளக்கூடிய பயன்பாடு",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            WhatsWare-ஐ சட்டப்பூர்வமான business purposes-க்காகவும்,
            applicable laws மற்றும் platform policies-க்கு
            இணங்கவும் பயன்படுத்த வேண்டும்.
          </p>

          <p className="mt-4">
            WhatsWare-ஐ spam, fraud, harmful communications,
            unauthorized access, malware அல்லது சட்டவிரோத செயல்களுக்கு
            பயன்படுத்தக்கூடாது.
          </p>
        </>
      ),
    },

    {
      id: "whatsapp",
      title: "5. WhatsApp, Meta மற்றும் Third-Party Platforms",
      icon: MessageCircle,
      content: (
        <>
          <p>
            WhatsWare WhatsApp, Meta மற்றும் பிற third-party platforms
            உடன் integrations வழங்கலாம்.
          </p>

          <p className="mt-4">
            அந்த platforms-ன் terms, policies மற்றும் requirements-ஐ
            நீங்கள் பின்பற்ற வேண்டும்.
          </p>

          <p className="mt-4">
            Third-party platform-களின் availability அல்லது policies-ஐ
            WhatsWare கட்டுப்படுத்தாது.
          </p>
        </>
      ),
    },

    {
      id: "content",
      title: "6. User Content மற்றும் Data",
      icon: FileText,
      content: (
        <>
          <p>
            நீங்கள் WhatsWare மூலம் messages, media, customer data,
            documents மற்றும் பிற content-ஐ வழங்கலாம்.
          </p>

          <p className="mt-4">
            நீங்கள் வழங்கும் content-க்கு தேவையான rights மற்றும்
            permissions உங்களிடம் இருப்பதை உறுதி செய்வது உங்கள்
            பொறுப்பு.
          </p>
        </>
      ),
    },

    {
      id: "intellectual-property",
      title: "7. Intellectual Property",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            WhatsWare website, software, branding, designs,
            documentation மற்றும் technology தொடர்பான intellectual
            property உரிமைகள் WhatsWare அல்லது அதன் licensors-க்கு
            சொந்தமானவை.
          </p>

          <p className="mt-4">
            இந்த Terms மூலம் WhatsWare intellectual property ownership
            உங்களுக்கு மாற்றப்படுவதில்லை.
          </p>
        </>
      ),
    },

    {
      id: "subscriptions",
      title: "8. Plans, Subscriptions மற்றும் Payments",
      icon: CreditCard,
      content: (
        <>
          <p>
            சில WhatsWare services paid plans அல்லது subscriptions
            மூலம் வழங்கப்படலாம்.
          </p>

          <p className="mt-4">
            Pricing, billing period, features மற்றும் usage limits
            நீங்கள் தேர்ந்தெடுக்கும் plan-ஐ பொறுத்தது.
          </p>

          <p className="mt-4">
            WhatsApp/Meta messaging அல்லது பிற third-party services
            தொடர்பான கூடுதல் charges இருக்கலாம்.
          </p>
        </>
      ),
    },

    {
      id: "refunds",
      title: "9. Refunds மற்றும் Cancellations",
      icon: CreditCard,
      content: (
        <>
          <p>
            Refund மற்றும் cancellation terms product, plan அல்லது
            commercial agreement-ஐ பொறுத்து மாறுபடலாம்.
          </p>

          <p className="mt-4">
            உங்கள் purchase-க்கு தனிப்பட்ட refund policy இருந்தால்
            அந்த policy பொருந்தும்.
          </p>
        </>
      ),
    },

    {
      id: "third-party",
      title: "10. Third-Party Services மற்றும் Integrations",
      icon: Globe2,
      content: (
        <>
          <p>
            WhatsWare CRM, payment providers, communication platforms,
            analytics tools மற்றும் பிற software-களுடன் integrations
            வழங்கலாம்.
          </p>

          <p className="mt-4">
            Third-party services அவற்றின் சொந்த terms மற்றும் privacy
            policies-க்கு உட்பட்டவை.
          </p>
        </>
      ),
    },

    {
      id: "availability",
      title: "11. Service Availability",
      icon: Globe2,
      content: (
        <>
          <p>
            WhatsWare services தொடர்ந்து கிடைக்கும்படி முயற்சி
            செய்கிறோம். ஆனால் uninterrupted அல்லது error-free service-ஐ
            உறுதி செய்ய முடியாது.
          </p>
        </>
      ),
    },

    {
      id: "security",
      title: "12. Security",
      icon: Lock,
      content: (
        <>
          <p>
            உங்கள் தகவல்கள் மற்றும் services-ஐ பாதுகாக்க reasonable
            security measures பயன்படுத்துகிறோம்.
          </p>

          <p className="mt-4">
            இருப்பினும் எந்த internet-based system-ம் முழுமையாக
            பாதுகாப்பானது என்று உறுதி செய்ய முடியாது.
          </p>
        </>
      ),
    },

    {
      id: "suspension",
      title: "13. Suspension மற்றும் Termination",
      icon: AlertTriangle,
      content: (
        <>
          <p>
            இந்த Terms-ஐ மீறுதல், fraud, security risk, prohibited
            communications அல்லது payment issues போன்ற காரணங்களால்
            WhatsWare account-ஐ suspend அல்லது terminate செய்யலாம்.
          </p>
        </>
      ),
    },

    {
      id: "disclaimer",
      title: "14. Disclaimer",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            பொருந்தக்கூடிய சட்டத்தால் அனுமதிக்கப்படும் அளவிற்கு,
            WhatsWare services "as available" மற்றும் "as is" அடிப்படையில்
            வழங்கப்படுகின்றன.
          </p>
        </>
      ),
    },

    {
      id: "liability",
      title: "15. Limitation of Liability",
      icon: Lock,
      content: (
        <>
          <p>
            பொருந்தக்கூடிய சட்டத்தால் அனுமதிக்கப்படும் அளவிற்கு,
            WhatsWare-ஐ பயன்படுத்துவதால் ஏற்படும் indirect அல்லது
            consequential losses-க்கு WhatsWare பொறுப்பாகாது.
          </p>
        </>
      ),
    },

    {
      id: "indemnification",
      title: "16. Indemnification",
      icon: Users,
      content: (
        <>
          <p>
            உங்கள் Terms violation, misuse, unlawful activity அல்லது
            third-party rights violation காரணமாக ஏற்படும் claims மற்றும்
            losses-க்கு பொருந்தக்கூடிய சட்டத்தின் கீழ் நீங்கள்
            WhatsWare-ஐ பாதுகாக்கவும் indemnify செய்யவும் ஒப்புக்கொள்கிறீர்கள்.
          </p>
        </>
      ),
    },

    {
      id: "changes",
      title: "17. இந்த Terms-ல் மாற்றங்கள்",
      icon: FileText,
      content: (
        <>
          <p>
            Services, technology, business practices அல்லது legal
            requirements மாறும்போது இந்த Terms புதுப்பிக்கப்படலாம்.
          </p>

          <p className="mt-4">
            Updated Terms இந்த page-ல் வெளியிடப்படும்.
          </p>
        </>
      ),
    },

    {
      id: "governing-law",
      title: "18. Governing Law",
      icon: Globe2,
      content: (
        <>
          <p>
            இந்த Terms இந்தியாவின் பொருந்தக்கூடிய சட்டங்களின்படி
            நிர்வகிக்கப்படும், applicable law அல்லது written agreement
            வேறுவிதமாகக் குறிப்பிடாத வரை.
          </p>
        </>
      ),
    },

    {
      id: "contact",
      title: "19. எங்களைத் தொடர்பு கொள்ளுங்கள்",
      icon: Mail,
      content: (
        <>
          <p>
            இந்த Terms, billing, account அல்லது WhatsWare services
            தொடர்பாக கேள்விகள் இருந்தால் எங்களைத் தொடர்பு கொள்ளலாம்.
          </p>

          <div className="mt-6">
            <ContactCard
              icon={Mail}
              title="General Enquiries"
              description="WhatsWare services மற்றும் Terms தொடர்பான கேள்விகளுக்கு."
              href="mailto:weofyindia@gmail.com"
              external
            />
          </div>
        </>
      ),
    },
  ];

  const sections = isTamil
    ? tamilSections
    : englishSections;

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-gray-900">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-[#f4fff8] via-[#fffdf5] to-white">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-green-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >

            {/* =================================================
                WHATSWARE LOGO
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-7 flex justify-center"
            >
              <div className="rounded-2xl border border-emerald-100 bg-white px-6 py-4 shadow-md shadow-emerald-100/40">
                <img
                  src="/whatsware-logo.png"
                  alt="WhatsWare"
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </div>
            </motion.div>

            {/* =================================================
                LEGAL BADGE
            ================================================= */}

            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
              <FileText className="h-4 w-4" />
              WhatsWare Legal
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              {isTamil
                ? "விதிமுறைகள் மற்றும் நிபந்தனைகள்"
                : "Terms & Conditions"}
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              {isTamil
                ? "WhatsWare சேவைகளைப் பயன்படுத்துவதற்கான விதிமுறைகள் மற்றும் நிபந்தனைகள்."
                : "Please read these terms carefully before using WhatsWare products, services, and platforms."}
            </p>

            {/* =================================================
                LAST UPDATED
            ================================================= */}

            <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              <FileText className="h-4 w-4" />

              {isTamil
                ? "கடைசியாக புதுப்பிக்கப்பட்டது: செப்டம்பர் 2026"
                : "Last Updated: September 2026"}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">

              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-600">
                {isTamil ? "உள்ளடக்கம்" : "On this page"}
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm leading-5 text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div className="min-w-0">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8 lg:p-12">

              {/* =================================================
                  INTRO
              ================================================= */}

              <div className="mb-10 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-emerald-600" />

                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {isTamil
                        ? "WhatsWare சேவைகளைப் பயன்படுத்துவதற்கு முன் படிக்கவும்"
                        : "Please read these Terms carefully"}
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {isTamil
                        ? "இந்த Terms, WhatsWare சேவைகளை நீங்கள் பயன்படுத்தும் போது உங்களுக்கும் WhatsWare-க்கும் பொருந்தும் முக்கிய விதிகளை விளக்குகிறது."
                        : "These Terms explain the rules and responsibilities that apply when you access or use WhatsWare services."}
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  SECTIONS
              ================================================= */}

              <div className="space-y-14">
                {sections.map((section, index) => {
                  const Icon = section.icon;

                  return (
                    <motion.section
                      key={section.id}
                      id={section.id}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: Math.min(
                          index * 0.02,
                          0.15
                        ),
                      }}
                      className="scroll-mt-28"
                    >
                      <div className="mb-5 flex items-start gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h2 className="text-xl font-bold leading-tight text-gray-950 sm:text-2xl">
                            {section.title}
                          </h2>

                          <div className="mt-3 h-1 w-12 rounded-full bg-emerald-500" />
                        </div>
                      </div>

                      <div className="text-[15px] leading-8 text-gray-600 sm:pl-[60px]">
                        {section.content}
                      </div>
                    </motion.section>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mt-10 overflow-hidden rounded-3xl bg-[#075E54] p-8 text-white shadow-xl sm:p-10"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-200">
                    <ShieldCheck className="h-4 w-4" />
                    WhatsWare
                  </div>

                  <h2 className="text-2xl font-bold sm:text-3xl">
                    {isTamil
                      ? "எங்கள் Terms குறித்து கேள்விகள் உள்ளதா?"
                      : "Have questions about our Terms?"}
                  </h2>

                  <p className="mt-3 max-w-xl leading-7 text-emerald-50/80">
                    {isTamil
                      ? "எங்கள் குழுவைத் தொடர்பு கொள்ளுங்கள். உங்கள் கேள்விகளுக்கு உதவுவதில் நாங்கள் மகிழ்ச்சியடைவோம்."
                      : "If you have questions about these Terms or our services, our team is here to help."}
                  </p>
                </div>

                <Link
                  href="/book-demo"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#075E54] shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50"
                >
                  {isTamil
                    ? "எங்களைத் தொடர்பு கொள்ளுங்கள்"
                    : "Contact Us"}

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* =================================================
                CONTACT
            ================================================= */}

            <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm sm:flex-row sm:text-left">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {isTamil
                    ? "தொடர்பு கொள்ள:"
                    : "Contact:"}
                </p>

                <a
                  href="mailto:weofyindia@gmail.com"
                  className="font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  weofyindia@gmail.com
                </a>
              </div>
            </div>

            {/* =================================================
                LEGAL DISCLAIMER
            ================================================= */}

            <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
              <strong>
                {isTamil
                  ? "முக்கிய குறிப்பு:"
                  : "Important note:"}
              </strong>{" "}

              {isTamil
                ? "இந்த Terms and Conditions ஒரு website-ready draft ஆகும். உங்கள் நிறுவனத்தின் உண்மையான legal entity, pricing, refund policy, applicable laws மற்றும் business practices ஆகியவற்றுக்கு ஏற்ப இறுதி பதிப்பை வெளியிடுவதற்கு முன் சட்ட ஆலோசகரால் மதிப்பாய்வு செய்ய பரிந்துரைக்கப்படுகிறது."
                : "This Terms and Conditions page is a website-ready draft. Before publishing, you should have the final version reviewed by appropriate legal counsel and update the legal entity, pricing, refund policy, applicable laws, and business practices to accurately reflect your company."}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}