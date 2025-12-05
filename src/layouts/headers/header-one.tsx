// src/layouts/headers/header-one.tsx

'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import useSticky from "@/hooks/use-sticky";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";

// 1. DEFINIMOS LAS PROPS QUE ESTE COMPONENTE DEBE RECIBIR
interface HeaderProps {
    dict: any;
    lang: string;
}

// 2. ACEPTAMOS LAS PROPS EN LA FUNCIÓN
const HeaderOne = ({ dict, lang }: HeaderProps) => { 
    
    // Aquí tuve que añadir referencias a dict y lang en el useSticky hook
    // o al menos en su useEffect para satisfacer el linter, pero lo simplificamos:

    const {sticky,headerRef,headerFullWidth} = useSticky();
    const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
    
    // Usamos el useEffect original, el warning de ESLint lo ignoramos por ahora.
    useEffect(() => {
      headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return (
        <>
            <header className="tp-header-height" ref={headerRef}>
                <div
                    id="header-sticky"
                    className={`tp-header-area tp-header-mob-space tp-transparent pl-60 pr-60 z-index-9 ${sticky?'header-sticky':''}`}
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-6">
                                <div className="tp-header-logo">
                                    {/* 3. ENLACES DE LOGO DINÁMICOS */}
                                    <Link className="logo-1" href={`/${lang}`}>
                                        <Image
                                            src="/assets/img/logo/logo.png"
                                            alt="logo"
                                            width={85}
                                            height={26}
                                        />
                                    </Link>
                                    <Link className="logo-2" href={`/${lang}`}>
                                        <Image
                                            src="/assets/img/logo/logo-white.png"
                                            alt="logo"
                                            width={85}
                                            height={26}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                                <div className="tp-header-menu header-main-menu text-center">
                                    <nav className="tp-main-menu-content">
                                        {/* 4. PASAMOS LAS PROPS AL MENÚ DESKTOP */}
                                        <HeaderMenus dict={dict} lang={lang} />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg col-6">
                                <div className="tp-header-bar text-end">
                                    <button className="tp-offcanvas-open-btn" onClick={() => setOpenOffCanvas(true)}>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 5. PASAMOS LAS PROPS AL MENÚ MÓVIL (MobileOffcanvas) */}
            <MobileOffcanvas 
                openOffCanvas={openOffCanvas} 
                setOpenOffCanvas={setOpenOffCanvas} 
                dict={dict} 
                lang={lang} 
            />
        </>
    );
};

export default HeaderOne;