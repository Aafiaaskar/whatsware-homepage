import { ShoppingCart, GraduationCap, Cross, Home, UtensilsCrossed, Calendar } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const scenarios = [
  {
    industryEN: 'E-commerce',
    industryTA: 'இ-காமர்ஸ்',
    icon: ShoppingCart,
    titleEN: 'Sell more with AI conversations',
    titleTA: 'AI உரையாடல்கள் மூலம் அதிகம் விற்பனை செய்யுங்கள்',
    bg: 'bg-[#EEFBE8]',
    color: 'text-[#159447]',
  },
  {
    industryEN: 'Education',
    industryTA: 'கல்வி',
    icon: GraduationCap,
    titleEN: 'Automate admissions & support',
    titleTA: 'சேர்க்கை மற்றும் ஆதரவை தானியங்குபடுத்துங்கள்',
    bg: 'bg-purple-50',
    color: 'text-purple-600',
  },
  {
    industryEN: 'Healthcare',
    industryTA: 'சுகாதாரம்',
    icon: Cross,
    titleEN: 'Patient support & appointments',
    titleTA: 'நோயாளர் ஆதரவு மற்றும் அப்பாயின்ட்மென்ட்கள்',
    bg: 'bg-pink-50',
    color: 'text-pink-600',
  },
  {
    industryEN: 'Real Estate',
    industryTA: 'ரியல் எஸ்டேட்',
    icon: Home,
    titleEN: 'Capture leads & nurture buyers',
    titleTA: 'லீட்களைப் பெற்று வாங்குபவர்களை வளர்த்தெடுங்கள்',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
  },
  {
    industryEN: 'Restaurants',
    industryTA: 'உணவகங்கள்',
    icon: UtensilsCrossed,
    titleEN: 'Take orders & keep customers',
    titleTA: 'ஆர்டர்களை எடுத்து வாடிக்கையாளர்களை வைத்திருங்கள்',
    bg: 'bg-orange-50',
    color: 'text-orange-600',
  },
  {
    industryEN: 'Services',
    industryTA: 'சேவைகள்',
    icon: Calendar,
    titleEN: 'Automate bookings & care',
    titleTA: 'பதிவுகள் மற்றும் பராமரிப்பை தானியங்குபடுத்துங்கள்',
    bg: 'bg-teal-50',
    color: 'text-teal-600',
  },
];

export default function BusinessScenarios() {
  const { isTamil } = useLanguage();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    duration: 35,
  });

  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, [emblaApi, isPaused]);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#159447]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <h2 className="mb-4 text-4xl font-serif font-bold leading-tight text-foreground sm:text-5xl">
              {isTamil ? (
                <>
                  <span className="text-primary">உங்கள் தொழில்துறைக்காக</span>{' '}
                  உருவாக்கப்பட்டது
                </>
              ) : (
                <>
                  Built for{' '}
                  <span className="text-primary">Your Industry</span>
                </>
              )}
            </h2>

            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {isTamil
                ? 'WhatsWare வெவ்வேறு வணிகத் தேவைகளுக்கு எவ்வாறு ஏற்றவாறு மாறுகிறது என்பதைப் பாருங்கள், உங்கள் துறையின் தனித்துவமான workflow-களை தானியங்குபடுத்துகிறது.'
                : 'See how WhatsWare adapts to different business needs, automating the unique workflows of your domain.'}
            </p>
          </div>

          <div className="flex gap-3">

            <button
              type="button"
              onClick={scrollPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159447]/30 hover:bg-[#159447]/5 hover:shadow-md active:scale-95"
              aria-label="Previous industry"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159447]/30 hover:bg-[#159447]/5 hover:shadow-md active:scale-95"
              aria-label="Next industry"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

          </div>
        </div>

        <div
          ref={emblaRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            window.setTimeout(() => {
              setIsPaused(false);
            }, 1200);
          }}
        >

          <div className="flex gap-6 py-8">

            {scenarios.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >

                  <div
                    className={`group relative h-full min-h-[500px] overflow-hidden rounded-[2rem] border border-black/5 ${item.bg} p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-grab active:cursor-grabbing`}
                  >

                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/50 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ${item.color} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="relative mt-6 inline-flex rounded-full bg-white/70 px-3 py-1.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm">
                      {isTamil ? item.industryTA : item.industryEN}
                    </div>

                    <h3 className="relative mb-4 mt-5 max-w-[290px] text-2xl font-bold leading-tight tracking-tight text-foreground">
                      {isTamil ? item.titleTA : item.titleEN}
                    </h3>

                    <div className="relative mt-8 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-white/40 backdrop-blur-sm">

                      <div
                        className="absolute h-28 w-28 rounded-full bg-white/60 blur-xl transition-all duration-700 group-hover:h-36 group-hover:w-36"
                      />

                      <Icon
                        className={`relative z-10 h-24 w-24 ${item.color} opacity-40 transition-all duration-700 group-hover:scale-125 group-hover:rotate-3 group-hover:opacity-100`}
                      />

                    </div>

                    <div className="pointer-events-none absolute bottom-7 right-7 h-2 w-2 rounded-full bg-white/80 animate-pulse" />
                    <div className="pointer-events-none absolute bottom-12 right-12 h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />

                  </div>
                </div>
              );
            })}

          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">

          <span
            className={`h-2 w-2 rounded-full transition-all duration-300 ${isPaused ? 'bg-gray-300' : 'animate-pulse bg-[#159447]'}`}
          />

          <span className="text-xs font-medium text-gray-400">
            {isPaused
              ? (isTamil ? 'இடைநிறுத்தப்பட்டது' : 'Paused')
              : (isTamil ? 'தொழில்துறைகளை தானாக ஆராய்கிறது' : 'Automatically exploring industries')}
          </span>

        </div>

      </div>
    </section>
  );
}