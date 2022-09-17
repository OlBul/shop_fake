import React from 'react'

import CartTotal from 'components/Cart/CartTotal'
//import { Props } from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { Grid } from '@mui/material'
import CartProductListItemExended from 'components/Cart/CartProductListItemExended'

export type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    changeProductQuatity: (id: number, count: number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuatity,
}: Props) => {
    return (
        <div style={{ padding: '30px 0' }}>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuatity={changeProductQuatity}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
