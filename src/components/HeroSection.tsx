import { Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          className="z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-massive font-black font-['Outfit'] leading-[0.85] mb-6 text-foreground">
            NABEEL
            <br />
            SHAMIM
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 leading-relaxed">
            Founder &amp; CEO | Entrepreneur | Forbes Business Council Member.
            Building global businesses from Pakistan, connecting world-class
            talent with ambitious companies.
          </p>
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 uppercase tracking-wider text-sm transition-all duration-300"
            onClick={() => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border border-border bg-secondary">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Portrait Photo
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="w-full accent-block py-4 overflow-hidden">
        <div className="marquee whitespace-nowrap flex">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="inline-block mx-8 text-sm uppercase tracking-[0.3em] text-primary-foreground font-semibold"
            >
              {item}
              <span className="ml-8 text-primary-foreground/40">|</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
