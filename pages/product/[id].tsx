import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const [avocado, setAvocado] = useState<TProduct>()

  useEffect(() => {
    fetch(`/api/avo/${id}`)
      .then((res) => res.json())
      .then((data) => setAvocado(data))
      .catch(console.log)
  }, [id])
  return (
    <section>
      <h1>Página producto: {id}</h1>
      <span>Price:{avocado?.price}</span>
      <span>nombre: {avocado?.name}</span>
    </section>
  )
}

export default ProductPage
