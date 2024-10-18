'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { es: 'Estrategias de Expansión', en: 'Expansion Strategies', href: '/estrategias-expansion' },
    { es: 'Growth Intelligence', en: 'Growth Intelligence', href: '/growth-intelligence' },
    { es: 'Blog', en: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <div className="bg-blue-950 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm md:text-base">AliEst Conoce un Grupo de éxito probado que Crea Alianzas Estrategias</p>
          <Button size="sm" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 transition-colors">
            Construye Alianzas
          </Button>
        </div>
      </div>
      <header className={`bg-white shadow-md transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GrowthBDM_blue-wXHawxugy3GdFhlMNBRN9ZTQdwkDBa.png"
              alt="Growth BDM Logo"
              width={150}
              height={50}
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {language === 'es' ? item.es : item.en}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button onClick={toggleLanguage} variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              {language === 'es' ? 'EN' : 'ES'}
            </Button>
            <Button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {language === 'es' ? item.es : item.en}
              </Link>
            ))}
          </div>
        )}
      </header>
      {isSticky && <div className="h-[72px]" />}
    </>
  );
};

export default Header;