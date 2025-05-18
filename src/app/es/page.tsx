import React from 'react';
import Link from 'next/link';
import DiscordTimestamp from '../components/DiscordTimestamp';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Main Converter Tool Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 text-center leading-relaxed">Conversor de Marcas de Tiempo Discord</h1>
        <p className="text-2xl mb-10 text-center text-gray-600 leading-relaxed">
          Convierte tu hora local al formato de marca de tiempo de Discord
        </p>
        
        <DiscordTimestamp />
      </div>
      
      {/* What Are Discord Timestamps Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-8 leading-relaxed">¿Qué Son las Marcas de Tiempo de Discord?</h2>
        <p className="text-xl mb-6 leading-relaxed">
          Las marcas de tiempo de Discord son códigos de formato especiales que muestran la hora en la zona horaria local del usuario. Cuando envías un mensaje con una marca de tiempo,
          Discord lo convierte automáticamente para cada persona que lo lee - ¡no más confusión sobre zonas horarias!
        </p>
        <p className="text-xl leading-relaxed">
          Puedes usar las marcas de tiempo Discord para programar eventos, establecer plazos, recordar aniversarios o coordinar actividades en diferentes zonas horarias.
        </p>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-8 leading-relaxed">Preguntas Frecuentes Sobre Tiempo en Discord</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">¿Cómo funcionan las marcas de tiempo de Discord?</h3>
            <p className="text-xl leading-relaxed">Las marcas de tiempo de Discord utilizan el formato de tiempo Unix envuelto en una sintaxis especial. Cuando se muestran, se convierten automáticamente a la hora local de cada usuario.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">¿Qué formatos de marca de tiempo admite Discord?</h3>
            <p className="text-xl leading-relaxed">Discord admite varios formatos: hora corta (HH:MM), hora larga (HH:MM:SS), fecha corta (MM/DD/AAAA), fecha larga (Mes DD, AAAA), fecha larga con hora corta y tiempo relativo.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">¿Puedo usar marcas de tiempo en embeds de Discord?</h3>
            <p className="text-xl leading-relaxed">Sí, las marcas de tiempo de Discord funcionan en embeds y mensajes regulares. Son especialmente útiles para anuncios de eventos y recordatorios.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">¿Funcionan las marcas de tiempo en dispositivos móviles?</h3>
            <p className="text-xl leading-relaxed">Sí, las marcas de tiempo de Discord funcionan perfectamente en todas las plataformas: versiones de escritorio, móvil y web de Discord.</p>
          </div>
        </div>
      </div>
      
      {/* Special Events Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-6 leading-relaxed">Eventos Especiales</h2>
        <p className="text-xl leading-relaxed">
          ¡Consulta nuestras marcas de tiempo de Discord listas para usar para todos los{' '}
          <Link href="/events/us-holidays-2025" className="text-blue-600 hover:underline">
            Días Festivos de EE.UU. 2025
          </Link>!
        </p>
      </div>
    </div>
  );
} 