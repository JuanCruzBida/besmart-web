// Archivo: src/app/membership/page.tsx

"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four"; // El header de tu Home


import HeroMerch from "@/components/hero/hero-merch"; 



import { charAnimation, titleAnimation, fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { ctaAnimation } from "@/utils/cta-anim"; 
import { hoverBtn } from "@/utils/hover-btn";


import { servicePanel } from "@/utils/panel-animation";

import { ServiceItems } from '@/components/service/service-five';
import { Leaf } from '@/components/svg';
import ServiceSix from '@/components/service/service-six';
import LineImgSlider from '@/components/line-text/line-img-slider';
import FooterFive from "@/layouts/footers/footer-five";
// --- FIN DE IMPORTS ---


const MembershipPage = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      // Animaciones del Hero
      charAnimation();
      titleAnimation();
      fadeAnimation();

      // Animaciones para la sección de Contacto
      ctaAnimation(); 
      hoverBtn();
      revelAnimationOne(); // (para el <p> de ContactOne)


      servicePanel(); // <--  ANIMACIÓN DE LOS PANELES

    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

      <HeaderFour />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content">
            

            <div className="pb-120">
              <HeroMerch />
              </div>
            

  {/* ----- INICIO DE LA SECCIÓN DE SERVICIOS ----- */}

  <div className="tp-service-5-area sv-service-style pb-70">
    <div className="container container-1530">
      <div className="row">
        <div className="col-xl-12">
          <div className="tp-service-5-title-box mb-90">
            <span className="ab-inner-subtitle mb-20">
              <Leaf />
              
            </span>
            <h4 className="tp-service-5-title">
              Somos locales, estés donde estés.{" "}
              <br />
              Fabricación propia y venta local en todo el mundo.
            </h4>
          </div>
        </div>
      </div>
      <div className="tp-service-5-wrap">
        <ServiceItems />
      </div>
    </div>
  </div>

  {/* ----- FIN DE LA SECCIÓN DE SERVICIOS ----- */}


  <div className="pb-120">
  <ServiceSix />
</div>


            {/* ----- INICIO DE SLIDER DE FOTOS ----- */}

            <LineImgSlider />

            {/* ----- FIN DE SLIDER DE FOTOS ----- */}

            <FooterFive />

          </main>
          

        </div>
      </div>
    </Wrapper>
  );
};

export default MembershipPage;