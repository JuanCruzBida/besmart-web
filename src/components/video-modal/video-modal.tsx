"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  videoUrl: string;
}

const VideoModal = ({ isOpen, setIsOpen, videoUrl }: VideoModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div 
      onClick={() => setIsOpen(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 9999999, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '90%',
          maxWidth: '1000px',
          aspectRatio: '16/9',
          position: 'relative',
          cursor: 'default'
        }}
      >
        <button 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '-40px',
            right: '0',
            color: 'white',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ✖ CERRAR
        </button>

        <iframe
          src={`${videoUrl}&autoplay=1`} 
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#000'
          }}
        ></iframe>
      </div>
    </div>,
    document.body // Esto lo saca del lío de GSAP y lo manda al final del HTML
  );
};

export default VideoModal;