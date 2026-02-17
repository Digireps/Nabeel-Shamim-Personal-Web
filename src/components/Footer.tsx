import { Linkedin, Globe, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-primary/20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold text-gradient font-heading">MNS</a>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed max-w-xs">
              Building global businesses from Pakistan, connecting world-class talent with ambitious companies.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
              <Award size={14} />
              Forbes Business Council Member
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-heading text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {["About", "Ventures", "Roles", "Press"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold font-heading text-sm uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://www.linkedin.com/in/mnabeelshamim/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://digireps.co/aboutus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Globe size={16} />
              </a>
            </div>
            <a
              href="https://digireps.co/aboutus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary font-medium hover:underline"
            >
              Visit DigiReps →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 Muhammad Nabeel Shamim. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            🇵🇰 Built in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
