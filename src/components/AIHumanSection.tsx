import { motion } from 'framer-motion';
import { Bot, UserCircle, Zap, Smile, TrendingUp } from 'lucide-react';

export default function AIHumanSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#087A3E] to-[#159447] rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative"
        >
          {/* Decorative background circles */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#00A884]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                AI + Human Together
              </h2>
              <p className="text-2xl font-medium text-white/90 mb-6">
                The perfect blend of smart automation and human touch.
              </p>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                WhatsWare handles routine queries, qualifies leads and keeps customers engaged — while your team steps in for the personal touch exactly when needed.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2 border border-white/20">
                  <Zap className="w-5 h-5 text-yellow-300" />
                  <span className="font-medium text-sm">Faster Responses</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2 border border-white/20">
                  <Smile className="w-5 h-5 text-[#DFF7D8]" />
                  <span className="font-medium text-sm">Happier Customers</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2 border border-white/20">
                  <TrendingUp className="w-5 h-5 text-white" />
                  <span className="font-medium text-sm">Higher Conversions</span>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] flex items-center justify-center">
              {/* Avatars */}
              <div className="absolute -top-6 left-0 bg-white text-foreground px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-[float_4s_ease-in-out_infinite_alternate]">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold">Smart AI</p>
                  <p className="text-[10px] text-muted-foreground">Replies Instantly</p>
                </div>
              </div>

              <div className="absolute -bottom-6 right-0 bg-white text-foreground px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_alternate_reverse]">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <UserCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold">Your Team</p>
                  <p className="text-[10px] text-muted-foreground">Steps In When Needed</p>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="bg-[#EFEAE2] w-full max-w-sm rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white/20">
                <div className="bg-white/90 backdrop-blur-md px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Live Chat Transfer</span>
                </div>
                
                <div className="p-4 space-y-4 bg-[#E5DDD5] opacity-90 h-[280px]">
                  {/* Customer */}
                  <div className="bg-white text-gray-800 rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm text-sm max-w-[85%]">
                    I need help choosing the right skincare combo. Can you suggest?
                  </div>
                  
                  {/* AI Bot */}
                  <div className="bg-[#D9FDD3] text-gray-800 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm max-w-[85%] self-end ml-auto relative">
                    <Bot className="w-4 h-4 text-primary absolute -left-6 top-1" />
                    Sure! Based on your skin type, here's the best combo for you. 😊
                  </div>

                  {/* System message */}
                  <div className="flex justify-center my-2">
                    <span className="bg-black/20 text-white/90 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      Agent Sarah joined the chat
                    </span>
                  </div>

                  {/* Human Agent */}
                  <div className="bg-[#D9FDD3] text-gray-800 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm max-w-[85%] self-end ml-auto border border-primary/20 relative">
                    <UserCircle className="w-4 h-4 text-blue-600 absolute -left-6 top-1" />
                    Hi! I see you're looking at our combos. I can offer you a 15% discount today!
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
