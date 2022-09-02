import { 
    Center,
    VStack, 
    HStack,
    Heading,   
    Button, 
    FormControl,
    FormLabel,
    Input} from "@chakra-ui/react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext";
import { db } from "../firebase";

const Checkout = () => {
    const [customer, setCustomer] = useState({
        name: '',
        lastname: '',
        email: '',
        phoneNumber: ''
    })
    const {cart, totalPrice, emptyCart} = useContext(CartContext)
    const navigate = useNavigate()

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
            navigate('/')
            toast.success(`Su orden ${res.id} fue creada con éxito`) 
        })
        .catch(err => {
            toast.error("Error al guardar la orden de compra")
        })

        
    }

    if (cart.length === 0) {
        setTimeout(() => {
            navigate('/')
        }, 3000)

        return (
            <VStack>
                <Heading as='h1' color='white' size='lg'>No podés completar el formulario porque todavía no tenés nada en tu carrito </Heading>
                <Heading as='h2' color='white' size='md'>Vas a ser redirigido a la Home en 3 segundos...</Heading>
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
                    onSubmit={handlerSubmit}>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='text' placeholder="Nombre completo" mb={3} name='name' value={customer.name}
                        onChange={handlerChangeInput}></Input>
                        <FormLabel>Apellido</FormLabel>
                        <Input type='text' placeholder="Apellido" mb={3} name='lastname' value={customer.lastname} 
                        onChange={handlerChangeInput}></Input>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder="email@email.com" mb={3} name='email' value={customer.email}
                        onChange={handlerChangeInput}></Input>
                        <FormLabel>Repita su email</FormLabel>
                        <Input type='email' placeholder="email@email.com" mb={3} name='email' value={customer.email} 
                        onChange={handlerChangeInput}></Input>
                        <FormLabel>Número de teléfono</FormLabel>
                        <Input type='tel' placeholder="1122334455" mb={3} name='phoneNumber' value={customer.phoneNumber} 
                        onChange={handlerChangeInput}></Input>
                        <HStack spacing={4}>
                            <Link to={'/cart'}>
                                <Button variant='third'>Atrás</Button>
                            </Link>
                            <Button type="submit" variant='secondary'>Confirmar Compra</Button>
                        </HStack>
                    </FormControl>  
            </VStack>
        </Center>
    )
}

export {Checkout}