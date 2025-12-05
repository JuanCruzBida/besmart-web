import React, { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu-data";

const imgStyle: CSSProperties = { width: "100%", height: "auto", objectFit: "cover" };

// 1. Recibimos dict y lang
const HeaderMenus = ({ dict, lang }: { dict: any; lang: string }) => {

  // --- HELPER 1: Construir rutas dinámicas ---
  // Convierte "/membership" en "/es/membership" o "/en/membership"
  const getRoute = (link: string) => {
    // Ignoramos links externos o anclas
    if (!link || link.startsWith("http") || link.startsWith("#")) return link;
    // Caso especial para el home
    if (link === "/") return `/${lang}`;
    // Aseguramos que empiece con /
    const cleanLink = link.startsWith('/') ? link : `/${link}`;
    return `/${lang}${cleanLink}`;
  };

  // --- HELPER 2: Traducir títulos del menú principal ---
  const getLabel = (menu: any) => {
    const title = menu.title.toLowerCase().trim();
    const n = dict?.nav;

    if (!n) return menu.title;

    if (title === 'home') return n.home || menu.title;
    if (title === 'membership') return n.membership || menu.title;
    if (title.includes('merch')) return n.merch || menu.title; // detecta 'merchandise' o 'merch'
    if (title === 'contact' || title.includes('contacto')) return n.contact || menu.title;
    
    return menu.title;
  };

  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id} className="has-dropdown">
          {/* APLICAMOS HELPERS AQUÍ */}
          <Link href={getRoute(menu.link)}>{getLabel(menu)}</Link>
          
          {menu.home_menus ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-menu-fullwidth">
                <div className="tp-homemenu-wrapper">
                  <div className="row gx-25 row-cols-xl-6 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    {menu.home_menus.map((home_menu, i) => (
                      <div key={i} className="col homemenu">
                        <div className="homemenu-thumb-wrap mb-20">
                          <div className="homemenu-thumb fix">
                            {/* APLICAMOS getRoute */}
                            <Link href={getRoute(home_menu.link)}>
                              <Image src={home_menu.img} alt="home-img" width={251} height={235} 
                              style={imgStyle}/>
                            </Link>
                          </div>
                        </div>
                        <div className="homemenu-content text-center">
                          <h4 className="homemenu-title">
                            {/* APLICAMOS getRoute */}
                            <Link href={getRoute(home_menu.link)}>{home_menu.title}</Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : menu.pages_mega_menu ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-megamenu-wrapper">
                <div className="row gx-50">
                  <div className="col-xl-8">
                    <div className="tp-megamenu-list-box">
                      <div className="row gx-50">
                        <div className="col-xl-8">
                          <div className="tp-megamenu-list">
                            <h4 className="tp-megamenu-title">
                              {menu.pages_mega_menu.first.title}
                            </h4>
                            <div className="tp-megamenu-list-wrap">
                              <ul>
                                {menu.pages_mega_menu.first.submenus.map(
                                  (psm, i) => (
                                    <li key={i}>
                                      {/* APLICAMOS getRoute */}
                                      <Link href={getRoute(psm.link)}>{psm.title}</Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="tp-megamenu-list tp-megamenu-list-2">
                            <h4 className="tp-megamenu-title">
                              {menu.pages_mega_menu.second.title}
                            </h4>
                            <div className="tp-megamenu-list-wrap">
                              <ul>
                                {menu.pages_mega_menu.second.submenus.map(
                                  (psm, i) => (
                                    <li key={i}>
                                      {/* APLICAMOS getRoute */}
                                      <Link href={getRoute(psm.link)}>{psm.title}</Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-megamenu-shop-style">
                      <div className="tp-shop-banner-left p-relative">
                        <div className="tp-shop-banner-thumb">
                          <Image
                            src="/assets/img/menu/shop-menu/banner-1.jpg"
                            alt="image"
                            width={343}
                            height={371}
                            style={imgStyle}
                          />
                        </div>
                        <div className="tp-shop-banner-content">
                          <h4 className="tp-shop-banner-title">Sale</h4>
                          <span>20% Off all Shoes</span>
                          {/* APLICAMOS getRoute */}
                          <Link className="tp-shop-btn" href={getRoute("/shop")}>
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : menu.portfolio_mega_menus ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-menu-fullwidth">
                <div className="tp-megamenu-portfolio p-relative">
                  <div className="tp-megamenu-portfolio-banner">
                    <Image
                      src="/assets/img/menu/portfolio-menu/portfolio.png"
                      alt="image"
                      width={438}
                      height={480}
                      style={imgStyle}
                    />
                  </div>
                  <div className="row gx-50">
                    <div className="col-xxl-9 col-xl-10">
                      <div className="tp-megamenu-list-box">
                        <div className="row gx-50">
                          <div className="col-xxl-5 col-xl-6">
                            <div className="tp-megamenu-list">
                              <h4 className="tp-megamenu-title">
                                {menu.portfolio_mega_menus.first.title}
                              </h4>
                              <div className="tp-megamenu-list-wrap tp-portfolio-menu-style">
                                <div className="row">
                                  {menu.portfolio_mega_menus.first.submenus.map(
                                    (portSm, i) => (
                                      <div key={i} className="col-lg-6">
                                        <ul>
                                          {portSm.menu_lists.map((psm) => (
                                            <li key={psm.title}>
                                              {/* APLICAMOS getRoute */}
                                              <Link href={getRoute(psm.link)}>
                                                {psm.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {menu.portfolio_mega_menus.second.submenus.map(
                            (portSm2, i) => (
                              <div key={i} className="col-xxl-3 col-xl-3">
                                <div className="tp-megamenu-list tp-megamenu-list-2 ml-20">
                                  <h4 className="tp-megamenu-title">
                                    {portSm2.title}
                                  </h4>
                                  <div className="tp-megamenu-list-wrap">
                                    <ul>
                                      {portSm2.menu_lists.map((psm) => (
                                        <li key={psm.title}>
                                          {/* APLICAMOS getRoute */}
                                          <Link href={getRoute(psm.link)}>
                                            {psm.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 d-none d-xxl-block">
                      <div className="tp-megamenu-portfolio-text">
                        <h4>60+</h4>
                        <span>Pre-built demo home page</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : menu.dropdown_menus ? (
            <ul className="tp-submenu submenu">
              {menu.dropdown_menus.map((mm, i) => (
                <li key={i}>
                  {/* APLICAMOS getRoute */}
                  <Link href={getRoute(mm.link)}>{mm.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;