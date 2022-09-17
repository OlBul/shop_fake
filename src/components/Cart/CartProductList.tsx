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
    removeProductFromCart?: (id: number) => void
    changeProductQuatity?: (id: number, count: number) => void
}

const CartProductList = ({
    productsInCart,
    ProductsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuatity,
}: Props) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={ProductsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuatity={changeProductQuatity}
                />
            ))}
        </>
    )
}

export default CartProductList