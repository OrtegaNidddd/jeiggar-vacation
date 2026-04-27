import QuoteForm from "../components/QuoteForm";

export default function QuotePage() {
  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div className="quote-hero__content">
          <span className="quote-hero__eyebrow">Cotizaciones personalizadas</span>

          <h1>Diseñamos tu viaje según tus fechas, destino y presupuesto</h1>

          <p>
            Completa el formulario y recibe una asesoría personalizada para planear
            tu próxima experiencia con Jeiggar Vacation.
          </p>
        </div>
      </section>

      <section className="quote-page__container">
        <QuoteForm />
      </section>
    </main>
  );
}