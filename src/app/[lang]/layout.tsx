// src/app/[lang]/layout.tsx

import type { Metadata } from "next";
import {
  Syne, Aladin, Big_Shoulders_Display, Marcellus,
} from "next/font/google"; 
import localFont from "next/font/local";
// Importamos solo lo necesario para el cuerpo del layout, ThemeProvider lo envuelve fuera
import { ThemeProvider } from "next-themes"; 
import 'react-toastify/dist/ReactToastify.css'; // ESTILOS TOASTIFY
import { ToastContainer } from 'react-toastify'; // COMPONENTE TOASTIFY

// --- DEFINICIÓN COMPLETA DE FUENTES ---

const gellery = localFont({
  src: [ 
    {
      // RUTA CORREGIDA: Saliendo tres niveles: [lang] -> app -> src -> root -> public
      path: "../../../public/assets/fonts/gallerymodern-webfont.ttf", 
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
});
const big_shoulders = Big_Shoulders_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-shoulders",
});
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

export const metadata: Metadata = {
  title: "Be Smart Technology",
};

export default function LangLayout({
  children,
  params: { lang }, // Capturamos el idioma de la ruta
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    // Solo devolvemos los hijos envueltos en las clases de fuente.
      <div
        className={`${gellery.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${big_shoulders.variable} ${marcellus.variable}`}
      >
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        
        {/* Agregamos el contenedor de notificaciones */}
        <ToastContainer 
          position="top-right" 
          autoClose={5000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
          theme="light" 
        />
      </div>
  );
}