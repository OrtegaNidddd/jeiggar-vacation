import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { QuoteFormData } from "../types/quote.types";

import {
  accommodationTypes,
  budgetRanges,
  destinationTypes,
  extraServices,
  internationalDestinations,
  nationalDestinations,
  transportTypes,
  travelTypes,
} from "../data/quoteOptions";

import {
  WHATSAPP_NUMBER,
  sendWhatsAppMessage,
} from "@/lib/whatsapp";

const INITIAL_FORM_DATA: QuoteFormData = {
  fullName: "",
  email: "",
  phone: "",
  originCity: "",

  destinationType: "",
  destination: "",
  departureDate: "",
  returnDate: "",

  adults: "1",
  children: "0",
  travelType: "vacaciones",

  accommodation: "sin-definir",
  transport: "sin-definir",
  extras: [],

  budgetRange: "medio",
  customBudget: "",

  comments: "",
};

const QUOTE_TEMPLATE = [
  "*Nueva solicitud de cotización - Jeiggar Vacation*",
  "",
  "*Datos del cliente*",
  "Nombre: {fullName}",
  "Correo: {email}",
  "Teléfono: {phone}",
  "Ciudad de origen: {originCity}",
  "",
  "*Información del viaje*",
  "Tipo de destino: {destinationType}",
  "Destino: {destination}",
  "Fecha de salida: {departureDate}",
  "Fecha de regreso: {returnDate}",
  "Adultos: {adults}",
  "Niños: {children}",
  "Tipo de viaje: {travelType}",
  "",
  "*Preferencias*",
  "Alojamiento: {accommodation}",
  "Transporte: {transport}",
  "Servicios adicionales: {extras}",
  "",
  "*Presupuesto*",
  "Rango: {budgetRange}",
  "Presupuesto específico: {customBudget}",
  "",
  "*Comentarios adicionales*",
  "{comments}",
].join("\n");

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function formatValue(value: string) {
  if (!value) return "No especificado";

  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function buildQuoteMessage(formData: QuoteFormData) {
  const extrasText =
    formData.extras.length > 0 ? formData.extras.join(", ") : "No especificados";

  return QUOTE_TEMPLATE
    .replace("{fullName}", formData.fullName)
    .replace("{email}", formData.email)
    .replace("{phone}", formData.phone)
    .replace("{originCity}", formData.originCity || "No especificada")
    .replace("{destinationType}", formatValue(formData.destinationType))
    .replace("{destination}", formData.destination)
    .replace("{departureDate}", formData.departureDate)
    .replace("{returnDate}", formData.returnDate)
    .replace("{adults}", formData.adults)
    .replace("{children}", formData.children)
    .replace("{travelType}", formatValue(formData.travelType))
    .replace("{accommodation}", formatValue(formData.accommodation))
    .replace("{transport}", formatValue(formData.transport))
    .replace("{extras}", extrasText)
    .replace("{budgetRange}", formatValue(formData.budgetRange))
    .replace(
      "{customBudget}",
      formData.customBudget || "No especificado"
    )
    .replace("{comments}", formData.comments || "Sin comentarios adicionales");
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_DATA);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const availableDestinations = useMemo(() => {
    if (formData.destinationType === "nacional") return nationalDestinations;
    if (formData.destinationType === "internacional") return internationalDestinations;
    return [];
  }, [formData.destinationType]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "destinationType" ? { destination: "" } : {}),
    }));

    setError("");
    setSent(false);
  };

  const handleExtraChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      extras: checked
        ? [...prev.extras, value]
        : prev.extras.filter((extra) => extra !== value),
    }));

    setError("");
    setSent(false);
  };

  const validateForm = () => {
    const adults = Number(formData.adults);
    const children = Number(formData.children);

    if (!formData.fullName.trim()) return "Ingresa el nombre completo.";
    if (!formData.email.trim()) return "Ingresa el correo electrónico.";
    if (!formData.phone.trim()) return "Ingresa el número de teléfono.";
    if (!formData.destinationType) return "Selecciona el tipo de destino.";
    if (!formData.destination) return "Selecciona el destino.";
    if (!formData.departureDate) return "Selecciona la fecha de salida.";
    if (!formData.returnDate) return "Selecciona la fecha de regreso.";

    if (formData.returnDate < formData.departureDate) {
      return "La fecha de regreso no puede ser anterior a la fecha de salida.";
    }

    if (Number.isNaN(adults) || adults < 1) {
      return "Debe viajar al menos un adulto.";
    }

    if (Number.isNaN(children) || children < 0) {
      return "La cantidad de niños no puede ser negativa.";
    }

    if (formData.budgetRange === "personalizado" && !formData.customBudget.trim()) {
      return "Ingresa el presupuesto aproximado.";
    }

    return "";
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      setSent(false);
      return;
    }

    const message = buildQuoteMessage(formData);

    sendWhatsAppMessage({
      phone: WHATSAPP_NUMBER,
      message,
    });

    setSent(true);
    setError("");
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <section className="quote-form__section">
        <div className="quote-form__section-header">
          <span>01</span>
          <div>
            <h2>Datos del cliente</h2>
            <p>Información básica para contactarte y dar seguimiento a la solicitud.</p>
          </div>
        </div>

        <div className="quote-form__grid">
          <label>
            Nombre completo *
            <input
              type="text"
              name="fullName"
              placeholder="Ej: Nelly Fabiola Cano"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>

          <label>
            Correo electrónico *
            <input
              type="email"
              name="email"
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Teléfono *
            <input
              type="tel"
              name="phone"
              placeholder="Ej: 3001234567"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Ciudad de origen
            <input
              type="text"
              name="originCity"
              placeholder="Ej: Cúcuta"
              value={formData.originCity}
              onChange={handleChange}
            />
          </label>
        </div>
      </section>

      <section className="quote-form__section">
        <div className="quote-form__section-header">
          <span>02</span>
          <div>
            <h2>Información del viaje</h2>
            <p>Destino, fechas y cantidad de viajeros.</p>
          </div>
        </div>

        <div className="quote-form__grid">
          <label>
            Tipo de destino *
            <select
              name="destinationType"
              value={formData.destinationType}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              {destinationTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Destino *
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              disabled={!formData.destinationType}
            >
              <option value="">Selecciona un destino</option>
              {availableDestinations.map((destination) => (
                <option key={destination} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
          </label>

          <label>
            Fecha de salida *
            <input
              type="date"
              name="departureDate"
              min={getTodayDate()}
              value={formData.departureDate}
              onChange={handleChange}
            />
          </label>

          <label>
            Fecha de regreso *
            <input
              type="date"
              name="returnDate"
              min={formData.departureDate || getTodayDate()}
              value={formData.returnDate}
              onChange={handleChange}
            />
          </label>

          <label>
            Adultos *
            <input
              type="number"
              name="adults"
              min="1"
              value={formData.adults}
              onChange={handleChange}
            />
          </label>

          <label>
            Niños
            <input
              type="number"
              name="children"
              min="0"
              value={formData.children}
              onChange={handleChange}
            />
          </label>

          <label>
            Tipo de viaje
            <select
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
            >
              {travelTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="quote-form__section">
        <div className="quote-form__section-header">
          <span>03</span>
          <div>
            <h2>Preferencias del servicio</h2>
            <p>Ayúdanos a personalizar mejor tu cotización.</p>
          </div>
        </div>

        <div className="quote-form__grid">
          <label>
            Tipo de alojamiento
            <select
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
            >
              {accommodationTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Transporte
            <select
              name="transport"
              value={formData.transport}
              onChange={handleChange}
            >
              {transportTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="quote-form__extras">
          <p>Servicios adicionales</p>

          <div className="quote-form__checkbox-grid">
            {extraServices.map((service) => (
              <label key={service} className="quote-form__checkbox">
                <input
                  type="checkbox"
                  value={service}
                  checked={formData.extras.includes(service)}
                  onChange={handleExtraChange}
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-form__section">
        <div className="quote-form__section-header">
          <span>04</span>
          <div>
            <h2>Presupuesto y detalles</h2>
            <p>Esto permite ajustar la propuesta a tus necesidades reales.</p>
          </div>
        </div>

        <div className="quote-form__grid">
          <label>
            Rango de presupuesto
            <select
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
            >
              {budgetRanges.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          {formData.budgetRange === "personalizado" && (
            <label>
              Presupuesto aproximado
              <input
                type="text"
                name="customBudget"
                placeholder="Ej: $3.000.000 COP"
                value={formData.customBudget}
                onChange={handleChange}
              />
            </label>
          )}
        </div>

        <label>
          Comentarios adicionales
          <textarea
            name="comments"
            rows={5}
            placeholder="Ej: Quiero un plan familiar, con hotel cerca a la playa y tours incluidos."
            value={formData.comments}
            onChange={handleChange}
          />
        </label>
      </section>

      {error && <p className="quote-form__message quote-form__message--error">{error}</p>}

      {sent && (
        <p className="quote-form__message quote-form__message--success">
          Solicitud generada correctamente. Te redirigiremos a WhatsApp.
        </p>
      )}

      <button type="submit" className="quote-form__button">
        Solicitar cotización por WhatsApp
      </button>
    </form>
  );
}