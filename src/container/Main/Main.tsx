import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'
import CartPage from 'pages/CartPage/CartPage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

type Props = {
    productsInCart: { [id: number]: number }
    addProductToCart: (id: number, count: number) => void
    removeProductFromCart: (id: number) => void
    changeProductQuatity: (id: number, count: number) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuatity,
}: Props) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductList
                                    addProductToCart={addProductToCart}
                                />
                                <Reviews />
                            </>
                        }
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                removeProductFromCart={removeProductFromCart}
                                productsInCart={productsInCart}
                                changeProductQuatity={changeProductQuatity}
                            />
                        }
                    />
                </Routes>
            </Container>
        </>
    )
}

export default Main
