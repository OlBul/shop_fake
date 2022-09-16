import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'
import CartPage from 'pages/CartPage/CartPage'
import { Routes, Route } from 'react-router-dom'

type Props = {}

const Main = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductList />
                                <Reviews />
                            </>
                        }
                    />
                    <Route path="cart" element={<CartPage />} />
                </Routes>
            </Container>
        </>
    )
}

export default Main
