import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Convertisseur de Timestamp Discord | Outil en ligne simple',
  description: 'Convertissez les timestamps pour les messages Discord avec différents formats. Facile à utiliser, convertisseur de timestamp Discord gratuit en ligne.',
  keywords: 'discord, timestamp, convertisseur, discord timestamp, format de temps',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 