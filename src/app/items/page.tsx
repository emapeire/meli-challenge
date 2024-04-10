import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/lib/api'

export default async function ItemsPage({
  searchParams
}: {
  searchParams: { search: string }
}) {
  const results = await api.items.search(searchParams.search)

  return (
    <section>
      <article className='grid gap-8'>
        {results.map((item) => (
          <Link
            key={item.id}
            href={`/items/${item.id}`}
            className='flex gap-x-4 border border-neutral-400 rounded py-4 h-32'
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={90}
              height={90}
              priority
              className='ml-2 rounded max-h-[90px] max-w-[90px]'
            />
            <div>
              <p className='text-xl font-bold'>
                {Number(item.price).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: item.currency_id
                })}
              </p>
              <p className='text-sm'>{item.title}</p>
            </div>
            <span className='ml-auto opacity-50 mr-4 text-xs'>
              {item.seller.nickname}
            </span>
          </Link>
        ))}
      </article>
    </section>
  )
}
