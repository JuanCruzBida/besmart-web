import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import ser_img_5 from "@/assets/img/inner-service/service/service-5.jpg";

type Props = {
  dict: any;
}

export default function ServiceSix({ dict }: Props) {
  
  // Mapeamos los datos del JSON a las imágenes
  const service_data = [
    {
      id: 1,
      img: ser_img_1,
      title: dict?.merch?.services_list?.design?.title || "Diseño y Desarrollo",
      text: dict?.merch?.services_list?.design?.desc,
    },
    {
      id: 2,
      img: ser_img_2,
      title: dict?.merch?.services_list?.manufacturing?.title || "Fabricación propia",
      text: dict?.merch?.services_list?.manufacturing?.desc,
    },
    {
      id: 3,
      img: ser_img_3,
      title: dict?.merch?.services_list?.onsite?.title || "Venta on-site",
      text: dict?.merch?.services_list?.onsite?.desc,
    },
    {
      id: 4,
      img: ser_img_4,
      title: dict?.merch?.services_list?.online?.title || "Venta online",
      text: dict?.merch?.services_list?.online?.desc,
    },
    {
      id: 5,
      img: ser_img_5,
      title: dict?.merch?.services_list?.support?.title || "Customer Service",
      text: dict?.merch?.services_list?.support?.desc,
    },
  ];

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