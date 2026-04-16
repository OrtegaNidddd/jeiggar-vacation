import AnimatedCard from "@/components/ui/AnimatedCard";
import ValuesSection from "./components/ValuesSection";
import { aboutUsCardsMock, aboutUsContentMock } from "@/mocks/landing";

export default function AboutUs() {
  return (
    <div className="bg-(--bg) p-4" data-aos="fade-up">
      {/* HERO */}
        <div className="mx-auto border-b border-(--border) max-w-6xl my-8 flex flex-col items-center text-center">
          <h1 data-aos="fade-down" className="text-3xl md:text-4xl font-bold text-(--text) mb-6">
            {aboutUsContentMock.title}
          </h1>

          <span
            data-aos="fade-down"
            data-aos-delay="80"
            className="text-xs tracking-wide bg-blue-100 text-(--primary-700) px-4 py-2 rounded-full font-bold mb-6"
          >
            {aboutUsContentMock.badge}
          </span>
        </div>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 space-y-20">

        {/* Historia */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 data-aos="fade-right" className="text-2xl font-semibold text-(--text)">
            {aboutUsContentMock.historyTitle}
          </h2>

          {aboutUsContentMock.historyParagraphs.map((paragraph, index) => (
            <p
              key={index}
              data-aos="fade-up"
              data-aos-delay={120 + index * 70}
              className="text-(--text-muted) leading-7"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Misión / Visión / Objetivo */}
        <div className="grid gap-8 md:grid-cols-3">
          {aboutUsCardsMock.map((card, index) => (
            <div key={card.id} data-aos="zoom-in" data-aos-delay={100 + index * 90}>
              <AnimatedCard
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </div>
          ))}
        </div>

        <ValuesSection />

      </section>
    </div>
  );
}