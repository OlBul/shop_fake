import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { Grid } from '@mui/material'
import CartProductListItemExended from 'components/Cart/CartProductListItemExended'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'

export type Props = {}

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div style={{ padding: '30px 0' }}>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to checkout</Link>
        </div>
    )
}

export default CartPage
