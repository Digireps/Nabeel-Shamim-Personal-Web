import { motion } from "framer-motion";
import { Building2, ArrowUpRight } from "lucide-react";

const ventures = [
  { 
    name: "DigiReps", 
    description: "Remote Workforce Solutions",
    details: "Connecting elite global talent with US-based enterprises.",
    url: "https://digireps.co"
  },
  { 
    name: "Prodigy Solutions", 
    description: "Business Development Agency",
    details: "Driving Inc. 5000 growth through strategic development.",
    url: "https://www.prodisols.com/" 
  },
  { 
    name: "Digify Global", 
    description: "Digital Growth & Strategy",
    details: "Expanding digital footprints for global brands.",
    url: "https://digifyglobal.com/"
  },
  { 
    name: "Digital Trading", 
    description: "E-Commerce & Assets",
    details: "Strategic trading and digital asset management.",
    url: "#"
  },
  { 
    name: "3N & Co", 
    description: "Strategic Consulting",
    details: "Providing expert business and operational oversight.",
    url: "#"
  },
  { 
    name: "Collab Zone.pk", 
    description: "Innovation Hub",
    details: "Fostering collaboration in the local tech ecosystem.",
    url: "https://collabzone.pk"
  },
  { 
    name: "Sapphire Solutions", 
    description: "Enterprise Tech",
    details: "Scalable software and infrastructure solutions.",
    url: "https://saphiresolutions.com/"
  },
];

const InvestmentsSection = () => {
  const duplicatedVentures = [...ventures, ...ventures];

  return (
    <section id="investments" className="py-32 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center"
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
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 40, 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedVentures.map((company, i) => (
            <motion.a
              key={i}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[350px] md:w-[400px] relative bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 block"
            >
              <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                 <Building2 size={100} />
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
                
                <p className="text-zinc-500 leading-relaxed">
                  {company.details}
                </p>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/3 transition-all duration-500 rounded-t-full" />
            </motion.a>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FBFBFD] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FBFBFD] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default InvestmentsSection;

