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

    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

      <HeaderFour />


      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            <HeroBannerFour />

            <GalleryOne />

            <AboutThree />

            <BrandThree />

            <ProjectFour />

            <CounterOne />

          </main>

          <FooterFive /> 

        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;