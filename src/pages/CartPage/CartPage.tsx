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
            <div>
                {' '}
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
        </div>
    )
}

export default CartPage
