'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

export default function HeroBannerFour() {
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
                <span className="tp-reveal-line">{"BE SMART"} <br></br></span>
                {/* AJUSTE: Envolvimos el punto en un span con marginLeft. 
                   Podes ajustar los '4px' a ojo según lo que pida el diseño.
                */}
                <span className="tp-reveal-line">
                  UN ARTISTA<span style={{ marginLeft: "8px" }}>.</span> UN MUNDO
                </span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim">
                Conecta con tus fans a través de experiencias únicas.
              </span>
              <Link className="tp-btn-black-2" href="/contact">
                Contáctanos{" "}
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