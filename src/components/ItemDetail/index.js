import { VStack, Text, Heading, Image, Box} from "@chakra-ui/react"
import { ItemCount } from "../ItemCount"

const ItemDetail = ({listProduct}) => {
  

  return (
    <Box maxW='2xs' maxH='auto' borderWidth='1px' borderRadius='lg' m='4' backdropBlur='10px' bgColor='rgba(224,239,241,0.8)'>
      <Heading as='h2' size='md'>{listProduct.nombre}</Heading>
      <Image src={listProduct.img} w='80%' borderRadius='lg'/>
            <VStack p={6}>
                <Text>${listProduct.precio}</Text>
                <Text>{listProduct.detalle}</Text>
                <ItemCount initial={1} stock={listProduct.stock} onAdd={() => {}}/>
            </VStack>
    </Box>
  )
}

export {ItemDetail}