'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import LanguageSwitch from '@/components/commons/language-switch';

import logo_1 from '@/assets/img/logo/logo.png';
import logo_2 from '@/assets/img/logo/Recurso 42BE SMART LM.png';
import useSticky from "@/hooks/use-sticky";

import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";

// Definimos la interfaz de las props para mayor seguridad
type Props = {
  dict: any;
  lang: string;
}

export default function HeaderFour({ dict, lang }: Props) {
  // Obtenemos headerRef del hook para conectarlo al DOM
  const { sticky, headerRef, headerFullWidth, adjustMenuBackground } = useSticky();
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);

  useEffect(() => {
    headerFullWidth();
    adjustMenuBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        {/* Agregamos ref={headerRef} para asegurar que el hook de sticky controle este elemento */}
        <div id="header-sticky" ref={headerRef} className={`tp-header-3-area mt-35 z-index-5 ${sticky ? 'header-sticky' : ''}`}>
          <span className="menu-bg"></span>
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo tp-header-3-logo">
                  {/* Logo con idioma dinámico */}
                  <Link className="logo-1" href={`/${lang}`}>
                    <Image src={logo_1} alt="logo" />
                  </Link>
                  <Link className="logo-2" href={`/${lang}`}>
                    <Image src={logo_2} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                <div className="tp-header-3-menu-wrap text-center">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                    <div className="tp-header-3-menu header-main-menu">
                      <nav className="tp-main-menu-content">
                        {/* Menú Desktop: Ya estaba OK */}
                        <HeaderMenus dict={dict} lang={lang} />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  
                  <LanguageSwitch />

                  {/* Redes Sociales */}
                  <div className="tp-header-3-social d-none d-sm-block">
                    <a href="https://www.instagram.com/besmart.technology/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/besmartllc/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>

                  <button onClick={() => setOpenOffCanvas(true)} className="tp-header-3-bar tp-offcanvas-open-btn d-xl-none">
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CRÍTICO: Pasamos dict y lang al menú móvil. 
         Esto soluciona los links rotos en mobile (/undefined/...) y traduce los textos.
      */}
      <MobileOffcanvas 
        openOffCanvas={openOffCanvas} 
        setOpenOffCanvas={setOpenOffCanvas} 
        dict={dict}
        lang={lang} 
      />
    </>
  );
}