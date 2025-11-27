import React from 'react';
import Image, { StaticImageData } from 'next/image';
import CounterItem from './counter-item';

// images 
import marque_1 from '@/assets/img/home-05/marque/marque-1.jpg';
import marque_2 from '@/assets/img/home-05/marque/marque-2.jpg';
import marque_3 from '@/assets/img/home-05/marque/marque-3.jpg';
import marque_4 from '@/assets/img/home-05/marque/marque-4.jpg';
import marque_5 from '@/assets/img/home-05/marque/marque-5.jpg';
import marque_6 from '@/assets/img/home-05/marque/marque-6.jpg';
import marque_7 from '@/assets/img/home-05/marque/marque-7.jpg';
import marque_8 from '@/assets/img/home-05/marque/marque-8.jpg';
import marque_9 from '@/assets/img/home-05/marque/marque-9.jpg';
import marque_10 from '@/assets/img/home-05/marque/marque-10.jpg';
import marque_11 from '@/assets/img/home-05/marque/marque-11.jpg';
import marque_12 from '@/assets/img/home-05/marque/marque-12.jpg';
import marque_13 from '@/assets/img/home-05/marque/marque-13.jpg';
import marque_14 from '@/assets/img/home-05/marque/marque-14.jpg';
import marque_15 from '@/assets/img/home-05/marque/marque-15.jpg';
import marque_16 from '@/assets/img/home-05/marque/marque-16.jpg';
import marque_17 from '@/assets/img/home-05/marque/marque-17.jpg';

// 1. Agrupamos las imágenes en un array para limpiar el código y facilitar el renderizado
const marqueImages = [
  marque_1, marque_2, marque_3, marque_4, marque_5, marque_6,
  marque_7, marque_8, marque_9, marque_10, marque_11, marque_12,
  marque_13, marque_14, marque_15, marque_16, marque_17
];

// 2. Componente optimizado para Mobile
function MarqueImage({ src }: { src: StaticImageData }) {
  return (
    <Image 
      src={src} 
      alt="marque-img" 
      style={{ height: 'auto' }} 
      // FIX PERFORMANCE:
      priority={true} // Carga inmediata, evita el parpadeo al entrar en pantalla
      sizes="(max-width: 768px) 150px, 300px" // Descarga una versión más liviana en celular
    />
  );
}

export default function CounterOne() {
  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow">
          <span></span>
        </div>
        
        {/* Lado Izquierdo */}
        <div className="slide-img-left">
          <div className="box">
            {marqueImages.map((img, i) => <MarqueImage key={`l-1-${i}`} src={img} />)}
          </div>
          <div className="box">
            {marqueImages.map((img, i) => <MarqueImage key={`l-2-${i}`} src={img} />)}
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="slide-img-right">
          <div className="box">
            {marqueImages.map((img, i) => <MarqueImage key={`r-1-${i}`} src={img} />)}
          </div>
          <div className="box">
            {marqueImages.map((img, i) => <MarqueImage key={`r-2-${i}`} src={img} />)}
          </div>
        </div>
      </div>

      <div className="slide-funfact-wrap">
        <div>
          <div className="container">
            <div className="row">
              {/* --- Item 1 --- */}
              <div className="col-xl-3 col-lg-3 col-md-3 mb-30">
                <div className="slide-funfact-item text-center">
                  {/* FIX VISUAL: Font-size reducido en mobile con clamp */}
                  <h4 style={{ fontSize: 'clamp(32px, 3vw, 50px)' }}>
                    <CounterItem min={0} max={20} />+
                  </h4>
                  <span>Millones de fans felices</span>
                </div>
              </div>
              {/* --- Item 2 --- */}
              <div className="col-xl-3 col-lg-3 col-md-3 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4 style={{ fontSize: 'clamp(32px, 3vw, 50px)' }}>
                    <CounterItem min={0} max={1000} />+
                  </h4>
                  <span>Conciertos con nuestro valor agregado</span>
                </div>
              </div>
              {/* --- Item 3 --- */}
              <div className="col-xl-3 col-lg-3 col-md-3 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4 style={{ fontSize: 'clamp(32px, 3vw, 50px)' }}>
                    <CounterItem min={0} max={200} />+
                  </h4>
                  <span>Ciudades con nuestros equipos regionales </span>
                </div>
              </div>
              {/* --- Item 4 --- */}
              <div className="col-xl-3 col-lg-3 col-md-3 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4 style={{ fontSize: 'clamp(32px, 3vw, 50px)' }}>
                    <CounterItem min={0} max={15} />+
                  </h4>
                  <span>años de experiencia en el mundo del entretenimiento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}