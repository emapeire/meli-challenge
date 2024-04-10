import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Form from '@/components/form'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MeLi - Frontend Challenge',
  description: 'A simple frontend challenge for MeLi'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Form />
        <main className='max-w-screen-sm p-4 m-auto'>{children}</main>
      </body>
    </html>
  )
}
