"use client";

import React, { useEffect } from 'react';

// Declare global Wistia API type to avoid TypeScript errors
declare global {
  interface Window {
    Wistia: any;
  }
}

const VideoPlayer: React.FC = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/embed/medias/psgjjt79h7.jsonp";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup function to remove scripts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    const initWistiaPlayer = () => {
      const wistiaEmbed = document.querySelector('.wistia_embed') as HTMLElement;
      if (wistiaEmbed && window.Wistia) {
        const wistia = window.Wistia.api(wistiaEmbed);
        wistia.play(); // Autoplay the video
      }
    };

    // Ensure the Wistia script has loaded before initializing player
    const checkForWistiaScript = setInterval(() => {
      if (window.Wistia) {
        clearInterval(checkForWistiaScript);
        initWistiaPlayer();
      }
    }, 100);

    return () => clearInterval(checkForWistiaScript);
  }, []);

  return (
    <div className="rounded-lg ml-2">
      <div className="wistia_responsive_padding" style={{ padding: '75.0% 0 0 0', position: 'relative' }}>
        <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
          <div className="wistia_embed wistia_async_psgjjt79h7 seo=true videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
            <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
              <img 
                src="https://fast.wistia.com/embed/medias/psgjjt79h7/swatch" 
                style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} 
                alt="" 
                aria-hidden="true" 
                onLoad={(e) => {
                  const parentNode = e.currentTarget.parentNode as HTMLElement;
                  if (parentNode) {
                    parentNode.style.opacity = '1';
                  }
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
