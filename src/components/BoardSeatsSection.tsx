import { ExternalLink } from "lucide-react";

const boardSeats = [
  { company: "TechVentures Inc.", role: "Board Director", period: "2021 – Present", url: "#" },
  { company: "FinanceFlow Corp.", role: "Advisory Board", period: "2020 – Present", url: "#" },
  { company: "HealthBridge AI", role: "Board Observer", period: "2019 – 2023", url: "#" },
  { company: "CloudScale Systems", role: "Board Director", period: "2018 – 2022", url: "#" },
  { company: "GreenEnergy Labs", role: "Advisory Board", period: "2017 – 2021", url: "#" },
];

const BoardSeatsSection = () => {
  return (
    <section id="board-seats" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Leadership
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-['Outfit']">
            Board Seats
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {boardSeats.map((seat, i) => (
            <a
              key={i}
              href={seat.url}
              className="flex items-center justify-between p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group"
            >
              <div>
                <h3 className="font-semibold font-['Outfit'] group-hover:text-primary transition-colors">
                  {seat.company}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {seat.role} · {seat.period}
                </p>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardSeatsSection;
