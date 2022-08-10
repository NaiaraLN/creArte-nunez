import { Item } from "../Item";
import { Flex } from '@chakra-ui/react'

const ItemList = ({listProducts}) => {
  return (
    <Flex wrap='wrap' justify='center'>
        {listProducts.map(product => <Item key={product.id} product={product}/>)}
    </ Flex>
  )
}

export {ItemList}