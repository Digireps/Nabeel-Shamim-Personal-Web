import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const roles = [
  { company: "DigiReps", role: "Founder & CEO", period: "2023 – Present", url: "https://digireps.co", initial: "D", featured: false },
  { company: "Prodigy Solutions", role: "Founder", period: "Prior to DigiReps", url: "#", initial: "P", featured: false },
  { company: "Forbes Business Council", role: "Official Member", period: "Present", url: "https://councils.forbes.com/profile/Muhammad-Nabeel-Shamim-Founder-CEO-DigiReps/f15d004f-bae0-4bee-8276-1af1b187609e", initial: "F", featured: true },
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
          <p className="text-3xl md:text-4xl font-bold font-heading">
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
              className={`flex items-center gap-4 p-5 rounded-xl border-l-4 border-l-primary card-clean card-clean-hover group relative overflow-hidden ${
                seat.featured ? "border border-primary/30" : ""
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 4 }}
            >
              {seat.featured && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
              )}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-heading text-sm shrink-0 relative z-10 ${
                seat.featured
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsla(174,72%,45%,0.3)]"
                  : "bg-primary/10 border border-primary/20 text-primary"
              }`}>
                {seat.initial}
              </div>
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold font-heading group-hover:text-primary transition-colors">
                    {seat.company}
                  </h3>
                  {seat.featured && (
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px]">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {seat.role} · {seat.period}
                </p>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 relative z-10" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardSeatsSection;
