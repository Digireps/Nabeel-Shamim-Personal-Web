const placeholderLogos = Array.from({ length: 16 }, (_, i) => ({
  name: `Company ${i + 1}`,
}));

const InvestmentsSection = () => {
  return (
    <section id="investments" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Portfolio
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-['Outfit']">
            Investments & Exits
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {placeholderLogos.map((company, i) => (
            <div
              key={i}
              className="aspect-[2/1] rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/40 transition-colors cursor-pointer group"
            >
              <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm font-medium">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;
