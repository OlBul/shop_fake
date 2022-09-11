import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import React, { useState } from 'react'
import './ProductListItem.scss'

type ProductProps = {
    id: number
    image: string
    name: string
    description: string
    type: string
    capacity: number
    price: number
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    image,
    name,
    description,
    type,
    capacity,
    price,
    addProductToCart,
}: ProductProps) => {
    const [count, setCount] = useState<number>(1)

    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)
    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)

    return (
        <Card>
            <CardContent>
                <div className="product-image">
                    <img src={image} alt=""></img>
                </div>
                <h3 className="product-title">{name}</h3>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">$ {price}</div>
                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                />
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to card
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
