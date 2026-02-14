const ventures = [
  { name: "DigiReps", description: "Remote Workforce Solutions" },
  { name: "Prodigy Solutions", description: "Business Development Agency" },
];

const InvestmentsSection = () => {
  return (
    <section id="investments" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Companies
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-['Outfit']">
            Ventures &amp; Companies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {ventures.map((company, i) => (
            <div
              key={i}
              className="aspect-[2/1] rounded-lg bg-card border border-border flex flex-col items-center justify-center hover:border-primary/40 transition-colors cursor-pointer group p-6"
            >
              <span className="text-foreground group-hover:text-primary transition-colors text-lg font-semibold font-['Outfit']">
                {company.name}
              </span>
              <span className="text-muted-foreground text-sm mt-1">
                {company.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;
