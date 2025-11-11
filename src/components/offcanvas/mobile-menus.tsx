import React from "react";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu-data";
// import shop_banner from '@/assets/img/menu/shop-menu/banner-1.jpg';
import port_img from '@/assets/img/menu/portfolio-menu/portfolio.png';

export default function MobileMenus() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {menu_data.map((menu) => {
            // --- INICIO DE LA MODIFICACIÓN ---
            // Verificamos si este item TIENE CUALQUIER tipo de submenú
            const hasSubmenu =
              menu.home_menus ||
              menu.pages_mega_menu ||
              menu.portfolio_mega_menus ||
              (menu.dropdown_menus && menu.dropdown_menus.length > 0);
            // --- FIN DE LA MODIFICACIÓN ---

            return (
              <li
                key={menu.id}
                className={`has-dropdown ${
                  menu.home_menus || menu.portfolio_mega_menus
                    ? "has-homemenu"
                    : ""
                } ${menu.home_menus ? "dropdown-opened" : ""}`}
              >
                {/* --- INICIO DE LA MODIFICACIÓN --- */}
                {/* Si SÍ tiene submenú, mostramos el botón de acordeón (<a>).
                  Si NO tiene submenú, mostramos un link real (<Link>).
                */}
                {hasSubmenu ? (
                  <a
                    className="pointer"
                    onClick={() => openMobileMenu(menu.title)}
                  >
                    {menu.title}
                  </a>
                ) : (
                  <Link href={menu.link}>{menu.title}</Link>
                )}
                {/* --- FIN DE LA MODIFICACIÓN --- */}

                {/* La lógica de los submenús queda idéntica */}
                {menu.home_menus ? (
                  <div className="tp-submenu submenu tp-mega-menu" style={{ display: navTitle === menu.title ? "block" : "none"}}>
                    <div className="tp-menu-fullwidth">
                      {/* ... (código del home_menus) ... */}
                    </div>
                  </div>
                ) : menu.pages_mega_menu ? (
                  <div className="tp-submenu submenu tp-mega-menu" style={{ display: navTitle === menu.title ? "block" : "none"}}>
                    <div className="tp-megamenu-wrapper">
                      {/* ... (código del pages_mega_menu) ... */}
                    </div>
                  </div>
                ) : menu.portfolio_mega_menus ? (
                  <div className="tp-submenu submenu tp-mega-menu" style={{ display: navTitle === menu.title ? "block" : "none"}}>
                    <div className="tp-menu-fullwidth">
                      {/* ... (código del portfolio_mega_menus) ... */}
                    </div>
                  </div>
                ) : menu.dropdown_menus ? (
                  <ul className="tp-submenu submenu" style={{ display: navTitle === menu.title ? "block" : "none"}}>
                    {menu.dropdown_menus.map((mm, i) => (
                      <li key={i}>
                        <Link href={mm.link}>{mm.title}</Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}