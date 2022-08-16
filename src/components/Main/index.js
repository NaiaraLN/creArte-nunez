import { ItemListContainer } from '../ItemListContainer'
import { ItemDetailContainer} from '../ItemDetailContainer'
import { Cart } from '../Cart'
import { Box} from '@chakra-ui/react'
import background from '../../assets/bg.jpeg'
import { Routes, Route } from "react-router-dom";

const Main = () => {

    return (
        <Box as='main' minH='90vh' bgImage={background} bgSize='cover'>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la plataforma para artistas y fanáticos del arte!'/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenidos a la plataforma para artistas y fanáticos del arte!'/>}/>
                <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            </Routes>
        </Box>
    )
}

export { Main }