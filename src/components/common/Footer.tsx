import { Link, NavLink } from "react-router-dom";
import Button from "@/components/ui/Button";
import { getPublicStorageUrl } from "@/lib/storage";
import {
  footerBrandMock,
  footerContactMock,
  footerSectionsMock,
} from "@/mocks/shared";
import {
  FOOTER_WHATSAPP_TEMPLATE,
  WHATSAPP_NUMBER,
  sendWhatsAppMessage,
} from "@/lib/whatsapp";
import { LockKeyhole } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const isologoUrl = getPublicStorageUrl("logos/isologo.webp", "images");

  const handleWhatsAppClick = () => {
    sendWhatsAppMessage({
      phone: WHATSAPP_NUMBER,
      message: FOOTER_WHATSAPP_TEMPLATE,
    });
  };

  return (
    <footer className="mt-12 border-t border-border bg-(--bg)">
      <div className="mx-auto max-w-7xl px-4 py-6">

        {/* Main grid */}
        <div data-aos="fade-up" className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="flex flex-col items-center text-center space-y-4 md:flex-row md:items-start md:text-left md:space-y-0 md:gap-4">
            <NavLink to="/" className="shrink-0">
              <img
                src={isologoUrl}
                alt="Jeiggar Vacation"
                width={192}
                height={192}
                loading="lazy"
                decoding="async"
                className="w-20 md:w-24 h-auto"
              />
            </NavLink>

            <p className="text-sm leading-6 text-(--text-muted)">
              {footerBrandMock.description}
            </p>
          </div>

          {/* Sections */}
          {footerSectionsMock.map((section, index) => (
            <div key={section.title} data-aos="fade-up" data-aos-delay={index * 60}>
              <div className="text-sm font-semibold text-(--text)">
                {section.title}
              </div>

              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    <NavLink
                      to={link.to}
                      className="text-sm text-(--text-muted) whitespace-nowrap"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Social buttons */}
        <div data-aos="fade-up" data-aos-delay={180} className="mt-6 flex justify-center items-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="rounded-lg border border-border px-4 py-2 text-sm text-(--text) hover:bg-(--bg-muted) transition"
          >
            WhatsApp
          </button>

          <a
            href={footerContactMock.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm text-(--text) hover:bg-(--bg-muted) transition"
          >
            Instagram
          </a>

          <a
            href={footerContactMock.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm text-(--text) hover:bg-(--bg-muted) transition"
          >
            Facebook
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay={220} className="mt-6 flex justify-center">
          <Button variant="primary"
            to={footerContactMock.quoteTo}
          >
            {footerContactMock.quoteLabel}
          </Button>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6 text-sm text-(--text-muted) md:flex-row md:items-center md:justify-between">
          <span>
            © {year} Jeiggar Vacation. Todos los derechos reservados.
          </span>

          <span className="flex items-center justify-center gap-3.5">
          
            N&N

            <Link to="/admin/login" >
              <LockKeyhole className="w-4 h-4"/>
            </Link>
          </span>
          

        </div>

      </div>
    </footer>
  );
}
