import { cn } from "@/lib/utils";
import { Shield, BarChart, Users, Target } from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Executive Strategy Session",
      description: "Facilitated C-Suite briefing on the impact of AI on customer and prospect behaviour",
      outcome: "Leadership alignment on AI discovery trends. Understand how customer & prospect behaviour is changing and what is hype vs. reality.",
      icon: <Target />,
    },
    {
      title: "AI Perception",
      description: "Forensic analysis of how major models perceive your brand within the category.",
      outcome: "Clear view of position, with quantified gaps versus leaders.",
      icon: <Shield />,
    },
    {
      title: "Audience Resonance Testing",
      description: "Simulations across all major buyer-personas.",
      outcome: "Where you win and where you risk losing, by customer segment.",
      icon: <Users />,
    },
    {
      title: "Brand Duel Analysis", 
      description: "Head to head comparisons against priority competitors.",
      outcome: "Evidence of where and why rivals are favoured, including attributes and percent likelihoods.",
      icon: <BarChart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  outcome,
  icon,
  index,
}: {
  title: string;
  description: string;
  outcome: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        index === 0 && "lg:border-l dark:border-neutral-800",
        "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10" style={{ color: '#fca311' }}>
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#fca311] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 mb-3">
        {description}
      </p>
      <p className="text-xs text-neutral-700 dark:text-neutral-200 max-w-xs relative z-10 px-10">
        <span className="font-semibold">Outcome:</span> {outcome}
      </p>
      {title !== "Executive Strategy Session" && (
        <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-200 max-w-xs relative z-10 px-10 mt-2">
          Actionable Recommendations.
        </p>
      )}
    </div>
  );
};