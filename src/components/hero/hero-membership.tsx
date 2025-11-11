// Archivo: src/components/hero/hero-membership.tsx
"use client";
import React from 'react';
import Image from 'next/image';

// Este es el componente del Hero que te gusta
export default function HeroMembership() {
  
  return (
      <div className="tp-showcase-details-area">
         {/* CLAVE: Corregí la URL de la imagen de fondo para que sea la del "World Fashion" */}
         <div 
           className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" 
           style={{backgroundImage: "url(/assets/img/inner-project/showcase/portada-member.png)"}}
         >
          


          <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="tp-showcase-details-content text-center">
                      <span className="port-showcase-slider-subtitle tp_title_anim">
                        [ Be Smart ]
                      </span>
                      <h4 className="port-showcase-slider-title tp-char-animation">Membership</h4>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}