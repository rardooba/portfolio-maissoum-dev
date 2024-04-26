/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const LogoAnimation: React.FC = () => {
  const buttonRef = useRef<HTMLImageElement>(null);
  const [maxWidth, setMaxWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const newMaxWidth = window.innerWidth - 350;
        setMaxWidth(newMaxWidth);
      };

      window.addEventListener('resize', handleResize);
      handleResize(); // Appel initial pour définir la largeur maximale

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    let timeoutId: NodeJS.Timeout;

    const handleMouseOver = () => {
      clearTimeout(timeoutId); // Réinitialise le timeout précédent
      if (button) {
        const newPosition = Math.floor(Math.random() * (maxWidth + 1));
        button.style.left = `${newPosition}px`;

        // Réinitialise la position après un certain délai
        timeoutId = setTimeout(() => {
          if (button) {
            button.style.left = '0px'; // Position d'origine
          }
        }, 1000); // Délai en millisecondes
      }
    };

    if (button) {
      button.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      if (button) {
        button.removeEventListener('mouseover', handleMouseOver);
      }
      clearTimeout(timeoutId); // Nettoie le timeout lors du démontage
    };
  }, [maxWidth]);

  return (
    <div id="logo" className="flex-1 group relative">
      <Link href="/">
        <img
          ref={buttonRef}
          src="./assets/logo.jpg"
          alt="Maïssoum logo"
          className="w-10 h-10 absolute rounded-full object-contain transition-transform group-hover:translate-x-20 active:cursor-grabbing"
        />
      </Link>
    </div>
  );
};

export default LogoAnimation;
