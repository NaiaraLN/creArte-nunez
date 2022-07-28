import { Heading } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {

    return(
        <Heading as='h1' size='xl'>{greeting}</Heading>
    )
}

export {ItemListContainer}