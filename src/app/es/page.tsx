import React from 'react';
import Link from 'next/link';
import DiscordTimestamp from '../components/DiscordTimestamp';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Conversor de Marcas de Tiempo Discord</h1>
          <p className="mt-2 text-gray-600">
            Convierte tu hora local al formato de marca de tiempo de Discord que se ajusta automáticamente a la zona horaria de cada usuario
          </p>
        </div>
        
        <DiscordTimestamp />
        
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-xl font-semibold mb-3">Eventos Especiales</h2>
          <p className="mb-4">
            ¡Consulta nuestras marcas de tiempo de Discord listas para usar para todos los{' '}
            <Link href="/events/us-holidays-2025" className="text-blue-600 hover:underline">
              Días Festivos de EE.UU. 2025
            </Link>!
          </p>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <h2 className="text-xl font-semibold mb-3">Guías de Marcas de Tiempo de Discord</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/es/guides/how-to-use-discord-timestamps" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Cómo Usar Marcas de Tiempo en Discord</h3>
              <p className="text-gray-600 text-sm">Guía completa para usar formatos de tiempo dinámicos en Discord</p>
            </Link>
            
            <Link href="/es/guides/discord-timestamp-formatting-tips" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Consejos de Formato</h3>
              <p className="text-gray-600 text-sm">Técnicas avanzadas para mejorar tus mensajes de Discord</p>
            </Link>
            
            <Link href="/es/guides/discord-timestamps-for-events" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Marcas de Tiempo para Eventos</h3>
              <p className="text-gray-600 text-sm">Planificación y organización de eventos del servidor Discord</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 