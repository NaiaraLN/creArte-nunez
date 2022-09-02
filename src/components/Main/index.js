import { ItemListContainer } from '../ItemListContainer'
import { ItemDetailContainer} from '../ItemDetailContainer'
import { Cart } from '../Cart'
import { Box} from '@chakra-ui/react'
import fondo from '../../assets/background2.jpeg'
import { Routes, Route } from "react-router-dom";
import { Checkout } from '../Chekout'

const Main = () => {

    return (
        <Box as='main' minH='90vh' bgImage={fondo} bgSize='cover'>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='CreArte, donde la creatividad fluye!'/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/category/:category' element={<ItemListContainer greeting='CreArte donde la creatividad fluye!'/>}/>
                <Route path='/product/:id' element={<ItemDetailContainer/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </Box>
    )
}

export { Main }