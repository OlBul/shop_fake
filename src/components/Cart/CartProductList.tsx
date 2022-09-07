import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    getProductsObject,
    Product,
} from 'components/Products/productsArray'
import CartProductListItem from './CartProductListItem'

export type Props = {
    productsInCart: {
        [id: number]: number
    }
    ProductsObject?: {
        [id: number]: Product
    }
    CartItem?: any
}

const CartProductList = ({
    productsInCart,
    ProductsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}: Props) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={ProductsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                />
            ))}
        </div>
    )
}

export default CartProductList
