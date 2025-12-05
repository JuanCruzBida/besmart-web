// src/app/[lang]/contact/page.tsx

import { getDictionary } from '@/utils/get-dictionary';
import Contact from '@/pages/contact/contact';

// Definimos el tipo de idioma para tipado estricto
type LangType = 'es' | 'en';

// ¡OBLIGATORIO para que Next.js compile rutas estáticas para ES y EN!
export async function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' }
  ]
}

// La función de página recibe los parámetros de ruta y los tipamos
export default async function ContactPage({ params: { lang } }: { params: { lang: LangType } }) {
  // Obtenemos el diccionario usando el idioma de la ruta
  const dict = await getDictionary(lang); 
  
  // Pasamos dict y lang al componente principal
  return <Contact dict={dict} lang={lang} />;
}