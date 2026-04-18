import { Link } from 'react-router-dom'
import Breadcrumbs from '@/components/common/Breadcrumbs'

const destinationOptions = [
  {
    title: 'Destinos nacionales',
    description: 'Explora rutas y experiencias dentro de Colombia.',
    to: '/destinos/nacionales',
  },
  {
    title: 'Destinos internacionales',
    description: 'Descubre escapadas fuera del pais con acompanamiento personalizado.',
    to: '/destinos/internacionales',
  },
]

export default function DestinationsSelector() {
  return (
    <>
      <Breadcrumbs
        className="mb-4 pt-4"
        items={[
          { label: "Inicio", to: "/" },
          { label: "Destinos" },
        ]}
      />

      <section className="px-4 py-10" data-aos="fade-up">
        <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Elige tu tipo de destino</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Selecciona si deseas viajar a un destino nacional o internacional.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {destinationOptions.map(option => (
            <Link
              key={option.to}
              to={option.to}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-foreground">{option.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{option.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">Ver destinos</span>
            </Link>
          ))}
        </div>
        </div>
      </section>
    </>
  )
}
