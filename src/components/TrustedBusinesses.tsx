import { useLanguage } from "@/context/LanguageContext";

export default function TrustedBusinesses() {
  const { isTamil } = useLanguage();

  const brands = [
    { name: "Zomato", logo: "/logos/zomato.svg" },
    { name: "Rapido", logo: "/logos/rapido.svg" },
    { name: "BYJU'S", logo: "/logos/byjus.svg" },
    { name: "OPPO", logo: "/logos/oppo.svg" },
    { name: "Fabindia", logo: "/logos/fabindia.svg" },
    { name: "Licious", logo: "/logos/licious.svg" },
  ];

  // Duplicate the logos so the animation can loop seamlessly
  const scrollingBrands = [...brands, ...brands];

  return (
    <section className="relative py-16 bg-white border-y border-gray-100 overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">
          {isTamil
            ? "வளரும் வணிகங்களால் நம்பப்படுகிறது"
            : "Trusted by Growing Businesses"}
        </p>
      </div>

      {/* Logo marquee */}
      <div className="relative w-full overflow-hidden">

        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Moving track */}
        <div className="flex w-max animate-logo-scroll hover:[animation-play-state:paused]">
          {scrollingBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="
                flex items-center justify-center
                w-[180px] sm:w-[220px]
                h-20
                mx-3 sm:mx-5
                shrink-0
                opacity-60
                grayscale
                transition-all
                duration-500
                hover:opacity-100
                hover:grayscale-0
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="
                  max-w-[135px]
                  sm:max-w-[155px]
                  max-h-[55px]
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}