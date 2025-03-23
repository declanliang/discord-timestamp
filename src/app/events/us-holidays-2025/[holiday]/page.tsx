import React from 'react';
import Link from 'next/link';
import { US_HOLIDAYS_2025, Holiday } from '../../../data/us-holidays-2025';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    holiday: string;
  }
}

export async function generateStaticParams() {
  return US_HOLIDAYS_2025.map(holiday => ({
    holiday: holiday.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const holiday = US_HOLIDAYS_2025.find(h => h.id === params.holiday);
  
  if (!holiday) {
    return {
      title: 'Holiday Not Found',
      description: 'The requested holiday information could not be found.'
    };
  }
  
  return {
    title: `Discord Timestamp for ${holiday.name} | Easy Copy & Paste`,
    description: `Generate and copy Discord timestamps for ${holiday.name}. Perfect for planning events, reminders, and schedules in your Discord server.`,
    keywords: [...holiday.keywords, 'Discord timestamp', 'holiday planning', 'time format', 'event schedule'].join(', '),
  };
}

export default function HolidayPage({ params }: PageProps) {
  const holiday = US_HOLIDAYS_2025.find(h => h.id === params.holiday);
  
  if (!holiday) {
    notFound();
  }
  
  const timestamp = Math.floor(new Date(holiday.date).getTime() / 1000);
  const formattedDate = new Date(holiday.date).toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  
  const timestampFormats = [
    { key: 't', description: 'Short Time', example: '16:20', code: `<t:${timestamp}:t>` },
    { key: 'T', description: 'Long Time', example: '16:20:30', code: `<t:${timestamp}:T>` },
    { key: 'd', description: 'Short Date', example: '20/04/2025', code: `<t:${timestamp}:d>` },
    { key: 'D', description: 'Long Date', example: 'April 20, 2025', code: `<t:${timestamp}:D>` },
    { key: 'f', description: 'Short Date/Time', example: 'April 20, 2025 16:20', code: `<t:${timestamp}:f>` },
    { key: 'F', description: 'Long Date/Time', example: 'Saturday, April 20, 2025 16:20', code: `<t:${timestamp}:F>` },
    { key: 'R', description: 'Relative Time', example: 'in X days', code: `<t:${timestamp}:R>` },
  ];
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  
  // Find next and previous holidays for navigation
  const currentIndex = US_HOLIDAYS_2025.findIndex(h => h.id === holiday.id);
  const prevHoliday = currentIndex > 0 ? US_HOLIDAYS_2025[currentIndex - 1] : null;
  const nextHoliday = currentIndex < US_HOLIDAYS_2025.length - 1 ? US_HOLIDAYS_2025[currentIndex + 1] : null;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <Link href="/events/us-holidays-2025" className="text-blue-500 hover:underline inline-block mb-2">
            ← Back to All US Holidays 2025
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">{holiday.name}</h1>
          <p className="text-xl text-gray-600">{formattedDate}</p>
          <p className="text-gray-600 max-w-2xl mx-auto">{holiday.description}</p>
        </header>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Discord Timestamps</h2>
          <p className="text-gray-600">
            Copy these Discord timestamp formats to use in your server. Discord will automatically
            convert these to each user's local time zone.
          </p>
          
          <div className="grid gap-4">
            {timestampFormats.map((format) => (
              <div key={format.key} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="space-y-1">
                  <p className="font-medium text-gray-800">{format.description}</p>
                  <code className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">{format.code}</code>
                  <p className="text-sm text-gray-500">Displays as: {format.example}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(format.code)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  aria-label={`Copy ${format.description} format`}
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Holiday Planning Tips</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Use the Relative format (<code className="bg-gray-100 px-1">:R</code>) for countdowns in your announcements</li>
            <li>Include the Full Date/Time format (<code className="bg-gray-100 px-1">:F</code>) in event details</li>
            <li>Add timestamps to your server's event channels for easy reference</li>
            <li>Schedule bot reminders using these timestamps for event notifications</li>
          </ul>
        </div>
        
        {/* Navigation between holidays */}
        <div className="flex justify-between">
          {prevHoliday ? (
            <Link href={`/events/us-holidays-2025/${prevHoliday.id}`} className="text-blue-500 hover:underline">
              ← {prevHoliday.name}
            </Link>
          ) : <div></div>}
          
          {nextHoliday && (
            <Link href={`/events/us-holidays-2025/${nextHoliday.id}`} className="text-blue-500 hover:underline">
              {nextHoliday.name} →
            </Link>
          )}
        </div>
        
        {/* Related holidays */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Explore Other 2025 US Holidays</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {US_HOLIDAYS_2025.filter(h => h.id !== holiday.id)
              .slice(0, 6)
              .map(relatedHoliday => (
                <Link 
                  key={relatedHoliday.id} 
                  href={`/events/us-holidays-2025/${relatedHoliday.id}`}
                  className="p-2 text-blue-500 hover:bg-blue-50 rounded transition-colors"
                >
                  {relatedHoliday.name}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
} 