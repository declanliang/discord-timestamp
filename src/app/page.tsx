import DiscordTimestamp from './components/DiscordTimestamp';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="bg-blue-50 border-b border-blue-100 mb-6">
        <div className="max-w-4xl mx-auto p-4 text-center">
          <h2 className="text-lg font-medium text-blue-800">Special Events</h2>
          <p className="text-blue-600">
            <Link href="/events/us-holidays-2025" className="underline hover:text-blue-700">
              Check out ready-to-use Discord timestamps for all 2025 US Holidays →
            </Link>
          </p>
        </div>
      </div>
      <DiscordTimestamp />
    </>
  );
}