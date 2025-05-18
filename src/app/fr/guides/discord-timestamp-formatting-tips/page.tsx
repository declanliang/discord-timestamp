import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conseils de Formatage des Timestamps Discord | Techniques Avancées',
  description: 'Apprenez des techniques de formatage avancées pour les timestamps Discord afin d\'améliorer la communication de votre serveur avec des affichages de date et d\'heure professionnels.',
  keywords: 'Formatage timestamps Discord, astuces format heure Discord, astuces format date Discord, timestamps Discord avancés',
};

export default function DiscordTimestampFormattingTips() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <Link href="/fr" className="text-blue-500 hover:underline inline-block mb-2">
            ← Retour à l&apos;Accueil
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Conseils de Formatage des Timestamps Discord</h1>
          <p className="text-xl text-gray-600">Techniques avancées pour améliorer vos messages Discord</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Au-delà des Bases</h2>
          <p className="text-gray-700">
            Les timestamps Discord sont des outils puissants pour une communication claire, mais avec un peu de créativité, vous pouvez les utiliser
            encore plus efficacement. Ce guide partagera des astuces et techniques de formatage avancées pour rendre vos timestamps
            plus utiles et visuellement attrayants.
          </p>
          
          <div className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
            <p className="text-gray-800">
              <strong>Besoin des bases d&apos;abord ?</strong> Consultez notre <Link href="/fr/guides/how-to-use-discord-timestamps" className="text-blue-500 hover:underline">guide complet d&apos;utilisation des timestamps Discord</Link> si vous débutez avec cette fonctionnalité.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Formatage pour la Lisibilité</h2>
          
          <h3 className="text-xl font-medium">Intégration dans le Texte</h3>
          <p className="text-gray-700 mb-3">
            Plutôt que de simplement poster des timestamps bruts, incorporez-les naturellement dans vos phrases :
          </p>
          
          <div className="space-y-3">
            <div className="flex">
              <div className="w-1/2 pr-2">
                <div className="bg-red-50 p-3 rounded-md text-red-800 h-full">
                  <p className="font-medium">Moins Efficace :</p>
                  <p>Événement : Soirée Jeux</p>
                  <p>Heure : &lt;t:1693526400:F&gt;</p>
                  <p>Assurez-vous de nous rejoindre !</p>
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <div className="bg-green-50 p-3 rounded-md text-green-800 h-full">
                  <p className="font-medium">Plus Efficace :</p>
                  <p>Rejoignez-nous pour la Soirée Jeux &lt;t:1693526400:F&gt; où nous jouerons à Minecraft ! Le serveur ouvrira &lt;t:1693526400:R&gt;.</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-medium mt-6">Combinaison de Types de Format</h3>
          <p className="text-gray-700 mb-3">
            Pour les événements importants, utilisez plusieurs types de format ensemble pour fournir des informations complètes :
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              🎉 La célébration de l&apos;anniversaire du serveur est le &lt;t:1693526400:D&gt; à &lt;t:1693526400:t&gt; (&lt;t:1693526400:R&gt;)
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            Cela montre une date longue, une heure courte et un temps relatif, couvrant tous les aspects pour vos utilisateurs.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Utilisation d&apos;Emoji pour Améliorer les Timestamps</h2>
          <p className="text-gray-700">
            Ajoutez un contexte visuel avec des emoji qui correspondent à l&apos;objectif de votre timestamp :
          </p>
          
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Pour les Événements</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>🎮 Session de Jeu : &lt;t:1693526400:F&gt;</p>
                <p>🎬 Soirée Cinéma : &lt;t:1693612800:F&gt;</p>
                <p>🎤 Rencontre Vocale : &lt;t:1693699200:F&gt;</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Pour les Échéances</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>⏰ Date Limite de Soumission : &lt;t:1693526400:F&gt;</p>
                <p>⚠️ Dernière Chance pour s&apos;Inscrire : &lt;t:1693612800:R&gt;</p>
                <p>🔔 Rappel : Les sondages ferment &lt;t:1693699200:R&gt;</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Pour les Mises à Jour de Statut</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>🟢 Serveur en ligne depuis : &lt;t:1693526400:R&gt;</p>
                <p>🔧 Maintenance commence : &lt;t:1693612800:R&gt;</p>
                <p>🔄 Dernière mise à jour : &lt;t:1693699200:R&gt;</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Création de Séparateurs Visuels</h2>
          <p className="text-gray-700">
            Pour les timestamps multiples ou les listes d&apos;horaires, utilisez le formatage pour créer une séparation visuelle claire :
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-medium">📅 PROGRAMME DU TOURNOI :</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>🏆 1er Tour : &lt;t:1693526400:f&gt;</p>
            <p>🏆 2ème Tour : &lt;t:1693612800:f&gt;</p>
            <p>🏆 Finales : &lt;t:1693699200:f&gt;</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>Les inscriptions se terminent &lt;t:1693439200:R&gt;</p>
          </div>
          
          <p className="text-gray-700 mt-4">
            Vous pouvez également utiliser les blocs de code et le formatage de citation de Discord pour l&apos;organisation :
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>```HORAIRES DES ÉVÉNEMENTS```</p>
            <p>{'>'} Cérémonie d&apos;Ouverture : &lt;t:1693526400:F&gt;</p>
            <p>{'>'} Activités Principales : &lt;t:1693612800:F&gt;</p>
            <p>{'>'} Fête de Clôture : &lt;t:1693699200:F&gt;</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Sensibilisation aux Fuseaux Horaires</h2>
          <p className="text-gray-700">
            Bien que les timestamps Discord s&apos;ajustent automatiquement au fuseau horaire de chaque utilisateur, il est utile d&apos;être explicite sur cet avantage :
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              Notre prochaine réunion communautaire est prévue pour &lt;t:1693526400:F&gt; (cette heure s&apos;affichera dans VOTRE fuseau horaire local).
            </p>
          </div>
          
          <p className="text-gray-700 mt-4">
            Pour les serveurs avec des membres internationaux, soulignez la commodité :
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              🌎 Peu importe où vous êtes dans le monde, ce timestamp affichera l&apos;heure correcte pour VOUS : &lt;t:1693526400:F&gt;
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Utilisation avec les Options de Formatage de Discord</h2>
          <p className="text-gray-700">
            Combinez les timestamps avec le formatage de texte de Discord pour l&apos;emphase :
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                **IMPORTANT !** La date limite de candidature est &lt;t:1693526400:F&gt;
              </p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                __Début du stream__ : &lt;t:1693526400:t&gt; (&lt;t:1693526400:R&gt;)
              </p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                # Lancement du Serveur : &lt;t:1693526400:F&gt;
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-4">
            Pour les annonces particulièrement importantes, utilisez des majuscules et des séparateurs :
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              ⚠️ **ATTENTION** ⚠️<br />
              SAUVEGARDE DU SERVEUR COMMENCE : &lt;t:1693526400:F&gt;<br />
              TEMPS D&apos;ARRÊT ESTIMÉ : 30 MINUTES<br />
              ⚠️ **VEUILLEZ SAUVEGARDER VOTRE TRAVAIL** ⚠️
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Timestamps dans les Embeds et Webhooks</h2>
          <p className="text-gray-700">
            Si vous utilisez des bots qui prennent en charge les embeds, vous pouvez inclure des timestamps dans des messages structurés :
          </p>
          
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-lg">Soirée Jeux Communautaire</h3>
            <p className="text-gray-700">Rejoignez-nous pour du fun et des prix !</p>
            <p className="text-gray-700">⏰ &lt;t:1693526400:F&gt;</p>
            <p className="text-gray-700">🎮 Among Us, Minecraft, et plus</p>
            <p className="text-gray-700">👥 Ouvert à tous les membres</p>
          </div>
          
          <p className="text-gray-600 text-sm">
            *Ceci représente à quoi pourrait ressembler un embed de bot avec un timestamp inclus.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Modèles de Timestamps pour les Usages Courants</h2>
          <p className="text-gray-700">
            Copiez et adaptez ces modèles pour votre serveur :
          </p>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Modèle d&apos;Annonce d&apos;Événement</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`📣 **ANNONCE D'ÉVÉNEMENT** 📣

🎮 **[Nom de l'Événement]**
📅 Date : <t:TIMESTAMP:D>
🕒 Heure : <t:TIMESTAMP:t>
⏰ Commence dans : <t:TIMESTAMP:R>

📝 **Description :**
[Description de l'événement ici]

👥 **Comment Participer :**
[Instructions ici]

❓ **Questions ?**
Demandez dans #canal-aide`}
                </pre>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Annonce de Compte à Rebours</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`⏳ **COMPTE À REBOURS : [Nom de l'Événement]** ⏳

L'événement commence <t:TIMESTAMP:R> !

Marquez vos calendriers pour <t:TIMESTAMP:F>

⭐ Préparez-vous pour [brève description] !`}
                </pre>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Modèle de Programme</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`📅 **PROGRAMME : [Nom de l'Événement]** 📅

▶️ Début : <t:TIMESTAMP1:f>
⏱️ Phase 1 : <t:TIMESTAMP2:f>
⏱️ Phase 2 : <t:TIMESTAMP3:f>
⏹️ Fin : <t:TIMESTAMP4:f>

Tous les horaires sont affichés dans VOTRE fuseau horaire local.`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Créez Vos Propres Timestamps</h2>
          <p className="text-gray-700 mb-4">
            Maintenant que vous avez vu ces conseils de formatage, retournez à notre générateur de timestamps pour créer vos propres timestamps Discord parfaitement formatés.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/fr"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Créer des Timestamps Personnalisés
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>
            Guides associés : <Link href="/fr/guides/how-to-use-discord-timestamps" className="text-blue-500 hover:underline">Comment Utiliser les Timestamps Discord</Link> | <Link href="/fr/guides/discord-timestamps-for-events" className="text-blue-500 hover:underline">Utiliser les Timestamps pour les Événements Discord</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 