import { motion } from "framer-motion";
import { Building2, ArrowUpRight } from "lucide-react";

const ventures = [
  { 
    name: "DigiReps", 
    description: "Remote Workforce Solutions",
    details: "Connecting elite global talent with US-based enterprises."
  },
  { 
    name: "Prodigy Solutions", 
    description: "Business Development Agency",
    details: "Driving Inc. 5000 growth through strategic development."
  },
];

const InvestmentsSection = () => {
  return (
    <section id="investments" className="py-32 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header: Clean & Centered */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#1d1d1f]">
            Ventures & Companies
          </h2>
        </motion.div>

        {/* Grid: Bento-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ventures.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              {/* Subtle Icon Background */}
              <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                 <Building2 size={120} />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                  <Building2 size={24} className="text-zinc-400 group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2 flex items-center gap-2">
                  {company.name}
                  <ArrowUpRight size={18} className="text-zinc-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                  {company.description}
                </p>
                
                <p className="text-zinc-500 leading-relaxed max-w-[280px]">
                  {company.details}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/3 transition-all duration-500 rounded-t-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;