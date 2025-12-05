import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import { DownArrow } from "../../svg";
import { SlickNextArrow, SlickPrevArrow } from "../../slick-arrow";

// images
import port_sm_1 from "@/assets/img/home-11/port-sm-1.png";
import port_sm_2 from "@/assets/img/home-11/port-sm-2.png";
import port_sm_3 from "@/assets/img/home-11/port-sm-3.png";
import port_sm_4 from "@/assets/img/home-11/port-sm-4.png";
import port_sm_5 from "@/assets/img/home-11/port-sm-5.png";
import port_sm_6 from "@/assets/img/home-11/port-sm-6.png";

const slider_setting_one = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 1000,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
};

const slider_setting_two = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrow: false,
  focusOnSelect: true,
  centerPadding: "0",
  speed: 600,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
  responsive: [
    {
      breakpoint: 1600,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1400,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 992,
      settings: { arrows: false, slidesToShow: 4 },
    },
    {
      breakpoint: 768,
      settings: { arrows: false, slidesToShow: 4 },
    },
    {
      breakpoint: 480,
      settings: { arrows: false, slidesToShow: 4 },
    },
  ],
};

type IProps = {
  dict: any;
};

export default function PortfolioSliderHomeTen({ dict }: IProps) {
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
  const [sliderIndex, setSliderIndex] = useState<number>(1);
  const sliderRef = useRef<Slider | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const b = dict?.membership?.benefits_slider;

  // Datos del slider principal
  const slider_data = [
    {
      id: 0,
      bg: "/assets/img/home-11/port-1.png",
      subtitle: "Membership",
      title: b?.exclusive || "Beneficios <br> Exclusivos",
    },
    {
      id: 1,
      bg: "/assets/img/home-11/port-sm-1.png",
      subtitle: "Membership",
      title: b?.packages || "VIP Packages",
    },
    {
      id: 2,
      bg: "/assets/img/home-11/port-sm-2.png",
      subtitle: "Membership",
      title: b?.lounge || "Lounge VIP",
    },
    {
      id: 3,
      bg: "/assets/img/home-11/port-sm-3.png",
      subtitle: "Membership",
      title: b?.presale || "Pre venta Exclusiva",
    },
    {
      id: 4,
      bg: "/assets/img/home-11/port-sm-4.png",
      subtitle: "Membership",
      title: b?.discounts || "Descuentos en merch",
    },
    {
      id: 5,
      bg: "/assets/img/home-11/port-sm-5.png",
      subtitle: "Membership",
      title: b?.soundcheck || "Pruebas de sonido",
    },
    {
      id: 6,
      bg: "/assets/img/home-11/port-sm-6.png",
      subtitle: "Membership",
      title: b?.gifts || "Regalos y sorpresas",
    },
  ];

  // Datos de las miniaturas (thumbnails)
  const slider_thumbs = [
    { id: 1, img: port_sm_1, title: b?.packages || "VIP Packages" },
    { id: 2, img: port_sm_2, title: b?.lounge || "Lounge VIP" },
    { id: 3, img: port_sm_3, title: b?.presale || "Pre venta Exclusiva" },
    { id: 4, img: port_sm_4, title: b?.discounts || "Descuentos en Merch" },
    { id: 5, img: port_sm_5, title: b?.soundcheck || "Pruebas de sonido" },
    { id: 6, img: port_sm_6, title: b?.gifts || "Regalos y Sorpresas" },
  ];

  return (
    <div className="tp-portfolio-11-area fix" style={{ backgroundImage: isMobile ? 'none' : `url(/assets/img/home-11/port-1.png)`}}>
      <div className="tp-portfolio-11-slider-wrap p-relative">
        
        {/* SLIDER PRINCIPAL */}
        <Slider
          {...slider_setting_one}
          asNavFor={slider2 as Slider}
          ref={(slider) => {
            setSlider1(slider);
            sliderRef.current = slider;
          }}
          className="tp-portfolio-11-slider-active"
        >
          {slider_data.map((item) => (
            <div key={item.id}>
              <div
                className="tp-portfolio-11-slider-bg pt-170 pb-150 d-flex align-items-end"
                style={{ background: isMobile ? `url(${item.bg})` : 'transparent', backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}
              >
                {/* z-index aumentado para asegurar visibilidad */}
                <div className="tp-portfolio-11-slider-content" style={{ position: 'relative', zIndex: 20 }}>
                  <div className="tp-portfolio-11-slider-link">
                    <div>
                      <DownArrow />
                    </div>
                  </div>
                  <span className="tp-portfolio-11-slider-subtitle">
                    {item.subtitle}
                  </span>
                  <h3 className="tp-portfolio-11-slider-title">
                    {/* Render HTML seguro para el título principal */}
                    <div dangerouslySetInnerHTML={{ __html: item.title }} />
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="dddd"></div>

        {/* SLIDER NAVEGACIÓN (THUMBS) */}
        <div className="tp-portfolio-11-slider-nav-wrap z-index-5">
          <div
            className="slides-numbers d-none d-lg-flex d-flex align-items-center"
            style={{ display: "inline-block" }}
          >
            <div className="slider-line"></div>
            <span className="active">{sliderIndex < 9 ? `0${sliderIndex}` : sliderIndex}</span>
          </div>
          
          <Slider
            {...slider_setting_two}
            asNavFor={slider1 as Slider}
            ref={(slider) => setSlider2(slider)}
            afterChange={(index) => setSliderIndex(index + 1)}
            className="tp-portfolio-11-slider-nav-active d-none d-lg-block"
          >
            {slider_thumbs.map((item) => (
              <div
                key={item.id}
                className="tp-portfolio-11-slider-nav-item p-relative"
              >
                <div className="tp-portfolio-11-slider-nav-thumb">
                  <Image
                    src={item.img}
                    alt="thumb-img"
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="tp-portfolio-11-slider-nav-content-wrap">
                  <div className="tp-portfolio-11-slider-nav-content d-flex flex-column justify-content-between">
                    <div className="tp-portfolio-11-slider-nav-year">
                      <span></span>
                    </div>
                    <div className="tp-portfolio-11-slider-nav-tittle-box">
                      <span className="tp-portfolio-11-slider-nav-subtittle"></span>
                      <h4 className="tp-portfolio-11-slider-nav-tittle">
                        
                        {/* --- CORRECCIÓN AQUÍ: Interpretamos el HTML también en las cards --- */}
                        <Link href="#">
                           <span dangerouslySetInnerHTML={{ __html: item.title }} />
                        </Link>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}