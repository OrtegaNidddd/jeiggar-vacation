import AboutInfoCard from "../../components/cards/AboutInfoCard";
import ValuesSection from "../../components/ValuesSection";
import { aboutUsCardsMock } from "../../mocks/about-us-cards.mock";

export default function AboutUs() {
  return (
    <div className="bg-(--bg)">
      {/* HERO */}
      <section className="border-b border-(--border)">
        <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-(--text) mb-6">
            ¿Quiénes Somos?
          </h1>

          <p className="mt-3 text-(--text-muted) max-w-lg leading-7">
            Creamos experiencias de viaje auténticas, personalizadas y memorables.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-16 space-y-20">

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
            <AboutInfoCard key={card.id} {...card} />
          ))}
        </div>

        <ValuesSection />

      </section>
    </div>
  );
}