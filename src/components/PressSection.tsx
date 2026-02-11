const pressItems = [
  { title: "Keynote at Global VC Summit 2024", source: "TechCrunch" },
  { title: "The Future of Fintech Investments", source: "Forbes" },
  { title: "Panel: AI in Enterprise", source: "Web Summit" },
  { title: "Investing in Climate Tech", source: "Bloomberg" },
  { title: "Fireside Chat: Founder Mindset", source: "CNBC" },
  { title: "How VC is Evolving in 2024", source: "The Information" },
];

const PressSection = () => {
  return (
    <section id="press" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Media
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-['Outfit']">
            Press, Talks & Conferences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group block rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-colors bg-card"
            >
              <div className="aspect-video bg-secondary flex items-center justify-center text-muted-foreground text-sm">
                Thumbnail
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-primary mb-2">
                  {item.source}
                </p>
                <h3 className="font-semibold font-['Outfit'] group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
