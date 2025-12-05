import React from "react";
import Image from "next/image";
import { CloseTwo } from "../svg"; // Asegurate que los imports coincidan con tu proyecto
import logo from "@/assets/img/logo/logo.png";
import MobileMenus from "./mobile-menus";

// prop type
type IProps = {
  openOffCanvas: boolean; // Ojo: en HeaderFour lo llamamos openOffCanvas (con C mayúscula)
  setOpenOffCanvas: React.Dispatch<React.SetStateAction<boolean>>;
  dict: any; // <--- AGREGADO: Necesitamos el diccionario
  lang?: string;
};

export default function MobileOffcanvas({
  openOffCanvas, 
  setOpenOffCanvas, 
  dict, // <--- Recibimos dict
  lang = "es" 
}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffCanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Image src={logo} alt="logo" />
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffCanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Menu</h3>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              {/* CRÍTICO: Pasamos dict Y lang al componente de menús */}
              <MobileMenus dict={dict} lang={lang} />
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffCanvas(false)}
        className={`body-overlay ${openOffCanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}