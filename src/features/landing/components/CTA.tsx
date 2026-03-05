import { NavLink } from "react-router-dom";

export default function CTA() {
  return (
    <div className="mt-4 flex justify-center">
      <NavLink
        to="/cotizar"
        className="inline-flex items-center justify-center rounded-(--radius) bg-(--primary) px-6 py-3 text-sm font-semibold text-white! hover:bg-(--primary-700) transition"
      >
        Solicitar cotización
      </NavLink>
    </div>
  );
}