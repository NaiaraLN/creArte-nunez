import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from './Navbar'
import {Main} from './Main'
import {Footer} from './Footer'
import {CustomTheme} from '../styles/theme'



function App() {
    return (
        <ChakraProvider theme={CustomTheme}>
            <Navbar />
            <Main />
            <Footer/>
        </ChakraProvider>
    )
}

export default App;