import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    getProductsObject,
    Product,
} from 'components/Products/productsArray'

export type Props = {
    productsInCart: {
        [id: number]: number
    }
    ProductsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({
    productsInCart,
    ProductsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            Total{' '}
            {keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    ProductsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)],
                0
            )}{' '}
            $
        </div>
    )
}

export default CartTotal
