import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-(--radius) font-medium transition cursor-pointer";

  const variants = {
    primary:
      "bg-(--primary) text-white! hover:bg-(--primary-700) font-semibold! transition-colors duration-400",
    secondary:
      "bg-white border border-(--border) hover:bg-(--bg-muted-2) font-semibold! transition-colors duration-400",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}