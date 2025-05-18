import React from 'react';
import Link from 'next/link';
import DiscordTimestamp from '../components/DiscordTimestamp';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Main Converter Tool Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 text-center leading-relaxed">Discord Zeitstempel-Konverter</h1>
        <p className="text-2xl mb-10 text-center text-gray-600 leading-relaxed">
          Konvertieren Sie Ihre lokale Zeit in das Discord-Zeitstempelformat
        </p>
        
        <DiscordTimestamp />
      </div>
      
      {/* What Are Discord Timestamps Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-8 leading-relaxed">Was Sind Discord-Zeit Zeitstempel?</h2>
        <p className="text-xl mb-6 leading-relaxed">
          Discord-Zeitstempel sind spezielle Formatierungscodes, die die Zeit in der lokalen Zeitzone des Benutzers anzeigen. Wenn Sie eine Nachricht mit einem Zeitstempel senden,
          konvertiert Discord sie automatisch für jede Person, die sie liest - keine Verwirrung mehr über Zeitzonen!
        </p>
        <p className="text-xl leading-relaxed">
          Sie können Discord-Zeit Formatierung für die Planung von Veranstaltungen, das Festlegen von Fristen, das Erinnern an Jahrestage oder die Koordination von Aktivitäten in verschiedenen Zeitzonen verwenden.
        </p>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-8 leading-relaxed">Häufig Gestellte Fragen zur Discord-Zeit</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Wie funktionieren Discord-Zeitstempel?</h3>
            <p className="text-xl leading-relaxed">Discord-Zeitstempel verwenden das Unix-Zeitformat, das in eine spezielle Syntax eingebettet ist. Bei der Anzeige werden sie automatisch in die lokale Zeit jedes Benutzers umgerechnet.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Welche Zeitstempelformate unterstützt Discord?</h3>
            <p className="text-xl leading-relaxed">Discord unterstützt mehrere Formate: Kurze Zeit (HH:MM), lange Zeit (HH:MM:SS), kurzes Datum (MM/TT/JJJJ), langes Datum (Monat TT, JJJJ), langes Datum mit kurzer Zeit und relative Zeit.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Kann ich Zeitstempel in Discord-Embeds verwenden?</h3>
            <p className="text-xl leading-relaxed">Ja, Discord-Zeitstempel funktionieren in Embeds und normalen Nachrichten. Sie sind besonders nützlich für Veranstaltungsankündigungen und Erinnerungen.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Funktionieren Zeitstempel auf mobilen Geräten?</h3>
            <p className="text-xl leading-relaxed">Ja, Discord-Zeitstempel funktionieren perfekt auf allen Plattformen - Desktop-, Mobil- und Webversionen von Discord.</p>
          </div>
        </div>
      </div>
      
      {/* Special Events Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-6 leading-relaxed">Besondere Ereignisse</h2>
        <p className="text-xl leading-relaxed">
          Sehen Sie sich unsere einsatzbereiten Discord-Zeitstempel für alle{' '}
          <Link href="/events/us-holidays-2025" className="text-blue-600 hover:underline">
            US-Feiertage 2025
          </Link> an!
        </p>
      </div>
    </div>
  );
} 