"use client";
import React from "react";
import Image from "next/image";

// award images
import a_1 from "@/assets/img/home-01/award/award-1.png";
import a_2 from "@/assets/img/home-01/award/award-1.png";
import a_3 from "@/assets/img/home-01/award/award-1.png";
import a_4 from "@/assets/img/home-01/award/award-1.png";
import a_5 from "@/assets/img/home-01/award/award-1.png";
import a_6 from "@/assets/img/home-01/award/award-1.png";
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,
    img: a_1,
    subtitle: "1",
    title: "Fan ID digital integrado en la Wallet del teléfono para una experiencia rápida, segura y personalizada",
  },
  {
    id: 2,
    img: a_2,
    subtitle: "2",
    title: "Optimiza y reduce los tiempos de espera",
  },
  {
    id: 3,
    img: a_3,
    subtitle: "3",
    title: "Refuerza la presencia y percepción de tu marca",
  },
  {
    id: 4,
    img: a_4,
    subtitle: "4",
    title: "Fideliza a tus clientes VIP con beneficios diferenciales",
  },
  {
    id: 5,
    img: a_5,
    subtitle: "5",
    title: "Genera un código único para activar beneficios y accesos exclusivos",
  },
  {
    id: 6,
    img: a_6,
    subtitle: "6",
    title: "Crea categorías de membresías según nivel de acceso",
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({cls="pt-125 pb-125",abStyle=false}: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  VIP PASS<br /> <span>Eleva tu evento y potencia tus ingresos ofreciendo una experiencia de exclusividad y comodidad desde el primer momento.</span>
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  Our Awards
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
              >
                {award_data.map((item) => (
                  <Image
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    src={item.img}
                    alt="list-thumb"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
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
