import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";

// Definimos las props que va a recibir
type Props = {
  dict: any;
  lang: string;
}

// service items
export function ServiceItems({ dict, lang }: Props) {
  
  // Construimos la data dinámicamente usando el diccionario
  const service_data = [
    {
      id: 1,
      title: dict?.merch?.regions?.usa || "Estados Unidos",
      desc: dict?.merch?.regions?.desc_placeholder_1 || "Branding description...",
      icon: s_3,
    },
    {
      id: 2,
      title: dict?.merch?.regions?.latam || "Latinoamérica",
      desc: dict?.merch?.regions?.desc_placeholder_2 || "Cocktail description...",
      icon: s_1,
    },
    {
      id: 3,
      title: dict?.merch?.regions?.europe || "Europa",
      desc: dict?.merch?.regions?.desc_placeholder_3 || "App description...",
      icon: s_2,
    },
  ];

  return (
    <div className="row">
      <div className="col-xxl-3"></div>
      {service_data.map((item) => (
        <div key={item.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            <div className="tp-service-4-icon">
              <Image src={item.icon} alt="icon" />
            </div>
            <div className="tp-service-4-content">
              <h4 className="tp-service-4-title-sm tp-text-black">
                {/* Usamos 'lang' para construir el link correctamente, ej: /es/service */}
                <span style={{ cursor: 'default' }}>{item.title}</span>
              </h4>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// service five area (Export por defecto, también lo actualizamos por si se usa en otro lado)
export default function ServiceFive({ dict, lang }: Props) {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-5-title-box mb-90">
              <h4 className="tp-service-5-title p-relative tp_fade_right">
                <span className="tp-service-5-subtitle tp_fade_left">
                  SERVICES
                </span>
                <span className="text-space"></span>
                {dict?.merch?.hero?.intro_subtitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-service-5-wrap">
          <ServiceItems dict={dict} lang={lang} />
        </div>
      </div>
    </div>
  );
}