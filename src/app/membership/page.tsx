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
// --- FIN DE IMPORTS ---


const MembershipPage = () => {

  useScrollSmooth();


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

      <HeaderFour />


      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content">
            

           <HeroMember />

           <AwardOne />

            {/* --- OTRAS SECCIONES DE MEMBERSHIP --- */}

              <PortfolioSliderHomeTen />

              <FooterFive />

          </main>
          
        </div>
      </div>
    </Wrapper>
  );
};

export default MembershipPage;