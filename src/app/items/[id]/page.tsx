import { api } from '@/lib/api'

export default async function ItemPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const { product, description } = await api.item.get(id)

  return (
    <section className='grid gap-2'>
      <img src={product.thumbnail} alt={product.title}></img>
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
