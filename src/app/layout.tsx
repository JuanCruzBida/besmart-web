// src/app/layout.tsx

import type { Metadata } from "next";
// IMPORTANTE: Removemos todas las importaciones de fuentes aquí (Syne, Aladin, Big_Shoulders, etc.)
// Dejamos solo las globales
import { ThemeProvider } from "next-themes";
import "./globals.scss";

// Exportamos solo la metadata
export const metadata: Metadata = {
  title: "Be Smart Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Ya NO USAMOS lang="en" fijo aquí. Esto lo haremos dinámico en el Layout de Idioma.
    <html suppressHydrationWarning={true}>
      <body
        id="body"
        suppressHydrationWarning={true}
      >
        {/* Usamos ThemeProvider para que funcione en toda la app */}
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}