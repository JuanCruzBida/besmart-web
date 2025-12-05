import { getDictionary } from '@/utils/get-dictionary';
import MerchPage from '@/pages/merch/merch-page';

// 1. Definimos explícitamente el Tipo de Idioma (LangType)
type LangType = 'es' | 'en';

export default async function Merch({ params: { lang } }: { params: { lang: string } }) {
  
  // 2. FORZAMOS el tipo de 'lang' antes de pasarlo a getDictionary
  const currentLang = lang as LangType; 

  // 3. Usamos la variable con el tipo forzado
  const dict = await getDictionary(currentLang); 

  return (
    <MerchPage dict={dict} lang={currentLang} /> 
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' }
  ]
}