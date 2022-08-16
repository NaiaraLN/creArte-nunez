import { HStack, VStack, Spacer, Link, StackDivider, Flex} from "@chakra-ui/react"
import logo from '../../assets/logo.png'
import { CartWidget } from "../CartWidget"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { useState } from "react";

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
                <NavLink to='/'>
                    <Link p={4} color='white'>Ver todo</Link>
                </NavLink>
                <NavLink to='/category/cuadros'>
                    <Link p={4} color='white'>Cuadros</Link>
                </NavLink>
                <NavLink to='/category/prints'>
                    <Link p={4} color='white'>Prints</Link>
                </NavLink>
            </VStack>
            </Flex>
    }

    return(
        <HStack as='nav' bg='black' pos='sticky' wrap='wrap' justify='space-between' p={1}>
            <NavLink to='/'>
                <img src={logo} alt="Logo de CreArte" width='200px' />
            </NavLink>
            <Spacer />
            <HStack>
                <NavLink to='/cart'>
                    <CartWidget />
                </NavLink>
                <Flex display={['none','none','none','flex','flex']}>
                    <NavLink to='/'>
                        <Link p={4} color='white'>Ver todo</Link>
                    </NavLink>
                    <NavLink to='/category/cuadros'>
                        <Link p={4} color='white'>Cuadros</Link>
                    </NavLink>
                    <NavLink to='/category/prints'>
                        <Link p={4} color='white'>Prints</Link>
                    </NavLink>
                </Flex>
                    
                <Flex display={['flex','flex','flex','none','none']}>
                    <Spacer />
                    <FaBars color="white" size={25} onClick={() => setShowMenu(!showMenu)}/>
                </Flex>
            </HStack>
            {menu}
        </HStack>
    )
}

export {Navbar}