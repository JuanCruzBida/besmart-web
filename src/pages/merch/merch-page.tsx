"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four"; 
import HeroMerch from "@/components/hero/hero-merch"; 
import { charAnimation, titleAnimation, fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { ctaAnimation } from "@/utils/cta-anim"; 
import { hoverBtn } from "@/utils/hover-btn";
import { servicePanel } from "@/utils/panel-animation";
// Importamos ServiceItems que ahora acepta props
import { ServiceItems } from '@/components/service/service-five';
import { Leaf } from '@/components/svg';
// Importamos ServiceSix que ahora acepta props
import ServiceSix from '@/components/service/service-six';
import LineImgSlider from '@/components/line-text/line-img-slider';
import FooterFive from "@/layouts/footers/footer-five";

const MerchPage = ({ dict, lang }: { dict: any; lang: string }) => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
      ctaAnimation(); 
      hoverBtn();
      revelAnimationOne(); 
      servicePanel(); 
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* 1. Header con lang para links correctos */}
      <HeaderFour dict={dict} lang={lang} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content">
            
            <div className="pb-120">
              {/* 2. Hero con textos */}
              <HeroMerch dict={dict} />
            </div>
            
            {/* ----- SECCIÓN DE SERVICIOS (Regiones) ----- */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                      </span>
                      <h4 className="tp-service-5-title">
                        {dict?.merch?.hero?.intro_title || "Somos locales, estés donde estés."}{" "}
                        <br />
                        {dict?.merch?.hero?.intro_subtitle || "Fabricación propia y venta local en todo el mundo."}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="tp-service-5-wrap">
                  {/* 3. ServiceItems con dict y lang */}
                  <ServiceItems dict={dict} lang={lang} />
                </div>
              </div>
            </div>
            {/* ----- FIN DE LA SECCIÓN DE SERVICIOS ----- */}

            <div className="pb-120">
              {/* 4. ServiceSix con dict */}
              <ServiceSix dict={dict} />
            </div>

            {/* ----- SLIDER DE FOTOS (Sin textos, no requiere cambios) ----- */}
            <LineImgSlider />

            {/* 5. Footer con dict y lang */}
            <FooterFive dict={dict} lang={lang} />

          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default MerchPage;