'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const StrategicAlliances = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scroll = () => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      };
      const intervalId = setInterval(scroll, 30);
      return () => clearInterval(intervalId);
    }
  }, []);

  const aliados = [
    { nombre: 'Coldwell Banker Commercial', logo: '/images/179.jpg' },
    { nombre: 'Space', logo: '/images/180.jpg' },
    { nombre: 'Doorman', logo: '/images/186.jpg' },
    { nombre: '3Difica', logo: '/images/187.jpg' },
    { nombre: 'Grupo Preilsa', logo: '/images/188.jpg' },
    { nombre: 'Inter Proteccion', logo: '/images/189.jpg' },
    { nombre: 'Grupo GMI', logo: '/images/196.jpg' },
    { nombre: 'KCA International', logo: '/images/198.jpg' },
    { nombre: 'Abax', logo: '/images/209.jpg' },
    { nombre: 'IOS Offices', logo: '/images/218.jpg' },
    { nombre: 'Ranver Estacionamientos', logo: '/images/219.jpg' },
  ];

  const MotionDiv = motion.div;

  return (
    <section className="py-20 bg-growth-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-growth-text">Alianzas Estratégicas</h2>
        <div ref={scrollRef} className="flex overflow-x-auto space-x-4 pb-4">
          {[...aliados, ...aliados].map((aliado, index) => (
            <MotionDiv
              key={index}
              className="flex-none w-64 h-48 bg-white rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={aliado.logo}
                alt={aliado.nombre}
                width={256}
                height={192}
                objectFit="contain"
                className="w-full h-full"
              />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicAlliances;