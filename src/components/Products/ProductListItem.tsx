import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
import './ProductListItem.scss'

export type ProductProps = {
    image: string
    id?: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = ({
    image,
    name,
    description,
    type,
    capacity,
    price,
}: ProductProps) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>('red')

    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)
    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)

    const toggleChangeColor = () =>
        setColor((prevState: string) => (prevState === 'red' ? 'green' : 'red'))

    return (
        <Card>
            <CardContent>
                <div className="product-image">
                    <img src={image} alt=""></img>
                </div>
                <h3 className={`product-title ${color}`}>{name}</h3>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">$ {price}</div>
                <div className="product-quantity">
                    <Button variant="contained" onClick={onDecrementClick}>
                        -
                    </Button>
                    <TextField size="small" value={count} variant="outlined" />
                    <Button variant="contained" onClick={onIncrementClick}>
                        +
                    </Button>
                </div>
                <p>Color: {color}</p>
                <button onClick={toggleChangeColor}>Change color</button>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="outlined"> Add to card </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
