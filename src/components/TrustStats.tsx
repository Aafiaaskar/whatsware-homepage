import { motion } from 'framer-motion';
import { Building2, MessageCircle, ShieldCheck, Star } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '10,000+',
    label: 'Businesses Trust WhatsWare',
  },
  {
    icon: MessageCircle,
    value: '50M+',
    label: 'Conversations Automated',
  },
  {
    icon: ShieldCheck,
    value: '99.9%',
    label: 'Message Delivery',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Customer Satisfaction',
    stars: true,
  },
];

export default function TrustStats() {
  return (
    <section className="py-12 bg-[#FFFDF5] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#EEFBE8] rounded-2xl sm:rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#DFF7D8]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-primary/10">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center ${index !== 0 ? 'pt-8 sm:pt-0 sm:pl-8' : ''}`}
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary mb-4 shadow-sm">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tight">
                  {stat.value}
                </div>
                {stat.stars && (
                  <div className="flex gap-1 text-[#F59E0B] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                )}
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
