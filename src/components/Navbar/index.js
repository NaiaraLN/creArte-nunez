import { HStack, VStack, Spacer, StackDivider, Flex} from "@chakra-ui/react"
import logo from '../../assets/logo.png'
import { CartWidget } from "../CartWidget"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import '../../styles/Navbar.css'
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    let menu

    if (showMenu) {
        menu = 
            <Flex basis='100%' grow='1' justify='center'>
            <VStack 
            w='50vw'
            divider={<StackDivider borderColor='gray.200'/>}
            spacing={4}>
                <NavLink to='/' className="navLink">Ver todo</NavLink>
                <NavLink to='/category/cuadros' className="navLink">Cuadros</NavLink>
                <NavLink to='/category/prints' className="navLink">Prints</NavLink>
            </VStack>
            </Flex>
    }

    return(
        <HStack as='nav' bg='black' pos='sticky' wrap='wrap' justify='space-between' p={1}>
            <NavLink to='/'>
                <img src={logo} alt="Logo de CreArte" width='200px' />
            </NavLink>
            <Spacer />
                <NavLink to='/cart'>
                    <CartWidget />
                </NavLink>
                <Flex display={['none','none','none','flex','flex']}>
                    <NavLink to='/' className="navLink">Ver todo</NavLink>
                    <NavLink to='/category/cuadros' className="navLink">Cuadros</NavLink>
                    <NavLink to='/category/prints' className="navLink">Prints</NavLink>
                </Flex>
                <Flex display={['flex','flex','flex','none','none']}>
                    <Spacer />
                    <FaBars color="white" size={25} onClick={() => setShowMenu(!showMenu)}/>
                </Flex>
            {menu}
        </HStack>
    )
}

export {Navbar}