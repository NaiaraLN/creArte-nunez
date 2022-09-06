import { useCartContext} from '../../context/CartContext'
import { FaShoppingCart } from "react-icons/fa";
import { Text, Flex } from "@chakra-ui/react";

const CartWidget = () => {

    const {getItemQty} = useCartContext()

    return(
        <Flex>
            <Text color='white' fontWeight='500'>{getItemQty()}</Text>
            <FaShoppingCart  size={25} color='white'/>
        </Flex>
        
    )
}

export {CartWidget}