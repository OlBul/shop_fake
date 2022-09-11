import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { omit } from 'lodash'
//import { count } from 'console'

export type ProductsInCartProps = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setproductsInCart] = useState<ProductsInCartProps>({
        1: 1,
        2: 1,
    })
    const addProductToCart = (id: number, count: number) => {
        setproductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setproductsInCart((prevState: ProductsInCartProps) =>
            omit(prevState, [id])
        )
    }

    const changeProductQuatity = (id: number, count: number) => {
        setproductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(2)}>Remove</button>
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuatity={changeProductQuatity}
            />
        </>
    )
}

export default App
