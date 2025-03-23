import React from 'react';
import Link from 'next/link';
import { US_HOLIDAYS_2025 } from '../../data/us-holidays-2025';

export const metadata = {
  title: 'Discord Timestamps for US Holidays 2025 | Easy Planning Tool',
  description: 'Generate Discord timestamps for all major US holidays in 2025. Perfect for planning events, reminders, and schedules in your Discord server.',
  keywords: 'Discord timestamps, US holidays 2025, Discord event planning, holiday scheduling, Discord server events',
};

export default function USHolidays2025Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Discord Timestamps for US Holidays 2025</h1>
          <p className="text-gray-600">
            Plan ahead with ready-to-use Discord timestamps for all major US holidays in 2025.
            Perfect for scheduling events, reminders, and coordinating with your community.
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">All US Holidays 2025</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {US_HOLIDAYS_2025.map(holiday => (
              <Link 
                href={`/events/us-holidays-2025/${holiday.id}`} 
                key={holiday.id}
                className="p-4 border rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="font-medium text-lg text-blue-600">{holiday.name}</h3>
                <p className="text-gray-500">{new Date(holiday.date).toLocaleDateString('en-US', { 
                  weekday: 'long',
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Use Discord Timestamps for Holidays?</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">1</div>
              <div>
                <h3 className="font-medium">Perfect for International Communities</h3>
                <p className="text-gray-600">Discord timestamps automatically adjust to each user's local time zone.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">2</div>
              <div>
                <h3 className="font-medium">Easy Event Planning</h3>
                <p className="text-gray-600">Coordinate holiday events in your server without confusion about dates and times.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">3</div>
              <div>
                <h3 className="font-medium">Multiple Format Options</h3>
                <p className="text-gray-600">Choose from different timestamp formats to display exactly what you need.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 