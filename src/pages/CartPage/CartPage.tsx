import React from 'react'

import CartTotal from 'components/Cart/CartTotal'
//import { Props } from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'

export type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
