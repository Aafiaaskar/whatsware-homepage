import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  Users,
  MessageCircle,
  Globe2,
  FileText,
  Mail,
  CheckCircle2,
  ChevronRight,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   TYPES
========================================================= */

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
  href?: string;
  external?: boolean;
};

/* =========================================================
   CONTACT CARD
========================================================= */

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

  if (href && external) {
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

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const isTamil =
    String(language || "").toUpperCase() === "TA";

  /* =======================================================
     ENGLISH CONTENT
  ======================================================= */

  const englishSections: Section[] = [
    {
      id: "scope",
      title: "1. Scope of This Privacy Policy",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            This Privacy Policy explains how WhatsWare collects, uses,
            stores, protects, and shares information when you visit our
            website, use our products and services, communicate with us,
            or otherwise interact with WhatsWare.
          </p>

          <p>
            WhatsWare provides business communication, WhatsApp
            automation, marketing, customer engagement, AI-powered
            conversational tools, integrations, and related services.
          </p>

          <p>
            By using our website or services, you acknowledge that you
            have read and understood this Privacy Policy.
          </p>
        </>
      ),
    },

    {
      id: "information",
      title: "2. Information We Collect",
      icon: Database,
      content: (
        <>
          <p>
            Depending on how you interact with WhatsWare, we may collect
            the following categories of information:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Contact Information",
                text: "Name, business name, email address, phone number, job title, and other contact details.",
              },
              {
                title: "Account Information",
                text: "Login credentials, account preferences, workspace details, and information needed to provide our services.",
              },
              {
                title: "Business Information",
                text: "Company information, industry, business requirements, campaign details, and related information you provide.",
              },
              {
                title: "Communication Data",
                text: "Messages, enquiries, support requests, feedback, and other communications sent to us.",
              },
              {
                title: "Usage Information",
                text: "Pages visited, features used, interactions with our website, device information, and technical logs.",
              },
              {
                title: "Integration Information",
                text: "Information required to connect WhatsWare with third-party platforms and services that you choose to use.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-100 bg-gray-50 p-4"
              >
                <h4 className="font-semibold text-gray-900">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </>
      ),
    },

    {
      id: "collection",
      title: "3. How We Collect Information",
      icon: Users,
      content: (
        <>
          <p>
            We may collect information directly from you when you:
          </p>

          <ul className="mt-4 space-y-3">
            {[
              "Create or use a WhatsWare account.",
              "Submit a contact or demo request.",
              "Subscribe to communications from us.",
              "Contact our sales or support teams.",
              "Use WhatsWare products and features.",
              "Connect third-party platforms or integrations.",
              "Participate in surveys, campaigns, events, or other activities.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6">
            We may also automatically collect certain technical and
            usage information through cookies, analytics tools, server
            logs, and similar technologies.
          </p>
        </>
      ),
    },

    {
      id: "usage",
      title: "4. How We Use Information",
      icon: Zap,
      content: (
        <>
          <p>
            We use information collected through our website and
            services for legitimate business purposes, including:
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Providing, operating, and maintaining WhatsWare services.",
              "Creating and managing customer accounts.",
              "Processing demo, sales, and support requests.",
              "Personalizing and improving our products.",
              "Communicating with customers and prospects.",
              "Sending important service-related notifications.",
              "Providing customer support and troubleshooting.",
              "Understanding product usage and improving performance.",
              "Preventing fraud, abuse, unauthorized access, and security incidents.",
              "Complying with applicable laws and legal obligations.",
              "Developing new features, services, and business solutions.",
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
      id: "sharing",
      title: "5. How We Share Information",
      icon: Globe2,
      content: (
        <>
          <p>
            We do not sell your personal information as a standalone
            product.
          </p>

          <p className="mt-4">
            We may share information with trusted service providers,
            technology partners, and other third parties where necessary
            to provide and operate our services.
          </p>

          <div className="mt-5 space-y-4">
            {[
              {
                title: "Service Providers",
                text: "Hosting, cloud infrastructure, analytics, communication, customer support, security, payment, and other operational providers.",
              },
              {
                title: "Integrations",
                text: "Third-party services that you intentionally connect to your WhatsWare account.",
              },
              {
                title: "Legal Requirements",
                text: "Government authorities, regulators, courts, or other parties when disclosure is required by applicable law.",
              },
              {
                title: "Business Transactions",
                text: "Information may be transferred as part of a merger, acquisition, restructuring, financing, sale, or other business transaction.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5"
              >
                <h4 className="font-semibold text-gray-900">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </>
      ),
    },

    {
      id: "nonpersonal",
      title: "6. Non-Personal Information",
      icon: FileText,
      content: (
        <>
          <p>
            We may collect aggregated or anonymized information that
            does not directly identify an individual.
          </p>

          <p className="mt-4">
            This information may be used for analytics, reporting,
            service improvement, product development, performance
            measurement, and business planning.
          </p>

          <p className="mt-4">
            Where information has been properly anonymized, it may be
            used for legitimate business purposes without identifying
            individual users.
          </p>
        </>
      ),
    },

    {
      id: "whatsapp",
      title: "7. WhatsApp and Meta Platform Data",
      icon: MessageCircle,
      content: (
        <>
          <p>
            WhatsWare may provide functionality that works with
            WhatsApp, Meta, and other communication platforms.
          </p>

          <p className="mt-4">
            When you connect or use these platforms through WhatsWare,
            information may be processed in accordance with the
            permissions, configurations, and instructions you provide.
          </p>

          <p className="mt-4">
            We use such information only for purposes necessary to
            provide the requested functionality, operate the service,
            provide support, maintain security, and comply with
            applicable requirements.
          </p>

          <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-5">
            <div className="flex gap-3">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-green-600" />

              <div>
                <h4 className="font-semibold text-gray-900">
                  Platform permissions
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  You are responsible for ensuring that you have the
                  appropriate permissions and lawful basis to use and
                  process information obtained through connected
                  platforms and customer communications.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },

    {
      id: "cookies",
      title: "8. Cookies and Similar Technologies",
      icon: Cookie,
      content: (
        <>
          <p>
            WhatsWare may use cookies and similar technologies to
            operate our website, remember preferences, understand usage,
            improve performance, and support analytics.
          </p>

          <p className="mt-4">
            Cookies may include essential cookies, functionality
            cookies, analytics cookies, and other technologies used to
            improve the user experience.
          </p>

          <p className="mt-4">
            Depending on your browser and applicable requirements, you
            may be able to control or disable cookies through your
            browser settings.
          </p>
        </>
      ),
    },

    {
      id: "thirdparty",
      title: "9. Third-Party Services",
      icon: Globe2,
      content: (
        <>
          <p>
            Our website and services may contain links to or integrate
            with third-party websites, applications, platforms, and
            services.
          </p>

          <p className="mt-4">
            Third-party services operate under their own privacy
            policies and terms. WhatsWare is not responsible for the
            privacy practices of third-party services that we do not
            control.
          </p>

          <p className="mt-4">
            We encourage you to review the privacy policies of any
            third-party service before providing information to them.
          </p>
        </>
      ),
    },

    {
      id: "security",
      title: "10. Data Security",
      icon: Lock,
      content: (
        <>
          <p>
            WhatsWare takes reasonable technical and organizational
            measures to protect information against unauthorized access,
            loss, misuse, alteration, or disclosure.
          </p>

          <p className="mt-4">
            Security measures may include access controls,
            authentication, encryption where appropriate, monitoring,
            secure infrastructure, and internal security practices.
          </p>

          <p className="mt-4">
            However, no method of transmission or storage can be
            guaranteed to be completely secure. We therefore cannot
            guarantee absolute security of information.
          </p>
        </>
      ),
    },

    {
      id: "retention",
      title: "11. Data Retention",
      icon: Database,
      content: (
        <>
          <p>
            We retain personal information only for as long as
            reasonably necessary to provide our services, fulfill the
            purposes described in this Privacy Policy, maintain
            legitimate business records, resolve disputes, enforce
            agreements, and comply with legal obligations.
          </p>

          <p className="mt-4">
            Retention periods may vary depending on the type of
            information and the reason it was collected.
          </p>
        </>
      ),
    },

    {
      id: "rights",
      title: "12. Your Privacy Rights",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            Depending on applicable law, you may have rights relating
            to your personal information, including rights to:
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Request access to personal information we hold about you.",
              "Request correction of inaccurate or incomplete information.",
              "Request deletion of information where legally permitted.",
              "Object to or restrict certain processing.",
              "Withdraw consent where processing is based on consent.",
              "Request information about how your personal information is processed.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5">
            Requests may be subject to applicable legal limitations
            and verification requirements.
          </p>
        </>
      ),
    },

    {
      id: "deletion",
      title: "13. Data Deletion",
      icon: FileText,
      content: (
        <>
          <p>
            If you would like to request deletion of personal
            information associated with your WhatsWare account, please
            contact us using the details provided below.
          </p>

          <p className="mt-4">
            We may need to verify your identity before processing a
            deletion request.
          </p>

          <p className="mt-4">
            Some information may need to be retained where required by
            law, for legitimate business purposes, security, fraud
            prevention, dispute resolution, or enforcement of
            agreements.
          </p>
        </>
      ),
    },

    {
      id: "children",
      title: "14. Children's Privacy",
      icon: Users,
      content: (
        <>
          <p>
            WhatsWare's services are intended for businesses and users
            who are legally able to use them.
          </p>

          <p className="mt-4">
            We do not knowingly seek to collect personal information
            from children where prohibited by applicable law.
          </p>

          <p className="mt-4">
            If you believe that a child has provided personal
            information to us, please contact us so that we can review
            and take appropriate action.
          </p>
        </>
      ),
    },

    {
      id: "changes",
      title: "15. Changes to This Privacy Policy",
      icon: FileText,
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time to
            reflect changes to our services, technology, business
            practices, legal requirements, or other relevant factors.
          </p>

          <p className="mt-4">
            When we make changes, we may update the "Last Updated" date
            shown at the top of this page.
          </p>

          <p className="mt-4">
            We encourage you to periodically review this page for the
            latest information about our privacy practices.
          </p>
        </>
      ),
    },

    {
      id: "contact",
      title: "16. Contact Us",
      icon: Mail,
      content: (
        <>
          <p>
            If you have questions about this Privacy Policy, want to
            exercise an applicable privacy right, or have concerns
            regarding how your information is handled, please contact
            WhatsWare.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ContactCard
              icon={Mail}
              title="Privacy Enquiries"
              description="Contact our privacy team regarding privacy-related questions or requests."
              href="mailto:privacy@whatsware.in"
              external
            />

            <ContactCard
              icon={MessageCircle}
              title="General Support"
              description="Contact WhatsWare for product, account, or support-related enquiries."
              href="/book-demo"
            />
          </div>
        </>
      ),
    },
  ];

  /* =======================================================
     TAMIL CONTENT
  ======================================================= */

  const tamilSections: Section[] = [
    {
      id: "scope",
      title: "1. இந்த தனியுரிமைக் கொள்கையின் வரம்பு",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            நீங்கள் WhatsWare இணையதளத்தைப் பார்வையிடும்போது,
            எங்கள் தயாரிப்புகள் மற்றும் சேவைகளைப் பயன்படுத்தும்போது,
            எங்களைத் தொடர்புகொள்ளும்போது அல்லது WhatsWare உடன்
            தொடர்பு கொள்ளும்போது உங்கள் தகவல்கள் எவ்வாறு
            சேகரிக்கப்படுகின்றன, பயன்படுத்தப்படுகின்றன,
            சேமிக்கப்படுகின்றன மற்றும் பாதுகாக்கப்படுகின்றன என்பதை
            இந்த தனியுரிமைக் கொள்கை விளக்குகிறது.
          </p>

          <p className="mt-4">
            WhatsWare வணிக தொடர்பு, WhatsApp automation,
            marketing, customer engagement, AI conversational tools
            மற்றும் integrations போன்ற சேவைகளை வழங்குகிறது.
          </p>
        </>
      ),
    },

    {
      id: "information",
      title: "2. நாங்கள் சேகரிக்கும் தகவல்கள்",
      icon: Database,
      content: (
        <>
          <p>
            நீங்கள் எங்களுடன் தொடர்பு கொள்ளும் விதத்தைப் பொறுத்து,
            பின்வரும் தகவல்களை நாங்கள் சேகரிக்கலாம்:
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "பெயர், நிறுவனப் பெயர், மின்னஞ்சல் மற்றும் தொலைபேசி எண்.",
              "கணக்கு மற்றும் workspace தொடர்பான தகவல்கள்.",
              "வணிகம் மற்றும் தொழில் தொடர்பான தகவல்கள்.",
              "Support requests, enquiries மற்றும் communications.",
              "Website மற்றும் product usage தகவல்கள்.",
              "நீங்கள் இணைக்கும் third-party integrations தொடர்பான தகவல்கள்.",
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
      id: "collection",
      title: "3. தகவல்களை எவ்வாறு சேகரிக்கிறோம்",
      icon: Users,
      content: (
        <>
          <p>
            நீங்கள் account உருவாக்கும்போது, demo கோரும்போது,
            support-ஐ தொடர்பு கொள்ளும்போது அல்லது WhatsWare
            தயாரிப்புகளைப் பயன்படுத்தும்போது தகவல்களை நேரடியாக
            வழங்கலாம்.
          </p>

          <p className="mt-4">
            Cookies, analytics tools, server logs மற்றும் இதுபோன்ற
            தொழில்நுட்பங்களின் மூலம் சில technical information
            தானாகவே சேகரிக்கப்படலாம்.
          </p>
        </>
      ),
    },

    {
      id: "usage",
      title: "4. தகவல்களை எவ்வாறு பயன்படுத்துகிறோம்",
      icon: Zap,
      content: (
        <>
          <p>
            எங்கள் சேவைகளை வழங்கவும் மேம்படுத்தவும் தகவல்களை
            பயன்படுத்துகிறோம்.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "WhatsWare சேவைகளை வழங்குதல் மற்றும் பராமரித்தல்.",
              "Customer accounts நிர்வகித்தல்.",
              "Sales, demo மற்றும் support requests செயல்படுத்துதல்.",
              "Products மற்றும் features மேம்படுத்துதல்.",
              "Customers மற்றும் prospects உடன் தொடர்பு கொள்ளுதல்.",
              "Security மற்றும் fraud prevention.",
              "சட்டப்பூர்வ தேவைகளைப் பின்பற்றுதல்.",
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
      id: "sharing",
      title: "5. தகவல்களை எவ்வாறு பகிர்கிறோம்",
      icon: Globe2,
      content: (
        <>
          <p>
            உங்கள் தனிப்பட்ட தகவல்களை தனி பொருளாக விற்பனை செய்வதில்லை.
          </p>

          <p className="mt-4">
            சேவைகளை வழங்குவதற்குத் தேவையான trusted service providers,
            technology partners மற்றும் நீங்கள் இணைக்கும் third-party
            services உடன் தகவல்கள் பகிரப்படலாம்.
          </p>
        </>
      ),
    },

    {
      id: "whatsapp",
      title: "6. WhatsApp மற்றும் Meta Platform தகவல்கள்",
      icon: MessageCircle,
      content: (
        <>
          <p>
            WhatsWare, WhatsApp, Meta மற்றும் பிற communication
            platforms உடன் செயல்படும் features-ஐ வழங்கலாம்.
          </p>

          <p className="mt-4">
            நீங்கள் இணைக்கும் platforms மூலம் கிடைக்கும் தகவல்கள்,
            நீங்கள் வழங்கிய permissions மற்றும் instructions
            அடிப்படையில் செயல்படுத்தப்படும்.
          </p>
        </>
      ),
    },

    {
      id: "cookies",
      title: "7. Cookies",
      icon: Cookie,
      content: (
        <>
          <p>
            Website functionality, preferences, analytics மற்றும்
            user experience மேம்பாட்டிற்காக cookies பயன்படுத்தப்படலாம்.
          </p>

          <p className="mt-4">
            உங்கள் browser settings மூலம் cookies-ஐ கட்டுப்படுத்தவோ
            முடக்கவோ முடியும்.
          </p>
        </>
      ),
    },

    {
      id: "thirdparty",
      title: "8. Third-Party Services",
      icon: Globe2,
      content: (
        <>
          <p>
            எங்கள் website அல்லது services third-party websites,
            applications மற்றும் platforms உடன் இணைக்கப்பட்டிருக்கலாம்.
          </p>

          <p className="mt-4">
            அந்த third-party services தங்களுக்கென தனி privacy policies
            மற்றும் terms வைத்திருக்கலாம்.
          </p>
        </>
      ),
    },

    {
      id: "security",
      title: "9. Data Security",
      icon: Lock,
      content: (
        <>
          <p>
            உங்கள் தகவல்களை unauthorized access, loss, misuse மற்றும்
            disclosure ஆகியவற்றிலிருந்து பாதுகாக்க reasonable technical
            மற்றும் organizational measures பயன்படுத்துகிறோம்.
          </p>

          <p className="mt-4">
            இருப்பினும் எந்த ஒரு electronic transmission அல்லது storage
            முறையும் முழுமையாக பாதுகாப்பானது என்று உறுதி செய்ய முடியாது.
          </p>
        </>
      ),
    },

    {
      id: "retention",
      title: "10. Data Retention",
      icon: Database,
      content: (
        <>
          <p>
            சேவைகளை வழங்குவதற்கும், சட்டப்பூர்வ மற்றும் legitimate
            business purposes-க்கும் தேவையான காலத்திற்கு தகவல்கள்
            சேமிக்கப்படலாம்.
          </p>
        </>
      ),
    },

    {
      id: "rights",
      title: "11. உங்கள் Privacy Rights",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            பொருந்தக்கூடிய சட்டத்தின் அடிப்படையில், உங்கள் தனிப்பட்ட
            தகவல்களை அணுகுதல், திருத்துதல், நீக்குதல் அல்லது சில
            processing-ஐ எதிர்ப்பது போன்ற உரிமைகள் உங்களுக்கு இருக்கலாம்.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "தகவல்களை அணுக கோரலாம்.",
              "தவறான தகவல்களை திருத்த கோரலாம்.",
              "சட்டப்படி அனுமதிக்கப்பட்டால் தகவல்களை நீக்க கோரலாம்.",
              "சில processing-ஐ கட்டுப்படுத்த அல்லது எதிர்க்க கோரலாம்.",
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
      id: "deletion",
      title: "12. Data Deletion",
      icon: FileText,
      content: (
        <>
          <p>
            உங்கள் WhatsWare account தொடர்பான personal information-ஐ
            நீக்க கோர விரும்பினால், கீழே கொடுக்கப்பட்டுள்ள contact
            details மூலம் எங்களைத் தொடர்பு கொள்ளலாம்.
          </p>

          <p className="mt-4">
            கோரிக்கையை செயல்படுத்துவதற்கு முன் உங்கள் identity-ஐ
            verify செய்ய வேண்டியிருக்கலாம்.
          </p>
        </>
      ),
    },

    {
      id: "children",
      title: "13. Children's Privacy",
      icon: Users,
      content: (
        <>
          <p>
            WhatsWare சேவைகள் businesses மற்றும் அவற்றைப் பயன்படுத்த
            சட்டப்படி தகுதியுள்ள users-க்காக உருவாக்கப்பட்டுள்ளன.
          </p>

          <p className="mt-4">
            குழந்தைகளிடமிருந்து தனிப்பட்ட தகவல்களை தெரிந்தே சேகரிக்க
            முயற்சிப்பதில்லை.
          </p>
        </>
      ),
    },

    {
      id: "changes",
      title: "14. இந்த Privacy Policy-யில் மாற்றங்கள்",
      icon: FileText,
      content: (
        <>
          <p>
            எங்கள் services, technology, business practices அல்லது
            சட்ட தேவைகளில் மாற்றங்கள் ஏற்பட்டால் இந்த Privacy Policy
            புதுப்பிக்கப்படலாம்.
          </p>

          <p className="mt-4">
            மாற்றங்கள் செய்யப்பட்டால் "Last Updated" தேதி
            புதுப்பிக்கப்படும்.
          </p>
        </>
      ),
    },

    {
      id: "contact",
      title: "15. எங்களைத் தொடர்பு கொள்ளுங்கள்",
      icon: Mail,
      content: (
        <>
          <p>
            இந்த Privacy Policy குறித்து கேள்விகள் அல்லது privacy
            requests இருந்தால் WhatsWare-ஐ தொடர்பு கொள்ளலாம்.
          </p>

          <div className="mt-6">
            <ContactCard
              icon={Mail}
              title="Privacy Enquiries"
              description="Privacy தொடர்பான கேள்விகள் அல்லது requests."
              href="mailto:privacy@whatsware.in"
              external
            />
          </div>
        </>
      ),
    },
  ];

  const sections = isTamil ? tamilSections : englishSections;

  /* =======================================================
     RENDER
  ======================================================= */

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
            {/* WhatsWare Logo */}
            <div className="mb-7 flex justify-center">
              <div className="rounded-2xl border border-emerald-100 bg-white px-6 py-4 shadow-md shadow-emerald-100/40">
                <img
                  src="/whatsware-logo.png"
                  alt="WhatsWare"
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </div>
            </div>

            {/* Privacy Badge */}
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
                <ShieldCheck className="h-4 w-4" />
                WhatsWare Privacy
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              {isTamil
                ? "தனியுரிமைக் கொள்கை"
                : "Privacy Policy"}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              {isTamil
                ? "உங்கள் தகவல்களின் பாதுகாப்பு மற்றும் தனியுரிமையை WhatsWare முக்கியமாகக் கருதுகிறது."
                : "At WhatsWare, we respect your privacy and are committed to protecting the information you share with us."}
            </p>

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
              <div className="mb-10 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-emerald-600" />

                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {isTamil
                        ? "உங்கள் தனியுரிமை எங்களுக்கு முக்கியம்"
                        : "Your privacy matters to us"}
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {isTamil
                        ? "இந்தக் கொள்கை WhatsWare உங்கள் தகவல்களை எவ்வாறு கையாளுகிறது என்பதை விளக்குகிறது."
                        : "This policy explains how WhatsWare handles information when you use our website and services."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-14">
                {sections.map((section, index) => {
                  const Icon = section.icon;

                  return (
                    <motion.section
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.5,
                        delay: Math.min(index * 0.02, 0.15),
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

                      <div className="pl-0 text-[15px] leading-8 text-gray-600 sm:pl-[60px]">
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 overflow-hidden rounded-3xl bg-[#075E54] p-8 text-white shadow-xl sm:p-10"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-200">
                    <Lock className="h-4 w-4" />
                    WhatsWare
                  </div>

                  <h2 className="text-2xl font-bold sm:text-3xl">
                    {isTamil
                      ? "மேலும் உதவி தேவையா?"
                      : "Have questions about your privacy?"}
                  </h2>

                  <p className="mt-3 max-w-xl leading-7 text-emerald-50/80">
                    {isTamil
                      ? "எங்களைத் தொடர்பு கொள்ளுங்கள். உங்கள் கேள்விகளுக்கு உதவுவதில் நாங்கள் மகிழ்ச்சியடைவோம்."
                      : "If you have questions about this policy or how your information is handled, our team is here to help."}
                  </p>
                </div>

                <Link
                  href="/book-demo"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#075E54] shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50"
                >
                  {isTamil ? "எங்களைத் தொடர்பு கொள்ளுங்கள்" : "Contact Us"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* =================================================
                EMAIL
            ================================================= */}

            <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm sm:flex-row sm:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {isTamil
                    ? "Privacy தொடர்பான கேள்விகள்:"
                    : "Privacy enquiries:"}
                </p>

                <a
                  href="mailto:privacy@whatsware.in"
                  className="font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  privacy@whatsware.in
                </a>
              </div>
            </div>

            {/* =================================================
                DISCLAIMER
            ================================================= */}

            <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
              <strong>
                {isTamil
                  ? "முக்கிய குறிப்பு:"
                  : "Important note:"}
              </strong>{" "}
              {isTamil
                ? "இந்த Privacy Policy ஒரு website-ready draft ஆகும். உங்கள் நிறுவனத்தின் உண்மையான legal entity, data practices, contact details மற்றும் பொருந்தக்கூடிய சட்டத் தேவைகளுக்கு ஏற்ப இறுதி பதிப்பை வெளியிடுவதற்கு முன் சட்ட ஆலோசகரால் மதிப்பாய்வு செய்ய பரிந்துரைக்கப்படுகிறது."
                : "This Privacy Policy is a website-ready draft. Before publishing, you should review it with appropriate legal counsel and update the legal entity name, contact details, data practices, retention practices, and applicable legal requirements to accurately reflect your business."}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}