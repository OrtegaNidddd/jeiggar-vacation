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
    <div className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold mb-4">Escríbenos</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block font-medium">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-medium">
            Correo
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block font-medium">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Escribe tu mensaje..."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white hover:bg-blue-600 transition"
        >
          Enviar mensaje
        </button>

        {sent && (
          <p className="text-center font-medium text-green-600">
            Redirigiendo a WhatsApp...
          </p>
        )}
      </form>
    </div>
  );
}