import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Timestamp Converter | Easy Copy & Paste',
  description: 'Convert your local time into Discord timestamp format that automatically adjusts to each user\'s timezone.',
  keywords: 'Discord timestamp, time format, Discord time, timezone converter, Discord event planning',
  other: {
    'partnerboostverifycode': '32dc01246faccb7f5b3cad5016dd5033',
    'verify-yeahpromos': '29af45e32c02',
    'impact-site-verification': '057d91c7-b283-44cc-aa8e-a35612537639'
  }
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
        <footer className="mt-8 py-6 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 text-center text-xl text-gray-500">
            © 2025 <a href="https://discordtime.me" className="hover:underline">discordtime.me</a>
          </div>
        </footer>
      </body>
    </html>
  )
}