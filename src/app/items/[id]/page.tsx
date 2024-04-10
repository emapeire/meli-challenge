import Image from 'next/image'
import { api } from '@/lib/api'

export default async function ItemPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const { product, description } = await api.item.get(id)

  return (
    <section className='grid gap-2'>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={90}
        height={90}
        priority
      />
      <p className='text-xl font-bold'>
        {Number(product.price).toLocaleString('es-AR', {
          style: 'currency',
          currency: product.currency_id
        })}
      </p>
      <p>{product.title}</p>
      <hr />
      <p>{description}</p>
    </section>
  )
}
