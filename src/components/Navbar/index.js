import { HStack, Spacer, Link } from "@chakra-ui/react"
import logo from '../../assets/logo.png'

const Navbar = () => {
    return(
        <HStack bg='black'>
            <img src={logo} alt="Logo de CreArte" width="200px" />
            <Spacer />
            <HStack>
                <Link p={4} color='white'>Ver todo</Link>
                <Link p={4} color='white'>Cuadros</Link>
                <Link p={4} color='white'>Prints</Link>
            </HStack>
        </HStack>
    )
}

export {Navbar}