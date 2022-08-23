import { useState } from "react";
import { HStack,VStack, Button, Text} from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial)

  const increase = () => count < stock && setCount(count + 1)
  const decrease = () => count > initial && setCount(count - 1)
  const confirm = () => {
    onAdd(count)
  }

  return (
    <VStack>
      <HStack spacing={8}>
        <Button  variant='third' onClick={decrease}>-</Button>
        <Text>{count}</Text>
        <Button  variant='third' onClick={increase}>+</Button>
      </HStack>
      <Button variant='third' onClick={confirm}>Agregar al carrito</Button>
    </VStack>
    
    
  )
}

export {ItemCount}