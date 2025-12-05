'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

// --- CAMBIO 1: Recibimos dict y lang (con default "es") ---
export default function HeroBannerFour({ dict, lang = "es" }: { dict: any; lang?: string }) {

  // Función auxiliar para mantener tu estilo del punto separado
  // Si el texto tiene un punto, lo separa y le pone el margen.
  const renderTitleLine2 = (text: string) => {
    if (!text || !text.includes('.')) return text;
    const parts = text.split('.');
    return (
      <>
        {parts[0]}<span style={{ marginLeft: "8px" }}>.</span>{parts[1]}
      </>
    );
  };

  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">
                    {/* Texto Linea 1 */}
                    {dict?.home?.hero?.title_line1 || "BE SMART"} <br></br>
                </span>
                
                <span className="tp-reveal-line">
                   {/* Texto Linea 2 (Con la magia del punto) */}
                   {renderTitleLine2(dict?.home?.hero?.title_line2 || "UN ARTISTA. UN MUNDO")}
                </span>
              </h4>

              <span className="tp-hero-3-category tp_reveal_anim">
                {/* Subtítulo */}
                {dict?.home?.hero?.subtitle || "Conecta con tus fans a través de experiencias únicas."}
              </span>
              
              {/* CAMBIO 2: Link dinámico usando 'lang' */}
              <Link className="tp-btn-black-2" href={`/${lang}/contact`}>
                {/* Botón */}
                {dict?.home?.hero?.button || "Contáctanos"}{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}