"use client";
import React from 'react';
import Image from 'next/image';

export default function HeroMerch() {
  
  return (
      <div className="tp-showcase-details-area">
         
         {/* FIX MOBILE: Ajuste para que Merchandise no se rompa en < 420px */}
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
                      <span className="port-showcase-slider-subtitle tp_title_anim">
                        [ Be Smart ]
                      </span>

                      <h4 
                        className="port-showcase-slider-title tp-char-animation"
                        style={{ letterSpacing: "calc(-0.5vw)" }}
                      >
                        Merchandise
                      </h4>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}