import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Nabeel's ability to identify talent and build high-performing remote teams is unmatched. He transformed how our company approaches hiring.",
    name: "Alex Rivera",
    title: "CEO, U.S. Tech Startup",
  },
  {
    quote: "Working with DigiReps was a game-changer. Nabeel's hands-on leadership and commitment to quality delivered results far beyond our expectations.",
    name: "Jessica Morgan",
    title: "VP of Operations, SaaS Company",
  },
  {
    quote: "Nabeel brings a rare combination of entrepreneurial vision and operational excellence. His insights on scaling businesses are invaluable.",
    name: "Ryan Patel",
    title: "Founder, E-Commerce Brand",
  },
  {
    quote: "A true leader who leads by example. Nabeel's work ethic and strategic thinking have made a lasting impact on everyone who works with him.",
    name: "Samantha Lee",
    title: "Director of Growth, Inc. 5000 Company",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Testimonials
          </h2>
          <p className="text-3xl md:text-4xl font-bold font-['Outfit']">
            What Clients &amp; Peers Say
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Quote size={40} className="text-primary/30 mx-auto mb-6" />
          <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-8 min-h-[6rem]">
            "{t.quote}"
          </p>
          <div className="w-14 h-14 rounded-full bg-secondary border border-border mx-auto mb-4 flex items-center justify-center text-muted-foreground text-xs">
            Photo
          </div>
          <p className="font-semibold font-['Outfit'] text-primary">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.title}</p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
