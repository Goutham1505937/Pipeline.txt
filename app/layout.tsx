import React from "react";
import "./globals.css";

export const metadata = {
  title: "Pipeline Visual Prototype",
  description: "Income statement → candidates → canonical IR → validated CSV"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

