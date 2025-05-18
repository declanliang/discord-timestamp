import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog des Horodatages Discord | Guides et Conseils',
  description: 'Apprenez à utiliser efficacement les horodatages Discord avec nos guides complets et nos conseils pour une meilleure communication sur votre serveur.',
  keywords: 'Guide horodatage Discord, Blog format horaire Discord, Planification événements Discord, Tutoriels Discord',
};

const guides = [
  {
    title: 'Comment Utiliser les Horodatages Discord',
    description: 'Un guide complet pour les débutants sur l\'utilisation de la fonction d\'horodatage dynamique de Discord.',
    slug: '/fr/guides/how-to-use-discord-timestamps',
    date: '12 mai 2024',
  },
  {
    title: 'Conseils de Formatage des Horodatages Discord',
    description: 'Techniques avancées de formatage pour rendre vos horodatages Discord plus efficaces.',
    slug: '/fr/guides/discord-timestamp-formatting-tips',
    date: '14 mai 2024',
  },
  {
    title: 'Horodatages Discord pour les Événements',
    description: 'Apprenez à utiliser les horodatages pour planifier et organiser des événements sur votre serveur Discord.',
    slug: '/fr/guides/discord-timestamps-for-events',
    date: '16 mai 2024',
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Blog des Horodatages Discord</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explorez nos guides et tutoriels pour maîtriser les horodatages Discord et améliorer la communication sur votre serveur.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link 
            key={guide.slug} 
            href={guide.slug}
            className="block group"
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-blue-300">
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-500">{guide.date}</p>
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{guide.title}</h2>
                <p className="text-gray-600">{guide.description}</p>
                <div className="pt-2">
                  <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                    Lire plus
                    <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mt-8">
        <h2 className="text-xl font-semibold mb-3">Vous Cherchez Notre Générateur d'Horodatage?</h2>
        <p className="mb-4">
          Retournez à notre page d'accueil pour utiliser notre outil générateur d'horodatages Discord et créer des horodatages pour votre serveur.
        </p>
        <Link 
          href="/fr"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Aller au Générateur d'Horodatage
        </Link>
      </div>
    </div>
  );
} 