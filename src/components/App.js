import { ChakraProvider } from '@chakra-ui/react'
import {Navbar} from './Navbar'
import {Main} from './Main'
import {Footer} from './Footer'
import {CustomTheme} from '../styles/theme'
import {BrowserRouter} from 'react-router-dom'
import MyProvider from '../context/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
    return (
        <ChakraProvider theme={CustomTheme}>
            <BrowserRouter>
                <MyProvider>
                    <Navbar />
                    <Main />
                    <Footer/>
                    <ToastContainer/>
                </MyProvider>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;