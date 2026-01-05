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
import HomeVideo from "@/components/video-banner/home-video";

// --- CAMBIO 1: Recibimos dict ---
const HomeFourMain = ({ dict, lang }: { dict: any; lang: string }) => {
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
      {/* --- CAMBIO 2: Pasamos dict al Header --- */}
      <HeaderFour dict={dict} lang={lang} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* --- CAMBIO 3: Pasamos dict a todas las secciones --- */}
            <HeroBannerFour dict={dict} lang={lang} />

            <GalleryOne />

            <AboutThree dict={dict} />

            <BrandThree />

            <HomeVideo />

            <ProjectFour dict={dict} lang={lang} />

            <CounterOne dict={dict} />
          </main>

          {/* --- CAMBIO 4: Pasamos dict al Footer --- */}
          <FooterFive dict={dict} lang={lang} /> 
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;