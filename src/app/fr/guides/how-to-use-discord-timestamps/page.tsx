import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comment Utiliser les Timestamps Discord | Guide Complet',
  description: 'Apprenez à utiliser les timestamps Discord dans vos messages pour afficher des dates et heures qui s\'ajustent automatiquement au fuseau horaire de chaque utilisateur.',
  keywords: 'Timestamps Discord, format heure Discord, format date Discord, temps relatif Discord, convertisseur fuseau horaire',
};

export default function HowToUseDiscordTimestamps() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <Link href="/fr" className="text-blue-500 hover:underline inline-block mb-2">
            ← Retour à l&apos;Accueil
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Comment Utiliser les Timestamps Discord</h1>
          <p className="text-xl text-gray-600">Un guide complet pour utiliser les formats de temps dynamiques dans Discord</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Que sont les Timestamps Discord ?</h2>
          <p className="text-gray-700">
            Les timestamps Discord sont des formats de texte spéciaux qui affichent des dates et heures qui s&apos;ajustent
            automatiquement au fuseau horaire local de chaque utilisateur. Cela signifie que si vous planifiez un événement
            ou fixez une date limite, tout le monde verra l&apos;heure dans son propre fuseau horaire, évitant toute confusion.
          </p>
          
          <div className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
            <p className="text-gray-800">
              <strong>Astuce Pro :</strong> L&apos;utilisation de timestamps garantit que tous les membres de votre serveur voient l&apos;heure correcte,
              peu importe où ils se trouvent dans le monde.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Format de Base des Timestamps</h2>
          <p className="text-gray-700">
            Le format de base pour un timestamp Discord est :
          </p>
          <div className="bg-gray-100 p-4 rounded-md overflow-auto">
            <code className="text-sm">&lt;t:TIMESTAMP:FORMAT&gt;</code>
          </div>
          <p className="text-gray-700">
            Où :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>TIMESTAMP</strong> est un timestamp Unix (secondes depuis le 1er janvier 1970)</li>
            <li><strong>FORMAT</strong> est un spécificateur de format optionnel (comme t, T, d, D, f, F, ou R)</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6">Comment Obtenir un Timestamp Unix</h3>
          <p className="text-gray-700">
            Vous pouvez convertir n&apos;importe quelle date et heure en timestamp Unix en utilisant notre outil sur la page d&apos;accueil.
            Il suffit de sélectionner votre date et heure, et de copier le code timestamp généré.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Types de Formats Disponibles</h2>
          <p className="text-gray-700">
            Discord propose plusieurs options de formatage différentes pour les timestamps :
          </p>
          
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Heure Courte (t)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:t&gt;</code>
              <p className="text-gray-600">Affiche : 16:20</p>
              <p className="text-gray-600 text-sm">Montre uniquement l&apos;heure au format 24h.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Heure Longue (T)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:T&gt;</code>
              <p className="text-gray-600">Affiche : 16:20:00</p>
              <p className="text-gray-600 text-sm">Montre l&apos;heure avec les secondes.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Date Courte (d)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:d&gt;</code>
              <p className="text-gray-600">Affiche : 01/09/2023</p>
              <p className="text-gray-600 text-sm">Montre uniquement la date dans un format compact.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Date Longue (D)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:D&gt;</code>
              <p className="text-gray-600">Affiche : 1 septembre 2023</p>
              <p className="text-gray-600 text-sm">Montre la date complète avec le nom du mois.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Date/Heure Courte (f)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:f&gt;</code>
              <p className="text-gray-600">Affiche : 1 septembre 2023 16:20</p>
              <p className="text-gray-600 text-sm">Montre la date et l&apos;heure ensemble.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Date/Heure Longue (F)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:F&gt;</code>
              <p className="text-gray-600">Affiche : vendredi 1 septembre 2023 16:20</p>
              <p className="text-gray-600 text-sm">Montre la date complète avec le jour de la semaine et l&apos;heure.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Temps Relatif (R)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:R&gt;</code>
              <p className="text-gray-600">Affiche : dans 3 heures OU il y a 2 jours</p>
              <p className="text-gray-600 text-sm">Montre le temps relatif à l&apos;heure actuelle (se met à jour dynamiquement).</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Exemples Pratiques</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Planification d&apos;un Événement sur le Serveur</h3>
            <p className="text-gray-700">
              Lors de l&apos;annonce d&apos;un événement sur votre serveur Discord :
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                🎮 Rejoignez notre session de jeu <code>&lt;t:1693526400:F&gt;</code> ! Assurez-vous de vous inscrire dans le canal #inscription avant <code>&lt;t:1693526400:R&gt;</code>.
              </p>
            </div>
            <p className="text-gray-700">
              Cela affichera la date et l&apos;heure complètes, ainsi qu&apos;un compte à rebours qui se met à jour automatiquement.
            </p>
            
            <h3 className="text-xl font-medium mt-6">Définition de Dates Limites</h3>
            <p className="text-gray-700">
              Pour les dates limites de soumission :
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                Veuillez soumettre vos participations au concours avant <code>&lt;t:1693526400:f&gt;</code> (<code>&lt;t:1693526400:R&gt;</code>).
              </p>
            </div>
            
            <h3 className="text-xl font-medium mt-6">Annonce de Maintenance du Serveur</h3>
            <p className="text-gray-700">
              Pour les temps d&apos;arrêt du serveur :
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                ⚠️ Notre bot sera indisponible pour maintenance <code>&lt;t:1693526400:R&gt;</code> pendant environ 2 heures.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Conseils Avancés</h2>
          
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <strong>Combinez les formats :</strong> Vous pouvez utiliser plusieurs formats de timestamp dans le même message pour fournir des informations complètes. Par exemple, affichez à la fois la date/heure complète et un compte à rebours.
            </li>
            <li>
              <strong>Créez des rappels récurrents :</strong> Utilisez un bot capable d&apos;envoyer des messages avec timestamps pour des événements récurrents, en mettant à jour le timestamp Unix à chaque fois.
            </li>
            <li>
              <strong>Épinglez les messages importants avec timestamps :</strong> Pour les événements ou dates limites à long terme, épinglez les messages avec timestamps dans les canaux pertinents.
            </li>
            <li>
              <strong>Utilisez nos Timestamps pour Jours Fériés :</strong> Consultez nos <Link href="/events/us-holidays-2025" className="text-blue-500 hover:underline">Jours Fériés US pour 2025</Link> avec des timestamps Discord prêts à copier.
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Essayez-le Vous-même</h2>
          <p className="text-gray-700 mb-4">
            Prêt à utiliser les timestamps Discord dans votre serveur ? Retournez à notre <Link href="/fr" className="text-blue-500 hover:underline">générateur de timestamps</Link> pour créer vos propres timestamps personnalisés !
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/fr"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Générer des Timestamps Maintenant
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>
            Consultez nos autres guides : <Link href="/fr/guides/discord-timestamp-formatting-tips" className="text-blue-500 hover:underline">Conseils de Formatage des Timestamps Discord</Link> | <Link href="/fr/guides/discord-timestamps-for-events" className="text-blue-500 hover:underline">Utiliser les Timestamps pour les Événements Discord</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 