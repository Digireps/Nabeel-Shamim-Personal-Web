import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const PublishedBooksSection = () => {
  return (
    <section id="publications" className="py-32 bg-white relative overflow-hidden border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Minimalist Heading Block - Matching BoardSeatsSection style */}
        <motion.div 
          className="text-center mb-24 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-6 bg-zinc-200" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold">
              Intellectual Capital
            </p>
            <div className="h-[1px] w-6 bg-zinc-200" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1d1d1f]">
            Books &amp; <span className="text-primary italic">Frameworks.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto pt-2 font-medium leading-relaxed">
            Over the years, I’ve developed practical methodologies from real-world experience building businesses, 
            leading teams, and solving challenges. These publications document those frameworks.
          </p>
        </motion.div>

        {/* Editorial-style Book list (Rows instead of heavy grids) */}
        <div className="divide-y divide-zinc-100">
          
          {/* BOOK 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-8 items-start justify-between"
          >
            {/* Left Column: Number & Book cover */}
            <div className="flex gap-6 items-start shrink-0">
              
              
              {/* Flat, editorial shadow style cover */}
              <div className="relative w-[110px] h-[165px] bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden shadow-[2px_10px_20px_rgba(0,0,0,0.06)] group cursor-pointer">
                <img
                  src="/gallery/digireps-cover.png"
                  alt="The DigiReps® Remote Talent Performance Framework™ Book Cover"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Title, description and clean text CTA */}
            <div className="flex-grow max-w-2xl space-y-4">
              <span className="inline-block text-[9px] font-black uppercase tracking-widest text-primary/65">
                Business Playbook
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1d1d1f] leading-snug">
                The DigiReps® Remote Talent Performance Framework™
              </h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                A comprehensive methodology for building and scaling high-performance remote teams.
              </p>
              
              <div className="pt-2 flex flex-col items-start gap-y-2">
                <a 
                  href="https://a.co/d/077QeW7x" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1d1d1f] hover:text-primary transition-colors group/link"
                >
                  <ShoppingCart size={14} />
                  <span>Buy on Amazon</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
                
              </div>
            </div>
          </motion.div>

          {/* BOOK 02 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="py-12 last:pb-0 flex flex-col md:flex-row gap-8 items-start justify-between"
          >
            {/* Left Column: Number & Book cover */}
            <div className="flex gap-6 items-start shrink-0">
             
              
              {/* Flat, editorial shadow style cover */}
              <div className="relative w-[110px] h-[165px] bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden shadow-[2px_10px_20px_rgba(0,0,0,0.06)] group cursor-pointer shrink-0">
                <img
                  src="/gallery/fivelens-cover.png"
                  alt="Nabeel Shamim's Five Lens™ Book Cover"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Title, description and clean text CTA */}
            <div className="flex-grow max-w-2xl space-y-4">
              <span className="inline-block text-[9px] font-black uppercase tracking-widest text-primary/65">
                Diagnostic Blueprint
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1d1d1f] leading-snug">
                Nabeel Shamim’s Five Lens™
              </h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                Dissecting and Solving Critical Business Challenges through MPACT™
              </p>
              
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1d1d1f] hover:text-primary transition-colors group/link"
                >
                  <Send size={14} />
                  <span>Request a free copy</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PublishedBooksSection;
