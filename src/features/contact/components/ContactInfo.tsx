import { MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold mb-4">Información de contacto</h2>

      <div className="space-y-4">
        <div className="flex gap-3">
          <MapPin className="text-blue-500 mt-1" />
          <div>
            <h3 className="font-semibold">Dirección</h3>
            <p className="text-slate-600">
              Calle 21AN #1-112 Lc2 Prados Norte
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Phone className="text-blue-500 mt-1" />
          <div>
            <h3 className="font-semibold">Teléfonos</h3>
            <p className="text-slate-600">
              317 7338883 / 318 7280034
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}