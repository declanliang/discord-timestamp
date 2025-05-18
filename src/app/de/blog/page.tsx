import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discord Zeitstempel Blog | Anleitungen & Tipps',
  description: 'Lernen Sie, wie Sie Discord-Zeitstempel effektiv nutzen können, mit unseren umfassenden Anleitungen und Tipps für eine bessere Kommunikation auf Ihrem Server.',
  keywords: 'Discord Zeitstempel Anleitung, Discord Zeitformat Blog, Discord Eventplanung, Discord Tutorials',
};

const guides = [
  {
    title: 'Wie man Discord Zeitstempel verwendet',
    description: 'Eine vollständige Anleitung für Anfänger zur Nutzung der dynamischen Zeitstempel-Funktion von Discord.',
    slug: '/de/guides/how-to-use-discord-timestamps',
    date: '12. Mai 2024',
  },
  {
    title: 'Tipps zur Formatierung von Discord Zeitstempeln',
    description: 'Fortgeschrittene Formatierungstechniken, um Ihre Discord-Zeitstempel effektiver zu gestalten.',
    slug: '/de/guides/discord-timestamp-formatting-tips',
    date: '14. Mai 2024',
  },
  {
    title: 'Discord Zeitstempel für Veranstaltungen',
    description: 'Erfahren Sie, wie Sie Zeitstempel für die Planung und Organisation von Veranstaltungen auf Ihrem Discord-Server verwenden können.',
    slug: '/de/guides/discord-timestamps-for-events',
    date: '16. Mai 2024',
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-5xl font-bold mb-6 text-center leading-relaxed text-gray-800">Discord Zeitstempel Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
          Entdecken Sie unsere Anleitungen und Tutorials, um Discord-Zeitstempel zu beherrschen und die Kommunikation auf Ihrem Server zu verbessern.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-8 leading-relaxed">Aktuelle Anleitungen</h2>
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
                      Weiterlesen
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
        <h2 className="text-3xl font-semibold mb-6 leading-relaxed">Suchen Sie unseren Zeitstempel-Generator?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Kehren Sie zu unserer Startseite zurück, um unser Discord-Zeitstempel-Generator-Tool zu verwenden und Zeitstempel für Ihren Server zu erstellen.
        </p>
        <Link 
          href="/de"
          className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Zum Zeitstempel-Generator
        </Link>
      </div>
    </div>
  );
} 