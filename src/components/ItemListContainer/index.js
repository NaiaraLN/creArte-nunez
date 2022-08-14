import { Heading, Spinner, Flex} from '@chakra-ui/react'
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
        <Flex align='center' direction='column'>
            <Heading as='h1' size='xl' color='white' lineHeight='md'>{greeting}</Heading>
            {loading? <ItemList listProducts={listProducts} /> : <Spinner color='white' size='xl'/>}
            
        </ Flex>
    )
}

export {ItemListContainer}