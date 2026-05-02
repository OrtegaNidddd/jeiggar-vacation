import ContactInfo from "../components/ContactInfo";
import ContactActions from "../components/ContactActions";
import ContactForm from "../components/ContactForm";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Breadcrumbs
          className="mb-8"
          items={[
            { label: "Inicio", to: "/" },
            { label: "Contacto" },
          ]}
        />
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Contacto
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Comunícate con Jeiggar Vacation para recibir asesoría personalizada
            sobre planes turísticos, servicios de viaje y cotizaciones.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactInfo />
            <ContactActions />
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}