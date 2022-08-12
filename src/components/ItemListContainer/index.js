import { Heading, Spinner, Flex } from '@chakra-ui/react'
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from 'react';
import { products } from '../../utils/products'
import { ItemList } from '../ItemList';


const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        customFetch(products)
        .then(data => {
            setLoading(true)
            setListProducts(data)
        })
    }, [])

    return(
        <Flex align='center' direction='column'>
            <Heading as='h1' size='xl' color='white' lineHeight='md'>{greeting}</Heading>
            {loading? <ItemList listProducts={listProducts} /> : <Spinner/>}
        </ Flex>
    )
}

export {ItemListContainer}