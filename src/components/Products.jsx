import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/store'

export const Products = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getProducts().then(products => setData(products))
  }, [])


  console.log(data)

  return (
    <div>
        
    </div>

  )
}
