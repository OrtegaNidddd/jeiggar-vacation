import type { PlansTrendingContent } from "@/domain/types/Plans";

type PlansTrendingProps = {
  content: PlansTrendingContent;
};

export default function PlansTrending({ content }: PlansTrendingProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <h2 data-aos="fade-right" className="text-2xl font-bold text-slate-900">{content.title}</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7">
        {content.destinations.map((destination, index) => (
          <div key={destination.name} data-aos="zoom-in" data-aos-delay={index * 50} className="flex flex-col items-center gap-2 text-center">
            <img
              src={destination.image}
              alt={destination.imageAlt}
              loading="lazy"
              className="h-24 w-24 rounded-full border-2 border-white object-cover shadow-md"
            />
            <span className="text-xs font-semibold text-slate-600">{destination.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
