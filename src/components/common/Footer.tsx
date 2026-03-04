import { NavLink } from "react-router-dom";
import LogoImage from "../../assets/images/logo_jeiggar.png";
import {
  footerBrandMock,
  footerContactMock,
  footerSectionsMock,
} from "../../mocks/footer.mock";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-(--border) bg-(--bg)">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col items-left text-left space-y-5">
            <NavLink to="/" className="inline-block">
              <img
                src={LogoImage}
                alt="Jeiggar Vacation"
                className="w-40 h-auto"
              />
            </NavLink>

            <p className="text-sm leading-6 text-(--text-muted)!">
              {footerBrandMock.description}
            </p>
          </div>

          {/* Links sections */}
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-2 md:grid-cols-3">
            {footerSectionsMock.map((section) => (
              <div key={section.title}>
                
                <div className="text-sm font-semibold text-(--text)">
                  {section.title}
                </div>

                <ul className="mt-3 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className="text-sm text-(--text-muted)!"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <div className="text-sm font-semibold text-(--text)">
              Contacto
            </div>

            <div className="mt-3 space-y-2 text-sm text-(--text-muted)">
              <div>{footerContactMock.city}</div>
              <div>{footerContactMock.phone}</div>
              <div>{footerContactMock.email}</div>
            </div>
          </div>
        </div>

        {/* Social buttons */}
        <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
          <a
            href={footerContactMock.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-(--radius) border border-(--border) px-4 py-2 text-sm text-(--text) hover:bg-(--bg-muted) transition"
          >
            WhatsApp
          </a>

          <a
            href={footerContactMock.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-(--radius) border border-(--border) px-4 py-2 text-sm text-(--text) hover:bg-(--bg-muted) transition"
          >
            Instagram
          </a>

          <a
            href={footerContactMock.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-(--radius) border border-(--border) px-4 py-2 text-sm text-(--text) hover:bg-(--bg-muted) transition"
          >
            Facebook
          </a>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <NavLink
            to="/cotizar"
            className="inline-flex items-center justify-center rounded-(--radius) bg-(--primary) px-6 py-3 text-sm font-semibold text-white! hover:bg-(--primary-700) transition"
          >
            Solicitar cotización
          </NavLink>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-(--border) pt-6 text-sm text-(--text-muted) md:flex-row md:items-center md:justify-between">
          <span>
            © {year} Jeiggar Vacation. Todos los derechos reservados.
          </span>

          <span>Powered by N&N</span>
        </div>
      </div>
    </footer>
  );
}