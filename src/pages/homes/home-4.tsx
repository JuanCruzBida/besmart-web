"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import ProjectFour from "@/components/project/project-four";
import FooterFive from "@/layouts/footers/footer-five";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import CounterOne from "@/components/counter/counter-one";


const HomeFourMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    // NOTA: No borramos las funciones de animación de aquí
    // porque los componentes que SÍ MANTUVIMOS (como AboutThree,
    // ProjectFour y el nuevo FooterFive) todavía las necesitan.
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      // ctaAnimation(); // 👈 ELIMINADO
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            {/* brand area start */}
            <BrandThree />
            {/* brand area end */}

            {/* project area start */}
            <ProjectFour />
            {/* project area end */}

            {/* counter area start (AQUÍ LO AGREGAMOS) */}
                <CounterOne />
            {/* counter area end */}
          </main>

          {/* footer area */}
          <FooterFive /> {/* 👈 AÑADIDO AQUÍ */}
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;