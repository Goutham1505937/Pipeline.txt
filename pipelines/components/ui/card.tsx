import * as React from "react";

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={["rounded-xl border border-[#e4e4e7] bg-white", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={["bg-white", className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}


