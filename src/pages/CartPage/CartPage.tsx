import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    getProductsObject,
    Product,
} from 'components/Products/productsArray'
import CartTotal from 'components/Cart/CartTotal'
import { Props } from 'components/Cart/CartTotal'

/* export type Props = {
    productsInCart: {
        [id: number]: number
    }
    ProductsObject?: {
        [id: number]: Product
    }
} */

const CartPage = ({
    productsInCart,
    ProductsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {ProductsObject[parseInt(productId)].name}:{' '}
                    {productsInCart[parseInt(productId)]}:{' '}
                    {ProductsObject[parseInt(productId)].price}
                </div>
            ))}
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
