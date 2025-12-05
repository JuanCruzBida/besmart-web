import React from "react";
import Link from "next/link";

// Definimos las props (igual que en HeaderMenus)
type Props = {
  dict: any;
  lang: string;
}

export default function MobileMenus({ dict, lang = "es" }: Props) {
  
  // --- HELPER: Construir rutas dinámicas ---
  const getRoute = (link: string) => {
    // Si es un link externo o ancla, no lo tocamos
    if (!link || link.startsWith("http") || link.startsWith("#")) return link;
    
    // Si es el home, devolvemos solo el idioma (ej: /es)
    if (link === "/") return `/${lang}`;
    
    // Para el resto, aseguramos el formato /es/ruta
    const cleanLink = link.startsWith('/') ? link : `/${link}`;
    return `/${lang}${cleanLink}`;
  };

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {/* Reemplazamos el map de menu_data por los links directos del diccionario.
           Esto asegura que coincida 100% con el menú de escritorio y se traduzca.
        */}
        
        <li>
            <Link href={getRoute('/')}>
                {dict?.nav?.home || "Home"}
            </Link>
        </li>
        
        <li>
            <Link href={getRoute('/membership')}>
                {dict?.nav?.membership || "Membership"}
            </Link>
        </li>
        
        <li>
            <Link href={getRoute('/merch')}>
                {dict?.nav?.merch || "Merch"}
            </Link>
        </li>
        
        <li>
            <Link href={getRoute('/contact')}>
                {dict?.nav?.contact || "Contacto"}
            </Link>
        </li>

      </ul>
    </nav>
  );
}