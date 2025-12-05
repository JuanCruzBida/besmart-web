import React from "react";
import { FirstBracket, FirstBracketTwo } from "../svg";

// 1. Aceptamos la prop 'dict'
export default function AboutThree({ dict }: { dict: any }) {
  
  // Seguridad: definimos una variable para acortar y evitar errores si es null
  const t = dict?.home?.about;

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
                  {/* 2. Reemplazamos "Sobre nosotros" */}
                  {t?.subtitle || "Sobre nosotros"}
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              {/* 3. Reemplazamos el título. 
                 Si tu JSON tiene el tag <br/> adentro, usamos dangerouslySetInnerHTML. 
                 Si es texto plano, podés usar {t?.title} directamente. */}
              <h4 
                className="tp-section-title-90"
                dangerouslySetInnerHTML={{ 
                  __html: t?.title || "TUS FANS, MÁS CERCA QUE NUNCA, <br /> ESTÉS DONDE ESTÉS." 
                }} 
              />
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}