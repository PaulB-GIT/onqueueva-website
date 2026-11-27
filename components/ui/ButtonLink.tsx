import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "gold" | "text";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] font-semibold transition-colors duration-200 min-h-11";

const variants: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50",
  gold: "bg-gold-500 text-navy-900 hover:bg-[#d9ae08]",
  text: "text-blue-600 underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-6 py-3.5 text-base",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "children" | "className">;

export function ButtonLink({ href, children, variant = "primary", size = "md", className = "", external, ...rest }: Props) {
  const classes = `${base} ${variants[variant]} ${variant === "text" ? "px-1" : sizes[size]} ${className}`;
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
