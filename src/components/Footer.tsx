import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const footerLinks = [
  {
    titleEN: 'WhatsWare',
    titleTA: 'WhatsWare',
    links: [
      { en: 'Get a Live Demo', ta: 'நேரடி டெமோ பெறுக' },
      { en: 'About Us', ta: 'எங்களை பற்றி' },
      { en: 'Contact Us', ta: 'தொடர்பு கொள்ள' },
      { en: 'Partner with Us', ta: 'எங்களுடன் கூட்டாண்மை' },
      { en: 'Privacy Policy', ta: 'தனியுரிமைக் கொள்கை' },
      {
        en: 'Terms & Conditions',
        ta: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
      },
    ],
  },

  {
    titleEN: 'Resources',
    titleTA: 'வளங்கள்',
    links: [
      { en: 'Case Studies', ta: 'வழக்கு ஆய்வுகள்' },
      { en: 'Resource Center', ta: 'வள மையம்' },
      {
        en: 'Notifications Library',
        ta: 'அறிவிப்புகள் நூலகம்',
      },
      { en: 'Blogs', ta: 'வலைப்பதிவுகள்' },
      {
        en: 'WhatsWare Academy',
        ta: 'WhatsWare அகாடமி',
      },
      {
        en: 'FAQs',
        ta: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      },
    ],
  },

  {
    titleEN: 'Why WhatsWare',
    titleTA: 'ஏன் WhatsWare',
    links: [
      {
        en: 'WhatsWare vs. AiSensy',
        ta: 'WhatsWare vs. AiSensy',
      },
      {
        en: 'WhatsWare vs. Bitespeed',
        ta: 'WhatsWare vs. Bitespeed',
      },
      {
        en: 'WhatsWare vs. DelightChat',
        ta: 'WhatsWare vs. DelightChat',
      },
      {
        en: 'WhatsWare vs. Limechat',
        ta: 'WhatsWare vs. Limechat',
      },
      {
        en: 'WhatsWare vs. Businessonbot',
        ta: 'WhatsWare vs. Businessonbot',
      },
      {
        en: 'WhatsWare vs. Wati',
        ta: 'WhatsWare vs. Wati',
      },
      {
        en: 'WhatsWare vs. Qontak',
        ta: 'WhatsWare vs. Qontak',
      },
    ],
  },
];

export default function Footer() {
  const { isTamil } = useLanguage();

  return (
    <footer className="bg-[#00584D] text-white">

      {/* =====================================================
          TRUST / OFFICIAL PARTNERSHIP STRIP
      ====================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* =================================================
            META BUSINESS PARTNERS
        ================================================= */}

        <div className="flex min-h-[72px] items-center justify-center gap-4 bg-[#D8FFF3] px-6 text-[#075E54]">

          {/* Meta Logo */}
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 48 28"
              className="h-8 w-12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 22C8 12 12 5 18 5C24 5 27 20 31 20C35 20 38 5 44 5"
                stroke="#0081FB"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="text-base font-semibold sm:text-lg">
            Meta Business Partners
          </span>

        </div>


        {/* =================================================
            OFFICIAL WHATSAPP BUSINESS API
        ================================================= */}

        <div className="flex min-h-[72px] items-center justify-center gap-4 bg-[#25D366] px-6 text-[#075E54]">

          {/* WhatsApp Logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#075E54]">

            <MessageCircle className="h-6 w-6" />

          </div>

          <span className="text-base font-medium sm:text-lg">

            {isTamil
              ? 'அதிகாரப்பூர்வ WhatsApp Business API மூலம் இயக்கப்படுகிறது'
              : 'Powered by Official '}

            {!isTamil && (
              <strong className="font-black">
                WhatsApp Business API
              </strong>
            )}

          </span>

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

            {/* Logo */}

            <a
              href="/"
              className="inline-flex items-center"
            >
              <img
                src="/whatsware-logo.png"
                alt="WhatsWare Logo"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </a>


            {/* Awards */}

            <div className="mt-10">

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">

                {[
                  'Best Est. ROI',
                  'High Performer',
                  'Best Est. ROI',
                  'Fastest Implementation',
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


            {/* Product Branding */}

            <div className="mt-8">

              <p className="text-xs text-white/60">
                a product by
              </p>

              <div className="mt-3 flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173B72] text-sm font-bold">
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
              {isTamil ? 'WhatsWare' : 'WhatsWare'}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/90">

              {footerLinks[0].links.map((link, index) => (

                <li key={index}>

                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    {isTamil ? link.ta : link.en}
                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              RESOURCES
          ================================================= */}

          <div>

            <h3 className="text-lg font-bold">
              {isTamil ? 'வளங்கள்' : 'Resources'}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/90">

              {footerLinks[1].links.map((link, index) => (

                <li key={index}>

                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    {isTamil ? link.ta : link.en}
                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              WHY WHATSWARE
          ================================================= */}

          <div>

            <h3 className="text-lg font-bold">
              {isTamil ? 'ஏன் WhatsWare' : 'Why WhatsWare'}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/90">

              {footerLinks[2].links.map((link, index) => (

                <li key={index}>

                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    {isTamil ? link.ta : link.en}
                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>


        {/* =====================================================
            APP STORE / GOOGLE PLAY / WOOCOMMERCE / SHOPIFY
        ====================================================== */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 lg:justify-end">

          {/* =================================================
              APP STORE
          ================================================= */}

          <a
            href="/"
          >

            <img
              src="https://www.interakt.shop/wp-content/uploads/2023/04/ios.png"
              alt="Download on the App Store"
              className="h-12 w-auto object-contain"
            />

          </a>


          {/* =================================================
              GOOGLE PLAY
          ================================================= */}

          <a
            href="/"
          >

            <img
              src="https://www.interakt.shop/wp-content/uploads/2023/04/play.png"
              alt="Get it on Google Play"
              className="h-12 w-auto object-contain"
            />

          </a>


          {/* =================================================
              WOOCOMMERCE
          ================================================= */}

          <a
            href="/integrations/woocommerce"
            className="transition duration-300 hover:-translate-y-1"
          >

            <img
              src="https://www.interakt.shop/wp-content/uploads/2023/04/play-1.png"
              alt="WooCommerce"
              className="h-12 w-auto object-contain"
            />

          </a>


          {/* =================================================
              SHOPIFY
          ================================================= */}

          <a
            href="/integrations/shopify"
          >

            <img
              src="https://www.interakt.shop/wp-content/uploads/2023/04/Group-3795.png"
              alt="Shopify"
              className="h-12 w-auto object-contain"
            />

          </a>

        </div>

      </div>

    </footer>
  );
}