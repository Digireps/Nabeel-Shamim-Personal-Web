import { Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="text-xl font-bold text-gradient font-['Outfit']">MNS</a>

        <div className="flex items-center gap-6">
          {["About", "Ventures", "Roles", "Press"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://digireps.co/aboutus"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Globe size={16} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © 2025 Muhammad Nabeel Shamim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
