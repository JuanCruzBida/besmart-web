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

const ContactMain = () => {
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
      <HeaderFour />
      {/* header area end */}

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
                          Contáctate con nosotros
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero area end */}

              {/* contact area */}
              <ContactTwo/>
              {/* contact area */}
            </main>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactMain;
