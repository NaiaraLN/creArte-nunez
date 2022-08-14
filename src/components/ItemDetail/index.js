import { VStack, Text, Heading, Image, Box} from "@chakra-ui/react"
import { ItemCount } from "../ItemCount"

const ItemDetail = ({listProduct}) => {


  return (
    <Box 
      as="article"
      w='3xl' 
      h='50%' 
      borderWidth='1px' 
      borderRadius='lg' 
      backdropBlur='10px' 
      bgColor='primary'
      color='black'>
        <Box p='4' display='flex' alignContent='center'>
            <Image src={listProduct.img} w='50%' borderRadius='lg'/>
            <VStack p={6}>
                <Heading as='h2' size='md'>{listProduct.name}</Heading>
                <Text>${listProduct.price}</Text>
                <Text>{listProduct.description}</Text>
                <ItemCount initial={listProduct.initial} stock={listProduct.stock} onAdd={() => {}}/>
            </VStack>
        </Box>
      
    </Box>
  )
}

export {ItemDetail}