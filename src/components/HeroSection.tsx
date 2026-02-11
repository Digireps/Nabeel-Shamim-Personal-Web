import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
];

const tickerItems = [
  "VENTURE CAPITALIST",
  "ANGEL INVESTOR",
  "BOARD MEMBER",
  "TECH ADVISOR",
  "SERIAL ENTREPRENEUR",
  "KEYNOTE SPEAKER",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left */}
        <div className="z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-['Outfit'] leading-[0.95] mb-6">
            <span className="text-gradient">JOHN</span>
            <br />
            <span className="text-gradient">DOE</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 leading-relaxed">
            Venture Capitalist &amp; Angel Investor with a passion for backing
            transformative technology companies.
          </p>
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 uppercase tracking-wider text-sm"
            onClick={() => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>

        {/* Right - Portrait area */}
        <div className="relative flex items-center justify-center">
          <span className="absolute text-[12rem] md:text-[16rem] font-black font-['Outfit'] text-primary/5 select-none leading-none">
            VC
          </span>
          <div className="relative w-64 h-80 md:w-80 md:h-[26rem] rounded-2xl bg-secondary overflow-hidden border border-border">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Portrait Photo
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="w-full border-y border-border bg-secondary/50 py-4 overflow-hidden">
        <div className="marquee whitespace-nowrap flex">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="inline-block mx-8 text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium"
            >
              {item}
              <span className="ml-8 text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
