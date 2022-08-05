import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from './Navbar'
import {Main} from './Main'


function App() {
    return (
        <ChakraProvider>
            <Navbar />
            <Main />
        </ChakraProvider>
    )
}

export default App;