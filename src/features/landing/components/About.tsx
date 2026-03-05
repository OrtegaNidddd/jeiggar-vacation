import AboutInfoCard from "../components/AboutInfoCard";
import { aboutUsCardsMock } from "../../../mocks/about-us-cards.mock";

export default function AboutUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {aboutUsCardsMock.map((item) => (
          <AboutInfoCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}