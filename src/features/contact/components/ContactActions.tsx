import { Mail, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function ContactActions() {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Canales de atención
      </p>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
          className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white px-4 py-3 text-left hover:bg-slate-50 transition active:scale-[0.98]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-green-100">
            <MessageCircle size={18} className="text-green-600" />
          </span>
          <span>
            <div className="text-sm font-medium text-slate-900">Escribir por WhatsApp</div>
            <div className="text-xs text-slate-400">Respuesta en minutos</div>
          </span>
          <span className="ml-auto text-slate-300">→</span>
        </button>

        <button
          onClick={() => (window.location.href = "tel:+573208396909")}
          className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white px-4 py-3 text-left hover:bg-slate-50 transition active:scale-[0.98]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-blue-100">
            <Phone size={18} className="text-blue-600" />
          </span>
          <span>
            <div className="text-sm font-medium text-slate-900">Llamar ahora</div>
            <div className="text-xs text-slate-400">+57 320 839 6909</div>
          </span>
          <span className="ml-auto text-slate-300">→</span>
        </button>

        <button
          onClick={() => (window.location.href = "mailto:contacto@jeiggarvacation.com")}
          className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white px-4 py-3 text-left hover:bg-slate-50 transition active:scale-[0.98]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-violet-100">
            <Mail size={18} className="text-violet-600" />
          </span>
          <span>
            <div className="text-sm font-medium text-slate-900">Enviar correo</div>
            <div className="text-xs text-slate-400">contacto@jeiggarvacation.com</div>
          </span>
          <span className="ml-auto text-slate-300">→</span>
        </button>
      </div>

      <div className="my-4 h-px bg-slate-100" />

      <button
        onClick={() => navigate("/cotizar")}
        className="w-full rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition active:scale-[0.98]"
      >
        Solicitar cotización
      </button>
    </div>
  );
}