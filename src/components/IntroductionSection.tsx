import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import nabeelPortrait from "@/assets/nabeel-portrait.png";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const IntroductionSection = () => {
  return (
    <section id="introduction" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tight text-foreground/10 mb-4">
            Intro
          </h2>
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-2">
            Introduction
          </p>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-start">
          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6">
              <Award size={14} />
              Forbes Business Council Member
            </div>
            <div className="border-l-4 border-primary/30 pl-6">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Muhammad Nabeel Shamim is a results-driven entrepreneur from
                Karachi, Pakistan — a self-made millionaire by 32 with over a
                decade of experience solving complex business challenges for U.S.
                companies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As Founder &amp; CEO of DigiReps, he connects businesses with
                pre-vetted remote professionals in sales, customer support, and
                technology — delivering world-class talent at a fraction of the
                cost while maintaining uncompromising quality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Previously, he built Prodigy Solutions into a top-tier
                business-development agency that helped multiple U.S. companies
                achieve Inc. 5000 status. DigiReps itself became a million-dollar
                venture within just 1.5 years of launch.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 uppercase tracking-wider text-sm transition-all duration-300 ml-6"
              asChild
            >
              <a href="https://digireps.co/aboutus" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-border shadow-lg">
              <img src={nabeelPortrait} alt="Muhammad Nabeel Shamim" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
