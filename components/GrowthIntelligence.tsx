import Image from 'next/image';
import { Button } from '@/components/ui/button';

const GrowthIntelligence = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500 opacity-10 animate-pulse" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Growth Intelligence"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Growth Intelligence: Impulsando el Crecimiento a través de la Automatización Inteligente</h2>
            <p className="mb-6">
              Growth Intelligence es nuestra solución de automatización inteligente diseñada para optimizar procesos, analizar datos y generar insights valiosos para impulsar el crecimiento de su negocio.
            </p>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 transition-colors">
              Descubre Growth Intelligence
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthIntelligence;