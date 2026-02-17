import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { prefix: "$", value: 1, suffix: "M+", label: "Revenue Generated" },
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 50, suffix: "+", label: "Years Leadership Experience" },
  { value: 350, suffix: "+", label: "Reps Placed" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

const StatItem = ({ stat, started }: { stat: Stat; started: boolean }) => {
  const count = useCountUp(stat.value, 2000, started);

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <p className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-primary mb-2">
        {stat.prefix}
        {count}
        {stat.suffix}
      </p>
      <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider text-center">
        {stat.label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="border-y-2 border-primary/20 grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-primary/10 divide-y lg:divide-y-0 divide-primary/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} started={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
