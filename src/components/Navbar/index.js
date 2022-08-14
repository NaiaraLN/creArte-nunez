import { HStack, Spacer, Link } from "@chakra-ui/react"
import logo from '../../assets/logo.png'
import { CartWidget } from "../CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
        <HStack as='nav' bg='black' pos='sticky'>
            <NavLink to='/'>
                <img src={logo} alt="Logo de CreArte" width="200px" />
            </NavLink>
            <Spacer />
            <HStack>
                <NavLink to='/cart'>
                    <CartWidget />
                </NavLink>
                
                <NavLink to='/'>
                    <Link p={4} color='white'>Ver todo</Link>
                </NavLink>
                <NavLink to='/category/cuadros'>
                    <Link p={4} color='white'>Cuadros</Link>
                </NavLink>
                <NavLink to='/category/prints'>
                    <Link p={4} color='white'>Prints</Link>
                </NavLink>
            </HStack>
        </HStack>
    )
}

export {Navbar}