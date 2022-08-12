import { ItemListContainer } from '../ItemListContainer'
// import { ItemDetailContainer } from '../ItemDetailContainer'
import { Box} from '@chakra-ui/react'
import background from '../../assets/bg.jpeg'

const Main = () => {
    return (
        <Box as='main' display='flex' minH='90vh' bgImage={background} bgSize='cover'>
            <ItemListContainer greeting='Bienvenidos a la plataforma para artistas y fanáticos del arte!' />
            {/* <ItemDetailContainer/> */}
        </Box>
    )
}

export { Main }