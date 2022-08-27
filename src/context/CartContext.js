import { createContext, useState } from "react";

export const CartContext = createContext([])

const {Provider} = CartContext

const MyProvider = ({children}) => {

    const [cart, setCart] = useState([])
    //const [totalPrice, setTotalPrice] = useState(0)

    console.log(cart)
    const isInCart = (id) => {
        return cart.find(prod => prod.id === parseInt(id))
    }
    const addItem = (item, quantity) => {
        console.log(item)
        console.log(quantity);
        const newItem = {
            ...item,
            quantity
        }
        if(isInCart(newItem.id)){
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].quantity += quantity
            console.log(auxArray)
            setCart(auxArray)
        }else{
            setCart([...cart, newItem])
        }
    }
    const emptyCart = () => {
        return setCart([])
    }
    const removeItem = (id) => {
        console.log(id)
        return setCart(cart.filter(prod => prod.id !== parseInt(id)))
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