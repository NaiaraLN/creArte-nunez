import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from 'react';
import { products } from '../../utils/products'
import { ItemDetail } from "../ItemDetail";
import { Spinner } from '@chakra-ui/react'

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        customFetch(products)
        .then(res => {
          setLoading(true)
          setListProduct(res.find(item => item.id === 1))
        })
    }, [])

  
  return (
    <>
      {loading? <ItemDetail listProduct={listProduct}/> : <Spinner/>}
    </>
  )
}

export {ItemDetailContainer}