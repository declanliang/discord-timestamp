import React from 'react';
import Link from 'next/link';
import DiscordTimestamp from './components/DiscordTimestamp';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Discord Timestamp Converter</h1>
          <p className="mt-2 text-gray-600">
            Convert your local time into Discord timestamp format that automatically adjusts to each user&apos;s timezone
          </p>
        </div>
        
        <DiscordTimestamp />
        
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-xl font-semibold mb-3">Special Events</h2>
          <p className="mb-4">
            Check out our ready-to-use Discord timestamps for all{' '}
            <Link href="/events/us-holidays-2025" className="text-blue-600 hover:underline">
              2025 US Holidays
            </Link>!
          </p>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <h2 className="text-xl font-semibold mb-3">Discord Timestamp Guides</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/guides/how-to-use-discord-timestamps" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">How to Use Discord Timestamps</h3>
              <p className="text-gray-600 text-sm">Complete guide to using dynamic time formats in Discord</p>
            </Link>
            
            <Link href="/guides/discord-timestamp-formatting-tips" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Formatting Tips</h3>
              <p className="text-gray-600 text-sm">Advanced techniques to enhance your Discord messages</p>
            </Link>
            
            <Link href="/guides/discord-timestamps-for-events" 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg text-indigo-700">Timestamps for Events</h3>
              <p className="text-gray-600 text-sm">Planning and organizing Discord server events</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}