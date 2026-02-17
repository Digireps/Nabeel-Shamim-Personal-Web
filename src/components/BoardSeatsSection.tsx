import { Briefcase, Award, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const roles = [
  { 
    company: "DigiReps", 
    role: "Founder & CEO", 
    period: "2023 – Present", 
    url: "https://digireps.co", 
    status: "Active"
  },
  { 
    company: "Forbes Business Council", 
    role: "Official Member", 
    period: "Present", 
    url: "https://councils.forbes.com/profile/Muhammad-Nabeel-Shamim-Founder-CEO-DigiReps/f15d004f-bae0-4bee-8276-1af1b187609e", 
    status: "Current"
  },
  { 
    company: "Prodigy Solutions", 
    role: "Founder", 
    period: "Prior to DigiReps", 
    url: "https://www.prodisols.com/", 
    status: "Strategic"
  },

  // Additional roles can be added here in the future
   { 
    company: "CxO Global Forum", 
    role: "Official Member", 
    period: "Present", 
    url: "https://cxoforum.global/", 
    status: "Active"
  },
  { 
    company: "Pakistan Software Export Board (PSEB)", 
    role: "Official Member", 
    period: "Present", 
    url: "https://techdestination.com/about-us/", 
    status: "Current"
  },
];

const BoardSeatsSection = () => {
  return (
    <section id="board-seats" className="py-32 bg-white relative overflow-hidden">
      {/* Ultra-soft ambient glow - barely visible to break the flat white */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Minimalist Header */}
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
              Portfolio
            </p>
            <div className="h-[1px] w-6 bg-zinc-200" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1d1d1f]">
            ASSOCIATIONS & <span className="text-primary italic">Roles.</span>
          </h2>
        </motion.div>

        {/* The List - Minimalist Row Style */}
        <div className="space-y-4">
          {roles.map((seat, i) => (
            <motion.a
              key={i}
              href={seat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* The "Card" - No heavy borders, just soft depth */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-zinc-50/50 rounded-[2rem] border border-transparent hover:border-zinc-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500">
                
                <div className="flex items-center gap-8">
                  {/* Modern Icon Presentation */}
                  <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-white border border-zinc-100 group-hover:border-primary/20 transition-all duration-500">
                    {seat.company === "Forbes Business Council" ? (
                      <Award size={24} className="text-primary" />
                    ) : (
                      <Briefcase size={24} className="text-zinc-400 group-hover:text-primary transition-colors" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
                      {seat.company}
                    </h3>
                    <div className="flex items-center gap-3">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{seat.role}</p>
                      <div className="w-1 h-1 rounded-full bg-zinc-200" />
                      <p className="text-[10px] text-zinc-400 font-medium">{seat.period}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-6 md:mt-0">
                  <Badge variant="outline" className="text-[9px] uppercase tracking-widest px-3 py-1 font-bold border-zinc-200 text-zinc-400 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    {seat.status}
                  </Badge>
                  
                  {/* Clean CTA Arrow */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-zinc-100 text-zinc-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Refined Minimalist Footer */}
        <div className="mt-24 text-center">
           <p className="text-[9px] text-zinc-300 uppercase tracking-[0.8em] font-black">
             LEGACY THROUGH EXCELLENCE
           </p>
        </div>
      </div>
    </section>
  );
};

export default BoardSeatsSection;
