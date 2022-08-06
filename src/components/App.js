import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from './Navbar'
import {Main} from './Main'
// import { ItemListContainer } from './ItemListContainer'


function App() {
    return (
        <ChakraProvider>
            <Navbar />
            <Main />
            {/* <ItemListContainer greeting='Bienvenidos a la plataforma para artistas y fanáticos del arte!' /> */}
        </ChakraProvider>
    )
}

export default App;