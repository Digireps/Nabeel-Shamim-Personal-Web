import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  { company: "DigiReps", role: "Founder & CEO", period: "2023 – Present", url: "https://digireps.co", initial: "D" },
  { company: "Prodigy Solutions", role: "Founder", period: "Prior to DigiReps", url: "#", initial: "P" },
  { company: "Forbes Business Council", role: "Official Member", period: "Present", url: "https://councils.forbes.com/profile/Muhammad-Nabeel-Shamim-Founder-CEO-DigiReps/f15d004f-bae0-4bee-8276-1af1b187609e", initial: "F" },
];

const BoardSeatsSection = () => {
  return (
    <section id="board-seats" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Leadership
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-['Outfit']">
            Roles &amp; Leadership
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {roles.map((seat, i) => (
            <motion.a
              key={i}
              href={seat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border-l-4 border-l-primary border border-border bg-card hover-lift hover:bg-primary/[0.03] transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full accent-block flex items-center justify-center text-primary-foreground font-bold font-['Outfit'] text-sm shrink-0">
                {seat.initial}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold font-['Outfit'] group-hover:text-primary transition-colors">
                  {seat.company}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {seat.role} · {seat.period}
                </p>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardSeatsSection;
