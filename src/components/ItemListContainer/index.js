import { Heading, Spinner, Box} from '@chakra-ui/react'
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from 'react';
import { products } from '../../utils/products'
import { ItemList } from '../ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    
    const {category} = useParams()


    useEffect(() => {
        setLoading(false)
        customFetch(products)
        .then(data => {
            if (category) {
                setLoading(true)
                setListProducts(data.filter(prod => prod.category === category))
            }else{
                setLoading(true)
                setListProducts(data)
            }
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