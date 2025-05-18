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
    description: 'Un guide complet pour les débutants sur l&apos;utilisation de la fonction d&apos;horodatage dynamique de Discord.',
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
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-5xl font-bold mb-6 text-center leading-relaxed text-gray-800">Blog des Horodatages Discord</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
          Explorez nos guides et tutoriels pour maîtriser les horodatages Discord et améliorer la communication sur votre serveur.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-8 leading-relaxed">Guides Récents</h2>
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
                      Lire plus
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
        <h2 className="text-3xl font-semibold mb-6 leading-relaxed">Vous Cherchez Notre Générateur d&apos;Horodatage?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Retournez à notre page d&apos;accueil pour utiliser notre outil générateur d&apos;horodatages Discord et créer des horodatages pour votre serveur.
        </p>
        <Link 
          href="/fr"
          className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Aller au Générateur d&apos;Horodatage
        </Link>
      </div>
    </div>
  );
} 