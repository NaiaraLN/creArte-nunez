import { createContext, useState } from "react";

export const CartContext = createContext([])

const {Provider} = CartContext

const MyProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }
    const addItem = (item, quantity) => {
        const newItem = {
            ...item,
            quantity
        }
        if(isInCart(newItem.id)){
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].quantity += quantity
            setCart(auxArray)
        }else{
            setCart([...cart, newItem])
            
        }
    }
    const emptyCart = () => {
        return setCart([])
    }
    const removeItem = (id) => {
        return setCart(cart.filter(prod => prod.id !==  id))
    }
    const getItemQty = () => {
        return cart.reduce((acc, product) => acc += product.quantity, 0)
    }
    const totalPrice = () => {
        return cart.reduce((acc, product) => acc += (product.quantity * product.price), 0)
    } 


    return <Provider value={{
        cart,
        isInCart,
        addItem,
        emptyCart,
        removeItem,
        getItemQty,
        totalPrice
    }}>
        {children}
    </Provider>
}

export default MyProvider