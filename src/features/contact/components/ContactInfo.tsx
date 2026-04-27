import { MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
      <div className="border-b border-slate-100 px-5 py-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          Información de contacto
        </p>
      </div>

      <div className="divide-y divide-slate-50">
        <div className="flex items-center gap-4 px-5 py-4">
          <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-blue-100">
            <MapPin size={17} className="text-blue-600" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Dirección
            </p>
            <p className="text-sm font-medium text-slate-900">
              Calle 21AN #1-112 Lc2 Prados Norte
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-5 py-4">
          <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-green-100">
            <Phone size={17} className="text-green-600" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Teléfonos
            </p>
            <p className="text-sm font-medium text-slate-900">
              3208396909
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}