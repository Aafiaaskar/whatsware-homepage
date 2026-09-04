import { motion, type Variants } from 'framer-motion';
import {
  BrainCircuit,
  Workflow,
  Users,
  BarChart3,
  Plug2,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const features = [
  {
    icon: BrainCircuit,
    titleEN: 'AI-Powered Conversations',
    titleTA: 'AI-இயக்கப்படும் உரையாடல்கள்',
    descriptionEN:
      "Smart replies with real business intent. It doesn't just match keywords, it understands context.",
    descriptionTA:
      'உண்மையான வணிக நோக்கத்துடன் புத்திசாலித்தனமான பதில்கள். இது வெறும் keyword-களை மட்டும் பொருத்தாமல், சூழலைப் புரிந்துகொள்கிறது.',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: Workflow,
    titleEN: 'End-to-End Workflows',
    titleTA: 'முழுமையான Workflow-கள்',
    descriptionEN:
      'From inquiry to conversion — automatically. Build multi-step journeys without code.',
    descriptionTA:
      'விசாரணையிலிருந்து மாற்றம் வரை — தானாகவே. code இல்லாமல் பல-படி பயணங்களை உருவாக்குங்கள்.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Users,
    titleEN: 'Customer Memory',
    titleTA: 'வாடிக்கையாளர் நினைவகம்',
    descriptionEN:
      'Every chat builds a smarter customer profile. Personalize every interaction automatically.',
    descriptionTA:
      'ஒவ்வொரு அரட்டையும் புத்திசாலித்தனமான வாடிக்கையாளர் சுயவிவரத்தை உருவாக்குகிறது. ஒவ்வொரு தொடர்பையும் தானாக தனிப்பயனாக்குங்கள்.',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: BarChart3,
    titleEN: 'Business Insights',
    titleTA: 'வணிக நுண்ணறிவுகள்',
    descriptionEN:
      'Turn conversations into actionable data. Track leads, sales, and agent performance.',
    descriptionTA:
      'உரையாடல்களை செயல்படக்கூடிய தரவாக மாற்றுங்கள். லீட்கள், விற்பனை மற்றும் முகவர் செயல்திறனைக் கண்காணிக்கவும்.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Plug2,
    titleEN: 'Seamless Integrations',
    titleTA: 'தடையற்ற ஒருங்கிணைப்புகள்',
    descriptionEN:
      'Connect with your favorite tools. Sync data with Shopify, CRM, Google Sheets and more.',
    descriptionTA:
      'உங்களுக்கு பிடித்த கருவிகளுடன் இணைக்கவும். Shopify, CRM, Google Sheets மற்றும் பலவற்றுடன் தரவை ஒத்திசைக்கவும்.',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    icon: MessageCircle,
    titleEN: '24/7 Customer Support',
    titleTA: '24/7 வாடிக்கையாளர் ஆதரவு',
    descriptionEN:
      'Stay connected with your customers around the clock. Answer questions, resolve issues, and keep conversations moving.',
    descriptionTA:
      'உங்கள் வாடிக்கையாளர்களுடன் 24/7 தொடர்பில் இருங்கள். கேள்விகளுக்கு பதிலளித்து, சிக்கல்களைத் தீர்த்து, உரையாடல்களை தொடர்ந்து முன்னெடுக்கவும்.',
    color: 'bg-cyan-100 text-cyan-700',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function FeatureCards() {
  const { isTamil } = useLanguage();

  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#EEFBE8] text-primary text-sm font-semibold mb-6"
          >
            {isTamil
              ? 'WhatsWare-ஐ வித்தியாசமாக்குவது என்ன'
              : 'What Makes WhatsWare Different'}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            {isTamil ? (
              <>
                வெறும் தானியக்கம் அல்ல — <br />
                <span className="text-primary italic">
                  இது ஒரு வணிக பங்குதாரர்
                </span>
              </>
            ) : (
              <>
                More Than Automation — <br />
                <span className="text-primary italic">
                  It's a Business Partner
                </span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            {isTamil
              ? 'WhatsWare வெறும் பதிலளிக்கவில்லை. இது புரிந்துகொள்கிறது, முடிவெடுக்கிறது மற்றும் செயல்படுகிறது — எனவே நீங்கள் முக்கியமானவற்றில் கவனம் செலுத்தலாம்.'
              : "WhatsWare doesn't just reply. It understands, decides and acts — so you can focus on what matters."}
          </motion.p>
        </div>

        {/* =====================================================
            FEATURE CARDS
            3 CARDS PER ROW ON DESKTOP
        ====================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px',
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.color}`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {isTamil ? feature.titleTA : feature.titleEN}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {isTamil
                  ? feature.descriptionTA
                  : feature.descriptionEN}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}