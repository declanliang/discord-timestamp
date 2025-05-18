import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cómo Usar Marcas de Tiempo en Discord | Guía Completa',
  description: 'Aprende a usar las marcas de tiempo de Discord en tus mensajes para mostrar fechas y horas que se ajustan automáticamente a la zona horaria de cada usuario.',
  keywords: 'Marcas de tiempo Discord, formato de hora Discord, formato de fecha Discord, tiempo relativo Discord, conversor de zona horaria',
};

export default function HowToUseDiscordTimestamps() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <Link href="/es" className="text-blue-500 hover:underline inline-block mb-2">
            ← Volver al Inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Cómo Usar Marcas de Tiempo en Discord</h1>
          <p className="text-xl text-gray-600">Una guía completa para usar formatos de tiempo dinámicos en Discord</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">¿Qué son las Marcas de Tiempo de Discord?</h2>
          <p className="text-gray-700">
            Las marcas de tiempo de Discord son formatos de texto especiales que muestran fechas y horas que se
            ajustan automáticamente a la zona horaria local de cada usuario. Esto significa que si estás planeando un evento
            o estableciendo una fecha límite, todos verán la hora en su propia zona horaria, evitando confusiones.
          </p>
          
          <div className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
            <p className="text-gray-800">
              <strong>Consejo Pro:</strong> Usar marcas de tiempo asegura que todos los miembros de tu servidor vean la hora correcta,
              independientemente de dónde se encuentren en el mundo.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Formato Básico de Marca de Tiempo</h2>
          <p className="text-gray-700">
            El formato básico para una marca de tiempo de Discord es:
          </p>
          <div className="bg-gray-100 p-4 rounded-md overflow-auto">
            <code className="text-sm">&lt;t:TIMESTAMP:FORMAT&gt;</code>
          </div>
          <p className="text-gray-700">
            Donde:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>TIMESTAMP</strong> es una marca de tiempo Unix (segundos desde el 1 de enero de 1970)</li>
            <li><strong>FORMAT</strong> es un especificador de formato opcional (como t, T, d, D, f, F, o R)</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6">Cómo Obtener una Marca de Tiempo Unix</h3>
          <p className="text-gray-700">
            Puedes convertir cualquier fecha y hora a una marca de tiempo Unix usando nuestra herramienta en la página de inicio.
            Simplemente selecciona tu fecha y hora, y copia el código de marca de tiempo generado.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Tipos de Formato Disponibles</h2>
          <p className="text-gray-700">
            Discord ofrece varias opciones diferentes de formato para las marcas de tiempo:
          </p>
          
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Hora Corta (t)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:t&gt;</code>
              <p className="text-gray-600">Se muestra como: 16:20</p>
              <p className="text-gray-600 text-sm">Muestra solo la hora en formato de 24 horas.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Hora Larga (T)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:T&gt;</code>
              <p className="text-gray-600">Se muestra como: 16:20:00</p>
              <p className="text-gray-600 text-sm">Muestra la hora con segundos.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Fecha Corta (d)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:d&gt;</code>
              <p className="text-gray-600">Se muestra como: 01/09/2023</p>
              <p className="text-gray-600 text-sm">Muestra solo la fecha en un formato compacto.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Fecha Larga (D)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:D&gt;</code>
              <p className="text-gray-600">Se muestra como: 1 de septiembre de 2023</p>
              <p className="text-gray-600 text-sm">Muestra la fecha completa con el nombre del mes.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Fecha/Hora Corta (f)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:f&gt;</code>
              <p className="text-gray-600">Se muestra como: 1 de septiembre de 2023 16:20</p>
              <p className="text-gray-600 text-sm">Muestra la fecha y hora juntas.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Fecha/Hora Larga (F)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:F&gt;</code>
              <p className="text-gray-600">Se muestra como: viernes, 1 de septiembre de 2023 16:20</p>
              <p className="text-gray-600 text-sm">Muestra la fecha completa con el día de la semana y la hora.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Tiempo Relativo (R)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:R&gt;</code>
              <p className="text-gray-600">Se muestra como: en 3 horas O hace 2 días</p>
              <p className="text-gray-600 text-sm">Muestra el tiempo relativo a la hora actual (se actualiza dinámicamente).</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Ejemplos Prácticos</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Planificación de un Evento en el Servidor</h3>
            <p className="text-gray-700">
              Al anunciar un evento en tu servidor de Discord:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                🎮 Únete a nuestra sesión de juegos <code>&lt;t:1693526400:F&gt;</code>! Asegúrate de registrarte en el canal #registro antes de <code>&lt;t:1693526400:R&gt;</code>.
              </p>
            </div>
            <p className="text-gray-700">
              Esto mostrará la fecha y hora completas, más una cuenta regresiva que se actualiza automáticamente.
            </p>
            
            <h3 className="text-xl font-medium mt-6">Establecimiento de Fechas Límite</h3>
            <p className="text-gray-700">
              Para fechas límite de entrega:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                Por favor, envía tus participaciones para el concurso antes de <code>&lt;t:1693526400:f&gt;</code> (<code>&lt;t:1693526400:R&gt;</code>).
              </p>
            </div>
            
            <h3 className="text-xl font-medium mt-6">Anuncio de Mantenimiento del Servidor</h3>
            <p className="text-gray-700">
              Para tiempo de inactividad del servidor:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                ⚠️ Nuestro bot estará inactivo por mantenimiento <code>&lt;t:1693526400:R&gt;</code> durante aproximadamente 2 horas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Consejos Avanzados</h2>
          
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <strong>Combina formatos:</strong> Puedes usar múltiples formatos de marca de tiempo en el mismo mensaje para proporcionar información completa. Por ejemplo, muestra tanto la fecha/hora completa como una cuenta regresiva.
            </li>
            <li>
              <strong>Crea recordatorios recurrentes:</strong> Usa un bot que pueda enviar mensajes con marcas de tiempo para eventos recurrentes, actualizando la marca de tiempo Unix cada vez.
            </li>
            <li>
              <strong>Fija mensajes importantes con marcas de tiempo:</strong> Para eventos o fechas límite a largo plazo, fija mensajes con marcas de tiempo en canales relevantes.
            </li>
            <li>
              <strong>Usa nuestras Marcas de Tiempo para Días Festivos:</strong> Consulta nuestros <Link href="/events/us-holidays-2025" className="text-blue-500 hover:underline">Días Festivos de EE. UU. para 2025</Link> con marcas de tiempo de Discord listas para copiar.
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Pruébalo Tú Mismo</h2>
          <p className="text-gray-700 mb-4">
            ¿Listo para usar marcas de tiempo de Discord en tu servidor? ¡Regresa a nuestro <Link href="/es" className="text-blue-500 hover:underline">generador de marcas de tiempo</Link> para crear tus propias marcas de tiempo personalizadas!
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/es"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Generar Marcas de Tiempo Ahora
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>
            Consulta nuestras otras guías: <Link href="/es/guides/discord-timestamp-formatting-tips" className="text-blue-500 hover:underline">Consejos para Formatear Marcas de Tiempo de Discord</Link> | <Link href="/es/guides/discord-timestamps-for-events" className="text-blue-500 hover:underline">Usando Marcas de Tiempo para Eventos de Discord</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 