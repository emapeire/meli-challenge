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
            className='flex flex-col md:flex-row gap-4 border border-neutral-400 rounded md:py-4 md:px-2 p-4 md:h-32'
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={90}
              height={90}
              priority
              className='md:ml-2 rounded max-h-[90px] max-w-[90px]'
            />
            <span className='md:hidden block opacity-50 text-xs'>
              {item.seller.nickname}
            </span>
            <div className='flex flex-col gap-2'>
              <p className='text-xl font-bold'>
                {Number(item.price).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: item.currency_id
                })}
              </p>
              <p className='md:text-sm'>{item.title}</p>
            </div>
            <span className='hidden md:block ml-auto opacity-50 mr-4 md:mt-1 text-xs'>
              {item.seller.nickname}
            </span>
          </Link>
        ))}
      </article>
    </section>
  )
}
