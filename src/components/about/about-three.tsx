import React from "react";

import { FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {
  return (
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-xl-11 text-center">

            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text">
                  Sobre nosotros
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90">
                TUS FANS, MÁS CERCA QUE NUNCA, <br /> ESTÉS DONDE ESTÉS.{" "}
              </h4>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}