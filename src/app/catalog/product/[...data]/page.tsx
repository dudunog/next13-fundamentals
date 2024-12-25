import { AddToCartButton } from './add-to-cart-button'
import { Test } from './test'

interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => A gente não usa JavaScript no lado do cliente
// Client Components => O JavaScript é enviado ao navegador (cliente)

// Hydration => Tornar um HTML cru em um HTML interativo (Isso ocorre em todo client component)

// Streaming SSR => Ler/escrever dados de forma parcial + Server-side Rendering
// Renderizar um componente pelo lado do servidor de forma parcial

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/dudunog')
  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <h1>Product: {productId}</h1>
      <h1>Size: {size}</h1>
      <h1>Color: {color}</h1>

      <AddToCartButton>
        <Test />
      </AddToCartButton>
    </div>
  )
}
