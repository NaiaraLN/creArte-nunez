import { VStack, Text, Heading, Image, Button, Box, ScaleFade} from "@chakra-ui/react"
import {Link} from 'react-router-dom'

const Item = ({product}) => {

    const isOpen = true
    return (
            <ScaleFade initialScale={0.8} in={isOpen}>
                <Box 
                as="article"
                maxW='2xs' 
                maxH='auto' 
                borderWidth='1px' 
                borderRadius='lg' 
                m='4' 
                backdropBlur='10px' 
                bgColor='primary' 
                color='black'
                transition='all 400ms ease'
                _hover={{
                    boxShadow:'6px 10px 16px 2px rgba(255,255,255,0.65)',
                    transform: 'translateY(-3%)',
                }}>
                    <Image src={product.img} w='100%' borderRadius='lg'/>
                    <VStack p={6}>
                        <Heading as='h2' size='md'>{product.name}</Heading>
                        <Text>${product.price}</Text>
                        <Link to={`/product/${product.id}`}>
                            <Button key={product.id} variant="secondary">Ver detalles</Button>
                        </Link>
                    </VStack>
                </Box> 
            </ScaleFade>
        
    )
}

export {Item}