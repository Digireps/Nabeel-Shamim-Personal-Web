import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const featuredItems = [
  {
    title: "Forbes Business Council Member Profile",
    source: "Forbes Council",
    watermark: "FORBES",
    url: "https://councils.forbes.com/profile/Muhammad-Nabeel-Shamim-Founder-CEO-DigiReps/f15d004f-bae0-4bee-8276-1af1b187609e",
  },
  {
    title: "Muhammad Nabeel Shamim: A Name to Watch in Entrepreneurship & Technology",
    source: "FHM Pakistan",
    watermark: "FHM",
    url: "https://www.fhmpakistan.com/muhammad-nabeel-shamim-a-name-to-watch-in-entrepreneurship-technology-global/",
  },
];

const pressItems = [
  {
    title: "From Hiring To Execution: Building Remote Dev Teams That Thrive Asynchronously",
    source: "Forbes",
    url: "https://www.forbes.com/councils/forbesbusinesscouncil/2025/12/02/from-hiring-to-execution-building-remote-dev-teams-that-thrive-asynchronously/",
  },
  {
    title: "20 Telltale Signs Someone Isn't Ready To Step Into Leadership",
    source: "Forbes",
    url: "https://www.forbes.com/councils/forbesbusinesscouncil/2025/09/25/20-telltale-signs-someone-isnt-ready-to-step-into-leadership/",
  },
  {
    title: "How Founders Can Lead Sales Early And Transition Out At The Right Time",
    source: "Forbes",
    url: "https://www.forbes.com/councils/forbesbusinesscouncil/2025/09/05/how-founders-can-lead-sales-early-and-transition-out-at-the-right-time/",
  },
];

const PressSection = () => {
  return (
    <section id="press" className="py-24 md:py-32 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
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
          <p className="text-3xl md:text-4xl font-bold font-heading">
            Press &amp; Publications
          </p>
        </motion.div>

        {/* As Featured In strip */}
        <motion.div
          className="flex items-center justify-center gap-10 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">As Featured In</span>
          <span className="text-2xl md:text-3xl font-black font-heading text-foreground/10 tracking-wider">FORBES</span>
          <span className="w-px h-6 bg-border" />
          <span className="text-2xl md:text-3xl font-black font-heading text-foreground/10 tracking-wider">FHM</span>
        </motion.div>

        {/* Featured highlight cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden card-clean card-clean-hover border-l-4 border-l-primary relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-primary text-primary-foreground text-[10px] uppercase tracking-wider gap-1">
                  <Award size={12} />
                  Featured
                </Badge>
              </div>
              <div className="relative p-8 md:p-10 min-h-[180px] flex flex-col justify-end">
                <span className="absolute top-2 right-4 text-6xl md:text-8xl font-black font-heading text-primary/[0.06] select-none pointer-events-none leading-none">
                  {item.watermark}
                </span>
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                  {item.source}
                </p>
                <h3 className="text-lg md:text-xl font-bold font-heading group-hover:text-primary transition-colors leading-snug pr-8">
                  {item.title}
                </h3>
                <ExternalLink size={16} className="absolute bottom-8 right-8 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Regular press grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden card-clean card-clean-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-video bg-secondary flex items-center justify-center relative">
                <span className="text-3xl font-black font-heading text-primary/10">{item.source}</span>
                <ExternalLink size={18} className="absolute top-3 right-3 text-muted-foreground/0 group-hover:text-primary transition-all duration-300" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  {item.source}
                </p>
                <h3 className="font-semibold font-heading group-hover:text-primary transition-colors leading-snug">
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
