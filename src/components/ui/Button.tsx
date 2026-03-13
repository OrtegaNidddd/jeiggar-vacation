import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  to?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  ...props
}: ButtonProps) {
  const base =
    "px-3 py-2 rounded-(--radius) text-sm! font-medium! transition cursor-pointer";

  const variants = {
    primary:
      "bg-(--primary) text-white! hover:bg-(--primary-700) transition-colors duration-400",
    secondary:
      "bg-white border border-(--border) hover:bg-(--bg-muted-2) transition-colors duration-400",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}