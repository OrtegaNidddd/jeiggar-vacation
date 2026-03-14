import { useState, type FormEvent } from "react";
import { ctaLandingMock } from "../../../mocks/cta-landing.mock";

export default function CTA() {
  const {
    title,
    description,
    inputPlaceholder,
    buttonLabel,
    whatsappNumber,
    messageTemplate,
  } = ctaLandingMock;
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Normalizamos el teléfono eliminando todo lo que no sean dígitos
    const userPhone = phone.replace(/\D/g, "");

    // Si tras normalizar no queda nada, mostramos un mensaje de error
    if (!userPhone) {
      window.alert("Por favor ingresa un número de teléfono válido.");
      return;
    }

    const destination = whatsappNumber.replace(/\D/g, "");
    const message = messageTemplate.replace("{phone}", userPhone);
    const url = `https://wa.me/${destination}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-(--border) bg-(--bg) px-6 py-10 sm:px-10 md:px-12 md:py-12">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle, #cbe0ff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-(--text)">{title}</h2>
              <p className="mt-3 max-w-xl text-xl text-(--text-muted)">{description}</p>
            </div>

            <form
              className="flex w-full flex-col gap-3 sm:flex-row lg:justify-end"
              onSubmit={handleSubmit}
            >
              <input
                type="tel"
                placeholder={inputPlaceholder}
                aria-label={inputPlaceholder}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
                className="w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-base text-(--text) outline-none transition placeholder:text-(--text-muted) focus:ring-[3px] focus:ring-(--focus)"
              />
              <button
                type="submit"
                className="rounded-full bg-(--primary) px-8 py-3 text-base font-semibold text-white transition hover:bg-(--primary-700)"
              >
                {buttonLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}