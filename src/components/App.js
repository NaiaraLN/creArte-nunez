import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from './Navbar'
import {ItemListContainer} from './ItemListContainer'


function App() {
    return (
        <ChakraProvider>
            <Navbar />
            <ItemListContainer greeting='Bienvenidos a la plataforma para artistas y fanáticos del arte!'/>
        </ChakraProvider>
    )
}

export default App;