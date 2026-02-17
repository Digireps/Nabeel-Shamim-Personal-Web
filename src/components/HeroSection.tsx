import { Linkedin, Globe } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-background">
      {/* Floating geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full bg-primary/3 blur-2xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-[5%] w-3 h-3 rounded-full bg-primary/30 animate-float" />
        <div className="absolute top-1/4 right-[25%] w-2 h-2 rounded-full bg-primary/20 animate-float-slow" />
        <div className="absolute bottom-1/3 right-[10%] w-4 h-4 rounded-full bg-primary/15 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          className="z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-primary/70 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-heading leading-[0.9] mb-6 text-glow tracking-tight">
            <motion.span
              className="text-gradient inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              NABEEL
            </motion.span>
            <br />
            <motion.span
              className="text-gradient inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              SHAMIM
            </motion.span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Founder &amp; CEO | Entrepreneur | Forbes Business Council Member.
            Building global businesses from Pakistan, connecting world-class
            talent with ambitious companies.
          </motion.p>
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_hsla(174,72%,45%,0.2)] transition-all duration-300 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsla(174,72%,45%,0.25)]"
              onClick={() => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-3 animate-pulse-glow" />
            <div className="absolute -inset-8 bg-primary/5 rounded-3xl rotate-2" />
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_hsla(174,72%,45%,0.15)]">
              <img src={nabeelPortrait} alt="Muhammad Nabeel Shamim" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="w-full accent-block py-5 overflow-hidden">
        <div className="marquee whitespace-nowrap flex items-center">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="text-sm md:text-base uppercase tracking-[0.35em] text-primary-foreground font-bold px-10">
                {item}
              </span>
              <span className="w-px h-5 bg-primary-foreground/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
