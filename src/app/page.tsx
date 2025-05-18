import React from 'react';
import Link from 'next/link';
import DiscordTimestamp from './components/DiscordTimestamp';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Main Converter Tool Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-8 text-center leading-relaxed">Discord Timestamp Converter</h1>
        <p className="text-2xl mb-10 text-center text-gray-600 leading-relaxed">
          Convert your local time into Discord timestamp format
        </p>
        
        <DiscordTimestamp />
      </div>
      
      {/* What Are Discord Timestamps Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-8 leading-relaxed">What Are Discord Time Timestamps?</h2>
        <p className="text-xl mb-6 leading-relaxed">
          Discord timestamps are special formatting codes that display time in a user's local timezone. When you send a message with a timestamp, 
          Discord converts it automatically for each person who reads it - no more confusion about timezones!
        </p>
        <p className="text-xl leading-relaxed">
          You can use Discord time formatting for scheduling events, setting deadlines, remembering anniversaries, or coordinating activities across different timezones.
        </p>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-8 leading-relaxed">Frequently Asked Questions About Discord Time</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">How do Discord timestamps work?</h3>
            <p className="text-xl leading-relaxed">Discord timestamps use Unix time format wrapped in special syntax. When displayed, they automatically convert to each user's local time.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">What timestamp formats does Discord support?</h3>
            <p className="text-xl leading-relaxed">Discord supports several formats: short time (HH:MM), long time (HH:MM:SS), short date (MM/DD/YYYY), long date (Month DD, YYYY), long date with short time, and relative time.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Can I use timestamps in Discord embeds?</h3>
            <p className="text-xl leading-relaxed">Yes, Discord timestamps work in embeds and regular messages. They're especially useful for event announcements and reminders.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-blue-700 mb-4 leading-relaxed">Do timestamps work on mobile devices?</h3>
            <p className="text-xl leading-relaxed">Yes, Discord timestamps work perfectly across all platforms - desktop, mobile, and web versions of Discord.</p>
          </div>
        </div>
      </div>
      
      {/* Special Events Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-4xl font-semibold mb-6 leading-relaxed">Special Events</h2>
        <p className="text-xl leading-relaxed">
          Check out our ready-to-use Discord timestamps for all{' '}
          <Link href="/events/us-holidays-2025" className="text-blue-600 hover:underline">
            2025 US Holidays
          </Link>!
        </p>
      </div>
    </div>
  );
}