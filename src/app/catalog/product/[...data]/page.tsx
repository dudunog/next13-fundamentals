'use client'

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

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  console.log(params)

  function addToCart() {
    console.log('Adicionou ao carrinho')
  }

  return (
    <div>
      <h1>Product: {productId}</h1>
      <h1>Size: {size}</h1>
      <h1>Color: {color}</h1>

      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  )
}
