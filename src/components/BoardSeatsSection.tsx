import { ExternalLink } from "lucide-react";

const roles = [
  { company: "DigiReps", role: "Founder & CEO", period: "2023 – Present", url: "https://digireps.co" },
  { company: "Prodigy Solutions", role: "Founder", period: "Prior to DigiReps", url: "#" },
  { company: "Forbes Business Council", role: "Official Member", period: "Present", url: "https://councils.forbes.com/profile/Muhammad-Nabeel-Shamim-Founder-CEO-DigiReps/f15d004f-bae0-4bee-8276-1af1b187609e" },
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
            Roles &amp; Leadership
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {roles.map((seat, i) => (
            <a
              key={i}
              href={seat.url}
              target="_blank"
              rel="noopener noreferrer"
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
