import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="text-xl font-bold text-gradient font-['Outfit']">JD</a>

        <div className="flex items-center gap-6">
          {["About", "Investments", "Board Seats", "Feedback"].map((link) => (
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
          {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © 2024 John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
