import React from 'react';
import Link from 'next/link';
import DiscordTimestamp from '../components/DiscordTimestamp';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Main Converter Tool Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 text-center leading-relaxed">Convertisseur d&apos;Horodatage Discord</h1>
        <p className="text-2xl mb-10 text-center text-gray-600 leading-relaxed">
          Convertissez votre heure locale au format d&apos;horodatage Discord
        </p>
        
        <DiscordTimestamp />
      </div>
      
      {/* What Are Discord Timestamps Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-8 leading-relaxed">Que Sont les Horodatages Discord de Temps?</h2>
        <p className="text-xl mb-6 leading-relaxed">
          Les horodatages Discord sont des codes de formatage spéciaux qui affichent l&apos;heure dans le fuseau horaire local de l&apos;utilisateur. Lorsque vous envoyez un message avec un horodatage,
          Discord le convertit automatiquement pour chaque personne qui le lit - fini la confusion sur les fuseaux horaires !
        </p>
        <p className="text-xl leading-relaxed">
          Vous pouvez utiliser les horodatages Discord pour planifier des événements, fixer des échéances, vous souvenir des anniversaires ou coordonner des activités dans différents fuseaux horaires.
        </p>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-8 leading-relaxed">Questions Fréquentes sur le Temps Discord</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Comment fonctionnent les horodatages Discord ?</h3>
            <p className="text-xl leading-relaxed">Les horodatages Discord utilisent le format horaire Unix enveloppé dans une syntaxe spéciale. Lorsqu&apos;ils sont affichés, ils se convertissent automatiquement à l&apos;heure locale de chaque utilisateur.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Quels formats d&apos;horodatage Discord prend-il en charge ?</h3>
            <p className="text-xl leading-relaxed">Discord prend en charge plusieurs formats : heure courte (HH:MM), heure longue (HH:MM:SS), date courte (MM/JJ/AAAA), date longue (Mois JJ, AAAA), date longue avec heure courte et temps relatif.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Puis-je utiliser des horodatages dans les embeds Discord ?</h3>
            <p className="text-xl leading-relaxed">Oui, les horodatages Discord fonctionnent dans les embeds et les messages ordinaires. Ils sont particulièrement utiles pour les annonces d&apos;événements et les rappels.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Les horodatages fonctionnent-ils sur les appareils mobiles ?</h3>
            <p className="text-xl leading-relaxed">Oui, les horodatages Discord fonctionnent parfaitement sur toutes les plateformes - versions bureau, mobile et web de Discord.</p>
          </div>
        </div>
      </div>
      
      {/* Special Events Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-6 leading-relaxed">Événements Spéciaux</h2>
        <p className="text-xl leading-relaxed">
          Consultez nos horodatages Discord prêts à l&apos;emploi pour tous les{' '}
          <Link href="/events/us-holidays-2025" className="text-blue-600 hover:underline">
            Jours Fériés Américains 2025
          </Link>!
        </p>
      </div>
    </div>
  );
} 