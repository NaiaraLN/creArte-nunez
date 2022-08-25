import { useState, useEffect } from 'react';
import { ItemDetail } from "../ItemDetail";
import { Spinner, Box } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { products } from '../../utils/products';
import { customFetch } from "../../utils/customFetch";
//import { getDoc, doc, collection } from "firebase/firestore";
//import { db } from "../firebase";


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
        /* setLoading(false)
        const productCollection = collection(db, "products")
        const reference = doc(productCollection, id)
        const consult = getDoc(reference)

        consult
        .then((res) => {
          setListProduct(res.data())
          setLoading(true)
        })
        .catch((err) => {
          console.log(err);
        }) */
    }, [id])

  
  return (
    <Box as='section' display='flex' justifyContent='center' alignItems='center' minH='90vh'>
      {loading? <ItemDetail listProduct={listProduct}/> : <Spinner color='white' thickness="5px" size='xl'/>}
    </Box>
  )
}

export {ItemDetailContainer}