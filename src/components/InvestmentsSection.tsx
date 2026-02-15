import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const ventures = [
  { name: "DigiReps", description: "Remote Workforce Solutions" },
  { name: "Prodigy Solutions", description: "Business Development Agency" },
];

const InvestmentsSection = () => {
  return (
    <section id="investments" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
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
              className="group bg-card border border-border rounded-xl hover-lift flex flex-col items-center justify-center cursor-pointer p-8 transition-all duration-300 border-t-[3px] border-t-primary hover:border-primary"
            >
              <div className="w-12 h-12 rounded-full accent-block flex items-center justify-center mb-4">
                <Building2 size={22} className="text-primary-foreground" />
              </div>
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
