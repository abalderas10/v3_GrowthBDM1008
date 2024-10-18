'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Search, Rocket, TrendingUp, Users, Globe, BarChart, DollarSign, Briefcase, Network } from 'lucide-react';

const ExpansionStrategiesPage = () => {
  const [activePhase, setActivePhase] = useState(0);

  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/alberto-balderas'
      });
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-300">Estrategias de Expansión en México</h1>
          <p className="text-xl mb-8 text-blue-100">Descubre cómo podemos ayudarte a explorar y conquistar el mercado mexicano</p>
          <Button onClick={openCalendly} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            Agenda una Consultoría Gratuita
          </Button>
        </div>
      </section>

      {/* Introducción al Mercado Mexicano */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Introducción al Mercado Mexicano</h2>
          <p className="text-xl mb-8 text-center text-blue-100">
            Explorar el mercado mexicano puede ser un reto para empresas internacionales debido a la complejidad regulatoria, las diferencias culturales y la competencia local. En Growth Business Development, ofrecemos un enfoque integral y personalizado que facilita la entrada de empresas extranjeras a México.
          </p>
        </div>
      </section>

      {/* Paquete de Servicios */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Paquete de Servicios</h2>
          <p className="text-xl mb-8 text-center text-blue-100">
            Nuestro paquete mensual de $20,000 pesos + IVA ofrece una solución completa para aquellas empresas que desean expandir sus operaciones a México.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Briefcase className="w-12 h-12" />, title: 'Consultoría Estratégica', description: 'Análisis detallado de oportunidades y asesoría sobre regulaciones locales.' },
              { icon: <Search className="w-12 h-12" />, title: 'Análisis de Mercado', description: 'Identificación de nichos, competencia y demandas del consumidor.' },
              { icon: <Rocket className="w-12 h-12" />, title: 'Desarrollo de Estrategias', description: 'Planes específicos de expansión adaptados a tu empresa.' },
              { icon: <TrendingUp className="w-12 h-12" />, title: 'Implementación', description: 'Ejecución de estrategias para una entrada fluida al mercado.' },
              { icon: <Network className="w-12 h-12" />, title: 'Networking', description: 'Conexiones con actores estratégicos en la industria.' },
              { icon: <Users className="w-12 h-12" />, title: 'Asistencia en Negociaciones', description: 'Apoyo continuo para lograr cierres de contratos exitosos.' },
            ].map((service, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4 text-blue-400">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center text-blue-200">{service.title}</h3>
                <p className="text-blue-100 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Business Development: Tu Aliado en la Expansión */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Growth Business Development: Tu Aliado en la Expansión</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-200">Networking con Impacto</h3>
              <p className="text-blue-100 mb-4">
                La clave para expandirse exitosamente en un nuevo mercado no solo está en conocer a las personas correctas, sino en conectarse con ellas estratégicamente. Te ofrecemos acceso a una red robusta de contactos que abarca desde inversionistas y proveedores hasta autoridades locales.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-200">Apoyo Completo en Negociaciones</h3>
              <p className="text-blue-100 mb-4">
                El valor añadido de un business developer experto se nota en las negociaciones. Asesoramos a tu equipo durante todo el proceso, aportando estrategias que maximizan tus beneficios y logran cierres más rápidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Exclusiva para Empresas Internacionales */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Oferta Exclusiva para Empresas Internacionales</h2>
          <p className="text-xl mb-8 text-center text-blue-100">
            Nuestra oferta está diseñada específicamente para empresas internacionales de sectores como la construcción, la ingeniería, y la arquitectura, que buscan expandir sus operaciones en México.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-12 h-12" />, title: 'Enfoque Personalizado', description: 'Adaptamos nuestra estrategia a las particularidades de tu empresa y el sector.' },
              { icon: <CheckCircle className="w-12 h-12" />, title: 'Soporte Integral', description: 'Desde la planificación inicial hasta la ejecución y seguimiento.' },
              { icon: <TrendingUp className="w-12 h-12" />, title: 'Estrategias Modernas', description: 'Utilizamos las más recientes técnicas de marketing digital, embudos de ventas, y alianzas estratégicas.' },
            ].map((feature, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4 text-blue-400">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center text-blue-200">{feature.title}</h3>
                <p className="text-blue-100 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-300">¿Estás listo para llevar tu empresa al siguiente nivel en México?</h2>
          <p className="text-xl mb-8 text-blue-100">Contáctanos hoy y comienza tu viaje de expansión con expertos a tu lado.</p>
          <Button onClick={openCalendly} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            Agenda una Consultoría Gratuita
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExpansionStrategiesPage;