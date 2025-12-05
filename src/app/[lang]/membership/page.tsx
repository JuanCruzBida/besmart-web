import { getDictionary } from '@/utils/get-dictionary';
import MembershipPage from '@/pages/membership/membership-page';

export async function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' }
  ]
}

// CAMBIO AQUÍ: Definimos lang explícitamente como "es" | "en"
export default async function Membership({ params: { lang } }: { params: { lang: "es" | "en" } }) {
  const dict = await getDictionary(lang); // Ahora TypeScript está feliz

  return (
    <MembershipPage dict={dict} lang={lang} />
  );
}