import AnimatedCard from "@/components/ui/AnimatedCard";
import { aboutUsCardsMock } from "@/mocks/about-us-cards.mock";

export default function AboutUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {aboutUsCardsMock.map((item) => (
          <AnimatedCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}