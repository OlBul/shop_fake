import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { Button } from '@mui/material'

export type CartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 0,
        totalPrice: 0,
    })
    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState: CardDataProps) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Button onClick={() => addProductToCart(1, 100)}>
                add to Cart
            </Button>
            <Main />
        </>
    )
}

export default App
