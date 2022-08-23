import { createContext, useState } from "react";

export const CartContext = createContext([])

const {Provider} = CartContext

const MyProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(prod = prod.id === id)
    }
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            const newCart = cart.map(prod => {
                if (prod.id === id){
                    const newQty = prod.quantity + quantity
                    return {...prod, quantity: newQty}
                }else{
                    return prod
                }
            })
            setCart(newCart)
        }else{
            const newProduct = {...item, quantity: quantity}
            setCart([...cart, newProduct])
        }
    }
    const emptyCart = () => {
        return setCart([])
    }
    const removeItem = (id) => {
        return setCart(cart.filter(prod => prod.id !== id))
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