import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Use Discord Timestamps | Complete Guide',
  description: 'Learn how to use Discord timestamps in your messages to show dates and times that automatically adjust to each user\'s timezone.',
  keywords: 'Discord timestamps, Discord time format, Discord date format, Discord relative time, timezone converter',
};

export default function HowToUseDiscordTimestamps() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <Link href="/" className="text-blue-500 hover:underline inline-block mb-2">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">How to Use Discord Timestamps</h1>
          <p className="text-xl text-gray-600">A complete guide to using dynamic time formats in Discord</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">What are Discord Timestamps?</h2>
          <p className="text-gray-700">
            Discord timestamps are special text formats that display dates and times that automatically
            adjust to each user&apos;s local timezone. This means that if you&apos;re planning an event
            or setting a deadline, everyone will see the time in their own timezone, avoiding confusion.
          </p>
          
          <div className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
            <p className="text-gray-800">
              <strong>Pro Tip:</strong> Using timestamps ensures that all your server members see the correct time,
              regardless of where they&apos;re located around the world.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Basic Timestamp Format</h2>
          <p className="text-gray-700">
            The basic format for a Discord timestamp is:
          </p>
          <div className="bg-gray-100 p-4 rounded-md overflow-auto">
            <code className="text-sm">&lt;t:TIMESTAMP:FORMAT&gt;</code>
          </div>
          <p className="text-gray-700">
            Where:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>TIMESTAMP</strong> is a Unix timestamp (seconds since January 1, 1970)</li>
            <li><strong>FORMAT</strong> is an optional format specifier (like t, T, d, D, f, F, or R)</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6">How to Get a Unix Timestamp</h3>
          <p className="text-gray-700">
            You can convert any date and time to a Unix timestamp using our tool on the homepage.
            Simply select your date and time, and copy the generated timestamp code.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Available Format Types</h2>
          <p className="text-gray-700">
            Discord offers several different formatting options for timestamps:
          </p>
          
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Short Time (t)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:t&gt;</code>
              <p className="text-gray-600">Displays as: 16:20</p>
              <p className="text-gray-600 text-sm">Shows just the time in 24-hour format.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Long Time (T)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:T&gt;</code>
              <p className="text-gray-600">Displays as: 16:20:00</p>
              <p className="text-gray-600 text-sm">Shows the time with seconds.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Short Date (d)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:d&gt;</code>
              <p className="text-gray-600">Displays as: 01/09/2023</p>
              <p className="text-gray-600 text-sm">Shows just the date in a compact format.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Long Date (D)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:D&gt;</code>
              <p className="text-gray-600">Displays as: September 1, 2023</p>
              <p className="text-gray-600 text-sm">Shows the full date with month name.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Short Date/Time (f)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:f&gt;</code>
              <p className="text-gray-600">Displays as: September 1, 2023 16:20</p>
              <p className="text-gray-600 text-sm">Shows date and time together.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Long Date/Time (F)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:F&gt;</code>
              <p className="text-gray-600">Displays as: Friday, September 1, 2023 16:20</p>
              <p className="text-gray-600 text-sm">Shows full date with day of week and time.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Relative Time (R)</h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;t:1693526400:R&gt;</code>
              <p className="text-gray-600">Displays as: in 3 hours OR 2 days ago</p>
              <p className="text-gray-600 text-sm">Shows time relative to current time (dynamically updates).</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Practical Examples</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Planning a Server Event</h3>
            <p className="text-gray-700">
              When announcing an event in your Discord server:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                🎮 Join our gaming session <code>&lt;t:1693526400:F&gt;</code>! Be sure to sign up in the #registration channel before <code>&lt;t:1693526400:R&gt;</code>.
              </p>
            </div>
            <p className="text-gray-700">
              This will show the full date and time, plus a countdown that automatically updates.
            </p>
            
            <h3 className="text-xl font-medium mt-6">Setting Deadlines</h3>
            <p className="text-gray-700">
              For submission deadlines:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                Please submit your competition entries by <code>&lt;t:1693526400:f&gt;</code> (<code>&lt;t:1693526400:R&gt;</code>).
              </p>
            </div>
            
            <h3 className="text-xl font-medium mt-6">Server Maintenance Announcement</h3>
            <p className="text-gray-700">
              For server downtime:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                ⚠️ Our bot will be down for maintenance <code>&lt;t:1693526400:R&gt;</code> for approximately 2 hours.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Advanced Tips</h2>
          
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <strong>Combine formats:</strong> You can use multiple timestamp formats in the same message to provide complete information. For example, show both the full date/time and a countdown.
            </li>
            <li>
              <strong>Create recurring reminders:</strong> Use a bot that can send timestamp messages for recurring events, updating the Unix timestamp each time.
            </li>
            <li>
              <strong>Pin important timestamps:</strong> For long-term events or deadlines, pin messages with timestamps in relevant channels.
            </li>
            <li>
              <strong>Use our Holiday Timestamps:</strong> Check out our <Link href="/events/us-holidays-2025" className="text-blue-500 hover:underline">US Holidays for 2025</Link> with ready-to-copy Discord timestamps.
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Try It Yourself</h2>
          <p className="text-gray-700 mb-4">
            Ready to use Discord timestamps in your server? Head back to our <Link href="/" className="text-blue-500 hover:underline">timestamp generator</Link> to create your own custom timestamps!
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Generate Timestamps Now
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>
            Check out our other guides: <Link href="/guides/discord-timestamp-formatting-tips" className="text-blue-500 hover:underline">Discord Timestamp Formatting Tips</Link> | <Link href="/guides/discord-timestamps-for-events" className="text-blue-500 hover:underline">Using Timestamps for Discord Events</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 