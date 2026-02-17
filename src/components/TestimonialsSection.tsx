import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Nabeel's ability to identify talent and build high-performing remote teams is unmatched. He transformed how our company approaches hiring.",
    name: "Alex Rivera",
    title: "CEO, U.S. Tech Startup",
  },
  {
    quote: "Working with DigiReps was a game-changer. Nabeel's hands-on leadership and commitment to quality delivered results far beyond our expectations.",
    name: "Jessica Morgan",
    title: "VP of Operations, SaaS Company",
  },
  {
    quote: "Nabeel brings a rare combination of entrepreneurial vision and operational excellence. His insights on scaling businesses are invaluable.",
    name: "Ryan Patel",
    title: "Founder, E-Commerce Brand",
  },
  {
    quote: "A true leader who leads by example. Nabeel's work ethic and strategic thinking have made a lasting impact on everyone who works with him.",
    name: "Samantha Lee",
    title: "Director of Growth, Inc. 5000 Company",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Testimonials
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-heading">
            What Clients &amp; Peers Say
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="card-clean rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <Quote size={48} className="text-primary/20 mx-auto mb-6 relative z-10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-8 min-h-[6rem]">
                  "{t.quote}"
                </p>
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold font-heading text-lg bg-primary/10 border-2 border-primary/20">
                  {t.name[0]}
                </div>
                <p className="font-semibold font-heading text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8 relative z-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_hsla(174,72%,45%,0.15)] transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary scale-125 shadow-[0_0_8px_hsla(174,72%,45%,0.4)]" : "bg-border hover:bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_hsla(174,72%,45%,0.15)] transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
