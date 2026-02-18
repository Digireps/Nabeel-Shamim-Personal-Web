import { motion } from "framer-motion";
import { ExternalLink, Award, Play, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const podcasts = [
  {
    title: "Building DigiReps & Scaling Sales Teams",
    videoId: "eM5UImLqFU8",
    url: "https://youtu.be/eM5UImLqFU8?si=u13McsNzsLWKCcEy",
  },
  {
    title: "Entrepreneurship & Global Business Strategy",
    videoId: "GUyYtigYkH4",
    url: "https://youtu.be/GUyYtigYkH4?si=lYXZs2gU8Q--44Fz",
  },
  {
    title: "Leadership, Technology & the Future of Work",
    videoId: "jbCObAiOZiQ",
    url: "https://youtu.be/jbCObAiOZiQ?si=bMM-DvA7D9Dd1HG_",
  },
];

const featuredItems = [
  {
    title: "Forbes Business Council Member Profile",
    source: "Forbes Council",
    watermark: "FORBES",
    url: "https://councils.forbes.com/profile/Muhammad-Nabeel-Shamim-Founder-CEO-DigiReps/f15d004f-bae0-4bee-8276-1af1b187609e",
    featured: true, // Tag remains
  },
  {
    title: "Muhammad Nabeel Shamim: A Name to Watch in Entrepreneurship & Technology",
    source: "FHM Pakistan",
    watermark: "FHM",
    url: "https://www.fhmpakistan.com/muhammad-nabeel-shamim-a-name-to-watch-in-entrepreneurship-technology-global/",
    featured: true, // Tag remains
  },
  {
    title: "Top 100 Entrepreneurs",
    source: "CXO Global Forum",
    watermark: "CXO",
    url: "https://www.cxoglobal.com",
    featured: false, // Tag removed
  },
  {
    title: "Muhammad Nabeel Shamim Makes It To Forbes",
    source: "Business Bytes",
    watermark: "BYTES",
    url: "https://businessbytes.pk/blog/2025/09/22/pakistani-entrepreneur-muhammad-nabeel-shamim-makes-it-to-forbes/",
    featured: false, // Tag removed
  },
  {
    title: "Featured in Startup Pakistan’s Entrepreneur Spotlight",
    source: "Startup Pakistan",
    watermark: "STARTUP",
    url: "https://startuppakistan.com.pk/pakistani-entrepreneur-muhammad-nabeel-shamim-makes-it-to-forbes/",
    featured: false, // Tag removed
  },
  {
    title: "Featured in PRWeb’s Press Release on Forbes Induction",
    source: "PRWeb",
    watermark: "PRWEB",
    url: "https://www.prweb.com/releases/digireps-founder--ceo-muhammad-n-shamim-inducted-into-forbes-business-council-302574419.html",
    featured: false, // Tag removed
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

        {/* As Featured In strip - High visibility brands */}
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
              className="group relative flex flex-col justify-end p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden min-h-[350px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Radial Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Badge conditional rendering */}
              {item.featured && (
                <div className="absolute top-8 right-8 z-10">
                  <Badge className="bg-primary text-black font-black text-[10px] uppercase tracking-wider gap-1 border-none px-4 py-1.5 shadow-lg shadow-primary/20">
                    <Award size={12} />
                    Featured
                  </Badge>
                </div>
              )}

              <div className="relative z-10">
                {/* Watermark */}
                <span className="absolute -top-16 -right-8 text-[12rem] font-black text-white/[0.02] group-hover:text-primary/[0.05] select-none pointer-events-none transition-all duration-700 leading-none">
                  {item.watermark}
                </span>

                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary/60 group-hover:w-14 transition-all duration-500" />
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
                    {item.source}
                  </p>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white group-hover:text-primary transition-colors leading-tight pr-10">
                  {item.title}
                </h3>
                
                <div className="mt-8 flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">Verify Publication</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Podcasts & Interviews */}
        <motion.div
          className="text-center mt-32 mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Mic size={18} className="text-primary" />
            <h3 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              On Air
            </h3>
          </div>
          <p className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Podcasts & Interviews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {podcasts.map((pod, i) => (
            <motion.div
              key={i}
              className="group relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${pod.videoId}`}
                  title={pod.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h4 className="font-bold text-white text-base leading-snug mb-4 group-hover:text-primary transition-colors">
                  {pod.title}
                </h4>
                <a
                  href={pod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors"
                >
                  <Play size={12} className="fill-current" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Watch on YouTube</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;