"use client";
import React, { useState } from "react";
import Image from "next/image";
import VideoModal from "@/components/video-modal/video-modal";

const HomeVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // AQUÍ PEGA EL LINK DE CLOUDINARY QUE ME MOSTRASTE ANTES
  const VIDEO_URL = "https://player.cloudinary.com/embed/?cloud_name=dddui79c6&public_id=Be_Smart_Reel_v4_1_gaz4vj&muted=true";

  return (
    <>
      <section className="home-video-section pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div 
                className="video-banner-container" 
                onClick={() => setIsVideoOpen(true)}
              >
                {/* IMPORTANTE: Asegurate de tener una imagen en esta ruta 
                   o cambia el src por una que ya tengas en public/assets/img/ 
                */}
                <Image 
                  src="/assets/img//home-04/about/portada-video.png" 
                  alt="Be Smart Institutional Video"
                  width={1280}
                  height={720}
                  className="img-fluid rounded-4"
                />
                <div className="play-button-overlay">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamamos al modal que creaste en el paso anterior */}
      <VideoModal 
        isOpen={isVideoOpen} 
        setIsOpen={setIsVideoOpen} 
        videoUrl={VIDEO_URL} 
      />
    </>
  );
};

export default HomeVideo;