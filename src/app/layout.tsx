import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LanguageSwitcher from './components/LanguageSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Timestamp Converter | Simple Online Tool',
  description: 'Convert timestamps for Discord messages with different formats. Easy to use, free online Discord timestamp converter.',
  keywords: 'discord, timestamp, converter, discord timestamp, time format',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: { locale?: string }
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