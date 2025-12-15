import * as React from "react";

type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement>;

export function ScrollArea({ className, style, ...rest }: ScrollAreaProps) {
  return (
    <div
      className={className}
      style={{
        overflow: "auto",
        ...style
      }}
      {...rest}
    />
  );
}


