import { Linkedin, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import nabeelPortrait from "@/assets/nabeel-portrait.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/mnabeelshamim/" },
  { icon: Globe, href: "https://digireps.co/aboutus" },
];

const tickerItems = [
  "FOUNDER & CEO",
  "FORBES COUNCIL MEMBER",
  "SERIAL ENTREPRENEUR",
  "GLOBAL BUSINESS LEADER",
  "REMOTE WORKFORCE PIONEER",
  "SELF-MADE MILLIONAIRE",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center bg-[#FBFBFD] text-[#1d1d1f] overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center pt-32 flex-grow">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-[12px] font-bold tracking-[0.3em] text-zinc-400 uppercase">
            Forbes Recognized & Award-Winning Entrepreneur
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-6xl md:text-8xl lg:text-[9.5rem] font-black tracking-[-0.05em] leading-[0.9] mb-8 text-center"
        >
          Nabeel Shamim.
        </motion.h1>

        {/* Sub-headline Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-xl md:text-3xl text-zinc-500 font-medium tracking-tight leading-tight">
            Building the future of global work. <br />
            <span className="text-black">Strategic leadership for the modern enterprise.</span>
          </p>
        </motion.div>

        {/* Call to Action Row */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* FIX: Wrapped Button in anchor tag pointing to #contact */}
          <a href="#contact">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-xl transition-all hover:scale-105 active:scale-95 border-none cursor-pointer">
              Contact Nabeel
            </Button>
          </a>
          
          <div className="flex items-center gap-6">
            {/* FIX: Updated href to #introduction to match your About section ID */}
            <a href="#introduction" className="flex items-center gap-2 text-primary font-semibold text-lg hover:underline group">
              Learn more <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="h-6 w-px bg-zinc-200 hidden md:block" />
            
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#0071e3] transition-colors"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FIXED PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full max-w-4xl flex justify-center mt-auto"
        >
          <div 
            className="relative w-full max-w-2xl"
            style={{
              maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
            }}
          >
            <img 
              src={nabeelPortrait} 
              alt="Muhammad Nabeel Shamim" 
              className="w-full h-auto object-contain filter contrast-[1.02] brightness-[1.01]" 
            />
          </div>
        </motion.div>
      </div>

      {/* APPLE-STYLE FROSTED TICKER */}
      <div className="w-full backdrop-blur-md bg-white/60 border-t border-zinc-100 py-8 overflow-hidden z-20">
        <div className="flex whitespace-nowrap marquee-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[10px] font-black tracking-[0.4em] text-zinc-400 px-16 uppercase">
                {item}
              </span>
              <div className="w-1 h-1 bg-zinc-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          animation: scroll 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default HeroSection;
