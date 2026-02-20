import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "DigiReps has been handling my lead gen for about a year now, delivering solid, high-quality leads. He checks in regularly via Slack, joins team meetings, and provides end-of-week reports. If you need someone who can generate leads and stay on top of communication, They do it all.",
    name: "George Schwartz",
    title: "Founder & CEO, Extenstion eComm",
  },
  {
    quote: "Working with DigiReps was a game-changer. Muhammad's hands-on leadership and commitment to quality delivered results far beyond our expectations.",
    name: "Alexander Toth",
    title: "CEO, Clear Brands",
  },
  {
    quote: "Muhammad brings a rare combination of entrepreneurial vision and operational excellence. His insights on scaling businesses are invaluable.",
    name: "Julie Sponagel",
    title: "VP, Artisun Solar",
  },
  {
    quote: "A true leader who leads by example. Muhammad's work ethic and strategic thinking have made a lasting impact on everyone who works with him.",
    name: "David Eames",
    title: "Founder & CEO, BDRadio",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const t = testimonials[current];

  // Helper function to highlight specific keywords
  const highlightText = (text) => {
    if (!text) return text;
    // Updated regex to find "DigiReps" or "Muhammad"
    const parts = text.split(/(DigiReps|Muhammad)/g);
    return parts.map((part, i) => 
      part === "DigiReps" || part === "Muhammad" ? (
        <span key={i} className="text-primary font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section 
      id="testimonials" 
      className="py-40 bg-[#050505] text-white overflow-hidden relative"
      aria-label="Client testimonials and endorsements for Muhammad Nabeel Shamim"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-4 flex flex-col justify-between items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase mb-6 block">
                Endorsements
              </span>
              <h2 className="text-6xl md:text-7xl font-light tracking-tighter leading-none text-white">
                Voices of <br />
                <span className="font-black italic text-zinc-800">Trust.</span>
              </h2>
            </motion.div>

            <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/5 rounded-full mt-20">
              <button 
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors text-zinc-500 hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="w-px h-6 bg-white/10" />
              <button 
                onClick={next}
                className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors text-zinc-500 hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-12"
              >
                <p className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.15] tracking-tight text-zinc-100">
                  "{highlightText(t.quote)}"
                </p>

                <div className="flex items-center gap-8">
                  <div className="h-px w-20 bg-primary/40" />
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-tight">{t.name}</h4>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold mt-1">
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute -bottom-20 right-0 flex items-center gap-4">
              <span className="text-[10px] font-black font-mono text-primary">0{current + 1}</span>
              <div className="w-24 h-[1px] bg-zinc-800 relative">
                <motion.div 
                  className="absolute inset-0 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: (current + 1) / testimonials.length }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-[10px] font-black font-mono text-zinc-700">0{testimonials.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
