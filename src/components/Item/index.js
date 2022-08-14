import { VStack, Text, Heading, Image, Button, Box } from "@chakra-ui/react"
import {Link} from 'react-router-dom'

const Item = ({product}) => {
    

    return (
        <Box 
        as="article"
        maxW='2xs' 
        maxH='auto' 
        borderWidth='1px' 
        borderRadius='lg' 
        m='4' 
        backdropBlur='10px' 
        bgColor='primary' 
        color='black'>
            <Image src={product.img} w='100%' borderRadius='lg'/>
            <VStack p={6}>
                <Heading as='h2' size='md'>{product.name}</Heading>
                <Text>${product.price}</Text>
                <Link to={`/product/${product.id}`}>
                    <Button key={product.id} variant="secondary">Ver detalles</Button>
                </Link>
            </VStack>
        </Box>
    )
}

export {Item}