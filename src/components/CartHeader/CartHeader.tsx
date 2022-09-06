import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import { Props } from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader
