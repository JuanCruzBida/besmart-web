import React from "react";
// Importamos el componente "puente"
import HomePageFour from "@/pages/homes/home-4";
import { getDictionary } from '@/utils/get-dictionary';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function Page({ params }: { params: { lang: 'es' | 'en' } }) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      {/* CORRECCIÓN: Le pasamos 'lang' que viene de params */}
      <HomePageFour dict={dict} lang={params.lang} />
    </>
  );
}