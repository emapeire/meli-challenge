export const api = {
  items: {
    async search(query: string) {
      const { results } = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
      ).then(
        (res) =>
          res.json() as Promise<{
            results: {
              id: string
              title: string
              price: number
              thumbnail: string
              currency_id: string
              seller: {
                nickname: string
              }
            }[]
          }>
      )
      return results
    }
  },

  item: {
    async get(id: string) {
      const product = await fetch(
        `https://api.mercadolibre.com/items/${id}`
      ).then(
        (res) =>
          res.json() as Promise<{
            id: string
            title: string
            price: number
            thumbnail: string
            currency_id: string
            seller: {
              nickname: string
            }
          }>
      )

      const { plain_text } = await fetch(
        `https://api.mercadolibre.com/items/${id}/description`
      ).then(
        (res) =>
          res.json() as Promise<{
            plain_text: string
          }>
      )
      return { product, description: plain_text }
    }
  }
}
