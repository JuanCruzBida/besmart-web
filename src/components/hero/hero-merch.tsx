"use client";
import React from 'react';
import Image from 'next/image';

// --- CAMBIO 1: Recibimos dict ---
export default function HeroMerch({ dict }: { dict: any }) {
  
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
           style={{backgroundImage: "url(/assets/img/inner-project/showcase/showcase-details-2-1.png)"}}
         >
          
          <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="tp-showcase-details-content text-center">
                      
                      {/* --- CORRECCIÓN AQUÍ: Quitamos la referencia a membership --- */}
                      <span className="port-showcase-slider-subtitle tp_title_anim">
                        [ BE SMART ]
                      </span>

                      {/* Título: "Merchandise" (o lo que venga en el dict) */}
                      <h4 
                        className="port-showcase-slider-title tp-char-animation"
                        style={{ letterSpacing: "calc(-0.5vw)" }}
                      >
                        {dict?.nav?.merch || "Merchandise"}
                      </h4>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}