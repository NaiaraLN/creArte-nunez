import { useContext } from "react";
import { CartContext } from '../../context/CartContext'
import { VStack, Text, Heading, Image, Box, Stack, Button, Center} from "@chakra-ui/react"
import {FaTrashAlt} from "react-icons/fa"
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <Center>
            <VStack>
                {cart.map(prod => 
                    <Box 
                    key={prod.id}
                    as="article"
                    w='70%' 
                    h='50%' 
                    borderWidth='1px' 
                    borderRadius='lg' 
                    backdropFilter='blur(10px)' 
                    bgColor='primary'
                    color='black'
                    p={5} 
                    m={5}
                    display='flex' 
                    alignContent='center'
                    alignItems='center'
                    >
                        <Stack direction={['column','column','row','row']} alignItems='center' spacing={10}>
                            <Image src={prod.img} w={['60%', '60%', '30%', '30%']} alt={prod.name}/>
                            <VStack alignItems='center'>
                                <Heading as='h2' size='md'>{prod.name}</Heading>
                                <Text>Cantidad: {prod.quantity}</Text>
                                <Text>Precio unitario: ${prod.price}</Text>
                                <Text>Subtotal: ${prod.quantity*prod.price}</Text>
                            </VStack>
                            <Button colorScheme="red" size="sm" onClick={() => removeItem(prod.id)}><FaTrashAlt  size={25} color='white'/></Button>
                        </Stack>
                    </Box>
                )}
                {cart.length === 0?
                <>
                    <Text color='white'>Tu carrito está vacío</Text>
                    <Link to={'/'}>
                        <Button variant='secondary'>Ir a la tienda</Button>    
                    </Link>
                    
                </>
                :
                <>
                    <Text color="white">Total: ${totalPrice()}</Text>
                    <Box display='flex'>
                        <Button variant="secondary" onClick={emptyCart} m={3}>Vaciar carrito</Button>
                        <Button variant="secondary" m={3}>Check out</Button>
                    </Box>
                    
                </>
                }
                
            </VStack>
        </Center>
    )
}

export {Cart}