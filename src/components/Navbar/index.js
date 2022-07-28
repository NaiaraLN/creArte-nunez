import { HStack, Spacer, Link } from "@chakra-ui/react"
import logo from '../../assets/logo.png'
import { CartWidget } from "../CartWidget"

const Navbar = () => {
    return(
        <HStack as='nav' bg='rgba(0,0,0,0.95)' backdropFilter='blur(10px)' border='1px' borderColor='rgba(0,0,0, 0.18)' pos='sticky'>
            <img src={logo} alt="Logo de CreArte" width="200px" />
            <Spacer />
            <HStack>
                <CartWidget />
                <Link p={4} color='white'>Ver todo</Link>
                <Link p={4} color='white'>Cuadros</Link>
                <Link p={4} color='white'>Prints</Link>
            </HStack>
        </HStack>
    )
}

export {Navbar}