import { motion } from 'framer-motion';
import { Settings, Sparkles, TrendingUp, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const steps = [
  {
    icon: MessageSquare,
    titleEN: 'Connect',
    titleTA: 'இணைக்கவும்',
    descEN: 'Link your WhatsApp Business Account',
    descTA: 'உங்கள் WhatsApp Business கணக்கை இணைக்கவும்',
  },
  {
    icon: Settings,
    titleEN: 'Create',
    titleTA: 'உருவாக்கவும்',
    descEN: 'Build smart workflows in minutes',
    descTA: 'சில நிமிடங்களில் புத்திசாலித்தனமான workflow-களை உருவாக்குங்கள்',
  },
  {
    icon: Sparkles,
    titleEN: 'Automate',
    titleTA: 'தானியங்குபடுத்தவும்',
    descEN: 'Let WhatsWare handle the conversations',
    descTA: 'உரையாடல்களை WhatsWare கையாள விடுங்கள்',
  },
  {
    icon: TrendingUp,
    titleEN: 'Grow',
    titleTA: 'வளரவும்',
    descEN: 'See more leads, sales and happy customers',
    descTA: 'மேலும் லீட்கள், விற்பனை மற்றும் மகிழ்ச்சியான வாடிக்கையாளர்களைப் பாருங்கள்',
  }
];

export default function HowItWorks() {
  const { isTamil } = useLanguage();

  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {isTamil ? 'WhatsWare எப்படி செயல்படுகிறது' : 'How WhatsWare Works'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {isTamil ? (
                <>
                  அமைப்பது எளிது. <br className="hidden md:block"/>
                  முதல் நாளிலிருந்தே சக்திவாய்ந்தது.
                </>
              ) : (
                <>
                  Simple to Set Up. <br className="hidden md:block"/>
                  Powerful from Day One.
                </>
              )}
            </p>
            <button className="px-8 py-3.5 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">
              {isTamil ? 'அமைப்பு வழிகாட்டியைப் படியுங்கள்' : 'Read the Setup Guide'}
            </button>
          </motion.div>

          <div className="relative">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-4 md:flex-wrap lg:grid lg:grid-cols-2 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative group z-10 w-full md:w-[calc(50%-8px)] lg:w-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EEFBE8] text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        <span className="text-primary/50 text-sm mr-2 font-mono">0{i + 1}</span>
                        {isTamil ? step.titleTA : step.titleEN}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {isTamil ? step.descTA : step.descEN}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
              <svg width="100%" height="100%" className="text-primary absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 25 25 L 75 25 L 25 75 L 75 75" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
