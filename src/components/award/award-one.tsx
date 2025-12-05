"use client";
import React from "react";
import Image from "next/image";
// ... imports de imágenes ...
import { Leaf, FirstBracket, FirstBracketTwo } from "../svg";
import a_1 from "@/assets/img/home-01/award/award-1.png";
import a_2 from "@/assets/img/home-01/award/award-1.png";
import a_3 from "@/assets/img/home-01/award/award-1.png";
import a_4 from "@/assets/img/home-01/award/award-1.png";
import a_5 from "@/assets/img/home-01/award/award-1.png";
import a_6 from "@/assets/img/home-01/award/award-1.png";

type IProps = {
  cls?: string;
  abStyle?: boolean;
  // CAMBIO: En vez de recibir todo el diccionario, recibimos solo los textos que necesitamos
  data: {
    title: string;
    subtitle: string;
    features: any; // o el tipo específico si querés ser estricto
  };
};

const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false, data }: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);

  // Usamos data directamente
  const award_data = [
    { id: 1, img: a_1, subtitle: "1", title: data?.features?.["1"] || "Feature 1" },
    { id: 2, img: a_2, subtitle: "2", title: data?.features?.["2"] || "Feature 2" },
    { id: 3, img: a_3, subtitle: "3", title: data?.features?.["3"] || "Feature 3" },
    { id: 4, img: a_4, subtitle: "4", title: data?.features?.["4"] || "Feature 4" },
    { id: 5, img: a_5, subtitle: "5", title: data?.features?.["5"] || "Feature 5" },
    { id: 6, img: a_6, subtitle: "6", title: data?.features?.["6"] || "Feature 6" },
  ];

  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 text-center">
            {!abStyle && (
              <div className="tp-about-3-title-box">
                <span className="tp-section-subtitle-2">
                  <span><FirstBracket /></span>
                  <span className="tp-subtitle-text">
                    {/* Título dinámico */}
                    {data.subtitle}
                  </span>
                  <span><FirstBracketTwo /></span>
                </span>
                <h4 className="tp-section-title-90 pb-50" style={{ fontSize: 'clamp(18px, 2.5vw, 36px)', lineHeight: '1.3', paddingTop: '15px' }}>
                  {/* Descripción dinámica */}
                  {data.title}
                </h4>
              </div>
            )}
            {/* ... resto del componente igual ... */}
          </div>
        </div>
        {/* ... el renderizado de la lista sigue igual ... */}
        <div className="row">
           <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div id="tp-award-thumb" className={`tp-award-list-thumb-${activeThumb}`}>
                {award_data.map((item) => (
                  <Image key={item.id} className={`tp-award-list-thumb-${item.id}`} src={item.img} alt="list-thumb" />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div key={item.id} onMouseEnter={() => setActiveThumb(item.id)} className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom">
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <span>{item.subtitle}</span>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardOne;