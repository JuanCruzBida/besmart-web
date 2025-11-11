'use client';
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// --- IMPORTAMOS LOS COMPONENTES ---
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import PortfolioSliderHomeTen from "@/components/portfolio/slider/portfolio-slider-home-ten";
import FooterFive from "@/layouts/footers/footer-five";

// 1. IMPORTAMOS EL HERO
import HeroMember from "@/components/hero/hero-membership";
import AwardOne from "@/components/award/award-one";

// 2. IMPORTAMOS LAS ANIMACIONES BÁSICAS DEL HERO (las que usamos en Merch)
import { charAnimation, titleAnimation, fadeAnimation } from "@/utils/title-animation";
// --- FIN DE IMPORTS ---


const MembershipPage = () => {
  // Hook para el scroll suave
  useScrollSmooth();

  // Hook para llamar a las animaciones del Hero
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* Usamos el header de home-4 */}
      <HeaderFour />

      {/* Wrapper obligatorio para el scroll suave */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content">
            
            {/* 1. Usamos tu Hero */}
           <HeroMember />

           <AwardOne />

            {/* --- A PARTIR DE AQUÍ IRÁN LAS OTRAS SECCIONES DE MEMBERSHIP --- */}

              <PortfolioSliderHomeTen />

              <FooterFive />

          </main>
          
          {/* Footer eliminado (tal como en la pág de Merch) */}
        </div>
      </div>
    </Wrapper>
  );
};

export default MembershipPage;