import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LanguageSwitcher from './components/LanguageSwitcher'

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
      <body className={inter.className}>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  )
}