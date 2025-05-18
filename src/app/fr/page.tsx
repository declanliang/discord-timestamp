import React from 'react';
import Link from 'next/link';
import DiscordTimestamp from '../components/DiscordTimestamp';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Convertisseur d&apos;Horodatage Discord</h1>
          <p className="mt-2 text-gray-600">
            Convertissez votre heure locale au format d&apos;horodatage Discord qui s&apos;ajuste automatiquement au fuseau horaire de chaque utilisateur
          </p>
        </div>
        
        <DiscordTimestamp />
        
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-xl font-semibold mb-3">Événements Spéciaux</h2>
          <p className="mb-4">
            Consultez nos horodatages Discord prêts à l&apos;emploi pour tous les{' '}
            <Link href="/events/us-holidays-2025" className="text-blue-600 hover:underline">
              Jours Fériés Américains 2025
            </Link>!
          </p>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <h2 className="text-xl font-semibold mb-3">Guides d&apos;Horodatage Discord</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/fr/guides/how-to-use-discord-timestamps" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Comment Utiliser les Horodatages Discord</h3>
              <p className="text-gray-600 text-sm">Guide complet pour utiliser les formats de temps dynamiques dans Discord</p>
            </Link>
            
            <Link href="/fr/guides/discord-timestamp-formatting-tips" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Conseils de Formatage</h3>
              <p className="text-gray-600 text-sm">Techniques avancées pour améliorer vos messages Discord</p>
            </Link>
            
            <Link href="/fr/guides/discord-timestamps-for-events" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Horodatages pour les Événements</h3>
              <p className="text-gray-600 text-sm">Planification et organisation d&apos;événements sur votre serveur Discord</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 