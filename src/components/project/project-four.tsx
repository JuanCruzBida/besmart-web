import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import port_1 from "@/assets/img/home-03/portfolio/port-1.png";
import port_2 from "@/assets/img/home-03/portfolio/port-2.jpg";
import port_3 from "@/assets/img/home-03/portfolio/port-3.png";
import port_4 from "@/assets/img/home-03/portfolio/port-4.jpg";
import port_5 from "@/assets/img/home-03/portfolio/port-5.jpg";
import port_6 from "@/assets/img/home-03/portfolio/port-6.jpg";
import port_7 from "@/assets/img/home-03/portfolio/port-7.png";
import port_8 from "@/assets/img/home-03/portfolio/port-8.png";

type IProps = {
  style_2?: boolean;
  dict: any;
  lang: string;
};

export default function ProjectFour({ style_2 = false, dict, lang }: IProps) {
  
  const s = dict?.home?.services;

  const project_data = [
    {
      id: 1,
      img_1: port_1,
      img_2: port_2,
      title: s?.merch?.title || "More than merch...",
      link: `/${lang}/merch`,
      btn_text: s?.merch?.button || "BE SMART MERCH",
      meta: "", 
    },
    {
      id: 2,
      img_1: port_3,
      img_2: port_4,
      title: s?.membership?.title || "A world of benefits...",
      link: `/${lang}/membership`,
      btn_text: s?.membership?.button || "BE SMART MEMBERSHIP",
      meta: "",
    },
    {
      id: 3,
      img_1: port_5,
      img_2: port_6,
      // RESTAURADO: Aquí vuelve el tag
      meta: s?.payments?.tag || "COMING SOON", 
      title: s?.payments?.title || "Your own global payment system...",
      link: "#",
      btn_text: s?.payments?.button || "BE SMART PAYMENTS",
    },
    {
      id: 4,
      img_1: port_7,
      img_2: port_8,
      // RESTAURADO: Aquí vuelve el tag
      meta: s?.teams?.tag || "COMING SOON",
      title: s?.teams?.title || "Your own local team...",
      link: "#",
      btn_text: s?.teams?.button || "BE SMART TEAMS",
    },
  ];

  return (
    // Mantenemos el centrado vertical (min-vh-100)
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"} min-vh-100 d-flex align-items-center`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  <span>{s?.section_title || "Services"}</span>
                </h4>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      
                      {/* Aquí se renderiza el "COMING SOON" si existe */}
                      {item.meta && <span className="tp-project-3-meta">{item.meta} </span>}
                      
                      <h4 className="tp-project-3-title-sm">
                        <Link href={item.link}>{item.title}</Link>
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href={item.link}
                      >
                        {item.btn_text}
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}