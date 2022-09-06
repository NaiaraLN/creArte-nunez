import { 
    Center,
    VStack, 
    HStack,
    Heading,   
    Button, 
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage} from "@chakra-ui/react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext";
import { db } from "../firebase";

const Checkout = () => {
    const [customer, setCustomer] = useState({
        name: '',
        lastname: '',
        email: '',
        repEmail: '',
        phoneNumber: ''
    })
    const {cart, totalPrice, emptyCart} = useContext(CartContext)
    const [submit, setSubmit] = useState(false)
    const isError = customer.email !== customer.repEmail
    
    const handlerChangeInput = (e) => {
            setCustomer({
                ...customer,
                [e.target.name]: e.target.value,
            })
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        const order = {
            items: cart,
            buyer: {...customer},
            price: totalPrice(),
            date: serverTimestamp()
        }
        const ordersColecction = collection(db, "orders")
        const consult = addDoc(ordersColecction, order)
        consult
        .then(res => {
            emptyCart()
            setSubmit(true)
            toast.success(`Su orden ${res.id} fue creada con éxito`) 
        })
        .catch(err => {
            toast.error("Error al guardar la orden de compra")
        })
    }    
    


    if ((cart.length === 0) && !submit) {
        
        return (
            <VStack>
                <Heading as='h1' color='white' size='lg'>No podés completar el formulario porque todavía no tenés nada en tu carrito </Heading>
                <Link to={'/'}>
                    <Button variant="secondary">Volver a la tienda</Button>
                </Link>
            </VStack>
        )
    }else if(submit) {
        return(
            <VStack>
                <Heading as='h1' color='white' size='lg'>Gracias por elegirnos!</Heading>
                <Link to={'/'}>
                    <Button variant="secondary">Volver a la tienda</Button>
                </Link>
            </VStack>
        )
    }

    return (
        <Center>
            <VStack 
            spacing={8} 
            justifyContent='center'
            w={['80%', '70%', '60%', '40%']} 
            h='auto' 
            borderWidth='1px' 
            borderRadius='lg' 
            backdropFilter='blur(10px)' 
            bgColor='primary'
            color='black'
            p={5} >
                <Heading as='h1' size='lg'>Complete sus datos</Heading>
                <Heading as='h2' size='md'>Para completar la compra ingrese sus datos:</Heading>
                    <FormControl 
                    as='form'
                    isRequired 
                    w={['90%', '80%', '70%', '70%']}
                    onSubmit={handlerSubmit}
                    isInvalid={isError}>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='text' placeholder="Nombre completo" mb={3} name='name' value={customer.name}
                        onChange={handlerChangeInput} />
                        <FormLabel>Apellido</FormLabel>
                        <Input type='text' placeholder="Apellido" mb={3} name='lastname' value={customer.lastname} 
                        onChange={handlerChangeInput} />
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder="email@email.com" mb={3} name='email' value={customer.email}
                        onChange={handlerChangeInput} />
                        <FormLabel>Repita su email</FormLabel>
                        <Input type='email' placeholder="email@email.com" mb={3} name='repEmail' value={customer.repEmail}
                        onChange={handlerChangeInput} />
                        {isError && <FormErrorMessage>El email debe ser igual</FormErrorMessage>} 
                        <FormLabel>Número de teléfono</FormLabel>
                        <Input type='tel' placeholder="1122334455" mb={3} name='phoneNumber' value={customer.phoneNumber} 
                        onChange={handlerChangeInput} />
                        <HStack spacing={4}>
                            <Link to={'/cart'}>
                                <Button variant='third'>Atrás</Button>
                            </Link>
                            <Button type="submit" variant='secondary' isDisabled={isError}>Confirmar Compra</Button>
                        </HStack>
                    </FormControl>  
            </VStack>
        </Center>
    )
}

export {Checkout}