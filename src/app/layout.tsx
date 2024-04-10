import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

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
        <header className='h-16 bg-yellow-300 flex'>
          <form
            action={'/items'}
            className='m-auto max-w-screen-sm flex flex-1 gap-2 px-4 items-center'
          >
            <Link
              href={'/'}
              className='text-4xl border border-neutral-700 rounded-full bg-yellow-200 h-8 w-14 flex items-center justify-center'
            >
              🤝
            </Link>
            <input
              type='text'
              name='search'
              placeholder='Search for products'
              className='w-full h-8 px-2 py-1 bg-neutral-100 text-neutral-700 rounded'
            />
            <button
              className='bg-neutral-300 px-2 py-1 text-neutral-700 h-8 rounded'
              type='submit'
            >
              Search
            </button>
          </form>
        </header>
        <main className='max-w-screen-sm p-4 m-auto'>{children}</main>
      </body>
    </html>
  )
}
