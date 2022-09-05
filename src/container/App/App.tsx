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
    const addProductToCart = (id: number, count: number) => {
        setproductsInCart((prevState: productsInCartProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            {/* <button onClick={() => addProductToCart(2, 5)}>Add to cart</button> */}
            <Main addProductToCart={addProductToCart} />
        </>
    )
}

export default App
