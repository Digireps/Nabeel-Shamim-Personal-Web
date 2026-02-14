import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const pressItems = [
  {
    title: "From Hiring To Execution: Building Remote Dev Teams That Thrive Asynchronously",
    source: "Forbes",
    url: "https://www.forbes.com/councils/forbesbusinesscouncil/2025/12/02/from-hiring-to-execution-building-remote-dev-teams-that-thrive-asynchronously/",
    gradient: "from-primary/20 via-primary/5 to-secondary",
  },
  {
    title: "20 Telltale Signs Someone Isn't Ready To Step Into Leadership",
    source: "Forbes",
    url: "https://www.forbes.com/councils/forbesbusinesscouncil/2025/09/25/20-telltale-signs-someone-isnt-ready-to-step-into-leadership/",
    gradient: "from-secondary via-primary/10 to-card",
  },
  {
    title: "How Founders Can Lead Sales Early And Transition Out At The Right Time",
    source: "Forbes",
    url: "https://www.forbes.com/councils/forbesbusinesscouncil/2025/09/05/how-founders-can-lead-sales-early-and-transition-out-at-the-right-time/",
    gradient: "from-primary/15 via-card to-secondary",
  },
  {
    title: "Muhammad Nabeel Shamim: A Name to Watch in Entrepreneurship & Technology",
    source: "FHM Pakistan",
    url: "https://www.fhmpakistan.com/muhammad-nabeel-shamim-a-name-to-watch-in-entrepreneurship-technology-global/",
    gradient: "from-card via-primary/10 to-primary/20",
  },
  {
    title: "Forbes Business Council Member Profile",
    source: "Forbes Council",
    url: "https://councils.forbes.com/profile/Muhammad-Nabeel-Shamim-Founder-CEO-DigiReps/f15d004f-bae0-4bee-8276-1af1b187609e",
    gradient: "from-secondary via-primary/15 to-card",
  },
];

const PressSection = () => {
  return (
    <section id="press" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Media
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-['Outfit']">
            Press &amp; Publications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 glass hover-lift hover:glow-teal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={`aspect-video bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                <span className="text-3xl font-black font-['Outfit'] text-primary/10">{item.source}</span>
                <ExternalLink size={18} className="absolute top-3 right-3 text-muted-foreground/0 group-hover:text-primary transition-all duration-300" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-primary mb-2">
                  {item.source}
                </p>
                <h3 className="font-semibold font-['Outfit'] group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
