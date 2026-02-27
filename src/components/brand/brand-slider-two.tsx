"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand2/brand-1.png";
import b_2 from "@/assets/img/home-01/brand2/brand-2.png";
import b_3 from "@/assets/img/home-01/brand2/brand-3.png";
import b_4 from "@/assets/img/home-01/brand2/brand-4.png";
import b_5 from "@/assets/img/home-01/brand2/brand-5.png";
import b_6 from "@/assets/img/home-01/brand2/brand-6.png";
import b_7 from "@/assets/img/home-01/brand2/brand-7.png";
import b_8 from "@/assets/img/home-01/brand2/brand-8.png";
import b_9 from "@/assets/img/home-01/brand2/brand-9.png";
import b_10 from "@/assets/img/home-01/brand2/brand-10.png";
import b_11 from "@/assets/img/home-01/brand2/brand-11.png";
import b_12 from "@/assets/img/home-01/brand2/brand-12.png";

const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8, b_9, b_10, b_11, b_12, b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8, b_9, b_10, b_11, b_12];

export default function BrandSliderTwo() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={150}
        direction="right"
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          /* CAMBIO 1: Bajamos el width de 450px a 150px */
          <div key={i} className="tp-brand-item pl-50" style={{ height: "auto", width: "150px" }}>
            <Image 
              src={b} 
              alt="Brand Logo" 
              /* CAMBIO 2: Forzamos a que ignore el filtro de la plantilla para que mantenga su color blanco original */
              style={{ filter: "none", width: "100%", height: "auto" }} 
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}