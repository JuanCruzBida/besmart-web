'use client';
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import PortfolioSliderHomeTen from "@/components/portfolio/slider/portfolio-slider-home-ten";
import FooterFive from "@/layouts/footers/footer-five";
import HeroMember from "@/components/hero/hero-membership";
import AwardOne from "@/components/award/award-one";
import { charAnimation, titleAnimation, fadeAnimation } from "@/utils/title-animation";

// Definimos la interfaz básica para las props
type Props = {
  dict: any;
  lang: string;
}

const MembershipPage = ({ dict, lang }: Props) => {

  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  // Mapeo de datos para el componente agnóstico AwardOne
  // El JSON de membership ya tiene la estructura "1", "2", "3" en features,
  // por lo que podemos pasarlo directo.
  const awardData = {
    subtitle: dict?.membership?.hero?.subtitle || "VIP PASS",
    title: dict?.membership?.hero?.title || "Eleva tu evento...",
    features: dict?.membership?.features || {}
  };

  return (
    <Wrapper>
      {/* Pasamos lang para arreglar los links del menú */}
      <HeaderFour dict={dict} lang={lang} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content">
            
            {/* Hero Section */}
            <HeroMember dict={dict} />

            {/* Award Section con datos mapeados */}
            <AwardOne data={awardData} />

            {/* Slider Section */}
            <PortfolioSliderHomeTen dict={dict} />

            {/* Footer con lang para links internos */}
            <FooterFive dict={dict} lang={lang}/>

          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default MembershipPage;