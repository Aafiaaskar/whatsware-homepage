import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import {
  Globe,
  Mail,
  ExternalLink,
  Linkedin,
} from "lucide-react";

/* =========================================================
   FOOTER LINKS
========================================================= */

const footerLinks = [
  {
    titleEN: "WhatsWare",
    titleTA: "WhatsWare",
    links: [
      {
        en: "Get a Live Demo",
        ta: "நேரடி டெமோ பெறுக",
        href: "/book-demo",
      },
      {
        en: "About Us",
        ta: "எங்களை பற்றி",
        href: "/about",
      },
      {
        en: "Contact Us",
        ta: "தொடர்பு கொள்ள",
        href: "/book-demo",
      },
      {
        en: "Partner with Us",
        ta: "எங்களுடன் கூட்டாண்மை",
        href: "/partnership",
      },
      {
        en: "Privacy Policy",
        ta: "தனியுரிமைக் கொள்கை",
        href: "/privacy-policy",
      },
      {
        en: "Terms & Conditions",
        ta: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
        href: "/terms-conditions",
      },
    ],
  },

  {
    titleEN: "Resources",
    titleTA: "வளங்கள்",
    links: [
      {
        en: "Case Studies",
        ta: "வழக்கு ஆய்வுகள்",
        href: "/resources/case-studies",
      },
      {
        en: "Resource Center",
        ta: "வள மையம்",
        href: "/resources",
      },
      {
        en: "Notifications Library",
        ta: "அறிவிப்புகள் நூலகம்",
        href: "/resources/notifications",
      },
      {
        en: "Blogs",
        ta: "வலைப்பதிவுகள்",
        href: "/resources/blogs",
      },
      {
        en: "WhatsWare Academy",
        ta: "WhatsWare அகாடமி",
        href: "/resources/academy",
      },
      {
        en: "FAQs",
        ta: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        href: "/resources/faqs",
      },
    ],
  },

  {
    titleEN: "Why WhatsWare",
    titleTA: "ஏன் WhatsWare",
    links: [
      {
        en: "WhatsWare vs. AiSensy",
        ta: "WhatsWare vs. AiSensy",
        href: "/why-whatsware/vs-aisensy",
      },
      {
        en: "WhatsWare vs. Bitespeed",
        ta: "WhatsWare vs. Bitespeed",
        href: "/why-whatsware/vs-bitespeed",
      },
      {
        en: "WhatsWare vs. DelightChat",
        ta: "WhatsWare vs. DelightChat",
        href: "/why-whatsware/vs-delightchat",
      },
      {
        en: "WhatsWare vs. Limechat",
        ta: "WhatsWare vs. Limechat",
        href: "/why-whatsware/vs-limechat",
      },
      {
        en: "WhatsWare vs. Businessonbot",
        ta: "WhatsWare vs. Businessonbot",
        href: "/why-whatsware/vs-businessonbot",
      },
      {
        en: "WhatsWare vs. Wati",
        ta: "WhatsWare vs. Wati",
        href: "/why-whatsware/vs-wati",
      },
      {
        en: "WhatsWare vs. Qontak",
        ta: "WhatsWare vs. Qontak",
        href: "/why-whatsware/vs-qontak",
      },
    ],
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/",
    icon: "whatsapp",
    color: "#25D366",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: "youtube",
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    href:
      "https://www.linkedin.com/company/weofy-ecom-india-private-limited/",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/whatswareofficial/",
    icon: "instagram",
    color: "#E4405F",
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: "x",
    color: "#000000",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1BfU6yHzfA/",
    icon: "facebook",
    color: "#1877F2",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const { isTamil } = useLanguage();

  return (
    <footer className="bg-[#00584D] text-white">

      {/* =====================================================
          TOP TRUST / PARTNERSHIP STRIP
      ====================================================== */}

      <div className="grid w-full grid-cols-1 md:grid-cols-2">

        {/* META */}

        <div className="flex min-h-[76px] items-center justify-center bg-[#D8FFF3] px-5 sm:px-6">
          <div className="flex items-center gap-4">

            <img
              src="/metalogo%20trans.png"
              alt="Meta"
              className="h-9 w-auto max-w-[150px] object-contain sm:h-10 sm:max-w-[165px]"
            />

            <div className="h-8 w-px shrink-0 bg-[#075E54]/40" />

            <span className="whitespace-nowrap text-[14px] font-semibold text-[#075E54] sm:text-[16px]">
              Meta Business Partners
            </span>

          </div>
        </div>

        {/* POWERED BY WEOFY */}

        <div className="flex min-h-[76px] items-center justify-center bg-[#25D366] px-5 sm:px-6">
          <div className="flex items-center justify-center gap-3 sm:gap-4">

            <img
              src="/whatsware-logo.png"
              alt="WhatsWare"
              className="h-9 w-auto max-w-[120px] object-contain sm:h-10 sm:max-w-[145px]"
            />

            <div className="h-8 w-px shrink-0 bg-[#075E54]/40" />

            <span className="whitespace-nowrap text-[13px] font-medium text-[#075E54] sm:text-[15px]">
              Powered by
            </span>

            <span className="whitespace-nowrap text-[13px] font-bold text-[#075E54] sm:text-[15px]">
              Weofy India Private Limited
            </span>

          </div>
        </div>

      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">

          {/* =================================================
              BRAND / AWARDS
          ================================================= */}

          <div>

            {/* LOGO */}

            <Link
              href="/"
              className="inline-flex items-center"
            >
              <img
                src="/whatsware-logo.png"
                alt="WhatsWare Logo"
                className="
                  h-24
                  w-auto
                  max-w-[320px]
                  object-contain
                  drop-shadow-[0_2px_10px_rgba(255,255,255,0.18)]
                  sm:h-28
                  sm:max-w-[350px]
                "
              />
            </Link>

            {/* AWARDS */}

            <div className="mt-8">

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">

                {[
                  "Best Est. ROI",
                  "High Performer",
                  "Best Est. ROI",
                  "Fastest Implementation",
                ].map((award, index) => (

                  <div
                    key={index}
                    className="
                      relative
                      flex
                      h-[88px]
                      w-[82px]
                      flex-col
                      items-center
                      justify-center
                      rounded-md
                      bg-white
                      text-center
                      text-[#075E54]
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >

                    <div className="absolute left-0 top-0 h-2 w-full rounded-t-md bg-[#F5C400]" />

                    <span className="mt-2 text-[7px] font-bold text-gray-500">
                      SUMMER 2025
                    </span>

                    <span className="mt-1 px-1 text-[10px] font-black leading-tight">
                      {award}
                    </span>

                    <span className="mt-1 text-[7px] font-semibold text-gray-500">
                      SMALL BUSINESS
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* PRODUCT BRANDING */}

            <div className="mt-8">

              <p className="text-xs text-white/60">
                a product by
              </p>

              <div className="mt-3 flex items-center gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#173B72]
                    text-sm
                    font-bold
                  "
                >
                  Jio
                </div>

                <div className="h-8 w-px bg-white/30" />

                <div className="text-2xl font-black tracking-tight">
                  haptik
                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              WHATSWARE
          ================================================= */}

          <div>

            <h3 className="text-lg font-bold">
              {isTamil ? "WhatsWare" : "WhatsWare"}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/90">

              {footerLinks[0].links.map((link) => (

                <li key={link.en}>

                  <Link
                    href={link.href}
                    className="
                      inline-block
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-[#25D366]
                    "
                  >
                    {isTamil ? link.ta : link.en}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =================================================
              RESOURCES
          ================================================= */}

          <div>

            <h3 className="text-lg font-bold">
              {isTamil ? "வளங்கள்" : "Resources"}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/90">

              {footerLinks[1].links.map((link) => (

                <li key={link.en}>

                  <Link
                    href={link.href}
                    className="
                      inline-block
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-[#25D366]
                    "
                  >
                    {isTamil ? link.ta : link.en}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =================================================
              WHY WHATSWARE
          ================================================= */}

          <div>

            <h3 className="text-lg font-bold">
              {isTamil ? "ஏன் WhatsWare" : "Why WhatsWare"}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/90">

              {footerLinks[2].links.map((link) => (

                <li key={link.en}>

                  <Link
                    href={link.href}
                    className="
                      inline-block
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-[#25D366]
                    "
                  >
                    {isTamil ? link.ta : link.en}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* =====================================================
            SOCIAL MEDIA
        ====================================================== */}

        <div className="mt-14 border-t border-white/15 pt-10">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            {/* SOCIAL TEXT */}

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#25D366]
                "
              >
                {isTamil
                  ? "எங்களுடன் இணைந்திருங்கள்"
                  : "Connect With Us"}
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-bold
                  text-white
                  sm:text-2xl
                "
              >
                {isTamil
                  ? "WhatsWare உடன் தொடர்பில் இருங்கள்"
                  : "Stay connected with WhatsWare"}
              </h3>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                {isTamil
                  ? "எங்கள் சமீபத்திய செய்திகள் மற்றும் புதுப்பிப்புகளைப் பெற எங்களுடன் இணைந்திருங்கள்."
                  : "Follow us for the latest updates, products, announcements and more."}
              </p>

            </div>

            {/* =================================================
                SOCIAL ICONS
            ================================================== */}

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">

              {socialLinks.map((social) => (

                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="
                    group
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-110
                  "
                  style={{
                    boxShadow: `0 4px 14px ${social.color}25`,
                  }}
                >

                  {/* =================================================
                      LINKEDIN — FIXED
                  ================================================== */}

                  {social.icon === "linkedin" ? (

                    <Linkedin
                      className="
                        h-[25px]
                        w-[25px]
                        text-[#0A66C2]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                      strokeWidth={2.5}
                    />

                  ) : (

                    /* =================================================
                       OTHER SOCIAL ICONS
                    ================================================== */

                    <img
                      src={`https://cdn.simpleicons.org/${social.icon}/${social.color.replace(
                        "#",
                        ""
                      )}`}
                      alt={social.name}
                      className={`
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-110
                        ${
                          social.icon === "x"
                            ? "h-[19px] w-[19px]"
                            : "h-[25px] w-[25px]"
                        }
                      `}
                    />

                  )}

                </a>

              ))}

            </div>

          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-4
              border-t
              border-white/10
              pt-7
              text-sm
              text-white/60
            "
          >

            {/* WEBSITE */}

            <a
              href="https://www.weofy.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                transition-colors
                hover:text-[#25D366]
              "
            >

              <Globe className="h-4 w-4" />

              <span>
                www.weofy.in
              </span>

              <ExternalLink className="h-3 w-3 opacity-50" />

            </a>

            {/* EMAIL */}

            <a
              href="mailto:weofyindia@gmail.com"
              className="
                inline-flex
                items-center
                gap-2
                transition-colors
                hover:text-[#25D366]
              "
            >

              <Mail className="h-4 w-4" />

              <span>
                weofyindia@gmail.com
              </span>

            </a>

          </div>

        </div>

        {/* =====================================================
            APP / INTEGRATION BADGES
        ====================================================== */}

        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-5
            border-t
            border-white/15
            pt-10
            lg:justify-end
          "
        >

          {/* APP STORE */}

          <a
            href="/"
            className="transition duration-300 hover:-translate-y-1"
            aria-label="App Store"
          >

            <img
              src="https://www.interakt.shop/wp-content/uploads/2023/04/ios.png"
              alt="Download on the App Store"
              className="h-12 w-auto object-contain"
            />

          </a>

          {/* GOOGLE PLAY */}

          <a
            href="/"
            className="transition duration-300 hover:-translate-y-1"
            aria-label="Google Play"
          >

            <img
              src="https://www.interakt.shop/wp-content/uploads/2023/04/play.png"
              alt="Get it on Google Play"
              className="h-12 w-auto object-contain"
            />

          </a>

          {/* WOOCOMMERCE */}

          <Link
            href="/integrations"
            className="transition duration-300 hover:-translate-y-1"
            aria-label="WooCommerce integrations"
          >

            <img
              src="https://www.interakt.shop/wp-content/uploads/2023/04/play-1.png"
              alt="WooCommerce"
              className="h-12 w-auto object-contain"
            />

          </Link>

          {/* SHOPIFY */}

          <Link
            href="/integrations"
            className="transition duration-300 hover:-translate-y-1"
            aria-label="Shopify integrations"
          >

            <img
              src="https://www.interakt.shop/wp-content/uploads/2023/04/Group-3795.png"
              alt="Shopify"
              className="h-12 w-auto object-contain"
            />

          </Link>

        </div>

      </div>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="border-t border-white/10 bg-[#00483F]">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-6
            py-6
            text-sm
            text-white/60
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-10
          "
        >

          <p>
            © 2025 WhatsWare. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">

            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-white/25">
              |
            </span>

            <Link
              href="/terms-conditions"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

            <span className="text-white/25">
              |
            </span>

            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Sitemap
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}