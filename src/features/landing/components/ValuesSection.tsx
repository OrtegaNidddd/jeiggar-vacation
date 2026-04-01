import AnimatedCard from "@/components/ui/AnimatedCard";
import { valuesMock } from "@/mocks/values.mock";

export default function ValuesSection() {
  return (

    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-(--text)">
        Nuestros Valores
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {valuesMock.map((v) => (
          <AnimatedCard
            key={v.title}
            title={v.title}
            description={v.description}
            icon={v.icon}
            centerText
          />
        ))}
      </div>
    </div>

  );
}