import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    getProductsObject,
    Product,
} from 'components/Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    ProductsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    ProductsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {ProductsObject[parseInt(productId)].name}:{' '}
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
