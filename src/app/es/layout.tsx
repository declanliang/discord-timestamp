import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conversor de Marcas de Tiempo de Discord | Herramienta en línea',
  description: 'Convierte marcas de tiempo para mensajes de Discord con diferentes formatos. Fácil de usar, conversor de marcas de tiempo de Discord gratis.',
  keywords: 'discord, marca de tiempo, conversor, timestamp discord, formato de tiempo',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 