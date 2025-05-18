import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de Marcas de Tiempo de Discord | Guías y Consejos',
  description: 'Aprende a usar las marcas de tiempo de Discord de manera efectiva con nuestras guías completas y consejos para una mejor comunicación en tu servidor.',
  keywords: 'Guía de marcas de tiempo Discord, Blog de formato de tiempo Discord, Planificación de eventos Discord, Tutoriales Discord',
};

const guides = [
  {
    title: 'Cómo Usar Marcas de Tiempo en Discord',
    description: 'Una guía completa para principiantes sobre el uso de la función de marcas de tiempo dinámicas de Discord.',
    slug: '/es/guides/how-to-use-discord-timestamps',
    date: '12 de mayo de 2024',
  },
  {
    title: 'Consejos para Formatear Marcas de Tiempo en Discord',
    description: 'Técnicas avanzadas de formateo para hacer tus marcas de tiempo de Discord más efectivas.',
    slug: '/es/guides/discord-timestamp-formatting-tips',
    date: '14 de mayo de 2024',
  },
  {
    title: 'Marcas de Tiempo de Discord para Eventos',
    description: 'Aprende a usar marcas de tiempo para planificar y organizar eventos en tu servidor de Discord.',
    slug: '/es/guides/discord-timestamps-for-events',
    date: '16 de mayo de 2024',
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-5xl font-bold mb-6 text-center leading-relaxed text-gray-800">Blog de Marcas de Tiempo de Discord</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
          Explora nuestras guías y tutoriales para dominar las marcas de tiempo de Discord y mejorar la comunicación en tu servidor.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-8 leading-relaxed">Guías Recientes</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link 
              key={guide.slug} 
              href={guide.slug}
              className="block group"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-blue-300 h-full">
                <div className="p-6 space-y-4">
                  <p className="text-base text-gray-500 leading-relaxed">{guide.date}</p>
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors leading-relaxed">{guide.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{guide.description}</p>
                  <div className="pt-3">
                    <span className="inline-flex items-center text-blue-600 text-base font-medium">
                      Leer más
                      <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-6 leading-relaxed">¿Buscas Nuestro Generador de Marcas de Tiempo?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Vuelve a nuestra página de inicio para usar nuestra herramienta generadora de marcas de tiempo de Discord y crear marcas de tiempo para tu servidor.
        </p>
        <Link 
          href="/es"
          className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Ir al Generador de Marcas de Tiempo
        </Link>
      </div>
    </div>
  );
} 