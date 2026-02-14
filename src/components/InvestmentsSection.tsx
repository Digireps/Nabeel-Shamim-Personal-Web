import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const ventures = [
  { name: "DigiReps", description: "Remote Workforce Solutions" },
  { name: "Prodigy Solutions", description: "Business Development Agency" },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const InvestmentsSection = () => {
  return (
    <section id="investments" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Companies
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-['Outfit']">
            Ventures &amp; Companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {ventures.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group aspect-[2/1] rounded-xl glass hover-lift hover:glow-teal-strong flex flex-col items-center justify-center cursor-pointer p-6 transition-all duration-300"
            >
              <Building2 size={28} className="text-primary/40 group-hover:text-primary transition-colors mb-3" />
              <span className="text-foreground group-hover:text-primary transition-colors text-lg font-semibold font-['Outfit']">
                {company.name}
              </span>
              <span className="text-muted-foreground text-sm mt-1">
                {company.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;
