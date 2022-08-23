import { useContext } from "react";
import { CartContext } from '../../context/CartContext'
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@chakra-ui/react";

const CartWidget = () => {

    const {getItemQty} = useContext(CartContext)

    return(
        <>
            <Badge color='third'>{getItemQty()}</Badge>
            <FaShoppingCart  size={25} color='white'/>
        </>
        
    )
}

export {CartWidget}