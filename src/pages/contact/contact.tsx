"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import ContactTwo from "@/components/contact/contact-two";
import ContactLocation from "@/components/contact/contact-location";
// animation
import { charAnimation } from "@/utils/title-animation";

// 1. Definimos las props que recibe desde la página servidor [lang]
type Props = {
  dict: any;
  lang: string;
}

const ContactMain = ({ dict, lang }: Props) => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      {/* 2. Pasamos dict y lang al header para que funcione el menú */}
      <HeaderFour dict={dict} lang={lang} />
      {/* header area end */}

      <style jsx global>{`
        @media (max-width: 420px) {
          .tm-hero-title-big {
            font-size: 45px !important; 
            line-height: 1.1 !important;
            word-wrap: break-word; /* Asegura que no se corte si es muy largo */
          }
        }
      `}</style>
      {/* ------------------------------------------------------------- */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* hero area start */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Be Smart</span>
                        
                        <h4 className="tm-hero-title-big tp-char-animation">
                          {/* 3. Título traducido desde el JSON */}
                          {dict?.contact?.hero_title || "Contáctate con nosotros"}
                        </h4>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero area end */}

              {/* contact area */}
              {/* 4. Pasamos el dict al componente del formulario */}
              <ContactTwo dict={dict} />
              {/* contact area */}
            </main>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactMain;