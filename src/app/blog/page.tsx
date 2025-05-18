import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discord Timestamp Blog | Guides & Tips',
  description: 'Learn how to use Discord timestamps effectively with our comprehensive guides and tips for better server communication.',
  keywords: 'Discord timestamp guide, Discord time format blog, Discord event planning, Discord tutorials',
};

const guides = [
  {
    title: 'How to Use Discord Timestamps',
    description: 'A complete guide for beginners on using Discord\'s dynamic timestamp feature.',
    slug: '/guides/how-to-use-discord-timestamps',
    date: 'May 12, 2024',
  },
  {
    title: 'Discord Timestamp Formatting Tips',
    description: 'Advanced formatting techniques to make your Discord timestamps more effective.',
    slug: '/guides/discord-timestamp-formatting-tips',
    date: 'May 14, 2024',
  },
  {
    title: 'Discord Timestamps for Events',
    description: 'Learn how to use timestamps for planning and organizing events in your Discord server.',
    slug: '/guides/discord-timestamps-for-events',
    date: 'May 16, 2024',
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-5xl font-bold mb-6 text-center leading-relaxed text-gray-800">Discord Timestamp Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
          Explore our guides and tutorials to master Discord timestamps and improve communication in your server.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-8 leading-relaxed">Latest Guides</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link 
              key={guide.slug} 
              href={guide.slug}
              className="block group"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-blue-300 h-full">
                <div className="p-6 space-y-4">
                  <p className="text-base text-gray-500 leading-relaxed">{guide.date}</p>
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors leading-relaxed">{guide.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{guide.description}</p>
                  <div className="pt-3">
                    <span className="inline-flex items-center text-blue-600 text-base font-medium">
                      Read more
                      <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-6 leading-relaxed">Looking for Our Timestamp Generator?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Go back to our homepage to use our Discord timestamp generator tool and create timestamps for your server.
        </p>
        <Link 
          href="/"
          className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Go to Timestamp Generator
        </Link>
      </div>
    </div>
  );
} 