import React from "react";
import { UpArrow } from "@/components/svg";
import Image from "next/image";

export default function FooterFive() {
  return (
    <footer>
      <div className="tp-footer-5-area black-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-footer-5-content-wrap">
                <div className="tp-footer-5-title-box">
                  <span className="tp-footer-5-subtitle">
                    Contáctanos
                  </span>
                  <h4 className="tp-footer-5-title tp_reveal_anim-2 footer-big-text">
                    Nosotros resolvemos <br /> en todo el mundo
                  </h4>
                </div>
                <div className="tp-footer-5-info d-flex align-items-center justify-content-start justify-content-md-end">
                  <a className="tp-footer-5-mail" href="mailto:comercial@besmart.technology">
                    comercial@besmart.technology
                  </a>
                  <a className="tp-footer-5-link" href="/contact">
                    <UpArrow clr="#19191A" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer area end */}

      {/* copyright area start */}
      <div className="tp-copyright-5-area tp-copyright-5-style-2 black-bg pb-50">
        <div className="container container-1560">
          <div className="row align-items-center">
            
            {/* Columna Izquierda: Dirección + Banderas */}
            <div className="col-xl-3 col-lg-6 col-md-5 d-none d-xl-block">
              <div className="tp-copyright-5-left-info">
                <span>
                  <a
                    href="https://www.google.com/maps/search/31+NE+17th+Street.+Miami+FL+33132"
                    target="_blank"
                  >
                    31 NE 17th Street. Miami FL 33132
                  </a>
                </span>

                {/* --- AGREGADO: Banderas --- */}
                <div style={{ marginTop: '15px' }}>
                  <Image 
                    src="/assets/img/banderas.png" 
                    alt="Banderas Regionales" 
                    width={180} 
                    height={40}
                    style={{ 
                      height: 'auto', 
                      display: 'block' 
                    }} 
                  />
                </div>
                {/* -------------------------- */}

              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="tp-copyright-2-social text-start text-sm-center text-xl-center">
                <a className="mb-10" href="https://www.linkedin.com/company/besmartllc/">
                  Linkedin
                </a>
                <a className="mb-10" href="https://www.instagram.com/besmart.technology/">
                  Instagram
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-5">
              <div className="tp-copyright-2-left text-center text-md-end">
                <p>©{new Date().getFullYear()}- Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}