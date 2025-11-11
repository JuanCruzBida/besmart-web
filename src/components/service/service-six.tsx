import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import ser_img_5 from "@/assets/img/inner-service/service/service-5.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    title: "Diseño y Desarrollo",
    text: "Además del merchandising oficial, colaboramos estrechamente con el equipo del artista para desarrollar y potenciar su propia línea de indumentaria, cuidando cada detalle de estilo y autenticidad.",
  },
  {
    id: 2,
    img: ser_img_2,
    title: "Fabricación propia",
    text: "Fabricación propia en Mexico, Chile, USA, Argentina y España con partner oficial en China para distribuir en todo el mundo.",
  },
  {
    id: 3,
    img: ser_img_3,
    title: "Venta on-site",
    text: "Tu propio equipo local en todo el mundo para el armado de stand, conteo de mercadería, producción y gestión de ventas el día del show.",
  },
  {
    id: 4,
    img: ser_img_4,
    title: "Venta online",
    text: "Desarrollamos tu propio store online con entrega puerta a puerta a tus fans en todo el mundo.",
  },
   {
    id: 5,
    img: ser_img_5,
    title: "Customer Service",
    text: "Soporte y atención a usuarios, seguimiento de pedidos, gestión de consultas y devoluciones. Atención personalizada a todos tus clientes",
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
