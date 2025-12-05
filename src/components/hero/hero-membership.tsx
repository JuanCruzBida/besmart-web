"use client";
import React from 'react';
import Image from 'next/image';

// --- CAMBIO 1: Recibimos dict ---
export default function HeroMembership({ dict }: { dict: any }) {
  
  return (
      <div className="tp-showcase-details-area">
         
         {/* FIX MOBILE: Tus estilos originales conservados */}
         <style jsx global>{`
            @media (max-width: 420px) {
              .port-showcase-slider-title {
                font-size: 40px !important;
                letter-spacing: -1px !important;
                word-wrap: break-word;
              }
            }
         `}</style>

         <div 
            className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" 
            style={{
              backgroundImage: "url(/assets/img/inner-project/showcase/portada-member.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
          
          <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="tp-showcase-details-content text-center">
                      
                      {/* --- CAMBIO 2: Subtítulo Fijo para Branding --- */}
                      {/* Antes leía 'subtitle' del JSON que decía VIP PASS. Ahora lo forzamos a [ BE SMART ] */}
                      <span className="port-showcase-slider-subtitle tp_title_anim">
                        [ BE SMART ]
                      </span>

                      {/* --- CAMBIO 3: Título Principal --- */}
                      {/* Usamos el nombre de la sección (Membership) en lugar del título largo del JSON */}
                      <h4 
                        className="port-showcase-slider-title tp-char-animation"
                        style={{ letterSpacing: "calc(-0.5vw)" }}
                      >
                        {dict?.nav?.membership || "Membership"}
                      </h4>

                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}