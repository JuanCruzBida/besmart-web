"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitch() {
  // Solución al error de "posiblemente null"
  const pathname = usePathname() || "";
  const [isEnglish, setIsEnglish] = useState(false);

  // Sincronizar estado visual
  useEffect(() => {
    setIsEnglish(pathname.startsWith('/en'));
  }, [pathname]);

  // LÓGICA CORREGIDA PARA EL LINK
  const getOppositeLink = () => {
    // Si la ruta empieza con /en, cambiamos el prefijo a /es
    if (pathname.startsWith('/en')) {
      return pathname.replace('/en', '/es');
    }
    // Si la ruta empieza con /es, cambiamos el prefijo a /en
    if (pathname.startsWith('/es')) {
      return pathname.replace('/es', '/en');
    }
    // Caso de respaldo (si estás en la raíz pura), mandamos a inglés
    return `/en${pathname === '/' ? '' : pathname}`;
  };

  return (
    <div className="lang-switch-wrapper" style={{ marginRight: '20px' }}>
      <Link href={getOppositeLink()} scroll={false}>
        <div className={`switch-container ${isEnglish ? 'active-en' : 'active-es'}`}>
          <div className="switch-slider"></div>
          <span className={`lang-text ${!isEnglish ? 'active' : ''}`}>ES</span>
          <span className={`lang-text ${isEnglish ? 'active' : ''}`}>EN</span>
        </div>
      </Link>

      <style jsx>{`
        .switch-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 70px;
          height: 30px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          cursor: pointer;
          padding: 0 4px;
          transition: all 0.3s ease;
        }
        .switch-container:hover {
          border-color: rgba(255, 255, 255, 0.6);
        }
        .switch-slider {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 30px;
          height: 22px;
          background: #fff;
          border-radius: 20px;
          transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
          z-index: 0;
        }
        .active-es .switch-slider { transform: translateX(0); }
        .active-en .switch-slider { transform: translateX(32px); }
        
        .lang-text {
          position: relative;
          z-index: 1;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          width: 50%;
          text-align: center;
          transition: color 0.3s;
          user-select: none;
        }
        .lang-text.active { color: #000; }
      `}</style>
    </div>
  );
}