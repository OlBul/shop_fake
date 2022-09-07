import { Grid, CardContent, Card, Button } from '@mui/material'
import React from 'react'
import { Product } from 'components/Products/productsArray'
import { DeleteOutline } from '@mui/icons-material'

type Props = {
    productCount: number
    product: Product
}

const CartProductListItemExended = ({ productCount, product }: Props) => {
    return (
        <Grid item xs={12} sm={6}>
            <Card>
                <CardContent>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={product.image}
                            alt="phone"
                            style={{ width: '150px', height: 'auto' }}
                        />
                    </div>
                    <div>{product.name}</div>
                    <p>Price for one time: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Button variant="outlined">
                        <DeleteOutline />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExended
