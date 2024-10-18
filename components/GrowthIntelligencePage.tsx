'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Database, ShoppingCart, Users, BarChart, Zap, Lock, TrendingUp } from 'lucide-react';

const GrowthIntelligencePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-300">
                Automatiza tu Negocio con Growth Intelligence
              </h1>
              <p className="text-xl mb-6 text-blue-200">
                Agente de Inteligencia Artificial para tu Negocio, siempre disponible, siempre eficiente.
              </p>
              <p className="mb-8 text-blue-100">
                Automatización 24/7 con asistentes virtuales que gestionan tus ventas, atención al cliente, inventarios y mucho más, en una sola plataforma.
              </p>
              <Button onClick={openCalendly} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                Conoce más
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="AI Assistant"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lo que Ofrecemos */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Tu asistente virtual personalizado, adaptado a tu negocio</h2>
          <p className="text-xl mb-12 text-center text-blue-100">
            En Growth Intelligence, te ofrecemos un agente de IA completamente integrado que automatiza las operaciones diarias de tu empresa. Desde responder preguntas de clientes hasta gestionar tus ventas, nuestro asistente está disponible las 24 horas del día, los 7 días de la semana.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MessageSquare className="w-12 h-12 text-blue-400" />, title: 'Integración con múltiples plataformas' },
              { icon: <Database className="w-12 h-12 text-blue-400" />, title: 'Conexión a tu base de conocimiento' },
              { icon: <ShoppingCart className="w-12 h-12 text-blue-400" />, title: 'Procesamiento de ventas automatizado' },
              { icon: <Users className="w-12 h-12 text-blue-400" />, title: 'Personalización avanzada' },
              { icon: <TrendingUp className="w-12 h-12 text-blue-400" />, title: 'Upsell y Downsell automatizado' },
              { icon: <BarChart className="w-12 h-12 text-blue-400" />, title: 'Análisis de datos en tiempo real' },
            ].map((feature, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center text-blue-200">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automatización Inteligente */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Mucho más que atención al cliente: Automatización completa</h2>
          <p className="text-xl mb-12 text-center text-blue-100">
            Nuestro chatbot va más allá de responder preguntas: se integra con tu base de datos y sistemas de inventario para ofrecer un servicio automatizado que incluye ventas, promociones y mucho más. Simplifica la gestión de tu negocio y permite que nuestro asistente trabaje por ti.
          </p>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: <MessageSquare className="w-12 h-12" />, title: 'Atención al Cliente 24/7' },
              { icon: <Database className="w-12 h-12" />, title: 'Inventarios Actualizados' },
              { icon: <ShoppingCart className="w-12 h-12" />, title: 'Ventas Automáticas' },
              { icon: <Users className="w-12 h-12" />, title: 'Personalización Total' },
              { icon: <BarChart className="w-12 h-12" />, title: 'Análisis de Conversaciones' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-400">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-blue-200">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Desde la implementación hasta el éxito, estamos contigo en cada paso</h2>
          <p className="text-xl mb-12 text-center text-blue-100">
            Con Growth Intelligence, no tienes que preocuparte por la configuración. Nos encargamos de integrar todo, desde la base de datos de tu negocio hasta las plataformas de mensajería que prefieras, para que tu asistente virtual comience a trabajar de inmediato.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Database className="w-12 h-12" />, title: 'Configuración Inicial', description: 'Integración con tu base de datos' },
              { icon: <Users className="w-12 h-12" />, title: 'Personalización del Asistente', description: 'Adaptación a las necesidades de tu empresa' },
              { icon: <Zap className="w-12 h-12" />, title: 'Automatización de Procesos', description: 'Implementación de ventas, consultas y atención' },
              { icon: <BarChart className="w-12 h-12" />, title: 'Monitoreo y Análisis', description: 'Información en tiempo real para mejoras continuas' },
            ].map((step, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4 text-blue-400">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-200">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Ventajas que marcan la diferencia</h2>
          <p className="text-xl mb-12 text-center text-blue-100">
            Al implementar Growth Intelligence, tu empresa no solo adopta la tecnología más avanzada, sino que se posiciona al frente de la competencia con una atención constante, eficiente y personalizada.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <BarChart className="w-12 h-12" />, title: 'Análisis de Conversaciones', description: 'Descubre las necesidades de tus clientes' },
              { icon: <MessageSquare className="w-12 h-12" />, title: 'Responde Preguntas con Precisión', description: 'Información detallada y relevante gracias a la base de conocimiento integrada' },
              { icon: <TrendingUp className="w-12 h-12" />, title: 'Aumento en Ventas', description: 'Promociones automáticas basadas en preferencias' },
              { icon: <Lock className="w-12 h-12" />, title: 'Costos Reducidos', description: 'Automatiza procesos repetitivos y libera a tu equipo para tareas más estratégicas' },
            ].map((advantage, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-blue-400">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-200">{advantage.title}</h3>
                </div>
                <p className="text-blue-100">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-300">¿Listo para Automatizar tu Negocio?</h2>
          <p className="text-xl mb-8 text-blue-100">Crece tu negocio con automatización inteligente. Implementa Growth Intelligence y transforma la gestión de tu empresa hoy mismo.</p>
          <Button onClick={openCalendly} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-4">
            Contáctanos para más información
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-950">
        <div className="container mx-auto px-4">
          <p className="text-center text-blue-200 mb-4">
            Growth Intelligence es una solución de Growth Business Development, especializada en la transformación digital del desarrollo inmobiliario, arquitectura, construcción y más.
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            {/* Add social media icons here */}
          </div>
          <p className="text-center text-blue-300">
            Contacto: info@growthbdm.com | Tel: +1 234 567 890
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GrowthIntelligencePage;