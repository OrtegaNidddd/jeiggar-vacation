import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
};

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    to?: never;
  };

type AsLink = CommonProps &
  Omit<LinkProps, keyof CommonProps | "to"> & {
    to: string;
  };

type ButtonProps = AsButton | AsLink;

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
      <Link to={to} className={classes} {...(props as Omit<LinkProps, "to" | "className">)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}