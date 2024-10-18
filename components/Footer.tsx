import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Growth BDM</h3>
            <p className="text-gray-400">
              Especialistas en desarrollo de negocios y alianzas estratégicas en México.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400">Inicio</Link></li>
              <li><Link href="#services" className="hover:text-blue-400">Servicios</Link></li>
              <li><Link href="/estrategias-expansion" className="hover:text-blue-400">Estrategias de Expansión</Link></li>
              <li><Link href="/growth-intelligence" className="hover:text-blue-400">Growth Intelligence</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400">Email: adriana.vargas@growthbdm.com</p>
            <p className="text-gray-400">Teléfono: +52 (55) 2701 6354</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Boletín Informativo</h4>
            <p className="text-gray-400 mb-4">Suscríbete para recibir noticias y actualizaciones.</p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Tu correo electrónico" className="bg-gray-800 text-white" />
              <Button type="submit">Suscribirse</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Growth Business Development México. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;