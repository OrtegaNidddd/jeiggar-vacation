import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationMock } from "../../mocks/navigation.mock";
import LogoImage from "../../assets/images/logo_jeiggar.png";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const base =
        "px-3 py-2 text-sm font-medium rounded-(--radius) transition-colors duration-400";
    const idle = "text-(--text-muted) hover:text-(--text) hover:bg-(--bg-muted)";
    const active = "text-(--text) bg-(--bg-muted-2) shadow-(--shadow-sm)";

    const closeMobile = () => setMobileOpen(false);

    // Aplana items para mobile (manteniendo grupos)
    const items = useMemo(() => navigationMock, []);

    return (
        <header className="sticky top-0 z-50 border-b border-(--border) bg-(--bg)">
            <div className="mx-auto flex max-w-6xl items-center justify-around px-4 py-3">
                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-base font-semibold text-(--text)"
                    onClick={closeMobile}
                >
                    <img src={LogoImage} className="h-auto w-40" alt="Logo" />
                </NavLink>

                {/* Nav para PC */}
                <nav className="hidden items-center gap-2 md:flex">
                    {items.map((item) => (
                        <div key={item.label} className="relative group">
                            {item.to ? (
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => {
                                        if (item.variant === "highlight") {
                                            return `px-4 py-2 text-sm font-semibold rounded-full bg-(--primary) text-white! hover:bg-(--primary-700) transition-colors duration-400`;
                                        }
                                        return `px-3 py-2 text-sm font-semibold rounded-full ${isActive ? active : idle}`;
                                    }}
                                >
                                    {item.label}
                                </NavLink>
                            ) : (
                                <span className={`${base} ${idle} cursor-default`}>
                                    {item.label}
                                </span>
                            )}

                            {/* Dropdown PC */}
                            {item.children && (
                                <div className="absolute left-0 mt-1 hidden min-w-56 rounded-(--radius) border border-(--border) bg-(--surface) shadow-(--shadow-md) group-hover:block">
                                    <div className="flex flex-col p-1">
                                        {item.children.map((child) => (
                                            <NavLink
                                                key={child.to}
                                                to={child.to}
                                                className={({ isActive }) =>
                                                    `px-3 py-2 text-sm rounded-(--radius) transition-colors ${isActive
                                                        ? "bg-(--bg-muted) text-(--text)"
                                                        : "text-(--text-muted) hover:bg-(--bg-muted) hover:text-(--text)"
                                                    }`
                                                }
                                            >
                                                {child.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Boton para movil */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center rounded-(--radius) border border-(--border) px-4 py-3 text-(--text) hover:bg-(--bg-muted)"
                    aria-label="Abrir menú"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    <span className="text-xl leading-none">{mobileOpen ? "✕" : "☰"}</span>
                </button>
            </div>

            {/* Nav para movil */}
            {mobileOpen && (
                <div className="md:hidden border-t border-(--border) bg-(--bg)">
                    <div className="mx-auto max-w-6xl px-4 py-3">
                        <div className="flex flex-col gap-1">
                            {items.map((item) => (
                                <div key={item.label} className="flex flex-col">
                                    {item.to ? (
                                        <NavLink
                                            to={item.to}
                                            onClick={closeMobile}
                                            className={({ isActive }) => {
                                                if (item.variant === "highlight") {
                                                    return `px-4 py-2 text-sm font-semibold rounded-(--radius) bg-(--primary) text-white! hover:bg-(--primary-700) transition-colors w-full text-left`;
                                                }
                                                return `${base} ${isActive ? active : idle} w-full text-left`
                                            }
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    ) : (
                                        <>
                                            <div className="px-3 py-2 text-xs font-semibold tracking-wide text-(--text-muted)">
                                                {item.label}
                                            </div>
                                            {item.children?.map((child) => (
                                                <NavLink
                                                    key={child.to}
                                                    to={child.to}
                                                    onClick={closeMobile}
                                                    className={({ isActive }) =>
                                                        `ml-2 ${base} ${isActive
                                                            ? "bg-(--bg-muted) text-(--text)"
                                                            : "text-(--text-muted) hover:bg-(--bg-muted) hover:text-(--text)"
                                                        }`
                                                    }
                                                >
                                                    {child.label}
                                                </NavLink>
                                            ))}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}