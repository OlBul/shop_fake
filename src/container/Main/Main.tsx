import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import CartPage from 'pages/CartPage/CartPage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: { [id: number]: number }
}

const Main = ({ addProductToCart, productsInCart }: Props) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductList addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                </Routes>
            </Container>
        </>
    )
}

export default Main
