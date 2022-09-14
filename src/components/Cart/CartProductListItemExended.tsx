import { Grid, CardContent, Card, Button } from '@mui/material'
import React from 'react'
import { Product } from 'components/Products/productsArray'
import { DeleteOutline } from '@mui/icons-material'
import Quantity from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
    changeProductQuatity: (id: number, count: number) => void
}

const CartProductListItemExended = ({
    productCount,
    product,
    removeProductFromCart,
    changeProductQuatity,
}: Props) => {
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )
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
                    <div>
                        <Button variant="outlined">
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button>
                    </div>
                    <div>{product.name}</div>
                    <p>Price for one time: {product.price}$</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuatity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrementClick={() =>
                            changeProductQuatity(product.id, productCount + 1)
                        }
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteOutline />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExended
