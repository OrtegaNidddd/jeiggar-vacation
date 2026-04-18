import { Link } from 'react-router-dom'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

export default function InternationalDestinations() {
  return (
    <>
      <Breadcrumbs
        className="mb-4 pt-4"
        items={[
          { label: "Inicio", to: "/" },
          { label: "Destinos", to: "/destinos" },
          { label: "Internacionales" },
        ]}
      />

      <section className="px-4 py-10" data-aos="fade-up">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-foreground">Destinos internacionales</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Estamos preparando el catalogo internacional. Si quieres, te ayudamos a cotizar por WhatsApp mientras
          publicamos todos los destinos.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/destinos"
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-gray-50"
          >
            Volver a destinos
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
          >
            Quiero asesoría
          </a>
        </div>
        </div>
      </section>
    </>
  )
}
