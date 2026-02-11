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
              With over two decades of experience in venture capital and technology
              investments, I have had the privilege of backing some of the most
              innovative companies across fintech, healthtech, and enterprise SaaS.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My investment philosophy centers on identifying visionary founders
              who are building solutions to significant market problems. I believe
              in being an active partner, bringing strategic guidance, deep
              industry connections, and operational expertise to every portfolio
              company.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Prior to my career in venture capital, I held leadership positions at
              several Fortune 500 technology companies, where I gained firsthand
              experience in scaling businesses from startup to enterprise.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 uppercase tracking-wider text-sm"
            >
              Let's Know More
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
