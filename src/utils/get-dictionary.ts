import 'server-only';


const dictionaries = {
  es: () => import('@/data/es.json').then((module) => module.default),
  en: () => import('@/data/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'es' | 'en') => {

  if (!dictionaries[locale]) {
    return dictionaries['es']();
  }
  return dictionaries[locale]();
};