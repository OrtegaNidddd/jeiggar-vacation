type TemplateValues = Record<string, string | number>;

export const WHATSAPP_NUMBER = "573208396909";

export const CONTACT_FORM_TEMPLATE = [
  "*NUEVO CONTACTO WEB*",
  "━━━━━━━━━━━━━━━━━━",
  "",
  "*Cliente:* {name}",
  "*Correo:* {email}",
  "",
  "*Mensaje:*",
  "{message}",
  "",
  "━━━━━━━━━━━━━━━━━━",
  "Enviado desde la página web",
].join("\n");

export const HERO_RESERVATION_TEMPLATE = [
  "Hola, Jeiggar Vacation.",
  "Quiero reservar ahora y recibir asesoría para mi viaje.",
].join("\n");

export const FOOTER_WHATSAPP_TEMPLATE = [
  "Hola, Jeiggar Vacation.",
  "Te escribo desde el boton de WhatsApp del footer.",
  "Quiero mas informacion sobre sus planes.",
].join("\n");

export const PLANS_ADVISOR_TEMPLATE = [
  "Hola, Jeiggar Vacation.",
  "Quiero hablar con un asesor sobre los planes disponibles.",
].join("\n");

export const PLAN_INFO_TEMPLATE = [
  "Hola, Jeiggar Vacation.",
  "Quiero informacion sobre este plan:",
  "",
  "Plan: {planTitle}",
  "Categoria: {planCategory}",
].join("\n");

export const DESTINATION_RESERVATION_TEMPLATE = [
  "*Nueva solicitud de reserva*",
  "",
  "Destino: {destinationName}",
  "Ciudad: {cityName}",
  "",
  "Nombre: {fullName}",
  "Fechas: {startDate} -> {endDate}",
  "Viajeros: {adults} adulto(s), {children} niño(s)",
  "Contacto: {contact}",
].join("\n");

type SendWhatsAppMessageOptions = {
  phone: string;
  message?: string;
  template?: string;
  values?: TemplateValues;
};

export function buildWhatsAppMessage(
  template: string,
  values: TemplateValues = {}
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const value = values[key];
    return value === undefined ? "" : String(value);
  });
}

export function sendWhatsAppMessage({
  phone,
  message,
  template,
  values,
}: SendWhatsAppMessageOptions): void {
  const sanitizedPhone = phone.replace(/\D/g, "");
  const finalMessage = message ?? (template ? buildWhatsAppMessage(template, values) : "");

  if (!sanitizedPhone || !finalMessage) {
    return;
  }

  const url = `https://api.whatsapp.com/send?phone=${sanitizedPhone}&text=${encodeURIComponent(
    finalMessage
  )}`;

  const popup = window.open(url, "_blank", "noopener,noreferrer");

  if (!popup) {
    window.location.href = url;
  }
}