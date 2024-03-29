import { useState, useEffect } from 'react';
import { ItemDetail } from "../ItemDetail";
import { Spinner, Box } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { toast } from 'react-toastify';


const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()


    useEffect(() => {
        
        setLoading(false)
        const productCollection = collection(db, "products")
        const reference = doc(productCollection, id)
        const consult = getDoc(reference)

        consult
        .then((res) => {
          let product = {
            ...res.data(),
            id: res.id
          }
          setListProduct(product)
          setLoading(true)
        })
        .catch((err) => {
          toast.error("Error al cargar el producto")
        })
    }, [id])

  
  return (
    <Box as='section' display='flex' justifyContent='center' alignItems='center' minH='90vh'>
      {loading? <ItemDetail listProduct={listProduct}/> : <Spinner color='white' thickness="5px" size='xl'/>}
    </Box>
  )
}

export {ItemDetailContainer}