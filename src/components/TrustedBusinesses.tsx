import { useLanguage } from '@/context/LanguageContext';

export default function TrustedBusinesses() {
  const { isTamil } = useLanguage();

  const brands = [
    'Zomato',
    'Rapido',
    "BYJU'S",
    'OPPO',
    'Fabindia',
    'Licious'
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          {isTamil ? 'வளரும் வணிகங்களால் நம்பப்படுகிறது' : 'Trusted by Growing Businesses'}
        </p>
        
        <div className="flex overflow-x-auto pb-4 sm:pb-0 hide-scrollbar justify-start sm:justify-center items-center gap-10 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, i) => (
            <div key={i} className="text-2xl font-bold font-serif text-foreground whitespace-nowrap shrink-0 hover:text-primary transition-colors">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}