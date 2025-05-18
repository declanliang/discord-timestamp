import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wie man Discord Zeitstempel verwendet | Kompletter Leitfaden',
  description: 'Lernen Sie, wie Sie Discord-Zeitstempel in Ihren Nachrichten verwenden können, um Daten und Uhrzeiten anzuzeigen, die sich automatisch an die Zeitzone jedes Benutzers anpassen.',
  keywords: 'Discord Zeitstempel, Discord Zeitformat, Discord Datumsformat, Discord relative Zeit, Zeitzonen-Konverter',
};

export default function HowToUseDiscordTimestamps() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <Link href="/de" className="text-blue-500 hover:underline inline-block mb-2">
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Wie man Discord Zeitstempel verwendet</h1>
          <p className="text-xl text-gray-600">Ein kompletter Leitfaden zur Verwendung dynamischer Zeitformate in Discord</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Was sind Discord Zeitstempel?</h2>
          <p className="text-gray-700">
            Discord Zeitstempel sind spezielle Textformate, die Daten und Uhrzeiten anzeigen, die sich automatisch
            an die lokale Zeitzone jedes Benutzers anpassen. Das bedeutet, wenn Sie ein Event planen
            oder eine Deadline festlegen, sieht jeder die Zeit in seiner eigenen Zeitzone, was Verwirrung vermeidet.
          </p>
          
          <div className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
            <p className="text-gray-800">
              <strong>Profi-Tipp:</strong> Die Verwendung von Zeitstempeln stellt sicher, dass alle Ihre Servermitglieder die korrekte Zeit sehen,
              unabhängig davon, wo auf der Welt sie sich befinden.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Grundlegendes Zeitstempelformat</h2>
          <p className="text-gray-700">
            Das grundlegende Format für einen Discord Zeitstempel ist:
          </p>
          <div className="bg-gray-100 p-4 rounded-md overflow-auto">
            <code className="text-sm">&lt;t:TIMESTAMP:FORMAT&gt;</code>
          </div>
          <p className="text-gray-700">
            Wobei:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>TIMESTAMP</strong> ein Unix-Zeitstempel ist (Sekunden seit dem 1. Januar 1970)</li>
            <li><strong>FORMAT</strong> ein optionaler Format-Spezifizierer ist (wie t, T, d, D, f, F oder R)</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6">Wie man einen Unix-Zeitstempel erhält</h3>
          <p className="text-gray-700">
            Sie können jedes Datum und jede Zeit mit unserem Tool auf der Startseite in einen Unix-Zeitstempel umwandeln.
            Wählen Sie einfach Ihr Datum und Ihre Zeit aus und kopieren Sie den generierten Zeitstempelcode.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Verfügbare Formattypen</h2>
          <p className="text-gray-700">
            Discord bietet verschiedene Formatierungsoptionen für Zeitstempel:
          </p>
          
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Kurze Zeit (t)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:t&gt;</code>
              <p className="text-gray-600">Wird angezeigt als: 16:20</p>
              <p className="text-gray-600 text-sm">Zeigt nur die Zeit im 24-Stunden-Format an.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Lange Zeit (T)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:T&gt;</code>
              <p className="text-gray-600">Wird angezeigt als: 16:20:00</p>
              <p className="text-gray-600 text-sm">Zeigt die Zeit mit Sekunden an.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Kurzes Datum (d)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:d&gt;</code>
              <p className="text-gray-600">Wird angezeigt als: 01.09.2023</p>
              <p className="text-gray-600 text-sm">Zeigt nur das Datum in einem kompakten Format an.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Langes Datum (D)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:D&gt;</code>
              <p className="text-gray-600">Wird angezeigt als: 1. September 2023</p>
              <p className="text-gray-600 text-sm">Zeigt das vollständige Datum mit Monatsname an.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Kurzes Datum/Zeit (f)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:f&gt;</code>
              <p className="text-gray-600">Wird angezeigt als: 1. September 2023 16:20</p>
              <p className="text-gray-600 text-sm">Zeigt Datum und Zeit zusammen an.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Langes Datum/Zeit (F)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:F&gt;</code>
              <p className="text-gray-600">Wird angezeigt als: Freitag, 1. September 2023 16:20</p>
              <p className="text-gray-600 text-sm">Zeigt das vollständige Datum mit Wochentag und Zeit an.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Relative Zeit (R)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:R&gt;</code>
              <p className="text-gray-600">Wird angezeigt als: in 3 Stunden ODER vor 2 Tagen</p>
              <p className="text-gray-600 text-sm">Zeigt die Zeit relativ zur aktuellen Zeit an (wird dynamisch aktualisiert).</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Praktische Beispiele</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Planung eines Server-Events</h3>
            <p className="text-gray-700">
              Bei der Ankündigung eines Events in Ihrem Discord-Server:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                🎮 Nehmt an unserer Gaming-Session <code>&lt;t:1693526400:F&gt;</code> teil! Meldet euch unbedingt im #registration-Kanal vor <code>&lt;t:1693526400:R&gt;</code> an.
              </p>
            </div>
            <p className="text-gray-700">
              Dies zeigt das vollständige Datum und die Uhrzeit sowie einen Countdown an, der sich automatisch aktualisiert.
            </p>
            
            <h3 className="text-xl font-medium mt-6">Festlegen von Deadlines</h3>
            <p className="text-gray-700">
              Für Einreichungsfristen:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                Bitte reicht eure Wettbewerbsbeiträge bis <code>&lt;t:1693526400:f&gt;</code> (<code>&lt;t:1693526400:R&gt;</code>) ein.
              </p>
            </div>
            
            <h3 className="text-xl font-medium mt-6">Server-Wartungsankündigung</h3>
            <p className="text-gray-700">
              Für Server-Ausfallzeiten:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                ⚠️ Unser Bot wird für Wartungsarbeiten <code>&lt;t:1693526400:R&gt;</code> für etwa 2 Stunden nicht verfügbar sein.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Fortgeschrittene Tipps</h2>
          
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <strong>Formate kombinieren:</strong> Sie können mehrere Zeitstempelformate in derselben Nachricht verwenden, um vollständige Informationen bereitzustellen. Zeigen Sie beispielsweise sowohl das vollständige Datum/Uhrzeit als auch einen Countdown an.
            </li>
            <li>
              <strong>Wiederkehrende Erinnerungen erstellen:</strong> Verwenden Sie einen Bot, der Zeitstempelnachrichten für wiederkehrende Events senden kann, wobei der Unix-Zeitstempel jedes Mal aktualisiert wird.
            </li>
            <li>
              <strong>Wichtige Zeitstempel anpinnen:</strong> Für langfristige Events oder Deadlines können Sie Nachrichten mit Zeitstempeln in relevanten Kanälen anpinnen.
            </li>
            <li>
              <strong>Unsere Feiertags-Zeitstempel verwenden:</strong> Schauen Sie sich unsere <Link href="/events/us-holidays-2025" className="text-blue-500 hover:underline">US-Feiertage für 2025</Link> mit fertigen Discord-Zeitstempeln zum Kopieren an.
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Probieren Sie es selbst aus</h2>
          <p className="text-gray-700 mb-4">
            Bereit, Discord-Zeitstempel in Ihrem Server zu verwenden? Gehen Sie zurück zu unserem <Link href="/de" className="text-blue-500 hover:underline">Zeitstempel-Generator</Link>, um Ihre eigenen benutzerdefinierten Zeitstempel zu erstellen!
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/de"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Jetzt Zeitstempel generieren
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>
            Weitere Anleitungen: <Link href="/de/guides/discord-timestamp-formatting-tips" className="text-blue-500 hover:underline">Discord Zeitstempel-Formatierungstipps</Link> | <Link href="/de/guides/discord-timestamps-for-events" className="text-blue-500 hover:underline">Zeitstempel für Discord-Events verwenden</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 