import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discord Zeitstempel-Konverter | Einfaches Online-Tool',
  description: 'Konvertieren Sie Zeitstempel für Discord-Nachrichten mit verschiedenen Formaten. Einfach zu verwenden, kostenloser Online-Discord-Zeitstempel-Konverter.',
  keywords: 'discord, zeitstempel, konverter, discord timestamp, zeitformat',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 