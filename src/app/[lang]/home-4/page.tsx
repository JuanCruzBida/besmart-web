// src/app/[lang]/home-4/page.tsx

import React from 'react';
import { Metadata } from 'next';
import HomeFourMain from '@/pages/homes/home-4';
import { getDictionary } from '@/utils/get-dictionary'; // <--- IMPORTAR

type LangType = 'es' | 'en'; // Definimos el tipo de idioma

export const metadata: Metadata = {
  title: "Be Smart Technology",
};

// 1. OBLIGATORIO para la exportación estática
export async function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' }
  ]
}

// 2. La función de página debe recibir los parámetros de la ruta
export default async function HomePageFour({ params: { lang } }: { params: { lang: LangType } }) {
  
  // 3. Obtener el diccionario usando el idioma de la ruta
  const dict = await getDictionary(lang); 
  
  return (
    <HomeFourMain dict={dict} lang={lang} />
  );
};