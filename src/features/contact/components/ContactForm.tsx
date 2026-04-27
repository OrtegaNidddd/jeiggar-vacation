import { useState } from "react";
import type { ContactFormData } from "../types/contact.types";

import {
  WHATSAPP_NUMBER,
  CONTACT_FORM_TEMPLATE,
  sendWhatsAppMessage,
} from "@/lib/whatsapp";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSent(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sendWhatsAppMessage({
      phone: WHATSAPP_NUMBER,
      template: CONTACT_FORM_TEMPLATE,
      values: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    });

    setSent(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white">
      
      {/* Header */}
      <div className="border-b border-slate-100 px-5 py-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-900">
          Escríbenos
        </p>
      </div>

      {/* Campos */}
      <form id="contact-form" onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-wider text-slate-900">
            Nombre
          </label>
          <input
            id="name" type="text" name="name"
            value={formData.name} onChange={handleChange} required
            placeholder="Tu nombre"
            className="w-full rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-2.5 text-[13px] text-slate-900 outline-none placeholder:text-slate-300 focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-wider text-slate-900">
            Correo
          </label>
          <input
            id="email" type="email" name="email"
            value={formData.email} onChange={handleChange} required
            placeholder="correo@ejemplo.com"
            className="w-full rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-2.5 text-[13px] text-slate-900 outline-none placeholder:text-slate-300 focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-wider text-slate-900">
            Mensaje
          </label>
          <textarea
            id="message" name="message"
            value={formData.message} onChange={handleChange} required
            placeholder="Escribe tu mensaje..."
            className="w-full flex-1 resize-none rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-2.5 text-[13px] text-slate-900 outline-none placeholder:text-slate-300 focus:border-blue-500 focus:bg-white"
          />
        </div>
      </form>

      {/* Botón anclado al fondo */}
      <div className="px-5 pb-5 pt-0">
        <button
          type="submit"
          form="contact-form"
          className="w-full rounded-xl border border-blue-500 bg-transparent py-3 text-sm font-semibold text-blue-500 transition hover:bg-blue-50 active:scale-[0.98]"
        >
          Enviar mensaje
        </button>
        {sent && (
          <p className="mt-3 text-center text-xs font-medium text-green-600">
            Redirigiendo a WhatsApp...
          </p>
        )}
      </div>
    </div>
  );
}