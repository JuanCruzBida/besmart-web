"use client";
import React from 'react';
import Image from 'next/image';

export default function HeroMembership() {
  
  return (
      <div className="tp-showcase-details-area">
         
         {/* FIX MOBILE: Ajuste específico para pantallas < 420px */}
         <style jsx global>{`
            @media (max-width: 420px) {
              .port-showcase-slider-title {
                font-size: 40px !important; 
                letter-spacing: -1px !important; /* Un poquito pegado para que entre bien */
                word-wrap: break-word;
              }
            }
         `}</style>

         <div 
           className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" 
           style={{backgroundImage: "url(/assets/img/inner-project/showcase/portada-member.png)",
            backgroundSize: "cover",
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
           }}>
          
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
                        Membership
                      </h4>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}