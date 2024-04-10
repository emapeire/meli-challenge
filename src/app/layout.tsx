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
      <body className='flex flex-col min-h-screen'>
        <Form />
        <main className='flex-1 max-w-screen-sm px-4 py-12 m-auto'>
          {children}
        </main>
        <footer className='h-8 text-center text-neutral-500 text-sm'>
          <p>
            Made with ❤️ by{' '}
            <a
              href='https://github.com/emapeire'
              className='text-neutral-800 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              @emapeire
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
