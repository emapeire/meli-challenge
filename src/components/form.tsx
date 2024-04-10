'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Form() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <header className='h-16 bg-yellow-300 flex'>
      <form
        action={'/items'}
        className='m-auto max-w-screen-sm flex flex-1 gap-2 px-4 items-center'
      >
        <Link
          href={'/'}
          className='text-4xl border border-neutral-400 rounded-full bg-yellow-100 h-8 w-10 flex items-center justify-center'
        >
          🤝
        </Link>
        <input
          type='text'
          name='search'
          placeholder='Search for products'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full h-8 px-2 py-1 bg-neutral-100 text-neutral-700 rounded border border-neutral-400'
        />
        <button
          className='bg-neutral-300 px-2 py-1 text-neutral-700 h-8 rounded border border-neutral-400'
          type='submit'
          disabled={!searchTerm}
        >
          Search
        </button>
      </form>
    </header>
  )
}
