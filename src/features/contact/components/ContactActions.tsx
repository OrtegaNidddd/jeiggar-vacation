import { Mail, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function ContactActions() {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold mb-4">Canales de atención</h2>

      <div className="grid gap-3">
        <button
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-500 bg-transparent px-4 py-3 font-semibold text-emerald-600 hover:bg-emerald-50 transition"
        >
          <MessageCircle size={20} />
          Escribir por WhatsApp
        </button>

        <button
          onClick={() => (window.location.href = "tel:3177338883")}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white hover:bg-blue-600 transition"
        >
          <Phone size={20} />
          Llamar ahora
        </button>

        <button
          onClick={() => (window.location.href = "mailto:contacto@jeiggarvacation.com")}
          className="flex items-center justify-center gap-2 rounded-xl border border-blue-500 px-4 py-3 font-semibold text-blue-500 hover:bg-blue-50 transition"
        >
          <Mail size={20} />
          Enviar correo
        </button>

        <button
          onClick={() => navigate("/cotizar")}
          className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-800 transition"
        >
          Solicitar cotización
        </button>
      </div>
    </div>
  );
}