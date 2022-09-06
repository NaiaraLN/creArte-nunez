import { VStack, Text, Heading, Image, Box, ScaleFade, Stack,Button} from "@chakra-ui/react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount"

const ItemDetail = ({listProduct}) => {

  const isOpen = true

  const [isAdded, setIsAdded] = useState(false)
  const {isInCart, addItem} = useCartContext()

  
  const onAdd = (count) =>{
    setIsAdded(true)
    isInCart(listProduct.id)
    addItem(listProduct, count)
  }


  return (
    <ScaleFade initialScale={0.8} in={isOpen}>
      <Box 
      as="article"
      w='100%' 
      h='50%' 
      borderWidth='1px' 
      borderRadius='lg' 
      backdropFilter='blur(10px)' 
      bgColor='primary'
      color='black'
      p={5} 
      display='flex' 
      alignContent='center'
      alignItems='center' 
      >
        <Stack direction={['column','column','row','row']} alignItems='center'>
          <Image src={listProduct.img} alt={listProduct.name} w={['100%','100%','50%','50%']} borderRadius='lg'/>
            <VStack p={4} w={['100%','100%','50%','50%']}>
                <Heading as='h2' size='md'>{listProduct.name}</Heading>
                <Text >${listProduct.price}</Text>
                <Text align='center'>Descripción: {listProduct.description}</Text>
                <Text >Técnica: {listProduct.technique}</Text>
                <Text >Tamaño: {listProduct.size}</Text>
                {isAdded? 
                <NavLink to='/cart'>
                  <Button variant='third'>Ir al carrito</Button>
                </NavLink> :
                <ItemCount initial={listProduct.initial} stock={listProduct.stock} onAdd={onAdd}/>}
            </VStack>
        </Stack>
            
      </Box>
    </ScaleFade>
    
  )
}

export {ItemDetail}