import { Heading } from '@chakra-ui/react'
import { customFetch } from "../../assets/customFetch";
import { useState, useEffect } from 'react';



const ItemListContainer = ({greeting}) => {

    return(
        <>
            <Heading as='h1' size='xl'>{greeting}</Heading>
        </>
    )
}

export {ItemListContainer}