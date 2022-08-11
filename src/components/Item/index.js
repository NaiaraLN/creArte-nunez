import { VStack, Text, Heading, Image, Button, Box } from "@chakra-ui/react"


const Item = ({product}) => {
    

    return (
        <Box maxW='2xs' maxH='auto' borderWidth='1px' borderRadius='lg' m='4' backdropBlur='10px' bgColor='rgba(224,239,241,0.8)'>
            <Image src={product.img} w='100%' borderRadius='lg'/>
            <VStack p={6}>
                <Heading as='h2' size='md'>{product.nombre}</Heading>
                <Text>${product.precio}</Text>
                <Button key={product.id}>Ver detalles</Button>
            </VStack>
        </Box>
    )
}

export {Item}