interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  return (
    <div>
      <h1>Product: {productId}</h1>
      <h1>Size: {size}</h1>
      <h1>Color: {color}</h1>
    </div>
  )
}
