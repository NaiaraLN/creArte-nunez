import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from 'react';
import { products } from '../../utils/products'
import { ItemDetail } from "../ItemDetail";
import { Spinner, Box } from '@chakra-ui/react'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()


    useEffect(() => {
        setLoading(false)
        customFetch(products)
        .then(res => {
          setLoading(true)
          setListProduct(res.find(item => item.id === parseInt(id)))
        })
    }, [id])

  
  return (
    <Box as='section' display='flex' justifyContent='center' alignItems='center' minH='90vh'>
      {loading? <ItemDetail listProduct={listProduct}/> : <Spinner color='white' size='xl'/>}
    </Box>
  )
}

export {ItemDetailContainer}