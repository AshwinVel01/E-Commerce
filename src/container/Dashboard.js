import React from 'react'
import { ProductLists } from '../data/ProductLists'
import ProductCard from '../components/ProductCard'

export default function Dashboard() {  /* we import product images */
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>  {/* flex-wrap used for row and coloumn images. justify-content used for both side occupied spaces.*/}
        {ProductLists.map((product) => <ProductCard {...product} key={product.id} />)}
    </div>
  )
}
