import { api } from '@/lib/api'
import Link from 'next/link'

export default async function ItemsPage({
  searchParams
}: {
  searchParams: { search: string }
}) {
  const results = await api.items.search(searchParams.search)

  return (
    <section>
      <article className='grid gap-4'>
        {results.map((item) => (
          <Link key={item.id} href={`/items/${item.id}`} className='flex gap-4'>
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <p className='text-xl font-bold'>
                {Number(item.price).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: item.currency_id
                })}
              </p>
              <p>{item.title}</p>
            </div>
            <span className='ml-auto text-sm opacity-50'>
              {item.seller.nickname}
            </span>
          </Link>
        ))}
      </article>
    </section>
  )
}
