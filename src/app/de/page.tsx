import React from 'react';
import Link from 'next/link';
import DiscordTimestamp from '../components/DiscordTimestamp';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Discord Zeitstempel-Konverter</h1>
          <p className="mt-2 text-gray-600">
            Konvertieren Sie Ihre lokale Zeit in das Discord-Zeitstempel-Format, das sich automatisch an die Zeitzone jedes Benutzers anpasst
          </p>
        </div>
        
        <DiscordTimestamp />
        
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-xl font-semibold mb-3">Besondere Ereignisse</h2>
          <p className="mb-4">
            Sehen Sie sich unsere einsatzbereiten Discord-Zeitstempel für alle{' '}
            <Link href="/events/us-holidays-2025" className="text-blue-600 hover:underline">
              US-Feiertage 2025
            </Link> an!
          </p>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <h2 className="text-xl font-semibold mb-3">Discord Zeitstempel-Anleitungen</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/de/guides/how-to-use-discord-timestamps" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Wie man Discord Zeitstempel verwendet</h3>
              <p className="text-gray-600 text-sm">Vollständige Anleitung zur Verwendung dynamischer Zeitformate in Discord</p>
            </Link>
            
            <Link href="/de/guides/discord-timestamp-formatting-tips" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Formatierungstipps</h3>
              <p className="text-gray-600 text-sm">Fortgeschrittene Techniken zur Verbesserung Ihrer Discord-Nachrichten</p>
            </Link>
            
            <Link href="/de/guides/discord-timestamps-for-events" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Zeitstempel für Veranstaltungen</h3>
              <p className="text-gray-600 text-sm">Planung und Organisation von Discord-Server-Veranstaltungen</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 