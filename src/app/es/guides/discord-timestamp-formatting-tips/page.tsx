import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consejos para Formatear Marcas de Tiempo en Discord | Técnicas Avanzadas',
  description: 'Aprende técnicas avanzadas de formateo para las marcas de tiempo de Discord para mejorar la comunicación en tu servidor con visualizaciones profesionales de fecha y hora.',
  keywords: 'Formateo de marcas de tiempo Discord, consejos formato de hora Discord, trucos formato de fecha Discord, marcas de tiempo avanzadas Discord',
};

export default function DiscordTimestampFormattingTips() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <Link href="/es" className="text-blue-500 hover:underline inline-block mb-2">
            ← Volver al Inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Consejos para Formatear Marcas de Tiempo en Discord</h1>
          <p className="text-xl text-gray-600">Técnicas avanzadas para mejorar tus mensajes de Discord</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Más Allá de lo Básico</h2>
          <p className="text-gray-700">
            Las marcas de tiempo de Discord son herramientas poderosas para una comunicación clara, pero con algo de creatividad, puedes 
            usarlas de manera aún más efectiva. Esta guía compartirá consejos y técnicas de formateo avanzadas para hacer tus marcas de tiempo
            más útiles y visualmente atractivas.
          </p>
          
          <div className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
            <p className="text-gray-800">
              <strong>¿Necesitas primero lo básico?</strong> Consulta nuestra <Link href="/es/guides/how-to-use-discord-timestamps" className="text-blue-500 hover:underline">guía completa para usar marcas de tiempo de Discord</Link> si eres nuevo en esta función.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Formateo para Legibilidad</h2>
          
          <h3 className="text-xl font-medium">Incrustación en Texto</h3>
          <p className="text-gray-700 mb-3">
            En lugar de publicar marcas de tiempo sin formato, incorpóralas naturalmente en tus oraciones:
          </p>
          
          <div className="space-y-3">
            <div className="flex">
              <div className="w-1/2 pr-2">
                <div className="bg-red-50 p-3 rounded-md text-red-800 h-full">
                  <p className="font-medium">Menos Efectivo:</p>
                  <p>Evento: Noche de Juegos</p>
                  <p>Hora: &lt;t:1693526400:F&gt;</p>
                  <p>¡Asegúrate de unirte!</p>
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <div className="bg-green-50 p-3 rounded-md text-green-800 h-full">
                  <p className="font-medium">Más Efectivo:</p>
                  <p>Únete a nosotros para la Noche de Juegos &lt;t:1693526400:F&gt; donde jugaremos Minecraft! El servidor se abrirá &lt;t:1693526400:R&gt;.</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-medium mt-6">Combinación de Tipos de Formato</h3>
          <p className="text-gray-700 mb-3">
            Para eventos importantes, usa múltiples tipos de formato juntos para proporcionar información completa:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              🎉 La celebración del aniversario del servidor es el &lt;t:1693526400:D&gt; a las &lt;t:1693526400:t&gt; (&lt;t:1693526400:R&gt;)
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            Esto muestra una fecha larga, hora corta y tiempo relativo, cubriendo todas las bases para tus usuarios.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Uso de Emoji para Mejorar las Marcas de Tiempo</h2>
          <p className="text-gray-700">
            Añade contexto visual con emojis que coincidan con el propósito de tu marca de tiempo:
          </p>
          
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Para Eventos</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>🎮 Sesión de Juego: &lt;t:1693526400:F&gt;</p>
                <p>🎬 Noche de Película: &lt;t:1693612800:F&gt;</p>
                <p>🎤 Reunión en Chat de Voz: &lt;t:1693699200:F&gt;</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Para Fechas Límite</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>⏰ Fecha de Entrega: &lt;t:1693526400:F&gt;</p>
                <p>⚠️ Última Oportunidad para Registrarse: &lt;t:1693612800:R&gt;</p>
                <p>🔔 Recordatorio: Las encuestas cierran &lt;t:1693699200:R&gt;</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Para Actualizaciones de Estado</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>🟢 Servidor en línea desde: &lt;t:1693526400:R&gt;</p>
                <p>🔧 Comienza el mantenimiento: &lt;t:1693612800:R&gt;</p>
                <p>🔄 Última actualización: &lt;t:1693699200:R&gt;</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Creación de Separadores Visuales</h2>
          <p className="text-gray-700">
            Para múltiples marcas de tiempo o listados de horarios, usa el formateo para crear una separación visual clara:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-medium">📅 HORARIO DEL TORNEO:</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>🏆 Ronda 1: &lt;t:1693526400:f&gt;</p>
            <p>🏆 Ronda 2: &lt;t:1693612800:f&gt;</p>
            <p>🏆 Finales: &lt;t:1693699200:f&gt;</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>El registro cierra &lt;t:1693439200:R&gt;</p>
          </div>
          
          <p className="text-gray-700 mt-4">
            También puedes usar los bloques de código y el formateo de citas de Discord para organizar:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>```HORARIOS DE EVENTOS```</p>
            <p>{'>'} Ceremonia de Apertura: &lt;t:1693526400:F&gt;</p>
            <p>{'>'} Actividades Principales: &lt;t:1693612800:F&gt;</p>
            <p>{'>'} Fiesta de Clausura: &lt;t:1693699200:F&gt;</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Conciencia de Zona Horaria</h2>
          <p className="text-gray-700">
            Aunque las marcas de tiempo de Discord se ajustan automáticamente a la zona horaria de cada usuario, ayuda ser explícito sobre este beneficio:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              Nuestra próxima reunión comunitaria está programada para &lt;t:1693526400:F&gt; (esta hora se mostrará en TU zona horaria local).
            </p>
          </div>
          
          <p className="text-gray-700 mt-4">
            Para servidores con miembros internacionales, enfatiza la conveniencia:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              🌎 No importa dónde estés en el mundo, esta marca de tiempo mostrará la hora correcta para TI: &lt;t:1693526400:F&gt;
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Uso con las Opciones de Formateo de Discord</h2>
          <p className="text-gray-700">
            Combina marcas de tiempo con el formateo de texto de Discord para énfasis:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                **¡IMPORTANTE!** La fecha límite de solicitud es &lt;t:1693526400:F&gt;
              </p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                __Comienza la transmisión__: &lt;t:1693526400:t&gt; (&lt;t:1693526400:R&gt;)
              </p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                # Lanzamiento del Servidor: &lt;t:1693526400:F&gt;
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-4">
            Para anuncios particularmente importantes, usa mayúsculas y separadores:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              ⚠️ **ATENCIÓN** ⚠️<br />
              COMIENZA LA COPIA DE SEGURIDAD DEL SERVIDOR: &lt;t:1693526400:F&gt;<br />
              TIEMPO ESTIMADO DE INACTIVIDAD: 30 MINUTOS<br />
              ⚠️ **POR FAVOR GUARDA TU TRABAJO** ⚠️
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Marcas de Tiempo en Embeds y Webhooks</h2>
          <p className="text-gray-700">
            Si usas bots que admiten embeds, puedes incluir marcas de tiempo en mensajes estructurados:
          </p>
          
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-lg">Noche de Juegos Comunitaria</h3>
            <p className="text-gray-700">¡Únete a nosotros para diversión y premios!</p>
            <p className="text-gray-700">⏰ &lt;t:1693526400:F&gt;</p>
            <p className="text-gray-700">🎮 Among Us, Minecraft y más</p>
            <p className="text-gray-700">👥 Abierto a todos los miembros</p>
          </div>
          
          <p className="text-gray-600 text-sm">
            *Esto representa cómo podría verse un embed de bot con una marca de tiempo incluida.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Plantillas de Marcas de Tiempo para Usos Comunes</h2>
          <p className="text-gray-700">
            Copia y adapta estas plantillas para tu servidor:
          </p>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Plantilla de Anuncio de Evento</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`📣 **ANUNCIO DE EVENTO** 📣

🎮 **[Nombre del Evento]**
📅 Fecha: <t:TIMESTAMP:D>
🕒 Hora: <t:TIMESTAMP:t>
⏰ Comienza en: <t:TIMESTAMP:R>

📝 **Descripción:**
[Descripción del evento aquí]

👥 **Cómo Unirse:**
[Instrucciones aquí]

❓ **¿Preguntas?**
Pregunta en #canal-de-ayuda`}
                </pre>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Anuncio de Cuenta Regresiva</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`⏳ **CUENTA REGRESIVA: [Nombre del Evento]** ⏳

¡El evento comienza <t:TIMESTAMP:R>!

Marca en tu calendario <t:TIMESTAMP:F>

⭐ ¡Prepárate para [breve descripción]!`}
                </pre>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Plantilla de Horario</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`📅 **HORARIO: [Nombre del Evento]** 📅

▶️ Inicio: <t:TIMESTAMP1:f>
⏱️ Fase 1: <t:TIMESTAMP2:f>
⏱️ Fase 2: <t:TIMESTAMP3:f>
⏹️ Fin: <t:TIMESTAMP4:f>

Todos los horarios se muestran en TU zona horaria local.`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Crea Tus Propias Marcas de Tiempo</h2>
          <p className="text-gray-700 mb-4">
            Ahora que has visto estos consejos de formateo, vuelve a nuestro generador de marcas de tiempo para crear tus propias marcas de tiempo de Discord perfectamente formateadas.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/es"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Crear Marcas de Tiempo Personalizadas
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>
            Guías relacionadas: <Link href="/es/guides/how-to-use-discord-timestamps" className="text-blue-500 hover:underline">Cómo Usar Marcas de Tiempo en Discord</Link> | <Link href="/es/guides/discord-timestamps-for-events" className="text-blue-500 hover:underline">Usando Marcas de Tiempo para Eventos de Discord</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 