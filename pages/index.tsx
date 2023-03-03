import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    fetch('/api/avo')
      .then((resp) => resp.json())
      .then(({ data, length }) => setProductList(data))
      .catch(console.log)
  }, [])
  return (
    <div>
      <div>Platzi and Next.js!</div>
      <br />
      {productList.map((avocado) => (
        <Link key={avocado.id} href={`/product/${avocado.id}`}>
          <div>{avocado.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
