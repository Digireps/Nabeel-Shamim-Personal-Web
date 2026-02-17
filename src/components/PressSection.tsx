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

const PressSection = () => {
  return (
    <section id="press" className="py-24 md:py-32 relative bg-[#050505] text-white overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading section */}
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
          <p className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Press & Publications
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
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">As Featured In</span>
          <span className="text-2xl md:text-4xl font-black text-white/5 tracking-tighter">FORBES</span>
          <div className="w-px h-8 bg-zinc-800" />
          <span className="text-2xl md:text-4xl font-black text-white/5 tracking-tighter">FHM</span>
        </motion.div>

        {/* Featured highlight cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-end p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden min-h-[300px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Radial Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-6 right-6 z-10">
                <Badge className="bg-primary text-black font-black text-[10px] uppercase tracking-wider gap-1 border-none px-3 py-1">
                  <Award size={12} />
                  Featured
                </Badge>
              </div>

              <div className="relative z-10">
                {/* Watermark: Adjusted for Dark Theme */}
                <span className="absolute -top-12 -right-8 text-[10rem] font-black text-white/[0.02] group-hover:text-primary/[0.05] select-none pointer-events-none transition-all duration-700 leading-none">
                  {item.watermark}
                </span>

                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-primary/60 group-hover:w-10 transition-all duration-500" />
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
                    {item.source}
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors leading-tight pr-10">
                  {item.title}
                </h3>
                
                <div className="mt-6 flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">Read Article</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
