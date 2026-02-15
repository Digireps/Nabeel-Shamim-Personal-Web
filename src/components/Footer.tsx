import { Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-border-top py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative">
        <a href="#" className="text-xl font-bold text-gradient font-['Outfit']">MNS</a>

        <div className="flex items-center gap-6">
          {["About", "Ventures", "Roles", "Press"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/mnabeelshamim/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-teal transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://digireps.co/aboutus"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-teal transition-all duration-300"
          >
            <Globe size={16} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-border/30 relative">
        <p className="text-center text-xs text-muted-foreground">
          © 2025 Muhammad Nabeel Shamim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
