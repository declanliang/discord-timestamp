import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discord Timestamp Formatting Tips | Advanced Techniques',
  description: 'Learn advanced formatting techniques for Discord timestamps to enhance your server communication with professional-looking date and time displays.',
  keywords: 'Discord timestamp formatting, Discord time format tips, Discord date format tricks, advanced Discord timestamps',
};

export default function DiscordTimestampFormattingTips() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <Link href="/" className="text-blue-500 hover:underline inline-block mb-2">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Discord Timestamp Formatting Tips</h1>
          <p className="text-xl text-gray-600">Advanced techniques to enhance your Discord messages</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Beyond the Basics</h2>
          <p className="text-gray-700">
            Discord timestamps are powerful tools for clear communication, but with some creativity, you can use them
            even more effectively. This guide will share advanced formatting tips and techniques to make your timestamps
            more useful and visually appealing.
          </p>
          
          <div className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
            <p className="text-gray-800">
              <strong>Need the basics first?</strong> Check out our <Link href="/guides/how-to-use-discord-timestamps" className="text-blue-500 hover:underline">complete guide to using Discord timestamps</Link> if you&apos;re new to this feature.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Formatting for Readability</h2>
          
          <h3 className="text-xl font-medium">Embedding in Text</h3>
          <p className="text-gray-700 mb-3">
            Rather than just posting raw timestamps, incorporate them naturally into your sentences:
          </p>
          
          <div className="space-y-3">
            <div className="flex">
              <div className="w-1/2 pr-2">
                <div className="bg-red-50 p-3 rounded-md text-red-800 h-full">
                  <p className="font-medium">Less Effective:</p>
                  <p>Event: Game Night</p>
                  <p>Time: &lt;t:1693526400:F&gt;</p>
                  <p>Make sure to join!</p>
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <div className="bg-green-50 p-3 rounded-md text-green-800 h-full">
                  <p className="font-medium">More Effective:</p>
                  <p>Join us for Game Night &lt;t:1693526400:F&gt; where we&apos;ll be playing Minecraft! The server will open &lt;t:1693526400:R&gt;.</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-medium mt-6">Combining Format Types</h3>
          <p className="text-gray-700 mb-3">
            For important events, use multiple format types together to provide complete information:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              🎉 The server anniversary celebration is on &lt;t:1693526400:D&gt; at &lt;t:1693526400:t&gt; (&lt;t:1693526400:R&gt;)
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            This shows a long date, short time, and relative time, covering all bases for your users.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Using Emoji to Enhance Timestamps</h2>
          <p className="text-gray-700">
            Add visual context with emoji that match your timestamp purpose:
          </p>
          
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">For Events</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>🎮 Gaming Session: &lt;t:1693526400:F&gt;</p>
                <p>🎬 Movie Night: &lt;t:1693612800:F&gt;</p>
                <p>🎤 Voice Chat Hangout: &lt;t:1693699200:F&gt;</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">For Deadlines</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>⏰ Submission Due: &lt;t:1693526400:F&gt;</p>
                <p>⚠️ Last Chance to Register: &lt;t:1693612800:R&gt;</p>
                <p>🔔 Reminder: Polls close &lt;t:1693699200:R&gt;</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">For Status Updates</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p>🟢 Server online since: &lt;t:1693526400:R&gt;</p>
                <p>🔧 Maintenance begins: &lt;t:1693612800:R&gt;</p>
                <p>🔄 Last updated: &lt;t:1693699200:R&gt;</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Creating Visual Separators</h2>
          <p className="text-gray-700">
            For multiple timestamps or schedule listings, use formatting to create clear visual separation:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-medium">📅 TOURNAMENT SCHEDULE:</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>🏆 Round 1: &lt;t:1693526400:f&gt;</p>
            <p>🏆 Round 2: &lt;t:1693612800:f&gt;</p>
            <p>🏆 Finals: &lt;t:1693699200:f&gt;</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>Registration closes &lt;t:1693439200:R&gt;</p>
          </div>
          
          <p className="text-gray-700 mt-4">
            You can also use Discord&apos;s code blocks and quote formatting for organization:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>```EVENT TIMES```</p>
            <p>&gt; Opening Ceremony: &lt;t:1693526400:F&gt;</p>
            <p>&gt; Main Activities: &lt;t:1693612800:F&gt;</p>
            <p>&gt; Closing Party: &lt;t:1693699200:F&gt;</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Time Zone Awareness</h2>
          <p className="text-gray-700">
            While Discord timestamps automatically adjust to each user&apos;s time zone, it helps to be explicit about this benefit:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              Our next community meeting is scheduled for &lt;t:1693526400:F&gt; (this time will display in YOUR local time zone).
            </p>
          </div>
          
          <p className="text-gray-700 mt-4">
            For servers with international members, emphasize the convenience:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              🌎 No matter where you are in the world, this timestamp will show the correct time for YOU: &lt;t:1693526400:F&gt;
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Using with Discord&apos;s Formatting Options</h2>
          <p className="text-gray-700">
            Combine timestamps with Discord&apos;s text formatting for emphasis:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                **IMPORTANT!** The application deadline is &lt;t:1693526400:F&gt;
              </p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                __Streaming starts__: &lt;t:1693526400:t&gt; (&lt;t:1693526400:R&gt;)
              </p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-md">
              <p>
                # Server Launch: &lt;t:1693526400:F&gt;
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-4">
            For particularly important announcements, use all caps and separators:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              ⚠️ **ATTENTION** ⚠️<br />
              SERVER BACKUP BEGINS: &lt;t:1693526400:F&gt;<br />
              ESTIMATED DOWNTIME: 30 MINUTES<br />
              ⚠️ **PLEASE SAVE YOUR WORK** ⚠️
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Timestamps in Embeds and Webhooks</h2>
          <p className="text-gray-700">
            If you use bots that support embeds, you can include timestamps in structured messages:
          </p>
          
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-lg">Community Game Night</h3>
            <p className="text-gray-700">Join us for fun and prizes!</p>
            <p className="text-gray-700">⏰ &lt;t:1693526400:F&gt;</p>
            <p className="text-gray-700">🎮 Among Us, Minecraft, and more</p>
            <p className="text-gray-700">👥 Open to all members</p>
          </div>
          
          <p className="text-gray-600 text-sm">
            *This represents how a bot embed might look with a timestamp included.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Timestamp Templates for Common Uses</h2>
          <p className="text-gray-700">
            Copy and adapt these templates for your server:
          </p>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Event Announcement Template</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`📣 **EVENT ANNOUNCEMENT** 📣

🎮 **[Event Name]**
📅 Date: <t:TIMESTAMP:D>
🕒 Time: <t:TIMESTAMP:t>
⏰ Starts in: <t:TIMESTAMP:R>

📝 **Description:**
[Event description here]

👥 **How to Join:**
[Instructions here]

❓ **Questions?**
Ask in #help-channel`}
                </pre>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Countdown Announcement</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`⏳ **COUNTDOWN: [Event Name]** ⏳

The event begins <t:TIMESTAMP:R>!

Mark your calendars for <t:TIMESTAMP:F>

⭐ Get ready for [brief description]!`}
                </pre>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg">Schedule Template</h3>
              <div className="bg-gray-100 p-3 rounded-md overflow-auto text-sm">
                <pre className="whitespace-pre-wrap">
{`📅 **SCHEDULE: [Event Name]** 📅

▶️ Start: <t:TIMESTAMP1:f>
⏱️ Phase 1: <t:TIMESTAMP2:f>
⏱️ Phase 2: <t:TIMESTAMP3:f>
⏹️ End: <t:TIMESTAMP4:f>

All times displayed in YOUR local timezone.`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Create Your Own Timestamps</h2>
          <p className="text-gray-700 mb-4">
            Now that you&apos;ve seen these formatting tips, head back to our timestamp generator to create your own perfectly formatted Discord timestamps.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Create Custom Timestamps
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>
            Related guides: <Link href="/guides/how-to-use-discord-timestamps" className="text-blue-500 hover:underline">How to Use Discord Timestamps</Link> | <Link href="/guides/discord-timestamps-for-events" className="text-blue-500 hover:underline">Using Timestamps for Discord Events</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 