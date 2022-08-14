import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from './Navbar'
import {Main} from './Main'
import {Footer} from './Footer'
import {CustomTheme} from '../styles/theme'
import {BrowserRouter} from 'react-router-dom'



function App() {
    return (
        <ChakraProvider theme={CustomTheme}>
            <BrowserRouter>
                <Navbar />
                <Main />
                <Footer/>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;