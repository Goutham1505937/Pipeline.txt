import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

export function Badge({ variant = "default", className, ...rest }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";
  const variants = {
    default: "bg-black text-white",
    secondary: "bg-slate-800 text-slate-50",
    outline: "border border-slate-300 text-slate-800"
  } as const;

  return (
    <span
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}


