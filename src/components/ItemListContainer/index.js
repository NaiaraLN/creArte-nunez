import { Heading, Spinner, Box} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList';
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';



const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()


    useEffect(() => {
            const productCollection = collection(db, "products")
            let consult;
            if (category) {
                const filtro = query(productCollection, where("category", "==", category))
                consult = getDocs(filtro);
            }else{
                consult = getDocs(productCollection);
            }
            
            setLoading(false)
            consult
            .then(snapshot=>{
                const products = snapshot.docs.map(doc => {
                    return{
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setLoading(true)
                setListProducts(products)
            })
            .catch(err =>{
                toast.error("Error al cargar los productos")
            })
        
        
    }, [category])

    return(
        <Box as='section' minH='90vh' display='flex' alignItems='center' flexDir='column'> 
            <Heading as='h1' size='xl' color='white' lineHeight='md' textAlign='center'>{greeting}</Heading> 
            <Box display='flex' alignItems='center' minH='70vh'>
                {loading? <ItemList listProducts={listProducts} /> : <Spinner color='white' thickness='5px' size='xl'/>}
            </Box>
        </ Box>
    )
}

export {ItemListContainer}