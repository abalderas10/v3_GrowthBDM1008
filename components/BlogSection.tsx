import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'El Auge de las Startups en México',
      description: 'Descubre cómo el ecosistema de startups está transformando la economía mexicana.',
      image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Innovación Tecnológica en el Sector Financiero',
      description: 'Análisis de las últimas tendencias fintech y su impacto en los servicios financieros tradicionales.',
      image: 'https://images.unsplash.com/photo-1512699355324-f07e3106dae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    },
    {
      title: 'Estrategias de Expansión Internacional para Empresas Mexicanas',
      description: 'Guía práctica para empresas que buscan expandirse más allá de las fronteras nacionales.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <section className="py-16" style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Mercado en Crecimiento en México</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Button variant="outline">Leer más</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;