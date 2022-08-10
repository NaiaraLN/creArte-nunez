import { Heading, Spinner, Flex } from '@chakra-ui/react'
import { customFetch } from "../../assets/customFetch";
import { useState, useEffect } from 'react';
import { products } from '../../assets/products'
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
        <Flex align='center' direction='column' bgGradient='linear(to-b, #680148, #000000)'>
            <Heading as='h1' size='xl' color='white'>{greeting}</Heading>
            {loading? <ItemList listProducts={listProducts} /> : <Spinner/>}
        </ Flex>
    )
}

export {ItemListContainer}