import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

export type productsInCartProps = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setproductsInCart] = useState<productsInCartProps>({
        1: 1,
        2: 1,
    })
    const addProductToCart = (count: number, price: number) => {
        console.log('test')
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />

            <Main addProductToCart={addProductToCart} />
        </>
    )
}

export default App
