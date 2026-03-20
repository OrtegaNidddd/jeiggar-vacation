import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

export default function Contact() {
  return (
    <section className="px-4 py-10" data-aos="fade-up">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-foreground">Contacto</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          ¿Tienes alguna pregunta o quieres planear tu próximo viaje? Escríbenos por WhatsApp y te ayudamos a encontrar la mejor opción.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
