import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discord Zeitstempel-Formatierungstipps | Fortgeschrittene Techniken',
  description: 'Lernen Sie fortgeschrittene Formatierungstechniken für Discord-Zeitstempel, um Ihre Serverkommunikation mit professionell aussehenden Datums- und Zeitanzeigen zu verbessern.',
  keywords: 'Discord Zeitstempel-Formatierung, Discord Zeitformat-Tipps, Discord Datumsformat-Tricks, fortgeschrittene Discord-Zeitstempel',
};

export default function DiscordTimestampFormattingTips() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <Link href="/de" className="text-blue-500 hover:underline inline-block mb-2">
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Discord Zeitstempel-Formatierungstipps</h1>
          <p className="text-xl text-gray-600">Fortgeschrittene Techniken zur Verbesserung Ihrer Discord-Nachrichten</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Über die Grundlagen hinaus</h2>
          <p className="text-gray-700">
            Discord-Zeitstempel sind leistungsstarke Werkzeuge für klare Kommunikation, aber mit etwas Kreativität können Sie sie
            noch effektiver einsetzen. Diese Anleitung teilt fortgeschrittene Formatierungstipps und -techniken, um Ihre Zeitstempel
            nützlicher und optisch ansprechender zu gestalten.
          </p>
          
          <div className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
            <p className="text-gray-800">
              <strong>Benötigen Sie zuerst die Grundlagen?</strong> Schauen Sie sich unsere <Link href="/de/guides/how-to-use-discord-timestamps" className="text-blue-500 hover:underline">vollständige Anleitung zur Verwendung von Discord-Zeitstempeln</Link> an, wenn Sie neu bei dieser Funktion sind.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Formatierung für bessere Lesbarkeit</h2>
          
          <h3 className="text-xl font-medium">Einbettung in Text</h3>
          <p className="text-gray-700 mb-3">
            Anstatt nur rohe Zeitstempel zu posten, integrieren Sie sie natürlich in Ihre Sätze:
          </p>
          
          <div className="space-y-3">
            <div className="flex">
              <div className="w-1/2 pr-2">
                <div className="bg-red-50 p-3 rounded-md text-red-800 h-full">
                  <p className="font-medium">Weniger effektiv:</p>
                  <p>Event: Spieleabend</p>
                  <p>Zeit: &lt;t:1693526400:F&gt;</p>
                  <p>Stellt sicher, dass ihr teilnehmt!</p>
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <div className="bg-green-50 p-3 rounded-md text-green-800 h-full">
                  <p className="font-medium">Effektiver:</p>
                  <p>Nehmt an unserem Spieleabend am &lt;t:1693526400:F&gt; teil, wo wir Minecraft spielen werden! Der Server wird &lt;t:1693526400:R&gt; geöffnet.</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-medium mt-6">Kombination von Formattypen</h3>
          <p className="text-gray-700 mb-3">
            Für wichtige Events sollten Sie mehrere Formattypen zusammen verwenden, um vollständige Informationen zu bieten:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              🎉 Die Server-Jubiläumsfeier findet am &lt;t:1693526400:D&gt; um &lt;t:1693526400:t&gt; Uhr statt (&lt;t:1693526400:R&gt;)
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            Dies zeigt ein langes Datum, eine kurze Zeit und eine relative Zeit an und deckt damit alle Grundlagen für Ihre Benutzer ab.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Verwendung von Emojis zur Verbesserung von Zeitstempeln</h2>
          <p className="text-gray-700">
            Fügen Sie visuellen Kontext mit Emojis hinzu, die zum Zweck Ihres Zeitstempels passen:
          </p>
          
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Für Events</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>🎮 Gaming-Session: &lt;t:1693526400:F&gt;</p>
                <p>🎬 Filmabend: &lt;t:1693612800:F&gt;</p>
                <p>🎤 Voice-Chat-Treffen: &lt;t:1693699200:F&gt;</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Für Fristen</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>⏰ Abgabefrist: &lt;t:1693526400:F&gt;</p>
                <p>⚠️ Letzte Chance zur Anmeldung: &lt;t:1693612800:R&gt;</p>
                <p>🔔 Erinnerung: Umfragen schließen &lt;t:1693699200:R&gt;</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Für Statusaktualisierungen</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>🟢 Server online seit: &lt;t:1693526400:R&gt;</p>
                <p>🔧 Wartung beginnt: &lt;t:1693612800:R&gt;</p>
                <p>🔄 Zuletzt aktualisiert: &lt;t:1693699200:R&gt;</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Erstellung visueller Trennlinien</h2>
          <p className="text-gray-700">
            Für mehrere Zeitstempel oder Zeitpläne können Sie Formatierungen verwenden, um eine klare visuelle Trennung zu schaffen:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-medium">📅 TURNIERPLAN:</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>🏆 Runde 1: &lt;t:1693526400:f&gt;</p>
            <p>🏆 Runde 2: &lt;t:1693612800:f&gt;</p>
            <p>🏆 Finale: &lt;t:1693699200:f&gt;</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>Anmeldung endet &lt;t:1693439200:R&gt;</p>
          </div>
          
          <p className="text-gray-700 mt-4">
            Sie können auch Discord&apos;s Codeblöcke und Zitat-Formatierung für die Organisation verwenden:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>```VERANSTALTUNGSZEITEN```</p>
            <p>{'>'} Eröffnungszeremonie: &lt;t:1693526400:F&gt;</p>
            <p>{'>'} Hauptaktivitäten: &lt;t:1693612800:F&gt;</p>
            <p>{'>'} Abschlussfeier: &lt;t:1693699200:F&gt;</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Zeitzonen-Bewusstsein</h2>
          <p className="text-gray-700">
            Obwohl Discord-Zeitstempel automatisch an die Zeitzone jedes Benutzers angepasst werden, hilft es, diesen Vorteil explizit zu erwähnen:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              Unser nächstes Community-Meeting ist für &lt;t:1693526400:F&gt; geplant (diese Zeit wird in IHRER lokalen Zeitzone angezeigt).
            </p>
          </div>
          
          <p className="text-gray-700 mt-4">
            Für Server mit internationalen Mitgliedern sollten Sie die Bequemlichkeit betonen:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              🌎 Egal wo auf der Welt Sie sich befinden, dieser Zeitstempel zeigt die korrekte Zeit für SIE an: &lt;t:1693526400:F&gt;
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Verwendung mit Discord&apos;s Formatierungsoptionen</h2>
          <p className="text-gray-700">
            Kombinieren Sie Zeitstempel mit Discord&apos;s Textformatierung für Betonung:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                **WICHTIG!** Die Bewerbungsfrist ist &lt;t:1693526400:F&gt;
              </p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                __Stream beginnt__: &lt;t:1693526400:t&gt; Uhr (&lt;t:1693526400:R&gt;)
              </p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                # Server-Launch: &lt;t:1693526400:F&gt;
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-4">
            Für besonders wichtige Ankündigungen verwenden Sie Großbuchstaben und Trennzeichen:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              ⚠️ **ACHTUNG** ⚠️<br />
              SERVER-BACKUP BEGINNT: &lt;t:1693526400:F&gt;<br />
              GESCHÄTZTE AUSFALLZEIT: 30 MINUTEN<br />
              ⚠️ **BITTE SPEICHERN SIE IHRE ARBEIT** ⚠️
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Zeitstempel in Embeds und Webhooks</h2>
          <p className="text-gray-700">
            Wenn Sie Bots verwenden, die Embeds unterstützen, können Sie Zeitstempel in strukturierte Nachrichten einbinden:
          </p>
          
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-lg">Community-Spieleabend</h3>
            <p className="text-gray-700">Nehmt teil für Spaß und Preise!</p>
            <p className="text-gray-700">⏰ &lt;t:1693526400:F&gt;</p>
            <p className="text-gray-700">🎮 Among Us, Minecraft und mehr</p>
            <p className="text-gray-700">👥 Offen für alle Mitglieder</p>
          </div>
          
          <p className="text-gray-600 text-sm">
            *Dies stellt dar, wie ein Bot-Embed mit einem integrierten Zeitstempel aussehen könnte.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Zeitstempel-Vorlagen für häufige Anwendungen</h2>
          <p className="text-gray-700">
            Kopieren und passen Sie diese Vorlagen für Ihren Server an:
          </p>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Event-Ankündigungsvorlage</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`📣 **EVENT-ANKÜNDIGUNG** 📣

🎮 **[Event-Name]**
📅 Datum: <t:TIMESTAMP:D>
🕒 Uhrzeit: <t:TIMESTAMP:t>
⏰ Beginnt in: <t:TIMESTAMP:R>

📝 **Beschreibung:**
[Event-Beschreibung hier]

👥 **Wie man teilnimmt:**
[Anweisungen hier]

❓ **Fragen?**
Frag im #hilfe-kanal`}
                </pre>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Countdown-Ankündigung</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`⏳ **COUNTDOWN: [Event-Name]** ⏳

Das Event beginnt <t:TIMESTAMP:R>!

Markiere dir den <t:TIMESTAMP:F> im Kalender

⭐ Mach dich bereit für [kurze Beschreibung]!`}
                </pre>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Zeitplan-Vorlage</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`📅 **ZEITPLAN: [Event-Name]** 📅

▶️ Start: <t:TIMESTAMP1:f>
⏱️ Phase 1: <t:TIMESTAMP2:f>
⏱️ Phase 2: <t:TIMESTAMP3:f>
⏹️ Ende: <t:TIMESTAMP4:f>

Alle Zeiten werden in DEINER lokalen Zeitzone angezeigt.`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Erstellen Sie Ihre eigenen Zeitstempel</h2>
          <p className="text-gray-700 mb-4">
            Nachdem Sie diese Formatierungstipps gesehen haben, kehren Sie zu unserem Zeitstempel-Generator zurück, um Ihre eigenen perfekt formatierten Discord-Zeitstempel zu erstellen.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/de"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Benutzerdefinierte Zeitstempel erstellen
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>
            Verwandte Anleitungen: <Link href="/de/guides/how-to-use-discord-timestamps" className="text-blue-500 hover:underline">Wie man Discord-Zeitstempel verwendet</Link> | <Link href="/de/guides/discord-timestamps-for-events" className="text-blue-500 hover:underline">Zeitstempel für Discord-Events verwenden</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 