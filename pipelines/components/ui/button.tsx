import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ variant = "default", className, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none h-9 px-4 py-2";
  const variants = {
    default: "bg-black text-white hover:bg-black/80 border border-transparent",
    outline:
      "border border-[#e4e4e7] bg-white hover:bg-[#f4f4f5] text-sm text-[#18181b]"
  } as const;

  return (
    <button
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}


