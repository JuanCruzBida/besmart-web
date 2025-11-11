import { IMenuDT } from "@/types/menu-d-t";

// 1. DATOS PARA EL MENÚ DE ESCRITORIO (El que vos ya arreglaste)
const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Membership",
    link: "/membership",
  },
  {
    id: 3,
    title: "Merchandise",
    link: "/merch", // Dejé el link que tenías
  },
  {
    id: 5, // Dejé el ID 5 que tenías
    title: "Contacto",
    link: "/contact",
  },
];

export default menu_data;

// 2. DATOS PARA EL MENÚ DE MÓVIL (Aquí estaba el error)
// Lo limpié para que tenga los mismos 4 links, pero respetando la estructura que necesita
export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
}[] = [
  {
    id: 1,
    title: "Home",
    link: "/home-4",

  },
  {
    id: 2,
    title: "Membership",
    link: "/membership",

  },
  {
    id: 3,
    title: "Merchandise",
    link: "/merch",

  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact",

  },
];