import { useState } from "react";
import { HStack,VStack, Button, Text, Input } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial)
  
  const increase = () => count < stock && setCount(count + 1)
  const decrease = () => count > initial && setCount(count - 1)

  return (
    <VStack>
      <HStack spacing={8}>
        <Button colorScheme='cyan' variant='outline' onClick={decrease}>-</Button>
        <Text>{count}</Text>
        <Button colorScheme='cyan' variant='outline' onClick={increase}>+</Button>
      </HStack>
      <Button colorScheme='cyan' variant='solid'>Agregar al carrito</Button>
    </VStack>
    
    
  )
}

export {ItemCount}