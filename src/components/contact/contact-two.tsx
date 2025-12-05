import React from "react";
import Image from "next/image";
import ContactForm from "../form/contact-form";
import Social from "../social/social";
import shape from "@/assets/img/inner-about/about/shape-1.png";

// --- CAMBIO 1: Recibimos el dict ---
export default function ContactTwo({ dict }: { dict: any }) {
  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
      <div className="ab-2-hero-social-wrap d-none d-xl-block">
        <div className="ab-2-hero-social">
          <Social/>
        </div>
        <div className="ab-2-hero-social-text">
          {/* --- CAMBIO 2: Traducción "Seguinos" --- */}
          <span>{dict?.contact?.sidebar?.follow || "Seguinos"}</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="ab-about-category-title-box mb-40 p-relative">
              <h4 className="ab-about-category-title">
                {/* --- CAMBIO 3: Traducción Títulos --- */}
                {dict?.contact?.sidebar?.send_message} <br />
                <span>{dict?.contact?.sidebar?.contact_us}</span>
              </h4>
              <Image
                className="ab-about-shape-1 d-none d-xl-block"
                src={shape}
                alt="shape"
              />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="cn-contactform-wrap">
              {/* form start */}
              {/* --- CAMBIO 4: Le pasamos el dict al Formulario final --- */}
              <ContactForm dict={dict} />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}