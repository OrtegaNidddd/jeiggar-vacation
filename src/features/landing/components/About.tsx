import AnimatedCard from "@/components/ui/AnimatedCard";
import { aboutUsCardsMock } from "@/mocks/landing";

export default function AboutUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {aboutUsCardsMock.map((item, index) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={index * 80}>
            <AnimatedCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}