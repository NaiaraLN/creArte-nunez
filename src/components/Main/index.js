import { ItemListContainer } from '../ItemListContainer'
import { ItemDetailContainer } from '../ItemDetailContainer'

const Main = () => {
    return (
        <main>
            <ItemListContainer greeting='Bienvenidos a la plataforma para artistas y fanáticos del arte!' />
            <ItemDetailContainer/>
        </main>
    )
}

export { Main }