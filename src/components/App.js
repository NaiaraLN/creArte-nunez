import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from './Navbar'
import {Main} from './Main'
import {Footer} from './Footer'
import {CustomTheme} from '../styles/theme'
import {BrowserRouter} from 'react-router-dom'
import MyProvider from '../context/CartContext'



function App() {
    return (
        <ChakraProvider theme={CustomTheme}>
            <BrowserRouter>
                <MyProvider>
                    <Navbar />
                    <Main />
                    <Footer/>
                </MyProvider>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;