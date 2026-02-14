import { Button } from "@/components/ui/button";

const IntroductionSection = () => {
  return (
    <section id="introduction" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-2">
            Introduction
          </h2>
          <div className="w-12 h-0.5 bg-primary" />
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-start">
          <div>
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
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 uppercase tracking-wider text-sm"
              asChild
            >
              <a href="https://digireps.co/aboutus" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
          </div>

          <div className="w-full aspect-[3/4] rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground text-sm">
            Portrait Photo
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
