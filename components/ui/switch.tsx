import * as React from "react";

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export function Switch({ checked, onCheckedChange }: SwitchProps) {
  return (
    <button
      type="button"
      onClick={() => onCheckedChange(!checked)}
      aria-pressed={checked}
      style={{
        width: 36,
        height: 20,
        borderRadius: 999,
        border: "1px solid #e4e4e7",
        backgroundColor: checked ? "#16a34a" : "#e5e7eb",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: checked ? "flex-end" : "flex-start",
        cursor: "pointer"
      }}
    >
      <span
        style={{
          width: 16,
          height: 16,
          borderRadius: "999px",
          backgroundColor: "#ffffff",
          margin: "1px"
        }}
      />
    </button>
  );
}


