import AnimatedCard from "../../components/cards/AnimatedCard";
import ValuesSection from "./components/ValuesSection";
import { aboutUsCardsMock, aboutUsContentMock } from "../../mocks/about-us-cards.mock";

export default function AboutUs() {
  return (
    <div className="bg-(--bg) p-4">
      {/* HERO */}
        <div className="mx-auto border-b border-(--border) max-w-6xl my-8 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-(--text) mb-6">
            {aboutUsContentMock.title}
          </h2>

          <span className="text-xs tracking-wide bg-blue-100 text-(--primary-700) px-4 py-2 rounded-full font-bold mb-6">
            {aboutUsContentMock.badge}
          </span>
        </div>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 space-y-20">

        {/* Historia */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-(--text)">
            Nuestra Historia
          </h2>

          <p className="text-(--text-muted) leading-7">
            En <span className="font-semibold text-(--text)">Jeiggar Vacation</span>{" "}
            somos una agencia de viajes especializada en diseñar experiencias
            personalizadas que conectan a las personas con destinos auténticos y
            memorables. Liderados por Norly Alejandra, combinamos pasión por el
            turismo, conocimiento experto y atención al detalle para transformar
            cada viaje en una vivencia significativa.
          </p>

          <p className="text-(--text-muted) leading-7">
            Desde nuestros inicios, hemos trabajado con un enfoque claro: no vender
            simplemente paquetes turísticos, sino crear itinerarios a medida que
            respondan a los intereses, expectativas y estilo de cada viajero.
            Creemos que cada destino tiene una historia que merece ser vivida de
            manera segura, organizada y profundamente enriquecedora.
          </p>

          <p className="text-(--text-muted) leading-7">
            Nuestro equipo planifica cuidadosamente cada experiencia, ya sea una
            escapada de descanso, una aventura emocionante o una inmersión cultural.
            Nos comprometemos a ofrecer un servicio cercano, confiable y profesional,
            garantizando que cada detalle esté coordinado para que nuestros clientes
            disfruten sin preocupaciones.
          </p>

          <p className="text-(--text-muted) leading-7">
            En Jeiggar Vacation entendemos que viajar es más que desplazarse: es
            descubrir, aprender y conectar. Por eso, trabajamos para que cada
            experiencia sea auténtica, responsable y diseñada para dejar huella.
          </p>
        </div>

        {/* Misión / Visión / Objetivo */}
        <div className="grid gap-8 md:grid-cols-3">
          {aboutUsCardsMock.map((card) => (
            <AnimatedCard key={card.id} {...card} />
          ))}
        </div>

        <ValuesSection />

      </section>
    </div>
  );
}