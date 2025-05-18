import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Timestamp Generator | Easy Copy & Paste',
  description: 'Generate Discord timestamps easily. Copy and paste timestamps that automatically adjust to each user\'s timezone.',
  keywords: 'Discord timestamp, time format, Discord time, timezone converter, Discord event planning',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { locale?: string };
}) {
  const locale = params?.locale || 'en'
  
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Navbar />
        <main className="max-w-6xl mx-auto p-4">
          {children}
        </main>
        <footer className="mt-8 py-4 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Discord Timestamp Generator</p>
          </div>
        </footer>
      </body>
    </html>
  )
}