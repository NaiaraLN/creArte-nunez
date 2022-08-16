import { VStack, Text, Heading, Image, Box, ScaleFade, Stack} from "@chakra-ui/react"
import { ItemCount } from "../ItemCount"

const ItemDetail = ({listProduct}) => {

  const isOpen = true

  return (
    <ScaleFade initialScale={0.8} in={isOpen}>
      <Box 
      as="article"
      w='90%' 
      h='50%' 
      borderWidth='1px' 
      borderRadius='lg' 
      backdropBlur='10px' 
      bgColor='primary'
      color='black'
      p={5} 
      display='flex' 
      alignContent='center'
      alignItems='center'
      boxShadow='6px 10px 16px 2px rgba(255,255,255,0.65)'>
        <Stack direction={['column','column','row','row']} alignItems='center'>
          <Image src={listProduct.img} w={['100%','100%','50%','50%']} borderRadius='lg'/>
            <VStack p={4} w={['100%','100%','50%','50%']}>
                <Heading as='h2' size='md'>{listProduct.name}</Heading>
                <Text >${listProduct.price}</Text>
                <Text align='center'>Descripción: {listProduct.description}</Text>
                <Text >Técnica: {listProduct.technique}</Text>
                <Text >Tamaño: {listProduct.size}</Text>
                <ItemCount initial={listProduct.initial} stock={listProduct.stock} onAdd={() => {}}/>
            </VStack>
        </Stack>
            
      </Box>
    </ScaleFade>
    
  )
}

export {ItemDetail}